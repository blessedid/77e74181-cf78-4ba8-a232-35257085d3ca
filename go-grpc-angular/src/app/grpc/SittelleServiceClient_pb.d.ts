import * as jspb from "google-protobuf"

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';
import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeClient_pb from './SittelleTypeClient_pb';
import * as SittelleTypeNotification_pb from './SittelleTypeNotification_pb';

export class ExternalTaskRemoveRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getIncludeChild(): boolean;
  setIncludeChild(value: boolean): void;

  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRemoveRequest): ExternalTaskRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRemoveRequest;
  static deserializeBinaryFromReader(message: ExternalTaskRemoveRequest, reader: jspb.BinaryReader): ExternalTaskRemoveRequest;
}

export namespace ExternalTaskRemoveRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    includeChild: boolean,
    taskListList: Array<number>,
  }
}

export class ExternalTaskRemoveRes extends jspb.Message {
  getChangeTaskListList(): Array<number>;
  setChangeTaskListList(value: Array<number>): void;
  clearChangeTaskListList(): void;
  addChangeTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRemoveRes): ExternalTaskRemoveRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRemoveRes;
  static deserializeBinaryFromReader(message: ExternalTaskRemoveRes, reader: jspb.BinaryReader): ExternalTaskRemoveRes;
}

export namespace ExternalTaskRemoveRes {
  export type AsObject = {
    changeTaskListList: Array<number>,
  }
}

export class ExternalTaskTemplateRemoveRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTemplateListList(): Array<number>;
  setTemplateListList(value: Array<number>): void;
  clearTemplateListList(): void;
  addTemplateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateRemoveRequest): ExternalTaskTemplateRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateRemoveRequest;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateRemoveRequest, reader: jspb.BinaryReader): ExternalTaskTemplateRemoveRequest;
}

export namespace ExternalTaskTemplateRemoveRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    templateListList: Array<number>,
  }
}

export class ExternalTaskTemplateRemoveRes extends jspb.Message {
  getChangeTemplateListList(): Array<number>;
  setChangeTemplateListList(value: Array<number>): void;
  clearChangeTemplateListList(): void;
  addChangeTemplateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateRemoveRes): ExternalTaskTemplateRemoveRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateRemoveRes;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateRemoveRes, reader: jspb.BinaryReader): ExternalTaskTemplateRemoveRes;
}

export namespace ExternalTaskTemplateRemoveRes {
  export type AsObject = {
    changeTemplateListList: Array<number>,
  }
}

export class ExternalTaskTemplateAddRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getAccountGroupListList(): Array<number>;
  setAccountGroupListList(value: Array<number>): void;
  clearAccountGroupListList(): void;
  addAccountGroupList(value: number, index?: number): void;

  getInputListList(): Array<SittelleTypeClient_pb.ExternalInputSett>;
  setInputListList(value: Array<SittelleTypeClient_pb.ExternalInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeClient_pb.ExternalInputSett, index?: number): SittelleTypeClient_pb.ExternalInputSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateAddRequest): ExternalTaskTemplateAddRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateAddRequest;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateAddRequest, reader: jspb.BinaryReader): ExternalTaskTemplateAddRequest;
}

export namespace ExternalTaskTemplateAddRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    accountGroupListList: Array<number>,
    inputListList: Array<SittelleTypeClient_pb.ExternalInputSett.AsObject>,
  }
}

export class ExternalTaskTemplateAddRes extends jspb.Message {
  getChangeTemplateListList(): Array<number>;
  setChangeTemplateListList(value: Array<number>): void;
  clearChangeTemplateListList(): void;
  addChangeTemplateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateAddRes): ExternalTaskTemplateAddRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateAddRes;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateAddRes, reader: jspb.BinaryReader): ExternalTaskTemplateAddRes;
}

export namespace ExternalTaskTemplateAddRes {
  export type AsObject = {
    changeTemplateListList: Array<number>,
  }
}

export class ExternalTaskTemplateAddByTaskRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getIncludeChild(): number;
  setIncludeChild(value: number): void;

  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateAddByTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateAddByTaskRequest): ExternalTaskTemplateAddByTaskRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateAddByTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateAddByTaskRequest;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateAddByTaskRequest, reader: jspb.BinaryReader): ExternalTaskTemplateAddByTaskRequest;
}

export namespace ExternalTaskTemplateAddByTaskRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    includeChild: number,
    taskListList: Array<number>,
  }
}

export class ExternalTaskTemplateAddByTaskRes extends jspb.Message {
  getChangeTemplateListList(): Array<number>;
  setChangeTemplateListList(value: Array<number>): void;
  clearChangeTemplateListList(): void;
  addChangeTemplateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateAddByTaskRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateAddByTaskRes): ExternalTaskTemplateAddByTaskRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateAddByTaskRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateAddByTaskRes;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateAddByTaskRes, reader: jspb.BinaryReader): ExternalTaskTemplateAddByTaskRes;
}

export namespace ExternalTaskTemplateAddByTaskRes {
  export type AsObject = {
    changeTemplateListList: Array<number>,
  }
}

export class ExternalTaskTemplateChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getInputListList(): Array<SittelleTypeClient_pb.ExternalInputSett>;
  setInputListList(value: Array<SittelleTypeClient_pb.ExternalInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeClient_pb.ExternalInputSett, index?: number): SittelleTypeClient_pb.ExternalInputSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateChangeRequest): ExternalTaskTemplateChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateChangeRequest, reader: jspb.BinaryReader): ExternalTaskTemplateChangeRequest;
}

export namespace ExternalTaskTemplateChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    inputListList: Array<SittelleTypeClient_pb.ExternalInputSett.AsObject>,
  }
}

export class ExternalTaskTemplateChangeRes extends jspb.Message {
  getChangeTemplateListList(): Array<number>;
  setChangeTemplateListList(value: Array<number>): void;
  clearChangeTemplateListList(): void;
  addChangeTemplateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateChangeRes): ExternalTaskTemplateChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateChangeRes, reader: jspb.BinaryReader): ExternalTaskTemplateChangeRes;
}

export namespace ExternalTaskTemplateChangeRes {
  export type AsObject = {
    changeTemplateListList: Array<number>,
  }
}

export class ExternalNotificationTaskListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getBufferAction(): number;
  setBufferAction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalNotificationTaskListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalNotificationTaskListRequest): ExternalNotificationTaskListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalNotificationTaskListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalNotificationTaskListRequest;
  static deserializeBinaryFromReader(message: ExternalNotificationTaskListRequest, reader: jspb.BinaryReader): ExternalNotificationTaskListRequest;
}

export namespace ExternalNotificationTaskListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    bufferAction: number,
  }
}

export class ExternalNotificationTaskListRes extends jspb.Message {
  getNotificationListList(): Array<SittelleTypeNotification_pb.TaskChangeNotification>;
  setNotificationListList(value: Array<SittelleTypeNotification_pb.TaskChangeNotification>): void;
  clearNotificationListList(): void;
  addNotificationList(value?: SittelleTypeNotification_pb.TaskChangeNotification, index?: number): SittelleTypeNotification_pb.TaskChangeNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalNotificationTaskListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalNotificationTaskListRes): ExternalNotificationTaskListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalNotificationTaskListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalNotificationTaskListRes;
  static deserializeBinaryFromReader(message: ExternalNotificationTaskListRes, reader: jspb.BinaryReader): ExternalNotificationTaskListRes;
}

