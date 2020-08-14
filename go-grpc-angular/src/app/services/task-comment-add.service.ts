import { Injectable } from '@angular/core';
import {ExternalTaskCommentAddRequest, ExternalTaskCommentAddRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import {ClientServiceClient} from '../grpc/SittelleServiceClientServiceClientPb';
import {Observable} from 'rxjs';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import {TaskComment} from '../grpc/SittelleTypeTask_pb';
import {EnumTextFromat} from '../grpc/SittelleConst_pb';

@Injectable({
  providedIn: 'root'
})
export class TaskCommentAddService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  add(taskInd= 7861, taskComment = '123') {
    const sess = this.authService.getSess();
    const req = new ExternalTaskCommentAddRequest();
    const comment = new TaskComment();

    comment.setTextFormat(EnumTextFromat.TEXT_FORMAT_HTML);
    comment.setTaskInd(taskInd);
    comment.setText(taskComment);

    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setTaskComment(comment);
    req.setTaskInd(taskInd);

    this.ClientServiceClient.externalTaskCommentAdd(req, null, (err: grpcWeb.Error, response: ExternalTaskCommentAddRes) => {
      console.log(response, err);

      if (err) {
        this.authService.errorHandler(err);
        return;
      }
    });
  }

}
