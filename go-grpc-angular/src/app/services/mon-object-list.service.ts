import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import * as grpcWeb from 'grpc-web';
import {DictionaryClient} from '../grpc/SittelleServiceDictionaryServiceClientPb';
import {Observable} from 'rxjs';
import {DictMonObjectInfoListRequest, DictMonObjectInfoListRes} from '../grpc/SittelleServiceDictionary_pb';

@Injectable({
  providedIn: 'root'
})
export class MonObjectListService {

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.DictionaryServiceClient) {
      this.DictionaryServiceClient = Grpc.DictionaryServiceClient;
    }
  }

  private readonly DictionaryServiceClient: DictionaryClient;
  private items = [];

  public get() {
    const sess = this.authService.getSess();
    const req = new DictMonObjectInfoListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);

    return new Observable(observer => {
      if (this.items.length > 0) {
        observer.next(this.items);
        return;
      }
      this.DictionaryServiceClient.dictMonObjectList(req, null, (err: grpcWeb.Error, response: DictMonObjectInfoListRes) => {
        // console.log(response.toObject(), err);
        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        // this.items = data.monObjectListList;
        // observer.next(data.monObjectListList);
        const result = [];
        data.monObjectListList.forEach(e => {
          result.push({ind: e.monObjectInd, caption: e.caption});
        });
        observer.next(result);
      });
    });
  }
}
