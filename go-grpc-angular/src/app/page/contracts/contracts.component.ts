import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';

export interface TreeNodeInterface {
  key: number;
  name: string;
  id: number;
  level?: number;
  expand?: boolean;
  score: string;
  firstDate: string;
  changeDate: string;
  status: string;
  statusColor: string;
  executor: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
  isGroup: boolean;
}

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  data = [
    {group_name: 'Основная информация', url: 'main', group: [
        {rus_name: 'Заказчик', value: 'ООО "АТАК"'},
        {rus_name: 'Исполнитель', value: 'ООО "СМИС Эксперт"'},
        {rus_name: 'Номер договора', value: '123-456'},
        {rus_name: 'Дата договора', value: '01.01.2019'},
        {rus_name: 'Ведомость объемов работ и единичные расценки', value: 'Подробнее'},
      ]},
    {group_name: 'Дополнительное соглашение 1', url: 'dop', group: [
        {rus_name: 'Номер договора', value: '123-456'},
        {rus_name: 'Дата договора', value: '01.01.2019'},
        {rus_name: 'Ведомость объемов работ и единичные расценки', value: 'Подробнее'}
      ]},
  ];
  data2 = [
    {group_name: 'Основная информация', url: 'main', group: [
        {rus_name: 'Заказчик', name: 'name1', type: 1, value: 'ООО "АТАК"'},
        {rus_name: 'Исполнитель', name: 'name2', type: 1, value: 'ООО "СМИС Эксперт"'},
        {rus_name: 'Номер договора', name: 'name3', type: 1, value: '123-456'},
        {rus_name: 'Дата договора', name: 'name4', type: 1, value: '01.01.2019'},
        {rus_name: 'Ведомость объемов работ и единичные расценки', name: 'name5', type: 7, value: 'Товар 1'}
      ]},
    {group_name: 'Дополнительное соглашение 1', url: 'contact', group: [
        {rus_name: 'Номер договора', name: 'name9', type: 1, value: '123-456'},
        {rus_name: 'Дата договора', name: 'name10', type: 1, value: '01.01.2019'},
        {rus_name: 'Ведомость объемов работ и единичные расценки', name: 'name11', type: 7, value: 'Товар 2'}
      ]},
  ];
  param: {[key: string]: number} = {};
  isEdit = false;
  breadcrumbData = [
    {name: 'Договоры'},
    {name: 'Договор 123-456'}
  ];
  listOfMapData: TreeNodeInterface[] = [{
    key: 1,
    name: '123-456',
    id: 123,
    score: 'ООО "АТАК"',
    firstDate: 'ООО "СМИС Эксперт"',
    changeDate: '01.01.2019',
    status: 'АПС',
    statusColor: '#787674',
    executor: 'Действует',
    isGroup: false,
  }];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  visibleHelp = false;

  openHelp(): void {
    this.visibleHelp = true;
  }

  closeHelp(): void {
    this.visibleHelp = false;
  }

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: string]: boolean }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }
  constructor(private route: Router, private r: ActivatedRoute, private nzContextMenuService: NzContextMenuService) { }

  ngOnInit() {
    if (this.route.url.indexOf('edit') != -1) this.isEdit = true;
    this.param = this.r.snapshot.params;
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }

}
