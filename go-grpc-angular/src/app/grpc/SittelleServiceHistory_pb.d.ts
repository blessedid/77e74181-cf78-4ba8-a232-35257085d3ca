import * as jspb from "google-protobuf"

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';

export class TaskItemByTaskIndRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemByTaskIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemByTaskIndRequest): TaskItemByTaskIndRequest.AsObject;
  static serializeBinaryToWriter(message: TaskItemByTaskIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemByTaskIndRequest;
  static deserializeBinaryFromReader(message: TaskItemByTaskIndRequest, reader: jspb.BinaryReader): TaskItemByTaskIndRequest;
}

export namespace TaskItemByTaskIndRequest {
  export type AsObject = {
    taskInd: number,
  }
}

export class TaskItemByTaskIndRes extends jspb.Message {
  getTaskItem(): SittelleTypeTask_pb.TaskItemSett | undefined;
  setTaskItem(value?: SittelleTypeTask_pb.TaskItemSett): void;
  hasTaskItem(): boolean;
  clearTaskItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemByTaskIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemByTaskIndRes): TaskItemByTaskIndRes.AsObject;
  static serializeBinaryToWriter(message: TaskItemByTaskIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemByTaskIndRes;
  static deserializeBinaryFromReader(message: TaskItemByTaskIndRes, reader: jspb.BinaryReader): TaskItemByTaskIndRes;
}

export namespace TaskItemByTaskIndRes {
  export type AsObject = {
    taskItem?: SittelleTypeTask_pb.TaskItemSett.AsObject,
  }
}

export class TaskItemBySourceRequest extends jspb.Message {
  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemBySourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemBySourceRequest): TaskItemBySourceRequest.AsObject;
  static serializeBinaryToWriter(message: TaskItemBySourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemBySourceRequest;
  static deserializeBinaryFromReader(message: TaskItemBySourceRequest, reader: jspb.BinaryReader): TaskItemBySourceRequest;
}

export namespace TaskItemBySourceRequest {
  export type AsObject = {
    taskTypeInd: number,
    monObjectInd: number,
    parentTaskInd: number,
    sourceId: string,
  }
}

export class TaskItemBySourceRes extends jspb.Message {
  getTaskItemList(): Array<SittelleTypeTask_pb.TaskItemSett>;
  setTaskItemList(value: Array<SittelleTypeTask_pb.TaskItemSett>): void;
  clearTaskItemList(): void;
  addTaskItem(value?: SittelleTypeTask_pb.TaskItemSett, index?: number): SittelleTypeTask_pb.TaskItemSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemBySourceRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemBySourceRes): TaskItemBySourceRes.AsObject;
  static serializeBinaryToWriter(message: TaskItemBySourceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemBySourceRes;
  static deserializeBinaryFromReader(message: TaskItemBySourceRes, reader: jspb.BinaryReader): TaskItemBySourceRes;
}

export namespace TaskItemBySourceRes {
  export type AsObject = {
    taskItemList: Array<SittelleTypeTask_pb.TaskItemSett.AsObject>,
  }
}

export class TaskParentBySourceRequest extends jspb.Message {
  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskParentBySourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskParentBySourceRequest): TaskParentBySourceRequest.AsObject;
  static serializeBinaryToWriter(message: TaskParentBySourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskParentBySourceRequest;
  static deserializeBinaryFromReader(message: TaskParentBySourceRequest, reader: jspb.BinaryReader): TaskParentBySourceRequest;
}

export namespace TaskParentBySourceRequest {
  export type AsObject = {
    taskTypeInd: number,
    monObjectInd: number,
    sourceId: string,
  }
}

export class TaskParentBySourceRes extends jspb.Message {
  getTaskItemList(): Array<SittelleTypeTask_pb.TaskItemSett>;
  setTaskItemList(value: Array<SittelleTypeTask_pb.TaskItemSett>): void;
  clearTaskItemList(): void;
  addTaskItem(value?: SittelleTypeTask_pb.TaskItemSett, index?: number): SittelleTypeTask_pb.TaskItemSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskParentBySourceRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskParentBySourceRes): TaskParentBySourceRes.AsObject;
  static serializeBinaryToWriter(message: TaskParentBySourceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskParentBySourceRes;
  static deserializeBinaryFromReader(message: TaskParentBySourceRes, reader: jspb.BinaryReader): TaskParentBySourceRes;
}

export namespace TaskParentBySourceRes {
  export type AsObject = {
    taskItemList: Array<SittelleTypeTask_pb.TaskItemSett.AsObject>,
  }
}

export class TaskItemBySourceAndParentIndRequest extends jspb.Message {
  getSourceId(): string;
  setSourceId(value: string): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemBySourceAndParentIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemBySourceAndParentIndRequest): TaskItemBySourceAndParentIndRequest.AsObject;
  static serializeBinaryToWriter(message: TaskItemBySourceAndParentIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemBySourceAndParentIndRequest;
  static deserializeBinaryFromReader(message: TaskItemBySourceAndParentIndRequest, reader: jspb.BinaryReader): TaskItemBySourceAndParentIndRequest;
}

export namespace TaskItemBySourceAndParentIndRequest {
  export type AsObject = {
    sourceId: string,
    parentTaskInd: number,
  }
}

export class TaskItemBySourceAndParentIndRes extends jspb.Message {
  getTaskItemList(): Array<SittelleTypeTask_pb.TaskItemSett>;
  setTaskItemList(value: Array<SittelleTypeTask_pb.TaskItemSett>): void;
  clearTaskItemList(): void;
  addTaskItem(value?: SittelleTypeTask_pb.TaskItemSett, index?: number): SittelleTypeTask_pb.TaskItemSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemBySourceAndParentIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemBySourceAndParentIndRes): TaskItemBySourceAndParentIndRes.AsObject;
  static serializeBinaryToWriter(message: TaskItemBySourceAndParentIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemBySourceAndParentIndRes;
  static deserializeBinaryFromReader(message: TaskItemBySourceAndParentIndRes, reader: jspb.BinaryReader): TaskItemBySourceAndParentIndRes;
}

export namespace TaskItemBySourceAndParentIndRes {
  export type AsObject = {
    taskItemList: Array<SittelleTypeTask_pb.TaskItemSett.AsObject>,
  }
}

export class TaskItemChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getTaskItem(): SittelleTypeTask_pb.TaskItemInput | undefined;
  setTaskItem(value?: SittelleTypeTask_pb.TaskItemInput): void;
  hasTaskItem(): boolean;
  clearTaskItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemChangeRequest): TaskItemChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskItemChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemChangeRequest;
  static deserializeBinaryFromReader(message: TaskItemChangeRequest, reader: jspb.BinaryReader): TaskItemChangeRequest;
}

export namespace TaskItemChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    taskItem?: SittelleTypeTask_pb.TaskItemInput.AsObject,
  }
}

export class TaskItemChangeRes extends jspb.Message {
  getItemInd(): number;
  setItemInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemChangeRes): TaskItemChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskItemChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemChangeRes;
  static deserializeBinaryFromReader(message: TaskItemChangeRes, reader: jspb.BinaryReader): TaskItemChangeRes;
}

export namespace TaskItemChangeRes {
  export type AsObject = {
    itemInd: number,
  }
}

export class TaskChildListRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusFilterListList(): Array<number>;
  setStatusFilterListList(value: Array<number>): void;
  clearStatusFilterListList(): void;
  addStatusFilterList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskChildListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskChildListRequest): TaskChildListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskChildListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskChildListRequest;
  static deserializeBinaryFromReader(message: TaskChildListRequest, reader: jspb.BinaryReader): TaskChildListRequest;
}

export namespace TaskChildListRequest {
  export type AsObject = {
    accountInd: number,
    taskInd: number,
    statusFilterListList: Array<number>,
  }
}

export class TaskChildListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskChildListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskChildListRes): TaskChildListRes.AsObject;
  static serializeBinaryToWriter(message: TaskChildListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskChildListRes;
  static deserializeBinaryFromReader(message: TaskChildListRes, reader: jspb.BinaryReader): TaskChildListRes;
}

export namespace TaskChildListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListGroupingByParentRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentInd(): number;
  setParentInd(value: number): void;

  getRootTasktype(): number;
  setRootTasktype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListGroupingByParentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListGroupingByParentRequest): TaskListGroupingByParentRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListGroupingByParentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListGroupingByParentRequest;
  static deserializeBinaryFromReader(message: TaskListGroupingByParentRequest, reader: jspb.BinaryReader): TaskListGroupingByParentRequest;
}

export namespace TaskListGroupingByParentRequest {
  export type AsObject = {
    accountInd: number,
    parentInd: number,
    rootTasktype: number,
  }
}

export class TaskListGroupingByParentRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListGroupingByParentRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListGroupingByParentRes): TaskListGroupingByParentRes.AsObject;
  static serializeBinaryToWriter(message: TaskListGroupingByParentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListGroupingByParentRes;
  static deserializeBinaryFromReader(message: TaskListGroupingByParentRes, reader: jspb.BinaryReader): TaskListGroupingByParentRes;
}

export namespace TaskListGroupingByParentRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListStatsByParentRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentInd(): number;
  setParentInd(value: number): void;

  getRootTasktype(): number;
  setRootTasktype(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListStatsByParentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListStatsByParentRequest): TaskListStatsByParentRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListStatsByParentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListStatsByParentRequest;
  static deserializeBinaryFromReader(message: TaskListStatsByParentRequest, reader: jspb.BinaryReader): TaskListStatsByParentRequest;
}

export namespace TaskListStatsByParentRequest {
  export type AsObject = {
    accountInd: number,
    parentInd: number,
    rootTasktype: number,
  }
}

export class TaskListStatsByParentRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListStatsByParentRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListStatsByParentRes): TaskListStatsByParentRes.AsObject;
  static serializeBinaryToWriter(message: TaskListStatsByParentRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListStatsByParentRes;
  static deserializeBinaryFromReader(message: TaskListStatsByParentRes, reader: jspb.BinaryReader): TaskListStatsByParentRes;
}

export namespace TaskListStatsByParentRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskStatsRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatsRequest): TaskStatsRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatsRequest;
  static deserializeBinaryFromReader(message: TaskStatsRequest, reader: jspb.BinaryReader): TaskStatsRequest;
}

export namespace TaskStatsRequest {
  export type AsObject = {
    accountInd: number,
    taskInd: number,
  }
}

export class TaskStatsRes extends jspb.Message {
  getTask(): SittelleTypeTask_pb.TaskSett | undefined;
  setTask(value?: SittelleTypeTask_pb.TaskSett): void;
  hasTask(): boolean;
  clearTask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatsRes): TaskStatsRes.AsObject;
  static serializeBinaryToWriter(message: TaskStatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatsRes;
  static deserializeBinaryFromReader(message: TaskStatsRes, reader: jspb.BinaryReader): TaskStatsRes;
}

