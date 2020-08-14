/**
 * @fileoverview gRPC-Web generated client stub for SittelleProtos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';
import * as SittelleTypeOffice_pb from './SittelleTypeOffice_pb';

import {
  DictMonObjectByIndRequest,
  DictMonObjectByIndRes,
  DictMonObjectInfoByIndRequest,
  DictMonObjectInfoByIndRes,
  DictMonObjectInfoListRequest,
  DictMonObjectInfoListRes,
  DictMonObjectListRequest,
  DictMonObjectListRes,
  DictStateAccountByIndRequest,
  DictStateAccountByIndRes,
  DictStateAccountListRequest,
  DictStateAccountListRes,
  DictStateCommonByIndRequest,
  DictStateCommonByIndRes,
  DictStateCommonListRequest,
  DictStateCommonListRes,
  DictStatusByIndRequest,
  DictStatusByIndRes,
  DictStatusGroupListRequest,
  DictStatusGroupListRes,
  DictStatusListRequest,
  DictStatusListRes,
  DictTaskTypeListRequest,
  DictTaskTypeListRes,
  ManualInfoByIndRequest,
  ManualInfoByIndRes,
  ManualInfoListRequest,
  ManualInfoListRes,
  MonObjectContractorEmployeeListRequest,
  MonObjectContractorEmployeeListRes,
  MonObjectContractorListRequest,
  MonObjectContractorListRes,
  MonObjectEmployeeListRequest,
  MonObjectEmployeeListRes,
  PanelListRequest,
  PanelListRes,
  RoleInfoByIndRequest,
  RoleInfoByIndRes,
  RoleInfoListRequest,
  RoleInfoListRes,
  SessPanelFilterMonObjectGetRequest,
  SessPanelFilterMonObjectGetRes,
  SessPanelFilterMonObjectReplaceRequest,
  SessPanelFilterMonObjectReplaceRes,
  SessPanelFilterStateGetRequest,
  SessPanelFilterStateGetRes,
  SessPanelFilterStateReplaceRequest,
  SessPanelFilterStateReplaceRes,
  SessPanelFilterStatusGetRequest,
  SessPanelFilterStatusGetRes,
  SessPanelFilterStatusGroupGetRequest,
  SessPanelFilterStatusGroupGetRes,
  SessPanelFilterStatusGroupReplaceRequest,
  SessPanelFilterStatusGroupReplaceRes,
  SessPanelFilterStatusReplaceRequest,
  SessPanelFilterStatusReplaceRes,
  StatsAggregateInfoByIndRequest,
  StatsAggregateInfoByIndRes,
  StatsAggregateInfoListRequest,
  StatsAggregateInfoListRes} from './SittelleServiceDictionary_pb';

export class DictionaryClient {
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

  methodInfoDictMonObjectInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    DictMonObjectInfoListRes,
    (request: DictMonObjectInfoListRequest) => {
      return request.serializeBinary();
    },
    DictMonObjectInfoListRes.deserializeBinary
  );

  dictMonObjectInfoList(
    request: DictMonObjectInfoListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictMonObjectInfoListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictMonObjectInfoList',
      request,
      metadata || {},
      this.methodInfoDictMonObjectInfoList,
      callback);
  }

  methodInfoDictMonObjectInfoByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    DictMonObjectInfoByIndRes,
    (request: DictMonObjectInfoByIndRequest) => {
      return request.serializeBinary();
    },
    DictMonObjectInfoByIndRes.deserializeBinary
  );

  dictMonObjectInfoByInd(
    request: DictMonObjectInfoByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictMonObjectInfoByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictMonObjectInfoByInd',
      request,
      metadata || {},
      this.methodInfoDictMonObjectInfoByInd,
      callback);
  }

  methodInfoDictMonObjectList = new grpcWeb.AbstractClientBase.MethodInfo(
    DictMonObjectListRes,
    (request: DictMonObjectListRequest) => {
      return request.serializeBinary();
    },
    DictMonObjectListRes.deserializeBinary
  );

  dictMonObjectList(
    request: DictMonObjectListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictMonObjectListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictMonObjectList',
      request,
      metadata || {},
      this.methodInfoDictMonObjectList,
      callback);
  }

  methodInfoDictMonObjectByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    DictMonObjectByIndRes,
    (request: DictMonObjectByIndRequest) => {
      return request.serializeBinary();
    },
    DictMonObjectByIndRes.deserializeBinary
  );

  dictMonObjectByInd(
    request: DictMonObjectByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictMonObjectByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictMonObjectByInd',
      request,
      metadata || {},
      this.methodInfoDictMonObjectByInd,
      callback);
  }

  methodInfoMonObjectEmployeeList = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectEmployeeListRes,
    (request: MonObjectEmployeeListRequest) => {
      return request.serializeBinary();
    },
    MonObjectEmployeeListRes.deserializeBinary
  );

  monObjectEmployeeList(
    request: MonObjectEmployeeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectEmployeeListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/MonObjectEmployeeList',
      request,
      metadata || {},
      this.methodInfoMonObjectEmployeeList,
      callback);
  }

  methodInfoMonObjectContractorEmployeeList = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectContractorEmployeeListRes,
    (request: MonObjectContractorEmployeeListRequest) => {
      return request.serializeBinary();
    },
    MonObjectContractorEmployeeListRes.deserializeBinary
  );

  monObjectContractorEmployeeList(
    request: MonObjectContractorEmployeeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectContractorEmployeeListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/MonObjectContractorEmployeeList',
      request,
      metadata || {},
      this.methodInfoMonObjectContractorEmployeeList,
      callback);
  }

  methodInfoMonObjectContractorList = new grpcWeb.AbstractClientBase.MethodInfo(
    MonObjectContractorListRes,
    (request: MonObjectContractorListRequest) => {
      return request.serializeBinary();
    },
    MonObjectContractorListRes.deserializeBinary
  );

  monObjectContractorList(
    request: MonObjectContractorListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MonObjectContractorListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/MonObjectContractorList',
      request,
      metadata || {},
      this.methodInfoMonObjectContractorList,
      callback);
  }

  methodInfoDictTaskTypeList = new grpcWeb.AbstractClientBase.MethodInfo(
    DictTaskTypeListRes,
    (request: DictTaskTypeListRequest) => {
      return request.serializeBinary();
    },
    DictTaskTypeListRes.deserializeBinary
  );

  dictTaskTypeList(
    request: DictTaskTypeListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictTaskTypeListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictTaskTypeList',
      request,
      metadata || {},
      this.methodInfoDictTaskTypeList,
      callback);
  }

  methodInfoDictStatusList = new grpcWeb.AbstractClientBase.MethodInfo(
    DictStatusListRes,
    (request: DictStatusListRequest) => {
      return request.serializeBinary();
    },
    DictStatusListRes.deserializeBinary
  );

  dictStatusList(
    request: DictStatusListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictStatusListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictStatusList',
      request,
      metadata || {},
      this.methodInfoDictStatusList,
      callback);
  }

  methodInfoDictStatusGroupList = new grpcWeb.AbstractClientBase.MethodInfo(
    DictStatusGroupListRes,
    (request: DictStatusGroupListRequest) => {
      return request.serializeBinary();
    },
    DictStatusGroupListRes.deserializeBinary
  );

  dictStatusGroupList(
    request: DictStatusGroupListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictStatusGroupListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictStatusGroupList',
      request,
      metadata || {},
      this.methodInfoDictStatusGroupList,
      callback);
  }

  methodInfoDictStatusByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    DictStatusByIndRes,
    (request: DictStatusByIndRequest) => {
      return request.serializeBinary();
    },
    DictStatusByIndRes.deserializeBinary
  );

  dictStatusByInd(
    request: DictStatusByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictStatusByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictStatusByInd',
      request,
      metadata || {},
      this.methodInfoDictStatusByInd,
      callback);
  }

  methodInfoDictStateCommonList = new grpcWeb.AbstractClientBase.MethodInfo(
    DictStateCommonListRes,
    (request: DictStateCommonListRequest) => {
      return request.serializeBinary();
    },
    DictStateCommonListRes.deserializeBinary
  );

  dictStateCommonList(
    request: DictStateCommonListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictStateCommonListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictStateCommonList',
      request,
      metadata || {},
      this.methodInfoDictStateCommonList,
      callback);
  }

  methodInfoDictStateCommonByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    DictStateCommonByIndRes,
    (request: DictStateCommonByIndRequest) => {
      return request.serializeBinary();
    },
    DictStateCommonByIndRes.deserializeBinary
  );

  dictStateCommonByInd(
    request: DictStateCommonByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictStateCommonByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictStateCommonByInd',
      request,
      metadata || {},
      this.methodInfoDictStateCommonByInd,
      callback);
  }

  methodInfoDictStateAccountList = new grpcWeb.AbstractClientBase.MethodInfo(
    DictStateAccountListRes,
    (request: DictStateAccountListRequest) => {
      return request.serializeBinary();
    },
    DictStateAccountListRes.deserializeBinary
  );

  dictStateAccountList(
    request: DictStateAccountListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictStateAccountListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictStateAccountList',
      request,
      metadata || {},
      this.methodInfoDictStateAccountList,
      callback);
  }

  methodInfoDictStateAccountByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    DictStateAccountByIndRes,
    (request: DictStateAccountByIndRequest) => {
      return request.serializeBinary();
    },
    DictStateAccountByIndRes.deserializeBinary
  );

  dictStateAccountByInd(
    request: DictStateAccountByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DictStateAccountByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/DictStateAccountByInd',
      request,
      metadata || {},
      this.methodInfoDictStateAccountByInd,
      callback);
  }

  methodInfoStatsAggregateInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    StatsAggregateInfoListRes,
    (request: StatsAggregateInfoListRequest) => {
      return request.serializeBinary();
    },
    StatsAggregateInfoListRes.deserializeBinary
  );

  statsAggregateInfoList(
    request: StatsAggregateInfoListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatsAggregateInfoListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/StatsAggregateInfoList',
      request,
      metadata || {},
      this.methodInfoStatsAggregateInfoList,
      callback);
  }

  methodInfoStatsAggregateInfoByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    StatsAggregateInfoByIndRes,
    (request: StatsAggregateInfoByIndRequest) => {
      return request.serializeBinary();
    },
    StatsAggregateInfoByIndRes.deserializeBinary
  );

  statsAggregateInfoByInd(
    request: StatsAggregateInfoByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: StatsAggregateInfoByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/StatsAggregateInfoByInd',
      request,
      metadata || {},
      this.methodInfoStatsAggregateInfoByInd,
      callback);
  }

  methodInfoManualInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    ManualInfoListRes,
    (request: ManualInfoListRequest) => {
      return request.serializeBinary();
    },
    ManualInfoListRes.deserializeBinary
  );

  manualInfoList(
    request: ManualInfoListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ManualInfoListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/ManualInfoList',
      request,
      metadata || {},
      this.methodInfoManualInfoList,
      callback);
  }

  methodInfoManualInfoByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    ManualInfoByIndRes,
    (request: ManualInfoByIndRequest) => {
      return request.serializeBinary();
    },
    ManualInfoByIndRes.deserializeBinary
  );

  manualInfoByInd(
    request: ManualInfoByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ManualInfoByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/ManualInfoByInd',
      request,
      metadata || {},
      this.methodInfoManualInfoByInd,
      callback);
  }

  methodInfoRoleInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleInfoListRes,
    (request: RoleInfoListRequest) => {
      return request.serializeBinary();
    },
    RoleInfoListRes.deserializeBinary
  );

  roleInfoList(
    request: RoleInfoListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleInfoListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/RoleInfoList',
      request,
      metadata || {},
      this.methodInfoRoleInfoList,
      callback);
  }

  methodInfoRoleInfoByInd = new grpcWeb.AbstractClientBase.MethodInfo(
    RoleInfoByIndRes,
    (request: RoleInfoByIndRequest) => {
      return request.serializeBinary();
    },
    RoleInfoByIndRes.deserializeBinary
  );

  roleInfoByInd(
    request: RoleInfoByIndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RoleInfoByIndRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/RoleInfoByInd',
      request,
      metadata || {},
      this.methodInfoRoleInfoByInd,
      callback);
  }

  methodInfoSessPanelFilterStatusGet = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterStatusGetRes,
    (request: SessPanelFilterStatusGetRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterStatusGetRes.deserializeBinary
  );

  sessPanelFilterStatusGet(
    request: SessPanelFilterStatusGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterStatusGetRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterStatusGet',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterStatusGet,
      callback);
  }

  methodInfoSessPanelFilterStatusReplace = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterStatusReplaceRes,
    (request: SessPanelFilterStatusReplaceRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterStatusReplaceRes.deserializeBinary
  );

  sessPanelFilterStatusReplace(
    request: SessPanelFilterStatusReplaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterStatusReplaceRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterStatusReplace',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterStatusReplace,
      callback);
  }

  methodInfoSessPanelFilterStateGet = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterStateGetRes,
    (request: SessPanelFilterStateGetRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterStateGetRes.deserializeBinary
  );

  sessPanelFilterStateGet(
    request: SessPanelFilterStateGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterStateGetRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterStateGet',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterStateGet,
      callback);
  }

  methodInfoSessPanelFilterStateReplace = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterStateReplaceRes,
    (request: SessPanelFilterStateReplaceRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterStateReplaceRes.deserializeBinary
  );

  sessPanelFilterStateReplace(
    request: SessPanelFilterStateReplaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterStateReplaceRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterStateReplace',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterStateReplace,
      callback);
  }

  methodInfoSessPanelFilterMonObjectGet = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterMonObjectGetRes,
    (request: SessPanelFilterMonObjectGetRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterMonObjectGetRes.deserializeBinary
  );

  sessPanelFilterMonObjectGet(
    request: SessPanelFilterMonObjectGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterMonObjectGetRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterMonObjectGet',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterMonObjectGet,
      callback);
  }

  methodInfoSessPanelFilterMonObjectReplace = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterMonObjectReplaceRes,
    (request: SessPanelFilterMonObjectReplaceRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterMonObjectReplaceRes.deserializeBinary
  );

  sessPanelFilterMonObjectReplace(
    request: SessPanelFilterMonObjectReplaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterMonObjectReplaceRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterMonObjectReplace',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterMonObjectReplace,
      callback);
  }

  methodInfoSessPanelFilterStatusGroupGet = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterStatusGroupGetRes,
    (request: SessPanelFilterStatusGroupGetRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterStatusGroupGetRes.deserializeBinary
  );

  sessPanelFilterStatusGroupGet(
    request: SessPanelFilterStatusGroupGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterStatusGroupGetRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterStatusGroupGet',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterStatusGroupGet,
      callback);
  }

  methodInfoSessPanelFilterStatusGroupReplace = new grpcWeb.AbstractClientBase.MethodInfo(
    SessPanelFilterStatusGroupReplaceRes,
    (request: SessPanelFilterStatusGroupReplaceRequest) => {
      return request.serializeBinary();
    },
    SessPanelFilterStatusGroupReplaceRes.deserializeBinary
  );

  sessPanelFilterStatusGroupReplace(
    request: SessPanelFilterStatusGroupReplaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SessPanelFilterStatusGroupReplaceRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/SessPanelFilterStatusGroupReplace',
      request,
      metadata || {},
      this.methodInfoSessPanelFilterStatusGroupReplace,
      callback);
  }

  methodInfoPanelList = new grpcWeb.AbstractClientBase.MethodInfo(
    PanelListRes,
    (request: PanelListRequest) => {
      return request.serializeBinary();
    },
    PanelListRes.deserializeBinary
  );

  panelList(
    request: PanelListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PanelListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Dictionary/PanelList',
      request,
      metadata || {},
      this.methodInfoPanelList,
      callback);
  }

}

