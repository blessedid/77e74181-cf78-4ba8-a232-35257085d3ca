import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EnumManualParamType} from '../../grpc/SittelleConst_pb';
import {TaskManualChangeService} from '../../services/task-manual-change.service';

@Component({
  selector: 'app-change-manual-field',
  templateUrl: './change-manual-field.component.html',
  styleUrls: ['./change-manual-field.component.sass']
})
export class ChangeManualFieldComponent implements OnInit {

  @Input() task: number;
  @Input() data: any;
  validateForm: FormGroup;
  manualParamType = EnumManualParamType;

  constructor(private fb: FormBuilder, private taskManualChangeService: TaskManualChangeService) {
    this.validateForm = this.fb.group({
      param1: [null],
      param2: [null],
      param3: [null],
      param4: [null],
      param5: [null],
      param6: [null],
      param7: [null],
      param8: [null],
      param9: [null],
      param10: [null]
    });
    this.onValueChanges();
  }

  ngOnInit(): void {
  }

  provinceChange(event: any, id, dependent, i1, parentParam) {
    // console.log(event, id, dependent, i1, parentParam);
    this.data.forEach((e, i) => {
      if (e.parentParamListList.indexOf(id) !== -1) {
        // console.log(e);
        e.dependentListList.forEach(p => {
          if (p.parentIndexListList.indexOf(event) !== -1) {
            // console.log(p);
            this.data[i].valueListList = p.valueListList;
            if (p.valueListList.findIndex(item => item.value === e.valueDf) === -1) {
              this.data[i].valueDf = null;
            }
          }
        });
      }
    });
  }

  private onValueChanges() {
    this.validateForm.valueChanges.subscribe(val => {
      this.taskManualChangeService.setManualField(this.data);
    });
  }

}