export namespace TaskStatsRes {
  export type AsObject = {
    task?: SittelleTypeTask_pb.TaskSett.AsObject,
  }
}

export class TaskChildListFullRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskChildListFullRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskChildListFullRequest): TaskChildListFullRequest.AsObject;
  static serializeBinaryToWriter(message: TaskChildListFullRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskChildListFullRequest;
  static deserializeBinaryFromReader(message: TaskChildListFullRequest, reader: jspb.BinaryReader): TaskChildListFullRequest;
}

export namespace TaskChildListFullRequest {
  export type AsObject = {
    accountInd: number,
    taskInd: number,
  }
}

export class TaskChildListFullRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskChildListFullRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskChildListFullRes): TaskChildListFullRes.AsObject;
  static serializeBinaryToWriter(message: TaskChildListFullRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskChildListFullRes;
  static deserializeBinaryFromReader(message: TaskChildListFullRes, reader: jspb.BinaryReader): TaskChildListFullRes;
}

export namespace TaskChildListFullRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskRoleListRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleListRequest): TaskRoleListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRoleListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleListRequest;
  static deserializeBinaryFromReader(message: TaskRoleListRequest, reader: jspb.BinaryReader): TaskRoleListRequest;
}

export namespace TaskRoleListRequest {
  export type AsObject = {
    accountInd: number,
    taskInd: number,
  }
}

export class TaskRoleListRes extends jspb.Message {
  getTaskRoleListList(): Array<SittelleTypeTask_pb.TaskRole>;
  setTaskRoleListList(value: Array<SittelleTypeTask_pb.TaskRole>): void;
  clearTaskRoleListList(): void;
  addTaskRoleList(value?: SittelleTypeTask_pb.TaskRole, index?: number): SittelleTypeTask_pb.TaskRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleListRes): TaskRoleListRes.AsObject;
  static serializeBinaryToWriter(message: TaskRoleListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleListRes;
  static deserializeBinaryFromReader(message: TaskRoleListRes, reader: jspb.BinaryReader): TaskRoleListRes;
}

export namespace TaskRoleListRes {
  export type AsObject = {
    taskRoleListList: Array<SittelleTypeTask_pb.TaskRole.AsObject>,
  }
}

export class TaskListAddRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskList(): void;
  addTask(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListAddRequest): TaskListAddRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListAddRequest;
  static deserializeBinaryFromReader(message: TaskListAddRequest, reader: jspb.BinaryReader): TaskListAddRequest;
}

export namespace TaskListAddRequest {
  export type AsObject = {
    sessInd: number,
    taskList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListAddRes extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListAddRes): TaskListAddRes.AsObject;
  static serializeBinaryToWriter(message: TaskListAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListAddRes;
  static deserializeBinaryFromReader(message: TaskListAddRes, reader: jspb.BinaryReader): TaskListAddRes;
}

export namespace TaskListAddRes {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class TaskParentChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getChildTaskIndListList(): Array<number>;
  setChildTaskIndListList(value: Array<number>): void;
  clearChildTaskIndListList(): void;
  addChildTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskParentChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskParentChangeRequest): TaskParentChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskParentChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskParentChangeRequest;
  static deserializeBinaryFromReader(message: TaskParentChangeRequest, reader: jspb.BinaryReader): TaskParentChangeRequest;
}

export namespace TaskParentChangeRequest {
  export type AsObject = {
    sessInd: number,
    parentTaskInd: number,
    childTaskIndListList: Array<number>,
  }
}

export class TaskParentChangeRes extends jspb.Message {
  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskParentChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskParentChangeRes): TaskParentChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskParentChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskParentChangeRes;
  static deserializeBinaryFromReader(message: TaskParentChangeRes, reader: jspb.BinaryReader): TaskParentChangeRes;
}

export namespace TaskParentChangeRes {
  export type AsObject = {
    taskListList: Array<number>,
  }
}

export class TaskStatusChangeReqRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSessionAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setSessionAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearSessionAccountGroupListList(): void;
  addSessionAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusChangeReqRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusChangeReqRequest): TaskStatusChangeReqRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStatusChangeReqRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusChangeReqRequest;
  static deserializeBinaryFromReader(message: TaskStatusChangeReqRequest, reader: jspb.BinaryReader): TaskStatusChangeReqRequest;
}

export namespace TaskStatusChangeReqRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    statusInd: number,
    sessionAccountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class TaskStatusChangeReqRes extends jspb.Message {
  getInputListList(): Array<SittelleTypeTask_pb.StatusInputSett>;
  setInputListList(value: Array<SittelleTypeTask_pb.StatusInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeTask_pb.StatusInputSett, index?: number): SittelleTypeTask_pb.StatusInputSett;

  getChangeTaskListList(): Array<number>;
  setChangeTaskListList(value: Array<number>): void;
  clearChangeTaskListList(): void;
  addChangeTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusChangeReqRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusChangeReqRes): TaskStatusChangeReqRes.AsObject;
  static serializeBinaryToWriter(message: TaskStatusChangeReqRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusChangeReqRes;
  static deserializeBinaryFromReader(message: TaskStatusChangeReqRes, reader: jspb.BinaryReader): TaskStatusChangeReqRes;
}

export namespace TaskStatusChangeReqRes {
  export type AsObject = {
    inputListList: Array<SittelleTypeTask_pb.StatusInputSett.AsObject>,
    changeTaskListList: Array<number>,
  }
}

export class TaskRemoveRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  getIncludeChild(): boolean;
  setIncludeChild(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRemoveRequest): TaskRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRemoveRequest;
  static deserializeBinaryFromReader(message: TaskRemoveRequest, reader: jspb.BinaryReader): TaskRemoveRequest;
}

export namespace TaskRemoveRequest {
  export type AsObject = {
    sessInd: number,
    taskIndListList: Array<number>,
    includeChild: boolean,
  }
}

export class TaskRemoveRes extends jspb.Message {
  getTaskChangeListList(): Array<number>;
  setTaskChangeListList(value: Array<number>): void;
  clearTaskChangeListList(): void;
  addTaskChangeList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRemoveRes): TaskRemoveRes.AsObject;
  static serializeBinaryToWriter(message: TaskRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRemoveRes;
  static deserializeBinaryFromReader(message: TaskRemoveRes, reader: jspb.BinaryReader): TaskRemoveRes;
}

export namespace TaskRemoveRes {
  export type AsObject = {
    taskChangeListList: Array<number>,
  }
}

export class TaskTemplateRemoveRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskTemplateIndListList(): Array<number>;
  setTaskTemplateIndListList(value: Array<number>): void;
  clearTaskTemplateIndListList(): void;
  addTaskTemplateIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateRemoveRequest): TaskTemplateRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateRemoveRequest;
  static deserializeBinaryFromReader(message: TaskTemplateRemoveRequest, reader: jspb.BinaryReader): TaskTemplateRemoveRequest;
}

export namespace TaskTemplateRemoveRequest {
  export type AsObject = {
    sessInd: number,
    taskTemplateIndListList: Array<number>,
  }
}

export class TaskTemplateRemoveRes extends jspb.Message {
  getTaskTemplateChangeListList(): Array<number>;
  setTaskTemplateChangeListList(value: Array<number>): void;
  clearTaskTemplateChangeListList(): void;
  addTaskTemplateChangeList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateRemoveRes): TaskTemplateRemoveRes.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateRemoveRes;
  static deserializeBinaryFromReader(message: TaskTemplateRemoveRes, reader: jspb.BinaryReader): TaskTemplateRemoveRes;
}

export namespace TaskTemplateRemoveRes {
  export type AsObject = {
    taskTemplateChangeListList: Array<number>,
  }
}

export class TaskTemplateListByStatusRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSessionAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setSessionAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearSessionAccountGroupListList(): void;
  addSessionAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateListByStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateListByStatusRequest): TaskTemplateListByStatusRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateListByStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateListByStatusRequest;
  static deserializeBinaryFromReader(message: TaskTemplateListByStatusRequest, reader: jspb.BinaryReader): TaskTemplateListByStatusRequest;
}

export namespace TaskTemplateListByStatusRequest {
  export type AsObject = {
    taskInd: number,
    statusInd: number,
    sessionAccountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class TaskTemplateListByStatusRes extends jspb.Message {
  getInputListList(): Array<SittelleTypeTask_pb.StatusInputSett>;
  setInputListList(value: Array<SittelleTypeTask_pb.StatusInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeTask_pb.StatusInputSett, index?: number): SittelleTypeTask_pb.StatusInputSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateListByStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateListByStatusRes): TaskTemplateListByStatusRes.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateListByStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateListByStatusRes;
  static deserializeBinaryFromReader(message: TaskTemplateListByStatusRes, reader: jspb.BinaryReader): TaskTemplateListByStatusRes;
}

export namespace TaskTemplateListByStatusRes {
  export type AsObject = {
    inputListList: Array<SittelleTypeTask_pb.StatusInputSett.AsObject>,
  }
}

export class TaskTemplateAddRequest extends jspb.Message {
  getPathInd(): number;
  setPathInd(value: number): void;

  getPathRule(): number;
  setPathRule(value: number): void;

  getAccountGroupListList(): Array<number>;
  setAccountGroupListList(value: Array<number>): void;
  clearAccountGroupListList(): void;
  addAccountGroupList(value: number, index?: number): void;

  getTemplateListList(): Array<SittelleTypeTask_pb.TaskFieldsInputValues>;
  setTemplateListList(value: Array<SittelleTypeTask_pb.TaskFieldsInputValues>): void;
  clearTemplateListList(): void;
  addTemplateList(value?: SittelleTypeTask_pb.TaskFieldsInputValues, index?: number): SittelleTypeTask_pb.TaskFieldsInputValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateAddRequest): TaskTemplateAddRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateAddRequest;
  static deserializeBinaryFromReader(message: TaskTemplateAddRequest, reader: jspb.BinaryReader): TaskTemplateAddRequest;
}

export namespace TaskTemplateAddRequest {
  export type AsObject = {
    pathInd: number,
    pathRule: number,
    accountGroupListList: Array<number>,
    templateListList: Array<SittelleTypeTask_pb.TaskFieldsInputValues.AsObject>,
  }
}

