import * as jspb from "google-protobuf"

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleConst_pb from './SittelleConst_pb';

export class PanelTaskType extends jspb.Message {
  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getDemand(): number;
  setDemand(value: number): void;

  getDemandTaskType(): number;
  setDemandTaskType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelTaskType.AsObject;
  static toObject(includeInstance: boolean, msg: PanelTaskType): PanelTaskType.AsObject;
  static serializeBinaryToWriter(message: PanelTaskType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelTaskType;
  static deserializeBinaryFromReader(message: PanelTaskType, reader: jspb.BinaryReader): PanelTaskType;
}

export namespace PanelTaskType {
  export type AsObject = {
    rootTaskTypeInd: number,
    statusInd: number,
    taskTypeInd: number,
    demand: number,
    demandTaskType: number,
  }
}

export class DictStatus extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getCaptionCreate(): string;
  setCaptionCreate(value: string): void;

  getCaptionAction(): string;
  setCaptionAction(value: string): void;

  getCaptionStatus(): string;
  setCaptionStatus(value: string): void;

  getColorFont(): number;
  setColorFont(value: number): void;

  getColorBackground(): number;
  setColorBackground(value: number): void;

  getColorFontBase(): number;
  setColorFontBase(value: number): void;

  getColorBackgroundBase(): number;
  setColorBackgroundBase(value: number): void;

