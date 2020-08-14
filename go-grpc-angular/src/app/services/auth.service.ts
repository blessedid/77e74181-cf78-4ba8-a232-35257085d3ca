import {Inject, Injectable} from '@angular/core';
import { CookieService } from './cookie.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {ExternalConnectionCloseRequest, ExternalConnectionCloseRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import {GrpcService} from './grpc.service';
import {NzModalService} from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ClientServiceClient: ClientServiceClient;
  private showedError = false;

  constructor(private cookie: CookieService, @Inject(LOCAL_STORAGE) private storage: StorageService, private Grpc: GrpcService,
              private modalService: NzModalService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  public check() {
    return !!(this.cookie.get('sid') && this.cookie.get('cid'));
  }

  public getSess(): { sid: string; cid: string | number } {
    return {
      sid: this.cookie.get('sid') || '',
      cid: this.cookie.get('cid') || 0
    };
  }

  public setSess(data) {
    // console.log(data);
    this.cookie.set('sid', data.sessId);
    this.cookie.set('cid', data.connectionInd);
    this.storage.set('user', JSON.stringify(data.accountSettings));
    window.location.reload();
  }

  public deleteSess() {
    if (this.check()) {
      this.cookie.delete('sid');
      this.cookie.delete('cid');
      this.storage.clear();
      window.location.reload();
    }
  }

  public logout() {
    const sess = this.getSess();
    const req = new ExternalConnectionCloseRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);

    this.ClientServiceClient.externalConnectionClose(req, null, (err: grpcWeb.Error, response: ExternalConnectionCloseRes) => {
      console.log(response, err);
      this.deleteSess();
    });
  }

  private showError(err) {
    if (this.showedError) {
      return;
    }
    this.showedError = true;
    this.modalService.error({
      nzMask: false,
      nzClosable: false,
      nzTitle: `Error #${err.code}`,
      nzContent: `${err.message}`,
      nzOnOk: () => { this.showedError = false; }
    });
  }

  public errorHandler(err) {
    console.error(err);
    if (Number(err.code) === 16) {
      this.deleteSess();
    } else {
      this.showError(err);
    }
  }
}
