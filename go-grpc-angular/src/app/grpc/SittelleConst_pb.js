// source: SittelleConst.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.SittelleProtos.EnumAccountGroupPossibleRule', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumAccountGroupPossibleValue', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumAccountGroupType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumAccountGuiSett', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumAccountState', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumAction', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumAutomticWaterExtKind', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumAutomticWaterExtType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumCommonState', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumCompanyGroup', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumDfRoleRule', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumFilterApplyType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumInputFieldGroup', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumManualParamSystem', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumManualParamType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumMaskApplyType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumNotify', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumNotifyType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumPathType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumRequirementRelationship', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumSourceCMD', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumStatsAggregate', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumStatusGroup', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumSystemConst', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumSystemTaskStatus', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumTaskAction', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumTaskField', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumTaskRight', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumTaskRoleRule', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumTaskSustemRole', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumTaskType', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumTextFromat', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumUserPanelDemand', null, global);
goog.exportSymbol('proto.SittelleProtos.EnumWarningAndEvacuationType', null, global);
/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAccountGroupPossibleValue = {
  ACCOUNT_GROUP_POSS_UNDEFINED: 0,
  ACCOUNT_GROUP_POSS_CURRENT: -1
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumSystemConst = {
  TASK_PARENT_UNDEFINED: 0,
  TASK_PARENT_ROOT: 1,
  TASK_PARENT_IGNORE: 0,
  TASK_EMPTY: 1,
  TASK_TYPE_EMPTY: 1,
  TASK_STATUS_ALL: 0,
  TASK_STATUS_EMPTY: 1,
  TASK_STATUS_PATH_MAIN: 0,
  TASK_SYSTEM_ACCOUNT_IND: 1,
  TASK_SYSTEM_SESSION_IND: 1,
  ACCOUNT_GROUP_ALL_IND: 1,
  MONOBJECT_EMPTY_IND: 0,
  MONOBJECT_DF_IND: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumNotifyType = {
  NOTIFY_TYPE_TASK_UNDEFINED: 0,
  NOTIFY_TYPE_TASK_CHANGE: 1,
  NOTIFY_TYPE_CONFIG_CHANGE: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumSystemTaskStatus = {
  STATUS_UNDEFINED: 0,
  STATUS_MONTHINSPECTION_LIST_EDIT: 90,
  STATUS_MONTHINSPECTION_ACTIVATED: 91,
  STATUS_MONTHINSPECTION_AUTO_CLOSE: 92,
  STATUS_MONTHINSPECTION_TEMPLATE_ADD: 147,
  STATUS_MONITORING_NORMAL_STATE: 70
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumSourceCMD = {
  SOURCE_CMD_UNDEFINED: 0,
  SOURCE_CMD_TEMPLATE_ADD: 10,
  SOURCE_CMD_TASK_CAPTION_UPDATE: 11
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumInputFieldGroup = {
  INPUT_FIELD_GROUP_ITEM: 0,
  INPUT_FIELD_GROUP_CONTENT: 1,
  INPUT_FIELD_GROUP_STATUS: 2,
  INPUT_FIELD_GROUP_STATE: 3,
  INPUT_FIELD_GROUP_MANUAL: 4,
  INPUT_FIELD_GROUP_ROLE: 5
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumTaskField = {
  TASK_FIELD_UNDEFINED: 0,
  TASK_FIELD_ITEM_PARENT: 1,
  TASK_FIELD_ITEM_SOURCE: 2,
  TASK_FIELD_ITEM_MON_OBJECT: 3,
  TASK_FIELD_ITEM_CHILD_LIST: 4,
  TASK_FIELD_STATUS_CHAIN_ID: 5,
  TASK_FIELD_STATUS_MESSAGE_ID: 6,
  TASK_FIELD_STATUS_TEXT: 7,
  TASK_FIELD_STATUS_COMMENT: 8,
  TASK_FIELD_CONTENT_CAPTION: 9,
  TASK_FIELD_CONTENT_TEXT: 10,
  TASK_FIELD_CONTENT_PRIORITY: 11,
  TASK_FIELD_CONTENT_ACTIVE_PLANNING_START: 12,
  TASK_FIELD_CONTENT_DATE_PLANNING_START: 13,
  TASK_FIELD_CONTENT_ACTIVE_PLANNING_END: 14,
  TASK_FIELD_CONTENT_DATE_PLANNING_END: 15,
  TASK_FIELD_CONTENT_TIME_ESTIMATE: 16,
  TASK_FIELD_CONTENT_MON_OBJECT_LIST: 17,
  TASK_FIELD_STATE_VALUE: 18,
  TASK_FIELD_COMMENT: 19
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumStatsAggregate = {
  STATS_AGGREAGATE_UNDEFINED: 0,
  STATS_AGGREAGATE_LEN: 15,
  STATS_AGGREAGATE_COUNT: 1,
  STATS_AGGREAGATE_DATE_CHANGE_MIN: 2,
  STATS_AGGREAGATE_DATE_CHANGE_MAX: 3,
  STATS_AGGREAGATE_DATE_PLANNING_MIN: 4,
  STATS_AGGREAGATE_DATE_PLANNING_MAX: 5,
  STATS_AGGREAGATE_PRIORITY_MIN: 6,
  STATS_AGGREAGATE_PRIORITY_MAX: 7,
  STATS_AGGREAGATE_TIME_ESTIMATE_MIN: 8,
  STATS_AGGREAGATE_TIME_ESTIMATE_MAX: 9,
  STATS_AGGREAGATE_TIME_ESTIMATE_COUNT: 10,
  STATS_AGGREAGATE_PRIORITY_STATUS_MIN: 11,
  STATS_AGGREAGATE_PRIORITY_STATUS_MAX: 12,
  STATS_AGGREAGATE_DATE_START_MIN: 13,
  STATS_AGGREAGATE_DATE_START_MAX: 14
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumPathType = {
  PATH_TYPE_MAIN: 0,
  PATH_TYPE_MANDATORY: 1,
  PATH_TYPE_CONDITIONAL: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumManualParamType = {
  MANUAL_TYPE_UNDEFINED: 0,
  MANUAL_TYPE_COMBOBOX: 1,
  MANUAL_TYPE_DATETIME: 2,
  MANUAL_TYPE_STRING: 3,
  MANUAL_TYPE_LIST: 4,
  MANUAL_TYPE_TIME: 5,
  MANUAL_TYPE_BASE64: 6,
  MANUAL_TYPE_INTEGER: 7,
  MANUAL_TYPE_FLOAT: 8,
  MANUAL_TYPE_DATE: 9,
  MANUAL_TYPE_PERIOD: 10,
  MANUAL_TYPE_UNSIGHED_INT: 11,
  MANUAL_TYPE_UNSIGHED_FLOAT: 12,
  MANUAL_TYPE_BOOL: 13,
  MANUAL_TYPE_MEMO: 14
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumManualParamSystem = {
  MANUAL_PARAM_UNDEFINED: 0,
  MANUAL_PARAM_MON_OBJECT: 1
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAccountGroupPossibleRule = {
  ACCOUNT_GROUP_CHILD: 0,
  ACCOUNT_GROUP_ALL: 1,
  ACCOUNT_GROUP_CHILD_FIRST_LEVEL: 2,
  ACCOUNT_GROUP_CHILD_INCLUDE_SELF: 3,
  ACCOUNT_GROUP_CHILD_FIRST_LEVEL_INCLUDE_SELF: 4,
  ACCOUNT_GROUP_FROM_LIST: 5
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAccountGroupType = {
  ACCOUNT_GROUP_TYPE_UNDEFINED: 0,
  ACCOUNT_GROUP_TYPE_PERSONAL: 1,
  ACCOUNT_GROUP_TYPE_COMMON: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAccountGuiSett = {
  ACCOUNT_GUI_UNDEFINED: 0,
  ACCOUNT_GUI_CHART_MONITORING_MON_OBJECT_LIST: 1,
  ACCOUNT_GUI_CHART_SERVICE_MON_OBJECT_LIST: 2,
  ACCOUNT_GUI_CHART_REPAIR_MON_OBJECT_LIST: 3,
  ACCOUNT_GUI_CHART_PRESCRIPTION_MON_OBJECT_LIST: 4
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumCompanyGroup = {
  COMPANY_CROUP_MON_OBJECT: 0,
  COMPANY_CROUP_CONTRACTING: 1
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAutomticWaterExtKind = {
  WATER_EXT_KIND_UNDEFINED: 0,
  WATER_EXT_KIND_SPLINKER: 1,
  WATER_EXT_KIND_THINLY_SPRAYED: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAutomticWaterExtType = {
  WATER_EXT_UNDEFINED: 0,
  WATER_EXT_MODULAR: 1,
  WATER_EXT_AGGREGATE_WITH_PUMPS: 2,
  WATER_EXT_OTHER: 3
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumWarningAndEvacuationType = {
  WARNING_AND_EVACUATION_UNDEFINED: 0
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAction = {
  ACTION_UNDEFINED: 0,
  ACTION_ADD: 1,
  ACTION_REMOVE: 2,
  ACTION_CHANGE: 3
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumNotify = {
  NOTIFY_EMAIL_STATUS_CHANGE: 0,
  NOTIFY_SMS_STATUS_CHANGE: 1,
  NOTIFY_EMAIL_FIELD_CHANGE: 2,
  NOTIFY_SMS_FIELD_CHANGE: 3,
  NOTIFY_EMAIL_ROLE_CHANGE: 4,
  NOTIFY_SMS_ROLE_CHANGE: 5,
  NOTIFY_EMAIL_COMMENT_CHANGE: 6,
  NOTIFY_SMS_COMMENT_CHANGE: 7,
  NOTIFY_EMAIL_STATE_CHANGE: 8,
  NOTIFY_SMS_STATE_CHANGE: 9,
  NOTIFY_EMAIL_CONTENT_CHANGE: 10,
  NOTIFY_SMS_CONTENT_CHANGE: 11
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumTaskType = {
  TASK_TYPE_UNDEFINED: 0,
  TASK_TYPE_MONITORING: 11,
  TASK_TYPE_MONTHLY_TECHNICAL_INSPECTION: 16,
  TASK_TYPE_TECHNICAL_INSPECTION_AUTO: 21
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumRequirementRelationship = {
  RELATION_DEFAULT: 0,
  RELATION_UNDEFINED: -1,
  RELATION_GREATER_EQUAL: 1,
  RELATION_GREATER: 2,
  RELATION_LESS: 3,
  RELATION_LESS_EQUAL: 4,
  RELATION_EQUAL: 5,
  RELATION_AND: 6,
  RELATION_OR: 7,
  RELATION_NOT_EQUAL: 8,
  RELATION_DENIED: 9
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumTaskAction = {
  TASK_ACTION_CREATE: 0,
  TASK_ACTION_STATUS_CHANGE: 1,
  TASK_ACTION_MANUAL_CHANGE: 2,
  TASK_ACTION_ROLE_CHANGE: 3,
  TASK_ACTION_CONTENT_CHANGE: 4,
  TASK_ACTION_COMMENT_ADD: 5,
  TASK_ACTION_STATE_CHANGE: 6,
  TASK_ACTION_ITEM_CHANGE: 7,
  TASK_ACTION_PARENT_CHANGE: 8,
  TASK_ACTION_STATUS_INPUT_CHANGE: 9,
  TASK_ACTION_LOST_ACCESS: 10,
  TASK_ACTION_ACCOUNT_STATE_CHANGE: 11
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumTaskRight = {
  TASK_RIGHT_TYPE_LIST_READ: 0,
  TASK_RIGHT_READ: 1,
  TASK_RIGHT_STATUS_APPLY: 2,
  TASK_RIGHT_ITEM_CHANGE: 3,
  TASK_RIGHT_ROLE_CHANGE: 4,
  TASK_RIGHT_STATE_CHANGE: 5,
  TASK_RIGHT_COMMENT_ADD: 6,
  TASK_RIGHT_MANUAL_CHANGE: 7,
  TASK_RIGHT_STATUS_INPUT_CHANGE: 8,
  TASK_RIGHT_CONTENT_CHANGE: 9
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumTaskSustemRole = {
  TASK_ROLE_UNDEFINED: 0,
  TASK_ROLE_OWNER: 2,
  TASK_ROLE_PERFOMER: 3,
  TASK_ROLE_VIEWER: 4,
  TASK_ROLE_CONTROLLER: 5
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumDfRoleRule = {
  DF_ROLE_ADD: 0,
  DF_ROLE_REPLACE: 1,
  DF_ROLE_REMOVE: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumTaskRoleRule = {
  ROLE_RULE_CHANGE_PERFORMER_OWNER: 0,
  ROLE_RULE_OWN_TASK_EACH_PERFORMER: 1,
  ROLE_RULE_VIEWER_AGREED: 2,
  ROLE_RULE_VIEWER_SEQUENTIAL_AGREED: 3,
  ROLE_RULE_JOB_GROUP_IS_OWNER: 4,
  ROLE_RULE_EXCLUSIVE_ACCESS_WITH_REMOVE: 5,
  ROLE_RULE_EXCLUSIVE_ACCESS_WITH_TRANSFER_TO_VIEWER: 6,
  ROLE_RULE_SUBITEM_ADD_CHANGE_OWNER_VIEWER: 7,
  ROLE_RULE_SUBITEM_ADD_CHANGE_OWNER_OWNER: 8,
  ROLE_RULE_SOME_RIGHT_TASK_LIST_UP: 9,
  ROLE_RULE_SOME_RIGHT_TASK_LIST_DOWN: 10,
  ROLE_RULE_DENY_DUBLICATE_SOURCE: 11
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumAccountState = {
  ACCOUNT_STATE_SEEN: 0,
  ACCOUNT_STATE_IN_OPERATION: 1,
  ACCOUNT_STATE_TO_BOOKMARKS: 2,
  ACCOUNT_STATE_EXCLUSIVE_ACCESS: 3,
  ACCOUNT_STATE_BAN_CLIENT_NOTIFY: 4,
  ACCOUNT_STATE_BAN_SMS_NOTIFY: 5,
  ACCOUNT_STATE_BAN_EMAIL_NOTIFY: 6,
  ACCOUNT_STATE_SMS_NOTIFY: 7,
  ACCOUNT_STATE_EMAIL_NOTIFY: 8
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumCommonState = {
  COMMON_STATE_TIME_EXCEED: 0,
  COMMON_STATE_ARCHIVE: 1,
  COMMON_STATE_POSTPONED: 2,
  COMMON_STATE_EXCUSIVE_ACCESS: 3,
  COMMON_STATE_FILTERED: 4,
  COMMON_STATE_BLOCKED: 5
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumTextFromat = {
  TEXT_FORMAT_RTF: 0,
  TEXT_FORMAT_HTML: 1,
  TEXT_FORMAT_MARKDOWN: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumUserPanelDemand = {
  USER_PANEL_DEMAND_UNDEFINED: 0,
  USER_PANEL_DEMAND_HAS_CHILDREN: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumMaskApplyType = {
  MASK_APPLY_UNDEFINED: 0,
  MASK_APPLY_OR: 1,
  MASK_APPLY_AND: 2
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumFilterApplyType = {
  FILTER_APPLY_UNDEFINED: 0,
  FILTER_APPLY_OR: 1,
  FILTER_APPLY_AND: 2,
  FILTER_APPLY_NOT: 3
};

/**
 * @enum {number}
 */
proto.SittelleProtos.EnumStatusGroup = {
  STATUS_GROUP_UNDEFINED: 0,
  STATUS_GROUP_CREATE: 2,
  STATUS_GROUP_CLOSED: 3,
  STATUS_GROUP_EXECUTE: 4,
  STATUS_GROUP_WAIT: 5,
  STATUS_GROUP_WARNING: 6,
  STATUS_GROUP_GOOD_CONDITION: 7,
  STATUS_GROUP_FOR_CHART: 20,
  STATUS_GROUP_GROUPING: 21,
  STATUS_GROUP_NOT_TIME_EXCEED: 22,
  STATUS_GROUP_STATS: 23
};

goog.object.extend(exports, proto.SittelleProtos);
