import * as jspb from "google-protobuf"

import * as SittelleTypeDictionary_pb from './SittelleTypeDictionary_pb';
import * as SittelleTypeOffice_pb from './SittelleTypeOffice_pb';

export class PanelListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PanelListRequest): PanelListRequest.AsObject;
  static serializeBinaryToWriter(message: PanelListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelListRequest;
  static deserializeBinaryFromReader(message: PanelListRequest, reader: jspb.BinaryReader): PanelListRequest;
}

export namespace PanelListRequest {
  export type AsObject = {
  }
}

export class PanelListRes extends jspb.Message {
  getPanelListList(): Array<SittelleTypeDictionary_pb.AccountGroupPanel>;
  setPanelListList(value: Array<SittelleTypeDictionary_pb.AccountGroupPanel>): void;
  clearPanelListList(): void;
  addPanelList(value?: SittelleTypeDictionary_pb.AccountGroupPanel, index?: number): SittelleTypeDictionary_pb.AccountGroupPanel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelListRes.AsObject;
  static toObject(includeInstance: boolean, msg: PanelListRes): PanelListRes.AsObject;
  static serializeBinaryToWriter(message: PanelListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelListRes;
  static deserializeBinaryFromReader(message: PanelListRes, reader: jspb.BinaryReader): PanelListRes;
}

export namespace PanelListRes {
  export type AsObject = {
    panelListList: Array<SittelleTypeDictionary_pb.AccountGroupPanel.AsObject>,
  }
}

export class MonObjectEmployeeListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectEmployeeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectEmployeeListRequest): MonObjectEmployeeListRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectEmployeeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectEmployeeListRequest;
  static deserializeBinaryFromReader(message: MonObjectEmployeeListRequest, reader: jspb.BinaryReader): MonObjectEmployeeListRequest;
}

export namespace MonObjectEmployeeListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    monObjectInd: number,
  }
}

export class MonObjectEmployeeListRes extends jspb.Message {
  getEmployeeListList(): Array<SittelleTypeOffice_pb.Employee>;
  setEmployeeListList(value: Array<SittelleTypeOffice_pb.Employee>): void;
  clearEmployeeListList(): void;
  addEmployeeList(value?: SittelleTypeOffice_pb.Employee, index?: number): SittelleTypeOffice_pb.Employee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectEmployeeListRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectEmployeeListRes): MonObjectEmployeeListRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectEmployeeListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectEmployeeListRes;
  static deserializeBinaryFromReader(message: MonObjectEmployeeListRes, reader: jspb.BinaryReader): MonObjectEmployeeListRes;
}

export namespace MonObjectEmployeeListRes {
  export type AsObject = {
    employeeListList: Array<SittelleTypeOffice_pb.Employee.AsObject>,
  }
}

export class MonObjectContractorEmployeeListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectContractorEmployeeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectContractorEmployeeListRequest): MonObjectContractorEmployeeListRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectContractorEmployeeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectContractorEmployeeListRequest;
  static deserializeBinaryFromReader(message: MonObjectContractorEmployeeListRequest, reader: jspb.BinaryReader): MonObjectContractorEmployeeListRequest;
}

export namespace MonObjectContractorEmployeeListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    monObjectInd: number,
  }
}

export class MonObjectContractorEmployeeListRes extends jspb.Message {
  getSericeOrgaiztionListList(): Array<SittelleTypeOffice_pb.ServiceOrganization>;
  setSericeOrgaiztionListList(value: Array<SittelleTypeOffice_pb.ServiceOrganization>): void;
  clearSericeOrgaiztionListList(): void;
  addSericeOrgaiztionList(value?: SittelleTypeOffice_pb.ServiceOrganization, index?: number): SittelleTypeOffice_pb.ServiceOrganization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectContractorEmployeeListRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectContractorEmployeeListRes): MonObjectContractorEmployeeListRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectContractorEmployeeListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectContractorEmployeeListRes;
  static deserializeBinaryFromReader(message: MonObjectContractorEmployeeListRes, reader: jspb.BinaryReader): MonObjectContractorEmployeeListRes;
}

export namespace MonObjectContractorEmployeeListRes {
  export type AsObject = {
    sericeOrgaiztionListList: Array<SittelleTypeOffice_pb.ServiceOrganization.AsObject>,
  }
}

export class MonObjectContractorListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectContractorListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectContractorListRequest): MonObjectContractorListRequest.AsObject;
  static serializeBinaryToWriter(message: MonObjectContractorListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectContractorListRequest;
  static deserializeBinaryFromReader(message: MonObjectContractorListRequest, reader: jspb.BinaryReader): MonObjectContractorListRequest;
}

