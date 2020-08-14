import * as jspb from "google-protobuf"

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';
import * as SittelleTypeSystem_pb from './SittelleTypeSystem_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';

export class AccountByCaptionRequest extends jspb.Message {
  getCaption(): string;
  setCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountByCaptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountByCaptionRequest): AccountByCaptionRequest.AsObject;
  static serializeBinaryToWriter(message: AccountByCaptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountByCaptionRequest;
  static deserializeBinaryFromReader(message: AccountByCaptionRequest, reader: jspb.BinaryReader): AccountByCaptionRequest;
}

export namespace AccountByCaptionRequest {
  export type AsObject = {
    caption: string,
  }
}

export class AccountByCaptionRes extends jspb.Message {
  getAccount(): SittelleTypeTask_pb.Account | undefined;
  setAccount(value?: SittelleTypeTask_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountByCaptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountByCaptionRes): AccountByCaptionRes.AsObject;
  static serializeBinaryToWriter(message: AccountByCaptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountByCaptionRes;
  static deserializeBinaryFromReader(message: AccountByCaptionRes, reader: jspb.BinaryReader): AccountByCaptionRes;
}

export namespace AccountByCaptionRes {
  export type AsObject = {
    account?: SittelleTypeTask_pb.Account.AsObject,
  }
}

export class AccountAddRequest extends jspb.Message {
  getAccount(): SittelleTypeTask_pb.Account | undefined;
  setAccount(value?: SittelleTypeTask_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAddRequest): AccountAddRequest.AsObject;
  static serializeBinaryToWriter(message: AccountAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAddRequest;
  static deserializeBinaryFromReader(message: AccountAddRequest, reader: jspb.BinaryReader): AccountAddRequest;
}

export namespace AccountAddRequest {
  export type AsObject = {
    account?: SittelleTypeTask_pb.Account.AsObject,
  }
}

export class AccountAddRes extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAddRes): AccountAddRes.AsObject;
  static serializeBinaryToWriter(message: AccountAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAddRes;
  static deserializeBinaryFromReader(message: AccountAddRes, reader: jspb.BinaryReader): AccountAddRes;
}

export namespace AccountAddRes {
  export type AsObject = {
    accountInd: number,
  }
}

export class AccountChangeRequest extends jspb.Message {
  getAccount(): SittelleTypeTask_pb.Account | undefined;
  setAccount(value?: SittelleTypeTask_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountChangeRequest): AccountChangeRequest.AsObject;
  static serializeBinaryToWriter(message: AccountChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountChangeRequest;
  static deserializeBinaryFromReader(message: AccountChangeRequest, reader: jspb.BinaryReader): AccountChangeRequest;
}

export namespace AccountChangeRequest {
  export type AsObject = {
    account?: SittelleTypeTask_pb.Account.AsObject,
  }
}

export class AccountChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountChangeRes): AccountChangeRes.AsObject;
  static serializeBinaryToWriter(message: AccountChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountChangeRes;
  static deserializeBinaryFromReader(message: AccountChangeRes, reader: jspb.BinaryReader): AccountChangeRes;
}

export namespace AccountChangeRes {
  export type AsObject = {
  }
}

export class AccountRemoveRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountRemoveRequest): AccountRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: AccountRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountRemoveRequest;
  static deserializeBinaryFromReader(message: AccountRemoveRequest, reader: jspb.BinaryReader): AccountRemoveRequest;
}

export namespace AccountRemoveRequest {
  export type AsObject = {
    accountInd: number,
  }
}

export class AccountRemoveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountRemoveRes): AccountRemoveRes.AsObject;
  static serializeBinaryToWriter(message: AccountRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountRemoveRes;
  static deserializeBinaryFromReader(message: AccountRemoveRes, reader: jspb.BinaryReader): AccountRemoveRes;
}

export namespace AccountRemoveRes {
  export type AsObject = {
  }
}

export class AccountByIndexRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountByIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountByIndexRequest): AccountByIndexRequest.AsObject;
  static serializeBinaryToWriter(message: AccountByIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountByIndexRequest;
  static deserializeBinaryFromReader(message: AccountByIndexRequest, reader: jspb.BinaryReader): AccountByIndexRequest;
}

export namespace AccountByIndexRequest {
  export type AsObject = {
    accountInd: number,
  }
}

export class AccountByIndexRes extends jspb.Message {
  getAccount(): SittelleTypeTask_pb.Account | undefined;
  setAccount(value?: SittelleTypeTask_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountByIndexRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountByIndexRes): AccountByIndexRes.AsObject;
  static serializeBinaryToWriter(message: AccountByIndexRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountByIndexRes;
  static deserializeBinaryFromReader(message: AccountByIndexRes, reader: jspb.BinaryReader): AccountByIndexRes;
}

export namespace AccountByIndexRes {
  export type AsObject = {
    account?: SittelleTypeTask_pb.Account.AsObject,
  }
}

export class AccountListByAccountGroupRequest extends jspb.Message {
  getAccountgroupInd(): number;
  setAccountgroupInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountListByAccountGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountListByAccountGroupRequest): AccountListByAccountGroupRequest.AsObject;
  static serializeBinaryToWriter(message: AccountListByAccountGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountListByAccountGroupRequest;
  static deserializeBinaryFromReader(message: AccountListByAccountGroupRequest, reader: jspb.BinaryReader): AccountListByAccountGroupRequest;
}

export namespace AccountListByAccountGroupRequest {
  export type AsObject = {
    accountgroupInd: number,
  }
}

export class AccountListByAccountGroupRes extends jspb.Message {
  getAccountListList(): Array<SittelleTypeTask_pb.Account>;
  setAccountListList(value: Array<SittelleTypeTask_pb.Account>): void;
  clearAccountListList(): void;
  addAccountList(value?: SittelleTypeTask_pb.Account, index?: number): SittelleTypeTask_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountListByAccountGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountListByAccountGroupRes): AccountListByAccountGroupRes.AsObject;
  static serializeBinaryToWriter(message: AccountListByAccountGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountListByAccountGroupRes;
  static deserializeBinaryFromReader(message: AccountListByAccountGroupRes, reader: jspb.BinaryReader): AccountListByAccountGroupRes;
}

export namespace AccountListByAccountGroupRes {
  export type AsObject = {
    accountListList: Array<SittelleTypeTask_pb.Account.AsObject>,
  }
}

export class AccountPasswordByCaptionRequest extends jspb.Message {
  getCaption(): string;
  setCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPasswordByCaptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPasswordByCaptionRequest): AccountPasswordByCaptionRequest.AsObject;
  static serializeBinaryToWriter(message: AccountPasswordByCaptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPasswordByCaptionRequest;
  static deserializeBinaryFromReader(message: AccountPasswordByCaptionRequest, reader: jspb.BinaryReader): AccountPasswordByCaptionRequest;
}

export namespace AccountPasswordByCaptionRequest {
  export type AsObject = {
    caption: string,
  }
}

export class AccountPasswordByCaptionRes extends jspb.Message {
  getPassw(): string;
  setPassw(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountPasswordByCaptionRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountPasswordByCaptionRes): AccountPasswordByCaptionRes.AsObject;
  static serializeBinaryToWriter(message: AccountPasswordByCaptionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountPasswordByCaptionRes;
  static deserializeBinaryFromReader(message: AccountPasswordByCaptionRes, reader: jspb.BinaryReader): AccountPasswordByCaptionRes;
}

export namespace AccountPasswordByCaptionRes {
  export type AsObject = {
    passw: string,
  }
}

export class AccountGroupListRequest extends jspb.Message {
  getOnlyActive(): boolean;
  setOnlyActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListRequest): AccountGroupListRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListRequest;
  static deserializeBinaryFromReader(message: AccountGroupListRequest, reader: jspb.BinaryReader): AccountGroupListRequest;
}

export namespace AccountGroupListRequest {
  export type AsObject = {
    onlyActive: boolean,
  }
}

export class AccountGroupListRes extends jspb.Message {
  getAccountgroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setAccountgroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearAccountgroupListList(): void;
  addAccountgroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListRes): AccountGroupListRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListRes;
  static deserializeBinaryFromReader(message: AccountGroupListRes, reader: jspb.BinaryReader): AccountGroupListRes;
}

