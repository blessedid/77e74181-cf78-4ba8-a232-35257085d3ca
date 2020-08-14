/**
 * @fileoverview gRPC-Web generated client stub for SittelleProtos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';

import {
  ChartListRequest,
  ChartListRes,
  ChartMonObjectListStateRequest,
  ChartMonObjectListStateRes,
  ChartSeriesListRequest,
  ChartSeriesListRes,
  ChartValuesRequestRequest,
  ChartValuesRequestRes} from './SittelleServiceChart_pb';

export class ChartServiceClient {
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

  methodInfoChartList = new grpcWeb.AbstractClientBase.MethodInfo(
    ChartListRes,
    (request: ChartListRequest) => {
      return request.serializeBinary();
    },
    ChartListRes.deserializeBinary
  );

  chartList(
    request: ChartListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChartListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ChartService/ChartList',
      request,
      metadata || {},
      this.methodInfoChartList,
      callback);
  }

  methodInfoChartSeriesList = new grpcWeb.AbstractClientBase.MethodInfo(
    ChartSeriesListRes,
    (request: ChartSeriesListRequest) => {
      return request.serializeBinary();
    },
    ChartSeriesListRes.deserializeBinary
  );

  chartSeriesList(
    request: ChartSeriesListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChartSeriesListRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ChartService/ChartSeriesList',
      request,
      metadata || {},
      this.methodInfoChartSeriesList,
      callback);
  }

  methodInfoChartValuesRequest = new grpcWeb.AbstractClientBase.MethodInfo(
    ChartValuesRequestRes,
    (request: ChartValuesRequestRequest) => {
      return request.serializeBinary();
    },
    ChartValuesRequestRes.deserializeBinary
  );

  chartValuesRequest(
    request: ChartValuesRequestRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChartValuesRequestRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ChartService/ChartValuesRequest',
      request,
      metadata || {},
      this.methodInfoChartValuesRequest,
      callback);
  }

  methodInfoChartMonObjectListState = new grpcWeb.AbstractClientBase.MethodInfo(
    ChartMonObjectListStateRes,
    (request: ChartMonObjectListStateRequest) => {
      return request.serializeBinary();
    },
    ChartMonObjectListStateRes.deserializeBinary
  );

  chartMonObjectListState(
    request: ChartMonObjectListStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ChartMonObjectListStateRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.ChartService/ChartMonObjectListState',
      request,
      metadata || {},
      this.methodInfoChartMonObjectListState,
      callback);
  }

}