export namespace MonObjectContractorListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    monObjectInd: number,
  }
}

export class MonObjectContractorListRes extends jspb.Message {
  getCompanyListList(): Array<SittelleTypeOffice_pb.Company>;
  setCompanyListList(value: Array<SittelleTypeOffice_pb.Company>): void;
  clearCompanyListList(): void;
  addCompanyList(value?: SittelleTypeOffice_pb.Company, index?: number): SittelleTypeOffice_pb.Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectContractorListRes.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectContractorListRes): MonObjectContractorListRes.AsObject;
  static serializeBinaryToWriter(message: MonObjectContractorListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectContractorListRes;
  static deserializeBinaryFromReader(message: MonObjectContractorListRes, reader: jspb.BinaryReader): MonObjectContractorListRes;
}

export namespace MonObjectContractorListRes {
  export type AsObject = {
    companyListList: Array<SittelleTypeOffice_pb.Company.AsObject>,
  }
}

export class DictMonObjectInfoListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectInfoListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectInfoListRequest): DictMonObjectInfoListRequest.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectInfoListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectInfoListRequest;
  static deserializeBinaryFromReader(message: DictMonObjectInfoListRequest, reader: jspb.BinaryReader): DictMonObjectInfoListRequest;
}

export namespace DictMonObjectInfoListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class DictMonObjectInfoListRes extends jspb.Message {
  getMonObjectListList(): Array<SittelleTypeDictionary_pb.MonObjectInfo>;
  setMonObjectListList(value: Array<SittelleTypeDictionary_pb.MonObjectInfo>): void;
  clearMonObjectListList(): void;
  addMonObjectList(value?: SittelleTypeDictionary_pb.MonObjectInfo, index?: number): SittelleTypeDictionary_pb.MonObjectInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectInfoListRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectInfoListRes): DictMonObjectInfoListRes.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectInfoListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectInfoListRes;
  static deserializeBinaryFromReader(message: DictMonObjectInfoListRes, reader: jspb.BinaryReader): DictMonObjectInfoListRes;
}

export namespace DictMonObjectInfoListRes {
  export type AsObject = {
    monObjectListList: Array<SittelleTypeDictionary_pb.MonObjectInfo.AsObject>,
  }
}

export class DictMonObjectInfoByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectInfoByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectInfoByIndRequest): DictMonObjectInfoByIndRequest.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectInfoByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectInfoByIndRequest;
  static deserializeBinaryFromReader(message: DictMonObjectInfoByIndRequest, reader: jspb.BinaryReader): DictMonObjectInfoByIndRequest;
}

export namespace DictMonObjectInfoByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    monObjectInd: number,
  }
}

export class DictMonObjectInfoByIndRes extends jspb.Message {
  getMonObject(): SittelleTypeDictionary_pb.MonObjectInfo | undefined;
  setMonObject(value?: SittelleTypeDictionary_pb.MonObjectInfo): void;
  hasMonObject(): boolean;
  clearMonObject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectInfoByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectInfoByIndRes): DictMonObjectInfoByIndRes.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectInfoByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectInfoByIndRes;
  static deserializeBinaryFromReader(message: DictMonObjectInfoByIndRes, reader: jspb.BinaryReader): DictMonObjectInfoByIndRes;
}

export namespace DictMonObjectInfoByIndRes {
  export type AsObject = {
    monObject?: SittelleTypeDictionary_pb.MonObjectInfo.AsObject,
  }
}

export class DictMonObjectListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectListRequest): DictMonObjectListRequest.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectListRequest;
  static deserializeBinaryFromReader(message: DictMonObjectListRequest, reader: jspb.BinaryReader): DictMonObjectListRequest;
}

export namespace DictMonObjectListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class DictMonObjectListRes extends jspb.Message {
  getMonObjectListList(): Array<SittelleTypeDictionary_pb.MonObjectShort>;
  setMonObjectListList(value: Array<SittelleTypeDictionary_pb.MonObjectShort>): void;
  clearMonObjectListList(): void;
  addMonObjectList(value?: SittelleTypeDictionary_pb.MonObjectShort, index?: number): SittelleTypeDictionary_pb.MonObjectShort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectListRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectListRes): DictMonObjectListRes.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectListRes;
  static deserializeBinaryFromReader(message: DictMonObjectListRes, reader: jspb.BinaryReader): DictMonObjectListRes;
}

export namespace DictMonObjectListRes {
  export type AsObject = {
    monObjectListList: Array<SittelleTypeDictionary_pb.MonObjectShort.AsObject>,
  }
}

