import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import * as grpcWeb from 'grpc-web';
import {ReportClient} from "../grpc/SittelleServiceReportServiceClientPb";
import {Observable} from 'rxjs';
import {ReportParamsRequest, ReportParamsRes} from "../grpc/SittelleServiceReport_pb";

@Injectable({
  providedIn: 'root'
})
export class GetReportParamsService {

  private readonly ReportServiceClient: ReportClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ReportServiceClient) {
      this.ReportServiceClient = Grpc.ReportServiceClient;
    }
  }

  get(reportInd) {
    const sess = this.authService.getSess();
    const req = new ReportParamsRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setReportInd(reportInd);

    return new Observable(observer => {
      this.ReportServiceClient.getReportParams(req, null, (err: grpcWeb.Error, response: ReportParamsRes) => {
        // console.log(response.toObject(), err);

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        data.requestListList.map(el => {
          // @ts-ignore
          el.valueDf = (el.valueDf == -1) ? null : el.valueDf;
        });
        observer.next(data.requestListList);
      });
    });
  }
}