export namespace AccountGroupListRes {
  export type AsObject = {
    accountgroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class AccountGroupAddRequest extends jspb.Message {
  getAccoutGruop(): SittelleTypeTask_pb.AccountGroup | undefined;
  setAccoutGruop(value?: SittelleTypeTask_pb.AccountGroup): void;
  hasAccoutGruop(): boolean;
  clearAccoutGruop(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupAddRequest): AccountGroupAddRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupAddRequest;
  static deserializeBinaryFromReader(message: AccountGroupAddRequest, reader: jspb.BinaryReader): AccountGroupAddRequest;
}

export namespace AccountGroupAddRequest {
  export type AsObject = {
    accoutGruop?: SittelleTypeTask_pb.AccountGroup.AsObject,
  }
}

export class AccountGroupAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupAddRes): AccountGroupAddRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupAddRes;
  static deserializeBinaryFromReader(message: AccountGroupAddRes, reader: jspb.BinaryReader): AccountGroupAddRes;
}

export namespace AccountGroupAddRes {
  export type AsObject = {
  }
}

export class AccountGroupChangeRequest extends jspb.Message {
  getAccoutGruop(): SittelleTypeTask_pb.AccountGroup | undefined;
  setAccoutGruop(value?: SittelleTypeTask_pb.AccountGroup): void;
  hasAccoutGruop(): boolean;
  clearAccoutGruop(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupChangeRequest): AccountGroupChangeRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupChangeRequest;
  static deserializeBinaryFromReader(message: AccountGroupChangeRequest, reader: jspb.BinaryReader): AccountGroupChangeRequest;
}

export namespace AccountGroupChangeRequest {
  export type AsObject = {
    accoutGruop?: SittelleTypeTask_pb.AccountGroup.AsObject,
  }
}

export class AccountGroupChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupChangeRes): AccountGroupChangeRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupChangeRes;
  static deserializeBinaryFromReader(message: AccountGroupChangeRes, reader: jspb.BinaryReader): AccountGroupChangeRes;
}

export namespace AccountGroupChangeRes {
  export type AsObject = {
  }
}

export class AccountGroupRemoveRequest extends jspb.Message {
  getAccountgroupInd(): number;
  setAccountgroupInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupRemoveRequest): AccountGroupRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupRemoveRequest;
  static deserializeBinaryFromReader(message: AccountGroupRemoveRequest, reader: jspb.BinaryReader): AccountGroupRemoveRequest;
}

export namespace AccountGroupRemoveRequest {
  export type AsObject = {
    accountgroupInd: number,
  }
}

export class AccountGroupRemoveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupRemoveRes): AccountGroupRemoveRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupRemoveRes;
  static deserializeBinaryFromReader(message: AccountGroupRemoveRes, reader: jspb.BinaryReader): AccountGroupRemoveRes;
}

export namespace AccountGroupRemoveRes {
  export type AsObject = {
  }
}

export class AccountGroupByIndexRequest extends jspb.Message {
  getAccountgroupInd(): number;
  setAccountgroupInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupByIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupByIndexRequest): AccountGroupByIndexRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupByIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupByIndexRequest;
  static deserializeBinaryFromReader(message: AccountGroupByIndexRequest, reader: jspb.BinaryReader): AccountGroupByIndexRequest;
}

export namespace AccountGroupByIndexRequest {
  export type AsObject = {
    accountgroupInd: number,
  }
}

export class AccountGroupByIndexRes extends jspb.Message {
  getAccoutGruop(): SittelleTypeTask_pb.AccountGroup | undefined;
  setAccoutGruop(value?: SittelleTypeTask_pb.AccountGroup): void;
  hasAccoutGruop(): boolean;
  clearAccoutGruop(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupByIndexRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupByIndexRes): AccountGroupByIndexRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupByIndexRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupByIndexRes;
  static deserializeBinaryFromReader(message: AccountGroupByIndexRes, reader: jspb.BinaryReader): AccountGroupByIndexRes;
}

export namespace AccountGroupByIndexRes {
  export type AsObject = {
    accoutGruop?: SittelleTypeTask_pb.AccountGroup.AsObject,
  }
}

export class AccountGroupListByRoleRequest extends jspb.Message {
  getRoleInd(): number;
  setRoleInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListByRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListByRoleRequest): AccountGroupListByRoleRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListByRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListByRoleRequest;
  static deserializeBinaryFromReader(message: AccountGroupListByRoleRequest, reader: jspb.BinaryReader): AccountGroupListByRoleRequest;
}

export namespace AccountGroupListByRoleRequest {
  export type AsObject = {
    roleInd: number,
  }
}

export class AccountGroupListByRoleRes extends jspb.Message {
  getAccountgroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setAccountgroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearAccountgroupListList(): void;
  addAccountgroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListByRoleRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListByRoleRes): AccountGroupListByRoleRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListByRoleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListByRoleRes;
  static deserializeBinaryFromReader(message: AccountGroupListByRoleRes, reader: jspb.BinaryReader): AccountGroupListByRoleRes;
}

export namespace AccountGroupListByRoleRes {
  export type AsObject = {
    accountgroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class AccountGroupAccountAddRequest extends jspb.Message {
  getAccountgroupInd(): number;
  setAccountgroupInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupAccountAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupAccountAddRequest): AccountGroupAccountAddRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupAccountAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupAccountAddRequest;
  static deserializeBinaryFromReader(message: AccountGroupAccountAddRequest, reader: jspb.BinaryReader): AccountGroupAccountAddRequest;
}

export namespace AccountGroupAccountAddRequest {
  export type AsObject = {
    accountgroupInd: number,
    accountInd: number,
  }
}

export class AccountGroupAccountAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupAccountAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupAccountAddRes): AccountGroupAccountAddRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupAccountAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupAccountAddRes;
  static deserializeBinaryFromReader(message: AccountGroupAccountAddRes, reader: jspb.BinaryReader): AccountGroupAccountAddRes;
}

export namespace AccountGroupAccountAddRes {
  export type AsObject = {
  }
}

export class AccountGroupAccountRemoveRequest extends jspb.Message {
  getAccountgroupInd(): number;
  setAccountgroupInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupAccountRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupAccountRemoveRequest): AccountGroupAccountRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupAccountRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupAccountRemoveRequest;
  static deserializeBinaryFromReader(message: AccountGroupAccountRemoveRequest, reader: jspb.BinaryReader): AccountGroupAccountRemoveRequest;
}

export namespace AccountGroupAccountRemoveRequest {
  export type AsObject = {
    accountgroupInd: number,
    accountInd: number,
  }
}

export class AccountGroupAccountRemoveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupAccountRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupAccountRemoveRes): AccountGroupAccountRemoveRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupAccountRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupAccountRemoveRes;
  static deserializeBinaryFromReader(message: AccountGroupAccountRemoveRes, reader: jspb.BinaryReader): AccountGroupAccountRemoveRes;
}

