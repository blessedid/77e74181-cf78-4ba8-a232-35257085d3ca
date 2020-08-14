import { Injectable } from '@angular/core';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from "../grpc/SittelleServiceClientServiceClientPb";
import {Observable} from 'rxjs';
import {GrpcService} from "./grpc.service";
import {AuthService} from "./auth.service";
import {
  ExternalTaskStatusTemplatePossibleRequest,
  ExternalTaskStatusTemplatePossibleRes
} from "../grpc/SittelleServiceClient_pb";

@Injectable({
  providedIn: 'root'
})
export class TaskStatusTemplatePossibleService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  public get(taskInd = 1) {
    const sess = this.authService.getSess();
    const req = new ExternalTaskStatusTemplatePossibleRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setTaskInd(taskInd);

    this.ClientServiceClient.externalTaskStatusTemplatePossible(req, null, (err: grpcWeb.Error, response: ExternalTaskStatusTemplatePossibleRes) => {
      console.log(response.toObject(), err);
    });
  }
}