export namespace ExternalNotificationTaskListRes {
  export type AsObject = {
    notificationListList: Array<SittelleTypeNotification_pb.TaskChangeNotification.AsObject>,
  }
}

export class ExternalNotificationListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getNotificationInd(): number;
  setNotificationInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalNotificationListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalNotificationListRequest): ExternalNotificationListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalNotificationListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalNotificationListRequest;
  static deserializeBinaryFromReader(message: ExternalNotificationListRequest, reader: jspb.BinaryReader): ExternalNotificationListRequest;
}

export namespace ExternalNotificationListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    notificationInd: number,
  }
}

export class ExternalNotificationListtRes extends jspb.Message {
  getNotificationListList(): Array<SittelleTypeNotification_pb.Notification>;
  setNotificationListList(value: Array<SittelleTypeNotification_pb.Notification>): void;
  clearNotificationListList(): void;
  addNotificationList(value?: SittelleTypeNotification_pb.Notification, index?: number): SittelleTypeNotification_pb.Notification;

  getNotificationInd(): number;
  setNotificationInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalNotificationListtRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalNotificationListtRes): ExternalNotificationListtRes.AsObject;
  static serializeBinaryToWriter(message: ExternalNotificationListtRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalNotificationListtRes;
  static deserializeBinaryFromReader(message: ExternalNotificationListtRes, reader: jspb.BinaryReader): ExternalNotificationListtRes;
}

export namespace ExternalNotificationListtRes {
  export type AsObject = {
    notificationListList: Array<SittelleTypeNotification_pb.Notification.AsObject>,
    notificationInd: number,
  }
}

export class ExternalNotificationCommentListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getBufferAction(): number;
  setBufferAction(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalNotificationCommentListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalNotificationCommentListRequest): ExternalNotificationCommentListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalNotificationCommentListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalNotificationCommentListRequest;
  static deserializeBinaryFromReader(message: ExternalNotificationCommentListRequest, reader: jspb.BinaryReader): ExternalNotificationCommentListRequest;
}

export namespace ExternalNotificationCommentListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    bufferAction: number,
  }
}

export class ExternalNotificationCommentListRes extends jspb.Message {
  getNotificationListList(): Array<SittelleTypeTask_pb.TaskComment>;
  setNotificationListList(value: Array<SittelleTypeTask_pb.TaskComment>): void;
  clearNotificationListList(): void;
  addNotificationList(value?: SittelleTypeTask_pb.TaskComment, index?: number): SittelleTypeTask_pb.TaskComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalNotificationCommentListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalNotificationCommentListRes): ExternalNotificationCommentListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalNotificationCommentListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalNotificationCommentListRes;
  static deserializeBinaryFromReader(message: ExternalNotificationCommentListRes, reader: jspb.BinaryReader): ExternalNotificationCommentListRes;
}

export namespace ExternalNotificationCommentListRes {
  export type AsObject = {
    notificationListList: Array<SittelleTypeTask_pb.TaskComment.AsObject>,
  }
}

export class ExternalConnectionCreateRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getUser(): string;
  setUser(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionCreateRequest): ExternalConnectionCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionCreateRequest;
  static deserializeBinaryFromReader(message: ExternalConnectionCreateRequest, reader: jspb.BinaryReader): ExternalConnectionCreateRequest;
}

export namespace ExternalConnectionCreateRequest {
  export type AsObject = {
    clientId: string,
    user: string,
    password: string,
  }
}

export class ExternalConnectionCreateRes extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getAccountSettings(): SittelleTypeTask_pb.Account | undefined;
  setAccountSettings(value?: SittelleTypeTask_pb.Account): void;
  hasAccountSettings(): boolean;
  clearAccountSettings(): void;

  getNotificationInd(): number;
  setNotificationInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionCreateRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionCreateRes): ExternalConnectionCreateRes.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionCreateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionCreateRes;
  static deserializeBinaryFromReader(message: ExternalConnectionCreateRes, reader: jspb.BinaryReader): ExternalConnectionCreateRes;
}

export namespace ExternalConnectionCreateRes {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    accountSettings?: SittelleTypeTask_pb.Account.AsObject,
    notificationInd: number,
  }
}

export class ExternalConnectionCloseRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionCloseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionCloseRequest): ExternalConnectionCloseRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionCloseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionCloseRequest;
  static deserializeBinaryFromReader(message: ExternalConnectionCloseRequest, reader: jspb.BinaryReader): ExternalConnectionCloseRequest;
}

export namespace ExternalConnectionCloseRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class ExternalConnectionCloseRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionCloseRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionCloseRes): ExternalConnectionCloseRes.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionCloseRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionCloseRes;
  static deserializeBinaryFromReader(message: ExternalConnectionCloseRes, reader: jspb.BinaryReader): ExternalConnectionCloseRes;
}

export namespace ExternalConnectionCloseRes {
  export type AsObject = {
  }
}

export class ExternalConnectionStatusRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionStatusRequest): ExternalConnectionStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionStatusRequest;
  static deserializeBinaryFromReader(message: ExternalConnectionStatusRequest, reader: jspb.BinaryReader): ExternalConnectionStatusRequest;
}

export namespace ExternalConnectionStatusRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class ExternalConnectionStatusRes extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionStatusRes): ExternalConnectionStatusRes.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionStatusRes;
  static deserializeBinaryFromReader(message: ExternalConnectionStatusRes, reader: jspb.BinaryReader): ExternalConnectionStatusRes;
}

export namespace ExternalConnectionStatusRes {
  export type AsObject = {
    status: number,
  }
}

export class ExternalPanelListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelListRequest): ExternalPanelListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelListRequest;
  static deserializeBinaryFromReader(message: ExternalPanelListRequest, reader: jspb.BinaryReader): ExternalPanelListRequest;
}

export namespace ExternalPanelListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class ExternalPanelListRes extends jspb.Message {
  getPanelListList(): Array<SittelleTypeDictionary_pb.AccountGroupPanel>;
  setPanelListList(value: Array<SittelleTypeDictionary_pb.AccountGroupPanel>): void;
  clearPanelListList(): void;
  addPanelList(value?: SittelleTypeDictionary_pb.AccountGroupPanel, index?: number): SittelleTypeDictionary_pb.AccountGroupPanel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelListRes): ExternalPanelListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelListRes;
  static deserializeBinaryFromReader(message: ExternalPanelListRes, reader: jspb.BinaryReader): ExternalPanelListRes;
}

export namespace ExternalPanelListRes {
  export type AsObject = {
    panelListList: Array<SittelleTypeDictionary_pb.AccountGroupPanel.AsObject>,
  }
}

export class ExternalPanelFilterFieldListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelFilterFieldListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelFilterFieldListRequest): ExternalPanelFilterFieldListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelFilterFieldListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelFilterFieldListRequest;
  static deserializeBinaryFromReader(message: ExternalPanelFilterFieldListRequest, reader: jspb.BinaryReader): ExternalPanelFilterFieldListRequest;
}

export namespace ExternalPanelFilterFieldListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class ExternalPanelFilterFieldListRes extends jspb.Message {
  getFilter(): SittelleTypeTask_pb.TaskRequestFilter | undefined;
  setFilter(value?: SittelleTypeTask_pb.TaskRequestFilter): void;
  hasFilter(): boolean;
  clearFilter(): void;

  getMonObjectListList(): Array<number>;
  setMonObjectListList(value: Array<number>): void;
  clearMonObjectListList(): void;
  addMonObjectList(value: number, index?: number): void;

  getStatusListList(): Array<number>;
  setStatusListList(value: Array<number>): void;
  clearStatusListList(): void;
  addStatusList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelFilterFieldListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelFilterFieldListRes): ExternalPanelFilterFieldListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelFilterFieldListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelFilterFieldListRes;
  static deserializeBinaryFromReader(message: ExternalPanelFilterFieldListRes, reader: jspb.BinaryReader): ExternalPanelFilterFieldListRes;
}

export namespace ExternalPanelFilterFieldListRes {
  export type AsObject = {
    filter?: SittelleTypeTask_pb.TaskRequestFilter.AsObject,
    monObjectListList: Array<number>,
    statusListList: Array<number>,
  }
}

export class ExternalPanelTaskListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelTaskListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelTaskListRequest): ExternalPanelTaskListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelTaskListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelTaskListRequest;
  static deserializeBinaryFromReader(message: ExternalPanelTaskListRequest, reader: jspb.BinaryReader): ExternalPanelTaskListRequest;
}

export namespace ExternalPanelTaskListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
    parentTaskInd: number,
  }
}

export class ExternalPanelTaskListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelTaskListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelTaskListRes): ExternalPanelTaskListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelTaskListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelTaskListRes;
  static deserializeBinaryFromReader(message: ExternalPanelTaskListRes, reader: jspb.BinaryReader): ExternalPanelTaskListRes;
}

export namespace ExternalPanelTaskListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalPanelRootTaskListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelRootTaskListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelRootTaskListRequest): ExternalPanelRootTaskListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelRootTaskListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelRootTaskListRequest;
  static deserializeBinaryFromReader(message: ExternalPanelRootTaskListRequest, reader: jspb.BinaryReader): ExternalPanelRootTaskListRequest;
}

export namespace ExternalPanelRootTaskListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class ExternalPanelRootTaskListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelRootTaskListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelRootTaskListRes): ExternalPanelRootTaskListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelRootTaskListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelRootTaskListRes;
  static deserializeBinaryFromReader(message: ExternalPanelRootTaskListRes, reader: jspb.BinaryReader): ExternalPanelRootTaskListRes;
}

export namespace ExternalPanelRootTaskListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalPanelStatusCreateListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelStatusCreateListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelStatusCreateListRequest): ExternalPanelStatusCreateListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelStatusCreateListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelStatusCreateListRequest;
  static deserializeBinaryFromReader(message: ExternalPanelStatusCreateListRequest, reader: jspb.BinaryReader): ExternalPanelStatusCreateListRequest;
}

export namespace ExternalPanelStatusCreateListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class ExternalPanelStatusCreateListRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelStatusCreateListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelStatusCreateListRes): ExternalPanelStatusCreateListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelStatusCreateListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelStatusCreateListRes;
  static deserializeBinaryFromReader(message: ExternalPanelStatusCreateListRes, reader: jspb.BinaryReader): ExternalPanelStatusCreateListRes;
}

export namespace ExternalPanelStatusCreateListRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class ExternalPanelStatusTemplateListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelStatusTemplateListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelStatusTemplateListRequest): ExternalPanelStatusTemplateListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelStatusTemplateListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelStatusTemplateListRequest;
  static deserializeBinaryFromReader(message: ExternalPanelStatusTemplateListRequest, reader: jspb.BinaryReader): ExternalPanelStatusTemplateListRequest;
}

export namespace ExternalPanelStatusTemplateListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class ExternalPanelStatusTemplateListListRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelStatusTemplateListListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelStatusTemplateListListRes): ExternalPanelStatusTemplateListListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelStatusTemplateListListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelStatusTemplateListListRes;
  static deserializeBinaryFromReader(message: ExternalPanelStatusTemplateListListRes, reader: jspb.BinaryReader): ExternalPanelStatusTemplateListListRes;
}

export namespace ExternalPanelStatusTemplateListListRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class ExternalPanelTaskChildListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelTaskChildListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelTaskChildListRequest): ExternalPanelTaskChildListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelTaskChildListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelTaskChildListRequest;
  static deserializeBinaryFromReader(message: ExternalPanelTaskChildListRequest, reader: jspb.BinaryReader): ExternalPanelTaskChildListRequest;
}

export namespace ExternalPanelTaskChildListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
    taskInd: number,
  }
}

export class ExternalPanelTaskChildListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPanelTaskChildListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPanelTaskChildListRes): ExternalPanelTaskChildListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalPanelTaskChildListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPanelTaskChildListRes;
  static deserializeBinaryFromReader(message: ExternalPanelTaskChildListRes, reader: jspb.BinaryReader): ExternalPanelTaskChildListRes;
}

export namespace ExternalPanelTaskChildListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalStatusCreateListByRootTypeListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getRootTypeListList(): Array<number>;
  setRootTypeListList(value: Array<number>): void;
  clearRootTypeListList(): void;
  addRootTypeList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalStatusCreateListByRootTypeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalStatusCreateListByRootTypeListRequest): ExternalStatusCreateListByRootTypeListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalStatusCreateListByRootTypeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalStatusCreateListByRootTypeListRequest;
  static deserializeBinaryFromReader(message: ExternalStatusCreateListByRootTypeListRequest, reader: jspb.BinaryReader): ExternalStatusCreateListByRootTypeListRequest;
}

export namespace ExternalStatusCreateListByRootTypeListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    rootTypeListList: Array<number>,
  }
}

export class ExternalStatusCreateListByRootTypeListRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalStatusCreateListByRootTypeListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalStatusCreateListByRootTypeListRes): ExternalStatusCreateListByRootTypeListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalStatusCreateListByRootTypeListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalStatusCreateListByRootTypeListRes;
  static deserializeBinaryFromReader(message: ExternalStatusCreateListByRootTypeListRes, reader: jspb.BinaryReader): ExternalStatusCreateListByRootTypeListRes;
}

export namespace ExternalStatusCreateListByRootTypeListRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class ExternalTaskListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListRequest): ExternalTaskListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListRequest;
  static deserializeBinaryFromReader(message: ExternalTaskListRequest, reader: jspb.BinaryReader): ExternalTaskListRequest;
}

export namespace ExternalTaskListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    parentTaskInd: number,
  }
}

export class ExternalTaskListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListRes): ExternalTaskListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListRes;
  static deserializeBinaryFromReader(message: ExternalTaskListRes, reader: jspb.BinaryReader): ExternalTaskListRes;
}

export namespace ExternalTaskListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalTaskListByRootTypeListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getRootTypeListList(): Array<number>;
  setRootTypeListList(value: Array<number>): void;
  clearRootTypeListList(): void;
  addRootTypeList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListByRootTypeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListByRootTypeListRequest): ExternalTaskListByRootTypeListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListByRootTypeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListByRootTypeListRequest;
  static deserializeBinaryFromReader(message: ExternalTaskListByRootTypeListRequest, reader: jspb.BinaryReader): ExternalTaskListByRootTypeListRequest;
}

export namespace ExternalTaskListByRootTypeListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    parentTaskInd: number,
    rootTypeListList: Array<number>,
  }
}

export class ExternalTaskListByRootTypeListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListByRootTypeListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListByRootTypeListRes): ExternalTaskListByRootTypeListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListByRootTypeListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListByRootTypeListRes;
  static deserializeBinaryFromReader(message: ExternalTaskListByRootTypeListRes, reader: jspb.BinaryReader): ExternalTaskListByRootTypeListRes;
}

export namespace ExternalTaskListByRootTypeListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalTaskListByTaskTypeListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getTaskTypeListList(): Array<number>;
  setTaskTypeListList(value: Array<number>): void;
  clearTaskTypeListList(): void;
  addTaskTypeList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListByTaskTypeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListByTaskTypeListRequest): ExternalTaskListByTaskTypeListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListByTaskTypeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListByTaskTypeListRequest;
  static deserializeBinaryFromReader(message: ExternalTaskListByTaskTypeListRequest, reader: jspb.BinaryReader): ExternalTaskListByTaskTypeListRequest;
}

export namespace ExternalTaskListByTaskTypeListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    parentTaskInd: number,
    taskTypeListList: Array<number>,
  }
}

export class ExternalTaskListByTaskTypeListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListByTaskTypeListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListByTaskTypeListRes): ExternalTaskListByTaskTypeListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListByTaskTypeListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListByTaskTypeListRes;
  static deserializeBinaryFromReader(message: ExternalTaskListByTaskTypeListRes, reader: jspb.BinaryReader): ExternalTaskListByTaskTypeListRes;
}

export namespace ExternalTaskListByTaskTypeListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalTaskCardInfoRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskCardInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskCardInfoRequest): ExternalTaskCardInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskCardInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskCardInfoRequest;
  static deserializeBinaryFromReader(message: ExternalTaskCardInfoRequest, reader: jspb.BinaryReader): ExternalTaskCardInfoRequest;
}

export namespace ExternalTaskCardInfoRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
  }
}

export class ExternalTaskCardInfoRes extends jspb.Message {
  getTask(): SittelleTypeTask_pb.TaskSett | undefined;
  setTask(value?: SittelleTypeTask_pb.TaskSett): void;
  hasTask(): boolean;
  clearTask(): void;

  getRights(): number;
  setRights(value: number): void;

  getChildTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setChildTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearChildTaskListList(): void;
  addChildTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  getTaskStatusListList(): Array<SittelleTypeTask_pb.TaskStatusSett>;
  setTaskStatusListList(value: Array<SittelleTypeTask_pb.TaskStatusSett>): void;
  clearTaskStatusListList(): void;
  addTaskStatusList(value?: SittelleTypeTask_pb.TaskStatusSett, index?: number): SittelleTypeTask_pb.TaskStatusSett;

  getCommentListList(): Array<SittelleTypeTask_pb.TaskComment>;
  setCommentListList(value: Array<SittelleTypeTask_pb.TaskComment>): void;
  clearCommentListList(): void;
  addCommentList(value?: SittelleTypeTask_pb.TaskComment, index?: number): SittelleTypeTask_pb.TaskComment;

  getRoleActionListList(): Array<SittelleTypeTask_pb.HistoryRoleAction>;
  setRoleActionListList(value: Array<SittelleTypeTask_pb.HistoryRoleAction>): void;
  clearRoleActionListList(): void;
  addRoleActionList(value?: SittelleTypeTask_pb.HistoryRoleAction, index?: number): SittelleTypeTask_pb.HistoryRoleAction;

  getStateListList(): Array<SittelleTypeTask_pb.TaskState>;
  setStateListList(value: Array<SittelleTypeTask_pb.TaskState>): void;
  clearStateListList(): void;
  addStateList(value?: SittelleTypeTask_pb.TaskState, index?: number): SittelleTypeTask_pb.TaskState;

  getAccountStateListList(): Array<SittelleTypeTask_pb.TaskAccountState>;
  setAccountStateListList(value: Array<SittelleTypeTask_pb.TaskAccountState>): void;
  clearAccountStateListList(): void;
  addAccountStateList(value?: SittelleTypeTask_pb.TaskAccountState, index?: number): SittelleTypeTask_pb.TaskAccountState;

  getContentListList(): Array<SittelleTypeTask_pb.TaskContentSett>;
  setContentListList(value: Array<SittelleTypeTask_pb.TaskContentSett>): void;
  clearContentListList(): void;
  addContentList(value?: SittelleTypeTask_pb.TaskContentSett, index?: number): SittelleTypeTask_pb.TaskContentSett;

  getStatusChangePossibleListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusChangePossibleListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusChangePossibleListList(): void;
  addStatusChangePossibleList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  getStatusCreatePossibleListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusCreatePossibleListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusCreatePossibleListList(): void;
  addStatusCreatePossibleList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  getStatusTemplatePossibleListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusTemplatePossibleListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusTemplatePossibleListList(): void;
  addStatusTemplatePossibleList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskCardInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskCardInfoRes): ExternalTaskCardInfoRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskCardInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskCardInfoRes;
  static deserializeBinaryFromReader(message: ExternalTaskCardInfoRes, reader: jspb.BinaryReader): ExternalTaskCardInfoRes;
}

export namespace ExternalTaskCardInfoRes {
  export type AsObject = {
    task?: SittelleTypeTask_pb.TaskSett.AsObject,
    rights: number,
    childTaskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
    taskStatusListList: Array<SittelleTypeTask_pb.TaskStatusSett.AsObject>,
    commentListList: Array<SittelleTypeTask_pb.TaskComment.AsObject>,
    roleActionListList: Array<SittelleTypeTask_pb.HistoryRoleAction.AsObject>,
    stateListList: Array<SittelleTypeTask_pb.TaskState.AsObject>,
    accountStateListList: Array<SittelleTypeTask_pb.TaskAccountState.AsObject>,
    contentListList: Array<SittelleTypeTask_pb.TaskContentSett.AsObject>,
    statusChangePossibleListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
    statusCreatePossibleListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
    statusTemplatePossibleListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class ExternalTaskHistoryRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getCountOnPage(): number;
  setCountOnPage(value: number): void;

  getPageNumber(): number;
  setPageNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskHistoryRequest): ExternalTaskHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskHistoryRequest;
  static deserializeBinaryFromReader(message: ExternalTaskHistoryRequest, reader: jspb.BinaryReader): ExternalTaskHistoryRequest;
}

export namespace ExternalTaskHistoryRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    countOnPage: number,
    pageNumber: number,
  }
}

export class ExternalTaskHistoryRes extends jspb.Message {
  getHistoryListList(): Array<SittelleTypeClient_pb.TaskHistoryItem>;
  setHistoryListList(value: Array<SittelleTypeClient_pb.TaskHistoryItem>): void;
  clearHistoryListList(): void;
  addHistoryList(value?: SittelleTypeClient_pb.TaskHistoryItem, index?: number): SittelleTypeClient_pb.TaskHistoryItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskHistoryRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskHistoryRes): ExternalTaskHistoryRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskHistoryRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskHistoryRes;
  static deserializeBinaryFromReader(message: ExternalTaskHistoryRes, reader: jspb.BinaryReader): ExternalTaskHistoryRes;
}

