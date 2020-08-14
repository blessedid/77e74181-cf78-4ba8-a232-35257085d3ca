/**
 * @fileoverview gRPC-Web generated client stub for notifier
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {Notification} from './notifier_pb';

export class NotifierClient {
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

  methodInfoPush = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: Notification) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  push(
    request: Notification,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/notifier.Notifier/Push',
      request,
      metadata || {},
      this.methodInfoPush,
      callback);
  }

  methodInfoEvents = new grpcWeb.AbstractClientBase.MethodInfo(
    Notification,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    Notification.deserializeBinary
  );

  events(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/notifier.Notifier/Events',
      request,
      metadata || {},
      this.methodInfoEvents);
  }

}

