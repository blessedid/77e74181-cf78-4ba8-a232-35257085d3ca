import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import * as grpcWeb from 'grpc-web';
import { ChartServiceClient } from '../grpc/SittelleServiceChartServiceClientPb';
import {ChartMonObjectListStateRequest, ChartMonObjectListStateRes} from '../grpc/SittelleServiceChart_pb';
import { Observable, BehaviorSubject } from 'rxjs';
import { StatusListService } from './status-list.service';

@Injectable({
  providedIn: 'root'
})
export class ChartMonObjectListStateService {

  private readonly ChartServiceClient: ChartServiceClient;
  statusList = null;

  constructor(private Grpc: GrpcService, private authService: AuthService, private statusListService: StatusListService) {
    if (!this.ChartServiceClient) {
      this.ChartServiceClient = Grpc.ChartServiceClient;
    }

    this.statusListService.get().subscribe(status => {
      // console.log(status);
      this.statusList = status;
    });
  }

  public get(statusIds) {
    const sess = this.authService.getSess();
    const req = new ChartMonObjectListStateRequest();
    // const req = new ExternalStatusCreateListByRootTypeListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setTaskTypeInd(11);

    return new Observable(observer => {
      this.ChartServiceClient.chartMonObjectListState(req, null, (err: grpcWeb.Error, response: ChartMonObjectListStateRes) => {
        // console.log(response.toObject(), err);

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        setTimeout(() => {
          const result = {
            series: this.getData(data.seriesValueListList, statusIds),
            color: this.getColor(statusIds)
          };

          observer.next(result);
        }, 1000);

      });
    });
  }

  private getData(d, c) {
    const result = [];
    d.forEach(e => {
      const r = {
        name: e.caption,
        series: []
      };
      e.valueListList.forEach(i => {
        if (c.indexOf(i.x) !== -1) {
          r.series.push({
            name: this.statusList[i.x].caption,
            value: i.y
          });
        }
      });
      result.push(r);
    });
    return result;
  }

  private getColor(statusIds) {
    const result = [];
    statusIds.forEach(id => {
      result.push(this.statusList[id].colorBackground);
    });
    return result;
  }
}
