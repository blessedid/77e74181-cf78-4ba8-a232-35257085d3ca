import {Component, ElementRef, HostListener, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {EnumManualParamType, EnumTaskRight} from '../../grpc/SittelleConst_pb';
import {TaskCardInfoService} from '../../services/task-card-info.service';
import {StatusListService} from '../../services/status-list.service';
import {MonObjectListService} from '../../services/mon-object-list.service';
import {TaskStatusChangeReqService} from '../../services/task-status-change-req.service';
import {TaskManualRequestService} from '../../services/task-manual-request.service';
import {TaskStatusChangeService} from '../../services/task-status-change.service';
import {TaskFieldChangeService} from '../../services/task-field-change.service';
import {TaskManualChangeService} from '../../services/task-manual-change.service';
import {ManualInfoListService} from '../../services/manual-info-list.service';
import {TaskRoleApplyService} from '../../services/task-role-apply.service';
import {distanceInWords} from 'date-fns';
import * as ruLocale from 'date-fns/locale/ru';
import {ActivatedRoute, Router} from '@angular/router';
import {formatDate} from '@angular/common';
import { EnumTaskField} from '../../grpc/SittelleConst_pb';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit, OnDestroy {

  taskInfo: any = [];
  taskInd = this.route.snapshot.paramMap.get('id');
  statusList: any = [];
  TaskRight = EnumTaskRight;
  ManualParamType = EnumManualParamType;
  star = true;
  isEdit = false;
  monObject = null;
  list = [];
  editId: string | null;
  taskStatusChangeInd = null;
  roleValue = [];
  listOfOption = [];
  isVisibleModel = false;
  statusChangeData: any = [];
  taskField = EnumTaskField;
  contentEdit = {
    caption: '',
    content: ''
  };
  isVisibleModelManualChange = false;
  manualChangeData: any;
  manualList: any;

  @ViewChild('editing', { static: false, read: ElementRef }) inputElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleClick(e: MouseEvent): void {
    if (!this.editId && !this.inputElement) {
      return;
    }
    const pathList = e.composedPath();
    if (this.inputElement && pathList.indexOf(this.inputElement.nativeElement) === -1) {
      this.saveChanges();
    }
  }
  @HostListener('window:beforeunload')
  async ngOnDestroy() {
  }

  constructor(public taskCardInfoService: TaskCardInfoService, private route: ActivatedRoute, private statusListService: StatusListService,
              private monObjectListService: MonObjectListService, private taskStatusChangeReqService: TaskStatusChangeReqService,
              private taskManualRequestService: TaskManualRequestService, private taskStatusChangeService: TaskStatusChangeService,
              private taskFieldChangeService: TaskFieldChangeService, private taskManualChangeService: TaskManualChangeService,
              private manualInfoListService: ManualInfoListService, private taskRoleApplyService: TaskRoleApplyService, private router: Router) { }

  ngOnInit() {
    this.monObjectListService.get().subscribe(monObject => {
      this.monObject = monObject;
    });

    this.statusListService.get().subscribe(statusList => {
      this.statusList = statusList;
    });

    this.manualInfoListService.get().subscribe(data => {
      this.manualList = data;
    });
    this.getTaskCardInfo();
  }

  getTaskCardInfo() {
    this.taskCardInfoService.get(this.taskInd).subscribe(taskCardInfo => {
      this.taskInfo = taskCardInfo;
      console.log(taskCardInfo);
      if (!this.taskInfo) {
        return;
      }
      this.list = [
        {
          id: 'p1',
          editable: true,
          title: 'Объект мониторинга',
          value: {val: this.taskInfo.monObjectInd, caption: ''},
          type: EnumManualParamType.MANUAL_TYPE_COMBOBOX,
          ind: this.taskField.TASK_FIELD_ITEM_MON_OBJECT,
          valueList: this.monObject
        },
        {
          id: 'p2',
          editable: true,
          title: 'Приоритет',
          value: {val: this.taskInfo.priority, caption: ''},
          type: EnumManualParamType.MANUAL_TYPE_INTEGER,
          ind: this.taskField.TASK_FIELD_CONTENT_PRIORITY
        },
        {
          id: 'p3',
          editable: false,
          title: 'Дата создания',
          value: {val: this.taskInfo.dateStart, caption: ''},
          type: EnumManualParamType.MANUAL_TYPE_DATETIME
        },
        {
          id: 'p4',
          editable: false,
          title: 'Дата изменения',
          value: {val: this.taskInfo.dateApply, caption: ''},
          type: EnumManualParamType.MANUAL_TYPE_DATETIME
        },
        {
          id: 'p5',
          editable: true,
          title: 'Планируемое начало',
          value: {val: this.taskInfo.datePlanningStart, caption: ''},
          type: EnumManualParamType.MANUAL_TYPE_DATETIME,
          ind: this.taskField.TASK_FIELD_CONTENT_DATE_PLANNING_START
        },
        {
          id: 'p6',
          editable: true,
          title: 'Крайний срок',
          value: {val: this.taskInfo.datePlanningEnd, caption: ''},
          type: EnumManualParamType.MANUAL_TYPE_DATETIME,
          ind: this.taskField.TASK_FIELD_CONTENT_DATE_PLANNING_END
        },
        {
          id: 'p7',
          editable: true,
          title: 'Оценка времени',
          viewValue: this.taskInfo.timeEstimate,
          value: {val: this.taskInfo.timeEstimate, caption: ''},
          type: EnumManualParamType.MANUAL_TYPE_INTEGER,
          ind: this.taskField.TASK_FIELD_CONTENT_TIME_ESTIMATE
        }
      ];
      this.taskInfo.manual.forEach(e => {
        this.list.push({
          id: 'm',
          editable: this.taskCardInfoService.getRight(this.taskInfo.userRight, this.TaskRight.TASK_RIGHT_MANUAL_CHANGE),
          title: this.manualList[e.paramInd].caption || '',
          value: {val: e.value, caption: e.caption},
          type: e.paramType,
          ind: e.paramInd,
          manual: true
        });
      });
    });
  }

  startEditBasicInfo(id: string, event: MouseEvent) {
    const task = this.list.find(item => item.id === id);

    if (task.editable && this.taskCardInfoService.getRight(this.taskInfo.userRight, this.TaskRight.TASK_RIGHT_ROLE_CHANGE)) {
      if (task.manual) {
        this.taskManualRequestService.get(0, this.taskInd).subscribe(data => {
          this.manualChangeData = data;
          this.isVisibleModelManualChange = true;
          // console.log(data);
        });
      } else {
        event.preventDefault();
        event.stopPropagation();
        this.editId = id;
      }
    }
  }

  updateStar(): void {
    this.star = !this.star;
  }

  startEditContent(): void {
    console.log(this.taskInfo);
    this.contentEdit.caption = this.taskInfo.caption;
    this.contentEdit.content = this.taskInfo.content;
    this.isEdit = !this.isEdit;
  }

  saveContent() {
    this.taskFieldChangeService.change(this.taskInd, this.taskField.TASK_FIELD_CONTENT_CAPTION, this.contentEdit.caption).subscribe(data => {
      console.log(data);
    });
    this.taskFieldChangeService.change(this.taskInd, this.taskField.TASK_FIELD_CONTENT_TEXT, this.contentEdit.content).subscribe(data => {
      console.log(data);
    });
    this.taskInfo.caption = this.contentEdit.caption;
    this.taskInfo.content = this.contentEdit.content;
    this.contentEdit = {caption: '', content: ''};
    this.isEdit = !this.isEdit;
  }

  stopEditContent() {
    this.contentEdit = {caption: '', content: ''};
    this.isEdit = !this.isEdit;
  }

  dateFormat(date, format= 'dd.MM.yyyy HH:mm') {
    return formatDate(date, format, 'ru' );
  }

  minuteConverter(min) {
    return (min >= 60) ? (min / 60) + ' ч. ' + min % 60 + ' мин.' : min + ' мин.';
  }

  getName(data) {
    return (data && data.accountPerson) ? `${data.accountPerson.name} ${data.accountPerson.surname}` : 'SYSTEM';
  }

  formatText(data) {
    switch (data.type) {
      case 'contentList':
        return 'изменил(-а) задачу';
      case 'taskStatus':
        // tslint:disable-next-line:max-line-length
        return ` изменил(-а) статус на "${(this.statusList[data.statusInd]) ? this.statusList[data.statusInd].caption : ''}" с комментарием: ${data.comment}`;
      case 'roleActionList':
        return `прикрепил(-а) к роли ${data.taskRole.caption} группу ${data.accountGroup.caption}`;
    }
  }

  onChange(result): void {
    this.saveChanges();
    // this.editId = null;
    // console.log('Selected Time: ', result);
  }

  onOk(result: Date): void {
    // this.saveChanges();
    // this.editId = null;
    // console.log('onOk', result);
  }

  log(value: object[]): void {
    console.log(value);
  }

  getCaptionMonObject(item) {
    if (item.valueList) {
      return item.valueList.find(e => e.ind === item.value.val).caption;
    } else {
      return item.value.caption;
    }
  }

  statusChange() {
    this.taskStatusChangeReqService.change(this.taskStatusChangeInd, this.taskInd).subscribe(data => {
      console.log(data);
      // @ts-ignore
      if (data.inputListList && data.inputListList.length === 0) {
        this.taskInfo.status = this.taskStatusChangeInd;
        this.taskStatusChangeInd = null;
        this.getTaskCardInfo();
      } else {
        this.isVisibleModel = true;
        this.statusChangeData = data;
      }
    });
  }

  startEditRole(id: string, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.editId = id;
    this.listOfOption = [];
    this.roleValue = [];

    const roleEl = this.taskInfo.roleList.find(item => item.id === id);
    // console.log(roleEl);
    roleEl.possibleList.forEach(e => {
      this.listOfOption.push({
        value: e.id,
        label: e.caption
      });
    });

    roleEl.applyList.forEach(e => {
      this.roleValue.push(e.id);
    });
  }

  saveRole() {
    const roleIndex = this.taskInfo.roleList.findIndex(item => item.id === this.editId);
    // console.log(this.taskInfo.roleList[roleIndex]);
    this.taskInfo.roleList[roleIndex].applyList = [];

    this.taskInfo.roleList[roleIndex].possibleList.forEach(e => {
      if (this.roleValue.indexOf(e.id) !== -1) {
        this.taskInfo.roleList[roleIndex].applyList.push(e);
      }
    });

    this.taskRoleApplyService.change(this.taskInd, this.taskInfo.roleList[roleIndex]).subscribe(data => {
      // console.log(data);
    });

    this.cancelRole();
  }

  cancelRole() {
    this.editId = null;
    this.listOfOption = [];
    this.roleValue = [];
  }

  cancelStatusChange() {
    this.isVisibleModel = false;
  }

  statusChangeConf() {
    this.taskStatusChangeService.change(this.taskStatusChangeInd, this.taskInd);
    this.isVisibleModel = false;
  }

  saveChanges() {
    const task = this.list.find(item => item.id === this.editId);
    if (!task.value) {
      return;
    }
    const newValue = (task.type === EnumManualParamType.MANUAL_TYPE_DATETIME) ? Math.floor(task.value.val.getTime() / 1000) : task.value.val;
    this.taskFieldChangeService.change(this.taskInd, task.ind, newValue).subscribe(data => {
      console.log(data);
    });
    // console.log(task);
    this.editId = null;
  }

  distanceTimeInWords(date) {
    return distanceInWords(new Date(), new Date(date), {locale: ruLocale}) + ' назад';
  }

  cancelManualChange() {
    this.isVisibleModelManualChange = false;
  }

  manualChangeConf() {
    this.taskManualChangeService.change(this.taskInd);
    this.isVisibleModelManualChange = false;
    setTimeout(() => {
      this.getTaskCardInfo();
    }, 1000);
  }

  createFromTemplate(statusInd) {
    const url = this.router.createUrlTree(['/template-possible', {status: statusInd, task: this.taskInd}]);
    this.router.navigateByUrl(url);
  }
}
