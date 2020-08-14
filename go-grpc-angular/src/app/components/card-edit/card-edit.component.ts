import { Component, OnInit, Input, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  @Input() data: any;
  listOfControl: any = [];
  formModel = {};
  listOfTagOptions = ['Директор'];
  validateForm: FormGroup;
  isVisibleModal = false;
  estimateValue = [
    {id: 1, name: 'Кабель КПСнг(А)-FRHF 2х1х0,5', price: 16, units: 'м.'},
    {id: 2, name: 'Прокладка кабельной продукции в существующих кабеленесущих системах', price: 55, units: 'м.'},
    {id: 3, name: 'Товар 3', price: 123, units: 'шт.'},
    {id: 4, name: 'Товар 4', price: 970, units: 'шт.'},
    {id: 5, name: 'Товар 5', price: 85.25, units: 'шт.'}
  ];
  estimate = [
    {
      key: 1,
      estimateID: 1,
      amount: 500
    },
    {
      key: 2,
      estimateID: 2,
      amount: 500
    }
  ];
  listOfData = [];
  listOfSelectedValue: string[] = [];
  i = 0;
  editId: string | null;

  @ViewChild(NzInputDirective, { read: ElementRef }) inputElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleClick(e: MouseEvent): void {
    // console.log(this.editId, this.inputElement, e);
    // if (this.editId && this.inputElement && this.inputElement.nativeElement !== e.target) {
    //   this.editId = null;
    // }
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        key: this.listOfData.length + 1,
        // estimateID: 0,
        amount: 0
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    // @ts-ignore
    this.listOfData = this.listOfData.filter(d => d.key !== id);
  }

  startEdit(id: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
  }

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

  qwe() {
    // this.listOfData = [...this.estimateValue];
    this.estimate.forEach(d => {
      const q = this.estimateValue.find(e => e.id === d.estimateID);
      this.listOfData.push(Object.assign({}, q, d));
      console.log(this.listOfData);
    });
  }

  addField(e?: MouseEvent, fieldType?: string): void {
    if (e) {
      e.preventDefault();
    }
    if (fieldType) {
      const id = this.listOfControl[fieldType].length > 0 ? this.listOfControl[fieldType][this.listOfControl[fieldType].length - 1].id + 1 : 0;
      const control = { id, controlInstance: ''};
      const index = this.listOfControl[fieldType].splice(id, 0, control);
      this.formModel[fieldType].splice(id, 0, '');
      // console.log(this.listOfControl[fieldType], id, index);
    }
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent, fieldType: string): void {
    e.preventDefault();
    if (this.listOfControl[fieldType].length > 1) {
      const index = this.listOfControl[fieldType].indexOf(i);
      this.listOfControl[fieldType].splice(index, 1);
    }
  }

  submitForm(): void {
    console.log(this);
  }

  isNotSelected(name: string, value: string): boolean {
    return this.formModel[name].indexOf(value) === -1;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.data.forEach((p) => {
      p.group.forEach((c) => {
        if (c.type == 4) {
          this.listOfControl[c.name] = [];
          for (const [key, value] of Object.entries(c.value)) {
            this.listOfControl[c.name].push({id: this.listOfControl[c.name].length, controlInstance: value});
          }
        }
        if (c.type == 6) {
          this.formModel[c.name] = [];
          for (const [key, value] of Object.entries(c.value)) {
            this.formModel[c.name].push(value);
          }
        }
        this.formModel[c.name] = c.value;
      });
    });
    this.validateForm = this.fb.group({});
    this.addField();
    this.qwe();
  }

  editSelect(val: string, key: number) {
    console.log(val, key);
    const i = this.listOfData.findIndex(item => item.estimateID == val && item.key == key);
    if (i === -1) return false;
    // @ts-ignore
    const q = this.estimateValue.find(p => p.id === val);
    this.listOfData[i].amount = 0;
    this.listOfData[i].estimateID = key;
    this.listOfData[i].id = q.id;
    this.listOfData[i].key = key;
    this.listOfData[i].name = q.name;
    this.listOfData[i].price = q.price;
    this.listOfData[i].units = q.units;
    // console.log(this);
  }
}
