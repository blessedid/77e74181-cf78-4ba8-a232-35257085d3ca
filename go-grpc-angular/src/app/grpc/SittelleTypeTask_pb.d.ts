import * as jspb from "google-protobuf"

import * as SittelleTypeManual_pb from './SittelleTypeManual_pb';
import * as SittelleConst_pb from './SittelleConst_pb';

export class Person extends jspb.Message {
  getPersonInd(): number;
  setPersonInd(value: number): void;

  getPersonActive(): boolean;
  setPersonActive(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getSurname(): string;
  setSurname(value: string): void;

  getPatronymic(): string;
  setPatronymic(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getEmailActive(): boolean;
  setEmailActive(value: boolean): void;

  getPhone(): string;
  setPhone(value: string): void;

  getPhoneActive(): boolean;
  setPhoneActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Person.AsObject;
  static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
  static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Person;
  static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
  export type AsObject = {
    personInd: number,
    personActive: boolean,
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    emailActive: boolean,
    phone: string,
    phoneActive: boolean,
  }
}

export class Account extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getAccountPerson(): Person | undefined;
  setAccountPerson(value?: Person): void;
  hasAccountPerson(): boolean;
  clearAccountPerson(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    ind: number,
    caption: string,
    password: string,
    active: boolean,
    accountPerson?: Person.AsObject,
  }
}

export class MonitoringObject extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getId(): string;
  setId(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getCaption(): string;
  setCaption(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getIsLocal(): boolean;
  setIsLocal(value: boolean): void;

  getAdditionalParamListList(): Array<AdditionalParam>;
  setAdditionalParamListList(value: Array<AdditionalParam>): void;
  clearAdditionalParamListList(): void;
  addAdditionalParamList(value?: AdditionalParam, index?: number): AdditionalParam;

  getChartCaption(): string;
  setChartCaption(value: string): void;

  getSystem(): boolean;
  setSystem(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitoringObject.AsObject;
  static toObject(includeInstance: boolean, msg: MonitoringObject): MonitoringObject.AsObject;
  static serializeBinaryToWriter(message: MonitoringObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitoringObject;
  static deserializeBinaryFromReader(message: MonitoringObject, reader: jspb.BinaryReader): MonitoringObject;
}

export namespace MonitoringObject {
  export type AsObject = {
    ind: number,
    id: string,
    active: boolean,
    caption: string,
    address: string,
    priority: number,
    isLocal: boolean,
    additionalParamListList: Array<AdditionalParam.AsObject>,
    chartCaption: string,
    system: boolean,
  }
}

export class AccountGroup extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getParentInd(): number;
  setParentInd(value: number): void;

  getChildListList(): Array<number>;
  setChildListList(value: Array<number>): void;
  clearChildListList(): void;
  addChildList(value: number, index?: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getGroupType(): SittelleConst_pb.EnumAccountGroupType;
  setGroupType(value: SittelleConst_pb.EnumAccountGroupType): void;

  getDescr(): string;
  setDescr(value: string): void;

  getCanRemove(): boolean;
  setCanRemove(value: boolean): void;

  getSystem(): boolean;
  setSystem(value: boolean): void;

  getJobPosition(): boolean;
  setJobPosition(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroup.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroup): AccountGroup.AsObject;
  static serializeBinaryToWriter(message: AccountGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroup;
  static deserializeBinaryFromReader(message: AccountGroup, reader: jspb.BinaryReader): AccountGroup;
}

export namespace AccountGroup {
  export type AsObject = {
    ind: number,
    parentInd: number,
    childListList: Array<number>,
    caption: string,
    active: boolean,
    groupType: SittelleConst_pb.EnumAccountGroupType,
    descr: string,
    canRemove: boolean,
    system: boolean,
    jobPosition: boolean,
  }
}

export class AccountGroupWithAccount extends jspb.Message {
  getSett(): AccountGroup | undefined;
  setSett(value?: AccountGroup): void;
  hasSett(): boolean;
  clearSett(): void;

  getAccountListList(): Array<Account>;
  setAccountListList(value: Array<Account>): void;
  clearAccountListList(): void;
  addAccountList(value?: Account, index?: number): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupWithAccount.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupWithAccount): AccountGroupWithAccount.AsObject;
  static serializeBinaryToWriter(message: AccountGroupWithAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupWithAccount;
  static deserializeBinaryFromReader(message: AccountGroupWithAccount, reader: jspb.BinaryReader): AccountGroupWithAccount;
}

export namespace AccountGroupWithAccount {
  export type AsObject = {
    sett?: AccountGroup.AsObject,
    accountListList: Array<Account.AsObject>,
  }
}

export class TaskItemSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getParentInd(): number;
  setParentInd(value: number): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getSourceInd(): number;
  setSourceInd(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  getStatusIndInit(): number;
  setStatusIndInit(value: number): void;

  getFieldIndActive(): number;
  setFieldIndActive(value: number): void;

  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getTableText(): string;
  setTableText(value: string): void;

  getChildIndListList(): Array<number>;
  setChildIndListList(value: Array<number>): void;
  clearChildIndListList(): void;
  addChildIndList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemSett.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemSett): TaskItemSett.AsObject;
  static serializeBinaryToWriter(message: TaskItemSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemSett;
  static deserializeBinaryFromReader(message: TaskItemSett, reader: jspb.BinaryReader): TaskItemSett;
}

export namespace TaskItemSett {
  export type AsObject = {
    ind: number,
    parentInd: number,
    sourceId: string,
    sourceInd: number,
    taskTypeInd: number,
    rootTaskTypeInd: number,
    statusIndInit: number,
    fieldIndActive: number,
    monObjectInd: number,
    tableText: string,
    childIndListList: Array<number>,
  }
}

export class RoleDemand extends jspb.Message {
  getAccountGroupPossibleRule(): number;
  setAccountGroupPossibleRule(value: number): void;

  getAccountGroupPossibleValuesList(): Array<number>;
  setAccountGroupPossibleValuesList(value: Array<number>): void;
  clearAccountGroupPossibleValuesList(): void;
  addAccountGroupPossibleValues(value: number, index?: number): void;

  getRatio(): number;
  setRatio(value: number): void;

  getValueList(): Array<number>;
  setValueList(value: Array<number>): void;
  clearValueList(): void;
  addValue(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleDemand.AsObject;
  static toObject(includeInstance: boolean, msg: RoleDemand): RoleDemand.AsObject;
  static serializeBinaryToWriter(message: RoleDemand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleDemand;
  static deserializeBinaryFromReader(message: RoleDemand, reader: jspb.BinaryReader): RoleDemand;
}

export namespace RoleDemand {
  export type AsObject = {
    accountGroupPossibleRule: number,
    accountGroupPossibleValuesList: Array<number>,
    ratio: number,
    valueList: Array<number>,
  }
}

export class TaskRight extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getCaptionRegion(): string;
  setCaptionRegion(value: string): void;

  getDescr(): string;
  setDescr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRight.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRight): TaskRight.AsObject;
  static serializeBinaryToWriter(message: TaskRight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRight;
  static deserializeBinaryFromReader(message: TaskRight, reader: jspb.BinaryReader): TaskRight;
}

export namespace TaskRight {
  export type AsObject = {
    ind: number,
    caption: string,
    captionRegion: string,
    descr: string,
  }
}

export class StatusRoleRight extends jspb.Message {
  getRootTaskTypeIndex(): number;
  setRootTaskTypeIndex(value: number): void;

  getTaskTypeIndex(): number;
  setTaskTypeIndex(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getRoleInd(): number;
  setRoleInd(value: number): void;

  getRight(): number;
  setRight(value: number): void;

  getAccountGroupListList(): Array<AccountGroup>;
  setAccountGroupListList(value: Array<AccountGroup>): void;
  clearAccountGroupListList(): void;
  addAccountGroupList(value?: AccountGroup, index?: number): AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRoleRight.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRoleRight): StatusRoleRight.AsObject;
  static serializeBinaryToWriter(message: StatusRoleRight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRoleRight;
  static deserializeBinaryFromReader(message: StatusRoleRight, reader: jspb.BinaryReader): StatusRoleRight;
}

export namespace StatusRoleRight {
  export type AsObject = {
    rootTaskTypeIndex: number,
    taskTypeIndex: number,
    statusInd: number,
    roleInd: number,
    right: number,
    accountGroupListList: Array<AccountGroup.AsObject>,
  }
}

export class StatusGroup extends jspb.Message {
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
  toObject(includeInstance?: boolean): StatusGroup.AsObject;
  static toObject(includeInstance: boolean, msg: StatusGroup): StatusGroup.AsObject;
  static serializeBinaryToWriter(message: StatusGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusGroup;
  static deserializeBinaryFromReader(message: StatusGroup, reader: jspb.BinaryReader): StatusGroup;
}

export namespace StatusGroup {
  export type AsObject = {
    ind: number,
    caption: string,
    descr: string,
    sett: number,
    color: number,
    statusIndListList: Array<number>,
  }
}

export class TaskTemplateText extends jspb.Message {
  getRootTaskTypeInd(): number;
  setRootTaskTypeInd(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getTaskStatusInd(): number;
  setTaskStatusInd(value: number): void;

  getTemaplate(): string;
  setTemaplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplateText.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplateText): TaskTemplateText.AsObject;
  static serializeBinaryToWriter(message: TaskTemplateText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplateText;
  static deserializeBinaryFromReader(message: TaskTemplateText, reader: jspb.BinaryReader): TaskTemplateText;
}

export namespace TaskTemplateText {
  export type AsObject = {
    rootTaskTypeInd: number,
    taskTypeInd: number,
    taskStatusInd: number,
    temaplate: string,
  }
}

export class TaskContentSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getActivePlanningStart(): boolean;
  setActivePlanningStart(value: boolean): void;

  getDatePlanningStart(): number;
  setDatePlanningStart(value: number): void;

  getActivePlanningEnd(): boolean;
  setActivePlanningEnd(value: boolean): void;

  getDatePlanningEnd(): number;
  setDatePlanningEnd(value: number): void;

  getTimeEstimate(): number;
  setTimeEstimate(value: number): void;

  getDateApply(): number;
  setDateApply(value: number): void;

  getMonObjectIndListList(): Array<number>;
  setMonObjectIndListList(value: Array<number>): void;
  clearMonObjectIndListList(): void;
  addMonObjectIndList(value: number, index?: number): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskContentSett.AsObject;
  static toObject(includeInstance: boolean, msg: TaskContentSett): TaskContentSett.AsObject;
  static serializeBinaryToWriter(message: TaskContentSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskContentSett;
  static deserializeBinaryFromReader(message: TaskContentSett, reader: jspb.BinaryReader): TaskContentSett;
}

export namespace TaskContentSett {
  export type AsObject = {
    ind: number,
    taskInd: number,
    sessInd: number,
    caption: string,
    content: string,
    priority: number,
    activePlanningStart: boolean,
    datePlanningStart: number,
    activePlanningEnd: boolean,
    datePlanningEnd: number,
    timeEstimate: number,
    dateApply: number,
    monObjectIndListList: Array<number>,
    accountApply?: Account.AsObject,
    price: number,
  }
}

export class TaskStatusSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getChainId(): string;
  setChainId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getText(): string;
  setText(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getDateApply(): number;
  setDateApply(value: number): void;

  getDateSend(): number;
  setDateSend(value: number): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusSett.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusSett): TaskStatusSett.AsObject;
  static serializeBinaryToWriter(message: TaskStatusSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusSett;
  static deserializeBinaryFromReader(message: TaskStatusSett, reader: jspb.BinaryReader): TaskStatusSett;
}

export namespace TaskStatusSett {
  export type AsObject = {
    ind: number,
    chainId: string,
    messageId: string,
    taskInd: number,
    sessInd: number,
    statusInd: number,
    text: string,
    comment: string,
    dateApply: number,
    dateSend: number,
    accountApply?: Account.AsObject,
  }
}

export class TaskManual extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearParamListList(): void;
  addParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  getValue(): string;
  setValue(value: string): void;

  getDateApply(): number;
  setDateApply(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskManual.AsObject;
  static toObject(includeInstance: boolean, msg: TaskManual): TaskManual.AsObject;
  static serializeBinaryToWriter(message: TaskManual, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskManual;
  static deserializeBinaryFromReader(message: TaskManual, reader: jspb.BinaryReader): TaskManual;
}

export namespace TaskManual {
  export type AsObject = {
    ind: number,
    taskInd: number,
    sessInd: number,
    paramListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
    value: string,
    dateApply: number,
  }
}

export class TaskState extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getState(): number;
  setState(value: number): void;

  getDateApply(): number;
  setDateApply(value: number): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskState.AsObject;
  static toObject(includeInstance: boolean, msg: TaskState): TaskState.AsObject;
  static serializeBinaryToWriter(message: TaskState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskState;
  static deserializeBinaryFromReader(message: TaskState, reader: jspb.BinaryReader): TaskState;
}

export namespace TaskState {
  export type AsObject = {
    ind: number,
    sessInd: number,
    taskInd: number,
    state: number,
    dateApply: number,
    accountApply?: Account.AsObject,
  }
}

export class TaskAccountState extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getState(): number;
  setState(value: number): void;

  getAccountInd(): number;
  setAccountInd(value: number): void;

  getDateApply(): number;
  setDateApply(value: number): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountState.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountState): TaskAccountState.AsObject;
  static serializeBinaryToWriter(message: TaskAccountState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountState;
  static deserializeBinaryFromReader(message: TaskAccountState, reader: jspb.BinaryReader): TaskAccountState;
}

export namespace TaskAccountState {
  export type AsObject = {
    ind: number,
    sessInd: number,
    taskInd: number,
    state: number,
    accountInd: number,
    dateApply: number,
    accountApply?: Account.AsObject,
  }
}

export class TaskRoleSett extends jspb.Message {
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
  toObject(includeInstance?: boolean): TaskRoleSett.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleSett): TaskRoleSett.AsObject;
  static serializeBinaryToWriter(message: TaskRoleSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleSett;
  static deserializeBinaryFromReader(message: TaskRoleSett, reader: jspb.BinaryReader): TaskRoleSett;
}

export namespace TaskRoleSett {
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

export class TaskAccountParticipant extends jspb.Message {
  getAccount(): Account | undefined;
  setAccount(value?: Account): void;
  hasAccount(): boolean;
  clearAccount(): void;

  getRight(): number;
  setRight(value: number): void;

  getNotify(): number;
  setNotify(value: number): void;

  getAccountTaskState(): number;
  setAccountTaskState(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAccountParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAccountParticipant): TaskAccountParticipant.AsObject;
  static serializeBinaryToWriter(message: TaskAccountParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAccountParticipant;
  static deserializeBinaryFromReader(message: TaskAccountParticipant, reader: jspb.BinaryReader): TaskAccountParticipant;
}

export namespace TaskAccountParticipant {
  export type AsObject = {
    account?: Account.AsObject,
    right: number,
    notify: number,
    accountTaskState: number,
  }
}

export class TaskTypeRole extends jspb.Message {
  getRootTaskType(): number;
  setRootTaskType(value: number): void;

  getTaskType(): number;
  setTaskType(value: number): void;

  getRoleListList(): Array<TaskRoleSett>;
  setRoleListList(value: Array<TaskRoleSett>): void;
  clearRoleListList(): void;
  addRoleList(value?: TaskRoleSett, index?: number): TaskRoleSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTypeRole.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTypeRole): TaskTypeRole.AsObject;
  static serializeBinaryToWriter(message: TaskTypeRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTypeRole;
  static deserializeBinaryFromReader(message: TaskTypeRole, reader: jspb.BinaryReader): TaskTypeRole;
}

export namespace TaskTypeRole {
  export type AsObject = {
    rootTaskType: number,
    taskType: number,
    roleListList: Array<TaskRoleSett.AsObject>,
  }
}

export class TaskRole extends jspb.Message {
  getDemand(): RoleDemand | undefined;
  setDemand(value?: RoleDemand): void;
  hasDemand(): boolean;
  clearDemand(): void;

  getRole(): TaskRoleSett | undefined;
  setRole(value?: TaskRoleSett): void;
  hasRole(): boolean;
  clearRole(): void;

  getAccountGroupListApplyList(): Array<AccountGroup>;
  setAccountGroupListApplyList(value: Array<AccountGroup>): void;
  clearAccountGroupListApplyList(): void;
  addAccountGroupListApply(value?: AccountGroup, index?: number): AccountGroup;

  getAccountGroupListPossibleList(): Array<AccountGroup>;
  setAccountGroupListPossibleList(value: Array<AccountGroup>): void;
  clearAccountGroupListPossibleList(): void;
  addAccountGroupListPossible(value?: AccountGroup, index?: number): AccountGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRole.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRole): TaskRole.AsObject;
  static serializeBinaryToWriter(message: TaskRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRole;
  static deserializeBinaryFromReader(message: TaskRole, reader: jspb.BinaryReader): TaskRole;
}

export namespace TaskRole {
  export type AsObject = {
    demand?: RoleDemand.AsObject,
    role?: TaskRoleSett.AsObject,
    accountGroupListApplyList: Array<AccountGroup.AsObject>,
    accountGroupListPossibleList: Array<AccountGroup.AsObject>,
  }
}

export class TaskRoleInput extends jspb.Message {
  getRoleind(): number;
  setRoleind(value: number): void;

  getAccountGroupListList(): Array<number>;
  setAccountGroupListList(value: Array<number>): void;
  clearAccountGroupListList(): void;
  addAccountGroupList(value: number, index?: number): void;

  getReplacerule(): number;
  setReplacerule(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRoleInput.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRoleInput): TaskRoleInput.AsObject;
  static serializeBinaryToWriter(message: TaskRoleInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRoleInput;
  static deserializeBinaryFromReader(message: TaskRoleInput, reader: jspb.BinaryReader): TaskRoleInput;
}

export namespace TaskRoleInput {
  export type AsObject = {
    roleind: number,
    accountGroupListList: Array<number>,
    replacerule: number,
  }
}

export class TaskSett extends jspb.Message {
  getItem(): TaskItemSett | undefined;
  setItem(value?: TaskItemSett): void;
  hasItem(): boolean;
  clearItem(): void;

  getContent(): TaskContentSett | undefined;
  setContent(value?: TaskContentSett): void;
  hasContent(): boolean;
  clearContent(): void;

  getStatus(): TaskStatusSett | undefined;
  setStatus(value?: TaskStatusSett): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getManual(): TaskManual | undefined;
  setManual(value?: TaskManual): void;
  hasManual(): boolean;
  clearManual(): void;

  getState(): TaskState | undefined;
  setState(value?: TaskState): void;
  hasState(): boolean;
  clearState(): void;

  getRoleSettList(): Array<TaskRole>;
  setRoleSettList(value: Array<TaskRole>): void;
  clearRoleSettList(): void;
  addRoleSett(value?: TaskRole, index?: number): TaskRole;

  getRoleInputList(): Array<TaskRoleInput>;
  setRoleInputList(value: Array<TaskRoleInput>): void;
  clearRoleInputList(): void;
  addRoleInput(value?: TaskRoleInput, index?: number): TaskRoleInput;

  getSessionAccountState(): number;
  setSessionAccountState(value: number): void;

  getAccountApplyList(): Array<TaskAccountParticipant>;
  setAccountApplyList(value: Array<TaskAccountParticipant>): void;
  clearAccountApplyList(): void;
  addAccountApply(value?: TaskAccountParticipant, index?: number): TaskAccountParticipant;

  getClientInd(): number;
  setClientInd(value: number): void;

  getDateStart(): number;
  setDateStart(value: number): void;

  getStatsStatusListList(): Array<StatsItem>;
  setStatsStatusListList(value: Array<StatsItem>): void;
  clearStatsStatusListList(): void;
  addStatsStatusList(value?: StatsItem, index?: number): StatsItem;

  getStatsAggregateListList(): Array<StatsItem>;
  setStatsAggregateListList(value: Array<StatsItem>): void;
  clearStatsAggregateListList(): void;
  addStatsAggregateList(value?: StatsItem, index?: number): StatsItem;

  getAssignedTaskListList(): Array<number>;
  setAssignedTaskListList(value: Array<number>): void;
  clearAssignedTaskListList(): void;
  addAssignedTaskList(value: number, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskSett.AsObject;
  static toObject(includeInstance: boolean, msg: TaskSett): TaskSett.AsObject;
  static serializeBinaryToWriter(message: TaskSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskSett;
  static deserializeBinaryFromReader(message: TaskSett, reader: jspb.BinaryReader): TaskSett;
}

export namespace TaskSett {
  export type AsObject = {
    item?: TaskItemSett.AsObject,
    content?: TaskContentSett.AsObject,
    status?: TaskStatusSett.AsObject,
    manual?: TaskManual.AsObject,
    state?: TaskState.AsObject,
    roleSettList: Array<TaskRole.AsObject>,
    roleInputList: Array<TaskRoleInput.AsObject>,
    sessionAccountState: number,
    accountApplyList: Array<TaskAccountParticipant.AsObject>,
    clientInd: number,
    dateStart: number,
    statsStatusListList: Array<StatsItem.AsObject>,
    statsAggregateListList: Array<StatsItem.AsObject>,
    assignedTaskListList: Array<number>,
  }
}

export class TaskTemplate extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getAccountGroupListList(): Array<number>;
  setAccountGroupListList(value: Array<number>): void;
  clearAccountGroupListList(): void;
  addAccountGroupList(value: number, index?: number): void;

  getPathrule(): number;
  setPathrule(value: number): void;

  getInput(): TaskFieldsInputValues | undefined;
  setInput(value?: TaskFieldsInputValues): void;
  hasInput(): boolean;
  clearInput(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTemplate): TaskTemplate.AsObject;
  static serializeBinaryToWriter(message: TaskTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTemplate;
  static deserializeBinaryFromReader(message: TaskTemplate, reader: jspb.BinaryReader): TaskTemplate;
}

export namespace TaskTemplate {
  export type AsObject = {
    ind: number,
    accountGroupListList: Array<number>,
    pathrule: number,
    input?: TaskFieldsInputValues.AsObject,
  }
}

export class FiedDfAccountGroupItem extends jspb.Message {
  getAccountGroupInd(): number;
  setAccountGroupInd(value: number): void;

  getDfFieldList(): TaskFieldsInputValues | undefined;
  setDfFieldList(value?: TaskFieldsInputValues): void;
  hasDfFieldList(): boolean;
  clearDfFieldList(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FiedDfAccountGroupItem.AsObject;
  static toObject(includeInstance: boolean, msg: FiedDfAccountGroupItem): FiedDfAccountGroupItem.AsObject;
  static serializeBinaryToWriter(message: FiedDfAccountGroupItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FiedDfAccountGroupItem;
  static deserializeBinaryFromReader(message: FiedDfAccountGroupItem, reader: jspb.BinaryReader): FiedDfAccountGroupItem;
}

export namespace FiedDfAccountGroupItem {
  export type AsObject = {
    accountGroupInd: number,
    dfFieldList?: TaskFieldsInputValues.AsObject,
  }
}

export class StatusPathRule extends jspb.Message {
  getInputSett(): TaskFieldsInputSett | undefined;
  setInputSett(value?: TaskFieldsInputSett): void;
  hasInputSett(): boolean;
  clearInputSett(): void;

  getAccoutGroupListList(): Array<FiedDfAccountGroupItem>;
  setAccoutGroupListList(value: Array<FiedDfAccountGroupItem>): void;
  clearAccoutGroupListList(): void;
  addAccoutGroupList(value?: FiedDfAccountGroupItem, index?: number): FiedDfAccountGroupItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathRule.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathRule): StatusPathRule.AsObject;
  static serializeBinaryToWriter(message: StatusPathRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathRule;
  static deserializeBinaryFromReader(message: StatusPathRule, reader: jspb.BinaryReader): StatusPathRule;
}

export namespace StatusPathRule {
  export type AsObject = {
    inputSett?: TaskFieldsInputSett.AsObject,
    accoutGroupListList: Array<FiedDfAccountGroupItem.AsObject>,
  }
}

export class PathSubtask extends jspb.Message {
  getStatusInd(): number;
  setStatusInd(value: number): void;

  getStatusPathRule(): StatusPathRule | undefined;
  setStatusPathRule(value?: StatusPathRule): void;
  hasStatusPathRule(): boolean;
  clearStatusPathRule(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathSubtask.AsObject;
  static toObject(includeInstance: boolean, msg: PathSubtask): PathSubtask.AsObject;
  static serializeBinaryToWriter(message: PathSubtask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathSubtask;
  static deserializeBinaryFromReader(message: PathSubtask, reader: jspb.BinaryReader): PathSubtask;
}

export namespace PathSubtask {
  export type AsObject = {
    statusInd: number,
    statusPathRule?: StatusPathRule.AsObject,
  }
}

export class TaskRequestFilter extends jspb.Message {
  getApplyMask(): SittelleConst_pb.EnumFilterApplyType;
  setApplyMask(value: SittelleConst_pb.EnumFilterApplyType): void;

  getParentTaskIndList(): string;
  setParentTaskIndList(value: string): void;

  getTaskIndList(): string;
  setTaskIndList(value: string): void;

  getSourceListList(): Array<string>;
  setSourceListList(value: Array<string>): void;
  clearSourceListList(): void;
  addSourceList(value: string, index?: number): void;

  getMonObjectListList(): Array<number>;
  setMonObjectListList(value: Array<number>): void;
  clearMonObjectListList(): void;
  addMonObjectList(value: number, index?: number): void;

  getStatusListList(): Array<number>;
  setStatusListList(value: Array<number>): void;
  clearStatusListList(): void;
  addStatusList(value: number, index?: number): void;

  getContentCaptionListList(): Array<string>;
  setContentCaptionListList(value: Array<string>): void;
  clearContentCaptionListList(): void;
  addContentCaptionList(value: string, index?: number): void;

  getTaskTypeListList(): Array<number>;
  setTaskTypeListList(value: Array<number>): void;
  clearTaskTypeListList(): void;
  addTaskTypeList(value: number, index?: number): void;

  getManualParamListList(): Array<SittelleTypeManual_pb.ManualValue>;
  setManualParamListList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearManualParamListList(): void;
  addManualParamList(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  getDateCreateFrom(): number;
  setDateCreateFrom(value: number): void;

  getDateCreateTo(): number;
  setDateCreateTo(value: number): void;

  getDateChangeFrom(): number;
  setDateChangeFrom(value: number): void;

  getDateChangeTo(): number;
  setDateChangeTo(value: number): void;

  getState(): number;
  setState(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskRequestFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TaskRequestFilter): TaskRequestFilter.AsObject;
  static serializeBinaryToWriter(message: TaskRequestFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskRequestFilter;
  static deserializeBinaryFromReader(message: TaskRequestFilter, reader: jspb.BinaryReader): TaskRequestFilter;
}

export namespace TaskRequestFilter {
  export type AsObject = {
    applyMask: SittelleConst_pb.EnumFilterApplyType,
    parentTaskIndList: string,
    taskIndList: string,
    sourceListList: Array<string>,
    monObjectListList: Array<number>,
    statusListList: Array<number>,
    contentCaptionListList: Array<string>,
    taskTypeListList: Array<number>,
    manualParamListList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
    dateCreateFrom: number,
    dateCreateTo: number,
    dateChangeFrom: number,
    dateChangeTo: number,
    state: number,
  }
}

export class StatusSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  getTaskTypeInd(): number;
  setTaskTypeInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getCaptionRegion(): string;
  setCaptionRegion(value: string): void;

  getCaptionAction(): string;
  setCaptionAction(value: string): void;

  getCaptionStatus(): string;
  setCaptionStatus(value: string): void;

  getCaptionCreate(): string;
  setCaptionCreate(value: string): void;

  getDescr(): string;
  setDescr(value: string): void;

  getColorFont(): number;
  setColorFont(value: number): void;

  getColorBackground(): number;
  setColorBackground(value: number): void;

  getColorFontBase(): number;
  setColorFontBase(value: number): void;

  getColorBackgroundBase(): number;
  setColorBackgroundBase(value: number): void;

  getIsCreate(): boolean;
  setIsCreate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusSett.AsObject;
  static toObject(includeInstance: boolean, msg: StatusSett): StatusSett.AsObject;
  static serializeBinaryToWriter(message: StatusSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusSett;
  static deserializeBinaryFromReader(message: StatusSett, reader: jspb.BinaryReader): StatusSett;
}

export namespace StatusSett {
  export type AsObject = {
    ind: number,
    priority: number,
    taskTypeInd: number,
    caption: string,
    captionRegion: string,
    captionAction: string,
    captionStatus: string,
    captionCreate: string,
    descr: string,
    colorFont: number,
    colorBackground: number,
    colorFontBase: number,
    colorBackgroundBase: number,
    isCreate: boolean,
  }
}

export class StatusInputSett extends jspb.Message {
  getSubtaskPathInd(): number;
  setSubtaskPathInd(value: number): void;

  getFieldManual(): number;
  setFieldManual(value: number): void;

  getFieldAuto(): number;
  setFieldAuto(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  getValueList(): TaskFieldsInputValues | undefined;
  setValueList(value?: TaskFieldsInputValues): void;
  hasValueList(): boolean;
  clearValueList(): void;

  getInd(): number;
  setInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusInputSett.AsObject;
  static toObject(includeInstance: boolean, msg: StatusInputSett): StatusInputSett.AsObject;
  static serializeBinaryToWriter(message: StatusInputSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusInputSett;
  static deserializeBinaryFromReader(message: StatusInputSett, reader: jspb.BinaryReader): StatusInputSett;
}

export namespace StatusInputSett {
  export type AsObject = {
    subtaskPathInd: number,
    fieldManual: number,
    fieldAuto: number,
    statusInd: number,
    valueList?: TaskFieldsInputValues.AsObject,
    ind: number,
  }
}

export class TaskFieldsInput extends jspb.Message {
  getSett(): TaskFieldsInputSett | undefined;
  setSett(value?: TaskFieldsInputSett): void;
  hasSett(): boolean;
  clearSett(): void;

  getInput(): TaskFieldsInputValues | undefined;
  setInput(value?: TaskFieldsInputValues): void;
  hasInput(): boolean;
  clearInput(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskFieldsInput.AsObject;
  static toObject(includeInstance: boolean, msg: TaskFieldsInput): TaskFieldsInput.AsObject;
  static serializeBinaryToWriter(message: TaskFieldsInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskFieldsInput;
  static deserializeBinaryFromReader(message: TaskFieldsInput, reader: jspb.BinaryReader): TaskFieldsInput;
}

export namespace TaskFieldsInput {
  export type AsObject = {
    sett?: TaskFieldsInputSett.AsObject,
    input?: TaskFieldsInputValues.AsObject,
  }
}

export class TaskFieldsInputSett extends jspb.Message {
  getFieldManual(): number;
  setFieldManual(value: number): void;

  getFieldAuto(): number;
  setFieldAuto(value: number): void;

  getSubtaskPathInd(): number;
  setSubtaskPathInd(value: number): void;

  getPathRule(): number;
  setPathRule(value: number): void;

  getStatusInd(): number;
  setStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskFieldsInputSett.AsObject;
  static toObject(includeInstance: boolean, msg: TaskFieldsInputSett): TaskFieldsInputSett.AsObject;
  static serializeBinaryToWriter(message: TaskFieldsInputSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskFieldsInputSett;
  static deserializeBinaryFromReader(message: TaskFieldsInputSett, reader: jspb.BinaryReader): TaskFieldsInputSett;
}

export namespace TaskFieldsInputSett {
  export type AsObject = {
    fieldManual: number,
    fieldAuto: number,
    subtaskPathInd: number,
    pathRule: number,
    statusInd: number,
  }
}

export class TaskItemInput extends jspb.Message {
  getMonObjectInd(): number;
  setMonObjectInd(value: number): void;

  getSourceId(): string;
  setSourceId(value: string): void;

  getSourceInd(): number;
  setSourceInd(value: number): void;

  getTableText(): string;
  setTableText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskItemInput.AsObject;
  static toObject(includeInstance: boolean, msg: TaskItemInput): TaskItemInput.AsObject;
  static serializeBinaryToWriter(message: TaskItemInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskItemInput;
  static deserializeBinaryFromReader(message: TaskItemInput, reader: jspb.BinaryReader): TaskItemInput;
}

export namespace TaskItemInput {
  export type AsObject = {
    monObjectInd: number,
    sourceId: string,
    sourceInd: number,
    tableText: string,
  }
}

export class StatsItem extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getValueStats(): number;
  setValueStats(value: number): void;

  getValueValue(): number;
  setValueValue(value: number): void;

  getTaskIndList(): number;
  setTaskIndList(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsItem.AsObject;
  static toObject(includeInstance: boolean, msg: StatsItem): StatsItem.AsObject;
  static serializeBinaryToWriter(message: StatsItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsItem;
  static deserializeBinaryFromReader(message: StatsItem, reader: jspb.BinaryReader): StatsItem;
}

export namespace StatsItem {
  export type AsObject = {
    ind: number,
    valueStats: number,
    valueValue: number,
    taskIndList: number,
  }
}

export class TaskContentInput extends jspb.Message {
  getContentCaption(): string;
  setContentCaption(value: string): void;

  getContentContent(): string;
  setContentContent(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getActivePlanningStart(): boolean;
  setActivePlanningStart(value: boolean): void;

  getDatePlanningStart(): number;
  setDatePlanningStart(value: number): void;

  getActivePlanningEnd(): boolean;
  setActivePlanningEnd(value: boolean): void;

  getDatePlanningEnd(): number;
  setDatePlanningEnd(value: number): void;

  getTimeEstimate(): number;
  setTimeEstimate(value: number): void;

  getMonObjectIndListList(): Array<number>;
  setMonObjectIndListList(value: Array<number>): void;
  clearMonObjectIndListList(): void;
  addMonObjectIndList(value: number, index?: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskContentInput.AsObject;
  static toObject(includeInstance: boolean, msg: TaskContentInput): TaskContentInput.AsObject;
  static serializeBinaryToWriter(message: TaskContentInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskContentInput;
  static deserializeBinaryFromReader(message: TaskContentInput, reader: jspb.BinaryReader): TaskContentInput;
}

export namespace TaskContentInput {
  export type AsObject = {
    contentCaption: string,
    contentContent: string,
    priority: number,
    activePlanningStart: boolean,
    datePlanningStart: number,
    activePlanningEnd: boolean,
    datePlanningEnd: number,
    timeEstimate: number,
    monObjectIndListList: Array<number>,
    price: number,
  }
}

export class TaskStatusInput extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getDateSend(): number;
  setDateSend(value: number): void;

  getStatusText(): string;
  setStatusText(value: string): void;

  getStatusComment(): string;
  setStatusComment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusInput.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusInput): TaskStatusInput.AsObject;
  static serializeBinaryToWriter(message: TaskStatusInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusInput;
  static deserializeBinaryFromReader(message: TaskStatusInput, reader: jspb.BinaryReader): TaskStatusInput;
}

export namespace TaskStatusInput {
  export type AsObject = {
    chainId: string,
    messageId: string,
    dateSend: number,
    statusText: string,
    statusComment: string,
  }
}

export class TaskStateInput extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStateInput.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStateInput): TaskStateInput.AsObject;
  static serializeBinaryToWriter(message: TaskStateInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStateInput;
  static deserializeBinaryFromReader(message: TaskStateInput, reader: jspb.BinaryReader): TaskStateInput;
}

export namespace TaskStateInput {
  export type AsObject = {
    value: number,
  }
}

export class TaskCommentInput extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getTextFormat(): number;
  setTextFormat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCommentInput.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCommentInput): TaskCommentInput.AsObject;
  static serializeBinaryToWriter(message: TaskCommentInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCommentInput;
  static deserializeBinaryFromReader(message: TaskCommentInput, reader: jspb.BinaryReader): TaskCommentInput;
}

export namespace TaskCommentInput {
  export type AsObject = {
    text: string,
    data: Uint8Array | string,
    textFormat: number,
  }
}

export class TaskFieldsInputValues extends jspb.Message {
  getItem(): TaskItemInput | undefined;
  setItem(value?: TaskItemInput): void;
  hasItem(): boolean;
  clearItem(): void;

  getContent(): TaskContentInput | undefined;
  setContent(value?: TaskContentInput): void;
  hasContent(): boolean;
  clearContent(): void;

  getStatus(): TaskStatusInput | undefined;
  setStatus(value?: TaskStatusInput): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getState(): TaskStateInput | undefined;
  setState(value?: TaskStateInput): void;
  hasState(): boolean;
  clearState(): void;

  getRoleList(): Array<TaskRoleInput>;
  setRoleList(value: Array<TaskRoleInput>): void;
  clearRoleList(): void;
  addRole(value?: TaskRoleInput, index?: number): TaskRoleInput;

  getManualList(): Array<SittelleTypeManual_pb.ManualValue>;
  setManualList(value: Array<SittelleTypeManual_pb.ManualValue>): void;
  clearManualList(): void;
  addManual(value?: SittelleTypeManual_pb.ManualValue, index?: number): SittelleTypeManual_pb.ManualValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskFieldsInputValues.AsObject;
  static toObject(includeInstance: boolean, msg: TaskFieldsInputValues): TaskFieldsInputValues.AsObject;
  static serializeBinaryToWriter(message: TaskFieldsInputValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskFieldsInputValues;
  static deserializeBinaryFromReader(message: TaskFieldsInputValues, reader: jspb.BinaryReader): TaskFieldsInputValues;
}

export namespace TaskFieldsInputValues {
  export type AsObject = {
    item?: TaskItemInput.AsObject,
    content?: TaskContentInput.AsObject,
    status?: TaskStatusInput.AsObject,
    state?: TaskStateInput.AsObject,
    roleList: Array<TaskRoleInput.AsObject>,
    manualList: Array<SittelleTypeManual_pb.ManualValue.AsObject>,
  }
}

export class StatusPathSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getBeforeStatusInd(): number;
  setBeforeStatusInd(value: number): void;

  getRequestStatusInd(): number;
  setRequestStatusInd(value: number): void;

  getMandatorySubtaskListList(): Array<PathSubtask>;
  setMandatorySubtaskListList(value: Array<PathSubtask>): void;
  clearMandatorySubtaskListList(): void;
  addMandatorySubtaskList(value?: PathSubtask, index?: number): PathSubtask;

  getConditionalSubtaskListList(): Array<PathSubtask>;
  setConditionalSubtaskListList(value: Array<PathSubtask>): void;
  clearConditionalSubtaskListList(): void;
  addConditionalSubtaskList(value?: PathSubtask, index?: number): PathSubtask;

  getAfterStatusInd(): number;
  setAfterStatusInd(value: number): void;

  getSubtasksAllInGroupListList(): Array<number>;
  setSubtasksAllInGroupListList(value: Array<number>): void;
  clearSubtasksAllInGroupListList(): void;
  addSubtasksAllInGroupList(value: number, index?: number): void;

  getSubtasksAllNotInGroupListList(): Array<number>;
  setSubtasksAllNotInGroupListList(value: Array<number>): void;
  clearSubtasksAllNotInGroupListList(): void;
  addSubtasksAllNotInGroupList(value: number, index?: number): void;

  getSubtasksAnyInGroupListList(): Array<number>;
  setSubtasksAnyInGroupListList(value: Array<number>): void;
  clearSubtasksAnyInGroupListList(): void;
  addSubtasksAnyInGroupList(value: number, index?: number): void;

  getSubtasksAnyNotInGroupListList(): Array<number>;
  setSubtasksAnyNotInGroupListList(value: Array<number>): void;
  clearSubtasksAnyNotInGroupListList(): void;
  addSubtasksAnyNotInGroupList(value: number, index?: number): void;

  getParentTaskInGroupListList(): Array<number>;
  setParentTaskInGroupListList(value: Array<number>): void;
  clearParentTaskInGroupListList(): void;
  addParentTaskInGroupList(value: number, index?: number): void;

  getParentTaskNotInGroupListList(): Array<number>;
  setParentTaskNotInGroupListList(value: Array<number>): void;
  clearParentTaskNotInGroupListList(): void;
  addParentTaskNotInGroupList(value: number, index?: number): void;

  getDescr(): string;
  setDescr(value: string): void;

  getPathRule(): StatusPathRule | undefined;
  setPathRule(value?: StatusPathRule): void;
  hasPathRule(): boolean;
  clearPathRule(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathSett.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathSett): StatusPathSett.AsObject;
  static serializeBinaryToWriter(message: StatusPathSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathSett;
  static deserializeBinaryFromReader(message: StatusPathSett, reader: jspb.BinaryReader): StatusPathSett;
}

export namespace StatusPathSett {
  export type AsObject = {
    ind: number,
    beforeStatusInd: number,
    requestStatusInd: number,
    mandatorySubtaskListList: Array<PathSubtask.AsObject>,
    conditionalSubtaskListList: Array<PathSubtask.AsObject>,
    afterStatusInd: number,
    subtasksAllInGroupListList: Array<number>,
    subtasksAllNotInGroupListList: Array<number>,
    subtasksAnyInGroupListList: Array<number>,
    subtasksAnyNotInGroupListList: Array<number>,
    parentTaskInGroupListList: Array<number>,
    parentTaskNotInGroupListList: Array<number>,
    descr: string,
    pathRule?: StatusPathRule.AsObject,
  }
}

export class StatusPathAutoApplySubtasks extends jspb.Message {
  getApplyStatusBeforeIndParentList(): Array<number>;
  setApplyStatusBeforeIndParentList(value: Array<number>): void;
  clearApplyStatusBeforeIndParentList(): void;
  addApplyStatusBeforeIndParent(value: number, index?: number): void;

  getApplyStatusAfterIndParent(): number;
  setApplyStatusAfterIndParent(value: number): void;

  getAutoStatusBeforeIndChildList(): Array<number>;
  setAutoStatusBeforeIndChildList(value: Array<number>): void;
  clearAutoStatusBeforeIndChildList(): void;
  addAutoStatusBeforeIndChild(value: number, index?: number): void;

  getAutoStatusAfterIndChild(): number;
  setAutoStatusAfterIndChild(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathAutoApplySubtasks.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathAutoApplySubtasks): StatusPathAutoApplySubtasks.AsObject;
  static serializeBinaryToWriter(message: StatusPathAutoApplySubtasks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathAutoApplySubtasks;
  static deserializeBinaryFromReader(message: StatusPathAutoApplySubtasks, reader: jspb.BinaryReader): StatusPathAutoApplySubtasks;
}

export namespace StatusPathAutoApplySubtasks {
  export type AsObject = {
    applyStatusBeforeIndParentList: Array<number>,
    applyStatusAfterIndParent: number,
    autoStatusBeforeIndChildList: Array<number>,
    autoStatusAfterIndChild: number,
  }
}

export class StatusPathAutoApplyParent extends jspb.Message {
  getBeforeStatusInd(): number;
  setBeforeStatusInd(value: number): void;

  getAutoStatusInd(): number;
  setAutoStatusInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusPathAutoApplyParent.AsObject;
  static toObject(includeInstance: boolean, msg: StatusPathAutoApplyParent): StatusPathAutoApplyParent.AsObject;
  static serializeBinaryToWriter(message: StatusPathAutoApplyParent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusPathAutoApplyParent;
  static deserializeBinaryFromReader(message: StatusPathAutoApplyParent, reader: jspb.BinaryReader): StatusPathAutoApplyParent;
}

export namespace StatusPathAutoApplyParent {
  export type AsObject = {
    beforeStatusInd: number,
    autoStatusInd: number,
  }
}

export class TaskTypeSett extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getCaption(): string;
  setCaption(value: string): void;

  getCaptionRegion(): string;
  setCaptionRegion(value: string): void;

  getStatusListList(): Array<StatusSett>;
  setStatusListList(value: Array<StatusSett>): void;
  clearStatusListList(): void;
  addStatusList(value?: StatusSett, index?: number): StatusSett;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskTypeSett.AsObject;
  static toObject(includeInstance: boolean, msg: TaskTypeSett): TaskTypeSett.AsObject;
  static serializeBinaryToWriter(message: TaskTypeSett, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskTypeSett;
  static deserializeBinaryFromReader(message: TaskTypeSett, reader: jspb.BinaryReader): TaskTypeSett;
}

export namespace TaskTypeSett {
  export type AsObject = {
    ind: number,
    caption: string,
    captionRegion: string,
    statusListList: Array<StatusSett.AsObject>,
  }
}

export class AccountGroupRoleAction extends jspb.Message {
  getChangeAction(): number;
  setChangeAction(value: number): void;

  getTaskRoleInd(): number;
  setTaskRoleInd(value: number): void;

  getAccountGroupIndList(): Array<number>;
  setAccountGroupIndList(value: Array<number>): void;
  clearAccountGroupIndList(): void;
  addAccountGroupInd(value: number, index?: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountGroupRoleAction.AsObject;
  static toObject(includeInstance: boolean, msg: AccountGroupRoleAction): AccountGroupRoleAction.AsObject;
  static serializeBinaryToWriter(message: AccountGroupRoleAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountGroupRoleAction;
  static deserializeBinaryFromReader(message: AccountGroupRoleAction, reader: jspb.BinaryReader): AccountGroupRoleAction;
}

export namespace AccountGroupRoleAction {
  export type AsObject = {
    changeAction: number,
    taskRoleInd: number,
    accountGroupIndList: Array<number>,
    taskInd: number,
    sessInd: number,
    accountApply?: Account.AsObject,
  }
}

export class HistoryRoleAction extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getAction(): number;
  setAction(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getAccountGroup(): AccountGroup | undefined;
  setAccountGroup(value?: AccountGroup): void;
  hasAccountGroup(): boolean;
  clearAccountGroup(): void;

  getTaskRole(): TaskRoleSett | undefined;
  setTaskRole(value?: TaskRoleSett): void;
  hasTaskRole(): boolean;
  clearTaskRole(): void;

  getDateApply(): number;
  setDateApply(value: number): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoryRoleAction.AsObject;
  static toObject(includeInstance: boolean, msg: HistoryRoleAction): HistoryRoleAction.AsObject;
  static serializeBinaryToWriter(message: HistoryRoleAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoryRoleAction;
  static deserializeBinaryFromReader(message: HistoryRoleAction, reader: jspb.BinaryReader): HistoryRoleAction;
}

export namespace HistoryRoleAction {
  export type AsObject = {
    ind: number,
    action: number,
    taskInd: number,
    accountGroup?: AccountGroup.AsObject,
    taskRole?: TaskRoleSett.AsObject,
    dateApply: number,
    accountApply?: Account.AsObject,
    sessInd: number,
  }
}

export class TaskComment extends jspb.Message {
  getInd(): number;
  setInd(value: number): void;

  getTaskInd(): number;
  setTaskInd(value: number): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  getText(): string;
  setText(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getTextFormat(): number;
  setTextFormat(value: number): void;

  getDateApply(): number;
  setDateApply(value: number): void;

  getSessInd(): number;
  setSessInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskComment.AsObject;
  static toObject(includeInstance: boolean, msg: TaskComment): TaskComment.AsObject;
  static serializeBinaryToWriter(message: TaskComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskComment;
  static deserializeBinaryFromReader(message: TaskComment, reader: jspb.BinaryReader): TaskComment;
}

export namespace TaskComment {
  export type AsObject = {
    ind: number,
    taskInd: number,
    accountApply?: Account.AsObject,
    text: string,
    data: Uint8Array | string,
    textFormat: number,
    dateApply: number,
    sessInd: number,
  }
}

export class TaskEvent extends jspb.Message {
  getTaskSett(): TaskSett | undefined;
  setTaskSett(value?: TaskSett): void;
  hasTaskSett(): boolean;
  clearTaskSett(): void;

  getEventType(): number;
  setEventType(value: number): void;

  getDateTime(): number;
  setDateTime(value: number): void;

  getText(): string;
  setText(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getAccountApply(): Account | undefined;
  setAccountApply(value?: Account): void;
  hasAccountApply(): boolean;
  clearAccountApply(): void;

  getClientInd(): number;
  setClientInd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TaskEvent): TaskEvent.AsObject;
  static serializeBinaryToWriter(message: TaskEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskEvent;
  static deserializeBinaryFromReader(message: TaskEvent, reader: jspb.BinaryReader): TaskEvent;
}

export namespace TaskEvent {
  export type AsObject = {
    taskSett?: TaskSett.AsObject,
    eventType: number,
    dateTime: number,
    text: string,
    content: string,
    accountApply?: Account.AsObject,
    clientInd: number,
  }
}

export class AdditionalParam extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalParam.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalParam): AdditionalParam.AsObject;
  static serializeBinaryToWriter(message: AdditionalParam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalParam;
  static deserializeBinaryFromReader(message: AdditionalParam, reader: jspb.BinaryReader): AdditionalParam;
}

export namespace AdditionalParam {
  export type AsObject = {
    name: string,
    value: string,
  }
}

