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
    width:70%;
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
`, "",{"version":3,"sources":["webpack://./src/styles/form.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,SAAS;IACT,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,gCAAgC;AACpC;AACA;IACI,cAAc;IACd,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;IACxB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,oCAAoC;IACpC,mCAAmC;IACnC,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["dialog {\n    border: none;\n    border-radius: 6px;\n    padding: 35px 30px 40px 20px;\n}\n\nform {\n    color: var(--dark-orange);\n    color:rgb(82, 82, 82);\n    font-size: 1.3rem;\n}\n\nfieldset {\n    /* outline: dotted green .5px; */\n    border: none;\n}\nul {\n    list-style: none;\n    padding:0;\n    margin: 0;\n}\nli+li {\n    margin-top: 1rem;\n}\nlabel {\n    display: inline-block;\n    width: 95px;\n    line-height: 2.2rem;\n    /* outline: dotted .3px green; */\n}\ninput {\n    height: 1.8rem;\n    border: solid 2px var(--dark-orange);\n    border-radius: 4px;\n    font-size: 1.2rem;\n    color:rgb(122, 122, 122);\n}\n\ninput:focus {\n    border:solid 2px green;\n}\n\nselect {\n    height: 1.8rem;\n    border: solid 2px var(--dark-orange);\n    border-radius: 4px;\n    font-size: 1.2rem;\n    color:rgb(122, 122, 122);\n    background-color: white;\n    width:70%;\n}\n\n.buttonsRow>button {\n    border:none;\n    border-radius: 4px;\n    color:white;\n    background-color: var(--page-orange);\n    background-color:rgb(179, 179, 179);\n    padding: .3rem .9rem;\n    font-size: 1.3rem;\n    margin-top: 16px;\n    /* font-weight: bold; */\n}\n\n.buttonsRow>button:hover{\n    background-color: var(--dark-orange);\n}\n\n.buttonsRow {\n    display: flex;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListItem: () => (/* binding */ createListItem)
/* harmony export */ });
console.log('Hello from scripts');
class listItem {
    constructor(task, date, status, details, list) {
        this.task = task;
        this.date = date;
        this.status = status;
        this.details = details;
        this.list = list;
    }
}
// const form = document.querySelector('.newItemForm') as HTMLFormElement;
// if (form) {
// form.addEventListener('submit',(e:Event)=>{
//     debugger;
//     e.preventDefault();
//     console.log(e.target);
//     // const taskFormData = new FormData(e.target as );
// });
// };
function createListItem(e) {
    e.preventDefault();
    // console.log(e.target);
    const dialog = document.getElementById('newTaskDialog');
    const form = e.target;
    const formData = new FormData(form);
    formData.forEach((value, key) => (console.log(value)));
    formData.forEach((value, key) => (console.log(key)));
    let data = Object.fromEntries(formData);
    console.log(data);
    // let listArgs: [string,Date,string,string,string]
    let listArgs = [];
    // dialog?.close();
}


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
/******/ 			"index": 0
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
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts */ "./src/scripts.ts");





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
    form.className = 'newItemForm';
    form.addEventListener('submit', (e) => {
        (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.createListItem)(e);
    });
    const fieldset = document.createElement('fieldset');
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
    //LIST NAME
    listItem = document.createElement('li');
    label = document.createElement('label');
    label.setAttribute('for', 'taskList');
    text = document.createTextNode('List');
    label.appendChild(text);
    listItem.appendChild(label);
    select = document.createElement('select');
    select.setAttribute('name', 'taskList');
    select.id = 'taskList';
    option = document.createElement('option');
    option.setAttribute('value', 'my-list');
    text = document.createTextNode('My List');
    option.appendChild(text);
    select.appendChild(option);
    // Needs to add other list names
    listItem.appendChild(select);
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
//Function works here but I want it in the scripts page
// function createListItem(e:Event) {
//     e.preventDefault();
//     console.log(e.target);
//     const form = e.target as HTMLFormElement;
//     const formData = new FormData(form);
//     console.log(form);
//     console.log(formData);
//     for (const [key, value] of formData) {
//         console.log(value);
//     }
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFB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LENBQU87SUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLENBQUM7SUFDekMsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsa0JBQW9DLENBQUM7UUFDL0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUUsR0FBRyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFFLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLENBQU87SUFDckIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQXdCLENBQUM7SUFDekMsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM3QixJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3JDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBb0MsQ0FBQztZQUMvRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSwyQkFBMkIsQ0FBQztZQUN6RCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSwyQkFBMkIsQ0FBQztRQUNyRCxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBb0MsQ0FBQztZQUMvRCxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSwyQkFBMkIsQ0FBQztRQUM3RCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCx1REFBdUQ7QUFDdkQscUNBQXFDO0FBQ3JDLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsZ0RBQWdEO0FBQ2hELDJDQUEyQztBQUMzQyx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLDZDQUE2QztBQUM3Qyw4QkFBOEI7QUFDOUIsUUFBUTtBQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMvZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9mb3JtLmNzcz83NGVhIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzLnRzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAzNXB4IDMwcHggNDBweCAyMHB4O1xufVxuXG5mb3JtIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xuICAgIGNvbG9yOnJnYig4MiwgODIsIDgyKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuZmllbGRzZXQge1xuICAgIC8qIG91dGxpbmU6IGRvdHRlZCBncmVlbiAuNXB4OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46IDA7XG59XG5saStsaSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgICAvKiBvdXRsaW5lOiBkb3R0ZWQgLjNweCBncmVlbjsgKi9cbn1cbmlucHV0IHtcbiAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOnJnYigxMjIsIDEyMiwgMTIyKTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjpzb2xpZCAycHggZ3JlZW47XG59XG5cbnNlbGVjdCB7XG4gICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZGFyay1vcmFuZ2UpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjpyZ2IoMTIyLCAxMjIsIDEyMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6NzAlO1xufVxuXG4uYnV0dG9uc1Jvdz5idXR0b24ge1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLW9yYW5nZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc5LCAxNzksIDE3OSk7XG4gICAgcGFkZGluZzogLjNyZW0gLjlyZW07XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbn1cblxuLmJ1dHRvbnNSb3c+YnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcbn1cblxuLmJ1dHRvbnNSb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDM1cHggMzBweCA0MHB4IDIwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBjb2xvcjpyZ2IoODIsIDgyLCA4Mik7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICAgIC8qIG91dGxpbmU6IGRvdHRlZCBncmVlbiAuNXB4OyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmxpK2xpIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA5NXB4O1xcbiAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xcbiAgICAvKiBvdXRsaW5lOiBkb3R0ZWQgLjNweCBncmVlbjsgKi9cXG59XFxuaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjpyZ2IoMTIyLCAxMjIsIDEyMik7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOnNvbGlkIDJweCBncmVlbjtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6cmdiKDEyMiwgMTIyLCAxMjIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6NzAlO1xcbn1cXG5cXG4uYnV0dG9uc1Jvdz5idXR0b24ge1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1vcmFuZ2UpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzksIDE3OSwgMTc5KTtcXG4gICAgcGFkZGluZzogLjNyZW0gLjlyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cXG59XFxuXFxuLmJ1dHRvbnNSb3c+YnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxufVxcblxcbi5idXR0b25zUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL3BvcHBpbnMtcmVndWxhci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvcG9wcGlucy1ib2xkLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9wb3BwaW5zLW1lZGl1bS13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvcG9wcGlucy1pdGFsaWMtd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYyJylcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3dvZmYyJylcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG46cm9vdCB7XG4gICAgLyogLS1wYWdlLW9yYW5nZTogcmdiKDI1NSwgMTc4LCAzNCk7XG4gICAgLS1kYXJrLW9yYW5nZTogcmdiKDI1NSwgMTUzLCAwKTsgKi9cbiAgICAtLXBhZ2Utb3JhbmdlOiByZ2IoMjMwLCAyMjcsIDIyNyk7XG4gICAgLS1kYXJrLW9yYW5nZTogcmdiKDE4NywgMTg2LCAxODYpO1xufVxuXG5odG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJyxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XG4gfVxuIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuIH1cblxuIGhlYWRlciB7XG4gICAgLyogb3V0bGluZTogZG90dGVkIHJlZCAuM3B4OyAqL1xuIH1cbmgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zb3J0IHtcbiAgICBjb2xvcjpyZ2IoMTA5LCAxMDksIDEwOSk7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgLyogcGFkZGluZy1ib3R0b206IDJweDsgKi9cbiAgICBwYWRkaW5nOiAycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvcnQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbn1cblxuLnNvcnQtbWVudSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGxlZnQ6LTE5cHg7XG4gICAgdG9wOiAyLjNyZW07XG4gICAgcGFkZGluZzo1cHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNvcnQtbWVudSB1bD5saSB7XG4gICAgcGFkZGluZzogNHB4IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc29ydC1tZW51IHVsPmxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXBhZ2Utb3JhbmdlKTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cblxuLnNvcnQtbWVudSB1bCBsaStsaSB7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmdiKDE3NSwgMTcyLCAxNzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50YXNrLXRvZ2dsZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xuICAgIGNvbG9yOiB2YXIoLS1wYWdlLW9yYW5nZSk7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2stdG9nZ2xlOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAuY29udGVudCB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tcGFnZS1vcmFuZ2UpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtaW4taGVpZ2h0OiA4MCU7XG4gICAgcGFkZGluZzo0cHggMTBweDtcbiB9XG5cbiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiB9XG5cbi5saXN0IHtcbiAgICBwYWRkaW5nOjVweCA2cHg7XG59XG4ubGlzdC1pdGVtIHtcbiAgICAvKiBvdXRsaW5lOmRvdHRlZCBncmVlbiAuNHB4OyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAxMDBweCAzNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMS40cHggc29saWQgcmdiKDE3NSwgMTcyLCAxNzIpO1xufVxuXG4ubGlzdC1leHBhbmQge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS40cmVtIDJyZW0gYXV0bztcbn1cblxuLmxpc3QtaXRlbT5kaXYge1xuICAgIC8qIG91dGxpbmU6IGRvdHRlZCBwdXJwbGUgLjJweDsgKi9cbn1cblxuLnRhc2stcHJpb3JpdHkge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY2lyY2xlIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6MThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGFzay1uYW1lIHtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG4udGFzay1pbmZvIHtcbiAgICBncmlkLWFyZWE6IDIvMi8zLzQ7XG4gICAgcGFkZGluZy1yaWdodDogMS43cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBsaW5lLWhlaWdodDogMS45cmVtO1xufVxuLnRhc2stZWRpdCB7XG4gICAgZ3JpZC1hcmVhOiAyLzQvMy81O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuLnRhc2stZWRpdCBpbWcge1xuICAgIGhlaWdodDogMS41cmVtO1xufVxuLnRhc2stZWRpdCBpbWc6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stc3RhdHVzIHtcbiAgICBncmlkLWFyZWE6IDMvMy80LzQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBcbn1cbi50YXNrLWR1ZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGFzay1saXN0LW5hbWUge1xuICAgIGdyaWQtYXJlYTogMy8yLzQvMztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIC8qIGxpbmUtaGVpZ2h0OiAyLjRyZW07ICovXG59XG4udGFzay1kZWxldGUge1xuICAgIGdyaWQtYXJlYTogMy80LzQvNTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAtNXB4O1xufVxuLnRhc2stZGVsZXRlIGltZyB7XG4gICAgaGVpZ2h0OiAxLjZyZW07XG59XG4udGFzay1kZWxldGUgaW1nOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdUYXNrQnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLW9yYW5nZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmV3VGFza0J1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3TGlzdEJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOjdweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjpzb2xpZCAzcHggdmFyKC0tcGFnZS1vcmFuZ2UpO1xufVxuXG4ubmV3TGlzdEJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlcjpzb2xpZCAzcHggdmFyKC0tZGFyay1vcmFuZ2UpO1xufVxuXG4udG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDREQUF5RTtBQUM3RTtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsNERBQXdFO0lBQ3hFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO3NDQUNrQztJQUNsQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtDQUNBO0lBQ0csYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHFCQUFxQjtDQUN4Qjs7Q0FFQTtJQUNHLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0NBQ0M7SUFDRyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7O0NBRUE7SUFDRyxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvcG9wcGlucy1yZWd1bGFyLXdlYmZvbnQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL3BvcHBpbnMtYm9sZC13ZWJmb250LndvZmYyKSBmb3JtYXQoJ3dvZmYyJylcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZjIpIGZvcm1hdCgnd29mZjInKVxcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvcG9wcGlucy1pdGFsaWMtd2ViZm9udC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbjpyb290IHtcXG4gICAgLyogLS1wYWdlLW9yYW5nZTogcmdiKDI1NSwgMTc4LCAzNCk7XFxuICAgIC0tZGFyay1vcmFuZ2U6IHJnYigyNTUsIDE1MywgMCk7ICovXFxuICAgIC0tcGFnZS1vcmFuZ2U6IHJnYigyMzAsIDIyNywgMjI3KTtcXG4gICAgLS1kYXJrLW9yYW5nZTogcmdiKDE4NywgMTg2LCAxODYpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XFxuIH1cXG4gaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXG4gfVxcblxcbiBoZWFkZXIge1xcbiAgICAvKiBvdXRsaW5lOiBkb3R0ZWQgcmVkIC4zcHg7ICovXFxuIH1cXG5oMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnNvcnQge1xcbiAgICBjb2xvcjpyZ2IoMTA5LCAxMDksIDEwOSk7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMnB4OyAqL1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNvcnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xcbn1cXG5cXG4uc29ydC1tZW51IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOnJnYigxMDksIDEwOSwgMTA5KTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGxlZnQ6LTE5cHg7XFxuICAgIHRvcDogMi4zcmVtO1xcbiAgICBwYWRkaW5nOjVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNvcnQtbWVudSB1bD5saSB7XFxuICAgIHBhZGRpbmc6IDRweCA2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc29ydC1tZW51IHVsPmxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wYWdlLW9yYW5nZSk7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbn1cXG5cXG4uc29ydC1tZW51IHVsIGxpK2xpIHtcXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmdiKDE3NSwgMTcyLCAxNzIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stdG9nZ2xlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbiAgICBjb2xvcjogdmFyKC0tcGFnZS1vcmFuZ2UpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stdG9nZ2xlOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4gLmNvbnRlbnQge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wYWdlLW9yYW5nZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWluLWhlaWdodDogODAlO1xcbiAgICBwYWRkaW5nOjRweCAxMHB4O1xcbiB9XFxuXFxuIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gfVxcblxcbi5saXN0IHtcXG4gICAgcGFkZGluZzo1cHggNnB4O1xcbn1cXG4ubGlzdC1pdGVtIHtcXG4gICAgLyogb3V0bGluZTpkb3R0ZWQgZ3JlZW4gLjRweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMTAwcHggMzVweDtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDEuNHB4IHNvbGlkIHJnYigxNzUsIDE3MiwgMTcyKTtcXG59XFxuXFxuLmxpc3QtZXhwYW5kIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRyZW0gMnJlbSBhdXRvO1xcbn1cXG5cXG4ubGlzdC1pdGVtPmRpdiB7XFxuICAgIC8qIG91dGxpbmU6IGRvdHRlZCBwdXJwbGUgLjJweDsgKi9cXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgd2lkdGg6MThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4udGFzay1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy80O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcXG59XFxuLnRhc2stZWRpdCB7XFxuICAgIGdyaWQtYXJlYTogMi80LzMvNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuLnRhc2stZWRpdCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRhc2stZWRpdCBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLXN0YXR1cyB7XFxuICAgIGdyaWQtYXJlYTogMy8zLzQvNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBcXG59XFxuLnRhc2stZHVlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGFzay1saXN0LW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDMvMi80LzM7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBsaW5lLWhlaWdodDogMi40cmVtOyAqL1xcbn1cXG4udGFzay1kZWxldGUge1xcbiAgICBncmlkLWFyZWE6IDMvNC80LzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IC01cHg7XFxufVxcbi50YXNrLWRlbGV0ZSBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG59XFxuLnRhc2stZGVsZXRlIGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld1Rhc2tCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2Utb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogNTVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubmV3VGFza0J1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdMaXN0QnV0dG9uIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6N3B4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOnNvbGlkIDNweCB2YXIoLS1wYWdlLW9yYW5nZSk7XFxufVxcblxcbi5uZXdMaXN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJvcmRlcjpzb2xpZCAzcHggdmFyKC0tZGFyay1vcmFuZ2UpO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7fTtcblxuY29uc29sZS5sb2coJ0hlbGxvIGZyb20gc2NyaXB0cycpO1xuXG5jbGFzcyBsaXN0SXRlbXtcbiAgICB0YXNrOnN0cmluZztcbiAgICBkYXRlOkRhdGU7XG4gICAgc3RhdHVzOnN0cmluZztcbiAgICBkZXRhaWxzOnN0cmluZztcbiAgICBsaXN0OnN0cmluZzsgXG4gICAgY29uc3RydWN0b3IodGFzazpzdHJpbmcsIGRhdGU6RGF0ZSwgc3RhdHVzOnN0cmluZywgZGV0YWlsczpzdHJpbmcsIGxpc3Q6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgICB9XG59XG5cbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3SXRlbUZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBpZiAoZm9ybSkge1xuLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlOkV2ZW50KT0+e1xuLy8gICAgIGRlYnVnZ2VyO1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4vLyAgICAgLy8gY29uc3QgdGFza0Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0IGFzICk7XG4vLyB9KTtcbi8vIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbShlOkV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0RpYWxvZycpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xuICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSxrZXkpPT4oY29uc29sZS5sb2codmFsdWUpKSk7XG4gICAgZm9ybURhdGEuZm9yRWFjaCgodmFsdWUsa2V5KT0+KGNvbnNvbGUubG9nKGtleSkpKTtcblxuICAgIGxldCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTsgIFxuXG4gICAgLy8gbGV0IGxpc3RBcmdzOiBbc3RyaW5nLERhdGUsc3RyaW5nLHN0cmluZyxzdHJpbmddXG4gICAgbGV0IGxpc3RBcmdzPVtdO1xuXG4gICAgLy8gZGlhbG9nPy5jbG9zZSgpO1xuXG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvc3R5bGVzL2Zvcm0uY3NzXCI7XG5pbXBvcnQgZGVsSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9kZWxldGUuc3ZnJztcbmltcG9ydCBwZW5jaWxJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3BlbmNpbC5zdmcnO1xuaW1wb3J0IHsgY3JlYXRlTGlzdEl0ZW0gfSBmcm9tIFwiLi9zY3JpcHRzXCI7XG5cblxuLy9JSUZFIHRvIHN0b3JlIGFsbCBET00gdmFyaWFibGVzIGFuZCBldmVudCBsaXN0ZW5lcnNcbihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tCdXR0b24nKTtcbiAgICAvLyBuZXdUYXNrQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT5yZW5kZXJMaXN0SXRlbSgpKTtcbiAgICBcbiAgICBuZXdUYXNrQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT5zaG93TmV3SXRlbUZvcm0oKSk7XG4gICAgXG4gICAgY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdMaXN0QnV0dG9uJyk7XG4gICAgbmV3TGlzdEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c2hvd05ld0xpc3RGb3JtKCkpO1xuICAgIFxuICAgIGNvbnN0IHNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydCcpO1xuICAgIHNvcnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNob3dTb3J0TWVudSgpKTtcbiAgICBcbiAgICBjb25zdCBzaG93SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRvZ2dsZScpO1xuICAgIFxuICAgIGNvbnN0IHNvcnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0LW1lbnUnKTtcbiAgICBzb3J0SXRlbXM/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGU6RXZlbnQpPT5ib3JkZXJPZmYoZSkpO1xuICAgIHNvcnRJdGVtcz8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLChlOkV2ZW50KT0+Ym9yZGVyT24oZSkpO1xufSgpKTtcblxuZnVuY3Rpb24gcmVuZGVyTGlzdEl0ZW0oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTmFtZT0nbGlzdCc7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lPSdsaXN0LWl0ZW0nO1xuXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc05hbWU9J3Rhc2stcHJpb3JpdHknO1xuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaXJjbGUuY2xhc3NOYW1lPSdjaXJjbGUnO1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTmFtZT0ndGFzay1uYW1lJztcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVGhpcyBpcyB0aGUgbmV4dCB0by1kbyBpdGVtJyk7XG4gICAgICAgIHRhc2tOYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0R1ZS5jbGFzc05hbWU9J3Rhc2stZHVlJztcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUb21vcnJvdycpO1xuICAgICAgICB0YXNrRHVlLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgLy9BZGRzIGV2ZW50IGxpc3RlbmVyIHRvIHNob3cvaGlkZSBkZXRhaWxzXG4gICAgY29uc3QgdGFza1RvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVG9nZ2xlLmNsYXNzTmFtZT0ndGFzay10b2dnbGUnO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJysnKTtcbiAgICAgICAgdGFza1RvZ2dsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgdGFza1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT50b2dnbGVJbmZvKGUpKTtcblxuICAgIC8vVGhlc2UgYXJlIHRoZSB0b2dnbGUtaW5mbyBkaXZzXG4gICAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0luZm8uY2xhc3NOYW1lPSd0YXNrLWluZm8gdG9nZ2xlJztcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBbGwgdGhlIG90aGVyIGRldGFpbHMgYWJvdXQgdGhpcyBvbmUnKTtcbiAgICAgICAgdGFza0luZm8uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRWRpdC5jbGFzc05hbWU9J3Rhc2stZWRpdCB0b2dnbGUnO1xuICAgIGNvbnN0IGVkaXRQZW5jaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICBlZGl0UGVuY2lsLnNyYz1wZW5jaWxJbWc7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tTdGF0dXMuY2xhc3NOYW1lPSd0YXNrLXN0YXR1cyB0b2dnbGUnO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05vdCBzdGFydGVkJyk7XG4gICAgICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTmFtZT0ndGFzay1kZWxldGUgdG9nZ2xlJztcbiAgICBjb25zdCB0cmFzaEJpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgIHRyYXNoQmluLnNyYz1kZWxJbWc7IFxuICAgICAgICB0cmFzaEJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT5kZWxldGVJdGVtKGUpKTsgICBcbiAgICBjb25zdCB0YXNrTGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xpc3ROYW1lLmNsYXNzTmFtZT0ndGFzay1saXN0LW5hbWUgdG9nZ2xlJztcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQcm9qZWN0IDInKTtcbiAgICAgICAgdGFza0xpc3ROYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xuICAgICAgICB0YXNrRWRpdC5hcHBlbmRDaGlsZChlZGl0UGVuY2lsKTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuICAgICAgICB0YXNrRGVsZXRlLmFwcGVuZENoaWxkKHRyYXNoQmluKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrTGlzdE5hbWUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrVG9nZ2xlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG5cbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpO1xuXG4gICAgLy9BZGQgUHJvamVjdCBoZWFkaW5nXG4gICAgY29uc3QgbGlzdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdEhlYWRpbmcuY2xhc3NOYW1lPSd0YXNrLWxpc3QtaGVhZGluZyc7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUHJvamVjdCAyJyk7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGxpc3RIZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBjb250ZW50Py5hcHBlbmRDaGlsZChsaXN0SGVhZGluZyk7XG4gICAgfTtcblxuLy9FeHBhbmQvSGlkZSBMaXN0IGRldGFpbHNcbmZ1bmN0aW9uIHRvZ2dsZUluZm8oZTpFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7ICBcbiAgICBsZXQgdGhpc0xpc3RJdGVtID0gZXZlbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgaXRlbUNoaWxkcmVuID0gdGhpc0xpc3RJdGVtPy5jaGlsZHJlbiE7IFxuICAgIGxldCBpdGVtQ2hpbGQ9IEFycmF5LmZyb20oaXRlbUNoaWxkcmVuKTsgXG5cbiAgICBpZiAoaXRlbUNoaWxkPy5sZW5ndGg+MCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGl0ZW1DaGlsZD8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHggPSBpdGVtQ2hpbGRbaV0gYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHguY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGUnKSkge1xuICAgICAgICAgICAgaWYgKHguc3R5bGUuZGlzcGxheT09PVwiZmxleFwiKSB7XG4gICAgICAgICAgICAgICAgeC5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4LnN0eWxlLmRpc3BsYXk9J2ZsZXgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZTpFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgbGV0IHRoaXNMaXN0SXRlbSA9IGV2ZW50LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc29sZS5sb2codGhpc0xpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gc2hvd05ld0l0ZW1Gb3JtKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQ7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZGlhbG9nLmlkPSduZXdUYXNrRGlhbG9nJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCdkaWFsb2cnKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWU9J25ld0l0ZW1Gb3JtJztcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgY3JlYXRlTGlzdEl0ZW0oZSk7XG4gICAgICAgIH0pXG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tOYW1lJyk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Rhc2snKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywndGFza05hbWUnKTtcbiAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdHZXQgdGhpcyBhc3NpZ25tZW50IGRvbmUnKTsgLy9QbGFjZWhvbGRlclxuICAgICAgICBpbnB1dC5pZD0ndGFza05hbWUnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgICAgIFxuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrRGF0ZScpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0RhdGUnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrRGF0ZScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnMzEgSnVseSAyMDI0Jyk7IC8vUGxhY2Vob2xkZXJcbiAgICAgICAgaW5wdXQuaWQ9J3Rhc2tEYXRlJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcblxuICAgIC8vIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgLy8gICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGFza1ByaW9yaXR5Jyk7XG4gICAgLy8gICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUHJpb3JpdHknKTtcbiAgICAvLyAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgLy8gbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIC8vIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAvLyAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIC8vICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrUHJpb3JpdHknKTtcbiAgICAvLyAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ05vcm1hbCcpO1xuICAgIC8vICAgICBpbnB1dC5pZD0ndGFza1ByaW9yaXR5JztcbiAgICAvLyBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgLy8gbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcbiAgICBcbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tQcmlvcml0eScpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1ByaW9yaXR5Jyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tQcmlvcml0eScpO1xuICAgICAgICBzZWxlY3QuaWQ9J3Rhc2tQcmlvcml0eSc7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ05vcm1hbCcpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05vcm1hbCcpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0hpZ2gnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIaWdoJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93Jyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTG93Jyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrU3RhdHVzJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU3RhdHVzJyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywndGFza1N0YXR1cycpO1xuICAgICAgICBzZWxlY3QuaWQ9J3Rhc2tTdGF0dXMnO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ25vdC1zdGFydGVkJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTm90IFN0YXJ0ZWQnKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdpbi1wcm9ncmVzcycpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0luIFByb2dyZXNzJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnY29tcGxldGVkJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29tcGxldGVkJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrRGV0YWlscycpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0RldGFpbHMnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrRGV0YWlscycpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnSGVyZSBhcmUgdGhlIG1hbnkgZGV0YWlscyBvZiB0aGlzIHRhc2snKTsgLy9QbGFjZWhvbGRlclxuICAgICAgICBpbnB1dC5pZD0ndGFza0RldGFpbHMnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgLy9MSVNUIE5BTUVcbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tMaXN0Jyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTGlzdCcpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tMaXN0Jyk7XG4gICAgICAgIHNlbGVjdC5pZD0ndGFza0xpc3QnO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ215LWxpc3QnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdNeSBMaXN0Jyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgLy8gTmVlZHMgdG8gYWRkIG90aGVyIGxpc3QgbmFtZXNcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyBcblxuICAgIFxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYnV0dG9uc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zUm93LmNsYXNzTmFtZT0nYnV0dG9uc1Jvdyc7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NhbmNlbCcpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywncmVzZXQnKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKVxuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWRkIHRhc2snKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChidXR0b25zUm93KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgZGlhbG9nLmFwcGVuZChmb3JtKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgIGNvbnRlbnQ/LmFwcGVuZChmcmFnbWVudCk7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBzaG93TmV3TGlzdEZvcm0oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBkaWFsb2cuaWQ9J25ld0xpc3REaWFsb2cnO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsJ2RpYWxvZycpO1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgZmllbGRzZXQuY2xhc3NOYW1lPSduZXdMaXN0Rm9ybSc7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmV3TGlzdCcpO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdMaXN0Jyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ25ld0xpc3QnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ015IFNlY29uZCBQcm9qZWN0Jyk7IC8vUGxhY2Vob2xkZXJcbiAgICAgICAgaW5wdXQuaWQ9J25ld0xpc3QnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgICAgIFxuICAgXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBidXR0b25zUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbnNSb3cuY2xhc3NOYW1lPSdidXR0b25zUm93JztcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2FuY2VsJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyZXNldCcpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgYnV0dG9uc1Jvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FkZCBsaXN0Jyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYnV0dG9uc1Jvdyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcbiAgXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgZGlhbG9nLmFwcGVuZChmb3JtKTtcblxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgY29udGVudD8uYXBwZW5kKGZyYWdtZW50KTtcblxuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcblxufVxuXG5mdW5jdGlvbiBzaG93U29ydE1lbnUoKSB7XG4gICAgY29uc3Qgc29ydE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1tZW51JykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKHNvcnRNZW51LnN0eWxlLmRpc3BsYXk9PT0nYmxvY2snKSB7XG4gICAgICAgIHNvcnRNZW51LnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc29ydE1lbnUuc3R5bGUuZGlzcGxheT0nYmxvY2snXG4gICAgfSAgICBcbn07XG5cbmZ1bmN0aW9uIGJvcmRlck9mZihlOkV2ZW50KSB7XG4gICAgbGV0IHNvcnRUYWcgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAoc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmJvcmRlclRvcCA9JzAnO1xuICAgICAgICBzb3J0VGFnLnN0eWxlLmJvcmRlclRvcCA9JzAnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYm9yZGVyT24oZTpFdmVudCkge1xuICAgIGxldCBzb3J0VGFnID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKHNvcnRUYWcubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgIGlmIChzb3J0VGFnLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmJvcmRlclRvcCA9JzFweCBzb2xpZCByZ2IoMTc1LDE3MiwxNzInO1xuICAgICAgICBzb3J0VGFnLnN0eWxlLmJvcmRlclRvcCA9JzFweCBzb2xpZCByZ2IoMTc1LDE3MiwxNzInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICBuZXh0U2libGluZy5zdHlsZS5ib3JkZXJUb3AgPScxcHggc29saWQgcmdiKDE3NSwxNzIsMTcyJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9GdW5jdGlvbiB3b3JrcyBoZXJlIGJ1dCBJIHdhbnQgaXQgaW4gdGhlIHNjcmlwdHMgcGFnZVxuLy8gZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oZTpFdmVudCkge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4vLyAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbi8vICAgICBjb25zb2xlLmxvZyhmb3JtKTtcbi8vICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4vLyAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuLy8gICAgIH1cbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=