  getDescr(): string;
  setDescr(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getIsGroup(): boolean;
  setIsGroup(value: boolean): void;

  getIsGoodCondition(): boolean;
  setIsGoodCondition(value: boolean): void;

  getIsOnChart(): boolean;
  setIsOnChart(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatus): DictStatus.AsObject;
  static serializeBinaryToWriter(message: DictStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatus;
  static deserializeBinaryFromReader(message: DictStatus, reader: jspb.BinaryReader): DictStatus;
}

export namespace DictStatus {
  export type AsObject = {
    ind: number,
    taskTypeInd: number,
    captionCreate: string,
    captionAction: string,
    captionStatus: string,
    colorFont: number,
    colorBackground: number,
    colorFontBase: number,
    colorBackgroundBase: number,
    descr: string,
    priority: number,
    isGroup: boolean,
    isGoodCondition: boolean,
    isOnChart: boolean,
  }
}

export class DictStatusGroup extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getDescr(): string;
  setDescr(value: string): void;

  getSett(): number;
  setSett(value: number): void;

  getColor(): number;
  setColor(value: number): void;

  getStatusIndListList(): Array<number>;
  setStatusIndListList(value: Array<number>): void;
  clearStatusIndListList(): void;
  addStatusIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictStatusGroup.AsObject;
  static toObject(includeInstance: boolean, msg: DictStatusGroup): DictStatusGroup.AsObject;
  static serializeBinaryToWriter(message: DictStatusGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictStatusGroup;
  static deserializeBinaryFromReader(message: DictStatusGroup, reader: jspb.BinaryReader): DictStatusGroup;
}

export namespace DictStatusGroup {
  export type AsObject = {
    ind: number,
    caption: string,
    descr: string,
    sett: number,
    color: number,
    statusIndListList: Array<number>,
  }
}

export class DictTaskTypeSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getCaptionRegion(): string;
  setCaptionRegion(value: string): void;

  getStatusListList(): Array<DictStatus>;
  setStatusListList(value: Array<DictStatus>): void;
  clearStatusListList(): void;
  addStatusList(value?: DictStatus, index?: number): DictStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictTaskTypeSett.AsObject;
  static toObject(includeInstance: boolean, msg: DictTaskTypeSett): DictTaskTypeSett.AsObject;
  static serializeBinaryToWriter(message: DictTaskTypeSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictTaskTypeSett;
  static deserializeBinaryFromReader(message: DictTaskTypeSett, reader: jspb.BinaryReader): DictTaskTypeSett;
}

export namespace DictTaskTypeSett {
  export type AsObject = {
    ind: number,
    caption: string,
    captionRegion: string,
    statusListList: Array<DictStatus.AsObject>,
  }
}

export class PanelFilterMonObjectItem extends jspb.Message {
  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterMonObjectItem.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterMonObjectItem): PanelFilterMonObjectItem.AsObject;
  static serializeBinaryToWriter(message: PanelFilterMonObjectItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterMonObjectItem;
  static deserializeBinaryFromReader(message: PanelFilterMonObjectItem, reader: jspb.BinaryReader): PanelFilterMonObjectItem;
}

export namespace PanelFilterMonObjectItem {
  export type AsObject = {
    rootTaskTypeInd: number,
    monObjectInd: number,
  }
}

export class PanelFilterMonObject extends jspb.Message {
  getFilterInd(): number;
  setFilterInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getFilterApply(): SittelleConst_pb.EnumFilterApplyType;
  setFilterApply(value: SittelleConst_pb.EnumFilterApplyType): void;

  getMonobjectListList(): Array<PanelFilterMonObjectItem>;
  setMonobjectListList(value: Array<PanelFilterMonObjectItem>): void;
  clearMonobjectListList(): void;
  addMonobjectList(value?: PanelFilterMonObjectItem, index?: number): PanelFilterMonObjectItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterMonObject.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterMonObject): PanelFilterMonObject.AsObject;
  static serializeBinaryToWriter(message: PanelFilterMonObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterMonObject;
  static deserializeBinaryFromReader(message: PanelFilterMonObject, reader: jspb.BinaryReader): PanelFilterMonObject;
}

export namespace PanelFilterMonObject {
  export type AsObject = {
    filterInd: number,
    accountInd: number,
    filterApply: SittelleConst_pb.EnumFilterApplyType,
    monobjectListList: Array<PanelFilterMonObjectItem.AsObject>,
  }
}

export class PanelFilterStateItem extends jspb.Message {
  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  getState(): number;
  setState(value: number): void;

  getMaskApply(): number;
  setMaskApply(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterStateItem.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterStateItem): PanelFilterStateItem.AsObject;
  static serializeBinaryToWriter(message: PanelFilterStateItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterStateItem;
  static deserializeBinaryFromReader(message: PanelFilterStateItem, reader: jspb.BinaryReader): PanelFilterStateItem;
}

export namespace PanelFilterStateItem {
  export type AsObject = {
    rootTaskTypeInd: number,
    state: number,
    maskApply: number,
  }
}

export class PanelFilterState extends jspb.Message {
  getFilterInd(): number;
  setFilterInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getStateListList(): Array<PanelFilterStateItem>;
  setStateListList(value: Array<PanelFilterStateItem>): void;
  clearStateListList(): void;
  addStateList(value?: PanelFilterStateItem, index?: number): PanelFilterStateItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterState.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterState): PanelFilterState.AsObject;
  static serializeBinaryToWriter(message: PanelFilterState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterState;
  static deserializeBinaryFromReader(message: PanelFilterState, reader: jspb.BinaryReader): PanelFilterState;
}

export namespace PanelFilterState {
  export type AsObject = {
    filterInd: number,
    accountInd: number,
    stateListList: Array<PanelFilterStateItem.AsObject>,
  }
}

export class PanelFilterStatusItem extends jspb.Message {
  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterStatusItem.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterStatusItem): PanelFilterStatusItem.AsObject;
  static serializeBinaryToWriter(message: PanelFilterStatusItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterStatusItem;
  static deserializeBinaryFromReader(message: PanelFilterStatusItem, reader: jspb.BinaryReader): PanelFilterStatusItem;
}

export namespace PanelFilterStatusItem {
  export type AsObject = {
    statusInd: number,
  }
}

export class PanelFilterStatus extends jspb.Message {
  getFilterInd(): number;
  setFilterInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getFilterApply(): SittelleConst_pb.EnumFilterApplyType;
  setFilterApply(value: SittelleConst_pb.EnumFilterApplyType): void;

  getStatusListList(): Array<PanelFilterStatusItem>;
  setStatusListList(value: Array<PanelFilterStatusItem>): void;
  clearStatusListList(): void;
  addStatusList(value?: PanelFilterStatusItem, index?: number): PanelFilterStatusItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterStatus): PanelFilterStatus.AsObject;
  static serializeBinaryToWriter(message: PanelFilterStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterStatus;
  static deserializeBinaryFromReader(message: PanelFilterStatus, reader: jspb.BinaryReader): PanelFilterStatus;
}

export namespace PanelFilterStatus {
  export type AsObject = {
    filterInd: number,
    accountInd: number,
    filterApply: SittelleConst_pb.EnumFilterApplyType,
    statusListList: Array<PanelFilterStatusItem.AsObject>,
  }
}

export class PanelFilterStatusGroupItem extends jspb.Message {
  getStatusGroupInd(): number;
  setStatusGroupInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterStatusGroupItem.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterStatusGroupItem): PanelFilterStatusGroupItem.AsObject;
  static serializeBinaryToWriter(message: PanelFilterStatusGroupItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterStatusGroupItem;
  static deserializeBinaryFromReader(message: PanelFilterStatusGroupItem, reader: jspb.BinaryReader): PanelFilterStatusGroupItem;
}

export namespace PanelFilterStatusGroupItem {
  export type AsObject = {
    statusGroupInd: number,
  }
}

export class PanelFilterStatusGroup extends jspb.Message {
  getFilterInd(): number;
  setFilterInd(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getFilterApply(): SittelleConst_pb.EnumFilterApplyType;
  setFilterApply(value: SittelleConst_pb.EnumFilterApplyType): void;

  getStatusGroupListList(): Array<PanelFilterStatusGroupItem>;
  setStatusGroupListList(value: Array<PanelFilterStatusGroupItem>): void;
  clearStatusGroupListList(): void;
  addStatusGroupList(value?: PanelFilterStatusGroupItem, index?: number): PanelFilterStatusGroupItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PanelFilterStatusGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PanelFilterStatusGroup): PanelFilterStatusGroup.AsObject;
  static serializeBinaryToWriter(message: PanelFilterStatusGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PanelFilterStatusGroup;
  static deserializeBinaryFromReader(message: PanelFilterStatusGroup, reader: jspb.BinaryReader): PanelFilterStatusGroup;
}

export namespace PanelFilterStatusGroup {
  export type AsObject = {
    filterInd: number,
    accountInd: number,
    filterApply: SittelleConst_pb.EnumFilterApplyType,
    statusGroupListList: Array<PanelFilterStatusGroupItem.AsObject>,
  }
}

export class AccountGroupPanel extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getId(): string;
  setId(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getDescr(): string;
  setDescr(value: string): void;

  getColumnList(): number;
  setColumnList(value: number): void;

  getAccessory(): number;
  setAccessory(value: number): void;

  getTaskTypeListList(): Array<PanelTaskType>;
  setTaskTypeListList(value: Array<PanelTaskType>): void;
  clearTaskTypeListList(): void;
  addTaskTypeList(value?: PanelTaskType, index?: number): PanelTaskType;

  getIsFirstPage(): boolean;
  setIsFirstPage(value: boolean): void;

  getImageInd(): number;
  setImageInd(value: number): void;

  getImageActiveFileName(): string;
  setImageActiveFileName(value: string): void;

  getImageActiveFile(): Uint8Array | string;
  getImageActiveFile_asU8(): Uint8Array;
  getImageActiveFile_asB64(): string;
  setImageActiveFile(value: Uint8Array | string): void;

  getImagePassiveFileName(): string;
  setImagePassiveFileName(value: string): void;

  getImagePassiveFile(): Uint8Array | string;
  getImagePassiveFile_asU8(): Uint8Array;
  getImagePassiveFile_asB64(): string;
  setImagePassiveFile(value: Uint8Array | string): void;

  getArchiveOnPanel(): boolean;
  setArchiveOnPanel(value: boolean): void;

  getFilterMonObject(): PanelFilterMonObject | undefined;
  setFilterMonObject(value?: PanelFilterMonObject): void;
  hasFilterMonObject(): boolean;
  clearFilterMonObject(): void;

  getFilterState(): PanelFilterState | undefined;
  setFilterState(value?: PanelFilterState): void;
  hasFilterState(): boolean;
  clearFilterState(): void;

  getFilterStatus(): PanelFilterStatus | undefined;
  setFilterStatus(value?: PanelFilterStatus): void;
  hasFilterStatus(): boolean;
  clearFilterStatus(): void;

  getFilterStatusGroup(): PanelFilterStatusGroup | undefined;
  setFilterStatusGroup(value?: PanelFilterStatusGroup): void;
  hasFilterStatusGroup(): boolean;
  clearFilterStatusGroup(): void;

  getColumnRegularListList(): Array<number>;
  setColumnRegularListList(value: Array<number>): void;
  clearColumnRegularListList(): void;
  addColumnRegularList(value: number, index?: number): void;

  getColumnRoleListList(): Array<number>;
  setColumnRoleListList(value: Array<number>): void;
  clearColumnRoleListList(): void;
  addColumnRoleList(value: number, index?: number): void;

  getColumnManualListList(): Array<number>;
  setColumnManualListList(value: Array<number>): void;
  clearColumnManualListList(): void;
  addColumnManualList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupPanel.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupPanel): AccountGroupPanel.AsObject;
  static serializeBinaryToWriter(message: AccountGroupPanel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupPanel;
  static deserializeBinaryFromReader(message: AccountGroupPanel, reader: jspb.BinaryReader): AccountGroupPanel;
}

export namespace AccountGroupPanel {
  export type AsObject = {
    ind: number,
    id: string,
    caption: string,
    active: boolean,
    descr: string,
    columnList: number,
    accessory: number,
    taskTypeListList: Array<PanelTaskType.AsObject>,
    isFirstPage: boolean,
    imageInd: number,
    imageActiveFileName: string,
    imageActiveFile: Uint8Array | string,
    imagePassiveFileName: string,
    imagePassiveFile: Uint8Array | string,
    archiveOnPanel: boolean,
    filterMonObject?: PanelFilterMonObject.AsObject,
    filterState?: PanelFilterState.AsObject,
    filterStatus?: PanelFilterStatus.AsObject,
    filterStatusGroup?: PanelFilterStatusGroup.AsObject,
    columnRegularListList: Array<number>,
    columnRoleListList: Array<number>,
    columnManualListList: Array<number>,
  }
}

export class RoleInfo extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getTaskRole(): boolean;
  setTaskRole(value: boolean): void;

  getCaptionRegion(): string;
  setCaptionRegion(value: string): void;

  getSystemRole(): boolean;
  setSystemRole(value: boolean): void;

  getDescr(): string;
  setDescr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoleInfo): RoleInfo.AsObject;
  static serializeBinaryToWriter(message: RoleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleInfo;
  static deserializeBinaryFromReader(message: RoleInfo, reader: jspb.BinaryReader): RoleInfo;
}

export namespace RoleInfo {
  export type AsObject = {
    ind: number,
    caption: string,
    active: boolean,
    taskRole: boolean,
    captionRegion: string,
    systemRole: boolean,
    descr: string,
  }
}

export class ChartSeries extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getSeriesType(): number;
  setSeriesType(value: number): void;

  getColor(): number;
  setColor(value: number): void;

  getParam(): SittelleTypeManual_pb.ManualValue | undefined;
  setParam(value?: SittelleTypeManual_pb.ManualValue): void;
  hasParam(): boolean;
  clearParam(): void;

  getSettings(): string;
  setSettings(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartSeries.AsObject;
  static toObject(includeInstance: boolean, msg: ChartSeries): ChartSeries.AsObject;
  static serializeBinaryToWriter(message: ChartSeries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartSeries;
  static deserializeBinaryFromReader(message: ChartSeries, reader: jspb.BinaryReader): ChartSeries;
}

export namespace ChartSeries {
  export type AsObject = {
    ind: number,
    caption: string,
    seriesType: number,
    color: number,
    param?: SittelleTypeManual_pb.ManualValue.AsObject,
    settings: string,
  }
}

export class ChartValue extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartValue.AsObject;
  static toObject(includeInstance: boolean, msg: ChartValue): ChartValue.AsObject;
  static serializeBinaryToWriter(message: ChartValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartValue;
  static deserializeBinaryFromReader(message: ChartValue, reader: jspb.BinaryReader): ChartValue;
}

export namespace ChartValue {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class StateBit extends jspb.Message {
  getBitNumber(): number;
  setBitNumber(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getCaptionregion(): string;
  setCaptionregion(value: string): void;

  getDescr(): string;
  setDescr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateBit.AsObject;
  static toObject(includeInstance: boolean, msg: StateBit): StateBit.AsObject;
  static serializeBinaryToWriter(message: StateBit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateBit;
  static deserializeBinaryFromReader(message: StateBit, reader: jspb.BinaryReader): StateBit;
}

export namespace StateBit {
  export type AsObject = {
    bitNumber: number,
    caption: string,
    captionregion: string,
    descr: string,
  }
}

export class ChartSeriesValue extends jspb.Message {
  getSeriesInd(): number;
  setSeriesInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getColor(): number;
  setColor(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  getValueListList(): Array<ChartValue>;
  setValueListList(value: Array<ChartValue>): void;
  clearValueListList(): void;
  addValueList(value?: ChartValue, index?: number): ChartValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartSeriesValue.AsObject;
  static toObject(includeInstance: boolean, msg: ChartSeriesValue): ChartSeriesValue.AsObject;
  static serializeBinaryToWriter(message: ChartSeriesValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartSeriesValue;
  static deserializeBinaryFromReader(message: ChartSeriesValue, reader: jspb.BinaryReader): ChartSeriesValue;
}

export namespace ChartSeriesValue {
  export type AsObject = {
    seriesInd: number,
    caption: string,
    color: number,
    value: number,
    valueListList: Array<ChartValue.AsObject>,
  }
}

export class SittelleChart extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getChartType(): number;
  setChartType(value: number): void;

  getReadInterval(): number;
  setReadInterval(value: number): void;

  getSettings(): string;
  setSettings(value: string): void;

  getXMin(): number;
  setXMin(value: number): void;

  getXMax(): number;
  setXMax(value: number): void;

  getYMin(): number;
  setYMin(value: number): void;

  getYMax(): number;
  setYMax(value: number): void;

  getSeriesListList(): Array<ChartSeries>;
  setSeriesListList(value: Array<ChartSeries>): void;
  clearSeriesListList(): void;
  addSeriesList(value?: ChartSeries, index?: number): ChartSeries;

  getChartRequestAluesList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setChartRequestAluesList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearChartRequestAluesList(): void;
  addChartRequestAlues(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  getSeriesRequestValuesList(): Array<SittelleTypeManual_pb.ManualRequestValue>;
  setSeriesRequestValuesList(value: Array<SittelleTypeManual_pb.ManualRequestValue>): void;
  clearSeriesRequestValuesList(): void;
  addSeriesRequestValues(value?: SittelleTypeManual_pb.ManualRequestValue, index?: number): SittelleTypeManual_pb.ManualRequestValue;

  getValueListList(): Array<ChartValue>;
  setValueListList(value: Array<ChartValue>): void;
  clearValueListList(): void;
  addValueList(value?: ChartValue, index?: number): ChartValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SittelleChart.AsObject;
  static toObject(includeInstance: boolean, msg: SittelleChart): SittelleChart.AsObject;
  static serializeBinaryToWriter(message: SittelleChart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SittelleChart;
  static deserializeBinaryFromReader(message: SittelleChart, reader: jspb.BinaryReader): SittelleChart;
}

export namespace SittelleChart {
  export type AsObject = {
    ind: number,
    caption: string,
    chartType: number,
    readInterval: number,
    settings: string,
    xMin: number,
    xMax: number,
    yMin: number,
    yMax: number,
    seriesListList: Array<ChartSeries.AsObject>,
    chartRequestAluesList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
    seriesRequestValuesList: Array<SittelleTypeManual_pb.ManualRequestValue.AsObject>,
    valueListList: Array<ChartValue.AsObject>,
  }
}

export class MonObjectInfo extends jspb.Message {
  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getNumber(): number;
  setNumber(value: number): void;

  getPremesisType(): string;
  setPremesisType(value: string): void;

  getOpenDate(): number;
  setOpenDate(value: number): void;

  getUnitType(): string;
  setUnitType(value: string): void;

  getSalesarea(): number;
  setSalesarea(value: number): void;

  getTotalarea(): number;
  setTotalarea(value: number): void;

  getRegion(): string;
  setRegion(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectInfo): MonObjectInfo.AsObject;
  static serializeBinaryToWriter(message: MonObjectInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectInfo;
  static deserializeBinaryFromReader(message: MonObjectInfo, reader: jspb.BinaryReader): MonObjectInfo;
}

export namespace MonObjectInfo {
  export type AsObject = {
    monObjectInd: number,
    caption: string,
    number: number,
    premesisType: string,
    openDate: number,
    unitType: string,
    salesarea: number,
    totalarea: number,
    region: string,
    company: string,
    phone: string,
    address: string,
    email: string,
  }
}

export class MonObjectShort extends jspb.Message {
  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonObjectShort.AsObject;
  static toObject(includeInstance: boolean, msg: MonObjectShort): MonObjectShort.AsObject;
  static serializeBinaryToWriter(message: MonObjectShort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonObjectShort;
  static deserializeBinaryFromReader(message: MonObjectShort, reader: jspb.BinaryReader): MonObjectShort;
}

export namespace MonObjectShort {
  export type AsObject = {
    monObjectInd: number,
    caption: string,
  }
}

export class StatsAggregateInfo extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getDescr(): string;
  setDescr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsAggregateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StatsAggregateInfo): StatsAggregateInfo.AsObject;
  static serializeBinaryToWriter(message: StatsAggregateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsAggregateInfo;
  static deserializeBinaryFromReader(message: StatsAggregateInfo, reader: jspb.BinaryReader): StatsAggregateInfo;
}

export namespace StatsAggregateInfo {
  export type AsObject = {
    ind: number,
    caption: string,
    descr: string,
  }
}

export class ManualInfo extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getId(): string;
  setId(value: string): void;

  getCaption(): string;
  setCaption(value: string): void;

  getParamType(): number;
  setParamType(value: number): void;

  getIsObligatory(): boolean;
  setIsObligatory(value: boolean): void;

  getLinkInd(): number;
  setLinkInd(value: number): void;

  getTaskTypeListList(): Array<number>;
  setTaskTypeListList(value: Array<number>): void;
  clearTaskTypeListList(): void;
  addTaskTypeList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ManualInfo): ManualInfo.AsObject;
  static serializeBinaryToWriter(message: ManualInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualInfo;
  static deserializeBinaryFromReader(message: ManualInfo, reader: jspb.BinaryReader): ManualInfo;
}

export namespace ManualInfo {
  export type AsObject = {
    ind: number,
    id: string,
    caption: string,
    paramType: number,
    isObligatory: boolean,
    linkInd: number,
    taskTypeListList: Array<number>,
  }
}

