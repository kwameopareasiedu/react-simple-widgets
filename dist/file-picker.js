"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./tslib.es6-b49e58b3.js"),t=require("./style-inject.es-dcee06b6.js"),n=require("react"),a=require("./types-63681d00.js"),r=require("./dialog-provider-context-06b8b83b.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=i(n);t.styleInject("");t.styleInject('.react-simple-widget.file-picker-dialog .card-body {\n  padding: 20px 30px 30px;\n}\n.react-simple-widget.file-picker-dialog header p {\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 2px;\n}\n.react-simple-widget.file-picker-dialog .drop-area {\n  border: 2px dashed #aeaeae;\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 40px 70px;\n}\n.react-simple-widget.file-picker-dialog .drop-area p {\n  margin: 0;\n  color: #888;\n  font-size: 90%;\n}\n.react-simple-widget.file-picker-dialog .drop-area p.or-separator {\n  position: relative;\n  font-size: 80%;\n}\n.react-simple-widget.file-picker-dialog .drop-area p.or-separator::before,\n.react-simple-widget.file-picker-dialog .drop-area p.or-separator::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 2px;\n  width: calc(50% - 15px);\n  background-color: #e3e3e3;\n}\n.react-simple-widget.file-picker-dialog .drop-area p.or-separator::after {\n  left: unset;\n  right: 0;\n}\n.react-simple-widget.file-picker-dialog .drop-area:hover {\n  cursor: pointer;\n  border-style: solid;\n}\n.react-simple-widget.file-picker-dialog .drop-area:focus,\n.react-simple-widget.file-picker-dialog .drop-area:active {\n  outline: none;\n  box-shadow: none;\n  border-style: solid;\n  border-color: var(--rsw-primary-color);\n}\n.react-simple-widget.file-picker-dialog .meta,\n.react-simple-widget.file-picker-dialog .error {\n  color: #888;\n  padding: 8px 30px;\n  margin: 0 -30px 20px;\n  background-color: #efefef;\n  font-style: italic;\n  text-align: center;\n}\n.react-simple-widget.file-picker-dialog .error {\n  font-size: 80%;\n  color: var(--rsw-error-color);\n  font-weight: bold;\n}\n.react-simple-widget.file-picker-dialog button.btn-primary {\n  margin-bottom: 0.5rem;\n}\n@media screen and (min-width: 576px) {\n  .react-simple-widget.file-picker-dialog button.btn-primary {\n    margin-bottom: 0;\n  }\n}');var o=function(e){var t=e.helper,a=e.limit,r=e.extensions,i=e.validator,o=n.useState(),s=o[0],c=o[1],d=n.useState(null),p=d[0],f=d[1],u=n.useRef(),m=n.useRef();n.useEffect((function(){var e=m.current,t=function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.files&&e.dataTransfer.files.length>0&&(b(e.dataTransfer.files[0]),e.dataTransfer.clearData())};return e.addEventListener("dragover",(function(e){e.preventDefault(),e.stopPropagation()})),e.addEventListener("drop",t),function(){return e.removeEventListener("drop",t)}}),[]);var g=function(e){e.preventDefault(),u.current.click()},b=function(e){if(e){var t,n=[],l=e.name,o=l.substring(l.lastIndexOf(".")+1,l.length).toLowerCase(),s=i&&i(e);r&&!r.includes(o.toLowerCase())&&n.push("Valid extensions are: ".concat(r.join(", "))),a&&a>0&&e.size>a&&n.push("File has exceeded the ".concat((t=a)>=1073741824?"".concat(t/1073741824,"GB"):t>=1048576?"".concat(t/1048576,"MB"):t>=1024?"".concat(t/1024,"KB"):"".concat(t," bytes")," limit")),s&&n.push(s),n.length>1?f(n.slice(0,n.length-1).join(", ")+" and "+n[n.length-1]):1===n.length&&f(n[0]),0===n.length?(c(e),f(null)):c(null)}};return l.default.createElement("div",{className:"react-simple-widget file-picker-dialog card"},l.default.createElement("div",{className:"card-body"},l.default.createElement("input",{ref:u,type:"file",onChange:function(e){return b(e.target.files[0])},hidden:!0}),l.default.createElement("header",{className:"d-flex justify-content-between align-items-center mb-3"},l.default.createElement("p",{className:"mb-0"},"Select File")),l.default.createElement("div",{ref:m,className:"drop-area text-center",tabIndex:0,onClick:g,onKeyUp:function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.stopPropagation(),g(e))}},l.default.createElement("p",{className:"text-center"},"Click to select file"),l.default.createElement("p",{className:"text-center or-separator"},"or"),l.default.createElement("p",{className:"text-center"},"Drag and drop file")),s&&l.default.createElement("p",{className:"meta"},s.name),p&&l.default.createElement("p",{className:"error"},p),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-6 d-grid"},l.default.createElement("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return t.dismiss(s)},disabled:!s},"Select")),l.default.createElement("div",{className:"col-6 d-grid"},l.default.createElement("button",{type:"button",className:"btn btn-link btn-sm",onClick:function(){return t.dismiss()}},"Cancel")))))};exports.FilePicker=function(t){var i,s=t.limit,c=t.extensions,d=t.validator,p=t.className,f=t.onClick,u=t.onChange,m=e.__rest(t,["limit","extensions","validator","className","onClick","onChange"]),g=n.useContext(r.DialogProviderContext).showDialog,b=n.useState(!1),x=b[0],v=b[1],k=n.useState(null),h=k[0],w=k[1],y=function(){x||(g((function(e){return l.default.createElement(o,{helper:e,limit:s,extensions:c,validator:d})}),{size:a.DialogSize.SMALL,onDismissed:function(e){e&&(w(e.name),u(e)),v(!1)}}),v(!0))};return l.default.createElement("div",e.__assign({className:(i=["react-simple-widget","file-picker"],p&&i.push(p),i.join(" ")),onClick:function(e){y(),f&&f(e)},onKeyUp:function(e){" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.stopPropagation(),y())},tabIndex:0},m),h?l.default.createElement("span",{className:"meta"},h):l.default.createElement("span",{className:"no-selection"},"No file selected. Click to upload"))};