export class TaskTemplateAddRes extends jspb.Message {
  getChangeTemplateListList(): Array<number>;
  setChangeTemplateListList(value: Array<number>): void;
  clearChangeTemplateListList(): void;
  addChangeTemplateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateAddRes): TaskTemplateAddRes.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateAddRes;
  static deserializeBinaryFromReader(message: TaskTemplateAddRes, reader: jspb.BinaryReader): TaskTemplateAddRes;
}

export namespace TaskTemplateAddRes {
  export type AsObject = {
    changeTemplateListList: Array<number>,
  }
}

export class TaskTemplateAddByTaskRequest extends jspb.Message {
  getPathRule(): number;
  setPathRule(value: number): void;

  getAccountGroupListList(): Array<number>;
  setAccountGroupListList(value: Array<number>): void;
  clearAccountGroupListList(): void;
  addAccountGroupList(value: number, index?: number): void;

  getTaskListList(): Array<number>;
  setTaskListList(value: Array<number>): void;
  clearTaskListList(): void;
  addTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateAddByTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateAddByTaskRequest): TaskTemplateAddByTaskRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateAddByTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateAddByTaskRequest;
  static deserializeBinaryFromReader(message: TaskTemplateAddByTaskRequest, reader: jspb.BinaryReader): TaskTemplateAddByTaskRequest;
}

export namespace TaskTemplateAddByTaskRequest {
  export type AsObject = {
    pathRule: number,
    accountGroupListList: Array<number>,
    taskListList: Array<number>,
  }
}

export class TaskTemplateAddByTaskRes extends jspb.Message {
  getChangeTemplateList(): number;
  setChangeTemplateList(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateAddByTaskRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateAddByTaskRes): TaskTemplateAddByTaskRes.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateAddByTaskRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateAddByTaskRes;
  static deserializeBinaryFromReader(message: TaskTemplateAddByTaskRes, reader: jspb.BinaryReader): TaskTemplateAddByTaskRes;
}

export namespace TaskTemplateAddByTaskRes {
  export type AsObject = {
    changeTemplateList: number,
  }
}

export class TaskTemplateChangeRequest extends jspb.Message {
  getTemplateListList(): Array<SittelleTypeTask_pb.TaskTemplate>;
  setTemplateListList(value: Array<SittelleTypeTask_pb.TaskTemplate>): void;
  clearTemplateListList(): void;
  addTemplateList(value?: SittelleTypeTask_pb.TaskTemplate, index?: number): SittelleTypeTask_pb.TaskTemplate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateChangeRequest): TaskTemplateChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateChangeRequest;
  static deserializeBinaryFromReader(message: TaskTemplateChangeRequest, reader: jspb.BinaryReader): TaskTemplateChangeRequest;
}

export namespace TaskTemplateChangeRequest {
  export type AsObject = {
    templateListList: Array<SittelleTypeTask_pb.TaskTemplate.AsObject>,
  }
}

export class TaskTemplateChangeRes extends jspb.Message {
  getChangeTemplateListList(): Array<number>;
  setChangeTemplateListList(value: Array<number>): void;
  clearChangeTemplateListList(): void;
  addChangeTemplateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateChangeRes): TaskTemplateChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateChangeRes;
  static deserializeBinaryFromReader(message: TaskTemplateChangeRes, reader: jspb.BinaryReader): TaskTemplateChangeRes;
}

export namespace TaskTemplateChangeRes {
  export type AsObject = {
    changeTemplateListList: Array<number>,
  }
}

export class TaskStatusInputChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInput(): SittelleTypeTask_pb.TaskStatusInput | undefined;
  setStatusInput(value?: SittelleTypeTask_pb.TaskStatusInput): void;
  hasStatusInput(): boolean;
  clearStatusInput(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusInputChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusInputChangeRequest): TaskStatusInputChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStatusInputChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusInputChangeRequest;
  static deserializeBinaryFromReader(message: TaskStatusInputChangeRequest, reader: jspb.BinaryReader): TaskStatusInputChangeRequest;
}

export namespace TaskStatusInputChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    statusInput?: SittelleTypeTask_pb.TaskStatusInput.AsObject,
  }
}

export class TaskStatusInputChangeRes extends jspb.Message {
  getInputListList(): Array<SittelleTypeTask_pb.TaskFieldsInput>;
  setInputListList(value: Array<SittelleTypeTask_pb.TaskFieldsInput>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeTask_pb.TaskFieldsInput, index?: number): SittelleTypeTask_pb.TaskFieldsInput;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusInputChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusInputChangeRes): TaskStatusInputChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskStatusInputChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusInputChangeRes;
  static deserializeBinaryFromReader(message: TaskStatusInputChangeRes, reader: jspb.BinaryReader): TaskStatusInputChangeRes;
}

export namespace TaskStatusInputChangeRes {
  export type AsObject = {
    inputListList: Array<SittelleTypeTask_pb.TaskFieldsInput.AsObject>,
    statusInd: number,
  }
}

export class TaskStatusChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSessionAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setSessionAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearSessionAccountGroupListList(): void;
  addSessionAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  getInputListList(): Array<SittelleTypeTask_pb.StatusInputSett>;
  setInputListList(value: Array<SittelleTypeTask_pb.StatusInputSett>): void;
  clearInputListList(): void;
  addInputList(value?: SittelleTypeTask_pb.StatusInputSett, index?: number): SittelleTypeTask_pb.StatusInputSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusChangeRequest): TaskStatusChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStatusChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusChangeRequest;
  static deserializeBinaryFromReader(message: TaskStatusChangeRequest, reader: jspb.BinaryReader): TaskStatusChangeRequest;
}

export namespace TaskStatusChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    statusInd: number,
    sessionAccountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
    inputListList: Array<SittelleTypeTask_pb.StatusInputSett.AsObject>,
  }
}

export class TaskStatusChangeRes extends jspb.Message {
  getStatusInd(): number;
  setStatusInd(value: number): void;

  getChangeTaskListList(): Array<number>;
  setChangeTaskListList(value: Array<number>): void;
  clearChangeTaskListList(): void;
  addChangeTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusChangeRes): TaskStatusChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskStatusChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusChangeRes;
  static deserializeBinaryFromReader(message: TaskStatusChangeRes, reader: jspb.BinaryReader): TaskStatusChangeRes;
}

export namespace TaskStatusChangeRes {
  export type AsObject = {
    statusInd: number,
    changeTaskListList: Array<number>,
  }
}

export class TaskContentChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getContent(): SittelleTypeTask_pb.TaskContentInput | undefined;
  setContent(value?: SittelleTypeTask_pb.TaskContentInput): void;
  hasContent(): boolean;
  clearContent(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskContentChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskContentChangeRequest): TaskContentChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskContentChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskContentChangeRequest;
  static deserializeBinaryFromReader(message: TaskContentChangeRequest, reader: jspb.BinaryReader): TaskContentChangeRequest;
}

export namespace TaskContentChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    content?: SittelleTypeTask_pb.TaskContentInput.AsObject,
  }
}

export class TaskContentChangeRes extends jspb.Message {
  getContentInd(): number;
  setContentInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskContentChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskContentChangeRes): TaskContentChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskContentChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskContentChangeRes;
  static deserializeBinaryFromReader(message: TaskContentChangeRes, reader: jspb.BinaryReader): TaskContentChangeRes;
}

export namespace TaskContentChangeRes {
  export type AsObject = {
    contentInd: number,
  }
}

export class TaskManualChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearParamListList(): void;
  addParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskManualChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskManualChangeRequest): TaskManualChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskManualChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskManualChangeRequest;
  static deserializeBinaryFromReader(message: TaskManualChangeRequest, reader: jspb.BinaryReader): TaskManualChangeRequest;
}

export namespace TaskManualChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    paramListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
  }
}

export class TaskManualChangeRes extends jspb.Message {
  getManualInd(): number;
  setManualInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskManualChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskManualChangeRes): TaskManualChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskManualChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskManualChangeRes;
  static deserializeBinaryFromReader(message: TaskManualChangeRes, reader: jspb.BinaryReader): TaskManualChangeRes;
}

export namespace TaskManualChangeRes {
  export type AsObject = {
    manualInd: number,
  }
}

export class TaskManualRequestRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSubtaskPathInd(): number;
  setSubtaskPathInd(value: number): void;

  getSessionAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setSessionAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearSessionAccountGroupListList(): void;
  addSessionAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskManualRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskManualRequestRequest): TaskManualRequestRequest.AsObject;
  static serializeBinaryToWriter(message: TaskManualRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskManualRequestRequest;
  static deserializeBinaryFromReader(message: TaskManualRequestRequest, reader: jspb.BinaryReader): TaskManualRequestRequest;
}

export namespace TaskManualRequestRequest {
  export type AsObject = {
    taskInd: number,
    statusInd: number,
    subtaskPathInd: number,
    sessionAccountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class TaskManualRequestRes extends jspb.Message {
  getManualRequestListList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setManualRequestListList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearManualRequestListList(): void;
  addManualRequestList(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskManualRequestRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskManualRequestRes): TaskManualRequestRes.AsObject;
  static serializeBinaryToWriter(message: TaskManualRequestRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskManualRequestRes;
  static deserializeBinaryFromReader(message: TaskManualRequestRes, reader: jspb.BinaryReader): TaskManualRequestRes;
}

export namespace TaskManualRequestRes {
  export type AsObject = {
    manualRequestListList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
  }
}

export class TaskStateChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getTaskState(): SittelleTypeTask_pb.TaskStateInput | undefined;
  setTaskState(value?: SittelleTypeTask_pb.TaskStateInput): void;
  hasTaskState(): boolean;
  clearTaskState(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateChangeRequest): TaskStateChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStateChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateChangeRequest;
  static deserializeBinaryFromReader(message: TaskStateChangeRequest, reader: jspb.BinaryReader): TaskStateChangeRequest;
}

export namespace TaskStateChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    taskState?: SittelleTypeTask_pb.TaskStateInput.AsObject,
  }
}

export class TaskStateChangeRes extends jspb.Message {
  getStateInd(): number;
  setStateInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateChangeRes): TaskStateChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskStateChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateChangeRes;
  static deserializeBinaryFromReader(message: TaskStateChangeRes, reader: jspb.BinaryReader): TaskStateChangeRes;
}

export namespace TaskStateChangeRes {
  export type AsObject = {
    stateInd: number,
  }
}

export class TaskStateApplyRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStateMask(): number;
  setStateMask(value: number): void;

  getMaskApplyType(): number;
  setMaskApplyType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateApplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateApplyRequest): TaskStateApplyRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStateApplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateApplyRequest;
  static deserializeBinaryFromReader(message: TaskStateApplyRequest, reader: jspb.BinaryReader): TaskStateApplyRequest;
}

