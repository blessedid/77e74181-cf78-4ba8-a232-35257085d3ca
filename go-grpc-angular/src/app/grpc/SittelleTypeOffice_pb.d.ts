import * as jspb from "google-protobuf"

import * as SittelleTypeTask_pb from './SittelleTypeTask_pb';

export class Employee extends jspb.Message {
  getPosition(): string;
  setPosition(value: string): void;

  getOfficePhone(): string;
  setOfficePhone(value: string): void;

  getCompanyInd(): number;
  setCompanyInd(value: number): void;

  getPersonValue(): SittelleTypeTask_pb.Person | undefined;
  setPersonValue(value?: SittelleTypeTask_pb.Person): void;
  hasPersonValue(): boolean;
  clearPersonValue(): void;

  getAsContact(): boolean;
  setAsContact(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Employee.AsObject;
  static toObject(includeInstance: boolean, msg: Employee): Employee.AsObject;
  static serializeBinaryToWriter(message: Employee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Employee;
  static deserializeBinaryFromReader(message: Employee, reader: jspb.BinaryReader): Employee;
}

export namespace Employee {
  export type AsObject = {
    position: string,
    officePhone: string,
    companyInd: number,
    personValue?: SittelleTypeTask_pb.Person.AsObject,
    asContact: boolean,
  }
}

export class Company extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    ind: number,
    caption: string,
    address: string,
    phone: string,
    email: string,
  }
}

export class Department extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getId(): string;
  setId(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getParentId(): string;
  setParentId(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getAdditionalParamListList(): Array<SittelleTypeTask_pb.AdditionalParam>;
  setAdditionalParamListList(value: Array<SittelleTypeTask_pb.AdditionalParam>): void;
  clearAdditionalParamListList(): void;
  addAdditionalParamList(value?: SittelleTypeTask_pb.AdditionalParam, index?: number): SittelleTypeTask_pb.AdditionalParam;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Department.AsObject;
  static toObject(includeInstance: boolean, msg: Department): Department.AsObject;
  static serializeBinaryToWriter(message: Department, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Department;
  static deserializeBinaryFromReader(message: Department, reader: jspb.BinaryReader): Department;
}

export namespace Department {
  export type AsObject = {
    ind: number,
    id: string,
    active: boolean,
    parentId: string,
    caption: string,
    priority: number,
    monObjectInd: number,
    additionalParamListList: Array<SittelleTypeTask_pb.AdditionalParam.AsObject>,
  }
}

export class MonObjectSystem extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectSystem.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectSystem): MonObjectSystem.AsObject;
  static serializeBinaryToWriter(message: MonObjectSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectSystem;
  static deserializeBinaryFromReader(message: MonObjectSystem, reader: jspb.BinaryReader): MonObjectSystem;
}

export namespace MonObjectSystem {
  export type AsObject = {
    ind: number,
    caption: string,
  }
}

export class Contract extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getNumber(): string;
  setNumber(value: string): void;

  getDateAssign(): number;
  setDateAssign(value: number): void;

  getDateValdate(): number;
  setDateValdate(value: number): void;

  getDateClose(): number;
  setDateClose(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    ind: number,
    number: string,
    dateAssign: number,
    dateValdate: number,
    dateClose: number,
  }
}

export class ServiceOrganization extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCompanyValue(): Company | undefined;
  setCompanyValue(value?: Company): void;
  hasCompanyValue(): boolean;
  clearCompanyValue(): void;

  getContractValue(): Contract | undefined;
  setContractValue(value?: Contract): void;
  hasContractValue(): boolean;
  clearContractValue(): void;

  getMonObjectSystem(): MonObjectSystem | undefined;
  setMonObjectSystem(value?: MonObjectSystem): void;
  hasMonObjectSystem(): boolean;
  clearMonObjectSystem(): void;

  getEmployeeListList(): Array<Employee>;
  setEmployeeListList(value: Array<Employee>): void;
  clearEmployeeListList(): void;
  addEmployeeList(value?: Employee, index?: number): Employee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceOrganization): ServiceOrganization.AsObject;
  static serializeBinaryToWriter(message: ServiceOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceOrganization;
  static deserializeBinaryFromReader(message: ServiceOrganization, reader: jspb.BinaryReader): ServiceOrganization;
}

export namespace ServiceOrganization {
  export type AsObject = {
    ind: number,
    companyValue?: Company.AsObject,
    contractValue?: Contract.AsObject,
    monObjectSystem?: MonObjectSystem.AsObject,
    employeeListList: Array<Employee.AsObject>,
  }
}

