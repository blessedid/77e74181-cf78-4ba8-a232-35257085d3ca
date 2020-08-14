import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import {ExternalConnectionStatusRequest, ExternalConnectionStatusRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import {ClientServiceClient} from '../grpc/SittelleServiceClientServiceClientPb';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  get() {
    const sess = this.authService.getSess();
    const req = new ExternalConnectionStatusRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);

    return new Observable(observer => {
      this.ClientServiceClient.externalConnectionStatus(req, null, (err: grpcWeb.Error, response: ExternalConnectionStatusRes) => {

        if (err) {
          // this.authService.errorHandler(err);
          observer.next(false);
          return;
        }

        const data = response.toObject();
        observer.next(true);
      });
    });
  }
}