export namespace TaskStateApplyRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    stateMask: number,
    maskApplyType: number,
  }
}

export class TaskStateApplyRes extends jspb.Message {
  getStateInd(): number;
  setStateInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateApplyRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateApplyRes): TaskStateApplyRes.AsObject;
  static serializeBinaryToWriter(message: TaskStateApplyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateApplyRes;
  static deserializeBinaryFromReader(message: TaskStateApplyRes, reader: jspb.BinaryReader): TaskStateApplyRes;
}

export namespace TaskStateApplyRes {
  export type AsObject = {
    stateInd: number,
  }
}

export class TaskStateListRemoveRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStateListList(): Array<number>;
  setStateListList(value: Array<number>): void;
  clearStateListList(): void;
  addStateList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateListRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateListRemoveRequest): TaskStateListRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStateListRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateListRemoveRequest;
  static deserializeBinaryFromReader(message: TaskStateListRemoveRequest, reader: jspb.BinaryReader): TaskStateListRemoveRequest;
}

export namespace TaskStateListRemoveRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    stateListList: Array<number>,
  }
}

export class TaskStateListRemoveRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateListRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateListRemoveRes): TaskStateListRemoveRes.AsObject;
  static serializeBinaryToWriter(message: TaskStateListRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateListRemoveRes;
  static deserializeBinaryFromReader(message: TaskStateListRemoveRes, reader: jspb.BinaryReader): TaskStateListRemoveRes;
}

export namespace TaskStateListRemoveRes {
  export type AsObject = {
  }
}

export class TaskAccountStateChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getTaskState(): SittelleTypeTask_pb.TaskStateInput | undefined;
  setTaskState(value?: SittelleTypeTask_pb.TaskStateInput): void;
  hasTaskState(): boolean;
  clearTaskState(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateChangeRequest): TaskAccountStateChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateChangeRequest;
  static deserializeBinaryFromReader(message: TaskAccountStateChangeRequest, reader: jspb.BinaryReader): TaskAccountStateChangeRequest;
}

export namespace TaskAccountStateChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    accountInd: number,
    taskState?: SittelleTypeTask_pb.TaskStateInput.AsObject,
  }
}

export class TaskAccountStateChangeRes extends jspb.Message {
  getAccountStateIndArchive(): number;
  setAccountStateIndArchive(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateChangeRes): TaskAccountStateChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateChangeRes;
  static deserializeBinaryFromReader(message: TaskAccountStateChangeRes, reader: jspb.BinaryReader): TaskAccountStateChangeRes;
}

export namespace TaskAccountStateChangeRes {
  export type AsObject = {
    accountStateIndArchive: number,
  }
}

export class TaskAccountStateApplyRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getStateMask(): number;
  setStateMask(value: number): void;

  getMaskApplyType(): number;
  setMaskApplyType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateApplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateApplyRequest): TaskAccountStateApplyRequest.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateApplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateApplyRequest;
  static deserializeBinaryFromReader(message: TaskAccountStateApplyRequest, reader: jspb.BinaryReader): TaskAccountStateApplyRequest;
}

export namespace TaskAccountStateApplyRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    accountInd: number,
    stateMask: number,
    maskApplyType: number,
  }
}

export class TaskAccountStateApplyRes extends jspb.Message {
  getStateAccountArchiveInd(): number;
  setStateAccountArchiveInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateApplyRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateApplyRes): TaskAccountStateApplyRes.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateApplyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateApplyRes;
  static deserializeBinaryFromReader(message: TaskAccountStateApplyRes, reader: jspb.BinaryReader): TaskAccountStateApplyRes;
}

export namespace TaskAccountStateApplyRes {
  export type AsObject = {
    stateAccountArchiveInd: number,
  }
}

export class TaskAccountStateRemoveRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getStateMask(): number;
  setStateMask(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateRemoveRequest): TaskAccountStateRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateRemoveRequest;
  static deserializeBinaryFromReader(message: TaskAccountStateRemoveRequest, reader: jspb.BinaryReader): TaskAccountStateRemoveRequest;
}

export namespace TaskAccountStateRemoveRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    accountInd: number,
    stateMask: number,
  }
}

export class TaskAccountStateRemoveRes extends jspb.Message {
  getStateAccountArchiveInd(): number;
  setStateAccountArchiveInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateRemoveRes): TaskAccountStateRemoveRes.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateRemoveRes;
  static deserializeBinaryFromReader(message: TaskAccountStateRemoveRes, reader: jspb.BinaryReader): TaskAccountStateRemoveRes;
}

export namespace TaskAccountStateRemoveRes {
  export type AsObject = {
    stateAccountArchiveInd: number,
  }
}

export class TaskStateByTaskIndRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateByTaskIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateByTaskIndRequest): TaskStateByTaskIndRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStateByTaskIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateByTaskIndRequest;
  static deserializeBinaryFromReader(message: TaskStateByTaskIndRequest, reader: jspb.BinaryReader): TaskStateByTaskIndRequest;
}

export namespace TaskStateByTaskIndRequest {
  export type AsObject = {
    taskInd: number,
  }
}

export class TaskStateByTaskIndRes extends jspb.Message {
  getTaskState(): SittelleTypeTask_pb.TaskState | undefined;
  setTaskState(value?: SittelleTypeTask_pb.TaskState): void;
  hasTaskState(): boolean;
  clearTaskState(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateByTaskIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateByTaskIndRes): TaskStateByTaskIndRes.AsObject;
  static serializeBinaryToWriter(message: TaskStateByTaskIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateByTaskIndRes;
  static deserializeBinaryFromReader(message: TaskStateByTaskIndRes, reader: jspb.BinaryReader): TaskStateByTaskIndRes;
}

export namespace TaskStateByTaskIndRes {
  export type AsObject = {
    taskState?: SittelleTypeTask_pb.TaskState.AsObject,
  }
}

export class TaskRoleAccountGroupAddRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getRoleInd(): number;
  setRoleInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleAccountGroupAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleAccountGroupAddRequest): TaskRoleAccountGroupAddRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRoleAccountGroupAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleAccountGroupAddRequest;
  static deserializeBinaryFromReader(message: TaskRoleAccountGroupAddRequest, reader: jspb.BinaryReader): TaskRoleAccountGroupAddRequest;
}

export namespace TaskRoleAccountGroupAddRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    roleInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class TaskRoleAccountGroupAddRes extends jspb.Message {
  getTaskRoleArchiveIndList(): Array<number>;
  setTaskRoleArchiveIndList(value: Array<number>): void;
  clearTaskRoleArchiveIndList(): void;
  addTaskRoleArchiveInd(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleAccountGroupAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleAccountGroupAddRes): TaskRoleAccountGroupAddRes.AsObject;
  static serializeBinaryToWriter(message: TaskRoleAccountGroupAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleAccountGroupAddRes;
  static deserializeBinaryFromReader(message: TaskRoleAccountGroupAddRes, reader: jspb.BinaryReader): TaskRoleAccountGroupAddRes;
}

export namespace TaskRoleAccountGroupAddRes {
  export type AsObject = {
    taskRoleArchiveIndList: Array<number>,
  }
}

export class TaskRoleAccountGroupRemoveRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getRoleInd(): number;
  setRoleInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleAccountGroupRemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleAccountGroupRemoveRequest): TaskRoleAccountGroupRemoveRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRoleAccountGroupRemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleAccountGroupRemoveRequest;
  static deserializeBinaryFromReader(message: TaskRoleAccountGroupRemoveRequest, reader: jspb.BinaryReader): TaskRoleAccountGroupRemoveRequest;
}

export namespace TaskRoleAccountGroupRemoveRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    roleInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class TaskRoleAccountGroupRemoveRes extends jspb.Message {
  getTaskRoleArchiveIndList(): Array<number>;
  setTaskRoleArchiveIndList(value: Array<number>): void;
  clearTaskRoleArchiveIndList(): void;
  addTaskRoleArchiveInd(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleAccountGroupRemoveRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleAccountGroupRemoveRes): TaskRoleAccountGroupRemoveRes.AsObject;
  static serializeBinaryToWriter(message: TaskRoleAccountGroupRemoveRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleAccountGroupRemoveRes;
  static deserializeBinaryFromReader(message: TaskRoleAccountGroupRemoveRes, reader: jspb.BinaryReader): TaskRoleAccountGroupRemoveRes;
}

export namespace TaskRoleAccountGroupRemoveRes {
  export type AsObject = {
    taskRoleArchiveIndList: Array<number>,
  }
}

export class TaskRoleApplyRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getRole(): SittelleTypeTask_pb.TaskRoleInput | undefined;
  setRole(value?: SittelleTypeTask_pb.TaskRoleInput): void;
  hasRole(): boolean;
  clearRole(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleApplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleApplyRequest): TaskRoleApplyRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRoleApplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleApplyRequest;
  static deserializeBinaryFromReader(message: TaskRoleApplyRequest, reader: jspb.BinaryReader): TaskRoleApplyRequest;
}

export namespace TaskRoleApplyRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    role?: SittelleTypeTask_pb.TaskRoleInput.AsObject,
  }
}

export class TaskRoleApplyRes extends jspb.Message {
  getHistoryRoleIndListList(): Array<number>;
  setHistoryRoleIndListList(value: Array<number>): void;
  clearHistoryRoleIndListList(): void;
  addHistoryRoleIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleApplyRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleApplyRes): TaskRoleApplyRes.AsObject;
  static serializeBinaryToWriter(message: TaskRoleApplyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleApplyRes;
  static deserializeBinaryFromReader(message: TaskRoleApplyRes, reader: jspb.BinaryReader): TaskRoleApplyRes;
}

export namespace TaskRoleApplyRes {
  export type AsObject = {
    historyRoleIndListList: Array<number>,
  }
}

export class TaskRoleRequestRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSubtaskPathInd(): number;
  setSubtaskPathInd(value: number): void;

  getSessionAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setSessionAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearSessionAccountGroupListList(): void;
  addSessionAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleRequestRequest): TaskRoleRequestRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRoleRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleRequestRequest;
  static deserializeBinaryFromReader(message: TaskRoleRequestRequest, reader: jspb.BinaryReader): TaskRoleRequestRequest;
}