export namespace AccountGroupAccountRemoveRes {
  export type AsObject = {
  }
}

export class RoleListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleListRequest): RoleListRequest.AsObject;
  static serializeBinaryToWriter(message: RoleListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleListRequest;
  static deserializeBinaryFromReader(message: RoleListRequest, reader: jspb.BinaryReader): RoleListRequest;
}

export namespace RoleListRequest {
  export type AsObject = {
  }
}

export class RoleListRes extends jspb.Message {
  getRoleListList(): Array<SittelleTypeTask_pb.TaskRoleSett>;
  setRoleListList(value: Array<SittelleTypeTask_pb.TaskRoleSett>): void;
  clearRoleListList(): void;
  addRoleList(value?: SittelleTypeTask_pb.TaskRoleSett, index?: number): SittelleTypeTask_pb.TaskRoleSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleListRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleListRes): RoleListRes.AsObject;
  static serializeBinaryToWriter(message: RoleListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleListRes;
  static deserializeBinaryFromReader(message: RoleListRes, reader: jspb.BinaryReader): RoleListRes;
}

export namespace RoleListRes {
  export type AsObject = {
    roleListList: Array<SittelleTypeTask_pb.TaskRoleSett.AsObject>,
  }
}

export class TaskTemplateListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateListRequest): TaskTemplateListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateListRequest;
  static deserializeBinaryFromReader(message: TaskTemplateListRequest, reader: jspb.BinaryReader): TaskTemplateListRequest;
}

export namespace TaskTemplateListRequest {
  export type AsObject = {
  }
}

export class TaskTemplateListRes extends jspb.Message {
  getTemplateListList(): Array<SittelleTypeTask_pb.TaskTemplateText>;
  setTemplateListList(value: Array<SittelleTypeTask_pb.TaskTemplateText>): void;
  clearTemplateListList(): void;
  addTemplateList(value?: SittelleTypeTask_pb.TaskTemplateText, index?: number): SittelleTypeTask_pb.TaskTemplateText;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateListRes): TaskTemplateListRes.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateListRes;
  static deserializeBinaryFromReader(message: TaskTemplateListRes, reader: jspb.BinaryReader): TaskTemplateListRes;
}

export namespace TaskTemplateListRes {
  export type AsObject = {
    templateListList: Array<SittelleTypeTask_pb.TaskTemplateText.AsObject>,
  }
}

export class StatusRoleRightListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightListRequest): StatusRoleRightListRequest.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightListRequest;
  static deserializeBinaryFromReader(message: StatusRoleRightListRequest, reader: jspb.BinaryReader): StatusRoleRightListRequest;
}

export namespace StatusRoleRightListRequest {
  export type AsObject = {
  }
}

export class StatusRoleRightListRes extends jspb.Message {
  getRightListList(): Array<SittelleTypeTask_pb.StatusRoleRight>;
  setRightListList(value: Array<SittelleTypeTask_pb.StatusRoleRight>): void;
  clearRightListList(): void;
  addRightList(value?: SittelleTypeTask_pb.StatusRoleRight, index?: number): SittelleTypeTask_pb.StatusRoleRight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightListRes): StatusRoleRightListRes.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightListRes;
  static deserializeBinaryFromReader(message: StatusRoleRightListRes, reader: jspb.BinaryReader): StatusRoleRightListRes;
}

export namespace StatusRoleRightListRes {
  export type AsObject = {
    rightListList: Array<SittelleTypeTask_pb.StatusRoleRight.AsObject>,
  }
}

export class StatusRoleRightByAccountGroupRequest extends jspb.Message {
  getAccountgroupInd(): number;
  setAccountgroupInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightByAccountGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightByAccountGroupRequest): StatusRoleRightByAccountGroupRequest.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightByAccountGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightByAccountGroupRequest;
  static deserializeBinaryFromReader(message: StatusRoleRightByAccountGroupRequest, reader: jspb.BinaryReader): StatusRoleRightByAccountGroupRequest;
}

export namespace StatusRoleRightByAccountGroupRequest {
  export type AsObject = {
    accountgroupInd: number,
  }
}

export class StatusRoleRightByAccountGroupRes extends jspb.Message {
  getRightListList(): Array<SittelleTypeTask_pb.StatusRoleRight>;
  setRightListList(value: Array<SittelleTypeTask_pb.StatusRoleRight>): void;
  clearRightListList(): void;
  addRightList(value?: SittelleTypeTask_pb.StatusRoleRight, index?: number): SittelleTypeTask_pb.StatusRoleRight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightByAccountGroupRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightByAccountGroupRes): StatusRoleRightByAccountGroupRes.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightByAccountGroupRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightByAccountGroupRes;
  static deserializeBinaryFromReader(message: StatusRoleRightByAccountGroupRes, reader: jspb.BinaryReader): StatusRoleRightByAccountGroupRes;
}

export namespace StatusRoleRightByAccountGroupRes {
  export type AsObject = {
    rightListList: Array<SittelleTypeTask_pb.StatusRoleRight.AsObject>,
  }
}

export class StatusRoleRightAddRequest extends jspb.Message {
  getRightValue(): SittelleTypeTask_pb.StatusRoleRight | undefined;
  setRightValue(value?: SittelleTypeTask_pb.StatusRoleRight): void;
  hasRightValue(): boolean;
  clearRightValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightAddRequest): StatusRoleRightAddRequest.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightAddRequest;
  static deserializeBinaryFromReader(message: StatusRoleRightAddRequest, reader: jspb.BinaryReader): StatusRoleRightAddRequest;
}

export namespace StatusRoleRightAddRequest {
  export type AsObject = {
    rightValue?: SittelleTypeTask_pb.StatusRoleRight.AsObject,
  }
}

export class StatusRoleRightAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightAddRes): StatusRoleRightAddRes.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightAddRes;
  static deserializeBinaryFromReader(message: StatusRoleRightAddRes, reader: jspb.BinaryReader): StatusRoleRightAddRes;
}

export namespace StatusRoleRightAddRes {
  export type AsObject = {
  }
}

export class StatusRoleRightChangeRequest extends jspb.Message {
  getRightValue(): SittelleTypeTask_pb.StatusRoleRight | undefined;
  setRightValue(value?: SittelleTypeTask_pb.StatusRoleRight): void;
  hasRightValue(): boolean;
  clearRightValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightChangeRequest): StatusRoleRightChangeRequest.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightChangeRequest;
  static deserializeBinaryFromReader(message: StatusRoleRightChangeRequest, reader: jspb.BinaryReader): StatusRoleRightChangeRequest;
}

export namespace StatusRoleRightChangeRequest {
  export type AsObject = {
    rightValue?: SittelleTypeTask_pb.StatusRoleRight.AsObject,
  }
}

export class StatusRoleRightChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightChangeRes): StatusRoleRightChangeRes.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightChangeRes;
  static deserializeBinaryFromReader(message: StatusRoleRightChangeRes, reader: jspb.BinaryReader): StatusRoleRightChangeRes;
}

export namespace StatusRoleRightChangeRes {
  export type AsObject = {
  }
}

export class StatusRoleRightRemoveRequest extends jspb.Message {
  getRightValue(): SittelleTypeTask_pb.StatusRoleRight | undefined;
  setRightValue(value?: SittelleTypeTask_pb.StatusRoleRight): void;
  hasRightValue(): boolean;
  clearRightValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightRemoveRequest): StatusRoleRightRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightRemoveRequest;
  static deserializeBinaryFromReader(message: StatusRoleRightRemoveRequest, reader: jspb.BinaryReader): StatusRoleRightRemoveRequest;
}

