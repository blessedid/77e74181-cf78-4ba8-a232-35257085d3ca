import * as jspb from "google-protobuf"

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';
import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';

export class ExternalInputSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getSubtaskPathInd(): number;
  setSubtaskPathInd(value: number): void;

  getFieldManual(): number;
  setFieldManual(value: number): void;

  getFieldAuto(): number;
  setFieldAuto(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getValueList(): SittelleTypeTask_pb.TaskFieldsInputValues | undefined;
  setValueList(value?: SittelleTypeTask_pb.TaskFieldsInputValues): void;
  hasValueList(): boolean;
  clearValueList(): void;

  getManualRequestList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setManualRequestList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearManualRequestList(): void;
  addManualRequest(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  getRoleRequestList(): Array<SittelleTypeTask_pb.TaskRole>;
  setRoleRequestList(value: Array<SittelleTypeTask_pb.TaskRole>): void;
  clearRoleRequestList(): void;
  addRoleRequest(value?: SittelleTypeTask_pb.TaskRole, index?: number): SittelleTypeTask_pb.TaskRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalInputSett.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalInputSett): ExternalInputSett.AsObject;
  static serializeBinaryToWriter(message: ExternalInputSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalInputSett;
  static deserializeBinaryFromReader(message: ExternalInputSett, reader: jspb.BinaryReader): ExternalInputSett;
}

export namespace ExternalInputSett {
  export type AsObject = {
    ind: number,
    subtaskPathInd: number,
    fieldManual: number,
    fieldAuto: number,
    statusInd: number,
    valueList?: SittelleTypeTask_pb.TaskFieldsInputValues.AsObject,
    manualRequestList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
    roleRequestList: Array<SittelleTypeTask_pb.TaskRole.AsObject>,
  }
}

export class ManualValueCardInfo extends jspb.Message {
  getManualValue(): SittelleTypeManual_pb.ManualValue | undefined;
  setManualValue(value?: SittelleTypeManual_pb.ManualValue): void;
  hasManualValue(): boolean;
  clearManualValue(): void;

  getParamCaption(): string;
  setParamCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualValueCardInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ManualValueCardInfo): ManualValueCardInfo.AsObject;
  static serializeBinaryToWriter(message: ManualValueCardInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualValueCardInfo;
  static deserializeBinaryFromReader(message: ManualValueCardInfo, reader: jspb.BinaryReader): ManualValueCardInfo;
}

export namespace ManualValueCardInfo {
  export type AsObject = {
    manualValue?: SittelleTypeManual_pb.ManualValue.AsObject,
    paramCaption: string,
  }
}

export class TaskHistoryItem extends jspb.Message {
  getDateApply(): number;
  setDateApply(value: number): void;

  getAccountApply(): SittelleTypeTask_pb.Account | undefined;
  setAccountApply(value?: SittelleTypeTask_pb.Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getAction(): number;
  setAction(value: number): void;

  getField(): number;
  setField(value: number): void;

  getApplyData(): string;
  setApplyData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskHistoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: TaskHistoryItem): TaskHistoryItem.AsObject;
  static serializeBinaryToWriter(message: TaskHistoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskHistoryItem;
  static deserializeBinaryFromReader(message: TaskHistoryItem, reader: jspb.BinaryReader): TaskHistoryItem;
}

export namespace TaskHistoryItem {
  export type AsObject = {
    dateApply: number,
    accountApply?: SittelleTypeTask_pb.Account.AsObject,
    sessInd: number,
    action: number,
    field: number,
    applyData: string,
  }
}