export namespace TaskRoleRequestRequest {
  export type AsObject = {
    taskInd: number,
    statusInd: number,
    subtaskPathInd: number,
    sessionAccountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class TaskRoleRequestRes extends jspb.Message {
  getRoleSettList(): Array<SittelleTypeTask_pb.TaskRole>;
  setRoleSettList(value: Array<SittelleTypeTask_pb.TaskRole>): void;
  clearRoleSettList(): void;
  addRoleSett(value?: SittelleTypeTask_pb.TaskRole, index?: number): SittelleTypeTask_pb.TaskRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleRequestRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleRequestRes): TaskRoleRequestRes.AsObject;
  static serializeBinaryToWriter(message: TaskRoleRequestRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleRequestRes;
  static deserializeBinaryFromReader(message: TaskRoleRequestRes, reader: jspb.BinaryReader): TaskRoleRequestRes;
}

export namespace TaskRoleRequestRes {
  export type AsObject = {
    roleSettList: Array<SittelleTypeTask_pb.TaskRole.AsObject>,
  }
}

export class TaskCommentAddRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getTaskComment(): SittelleTypeTask_pb.TaskCommentInput | undefined;
  setTaskComment(value?: SittelleTypeTask_pb.TaskCommentInput): void;
  hasTaskComment(): boolean;
  clearTaskComment(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCommentAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCommentAddRequest): TaskCommentAddRequest.AsObject;
  static serializeBinaryToWriter(message: TaskCommentAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCommentAddRequest;
  static deserializeBinaryFromReader(message: TaskCommentAddRequest, reader: jspb.BinaryReader): TaskCommentAddRequest;
}

export namespace TaskCommentAddRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    taskComment?: SittelleTypeTask_pb.TaskCommentInput.AsObject,
  }
}

export class TaskCommentAddRes extends jspb.Message {
  getCommentInd(): number;
  setCommentInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCommentAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCommentAddRes): TaskCommentAddRes.AsObject;
  static serializeBinaryToWriter(message: TaskCommentAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCommentAddRes;
  static deserializeBinaryFromReader(message: TaskCommentAddRes, reader: jspb.BinaryReader): TaskCommentAddRes;
}

export namespace TaskCommentAddRes {
  export type AsObject = {
    commentInd: number,
  }
}

export class TaskListByAccountGroupListRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByAccountGroupListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByAccountGroupListRequest): TaskListByAccountGroupListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListByAccountGroupListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByAccountGroupListRequest;
  static deserializeBinaryFromReader(message: TaskListByAccountGroupListRequest, reader: jspb.BinaryReader): TaskListByAccountGroupListRequest;
}

export namespace TaskListByAccountGroupListRequest {
  export type AsObject = {
    accountInd: number,
    parentTaskInd: number,
    rootTaskTypeInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class TaskListByAccountGroupListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByAccountGroupListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByAccountGroupListRes): TaskListByAccountGroupListRes.AsObject;
  static serializeBinaryToWriter(message: TaskListByAccountGroupListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByAccountGroupListRes;
  static deserializeBinaryFromReader(message: TaskListByAccountGroupListRes, reader: jspb.BinaryReader): TaskListByAccountGroupListRes;
}

export namespace TaskListByAccountGroupListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListByTaskTypeAndStatusRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByTaskTypeAndStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByTaskTypeAndStatusRequest): TaskListByTaskTypeAndStatusRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListByTaskTypeAndStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByTaskTypeAndStatusRequest;
  static deserializeBinaryFromReader(message: TaskListByTaskTypeAndStatusRequest, reader: jspb.BinaryReader): TaskListByTaskTypeAndStatusRequest;
}

export namespace TaskListByTaskTypeAndStatusRequest {
  export type AsObject = {
    accountInd: number,
    parentTaskInd: number,
    rootTaskTypeInd: number,
    taskTypeInd: number,
    statusInd: number,
  }
}

export class TaskListByTaskTypeAndStatusRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByTaskTypeAndStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByTaskTypeAndStatusRes): TaskListByTaskTypeAndStatusRes.AsObject;
  static serializeBinaryToWriter(message: TaskListByTaskTypeAndStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByTaskTypeAndStatusRes;
  static deserializeBinaryFromReader(message: TaskListByTaskTypeAndStatusRes, reader: jspb.BinaryReader): TaskListByTaskTypeAndStatusRes;
}

export namespace TaskListByTaskTypeAndStatusRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListByRootTaskTypeRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByRootTaskTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByRootTaskTypeRequest): TaskListByRootTaskTypeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListByRootTaskTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByRootTaskTypeRequest;
  static deserializeBinaryFromReader(message: TaskListByRootTaskTypeRequest, reader: jspb.BinaryReader): TaskListByRootTaskTypeRequest;
}

export namespace TaskListByRootTaskTypeRequest {
  export type AsObject = {
    accountInd: number,
    parentTaskInd: number,
    rootTaskTypeInd: number,
  }
}

export class TaskListByRootTaskTypeRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByRootTaskTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByRootTaskTypeRes): TaskListByRootTaskTypeRes.AsObject;
  static serializeBinaryToWriter(message: TaskListByRootTaskTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByRootTaskTypeRes;
  static deserializeBinaryFromReader(message: TaskListByRootTaskTypeRes, reader: jspb.BinaryReader): TaskListByRootTaskTypeRes;
}

export namespace TaskListByRootTaskTypeRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListByTaskTypeRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByTaskTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByTaskTypeRequest): TaskListByTaskTypeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListByTaskTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByTaskTypeRequest;
  static deserializeBinaryFromReader(message: TaskListByTaskTypeRequest, reader: jspb.BinaryReader): TaskListByTaskTypeRequest;
}

export namespace TaskListByTaskTypeRequest {
  export type AsObject = {
    accountInd: number,
    parentTaskInd: number,
    taskTypeInd: number,
  }
}

export class TaskListByTaskTypeRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByTaskTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByTaskTypeRes): TaskListByTaskTypeRes.AsObject;
  static serializeBinaryToWriter(message: TaskListByTaskTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByTaskTypeRes;
  static deserializeBinaryFromReader(message: TaskListByTaskTypeRes, reader: jspb.BinaryReader): TaskListByTaskTypeRes;
}

export namespace TaskListByTaskTypeRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListByIndexListRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByIndexListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByIndexListRequest): TaskListByIndexListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListByIndexListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByIndexListRequest;
  static deserializeBinaryFromReader(message: TaskListByIndexListRequest, reader: jspb.BinaryReader): TaskListByIndexListRequest;
}

export namespace TaskListByIndexListRequest {
  export type AsObject = {
    accountInd: number,
    parentTaskInd: number,
    taskIndListList: Array<number>,
  }
}

export class TaskListByIndexListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByIndexListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByIndexListRes): TaskListByIndexListRes.AsObject;
  static serializeBinaryToWriter(message: TaskListByIndexListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByIndexListRes;
  static deserializeBinaryFromReader(message: TaskListByIndexListRes, reader: jspb.BinaryReader): TaskListByIndexListRes;
}

export namespace TaskListByIndexListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListRequest): TaskListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListRequest;
  static deserializeBinaryFromReader(message: TaskListRequest, reader: jspb.BinaryReader): TaskListRequest;
}

export namespace TaskListRequest {
  export type AsObject = {
    accountInd: number,
  }
}

export class TaskListRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListRes): TaskListRes.AsObject;
  static serializeBinaryToWriter(message: TaskListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListRes;
  static deserializeBinaryFromReader(message: TaskListRes, reader: jspb.BinaryReader): TaskListRes;
}

export namespace TaskListRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskListByStateMaskRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getApplyMaskType(): number;
  setApplyMaskType(value: number): void;

  getMask(): number;
  setMask(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByStateMaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByStateMaskRequest): TaskListByStateMaskRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListByStateMaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByStateMaskRequest;
  static deserializeBinaryFromReader(message: TaskListByStateMaskRequest, reader: jspb.BinaryReader): TaskListByStateMaskRequest;
}

export namespace TaskListByStateMaskRequest {
  export type AsObject = {
    accountInd: number,
    applyMaskType: number,
    mask: number,
  }
}

export class TaskListByStateMaskRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByStateMaskRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByStateMaskRes): TaskListByStateMaskRes.AsObject;
  static serializeBinaryToWriter(message: TaskListByStateMaskRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByStateMaskRes;
  static deserializeBinaryFromReader(message: TaskListByStateMaskRes, reader: jspb.BinaryReader): TaskListByStateMaskRes;
}

export namespace TaskListByStateMaskRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskByAccountGroupListRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getAccountGroupIndListList(): Array<number>;
  setAccountGroupIndListList(value: Array<number>): void;
  clearAccountGroupIndListList(): void;
  addAccountGroupIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskByAccountGroupListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskByAccountGroupListRequest): TaskByAccountGroupListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskByAccountGroupListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskByAccountGroupListRequest;
  static deserializeBinaryFromReader(message: TaskByAccountGroupListRequest, reader: jspb.BinaryReader): TaskByAccountGroupListRequest;
}

export namespace TaskByAccountGroupListRequest {
  export type AsObject = {
    accountInd: number,
    taskInd: number,
    accountGroupIndListList: Array<number>,
  }
}

export class TaskByAccountGroupListRes extends jspb.Message {
  getTask(): SittelleTypeTask_pb.TaskSett | undefined;
  setTask(value?: SittelleTypeTask_pb.TaskSett): void;
  hasTask(): boolean;
  clearTask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskByAccountGroupListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskByAccountGroupListRes): TaskByAccountGroupListRes.AsObject;
  static serializeBinaryToWriter(message: TaskByAccountGroupListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskByAccountGroupListRes;
  static deserializeBinaryFromReader(message: TaskByAccountGroupListRes, reader: jspb.BinaryReader): TaskByAccountGroupListRes;
}

export namespace TaskByAccountGroupListRes {
  export type AsObject = {
    task?: SittelleTypeTask_pb.TaskSett.AsObject,
  }
}

export class TaskByTaskIndRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskByTaskIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskByTaskIndRequest): TaskByTaskIndRequest.AsObject;
  static serializeBinaryToWriter(message: TaskByTaskIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskByTaskIndRequest;
  static deserializeBinaryFromReader(message: TaskByTaskIndRequest, reader: jspb.BinaryReader): TaskByTaskIndRequest;
}

export namespace TaskByTaskIndRequest {
  export type AsObject = {
    accountInd: number,
    taskInd: number,
  }
}

export class TaskByTaskIndRes extends jspb.Message {
  getTask(): SittelleTypeTask_pb.TaskSett | undefined;
  setTask(value?: SittelleTypeTask_pb.TaskSett): void;
  hasTask(): boolean;
  clearTask(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskByTaskIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskByTaskIndRes): TaskByTaskIndRes.AsObject;
  static serializeBinaryToWriter(message: TaskByTaskIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskByTaskIndRes;
  static deserializeBinaryFromReader(message: TaskByTaskIndRes, reader: jspb.BinaryReader): TaskByTaskIndRes;
}

export namespace TaskByTaskIndRes {
  export type AsObject = {
    task?: SittelleTypeTask_pb.TaskSett.AsObject,
  }
}

export class TaskListByMonObjectAndTypeRequest extends jspb.Message {
  getAccountInd(): number;
  setAccountInd(value: number): void;

