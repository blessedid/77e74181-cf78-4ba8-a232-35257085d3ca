import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import { TaskManualChangeService } from './task-manual-change.service';
import {ExternalTaskManualRequestRequest, ExternalTaskManualRequestRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManualRequestService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  public get(statusInd, taskInd) {
    const sess = this.authService.getSess();
    const req = new ExternalTaskManualRequestRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setStatusInd(statusInd);
    req.setTaskInd(taskInd);

    return new Observable(observer => {
      this.ClientServiceClient.externalTaskManualRequest(req, null, (err: grpcWeb.Error, response: ExternalTaskManualRequestRes) => {
        // console.log(response.toObject(), err);

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        // const result = [];
        // console.log(data.taskManualRequestList);
        // data.taskManualRequestList.forEach(e => {
        //   let value = null;
        //   if (e.dependentListList.length > 0) {
        //     value = e.dependentListList;
        //   } else {
        //     value = e.valueListList;
        //   }
        //   result.push({
        //     id: e.ind,
        //     type: e.paramType,
        //     valueList: value,
        //     valueDefault: e.valueDf,
        //     parentParam: e.parentParamListList
        //   });
        // });
        // console.log(result);
        observer.next(data.taskManualRequestList);
      });
    });
  }
}
