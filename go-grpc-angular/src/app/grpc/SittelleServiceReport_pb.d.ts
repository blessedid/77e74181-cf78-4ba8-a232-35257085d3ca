import * as jspb from "google-protobuf"

import * as SittelleTypeReport_pb from './SittelleTypeReport_pb';
import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';

export class ReportListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportListRequest): ReportListRequest.AsObject;
  static serializeBinaryToWriter(message: ReportListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportListRequest;
  static deserializeBinaryFromReader(message: ReportListRequest, reader: jspb.BinaryReader): ReportListRequest;
}

export namespace ReportListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class ReportListRes extends jspb.Message {
  getListList(): Array<SittelleTypeReport_pb.ReportSett>;
  setListList(value: Array<SittelleTypeReport_pb.ReportSett>): void;
  clearListList(): void;
  addList(value?: SittelleTypeReport_pb.ReportSett, index?: number): SittelleTypeReport_pb.ReportSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReportListRes): ReportListRes.AsObject;
  static serializeBinaryToWriter(message: ReportListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportListRes;
  static deserializeBinaryFromReader(message: ReportListRes, reader: jspb.BinaryReader): ReportListRes;
}

export namespace ReportListRes {
  export type AsObject = {
    listList: Array<SittelleTypeReport_pb.ReportSett.AsObject>,
  }
}

export class ReportParamsRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getReportInd(): number;
  setReportInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportParamsRequest): ReportParamsRequest.AsObject;
  static serializeBinaryToWriter(message: ReportParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportParamsRequest;
  static deserializeBinaryFromReader(message: ReportParamsRequest, reader: jspb.BinaryReader): ReportParamsRequest;
}

export namespace ReportParamsRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    reportInd: number,
  }
}

export class ReportParamsRes extends jspb.Message {
  getRequestListList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setRequestListList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearRequestListList(): void;
  addRequestList(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportParamsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReportParamsRes): ReportParamsRes.AsObject;
  static serializeBinaryToWriter(message: ReportParamsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportParamsRes;
  static deserializeBinaryFromReader(message: ReportParamsRes, reader: jspb.BinaryReader): ReportParamsRes;
}

export namespace ReportParamsRes {
  export type AsObject = {
    requestListList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
  }
}

export class GeneratedReportRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getReportInd(): number;
  setReportInd(value: number): void;

  getParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearParamListList(): void;
  addParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  getGenerateTimeout(): number;
  setGenerateTimeout(value: number): void;

  getGenerateRecordCouet(): number;
  setGenerateRecordCouet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratedReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratedReportRequest): GeneratedReportRequest.AsObject;
  static serializeBinaryToWriter(message: GeneratedReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratedReportRequest;
  static deserializeBinaryFromReader(message: GeneratedReportRequest, reader: jspb.BinaryReader): GeneratedReportRequest;
}

export namespace GeneratedReportRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    reportInd: number,
    paramListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
    generateTimeout: number,
    generateRecordCouet: number,
  }
}

export class GeneratedReportRes extends jspb.Message {
  getHeaderListList(): Array<SittelleTypeReport_pb.ReportHeader>;
  setHeaderListList(value: Array<SittelleTypeReport_pb.ReportHeader>): void;
  clearHeaderListList(): void;
  addHeaderList(value?: SittelleTypeReport_pb.ReportHeader, index?: number): SittelleTypeReport_pb.ReportHeader;

  getValueListList(): Array<SittelleTypeReport_pb.ReportValue>;
  setValueListList(value: Array<SittelleTypeReport_pb.ReportValue>): void;
  clearValueListList(): void;
  addValueList(value?: SittelleTypeReport_pb.ReportValue, index?: number): SittelleTypeReport_pb.ReportValue;

  getHeaderChartList(): Array<SittelleTypeReport_pb.ReportHeaderGroup>;
  setHeaderChartList(value: Array<SittelleTypeReport_pb.ReportHeaderGroup>): void;
  clearHeaderChartList(): void;
  addHeaderChart(value?: SittelleTypeReport_pb.ReportHeaderGroup, index?: number): SittelleTypeReport_pb.ReportHeaderGroup;

  getChartListList(): Array<SittelleTypeDictionary_pb.SittelleChart>;
  setChartListList(value: Array<SittelleTypeDictionary_pb.SittelleChart>): void;
  clearChartListList(): void;
  addChartList(value?: SittelleTypeDictionary_pb.SittelleChart, index?: number): SittelleTypeDictionary_pb.SittelleChart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratedReportRes.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratedReportRes): GeneratedReportRes.AsObject;
  static serializeBinaryToWriter(message: GeneratedReportRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratedReportRes;
  static deserializeBinaryFromReader(message: GeneratedReportRes, reader: jspb.BinaryReader): GeneratedReportRes;
}

export namespace GeneratedReportRes {
  export type AsObject = {
    headerListList: Array<SittelleTypeReport_pb.ReportHeader.AsObject>,
    valueListList: Array<SittelleTypeReport_pb.ReportValue.AsObject>,
    headerChartList: Array<SittelleTypeReport_pb.ReportHeaderGroup.AsObject>,
    chartListList: Array<SittelleTypeDictionary_pb.SittelleChart.AsObject>,
  }
}

