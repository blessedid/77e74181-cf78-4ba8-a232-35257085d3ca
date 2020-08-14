import { Component, OnInit } from '@angular/core';
import {TaskTreeNodeInterface} from "../../interfaces/task-tree-node-interface";
import {EnumFilterApplyType, EnumStatsAggregate} from "../../grpc/SittelleConst_pb";
import {ActivatedRoute, Router} from "@angular/router";
import {StatusListService} from "../../services/status-list.service";
import {PanelStatusTemplateListService} from "../../services/panel-status-template-list.service";
import {MonObjectListService} from "../../services/mon-object-list.service";
import {TaskTypeListService} from "../../services/task-type-list.service";
import { TaskListByFilterService } from "../../services/task-list-by-filter.service";
import { TaskParentChangeService } from "../../services/task-parent-change.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listOfMapData: TaskTreeNodeInterface[] = [];
  mapOfExpandedData: { [key: string]: TaskTreeNodeInterface[] } = {};
  isLoadingTable = true;
  openedNodeTree: number[] = [];
  statusList = null;
  monObjectList = null;
  statusListSearch = [];
  aggregate = EnumStatsAggregate;
  filterApplyType = EnumFilterApplyType;
  isVisibleFilter: boolean = false;
  private rt: number[] = [];
  search: {apply_mask: number, parent_task_ind_list: string, task_ind_list: string, source_list: any, mon_object_list: any, status_list: any, content_caption_list: string, task_type_list: any, rt: number[]} = {
    apply_mask: 1,
    parent_task_ind_list: '',
    task_ind_list: '',
    source_list: [],
    mon_object_list: [],
    status_list: [],
    content_caption_list: '',
    task_type_list: [],
    rt: []
  };
  taskTypeList = null;
  visibleHelp = false;
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  isVisibleSelectParent: boolean = false;
  parentInd: number | null = null;

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

  private clearSearch() {
    this.search = {
      apply_mask: 1,
      parent_task_ind_list: '',
      task_ind_list: '',
      source_list: [],
      mon_object_list: [],
      status_list: [],
      content_caption_list: '',
      task_type_list: [],
      rt: this.rt
    };
  }

  getData() {
    // const p = this.route.snapshot.paramMap;
    this.clearSearch();

    this.taskListByFilterService.get(this.route.snapshot.params).subscribe(data => {
      this.addOrUpdateData(data.sort((n, e) => n.name > e.name ? 1 : n.name < e.name ? -1 : 0));
    });
  }

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private statusListService: StatusListService, private panelStatusTemplateListService: PanelStatusTemplateListService,
              private router: Router, monObjectListService: MonObjectListService, private taskTypeListService: TaskTypeListService,
              private taskListByFilterService: TaskListByFilterService, private taskParentChangeService: TaskParentChangeService) {

    statusListService.get().subscribe(data => {
      // console.log(data);
      this.statusList = data;
    });
    monObjectListService.get().subscribe(data => {
      // console.log(JSON.stringify(data));
      this.monObjectList = data;
    });
    this.taskTypeListService.get().subscribe(data => {
      this.taskTypeList = data;
    });

    this.isLoadingTable = true;
    this.route.paramMap.subscribe(p => {
      this.getData();
      p.keys.forEach(key => {
        if (key === 'task_type_list' || key === 'status_list' || key === 'mon_object_list' || key === 'source_list') {
          this.search[key] = p.get(key).split(',');
        } else if (key === 'rt') {
          this.rt = [];
          let tmp = p.get(key).split(',');
          tmp.forEach(e => {
            this.rt.push(Number(e));
          });
        } else {
          this.search[key] = p.get(key);
        }
      });
    });
  }

  private getStatusListForPanel(rootType) {
    this.statusListSearch = [];

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
      // rt: this.rt
    };

    for (let [key, value] of Object.entries(this.search)) {
      // console.log(`${key}: ${value}`);
      if (value.length > 0) {
        isSearch = true;
        searchParam[key] = value;
      }
    }

    if (isSearch) {
      this.clearSearch();
      this.router.navigateByUrl(this.router.createUrlTree(['search', searchParam]));
      this.isVisibleFilter = false;
    }
  }

  compareFn(c1, c2): boolean {
    // console.log(c1, c2);
    return c1 == c2;
  }

  moveTask() {
    this.isVisibleSelectParent = true;
  }

  cancelSelectParent() {
    this.isVisibleSelectParent = false;
  }

  okSelectParent() {
    const taskIndList = [];
    this.listOfMapData.filter(item => this.mapOfCheckedId[item.id]).forEach(e => {
      taskIndList.push(e.key);
    });

    this.taskParentChangeService.change(this.parentInd, taskIndList);
    this.isVisibleSelectParent = false;
  }
}
