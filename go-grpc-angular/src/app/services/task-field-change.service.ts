import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import {ExternalTaskFieldChangeRequest, ExternalTaskFieldChangeRes} from '../grpc/SittelleServiceClient_pb';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import * as grpcWeb from 'grpc-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskFieldChangeService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  change(taskInd, fieldInd, value) {
    const sess = this.authService.getSess();

    const req = new ExternalTaskFieldChangeRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setFieldInd(fieldInd);
    req.setTaskInd(taskInd);
    req.setValue(value.toString());

    return new Observable(observer => {
      this.ClientServiceClient.externalTaskFieldChange(req, null, (err: grpcWeb.Error, response: ExternalTaskFieldChangeRes) => {
        console.log(response.toObject(), err);

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
