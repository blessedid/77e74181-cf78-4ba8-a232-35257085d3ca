/**
 * @fileoverview gRPC-Web generated client stub for SittelleProtos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as SittelleTypeReport_pb from './SittelleTypeReport_pb';
import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';

import {
  GeneratedReportRequest,
  GeneratedReportRes,
  ReportListRequest,
  ReportListRes,
  ReportParamsRequest,
  ReportParamsRes} from './SittelleServiceReport_pb';

export class ReportClient {
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

  methodInfoGetReportList = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportListRes,
    (request: ReportListRequest) => {
      return request.serializeBinary();
    },
    ReportListRes.deserializeBinary
  );

  getReportList(
    request: ReportListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Report/GetReportList',
      request,
      metadata || {},
      this.methodInfoGetReportList,
      callback);
  }

  methodInfoGetReportParams = new grpcWeb.AbstractClientBase.MethodInfo(
    ReportParamsRes,
    (request: ReportParamsRequest) => {
      return request.serializeBinary();
    },
    ReportParamsRes.deserializeBinary
  );

  getReportParams(
    request: ReportParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReportParamsRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Report/GetReportParams',
      request,
      metadata || {},
      this.methodInfoGetReportParams,
      callback);
  }

  methodInfoGetGeneratedReport = new grpcWeb.AbstractClientBase.MethodInfo(
    GeneratedReportRes,
    (request: GeneratedReportRequest) => {
      return request.serializeBinary();
    },
    GeneratedReportRes.deserializeBinary
  );

  getGeneratedReport(
    request: GeneratedReportRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GeneratedReportRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Report/GetGeneratedReport',
      request,
      metadata || {},
      this.methodInfoGetGeneratedReport,
      callback);
  }

}

