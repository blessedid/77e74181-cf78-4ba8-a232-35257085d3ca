import { Component, OnInit } from '@angular/core';
import { TaskTemplateListByStatusService } from "../../services/task-template-list-by-status.service";
import { MonObjectListService } from "../../services/mon-object-list.service";
import { TaskStatusChangeService } from "../../services/task-status-change.service";
import { ActivatedRoute } from "@angular/router";
import { EnumManualParamType } from "../../grpc/SittelleConst_pb";

@Component({
  selector: 'app-task-status-template-possible',
  templateUrl: './task-status-template-possible.component.html',
  styleUrls: ['./task-status-template-possible.component.css']
})
export class TaskStatusTemplatePossibleComponent implements OnInit {

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfAllData: any = [];
  listOfDisplayData: any = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  monObjectList: any = null;
  ManualParamType = EnumManualParamType;
  isVisibleFilter: boolean = false;
  search = {
    name: '',
    parent_task_ind_list: '',
    task_ind_list: '',
    source_list: [],
    mon_object_list: [],
    status_list: [],
    content_caption_list: '',
    task_type_list: []
  };
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfSearchAddress: string[] = [];

  constructor(private taskTemplateListByStatusService: TaskTemplateListByStatusService, private route: ActivatedRoute, private monObjectListService: MonObjectListService,
              private taskStatusChangeService: TaskStatusChangeService) {
    // console.log(route);
    this.monObjectListService.get().subscribe(data => {
      this.monObjectList = data;
    });
    this.route.paramMap.subscribe(p => {
      this.taskTemplateListByStatusService.get(p.get('status'), Number(p.get('task'))).subscribe(data => {
        console.log(data);
        this.listOfAllData = data;
        this.listOfDisplayData = [...this.listOfAllData.items];

        this.listOfAllData.items.map((e, i) => {
          e.manual.map((el, i2) => {
            if (el.parentParam.length > 0) {
              let parent = e.manual.find(item => item.id === el.parentParam[0]);
              // let r = el.dependentList.find(item => item.parentIndexListList === parent.valueDefault);
              el.dependentList.forEach(d => {
                if (d.parentIndexListList.indexOf(parent.valueDefault) !== -1) {
                  this.listOfAllData.items[i].manual[i2].valueList = d.valueListList;
                }
              });
            }
          });
        });
      });
    });
  }

  currentPageDataChange($event): void {
    // console.log($event);
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .filter(item => !item.disabled)
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.filter(item => !item.disabled).some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.filter(item => !item.disabled).forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  ngOnInit() {
  }

  valueChange() {
    const data = [];
    for (let prop in this.mapOfCheckedId) {
      if (this.mapOfCheckedId[prop]) {
        data.push(this.listOfAllData.items[prop]);
      }
    }
    // this.listOfAllData.items.forEach(e => {
    //   if (e.disabled) {
    //     data.push(e);
    //   }
    // });
    const param = this.route.snapshot.paramMap;
    this.taskStatusChangeService.setTemplate();
    this.taskStatusChangeService.setAdditionalFields(data);
    if (data.length > 0) {
      this.taskStatusChangeService.change(param.get('status'), Number(param.get('task')));
    }
  }

  provinceChange(event: any, id, dependent, i1) {
    console.log(event, id, dependent, i1);
    this.listOfAllData.items[i1].manual.forEach((e, i) => {
      // console.log(e);
      if (e.parentParam.indexOf(id) !== -1) {
        e.dependentList.forEach(p => {
          if (p.parentIndexListList.indexOf(event) !== -1) {
            // console.log(this.listOfAllData.items[i1].manual[i].valueList);
            this.listOfAllData.items[i1].manual[i].valueList = p.valueListList;
          }
        });
      }
    });
  }

  showFilter(): void {
    this.isVisibleFilter = true;
  }

  closeFilter() {
    this.isVisibleFilter = false;
  }

  startSearch() {
    console.log(this.search);
    let isSearch = false;
    const searchParam = {};

    for (var prop in this.search) {
      if (this.search[prop].length > 0 && prop !== 'apply_mask') {
        isSearch = true;
        searchParam[prop] = this.search[prop];
      }
    }

    if (isSearch) {
      // this.router.navigateByUrl(this.router.createUrlTree(['search', searchParam]));
    }
  }

  reset(): void {
    this.search.name = '';
    this.searchTable();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.searchTable();
  }

  filterAddressChange(value: string[]): void {
    this.listOfSearchAddress = value;
    this.searchTable();
  }

  searchTable(): void {
    this.isVisibleFilter = false;
    const filterFunc = (item) => {
      return (
        (this.listOfSearchAddress.length
          ? this.listOfSearchAddress.some(address => item.address.indexOf(address) !== -1)
          : true) && item.contentCaption.indexOf(this.search.name) !== -1
      );
    };
    const data = this.listOfAllData.items.filter((item) => filterFunc(item));
    this.listOfDisplayData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? a[this.sortName!] > b[this.sortName!]
        ? 1
        : -1
        : b[this.sortName!] > a[this.sortName!]
        ? 1
        : -1
    );
  }

}