export namespace ExternalTaskHistoryRes {
  export type AsObject = {
    historyListList: Array<SittelleTypeClient_pb.TaskHistoryItem.AsObject>,
  }
}

export class ExternalTaskParentChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getChildTaskIndListList(): Array<number>;
  setChildTaskIndListList(value: Array<number>): void;
  clearChildTaskIndListList(): void;
  addChildTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskParentChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskParentChangeRequest): ExternalTaskParentChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskParentChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskParentChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskParentChangeRequest, reader: jspb.BinaryReader): ExternalTaskParentChangeRequest;
}

export namespace ExternalTaskParentChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    parentTaskInd: number,
    childTaskIndListList: Array<number>,
  }
}

export class ExternalTaskParentChangeRes extends jspb.Message {
  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskParentChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskParentChangeRes): ExternalTaskParentChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskParentChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskParentChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskParentChangeRes, reader: jspb.BinaryReader): ExternalTaskParentChangeRes;
}

export namespace ExternalTaskParentChangeRes {
  export type AsObject = {
    taskListList: Array<number>,
  }
}

export class ExternalTaskAttachRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getLinkTaskInd(): number;
  setLinkTaskInd(value: number): void;

  getAssignedTaskIndListList(): Array<number>;
  setAssignedTaskIndListList(value: Array<number>): void;
  clearAssignedTaskIndListList(): void;
  addAssignedTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskAttachRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskAttachRequest): ExternalTaskAttachRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskAttachRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskAttachRequest;
  static deserializeBinaryFromReader(message: ExternalTaskAttachRequest, reader: jspb.BinaryReader): ExternalTaskAttachRequest;
}

export namespace ExternalTaskAttachRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    linkTaskInd: number,
    assignedTaskIndListList: Array<number>,
  }
}

export class ExternalTaskAttachRes extends jspb.Message {
  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskAttachRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskAttachRes): ExternalTaskAttachRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskAttachRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskAttachRes;
  static deserializeBinaryFromReader(message: ExternalTaskAttachRes, reader: jspb.BinaryReader): ExternalTaskAttachRes;
}

export namespace ExternalTaskAttachRes {
  export type AsObject = {
    taskListList: Array<number>,
  }
}

export class ExternalTaskDetachRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getLinkTaskInd(): number;
  setLinkTaskInd(value: number): void;

  getAssignedTaskIndListList(): Array<number>;
  setAssignedTaskIndListList(value: Array<number>): void;
  clearAssignedTaskIndListList(): void;
  addAssignedTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskDetachRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskDetachRequest): ExternalTaskDetachRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskDetachRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskDetachRequest;
  static deserializeBinaryFromReader(message: ExternalTaskDetachRequest, reader: jspb.BinaryReader): ExternalTaskDetachRequest;
}

export namespace ExternalTaskDetachRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    linkTaskInd: number,
    assignedTaskIndListList: Array<number>,
  }
}

export class ExternalTaskDetachRes extends jspb.Message {
  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskDetachRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskDetachRes): ExternalTaskDetachRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskDetachRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskDetachRes;
  static deserializeBinaryFromReader(message: ExternalTaskDetachRes, reader: jspb.BinaryReader): ExternalTaskDetachRes;
}

export namespace ExternalTaskDetachRes {
  export type AsObject = {
    taskListList: Array<number>,
  }
}

export class ExternalTaskRetachRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getLinkTaskInd(): number;
  setLinkTaskInd(value: number): void;

  getAssignedTaskIndListList(): Array<number>;
  setAssignedTaskIndListList(value: Array<number>): void;
  clearAssignedTaskIndListList(): void;
  addAssignedTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRetachRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRetachRequest): ExternalTaskRetachRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRetachRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRetachRequest;
  static deserializeBinaryFromReader(message: ExternalTaskRetachRequest, reader: jspb.BinaryReader): ExternalTaskRetachRequest;
}

export namespace ExternalTaskRetachRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    linkTaskInd: number,
    assignedTaskIndListList: Array<number>,
  }
}

export class ExternalTaskRetachRes extends jspb.Message {
  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRetachRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRetachRes): ExternalTaskRetachRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRetachRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRetachRes;
  static deserializeBinaryFromReader(message: ExternalTaskRetachRes, reader: jspb.BinaryReader): ExternalTaskRetachRes;
}

export namespace ExternalTaskRetachRes {
  export type AsObject = {
    taskListList: Array<number>,
  }
}

export class ExternalTaskParentChangeByFilterRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getFilter(): SittelleTypeTask_pb.TaskRequestFilter | undefined;
  setFilter(value?: SittelleTypeTask_pb.TaskRequestFilter): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskParentChangeByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskParentChangeByFilterRequest): ExternalTaskParentChangeByFilterRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskParentChangeByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskParentChangeByFilterRequest;
  static deserializeBinaryFromReader(message: ExternalTaskParentChangeByFilterRequest, reader: jspb.BinaryReader): ExternalTaskParentChangeByFilterRequest;
}

export namespace ExternalTaskParentChangeByFilterRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    parentTaskInd: number,
    filter?: SittelleTypeTask_pb.TaskRequestFilter.AsObject,
  }
}

export class ExternalTaskParentChangeByFilterRes extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskParentChangeByFilterRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskParentChangeByFilterRes): ExternalTaskParentChangeByFilterRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskParentChangeByFilterRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskParentChangeByFilterRes;
  static deserializeBinaryFromReader(message: ExternalTaskParentChangeByFilterRes, reader: jspb.BinaryReader): ExternalTaskParentChangeByFilterRes;
}

export namespace ExternalTaskParentChangeByFilterRes {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class ExternalTaskListByFilterRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getFilter(): SittelleTypeTask_pb.TaskRequestFilter | undefined;
  setFilter(value?: SittelleTypeTask_pb.TaskRequestFilter): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListByFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListByFilterRequest): ExternalTaskListByFilterRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListByFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListByFilterRequest;
  static deserializeBinaryFromReader(message: ExternalTaskListByFilterRequest, reader: jspb.BinaryReader): ExternalTaskListByFilterRequest;
}

export namespace ExternalTaskListByFilterRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    filter?: SittelleTypeTask_pb.TaskRequestFilter.AsObject,
  }
}

export class ExternalTaskListByFilterRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskListByFilterRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskListByFilterRes): ExternalTaskListByFilterRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskListByFilterRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskListByFilterRes;
  static deserializeBinaryFromReader(message: ExternalTaskListByFilterRes, reader: jspb.BinaryReader): ExternalTaskListByFilterRes;
}

export namespace ExternalTaskListByFilterRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalTaskChildListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getFilterStatusListList(): Array<number>;
  setFilterStatusListList(value: Array<number>): void;
  clearFilterStatusListList(): void;
  addFilterStatusList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskChildListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskChildListRequest): ExternalTaskChildListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskChildListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskChildListRequest;
  static deserializeBinaryFromReader(message: ExternalTaskChildListRequest, reader: jspb.BinaryReader): ExternalTaskChildListRequest;
}

export namespace ExternalTaskChildListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    filterStatusListList: Array<number>,
  }
}

