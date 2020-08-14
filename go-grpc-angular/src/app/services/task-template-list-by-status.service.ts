import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import { TaskStatusChangeService } from './task-status-change.service';
import { MonObjectListService } from "./mon-object-list.service";
import { RoleInfoListService } from "./role-info-list.service";
import {ExternalTaskTemplateListByStatusRequest, ExternalTaskTemplateListByStatusRes} from '../grpc/SittelleServiceClient_pb';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import * as grpcWeb from 'grpc-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskTemplateListByStatusService {

  private readonly ClientServiceClient: ClientServiceClient;
  private monObjectList: any;
  private roleInfoList: any;

  constructor(private Grpc: GrpcService, private authService: AuthService, private monObjectListService: MonObjectListService, private taskStatusChangeService: TaskStatusChangeService,
              private roleInfoListService: RoleInfoListService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
    this.monObjectListService.get().subscribe(data => {
      this.monObjectList = data;
    });
    this.roleInfoListService.get().subscribe(data => {
      this.roleInfoList = data;
    });
  }

  public get(statusInd, taskInd = 1) {
    const sess = this.authService.getSess();
    const req = new ExternalTaskTemplateListByStatusRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setStatusInd(statusInd);
    req.setTaskInd(taskInd);

    return new Observable(observer => {
      this.ClientServiceClient.externalTaskTemplateListByStatus(req, null, (err: grpcWeb.Error, response: ExternalTaskTemplateListByStatusRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        // console.log(data.inputListList);
        this.taskStatusChangeService.setData(data.inputListList);
        const result = {
          label: [
            'Название',
            'Объект мониторинга',
            'Приоритет',
            'Планируемое начало',
            'Крайний срок',
            'Оценка времени',
          ],
          items: []
        };
        data.inputListList.forEach((e, i) => {
          // console.log(e, i);
          let valueList = e.valueList;
          let resultInput = {
            id: i,
            disabled: false,
            monObjectInd: valueList.item.monObjectInd,
            priority: valueList.content.priority,
            datePlanningStart: (valueList.content.datePlanningEnd > 0) ? new Date(valueList.content.datePlanningEnd * 1000) : null,
            datePlanningEnd: (valueList.content.datePlanningEnd > 0) ? new Date(valueList.content.datePlanningEnd * 1000) : null,
            timeEstimate: valueList.content.timeEstimate,
            contentCaption: valueList.content.contentCaption,
            manual: [],
            role: []
          };

          e.manualRequestList.forEach(el => {
            let value = null;
            let dependent = null;
            let manualValueDf = e.valueList.manualList.find(item => item.paramInd === el.ind);

            if (i === 0) {
              result.label.push(el.caption);
            }

            if (el.dependentListList.length > 0) {
              value = [];
              dependent = el.dependentListList;
            } else {
              value = el.valueListList;
              dependent = [];
            }

            // if ()

            resultInput.manual.push({
              id: el.ind,
              type: el.paramType,
              caption: el.caption,
              valueList: value,
              valueDefault: (manualValueDf.value) ? manualValueDf.value : manualValueDf.caption,
              parentParam: el.parentParamListList,
              dependentList: dependent
            });
          });

          e.roleRequestList.forEach(r => {
            if (i === 0) {
              result.label.push(this.roleInfoList[r.role.ind].captionRegion);
            }
            resultInput.role.push(this.getRoleList(r));
          });

          result.items.push(resultInput);
        });
        observer.next(result);
      });
    });
  }

  private getRoleList(data) {

    const apply = [];
    const possible = [];

    // if (data.accountGroupListApplyList.length === 0 && data.accountGroupListPossibleList.length === 0) {
    //   return;
    // }

    data.accountGroupListApplyList.forEach(a => {
      apply.push(a.ind);
    });

    data.accountGroupListPossibleList.forEach(p => {
      possible.push({
        ind: p.ind,
        caption: p.caption
      });
    });
    return {
      id: 'r' + data.role.ind,
      name: data.role.captionRegion,
      applyList: apply,
      possibleList: possible,
      demand: data.demand
    };
  }
}