  getParentTaskInd(): number;
  setParentTaskInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getTaskType(): number;
  setTaskType(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByMonObjectAndTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByMonObjectAndTypeRequest): TaskListByMonObjectAndTypeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskListByMonObjectAndTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByMonObjectAndTypeRequest;
  static deserializeBinaryFromReader(message: TaskListByMonObjectAndTypeRequest, reader: jspb.BinaryReader): TaskListByMonObjectAndTypeRequest;
}

export namespace TaskListByMonObjectAndTypeRequest {
  export type AsObject = {
    accountInd: number,
    parentTaskInd: number,
    monObjectInd: number,
    taskType: number,
    statusInd: number,
  }
}

export class TaskListByMonObjectAndTypeRes extends jspb.Message {
  getTaskListList(): Array<SittelleTypeTask_pb.TaskSett>;
  setTaskListList(value: Array<SittelleTypeTask_pb.TaskSett>): void;
  clearTaskListList(): void;
  addTaskList(value?: SittelleTypeTask_pb.TaskSett, index?: number): SittelleTypeTask_pb.TaskSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListByMonObjectAndTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListByMonObjectAndTypeRes): TaskListByMonObjectAndTypeRes.AsObject;
  static serializeBinaryToWriter(message: TaskListByMonObjectAndTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListByMonObjectAndTypeRes;
  static deserializeBinaryFromReader(message: TaskListByMonObjectAndTypeRes, reader: jspb.BinaryReader): TaskListByMonObjectAndTypeRes;
}

export namespace TaskListByMonObjectAndTypeRes {
  export type AsObject = {
    taskListList: Array<SittelleTypeTask_pb.TaskSett.AsObject>,
  }
}

export class TaskAccountStateListRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateListRequest): TaskAccountStateListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateListRequest;
  static deserializeBinaryFromReader(message: TaskAccountStateListRequest, reader: jspb.BinaryReader): TaskAccountStateListRequest;
}

export namespace TaskAccountStateListRequest {
  export type AsObject = {
    taskInd: number,
  }
}

export class TaskAccountStateListRes extends jspb.Message {
  getAccountStateListList(): Array<SittelleTypeTask_pb.TaskAccountState>;
  setAccountStateListList(value: Array<SittelleTypeTask_pb.TaskAccountState>): void;
  clearAccountStateListList(): void;
  addAccountStateList(value?: SittelleTypeTask_pb.TaskAccountState, index?: number): SittelleTypeTask_pb.TaskAccountState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateListRes): TaskAccountStateListRes.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateListRes;
  static deserializeBinaryFromReader(message: TaskAccountStateListRes, reader: jspb.BinaryReader): TaskAccountStateListRes;
}

export namespace TaskAccountStateListRes {
  export type AsObject = {
    accountStateListList: Array<SittelleTypeTask_pb.TaskAccountState.AsObject>,
  }
}

export class TaskCommentHistoryListRequest extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCommentHistoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCommentHistoryListRequest): TaskCommentHistoryListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskCommentHistoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCommentHistoryListRequest;
  static deserializeBinaryFromReader(message: TaskCommentHistoryListRequest, reader: jspb.BinaryReader): TaskCommentHistoryListRequest;
}

export namespace TaskCommentHistoryListRequest {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class TaskCommentHistoryListRes extends jspb.Message {
  getTaskCommentListList(): Array<SittelleTypeTask_pb.TaskComment>;
  setTaskCommentListList(value: Array<SittelleTypeTask_pb.TaskComment>): void;
  clearTaskCommentListList(): void;
  addTaskCommentList(value?: SittelleTypeTask_pb.TaskComment, index?: number): SittelleTypeTask_pb.TaskComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCommentHistoryListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCommentHistoryListRes): TaskCommentHistoryListRes.AsObject;
  static serializeBinaryToWriter(message: TaskCommentHistoryListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCommentHistoryListRes;
  static deserializeBinaryFromReader(message: TaskCommentHistoryListRes, reader: jspb.BinaryReader): TaskCommentHistoryListRes;
}

export namespace TaskCommentHistoryListRes {
  export type AsObject = {
    taskCommentListList: Array<SittelleTypeTask_pb.TaskComment.AsObject>,
  }
}

export class TaskStatusPossibleListRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusPossibleListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusPossibleListRequest): TaskStatusPossibleListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStatusPossibleListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusPossibleListRequest;
  static deserializeBinaryFromReader(message: TaskStatusPossibleListRequest, reader: jspb.BinaryReader): TaskStatusPossibleListRequest;
}

export namespace TaskStatusPossibleListRequest {
  export type AsObject = {
    taskInd: number,
  }
}

export class TaskStatusPossibleListRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusPossibleListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusPossibleListRes): TaskStatusPossibleListRes.AsObject;
  static serializeBinaryToWriter(message: TaskStatusPossibleListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusPossibleListRes;
  static deserializeBinaryFromReader(message: TaskStatusPossibleListRes, reader: jspb.BinaryReader): TaskStatusPossibleListRes;
}

export namespace TaskStatusPossibleListRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class TaskStatusTemplatePossibleRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  getSessionAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setSessionAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearSessionAccountGroupListList(): void;
  addSessionAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusTemplatePossibleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusTemplatePossibleRequest): TaskStatusTemplatePossibleRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStatusTemplatePossibleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusTemplatePossibleRequest;
  static deserializeBinaryFromReader(message: TaskStatusTemplatePossibleRequest, reader: jspb.BinaryReader): TaskStatusTemplatePossibleRequest;
}

export namespace TaskStatusTemplatePossibleRequest {
  export type AsObject = {
    taskInd: number,
    sessionAccountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class TaskStatusTemplatePossibleRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeTask_pb.StatusSett>;
  setStatusListList(value: Array<SittelleTypeTask_pb.StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeTask_pb.StatusSett, index?: number): SittelleTypeTask_pb.StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusTemplatePossibleRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusTemplatePossibleRes): TaskStatusTemplatePossibleRes.AsObject;
  static serializeBinaryToWriter(message: TaskStatusTemplatePossibleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusTemplatePossibleRes;
  static deserializeBinaryFromReader(message: TaskStatusTemplatePossibleRes, reader: jspb.BinaryReader): TaskStatusTemplatePossibleRes;
}

export namespace TaskStatusTemplatePossibleRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeTask_pb.StatusSett.AsObject>,
  }
}

export class TaskStatusHistoryListRequest extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusHistoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusHistoryListRequest): TaskStatusHistoryListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStatusHistoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusHistoryListRequest;
  static deserializeBinaryFromReader(message: TaskStatusHistoryListRequest, reader: jspb.BinaryReader): TaskStatusHistoryListRequest;
}

export namespace TaskStatusHistoryListRequest {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class TaskStatusHistoryListRes extends jspb.Message {
  getTaskStatusListList(): Array<SittelleTypeTask_pb.TaskStatusSett>;
  setTaskStatusListList(value: Array<SittelleTypeTask_pb.TaskStatusSett>): void;
  clearTaskStatusListList(): void;
  addTaskStatusList(value?: SittelleTypeTask_pb.TaskStatusSett, index?: number): SittelleTypeTask_pb.TaskStatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusHistoryListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusHistoryListRes): TaskStatusHistoryListRes.AsObject;
  static serializeBinaryToWriter(message: TaskStatusHistoryListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusHistoryListRes;
  static deserializeBinaryFromReader(message: TaskStatusHistoryListRes, reader: jspb.BinaryReader): TaskStatusHistoryListRes;
}

export namespace TaskStatusHistoryListRes {
  export type AsObject = {
    taskStatusListList: Array<SittelleTypeTask_pb.TaskStatusSett.AsObject>,
  }
}

export class TaskStateHistoryListRequest extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateHistoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateHistoryListRequest): TaskStateHistoryListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskStateHistoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateHistoryListRequest;
  static deserializeBinaryFromReader(message: TaskStateHistoryListRequest, reader: jspb.BinaryReader): TaskStateHistoryListRequest;
}

export namespace TaskStateHistoryListRequest {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class TaskStateHistoryListRes extends jspb.Message {
  getTaskStateListList(): Array<SittelleTypeTask_pb.TaskState>;
  setTaskStateListList(value: Array<SittelleTypeTask_pb.TaskState>): void;
  clearTaskStateListList(): void;
  addTaskStateList(value?: SittelleTypeTask_pb.TaskState, index?: number): SittelleTypeTask_pb.TaskState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateHistoryListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateHistoryListRes): TaskStateHistoryListRes.AsObject;
  static serializeBinaryToWriter(message: TaskStateHistoryListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateHistoryListRes;
  static deserializeBinaryFromReader(message: TaskStateHistoryListRes, reader: jspb.BinaryReader): TaskStateHistoryListRes;
}

export namespace TaskStateHistoryListRes {
  export type AsObject = {
    taskStateListList: Array<SittelleTypeTask_pb.TaskState.AsObject>,
  }
}

export class TaskAccountStateHistoryListRequest extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateHistoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateHistoryListRequest): TaskAccountStateHistoryListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateHistoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateHistoryListRequest;
  static deserializeBinaryFromReader(message: TaskAccountStateHistoryListRequest, reader: jspb.BinaryReader): TaskAccountStateHistoryListRequest;
}

export namespace TaskAccountStateHistoryListRequest {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class TaskAccountStateHistoryListRes extends jspb.Message {
  getTaskAccountStateListList(): Array<SittelleTypeTask_pb.TaskAccountState>;
  setTaskAccountStateListList(value: Array<SittelleTypeTask_pb.TaskAccountState>): void;
  clearTaskAccountStateListList(): void;
  addTaskAccountStateList(value?: SittelleTypeTask_pb.TaskAccountState, index?: number): SittelleTypeTask_pb.TaskAccountState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountStateHistoryListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountStateHistoryListRes): TaskAccountStateHistoryListRes.AsObject;
  static serializeBinaryToWriter(message: TaskAccountStateHistoryListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountStateHistoryListRes;
  static deserializeBinaryFromReader(message: TaskAccountStateHistoryListRes, reader: jspb.BinaryReader): TaskAccountStateHistoryListRes;
}

export namespace TaskAccountStateHistoryListRes {
  export type AsObject = {
    taskAccountStateListList: Array<SittelleTypeTask_pb.TaskAccountState.AsObject>,
  }
}

export class TaskContentHistoryListRequest extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskContentHistoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskContentHistoryListRequest): TaskContentHistoryListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskContentHistoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskContentHistoryListRequest;
  static deserializeBinaryFromReader(message: TaskContentHistoryListRequest, reader: jspb.BinaryReader): TaskContentHistoryListRequest;
}

