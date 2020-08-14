import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {EnumManualParamType} from '../../grpc/SittelleConst_pb';
import {TaskStatusChangeService} from '../../services/task-status-change.service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.sass']
})
export class ChangeStatusComponent implements OnInit, OnChanges {

  @Input() task: number;
  @Input() status: number;
  @Input() data: any;
  validateForm: FormGroup;

  time: Date | null = null;
  manualParamType = EnumManualParamType;
  value = '';
  dateRange = [];
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];

  onOk(result: Date): void {
    // console.log('onOk', result);
  }

  log(value: object[]): void {
    // console.log(value);
  }

  constructor(private fb: FormBuilder, private taskStatusChangeService: TaskStatusChangeService) {

    // this.onValueChanges();
  }

  ngOnInit() {}
  ngOnChanges() {
    if (this.data && this.data.inputListList) {
      this.data = this.data.inputListList;
    }

    this.validateForm = this.fb.group({});
    if (this.data) {
      const group = {};

      this.data.forEach((row, i) => {

        if (row.manual) {
          row.manual.forEach(e => {
            group['param' + i.toString() + e.id] = new FormControl();
          });
        }

        if (row.role) {
          // console.log(row.role);
          row.role.forEach(e => {
            group[e.id + i.toString()] = new FormControl();
          });
        }
      });

      this.validateForm = new FormGroup(group);
    }

    // this.validateForm = this.fb.group({
    //   param1: [null],
    //   param2: [null],
    //   param3: [null],
    //   param4: [null],
    //   param5: [null],
    //   param6: [null],
    //   param7: [null],
    //   param8: [null],
    //   param9: [null],
    //   param10: [null],
    //   r1: [null],
    //   r2: [null],
    //   r3: [null],
    //   r4: [null]
    // });
    this.onValueChanges();
  }

  provinceChange(event: any, id, dependent, i1, i2, parentParam) {
    // console.log(event, id, dependent, i1, i2, parentParam);
    this.data[i1].manual.forEach((e, i) => {
      // console.log(e);
      if (e.parentParam.indexOf(id) !== -1) {
        e.dependentList.forEach(p => {
          if (p.parentIndexListList.indexOf(event) !== -1) {
            // console.log(this.data[i1].manual[i].valueList);
            this.data[i1].manual[i].valueList = p.valueListList;
          }
        });
      }
    });
  }

  private onValueChanges() {
    this.validateForm.valueChanges.subscribe(val => {
      // console.log(this.data);
      this.taskStatusChangeService.setAdditionalFields(this.data);
    });
  }
}
