/**
 * @fileoverview gRPC-Web generated client stub for SittelleProtos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';

import {
  EngineeringSystemByCodeCheckAndAddRequest,
  EngineeringSystemByCodeCheckAndAddRes,
  ManualFieldPossibleFillRequest,
  ManualFieldPossibleFillRes,
  ManualFieldTemplateListRequest,
  ManualFieldTemplateListRes,
  ManualQueryApplyListRequest,
  ManualQueryApplyListRes,
  ManualRequestParamListByStatusRequest,
  ManualRequestParamListByStatusRes,
  ManualRequestParamListByTaskTypeRequest,
  ManualRequestParamListByTaskTypeRes,
  MonObjectByIDRequest,
  MonObjectByIDRes,
  PathByStatusRequest,
  PathByStatusRes,
  PathListRequest,
  PathListRes,
  StatusBySourceStatusRequest,
  StatusBySourceStatusRes,
  TaskAccountStateApplyRequest,
  TaskAccountStateApplyRes,
  TaskAccountStateChangeRequest,
  TaskAccountStateChangeRes,
  TaskAccountStateHistoryListRequest,
  TaskAccountStateHistoryListRes,
  TaskAccountStateListRequest,
  TaskAccountStateListRes,
  TaskAccountStateRemoveRequest,
  TaskAccountStateRemoveRes,
  TaskByAccountGroupListRequest,
  TaskByAccountGroupListRes,
  TaskByTaskIndRequest,
  TaskByTaskIndRes,
  TaskChildListFullRequest,
  TaskChildListFullRes,
  TaskChildListRequest,
  TaskChildListRes,
  TaskCommentAddRequest,
  TaskCommentAddRes,
  TaskCommentHistoryListRequest,
  TaskCommentHistoryListRes,
  TaskContentChangeRequest,
  TaskContentChangeRes,
  TaskContentHistoryListRequest,
  TaskContentHistoryListRes,
  TaskFieldChangeRequest,
  TaskFieldChangeRes,
  TaskItemBySourceAndParentIndRequest,
  TaskItemBySourceAndParentIndRes,
  TaskItemBySourceRequest,
  TaskItemBySourceRes,
  TaskItemByTaskIndRequest,
  TaskItemByTaskIndRes,
  TaskItemChangeRequest,
  TaskItemChangeRes,
  TaskListByAccountGroupListRequest,
  TaskListByAccountGroupListRes,
  TaskListByIndexListRequest,
  TaskListByIndexListRes,
  TaskListByMonObjectAndTypeRequest,
  TaskListByMonObjectAndTypeRes,
  TaskListByRootTaskTypeRequest,
  TaskListByRootTaskTypeRes,
  TaskListByStateMaskRequest,
  TaskListByStateMaskRes,
  TaskListByTaskTypeAndStatusRequest,
  TaskListByTaskTypeAndStatusRes,
  TaskListByTaskTypeRequest,
  TaskListByTaskTypeRes,
  TaskListGroupingByParentRequest,
  TaskListGroupingByParentRes,
  TaskListRequest,
  TaskListRes,
  TaskListStatsByParentRequest,
  TaskListStatsByParentRes,
  TaskManualChangeRequest,
  TaskManualChangeRes,
  TaskManualParamAddRes,
  TaskManualParamRequest,
  TaskManualRequestRequest,
  TaskManualRequestRes,
  TaskParentBySourceRequest,
  TaskParentBySourceRes,
  TaskParentChangeRequest,
  TaskParentChangeRes,
  TaskRemoveRequest,
  TaskRemoveRes,
  TaskRoleAccountGroupAddRequest,
  TaskRoleAccountGroupAddRes,
  TaskRoleAccountGroupRemoveRequest,
  TaskRoleAccountGroupRemoveRes,
  TaskRoleApplyRequest,
  TaskRoleApplyRes,
  TaskRoleHistoryListRequest,
  TaskRoleHistoryListRes,
  TaskRoleListRequest,
  TaskRoleListRes,
  TaskRoleRequestRequest,
  TaskRoleRequestRes,
  TaskStateApplyRequest,
  TaskStateApplyRes,
  TaskStateByTaskIndRequest,
  TaskStateByTaskIndRes,
  TaskStateChangeRequest,
  TaskStateChangeRes,
  TaskStateHistoryListRequest,
  TaskStateHistoryListRes,
  TaskStatsRequest,
  TaskStatsRes,
  TaskStatusChangeReqRequest,
  TaskStatusChangeReqRes,
  TaskStatusChangeRequest,
  TaskStatusChangeRes,
  TaskStatusHistoryListRequest,
  TaskStatusHistoryListRes,
  TaskStatusInputChangeRequest,
  TaskStatusInputChangeRes,
  TaskStatusPossibleListRequest,
  TaskStatusPossibleListRes,
  TaskStatusTemplatePossibleRequest,
  TaskStatusTemplatePossibleRes,
  TaskTemplateAddByTaskRequest,
  TaskTemplateAddByTaskRes,
  TaskTemplateAddRequest,
  TaskTemplateAddRes,
  TaskTemplateChangeRequest,
  TaskTemplateChangeRes,
  TaskTemplateListByStatusRequest,
  TaskTemplateListByStatusRes,
  TaskTemplateRemoveRequest,
  TaskTemplateRemoveRes,
  TemplateTechnicalInspectionAutoAddRequest,
  TemplateTechnicalInspectionAutoAddRes} from './SittelleServiceHistory_pb';

export class HistoryServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoTaskListByAccountGroupList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListByAccountGroupListRes,
    (request: TaskListByAccountGroupListRequest) => {
      return request.serializeBinary();
    },
    TaskListByAccountGroupListRes.deserializeBinary
  );

  taskListByAccountGroupList(
    request: TaskListByAccountGroupListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListByAccountGroupListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListByAccountGroupList',
      request,
      metadata || {},
      this.methodInfoTaskListByAccountGroupList,
      callback);
  }

  methodInfoTaskListByTaskTypeAndStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListByTaskTypeAndStatusRes,
    (request: TaskListByTaskTypeAndStatusRequest) => {
      return request.serializeBinary();
    },
    TaskListByTaskTypeAndStatusRes.deserializeBinary
  );

  taskListByTaskTypeAndStatus(
    request: TaskListByTaskTypeAndStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListByTaskTypeAndStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListByTaskTypeAndStatus',
      request,
      metadata || {},
      this.methodInfoTaskListByTaskTypeAndStatus,
      callback);
  }

  methodInfoTaskListByRootTaskType = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListByRootTaskTypeRes,
    (request: TaskListByRootTaskTypeRequest) => {
      return request.serializeBinary();
    },
    TaskListByRootTaskTypeRes.deserializeBinary
  );

  taskListByRootTaskType(
    request: TaskListByRootTaskTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListByRootTaskTypeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListByRootTaskType',
      request,
      metadata || {},
      this.methodInfoTaskListByRootTaskType,
      callback);
  }

  methodInfoTaskListByTaskType = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListByTaskTypeRes,
    (request: TaskListByTaskTypeRequest) => {
      return request.serializeBinary();
    },
    TaskListByTaskTypeRes.deserializeBinary
  );

  taskListByTaskType(
    request: TaskListByTaskTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListByTaskTypeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListByTaskType',
      request,
      metadata || {},
      this.methodInfoTaskListByTaskType,
      callback);
  }

  methodInfoTaskListByIndexList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListByIndexListRes,
    (request: TaskListByIndexListRequest) => {
      return request.serializeBinary();
    },
    TaskListByIndexListRes.deserializeBinary
  );

  taskListByIndexList(
    request: TaskListByIndexListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListByIndexListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListByIndexList',
      request,
      metadata || {},
      this.methodInfoTaskListByIndexList,
      callback);
  }

  methodInfoTaskListByStateMask = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListByStateMaskRes,
    (request: TaskListByStateMaskRequest) => {
      return request.serializeBinary();
    },
    TaskListByStateMaskRes.deserializeBinary
  );

  taskListByStateMask(
    request: TaskListByStateMaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListByStateMaskRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListByStateMask',
      request,
      metadata || {},
      this.methodInfoTaskListByStateMask,
      callback);
  }

  methodInfoTaskList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListRes,
    (request: TaskListRequest) => {
      return request.serializeBinary();
    },
    TaskListRes.deserializeBinary
  );

  taskList(
    request: TaskListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskList',
      request,
      metadata || {},
      this.methodInfoTaskList,
      callback);
  }

  methodInfoTaskChildList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskChildListRes,
    (request: TaskChildListRequest) => {
      return request.serializeBinary();
    },
    TaskChildListRes.deserializeBinary
  );

  taskChildList(
    request: TaskChildListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskChildListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskChildList',
      request,
      metadata || {},
      this.methodInfoTaskChildList,
      callback);
  }

  methodInfoTaskChildListFull = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskChildListFullRes,
    (request: TaskChildListFullRequest) => {
      return request.serializeBinary();
    },
    TaskChildListFullRes.deserializeBinary
  );

  taskChildListFull(
    request: TaskChildListFullRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskChildListFullRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskChildListFull',
      request,
      metadata || {},
      this.methodInfoTaskChildListFull,
      callback);
  }

  methodInfoTaskListGroupingByParent = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListGroupingByParentRes,
    (request: TaskListGroupingByParentRequest) => {
      return request.serializeBinary();
    },
    TaskListGroupingByParentRes.deserializeBinary
  );

  taskListGroupingByParent(
    request: TaskListGroupingByParentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListGroupingByParentRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListGroupingByParent',
      request,
      metadata || {},
      this.methodInfoTaskListGroupingByParent,
      callback);
  }

  methodInfoTaskListStatsByParent = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListStatsByParentRes,
    (request: TaskListStatsByParentRequest) => {
      return request.serializeBinary();
    },
    TaskListStatsByParentRes.deserializeBinary
  );

  taskListStatsByParent(
    request: TaskListStatsByParentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListStatsByParentRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListStatsByParent',
      request,
      metadata || {},
      this.methodInfoTaskListStatsByParent,
      callback);
  }

  methodInfoTaskStats = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStatsRes,
    (request: TaskStatsRequest) => {
      return request.serializeBinary();
    },
    TaskStatsRes.deserializeBinary
  );

  taskStats(
    request: TaskStatsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStatsRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStats',
      request,
      metadata || {},
      this.methodInfoTaskStats,
      callback);
  }

  methodInfoTaskListByMonObjectAndType = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskListByMonObjectAndTypeRes,
    (request: TaskListByMonObjectAndTypeRequest) => {
      return request.serializeBinary();
    },
    TaskListByMonObjectAndTypeRes.deserializeBinary
  );

  taskListByMonObjectAndType(
    request: TaskListByMonObjectAndTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskListByMonObjectAndTypeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskListByMonObjectAndType',
      request,
      metadata || {},
      this.methodInfoTaskListByMonObjectAndType,
      callback);
  }

  methodInfoTaskByAccountGroupList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskByAccountGroupListRes,
    (request: TaskByAccountGroupListRequest) => {
      return request.serializeBinary();
    },
    TaskByAccountGroupListRes.deserializeBinary
  );

  taskByAccountGroupList(
    request: TaskByAccountGroupListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskByAccountGroupListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskByAccountGroupList',
      request,
      metadata || {},
      this.methodInfoTaskByAccountGroupList,
      callback);
  }

  methodInfoTaskByTaskInd = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskByTaskIndRes,
    (request: TaskByTaskIndRequest) => {
      return request.serializeBinary();
    },
    TaskByTaskIndRes.deserializeBinary
  );

  taskByTaskInd(
    request: TaskByTaskIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskByTaskIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskByTaskInd',
      request,
      metadata || {},
      this.methodInfoTaskByTaskInd,
      callback);
  }

  methodInfoTaskParentChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskParentChangeRes,
    (request: TaskParentChangeRequest) => {
      return request.serializeBinary();
    },
    TaskParentChangeRes.deserializeBinary
  );

  taskParentChange(
    request: TaskParentChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskParentChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskParentChange',
      request,
      metadata || {},
      this.methodInfoTaskParentChange,
      callback);
  }

  methodInfoTaskItemByTaskInd = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskItemByTaskIndRes,
    (request: TaskItemByTaskIndRequest) => {
      return request.serializeBinary();
    },
    TaskItemByTaskIndRes.deserializeBinary
  );

  taskItemByTaskInd(
    request: TaskItemByTaskIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskItemByTaskIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskItemByTaskInd',
      request,
      metadata || {},
      this.methodInfoTaskItemByTaskInd,
      callback);
  }

  methodInfoTaskItemBySource = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskItemBySourceRes,
    (request: TaskItemBySourceRequest) => {
      return request.serializeBinary();
    },
    TaskItemBySourceRes.deserializeBinary
  );

  taskItemBySource(
    request: TaskItemBySourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskItemBySourceRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskItemBySource',
      request,
      metadata || {},
      this.methodInfoTaskItemBySource,
      callback);
  }

  methodInfoTaskParentBySource = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskParentBySourceRes,
    (request: TaskParentBySourceRequest) => {
      return request.serializeBinary();
    },
    TaskParentBySourceRes.deserializeBinary
  );

  taskParentBySource(
    request: TaskParentBySourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskParentBySourceRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskParentBySource',
      request,
      metadata || {},
      this.methodInfoTaskParentBySource,
      callback);
  }

  methodInfoTaskItemBySourceAndParentInd = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskItemBySourceAndParentIndRes,
    (request: TaskItemBySourceAndParentIndRequest) => {
      return request.serializeBinary();
    },
    TaskItemBySourceAndParentIndRes.deserializeBinary
  );

  taskItemBySourceAndParentInd(
    request: TaskItemBySourceAndParentIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskItemBySourceAndParentIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskItemBySourceAndParentInd',
      request,
      metadata || {},
      this.methodInfoTaskItemBySourceAndParentInd,
      callback);
  }

  methodInfoTaskItemChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskItemChangeRes,
    (request: TaskItemChangeRequest) => {
      return request.serializeBinary();
    },
    TaskItemChangeRes.deserializeBinary
  );

  taskItemChange(
    request: TaskItemChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskItemChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskItemChange',
      request,
      metadata || {},
      this.methodInfoTaskItemChange,
      callback);
  }

  methodInfoTaskContentChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskContentChangeRes,
    (request: TaskContentChangeRequest) => {
      return request.serializeBinary();
    },
    TaskContentChangeRes.deserializeBinary
  );

  taskContentChange(
    request: TaskContentChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskContentChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskContentChange',
      request,
      metadata || {},
      this.methodInfoTaskContentChange,
      callback);
  }

  methodInfoTaskContentHistoryList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskContentHistoryListRes,
    (request: TaskContentHistoryListRequest) => {
      return request.serializeBinary();
    },
    TaskContentHistoryListRes.deserializeBinary
  );

  taskContentHistoryList(
    request: TaskContentHistoryListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskContentHistoryListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskContentHistoryList',
      request,
      metadata || {},
      this.methodInfoTaskContentHistoryList,
      callback);
  }

  methodInfoTaskStatusChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStatusChangeRes,
    (request: TaskStatusChangeRequest) => {
      return request.serializeBinary();
    },
    TaskStatusChangeRes.deserializeBinary
  );

  taskStatusChange(
    request: TaskStatusChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStatusChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStatusChange',
      request,
      metadata || {},
      this.methodInfoTaskStatusChange,
      callback);
  }

  methodInfoTaskStatusChangeReq = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStatusChangeReqRes,
    (request: TaskStatusChangeReqRequest) => {
      return request.serializeBinary();
    },
    TaskStatusChangeReqRes.deserializeBinary
  );

  taskStatusChangeReq(
    request: TaskStatusChangeReqRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStatusChangeReqRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStatusChangeReq',
      request,
      metadata || {},
      this.methodInfoTaskStatusChangeReq,
      callback);
  }

  methodInfoTaskRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskRemoveRes,
    (request: TaskRemoveRequest) => {
      return request.serializeBinary();
    },
    TaskRemoveRes.deserializeBinary
  );

  taskRemove(
    request: TaskRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskRemove',
      request,
      metadata || {},
      this.methodInfoTaskRemove,
      callback);
  }

  methodInfoTaskStatusInputChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStatusInputChangeRes,
    (request: TaskStatusInputChangeRequest) => {
      return request.serializeBinary();
    },
    TaskStatusInputChangeRes.deserializeBinary
  );

  taskStatusInputChange(
    request: TaskStatusInputChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStatusInputChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStatusInputChange',
      request,
      metadata || {},
      this.methodInfoTaskStatusInputChange,
      callback);
  }

  methodInfoTaskStatusHistoryList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStatusHistoryListRes,
    (request: TaskStatusHistoryListRequest) => {
      return request.serializeBinary();
    },
    TaskStatusHistoryListRes.deserializeBinary
  );

  taskStatusHistoryList(
    request: TaskStatusHistoryListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStatusHistoryListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStatusHistoryList',
      request,
      metadata || {},
      this.methodInfoTaskStatusHistoryList,
      callback);
  }

  methodInfoTaskStatusPossibleList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStatusPossibleListRes,
    (request: TaskStatusPossibleListRequest) => {
      return request.serializeBinary();
    },
    TaskStatusPossibleListRes.deserializeBinary
  );

  taskStatusPossibleList(
    request: TaskStatusPossibleListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStatusPossibleListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStatusPossibleList',
      request,
      metadata || {},
      this.methodInfoTaskStatusPossibleList,
      callback);
  }

  methodInfoTaskTemplateListByStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTemplateListByStatusRes,
    (request: TaskTemplateListByStatusRequest) => {
      return request.serializeBinary();
    },
    TaskTemplateListByStatusRes.deserializeBinary
  );

  taskTemplateListByStatus(
    request: TaskTemplateListByStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTemplateListByStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskTemplateListByStatus',
      request,
      metadata || {},
      this.methodInfoTaskTemplateListByStatus,
      callback);
  }

  methodInfoTaskStatusTemplatePossible = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStatusTemplatePossibleRes,
    (request: TaskStatusTemplatePossibleRequest) => {
      return request.serializeBinary();
    },
    TaskStatusTemplatePossibleRes.deserializeBinary
  );

  taskStatusTemplatePossible(
    request: TaskStatusTemplatePossibleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStatusTemplatePossibleRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStatusTemplatePossible',
      request,
      metadata || {},
      this.methodInfoTaskStatusTemplatePossible,
      callback);
  }

  methodInfoTaskTemplateRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTemplateRemoveRes,
    (request: TaskTemplateRemoveRequest) => {
      return request.serializeBinary();
    },
    TaskTemplateRemoveRes.deserializeBinary
  );

  taskTemplateRemove(
    request: TaskTemplateRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTemplateRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskTemplateRemove',
      request,
      metadata || {},
      this.methodInfoTaskTemplateRemove,
      callback);
  }

  methodInfoTaskTemplateAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTemplateAddRes,
    (request: TaskTemplateAddRequest) => {
      return request.serializeBinary();
    },
    TaskTemplateAddRes.deserializeBinary
  );

  taskTemplateAdd(
    request: TaskTemplateAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTemplateAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskTemplateAdd',
      request,
      metadata || {},
      this.methodInfoTaskTemplateAdd,
      callback);
  }

  methodInfoTaskTemplateAddByTask = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTemplateAddByTaskRes,
    (request: TaskTemplateAddByTaskRequest) => {
      return request.serializeBinary();
    },
    TaskTemplateAddByTaskRes.deserializeBinary
  );

  taskTemplateAddByTask(
    request: TaskTemplateAddByTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTemplateAddByTaskRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskTemplateAddByTask',
      request,
      metadata || {},
      this.methodInfoTaskTemplateAddByTask,
      callback);
  }

  methodInfoTaskTemplateChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTemplateChangeRes,
    (request: TaskTemplateChangeRequest) => {
      return request.serializeBinary();
    },
    TaskTemplateChangeRes.deserializeBinary
  );

  taskTemplateChange(
    request: TaskTemplateChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTemplateChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskTemplateChange',
      request,
      metadata || {},
      this.methodInfoTaskTemplateChange,
      callback);
  }

  methodInfoTaskStateChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStateChangeRes,
    (request: TaskStateChangeRequest) => {
      return request.serializeBinary();
    },
    TaskStateChangeRes.deserializeBinary
  );

  taskStateChange(
    request: TaskStateChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStateChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStateChange',
      request,
      metadata || {},
      this.methodInfoTaskStateChange,
      callback);
  }

  methodInfoTaskStateApply = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStateApplyRes,
    (request: TaskStateApplyRequest) => {
      return request.serializeBinary();
    },
    TaskStateApplyRes.deserializeBinary
  );

  taskStateApply(
    request: TaskStateApplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStateApplyRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStateApply',
      request,
      metadata || {},
      this.methodInfoTaskStateApply,
      callback);
  }

  methodInfoTaskStateByTaskInd = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStateByTaskIndRes,
    (request: TaskStateByTaskIndRequest) => {
      return request.serializeBinary();
    },
    TaskStateByTaskIndRes.deserializeBinary
  );

  taskStateByTaskInd(
    request: TaskStateByTaskIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStateByTaskIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStateByTaskInd',
      request,
      metadata || {},
      this.methodInfoTaskStateByTaskInd,
      callback);
  }

  methodInfoTaskStateHistoryList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskStateHistoryListRes,
    (request: TaskStateHistoryListRequest) => {
      return request.serializeBinary();
    },
    TaskStateHistoryListRes.deserializeBinary
  );

  taskStateHistoryList(
    request: TaskStateHistoryListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskStateHistoryListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskStateHistoryList',
      request,
      metadata || {},
      this.methodInfoTaskStateHistoryList,
      callback);
  }

  methodInfoTaskAccountStateChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskAccountStateChangeRes,
    (request: TaskAccountStateChangeRequest) => {
      return request.serializeBinary();
    },
    TaskAccountStateChangeRes.deserializeBinary
  );

  taskAccountStateChange(
    request: TaskAccountStateChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskAccountStateChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskAccountStateChange',
      request,
      metadata || {},
      this.methodInfoTaskAccountStateChange,
      callback);
  }

  methodInfoTaskAccountStateApply = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskAccountStateApplyRes,
    (request: TaskAccountStateApplyRequest) => {
      return request.serializeBinary();
    },
    TaskAccountStateApplyRes.deserializeBinary
  );

  taskAccountStateApply(
    request: TaskAccountStateApplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskAccountStateApplyRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskAccountStateApply',
      request,
      metadata || {},
      this.methodInfoTaskAccountStateApply,
      callback);
  }

  methodInfoTaskAccountStateRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskAccountStateRemoveRes,
    (request: TaskAccountStateRemoveRequest) => {
      return request.serializeBinary();
    },
    TaskAccountStateRemoveRes.deserializeBinary
  );

  taskAccountStateRemove(
    request: TaskAccountStateRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskAccountStateRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskAccountStateRemove',
      request,
      metadata || {},
      this.methodInfoTaskAccountStateRemove,
      callback);
  }

  methodInfoTaskAccountStateList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskAccountStateListRes,
    (request: TaskAccountStateListRequest) => {
      return request.serializeBinary();
    },
    TaskAccountStateListRes.deserializeBinary
  );

  taskAccountStateList(
    request: TaskAccountStateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskAccountStateListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskAccountStateList',
      request,
      metadata || {},
      this.methodInfoTaskAccountStateList,
      callback);
  }

  methodInfoTaskAccountStateHistoryList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskAccountStateHistoryListRes,
    (request: TaskAccountStateHistoryListRequest) => {
      return request.serializeBinary();
    },
    TaskAccountStateHistoryListRes.deserializeBinary
  );

  taskAccountStateHistoryList(
    request: TaskAccountStateHistoryListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskAccountStateHistoryListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskAccountStateHistoryList',
      request,
      metadata || {},
      this.methodInfoTaskAccountStateHistoryList,
      callback);
  }

  methodInfoTaskRoleList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskRoleListRes,
    (request: TaskRoleListRequest) => {
      return request.serializeBinary();
    },
    TaskRoleListRes.deserializeBinary
  );

  taskRoleList(
    request: TaskRoleListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskRoleListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskRoleList',
      request,
      metadata || {},
      this.methodInfoTaskRoleList,
      callback);
  }

  methodInfoTaskRoleAccountGroupAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskRoleAccountGroupAddRes,
    (request: TaskRoleAccountGroupAddRequest) => {
      return request.serializeBinary();
    },
    TaskRoleAccountGroupAddRes.deserializeBinary
  );

  taskRoleAccountGroupAdd(
    request: TaskRoleAccountGroupAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskRoleAccountGroupAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskRoleAccountGroupAdd',
      request,
      metadata || {},
      this.methodInfoTaskRoleAccountGroupAdd,
      callback);
  }

  methodInfoTaskRoleAccountGroupRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskRoleAccountGroupRemoveRes,
    (request: TaskRoleAccountGroupRemoveRequest) => {
      return request.serializeBinary();
    },
    TaskRoleAccountGroupRemoveRes.deserializeBinary
  );

  taskRoleAccountGroupRemove(
    request: TaskRoleAccountGroupRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskRoleAccountGroupRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskRoleAccountGroupRemove',
      request,
      metadata || {},
      this.methodInfoTaskRoleAccountGroupRemove,
      callback);
  }

  methodInfoTaskRoleHistoryList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskRoleHistoryListRes,
    (request: TaskRoleHistoryListRequest) => {
      return request.serializeBinary();
    },
    TaskRoleHistoryListRes.deserializeBinary
  );

  taskRoleHistoryList(
    request: TaskRoleHistoryListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskRoleHistoryListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskRoleHistoryList',
      request,
      metadata || {},
      this.methodInfoTaskRoleHistoryList,
      callback);
  }

  methodInfoTaskRoleApply = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskRoleApplyRes,
    (request: TaskRoleApplyRequest) => {
      return request.serializeBinary();
    },
    TaskRoleApplyRes.deserializeBinary
  );

  taskRoleApply(
    request: TaskRoleApplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskRoleApplyRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskRoleApply',
      request,
      metadata || {},
      this.methodInfoTaskRoleApply,
      callback);
  }

  methodInfoTaskRoleRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskRoleRequestRes,
    (request: TaskRoleRequestRequest) => {
      return request.serializeBinary();
    },
    TaskRoleRequestRes.deserializeBinary
  );

  taskRoleRequest(
    request: TaskRoleRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskRoleRequestRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskRoleRequest',
      request,
      metadata || {},
      this.methodInfoTaskRoleRequest,
      callback);
  }

  methodInfoTaskManualChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskManualChangeRes,
    (request: TaskManualChangeRequest) => {
      return request.serializeBinary();
    },
    TaskManualChangeRes.deserializeBinary
  );

  taskManualChange(
    request: TaskManualChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskManualChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskManualChange',
      request,
      metadata || {},
      this.methodInfoTaskManualChange,
      callback);
  }

  methodInfoTaskManualRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskManualRequestRes,
    (request: TaskManualRequestRequest) => {
      return request.serializeBinary();
    },
    TaskManualRequestRes.deserializeBinary
  );

  taskManualRequest(
    request: TaskManualRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskManualRequestRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskManualRequest',
      request,
      metadata || {},
      this.methodInfoTaskManualRequest,
      callback);
  }

  methodInfoTaskCommentAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskCommentAddRes,
    (request: TaskCommentAddRequest) => {
      return request.serializeBinary();
    },
    TaskCommentAddRes.deserializeBinary
  );

  taskCommentAdd(
    request: TaskCommentAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskCommentAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskCommentAdd',
      request,
      metadata || {},
      this.methodInfoTaskCommentAdd,
      callback);
  }

  methodInfoTaskCommentHistoryList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskCommentHistoryListRes,
    (request: TaskCommentHistoryListRequest) => {
      return request.serializeBinary();
    },
    TaskCommentHistoryListRes.deserializeBinary
  );

  taskCommentHistoryList(
    request: TaskCommentHistoryListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskCommentHistoryListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskCommentHistoryList',
      request,
      metadata || {},
      this.methodInfoTaskCommentHistoryList,
      callback);
  }

  methodInfoManualFieldTemplateList = new grpcWeb.AbstractClientBase.MethodInfo(
    ManualFieldTemplateListRes,
    (request: ManualFieldTemplateListRequest) => {
      return request.serializeBinary();
    },
    ManualFieldTemplateListRes.deserializeBinary
  );

  manualFieldTemplateList(
    request: ManualFieldTemplateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ManualFieldTemplateListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/ManualFieldTemplateList',
      request,
      metadata || {},
      this.methodInfoManualFieldTemplateList,
      callback);
  }

  methodInfoManualFieldPossibleFill = new grpcWeb.AbstractClientBase.MethodInfo(
    ManualFieldPossibleFillRes,
    (request: ManualFieldPossibleFillRequest) => {
      return request.serializeBinary();
    },
    ManualFieldPossibleFillRes.deserializeBinary
  );

  manualFieldPossibleFill(
    request: ManualFieldPossibleFillRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ManualFieldPossibleFillRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/ManualFieldPossibleFill',
      request,
      metadata || {},
      this.methodInfoManualFieldPossibleFill,
      callback);
  }

  methodInfoManualRequestParamListByTaskType = new grpcWeb.AbstractClientBase.MethodInfo(
    ManualRequestParamListByTaskTypeRes,
    (request: ManualRequestParamListByTaskTypeRequest) => {
      return request.serializeBinary();
    },
    ManualRequestParamListByTaskTypeRes.deserializeBinary
  );

  manualRequestParamListByTaskType(
    request: ManualRequestParamListByTaskTypeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ManualRequestParamListByTaskTypeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/ManualRequestParamListByTaskType',
      request,
      metadata || {},
      this.methodInfoManualRequestParamListByTaskType,
      callback);
  }

  methodInfoManualQueryApplyList = new grpcWeb.AbstractClientBase.MethodInfo(
    ManualQueryApplyListRes,
    (request: ManualQueryApplyListRequest) => {
      return request.serializeBinary();
    },
    ManualQueryApplyListRes.deserializeBinary
  );

  manualQueryApplyList(
    request: ManualQueryApplyListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ManualQueryApplyListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/ManualQueryApplyList',
      request,
      metadata || {},
      this.methodInfoManualQueryApplyList,
      callback);
  }

  methodInfoManualRequestParamListByStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    ManualRequestParamListByStatusRes,
    (request: ManualRequestParamListByStatusRequest) => {
      return request.serializeBinary();
    },
    ManualRequestParamListByStatusRes.deserializeBinary
  );

  manualRequestParamListByStatus(
    request: ManualRequestParamListByStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ManualRequestParamListByStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/ManualRequestParamListByStatus',
      request,
      metadata || {},
      this.methodInfoManualRequestParamListByStatus,
      callback);
  }

  methodInfoTaskFieldChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskFieldChangeRes,
    (request: TaskFieldChangeRequest) => {
      return request.serializeBinary();
    },
    TaskFieldChangeRes.deserializeBinary
  );

  taskFieldChange(
    request: TaskFieldChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskFieldChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskFieldChange',
      request,
      metadata || {},
      this.methodInfoTaskFieldChange,
      callback);
  }

  methodInfoTaskManualParamChange = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskManualParamAddRes,
    (request: TaskManualParamRequest) => {
      return request.serializeBinary();
    },
    TaskManualParamAddRes.deserializeBinary
  );

  taskManualParamChange(
    request: TaskManualParamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskManualParamAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TaskManualParamChange',
      request,
      metadata || {},
      this.methodInfoTaskManualParamChange,
      callback);
  }

  methodInfoPathList = new grpcWeb.AbstractClientBase.MethodInfo(
    PathListRes,
    (request: PathListRequest) => {
      return request.serializeBinary();
    },
    PathListRes.deserializeBinary
  );

  pathList(
    request: PathListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PathListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/PathList',
      request,
      metadata || {},
      this.methodInfoPathList,
      callback);
  }

  methodInfoPathByStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    PathByStatusRes,
    (request: PathByStatusRequest) => {
      return request.serializeBinary();
    },
    PathByStatusRes.deserializeBinary
  );

  pathByStatus(
    request: PathByStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PathByStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/PathByStatus',
      request,
      metadata || {},
      this.methodInfoPathByStatus,
      callback);
  }

  methodInfoMonObjectByID = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectByIDRes,
    (request: MonObjectByIDRequest) => {
      return request.serializeBinary();
    },
    MonObjectByIDRes.deserializeBinary
  );

  monObjectByID(
    request: MonObjectByIDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectByIDRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/MonObjectByID',
      request,
      metadata || {},
      this.methodInfoMonObjectByID,
      callback);
  }

  methodInfoStatusBySourceStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusBySourceStatusRes,
    (request: StatusBySourceStatusRequest) => {
      return request.serializeBinary();
    },
    StatusBySourceStatusRes.deserializeBinary
  );

  statusBySourceStatus(
    request: StatusBySourceStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusBySourceStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/StatusBySourceStatus',
      request,
      metadata || {},
      this.methodInfoStatusBySourceStatus,
      callback);
  }

  methodInfoEngineeringSystemByCodeCheckAndAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    EngineeringSystemByCodeCheckAndAddRes,
    (request: EngineeringSystemByCodeCheckAndAddRequest) => {
      return request.serializeBinary();
    },
    EngineeringSystemByCodeCheckAndAddRes.deserializeBinary
  );

  engineeringSystemByCodeCheckAndAdd(
    request: EngineeringSystemByCodeCheckAndAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: EngineeringSystemByCodeCheckAndAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/EngineeringSystemByCodeCheckAndAdd',
      request,
      metadata || {},
      this.methodInfoEngineeringSystemByCodeCheckAndAdd,
      callback);
  }

  methodInfoTemplateTechnicalInspectionAutoAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    TemplateTechnicalInspectionAutoAddRes,
    (request: TemplateTechnicalInspectionAutoAddRequest) => {
      return request.serializeBinary();
    },
    TemplateTechnicalInspectionAutoAddRes.deserializeBinary
  );

  templateTechnicalInspectionAutoAdd(
    request: TemplateTechnicalInspectionAutoAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TemplateTechnicalInspectionAutoAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.HistoryService/TemplateTechnicalInspectionAutoAdd',
      request,
      metadata || {},
      this.methodInfoTemplateTechnicalInspectionAutoAdd,
      callback);
  }

}