export namespace TaskContentHistoryListRequest {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class TaskContentHistoryListRes extends jspb.Message {
  getTaskContentListList(): Array<SittelleTypeTask_pb.TaskContentSett>;
  setTaskContentListList(value: Array<SittelleTypeTask_pb.TaskContentSett>): void;
  clearTaskContentListList(): void;
  addTaskContentList(value?: SittelleTypeTask_pb.TaskContentSett, index?: number): SittelleTypeTask_pb.TaskContentSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskContentHistoryListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskContentHistoryListRes): TaskContentHistoryListRes.AsObject;
  static serializeBinaryToWriter(message: TaskContentHistoryListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskContentHistoryListRes;
  static deserializeBinaryFromReader(message: TaskContentHistoryListRes, reader: jspb.BinaryReader): TaskContentHistoryListRes;
}

export namespace TaskContentHistoryListRes {
  export type AsObject = {
    taskContentListList: Array<SittelleTypeTask_pb.TaskContentSett.AsObject>,
  }
}

export class TaskRoleHistoryListRequest extends jspb.Message {
  getTaskIndListList(): Array<number>;
  setTaskIndListList(value: Array<number>): void;
  clearTaskIndListList(): void;
  addTaskIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleHistoryListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleHistoryListRequest): TaskRoleHistoryListRequest.AsObject;
  static serializeBinaryToWriter(message: TaskRoleHistoryListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleHistoryListRequest;
  static deserializeBinaryFromReader(message: TaskRoleHistoryListRequest, reader: jspb.BinaryReader): TaskRoleHistoryListRequest;
}

export namespace TaskRoleHistoryListRequest {
  export type AsObject = {
    taskIndListList: Array<number>,
  }
}

export class TaskRoleHistoryListRes extends jspb.Message {
  getRoleActionListList(): Array<SittelleTypeTask_pb.HistoryRoleAction>;
  setRoleActionListList(value: Array<SittelleTypeTask_pb.HistoryRoleAction>): void;
  clearRoleActionListList(): void;
  addRoleActionList(value?: SittelleTypeTask_pb.HistoryRoleAction, index?: number): SittelleTypeTask_pb.HistoryRoleAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleHistoryListRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleHistoryListRes): TaskRoleHistoryListRes.AsObject;
  static serializeBinaryToWriter(message: TaskRoleHistoryListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleHistoryListRes;
  static deserializeBinaryFromReader(message: TaskRoleHistoryListRes, reader: jspb.BinaryReader): TaskRoleHistoryListRes;
}

export namespace TaskRoleHistoryListRes {
  export type AsObject = {
    roleActionListList: Array<SittelleTypeTask_pb.HistoryRoleAction.AsObject>,
  }
}

export class ManualFieldTemplateListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualFieldTemplateListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualFieldTemplateListRequest): ManualFieldTemplateListRequest.AsObject;
  static serializeBinaryToWriter(message: ManualFieldTemplateListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualFieldTemplateListRequest;
  static deserializeBinaryFromReader(message: ManualFieldTemplateListRequest, reader: jspb.BinaryReader): ManualFieldTemplateListRequest;
}

export namespace ManualFieldTemplateListRequest {
  export type AsObject = {
  }
}

export class ManualFieldTemplateListRes extends jspb.Message {
  getManualFieldListList(): Array<SittelleTypeManual_pb.ManualTaskType>;
  setManualFieldListList(value: Array<SittelleTypeManual_pb.ManualTaskType>): void;
  clearManualFieldListList(): void;
  addManualFieldList(value?: SittelleTypeManual_pb.ManualTaskType, index?: number): SittelleTypeManual_pb.ManualTaskType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualFieldTemplateListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualFieldTemplateListRes): ManualFieldTemplateListRes.AsObject;
  static serializeBinaryToWriter(message: ManualFieldTemplateListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualFieldTemplateListRes;
  static deserializeBinaryFromReader(message: ManualFieldTemplateListRes, reader: jspb.BinaryReader): ManualFieldTemplateListRes;
}

export namespace ManualFieldTemplateListRes {
  export type AsObject = {
    manualFieldListList: Array<SittelleTypeManual_pb.ManualTaskType.AsObject>,
  }
}

export class ManualFieldPossibleFillRequest extends jspb.Message {
  getManaulField(): SittelleTypeManual_pb.ManualTaskType | undefined;
  setManaulField(value?: SittelleTypeManual_pb.ManualTaskType): void;
  hasManaulField(): boolean;
  clearManaulField(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualFieldPossibleFillRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualFieldPossibleFillRequest): ManualFieldPossibleFillRequest.AsObject;
  static serializeBinaryToWriter(message: ManualFieldPossibleFillRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualFieldPossibleFillRequest;
  static deserializeBinaryFromReader(message: ManualFieldPossibleFillRequest, reader: jspb.BinaryReader): ManualFieldPossibleFillRequest;
}

export namespace ManualFieldPossibleFillRequest {
  export type AsObject = {
    manaulField?: SittelleTypeManual_pb.ManualTaskType.AsObject,
  }
}

export class ManualFieldPossibleFillRes extends jspb.Message {
  getManaulField(): SittelleTypeManual_pb.ManualTaskType | undefined;
  setManaulField(value?: SittelleTypeManual_pb.ManualTaskType): void;
  hasManaulField(): boolean;
  clearManaulField(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualFieldPossibleFillRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualFieldPossibleFillRes): ManualFieldPossibleFillRes.AsObject;
  static serializeBinaryToWriter(message: ManualFieldPossibleFillRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualFieldPossibleFillRes;
  static deserializeBinaryFromReader(message: ManualFieldPossibleFillRes, reader: jspb.BinaryReader): ManualFieldPossibleFillRes;
}

export namespace ManualFieldPossibleFillRes {
  export type AsObject = {
    manaulField?: SittelleTypeManual_pb.ManualTaskType.AsObject,
  }
}

export class ManualRequestParamListByTaskTypeRequest extends jspb.Message {
  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualRequestParamListByTaskTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualRequestParamListByTaskTypeRequest): ManualRequestParamListByTaskTypeRequest.AsObject;
  static serializeBinaryToWriter(message: ManualRequestParamListByTaskTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualRequestParamListByTaskTypeRequest;
  static deserializeBinaryFromReader(message: ManualRequestParamListByTaskTypeRequest, reader: jspb.BinaryReader): ManualRequestParamListByTaskTypeRequest;
}

export namespace ManualRequestParamListByTaskTypeRequest {
  export type AsObject = {
    taskTypeInd: number,
  }
}

export class ManualRequestParamListByTaskTypeRes extends jspb.Message {
  getManualParamListList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setManualParamListList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearManualParamListList(): void;
  addManualParamList(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualRequestParamListByTaskTypeRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualRequestParamListByTaskTypeRes): ManualRequestParamListByTaskTypeRes.AsObject;
  static serializeBinaryToWriter(message: ManualRequestParamListByTaskTypeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualRequestParamListByTaskTypeRes;
  static deserializeBinaryFromReader(message: ManualRequestParamListByTaskTypeRes, reader: jspb.BinaryReader): ManualRequestParamListByTaskTypeRes;
}

export namespace ManualRequestParamListByTaskTypeRes {
  export type AsObject = {
    manualParamListList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
  }
}

export class ManualRequestParamListByStatusRequest extends jspb.Message {
  getTaskInd(): number;
  setTaskInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getSessionAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setSessionAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearSessionAccountGroupListList(): void;
  addSessionAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualRequestParamListByStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualRequestParamListByStatusRequest): ManualRequestParamListByStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ManualRequestParamListByStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualRequestParamListByStatusRequest;
  static deserializeBinaryFromReader(message: ManualRequestParamListByStatusRequest, reader: jspb.BinaryReader): ManualRequestParamListByStatusRequest;
}

export namespace ManualRequestParamListByStatusRequest {
  export type AsObject = {
    taskInd: number,
    statusInd: number,
    sessionAccountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class ManualRequestParamListByStatusRes extends jspb.Message {
  getManualParamListList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setManualParamListList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearManualParamListList(): void;
  addManualParamList(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualRequestParamListByStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualRequestParamListByStatusRes): ManualRequestParamListByStatusRes.AsObject;
  static serializeBinaryToWriter(message: ManualRequestParamListByStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualRequestParamListByStatusRes;
  static deserializeBinaryFromReader(message: ManualRequestParamListByStatusRes, reader: jspb.BinaryReader): ManualRequestParamListByStatusRes;
}

export namespace ManualRequestParamListByStatusRes {
  export type AsObject = {
    manualParamListList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
  }
}

export class ManualQueryApplyListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualQueryApplyListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualQueryApplyListRequest): ManualQueryApplyListRequest.AsObject;
  static serializeBinaryToWriter(message: ManualQueryApplyListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualQueryApplyListRequest;
  static deserializeBinaryFromReader(message: ManualQueryApplyListRequest, reader: jspb.BinaryReader): ManualQueryApplyListRequest;
}

export namespace ManualQueryApplyListRequest {
  export type AsObject = {
  }
}

export class ManualQueryApplyListRes extends jspb.Message {
  getQueryApplyListList(): Array<SittelleTypeManual_pb.ManualQueryApplyTaskType>;
  setQueryApplyListList(value: Array<SittelleTypeManual_pb.ManualQueryApplyTaskType>): void;
  clearQueryApplyListList(): void;
  addQueryApplyList(value?: SittelleTypeManual_pb.ManualQueryApplyTaskType, index?: number): SittelleTypeManual_pb.ManualQueryApplyTaskType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualQueryApplyListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualQueryApplyListRes): ManualQueryApplyListRes.AsObject;
  static serializeBinaryToWriter(message: ManualQueryApplyListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualQueryApplyListRes;
  static deserializeBinaryFromReader(message: ManualQueryApplyListRes, reader: jspb.BinaryReader): ManualQueryApplyListRes;
}

export namespace ManualQueryApplyListRes {
  export type AsObject = {
    queryApplyListList: Array<SittelleTypeManual_pb.ManualQueryApplyTaskType.AsObject>,
  }
}

export class PathListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PathListRequest): PathListRequest.AsObject;
  static serializeBinaryToWriter(message: PathListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathListRequest;
  static deserializeBinaryFromReader(message: PathListRequest, reader: jspb.BinaryReader): PathListRequest;
}

export namespace PathListRequest {
  export type AsObject = {
  }
}

export class PathListRes extends jspb.Message {
  getPathListList(): Array<SittelleTypeTask_pb.StatusPathSett>;
  setPathListList(value: Array<SittelleTypeTask_pb.StatusPathSett>): void;
  clearPathListList(): void;
  addPathList(value?: SittelleTypeTask_pb.StatusPathSett, index?: number): SittelleTypeTask_pb.StatusPathSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathListRes.AsObject;
  static toObject(includeInstance: boolean, msg: PathListRes): PathListRes.AsObject;
  static serializeBinaryToWriter(message: PathListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathListRes;
  static deserializeBinaryFromReader(message: PathListRes, reader: jspb.BinaryReader): PathListRes;
}

export namespace PathListRes {
  export type AsObject = {
    pathListList: Array<SittelleTypeTask_pb.StatusPathSett.AsObject>,
  }
}

export class PathByStatusRequest extends jspb.Message {
  getBeforeStatusInd(): number;
  setBeforeStatusInd(value: number): void;