export class DictMonObjectByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectByIndRequest): DictMonObjectByIndRequest.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectByIndRequest;
  static deserializeBinaryFromReader(message: DictMonObjectByIndRequest, reader: jspb.BinaryReader): DictMonObjectByIndRequest;
}

export namespace DictMonObjectByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    monObjectInd: number,
  }
}

export class DictMonObjectByIndRes extends jspb.Message {
  getMonObject(): SittelleTypeDictionary_pb.MonObjectShort | undefined;
  setMonObject(value?: SittelleTypeDictionary_pb.MonObjectShort): void;
  hasMonObject(): boolean;
  clearMonObject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictMonObjectByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictMonObjectByIndRes): DictMonObjectByIndRes.AsObject;
  static serializeBinaryToWriter(message: DictMonObjectByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictMonObjectByIndRes;
  static deserializeBinaryFromReader(message: DictMonObjectByIndRes, reader: jspb.BinaryReader): DictMonObjectByIndRes;
}

export namespace DictMonObjectByIndRes {
  export type AsObject = {
    monObject?: SittelleTypeDictionary_pb.MonObjectShort.AsObject,
  }
}

export class DictTaskTypeListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictTaskTypeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictTaskTypeListRequest): DictTaskTypeListRequest.AsObject;
  static serializeBinaryToWriter(message: DictTaskTypeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictTaskTypeListRequest;
  static deserializeBinaryFromReader(message: DictTaskTypeListRequest, reader: jspb.BinaryReader): DictTaskTypeListRequest;
}

export namespace DictTaskTypeListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class DictTaskTypeListRes extends jspb.Message {
  getTaskTypeListList(): Array<SittelleTypeDictionary_pb.DictTaskTypeSett>;
  setTaskTypeListList(value: Array<SittelleTypeDictionary_pb.DictTaskTypeSett>): void;
  clearTaskTypeListList(): void;
  addTaskTypeList(value?: SittelleTypeDictionary_pb.DictTaskTypeSett, index?: number): SittelleTypeDictionary_pb.DictTaskTypeSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictTaskTypeListRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictTaskTypeListRes): DictTaskTypeListRes.AsObject;
  static serializeBinaryToWriter(message: DictTaskTypeListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictTaskTypeListRes;
  static deserializeBinaryFromReader(message: DictTaskTypeListRes, reader: jspb.BinaryReader): DictTaskTypeListRes;
}

export namespace DictTaskTypeListRes {
  export type AsObject = {
    taskTypeListList: Array<SittelleTypeDictionary_pb.DictTaskTypeSett.AsObject>,
  }
}

export class DictStatusListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatusListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatusListRequest): DictStatusListRequest.AsObject;
  static serializeBinaryToWriter(message: DictStatusListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatusListRequest;
  static deserializeBinaryFromReader(message: DictStatusListRequest, reader: jspb.BinaryReader): DictStatusListRequest;
}

export namespace DictStatusListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class DictStatusListRes extends jspb.Message {
  getStatusListList(): Array<SittelleTypeDictionary_pb.DictStatus>;
  setStatusListList(value: Array<SittelleTypeDictionary_pb.DictStatus>): void;
  clearStatusListList(): void;
  addStatusList(value?: SittelleTypeDictionary_pb.DictStatus, index?: number): SittelleTypeDictionary_pb.DictStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatusListRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatusListRes): DictStatusListRes.AsObject;
  static serializeBinaryToWriter(message: DictStatusListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatusListRes;
  static deserializeBinaryFromReader(message: DictStatusListRes, reader: jspb.BinaryReader): DictStatusListRes;
}

export namespace DictStatusListRes {
  export type AsObject = {
    statusListList: Array<SittelleTypeDictionary_pb.DictStatus.AsObject>,
  }
}

export class DictStatusByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatusByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatusByIndRequest): DictStatusByIndRequest.AsObject;
  static serializeBinaryToWriter(message: DictStatusByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatusByIndRequest;
  static deserializeBinaryFromReader(message: DictStatusByIndRequest, reader: jspb.BinaryReader): DictStatusByIndRequest;
}

export namespace DictStatusByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    statusInd: number,
  }
}