export class ExternalTaskChildListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskChildListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskChildListRes): ExternalTaskChildListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskChildListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskChildListRes;
  static deserializeBinaryFromReader(message: ExternalTaskChildListRes, reader: jspb.BinaryReader): ExternalTaskChildListRes;
}

export namespace ExternalTaskChildListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class ExternalTaskStatusChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getInputListList(): Array<SittelleTypeTask_pb.StatusInputSett>;
  setInputListList(value: Array<SittelleTypeTask_pb.StatusInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeTask_pb.StatusInputSett, index?: number): SittelleTypeTask_pb.StatusInputSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusChangeRequest): ExternalTaskStatusChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskStatusChangeRequest, reader: jspb.BinaryReader): ExternalTaskStatusChangeRequest;
}

export namespace ExternalTaskStatusChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    statusInd: number,
    inputListList: Array<SittelleTypeTask_pb.StatusInputSett.AsObject>,
  }
}

export class ExternalTaskStatusChangeRes extends jspb.Message {
  getChangeTaskListList(): Array<number>;
  setChangeTaskListList(value: Array<number>): void;
  clearChangeTaskListList(): void;
  addChangeTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusChangeRes): ExternalTaskStatusChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskStatusChangeRes, reader: jspb.BinaryReader): ExternalTaskStatusChangeRes;
}

export namespace ExternalTaskStatusChangeRes {
  export type AsObject = {
    changeTaskListList: Array<number>,
  }
}

export class ExternalTaskStatusChangeReqRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusChangeReqRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusChangeReqRequest): ExternalTaskStatusChangeReqRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusChangeReqRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusChangeReqRequest;
  static deserializeBinaryFromReader(message: ExternalTaskStatusChangeReqRequest, reader: jspb.BinaryReader): ExternalTaskStatusChangeReqRequest;
}

export namespace ExternalTaskStatusChangeReqRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    statusInd: number,
  }
}

export class ExternalTaskStatusChangeReqRes extends jspb.Message {
  getInputListList(): Array<SittelleTypeClient_pb.ExternalInputSett>;
  setInputListList(value: Array<SittelleTypeClient_pb.ExternalInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeClient_pb.ExternalInputSett, index?: number): SittelleTypeClient_pb.ExternalInputSett;

  getChangeTaskListList(): Array<number>;
  setChangeTaskListList(value: Array<number>): void;
  clearChangeTaskListList(): void;
  addChangeTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusChangeReqRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusChangeReqRes): ExternalTaskStatusChangeReqRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusChangeReqRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusChangeReqRes;
  static deserializeBinaryFromReader(message: ExternalTaskStatusChangeReqRes, reader: jspb.BinaryReader): ExternalTaskStatusChangeReqRes;
}

export namespace ExternalTaskStatusChangeReqRes {
  export type AsObject = {
    inputListList: Array<SittelleTypeClient_pb.ExternalInputSett.AsObject>,
    changeTaskListList: Array<number>,
  }
}

export class ExternalTaskStatusPossibleListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusPossibleListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusPossibleListRequest): ExternalTaskStatusPossibleListRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusPossibleListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusPossibleListRequest;
  static deserializeBinaryFromReader(message: ExternalTaskStatusPossibleListRequest, reader: jspb.BinaryReader): ExternalTaskStatusPossibleListRequest;
}

export namespace ExternalTaskStatusPossibleListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
  }
}

export class ExternalTaskStatusPossibleListRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusPossibleListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusPossibleListRes): ExternalTaskStatusPossibleListRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusPossibleListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusPossibleListRes;
  static deserializeBinaryFromReader(message: ExternalTaskStatusPossibleListRes, reader: jspb.BinaryReader): ExternalTaskStatusPossibleListRes;
}

export namespace ExternalTaskStatusPossibleListRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class ExternalTaskStatusTemplatePossibleRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusTemplatePossibleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusTemplatePossibleRequest): ExternalTaskStatusTemplatePossibleRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusTemplatePossibleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusTemplatePossibleRequest;
  static deserializeBinaryFromReader(message: ExternalTaskStatusTemplatePossibleRequest, reader: jspb.BinaryReader): ExternalTaskStatusTemplatePossibleRequest;
}

export namespace ExternalTaskStatusTemplatePossibleRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
  }
}

export class ExternalTaskStatusTemplatePossibleRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStatusTemplatePossibleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStatusTemplatePossibleRes): ExternalTaskStatusTemplatePossibleRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStatusTemplatePossibleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStatusTemplatePossibleRes;
  static deserializeBinaryFromReader(message: ExternalTaskStatusTemplatePossibleRes, reader: jspb.BinaryReader): ExternalTaskStatusTemplatePossibleRes;
}

export namespace ExternalTaskStatusTemplatePossibleRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class ExternalTaskTemplateListByStatusRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateListByStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateListByStatusRequest): ExternalTaskTemplateListByStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateListByStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateListByStatusRequest;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateListByStatusRequest, reader: jspb.BinaryReader): ExternalTaskTemplateListByStatusRequest;
}

export namespace ExternalTaskTemplateListByStatusRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    statusInd: number,
  }
}

export class ExternalTaskTemplateListByStatusRes extends jspb.Message {
  getInputListList(): Array<SittelleTypeClient_pb.ExternalInputSett>;
  setInputListList(value: Array<SittelleTypeClient_pb.ExternalInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeClient_pb.ExternalInputSett, index?: number): SittelleTypeClient_pb.ExternalInputSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskTemplateListByStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskTemplateListByStatusRes): ExternalTaskTemplateListByStatusRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskTemplateListByStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskTemplateListByStatusRes;
  static deserializeBinaryFromReader(message: ExternalTaskTemplateListByStatusRes, reader: jspb.BinaryReader): ExternalTaskTemplateListByStatusRes;
}

export namespace ExternalTaskTemplateListByStatusRes {
  export type AsObject = {
    inputListList: Array<SittelleTypeClient_pb.ExternalInputSett.AsObject>,
  }
}

export class ExternalTaskItemGetRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskItemGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskItemGetRequest): ExternalTaskItemGetRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskItemGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskItemGetRequest;
  static deserializeBinaryFromReader(message: ExternalTaskItemGetRequest, reader: jspb.BinaryReader): ExternalTaskItemGetRequest;
}

export namespace ExternalTaskItemGetRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
  }
}

export class ExternalTaskItemGetRes extends jspb.Message {
  getTaskItem(): SittelleTypeTask_pb.TaskItemSett | undefined;
  setTaskItem(value?: SittelleTypeTask_pb.TaskItemSett): void;
  hasTaskItem(): boolean;
  clearTaskItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskItemGetRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskItemGetRes): ExternalTaskItemGetRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskItemGetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskItemGetRes;
  static deserializeBinaryFromReader(message: ExternalTaskItemGetRes, reader: jspb.BinaryReader): ExternalTaskItemGetRes;
}

export namespace ExternalTaskItemGetRes {
  export type AsObject = {
    taskItem?: SittelleTypeTask_pb.TaskItemSett.AsObject,
  }
}

export class ExternalTaskContentChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getTaskContent(): SittelleTypeTask_pb.TaskContentInput | undefined;
  setTaskContent(value?: SittelleTypeTask_pb.TaskContentInput): void;
  hasTaskContent(): boolean;
  clearTaskContent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskContentChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskContentChangeRequest): ExternalTaskContentChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskContentChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskContentChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskContentChangeRequest, reader: jspb.BinaryReader): ExternalTaskContentChangeRequest;
}