  getRequestStatusInd(): number;
  setRequestStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathByStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PathByStatusRequest): PathByStatusRequest.AsObject;
  static serializeBinaryToWriter(message: PathByStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathByStatusRequest;
  static deserializeBinaryFromReader(message: PathByStatusRequest, reader: jspb.BinaryReader): PathByStatusRequest;
}

export namespace PathByStatusRequest {
  export type AsObject = {
    beforeStatusInd: number,
    requestStatusInd: number,
  }
}

export class PathByStatusRes extends jspb.Message {
  getStatusPath(): SittelleTypeTask_pb.StatusPathSett | undefined;
  setStatusPath(value?: SittelleTypeTask_pb.StatusPathSett): void;
  hasStatusPath(): boolean;
  clearStatusPath(): void;

  getStatusBefore(): SittelleTypeTask_pb.StatusSett | undefined;
  setStatusBefore(value?: SittelleTypeTask_pb.StatusSett): void;
  hasStatusBefore(): boolean;
  clearStatusBefore(): void;

  getStatusRequest(): SittelleTypeTask_pb.StatusSett | undefined;
  setStatusRequest(value?: SittelleTypeTask_pb.StatusSett): void;
  hasStatusRequest(): boolean;
  clearStatusRequest(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathByStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: PathByStatusRes): PathByStatusRes.AsObject;
  static serializeBinaryToWriter(message: PathByStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathByStatusRes;
  static deserializeBinaryFromReader(message: PathByStatusRes, reader: jspb.BinaryReader): PathByStatusRes;
}

export namespace PathByStatusRes {
  export type AsObject = {
    statusPath?: SittelleTypeTask_pb.StatusPathSett.AsObject,
    statusBefore?: SittelleTypeTask_pb.StatusSett.AsObject,
    statusRequest?: SittelleTypeTask_pb.StatusSett.AsObject,
  }
}

export class TaskFieldChangeRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getFieldInd(): number;
  setFieldInd(value: number): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskFieldChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskFieldChangeRequest): TaskFieldChangeRequest.AsObject;
  static serializeBinaryToWriter(message: TaskFieldChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskFieldChangeRequest;
  static deserializeBinaryFromReader(message: TaskFieldChangeRequest, reader: jspb.BinaryReader): TaskFieldChangeRequest;
}

export namespace TaskFieldChangeRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    fieldInd: number,
    value: string,
  }
}

export class TaskFieldChangeRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskFieldChangeRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskFieldChangeRes): TaskFieldChangeRes.AsObject;
  static serializeBinaryToWriter(message: TaskFieldChangeRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskFieldChangeRes;
  static deserializeBinaryFromReader(message: TaskFieldChangeRes, reader: jspb.BinaryReader): TaskFieldChangeRes;
}

export namespace TaskFieldChangeRes {
  export type AsObject = {
  }
}

export class TaskManualParamRequest extends jspb.Message {
  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getParam(): SittelleTypeManual_pb.ManualValue | undefined;
  setParam(value?: SittelleTypeManual_pb.ManualValue): void;
  hasParam(): boolean;
  clearParam(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskManualParamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskManualParamRequest): TaskManualParamRequest.AsObject;
  static serializeBinaryToWriter(message: TaskManualParamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskManualParamRequest;
  static deserializeBinaryFromReader(message: TaskManualParamRequest, reader: jspb.BinaryReader): TaskManualParamRequest;
}

export namespace TaskManualParamRequest {
  export type AsObject = {
    sessInd: number,
    taskInd: number,
    param?: SittelleTypeManual_pb.ManualValue.AsObject,
  }
}

export class TaskManualParamAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskManualParamAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: TaskManualParamAddRes): TaskManualParamAddRes.AsObject;
  static serializeBinaryToWriter(message: TaskManualParamAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskManualParamAddRes;
  static deserializeBinaryFromReader(message: TaskManualParamAddRes, reader: jspb.BinaryReader): TaskManualParamAddRes;
}

export namespace TaskManualParamAddRes {
  export type AsObject = {
  }
}

export class MonObjectByIDRequest extends jspb.Message {
  getMonObjectId(): string;
  setMonObjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectByIDRequest): MonObjectByIDRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectByIDRequest;
  static deserializeBinaryFromReader(message: MonObjectByIDRequest, reader: jspb.BinaryReader): MonObjectByIDRequest;
}

export namespace MonObjectByIDRequest {
  export type AsObject = {
    monObjectId: string,
  }
}

export class MonObjectByIDRes extends jspb.Message {
  getMonObject(): SittelleTypeTask_pb.MonitoringObject | undefined;
  setMonObject(value?: SittelleTypeTask_pb.MonitoringObject): void;
  hasMonObject(): boolean;
  clearMonObject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectByIDRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectByIDRes): MonObjectByIDRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectByIDRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectByIDRes;
  static deserializeBinaryFromReader(message: MonObjectByIDRes, reader: jspb.BinaryReader): MonObjectByIDRes;
}

export namespace MonObjectByIDRes {
  export type AsObject = {
    monObject?: SittelleTypeTask_pb.MonitoringObject.AsObject,
  }
}

export class StatusBySourceStatusRequest extends jspb.Message {
  getSourceStatus(): number;
  setSourceStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusBySourceStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusBySourceStatusRequest): StatusBySourceStatusRequest.AsObject;
  static serializeBinaryToWriter(message: StatusBySourceStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusBySourceStatusRequest;
  static deserializeBinaryFromReader(message: StatusBySourceStatusRequest, reader: jspb.BinaryReader): StatusBySourceStatusRequest;
}

export namespace StatusBySourceStatusRequest {
  export type AsObject = {
    sourceStatus: number,
  }
}

export class StatusBySourceStatusRes extends jspb.Message {
  getStatusSett(): SittelleTypeTask_pb.StatusSett | undefined;
  setStatusSett(value?: SittelleTypeTask_pb.StatusSett): void;
  hasStatusSett(): boolean;
  clearStatusSett(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusBySourceStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatusBySourceStatusRes): StatusBySourceStatusRes.AsObject;
  static serializeBinaryToWriter(message: StatusBySourceStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusBySourceStatusRes;
  static deserializeBinaryFromReader(message: StatusBySourceStatusRes, reader: jspb.BinaryReader): StatusBySourceStatusRes;
}

export namespace StatusBySourceStatusRes {
  export type AsObject = {
    statusSett?: SittelleTypeTask_pb.StatusSett.AsObject,
  }
}

export class EngineeringSystemByCodeCheckAndAddRequest extends jspb.Message {
  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getSystemCode(): string;
  setSystemCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineeringSystemByCodeCheckAndAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EngineeringSystemByCodeCheckAndAddRequest): EngineeringSystemByCodeCheckAndAddRequest.AsObject;
  static serializeBinaryToWriter(message: EngineeringSystemByCodeCheckAndAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineeringSystemByCodeCheckAndAddRequest;
  static deserializeBinaryFromReader(message: EngineeringSystemByCodeCheckAndAddRequest, reader: jspb.BinaryReader): EngineeringSystemByCodeCheckAndAddRequest;
}

export namespace EngineeringSystemByCodeCheckAndAddRequest {
  export type AsObject = {
    monObjectInd: number,
    systemCode: string,
  }
}

export class EngineeringSystemByCodeCheckAndAddRes extends jspb.Message {
  getEngineeringSystemInd(): number;
  setEngineeringSystemInd(value: number): void;

  getEngineeringSystemCaption(): string;
  setEngineeringSystemCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineeringSystemByCodeCheckAndAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: EngineeringSystemByCodeCheckAndAddRes): EngineeringSystemByCodeCheckAndAddRes.AsObject;
  static serializeBinaryToWriter(message: EngineeringSystemByCodeCheckAndAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineeringSystemByCodeCheckAndAddRes;
  static deserializeBinaryFromReader(message: EngineeringSystemByCodeCheckAndAddRes, reader: jspb.BinaryReader): EngineeringSystemByCodeCheckAndAddRes;
}

export namespace EngineeringSystemByCodeCheckAndAddRes {
  export type AsObject = {
    engineeringSystemInd: number,
    engineeringSystemCaption: string,
  }
}

export class TemplateTechnicalInspectionAutoAddRequest extends jspb.Message {
  getSourceId(): string;
  setSourceId(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getAdditionalCode(): string;
  setAdditionalCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateTechnicalInspectionAutoAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateTechnicalInspectionAutoAddRequest): TemplateTechnicalInspectionAutoAddRequest.AsObject;
  static serializeBinaryToWriter(message: TemplateTechnicalInspectionAutoAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateTechnicalInspectionAutoAddRequest;
  static deserializeBinaryFromReader(message: TemplateTechnicalInspectionAutoAddRequest, reader: jspb.BinaryReader): TemplateTechnicalInspectionAutoAddRequest;
}

export namespace TemplateTechnicalInspectionAutoAddRequest {
  export type AsObject = {
    sourceId: string,
    caption: string,
    monObjectInd: number,
    additionalCode: string,
  }
}

export class TemplateTechnicalInspectionAutoAddRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateTechnicalInspectionAutoAddRes.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateTechnicalInspectionAutoAddRes): TemplateTechnicalInspectionAutoAddRes.AsObject;
  static serializeBinaryToWriter(message: TemplateTechnicalInspectionAutoAddRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateTechnicalInspectionAutoAddRes;
  static deserializeBinaryFromReader(message: TemplateTechnicalInspectionAutoAddRes, reader: jspb.BinaryReader): TemplateTechnicalInspectionAutoAddRes;
}

export namespace TemplateTechnicalInspectionAutoAddRes {
  export type AsObject = {
  }
}

