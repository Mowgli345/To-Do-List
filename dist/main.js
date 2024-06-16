/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/form.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/form.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog {
    border: none;
    border-radius: 6px;
    padding: 35px 30px 40px 20px;
}

form {
    color: var(--dark-orange);
    color:rgb(82, 82, 82);
    font-size: 1.3rem;
}

fieldset {
    /* outline: dotted green .5px; */
    border: none;
}
ul {
    list-style: none;
    padding:0;
    margin: 0;
}
li+li {
    margin-top: 1rem;
}
label {
    display: inline-block;
    width: 95px;
    line-height: 2.2rem;
    /* outline: dotted .3px green; */
}
input {
    height: 1.8rem;
    border: solid 2px var(--dark-orange);
    border-radius: 4px;
    font-size: 1.2rem;
    color:rgb(122, 122, 122);
}

input:focus {
    border:solid 2px green;
}

select {
    height: 1.8rem;
    border: solid 2px var(--dark-orange);
    border-radius: 4px;
    font-size: 1.2rem;
    color:rgb(122, 122, 122);
    background-color: white;
}

.buttonsRow>button {
    border:none;
    border-radius: 4px;
    color:white;
    background-color: var(--page-orange);
    background-color:rgb(179, 179, 179);
    padding: .3rem .9rem;
    font-size: 1.3rem;
    margin-top: 16px;
    /* font-weight: bold; */
}

.buttonsRow>button:hover{
    background-color: var(--dark-orange);
}

.buttonsRow {
    display: flex;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/styles/form.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,SAAS;IACT,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,gCAAgC;AACpC;AACA;IACI,cAAc;IACd,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,oCAAoC;IACpC,mCAAmC;IACnC,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["dialog {\n    border: none;\n    border-radius: 6px;\n    padding: 35px 30px 40px 20px;\n}\n\nform {\n    color: var(--dark-orange);\n    color:rgb(82, 82, 82);\n    font-size: 1.3rem;\n}\n\nfieldset {\n    /* outline: dotted green .5px; */\n    border: none;\n}\nul {\n    list-style: none;\n    padding:0;\n    margin: 0;\n}\nli+li {\n    margin-top: 1rem;\n}\nlabel {\n    display: inline-block;\n    width: 95px;\n    line-height: 2.2rem;\n    /* outline: dotted .3px green; */\n}\ninput {\n    height: 1.8rem;\n    border: solid 2px var(--dark-orange);\n    border-radius: 4px;\n    font-size: 1.2rem;\n    color:rgb(122, 122, 122);\n}\n\ninput:focus {\n    border:solid 2px green;\n}\n\nselect {\n    height: 1.8rem;\n    border: solid 2px var(--dark-orange);\n    border-radius: 4px;\n    font-size: 1.2rem;\n    color:rgb(122, 122, 122);\n    background-color: white;\n}\n\n.buttonsRow>button {\n    border:none;\n    border-radius: 4px;\n    color:white;\n    background-color: var(--page-orange);\n    background-color:rgb(179, 179, 179);\n    padding: .3rem .9rem;\n    font-size: 1.3rem;\n    margin-top: 16px;\n    /* font-weight: bold; */\n}\n\n.buttonsRow>button:hover{\n    background-color: var(--dark-orange);\n}\n\n.buttonsRow {\n    display: flex;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/poppins-regular-webfont.woff2 */ "./src/assets/fonts/poppins-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/poppins-bold-webfont.woff2 */ "./src/assets/fonts/poppins-bold-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/poppins-medium-webfont.woff2 */ "./src/assets/fonts/poppins-medium-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/poppins-italic-webfont.woff2 */ "./src/assets/fonts/poppins-italic-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
}
@font-face {
    font-family: 'Poppins';
    font-weight: 700;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2')
}
@font-face {
    font-family: 'Poppins';
    font-weight: 500;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2')
}
@font-face {
    font-family: 'Poppins';
    font-weight: 400;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff2');
    font-style: italic;
}

:root {
    /* --page-orange: rgb(255, 178, 34);
    --dark-orange: rgb(255, 153, 0); */
    --page-orange: rgb(230, 227, 227);
    --dark-orange: rgb(187, 186, 186);
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /* background-color: aliceblue; */
}

body {
    font-family:'Poppins',sans-serif;
    font-size: 100%;
    padding: 10px 60px;
 }
 header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: .5rem;
 }

 header {
    /* outline: dotted red .3px; */
 }
h1 {
    font-weight: bold;
    color: var(--dark-orange);
    display: inline-block;
    font-size: 3rem;
    margin-bottom: 0;
}
.sort {
    color:rgb(109, 109, 109);
    font-size: 1.4rem;
    /* padding-bottom: 2px; */
    padding: 2px;
    position: relative;
}
.sort:hover {
    cursor: pointer;
    /* font-weight: bold; */
}

.sort-menu {
    font-size: 1.2rem;
    color:rgb(109, 109, 109);
    position:absolute;
    left:-19px;
    top: 2.3rem;
    padding:5px;
    display: none;
}

.sort-menu ul>li {
    padding: 4px 6px;
    text-align: center;
    margin: 0;
}

.sort-menu ul>li:hover {
    background-color:var(--page-orange);
    color:white;
    border:none;
    border-radius: 4px;

}

.sort-menu ul li+li {
    border-top:1px solid rgb(175, 172, 172);
    text-align: center;
    margin: 0;
}

.task-toggle {
    grid-area: 1/4/2/5;
    color: var(--page-orange);
    font-size: 2rem;
    font-weight: bold;
    text-align: end;
    line-height: 1.5rem;
    text-align: center;
}

.task-toggle:hover {
    color: var(--dark-orange);
    cursor: pointer;
}
 .content {
    border: 4px solid var(--page-orange);
    border-radius: 6px;
    min-height: 80%;
    padding:4px 10px;
 }

 h2 {
    margin-bottom: 0;
 }

.list {
    padding:5px 6px;
}
.list-item {
    /* outline:dotted green .4px; */
    display: grid;
    grid-template-rows: 1.4rem;
    grid-template-columns: 25px 1fr 100px 35px;
    padding-top: 12px;
    padding-bottom: 6px;
    border-bottom: 1.4px solid rgb(175, 172, 172);
}

.list-expand {
    grid-template-rows: 1.4rem 2rem auto;
}

.list-item>div {
    /* outline: dotted purple .2px; */
}

.task-priority {
    grid-area: 1/1/2/2;
    align-content: center; 
    display: flex;
    justify-content: flex-start;
}