export namespace StatusRoleRightRemoveRequest {
  export type AsObject = {
    rightValue?: SittelleTypeTask_pb.StatusRoleRight.AsObject,
  }
}

export class StatusRoleRightRemoveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRightRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRightRemoveRes): StatusRoleRightRemoveRes.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRightRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRightRemoveRes;
  static deserializeBinaryFromReader(message: StatusRoleRightRemoveRes, reader: jspb.BinaryReader): StatusRoleRightRemoveRes;
}

export namespace StatusRoleRightRemoveRes {
  export type AsObject = {
  }
}

export class StatusPathAutoApplySubtasksListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathAutoApplySubtasksListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathAutoApplySubtasksListRequest): StatusPathAutoApplySubtasksListRequest.AsObject;
  static serializeBinaryToWriter(message: StatusPathAutoApplySubtasksListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathAutoApplySubtasksListRequest;
  static deserializeBinaryFromReader(message: StatusPathAutoApplySubtasksListRequest, reader: jspb.BinaryReader): StatusPathAutoApplySubtasksListRequest;
}

export namespace StatusPathAutoApplySubtasksListRequest {
  export type AsObject = {
  }
}

export class StatusPathAutoApplySubtasksListRes extends jspb.Message {
  getAutoApplyListList(): Array<SittelleTypeTask_pb.StatusPathAutoApplySubtasks>;
  setAutoApplyListList(value: Array<SittelleTypeTask_pb.StatusPathAutoApplySubtasks>): void;
  clearAutoApplyListList(): void;
  addAutoApplyList(value?: SittelleTypeTask_pb.StatusPathAutoApplySubtasks, index?: number): SittelleTypeTask_pb.StatusPathAutoApplySubtasks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathAutoApplySubtasksListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathAutoApplySubtasksListRes): StatusPathAutoApplySubtasksListRes.AsObject;
  static serializeBinaryToWriter(message: StatusPathAutoApplySubtasksListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathAutoApplySubtasksListRes;
  static deserializeBinaryFromReader(message: StatusPathAutoApplySubtasksListRes, reader: jspb.BinaryReader): StatusPathAutoApplySubtasksListRes;
}

export namespace StatusPathAutoApplySubtasksListRes {
  export type AsObject = {
    autoApplyListList: Array<SittelleTypeTask_pb.StatusPathAutoApplySubtasks.AsObject>,
  }
}

export class StatusPathAutoApplyParentListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathAutoApplyParentListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathAutoApplyParentListRequest): StatusPathAutoApplyParentListRequest.AsObject;
  static serializeBinaryToWriter(message: StatusPathAutoApplyParentListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathAutoApplyParentListRequest;
  static deserializeBinaryFromReader(message: StatusPathAutoApplyParentListRequest, reader: jspb.BinaryReader): StatusPathAutoApplyParentListRequest;
}

export namespace StatusPathAutoApplyParentListRequest {
  export type AsObject = {
  }
}

export class StatusPathAutoApplyParentListRes extends jspb.Message {
  getAutoApplyListList(): Array<SittelleTypeTask_pb.StatusPathAutoApplyParent>;
  setAutoApplyListList(value: Array<SittelleTypeTask_pb.StatusPathAutoApplyParent>): void;
  clearAutoApplyListList(): void;
  addAutoApplyList(value?: SittelleTypeTask_pb.StatusPathAutoApplyParent, index?: number): SittelleTypeTask_pb.StatusPathAutoApplyParent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathAutoApplyParentListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathAutoApplyParentListRes): StatusPathAutoApplyParentListRes.AsObject;
  static serializeBinaryToWriter(message: StatusPathAutoApplyParentListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathAutoApplyParentListRes;
  static deserializeBinaryFromReader(message: StatusPathAutoApplyParentListRes, reader: jspb.BinaryReader): StatusPathAutoApplyParentListRes;
}

export namespace StatusPathAutoApplyParentListRes {
  export type AsObject = {
    autoApplyListList: Array<SittelleTypeTask_pb.StatusPathAutoApplyParent.AsObject>,
  }
}

export class StateCommonListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateCommonListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateCommonListRequest): StateCommonListRequest.AsObject;
  static serializeBinaryToWriter(message: StateCommonListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateCommonListRequest;
  static deserializeBinaryFromReader(message: StateCommonListRequest, reader: jspb.BinaryReader): StateCommonListRequest;
}

export namespace StateCommonListRequest {
  export type AsObject = {
  }
}

export class StateCommonListRes extends jspb.Message {
  getStateBitListList(): Array<SittelleTypeDictionary_pb.StateBit>;
  setStateBitListList(value: Array<SittelleTypeDictionary_pb.StateBit>): void;
  clearStateBitListList(): void;
  addStateBitList(value?: SittelleTypeDictionary_pb.StateBit, index?: number): SittelleTypeDictionary_pb.StateBit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateCommonListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StateCommonListRes): StateCommonListRes.AsObject;
  static serializeBinaryToWriter(message: StateCommonListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateCommonListRes;
  static deserializeBinaryFromReader(message: StateCommonListRes, reader: jspb.BinaryReader): StateCommonListRes;
}

export namespace StateCommonListRes {
  export type AsObject = {
    stateBitListList: Array<SittelleTypeDictionary_pb.StateBit.AsObject>,
  }
}

export class StateAccountListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateAccountListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StateAccountListRequest): StateAccountListRequest.AsObject;
  static serializeBinaryToWriter(message: StateAccountListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateAccountListRequest;
  static deserializeBinaryFromReader(message: StateAccountListRequest, reader: jspb.BinaryReader): StateAccountListRequest;
}

export namespace StateAccountListRequest {
  export type AsObject = {
  }
}

export class StateAccountListRes extends jspb.Message {
  getStateBitListList(): Array<SittelleTypeDictionary_pb.StateBit>;
  setStateBitListList(value: Array<SittelleTypeDictionary_pb.StateBit>): void;
  clearStateBitListList(): void;
  addStateBitList(value?: SittelleTypeDictionary_pb.StateBit, index?: number): SittelleTypeDictionary_pb.StateBit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateAccountListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StateAccountListRes): StateAccountListRes.AsObject;
  static serializeBinaryToWriter(message: StateAccountListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateAccountListRes;
  static deserializeBinaryFromReader(message: StateAccountListRes, reader: jspb.BinaryReader): StateAccountListRes;
}

export namespace StateAccountListRes {
  export type AsObject = {
    stateBitListList: Array<SittelleTypeDictionary_pb.StateBit.AsObject>,
  }
}

export class ConnectionCreateRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getClientType(): number;
  setClientType(value: number): void;

  getClientIp(): string;
  setClientIp(value: string): void;

  getClientPort(): number;
  setClientPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionCreateRequest): ConnectionCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectionCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionCreateRequest;
  static deserializeBinaryFromReader(message: ConnectionCreateRequest, reader: jspb.BinaryReader): ConnectionCreateRequest;
}

export namespace ConnectionCreateRequest {
  export type AsObject = {
    clientId: string,
    user: string,
    password: string,
    clientType: number,
    clientIp: string,
    clientPort: number,
  }
}

