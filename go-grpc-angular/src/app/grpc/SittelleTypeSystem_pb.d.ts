import * as jspb from "google-protobuf"

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';

export class RoleNotifyType extends jspb.Message {
  getRootTasktypeInd(): number;
  setRootTasktypeInd(value: number): void;

  getTasktypeInd(): number;
  setTasktypeInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getTaskroleInd(): number;
  setTaskroleInd(value: number): void;

  getNotify(): number;
  setNotify(value: number): void;

  getAccountListList(): Array<SittelleTypeTask_pb.Account>;
  setAccountListList(value: Array<SittelleTypeTask_pb.Account>): void;
  clearAccountListList(): void;
  addAccountList(value?: SittelleTypeTask_pb.Account, index?: number): SittelleTypeTask_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleNotifyType.AsObject;
  static toObject(includeInstance: boolean, msg: RoleNotifyType): RoleNotifyType.AsObject;
  static serializeBinaryToWriter(message: RoleNotifyType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleNotifyType;
  static deserializeBinaryFromReader(message: RoleNotifyType, reader: jspb.BinaryReader): RoleNotifyType;
}

export namespace RoleNotifyType {
  export type AsObject = {
    rootTasktypeInd: number,
    tasktypeInd: number,
    statusInd: number,
    taskroleInd: number,
    notify: number,
    accountListList: Array<SittelleTypeTask_pb.Account.AsObject>,
  }
}

export class DemmandItem extends jspb.Message {
  getRootTasktypeInd(): number;
  setRootTasktypeInd(value: number): void;

  getTasktypeInd(): number;
  setTasktypeInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getDemand(): SittelleTypeTask_pb.RoleDemand | undefined;
  setDemand(value?: SittelleTypeTask_pb.RoleDemand): void;
  hasDemand(): boolean;
  clearDemand(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DemmandItem.AsObject;
  static toObject(includeInstance: boolean, msg: DemmandItem): DemmandItem.AsObject;
  static serializeBinaryToWriter(message: DemmandItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DemmandItem;
  static deserializeBinaryFromReader(message: DemmandItem, reader: jspb.BinaryReader): DemmandItem;
}

export namespace DemmandItem {
  export type AsObject = {
    rootTasktypeInd: number,
    tasktypeInd: number,
    statusInd: number,
    demand?: SittelleTypeTask_pb.RoleDemand.AsObject,
  }
}

export class RoleDemandItem extends jspb.Message {
  getRoleind(): number;
  setRoleind(value: number): void;

  getDemandListList(): Array<DemmandItem>;
  setDemandListList(value: Array<DemmandItem>): void;
  clearDemandListList(): void;
  addDemandList(value?: DemmandItem, index?: number): DemmandItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDemandItem.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDemandItem): RoleDemandItem.AsObject;
  static serializeBinaryToWriter(message: RoleDemandItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDemandItem;
  static deserializeBinaryFromReader(message: RoleDemandItem, reader: jspb.BinaryReader): RoleDemandItem;
}

export namespace RoleDemandItem {
  export type AsObject = {
    roleind: number,
    demandListList: Array<DemmandItem.AsObject>,
  }
}

export class RoleDemandType extends jspb.Message {
  getRootTasktypeInd(): number;
  setRootTasktypeInd(value: number): void;

  getTasktypeInd(): number;
  setTasktypeInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getTaskroleInd(): number;
  setTaskroleInd(value: number): void;

  getDemand(): SittelleTypeTask_pb.RoleDemand | undefined;
  setDemand(value?: SittelleTypeTask_pb.RoleDemand): void;
  hasDemand(): boolean;
  clearDemand(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDemandType.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDemandType): RoleDemandType.AsObject;
  static serializeBinaryToWriter(message: RoleDemandType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDemandType;
  static deserializeBinaryFromReader(message: RoleDemandType, reader: jspb.BinaryReader): RoleDemandType;
}

export namespace RoleDemandType {
  export type AsObject = {
    rootTasktypeInd: number,
    tasktypeInd: number,
    statusInd: number,
    taskroleInd: number,
    demand?: SittelleTypeTask_pb.RoleDemand.AsObject,
  }
}

export class RoleRightType extends jspb.Message {
  getRootTasktypeInd(): number;
  setRootTasktypeInd(value: number): void;

  getTasktypeInd(): number;
  setTasktypeInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getTaskroleInd(): number;
  setTaskroleInd(value: number): void;

  getRight(): number;
  setRight(value: number): void;

  getAccountListList(): Array<SittelleTypeTask_pb.Account>;
  setAccountListList(value: Array<SittelleTypeTask_pb.Account>): void;
  clearAccountListList(): void;
  addAccountList(value?: SittelleTypeTask_pb.Account, index?: number): SittelleTypeTask_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleRightType.AsObject;
  static toObject(includeInstance: boolean, msg: RoleRightType): RoleRightType.AsObject;
  static serializeBinaryToWriter(message: RoleRightType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleRightType;
  static deserializeBinaryFromReader(message: RoleRightType, reader: jspb.BinaryReader): RoleRightType;
}

export namespace RoleRightType {
  export type AsObject = {
    rootTasktypeInd: number,
    tasktypeInd: number,
    statusInd: number,
    taskroleInd: number,
    right: number,
    accountListList: Array<SittelleTypeTask_pb.Account.AsObject>,
  }
}

export class SessionInfo extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getId(): string;
  setId(value: string): void;

  getDateStart(): number;
  setDateStart(value: number): void;

  getDateEnd(): number;
  setDateEnd(value: number): void;

  getIp(): string;
  setIp(value: string): void;

  getConnectionContext(): string;
  setConnectionContext(value: string): void;

  getAccount(): SittelleTypeTask_pb.Account | undefined;
  setAccount(value?: SittelleTypeTask_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SessionInfo): SessionInfo.AsObject;
  static serializeBinaryToWriter(message: SessionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionInfo;
  static deserializeBinaryFromReader(message: SessionInfo, reader: jspb.BinaryReader): SessionInfo;
}

export namespace SessionInfo {
  export type AsObject = {
    ind: number,
    id: string,
    dateStart: number,
    dateEnd: number,
    ip: string,
    connectionContext: string,
    account?: SittelleTypeTask_pb.Account.AsObject,
  }
}

