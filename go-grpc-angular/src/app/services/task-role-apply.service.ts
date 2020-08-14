import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import {ExternalTaskRoleApplyRequest, ExternalTaskRoleApplyRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';
import {TaskRoleInput} from '../grpc/SittelleTypeTask_pb';

@Injectable({
  providedIn: 'root'
})
export class TaskRoleApplyService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  change(taskInd, role) {
    const sess = this.authService.getSess();
    const applyList = [];

    role.applyList.forEach(e => {
      applyList.push(e.id);
    });

    const taskRoleInput = new TaskRoleInput();
    taskRoleInput.setRoleind(role.ind);
    taskRoleInput.setAccountGroupListList(applyList);

    const req = new ExternalTaskRoleApplyRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setRole(taskRoleInput);
    req.setTaskInd(taskInd);

    return new Observable(observer => {
      this.ClientServiceClient.externalTaskRoleApply(req, null, (err: grpcWeb.Error, response: ExternalTaskRoleApplyRes) => {
        // console.log(response.toObject(), err);

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        observer.next(data);
      });
    });
  }
}