export class ConnectionCreateRes extends jspb.Message {
  getAccount(): SittelleTypeTask_pb.Account | undefined;
  setAccount(value?: SittelleTypeTask_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getSessId(): string;
  setSessId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionCreateRes.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionCreateRes): ConnectionCreateRes.AsObject;
  static serializeBinaryToWriter(message: ConnectionCreateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionCreateRes;
  static deserializeBinaryFromReader(message: ConnectionCreateRes, reader: jspb.BinaryReader): ConnectionCreateRes;
}

export namespace ConnectionCreateRes {
  export type AsObject = {
    account?: SittelleTypeTask_pb.Account.AsObject,
    sessInd: number,
    sessId: string,
  }
}

export class ConnectionCloseRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionCloseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionCloseRequest): ConnectionCloseRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectionCloseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionCloseRequest;
  static deserializeBinaryFromReader(message: ConnectionCloseRequest, reader: jspb.BinaryReader): ConnectionCloseRequest;
}

export namespace ConnectionCloseRequest {
  export type AsObject = {
    sessInd: number,
  }
}

export class ConnectionCloseRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionCloseRes.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionCloseRes): ConnectionCloseRes.AsObject;
  static serializeBinaryToWriter(message: ConnectionCloseRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionCloseRes;
  static deserializeBinaryFromReader(message: ConnectionCloseRes, reader: jspb.BinaryReader): ConnectionCloseRes;
}

export namespace ConnectionCloseRes {
  export type AsObject = {
  }
}

export class ConnectionStatusRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionStatusRequest): ConnectionStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectionStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionStatusRequest;
  static deserializeBinaryFromReader(message: ConnectionStatusRequest, reader: jspb.BinaryReader): ConnectionStatusRequest;
}

export namespace ConnectionStatusRequest {
  export type AsObject = {
    sessInd: number,
  }
}

export class ConnectionStatusRes extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionStatusRes): ConnectionStatusRes.AsObject;
  static serializeBinaryToWriter(message: ConnectionStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionStatusRes;
  static deserializeBinaryFromReader(message: ConnectionStatusRes, reader: jspb.BinaryReader): ConnectionStatusRes;
}

export namespace ConnectionStatusRes {
  export type AsObject = {
    status: number,
  }
}

export class ConnectionVersionRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionVersionRequest): ConnectionVersionRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectionVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionVersionRequest;
  static deserializeBinaryFromReader(message: ConnectionVersionRequest, reader: jspb.BinaryReader): ConnectionVersionRequest;
}

export namespace ConnectionVersionRequest {
  export type AsObject = {
    sessInd: number,
  }
}

export class ConnectionVersionRes extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionVersionRes.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionVersionRes): ConnectionVersionRes.AsObject;
  static serializeBinaryToWriter(message: ConnectionVersionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionVersionRes;
  static deserializeBinaryFromReader(message: ConnectionVersionRes, reader: jspb.BinaryReader): ConnectionVersionRes;
}

export namespace ConnectionVersionRes {
  export type AsObject = {
    version: number,
  }
}

export class ConnectionAccessRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionAccessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionAccessRequest): ConnectionAccessRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectionAccessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionAccessRequest;
  static deserializeBinaryFromReader(message: ConnectionAccessRequest, reader: jspb.BinaryReader): ConnectionAccessRequest;
}

export namespace ConnectionAccessRequest {
  export type AsObject = {
    sessInd: number,
  }
}

export class ConnectionAccessRes extends jspb.Message {
  getAccessRight(): number;
  setAccessRight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionAccessRes.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionAccessRes): ConnectionAccessRes.AsObject;
  static serializeBinaryToWriter(message: ConnectionAccessRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionAccessRes;
  static deserializeBinaryFromReader(message: ConnectionAccessRes, reader: jspb.BinaryReader): ConnectionAccessRes;
}

export namespace ConnectionAccessRes {
  export type AsObject = {
    accessRight: number,
  }
}

export class SessionListRequest extends jspb.Message {
  getStartIndex(): number;
  setStartIndex(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessionListRequest): SessionListRequest.AsObject;
  static serializeBinaryToWriter(message: SessionListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionListRequest;
  static deserializeBinaryFromReader(message: SessionListRequest, reader: jspb.BinaryReader): SessionListRequest;
}

export namespace SessionListRequest {
  export type AsObject = {
    startIndex: number,
    count: number,
  }
}

export class SessionListRes extends jspb.Message {
  getSessionListList(): Array<SittelleTypeSystem_pb.SessionInfo>;
  setSessionListList(value: Array<SittelleTypeSystem_pb.SessionInfo>): void;
  clearSessionListList(): void;
  addSessionList(value?: SittelleTypeSystem_pb.SessionInfo, index?: number): SittelleTypeSystem_pb.SessionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionListRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessionListRes): SessionListRes.AsObject;
  static serializeBinaryToWriter(message: SessionListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionListRes;
  static deserializeBinaryFromReader(message: SessionListRes, reader: jspb.BinaryReader): SessionListRes;
}

export namespace SessionListRes {
  export type AsObject = {
    sessionListList: Array<SittelleTypeSystem_pb.SessionInfo.AsObject>,
  }
}

export class PanelListByAccountIndRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelListByAccountIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PanelListByAccountIndRequest): PanelListByAccountIndRequest.AsObject;
  static serializeBinaryToWriter(message: PanelListByAccountIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelListByAccountIndRequest;
  static deserializeBinaryFromReader(message: PanelListByAccountIndRequest, reader: jspb.BinaryReader): PanelListByAccountIndRequest;
}

export namespace PanelListByAccountIndRequest {
  export type AsObject = {
    accountInd: number,
  }
}

export class PanelListByAccountIndRes extends jspb.Message {
  getPanelListList(): Array<SittelleTypeDictionary_pb.AccountGroupPanel>;
  setPanelListList(value: Array<SittelleTypeDictionary_pb.AccountGroupPanel>): void;
  clearPanelListList(): void;
  addPanelList(value?: SittelleTypeDictionary_pb.AccountGroupPanel, index?: number): SittelleTypeDictionary_pb.AccountGroupPanel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelListByAccountIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: PanelListByAccountIndRes): PanelListByAccountIndRes.AsObject;
  static serializeBinaryToWriter(message: PanelListByAccountIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelListByAccountIndRes;
  static deserializeBinaryFromReader(message: PanelListByAccountIndRes, reader: jspb.BinaryReader): PanelListByAccountIndRes;
}

export namespace PanelListByAccountIndRes {
  export type AsObject = {
    panelListList: Array<SittelleTypeDictionary_pb.AccountGroupPanel.AsObject>,
  }
}

export class PanelSettingsGetRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  getRequestParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setRequestParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearRequestParamListList(): void;
  addRequestParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelSettingsGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PanelSettingsGetRequest): PanelSettingsGetRequest.AsObject;
  static serializeBinaryToWriter(message: PanelSettingsGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelSettingsGetRequest;
  static deserializeBinaryFromReader(message: PanelSettingsGetRequest, reader: jspb.BinaryReader): PanelSettingsGetRequest;
}

export namespace PanelSettingsGetRequest {
  export type AsObject = {
    accountInd: number,
    panelInd: number,
    requestParamListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
  }
}

export class PanelSettingsGetRes extends jspb.Message {
  getResponseParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setResponseParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearResponseParamListList(): void;
  addResponseParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  getPanel(): SittelleTypeDictionary_pb.AccountGroupPanel | undefined;
  setPanel(value?: SittelleTypeDictionary_pb.AccountGroupPanel): void;
  hasPanel(): boolean;
  clearPanel(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelSettingsGetRes.AsObject;
  static toObject(includeInstance: boolean, msg: PanelSettingsGetRes): PanelSettingsGetRes.AsObject;
  static serializeBinaryToWriter(message: PanelSettingsGetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelSettingsGetRes;
  static deserializeBinaryFromReader(message: PanelSettingsGetRes, reader: jspb.BinaryReader): PanelSettingsGetRes;
}

export namespace PanelSettingsGetRes {
  export type AsObject = {
    responseParamListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
    panel?: SittelleTypeDictionary_pb.AccountGroupPanel.AsObject,
  }
}

export class TaskTypeListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTypeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTypeListRequest): TaskTypeListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTypeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTypeListRequest;
  static deserializeBinaryFromReader(message: TaskTypeListRequest, reader: jspb.BinaryReader): TaskTypeListRequest;
}

