import { Injectable } from '@angular/core';
import {GrpcService} from './grpc.service';
import {AuthService} from './auth.service';
import {ExternalNotificationTaskListRequest, ExternalNotificationTaskListRes} from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import {ClientServiceClient} from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';
import { StatusListService } from "./status-list.service";
import {EnumStatsAggregate, EnumTaskAction} from "../grpc/SittelleConst_pb";
// import { distanceInWordsToNow } from 'date-fns';
// import * as ruLocaleDateFNS from 'date-fns/locale/ru';
import {TaskTreeNodeInterface} from "../interfaces/task-tree-node-interface";
import {MonObjectListService} from "./mon-object-list.service";

@Injectable({
  providedIn: 'root'
})
export class NotificationTaskListService {

  private readonly ClientServiceClient: ClientServiceClient;
  private statusList = null;
  private monObject = null;
  private aggregate = EnumStatsAggregate;


  constructor(private Grpc: GrpcService, private authService: AuthService, private statusListService: StatusListService, private monObjectList: MonObjectListService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }

    this.statusListService.get().subscribe(data => {
      // console.log(data);
      this.statusList = data;
    });

    monObjectList.get().subscribe(monObject => {
      // console.log(monObject);
      this.monObject = monObject;
    });
  }

  public get() {
    const req = new ExternalNotificationTaskListRequest();
    const sess = this.authService.getSess();
    req.setSessId(sess.sid);
    req.setConnectionInd(Number(sess.cid));
    req.setBufferAction(2);

    return new Observable(observer => {
      this.ClientServiceClient.externalNotificationTaskList(req, null, (err: grpcWeb.Error, response: ExternalNotificationTaskListRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        const result = [];

        data.notificationListList.forEach(e => {
          const task = e.taskSett;
          const monObject = [];
          this.monObject.forEach(m => {
            monObject[m.ind] = {id: m.id, caption: m.caption, address: m.address};
          });

          const aggregateList = [];
          task.statsAggregateListList.forEach(el => {
            aggregateList[el.ind] = {value: el.valueStats};
          });

          // tslint:disable-next-line:max-line-length
          const aggregateStatus = (aggregateList[this.aggregate.STATS_AGGREAGATE_PRIORITY_STATUS_MAX] && aggregateList[this.aggregate.STATS_AGGREAGATE_PRIORITY_STATUS_MAX].value > 0) ?
            aggregateList[this.aggregate.STATS_AGGREAGATE_PRIORITY_STATUS_MAX].value : task.status.statusInd;

          const d: TaskTreeNodeInterface = {
            key: task.item.ind,
            name: task.content.caption,
            id: task.item.ind,
            expand: false,
            score: monObject[task.item.monObjectInd] || {id: null, caption: ''},
            firstDate: this.checkDate(aggregateList[this.aggregate.STATS_AGGREAGATE_DATE_CHANGE_MIN], task.dateStart),
            changeDate: this.checkDate(aggregateList[this.aggregate.STATS_AGGREAGATE_DATE_CHANGE_MIN], task.status.dateApply),
            status: (!this.statusList[aggregateStatus].isGroup) ? this.statusList[aggregateStatus].caption : '',
            statusColor: (!this.statusList[aggregateStatus].isGroup) ? this.statusList[aggregateStatus].colorBackground : '#fff',
            executor: this.getExecutor(task.roleSettList),
            isGroup: (task.item.childIndListList.length > 0),
            statsStatusList: task.statsStatusListList,
            statsAggregateList: aggregateList,
            parentInd: task.item.parentInd
          };
          // console.log(e.roleList);
          result.push(d);
        });

        // data.notificationListList.forEach(e => {
        //   result.push({
        //     actionType: e.actionType,
        //     descriptionType: this.getDescription(e.actionType),
        //     user: {
        //       ind: e.accountApply.accountPerson.personInd,
        //       first_name: e.accountApply.accountPerson.name || '',
        //       last_name: e.accountApply.accountPerson.surname || ''
        //     },
        //     task: {
        //       ind: e.taskSett.content.taskInd,
        //       caption: e.taskSett.content.caption
        //     },
        //     status: this.statusList[e.taskSett.status.statusInd].caption,
        //     date: distanceInWordsToNow(new Date(e.applyDate), {locale: ruLocaleDateFNS}) + ' назад'
        //   });
        // });

        observer.next(result);
      });
    });
  }

  private getDescription(actionType) {
    let result = '';

    switch (actionType) {
      case EnumTaskAction.TASK_ACTION_CREATE :
        result = 'создал(-а) задачу';
        break;
      case EnumTaskAction.TASK_ACTION_STATUS_CHANGE :
        result = 'изменил статус задачи';
        break;
      case EnumTaskAction.TASK_ACTION_MANUAL_CHANGE :
        result = 'изменил мануальные поля';
        break;
      case EnumTaskAction.TASK_ACTION_ROLE_CHANGE :
        result = 'изменил роли';
        break;
      case EnumTaskAction.TASK_ACTION_CONTENT_CHANGE :
        result = 'изменил описание';
        break;
      case EnumTaskAction.TASK_ACTION_COMMENT_ADD :
        result = 'добавил комментарий';
        break;
      case EnumTaskAction.TASK_ACTION_STATE_CHANGE :
        result = 'изменил STATE';
        break;
      case EnumTaskAction.TASK_ACTION_ITEM_CHANGE :
        result = ' изменил ITEM';
        break;
      case EnumTaskAction.TASK_ACTION_PARENT_CHANGE :
        result = 'изменил родителя задачи';
        break;
      case EnumTaskAction.TASK_ACTION_STATUS_INPUT_CHANGE :
        result = 'изменил STATUS_INPUT';
        break;
      case EnumTaskAction.TASK_ACTION_LOST_ACCESS :
        result = 'LOST_ACCESS';
        break;
      case EnumTaskAction.TASK_ACTION_ACCOUNT_STATE_CHANGE :
        result = 'ACCOUNT_STATE_CHANGE';
        break;
      default:
        result = '';
    }
    return result;
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
