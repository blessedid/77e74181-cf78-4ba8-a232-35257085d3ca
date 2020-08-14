import * as jspb from "google-protobuf"

export class ManualValue extends jspb.Message {
  getParamInd(): number;
  setParamInd(value: number): void;

  getValue(): string;
  setValue(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualValue.AsObject;
  static toObject(includeInstance: boolean, msg: ManualValue): ManualValue.AsObject;
  static serializeBinaryToWriter(message: ManualValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualValue;
  static deserializeBinaryFromReader(message: ManualValue, reader: jspb.BinaryReader): ManualValue;
}

export namespace ManualValue {
  export type AsObject = {
    paramInd: number,
    value: string,
    caption: string,
  }
}

export class ManualListValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  getDescr(): string;
  setDescr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualListValue.AsObject;
  static toObject(includeInstance: boolean, msg: ManualListValue): ManualListValue.AsObject;
  static serializeBinaryToWriter(message: ManualListValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualListValue;
  static deserializeBinaryFromReader(message: ManualListValue, reader: jspb.BinaryReader): ManualListValue;
}

export namespace ManualListValue {
  export type AsObject = {
    value: string,
    caption: string,
    descr: string,
  }
}

export class ManualDependentValue extends jspb.Message {
  getParentIndexListList(): Array<string>;
  setParentIndexListList(value: Array<string>): void;
  clearParentIndexListList(): void;
  addParentIndexList(value: string, index?: number): void;

  getValueListList(): Array<ManualListValue>;
  setValueListList(value: Array<ManualListValue>): void;
  clearValueListList(): void;
  addValueList(value?: ManualListValue, index?: number): ManualListValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualDependentValue.AsObject;
  static toObject(includeInstance: boolean, msg: ManualDependentValue): ManualDependentValue.AsObject;
  static serializeBinaryToWriter(message: ManualDependentValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualDependentValue;
  static deserializeBinaryFromReader(message: ManualDependentValue, reader: jspb.BinaryReader): ManualDependentValue;
}

export namespace ManualDependentValue {
  export type AsObject = {
    parentIndexListList: Array<string>,
    valueListList: Array<ManualListValue.AsObject>,
  }
}

export class ManualRequestValue extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getId(): string;
  setId(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  getParamType(): number;
  setParamType(value: number): void;

  getValueDf(): string;
  setValueDf(value: string): void;

  getValueNull(): string;
  setValueNull(value: string): void;

  getIsObligatory(): boolean;
  setIsObligatory(value: boolean): void;

  getValuesListType(): number;
  setValuesListType(value: number): void;

  getMaskCheck(): string;
  setMaskCheck(value: string): void;

  getLinkInd(): number;
  setLinkInd(value: number): void;

  getParentParamListList(): Array<number>;
  setParentParamListList(value: Array<number>): void;
  clearParentParamListList(): void;
  addParentParamList(value: number, index?: number): void;

  getValueListList(): Array<ManualListValue>;
  setValueListList(value: Array<ManualListValue>): void;
  clearValueListList(): void;
  addValueList(value?: ManualListValue, index?: number): ManualListValue;

  getDependentListList(): Array<ManualDependentValue>;
  setDependentListList(value: Array<ManualDependentValue>): void;
  clearDependentListList(): void;
  addDependentList(value?: ManualDependentValue, index?: number): ManualDependentValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualRequestValue.AsObject;
  static toObject(includeInstance: boolean, msg: ManualRequestValue): ManualRequestValue.AsObject;
  static serializeBinaryToWriter(message: ManualRequestValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualRequestValue;
  static deserializeBinaryFromReader(message: ManualRequestValue, reader: jspb.BinaryReader): ManualRequestValue;
}

export namespace ManualRequestValue {
  export type AsObject = {
    ind: number,
    id: string,
    caption: string,
    paramType: number,
    valueDf: string,
    valueNull: string,
    isObligatory: boolean,
    valuesListType: number,
    maskCheck: string,
    linkInd: number,
    parentParamListList: Array<number>,
    valueListList: Array<ManualListValue.AsObject>,
    dependentListList: Array<ManualDependentValue.AsObject>,
  }
}

export class ManualQuery extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): void;

  getDbTarget(): number;
  setDbTarget(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ManualQuery): ManualQuery.AsObject;
  static serializeBinaryToWriter(message: ManualQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualQuery;
  static deserializeBinaryFromReader(message: ManualQuery, reader: jspb.BinaryReader): ManualQuery;
}

export namespace ManualQuery {
  export type AsObject = {
    query: string,
    dbTarget: number,
  }
}

export class ManualParam extends jspb.Message {
  getManualRequest(): ManualRequestValue | undefined;
  setManualRequest(value?: ManualRequestValue): void;
  hasManualRequest(): boolean;
  clearManualRequest(): void;

  getFieldIndex(): string;
  setFieldIndex(value: string): void;

  getFieldCaption(): string;
  setFieldCaption(value: string): void;

  getFieldDescr(): string;
  setFieldDescr(value: string): void;

  getQueryPossibleListList(): Array<ManualQuery>;
  setQueryPossibleListList(value: Array<ManualQuery>): void;
  clearQueryPossibleListList(): void;
  addQueryPossibleList(value?: ManualQuery, index?: number): ManualQuery;

  getQueryDependentListList(): Array<ManualQuery>;
  setQueryDependentListList(value: Array<ManualQuery>): void;
  clearQueryDependentListList(): void;
  addQueryDependentList(value?: ManualQuery, index?: number): ManualQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualParam.AsObject;
  static toObject(includeInstance: boolean, msg: ManualParam): ManualParam.AsObject;
  static serializeBinaryToWriter(message: ManualParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualParam;
  static deserializeBinaryFromReader(message: ManualParam, reader: jspb.BinaryReader): ManualParam;
}

export namespace ManualParam {
  export type AsObject = {
    manualRequest?: ManualRequestValue.AsObject,
    fieldIndex: string,
    fieldCaption: string,
    fieldDescr: string,
    queryPossibleListList: Array<ManualQuery.AsObject>,
    queryDependentListList: Array<ManualQuery.AsObject>,
  }
}

export class ManualTaskType extends jspb.Message {
  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getParamListList(): Array<ManualParam>;
  setParamListList(value: Array<ManualParam>): void;
  clearParamListList(): void;
  addParamList(value?: ManualParam, index?: number): ManualParam;

  getQueryApplyListList(): Array<ManualQuery>;
  setQueryApplyListList(value: Array<ManualQuery>): void;
  clearQueryApplyListList(): void;
  addQueryApplyList(value?: ManualQuery, index?: number): ManualQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualTaskType.AsObject;
  static toObject(includeInstance: boolean, msg: ManualTaskType): ManualTaskType.AsObject;
  static serializeBinaryToWriter(message: ManualTaskType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualTaskType;
  static deserializeBinaryFromReader(message: ManualTaskType, reader: jspb.BinaryReader): ManualTaskType;
}

export namespace ManualTaskType {
  export type AsObject = {
    taskTypeInd: number,
    paramListList: Array<ManualParam.AsObject>,
    queryApplyListList: Array<ManualQuery.AsObject>,
  }
}

export class ManualQueryApplyTaskType extends jspb.Message {
  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getQueryApplyListList(): Array<ManualQuery>;
  setQueryApplyListList(value: Array<ManualQuery>): void;
  clearQueryApplyListList(): void;
  addQueryApplyList(value?: ManualQuery, index?: number): ManualQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualQueryApplyTaskType.AsObject;
  static toObject(includeInstance: boolean, msg: ManualQueryApplyTaskType): ManualQueryApplyTaskType.AsObject;
  static serializeBinaryToWriter(message: ManualQueryApplyTaskType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualQueryApplyTaskType;
  static deserializeBinaryFromReader(message: ManualQueryApplyTaskType, reader: jspb.BinaryReader): ManualQueryApplyTaskType;
}

export namespace ManualQueryApplyTaskType {
  export type AsObject = {
    taskTypeInd: number,
    queryApplyListList: Array<ManualQuery.AsObject>,
  }
}

