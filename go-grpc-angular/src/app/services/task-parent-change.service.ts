import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import {ExternalTaskParentChangeRequest, ExternalTaskParentChangeRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskParentChangeService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  change(parentInd = 1, taskIndList) {
    const sess = this.authService.getSess();
    const req = new ExternalTaskParentChangeRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setParentTaskInd(parentInd);
    req.setChildTaskIndListList(taskIndList);
    // debugger;

    this.ClientServiceClient.externalTaskParentChange(req, null, (err: grpcWeb.Error, response: ExternalTaskParentChangeRes) => {

      if (err) {
        this.authService.errorHandler(err);
        // observer.next([]);
        return;
      }

      console.log(response.toObject());

    });
  }
}
