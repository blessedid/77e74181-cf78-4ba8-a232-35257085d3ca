/**
 * @fileoverview gRPC-Web generated client stub for SittelleProtos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';
import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeClient_pb from './SittelleTypeClient_pb';
import * as SittelleTypeNotification_pb from './SittelleTypeNotification_pb';

import {
  ExternalConnectionCloseRequest,
  ExternalConnectionCloseRes,
  ExternalConnectionCreateRequest,
  ExternalConnectionCreateRes,
  ExternalConnectionStatusRequest,
  ExternalConnectionStatusRes,
  ExternalNotificationCommentListRequest,
  ExternalNotificationCommentListRes,
  ExternalNotificationListRequest,
  ExternalNotificationListtRes,
  ExternalNotificationTaskListRequest,
  ExternalNotificationTaskListRes,
  ExternalPanelFilterFieldListRequest,
  ExternalPanelFilterFieldListRes,
  ExternalPanelListRequest,
  ExternalPanelListRes,
  ExternalPanelRootTaskListRequest,
  ExternalPanelRootTaskListRes,
  ExternalPanelStatusCreateListRequest,
  ExternalPanelStatusCreateListRes,
  ExternalPanelStatusTemplateListListRes,
  ExternalPanelStatusTemplateListRequest,
  ExternalPanelTaskChildListRequest,
  ExternalPanelTaskChildListRes,
  ExternalPanelTaskListRequest,
  ExternalPanelTaskListRes,
  ExternalRoleAccountGroupCheckRequest,
  ExternalRoleAccountGroupCheckRes,
  ExternalStatusCreateListByRootTypeListRequest,
  ExternalStatusCreateListByRootTypeListRes,
  ExternalTaskAccountStateChangeRequest,
  ExternalTaskAccountStateChangeRes,
  ExternalTaskAttachRequest,
  ExternalTaskAttachRes,
  ExternalTaskCardInfoRequest,
  ExternalTaskCardInfoRes,
  ExternalTaskChildListRequest,
  ExternalTaskChildListRes,
  ExternalTaskCommentAddRequest,
  ExternalTaskCommentAddRes,
  ExternalTaskContentChangeRequest,
  ExternalTaskContentChangeRes,
  ExternalTaskDetachRequest,
  ExternalTaskDetachRes,
  ExternalTaskFieldChangeRequest,
  ExternalTaskFieldChangeRes,
  ExternalTaskHistoryRequest,
  ExternalTaskHistoryRes,
  ExternalTaskItemGetRequest,
  ExternalTaskItemGetRes,
  ExternalTaskListByFilterRequest,
  ExternalTaskListByFilterRes,
  ExternalTaskListByRootTypeListRequest,
  ExternalTaskListByRootTypeListRes,
  ExternalTaskListByTaskTypeListRequest,
  ExternalTaskListByTaskTypeListRes,
  ExternalTaskListRequest,
  ExternalTaskListRes,
  ExternalTaskManualChangeRequest,
  ExternalTaskManualChangeRes,
  ExternalTaskManualParamAddRes,
  ExternalTaskManualParamRequest,
  ExternalTaskManualRequestRequest,
  ExternalTaskManualRequestRes,
  ExternalTaskParentChangeByFilterRequest,
  ExternalTaskParentChangeByFilterRes,
  ExternalTaskParentChangeRequest,
  ExternalTaskParentChangeRes,
  ExternalTaskRemoveRequest,
  ExternalTaskRemoveRes,
  ExternalTaskRetachRequest,
  ExternalTaskRetachRes,
  ExternalTaskRoleAccountGroupCheckRequest,
  ExternalTaskRoleAccountGroupCheckRes,
  ExternalTaskRoleAccountGroupListAddRequest,
  ExternalTaskRoleAccountGroupListAddRes,
  ExternalTaskRoleAccountGroupListRemoveRequest,
  ExternalTaskRoleAccountGroupListRemoveRes,
  ExternalTaskRoleApplyRequest,
  ExternalTaskRoleApplyRes,
  ExternalTaskRoleRequestRequest,
  ExternalTaskRoleRequestRes,
  ExternalTaskStateChangeRequest,
  ExternalTaskStateChangeRes,
  ExternalTaskStatusChangeReqRequest,
  ExternalTaskStatusChangeReqRes,
  ExternalTaskStatusChangeRequest,
  ExternalTaskStatusChangeRes,
  ExternalTaskStatusPossibleListRequest,
  ExternalTaskStatusPossibleListRes,
  ExternalTaskStatusTemplatePossibleRequest,
  ExternalTaskStatusTemplatePossibleRes,
  ExternalTaskTemplateAddByTaskRequest,
  ExternalTaskTemplateAddByTaskRes,
  ExternalTaskTemplateAddRequest,
  ExternalTaskTemplateAddRes,
  ExternalTaskTemplateChangeRequest,
  ExternalTaskTemplateChangeRes,
  ExternalTaskTemplateListByStatusRequest,
  ExternalTaskTemplateListByStatusRes,
  ExternalTaskTemplateRemoveRequest,
  ExternalTaskTemplateRemoveRes} from './SittelleServiceClient_pb';

export class ClientServiceClient {
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

  methodInfoExternalConnectionCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalConnectionCreateRes,
    (request: ExternalConnectionCreateRequest) => {
      return request.serializeBinary();
    },
    ExternalConnectionCreateRes.deserializeBinary
  );

  externalConnectionCreate(
    request: ExternalConnectionCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalConnectionCreateRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalConnectionCreate',
      request,
      metadata || {},
      this.methodInfoExternalConnectionCreate,
      callback);
  }

  methodInfoExternalConnectionClose = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalConnectionCloseRes,
    (request: ExternalConnectionCloseRequest) => {
      return request.serializeBinary();
    },
    ExternalConnectionCloseRes.deserializeBinary
  );

  externalConnectionClose(
    request: ExternalConnectionCloseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalConnectionCloseRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalConnectionClose',
      request,
      metadata || {},
      this.methodInfoExternalConnectionClose,
      callback);
  }

  methodInfoExternalConnectionStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalConnectionStatusRes,
    (request: ExternalConnectionStatusRequest) => {
      return request.serializeBinary();
    },
    ExternalConnectionStatusRes.deserializeBinary
  );

  externalConnectionStatus(
    request: ExternalConnectionStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalConnectionStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalConnectionStatus',
      request,
      metadata || {},
      this.methodInfoExternalConnectionStatus,
      callback);
  }

  methodInfoExternalPanelList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalPanelListRes,
    (request: ExternalPanelListRequest) => {
      return request.serializeBinary();
    },
    ExternalPanelListRes.deserializeBinary
  );

  externalPanelList(
    request: ExternalPanelListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalPanelListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalPanelList',
      request,
      metadata || {},
      this.methodInfoExternalPanelList,
      callback);
  }

  methodInfoExternalPanelTaskList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalPanelTaskListRes,
    (request: ExternalPanelTaskListRequest) => {
      return request.serializeBinary();
    },
    ExternalPanelTaskListRes.deserializeBinary
  );

  externalPanelTaskList(
    request: ExternalPanelTaskListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalPanelTaskListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalPanelTaskList',
      request,
      metadata || {},
      this.methodInfoExternalPanelTaskList,
      callback);
  }

  methodInfoExternalPanelTaskChildList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalPanelTaskChildListRes,
    (request: ExternalPanelTaskChildListRequest) => {
      return request.serializeBinary();
    },
    ExternalPanelTaskChildListRes.deserializeBinary
  );

  externalPanelTaskChildList(
    request: ExternalPanelTaskChildListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalPanelTaskChildListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalPanelTaskChildList',
      request,
      metadata || {},
      this.methodInfoExternalPanelTaskChildList,
      callback);
  }

  methodInfoExternalPanelRootTaskList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalPanelRootTaskListRes,
    (request: ExternalPanelRootTaskListRequest) => {
      return request.serializeBinary();
    },
    ExternalPanelRootTaskListRes.deserializeBinary
  );

  externalPanelRootTaskList(
    request: ExternalPanelRootTaskListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalPanelRootTaskListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalPanelRootTaskList',
      request,
      metadata || {},
      this.methodInfoExternalPanelRootTaskList,
      callback);
  }

  methodInfoExternalPanelStatusCreateList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalPanelStatusCreateListRes,
    (request: ExternalPanelStatusCreateListRequest) => {
      return request.serializeBinary();
    },
    ExternalPanelStatusCreateListRes.deserializeBinary
  );

  externalPanelStatusCreateList(
    request: ExternalPanelStatusCreateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalPanelStatusCreateListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalPanelStatusCreateList',
      request,
      metadata || {},
      this.methodInfoExternalPanelStatusCreateList,
      callback);
  }

  methodInfoExternalPanelStatusTemplateList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalPanelStatusTemplateListListRes,
    (request: ExternalPanelStatusTemplateListRequest) => {
      return request.serializeBinary();
    },
    ExternalPanelStatusTemplateListListRes.deserializeBinary
  );

  externalPanelStatusTemplateList(
    request: ExternalPanelStatusTemplateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalPanelStatusTemplateListListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalPanelStatusTemplateList',
      request,
      metadata || {},
      this.methodInfoExternalPanelStatusTemplateList,
      callback);
  }

  methodInfoExternalPanelFilterFieldList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalPanelFilterFieldListRes,
    (request: ExternalPanelFilterFieldListRequest) => {
      return request.serializeBinary();
    },
    ExternalPanelFilterFieldListRes.deserializeBinary
  );

  externalPanelFilterFieldList(
    request: ExternalPanelFilterFieldListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalPanelFilterFieldListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalPanelFilterFieldList',
      request,
      metadata || {},
      this.methodInfoExternalPanelFilterFieldList,
      callback);
  }

  methodInfoExternalStatusCreateListByRootTypeList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalStatusCreateListByRootTypeListRes,
    (request: ExternalStatusCreateListByRootTypeListRequest) => {
      return request.serializeBinary();
    },
    ExternalStatusCreateListByRootTypeListRes.deserializeBinary
  );

  externalStatusCreateListByRootTypeList(
    request: ExternalStatusCreateListByRootTypeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalStatusCreateListByRootTypeListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalStatusCreateListByRootTypeList',
      request,
      metadata || {},
      this.methodInfoExternalStatusCreateListByRootTypeList,
      callback);
  }

  methodInfoExternalTaskList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskListRes,
    (request: ExternalTaskListRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskListRes.deserializeBinary
  );

  externalTaskList(
    request: ExternalTaskListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskList',
      request,
      metadata || {},
      this.methodInfoExternalTaskList,
      callback);
  }

  methodInfoExternalTaskListByRootTypeList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskListByRootTypeListRes,
    (request: ExternalTaskListByRootTypeListRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskListByRootTypeListRes.deserializeBinary
  );

  externalTaskListByRootTypeList(
    request: ExternalTaskListByRootTypeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskListByRootTypeListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskListByRootTypeList',
      request,
      metadata || {},
      this.methodInfoExternalTaskListByRootTypeList,
      callback);
  }

  methodInfoExternalTaskListByTaskTypeList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskListByTaskTypeListRes,
    (request: ExternalTaskListByTaskTypeListRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskListByTaskTypeListRes.deserializeBinary
  );

  externalTaskListByTaskTypeList(
    request: ExternalTaskListByTaskTypeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskListByTaskTypeListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskListByTaskTypeList',
      request,
      metadata || {},
      this.methodInfoExternalTaskListByTaskTypeList,
      callback);
  }

  methodInfoExternalTaskCardInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskCardInfoRes,
    (request: ExternalTaskCardInfoRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskCardInfoRes.deserializeBinary
  );

  externalTaskCardInfo(
    request: ExternalTaskCardInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskCardInfoRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskCardInfo',
      request,
      metadata || {},
      this.methodInfoExternalTaskCardInfo,
      callback);
  }

  methodInfoExternalTaskHistory = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskHistoryRes,
    (request: ExternalTaskHistoryRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskHistoryRes.deserializeBinary
  );

  externalTaskHistory(
    request: ExternalTaskHistoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskHistoryRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskHistory',
      request,
      metadata || {},
      this.methodInfoExternalTaskHistory,
      callback);
  }

  methodInfoExternalTaskRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskRemoveRes,
    (request: ExternalTaskRemoveRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskRemoveRes.deserializeBinary
  );

  externalTaskRemove(
    request: ExternalTaskRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskRemove',
      request,
      metadata || {},
      this.methodInfoExternalTaskRemove,
      callback);
  }

  methodInfoExternalTaskParentChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskParentChangeRes,
    (request: ExternalTaskParentChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskParentChangeRes.deserializeBinary
  );

  externalTaskParentChange(
    request: ExternalTaskParentChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskParentChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskParentChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskParentChange,
      callback);
  }

  methodInfoExternalTaskParentChangeByFilter = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskParentChangeByFilterRes,
    (request: ExternalTaskParentChangeByFilterRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskParentChangeByFilterRes.deserializeBinary
  );

  externalTaskParentChangeByFilter(
    request: ExternalTaskParentChangeByFilterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskParentChangeByFilterRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskParentChangeByFilter',
      request,
      metadata || {},
      this.methodInfoExternalTaskParentChangeByFilter,
      callback);
  }

  methodInfoExternalTaskListByFilter = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskListByFilterRes,
    (request: ExternalTaskListByFilterRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskListByFilterRes.deserializeBinary
  );

  externalTaskListByFilter(
    request: ExternalTaskListByFilterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskListByFilterRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskListByFilter',
      request,
      metadata || {},
      this.methodInfoExternalTaskListByFilter,
      callback);
  }

  methodInfoExternalTaskChildList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskChildListRes,
    (request: ExternalTaskChildListRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskChildListRes.deserializeBinary
  );

  externalTaskChildList(
    request: ExternalTaskChildListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskChildListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskChildList',
      request,
      metadata || {},
      this.methodInfoExternalTaskChildList,
      callback);
  }

  methodInfoExternalTaskAttach = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskAttachRes,
    (request: ExternalTaskAttachRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskAttachRes.deserializeBinary
  );

  externalTaskAttach(
    request: ExternalTaskAttachRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskAttachRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskAttach',
      request,
      metadata || {},
      this.methodInfoExternalTaskAttach,
      callback);
  }

  methodInfoExternalTaskDetach = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskDetachRes,
    (request: ExternalTaskDetachRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskDetachRes.deserializeBinary
  );

  externalTaskDetach(
    request: ExternalTaskDetachRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskDetachRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskDetach',
      request,
      metadata || {},
      this.methodInfoExternalTaskDetach,
      callback);
  }

  methodInfoExternalTaskRetach = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskRetachRes,
    (request: ExternalTaskRetachRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskRetachRes.deserializeBinary
  );

  externalTaskRetach(
    request: ExternalTaskRetachRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskRetachRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskRetach',
      request,
      metadata || {},
      this.methodInfoExternalTaskRetach,
      callback);
  }

  methodInfoExternalTaskStatusChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskStatusChangeRes,
    (request: ExternalTaskStatusChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskStatusChangeRes.deserializeBinary
  );

  externalTaskStatusChange(
    request: ExternalTaskStatusChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskStatusChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskStatusChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskStatusChange,
      callback);
  }

  methodInfoExternalTaskStatusChangeReq = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskStatusChangeReqRes,
    (request: ExternalTaskStatusChangeReqRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskStatusChangeReqRes.deserializeBinary
  );

  externalTaskStatusChangeReq(
    request: ExternalTaskStatusChangeReqRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskStatusChangeReqRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskStatusChangeReq',
      request,
      metadata || {},
      this.methodInfoExternalTaskStatusChangeReq,
      callback);
  }

  methodInfoExternalTaskStatusPossibleList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskStatusPossibleListRes,
    (request: ExternalTaskStatusPossibleListRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskStatusPossibleListRes.deserializeBinary
  );

  externalTaskStatusPossibleList(
    request: ExternalTaskStatusPossibleListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskStatusPossibleListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskStatusPossibleList',
      request,
      metadata || {},
      this.methodInfoExternalTaskStatusPossibleList,
      callback);
  }

  methodInfoExternalTaskTemplateListByStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskTemplateListByStatusRes,
    (request: ExternalTaskTemplateListByStatusRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskTemplateListByStatusRes.deserializeBinary
  );

  externalTaskTemplateListByStatus(
    request: ExternalTaskTemplateListByStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskTemplateListByStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskTemplateListByStatus',
      request,
      metadata || {},
      this.methodInfoExternalTaskTemplateListByStatus,
      callback);
  }

  methodInfoExternalTaskStatusTemplatePossible = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskStatusTemplatePossibleRes,
    (request: ExternalTaskStatusTemplatePossibleRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskStatusTemplatePossibleRes.deserializeBinary
  );

  externalTaskStatusTemplatePossible(
    request: ExternalTaskStatusTemplatePossibleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskStatusTemplatePossibleRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskStatusTemplatePossible',
      request,
      metadata || {},
      this.methodInfoExternalTaskStatusTemplatePossible,
      callback);
  }

  methodInfoExternalTaskTemplateRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskTemplateRemoveRes,
    (request: ExternalTaskTemplateRemoveRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskTemplateRemoveRes.deserializeBinary
  );

  externalTaskTemplateRemove(
    request: ExternalTaskTemplateRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskTemplateRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskTemplateRemove',
      request,
      metadata || {},
      this.methodInfoExternalTaskTemplateRemove,
      callback);
  }

  methodInfoExternalTaskTemplateAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskTemplateAddRes,
    (request: ExternalTaskTemplateAddRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskTemplateAddRes.deserializeBinary
  );

  externalTaskTemplateAdd(
    request: ExternalTaskTemplateAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskTemplateAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskTemplateAdd',
      request,
      metadata || {},
      this.methodInfoExternalTaskTemplateAdd,
      callback);
  }

  methodInfoExternalTaskTemplateAddByTask = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskTemplateAddByTaskRes,
    (request: ExternalTaskTemplateAddByTaskRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskTemplateAddByTaskRes.deserializeBinary
  );

  externalTaskTemplateAddByTask(
    request: ExternalTaskTemplateAddByTaskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskTemplateAddByTaskRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskTemplateAddByTask',
      request,
      metadata || {},
      this.methodInfoExternalTaskTemplateAddByTask,
      callback);
  }

  methodInfoExternalTaskTemplateChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskTemplateChangeRes,
    (request: ExternalTaskTemplateChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskTemplateChangeRes.deserializeBinary
  );

  externalTaskTemplateChange(
    request: ExternalTaskTemplateChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskTemplateChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskTemplateChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskTemplateChange,
      callback);
  }

  methodInfoExternalTaskItemGet = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskItemGetRes,
    (request: ExternalTaskItemGetRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskItemGetRes.deserializeBinary
  );

  externalTaskItemGet(
    request: ExternalTaskItemGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskItemGetRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskItemGet',
      request,
      metadata || {},
      this.methodInfoExternalTaskItemGet,
      callback);
  }

  methodInfoExternalTaskContentChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskContentChangeRes,
    (request: ExternalTaskContentChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskContentChangeRes.deserializeBinary
  );

  externalTaskContentChange(
    request: ExternalTaskContentChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskContentChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskContentChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskContentChange,
      callback);
  }

  methodInfoExternalTaskStateChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskStateChangeRes,
    (request: ExternalTaskStateChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskStateChangeRes.deserializeBinary
  );

  externalTaskStateChange(
    request: ExternalTaskStateChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskStateChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskStateChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskStateChange,
      callback);
  }

  methodInfoExternalTaskAccountStateChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskAccountStateChangeRes,
    (request: ExternalTaskAccountStateChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskAccountStateChangeRes.deserializeBinary
  );

  externalTaskAccountStateChange(
    request: ExternalTaskAccountStateChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskAccountStateChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskAccountStateChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskAccountStateChange,
      callback);
  }

  methodInfoExternalTaskManualRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskManualRequestRes,
    (request: ExternalTaskManualRequestRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskManualRequestRes.deserializeBinary
  );

  externalTaskManualRequest(
    request: ExternalTaskManualRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskManualRequestRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskManualRequest',
      request,
      metadata || {},
      this.methodInfoExternalTaskManualRequest,
      callback);
  }

  methodInfoExternalTaskManualChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskManualChangeRes,
    (request: ExternalTaskManualChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskManualChangeRes.deserializeBinary
  );

  externalTaskManualChange(
    request: ExternalTaskManualChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskManualChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskManualChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskManualChange,
      callback);
  }

  methodInfoExternalTaskRoleAccountGroupListAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskRoleAccountGroupListAddRes,
    (request: ExternalTaskRoleAccountGroupListAddRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskRoleAccountGroupListAddRes.deserializeBinary
  );

  externalTaskRoleAccountGroupListAdd(
    request: ExternalTaskRoleAccountGroupListAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskRoleAccountGroupListAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskRoleAccountGroupListAdd',
      request,
      metadata || {},
      this.methodInfoExternalTaskRoleAccountGroupListAdd,
      callback);
  }

  methodInfoExternalTaskRoleAccountGroupListRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskRoleAccountGroupListRemoveRes,
    (request: ExternalTaskRoleAccountGroupListRemoveRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskRoleAccountGroupListRemoveRes.deserializeBinary
  );

  externalTaskRoleAccountGroupListRemove(
    request: ExternalTaskRoleAccountGroupListRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskRoleAccountGroupListRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskRoleAccountGroupListRemove',
      request,
      metadata || {},
      this.methodInfoExternalTaskRoleAccountGroupListRemove,
      callback);
  }

  methodInfoExternalTaskRoleAccountGroupCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskRoleAccountGroupCheckRes,
    (request: ExternalTaskRoleAccountGroupCheckRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskRoleAccountGroupCheckRes.deserializeBinary
  );

  externalTaskRoleAccountGroupCheck(
    request: ExternalTaskRoleAccountGroupCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskRoleAccountGroupCheckRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskRoleAccountGroupCheck',
      request,
      metadata || {},
      this.methodInfoExternalTaskRoleAccountGroupCheck,
      callback);
  }

  methodInfoExternalRoleAccountGroupCheck = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalRoleAccountGroupCheckRes,
    (request: ExternalRoleAccountGroupCheckRequest) => {
      return request.serializeBinary();
    },
    ExternalRoleAccountGroupCheckRes.deserializeBinary
  );

  externalRoleAccountGroupCheck(
    request: ExternalRoleAccountGroupCheckRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalRoleAccountGroupCheckRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalRoleAccountGroupCheck',
      request,
      metadata || {},
      this.methodInfoExternalRoleAccountGroupCheck,
      callback);
  }

  methodInfoExternalTaskRoleApply = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskRoleApplyRes,
    (request: ExternalTaskRoleApplyRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskRoleApplyRes.deserializeBinary
  );

  externalTaskRoleApply(
    request: ExternalTaskRoleApplyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskRoleApplyRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskRoleApply',
      request,
      metadata || {},
      this.methodInfoExternalTaskRoleApply,
      callback);
  }

  methodInfoExternalTaskRoleRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskRoleRequestRes,
    (request: ExternalTaskRoleRequestRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskRoleRequestRes.deserializeBinary
  );

  externalTaskRoleRequest(
    request: ExternalTaskRoleRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskRoleRequestRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskRoleRequest',
      request,
      metadata || {},
      this.methodInfoExternalTaskRoleRequest,
      callback);
  }

  methodInfoExternalTaskCommentAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskCommentAddRes,
    (request: ExternalTaskCommentAddRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskCommentAddRes.deserializeBinary
  );

  externalTaskCommentAdd(
    request: ExternalTaskCommentAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskCommentAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskCommentAdd',
      request,
      metadata || {},
      this.methodInfoExternalTaskCommentAdd,
      callback);
  }

  methodInfoExternalTaskFieldChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskFieldChangeRes,
    (request: ExternalTaskFieldChangeRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskFieldChangeRes.deserializeBinary
  );

  externalTaskFieldChange(
    request: ExternalTaskFieldChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskFieldChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskFieldChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskFieldChange,
      callback);
  }

  methodInfoExternalTaskManualParamChange = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalTaskManualParamAddRes,
    (request: ExternalTaskManualParamRequest) => {
      return request.serializeBinary();
    },
    ExternalTaskManualParamAddRes.deserializeBinary
  );

  externalTaskManualParamChange(
    request: ExternalTaskManualParamRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalTaskManualParamAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalTaskManualParamChange',
      request,
      metadata || {},
      this.methodInfoExternalTaskManualParamChange,
      callback);
  }

  methodInfoExternalNotificationTaskList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalNotificationTaskListRes,
    (request: ExternalNotificationTaskListRequest) => {
      return request.serializeBinary();
    },
    ExternalNotificationTaskListRes.deserializeBinary
  );

  externalNotificationTaskList(
    request: ExternalNotificationTaskListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalNotificationTaskListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalNotificationTaskList',
      request,
      metadata || {},
      this.methodInfoExternalNotificationTaskList,
      callback);
  }

  methodInfoExternalNotificationCommentList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalNotificationCommentListRes,
    (request: ExternalNotificationCommentListRequest) => {
      return request.serializeBinary();
    },
    ExternalNotificationCommentListRes.deserializeBinary
  );

  externalNotificationCommentList(
    request: ExternalNotificationCommentListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalNotificationCommentListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalNotificationCommentList',
      request,
      metadata || {},
      this.methodInfoExternalNotificationCommentList,
      callback);
  }

  methodInfoExternalNotificationList = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalNotificationListtRes,
    (request: ExternalNotificationListRequest) => {
      return request.serializeBinary();
    },
    ExternalNotificationListtRes.deserializeBinary
  );

  externalNotificationList(
    request: ExternalNotificationListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalNotificationListtRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ClientService/ExternalNotificationList',
      request,
      metadata || {},
      this.methodInfoExternalNotificationList,
      callback);
  }

}

