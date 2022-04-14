"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./tslib.es6-b49e58b3.js"),t=require("./style-inject.es-dcee06b6.js"),n=require("react"),a=require("./calendar-utils-56c89404.js"),r=require("./dayjs.min-686ce23b.js"),o=require("./popup-menu.js"),i=require("./field-decoration.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./_commonjsHelpers-72d386ba.js");var c=l(n);t.styleInject(".react-simple-widget.month-date-picker-popup header p {\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 2px;\n}\n.react-simple-widget.month-date-picker-popup header button i {\n  color: var(--rsw-primary-color);\n}\n.react-simple-widget.month-date-picker-popup select {\n  display: inline-block;\n  width: auto;\n  background-color: transparent;\n}\n.react-simple-widget.month-date-picker-popup .month-select {\n  display: grid;\n  grid-template-columns: repeat(4, 25%);\n}\n.react-simple-widget.month-date-picker-popup .month-select button {\n  transition: background-color var(--rsw-transition-duration);\n  white-space: nowrap;\n  border-radius: 2px;\n}\n.react-simple-widget.month-date-picker-popup .month-select button:focus,\n.react-simple-widget.month-date-picker-popup .month-select button:hover {\n  outline: none;\n  box-shadow: none;\n}\n.react-simple-widget.month-date-picker-popup .month-select button.active {\n  background-color: var(--rsw-primary-color);\n  color: white;\n  font-weight: bold;\n}\n.react-simple-widget.month-date-picker-popup .month-date-picker-error {\n  text-align: center;\n  margin-top: 12px;\n  padding-top: 12px;\n  font-size: 85%;\n  font-weight: bold;\n  color: var(--rsw-error-color);\n  border-top: 1px solid #e3e3e3;\n}"),r.dayjs_min.extend(r.arraySupport),r.dayjs_min.extend(a.advancedFormat);exports.MonthDatePicker=function(t){var l,s=t.value,u=t.className,p=t.validator,d=t.onChange,m=e.__rest(t,["value","className","validator","onChange"]),f=n.useState(a.dateYear(s)),h=f[0],b=f[1],g=n.useState(a.dateMonth(s)),v=g[0],y=g[1],k=n.useState(null),w=k[0],j=k[1],x=function(e){var t=["btn","btn-link","btn-sm","text-decoration-none"];return e&&t.push("active"),t.join(" ")},E=function(){var e=r.dayjs_min();b(e.year()),y(e.month())};return n.useEffect((function(){d(r.dayjs_min([h,v,1]).format("YYYY-MM-DD"))}),[v,h]),c.default.createElement(o.PopupMenu,null,c.default.createElement("div",e.__assign({className:(l=["react-simple-widget","month-date-picker"],u&&l.push(u),l.join(" "))},m),r.dayjs_min([h,v,1]).format("MMMM YYYY")),(function(e){return c.default.createElement("div",{className:"react-simple-widget month-date-picker-popup card"},c.default.createElement("div",{className:"card-body"},c.default.createElement("header",{className:"d-flex justify-content-between align-items-center mb-3"},c.default.createElement("p",{className:"mb-0"},"Select Date"),c.default.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:E},c.default.createElement("i",{className:"fa fa-clock"}))),c.default.createElement(i.FieldDecoration,{label:"Year",className:"mb-4"},(function(e){var t=e.onFieldFocus,n=e.onFieldBlur;return c.default.createElement("select",{value:h,className:"year-select",onChange:function(e){return b(parseInt(e.target.value))},onFocus:t,onBlur:n},a.years.map((function(e){return c.default.createElement("option",{key:e,value:e},e)})))})),c.default.createElement("div",{className:"month-select"},a.months.map((function(t,n){return c.default.createElement("button",{key:t,type:"button",className:x(n===v),onClick:function(){if(y(n),p){var t=r.dayjs_min([h,n,1]).format("YYYY-MM-DD"),a=p(t);if(a)return j(a);j(null)}else j(null);e()}},t.substring(0,3))}))),w&&c.default.createElement("div",{className:"month-date-picker-error"},w)))}))};
