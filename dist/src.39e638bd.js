parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=[{type:"title",value:"Hello world from JS"},{type:"text",value:"Here we go with some text"},{type:"columns",value:["111","222","333"]},{type:"img",value:"./assets/image.png"}];exports.model=e;
},{}],"ZLZB":[function(require,module,exports) {
"use strict";function n(n){return' <div class="row">\n                <div class="col-sm">\n                    <h1>'.concat(n.value,"</h1>\n                </div>\n            </div>")}function c(n){return'  <div class="row">\n                    <div class="col-sm">\n                        <p>'.concat(n.value,"</p>\n                    </div>\n                  </div>\n        ")}function t(n){var c=n.value.map(function(n){return'<div class= "col-sm">'.concat(n,"</div>")});return'\n<div class ="row">\n'.concat(c.join(""),"\n</div>\n")}function s(n){return'<div class = "row">\n            <img src = '.concat(n.value,">\n            </div>\n")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.title=n,exports.text=c,exports.columns=t,exports.image=s;
},{}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),t=require("./templates");require("./styles/main.css");var r=document.querySelector("#site");e.model.forEach(function(e){var i="";"title"===e.type?i=(0,t.title)(e):"text"===e.type?i=(0,t.text)(e):"columns"===e.type?i=(0,t.columns)(e):"img"===e.type&&(i=(0,t.image)(e)),r.insertAdjacentHTML("beforeend",i)});
},{"./model":"JDu1","./templates":"ZLZB","./styles/main.css":"jExt"}]},{},["Focm"], null)