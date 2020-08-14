import * as jspb from "google-protobuf"

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';
import * as SittelleConst_pb from './SittelleConst_pb';

export class NotifyFieldValue extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getValueCaption(): string;
  setValueCaption(value: string): void;

  getValueData(): Uint8Array | string;
  getValueData_asU8(): Uint8Array;
  getValueData_asB64(): string;
  setValueData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyFieldValue.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyFieldValue): NotifyFieldValue.AsObject;
  static serializeBinaryToWriter(message: NotifyFieldValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyFieldValue;
  static deserializeBinaryFromReader(message: NotifyFieldValue, reader: jspb.BinaryReader): NotifyFieldValue;
}

export namespace NotifyFieldValue {
  export type AsObject = {
    ind: number,
    valueCaption: string,
    valueData: Uint8Array | string,
  }
}

export class TaskChangeNotification extends jspb.Message {
  getActionType(): SittelleConst_pb.EnumTaskAction;
  setActionType(value: SittelleConst_pb.EnumTaskAction): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskSett(): SittelleTypeTask_pb.TaskSett | undefined;
  setTaskSett(value?: SittelleTypeTask_pb.TaskSett): void;
  hasTaskSett(): boolean;
  clearTaskSett(): void;

  getAccountApply(): SittelleTypeTask_pb.Account | undefined;
  setAccountApply(value?: SittelleTypeTask_pb.Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  getApplyDate(): number;
  setApplyDate(value: number): void;

  getFieldValueListList(): Array<NotifyFieldValue>;
  setFieldValueListList(value: Array<NotifyFieldValue>): void;
  clearFieldValueListList(): void;
  addFieldValueList(value?: NotifyFieldValue, index?: number): NotifyFieldValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskChangeNotification.AsObject;
  static toObject(includeInstance: boolean, msg: TaskChangeNotification): TaskChangeNotification.AsObject;
  static serializeBinaryToWriter(message: TaskChangeNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskChangeNotification;
  static deserializeBinaryFromReader(message: TaskChangeNotification, reader: jspb.BinaryReader): TaskChangeNotification;
}

export namespace TaskChangeNotification {
  export type AsObject = {
    actionType: SittelleConst_pb.EnumTaskAction,
    sessInd: number,
    taskSett?: SittelleTypeTask_pb.TaskSett.AsObject,
    accountApply?: SittelleTypeTask_pb.Account.AsObject,
    applyDate: number,
    fieldValueListList: Array<NotifyFieldValue.AsObject>,
  }
}

export class Notification extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  getObject(): string;
  setObject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    type: number,
    object: string,
  }
}

