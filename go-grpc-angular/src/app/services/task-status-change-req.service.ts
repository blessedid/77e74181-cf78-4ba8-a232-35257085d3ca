import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import { TaskStatusChangeService } from './task-status-change.service';
import {ExternalTaskStatusChangeReqRequest, ExternalTaskStatusChangeReqRes} from '../grpc/SittelleServiceClient_pb';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { EnumInputFieldGroup } from '../grpc/SittelleConst_pb';
import * as grpcWeb from 'grpc-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusChangeReqService {

  private readonly ClientServiceClient: ClientServiceClient;
  private inputFieldGroup = EnumInputFieldGroup;

  constructor(private Grpc: GrpcService, private authService: AuthService, private taskStatusChangeService: TaskStatusChangeService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  change(statusInd, taskInd) {
    const sess = this.authService.getSess();
    const req = new ExternalTaskStatusChangeReqRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setStatusInd(statusInd);
    req.setTaskInd(taskInd);

    return new Observable(observer => {
      // this.ClientServiceClient.externalPanelFil
      this.ClientServiceClient.externalTaskStatusChangeReq(req, null, (err: grpcWeb.Error, response: ExternalTaskStatusChangeReqRes) => {
        // console.log(response, err);

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        console.log(data);
        // observer.next(data);
        if (data.changeTaskListList.length !== 0 && data.inputListList.length === 0) {
          observer.next(data);
        } else {
          this.taskStatusChangeService.setData(data.inputListList);
          const result = [];
          data.inputListList.forEach(e => {
            let i = 1;
            const item = {
              manual: [],
              role: []
            };
            if (this.getInputFieldGroup(e.fieldManual, this.inputFieldGroup.INPUT_FIELD_GROUP_MANUAL)) {
              e.manualRequestList.forEach((el) => {
                let value = null;
                let dependent = null;
                if (el.dependentListList.length > 0) {
                  value = [];
                  dependent = el.dependentListList;
                } else {
                  value = el.valueListList;
                  dependent = [];
                }
                item.manual.push({
                  id: el.ind,
                  type: el.paramType,
                  caption: el.caption,
                  valueList: value,
                  valueDefault: el.valueDf,
                  parentParam: el.parentParamListList,
                  dependentList: dependent
                });
              });
            }
            if (this.getInputFieldGroup(e.fieldManual, this.inputFieldGroup.INPUT_FIELD_GROUP_ROLE)) {
              e.roleRequestList.forEach(el => {
                const apply = [];
                const possible = [];

                if (el.accountGroupListApplyList.length === 0 && el.accountGroupListPossibleList.length === 0) {
                  return;
                }

                el.accountGroupListApplyList.forEach(a => {
                  apply.push(a.ind);
                });

                el.accountGroupListPossibleList.forEach(p => {
                  possible.push({
                    id: p.ind,
                    caption: p.caption
                  });
                });

                item.role.push({
                  id: 'r' + el.role.ind,
                  name: el.role.captionRegion,
                  applyList: apply,
                  possibleList: possible,
                  demand: el.demand
                });
                i++;
              });
            }
            result.push(item);
          });
          observer.next(result);
        }
      });
    });
  }

  private getInputFieldGroup(rights, constRight) {
    return (rights & (1 << Number(constRight))) !== 0;
  }
}