export namespace TaskTypeListRequest {
  export type AsObject = {
  }
}

export class TaskTypeListRes extends jspb.Message {
  getTaskTypeListList(): Array<SittelleTypeTask_pb.TaskTypeSett>;
  setTaskTypeListList(value: Array<SittelleTypeTask_pb.TaskTypeSett>): void;
  clearTaskTypeListList(): void;
  addTaskTypeList(value?: SittelleTypeTask_pb.TaskTypeSett, index?: number): SittelleTypeTask_pb.TaskTypeSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTypeListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTypeListRes): TaskTypeListRes.AsObject;
  static serializeBinaryToWriter(message: TaskTypeListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTypeListRes;
  static deserializeBinaryFromReader(message: TaskTypeListRes, reader: jspb.BinaryReader): TaskTypeListRes;
}

export namespace TaskTypeListRes {
  export type AsObject = {
    taskTypeListList: Array<SittelleTypeTask_pb.TaskTypeSett.AsObject>,
  }
}

export class StatusListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusListRequest): StatusListRequest.AsObject;
  static serializeBinaryToWriter(message: StatusListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusListRequest;
  static deserializeBinaryFromReader(message: StatusListRequest, reader: jspb.BinaryReader): StatusListRequest;
}

export namespace StatusListRequest {
  export type AsObject = {
  }
}

export class StatusListRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusListRes): StatusListRes.AsObject;
  static serializeBinaryToWriter(message: StatusListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusListRes;
  static deserializeBinaryFromReader(message: StatusListRes, reader: jspb.BinaryReader): StatusListRes;
}

export namespace StatusListRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class StatusListByGroupIndRequest extends jspb.Message {
  getStatusGroupInd(): number;
  setStatusGroupInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusListByGroupIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusListByGroupIndRequest): StatusListByGroupIndRequest.AsObject;
  static serializeBinaryToWriter(message: StatusListByGroupIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusListByGroupIndRequest;
  static deserializeBinaryFromReader(message: StatusListByGroupIndRequest, reader: jspb.BinaryReader): StatusListByGroupIndRequest;
}

export namespace StatusListByGroupIndRequest {
  export type AsObject = {
    statusGroupInd: number,
  }
}

export class StatusListByGroupIndRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusListByGroupIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusListByGroupIndRes): StatusListByGroupIndRes.AsObject;
  static serializeBinaryToWriter(message: StatusListByGroupIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusListByGroupIndRes;
  static deserializeBinaryFromReader(message: StatusListByGroupIndRes, reader: jspb.BinaryReader): StatusListByGroupIndRes;
}

export namespace StatusListByGroupIndRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class StatusPathListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathListRequest): StatusPathListRequest.AsObject;
  static serializeBinaryToWriter(message: StatusPathListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathListRequest;
  static deserializeBinaryFromReader(message: StatusPathListRequest, reader: jspb.BinaryReader): StatusPathListRequest;
}

export namespace StatusPathListRequest {
  export type AsObject = {
  }
}

export class StatusPathListRes extends jspb.Message {
  getPathListList(): Array<SittelleTypeTask_pb.StatusPathSett>;
  setPathListList(value: Array<SittelleTypeTask_pb.StatusPathSett>): void;
  clearPathListList(): void;
  addPathList(value?: SittelleTypeTask_pb.StatusPathSett, index?: number): SittelleTypeTask_pb.StatusPathSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathListRes): StatusPathListRes.AsObject;
  static serializeBinaryToWriter(message: StatusPathListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathListRes;
  static deserializeBinaryFromReader(message: StatusPathListRes, reader: jspb.BinaryReader): StatusPathListRes;
}

export namespace StatusPathListRes {
  export type AsObject = {
    pathListList: Array<SittelleTypeTask_pb.StatusPathSett.AsObject>,
  }
}

export class StatusGroupListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusGroupListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusGroupListRequest): StatusGroupListRequest.AsObject;
  static serializeBinaryToWriter(message: StatusGroupListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusGroupListRequest;
  static deserializeBinaryFromReader(message: StatusGroupListRequest, reader: jspb.BinaryReader): StatusGroupListRequest;
}

export namespace StatusGroupListRequest {
  export type AsObject = {
  }
}

export class StatusGroupListRes extends jspb.Message {
  getStutusGroupListList(): Array<SittelleTypeTask_pb.StatusGroup>;
  setStutusGroupListList(value: Array<SittelleTypeTask_pb.StatusGroup>): void;
  clearStutusGroupListList(): void;
  addStutusGroupList(value?: SittelleTypeTask_pb.StatusGroup, index?: number): SittelleTypeTask_pb.StatusGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusGroupListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusGroupListRes): StatusGroupListRes.AsObject;
  static serializeBinaryToWriter(message: StatusGroupListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusGroupListRes;
  static deserializeBinaryFromReader(message: StatusGroupListRes, reader: jspb.BinaryReader): StatusGroupListRes;
}

export namespace StatusGroupListRes {
  export type AsObject = {
    stutusGroupListList: Array<SittelleTypeTask_pb.StatusGroup.AsObject>,
  }
}

export class MonObjectListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectListRequest): MonObjectListRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectListRequest;
  static deserializeBinaryFromReader(message: MonObjectListRequest, reader: jspb.BinaryReader): MonObjectListRequest;
}

export namespace MonObjectListRequest {
  export type AsObject = {
  }
}

export class MonObjectListRes extends jspb.Message {
  getMonObjectListList(): Array<SittelleTypeTask_pb.MonitoringObject>;
  setMonObjectListList(value: Array<SittelleTypeTask_pb.MonitoringObject>): void;
  clearMonObjectListList(): void;
  addMonObjectList(value?: SittelleTypeTask_pb.MonitoringObject, index?: number): SittelleTypeTask_pb.MonitoringObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectListRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectListRes): MonObjectListRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectListRes;
  static deserializeBinaryFromReader(message: MonObjectListRes, reader: jspb.BinaryReader): MonObjectListRes;
}

export namespace MonObjectListRes {
  export type AsObject = {
    monObjectListList: Array<SittelleTypeTask_pb.MonitoringObject.AsObject>,
  }
}

export class MonObjectAddRequest extends jspb.Message {
  getMonObjectListList(): Array<SittelleTypeTask_pb.MonitoringObject>;
  setMonObjectListList(value: Array<SittelleTypeTask_pb.MonitoringObject>): void;
  clearMonObjectListList(): void;
  addMonObjectList(value?: SittelleTypeTask_pb.MonitoringObject, index?: number): SittelleTypeTask_pb.MonitoringObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectAddRequest): MonObjectAddRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectAddRequest;
  static deserializeBinaryFromReader(message: MonObjectAddRequest, reader: jspb.BinaryReader): MonObjectAddRequest;
}

export namespace MonObjectAddRequest {
  export type AsObject = {
    monObjectListList: Array<SittelleTypeTask_pb.MonitoringObject.AsObject>,
  }
}

export class MonObjectAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectAddRes): MonObjectAddRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectAddRes;
  static deserializeBinaryFromReader(message: MonObjectAddRes, reader: jspb.BinaryReader): MonObjectAddRes;
}