export class DictStatusByIndRes extends jspb.Message {
  getTaskStatus(): SittelleTypeDictionary_pb.DictStatus | undefined;
  setTaskStatus(value?: SittelleTypeDictionary_pb.DictStatus): void;
  hasTaskStatus(): boolean;
  clearTaskStatus(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatusByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatusByIndRes): DictStatusByIndRes.AsObject;
  static serializeBinaryToWriter(message: DictStatusByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatusByIndRes;
  static deserializeBinaryFromReader(message: DictStatusByIndRes, reader: jspb.BinaryReader): DictStatusByIndRes;
}

export namespace DictStatusByIndRes {
  export type AsObject = {
    taskStatus?: SittelleTypeDictionary_pb.DictStatus.AsObject,
  }
}

export class DictStatusGroupListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatusGroupListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatusGroupListRequest): DictStatusGroupListRequest.AsObject;
  static serializeBinaryToWriter(message: DictStatusGroupListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatusGroupListRequest;
  static deserializeBinaryFromReader(message: DictStatusGroupListRequest, reader: jspb.BinaryReader): DictStatusGroupListRequest;
}

export namespace DictStatusGroupListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class DictStatusGroupListRes extends jspb.Message {
  getStatusGroupListList(): Array<SittelleTypeDictionary_pb.DictStatusGroup>;
  setStatusGroupListList(value: Array<SittelleTypeDictionary_pb.DictStatusGroup>): void;
  clearStatusGroupListList(): void;
  addStatusGroupList(value?: SittelleTypeDictionary_pb.DictStatusGroup, index?: number): SittelleTypeDictionary_pb.DictStatusGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatusGroupListRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatusGroupListRes): DictStatusGroupListRes.AsObject;
  static serializeBinaryToWriter(message: DictStatusGroupListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatusGroupListRes;
  static deserializeBinaryFromReader(message: DictStatusGroupListRes, reader: jspb.BinaryReader): DictStatusGroupListRes;
}

export namespace DictStatusGroupListRes {
  export type AsObject = {
    statusGroupListList: Array<SittelleTypeDictionary_pb.DictStatusGroup.AsObject>,
  }
}

export class DictStateCommonListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateCommonListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateCommonListRequest): DictStateCommonListRequest.AsObject;
  static serializeBinaryToWriter(message: DictStateCommonListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateCommonListRequest;
  static deserializeBinaryFromReader(message: DictStateCommonListRequest, reader: jspb.BinaryReader): DictStateCommonListRequest;
}

export namespace DictStateCommonListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class DictStateCommonListRes extends jspb.Message {
  getStateBitListList(): Array<SittelleTypeDictionary_pb.StateBit>;
  setStateBitListList(value: Array<SittelleTypeDictionary_pb.StateBit>): void;
  clearStateBitListList(): void;
  addStateBitList(value?: SittelleTypeDictionary_pb.StateBit, index?: number): SittelleTypeDictionary_pb.StateBit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateCommonListRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateCommonListRes): DictStateCommonListRes.AsObject;
  static serializeBinaryToWriter(message: DictStateCommonListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateCommonListRes;
  static deserializeBinaryFromReader(message: DictStateCommonListRes, reader: jspb.BinaryReader): DictStateCommonListRes;
}

export namespace DictStateCommonListRes {
  export type AsObject = {
    stateBitListList: Array<SittelleTypeDictionary_pb.StateBit.AsObject>,
  }
}

export class DictStateCommonByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getBitNumber(): number;
  setBitNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateCommonByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateCommonByIndRequest): DictStateCommonByIndRequest.AsObject;
  static serializeBinaryToWriter(message: DictStateCommonByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateCommonByIndRequest;
  static deserializeBinaryFromReader(message: DictStateCommonByIndRequest, reader: jspb.BinaryReader): DictStateCommonByIndRequest;
}

export namespace DictStateCommonByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    bitNumber: number,
  }
}

export class DictStateCommonByIndRes extends jspb.Message {
  getStateBit(): SittelleTypeDictionary_pb.StateBit | undefined;
  setStateBit(value?: SittelleTypeDictionary_pb.StateBit): void;
  hasStateBit(): boolean;
  clearStateBit(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateCommonByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateCommonByIndRes): DictStateCommonByIndRes.AsObject;
  static serializeBinaryToWriter(message: DictStateCommonByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateCommonByIndRes;
  static deserializeBinaryFromReader(message: DictStateCommonByIndRes, reader: jspb.BinaryReader): DictStateCommonByIndRes;
}

export namespace DictStateCommonByIndRes {
  export type AsObject = {
    stateBit?: SittelleTypeDictionary_pb.StateBit.AsObject,
  }
}

export class DictStateAccountListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateAccountListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateAccountListRequest): DictStateAccountListRequest.AsObject;
  static serializeBinaryToWriter(message: DictStateAccountListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateAccountListRequest;
  static deserializeBinaryFromReader(message: DictStateAccountListRequest, reader: jspb.BinaryReader): DictStateAccountListRequest;
}

