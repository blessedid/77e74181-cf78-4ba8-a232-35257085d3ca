import { Component, OnInit, TemplateRef } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from "@angular/common";
import {GetReportListService} from "../../services/get-report-list.service";
import {GetReportParamsService} from "../../services/get-report-params.service";
import {GetGeneratedReportService} from "../../services/get-generated-report.service";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {EnumManualParamType} from "../../grpc/SittelleConst_pb";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reportList: any = [];
  manualField: any = [];
  isVisibleModel: boolean = false;
  tplModal: NzModalRef;
  tplModalButtonLoading = false;
  disabled = false;
  validateForm: FormGroup;
  manualParamType = EnumManualParamType;
  reportData: any = {};
  reportSelected = {
    name: '',
    manual: []
  };

  constructor(private getReportListService: GetReportListService, private getReportParamsService: GetReportParamsService, private modalService: NzModalService,
              private fb: FormBuilder, private getGeneratedReportService: GetGeneratedReportService) {
  }

  ngOnInit(): void {
    this.getReportListService.get().subscribe(data => {
      // console.log(data);
      this.reportList = data;
    });
  }

  getReportParams(reportInd, tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>) {
    this.tplModalButtonLoading = false;
    this.getReportParamsService.get(reportInd).subscribe(data => {
      this.manualField = data;

      this.manualField.map((e, i) => {
        if (e.paramType === 2 && !e.valueDf) {
          e.valueDf = new Date(Number(e.valueDf));
        } else {
          e.valueDf = null;
        }
      });

      this.validateForm = this.fb.group({});
      const group = {};
      this.manualField.forEach(el => {
        group['param' + el.ind.toString()] = new FormControl(el.valueDf, (el.isObligatory) ? Validators.required : null);
      });
      this.validateForm = new FormGroup(group);

      this.isVisibleModel = true;

      this.tplModal = this.modalService.create({
        nzTitle: tplTitle,
        nzContent: tplContent,
        nzFooter: tplFooter,
        nzMaskClosable: false,
        nzClosable: false,
        nzWidth: 900
      });
    })
  }

  provinceChange(event: any, id, dependent, i1, parentParam) {
    // console.log(event, id, dependent, i1, parentParam);
    this.manualField.forEach((e, i) => {
      // console.log(e);
      if (e.parentParamListList.indexOf(id) !== -1) {
        // console.log(e);
        e.dependentListList.forEach(p => {
          if (p.parentIndexListList.indexOf(event) !== -1) {
            // console.log(this.manualField[i]);
            this.manualField[i].valueListList = p.valueListList;
          }
        });
      }
    });
  }

  generateReport(reportInd, reportCaption) {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (!this.validateForm.valid) {
      return;
    }

    this.tplModalButtonLoading = true;
    this.reportSelected.name = reportCaption;
    this.reportSelected.manual = [];
    // console.log(this.manualField, this.validateForm);

    this.manualField.forEach(e => {
      let value = '';
      if (e.paramType == 1) {
        value = e.valueListList.find(item => item.value == e.valueDf).caption;
      } else if (e.paramType == 2) {
        value = this.formatDate(e.valueDf);
      } else {
        value = e.valueDf;
      }
      this.reportSelected.manual.push({name: e.caption, val: value});
    });

    this.getGeneratedReportService.get(reportInd, this.manualField).subscribe(data => {
      console.log(data);
      this.reportData = data;
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    });
  }

  closeModel() {
    this.tplModalButtonLoading = false;
    this.tplModal.destroy();
  }

  bachToReportList() {
    this.reportData = {};
  }

  formatDate(date) {
    return formatDate(date, 'dd.MM.yyyy HH:mm:ss', 'ru');
  }
}