export namespace MonObjectAddRes {
  export type AsObject = {
  }
}

export class MonObjectRemoveRequest extends jspb.Message {
  getMonObjectIndListList(): Array<number>;
  setMonObjectIndListList(value: Array<number>): void;
  clearMonObjectIndListList(): void;
  addMonObjectIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectRemoveRequest): MonObjectRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectRemoveRequest;
  static deserializeBinaryFromReader(message: MonObjectRemoveRequest, reader: jspb.BinaryReader): MonObjectRemoveRequest;
}

export namespace MonObjectRemoveRequest {
  export type AsObject = {
    monObjectIndListList: Array<number>,
  }
}

export class MonObjectRemoveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectRemoveRes): MonObjectRemoveRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectRemoveRes;
  static deserializeBinaryFromReader(message: MonObjectRemoveRes, reader: jspb.BinaryReader): MonObjectRemoveRes;
}

export namespace MonObjectRemoveRes {
  export type AsObject = {
  }
}

export class MonObjectByIndRequest extends jspb.Message {
  getMonObjectInt(): number;
  setMonObjectInt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectByIndRequest): MonObjectByIndRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectByIndRequest;
  static deserializeBinaryFromReader(message: MonObjectByIndRequest, reader: jspb.BinaryReader): MonObjectByIndRequest;
}

export namespace MonObjectByIndRequest {
  export type AsObject = {
    monObjectInt: number,
  }
}

export class MonObjectByIndRes extends jspb.Message {
  getMonObject(): SittelleTypeTask_pb.MonitoringObject | undefined;
  setMonObject(value?: SittelleTypeTask_pb.MonitoringObject): void;
  hasMonObject(): boolean;
  clearMonObject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectByIndRes): MonObjectByIndRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectByIndRes;
  static deserializeBinaryFromReader(message: MonObjectByIndRes, reader: jspb.BinaryReader): MonObjectByIndRes;
}

export namespace MonObjectByIndRes {
  export type AsObject = {
    monObject?: SittelleTypeTask_pb.MonitoringObject.AsObject,
  }
}

export class AccountGroupListByAccountRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListByAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListByAccountRequest): AccountGroupListByAccountRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListByAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListByAccountRequest;
  static deserializeBinaryFromReader(message: AccountGroupListByAccountRequest, reader: jspb.BinaryReader): AccountGroupListByAccountRequest;
}

export namespace AccountGroupListByAccountRequest {
  export type AsObject = {
    accountInd: number,
  }
}

export class AccountGroupListByAccountRes extends jspb.Message {
  getAccountgroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setAccountgroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearAccountgroupListList(): void;
  addAccountgroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListByAccountRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListByAccountRes): AccountGroupListByAccountRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListByAccountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListByAccountRes;
  static deserializeBinaryFromReader(message: AccountGroupListByAccountRes, reader: jspb.BinaryReader): AccountGroupListByAccountRes;
}

export namespace AccountGroupListByAccountRes {
  export type AsObject = {
    accountgroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class AccountGroupListWithAccountListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListWithAccountListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListWithAccountListRequest): AccountGroupListWithAccountListRequest.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListWithAccountListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListWithAccountListRequest;
  static deserializeBinaryFromReader(message: AccountGroupListWithAccountListRequest, reader: jspb.BinaryReader): AccountGroupListWithAccountListRequest;
}

export namespace AccountGroupListWithAccountListRequest {
  export type AsObject = {
  }
}

export class AccountGroupListWithAccountListRes extends jspb.Message {
  getAccountgroupListList(): Array<SittelleTypeTask_pb.AccountGroupWithAccount>;
  setAccountgroupListList(value: Array<SittelleTypeTask_pb.AccountGroupWithAccount>): void;
  clearAccountgroupListList(): void;
  addAccountgroupList(value?: SittelleTypeTask_pb.AccountGroupWithAccount, index?: number): SittelleTypeTask_pb.AccountGroupWithAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupListWithAccountListRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupListWithAccountListRes): AccountGroupListWithAccountListRes.AsObject;
  static serializeBinaryToWriter(message: AccountGroupListWithAccountListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupListWithAccountListRes;
  static deserializeBinaryFromReader(message: AccountGroupListWithAccountListRes, reader: jspb.BinaryReader): AccountGroupListWithAccountListRes;
}

export namespace AccountGroupListWithAccountListRes {
  export type AsObject = {
    accountgroupListList: Array<SittelleTypeTask_pb.AccountGroupWithAccount.AsObject>,
  }
}

export class AccountListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountListRequest): AccountListRequest.AsObject;
  static serializeBinaryToWriter(message: AccountListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountListRequest;
  static deserializeBinaryFromReader(message: AccountListRequest, reader: jspb.BinaryReader): AccountListRequest;
}

export namespace AccountListRequest {
  export type AsObject = {
  }
}

export class AccountListRes extends jspb.Message {
  getAccountListList(): Array<SittelleTypeTask_pb.Account>;
  setAccountListList(value: Array<SittelleTypeTask_pb.Account>): void;
  clearAccountListList(): void;
  addAccountList(value?: SittelleTypeTask_pb.Account, index?: number): SittelleTypeTask_pb.Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountListRes.AsObject;
  static toObject(includeInstance: boolean, msg: AccountListRes): AccountListRes.AsObject;
  static serializeBinaryToWriter(message: AccountListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountListRes;
  static deserializeBinaryFromReader(message: AccountListRes, reader: jspb.BinaryReader): AccountListRes;
}

export namespace AccountListRes {
  export type AsObject = {
    accountListList: Array<SittelleTypeTask_pb.Account.AsObject>,
  }
}

export class RoleNotifyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleNotifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleNotifyRequest): RoleNotifyRequest.AsObject;
  static serializeBinaryToWriter(message: RoleNotifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleNotifyRequest;
  static deserializeBinaryFromReader(message: RoleNotifyRequest, reader: jspb.BinaryReader): RoleNotifyRequest;
}

export namespace RoleNotifyRequest {
  export type AsObject = {
  }
}

export class RoleNotifyRes extends jspb.Message {
  getRoleNotifyListList(): Array<SittelleTypeSystem_pb.RoleNotifyType>;
  setRoleNotifyListList(value: Array<SittelleTypeSystem_pb.RoleNotifyType>): void;
  clearRoleNotifyListList(): void;
  addRoleNotifyList(value?: SittelleTypeSystem_pb.RoleNotifyType, index?: number): SittelleTypeSystem_pb.RoleNotifyType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleNotifyRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleNotifyRes): RoleNotifyRes.AsObject;
  static serializeBinaryToWriter(message: RoleNotifyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleNotifyRes;
  static deserializeBinaryFromReader(message: RoleNotifyRes, reader: jspb.BinaryReader): RoleNotifyRes;
}

export namespace RoleNotifyRes {
  export type AsObject = {
    roleNotifyListList: Array<SittelleTypeSystem_pb.RoleNotifyType.AsObject>,
  }
}

export class RoleDemandRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDemandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDemandRequest): RoleDemandRequest.AsObject;
  static serializeBinaryToWriter(message: RoleDemandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDemandRequest;
  static deserializeBinaryFromReader(message: RoleDemandRequest, reader: jspb.BinaryReader): RoleDemandRequest;
}

export namespace RoleDemandRequest {
  export type AsObject = {
  }
}

