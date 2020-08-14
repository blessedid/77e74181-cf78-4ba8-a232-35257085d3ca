import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import * as grpcWeb from 'grpc-web';
import {ReportClient} from "../grpc/SittelleServiceReportServiceClientPb";
import {Observable} from 'rxjs';
import {GeneratedReportRequest, GeneratedReportRes} from "../grpc/SittelleServiceReport_pb";
import {ManualValue} from "../grpc/SittelleTypeManual_pb";

@Injectable({
  providedIn: 'root'
})
export class GetGeneratedReportService {

  private readonly ReportServiceClient: ReportClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ReportServiceClient) {
      this.ReportServiceClient = Grpc.ReportServiceClient;
    }
  }

  get(reportInd, data) {
    const paramList = [];
    data.forEach(e => {
      let param = new ManualValue();
      let value = (e.paramType === 2 && e.valueDf != 0) ? Math.floor(e.valueDf.getTime() / 1000) * 1000 : e.valueDf;
      param.setParamInd(e.ind);
      param.setValue(value.toString());
      paramList.push(param);
    });

    const sess = this.authService.getSess();
    const req = new GeneratedReportRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setReportInd(reportInd);
    req.setParamListList(paramList);
    // console.log(req.toObject());

    return new Observable(observer => {
      this.ReportServiceClient.getGeneratedReport(req, null, (err: grpcWeb.Error, response: GeneratedReportRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        observer.next(data);

      });
    });
  }
}