export namespace ExternalTaskContentChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    taskContent?: SittelleTypeTask_pb.TaskContentInput.AsObject,
  }
}

export class ExternalTaskContentChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskContentChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskContentChangeRes): ExternalTaskContentChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskContentChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskContentChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskContentChangeRes, reader: jspb.BinaryReader): ExternalTaskContentChangeRes;
}

export namespace ExternalTaskContentChangeRes {
  export type AsObject = {
  }
}

export class ExternalTaskStateChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getTaskState(): SittelleTypeTask_pb.TaskStateInput | undefined;
  setTaskState(value?: SittelleTypeTask_pb.TaskStateInput): void;
  hasTaskState(): boolean;
  clearTaskState(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStateChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStateChangeRequest): ExternalTaskStateChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStateChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStateChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskStateChangeRequest, reader: jspb.BinaryReader): ExternalTaskStateChangeRequest;
}

export namespace ExternalTaskStateChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    taskState?: SittelleTypeTask_pb.TaskStateInput.AsObject,
  }
}

export class ExternalTaskStateChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskStateChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskStateChangeRes): ExternalTaskStateChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskStateChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskStateChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskStateChangeRes, reader: jspb.BinaryReader): ExternalTaskStateChangeRes;
}

export namespace ExternalTaskStateChangeRes {
  export type AsObject = {
  }
}

export class ExternalTaskAccountStateChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getTaskState(): SittelleTypeTask_pb.TaskStateInput | undefined;
  setTaskState(value?: SittelleTypeTask_pb.TaskStateInput): void;
  hasTaskState(): boolean;
  clearTaskState(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskAccountStateChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskAccountStateChangeRequest): ExternalTaskAccountStateChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskAccountStateChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskAccountStateChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskAccountStateChangeRequest, reader: jspb.BinaryReader): ExternalTaskAccountStateChangeRequest;
}

export namespace ExternalTaskAccountStateChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    taskState?: SittelleTypeTask_pb.TaskStateInput.AsObject,
  }
}

export class ExternalTaskAccountStateChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskAccountStateChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskAccountStateChangeRes): ExternalTaskAccountStateChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskAccountStateChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskAccountStateChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskAccountStateChangeRes, reader: jspb.BinaryReader): ExternalTaskAccountStateChangeRes;
}

export namespace ExternalTaskAccountStateChangeRes {
  export type AsObject = {
  }
}

export class ExternalTaskManualRequestRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSubtaskPathInd(): number;
  setSubtaskPathInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskManualRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskManualRequestRequest): ExternalTaskManualRequestRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskManualRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskManualRequestRequest;
  static deserializeBinaryFromReader(message: ExternalTaskManualRequestRequest, reader: jspb.BinaryReader): ExternalTaskManualRequestRequest;
}

export namespace ExternalTaskManualRequestRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    statusInd: number,
    subtaskPathInd: number,
  }
}

export class ExternalTaskManualRequestRes extends jspb.Message {
  getTaskManualRequestList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setTaskManualRequestList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearTaskManualRequestList(): void;
  addTaskManualRequest(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskManualRequestRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskManualRequestRes): ExternalTaskManualRequestRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskManualRequestRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskManualRequestRes;
  static deserializeBinaryFromReader(message: ExternalTaskManualRequestRes, reader: jspb.BinaryReader): ExternalTaskManualRequestRes;
}

export namespace ExternalTaskManualRequestRes {
  export type AsObject = {
    taskManualRequestList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
  }
}

export class ExternalTaskManualChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearParamListList(): void;
  addParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskManualChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskManualChangeRequest): ExternalTaskManualChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskManualChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskManualChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskManualChangeRequest, reader: jspb.BinaryReader): ExternalTaskManualChangeRequest;
}

export namespace ExternalTaskManualChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    paramListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
  }
}

export class ExternalTaskManualChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskManualChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskManualChangeRes): ExternalTaskManualChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskManualChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskManualChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskManualChangeRes, reader: jspb.BinaryReader): ExternalTaskManualChangeRes;
}

export namespace ExternalTaskManualChangeRes {
  export type AsObject = {
  }
}

export class ExternalTaskRoleAccountGroupListAddRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getRoleInd(): number;
  setRoleInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleAccountGroupListAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleAccountGroupListAddRequest): ExternalTaskRoleAccountGroupListAddRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleAccountGroupListAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleAccountGroupListAddRequest;
  static deserializeBinaryFromReader(message: ExternalTaskRoleAccountGroupListAddRequest, reader: jspb.BinaryReader): ExternalTaskRoleAccountGroupListAddRequest;
}

export namespace ExternalTaskRoleAccountGroupListAddRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    roleInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class ExternalTaskRoleAccountGroupListAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleAccountGroupListAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleAccountGroupListAddRes): ExternalTaskRoleAccountGroupListAddRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleAccountGroupListAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleAccountGroupListAddRes;
  static deserializeBinaryFromReader(message: ExternalTaskRoleAccountGroupListAddRes, reader: jspb.BinaryReader): ExternalTaskRoleAccountGroupListAddRes;
}

export namespace ExternalTaskRoleAccountGroupListAddRes {
  export type AsObject = {
  }
}

export class ExternalTaskRoleAccountGroupListRemoveRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getRoleInd(): number;
  setRoleInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleAccountGroupListRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleAccountGroupListRemoveRequest): ExternalTaskRoleAccountGroupListRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleAccountGroupListRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleAccountGroupListRemoveRequest;
  static deserializeBinaryFromReader(message: ExternalTaskRoleAccountGroupListRemoveRequest, reader: jspb.BinaryReader): ExternalTaskRoleAccountGroupListRemoveRequest;
}

export namespace ExternalTaskRoleAccountGroupListRemoveRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    roleInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class ExternalTaskRoleAccountGroupListRemoveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleAccountGroupListRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleAccountGroupListRemoveRes): ExternalTaskRoleAccountGroupListRemoveRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleAccountGroupListRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleAccountGroupListRemoveRes;
  static deserializeBinaryFromReader(message: ExternalTaskRoleAccountGroupListRemoveRes, reader: jspb.BinaryReader): ExternalTaskRoleAccountGroupListRemoveRes;
}

export namespace ExternalTaskRoleAccountGroupListRemoveRes {
  export type AsObject = {
  }
}

export class ExternalTaskRoleAccountGroupCheckRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getRoleInd(): number;
  setRoleInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleAccountGroupCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleAccountGroupCheckRequest): ExternalTaskRoleAccountGroupCheckRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleAccountGroupCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleAccountGroupCheckRequest;
  static deserializeBinaryFromReader(message: ExternalTaskRoleAccountGroupCheckRequest, reader: jspb.BinaryReader): ExternalTaskRoleAccountGroupCheckRequest;
}

