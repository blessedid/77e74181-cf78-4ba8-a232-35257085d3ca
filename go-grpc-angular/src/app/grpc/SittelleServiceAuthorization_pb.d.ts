import * as jspb from "google-protobuf"

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';

export class ConnectionRightsRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionRightsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionRightsRequest): ConnectionRightsRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectionRightsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionRightsRequest;
  static deserializeBinaryFromReader(message: ConnectionRightsRequest, reader: jspb.BinaryReader): ConnectionRightsRequest;
}

export namespace ConnectionRightsRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class ConnectionRightsRes extends jspb.Message {
  getAccount(): SittelleTypeTask_pb.Account | undefined;
  setAccount(value?: SittelleTypeTask_pb.Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  getTaskRights(): number;
  setTaskRights(value: number): void;

  getConfigRights(): number;
  setConfigRights(value: number): void;

  getAccountGroupListList(): Array<SittelleTypeTask_pb.AccountGroup>;
  setAccountGroupListList(value: Array<SittelleTypeTask_pb.AccountGroup>): void;
  clearAccountGroupListList(): void;
  addAccountGroupList(value?: SittelleTypeTask_pb.AccountGroup, index?: number): SittelleTypeTask_pb.AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionRightsRes.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionRightsRes): ConnectionRightsRes.AsObject;
  static serializeBinaryToWriter(message: ConnectionRightsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionRightsRes;
  static deserializeBinaryFromReader(message: ConnectionRightsRes, reader: jspb.BinaryReader): ConnectionRightsRes;
}

export namespace ConnectionRightsRes {
  export type AsObject = {
    account?: SittelleTypeTask_pb.Account.AsObject,
    taskRights: number,
    configRights: number,
    accountGroupListList: Array<SittelleTypeTask_pb.AccountGroup.AsObject>,
  }
}

export class ExternalConnectionCloseByAccountRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionCloseByAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionCloseByAccountRequest): ExternalConnectionCloseByAccountRequest.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionCloseByAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionCloseByAccountRequest;
  static deserializeBinaryFromReader(message: ExternalConnectionCloseByAccountRequest, reader: jspb.BinaryReader): ExternalConnectionCloseByAccountRequest;
}

export namespace ExternalConnectionCloseByAccountRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    accountInd: number,
  }
}

export class ExternalConnectionCloseByAccountRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalConnectionCloseByAccountRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalConnectionCloseByAccountRes): ExternalConnectionCloseByAccountRes.AsObject;
  static serializeBinaryToWriter(message: ExternalConnectionCloseByAccountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalConnectionCloseByAccountRes;
  static deserializeBinaryFromReader(message: ExternalConnectionCloseByAccountRes, reader: jspb.BinaryReader): ExternalConnectionCloseByAccountRes;
}

export namespace ExternalConnectionCloseByAccountRes {
  export type AsObject = {
  }
}

