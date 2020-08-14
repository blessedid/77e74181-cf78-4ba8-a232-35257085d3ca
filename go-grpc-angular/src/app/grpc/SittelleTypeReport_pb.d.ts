import * as jspb from "google-protobuf"

export class ReportFont extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getBold(): boolean;
  setBold(value: boolean): void;

  getUnderline(): boolean;
  setUnderline(value: boolean): void;

  getItalic(): boolean;
  setItalic(value: boolean): void;

  getStrikeout(): boolean;
  setStrikeout(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportFont.AsObject;
  static toObject(includeInstance: boolean, msg: ReportFont): ReportFont.AsObject;
  static serializeBinaryToWriter(message: ReportFont, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportFont;
  static deserializeBinaryFromReader(message: ReportFont, reader: jspb.BinaryReader): ReportFont;
}

export namespace ReportFont {
  export type AsObject = {
    name: string,
    size: number,
    bold: boolean,
    underline: boolean,
    italic: boolean,
    strikeout: boolean,
  }
}

export class ReportHeader extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getHeader(): string;
  setHeader(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeaderAlign(): number;
  setHeaderAlign(value: number): void;

  getParamType(): number;
  setParamType(value: number): void;

  getLinkInd(): number;
  setLinkInd(value: number): void;

  getRowAlign(): number;
  setRowAlign(value: number): void;

  getVisible(): boolean;
  setVisible(value: boolean): void;

  getHeaderFont(): ReportFont | undefined;
  setHeaderFont(value?: ReportFont): void;
  hasHeaderFont(): boolean;
  clearHeaderFont(): void;

  getValueFont(): ReportFont | undefined;
  setValueFont(value?: ReportFont): void;
  hasValueFont(): boolean;
  clearValueFont(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportHeader.AsObject;
  static toObject(includeInstance: boolean, msg: ReportHeader): ReportHeader.AsObject;
  static serializeBinaryToWriter(message: ReportHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportHeader;
  static deserializeBinaryFromReader(message: ReportHeader, reader: jspb.BinaryReader): ReportHeader;
}

export namespace ReportHeader {
  export type AsObject = {
    ind: number,
    header: string,
    value: string,
    width: number,
    headerAlign: number,
    paramType: number,
    linkInd: number,
    rowAlign: number,
    visible: boolean,
    headerFont?: ReportFont.AsObject,
    valueFont?: ReportFont.AsObject,
  }
}

export class ReportHeaderGroup extends jspb.Message {
  getListList(): Array<ReportHeader>;
  setListList(value: Array<ReportHeader>): void;
  clearListList(): void;
  addList(value?: ReportHeader, index?: number): ReportHeader;

  getStyle(): number;
  setStyle(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportHeaderGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ReportHeaderGroup): ReportHeaderGroup.AsObject;
  static serializeBinaryToWriter(message: ReportHeaderGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportHeaderGroup;
  static deserializeBinaryFromReader(message: ReportHeaderGroup, reader: jspb.BinaryReader): ReportHeaderGroup;
}

export namespace ReportHeaderGroup {
  export type AsObject = {
    listList: Array<ReportHeader.AsObject>,
    style: number,
  }
}

export class ReportSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getId(): string;
  setId(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  getDescr(): string;
  setDescr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportSett.AsObject;
  static toObject(includeInstance: boolean, msg: ReportSett): ReportSett.AsObject;
  static serializeBinaryToWriter(message: ReportSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportSett;
  static deserializeBinaryFromReader(message: ReportSett, reader: jspb.BinaryReader): ReportSett;
}

export namespace ReportSett {
  export type AsObject = {
    ind: number,
    id: string,
    caption: string,
    descr: string,
  }
}

export class ReportValue extends jspb.Message {
  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): void;
  clearValuesList(): void;
  addValues(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportValue.AsObject;
  static toObject(includeInstance: boolean, msg: ReportValue): ReportValue.AsObject;
  static serializeBinaryToWriter(message: ReportValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportValue;
  static deserializeBinaryFromReader(message: ReportValue, reader: jspb.BinaryReader): ReportValue;
}

export namespace ReportValue {
  export type AsObject = {
    valuesList: Array<string>,
  }
}

export enum EnumHorzntalAllign { 
  ALLIGN_HOR_UNDEFINED = 0,
  ALLIGN_HOR_LEFT = 1,
  ALLIGN_HOR_RIGHT = 2,
  ALLIGN_HOR_CENTER = 3,
  ALLIGN_HOR_WIDTH = 4,
}
