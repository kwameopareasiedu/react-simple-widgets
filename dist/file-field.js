"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./tslib.es6-b49e58b3.js"),r=require("./style-inject.es-dcee06b6.js"),i=require("react"),l=require("./custom-field.js"),t=require("./field-decoration.js"),n=require("./file-picker.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("formik"),require("./types-63681d00.js"),require("./dialog-provider-context-06b8b83b.js");var o=a(i);r.styleInject(".react-simple-widget.file-field .file-picker {\n  display: flex;\n}");exports.FileField=function(r){var i=r.name,a=r.label,u=r.helper,d=r.leading,s=r.trailing,c=r.disabled,f=r.onChange,b=r.onFocus,p=r.onBlur,g=e.__rest(r,["name","label","helper","leading","trailing","disabled","onChange","onFocus","onBlur"]);return o.default.createElement("div",{className:"react-simple-widget file-field"},o.default.createElement(l.CustomField,{name:i},(function(r){var i=r.error,l=r.touched,m=r.setValue,j=r.setTouched;return o.default.createElement(t.FieldDecoration,{label:a,leading:d,trailing:s,error:l&&i,helper:u,disabled:c},(function(r){var i=r.onFieldFocus,l=r.onFieldBlur;return o.default.createElement(n.FilePicker,e.__assign({onChange:function(e){m(e),f&&f(e)},onFocus:function(e){i(),j(!0),b&&b(e)},onBlur:function(e){l(),p&&p(e)}},g))}))})))};
