import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import {ExternalStatusCreateListByRootTypeListRequest, ExternalStatusCreateListByRootTypeListRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusCreateListService {
  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  public get(rootType: number[]) {
    const sess = this.authService.getSess();
    const req = new ExternalStatusCreateListByRootTypeListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setRootTypeListList(rootType);

    return new Observable(observer => {
      this.ClientServiceClient.externalStatusCreateListByRootTypeList(req, null,
        (err: grpcWeb.Error, response: ExternalStatusCreateListByRootTypeListRes) => {
          // console.log(response.toObject(), err);

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
