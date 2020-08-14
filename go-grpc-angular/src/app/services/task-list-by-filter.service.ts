import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import {ExternalTaskListByFilterRequest, ExternalTaskListByFilterRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';
import {TaskRequestFilter} from "../grpc/SittelleTypeTask_pb";
import {TaskTreeNodeInterface} from "../interfaces/task-tree-node-interface";
import {StatusListService} from "./status-list.service";
import {MonObjectListService} from "./mon-object-list.service";
import { EnumStatsAggregate } from '../grpc/SittelleConst_pb';

@Injectable({
  providedIn: 'root'
})
export class TaskListByFilterService {

  private readonly ClientServiceClient: ClientServiceClient;
  private monObject = null;
  private taskStatusList = null;
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

  get(searchArray): any {
    const taskRequestFilter = new TaskRequestFilter();
    if (searchArray.apply_mask) taskRequestFilter.setApplyMask(searchArray.apply_mask);
    if (searchArray.parent_task_ind_list) taskRequestFilter.setParentTaskIndList(searchArray.parent_task_ind_list);
    if (searchArray.task_ind_list) taskRequestFilter.setTaskIndList(searchArray.task_ind_list);
    // if (searchArray.source_list) taskRequestFilter.setSourceListList(searchArray.source_list);
    if (searchArray.mon_object_list) taskRequestFilter.setMonObjectListList(searchArray.mon_object_list.split(','));
    if (searchArray.status_list) taskRequestFilter.setStatusListList(searchArray.status_list.split(','));
    if (searchArray.content_caption_list) taskRequestFilter.setContentCaptionListList(searchArray.content_caption_list.split(' '));
    if (searchArray.task_type_list) taskRequestFilter.setTaskTypeListList(searchArray.task_type_list.split(','));

    const sess = this.authService.getSess();
    const req = new ExternalTaskListByFilterRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setFilter(taskRequestFilter);

    return new Observable(observer => {
      this.ClientServiceClient.externalTaskListByFilter(req, null, (err: grpcWeb.Error, response: ExternalTaskListByFilterRes) => {
        // console.log(response.toObject(), err);

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        const result = [];
        data.taskListList.forEach((e) => {
          const monObject = [];
          this.monObject.forEach(m => {
            monObject[m.ind] = {id: m.id, caption: m.caption, address: m.address};
          });

          const aggregateList = [];
          e.statsAggregateListList.forEach(el => {
            aggregateList[el.ind] = {value: el.valueStats};
          });

          // tslint:disable-next-line:max-line-length
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
            statusColor: (!this.taskStatusList[aggregateStatus].isGroup) ? this.taskStatusList[aggregateStatus].colorBackground : '#fff',
            executor: this.getExecutor(e.roleSettList),
            isGroup: false, // (e.item.childIndListList.length > 0),
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
