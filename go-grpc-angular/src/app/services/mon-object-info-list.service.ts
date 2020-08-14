import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import * as grpcWeb from 'grpc-web';
import { Observable } from 'rxjs';
import {DictionaryClient} from "../grpc/SittelleServiceDictionaryServiceClientPb";
import {DictMonObjectInfoListRequest, DictMonObjectInfoListRes} from "../grpc/SittelleServiceDictionary_pb";

@Injectable({
  providedIn: 'root'
})
export class MonObjectInfoListService {

  private readonly DictionaryServiceClient: DictionaryClient;


  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.DictionaryServiceClient) {
      this.DictionaryServiceClient = Grpc.DictionaryServiceClient;
    }
  }

  public get() {
    const sess = this.authService.getSess();
    const req = new DictMonObjectInfoListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);

    return new Observable(observer => {
      this.DictionaryServiceClient.dictMonObjectInfoList(req, null, (err: grpcWeb.Error, response: DictMonObjectInfoListRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        console.log(data);
        observer.next(data.monObjectListList);
      });
    });
  }
}
