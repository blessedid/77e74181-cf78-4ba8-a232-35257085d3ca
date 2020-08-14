import {Component, OnInit} from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TaskTreeNodeInterface } from '../../interfaces/task-tree-node-interface';
import { PanelListService } from '../../services/panel-list.service';
import { TaskListByRootTypeListService } from '../../services/task-list-by-root-type-list.service';
import { TaskChildListService } from '../../services/task-child-list.service';
import { StatusCreateListService } from '../../services/status-create-list.service';
import { TaskStatusChangeReqService } from '../../services/task-status-change-req.service';
import { TaskStatusChangeService } from '../../services/task-status-change.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusListService } from '../../services/status-list.service';
import { PanelStatusTemplateListService } from "../../services/panel-status-template-list.service";
import { EnumStatsAggregate, EnumFilterApplyType } from '../../grpc/SittelleConst_pb';
import { MonObjectListService } from "../../services/mon-object-list.service";
import {TaskTypeListService} from "../../services/task-type-list.service";
import { TaskParentChangeService } from "../../services/task-parent-change.service";
import { NotificationTaskListService } from "../../services/notification-task-list.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  listOfMapData: TaskTreeNodeInterface[] = [];
  mapOfExpandedData: { [key: string]: TaskTreeNodeInterface[] } = {};
  isLoadingTable = true;
  panelList = [];
  openedNodeTree: number[] = [];
  buttonAddItems: any = [];
  buttonAddTpl: any = [];
  isVisibleModel = false;
  createTaskData: any;
  statusInd: number | null = null;
  statusList = null;
  monObjectList = null;
  statusListSearch = [];
  aggregate = EnumStatsAggregate;
  filterApplyType = EnumFilterApplyType;
  isVisibleFilter: boolean = false;
  private rt = [];
  search = {
    apply_mask: this.filterApplyType.FILTER_APPLY_AND,
    parent_task_ind_list: '',
    task_ind_list: '',
    source_list: [],
    mon_object_list: [],
    status_list: [],
    content_caption_list: '',
    task_type_list: [],
    rt: this.rt
  };
  taskTypeList = null;
  visibleHelp = false;
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  isVisibleSelectParent: boolean = false;
  parentInd: number | null = null;
  createdTask: any = [];

  checkAll(value: boolean): void {
    this.listOfMapData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfMapData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfMapData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfMapData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  openHelp(): void {
    console.log(this.listOfMapData);
    this.visibleHelp = true;
  }

  closeHelp(): void {
    this.visibleHelp = false;
  }

  private delOpenNodeTree(id) {
    if (this.openedNodeTree.indexOf(id) !== -1) {
      this.openedNodeTree.splice(this.openedNodeTree.indexOf(id), 1);
    }
  }

  private recursionAdd(child, id, node) {
    node.forEach(e => {
      if (e.key === id && e.isGroup) {
        e.children = child;
        this.addOrUpdateData();
        return;
      }
      if (e.isGroup && e.children) {
        this.recursionAdd(child, id, e.children);
      }
    });
  }

  private addOrUpdateData(data?) {
    if (data) {
      this.listOfMapData = data;
    }

    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
    this.isLoadingTable = false;
  }

  collapse(array: TaskTreeNodeInterface[], data: TaskTreeNodeInterface, $event: boolean, id: number): void {
    // console.log('array, data', id);
    if ($event === false) {
      this.delOpenNodeTree(id);
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.delOpenNodeTree(target.key);
          // @ts-ignore
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    } else {
      this.isLoadingTable = true;
      this.openedNodeTree.push(id);
      const panelInd = this.getRootType(this.route.snapshot.paramMap.get('id'));
      const taskChildListObservable = this.taskChildListService.get(id, panelInd);
      taskChildListObservable.subscribe(taskChildList => {
        // if (!taskChildList) {
        //   console.log('sfsdfsfsdfsdf', taskChildList);
        // }
        taskChildList.sort((n, e) => n.name > e.name ? 1 : n.name < e.name ? -1 : 0);
        this.recursionAdd(taskChildList, id, this.listOfMapData);
      });
    }
  }

  convertTreeToList(root: TaskTreeNodeInterface): TaskTreeNodeInterface[] {
    const stack: TaskTreeNodeInterface[] = [];
    const array: TaskTreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: (this.openedNodeTree.indexOf(root.key) !== -1) });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          // console.log(node);
          // @ts-ignore
          stack.push({ ...node.children[i], level: node.level! + 1, parent: node, expand: (this.openedNodeTree.indexOf(node.children[i].key) !== -1) });
        }
      }
    }

    return array;
  }

  visitNode(node: TaskTreeNodeInterface, hashMap: { [key: string]: boolean }, array: TaskTreeNodeInterface[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  getData(rootType) {
    const taskListByRootTypeListObservable = this.taskListByRootTypeListService.get(rootType);
    taskListByRootTypeListObservable.subscribe(taskListByRootTypeList => {
      // console.log(taskListByRootTypeList);
      this.addOrUpdateData(taskListByRootTypeList.sort((n, e) => n.name > e.name ? 1 : n.name < e.name ? -1 : 0));
    });
  }

  private getRootType(u, type = 'string') {
    const result = [];
    const panel = this.panelList.find(e => e.id.toLowerCase() === u);

    if (panel) {
      if (type === 'string') {
        return panel.ind || 0;
      } else {
        panel.taskTypeListList.forEach(e => {
          result.push(e.rootTaskTypeInd);
        });
      }
    }
    return result;
  }

  // tslint:disable-next-line:max-line-length
  constructor(private panelListService: PanelListService, private route: ActivatedRoute, private statusCreateListService: StatusCreateListService,
              private taskListByRootTypeListService: TaskListByRootTypeListService, private taskChildListService: TaskChildListService,
              private taskStatusChangeReqService: TaskStatusChangeReqService, private taskStatusChangeService: TaskStatusChangeService,
              private statusListService: StatusListService, private panelStatusTemplateListService: PanelStatusTemplateListService, private notification: NzNotificationService,
              private router: Router, monObjectListService: MonObjectListService, private taskTypeListService: TaskTypeListService, private taskParentChangeService: TaskParentChangeService,
              private notificationTaskListService: NotificationTaskListService) {

    statusListService.get().subscribe(data => {
      // console.log(data);
      this.statusList = data;
    });
    monObjectListService.get().subscribe(data => {
      // console.log(data);
      this.monObjectList = data;
    });
    this.taskTypeListService.get().subscribe(data => {
      this.taskTypeList = data;
    });

    setInterval(() => {
      this.getTasksFromNotifications();
    }, 5000);
  }

  private getTaskList() {
    this.panelListService.items.subscribe(panelList => {
      if (panelList.length > 0) {
        this.panelList = panelList;
        const rootType = this.getRootType(this.route.snapshot.paramMap.get('id'));
        const rootTypeArray = this.getRootType(this.route.snapshot.paramMap.get('id'), 'array');

        if (rootType) {
          this.rt = rootTypeArray;
          this.isLoadingTable = true;
          this.getData(rootType);

          this.statusCreateListService.get(rootTypeArray).subscribe(statusCreateList => {
            this.buttonAddItems = statusCreateList;
          });
          this.panelStatusTemplateListService.get(rootType).subscribe(data => {
            this.buttonAddTpl = data;
          });
        }
      }
    });

    this.route.paramMap.subscribe(p => {
      if (this.panelList.length) {
        const rootType = this.getRootType(p.get('id'));
        const rootTypeArray = this.getRootType(p.get('id'), 'array');

        if (rootType) {
          this.rt = rootTypeArray;
          this.isLoadingTable = true;
          this.openedNodeTree = [];
          this.getData(rootType);

          this.statusCreateListService.get(rootTypeArray).subscribe(statusCreateList => {
            this.buttonAddItems = statusCreateList;
          });
          this.panelStatusTemplateListService.get(rootType).subscribe(data => {
            this.buttonAddTpl = data;
          });
        }
      }
    });
  }

  private getStatusListForPanel(rootType) {
    this.statusListSearch = [];
    this.search = {
      apply_mask: 2,
      parent_task_ind_list: '',
      task_ind_list: '',
      source_list: [],
      mon_object_list: [],
      status_list: [],
      content_caption_list: '',
      task_type_list: [],
      rt: rootType
    };

    rootType.forEach(e => {
      let status = this.statusList.filter(item => item.taskTypeInd === e && item.caption !== '');
      if (status.length > 0){
        status.forEach(e => {
          this.statusListSearch.push(e);
        });
      }
    });

    // this.statusList.forEach(e => {
    //   if (e && e.caption !== '' && e.taskTypeInd === rootType) {
    //     this.statusListSearch.push(e);
    //   }
    // });
  }

  ngOnInit() {
    this.getTaskList();
  }

  createTask(statusInd: any, taskInd: number) {
    this.taskStatusChangeReqService.change(statusInd, taskInd).subscribe(data => {
      console.log(data);
      // @ts-ignore
      if (data.inputListList && data.inputListList.length === 0) {
        this.createTaskData = null;
        this.statusInd = null;
        // @ts-ignore
        this.createdTask = data.changeTaskListList;
        this.getTaskList();
      } else {
        this.isVisibleModel = true;
        this.createTaskData = data;
        this.statusInd = statusInd;
      }
    });
  }

  handleModelCancel() {
    this.isVisibleModel = false;
  }

  handleModelOk() {
    this.taskStatusChangeService.change(this.statusInd, 1).subscribe(data => {
      console.log(data);
      if (data.changeTaskListList && data.changeTaskListList.length > 0) {
        this.createdTask = data.changeTaskListList;
        this.getTaskList();
      }
    });
    this.isVisibleModel = false;
  }

  tplStatus(statusInd) {
    const url = this.router.createUrlTree(['/template-possible', {status: statusInd, task: 1}]);
    this.router.navigateByUrl(url);
  }

  showFilter() {
    this.getStatusListForPanel(this.rt);

    this.statusListSearch.sort((a, b) => a.caption > b.caption ? 1 : -1);
    this.isVisibleFilter = true;
  }

  closeFilter() {
    this.isVisibleFilter = false;
  }

  startSearch() {
    console.log(this.search);
    let isSearch = false;
    const searchParam = {
      apply_mask: this.search.apply_mask,
      rt: this.rt
    };

    for (var prop in this.search) {
      if (this.search[prop].length > 0 && prop !== 'apply_mask') {
        isSearch = true;
        searchParam[prop] = this.search[prop];
      }
    }

    if (isSearch) {
      this.router.navigateByUrl(this.router.createUrlTree(['search', searchParam]));
    }
  }

  moveTask() {
    this.isVisibleSelectParent = true;
  }

  cancelSelectParent() {
    this.isVisibleSelectParent = false;
  }

  okSelectParent() {
    const taskIndList = [];
    for (let [key, value] of Object.entries(this.mapOfCheckedId)) {
      console.log(`${key}: ${value}`);
      if (value) {
        taskIndList.push(Number(key));
      }
    }
    // this.listOfMapData.filter(item => this.mapOfCheckedId[item.id]).forEach(e => {
    //   taskIndList.push(e.key);
    //   console.log(e);
    // });
    //
    this.taskParentChangeService.change(this.parentInd, taskIndList);
    this.isVisibleSelectParent = false;
  }

  private getTasksFromNotifications() {
    this.notificationTaskListService.get().subscribe(data => {
      // console.log(data);
      if (!data) {
        return;
      }

      // @ts-ignore
      data.forEach(e => {
        const task = this.listOfMapData.find(item => item.key === e.key);
        // console.log(task);
        if (e.parentInd === 1 && !task) {
          this.createdTask.push();
          this.listOfMapData.unshift(e);
        } else if (e.parentInd !== 1){
          // @ts-ignore
          this.setTasksFromNotifications(e, e,this.parentInd, this.listOfMapData);
        }
      });
      this.addOrUpdateData();
    });
  }

  private setTasksFromNotifications(child, id, node) {
    node.forEach(e => {
      if (e.key === id && e.isGroup) {
        e.children.unshift(child);
        return;
      } else if (e.key === id && !e.isGroup) {
        e.isGroup = true;
        return;
      }
      if (e.isGroup && e.children) {
        this.recursionAdd(child, id, e.children);
      }
    });
  }
}