export namespace ExternalTaskRoleAccountGroupCheckRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    roleInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class ExternalTaskRoleAccountGroupCheckRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleAccountGroupCheckRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleAccountGroupCheckRes): ExternalTaskRoleAccountGroupCheckRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleAccountGroupCheckRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleAccountGroupCheckRes;
  static deserializeBinaryFromReader(message: ExternalTaskRoleAccountGroupCheckRes, reader: jspb.BinaryReader): ExternalTaskRoleAccountGroupCheckRes;
}

export namespace ExternalTaskRoleAccountGroupCheckRes {
  export type AsObject = {
  }
}

export class ExternalRoleAccountGroupCheckRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getRootTaskType(): number;
  setRootTaskType(value: number): void;

  getTaskType(): number;
  setTaskType(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getRoleInd(): number;
  setRoleInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalRoleAccountGroupCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalRoleAccountGroupCheckRequest): ExternalRoleAccountGroupCheckRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalRoleAccountGroupCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalRoleAccountGroupCheckRequest;
  static deserializeBinaryFromReader(message: ExternalRoleAccountGroupCheckRequest, reader: jspb.BinaryReader): ExternalRoleAccountGroupCheckRequest;
}

export namespace ExternalRoleAccountGroupCheckRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    rootTaskType: number,
    taskType: number,
    statusInd: number,
    roleInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class ExternalRoleAccountGroupCheckRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalRoleAccountGroupCheckRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalRoleAccountGroupCheckRes): ExternalRoleAccountGroupCheckRes.AsObject;
  static serializeBinaryToWriter(message: ExternalRoleAccountGroupCheckRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalRoleAccountGroupCheckRes;
  static deserializeBinaryFromReader(message: ExternalRoleAccountGroupCheckRes, reader: jspb.BinaryReader): ExternalRoleAccountGroupCheckRes;
}

export namespace ExternalRoleAccountGroupCheckRes {
  export type AsObject = {
  }
}

export class ExternalTaskRoleApplyRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getRole(): SittelleTypeTask_pb.TaskRoleInput | undefined;
  setRole(value?: SittelleTypeTask_pb.TaskRoleInput): void;
  hasRole(): boolean;
  clearRole(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleApplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleApplyRequest): ExternalTaskRoleApplyRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleApplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleApplyRequest;
  static deserializeBinaryFromReader(message: ExternalTaskRoleApplyRequest, reader: jspb.BinaryReader): ExternalTaskRoleApplyRequest;
}

export namespace ExternalTaskRoleApplyRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    role?: SittelleTypeTask_pb.TaskRoleInput.AsObject,
  }
}

export class ExternalTaskRoleApplyRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleApplyRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleApplyRes): ExternalTaskRoleApplyRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleApplyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleApplyRes;
  static deserializeBinaryFromReader(message: ExternalTaskRoleApplyRes, reader: jspb.BinaryReader): ExternalTaskRoleApplyRes;
}

export namespace ExternalTaskRoleApplyRes {
  export type AsObject = {
  }
}

export class ExternalTaskRoleRequestRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSubtaskPathInd(): number;
  setSubtaskPathInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleRequestRequest): ExternalTaskRoleRequestRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleRequestRequest;
  static deserializeBinaryFromReader(message: ExternalTaskRoleRequestRequest, reader: jspb.BinaryReader): ExternalTaskRoleRequestRequest;
}

export namespace ExternalTaskRoleRequestRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    statusInd: number,
    subtaskPathInd: number,
  }
}

export class ExternalTaskRoleRequestRes extends jspb.Message {
  getRoleSettList(): Array<SittelleTypeTask_pb.TaskRole>;
  setRoleSettList(value: Array<SittelleTypeTask_pb.TaskRole>): void;
  clearRoleSettList(): void;
  addRoleSett(value?: SittelleTypeTask_pb.TaskRole, index?: number): SittelleTypeTask_pb.TaskRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskRoleRequestRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskRoleRequestRes): ExternalTaskRoleRequestRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskRoleRequestRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskRoleRequestRes;
  static deserializeBinaryFromReader(message: ExternalTaskRoleRequestRes, reader: jspb.BinaryReader): ExternalTaskRoleRequestRes;
}

export namespace ExternalTaskRoleRequestRes {
  export type AsObject = {
    roleSettList: Array<SittelleTypeTask_pb.TaskRole.AsObject>,
  }
}

export class ExternalTaskCommentAddRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getTaskComment(): SittelleTypeTask_pb.TaskCommentInput | undefined;
  setTaskComment(value?: SittelleTypeTask_pb.TaskCommentInput): void;
  hasTaskComment(): boolean;
  clearTaskComment(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskCommentAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskCommentAddRequest): ExternalTaskCommentAddRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskCommentAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskCommentAddRequest;
  static deserializeBinaryFromReader(message: ExternalTaskCommentAddRequest, reader: jspb.BinaryReader): ExternalTaskCommentAddRequest;
}

export namespace ExternalTaskCommentAddRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    taskComment?: SittelleTypeTask_pb.TaskCommentInput.AsObject,
  }
}

export class ExternalTaskCommentAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskCommentAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskCommentAddRes): ExternalTaskCommentAddRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskCommentAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskCommentAddRes;
  static deserializeBinaryFromReader(message: ExternalTaskCommentAddRes, reader: jspb.BinaryReader): ExternalTaskCommentAddRes;
}

export namespace ExternalTaskCommentAddRes {
  export type AsObject = {
  }
}

export class ExternalTaskFieldChangeRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getFieldInd(): number;
  setFieldInd(value: number): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskFieldChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskFieldChangeRequest): ExternalTaskFieldChangeRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskFieldChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskFieldChangeRequest;
  static deserializeBinaryFromReader(message: ExternalTaskFieldChangeRequest, reader: jspb.BinaryReader): ExternalTaskFieldChangeRequest;
}

export namespace ExternalTaskFieldChangeRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    fieldInd: number,
    value: string,
  }
}

export class ExternalTaskFieldChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskFieldChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskFieldChangeRes): ExternalTaskFieldChangeRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskFieldChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskFieldChangeRes;
  static deserializeBinaryFromReader(message: ExternalTaskFieldChangeRes, reader: jspb.BinaryReader): ExternalTaskFieldChangeRes;
}

export namespace ExternalTaskFieldChangeRes {
  export type AsObject = {
  }
}

export class ExternalTaskManualParamRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getParam(): SittelleTypeManual_pb.ManualValue | undefined;
  setParam(value?: SittelleTypeManual_pb.ManualValue): void;
  hasParam(): boolean;
  clearParam(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskManualParamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskManualParamRequest): ExternalTaskManualParamRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskManualParamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskManualParamRequest;
  static deserializeBinaryFromReader(message: ExternalTaskManualParamRequest, reader: jspb.BinaryReader): ExternalTaskManualParamRequest;
}

export namespace ExternalTaskManualParamRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    taskInd: number,
    param?: SittelleTypeManual_pb.ManualValue.AsObject,
  }
}

export class ExternalTaskManualParamAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalTaskManualParamAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalTaskManualParamAddRes): ExternalTaskManualParamAddRes.AsObject;
  static serializeBinaryToWriter(message: ExternalTaskManualParamAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalTaskManualParamAddRes;
  static deserializeBinaryFromReader(message: ExternalTaskManualParamAddRes, reader: jspb.BinaryReader): ExternalTaskManualParamAddRes;
}

export namespace ExternalTaskManualParamAddRes {
  export type AsObject = {
  }
}