export namespace DictStateAccountListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class DictStateAccountListRes extends jspb.Message {
  getStateBitListList(): Array<SittelleTypeDictionary_pb.StateBit>;
  setStateBitListList(value: Array<SittelleTypeDictionary_pb.StateBit>): void;
  clearStateBitListList(): void;
  addStateBitList(value?: SittelleTypeDictionary_pb.StateBit, index?: number): SittelleTypeDictionary_pb.StateBit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateAccountListRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateAccountListRes): DictStateAccountListRes.AsObject;
  static serializeBinaryToWriter(message: DictStateAccountListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateAccountListRes;
  static deserializeBinaryFromReader(message: DictStateAccountListRes, reader: jspb.BinaryReader): DictStateAccountListRes;
}

export namespace DictStateAccountListRes {
  export type AsObject = {
    stateBitListList: Array<SittelleTypeDictionary_pb.StateBit.AsObject>,
  }
}

export class DictStateAccountByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getBitNumber(): number;
  setBitNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateAccountByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateAccountByIndRequest): DictStateAccountByIndRequest.AsObject;
  static serializeBinaryToWriter(message: DictStateAccountByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateAccountByIndRequest;
  static deserializeBinaryFromReader(message: DictStateAccountByIndRequest, reader: jspb.BinaryReader): DictStateAccountByIndRequest;
}

export namespace DictStateAccountByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    bitNumber: number,
  }
}

export class DictStateAccountByIndRes extends jspb.Message {
  getStateBit(): SittelleTypeDictionary_pb.StateBit | undefined;
  setStateBit(value?: SittelleTypeDictionary_pb.StateBit): void;
  hasStateBit(): boolean;
  clearStateBit(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStateAccountByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: DictStateAccountByIndRes): DictStateAccountByIndRes.AsObject;
  static serializeBinaryToWriter(message: DictStateAccountByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStateAccountByIndRes;
  static deserializeBinaryFromReader(message: DictStateAccountByIndRes, reader: jspb.BinaryReader): DictStateAccountByIndRes;
}

export namespace DictStateAccountByIndRes {
  export type AsObject = {
    stateBit?: SittelleTypeDictionary_pb.StateBit.AsObject,
  }
}

export class StatsAggregateInfoListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsAggregateInfoListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatsAggregateInfoListRequest): StatsAggregateInfoListRequest.AsObject;
  static serializeBinaryToWriter(message: StatsAggregateInfoListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsAggregateInfoListRequest;
  static deserializeBinaryFromReader(message: StatsAggregateInfoListRequest, reader: jspb.BinaryReader): StatsAggregateInfoListRequest;
}

export namespace StatsAggregateInfoListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class StatsAggregateInfoListRes extends jspb.Message {
  getListList(): Array<SittelleTypeDictionary_pb.StatsAggregateInfo>;
  setListList(value: Array<SittelleTypeDictionary_pb.StatsAggregateInfo>): void;
  clearListList(): void;
  addList(value?: SittelleTypeDictionary_pb.StatsAggregateInfo, index?: number): SittelleTypeDictionary_pb.StatsAggregateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsAggregateInfoListRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatsAggregateInfoListRes): StatsAggregateInfoListRes.AsObject;
  static serializeBinaryToWriter(message: StatsAggregateInfoListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsAggregateInfoListRes;
  static deserializeBinaryFromReader(message: StatsAggregateInfoListRes, reader: jspb.BinaryReader): StatsAggregateInfoListRes;
}

export namespace StatsAggregateInfoListRes {
  export type AsObject = {
    listList: Array<SittelleTypeDictionary_pb.StatsAggregateInfo.AsObject>,
  }
}

export class StatsAggregateInfoByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getInd(): number;
  setInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsAggregateInfoByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatsAggregateInfoByIndRequest): StatsAggregateInfoByIndRequest.AsObject;
  static serializeBinaryToWriter(message: StatsAggregateInfoByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsAggregateInfoByIndRequest;
  static deserializeBinaryFromReader(message: StatsAggregateInfoByIndRequest, reader: jspb.BinaryReader): StatsAggregateInfoByIndRequest;
}

export namespace StatsAggregateInfoByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    ind: number,
  }
}

export class StatsAggregateInfoByIndRes extends jspb.Message {
  getItem(): SittelleTypeDictionary_pb.StatsAggregateInfo | undefined;
  setItem(value?: SittelleTypeDictionary_pb.StatsAggregateInfo): void;
  hasItem(): boolean;
  clearItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsAggregateInfoByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: StatsAggregateInfoByIndRes): StatsAggregateInfoByIndRes.AsObject;
  static serializeBinaryToWriter(message: StatsAggregateInfoByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsAggregateInfoByIndRes;
  static deserializeBinaryFromReader(message: StatsAggregateInfoByIndRes, reader: jspb.BinaryReader): StatsAggregateInfoByIndRes;
}

