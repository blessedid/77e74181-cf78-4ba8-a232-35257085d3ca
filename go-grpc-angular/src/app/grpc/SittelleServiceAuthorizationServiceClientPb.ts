/**
 * @fileoverview gRPC-Web generated client stub for SittelleProtos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';

import {
  ConnectionRightsRequest,
  ConnectionRightsRes,
  ExternalConnectionCloseByAccountRequest,
  ExternalConnectionCloseByAccountRes} from './SittelleServiceAuthorization_pb';

export class AuthorizationClient {
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

  methodInfoConnectionRights = new grpcWeb.AbstractClientBase.MethodInfo(
    ConnectionRightsRes,
    (request: ConnectionRightsRequest) => {
      return request.serializeBinary();
    },
    ConnectionRightsRes.deserializeBinary
  );

  connectionRights(
    request: ConnectionRightsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ConnectionRightsRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Authorization/ConnectionRights',
      request,
      metadata || {},
      this.methodInfoConnectionRights,
      callback);
  }

  methodInfoConnectionCloseByAccount = new grpcWeb.AbstractClientBase.MethodInfo(
    ExternalConnectionCloseByAccountRes,
    (request: ExternalConnectionCloseByAccountRequest) => {
      return request.serializeBinary();
    },
    ExternalConnectionCloseByAccountRes.deserializeBinary
  );

  connectionCloseByAccount(
    request: ExternalConnectionCloseByAccountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ExternalConnectionCloseByAccountRes) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/SittelleProtos.Authorization/ConnectionCloseByAccount',
      request,
      metadata || {},
      this.methodInfoConnectionCloseByAccount,
      callback);
  }

}

