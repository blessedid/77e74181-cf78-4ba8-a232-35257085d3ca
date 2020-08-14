import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import { ExternalPanelListRequest, ExternalPanelListRes } from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import {ClientServiceClient} from '../grpc/SittelleServiceClientServiceClientPb';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelListService {
  private readonly ClientServiceClient: ClientServiceClient;
  public items = new BehaviorSubject([]);

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  get() {
    const req = new ExternalPanelListRequest();
    const sess = this.authService.getSess();
    req.setSessId(sess.sid);
    req.setConnectionInd(Number(sess.cid));

    return new Observable(observer => {
      this.ClientServiceClient.externalPanelList(req, null, (err: grpcWeb.Error, response: ExternalPanelListRes) => {
        // console.log(response.toObject(), err);
        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        const result: any = [];
        this.items.next(data.panelListList);

        data.panelListList.map(e => {
          result.push({
            caption: e.caption,
            panel: true,
            url: e.id.toLowerCase(),
            icon: e.imagePassiveFileName,
            iconActive: e.imageActiveFileName,
            disabled: false
          });
        });
        result.push(
          {caption: 'Предписания', panel: false, url: 'lol', icon: 'prescriptions.png', iconActive: 'prescriptions1.png', disabled: true},
          {caption: 'Отчеты', panel: false, url: 'reports', icon: 'reports.png', iconActive: 'reports1.png', disabled: false},
          {caption: 'Графики', panel: false, url: 'graphs', icon: 'graphs.png', iconActive: 'graphs1.png', disabled: false},
          {caption: 'Объекты', panel: false, url: 'objects0', icon: 'objects.png', iconActive: 'objects1.png', disabled: true},
          {caption: 'Справочник', panel: false, url: 'objects', icon: 'documents.png', iconActive: 'documents1.png', disabled: false}
        );

        observer.next(result);
      });
    });
  }
}