.circle {
    height: 18px;
    width:18px;
    background-color: green;
    border-radius: 50%;
    display: block;
}
.task-name {
    grid-area: 1/2/2/3;
    font-size: 1.1rem;
}
.task-info {
    grid-area: 2/2/3/4;
    padding-right: 1.7rem;
    font-size: 0.95rem;
    color: rgb(10, 10, 10);
    font-style: italic;
    padding-left: 8px;
    line-height: 1.9rem;
}
.task-edit {
    grid-area: 2/4/3/5;
    display: flex;
    align-items: center;
    justify-content:center;
}
.task-edit img {
    height: 1.5rem;
}
.task-edit img:hover {
    cursor: pointer;
}

.task-status {
    grid-area: 3/3/4/4;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    
}
.task-due {
    grid-area: 1/3/2/4;
    text-align: end;
    padding-right: 1rem;
    padding-bottom: 0.2rem;
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
}

.task-list-name {
    grid-area: 3/2/4/3;
    justify-content: flex-start;
    align-items: flex-end;
    /* line-height: 2.4rem; */
}
.task-delete {
    grid-area: 3/4/4/5;
    display: flex;
    align-items: flex-end;
    justify-content:center;
    padding-bottom: -5px;
}
.task-delete img {
    height: 1.6rem;
}
.task-delete img:hover {
    cursor: pointer;
}

.newTaskButton {
    height: 50px;
    width:50px;
    background-color: var(--page-orange);
    border-radius: 50%;
    display: inline-block;
    text-align:center;
    line-height: 55px;
    color: white;
    font-size: 3rem;
    font-weight: bold;
}

.newTaskButton:hover {
    background-color:var(--dark-orange);
    cursor: pointer;
}

.newListButton {
    color: var(--dark-orange);
    width:fit-content;
    padding:7px 12px;
    border-radius: 4px;
    margin-top: 12px;
    margin-left: auto;
    font-size: 1.2rem;
    font-weight: bold;
    border:solid 3px var(--page-orange);
}

.newListButton:hover {
    background-color:var(--dark-orange);
    cursor: pointer;
    color:white;
    border:solid 3px var(--dark-orange);
}

.toggle {
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Poppins';\n    font-weight: 400;\n    src: url(/src/assets/fonts/poppins-regular-webfont.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Poppins';\n    font-weight: 700;\n    src: url(/src/assets/fonts/poppins-bold-webfont.woff2) format('woff2')\n}\n@font-face {\n    font-family: 'Poppins';\n    font-weight: 500;\n    src: url(/src/assets/fonts/poppins-medium-webfont.woff2) format('woff2')\n}\n@font-face {\n    font-family: 'Poppins';\n    font-weight: 400;\n    src: url(/src/assets/fonts/poppins-italic-webfont.woff2) format('woff2');\n    font-style: italic;\n}\n\n:root {\n    /* --page-orange: rgb(255, 178, 34);\n    --dark-orange: rgb(255, 153, 0); */\n    --page-orange: rgb(230, 227, 227);\n    --dark-orange: rgb(187, 186, 186);\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    /* background-color: aliceblue; */\n}\n\nbody {\n    font-family:'Poppins',sans-serif;\n    font-size: 100%;\n    padding: 10px 60px;\n }\n header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding-bottom: .5rem;\n }\n\n header {\n    /* outline: dotted red .3px; */\n }\nh1 {\n    font-weight: bold;\n    color: var(--dark-orange);\n    display: inline-block;\n    font-size: 3rem;\n    margin-bottom: 0;\n}\n.sort {\n    color:rgb(109, 109, 109);\n    font-size: 1.4rem;\n    /* padding-bottom: 2px; */\n    padding: 2px;\n    position: relative;\n}\n.sort:hover {\n    cursor: pointer;\n    /* font-weight: bold; */\n}\n\n.sort-menu {\n    font-size: 1.2rem;\n    color:rgb(109, 109, 109);\n    position:absolute;\n    left:-19px;\n    top: 2.3rem;\n    padding:5px;\n    display: none;\n}\n\n.sort-menu ul>li {\n    padding: 4px 6px;\n    text-align: center;\n    margin: 0;\n}\n\n.sort-menu ul>li:hover {\n    background-color:var(--page-orange);\n    color:white;\n    border:none;\n    border-radius: 4px;\n\n}\n\n.sort-menu ul li+li {\n    border-top:1px solid rgb(175, 172, 172);\n    text-align: center;\n    margin: 0;\n}\n\n.task-toggle {\n    grid-area: 1/4/2/5;\n    color: var(--page-orange);\n    font-size: 2rem;\n    font-weight: bold;\n    text-align: end;\n    line-height: 1.5rem;\n    text-align: center;\n}\n\n.task-toggle:hover {\n    color: var(--dark-orange);\n    cursor: pointer;\n}\n .content {\n    border: 4px solid var(--page-orange);\n    border-radius: 6px;\n    min-height: 80%;\n    padding:4px 10px;\n }\n\n h2 {\n    margin-bottom: 0;\n }\n\n.list {\n    padding:5px 6px;\n}\n.list-item {\n    /* outline:dotted green .4px; */\n    display: grid;\n    grid-template-rows: 1.4rem;\n    grid-template-columns: 25px 1fr 100px 35px;\n    padding-top: 12px;\n    padding-bottom: 6px;\n    border-bottom: 1.4px solid rgb(175, 172, 172);\n}\n\n.list-expand {\n    grid-template-rows: 1.4rem 2rem auto;\n}\n\n.list-item>div {\n    /* outline: dotted purple .2px; */\n}\n\n.task-priority {\n    grid-area: 1/1/2/2;\n    align-content: center; \n    display: flex;\n    justify-content: flex-start;\n}\n\n.circle {\n    height: 18px;\n    width:18px;\n    background-color: green;\n    border-radius: 50%;\n    display: block;\n}\n.task-name {\n    grid-area: 1/2/2/3;\n    font-size: 1.1rem;\n}\n.task-info {\n    grid-area: 2/2/3/4;\n    padding-right: 1.7rem;\n    font-size: 0.95rem;\n    color: rgb(10, 10, 10);\n    font-style: italic;\n    padding-left: 8px;\n    line-height: 1.9rem;\n}\n.task-edit {\n    grid-area: 2/4/3/5;\n    display: flex;\n    align-items: center;\n    justify-content:center;\n}\n.task-edit img {\n    height: 1.5rem;\n}\n.task-edit img:hover {\n    cursor: pointer;\n}\n\n.task-status {\n    grid-area: 3/3/4/4;\n    text-align: center;\n    justify-content: center;\n    align-items: flex-end;\n    \n}\n.task-due {\n    grid-area: 1/3/2/4;\n    text-align: end;\n    padding-right: 1rem;\n    padding-bottom: 0.2rem;\n    display: flex;\n    align-items:flex-end;\n    justify-content: flex-end;\n}\n\n.task-list-name {\n    grid-area: 3/2/4/3;\n    justify-content: flex-start;\n    align-items: flex-end;\n    /* line-height: 2.4rem; */\n}\n.task-delete {\n    grid-area: 3/4/4/5;\n    display: flex;\n    align-items: flex-end;\n    justify-content:center;\n    padding-bottom: -5px;\n}\n.task-delete img {\n    height: 1.6rem;\n}\n.task-delete img:hover {\n    cursor: pointer;\n}\n\n.newTaskButton {\n    height: 50px;\n    width:50px;\n    background-color: var(--page-orange);\n    border-radius: 50%;\n    display: inline-block;\n    text-align:center;\n    line-height: 55px;\n    color: white;\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.newTaskButton:hover {\n    background-color:var(--dark-orange);\n    cursor: pointer;\n}\n\n.newListButton {\n    color: var(--dark-orange);\n    width:fit-content;\n    padding:7px 12px;\n    border-radius: 4px;\n    margin-top: 12px;\n    margin-left: auto;\n    font-size: 1.2rem;\n    font-weight: bold;\n    border:solid 3px var(--page-orange);\n}\n\n.newListButton:hover {\n    background-color:var(--dark-orange);\n    cursor: pointer;\n    color:white;\n    border:solid 3px var(--dark-orange);\n}\n\n.toggle {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/form.css":
/*!*****************************!*\
  !*** ./src/styles/form.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/poppins-bold-webfont.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/poppins-bold-webfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9eeb66a13101f3bde83.woff2";

/***/ }),

