import {Component, OnInit} from '@angular/core';
import { AgmMarker } from '@agm/core';
import { MonObjectInfoListService } from '../../services/mon-object-info-list.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {
  title = 'My first AGM project';
  lat = 56.1471055;
  lng = 47.2365633;
  monObjectList: any = [];
  isLoadingTable = true;
  sortName: string | null = null;
  sortValue: string | null = null;
  searchAddress: string;
  listOfSearchName: string[] = [];
  listOfUnitType = [{ text: 'Магазин', value: 'Магазин' }, { text: 'ТЦ', value: 'ТЦ' }];
  listOfDisplayData = [...this.monObjectList];

  constructor(private monObjectInfoListService: MonObjectInfoListService) {
    monObjectInfoListService.get().subscribe(monObjectInfoList => {
      this.monObjectList = monObjectInfoList;
      console.log(monObjectInfoList);
      this.isLoadingTable = false;
    });
  }

  ngOnInit() {}

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = (item: any) =>
      (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
      (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.unitType.indexOf(name) !== -1) : true);
    const data = this.monObjectList.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.monObjectList = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    } else {
      this.monObjectList = data;
    }
  }
}