export namespace StatsAggregateInfoByIndRes {
  export type AsObject = {
    item?: SittelleTypeDictionary_pb.StatsAggregateInfo.AsObject,
  }
}

export class ManualInfoListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualInfoListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualInfoListRequest): ManualInfoListRequest.AsObject;
  static serializeBinaryToWriter(message: ManualInfoListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualInfoListRequest;
  static deserializeBinaryFromReader(message: ManualInfoListRequest, reader: jspb.BinaryReader): ManualInfoListRequest;
}

export namespace ManualInfoListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class ManualInfoListRes extends jspb.Message {
  getListList(): Array<SittelleTypeDictionary_pb.ManualInfo>;
  setListList(value: Array<SittelleTypeDictionary_pb.ManualInfo>): void;
  clearListList(): void;
  addList(value?: SittelleTypeDictionary_pb.ManualInfo, index?: number): SittelleTypeDictionary_pb.ManualInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualInfoListRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualInfoListRes): ManualInfoListRes.AsObject;
  static serializeBinaryToWriter(message: ManualInfoListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualInfoListRes;
  static deserializeBinaryFromReader(message: ManualInfoListRes, reader: jspb.BinaryReader): ManualInfoListRes;
}

export namespace ManualInfoListRes {
  export type AsObject = {
    listList: Array<SittelleTypeDictionary_pb.ManualInfo.AsObject>,
  }
}

export class ManualInfoByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getInd(): number;
  setInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualInfoByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManualInfoByIndRequest): ManualInfoByIndRequest.AsObject;
  static serializeBinaryToWriter(message: ManualInfoByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualInfoByIndRequest;
  static deserializeBinaryFromReader(message: ManualInfoByIndRequest, reader: jspb.BinaryReader): ManualInfoByIndRequest;
}

export namespace ManualInfoByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    ind: number,
  }
}

export class ManualInfoByIndRes extends jspb.Message {
  getItem(): SittelleTypeDictionary_pb.ManualInfo | undefined;
  setItem(value?: SittelleTypeDictionary_pb.ManualInfo): void;
  hasItem(): boolean;
  clearItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualInfoByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: ManualInfoByIndRes): ManualInfoByIndRes.AsObject;
  static serializeBinaryToWriter(message: ManualInfoByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualInfoByIndRes;
  static deserializeBinaryFromReader(message: ManualInfoByIndRes, reader: jspb.BinaryReader): ManualInfoByIndRes;
}

export namespace ManualInfoByIndRes {
  export type AsObject = {
    item?: SittelleTypeDictionary_pb.ManualInfo.AsObject,
  }
}

export class RoleInfoListRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleInfoListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleInfoListRequest): RoleInfoListRequest.AsObject;
  static serializeBinaryToWriter(message: RoleInfoListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleInfoListRequest;
  static deserializeBinaryFromReader(message: RoleInfoListRequest, reader: jspb.BinaryReader): RoleInfoListRequest;
}

export namespace RoleInfoListRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
  }
}

export class RoleInfoListRes extends jspb.Message {
  getListList(): Array<SittelleTypeDictionary_pb.RoleInfo>;
  setListList(value: Array<SittelleTypeDictionary_pb.RoleInfo>): void;
  clearListList(): void;
  addList(value?: SittelleTypeDictionary_pb.RoleInfo, index?: number): SittelleTypeDictionary_pb.RoleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleInfoListRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleInfoListRes): RoleInfoListRes.AsObject;
  static serializeBinaryToWriter(message: RoleInfoListRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleInfoListRes;
  static deserializeBinaryFromReader(message: RoleInfoListRes, reader: jspb.BinaryReader): RoleInfoListRes;
}

export namespace RoleInfoListRes {
  export type AsObject = {
    listList: Array<SittelleTypeDictionary_pb.RoleInfo.AsObject>,
  }
}

export class RoleInfoByIndRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getInd(): number;
  setInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleInfoByIndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RoleInfoByIndRequest): RoleInfoByIndRequest.AsObject;
  static serializeBinaryToWriter(message: RoleInfoByIndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleInfoByIndRequest;
  static deserializeBinaryFromReader(message: RoleInfoByIndRequest, reader: jspb.BinaryReader): RoleInfoByIndRequest;
}

export namespace RoleInfoByIndRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    ind: number,
  }
}