/***/ "./src/assets/fonts/poppins-italic-webfont.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/poppins-italic-webfont.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c13dd3e11dd9080a5560.woff2";

/***/ }),

/***/ "./src/assets/fonts/poppins-medium-webfont.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/poppins-medium-webfont.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b90300781583fe944d2.woff2";

/***/ }),

/***/ "./src/assets/fonts/poppins-regular-webfont.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/poppins-regular-webfont.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47837f82a05469a352d8.woff2";

/***/ }),

/***/ "./src/assets/images/delete.svg":
/*!**************************************!*\
  !*** ./src/assets/images/delete.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/assets/images/pencil.svg":
/*!**************************************!*\
  !*** ./src/assets/images/pencil.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/form.css */ "./src/styles/form.css");
/* harmony import */ var _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/delete.svg */ "./src/assets/images/delete.svg");
/* harmony import */ var _assets_images_pencil_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/pencil.svg */ "./src/assets/images/pencil.svg");




//IIFE to store all DOM variables and event listeners
(function () {
    const newTaskButton = document.querySelector('.newTaskButton');
    // newTaskButton?.addEventListener('click',(e:Event)=>renderListItem());
    newTaskButton === null || newTaskButton === void 0 ? void 0 : newTaskButton.addEventListener('click', (e) => showNewItemForm());
    const newListButton = document.querySelector('.newListButton');
    newListButton === null || newListButton === void 0 ? void 0 : newListButton.addEventListener('click', (e) => showNewListForm());
    const sort = document.querySelector('.sort');
    sort === null || sort === void 0 ? void 0 : sort.addEventListener('click', (e) => showSortMenu());
    const showInfo = document.querySelector('.task-toggle');
    const sortItems = document.querySelector('.sort-menu');
    sortItems === null || sortItems === void 0 ? void 0 : sortItems.addEventListener('mouseover', (e) => borderOff(e));
    sortItems === null || sortItems === void 0 ? void 0 : sortItems.addEventListener('mouseout', (e) => borderOn(e));
}());
function renderListItem() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const list = document.createElement('div');
    list.className = 'list';
    const listItem = document.createElement('div');
    listItem.className = 'list-item';
    const taskPriority = document.createElement('div');
    taskPriority.className = 'task-priority';
    const circle = document.createElement('div');
    circle.className = 'circle';
    const taskName = document.createElement('div');
    taskName.className = 'task-name';
    let text = document.createTextNode('This is the next to-do item');
    taskName.appendChild(text);
    const taskDue = document.createElement('div');
    taskDue.className = 'task-due';
    text = document.createTextNode('Tomorrow');
    taskDue.appendChild(text);
    //Adds event listener to show/hide details
    const taskToggle = document.createElement('div');
    taskToggle.className = 'task-toggle';
    text = document.createTextNode('+');
    taskToggle.appendChild(text);
    taskToggle.addEventListener('click', (e) => toggleInfo(e));
    //These are the toggle-info divs
    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info toggle';
    text = document.createTextNode('All the other details about this one');
    taskInfo.appendChild(text);
    const taskEdit = document.createElement('div');
    taskEdit.className = 'task-edit toggle';
    const editPencil = document.createElement('img');
    editPencil.src = _assets_images_pencil_svg__WEBPACK_IMPORTED_MODULE_3__;
    const taskStatus = document.createElement('div');
    taskStatus.className = 'task-status toggle';
    text = document.createTextNode('Not started');
    taskStatus.appendChild(text);
    const taskDelete = document.createElement('div');
    taskDelete.className = 'task-delete toggle';
    const trashBin = document.createElement('img');
    trashBin.src = _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
    trashBin.addEventListener('click', (e) => deleteItem(e));
    const taskListName = document.createElement('div');
    taskListName.className = 'task-list-name toggle';
    text = document.createTextNode('Project 2');
    taskListName.appendChild(text);
    fragment.appendChild(list);
    list.appendChild(listItem);
    listItem.appendChild(taskEdit);
    taskEdit.appendChild(editPencil);
    listItem.appendChild(taskDelete);
    taskDelete.appendChild(trashBin);
    listItem.appendChild(taskStatus);
    listItem.appendChild(taskListName);
    listItem.appendChild(taskInfo);
    listItem.appendChild(taskToggle);
    listItem.appendChild(taskDue);
    listItem.appendChild(taskName);
    taskPriority.appendChild(circle);
    listItem.appendChild(taskPriority);
    content === null || content === void 0 ? void 0 : content.append(fragment);
    //Add Project heading
    const listHeading = document.createElement('div');
    listHeading.className = 'task-list-heading';
    const heading = document.createElement('h2');
    text = document.createTextNode('Project 2');
    heading.appendChild(text);
    listHeading.appendChild(heading);
    content === null || content === void 0 ? void 0 : content.appendChild(listHeading);
}
;
//Expand/Hide List details
function toggleInfo(e) {
    const event = e.target;
    let thisListItem = event.parentElement;
    let itemChildren = thisListItem === null || thisListItem === void 0 ? void 0 : thisListItem.children;
    let itemChild = Array.from(itemChildren);
    if ((itemChild === null || itemChild === void 0 ? void 0 : itemChild.length) > 0) {
        for (let i = 0; i < (itemChild === null || itemChild === void 0 ? void 0 : itemChild.length); i++) {
            let x = itemChild[i];
            if (x.classList.contains('toggle')) {
                if (x.style.display === "flex") {
                    x.style.display = 'none';
                }
                else {
                    x.style.display = 'flex';
                }
            }
        }
    }
}
function deleteItem(e) {
    var _a;
    const event = e.target;
    let thisListItem = (_a = event.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    console.log(thisListItem);
}
function showNewItemForm() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
    dialog.id = 'newTaskDialog';
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'newItemForm';
    const list = document.createElement('ul');
    let listItem = document.createElement('li');
    let label = document.createElement('label');
    label.setAttribute('for', 'taskName');
    let text = document.createTextNode('Task');
    label.appendChild(text);
    listItem.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'taskName');
    input.setAttribute('value', 'Get this assignment done'); //Placeholder
    input.id = 'taskName';
    listItem.appendChild(input);
    list.appendChild(listItem);
    listItem = document.createElement('li');
    label = document.createElement('label');
    label.setAttribute('for', 'taskDate');
    text = document.createTextNode('Date');
    label.appendChild(text);
    listItem.appendChild(label);
    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'taskDate');
    input.setAttribute('value', '31 July 2024'); //Placeholder
    input.id = 'taskDate';
    listItem.appendChild(input);
    list.appendChild(listItem);
    // listItem = document.createElement('li');
    // label = document.createElement('label');
    //     label.setAttribute('for','taskPriority');
    //     text = document.createTextNode('Priority');
    //     label.appendChild(text);
    // listItem.appendChild(label);
    // input = document.createElement('input');
    //     input.setAttribute('type','text');
    //     input.setAttribute('name','taskPriority');
    //     input.setAttribute('value','Normal');
    //     input.id='taskPriority';
    // listItem.appendChild(input);
    // list.appendChild(listItem);  
    listItem = document.createElement('li');
    label = document.createElement('label');
    label.setAttribute('for', 'taskPriority');
    text = document.createTextNode('Priority');
    label.appendChild(text);
    listItem.appendChild(label);
    let select = document.createElement('select');
    select.setAttribute('name', 'taskPriority');
    select.id = 'taskPriority';
    let option = document.createElement('option');
    option.setAttribute('value', 'Normal');
    text = document.createTextNode('Normal');
    option.appendChild(text);
    select.appendChild(option);
    option = document.createElement('option');
    option.setAttribute('value', 'High');
    text = document.createTextNode('High');
    option.appendChild(text);
    select.appendChild(option);
    option = document.createElement('option');
    option.setAttribute('value', 'Low');
    text = document.createTextNode('Low');
    option.appendChild(text);
    select.appendChild(option);
    listItem.appendChild(select);
    list.appendChild(listItem);
    listItem = document.createElement('li');
    label = document.createElement('label');
    label.setAttribute('for', 'taskStatus');
    text = document.createTextNode('Status');
    label.appendChild(text);
    listItem.appendChild(label);
    select = document.createElement('select');
    select.setAttribute('name', 'taskStatus');
    select.id = 'taskStatus';
    option = document.createElement('option');
    option.setAttribute('value', 'not-started');
    text = document.createTextNode('Not Started');
    option.appendChild(text);
    select.appendChild(option);
    option = document.createElement('option');
    option.setAttribute('value', 'in-progress');
    text = document.createTextNode('In Progress');
    option.appendChild(text);
    select.appendChild(option);
    option = document.createElement('option');
    option.setAttribute('value', 'completed');
    text = document.createTextNode('Completed');
    option.appendChild(text);
    select.appendChild(option);
    listItem.appendChild(select);
    list.appendChild(listItem);
    listItem = document.createElement('li');
    label = document.createElement('label');
    label.setAttribute('for', 'taskDetails');
    text = document.createTextNode('Details');
    label.appendChild(text);
    listItem.appendChild(label);
    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'taskDetails');
    input.setAttribute('value', 'Here are the many details of this task'); //Placeholder
    input.id = 'taskDetails';
    listItem.appendChild(input);
    list.appendChild(listItem);
    listItem = document.createElement('li');
    let buttonsRow = document.createElement('div');
    buttonsRow.className = 'buttonsRow';
    let button = document.createElement('button');
    text = document.createTextNode('Cancel');
    button.setAttribute('type', 'reset');
    button.addEventListener('click', () => {
        dialog.close();
    });
    button.appendChild(text);
    buttonsRow.appendChild(button);
    button = document.createElement('button');
    text = document.createTextNode('Add task');
    button.setAttribute('type', 'submit');
    button.appendChild(text);
    buttonsRow.appendChild(button);
    listItem.appendChild(buttonsRow);
    list.appendChild(listItem);
    fieldset.appendChild(list);
    form.appendChild(fieldset);
    dialog.append(form);
    fragment.appendChild(dialog);
    content === null || content === void 0 ? void 0 : content.append(fragment);
    dialog.showModal();
}
function showNewListForm() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
    dialog.id = 'newListDialog';
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'newListForm';
    const list = document.createElement('ul');
    let listItem = document.createElement('li');
    let label = document.createElement('label');
    label.setAttribute('for', 'newList');
    let text = document.createTextNode('List');
    label.appendChild(text);
    listItem.appendChild(label);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'newList');
    input.setAttribute('value', 'My Second Project'); //Placeholder
    input.id = 'newList';
    listItem.appendChild(input);
    list.appendChild(listItem);
    listItem = document.createElement('li');
    let buttonsRow = document.createElement('div');
    buttonsRow.className = 'buttonsRow';
    let button = document.createElement('button');
    text = document.createTextNode('Cancel');
    button.setAttribute('type', 'reset');
    button.addEventListener('click', () => {
        dialog.close();
    });
    button.appendChild(text);
    buttonsRow.appendChild(button);
    button = document.createElement('button');
    text = document.createTextNode('Add list');
    button.setAttribute('type', 'submit');
    button.appendChild(text);
    buttonsRow.appendChild(button);
    listItem.appendChild(buttonsRow);
    list.appendChild(listItem);
    fieldset.appendChild(list);
    form.appendChild(fieldset);
    dialog.append(form);
    fragment.appendChild(dialog);
    content === null || content === void 0 ? void 0 : content.append(fragment);
    dialog.showModal();
}
function showSortMenu() {
    const sortMenu = document.querySelector('.sort-menu');
    if (sortMenu.style.display === 'block') {
        sortMenu.style.display = 'none';
    }
    else {
        sortMenu.style.display = 'block';
    }
}
;
function borderOff(e) {
    let sortTag = e.target;
    if (sortTag.nextElementSibling) {
        let nextSibling = sortTag.nextElementSibling;
        nextSibling.style.borderTop = '0';
        sortTag.style.borderTop = '0';
    }
}
function borderOn(e) {
    let sortTag = e.target;
    if (sortTag.nextElementSibling) {
        if (sortTag.previousElementSibling) {
            let nextSibling = sortTag.nextElementSibling;
            nextSibling.style.borderTop = '1px solid rgb(175,172,172';
            sortTag.style.borderTop = '1px solid rgb(175,172,172';
        }
        else {
            let nextSibling = sortTag.nextElementSibling;
            nextSibling.style.borderTop = '1px solid rgb(175,172,172';
        }
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZ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b0MsQ0FBQztRQUMvRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSxHQUFHLENBQUM7UUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUUsR0FBRyxDQUFDO0lBQ2pDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsQ0FBTztJQUNyQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBd0IsQ0FBQztJQUN6QyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdCLElBQUksT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDckMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGtCQUFvQyxDQUFDO1lBQy9ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFFLDJCQUEyQixDQUFDO1lBQ3pELE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFFLDJCQUEyQixDQUFDO1FBQ3JELENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGtCQUFvQyxDQUFDO1lBQy9ELFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFFLDJCQUEyQixDQUFDO1FBQzdELENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9mb3JtLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzL2Zvcm0uY3NzPzc0ZWEiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAzNXB4IDMwcHggNDBweCAyMHB4O1xufVxuXG5mb3JtIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xuICAgIGNvbG9yOnJnYig4MiwgODIsIDgyKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuZmllbGRzZXQge1xuICAgIC8qIG91dGxpbmU6IGRvdHRlZCBncmVlbiAuNXB4OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46IDA7XG59XG5saStsaSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgICAvKiBvdXRsaW5lOiBkb3R0ZWQgLjNweCBncmVlbjsgKi9cbn1cbmlucHV0IHtcbiAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOnJnYigxMjIsIDEyMiwgMTIyKTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjpzb2xpZCAycHggZ3JlZW47XG59XG5cbnNlbGVjdCB7XG4gICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZGFyay1vcmFuZ2UpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjpyZ2IoMTIyLCAxMjIsIDEyMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b25zUm93PmJ1dHRvbiB7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2Utb3JhbmdlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzksIDE3OSwgMTc5KTtcbiAgICBwYWRkaW5nOiAuM3JlbSAuOXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xufVxuXG4uYnV0dG9uc1Jvdz5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xufVxuXG4uYnV0dG9uc1JvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAzNXB4IDMwcHggNDBweCAyMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgY29sb3I6cmdiKDgyLCA4MiwgODIpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICAvKiBvdXRsaW5lOiBkb3R0ZWQgZ3JlZW4gLjVweDsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5saStsaSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogOTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcXG4gICAgLyogb3V0bGluZTogZG90dGVkIC4zcHggZ3JlZW47ICovXFxufVxcbmlucHV0IHtcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6cmdiKDEyMiwgMTIyLCAxMjIpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjpzb2xpZCAycHggZ3JlZW47XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGhlaWdodDogMS44cmVtO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOnJnYigxMjIsIDEyMiwgMTIyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5idXR0b25zUm93PmJ1dHRvbiB7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLW9yYW5nZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE3OSwgMTc5LCAxNzkpO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuOXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbn1cXG5cXG4uYnV0dG9uc1Jvdz5idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG59XFxuXFxuLmJ1dHRvbnNSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvcG9wcGlucy1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9wb3BwaW5zLWJvbGQtd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9wb3BwaW5zLWl0YWxpYy13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpO1xufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKVxufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgnd29mZjInKVxufVxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdCgnd29mZjInKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbjpyb290IHtcbiAgICAvKiAtLXBhZ2Utb3JhbmdlOiByZ2IoMjU1LCAxNzgsIDM0KTtcbiAgICAtLWRhcmstb3JhbmdlOiByZ2IoMjU1LCAxNTMsIDApOyAqL1xuICAgIC0tcGFnZS1vcmFuZ2U6IHJnYigyMzAsIDIyNywgMjI3KTtcbiAgICAtLWRhcmstb3JhbmdlOiByZ2IoMTg3LCAxODYsIDE4Nik7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggNjBweDtcbiB9XG4gaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gfVxuXG4gaGVhZGVyIHtcbiAgICAvKiBvdXRsaW5lOiBkb3R0ZWQgcmVkIC4zcHg7ICovXG4gfVxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnNvcnQge1xuICAgIGNvbG9yOnJnYigxMDksIDEwOSwgMTA5KTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMnB4OyAqL1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc29ydDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xufVxuXG4uc29ydC1tZW51IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjpyZ2IoMTA5LCAxMDksIDEwOSk7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDotMTlweDtcbiAgICB0b3A6IDIuM3JlbTtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc29ydC1tZW51IHVsPmxpIHtcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zb3J0LW1lbnUgdWw+bGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tcGFnZS1vcmFuZ2UpO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxufVxuXG4uc29ydC1tZW51IHVsIGxpK2xpIHtcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2IoMTc1LCAxNzIsIDE3Mik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRhc2stdG9nZ2xlIHtcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XG4gICAgY29sb3I6IHZhcigtLXBhZ2Utb3JhbmdlKTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay10b2dnbGU6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIC5jb250ZW50IHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wYWdlLW9yYW5nZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDgwJTtcbiAgICBwYWRkaW5nOjRweCAxMHB4O1xuIH1cblxuIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuIH1cblxuLmxpc3Qge1xuICAgIHBhZGRpbmc6NXB4IDZweDtcbn1cbi5saXN0LWl0ZW0ge1xuICAgIC8qIG91dGxpbmU6ZG90dGVkIGdyZWVuIC40cHg7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNHJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIDEwMHB4IDM1cHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBib3JkZXItYm90dG9tOiAxLjRweCBzb2xpZCByZ2IoMTc1LCAxNzIsIDE3Mik7XG59XG5cbi5saXN0LWV4cGFuZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRyZW0gMnJlbSBhdXRvO1xufVxuXG4ubGlzdC1pdGVtPmRpdiB7XG4gICAgLyogb3V0bGluZTogZG90dGVkIHB1cnBsZSAuMnB4OyAqL1xufVxuXG4udGFzay1wcmlvcml0eSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5jaXJjbGUge1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDoxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi50YXNrLW5hbWUge1xuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi50YXNrLWluZm8ge1xuICAgIGdyaWQtYXJlYTogMi8yLzMvNDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjlyZW07XG59XG4udGFzay1lZGl0IHtcbiAgICBncmlkLWFyZWE6IDIvNC8zLzU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG4udGFzay1lZGl0IGltZyB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG4udGFzay1lZGl0IGltZzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1zdGF0dXMge1xuICAgIGdyaWQtYXJlYTogMy8zLzQvNDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIFxufVxuLnRhc2stZHVlIHtcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50YXNrLWxpc3QtbmFtZSB7XG4gICAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgLyogbGluZS1oZWlnaHQ6IDIuNHJlbTsgKi9cbn1cbi50YXNrLWRlbGV0ZSB7XG4gICAgZ3JpZC1hcmVhOiAzLzQvNC81O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC01cHg7XG59XG4udGFzay1kZWxldGUgaW1nIHtcbiAgICBoZWlnaHQ6IDEuNnJlbTtcbn1cbi50YXNrLWRlbGV0ZSBpbWc6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ld1Rhc2tCdXR0b24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDo1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2Utb3JhbmdlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uZXdUYXNrQnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRhcmstb3JhbmdlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdMaXN0QnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xuICAgIHdpZHRoOmZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6N3B4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOnNvbGlkIDNweCB2YXIoLS1wYWdlLW9yYW5nZSk7XG59XG5cbi5uZXdMaXN0QnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRhcmstb3JhbmdlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyOnNvbGlkIDNweCB2YXIoLS1kYXJrLW9yYW5nZSk7XG59XG5cbi50b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsNERBQXlFO0FBQzdFO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJLHNCQUFz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O0lBQ3RCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9wb3BwaW5zLXJlZ3VsYXItd2ViZm9udC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvcG9wcGlucy1ib2xkLXdlYmZvbnQud29mZjIpIGZvcm1hdCgnd29mZjInKVxcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvcG9wcGlucy1tZWRpdW0td2ViZm9udC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpXFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9wb3BwaW5zLWl0YWxpYy13ZWJmb250LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAvKiAtLXBhZ2Utb3JhbmdlOiByZ2IoMjU1LCAxNzgsIDM0KTtcXG4gICAgLS1kYXJrLW9yYW5nZTogcmdiKDI1NSwgMTUzLCAwKTsgKi9cXG4gICAgLS1wYWdlLW9yYW5nZTogcmdiKDIzMCwgMjI3LCAyMjcpO1xcbiAgICAtLWRhcmstb3JhbmdlOiByZ2IoMTg3LCAxODYsIDE4Nik7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggNjBweDtcXG4gfVxcbiBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiB9XFxuXFxuIGhlYWRlciB7XFxuICAgIC8qIG91dGxpbmU6IGRvdHRlZCByZWQgLjNweDsgKi9cXG4gfVxcbmgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc29ydCB7XFxuICAgIGNvbG9yOnJnYigxMDksIDEwOSwgMTA5KTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAycHg7ICovXFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc29ydDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxufVxcblxcbi5zb3J0LW1lbnUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgbGVmdDotMTlweDtcXG4gICAgdG9wOiAyLjNyZW07XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc29ydC1tZW51IHVsPmxpIHtcXG4gICAgcGFkZGluZzogNHB4IDZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zb3J0LW1lbnUgdWw+bGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXBhZ2Utb3JhbmdlKTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxufVxcblxcbi5zb3J0LW1lbnUgdWwgbGkrbGkge1xcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2IoMTc1LCAxNzIsIDE3Mik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay10b2dnbGUge1xcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxuICAgIGNvbG9yOiB2YXIoLS1wYWdlLW9yYW5nZSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay10b2dnbGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiAuY29udGVudCB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXBhZ2Utb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtaW4taGVpZ2h0OiA4MCU7XFxuICAgIHBhZGRpbmc6NHB4IDEwcHg7XFxuIH1cXG5cXG4gaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiB9XFxuXFxuLmxpc3Qge1xcbiAgICBwYWRkaW5nOjVweCA2cHg7XFxufVxcbi5saXN0LWl0ZW0ge1xcbiAgICAvKiBvdXRsaW5lOmRvdHRlZCBncmVlbiAuNHB4OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNHJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAxMDBweCAzNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS40cHggc29saWQgcmdiKDE3NSwgMTcyLCAxNzIpO1xcbn1cXG5cXG4ubGlzdC1leHBhbmQge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNHJlbSAycmVtIGF1dG87XFxufVxcblxcbi5saXN0LWl0ZW0+ZGl2IHtcXG4gICAgLyogb3V0bGluZTogZG90dGVkIHB1cnBsZSAuMnB4OyAqL1xcbn1cXG5cXG4udGFzay1wcmlvcml0eSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB3aWR0aDoxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnRhc2stbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcbi50YXNrLWluZm8ge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuN3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS45cmVtO1xcbn1cXG4udGFzay1lZGl0IHtcXG4gICAgZ3JpZC1hcmVhOiAyLzQvMy81O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbn1cXG4udGFzay1lZGl0IGltZyB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG4udGFzay1lZGl0IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stc3RhdHVzIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzMvNC80O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIFxcbn1cXG4udGFzay1kdWUge1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50YXNrLWxpc3QtbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMy8yLzQvMztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC8qIGxpbmUtaGVpZ2h0OiAyLjRyZW07ICovXFxufVxcbi50YXNrLWRlbGV0ZSB7XFxuICAgIGdyaWQtYXJlYTogMy80LzQvNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLTVweDtcXG59XFxuLnRhc2stZGVsZXRlIGltZyB7XFxuICAgIGhlaWdodDogMS42cmVtO1xcbn1cXG4udGFzay1kZWxldGUgaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3VGFza0J1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6NTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1vcmFuZ2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5uZXdUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld0xpc3RCdXR0b24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzo3cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6c29saWQgM3B4IHZhcigtLXBhZ2Utb3JhbmdlKTtcXG59XFxuXFxuLm5ld0xpc3RCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYm9yZGVyOnNvbGlkIDNweCB2YXIoLS1kYXJrLW9yYW5nZSk7XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL3N0eWxlcy9mb3JtLmNzc1wiO1xuaW1wb3J0IGRlbEltZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgcGVuY2lsSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9wZW5jaWwuc3ZnJztcblxuXG4vL0lJRkUgdG8gc3RvcmUgYWxsIERPTSB2YXJpYWJsZXMgYW5kIGV2ZW50IGxpc3RlbmVyc1xuKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0J1dHRvbicpO1xuICAgIC8vIG5ld1Rhc2tCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnJlbmRlckxpc3RJdGVtKCkpO1xuICAgIFxuICAgIG5ld1Rhc2tCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNob3dOZXdJdGVtRm9ybSgpKTtcbiAgICBcbiAgICBjb25zdCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0xpc3RCdXR0b24nKTtcbiAgICBuZXdMaXN0QnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT5zaG93TmV3TGlzdEZvcm0oKSk7XG4gICAgXG4gICAgY29uc3Qgc29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0Jyk7XG4gICAgc29ydD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c2hvd1NvcnRNZW51KCkpO1xuICAgIFxuICAgIGNvbnN0IHNob3dJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdG9nZ2xlJyk7XG4gICAgXG4gICAgY29uc3Qgc29ydEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtbWVudScpO1xuICAgIHNvcnRJdGVtcz8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoZTpFdmVudCk9PmJvcmRlck9mZihlKSk7XG4gICAgc29ydEl0ZW1zPy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsKGU6RXZlbnQpPT5ib3JkZXJPbihlKSk7XG59KCkpO1xuXG5cblxuXG5mdW5jdGlvbiByZW5kZXJMaXN0SXRlbSgpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50O1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lPSdsaXN0JztcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWU9J2xpc3QtaXRlbSc7XG5cbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTmFtZT0ndGFzay1wcmlvcml0eSc7XG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNpcmNsZS5jbGFzc05hbWU9J2NpcmNsZSc7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza05hbWUuY2xhc3NOYW1lPSd0YXNrLW5hbWUnO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUaGlzIGlzIHRoZSBuZXh0IHRvLWRvIGl0ZW0nKTtcbiAgICAgICAgdGFza05hbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRHVlLmNsYXNzTmFtZT0ndGFzay1kdWUnO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RvbW9ycm93Jyk7XG4gICAgICAgIHRhc2tEdWUuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAvL0FkZHMgZXZlbnQgbGlzdGVuZXIgdG8gc2hvdy9oaWRlIGRldGFpbHNcbiAgICBjb25zdCB0YXNrVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUb2dnbGUuY2xhc3NOYW1lPSd0YXNrLXRvZ2dsZSc7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnKycpO1xuICAgICAgICB0YXNrVG9nZ2xlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICB0YXNrVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnRvZ2dsZUluZm8oZSkpO1xuXG4gICAgLy9UaGVzZSBhcmUgdGhlIHRvZ2dsZS1pbmZvIGRpdnNcbiAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSW5mby5jbGFzc05hbWU9J3Rhc2staW5mbyB0b2dnbGUnO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FsbCB0aGUgb3RoZXIgZGV0YWlscyBhYm91dCB0aGlzIG9uZScpO1xuICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tFZGl0LmNsYXNzTmFtZT0ndGFzay1lZGl0IHRvZ2dsZSc7XG4gICAgY29uc3QgZWRpdFBlbmNpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgIGVkaXRQZW5jaWwuc3JjPXBlbmNpbEltZztcblxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1N0YXR1cy5jbGFzc05hbWU9J3Rhc2stc3RhdHVzIHRvZ2dsZSc7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTm90IHN0YXJ0ZWQnKTtcbiAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NOYW1lPSd0YXNrLWRlbGV0ZSB0b2dnbGUnO1xuICAgIGNvbnN0IHRyYXNoQmluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgdHJhc2hCaW4uc3JjPWRlbEltZzsgXG4gICAgICAgIHRyYXNoQmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PmRlbGV0ZUl0ZW0oZSkpOyAgIFxuICAgIGNvbnN0IHRhc2tMaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTGlzdE5hbWUuY2xhc3NOYW1lPSd0YXNrLWxpc3QtbmFtZSB0b2dnbGUnO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Byb2plY3QgMicpO1xuICAgICAgICB0YXNrTGlzdE5hbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrRWRpdCk7XG4gICAgICAgIHRhc2tFZGl0LmFwcGVuZENoaWxkKGVkaXRQZW5jaWwpO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XG4gICAgICAgIHRhc2tEZWxldGUuYXBwZW5kQ2hpbGQodHJhc2hCaW4pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tMaXN0TmFtZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tUb2dnbGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tEdWUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcblxuICAgIGNvbnRlbnQ/LmFwcGVuZChmcmFnbWVudCk7XG5cbiAgICAvL0FkZCBQcm9qZWN0IGhlYWRpbmdcbiAgICBjb25zdCBsaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0SGVhZGluZy5jbGFzc05hbWU9J3Rhc2stbGlzdC1oZWFkaW5nJztcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQcm9qZWN0IDInKTtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgbGlzdEhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGNvbnRlbnQ/LmFwcGVuZENoaWxkKGxpc3RIZWFkaW5nKTtcbiAgICB9O1xuXG4vL0V4cGFuZC9IaWRlIExpc3QgZGV0YWlsc1xuZnVuY3Rpb24gdG9nZ2xlSW5mbyhlOkV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDsgIFxuICAgIGxldCB0aGlzTGlzdEl0ZW0gPSBldmVudC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBpdGVtQ2hpbGRyZW4gPSB0aGlzTGlzdEl0ZW0/LmNoaWxkcmVuITsgXG4gICAgbGV0IGl0ZW1DaGlsZD0gQXJyYXkuZnJvbShpdGVtQ2hpbGRyZW4pOyBcblxuICAgIGlmIChpdGVtQ2hpbGQ/Lmxlbmd0aD4wKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8aXRlbUNoaWxkPy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgeCA9IGl0ZW1DaGlsZFtpXSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgICAgICBpZiAoeC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZScpKSB7XG4gICAgICAgICAgICBpZiAoeC5zdHlsZS5kaXNwbGF5PT09XCJmbGV4XCIpIHtcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHguc3R5bGUuZGlzcGxheT0nZmxleCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlSXRlbShlOkV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBsZXQgdGhpc0xpc3RJdGVtID0gZXZlbnQucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICBjb25zb2xlLmxvZyh0aGlzTGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBzaG93TmV3SXRlbUZvcm0oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBkaWFsb2cuaWQ9J25ld1Rhc2tEaWFsb2cnO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsJ2RpYWxvZycpO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgZmllbGRzZXQuY2xhc3NOYW1lPSduZXdJdGVtRm9ybSc7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGFza05hbWUnKTtcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVGFzaycpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrTmFtZScpO1xuICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0dldCB0aGlzIGFzc2lnbm1lbnQgZG9uZScpOyAvL1BsYWNlaG9sZGVyXG4gICAgICAgIGlucHV0LmlkPSd0YXNrTmFtZSc7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgICAgXG5cbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tEYXRlJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGF0ZScpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tEYXRlJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCczMSBKdWx5IDIwMjQnKTsgLy9QbGFjZWhvbGRlclxuICAgICAgICBpbnB1dC5pZD0ndGFza0RhdGUnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgLy8gbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIC8vIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAvLyAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrUHJpb3JpdHknKTtcbiAgICAvLyAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQcmlvcml0eScpO1xuICAgIC8vICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAvLyBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgLy8gaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIC8vICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgLy8gICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tQcmlvcml0eScpO1xuICAgIC8vICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTm9ybWFsJyk7XG4gICAgLy8gICAgIGlucHV0LmlkPSd0YXNrUHJpb3JpdHknO1xuICAgIC8vIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAvLyBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuICAgIFxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGFza1ByaW9yaXR5Jyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUHJpb3JpdHknKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywndGFza1ByaW9yaXR5Jyk7XG4gICAgICAgIHNlbGVjdC5pZD0ndGFza1ByaW9yaXR5JztcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTm9ybWFsJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTm9ybWFsJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnSGlnaCcpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hpZ2gnKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdMb3cnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdMb3cnKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG5cbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tTdGF0dXMnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTdGF0dXMnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrU3RhdHVzJyk7XG4gICAgICAgIHNlbGVjdC5pZD0ndGFza1N0YXR1cyc7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbm90LXN0YXJ0ZWQnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdOb3QgU3RhcnRlZCcpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2luLXByb2dyZXNzJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSW4gUHJvZ3Jlc3MnKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdjb21wbGV0ZWQnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDb21wbGV0ZWQnKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG5cbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tEZXRhaWxzJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGV0YWlscycpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tEZXRhaWxzJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIZXJlIGFyZSB0aGUgbWFueSBkZXRhaWxzIG9mIHRoaXMgdGFzaycpOyAvL1BsYWNlaG9sZGVyXG4gICAgICAgIGlucHV0LmlkPSd0YXNrRGV0YWlscyc7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG4gICAgXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBidXR0b25zUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbnNSb3cuY2xhc3NOYW1lPSdidXR0b25zUm93JztcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2FuY2VsJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyZXNldCcpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBZGQgdGFzaycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgYnV0dG9uc1Jvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIFxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbnNSb3cpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG4gICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBkaWFsb2cuYXBwZW5kKGZvcm0pO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgY29udGVudD8uYXBwZW5kKGZyYWdtZW50KTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dOZXdMaXN0Rm9ybSgpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGRpYWxvZy5pZD0nbmV3TGlzdERpYWxvZyc7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywnZGlhbG9nJyk7XG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICBmaWVsZHNldC5jbGFzc05hbWU9J25ld0xpc3RGb3JtJztcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduZXdMaXN0Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0xpc3QnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnbmV3TGlzdCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTXkgU2Vjb25kIFByb2plY3QnKTsgLy9QbGFjZWhvbGRlclxuICAgICAgICBpbnB1dC5pZD0nbmV3TGlzdCc7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgICAgXG4gICBcbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGJ1dHRvbnNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uc1Jvdy5jbGFzc05hbWU9J2J1dHRvbnNSb3cnO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDYW5jZWwnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3Jlc2V0Jyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWRkIGxpc3QnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChidXR0b25zUm93KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuICBcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcbiAgICBkaWFsb2cuYXBwZW5kKGZvcm0pO1xuXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpO1xuXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG59XG5cbmZ1bmN0aW9uIHNob3dTb3J0TWVudSgpIHtcbiAgICBjb25zdCBzb3J0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0LW1lbnUnKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoc29ydE1lbnUuc3R5bGUuZGlzcGxheT09PSdibG9jaycpIHtcbiAgICAgICAgc29ydE1lbnUuc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBzb3J0TWVudS5zdHlsZS5kaXNwbGF5PSdibG9jaydcbiAgICB9ICAgIFxufTtcblxuZnVuY3Rpb24gYm9yZGVyT2ZmKGU6RXZlbnQpIHtcbiAgICBsZXQgc29ydFRhZyA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGlmIChzb3J0VGFnLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBzb3J0VGFnLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgbmV4dFNpYmxpbmcuc3R5bGUuYm9yZGVyVG9wID0nMCc7XG4gICAgICAgIHNvcnRUYWcuc3R5bGUuYm9yZGVyVG9wID0nMCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBib3JkZXJPbihlOkV2ZW50KSB7XG4gICAgbGV0IHNvcnRUYWcgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgaWYgKHNvcnRUYWcucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBzb3J0VGFnLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgbmV4dFNpYmxpbmcuc3R5bGUuYm9yZGVyVG9wID0nMXB4IHNvbGlkIHJnYigxNzUsMTcyLDE3Mic7XG4gICAgICAgIHNvcnRUYWcuc3R5bGUuYm9yZGVyVG9wID0nMXB4IHNvbGlkIHJnYigxNzUsMTcyLDE3Mic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBzb3J0VGFnLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmJvcmRlclRvcCA9JzFweCBzb2xpZCByZ2IoMTc1LDE3MiwxNzInO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9