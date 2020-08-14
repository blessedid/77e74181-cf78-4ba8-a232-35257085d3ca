import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import { TaskStatusChangeService } from './task-status-change.service';
import {ExternalPanelStatusTemplateListListRes, ExternalPanelStatusTemplateListRequest} from '../grpc/SittelleServiceClient_pb';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import * as grpcWeb from 'grpc-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelStatusTemplateListService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService, private taskStatusChangeService: TaskStatusChangeService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  public get(panelInd) {
    const sess = this.authService.getSess();
    const req = new ExternalPanelStatusTemplateListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setPanelInd(panelInd);

    return new Observable(observer => {
      this.ClientServiceClient.externalPanelStatusTemplateList(req, null, (err: grpcWeb.Error, response: ExternalPanelStatusTemplateListListRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        observer.next(data.statusListList);

      });
    });
  }
}
