"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./tslib.es6-b49e58b3.js"),a=require("react"),t=require("./dayjs.min-686ce23b.js"),r=require("./calendar-utils-56c89404.js"),n=require("./calendar-7ce516eb.js"),i=require("./popup-menu.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./_commonjsHelpers-72d386ba.js"),require("./style-inject.es-dcee06b6.js");var d=s(a);t.dayjs_min.extend(t.arraySupport),t.dayjs_min.extend(r.advancedFormat);exports.DatePicker=function(a){var r,s=a.value,l=a.validator,u=a.className,o=a.displayFormat,c=a.placeholder,m=a.onChange,j=e.__rest(a,["value","validator","className","displayFormat","placeholder","onChange"]);return d.default.createElement(i.PopupMenu,null,d.default.createElement("div",e.__assign({className:(r=["react-simple-widget","date-picker"],u&&r.push(u),r.join(" "))},j),s?t.dayjs_min(s).format(o||"ddd, Do MMM YYYY"):c),(function(e){return d.default.createElement(n.Calendar,{initialDate:s||void 0,className:"d-inline-block w-auto",isDateActive:function(e,a,r){return t.dayjs_min([e,a,r]).format("YYYY-MM-DD")===s},isDateOutlined:function(e,a,r){return t.dayjs_min([e,a,r]).date()===t.dayjs_min(s,"YYYY-MM-DD").date()},validator:l,onChange:function(a){m(a),e()}})}))};
