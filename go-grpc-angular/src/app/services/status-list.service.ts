import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import * as grpcWeb from 'grpc-web';
import {Observable} from 'rxjs';
import {DictionaryClient} from '../grpc/SittelleServiceDictionaryServiceClientPb';
import {DictStatusListRequest, DictStatusListRes} from '../grpc/SittelleServiceDictionary_pb';

@Injectable({
  providedIn: 'root'
})
export class StatusListService {

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.DictionaryClient) {
      this.DictionaryClient = Grpc.DictionaryServiceClient;
    }
  }

  private readonly DictionaryClient: DictionaryClient;
  private items = [];

  private static dec2hexString(dec) {
    return '#' + dec.toString(16).padStart(6, '0').toLowerCase();
  }

  public get() {
    const sess = this.authService.getSess();
    const req = new DictStatusListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);

    return new Observable(observer => {
      if (this.items.length) {
        observer.next(this.items);
        return;
      }
      this.DictionaryClient.dictStatusList(req, null, (err: grpcWeb.Error, response: DictStatusListRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        // console.log(data);
        const result = [];
        data.statusListList.forEach(e => {
          result[e.ind] = {
            ind: e.ind,
            colorBackground: StatusListService.dec2hexString(e.colorBackground),
            caption: e.captionStatus,
            isGroup: e.isGroup,
            taskTypeInd: e.taskTypeInd
          };
        });

        observer.next(result);
      });
    });
  }
}
