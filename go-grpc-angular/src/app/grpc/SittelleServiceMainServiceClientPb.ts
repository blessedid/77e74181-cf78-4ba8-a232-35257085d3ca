/**
 * @fileoverview gRPC-Web generated client stub for SittelleProtos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';
import * as SittelleTypeSystem_pb from './SittelleTypeSystem_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';

import {
  AccountAddRequest,
  AccountAddRes,
  AccountByCaptionRequest,
  AccountByCaptionRes,
  AccountByIndexRequest,
  AccountByIndexRes,
  AccountChangeRequest,
  AccountChangeRes,
  AccountGroupAccountAddRequest,
  AccountGroupAccountAddRes,
  AccountGroupAccountRemoveRequest,
  AccountGroupAccountRemoveRes,
  AccountGroupAddRequest,
  AccountGroupAddRes,
  AccountGroupByIndexRequest,
  AccountGroupByIndexRes,
  AccountGroupChangeRequest,
  AccountGroupChangeRes,
  AccountGroupListByAccountRequest,
  AccountGroupListByAccountRes,
  AccountGroupListByRoleRequest,
  AccountGroupListByRoleRes,
  AccountGroupListRequest,
  AccountGroupListRes,
  AccountGroupListWithAccountListRequest,
  AccountGroupListWithAccountListRes,
  AccountGroupRemoveRequest,
  AccountGroupRemoveRes,
  AccountListByAccountGroupRequest,
  AccountListByAccountGroupRes,
  AccountListRequest,
  AccountListRes,
  AccountPasswordByCaptionRequest,
  AccountPasswordByCaptionRes,
  ConnectionAccessRequest,
  ConnectionAccessRes,
  ConnectionCloseRequest,
  ConnectionCloseRes,
  ConnectionCreateRequest,
  ConnectionCreateRes,
  ConnectionStatusRequest,
  ConnectionStatusRes,
  ConnectionVersionRequest,
  ConnectionVersionRes,
  MonObjectAddRequest,
  MonObjectAddRes,
  MonObjectByIndRequest,
  MonObjectByIndRes,
  MonObjectInfoListRequest,
  MonObjectInfoListRes,
  MonObjectListRequest,
  MonObjectListRes,
  MonObjectRemoveRequest,
  MonObjectRemoveRes,
  PanelListByAccountIndRequest,
  PanelListByAccountIndRes,
  PanelSettingsGetRequest,
  PanelSettingsGetRes,
  RoleDemandRequest,
  RoleDemandRes,
  RoleGlobalListRequest,
  RoleGlobalListRes,
  RoleListRequest,
  RoleListRes,
  RoleNotifyRequest,
  RoleNotifyRes,
  RoleRightRequest,
  RoleRightRes,
  SessionListRequest,
  SessionListRes,
  StateAccountListRequest,
  StateAccountListRes,
  StateCommonListRequest,
  StateCommonListRes,
  StatusGroupListRequest,
  StatusGroupListRes,
  StatusListByGroupIndRequest,
  StatusListByGroupIndRes,
  StatusListRequest,
  StatusListRes,
  StatusPathAutoApplyParentListRequest,
  StatusPathAutoApplyParentListRes,
  StatusPathAutoApplySubtasksListRequest,
  StatusPathAutoApplySubtasksListRes,
  StatusPathListRequest,
  StatusPathListRes,
  StatusRoleRightAddRequest,
  StatusRoleRightAddRes,
  StatusRoleRightByAccountGroupRequest,
  StatusRoleRightByAccountGroupRes,
  StatusRoleRightChangeRequest,
  StatusRoleRightChangeRes,
  StatusRoleRightListRequest,
  StatusRoleRightListRes,
  StatusRoleRightRemoveRequest,
  StatusRoleRightRemoveRes,
  TaskAccountParticipantListRequest,
  TaskAccountParticipantListRes,
  TaskTemplateListRequest,
  TaskTemplateListRes,
  TaskTypeListRequest,
  TaskTypeListRes,
  TaskTypeRoleListRequest,
  TaskTypeRoleListRes} from './SittelleServiceMain_pb';

export class MainServiceClient {
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

  methodInfoConnectionCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    ConnectionCreateRes,
    (request: ConnectionCreateRequest) => {
      return request.serializeBinary();
    },
    ConnectionCreateRes.deserializeBinary
  );

  connectionCreate(
    request: ConnectionCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ConnectionCreateRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/ConnectionCreate',
      request,
      metadata || {},
      this.methodInfoConnectionCreate,
      callback);
  }

  methodInfoConnectionClose = new grpcWeb.AbstractClientBase.MethodInfo(
    ConnectionCloseRes,
    (request: ConnectionCloseRequest) => {
      return request.serializeBinary();
    },
    ConnectionCloseRes.deserializeBinary
  );

  connectionClose(
    request: ConnectionCloseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ConnectionCloseRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/ConnectionClose',
      request,
      metadata || {},
      this.methodInfoConnectionClose,
      callback);
  }

  methodInfoConnectionStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    ConnectionStatusRes,
    (request: ConnectionStatusRequest) => {
      return request.serializeBinary();
    },
    ConnectionStatusRes.deserializeBinary
  );

  connectionStatus(
    request: ConnectionStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ConnectionStatusRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/ConnectionStatus',
      request,
      metadata || {},
      this.methodInfoConnectionStatus,
      callback);
  }

  methodInfoConnectionVersion = new grpcWeb.AbstractClientBase.MethodInfo(
    ConnectionVersionRes,
    (request: ConnectionVersionRequest) => {
      return request.serializeBinary();
    },
    ConnectionVersionRes.deserializeBinary
  );

  connectionVersion(
    request: ConnectionVersionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ConnectionVersionRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/ConnectionVersion',
      request,
      metadata || {},
      this.methodInfoConnectionVersion,
      callback);
  }

  methodInfoConnectionAccess = new grpcWeb.AbstractClientBase.MethodInfo(
    ConnectionAccessRes,
    (request: ConnectionAccessRequest) => {
      return request.serializeBinary();
    },
    ConnectionAccessRes.deserializeBinary
  );

  connectionAccess(
    request: ConnectionAccessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ConnectionAccessRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/ConnectionAccess',
      request,
      metadata || {},
      this.methodInfoConnectionAccess,
      callback);
  }

  methodInfoSessionList = new grpcWeb.AbstractClientBase.MethodInfo(
    SessionListRes,
    (request: SessionListRequest) => {
      return request.serializeBinary();
    },
    SessionListRes.deserializeBinary
  );

  sessionList(
    request: SessionListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessionListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/SessionList',
      request,
      metadata || {},
      this.methodInfoSessionList,
      callback);
  }

  methodInfoPanelListByAccountInd = new grpcWeb.AbstractClientBase.MethodInfo(
    PanelListByAccountIndRes,
    (request: PanelListByAccountIndRequest) => {
      return request.serializeBinary();
    },
    PanelListByAccountIndRes.deserializeBinary
  );

  panelListByAccountInd(
    request: PanelListByAccountIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PanelListByAccountIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/PanelListByAccountInd',
      request,
      metadata || {},
      this.methodInfoPanelListByAccountInd,
      callback);
  }

  methodInfoPanelSettingsGet = new grpcWeb.AbstractClientBase.MethodInfo(
    PanelSettingsGetRes,
    (request: PanelSettingsGetRequest) => {
      return request.serializeBinary();
    },
    PanelSettingsGetRes.deserializeBinary
  );

  panelSettingsGet(
    request: PanelSettingsGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PanelSettingsGetRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/PanelSettingsGet',
      request,
      metadata || {},
      this.methodInfoPanelSettingsGet,
      callback);
  }

  methodInfoTaskTypeList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTypeListRes,
    (request: TaskTypeListRequest) => {
      return request.serializeBinary();
    },
    TaskTypeListRes.deserializeBinary
  );

  taskTypeList(
    request: TaskTypeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTypeListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/TaskTypeList',
      request,
      metadata || {},
      this.methodInfoTaskTypeList,
      callback);
  }

  methodInfoStatusList = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusListRes,
    (request: StatusListRequest) => {
      return request.serializeBinary();
    },
    StatusListRes.deserializeBinary
  );

  statusList(
    request: StatusListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusList',
      request,
      metadata || {},
      this.methodInfoStatusList,
      callback);
  }

  methodInfoStatusGroupList = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusGroupListRes,
    (request: StatusGroupListRequest) => {
      return request.serializeBinary();
    },
    StatusGroupListRes.deserializeBinary
  );

  statusGroupList(
    request: StatusGroupListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusGroupListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusGroupList',
      request,
      metadata || {},
      this.methodInfoStatusGroupList,
      callback);
  }

  methodInfoStatusListByGroupInd = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusListByGroupIndRes,
    (request: StatusListByGroupIndRequest) => {
      return request.serializeBinary();
    },
    StatusListByGroupIndRes.deserializeBinary
  );

  statusListByGroupInd(
    request: StatusListByGroupIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusListByGroupIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusListByGroupInd',
      request,
      metadata || {},
      this.methodInfoStatusListByGroupInd,
      callback);
  }

  methodInfoStatusPathList = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusPathListRes,
    (request: StatusPathListRequest) => {
      return request.serializeBinary();
    },
    StatusPathListRes.deserializeBinary
  );

  statusPathList(
    request: StatusPathListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusPathListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusPathList',
      request,
      metadata || {},
      this.methodInfoStatusPathList,
      callback);
  }

  methodInfoStatusPathAutoApplySubtasksList = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusPathAutoApplySubtasksListRes,
    (request: StatusPathAutoApplySubtasksListRequest) => {
      return request.serializeBinary();
    },
    StatusPathAutoApplySubtasksListRes.deserializeBinary
  );

  statusPathAutoApplySubtasksList(
    request: StatusPathAutoApplySubtasksListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusPathAutoApplySubtasksListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusPathAutoApplySubtasksList',
      request,
      metadata || {},
      this.methodInfoStatusPathAutoApplySubtasksList,
      callback);
  }

  methodInfoStatusPathAutoApplyParentList = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusPathAutoApplyParentListRes,
    (request: StatusPathAutoApplyParentListRequest) => {
      return request.serializeBinary();
    },
    StatusPathAutoApplyParentListRes.deserializeBinary
  );

  statusPathAutoApplyParentList(
    request: StatusPathAutoApplyParentListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusPathAutoApplyParentListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusPathAutoApplyParentList',
      request,
      metadata || {},
      this.methodInfoStatusPathAutoApplyParentList,
      callback);
  }

  methodInfoStateCommonList = new grpcWeb.AbstractClientBase.MethodInfo(
    StateCommonListRes,
    (request: StateCommonListRequest) => {
      return request.serializeBinary();
    },
    StateCommonListRes.deserializeBinary
  );

  stateCommonList(
    request: StateCommonListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StateCommonListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StateCommonList',
      request,
      metadata || {},
      this.methodInfoStateCommonList,
      callback);
  }

  methodInfoStateAccountList = new grpcWeb.AbstractClientBase.MethodInfo(
    StateAccountListRes,
    (request: StateAccountListRequest) => {
      return request.serializeBinary();
    },
    StateAccountListRes.deserializeBinary
  );

  stateAccountList(
    request: StateAccountListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StateAccountListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StateAccountList',
      request,
      metadata || {},
      this.methodInfoStateAccountList,
      callback);
  }

  methodInfoMonObjectList = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectListRes,
    (request: MonObjectListRequest) => {
      return request.serializeBinary();
    },
    MonObjectListRes.deserializeBinary
  );

  monObjectList(
    request: MonObjectListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/MonObjectList',
      request,
      metadata || {},
      this.methodInfoMonObjectList,
      callback);
  }

  methodInfoMonObjectAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectAddRes,
    (request: MonObjectAddRequest) => {
      return request.serializeBinary();
    },
    MonObjectAddRes.deserializeBinary
  );

  monObjectAdd(
    request: MonObjectAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/MonObjectAdd',
      request,
      metadata || {},
      this.methodInfoMonObjectAdd,
      callback);
  }

  methodInfoMonObjectRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectRemoveRes,
    (request: MonObjectRemoveRequest) => {
      return request.serializeBinary();
    },
    MonObjectRemoveRes.deserializeBinary
  );

  monObjectRemove(
    request: MonObjectRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/MonObjectRemove',
      request,
      metadata || {},
      this.methodInfoMonObjectRemove,
      callback);
  }

  methodInfoMonObjectByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectByIndRes,
    (request: MonObjectByIndRequest) => {
      return request.serializeBinary();
    },
    MonObjectByIndRes.deserializeBinary
  );

  monObjectByInd(
    request: MonObjectByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/MonObjectByInd',
      request,
      metadata || {},
      this.methodInfoMonObjectByInd,
      callback);
  }

  methodInfoTaskTypeRoleList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTypeRoleListRes,
    (request: TaskTypeRoleListRequest) => {
      return request.serializeBinary();
    },
    TaskTypeRoleListRes.deserializeBinary
  );

  taskTypeRoleList(
    request: TaskTypeRoleListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTypeRoleListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/TaskTypeRoleList',
      request,
      metadata || {},
      this.methodInfoTaskTypeRoleList,
      callback);
  }

  methodInfoRoleNotifyLocalList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleNotifyRes,
    (request: RoleNotifyRequest) => {
      return request.serializeBinary();
    },
    RoleNotifyRes.deserializeBinary
  );

  roleNotifyLocalList(
    request: RoleNotifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleNotifyRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/RoleNotifyLocalList',
      request,
      metadata || {},
      this.methodInfoRoleNotifyLocalList,
      callback);
  }

  methodInfoRoleNotifyGlobalList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleNotifyRes,
    (request: RoleNotifyRequest) => {
      return request.serializeBinary();
    },
    RoleNotifyRes.deserializeBinary
  );

  roleNotifyGlobalList(
    request: RoleNotifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleNotifyRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/RoleNotifyGlobalList',
      request,
      metadata || {},
      this.methodInfoRoleNotifyGlobalList,
      callback);
  }

  methodInfoRoleRightLocalList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleRightRes,
    (request: RoleRightRequest) => {
      return request.serializeBinary();
    },
    RoleRightRes.deserializeBinary
  );

  roleRightLocalList(
    request: RoleRightRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleRightRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/RoleRightLocalList',
      request,
      metadata || {},
      this.methodInfoRoleRightLocalList,
      callback);
  }

  methodInfoRoleRightGlobalList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleRightRes,
    (request: RoleRightRequest) => {
      return request.serializeBinary();
    },
    RoleRightRes.deserializeBinary
  );

  roleRightGlobalList(
    request: RoleRightRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleRightRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/RoleRightGlobalList',
      request,
      metadata || {},
      this.methodInfoRoleRightGlobalList,
      callback);
  }

  methodInfoRoleDemandList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleDemandRes,
    (request: RoleDemandRequest) => {
      return request.serializeBinary();
    },
    RoleDemandRes.deserializeBinary
  );

  roleDemandList(
    request: RoleDemandRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleDemandRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/RoleDemandList',
      request,
      metadata || {},
      this.methodInfoRoleDemandList,
      callback);
  }

  methodInfoRoleList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleListRes,
    (request: RoleListRequest) => {
      return request.serializeBinary();
    },
    RoleListRes.deserializeBinary
  );

  roleList(
    request: RoleListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/RoleList',
      request,
      metadata || {},
      this.methodInfoRoleList,
      callback);
  }

  methodInfoRoleGlobalList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleGlobalListRes,
    (request: RoleGlobalListRequest) => {
      return request.serializeBinary();
    },
    RoleGlobalListRes.deserializeBinary
  );

  roleGlobalList(
    request: RoleGlobalListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleGlobalListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/RoleGlobalList',
      request,
      metadata || {},
      this.methodInfoRoleGlobalList,
      callback);
  }

  methodInfoAccountByCaption = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountByCaptionRes,
    (request: AccountByCaptionRequest) => {
      return request.serializeBinary();
    },
    AccountByCaptionRes.deserializeBinary
  );

  accountByCaption(
    request: AccountByCaptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountByCaptionRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountByCaption',
      request,
      metadata || {},
      this.methodInfoAccountByCaption,
      callback);
  }

  methodInfoAccountList = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountListRes,
    (request: AccountListRequest) => {
      return request.serializeBinary();
    },
    AccountListRes.deserializeBinary
  );

  accountList(
    request: AccountListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountList',
      request,
      metadata || {},
      this.methodInfoAccountList,
      callback);
  }

  methodInfoAccountAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountAddRes,
    (request: AccountAddRequest) => {
      return request.serializeBinary();
    },
    AccountAddRes.deserializeBinary
  );

  accountAdd(
    request: AccountAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountAdd',
      request,
      metadata || {},
      this.methodInfoAccountAdd,
      callback);
  }

  methodInfoAccountChange = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountChangeRes,
    (request: AccountChangeRequest) => {
      return request.serializeBinary();
    },
    AccountChangeRes.deserializeBinary
  );

  accountChange(
    request: AccountChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountChange',
      request,
      metadata || {},
      this.methodInfoAccountChange,
      callback);
  }

  methodInfoAccountRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountChangeRes,
    (request: AccountChangeRequest) => {
      return request.serializeBinary();
    },
    AccountChangeRes.deserializeBinary
  );

  accountRemove(
    request: AccountChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountRemove',
      request,
      metadata || {},
      this.methodInfoAccountRemove,
      callback);
  }

  methodInfoAccountByIndex = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountByIndexRes,
    (request: AccountByIndexRequest) => {
      return request.serializeBinary();
    },
    AccountByIndexRes.deserializeBinary
  );

  accountByIndex(
    request: AccountByIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountByIndexRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountByIndex',
      request,
      metadata || {},
      this.methodInfoAccountByIndex,
      callback);
  }

  methodInfoAccountListByAccountGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountListByAccountGroupRes,
    (request: AccountListByAccountGroupRequest) => {
      return request.serializeBinary();
    },
    AccountListByAccountGroupRes.deserializeBinary
  );

  accountListByAccountGroup(
    request: AccountListByAccountGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountListByAccountGroupRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountListByAccountGroup',
      request,
      metadata || {},
      this.methodInfoAccountListByAccountGroup,
      callback);
  }

  methodInfoAccountPasswordByCaption = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountPasswordByCaptionRes,
    (request: AccountPasswordByCaptionRequest) => {
      return request.serializeBinary();
    },
    AccountPasswordByCaptionRes.deserializeBinary
  );

  accountPasswordByCaption(
    request: AccountPasswordByCaptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountPasswordByCaptionRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountPasswordByCaption',
      request,
      metadata || {},
      this.methodInfoAccountPasswordByCaption,
      callback);
  }

  methodInfoAccountGroupList = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupListRes,
    (request: AccountGroupListRequest) => {
      return request.serializeBinary();
    },
    AccountGroupListRes.deserializeBinary
  );

  accountGroupList(
    request: AccountGroupListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupList',
      request,
      metadata || {},
      this.methodInfoAccountGroupList,
      callback);
  }

  methodInfoAccountGroupAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupAddRes,
    (request: AccountGroupAddRequest) => {
      return request.serializeBinary();
    },
    AccountGroupAddRes.deserializeBinary
  );

  accountGroupAdd(
    request: AccountGroupAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupAdd',
      request,
      metadata || {},
      this.methodInfoAccountGroupAdd,
      callback);
  }

  methodInfoAccountGroupChange = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupChangeRes,
    (request: AccountGroupChangeRequest) => {
      return request.serializeBinary();
    },
    AccountGroupChangeRes.deserializeBinary
  );

  accountGroupChange(
    request: AccountGroupChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupChange',
      request,
      metadata || {},
      this.methodInfoAccountGroupChange,
      callback);
  }

  methodInfoAccountGroupRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupRemoveRes,
    (request: AccountGroupRemoveRequest) => {
      return request.serializeBinary();
    },
    AccountGroupRemoveRes.deserializeBinary
  );

  accountGroupRemove(
    request: AccountGroupRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupRemove',
      request,
      metadata || {},
      this.methodInfoAccountGroupRemove,
      callback);
  }

  methodInfoAccountGroupByIndex = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupByIndexRes,
    (request: AccountGroupByIndexRequest) => {
      return request.serializeBinary();
    },
    AccountGroupByIndexRes.deserializeBinary
  );

  accountGroupByIndex(
    request: AccountGroupByIndexRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupByIndexRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupByIndex',
      request,
      metadata || {},
      this.methodInfoAccountGroupByIndex,
      callback);
  }

  methodInfoAccountGroupListByAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupListByAccountRes,
    (request: AccountGroupListByAccountRequest) => {
      return request.serializeBinary();
    },
    AccountGroupListByAccountRes.deserializeBinary
  );

  accountGroupListByAccount(
    request: AccountGroupListByAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupListByAccountRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupListByAccount',
      request,
      metadata || {},
      this.methodInfoAccountGroupListByAccount,
      callback);
  }

  methodInfoAccountGroupListWithAccountList = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupListWithAccountListRes,
    (request: AccountGroupListWithAccountListRequest) => {
      return request.serializeBinary();
    },
    AccountGroupListWithAccountListRes.deserializeBinary
  );

  accountGroupListWithAccountList(
    request: AccountGroupListWithAccountListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupListWithAccountListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupListWithAccountList',
      request,
      metadata || {},
      this.methodInfoAccountGroupListWithAccountList,
      callback);
  }

  methodInfoAccountGroupListByRole = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupListByRoleRes,
    (request: AccountGroupListByRoleRequest) => {
      return request.serializeBinary();
    },
    AccountGroupListByRoleRes.deserializeBinary
  );

  accountGroupListByRole(
    request: AccountGroupListByRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupListByRoleRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupListByRole',
      request,
      metadata || {},
      this.methodInfoAccountGroupListByRole,
      callback);
  }

  methodInfoAccountGroupAccountAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupAccountAddRes,
    (request: AccountGroupAccountAddRequest) => {
      return request.serializeBinary();
    },
    AccountGroupAccountAddRes.deserializeBinary
  );

  accountGroupAccountAdd(
    request: AccountGroupAccountAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupAccountAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupAccountAdd',
      request,
      metadata || {},
      this.methodInfoAccountGroupAccountAdd,
      callback);
  }

  methodInfoAccountGroupAccountRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    AccountGroupAccountRemoveRes,
    (request: AccountGroupAccountRemoveRequest) => {
      return request.serializeBinary();
    },
    AccountGroupAccountRemoveRes.deserializeBinary
  );

  accountGroupAccountRemove(
    request: AccountGroupAccountRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AccountGroupAccountRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/AccountGroupAccountRemove',
      request,
      metadata || {},
      this.methodInfoAccountGroupAccountRemove,
      callback);
  }

  methodInfoTaskTemplateList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskTemplateListRes,
    (request: TaskTemplateListRequest) => {
      return request.serializeBinary();
    },
    TaskTemplateListRes.deserializeBinary
  );

  taskTemplateList(
    request: TaskTemplateListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskTemplateListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/TaskTemplateList',
      request,
      metadata || {},
      this.methodInfoTaskTemplateList,
      callback);
  }

  methodInfoStatusRoleRightList = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusRoleRightListRes,
    (request: StatusRoleRightListRequest) => {
      return request.serializeBinary();
    },
    StatusRoleRightListRes.deserializeBinary
  );

  statusRoleRightList(
    request: StatusRoleRightListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusRoleRightListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusRoleRightList',
      request,
      metadata || {},
      this.methodInfoStatusRoleRightList,
      callback);
  }

  methodInfoStatusRoleRightAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusRoleRightAddRes,
    (request: StatusRoleRightAddRequest) => {
      return request.serializeBinary();
    },
    StatusRoleRightAddRes.deserializeBinary
  );

  statusRoleRightAdd(
    request: StatusRoleRightAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusRoleRightAddRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusRoleRightAdd',
      request,
      metadata || {},
      this.methodInfoStatusRoleRightAdd,
      callback);
  }

  methodInfoStatusRoleRightChange = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusRoleRightChangeRes,
    (request: StatusRoleRightChangeRequest) => {
      return request.serializeBinary();
    },
    StatusRoleRightChangeRes.deserializeBinary
  );

  statusRoleRightChange(
    request: StatusRoleRightChangeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusRoleRightChangeRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusRoleRightChange',
      request,
      metadata || {},
      this.methodInfoStatusRoleRightChange,
      callback);
  }

  methodInfoStatusRoleRightRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusRoleRightRemoveRes,
    (request: StatusRoleRightRemoveRequest) => {
      return request.serializeBinary();
    },
    StatusRoleRightRemoveRes.deserializeBinary
  );

  statusRoleRightRemove(
    request: StatusRoleRightRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusRoleRightRemoveRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusRoleRightRemove',
      request,
      metadata || {},
      this.methodInfoStatusRoleRightRemove,
      callback);
  }

  methodInfoStatusRoleRightByAccountGroup = new grpcWeb.AbstractClientBase.MethodInfo(
    StatusRoleRightByAccountGroupRes,
    (request: StatusRoleRightByAccountGroupRequest) => {
      return request.serializeBinary();
    },
    StatusRoleRightByAccountGroupRes.deserializeBinary
  );

  statusRoleRightByAccountGroup(
    request: StatusRoleRightByAccountGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatusRoleRightByAccountGroupRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/StatusRoleRightByAccountGroup',
      request,
      metadata || {},
      this.methodInfoStatusRoleRightByAccountGroup,
      callback);
  }

  methodInfoTaskAccountParticipantList = new grpcWeb.AbstractClientBase.MethodInfo(
    TaskAccountParticipantListRes,
    (request: TaskAccountParticipantListRequest) => {
      return request.serializeBinary();
    },
    TaskAccountParticipantListRes.deserializeBinary
  );

  taskAccountParticipantList(
    request: TaskAccountParticipantListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TaskAccountParticipantListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/TaskAccountParticipantList',
      request,
      metadata || {},
      this.methodInfoTaskAccountParticipantList,
      callback);
  }

  methodInfoMonObjectInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectInfoListRes,
    (request: MonObjectInfoListRequest) => {
      return request.serializeBinary();
    },
    MonObjectInfoListRes.deserializeBinary
  );

  monObjectInfoList(
    request: MonObjectInfoListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectInfoListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.MainService/MonObjectInfoList',
      request,
      metadata || {},
      this.methodInfoMonObjectInfoList,
      callback);
  }

}

