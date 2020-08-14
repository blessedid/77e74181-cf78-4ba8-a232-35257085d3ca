import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import * as grpcWeb from 'grpc-web';
import {DictionaryClient} from '../grpc/SittelleServiceDictionaryServiceClientPb';
import {Observable} from 'rxjs';
import {RoleInfoListRequest, RoleInfoListRes} from '../grpc/SittelleServiceDictionary_pb';

@Injectable({
  providedIn: 'root'
})
export class RoleInfoListService {

  private readonly DictionaryServiceClient: DictionaryClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.DictionaryServiceClient) {
      this.DictionaryServiceClient = Grpc.DictionaryServiceClient;
    }
  }

  public get() {
    const sess = this.authService.getSess();
    const req = new RoleInfoListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);

    return new Observable(observer => {
      this.DictionaryServiceClient.roleInfoList(req, null, (err: grpcWeb.Error, response: RoleInfoListRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        const result = [];
        data.listList.forEach(e => {
          result[e.ind] = e;
        });
        observer.next(result);
      });
    });
  }
}
