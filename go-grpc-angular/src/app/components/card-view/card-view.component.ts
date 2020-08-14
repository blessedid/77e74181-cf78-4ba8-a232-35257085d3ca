import { Component, OnInit, Input } from '@angular/core';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from 'ng-zorro-antd/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() data: any;
  @Input() breadcrumb = [];
  @Input() url = '';
  isVisibleModal = false;
  nodes = [
    {
      title: 'C2000-м',
      key: '1',
      expanded: true,
      children: [
        {
          title: 'Сигнал20-П',
          key: '11',
          isLeaf: true
        },
        {
          title: 'С2000-КДЛ',
          key: '12',
          isLeaf: true
        },
        {
          title: 'С2000-КДЛ',
          key: '13',
          isLeaf: true
        },
        {
          title: 'С2000-КДЛ',
          key: '14',
          children: [
            { title: 'ШС1', key: '141', isLeaf: true },
            { title: 'ШС2', key: '142', isLeaf: true },
            { title: 'ШС3', key: '143', isLeaf: true },
            { title: 'ШС4', key: '144', isLeaf: true },
            { title: 'ШС5', key: '145', isLeaf: true }
            ]
        },
        {
          title: 'С2000-БИ',
          key: '15',
          isLeaf: true
        },
      ]
    }
  ];
  listOfData = [
    {
      key: 1,
      name: 'Кабель КПСнг(А)-FRHF 2х1х0,5',
      units: 'м.',
      price: 16,
      amount: 500
    },
    {
      key: 2,
      name: 'Прокладка кабельной продукции в существующих кабеленесущих системах',
      units: 'м.',
      price: 55,
      amount: 500
    }
  ];

  showModal(): void {
    this.isVisibleModal = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleModal = false;
  }

  beforeDrop(arg: NzFormatBeforeDropEvent): Observable<boolean> {
    // if insert node into another node, wait 1s
    if (arg.pos === 0) {
      return of(true).pipe(delay(1000));
    } else {
      return of(false);
    }
  }
  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
    this.router.navigate(['/equipment/123']);
  }
  constructor(private router: Router, private modalService: NzModalService) { }

  ngOnInit() {
  }

}
