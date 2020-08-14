import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import {ExternalTaskManualChangeRequest, ExternalTaskManualChangeRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';
import { ManualValue } from '../grpc/SittelleTypeManual_pb';

@Injectable({
  providedIn: 'root'
})
export class TaskManualChangeService {

  private readonly ClientServiceClient: ClientServiceClient;
  private manualField = [];

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  public change(taskInd) {
    const sess = this.authService.getSess();

    const req = new ExternalTaskManualChangeRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setTaskInd(taskInd);
    req.setParamListList(this.getManualValue());

    this.ClientServiceClient.externalTaskManualChange(req, null, (err: grpcWeb.Error, response: ExternalTaskManualChangeRes) => {
      console.log(response.toObject(), err);

      if (err) {
        this.authService.errorHandler(err);
        return;
      }
    });
  }

  private getManualValue() {
    const result = [];
    this.manualField.forEach(e => {
      const manualValue = new ManualValue();
      manualValue.setValue(e.valueDf);
      manualValue.setParamInd(e.ind);
      // manualValue.setParamCaption(e.caption);
      manualValue.setCaption(e.valueListList.find(item => item.value === e.valueDf).caption || '');

      result.push(manualValue);
    });
    return result;
  }

  public setManualField(data) {
    this.manualField = data;
  }
}