export class RoleDemandRes extends jspb.Message {
  getRoleDemandListList(): Array<SittelleTypeSystem_pb.RoleDemandType>;
  setRoleDemandListList(value: Array<SittelleTypeSystem_pb.RoleDemandType>): void;
  clearRoleDemandListList(): void;
  addRoleDemandList(value?: SittelleTypeSystem_pb.RoleDemandType, index?: number): SittelleTypeSystem_pb.RoleDemandType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDemandRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDemandRes): RoleDemandRes.AsObject;
  static serializeBinaryToWriter(message: RoleDemandRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDemandRes;
  static deserializeBinaryFromReader(message: RoleDemandRes, reader: jspb.BinaryReader): RoleDemandRes;
}

export namespace RoleDemandRes {
  export type AsObject = {
    roleDemandListList: Array<SittelleTypeSystem_pb.RoleDemandType.AsObject>,
  }
}

export class RoleRightRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleRightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleRightRequest): RoleRightRequest.AsObject;
  static serializeBinaryToWriter(message: RoleRightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleRightRequest;
  static deserializeBinaryFromReader(message: RoleRightRequest, reader: jspb.BinaryReader): RoleRightRequest;
}

export namespace RoleRightRequest {
  export type AsObject = {
  }
}

export class RoleRightRes extends jspb.Message {
  getRoleRightListList(): Array<SittelleTypeSystem_pb.RoleRightType>;
  setRoleRightListList(value: Array<SittelleTypeSystem_pb.RoleRightType>): void;
  clearRoleRightListList(): void;
  addRoleRightList(value?: SittelleTypeSystem_pb.RoleRightType, index?: number): SittelleTypeSystem_pb.RoleRightType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleRightRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleRightRes): RoleRightRes.AsObject;
  static serializeBinaryToWriter(message: RoleRightRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleRightRes;
  static deserializeBinaryFromReader(message: RoleRightRes, reader: jspb.BinaryReader): RoleRightRes;
}

export namespace RoleRightRes {
  export type AsObject = {
    roleRightListList: Array<SittelleTypeSystem_pb.RoleRightType.AsObject>,
  }
}

export class TaskTypeRoleListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTypeRoleListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTypeRoleListRequest): TaskTypeRoleListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTypeRoleListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTypeRoleListRequest;
  static deserializeBinaryFromReader(message: TaskTypeRoleListRequest, reader: jspb.BinaryReader): TaskTypeRoleListRequest;
}

export namespace TaskTypeRoleListRequest {
  export type AsObject = {
  }
}

export class TaskTypeRoleListRes extends jspb.Message {
  getRoleListList(): Array<SittelleTypeTask_pb.TaskTypeRole>;
  setRoleListList(value: Array<SittelleTypeTask_pb.TaskTypeRole>): void;
  clearRoleListList(): void;
  addRoleList(value?: SittelleTypeTask_pb.TaskTypeRole, index?: number): SittelleTypeTask_pb.TaskTypeRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTypeRoleListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTypeRoleListRes): TaskTypeRoleListRes.AsObject;
  static serializeBinaryToWriter(message: TaskTypeRoleListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTypeRoleListRes;
  static deserializeBinaryFromReader(message: TaskTypeRoleListRes, reader: jspb.BinaryReader): TaskTypeRoleListRes;
}

export namespace TaskTypeRoleListRes {
  export type AsObject = {
    roleListList: Array<SittelleTypeTask_pb.TaskTypeRole.AsObject>,
  }
}

export class RoleGlobalListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleGlobalListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleGlobalListRequest): RoleGlobalListRequest.AsObject;
  static serializeBinaryToWriter(message: RoleGlobalListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleGlobalListRequest;
  static deserializeBinaryFromReader(message: RoleGlobalListRequest, reader: jspb.BinaryReader): RoleGlobalListRequest;
}

export namespace RoleGlobalListRequest {
  export type AsObject = {
  }
}

export class RoleGlobalListRes extends jspb.Message {
  getRoleListList(): Array<SittelleTypeTask_pb.TaskRoleSett>;
  setRoleListList(value: Array<SittelleTypeTask_pb.TaskRoleSett>): void;
  clearRoleListList(): void;
  addRoleList(value?: SittelleTypeTask_pb.TaskRoleSett, index?: number): SittelleTypeTask_pb.TaskRoleSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleGlobalListRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleGlobalListRes): RoleGlobalListRes.AsObject;
  static serializeBinaryToWriter(message: RoleGlobalListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleGlobalListRes;
  static deserializeBinaryFromReader(message: RoleGlobalListRes, reader: jspb.BinaryReader): RoleGlobalListRes;
}

export namespace RoleGlobalListRes {
  export type AsObject = {
    roleListList: Array<SittelleTypeTask_pb.TaskRoleSett.AsObject>,
  }
}

export class TaskAccountParticipantListRequest extends jspb.Message {
  getTask(): SittelleTypeTask_pb.TaskSett | undefined;
  setTask(value?: SittelleTypeTask_pb.TaskSett): void;
  hasTask(): boolean;
  clearTask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountParticipantListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountParticipantListRequest): TaskAccountParticipantListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskAccountParticipantListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountParticipantListRequest;
  static deserializeBinaryFromReader(message: TaskAccountParticipantListRequest, reader: jspb.BinaryReader): TaskAccountParticipantListRequest;
}

export namespace TaskAccountParticipantListRequest {
  export type AsObject = {
    task?: SittelleTypeTask_pb.TaskSett.AsObject,
  }
}

export class TaskAccountParticipantListRes extends jspb.Message {
  getAccountParticipantListList(): Array<SittelleTypeTask_pb.TaskAccountParticipant>;
  setAccountParticipantListList(value: Array<SittelleTypeTask_pb.TaskAccountParticipant>): void;
  clearAccountParticipantListList(): void;
  addAccountParticipantList(value?: SittelleTypeTask_pb.TaskAccountParticipant, index?: number): SittelleTypeTask_pb.TaskAccountParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountParticipantListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountParticipantListRes): TaskAccountParticipantListRes.AsObject;
  static serializeBinaryToWriter(message: TaskAccountParticipantListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountParticipantListRes;
  static deserializeBinaryFromReader(message: TaskAccountParticipantListRes, reader: jspb.BinaryReader): TaskAccountParticipantListRes;
}

export namespace TaskAccountParticipantListRes {
  export type AsObject = {
    accountParticipantListList: Array<SittelleTypeTask_pb.TaskAccountParticipant.AsObject>,
  }
}

export class MonObjectInfoListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectInfoListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectInfoListRequest): MonObjectInfoListRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectInfoListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectInfoListRequest;
  static deserializeBinaryFromReader(message: MonObjectInfoListRequest, reader: jspb.BinaryReader): MonObjectInfoListRequest;
}

export namespace MonObjectInfoListRequest {
  export type AsObject = {
  }
}

export class MonObjectInfoListRes extends jspb.Message {
  getMonObjectListList(): Array<SittelleTypeDictionary_pb.MonObjectInfo>;
  setMonObjectListList(value: Array<SittelleTypeDictionary_pb.MonObjectInfo>): void;
  clearMonObjectListList(): void;
  addMonObjectList(value?: SittelleTypeDictionary_pb.MonObjectInfo, index?: number): SittelleTypeDictionary_pb.MonObjectInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectInfoListRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectInfoListRes): MonObjectInfoListRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectInfoListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectInfoListRes;
  static deserializeBinaryFromReader(message: MonObjectInfoListRes, reader: jspb.BinaryReader): MonObjectInfoListRes;
}

export namespace MonObjectInfoListRes {
  export type AsObject = {
    monObjectListList: Array<SittelleTypeDictionary_pb.MonObjectInfo.AsObject>,
  }
}

