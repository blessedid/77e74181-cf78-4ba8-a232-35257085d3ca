import * as jspb from "google-protobuf"

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';

export class ChartListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChartListRequest): ChartListRequest.AsObject;
  static serializeBinaryToWriter(message: ChartListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartListRequest;
  static deserializeBinaryFromReader(message: ChartListRequest, reader: jspb.BinaryReader): ChartListRequest;
}

export namespace ChartListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class ChartListRes extends jspb.Message {
  getChartListList(): Array<SittelleTypeDictionary_pb.SittelleChart>;
  setChartListList(value: Array<SittelleTypeDictionary_pb.SittelleChart>): void;
  clearChartListList(): void;
  addChartList(value?: SittelleTypeDictionary_pb.SittelleChart, index?: number): SittelleTypeDictionary_pb.SittelleChart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ChartListRes): ChartListRes.AsObject;
  static serializeBinaryToWriter(message: ChartListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartListRes;
  static deserializeBinaryFromReader(message: ChartListRes, reader: jspb.BinaryReader): ChartListRes;
}

export namespace ChartListRes {
  export type AsObject = {
    chartListList: Array<SittelleTypeDictionary_pb.SittelleChart.AsObject>,
  }
}

export class ChartSeriesListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getChartInd(): number;
  setChartInd(value: number): void;

  getChatParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setChatParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearChatParamListList(): void;
  addChatParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartSeriesListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChartSeriesListRequest): ChartSeriesListRequest.AsObject;
  static serializeBinaryToWriter(message: ChartSeriesListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartSeriesListRequest;
  static deserializeBinaryFromReader(message: ChartSeriesListRequest, reader: jspb.BinaryReader): ChartSeriesListRequest;
}

export namespace ChartSeriesListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    chartInd: number,
    chatParamListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
  }
}

export class ChartSeriesListRes extends jspb.Message {
  getSeriesListList(): Array<SittelleTypeDictionary_pb.ChartSeries>;
  setSeriesListList(value: Array<SittelleTypeDictionary_pb.ChartSeries>): void;
  clearSeriesListList(): void;
  addSeriesList(value?: SittelleTypeDictionary_pb.ChartSeries, index?: number): SittelleTypeDictionary_pb.ChartSeries;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartSeriesListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ChartSeriesListRes): ChartSeriesListRes.AsObject;
  static serializeBinaryToWriter(message: ChartSeriesListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartSeriesListRes;
  static deserializeBinaryFromReader(message: ChartSeriesListRes, reader: jspb.BinaryReader): ChartSeriesListRes;
}

export namespace ChartSeriesListRes {
  export type AsObject = {
    seriesListList: Array<SittelleTypeDictionary_pb.ChartSeries.AsObject>,
  }
}

export class ChartValuesRequestRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getChartInd(): number;
  setChartInd(value: number): void;

  getChatParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setChatParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearChatParamListList(): void;
  addChatParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartValuesRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChartValuesRequestRequest): ChartValuesRequestRequest.AsObject;
  static serializeBinaryToWriter(message: ChartValuesRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartValuesRequestRequest;
  static deserializeBinaryFromReader(message: ChartValuesRequestRequest, reader: jspb.BinaryReader): ChartValuesRequestRequest;
}

export namespace ChartValuesRequestRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    chartInd: number,
    chatParamListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
  }
}

export class ChartValuesRequestRes extends jspb.Message {
  getValueListList(): Array<SittelleTypeDictionary_pb.ChartValue>;
  setValueListList(value: Array<SittelleTypeDictionary_pb.ChartValue>): void;
  clearValueListList(): void;
  addValueList(value?: SittelleTypeDictionary_pb.ChartValue, index?: number): SittelleTypeDictionary_pb.ChartValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartValuesRequestRes.AsObject;
  static toObject(includeInstance: boolean, msg: ChartValuesRequestRes): ChartValuesRequestRes.AsObject;
  static serializeBinaryToWriter(message: ChartValuesRequestRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartValuesRequestRes;
  static deserializeBinaryFromReader(message: ChartValuesRequestRes, reader: jspb.BinaryReader): ChartValuesRequestRes;
}

export namespace ChartValuesRequestRes {
  export type AsObject = {
    valueListList: Array<SittelleTypeDictionary_pb.ChartValue.AsObject>,
  }
}

export class ChartMonObjectListStateRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartMonObjectListStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChartMonObjectListStateRequest): ChartMonObjectListStateRequest.AsObject;
  static serializeBinaryToWriter(message: ChartMonObjectListStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartMonObjectListStateRequest;
  static deserializeBinaryFromReader(message: ChartMonObjectListStateRequest, reader: jspb.BinaryReader): ChartMonObjectListStateRequest;
}

export namespace ChartMonObjectListStateRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskTypeInd: number,
  }
}

export class ChartMonObjectListStateRes extends jspb.Message {
  getSeriesValueListList(): Array<SittelleTypeDictionary_pb.ChartSeriesValue>;
  setSeriesValueListList(value: Array<SittelleTypeDictionary_pb.ChartSeriesValue>): void;
  clearSeriesValueListList(): void;
  addSeriesValueList(value?: SittelleTypeDictionary_pb.ChartSeriesValue, index?: number): SittelleTypeDictionary_pb.ChartSeriesValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartMonObjectListStateRes.AsObject;
  static toObject(includeInstance: boolean, msg: ChartMonObjectListStateRes): ChartMonObjectListStateRes.AsObject;
  static serializeBinaryToWriter(message: ChartMonObjectListStateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartMonObjectListStateRes;
  static deserializeBinaryFromReader(message: ChartMonObjectListStateRes, reader: jspb.BinaryReader): ChartMonObjectListStateRes;
}

export namespace ChartMonObjectListStateRes {
  export type AsObject = {
    seriesValueListList: Array<SittelleTypeDictionary_pb.ChartSeriesValue.AsObject>,
  }
}