export class RoleInfoByIndRes extends jspb.Message {
  getItem(): SittelleTypeDictionary_pb.RoleInfo | undefined;
  setItem(value?: SittelleTypeDictionary_pb.RoleInfo): void;
  hasItem(): boolean;
  clearItem(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleInfoByIndRes.AsObject;
  static toObject(includeInstance: boolean, msg: RoleInfoByIndRes): RoleInfoByIndRes.AsObject;
  static serializeBinaryToWriter(message: RoleInfoByIndRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleInfoByIndRes;
  static deserializeBinaryFromReader(message: RoleInfoByIndRes, reader: jspb.BinaryReader): RoleInfoByIndRes;
}

export namespace RoleInfoByIndRes {
  export type AsObject = {
    item?: SittelleTypeDictionary_pb.RoleInfo.AsObject,
  }
}

export class SessPanelFilterStatusGetRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusGetRequest): SessPanelFilterStatusGetRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusGetRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusGetRequest, reader: jspb.BinaryReader): SessPanelFilterStatusGetRequest;
}

export namespace SessPanelFilterStatusGetRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class SessPanelFilterStatusGetRes extends jspb.Message {
  getFilter(): SittelleTypeDictionary_pb.PanelFilterStatus | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterStatus): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusGetRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusGetRes): SessPanelFilterStatusGetRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusGetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusGetRes;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusGetRes, reader: jspb.BinaryReader): SessPanelFilterStatusGetRes;
}

export namespace SessPanelFilterStatusGetRes {
  export type AsObject = {
    filter?: SittelleTypeDictionary_pb.PanelFilterStatus.AsObject,
  }
}

export class SessPanelFilterStatusReplaceRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  getFilter(): SittelleTypeDictionary_pb.PanelFilterStatus | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterStatus): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusReplaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusReplaceRequest): SessPanelFilterStatusReplaceRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusReplaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusReplaceRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusReplaceRequest, reader: jspb.BinaryReader): SessPanelFilterStatusReplaceRequest;
}

export namespace SessPanelFilterStatusReplaceRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
    filter?: SittelleTypeDictionary_pb.PanelFilterStatus.AsObject,
  }
}

export class SessPanelFilterStatusReplaceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusReplaceRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusReplaceRes): SessPanelFilterStatusReplaceRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusReplaceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusReplaceRes;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusReplaceRes, reader: jspb.BinaryReader): SessPanelFilterStatusReplaceRes;
}

export namespace SessPanelFilterStatusReplaceRes {
  export type AsObject = {
  }
}

export class SessPanelFilterStatusGroupGetRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusGroupGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusGroupGetRequest): SessPanelFilterStatusGroupGetRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusGroupGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusGroupGetRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusGroupGetRequest, reader: jspb.BinaryReader): SessPanelFilterStatusGroupGetRequest;
}

export namespace SessPanelFilterStatusGroupGetRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class SessPanelFilterStatusGroupGetRes extends jspb.Message {
  getFilter(): SittelleTypeDictionary_pb.PanelFilterStatusGroup | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterStatusGroup): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusGroupGetRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusGroupGetRes): SessPanelFilterStatusGroupGetRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusGroupGetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusGroupGetRes;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusGroupGetRes, reader: jspb.BinaryReader): SessPanelFilterStatusGroupGetRes;
}

export namespace SessPanelFilterStatusGroupGetRes {
  export type AsObject = {
    filter?: SittelleTypeDictionary_pb.PanelFilterStatusGroup.AsObject,
  }
}

export class SessPanelFilterStatusGroupReplaceRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  getFilter(): SittelleTypeDictionary_pb.PanelFilterStatusGroup | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterStatusGroup): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusGroupReplaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusGroupReplaceRequest): SessPanelFilterStatusGroupReplaceRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusGroupReplaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusGroupReplaceRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusGroupReplaceRequest, reader: jspb.BinaryReader): SessPanelFilterStatusGroupReplaceRequest;
}

export namespace SessPanelFilterStatusGroupReplaceRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
    filter?: SittelleTypeDictionary_pb.PanelFilterStatusGroup.AsObject,
  }
}

export class SessPanelFilterStatusGroupReplaceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStatusGroupReplaceRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStatusGroupReplaceRes): SessPanelFilterStatusGroupReplaceRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStatusGroupReplaceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStatusGroupReplaceRes;
  static deserializeBinaryFromReader(message: SessPanelFilterStatusGroupReplaceRes, reader: jspb.BinaryReader): SessPanelFilterStatusGroupReplaceRes;
}

export namespace SessPanelFilterStatusGroupReplaceRes {
  export type AsObject = {
  }
}

export class SessPanelFilterStateGetRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStateGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStateGetRequest): SessPanelFilterStateGetRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStateGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStateGetRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterStateGetRequest, reader: jspb.BinaryReader): SessPanelFilterStateGetRequest;
}

export namespace SessPanelFilterStateGetRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class SessPanelFilterStateGetRes extends jspb.Message {
  getFilter(): SittelleTypeDictionary_pb.PanelFilterState | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterState): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStateGetRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStateGetRes): SessPanelFilterStateGetRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStateGetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStateGetRes;
  static deserializeBinaryFromReader(message: SessPanelFilterStateGetRes, reader: jspb.BinaryReader): SessPanelFilterStateGetRes;
}

export namespace SessPanelFilterStateGetRes {
  export type AsObject = {
    filter?: SittelleTypeDictionary_pb.PanelFilterState.AsObject,
  }
}

export class SessPanelFilterStateReplaceRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  getFilter(): SittelleTypeDictionary_pb.PanelFilterState | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterState): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStateReplaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStateReplaceRequest): SessPanelFilterStateReplaceRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStateReplaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStateReplaceRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterStateReplaceRequest, reader: jspb.BinaryReader): SessPanelFilterStateReplaceRequest;
}

export namespace SessPanelFilterStateReplaceRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
    filter?: SittelleTypeDictionary_pb.PanelFilterState.AsObject,
  }
}

export class SessPanelFilterStateReplaceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterStateReplaceRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterStateReplaceRes): SessPanelFilterStateReplaceRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterStateReplaceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterStateReplaceRes;
  static deserializeBinaryFromReader(message: SessPanelFilterStateReplaceRes, reader: jspb.BinaryReader): SessPanelFilterStateReplaceRes;
}

export namespace SessPanelFilterStateReplaceRes {
  export type AsObject = {
  }
}

export class SessPanelFilterMonObjectGetRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterMonObjectGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterMonObjectGetRequest): SessPanelFilterMonObjectGetRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterMonObjectGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterMonObjectGetRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterMonObjectGetRequest, reader: jspb.BinaryReader): SessPanelFilterMonObjectGetRequest;
}

export namespace SessPanelFilterMonObjectGetRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
  }
}

export class SessPanelFilterMonObjectGetRes extends jspb.Message {
  getFilter(): SittelleTypeDictionary_pb.PanelFilterMonObject | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterMonObject): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterMonObjectGetRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterMonObjectGetRes): SessPanelFilterMonObjectGetRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterMonObjectGetRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterMonObjectGetRes;
  static deserializeBinaryFromReader(message: SessPanelFilterMonObjectGetRes, reader: jspb.BinaryReader): SessPanelFilterMonObjectGetRes;
}

export namespace SessPanelFilterMonObjectGetRes {
  export type AsObject = {
    filter?: SittelleTypeDictionary_pb.PanelFilterMonObject.AsObject,
  }
}

export class SessPanelFilterMonObjectReplaceRequest extends jspb.Message {
  getSessId(): string;
  setSessId(value: string): void;

  getConnectionInd(): number;
  setConnectionInd(value: number): void;

  getPanelInd(): number;
  setPanelInd(value: number): void;

  getFilter(): SittelleTypeDictionary_pb.PanelFilterMonObject | undefined;
  setFilter(value?: SittelleTypeDictionary_pb.PanelFilterMonObject): void;
  hasFilter(): boolean;
  clearFilter(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterMonObjectReplaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterMonObjectReplaceRequest): SessPanelFilterMonObjectReplaceRequest.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterMonObjectReplaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterMonObjectReplaceRequest;
  static deserializeBinaryFromReader(message: SessPanelFilterMonObjectReplaceRequest, reader: jspb.BinaryReader): SessPanelFilterMonObjectReplaceRequest;
}

export namespace SessPanelFilterMonObjectReplaceRequest {
  export type AsObject = {
    sessId: string,
    connectionInd: number,
    panelInd: number,
    filter?: SittelleTypeDictionary_pb.PanelFilterMonObject.AsObject,
  }
}

export class SessPanelFilterMonObjectReplaceRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessPanelFilterMonObjectReplaceRes.AsObject;
  static toObject(includeInstance: boolean, msg: SessPanelFilterMonObjectReplaceRes): SessPanelFilterMonObjectReplaceRes.AsObject;
  static serializeBinaryToWriter(message: SessPanelFilterMonObjectReplaceRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessPanelFilterMonObjectReplaceRes;
  static deserializeBinaryFromReader(message: SessPanelFilterMonObjectReplaceRes, reader: jspb.BinaryReader): SessPanelFilterMonObjectReplaceRes;
}

export namespace SessPanelFilterMonObjectReplaceRes {
  export type AsObject = {
  }
}

