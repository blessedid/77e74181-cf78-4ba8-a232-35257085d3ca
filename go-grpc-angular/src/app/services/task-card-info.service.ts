import { Injectable } from '@angular/core';
import { GrpcService } from './grpc.service';
import { AuthService } from './auth.service';
import { ExternalTaskCardInfoRequest, ExternalTaskCardInfoRes } from '../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskCardInfoService {

  private readonly ClientServiceClient: ClientServiceClient;

  constructor(private Grpc: GrpcService, private authService: AuthService) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  public get(id) {
    const sess = this.authService.getSess();
    const req = new ExternalTaskCardInfoRequest();
    req.setConnectionInd(Number(sess.cid));
    req.setSessId(sess.sid);
    req.setTaskInd(id);
    // debugger;

    return new Observable(observer => {
      this.ClientServiceClient.externalTaskCardInfo(req, null, (err: grpcWeb.Error, response: ExternalTaskCardInfoRes) => {

        if (err) {
          this.authService.errorHandler(err);
          observer.next([]);
          return;
        }

        const data = response.toObject();
        console.log(data);
        // const monObject = this.monObject.find(item => item.ind === data.task.item.monObjectInd);
        const statusList = [];
        if (data.statusChangePossibleListList.length > 0) {
          statusList.push({groupName: 'Изменить статус на:', items: this.getStatusPossibleList(data.statusChangePossibleListList)});
        }
        if (data.statusCreatePossibleListList.length > 0) {
          statusList.push({groupName: 'Создать', items: this.getStatusPossibleList(data.statusCreatePossibleListList)});
        }

        const result = {
          caption: data.task.content.caption,
          content: data.task.content.content,
          status: data.task.status.statusInd,
          roleList: this.getRoleList(data.task.roleSettList),
          userRight: data.rights,
          manual: data.task.manual.paramListList,
          statusPossibleList: statusList, // this.getStatusPossibleList(data.statusPossibleListList),
          monObjectInd: data.task.item.monObjectInd,
          priority: data.task.content.priority.toString(),
          dateStart: new Date(data.task.dateStart),
          dateApply: new Date(data.task.status.dateApply),
          datePlanningStart: new Date(data.task.content.datePlanningStart),
          datePlanningEnd: new Date(data.task.content.datePlanningEnd),
          timeEstimate: data.task.content.timeEstimate,
          history: this.getHistory(data),
          comment: {
            text: data.task.status.text,
            comment: data.task.status.comment
          },
          statusTemplatePossibleList: data.statusTemplatePossibleListList
        };
        observer.next(result);
      });
    });
  }

  public getRight(rights, constRight) {
    return (rights & (1 << Number(constRight))) !== 0;
  }

  private getStatusPossibleList(data) {
    const result = [];
    data.forEach(e => {
      result.push({
        label: e.captionAction,
        value: e.ind
      });
    });
    return result;
  }

  private getHistory(data) {
    const result = [];

    data.taskStatusListList.forEach(e => {
      result.push({
        ...e,
        type: 'taskStatus'
      });
    });
    data.commentListList.forEach(e => {
      result.push({
        ...e,
        type: 'commentList'
      });
    });
    data.roleActionListList.forEach(e => {
      result.push({
        ...e,
        type: 'roleActionList'
      });
    });
    // data.stateListList.forEach(e => {
    //     result.push({
    //       ...e,
    //       type: 'stateList'
    //     });
    // });
    data.accountStateListList.forEach(e => {
      result.push({
        ...e,
        type: 'accountStateList'
      });
    });
    data.contentListList.forEach(e => {
      result.push({
        ...e,
        type: 'contentList'
      });
    });

    return result.sort((d, p) => d.dateApply > p.dateApply ? 1 : d.dateApply < p.dateApply ? -1 : 0);
  }

  private getRoleList(data) {
    const result = [];
    let i = 1;

    data.forEach(e => {
      const apply = [];
      const possible = [];

      if (e.accountGroupListApplyList.length === 0 && e.accountGroupListPossibleList.length === 0) {
        return;
      }

      e.accountGroupListApplyList.forEach(a => {
        apply.push({
          id: a.ind,
          caption: a.caption
        });
      });

      e.accountGroupListPossibleList.forEach(p => {
        possible.push({
          id: p.ind,
          caption: p.caption
        });
      });

      result.push({
        id: 'r' + i,
        ind: e.role.ind,
        name: e.role.captionRegion,
        applyList: apply,
        possibleList: possible
      });
      i++;
    });
    return result;
  }
}
