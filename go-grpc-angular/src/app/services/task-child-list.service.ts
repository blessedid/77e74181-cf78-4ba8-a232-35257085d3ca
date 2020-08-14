import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import { ExternalPanelTaskChildListRequest, ExternalPanelTaskChildListRes } from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';
import { TaskTreeNodeInterface } from '../interfaces/task-tree-node-interface';
import { StatusListService } from './status-list.service';
import { MonObjectListService } from './mon-object-list.service';
import { EnumStatsAggregate } from '../grpc/SittelleConst_pb';

@Injectable({
  providedIn: 'root'
})
export class TaskChildListService {

  private readonly ClientServiceClient: ClientServiceClient;
  private taskStatusList = null;
  private monObject = null;
  private aggregate = EnumStatsAggregate;

  constructor(private Grpc: GrpcService, private authService: AuthService, private statusList: StatusListService,
              private monObjectList: MonObjectListService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
    statusList.get().subscribe(taskStatusList => {
      // console.log(taskStatusList);
      this.taskStatusList = taskStatusList;
    });
    monObjectList.get().subscribe(monObject => {
      // console.log(monObject);
      this.monObject = monObject;
    });
  }

  get(taskInd, panelInd): any {
    const sess = this.authService.getSess();
    // const req = new ExternalTaskChildListRequest();
    const req = new ExternalPanelTaskChildListRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setTaskInd(taskInd);
    req.setPanelInd(panelInd);

    return new Observable(observer => {
      this.ClientServiceClient.externalPanelTaskChildList(req, null, (err: grpcWeb.Error, response: ExternalPanelTaskChildListRes) => {
        // console.log(response.toObject(), err);

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }
        const data = response.toObject();
        // console.log(data);
        const result = [];
        data.taskListList.map((e) => {
          const monObject = [];
          this.monObject.forEach(m => {
            monObject[m.ind] = {id: m.id, caption: m.caption, address: m.address};
          });

          const aggregateList = [];
          e.statsAggregateListList.forEach(el => {
            aggregateList[el.ind] = {value: el.valueStats};
          });

          const aggregateStatus = (aggregateList[this.aggregate.STATS_AGGREAGATE_PRIORITY_STATUS_MAX] && aggregateList[this.aggregate.STATS_AGGREAGATE_PRIORITY_STATUS_MAX].value > 0) ?
              aggregateList[this.aggregate.STATS_AGGREAGATE_PRIORITY_STATUS_MAX].value : e.status.statusInd;

          const d: TaskTreeNodeInterface = {
            key: e.item.ind,
            name: e.content.caption,
            id: e.item.ind,
            expand: false,
            score: monObject[e.item.monObjectInd] || {id: null, caption: ''},
            firstDate: this.checkDate(aggregateList[this.aggregate.STATS_AGGREAGATE_DATE_CHANGE_MIN], e.dateStart),
            changeDate: this.checkDate(aggregateList[this.aggregate.STATS_AGGREAGATE_DATE_CHANGE_MIN], e.status.dateApply),
            status: (!this.taskStatusList[aggregateStatus].isGroup) ? this.taskStatusList[aggregateStatus].caption : '',
            statusColor: (this.taskStatusList[aggregateStatus]) ? this.taskStatusList[aggregateStatus].colorBackground : '#fff',
            executor: this.getExecutor(e.roleSettList),
            isGroup: (e.item.childIndListList.length > 0),
            statsStatusList: e.statsStatusListList,
            statsAggregateList: aggregateList
          };
          // console.log(e.roleList);
          result.push(d);
        });
        observer.next(result);
      });
    });
  }

  private getExecutor(roleList): any {
    let result = [];
    if (roleList.length > 0) {
      const executors = [];
      roleList.forEach((e) => {
        if (e.role.ind === 2) {
          e.accountGroupListApplyList.forEach(ex  => {
            executors.push({id: ex.ind, caption: ex.caption});
          });
        }
      });
      result = executors;
    }
    return result;
  }

  private checkDate(dateAggregate, dateD) {
    return (dateAggregate && dateAggregate.value > 0 && dateAggregate.value < 32503680000) ? new Date(dateAggregate.value) : dateD;
  }
}
