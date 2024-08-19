"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["scripts"],{

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
    overflow: hidden;
    /* min-width: 240px; */
}
form {
    color: var(--border-color);
    color:rgb(82, 82, 82);
    font-size: 1.3rem;
}
#newListDialog {
    padding: 35px 12px 40px 10px;
    & form {
        /* min-width: 240px; */
        overflow: hidden;
        max-width: 100%;
    }
}
fieldset {
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
}
input, select {
    appearance: none;
    box-sizing: border-box;
    height: 1.9rem;
    border: solid 2px var(--input-color);
    border-radius: 4px;
    font-size: 1.2rem;
    color:var(--text-color);
    width:100%;
    background-color: white;
}
input[type=date] {
    font-family: Arial, Helvetica, sans-serif;
}
input:focus {
    outline:solid 1px var(--input-color);
}
.buttonsRow>button {
    border:none;
    border-radius: 4px;
    color:white;
    background-color: var(--button-color);
    padding: .3rem .9rem;
    font-size: 1.3rem;
    margin-top: 16px;
}
.buttonsRow>button:hover{
    background-color: var(--button-hover-color);
}
.buttonsRow {
    display: flex;
    justify-content: space-between;
}
#newColorDialog {
    border: none;
    border-radius: 6px;
    padding:10px 10px 15px 10px;
    width:60%;
    max-width: 280px;
}
#newColorForm {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:18px;
    padding:0;
}
#closeDialog {
    background-color: white;
    color:var(--button-color);
    border:2.5px solid var(--border-color);
    border-radius: 3px;
    padding:1px 3px 1px 3px;
    align-self:flex-end;
    font-style: bold;
    font-size: 1.3rem;
}
#newColorDialog ul li {
    display: inline-block;
    margin: 0;
}
#newColorForm ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
li.circle {
    height: 35px;
    width:35px;
    border-radius: 50%;
    display: block;

}
li.circle:hover {
    cursor: pointer;
}
.circle-blue {
    background-color:blue;
}
.circle-green {
    background-color:green;
}
.circle-orange {
    background-color:orange;
}
.circle-grey {
    background-color:grey;
}
.circle-black {
    background-color:black;
}


#confirmDeleteDialog {
    white-space: pre-line;
    padding:30px;
}
.deletConfirmMsg {
    font-size: 1.3rem;
    white-space: pre-line;
    line-height: 1.5rem;
}
#confirmDeleteDialog button {
    font-size: 1rem;
}
#confirmDeleteDialog .buttonsRow {
    margin-top: 10px;
}

@media screen and (max-width:490px) {
    /* dialog {
        background-color: red;
        overflow: hidden;
        max-width: 100%;
        padding: 35px 10px 40px 12px;
    }
    #newListDialog {
        padding: 35px 2px 40px 2px;
        & form {
            min-width: 70%;
            padding:0;
            overflow: hidden;
            max-width: 100%;

        }
    } */
    .newListForm {
        margin:0;
        padding:0;
    }
    form {
        color: var(--border-color);
        color:rgb(82, 82, 82);
        font-size: 1.3rem;
        padding:0;
    }
    input, select {
        width:100%;
    }
    fieldset {
        padding: 0;
    }

}`, "",{"version":3,"sources":["webpack://./src/styles/form.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;AAC1B;AACA;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,4BAA4B;IAC5B;QACI,sBAAsB;QACtB,gBAAgB;QAChB,eAAe;IACnB;AACJ;AACA;IACI,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,SAAS;IACT,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,cAAc;IACd,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;IACvB,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,yCAAyC;AAC7C;AACA;IACI,oCAAoC;AACxC;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,qCAAqC;IACrC,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,QAAQ;IACR,SAAS;AACb;AACA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,sCAAsC;IACtC,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,qBAAqB;IACrB,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;AACA;IACI,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,cAAc;;AAElB;AACA;IACI,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,qBAAqB;IACrB,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI;;;;;;;;;;;;;;;OAeG;IACH;QACI,QAAQ;QACR,SAAS;IACb;IACA;QACI,0BAA0B;QAC1B,qBAAqB;QACrB,iBAAiB;QACjB,SAAS;IACb;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;;AAEJ","sourcesContent":["dialog {\n    border: none;\n    border-radius: 6px;\n    overflow: hidden;\n    /* min-width: 240px; */\n}\nform {\n    color: var(--border-color);\n    color:rgb(82, 82, 82);\n    font-size: 1.3rem;\n}\n#newListDialog {\n    padding: 35px 12px 40px 10px;\n    & form {\n        /* min-width: 240px; */\n        overflow: hidden;\n        max-width: 100%;\n    }\n}\nfieldset {\n    border: none;\n}\nul {\n    list-style: none;\n    padding:0;\n    margin: 0;\n}\nli+li {\n    margin-top: 1rem;\n}\nlabel {\n    display: inline-block;\n    width: 95px;\n    line-height: 2.2rem;\n}\ninput, select {\n    appearance: none;\n    box-sizing: border-box;\n    height: 1.9rem;\n    border: solid 2px var(--input-color);\n    border-radius: 4px;\n    font-size: 1.2rem;\n    color:var(--text-color);\n    width:100%;\n    background-color: white;\n}\ninput[type=date] {\n    font-family: Arial, Helvetica, sans-serif;\n}\ninput:focus {\n    outline:solid 1px var(--input-color);\n}\n.buttonsRow>button {\n    border:none;\n    border-radius: 4px;\n    color:white;\n    background-color: var(--button-color);\n    padding: .3rem .9rem;\n    font-size: 1.3rem;\n    margin-top: 16px;\n}\n.buttonsRow>button:hover{\n    background-color: var(--button-hover-color);\n}\n.buttonsRow {\n    display: flex;\n    justify-content: space-between;\n}\n#newColorDialog {\n    border: none;\n    border-radius: 6px;\n    padding:10px 10px 15px 10px;\n    width:60%;\n    max-width: 280px;\n}\n#newColorForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap:18px;\n    padding:0;\n}\n#closeDialog {\n    background-color: white;\n    color:var(--button-color);\n    border:2.5px solid var(--border-color);\n    border-radius: 3px;\n    padding:1px 3px 1px 3px;\n    align-self:flex-end;\n    font-style: bold;\n    font-size: 1.3rem;\n}\n#newColorDialog ul li {\n    display: inline-block;\n    margin: 0;\n}\n#newColorForm ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\nli.circle {\n    height: 35px;\n    width:35px;\n    border-radius: 50%;\n    display: block;\n\n}\nli.circle:hover {\n    cursor: pointer;\n}\n.circle-blue {\n    background-color:blue;\n}\n.circle-green {\n    background-color:green;\n}\n.circle-orange {\n    background-color:orange;\n}\n.circle-grey {\n    background-color:grey;\n}\n.circle-black {\n    background-color:black;\n}\n\n\n#confirmDeleteDialog {\n    white-space: pre-line;\n    padding:30px;\n}\n.deletConfirmMsg {\n    font-size: 1.3rem;\n    white-space: pre-line;\n    line-height: 1.5rem;\n}\n#confirmDeleteDialog button {\n    font-size: 1rem;\n}\n#confirmDeleteDialog .buttonsRow {\n    margin-top: 10px;\n}\n\n@media screen and (max-width:490px) {\n    /* dialog {\n        background-color: red;\n        overflow: hidden;\n        max-width: 100%;\n        padding: 35px 10px 40px 12px;\n    }\n    #newListDialog {\n        padding: 35px 2px 40px 2px;\n        & form {\n            min-width: 70%;\n            padding:0;\n            overflow: hidden;\n            max-width: 100%;\n\n        }\n    } */\n    .newListForm {\n        margin:0;\n        padding:0;\n    }\n    form {\n        color: var(--border-color);\n        color:rgb(82, 82, 82);\n        font-size: 1.3rem;\n        padding:0;\n    }\n    input, select {\n        width:100%;\n    }\n    fieldset {\n        padding: 0;\n    }\n\n}"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/roboto-regular-webfont.woff2 */ "./src/assets/fonts/roboto-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/roboto-bold-webfont.woff2 */ "./src/assets/fonts/roboto-bold-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/roboto-medium-webfont.woff2 */ "./src/assets/fonts/roboto-medium-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/fonts/roboto-italic-webfont.woff2 */ "./src/assets/fonts/roboto-italic-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
}
@font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
}
@font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2');
}
@font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff2');
    font-style: italic;
}
:root, :root.grey {
    background-color:white;
    --heading-color: #565656;
    --border-color: #8b8b8b;
    --button-color: #565656;
    --button-hover-color:#807e7d;
    --input-color: #8b8b8b;
    --text:rgb(76, 75, 75);
    --filter: invert(33%) sepia(1%) saturate(0%) hue-rotate(350deg) brightness(93%) contrast(86%);
    --hover-filter:  invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(93%) contrast(107%);
}
:root, :root.orange {
    background-color:rgb(252, 252, 252);
    --heading-color: rgb(255, 159, 28);
    --border-color: rgb(255, 191, 105);
    --button-color: rgb(236, 159, 42);
    --button-hover-color:rgb(255, 159, 28);
    --input-color: rgb(255, 191, 105);
    --text:rgb(117, 117, 117);
    --filter: invert(77%) sepia(35%) saturate(4460%) hue-rotate(344deg) brightness(101%) contrast(101%);
    --hover-filter: invert(95%) sepia(24%) saturate(5708%) hue-rotate(308deg) brightness(99%) contrast(103%);
}
:root, :root.blue {
    background-color:white;
    --heading-color: #152985;
    --border-color: #092f96;
    --button-color: #092f96;
    --button-hover-color: #194b8b;
    --input-color: #092f96;
    --text:#1D2731;
    --filter: invert(17%) sepia(79%) saturate(536%) hue-rotate(161deg) brightness(103%) contrast(99%);
    --hover-filter: invert(37%) sepia(70%) saturate(469%) hue-rotate(158deg) brightness(95%) contrast(92%);
}
:root, :root.black {
    background-color:#1a2930 ;
    --heading-color: #c5c1c0;
    --border-color: white;
    --button-color: #b8b8b8;
    --button-hover-color: #949190;
    --input-color: #1a2930;
    --text:white;
    --filter: invert(6%) sepia(9%) saturate(2593%) hue-rotate(109deg) brightness(94%) contrast(95%);
    --hover-filter: invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(93%) contrast(107%);
    & .newTaskButton {
        background-color: var(--button-color);
    }
    & .newTaskButton:hover {
        background-color: var(--button-hover-color);
    }
    /* & input {
    outline: solid 2px var(--background-color);
    } */
}
:root, :root.green {
    background-color:white;
    --border-color: #009933;
    --heading-color: rgb(1, 112, 1);
    --button-color: #009933;
    --button-hover-color:rgb(1, 112, 1); 
    --input-color: #009933;
    --text:#1a2930;
    --filter: invert(24%) sepia(54%) saturate(2665%) hue-rotate(95deg) brightness(94%) contrast(99%);
    --hover-filter: invert(29%) sepia(98%) saturate(1359%) hue-rotate(121deg) brightness(99%) contrast(101%);
}
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
body {
    font-family:'Roboto',sans-serif;
    font-size: 100%;
    padding: 10px calc(28px + 1.5vw) 15px;
    min-width: 280px;
    max-width: 640px;
    margin:0px auto;
 }
header,footer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 0.7rem;
 }
footer {
    justify-content: space-between;
}
header {
    justify-content:center;
}
h1 {
    font-weight: bold;
    color: var(--heading-color);
    font-size: 3rem;
    margin-bottom: 0;
    line-height: 3rem;
    margin-right: auto;
}
.sort {
    align-self: flex-end;
    font-size: 1.7rem;
    line-height: 1.7rem;
    padding: 2px;
    position: relative;
    color:var(--text);
    margin-left: auto;
}
.sort-text:hover {
    cursor: pointer;
    font-weight: bold;
}
.sort-wrapper {
    padding:10px 16px;
    position:absolute;
    left:-36px;
    top: 2rem;
    background-color: white;
    visibility: visible;
    opacity: 1;
    transition: all .1s;
}
.sort-menu {
    font-size: 1.2rem;
    color:var(--text);
    padding:5px;
    outline: solid 3px var(--button-color);
    opacity:1;
    border-radius: 8px;
    background-color: white;
}
.sort-menu ul>li {
    padding: 4px 6px;
    text-align: center;
    margin: 0;
}
.sort-menu ul>li:hover {
    background-color:var(--heading-color);
    color:white;
    border:none;
    border-radius: 4px;
}
.sort-menu ul li+li {
    border-top:1px solid rgb(175, 172, 172);
    text-align: center;
    margin: 0;
}
.content {
    border: 4.9px solid var(--border-color);
    border-radius: 6px;
    min-height: 75%;
    padding:4px 10px;
    color: var(--text);
    min-width: 260px;
 }
.task-list {
    min-width:265px ;
}
.task-list-heading {
    display: grid;
    grid-template-rows: 2.4rem;
    grid-template-columns: auto 30px 1fr;
    padding:1px 8px 5px 1px;
}
 h2 {
    margin: 0;
    margin-right: 18px;
    color: var(--heading-color);
 } 
 h2:hover {
    cursor: pointer;
 }
 .listNameTitle {
    padding: 1px;
    grid-area: 1/1/2/2;
 }
.list-delete {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left:8px;
    grid-area: 1/2/2/3;
    transition: all 0.2s;
    visibility: visible;
    opacity: 1;
}
.list-delete img {
    height: 1.7rem;
}
.hide {
    visibility: hidden;
    opacity: 0;
}
.list-toggle {
    color: var(--heading-color);
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    width:20px;
    grid-area: 1/3/2/4;
    margin-left: auto;
    display: flex;
    align-items: center;
}
.list-toggle:hover {
    color: var(--border-color);
    cursor: pointer;
}
.minus {
    font-size: 2.3rem;
    padding-right: 0.2rem;
}
.taskListWrapper {
    grid-area: 2/1/3/4;
    display: grid;
    grid-template-rows: 0fr; 
    transition: grid-template-rows 0.3s;
}
.showList {
    grid-template-rows:1fr; 
}
.inner {
    overflow: hidden;
}
.task-item {
    display: grid;
    grid-template-rows: 1.7rem;
    grid-template-columns: 25px 1fr 25px 110px 35px 15px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-bottom: 1.4px solid rgb(175, 172, 172);
}
.task-item:last-child {
    margin-bottom: 10px;
}
.task-priority {
    grid-area: 1/1/2/2;
    align-items: center; 
    display: flex;
    justify-content: flex-start;
}
.circle {
    height: 16px;
    width:16px;
    border-radius: 50%;
    display: block;
}
.task-name {
    grid-area: 1/2/2/4;
    font-size: 1.1rem;
}
.task-due {
    grid-area: 1/4/2/5;
    text-align: end;
    padding-right: 1rem;
    padding-bottom: 0.2rem;
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
}
.task-toggle {
    grid-area: 1/5/2/6;
    color: var(--heading-color);
    font-size: 2rem;
    font-weight: bold;
    line-height: 1rem;
    text-align: center;
}
.task-toggle:hover {
    color: var(--border-color);
    cursor: pointer;
}
.taskWrapper {
    grid-area:2/2/3/6;
    display: grid;
    grid-template-columns: 1fr 25px 110px 35px ;
    grid-template-rows: 0 0; 
    overflow: hidden;
    transition: grid-template-rows 0.3s;
}
.showTask {
    grid-template-rows: 1.7rem 1.7rem; 
    grid-template-rows: 1.7rem auto; 
}
.task-list-name {
    grid-area: 1/1/2/2;
    display: flex;
    align-items: center;
}
.task-edit {
    grid-area: 1/2/2/3;
    display: flex;
    align-items: center;
    justify-content:center;
}
.task-edit img {
    height: 1.5rem;
}
.task-status {
    grid-area: 1/3/2/4;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;    
}
.task-delete {
    grid-area: 1/4/2/5;
    display: flex;
    align-items: center;
    justify-content:center;
    padding-bottom: -5px;
}
.task-delete img {
    height: 1.6rem;
}
.task-info {
    grid-area: 2/1/3/5;
    padding-right: 1.7rem;
    font-size: 0.95rem;
    color: rgb(10, 10, 10);
    font-style: italic;
    padding-left: 8px;
    padding-top: 1px;
    line-height: 1.7rem;
}

.toggle {
    display: none;
}
.noTasksMsg {
    padding-top: 0.3rem;
    padding-left: 0.5rem;
    font-style: italic;
}
dialog{
    min-width: 200px;
    outline:none;
}
img {
    filter:var(--filter);
}
img:hover {
    cursor: pointer;
    filter: var(--hover-filter);
}
.newTaskButton {
    height: 50px;
    width:50px;
    background-color: var(--border-color);
    border-radius: 50%;
    display: inline-block;
    text-align:center;
    line-height: 47px;
    font-size: 3rem;
}
.newTaskButton:hover {
    background-color:var(--heading-color);
}
.footerButton {
    background-color: var(--button-color);
    width:fit-content;
    padding:7px 15px;
    border-radius: 4px;
    margin-top: 12px;
    font-size: 1.2rem;
    color:white;
}
.button {
    color:white;
    font-weight: bold;
}
.button:hover {
    background-color:var(--button-hover-color);
    cursor: pointer;
}

@media screen and (max-width:520px) {
.task-list-name {
    grid-area: 2/2/3/5;
}
.task-item {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 25px 1fr 25px 95px 35px 15px;
}
.task-priority {
    grid-area: 1/1/2/2;
    display: flex;
    align-items:flex-start;
    padding-top: 5px;
}
.task-name {
    grid-area: 1/2/2/4;
    line-height: 1.35rem;
}
.task-due {
    grid-area: 1/4/2/5;
    text-align: end;
    padding-right: 0;
    padding-bottom: 0.1rem;
    display: flex;
    align-items:flex-start;
    justify-content: flex-end;
}
.task-toggle {
    grid-area: 1/5/2/6;
}
.taskWrapper{
    grid-template-rows: 0 0 0;
}
.showTask {
    grid-template-rows: 1.7rem auto; 
}
.task-list-name {
    grid-area: 1/1/2/5;
    justify-content: flex-start;
    align-items: flex-end;
    padding-left: 8px;
}
.task-edit {
    grid-area: 1/5/2/6;
}
.task-status {
    grid-area: 2/1/3/5;
    text-align: start;
    justify-content:start;
    align-items: flex-end; 
    padding-left: 8px;
}
.task-delete {
    grid-area: 2/5/3/6;
}
.task-info {
    grid-area: 3/1/4/5;
    padding-left: 8px;
}
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAwE;AAC5E;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAqE;AACzE;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAuE;AAC3E;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAuE;IACvE,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;IACvB,4BAA4B;IAC5B,sBAAsB;IACtB,sBAAsB;IACtB,6FAA6F;IAC7F,oGAAoG;AACxG;AACA;IACI,mCAAmC;IACnC,kCAAkC;IAClC,kCAAkC;IAClC,iCAAiC;IACjC,sCAAsC;IACtC,iCAAiC;IACjC,yBAAyB;IACzB,mGAAmG;IACnG,wGAAwG;AAC5G;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;IACvB,6BAA6B;IAC7B,sBAAsB;IACtB,cAAc;IACd,iGAAiG;IACjG,sGAAsG;AAC1G;AACA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,qBAAqB;IACrB,uBAAuB;IACvB,6BAA6B;IAC7B,sBAAsB;IACtB,YAAY;IACZ,+FAA+F;IAC/F,mGAAmG;IACnG;QACI,qCAAqC;IACzC;IACA;QACI,2CAA2C;IAC/C;IACA;;OAEG;AACP;AACA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,+BAA+B;IAC/B,uBAAuB;IACvB,mCAAmC;IACnC,sBAAsB;IACtB,cAAc;IACd,gGAAgG;IAChG,wGAAwG;AAC5G;AACA;IACI,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,+BAA+B;IAC/B,eAAe;IACf,qCAAqC;IACrC,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;CAClB;AACD;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,sBAAsB;CACzB;AACD;IACI,8BAA8B;AAClC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,sCAAsC;IACtC,SAAS;IACT,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,qCAAqC;IACrC,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;CACnB;AACD;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,oCAAoC;IACpC,uBAAuB;AAC3B;CACC;IACG,SAAS;IACT,kBAAkB;IAClB,2BAA2B;CAC9B;CACA;IACG,eAAe;CAClB;CACA;IACG,YAAY;IACZ,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mCAAmC;AACvC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,oDAAoD;IACpD,gBAAgB;IAChB,mBAAmB;IACnB,6CAA6C;AACjD;AACA;IACI,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,2CAA2C;IAC3C,uBAAuB;IACvB,gBAAgB;IAChB,mCAAmC;AACvC;AACA;IACI,iCAAiC;IACjC,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,oBAAoB;AACxB;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,UAAU;IACV,qCAAqC;IACrC,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,qCAAqC;AACzC;AACA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,wBAAwB;IACxB,mDAAmD;AACvD;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    font-weight: 400;\n    src: url(/src/assets/fonts/roboto-regular-webfont.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Roboto';\n    font-weight: 700;\n    src: url(/src/assets/fonts/roboto-bold-webfont.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Roboto';\n    font-weight: 500;\n    src: url(/src/assets/fonts/roboto-medium-webfont.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Roboto';\n    font-weight: 400;\n    src: url(/src/assets/fonts/roboto-italic-webfont.woff2) format('woff2');\n    font-style: italic;\n}\n:root, :root.grey {\n    background-color:white;\n    --heading-color: #565656;\n    --border-color: #8b8b8b;\n    --button-color: #565656;\n    --button-hover-color:#807e7d;\n    --input-color: #8b8b8b;\n    --text:rgb(76, 75, 75);\n    --filter: invert(33%) sepia(1%) saturate(0%) hue-rotate(350deg) brightness(93%) contrast(86%);\n    --hover-filter:  invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(93%) contrast(107%);\n}\n:root, :root.orange {\n    background-color:rgb(252, 252, 252);\n    --heading-color: rgb(255, 159, 28);\n    --border-color: rgb(255, 191, 105);\n    --button-color: rgb(236, 159, 42);\n    --button-hover-color:rgb(255, 159, 28);\n    --input-color: rgb(255, 191, 105);\n    --text:rgb(117, 117, 117);\n    --filter: invert(77%) sepia(35%) saturate(4460%) hue-rotate(344deg) brightness(101%) contrast(101%);\n    --hover-filter: invert(95%) sepia(24%) saturate(5708%) hue-rotate(308deg) brightness(99%) contrast(103%);\n}\n:root, :root.blue {\n    background-color:white;\n    --heading-color: #152985;\n    --border-color: #092f96;\n    --button-color: #092f96;\n    --button-hover-color: #194b8b;\n    --input-color: #092f96;\n    --text:#1D2731;\n    --filter: invert(17%) sepia(79%) saturate(536%) hue-rotate(161deg) brightness(103%) contrast(99%);\n    --hover-filter: invert(37%) sepia(70%) saturate(469%) hue-rotate(158deg) brightness(95%) contrast(92%);\n}\n:root, :root.black {\n    background-color:#1a2930 ;\n    --heading-color: #c5c1c0;\n    --border-color: white;\n    --button-color: #b8b8b8;\n    --button-hover-color: #949190;\n    --input-color: #1a2930;\n    --text:white;\n    --filter: invert(6%) sepia(9%) saturate(2593%) hue-rotate(109deg) brightness(94%) contrast(95%);\n    --hover-filter: invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(93%) contrast(107%);\n    & .newTaskButton {\n        background-color: var(--button-color);\n    }\n    & .newTaskButton:hover {\n        background-color: var(--button-hover-color);\n    }\n    /* & input {\n    outline: solid 2px var(--background-color);\n    } */\n}\n:root, :root.green {\n    background-color:white;\n    --border-color: #009933;\n    --heading-color: rgb(1, 112, 1);\n    --button-color: #009933;\n    --button-hover-color:rgb(1, 112, 1); \n    --input-color: #009933;\n    --text:#1a2930;\n    --filter: invert(24%) sepia(54%) saturate(2665%) hue-rotate(95deg) brightness(94%) contrast(99%);\n    --hover-filter: invert(29%) sepia(98%) saturate(1359%) hue-rotate(121deg) brightness(99%) contrast(101%);\n}\nhtml, body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n}\nbody {\n    font-family:'Roboto',sans-serif;\n    font-size: 100%;\n    padding: 10px calc(28px + 1.5vw) 15px;\n    min-width: 280px;\n    max-width: 640px;\n    margin:0px auto;\n }\nheader,footer {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    padding-bottom: 0.7rem;\n }\nfooter {\n    justify-content: space-between;\n}\nheader {\n    justify-content:center;\n}\nh1 {\n    font-weight: bold;\n    color: var(--heading-color);\n    font-size: 3rem;\n    margin-bottom: 0;\n    line-height: 3rem;\n    margin-right: auto;\n}\n.sort {\n    align-self: flex-end;\n    font-size: 1.7rem;\n    line-height: 1.7rem;\n    padding: 2px;\n    position: relative;\n    color:var(--text);\n    margin-left: auto;\n}\n.sort-text:hover {\n    cursor: pointer;\n    font-weight: bold;\n}\n.sort-wrapper {\n    padding:10px 16px;\n    position:absolute;\n    left:-36px;\n    top: 2rem;\n    background-color: white;\n    visibility: visible;\n    opacity: 1;\n    transition: all .1s;\n}\n.sort-menu {\n    font-size: 1.2rem;\n    color:var(--text);\n    padding:5px;\n    outline: solid 3px var(--button-color);\n    opacity:1;\n    border-radius: 8px;\n    background-color: white;\n}\n.sort-menu ul>li {\n    padding: 4px 6px;\n    text-align: center;\n    margin: 0;\n}\n.sort-menu ul>li:hover {\n    background-color:var(--heading-color);\n    color:white;\n    border:none;\n    border-radius: 4px;\n}\n.sort-menu ul li+li {\n    border-top:1px solid rgb(175, 172, 172);\n    text-align: center;\n    margin: 0;\n}\n.content {\n    border: 4.9px solid var(--border-color);\n    border-radius: 6px;\n    min-height: 75%;\n    padding:4px 10px;\n    color: var(--text);\n    min-width: 260px;\n }\n.task-list {\n    min-width:265px ;\n}\n.task-list-heading {\n    display: grid;\n    grid-template-rows: 2.4rem;\n    grid-template-columns: auto 30px 1fr;\n    padding:1px 8px 5px 1px;\n}\n h2 {\n    margin: 0;\n    margin-right: 18px;\n    color: var(--heading-color);\n } \n h2:hover {\n    cursor: pointer;\n }\n .listNameTitle {\n    padding: 1px;\n    grid-area: 1/1/2/2;\n }\n.list-delete {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-left:8px;\n    grid-area: 1/2/2/3;\n    transition: all 0.2s;\n    visibility: visible;\n    opacity: 1;\n}\n.list-delete img {\n    height: 1.7rem;\n}\n.hide {\n    visibility: hidden;\n    opacity: 0;\n}\n.list-toggle {\n    color: var(--heading-color);\n    font-size: 2.2rem;\n    font-weight: bold;\n    text-align: center;\n    width:20px;\n    grid-area: 1/3/2/4;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n}\n.list-toggle:hover {\n    color: var(--border-color);\n    cursor: pointer;\n}\n.minus {\n    font-size: 2.3rem;\n    padding-right: 0.2rem;\n}\n.taskListWrapper {\n    grid-area: 2/1/3/4;\n    display: grid;\n    grid-template-rows: 0fr; \n    transition: grid-template-rows 0.3s;\n}\n.showList {\n    grid-template-rows:1fr; \n}\n.inner {\n    overflow: hidden;\n}\n.task-item {\n    display: grid;\n    grid-template-rows: 1.7rem;\n    grid-template-columns: 25px 1fr 25px 110px 35px 15px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    border-bottom: 1.4px solid rgb(175, 172, 172);\n}\n.task-item:last-child {\n    margin-bottom: 10px;\n}\n.task-priority {\n    grid-area: 1/1/2/2;\n    align-items: center; \n    display: flex;\n    justify-content: flex-start;\n}\n.circle {\n    height: 16px;\n    width:16px;\n    border-radius: 50%;\n    display: block;\n}\n.task-name {\n    grid-area: 1/2/2/4;\n    font-size: 1.1rem;\n}\n.task-due {\n    grid-area: 1/4/2/5;\n    text-align: end;\n    padding-right: 1rem;\n    padding-bottom: 0.2rem;\n    display: flex;\n    align-items:flex-end;\n    justify-content: flex-end;\n}\n.task-toggle {\n    grid-area: 1/5/2/6;\n    color: var(--heading-color);\n    font-size: 2rem;\n    font-weight: bold;\n    line-height: 1rem;\n    text-align: center;\n}\n.task-toggle:hover {\n    color: var(--border-color);\n    cursor: pointer;\n}\n.taskWrapper {\n    grid-area:2/2/3/6;\n    display: grid;\n    grid-template-columns: 1fr 25px 110px 35px ;\n    grid-template-rows: 0 0; \n    overflow: hidden;\n    transition: grid-template-rows 0.3s;\n}\n.showTask {\n    grid-template-rows: 1.7rem 1.7rem; \n    grid-template-rows: 1.7rem auto; \n}\n.task-list-name {\n    grid-area: 1/1/2/2;\n    display: flex;\n    align-items: center;\n}\n.task-edit {\n    grid-area: 1/2/2/3;\n    display: flex;\n    align-items: center;\n    justify-content:center;\n}\n.task-edit img {\n    height: 1.5rem;\n}\n.task-status {\n    grid-area: 1/3/2/4;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;    \n}\n.task-delete {\n    grid-area: 1/4/2/5;\n    display: flex;\n    align-items: center;\n    justify-content:center;\n    padding-bottom: -5px;\n}\n.task-delete img {\n    height: 1.6rem;\n}\n.task-info {\n    grid-area: 2/1/3/5;\n    padding-right: 1.7rem;\n    font-size: 0.95rem;\n    color: rgb(10, 10, 10);\n    font-style: italic;\n    padding-left: 8px;\n    padding-top: 1px;\n    line-height: 1.7rem;\n}\n\n.toggle {\n    display: none;\n}\n.noTasksMsg {\n    padding-top: 0.3rem;\n    padding-left: 0.5rem;\n    font-style: italic;\n}\ndialog{\n    min-width: 200px;\n    outline:none;\n}\nimg {\n    filter:var(--filter);\n}\nimg:hover {\n    cursor: pointer;\n    filter: var(--hover-filter);\n}\n.newTaskButton {\n    height: 50px;\n    width:50px;\n    background-color: var(--border-color);\n    border-radius: 50%;\n    display: inline-block;\n    text-align:center;\n    line-height: 47px;\n    font-size: 3rem;\n}\n.newTaskButton:hover {\n    background-color:var(--heading-color);\n}\n.footerButton {\n    background-color: var(--button-color);\n    width:fit-content;\n    padding:7px 15px;\n    border-radius: 4px;\n    margin-top: 12px;\n    font-size: 1.2rem;\n    color:white;\n}\n.button {\n    color:white;\n    font-weight: bold;\n}\n.button:hover {\n    background-color:var(--button-hover-color);\n    cursor: pointer;\n}\n\n@media screen and (max-width:520px) {\n.task-list-name {\n    grid-area: 2/2/3/5;\n}\n.task-item {\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 25px 1fr 25px 95px 35px 15px;\n}\n.task-priority {\n    grid-area: 1/1/2/2;\n    display: flex;\n    align-items:flex-start;\n    padding-top: 5px;\n}\n.task-name {\n    grid-area: 1/2/2/4;\n    line-height: 1.35rem;\n}\n.task-due {\n    grid-area: 1/4/2/5;\n    text-align: end;\n    padding-right: 0;\n    padding-bottom: 0.1rem;\n    display: flex;\n    align-items:flex-start;\n    justify-content: flex-end;\n}\n.task-toggle {\n    grid-area: 1/5/2/6;\n}\n.taskWrapper{\n    grid-template-rows: 0 0 0;\n}\n.showTask {\n    grid-template-rows: 1.7rem auto; \n}\n.task-list-name {\n    grid-area: 1/1/2/5;\n    justify-content: flex-start;\n    align-items: flex-end;\n    padding-left: 8px;\n}\n.task-edit {\n    grid-area: 1/5/2/6;\n}\n.task-status {\n    grid-area: 2/1/3/5;\n    text-align: start;\n    justify-content:start;\n    align-items: flex-end; \n    padding-left: 8px;\n}\n.task-delete {\n    grid-area: 2/5/3/6;\n}\n.task-info {\n    grid-area: 3/1/4/5;\n    padding-left: 8px;\n}\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.addLeadingZeros = addLeadingZeros;
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultLocale.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "defaultLocale", ({
  enumerable: true,
  get: function () {
    return _index.enUS;
  },
}));
var _index = __webpack_require__(/*! ../locale/en-US.js */ "./node_modules/date-fns/locale/en-US.js");


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.getDefaultOptions = getDefaultOptions;
exports.setDefaultOptions = setDefaultOptions;

let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.formatters = void 0;
var _index = __webpack_require__(/*! ../../getDayOfYear.js */ "./node_modules/date-fns/getDayOfYear.js");
var _index2 = __webpack_require__(/*! ../../getISOWeek.js */ "./node_modules/date-fns/getISOWeek.js");
var _index3 = __webpack_require__(/*! ../../getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
var _index4 = __webpack_require__(/*! ../../getWeek.js */ "./node_modules/date-fns/getWeek.js");
var _index5 = __webpack_require__(/*! ../../getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");

var _index6 = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");
var _index7 = __webpack_require__(/*! ./lightFormatters.js */ "./node_modules/date-fns/_lib/format/lightFormatters.js");

const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = (exports.formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _index7.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0, _index5.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0, _index6.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0, _index6.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0, _index3.getISOWeekYear)(date);

    // Padding
    return (0, _index6.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0, _index6.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0, _index6.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0, _index6.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _index7.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0, _index6.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0, _index4.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0, _index6.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0, _index2.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0, _index6.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _index7.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0, _index.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0, _index6.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0, _index6.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0, _index6.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0, _index6.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _index7.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _index7.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0, _index6.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0, _index6.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _index7.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _index7.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _index7.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0, _index6.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0, _index6.addLeadingZeros)(timestamp, token.length);
  },
});

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return (
    sign + String(hours) + delimiter + (0, _index6.addLeadingZeros)(minutes, 2)
  );
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0, _index6.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0, _index6.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0, _index6.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.lightFormatters = void 0;
var _index = __webpack_require__(/*! ../addLeadingZeros.js */ "./node_modules/date-fns/_lib/addLeadingZeros.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = (exports.lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0, _index.addLeadingZeros)(
      token === "yy" ? year % 100 : year,
      token.length,
    );
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M"
      ? String(month + 1)
      : (0, _index.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0, _index.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0, _index.addLeadingZeros)(
      date.getHours() % 12 || 12,
      token.length,
    );
  },

  // Hour [0-23]
  H(date, token) {
    return (0, _index.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0, _index.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0, _index.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0, _index.addLeadingZeros)(fractionalSeconds, token.length);
  },
});


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.longFormatters = void 0;

const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = (exports.longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
});


/***/ }),

/***/ "./node_modules/date-fns/_lib/getRoundingMethod.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.getRoundingMethod = getRoundingMethod;

function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds;
var _index = __webpack_require__(/*! ../toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0, _index.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
exports.warnOrThrowProtectedError = warnOrThrowProtectedError;
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.secondsInYear =
  exports.secondsInWeek =
  exports.secondsInQuarter =
  exports.secondsInMonth =
  exports.secondsInMinute =
  exports.secondsInHour =
  exports.secondsInDay =
  exports.quartersInYear =
  exports.monthsInYear =
  exports.monthsInQuarter =
  exports.minutesInYear =
  exports.minutesInMonth =
  exports.minutesInHour =
  exports.minutesInDay =
  exports.minTime =
  exports.millisecondsInWeek =
  exports.millisecondsInSecond =
  exports.millisecondsInMinute =
  exports.millisecondsInHour =
  exports.millisecondsInDay =
  exports.maxTime =
  exports.daysInYear =
  exports.daysInWeek =
    void 0; /**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = (exports.daysInWeek = 7);

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = (exports.daysInYear = 365.2425);

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = (exports.maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000);

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = (exports.minTime = -maxTime);

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = (exports.millisecondsInWeek = 604800000);

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = (exports.millisecondsInDay = 86400000);

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = (exports.millisecondsInMinute = 60000);

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = (exports.millisecondsInHour = 3600000);

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = (exports.millisecondsInSecond = 1000);

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = (exports.minutesInYear = 525600);

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = (exports.minutesInMonth = 43200);

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = (exports.minutesInDay = 1440);

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = (exports.minutesInHour = 60);

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = (exports.monthsInQuarter = 3);

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = (exports.monthsInYear = 12);

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = (exports.quartersInYear = 4);

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = (exports.secondsInHour = 3600);

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = (exports.secondsInMinute = 60);

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = (exports.secondsInDay = secondsInHour * 24);

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = (exports.secondsInWeek = secondsInDay * 7);

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = (exports.secondsInYear = secondsInDay * daysInYear);

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = (exports.secondsInMonth = secondsInYear / 12);

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = (exports.secondsInQuarter = secondsInMonth * 3);


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.constructFrom = constructFrom;

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInCalendarDays = differenceInCalendarDays;
var _index = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
var _index2 = __webpack_require__(/*! ./startOfDay.js */ "./node_modules/date-fns/startOfDay.js");
var _index3 = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0, _index2.startOfDay)(dateLeft);
  const startOfDayRight = (0, _index2.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft -
    (0, _index3.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight -
    (0, _index3.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(
    (timestampLeft - timestampRight) / _index.millisecondsInDay,
  );
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarMonths.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarMonths.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInCalendarMonths = differenceInCalendarMonths;
var _index = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dateLeft, dateRight) {
  const _dateLeft = (0, _index.toDate)(dateLeft);
  const _dateRight = (0, _index.toDate)(dateRight);

  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();

  return yearDiff * 12 + monthDiff;
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarQuarters.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarQuarters.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInCalendarQuarters = differenceInCalendarQuarters;
var _index = __webpack_require__(/*! ./getQuarter.js */ "./node_modules/date-fns/getQuarter.js");
var _index2 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date

 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(dateLeft, dateRight) {
  const _dateLeft = (0, _index2.toDate)(dateLeft);
  const _dateRight = (0, _index2.toDate)(dateRight);

  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
  const quarterDiff =
    (0, _index.getQuarter)(_dateLeft) - (0, _index.getQuarter)(_dateRight);

  return yearDiff * 4 + quarterDiff;
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarWeeks.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarWeeks.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInCalendarWeeks = differenceInCalendarWeeks;
var _index = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
var _index2 = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");

var _index3 = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.js */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");

/**
 * The {@link differenceInCalendarWeeks} function options.
 */

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(dateLeft, dateRight, options) {
  const startOfWeekLeft = (0, _index2.startOfWeek)(dateLeft, options);
  const startOfWeekRight = (0, _index2.startOfWeek)(dateRight, options);

  const timestampLeft =
    +startOfWeekLeft -
    (0, _index3.getTimezoneOffsetInMilliseconds)(startOfWeekLeft);
  const timestampRight =
    +startOfWeekRight -
    (0, _index3.getTimezoneOffsetInMilliseconds)(startOfWeekRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a days is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(
    (timestampLeft - timestampRight) / _index.millisecondsInWeek,
  );
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarYears.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarYears.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInCalendarYears = differenceInCalendarYears;
var _index = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears(dateLeft, dateRight) {
  const _dateLeft = (0, _index.toDate)(dateLeft);
  const _dateRight = (0, _index.toDate)(dateRight);

  return _dateLeft.getFullYear() - _dateRight.getFullYear();
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInHours.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInHours.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInHours = differenceInHours;
var _index = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
var _index2 = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
var _index3 = __webpack_require__(/*! ./differenceInMilliseconds.js */ "./node_modules/date-fns/differenceInMilliseconds.js");

/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(dateLeft, dateRight, options) {
  const diff =
    (0, _index3.differenceInMilliseconds)(dateLeft, dateRight) /
    _index2.millisecondsInHour;
  return (0, _index.getRoundingMethod)(options?.roundingMethod)(diff);
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInMilliseconds.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInMilliseconds = differenceInMilliseconds;
var _index = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  return +(0, _index.toDate)(dateLeft) - +(0, _index.toDate)(dateRight);
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInMinutes.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInMinutes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInMinutes = differenceInMinutes;
var _index = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
var _index2 = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
var _index3 = __webpack_require__(/*! ./differenceInMilliseconds.js */ "./node_modules/date-fns/differenceInMilliseconds.js");

/**
 * The {@link differenceInMinutes} function options.
 */

/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff =
    (0, _index3.differenceInMilliseconds)(dateLeft, dateRight) /
    _index2.millisecondsInMinute;
  return (0, _index.getRoundingMethod)(options?.roundingMethod)(diff);
}


/***/ }),

/***/ "./node_modules/date-fns/differenceInSeconds.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInSeconds.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.differenceInSeconds = differenceInSeconds;
var _index = __webpack_require__(/*! ./_lib/getRoundingMethod.js */ "./node_modules/date-fns/_lib/getRoundingMethod.js");
var _index2 = __webpack_require__(/*! ./differenceInMilliseconds.js */ "./node_modules/date-fns/differenceInMilliseconds.js");

/**
 * The {@link differenceInSeconds} function options.
 */

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dateLeft, dateRight, options) {
  const diff =
    (0, _index2.differenceInMilliseconds)(dateLeft, dateRight) / 1000;
  return (0, _index.getRoundingMethod)(options?.roundingMethod)(diff);
}


/***/ }),

/***/ "./node_modules/date-fns/format.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/format.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.format = exports.formatDate = format;
Object.defineProperty(exports, "formatters", ({
  enumerable: true,
  get: function () {
    return _index3.formatters;
  },
}));
Object.defineProperty(exports, "longFormatters", ({
  enumerable: true,
  get: function () {
    return _index4.longFormatters;
  },
}));
var _index = __webpack_require__(/*! ./_lib/defaultLocale.js */ "./node_modules/date-fns/_lib/defaultLocale.js");
var _index2 = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");
var _index3 = __webpack_require__(/*! ./_lib/format/formatters.js */ "./node_modules/date-fns/_lib/format/formatters.js");
var _index4 = __webpack_require__(/*! ./_lib/format/longFormatters.js */ "./node_modules/date-fns/_lib/format/longFormatters.js");
var _index5 = __webpack_require__(/*! ./_lib/protectedTokens.js */ "./node_modules/date-fns/_lib/protectedTokens.js");

var _index6 = __webpack_require__(/*! ./isValid.js */ "./node_modules/date-fns/isValid.js");
var _index7 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0, _index2.getDefaultOptions)();
  const locale =
    options?.locale ?? defaultOptions.locale ?? _index.defaultLocale;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0, _index7.toDate)(date);

  if (!(0, _index6.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _index4.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_index3.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0, _index5.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0, _index5.isProtectedDayOfYearToken)(token))
      ) {
        (0, _index5.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _index3.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.getDayOfYear = getDayOfYear;
var _index = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");
var _index2 = __webpack_require__(/*! ./startOfYear.js */ "./node_modules/date-fns/startOfYear.js");
var _index3 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0, _index3.toDate)(date);
  const diff = (0, _index.differenceInCalendarDays)(
    _date,
    (0, _index2.startOfYear)(_date),
  );
  const dayOfYear = diff + 1;
  return dayOfYear;
}


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.getISOWeek = getISOWeek;
var _index = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
var _index2 = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
var _index3 = __webpack_require__(/*! ./startOfISOWeekYear.js */ "./node_modules/date-fns/startOfISOWeekYear.js");
var _index4 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0, _index4.toDate)(date);
  const diff =
    +(0, _index2.startOfISOWeek)(_date) -
    +(0, _index3.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _index.millisecondsInWeek) + 1;
}


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.getISOWeekYear = getISOWeekYear;
var _index = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
var _index2 = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
var _index3 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0, _index3.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0, _index.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0, _index2.startOfISOWeek)(
    fourthOfJanuaryOfNextYear,
  );

  const fourthOfJanuaryOfThisYear = (0, _index.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0, _index2.startOfISOWeek)(
    fourthOfJanuaryOfThisYear,
  );

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/getQuarter.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/getQuarter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.getQuarter = getQuarter;
var _index = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter(date) {
  const _date = (0, _index.toDate)(date);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}


/***/ }),

/***/ "./node_modules/date-fns/getWeek.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getWeek.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.getWeek = getWeek;
var _index = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");
var _index2 = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
var _index3 = __webpack_require__(/*! ./startOfWeekYear.js */ "./node_modules/date-fns/startOfWeekYear.js");
var _index4 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0, _index4.toDate)(date);
  const diff =
    +(0, _index2.startOfWeek)(_date, options) -
    +(0, _index3.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _index.millisecondsInWeek) + 1;
}


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.getWeekYear = getWeekYear;
var _index = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
var _index2 = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");
var _index3 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

var _index4 = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");

/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0, _index3.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0, _index4.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0, _index.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0, _index2.startOfWeek)(
    firstWeekOfNextYear,
    options,
  );

  const firstWeekOfThisYear = (0, _index.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0, _index2.startOfWeek)(
    firstWeekOfThisYear,
    options,
  );

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}


/***/ }),

/***/ "./node_modules/date-fns/intlFormatDistance.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/intlFormatDistance.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.intlFormatDistance = intlFormatDistance;
var _index = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");

var _index2 = __webpack_require__(/*! ./differenceInCalendarDays.js */ "./node_modules/date-fns/differenceInCalendarDays.js");
var _index3 = __webpack_require__(/*! ./differenceInCalendarMonths.js */ "./node_modules/date-fns/differenceInCalendarMonths.js");
var _index4 = __webpack_require__(/*! ./differenceInCalendarQuarters.js */ "./node_modules/date-fns/differenceInCalendarQuarters.js");
var _index5 = __webpack_require__(/*! ./differenceInCalendarWeeks.js */ "./node_modules/date-fns/differenceInCalendarWeeks.js");
var _index6 = __webpack_require__(/*! ./differenceInCalendarYears.js */ "./node_modules/date-fns/differenceInCalendarYears.js");
var _index7 = __webpack_require__(/*! ./differenceInHours.js */ "./node_modules/date-fns/differenceInHours.js");
var _index8 = __webpack_require__(/*! ./differenceInMinutes.js */ "./node_modules/date-fns/differenceInMinutes.js");
var _index9 = __webpack_require__(/*! ./differenceInSeconds.js */ "./node_modules/date-fns/differenceInSeconds.js");
var _index10 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * The {@link intlFormatDistance} function options.
 */

/**
 * The unit used to format the distance in {@link intlFormatDistance}.
 */

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date
 * @param baseDate - The date to compare with.
 * @param options - An object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 *
 * @returns The distance in words according to language-sensitive relative time formatting.
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must not be invalid Unit
 * @throws `options.locale` must not be invalid locale
 * @throws `options.localeMatcher` must not be invalid localeMatcher
 * @throws `options.numeric` must not be invalid numeric
 * @throws `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
function intlFormatDistance(date, baseDate, options) {
  let value = 0;
  let unit;
  const dateLeft = (0, _index10.toDate)(date);
  const dateRight = (0, _index10.toDate)(baseDate);

  if (!options?.unit) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    const diffInSeconds = (0, _index9.differenceInSeconds)(dateLeft, dateRight); // The smallest unit

    if (Math.abs(diffInSeconds) < _index.secondsInMinute) {
      value = (0, _index9.differenceInSeconds)(dateLeft, dateRight);
      unit = "second";
    } else if (Math.abs(diffInSeconds) < _index.secondsInHour) {
      value = (0, _index8.differenceInMinutes)(dateLeft, dateRight);
      unit = "minute";
    } else if (
      Math.abs(diffInSeconds) < _index.secondsInDay &&
      Math.abs((0, _index2.differenceInCalendarDays)(dateLeft, dateRight)) < 1
    ) {
      value = (0, _index7.differenceInHours)(dateLeft, dateRight);
      unit = "hour";
    } else if (
      Math.abs(diffInSeconds) < _index.secondsInWeek &&
      (value = (0, _index2.differenceInCalendarDays)(dateLeft, dateRight)) &&
      Math.abs(value) < 7
    ) {
      unit = "day";
    } else if (Math.abs(diffInSeconds) < _index.secondsInMonth) {
      value = (0, _index5.differenceInCalendarWeeks)(dateLeft, dateRight);
      unit = "week";
    } else if (Math.abs(diffInSeconds) < _index.secondsInQuarter) {
      value = (0, _index3.differenceInCalendarMonths)(dateLeft, dateRight);
      unit = "month";
    } else if (Math.abs(diffInSeconds) < _index.secondsInYear) {
      if ((0, _index4.differenceInCalendarQuarters)(dateLeft, dateRight) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = (0, _index4.differenceInCalendarQuarters)(dateLeft, dateRight);
        unit = "quarter";
      } else {
        value = (0, _index6.differenceInCalendarYears)(dateLeft, dateRight);
        unit = "year";
      }
    } else {
      value = (0, _index6.differenceInCalendarYears)(dateLeft, dateRight);
      unit = "year";
    }
  } else {
    // Get the value if unit is specified
    unit = options?.unit;
    if (unit === "second") {
      value = (0, _index9.differenceInSeconds)(dateLeft, dateRight);
    } else if (unit === "minute") {
      value = (0, _index8.differenceInMinutes)(dateLeft, dateRight);
    } else if (unit === "hour") {
      value = (0, _index7.differenceInHours)(dateLeft, dateRight);
    } else if (unit === "day") {
      value = (0, _index2.differenceInCalendarDays)(dateLeft, dateRight);
    } else if (unit === "week") {
      value = (0, _index5.differenceInCalendarWeeks)(dateLeft, dateRight);
    } else if (unit === "month") {
      value = (0, _index3.differenceInCalendarMonths)(dateLeft, dateRight);
    } else if (unit === "quarter") {
      value = (0, _index4.differenceInCalendarQuarters)(dateLeft, dateRight);
    } else if (unit === "year") {
      value = (0, _index6.differenceInCalendarYears)(dateLeft, dateRight);
    }
  }

  const rtf = new Intl.RelativeTimeFormat(options?.locale, {
    localeMatcher: options?.localeMatcher,
    numeric: options?.numeric || "auto",
    style: options?.style,
  });

  return rtf.format(value, unit);
}


/***/ }),

/***/ "./node_modules/date-fns/isDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/isDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.isDate = isDate; /**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}


/***/ }),

/***/ "./node_modules/date-fns/isValid.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isValid.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.isValid = isValid;
var _index = __webpack_require__(/*! ./isDate.js */ "./node_modules/date-fns/isDate.js");
var _index2 = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0, _index.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0, _index2.toDate)(date);
  return !isNaN(Number(_date));
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.buildFormatLongFn = buildFormatLongFn;

function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.buildLocalizeFn = buildLocalizeFn; /* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.buildMatchFn = buildMatchFn;

function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js":
/*!******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.buildMatchPatternFn = buildMatchPatternFn;

function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.js":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.enUS = void 0;
var _index = __webpack_require__(/*! ./en-US/_lib/formatDistance.js */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js");
var _index2 = __webpack_require__(/*! ./en-US/_lib/formatLong.js */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js");
var _index3 = __webpack_require__(/*! ./en-US/_lib/formatRelative.js */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js");
var _index4 = __webpack_require__(/*! ./en-US/_lib/localize.js */ "./node_modules/date-fns/locale/en-US/_lib/localize.js");
var _index5 = __webpack_require__(/*! ./en-US/_lib/match.js */ "./node_modules/date-fns/locale/en-US/_lib/match.js");

/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = (exports.enUS = {
  code: "en-US",
  formatDistance: _index.formatDistance,
  formatLong: _index2.formatLong,
  formatRelative: _index3.formatRelative,
  localize: _index4.localize,
  match: _index5.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
});


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.formatDistance = void 0;

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};
exports.formatDistance = formatDistance;


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.formatLong = void 0;
var _index = __webpack_require__(/*! ../../_lib/buildFormatLongFn.js */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.js");

const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = (exports.formatLong = {
  date: (0, _index.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0, _index.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0, _index.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
});


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.formatRelative = void 0;

const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];
exports.formatRelative = formatRelative;


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.localize = void 0;
var _index = __webpack_require__(/*! ../../_lib/buildLocalizeFn.js */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.js");

const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = (exports.localize = {
  ordinalNumber,

  era: (0, _index.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0, _index.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0, _index.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0, _index.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0, _index.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.match = void 0;

var _index = __webpack_require__(/*! ../../_lib/buildMatchFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchFn.js");
var _index2 = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.js */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.js");

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = (exports.match = {
  ordinalNumber: (0, _index2.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0, _index.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0, _index.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0, _index.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0, _index.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0, _index.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
});


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.startOfDay = startOfDay;
var _index = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0, _index.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.startOfISOWeek = startOfISOWeek;
var _index = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0, _index.startOfWeek)(date, { weekStartsOn: 1 });
}


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.startOfISOWeekYear = startOfISOWeekYear;
var _index = __webpack_require__(/*! ./getISOWeekYear.js */ "./node_modules/date-fns/getISOWeekYear.js");
var _index2 = __webpack_require__(/*! ./startOfISOWeek.js */ "./node_modules/date-fns/startOfISOWeek.js");
var _index3 = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0, _index.getISOWeekYear)(date);
  const fourthOfJanuary = (0, _index3.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0, _index2.startOfISOWeek)(fourthOfJanuary);
}


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.startOfWeek = startOfWeek;
var _index = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");

var _index2 = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");

/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0, _index2.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0, _index.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.startOfWeekYear = startOfWeekYear;
var _index = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
var _index2 = __webpack_require__(/*! ./getWeekYear.js */ "./node_modules/date-fns/getWeekYear.js");
var _index3 = __webpack_require__(/*! ./startOfWeek.js */ "./node_modules/date-fns/startOfWeek.js");

var _index4 = __webpack_require__(/*! ./_lib/defaultOptions.js */ "./node_modules/date-fns/_lib/defaultOptions.js");

/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0, _index4.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0, _index2.getWeekYear)(date, options);
  const firstWeek = (0, _index.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0, _index3.startOfWeek)(firstWeek, options);
  return _date;
}


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.startOfYear = startOfYear;
var _index = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");
var _index2 = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0, _index.toDate)(date);
  const _date = (0, _index2.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}


/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.toDate = toDate;

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}


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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDOM: () => (/* binding */ clearDOM),
/* harmony export */   createListsArray: () => (/* binding */ createListsArray),
/* harmony export */   renderList: () => (/* binding */ renderList),
/* harmony export */   renderSortList: () => (/* binding */ renderSortList)
/* harmony export */ });
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/form.css */ "./src/styles/form.css");
/* harmony import */ var _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/delete.svg */ "./src/assets/images/delete.svg");
/* harmony import */ var _assets_images_pencil_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/pencil.svg */ "./src/assets/images/pencil.svg");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts */ "./src/scripts.ts");





//IIFE to store all DOM variables and event listeners
(function () {
    const newTaskButton = document.querySelector('.newTaskButton');
    newTaskButton === null || newTaskButton === void 0 ? void 0 : newTaskButton.addEventListener('click', (e) => showNewTaskForm());
    const newListButton = document.querySelector('.newListButton');
    newListButton === null || newListButton === void 0 ? void 0 : newListButton.addEventListener('click', (e) => showNewListForm());
    const newColorButton = document.querySelector('.newColorButton');
    newColorButton === null || newColorButton === void 0 ? void 0 : newColorButton.addEventListener('click', (e) => showColorPicker());
    const sort = document.querySelector('.sort');
    sort === null || sort === void 0 ? void 0 : sort.addEventListener('click', (e) => showSortMenu());
    const showInfo = document.querySelector('.task-toggle');
    const sortItems = document.querySelector('.sort-menu');
    sortItems === null || sortItems === void 0 ? void 0 : sortItems.addEventListener('mouseover', (e) => sortBorderOff(e));
    sortItems === null || sortItems === void 0 ? void 0 : sortItems.addEventListener('mouseout', (e) => sortBorderOn(e));
    const sortTask = document.getElementById('sort-task');
    sortTask === null || sortTask === void 0 ? void 0 : sortTask.addEventListener('click', (e) => sortByTask(e));
    const sortDate = document.getElementById('sort-date');
    sortDate === null || sortDate === void 0 ? void 0 : sortDate.addEventListener('click', (e) => sortByDate(e));
    const sortPriority = document.getElementById('sort-priority');
    sortPriority === null || sortPriority === void 0 ? void 0 : sortPriority.addEventListener('click', (e) => sortByPriority(e));
    const sortStatus = document.getElementById('sort-status');
    sortStatus === null || sortStatus === void 0 ? void 0 : sortStatus.addEventListener('click', (e) => sortByStatus(e));
    //Sort Menu styling
    function sortBorderOff(e) {
        let sortTag = e.target;
        if (sortTag.nextElementSibling) {
            let nextSibling = sortTag.nextElementSibling;
            nextSibling.style.borderTop = '0';
            sortTag.style.borderTop = '0';
        }
    }
    function sortBorderOn(e) {
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
}());
function updateDOM(listsArray, sortField) {
    clearDOM();
    if (!listsArray) {
        listsArray = createListsArray();
    }
    renderList(listsArray);
    let taskArray = createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);
    if (!sortField) {
        sortField = "list";
    }
    renderTask(sortField, sortedTasks);
    addListToggle();
}
;
function clearDOM() {
    const content = document.querySelector('.content');
    while (content === null || content === void 0 ? void 0 : content.firstChild) {
        content.firstChild.remove();
    }
}
;
function showNewListForm() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
    dialog.id = 'newListDialog';
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.id = 'newListForm';
    form.addEventListener('submit', (e) => {
        (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.createNewList)(e);
        updateDOM();
    });
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
    input.setAttribute('required', 'true');
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
        form.reset();
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
function showNewTaskForm() {
    let listsArray = createListsArray();
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
    dialog.id = 'newTaskDialog';
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.className = 'newItemForm';
    form.addEventListener('submit', (e) => {
        (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.createTask)(e);
        updateDOM();
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
    input.setAttribute('required', 'true');
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
    input.setAttribute('type', 'date');
    input.setAttribute('name', 'taskDate');
    input.valueAsDate = new Date();
    input.id = 'taskDate';
    listItem.appendChild(input);
    list.appendChild(listItem);
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
    option.setAttribute('value', 'Not Started');
    text = document.createTextNode('Not Started');
    option.appendChild(text);
    select.appendChild(option);
    option = document.createElement('option');
    option.setAttribute('value', 'In Progress');
    text = document.createTextNode('In Progress');
    option.appendChild(text);
    select.appendChild(option);
    option = document.createElement('option');
    option.setAttribute('value', 'Completed');
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
    input.setAttribute('placeholder', 'Enter task details');
    input.id = 'taskDetails';
    listItem.appendChild(input);
    list.appendChild(listItem);
    listItem = document.createElement('li');
    label = document.createElement('label');
    label.setAttribute('for', 'taskList');
    text = document.createTextNode('List');
    label.appendChild(text);
    listItem.appendChild(label);
    select = document.createElement('select');
    select.setAttribute('name', 'taskList');
    select.id = 'taskList';
    let listLength = listsArray.length;
    for (let i = 0; i < listLength; i++) {
        option = document.createElement('option');
        option.setAttribute('placeholder', 'my-list');
        text = document.createTextNode(listsArray[i]);
        option.appendChild(text);
        select.appendChild(option);
    }
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
;
function createListsArray() {
    let ind = (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.findLocStoreLists)();
    let locStoreArray = Object.values(localStorage);
    if (Array.isArray(locStoreArray)) {
        let listsArray = [];
        let listItem = locStoreArray[ind];
        let lists = JSON.parse(listItem);
        let x = locStoreArray[ind];
        for (let i = 0; i < lists.length; i++) {
            listsArray.push(lists[i]);
        }
        (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.findMyList)(listsArray);
        return listsArray;
    }
    else
        return [];
}
function createTasksArray() {
    let x = (0,_scripts__WEBPACK_IMPORTED_MODULE_4__.findLocStoreLists)();
    let locStoreArray = Object.values(localStorage);
    let storageLength = window.localStorage.length;
    let taskArray = [];
    if (storageLength == 0) {
        return taskArray;
    }
    else {
        if (Array.isArray(locStoreArray)) {
            for (let i = 0; i < storageLength; i++) {
                if (i === x) {
                    continue;
                }
                let thisTask = locStoreArray[i];
                let parsedTask = JSON.parse(thisTask);
                let taskObj = new _scripts__WEBPACK_IMPORTED_MODULE_4__.task(parsedTask);
                taskArray.push(taskObj);
            }
            return taskArray;
        }
        else
            return taskArray;
    }
}
;
function sortTaskArray(taskArray) {
    const sortedTasks = taskArray.sort(function (a, b) {
        return a.rawDate.getTime() - b.rawDate.getTime();
    });
    return sortedTasks;
}
;
function findList(thisList) {
    var _a;
    let listHeadings = document.querySelectorAll("h2");
    let taskList = thisList;
    for (let i = 0; i < listHeadings.length; i++) {
        let listName = listHeadings[i].textContent;
        if (taskList == listName) {
            let grabElement = (_a = listHeadings[i].parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            return grabElement;
        }
    }
    let listsArray = createListsArray();
    if (Array.isArray(listsArray)) {
        listsArray.push(taskList);
        localStorage.setItem('myLists', JSON.stringify(listsArray));
    }
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const list = document.createElement('div');
    list.className = 'list';
    let grabElement = document.createElement('div');
    grabElement.className = 'task-list';
    const listName = document.createElement('h2');
    let text = document.createTextNode(taskList);
    listName.appendChild(text);
    grabElement.appendChild(listName);
    content === null || content === void 0 ? void 0 : content.appendChild(grabElement);
    fragment.appendChild(list);
    content === null || content === void 0 ? void 0 : content.append(fragment);
    return grabElement;
}
;
function renderTask(sortField, taskArray) {
    //Finds list on DOM to attach task
    taskArray.forEach(function (task) {
        let thisList;
        let grabElement;
        if (sortField == "priority") {
            grabElement = findList(task.priority);
        }
        else if (sortField == "status") {
            grabElement = findList(task.status);
        }
        else if (sortField == "date") {
            grabElement = document.querySelector('.task-list-heading');
        }
        else {
            grabElement = findList(task.list);
        }
        const fragment = new DocumentFragment;
        const content = document.querySelector('.content');
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.dataset.id = task.id;
        const taskPriority = document.createElement('div');
        taskPriority.className = 'task-priority';
        const circle = document.createElement('div');
        circle.className = 'circle';
        if (task.priority == 'High') {
            circle.style.backgroundColor = 'red';
        }
        else if (task.priority == 'Low') {
            circle.style.backgroundColor = 'rgb(57, 162, 211)';
        }
        else {
            circle.style.backgroundColor = 'green';
        }
        const taskName = document.createElement('div');
        taskName.className = 'task-name';
        let text = document.createTextNode(task.task);
        taskName.appendChild(text);
        const taskDue = document.createElement('div');
        taskDue.className = 'task-due';
        text = document.createTextNode(task.date);
        taskDue.appendChild(text);
        if (task.rawDate < new Date()) {
            taskDue.style.color = "red";
            taskDue.style.fontStyle = "italic";
        }
        const taskToggle = document.createElement('div');
        taskToggle.className = 'task-toggle';
        text = document.createTextNode('+');
        taskToggle.appendChild(text);
        taskToggle.addEventListener('click', (e) => toggleInfo(e));
        const taskInfo = document.createElement('div');
        taskInfo.className = 'task-info';
        text = document.createTextNode(task.details);
        taskInfo.appendChild(text);
        const taskEdit = document.createElement('div');
        taskEdit.className = 'task-edit';
        const editPencil = document.createElement('img');
        editPencil.src = _assets_images_pencil_svg__WEBPACK_IMPORTED_MODULE_3__;
        editPencil.addEventListener('click', (e) => editTask(e));
        const taskStatus = document.createElement('div');
        taskStatus.className = 'task-status';
        text = document.createTextNode(task.status);
        taskStatus.appendChild(text);
        const taskDelete = document.createElement('div');
        taskDelete.className = 'task-delete';
        const trashBin = document.createElement('img');
        trashBin.src = _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        trashBin.addEventListener('click', (e) => {
            deleteItem(e);
            updateDOM();
        });
        const taskListName = document.createElement('div');
        taskListName.className = 'task-list-name';
        text = document.createTextNode(task.list);
        taskListName.appendChild(text);
        let inner = grabElement.querySelector('.inner');
        inner.appendChild(taskItem);
        taskItem.appendChild(taskPriority);
        taskPriority.appendChild(circle);
        taskItem.appendChild(taskName);
        taskItem.appendChild(taskDue);
        taskItem.appendChild(taskToggle);
        const taskInfoWrapper = document.createElement("div");
        taskInfoWrapper.className = 'taskInfoWrapper';
        const taskWrapper = document.createElement('div');
        taskWrapper.className = 'taskWrapper';
        taskItem.appendChild(taskWrapper);
        taskWrapper.appendChild(taskListName);
        taskWrapper.appendChild(taskEdit);
        taskEdit.appendChild(editPencil);
        taskWrapper.appendChild(taskStatus);
        taskWrapper.appendChild(taskDelete);
        taskDelete.appendChild(trashBin);
        taskWrapper.appendChild(taskInfo);
    });
}
;
function toggleListDisplay(e) {
    let thisDiv = e.target;
    if (thisDiv.className == "task-list-heading") {
        let listChildren = thisDiv.children;
        if (listChildren.length > 1) {
            thisDiv === null || thisDiv === void 0 ? void 0 : thisDiv.children[1].classList.toggle('hide');
        }
    }
    else
        return;
}
function renderList(parsedList) {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const list = document.createElement('div');
    list.className = 'list';
    let length = parsedList.length;
    for (let i = 0; i < length; i++) {
        const taskList = document.createElement('div');
        taskList.className = 'task-list';
        const taskListHeading = document.createElement('div');
        taskListHeading.className = 'task-list-heading';
        const listName = document.createElement("div");
        listName.className = "listNameTitle";
        const listNameTitle = document.createElement('h2');
        let text = document.createTextNode(parsedList[i]);
        listNameTitle.appendChild(text);
        listName.appendChild(listNameTitle);
        const listDelete = document.createElement('div');
        listDelete.className = 'list-delete hide';
        const trashBin = document.createElement('img');
        trashBin.src = _assets_images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        trashBin.addEventListener('click', (e) => {
            checkListTasks(e);
        });
        listDelete.appendChild(trashBin);
        const listToggle = document.createElement('div');
        listToggle.className = 'list-toggle minus';
        text = document.createTextNode("\u2013");
        listToggle.appendChild(text);
        listToggle.addEventListener('click', (e) => toggleList(e));
        taskListHeading.appendChild(listName);
        taskListHeading.appendChild(listDelete);
        taskListHeading.appendChild(listToggle);
        taskListHeading.addEventListener('mouseenter', (e) => {
            toggleListDisplay(e);
        });
        taskListHeading.addEventListener('mouseleave', (e) => {
            toggleListDisplay(e);
        });
        const taskListWrapper = document.createElement('div');
        taskListWrapper.className = 'taskListWrapper showList';
        let inner = document.createElement('div');
        inner.className = 'inner';
        taskListWrapper.appendChild(inner);
        taskListHeading.appendChild(taskListWrapper);
        taskList.appendChild(taskListHeading);
        content === null || content === void 0 ? void 0 : content.appendChild(taskList);
    }
    content === null || content === void 0 ? void 0 : content.append(fragment);
}
;
//Others
function toggleInfo(e) {
    const event = e.target;
    let thisListItem = event.parentElement;
    let taskWrapper = thisListItem === null || thisListItem === void 0 ? void 0 : thisListItem.querySelector('.taskWrapper');
    if (taskWrapper)
        taskWrapper.classList.toggle('showTask');
    if (taskWrapper === null || taskWrapper === void 0 ? void 0 : taskWrapper.classList.contains('showTask')) {
        event.textContent = "\u2013";
    }
    else {
        event.textContent = "+";
    }
    ;
}
;
function addListToggle() {
    let listHeadings = document.querySelectorAll(".task-list");
    listHeadings.forEach((heading) => {
        var _a, _b;
        let headingDiv = (_a = heading.querySelector('.taskListWrapper')) === null || _a === void 0 ? void 0 : _a.firstChild;
        if (!headingDiv.hasChildNodes()) {
            let noTasks = document.createElement("div");
            noTasks.className = "noTasksMsg";
            let text = document.createTextNode("There are no tasks");
            noTasks.appendChild(text);
            headingDiv.appendChild(noTasks);
            let thisToggle = (_b = heading.firstElementChild) === null || _b === void 0 ? void 0 : _b.querySelector('.list-toggle');
            thisToggle.textContent = "";
        }
    });
}
;
function toggleList(e) {
    var _a, _b;
    const event = e.target;
    let thisList = (_b = (_a = event.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstChild;
    const taskListWrapper = thisList.querySelector('.taskListWrapper');
    if (taskListWrapper)
        taskListWrapper.classList.toggle('showList');
    if (taskListWrapper === null || taskListWrapper === void 0 ? void 0 : taskListWrapper.classList.contains('showList')) {
        event.textContent = "\u2013";
    }
    else {
        event.textContent = "+";
    }
    ;
}
function deleteItem(e) {
    var _a, _b;
    if (e.target instanceof Element) {
        let task = (_b = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        let id = task === null || task === void 0 ? void 0 : task.dataset.id;
        localStorage.removeItem(id);
    }
}
function showSortMenu() {
    const sortMenu = document.querySelector('.sort-wrapper');
    sortMenu.classList.toggle('hide');
}
function editTask(e) {
    var _a, _b;
    if (e.target instanceof Element) {
        let task = (_b = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        let id = task === null || task === void 0 ? void 0 : task.dataset.id;
        let thisOne = localStorage.getItem(id);
        let myTask = JSON.parse(thisOne);
        localStorage.removeItem(id);
        fillEditForm();
        function fillEditForm() {
            showNewTaskForm();
            const taskName = document.querySelector('[name="taskName"]');
            taskName === null || taskName === void 0 ? void 0 : taskName.setAttribute('value', myTask.taskName);
            const taskDate = document.querySelector('[name="taskDate"]');
            taskDate.value = myTask.taskDate;
            const taskPriority = document.querySelector('[name="taskPriority"]');
            taskPriority.value = myTask.taskPriority;
            const taskStatus = document.querySelector('[name="taskStatus"]');
            taskStatus.value = myTask.taskStatus;
            const taskDetails = document.querySelector('[name="taskDetails"]');
            taskDetails.value = myTask.taskDetails;
            const taskList = document.querySelector('[name="taskList"]');
            taskList.value = myTask.taskList;
        }
        ;
    }
}
function sortByTask(e) {
    updateDOM();
}
;
function sortByPriority(e) {
    let listsArray = ["Normal", "High", "Low"];
    let sortField = "priority";
    updateSortDOM(listsArray, sortField);
}
;
function sortByStatus(e) {
    let listsArray = ["Not Started", "In Progress", "Completed"];
    let sortField = "status";
    updateSortDOM(listsArray, sortField);
}
;
function sortByDate(e) {
    clearDOM();
    let taskArray = createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);
    dateListName();
    renderTask('date', sortedTasks);
    function dateListName() {
        const content = document.querySelector('.content');
        const list = document.createElement('div');
        list.className = 'list';
        const taskList = document.createElement('div');
        taskList.className = 'task-list';
        const taskListHeading = document.createElement('div');
        taskListHeading.className = 'task-list-heading';
        const listNameTitle = document.createElement("div");
        listNameTitle.className = "listNameTitle";
        const h2 = document.createElement('h2');
        h2.textContent = "My Tasks";
        listNameTitle.appendChild(h2);
        const listDelete = document.createElement('div');
        listDelete.className = 'list-delete hide';
        const taskListWrapper = document.createElement('div');
        taskListWrapper.className = 'taskListWrapper showList';
        let inner = document.createElement('div');
        inner.className = 'inner';
        taskListWrapper.appendChild(inner);
        taskListHeading.appendChild(listNameTitle);
        taskList.appendChild(taskListHeading);
        taskListHeading.appendChild(taskListWrapper);
        content === null || content === void 0 ? void 0 : content.appendChild(taskList);
    }
}
;
function showColorPicker() {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
    dialog.id = 'newColorDialog';
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    form.id = 'newColorForm';
    const closeDialog = document.createElement('button');
    closeDialog.id = "closeDialog";
    closeDialog.setAttribute('type', 'submit');
    let text = document.createTextNode('X');
    closeDialog.appendChild(text);
    form.appendChild(closeDialog);
    closeDialog.addEventListener('click', () => {
        dialog.close();
    });
    const list = document.createElement('ul');
    let listItem = document.createElement('li');
    listItem.className = "circle circle-blue";
    listItem.addEventListener('click', (e) => {
        let color = "blue";
        changeColor(color);
        updateDOM();
    });
    list.appendChild(listItem);
    listItem = document.createElement('li');
    listItem.className = "circle circle-green";
    listItem.addEventListener('click', (e) => {
        let color = "green";
        changeColor(color);
        updateDOM();
    });
    list.appendChild(listItem);
    listItem = document.createElement('li');
    listItem.className = "circle circle-orange";
    listItem.addEventListener('click', (e) => {
        let color = "orange";
        changeColor(color);
        updateDOM();
    });
    list.appendChild(listItem);
    listItem = document.createElement('li');
    listItem.className = "circle circle-grey";
    listItem.addEventListener('click', (e) => {
        let color = "grey";
        changeColor(color);
        updateDOM();
    });
    list.appendChild(listItem);
    listItem = document.createElement('li');
    listItem.className = "circle circle-black";
    listItem.addEventListener('click', (e) => {
        let color = "black";
        changeColor(color);
        updateDOM();
    });
    list.appendChild(listItem);
    form.appendChild(list);
    dialog.append(form);
    fragment.appendChild(dialog);
    content === null || content === void 0 ? void 0 : content.append(fragment);
    dialog.showModal();
}
function changeColor(color) {
    document.documentElement.className = color;
}
function checkListTasks(e) {
    var _a;
    if (e.target instanceof Element) {
        let list = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        let x = list.querySelector('.inner');
        if (x.firstElementChild.className == "task-item") {
            showListDeleteConfirm(list);
        }
        else {
            deleteList(list);
        }
    }
}
function deleteList(list) {
    var _a;
    let id = (_a = list === null || list === void 0 ? void 0 : list.firstChild) === null || _a === void 0 ? void 0 : _a.textContent;
    let myLists = localStorage.getItem('myLists');
    localStorage.removeItem(myLists);
    let myParsedList = JSON.parse(myLists);
    let ind = myParsedList.indexOf(id);
    if (ind > -1) {
        myParsedList.splice(ind, 1);
    }
    localStorage.setItem('myLists', JSON.stringify(myParsedList));
    let listName = String(id);
    removeListTasks(listName);
    updateDOM();
}
function showListDeleteConfirm(list) {
    let confirmDelete = false;
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const dialog = document.createElement('dialog');
    dialog.id = 'confirmDeleteDialog';
    const form = document.createElement('form');
    form.setAttribute('method', 'dialog');
    let msg = document.createElement('div');
    msg.className = 'deleteConfirmMsg';
    let text = document.createTextNode('There are tasks associated with this list. \nAre you sure you want to delete?');
    msg.appendChild(text);
    let buttonsRow = document.createElement('div');
    buttonsRow.className = 'buttonsRow';
    let button = document.createElement('button');
    text = document.createTextNode('Delete');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        deleteList(list);
        dialog.close();
    });
    button.appendChild(text);
    buttonsRow.appendChild(button);
    button = document.createElement('button');
    button.setAttribute('type', 'submit');
    text = document.createTextNode('Cancel');
    button.addEventListener('click', () => {
        confirmDelete = false;
        return confirmDelete;
    });
    button.appendChild(text);
    buttonsRow.appendChild(button);
    form.append(msg);
    form.appendChild(buttonsRow);
    dialog.appendChild(form);
    fragment.appendChild(dialog);
    content === null || content === void 0 ? void 0 : content.append(fragment);
    dialog.showModal();
}
function removeListTasks(list) {
    Object.keys(localStorage).forEach(function (key) {
        let thisKey = JSON.parse(localStorage.getItem(key));
        if (thisKey.taskList == list) {
            localStorage.removeItem(key);
        }
        ;
    });
}
function updateSortDOM(listsArray, sortField) {
    clearDOM();
    renderSortList(listsArray);
    let taskArray = createTasksArray();
    let sortedTasks = sortTaskArray(taskArray);
    renderTask(sortField, sortedTasks);
    addListToggle();
}
;
function renderSortList(parsedList) {
    const fragment = new DocumentFragment;
    const content = document.querySelector('.content');
    const list = document.createElement('div');
    list.className = 'list';
    let length = parsedList.length;
    for (let i = 0; i < length; i++) {
        const taskList = document.createElement('div');
        taskList.className = 'task-list';
        const taskListHeading = document.createElement('div');
        taskListHeading.className = 'task-list-heading';
        const listName = document.createElement("div");
        listName.className = "listNameTitle";
        const listNameTitle = document.createElement('h2');
        let text = document.createTextNode(parsedList[i]);
        listNameTitle.appendChild(text);
        listName.appendChild(listNameTitle);
        const listToggle = document.createElement('div');
        listToggle.className = 'list-toggle minus';
        text = document.createTextNode("\u2013");
        listToggle.appendChild(text);
        listToggle.addEventListener('click', (e) => toggleList(e));
        taskListHeading.appendChild(listName);
        taskListHeading.appendChild(listToggle);
        const taskListWrapper = document.createElement('div');
        taskListWrapper.className = 'taskListWrapper showList';
        let inner = document.createElement('div');
        inner.className = 'inner';
        taskListWrapper.appendChild(inner);
        taskListHeading.appendChild(taskListWrapper);
        taskList.appendChild(taskListHeading);
        content === null || content === void 0 ? void 0 : content.appendChild(taskList);
    }
    content === null || content === void 0 ? void 0 : content.append(fragment);
}
;
updateDOM();


/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewList: () => (/* binding */ createNewList),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   findLocStoreLists: () => (/* binding */ findLocStoreLists),
/* harmony export */   findMyList: () => (/* binding */ findMyList),
/* harmony export */   task: () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _node_modules_date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/date-fns/format */ "./node_modules/date-fns/format.js");
/* harmony import */ var _node_modules_date_fns_intlFormatDistance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/date-fns/intlFormatDistance */ "./node_modules/date-fns/intlFormatDistance.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");


//APPLICATION SCRIPTS

class task {
    constructor(taskObj) {
        this.task = taskObj.taskName;
        this.rawDate = new Date(taskObj.taskDate);
        this.priority = taskObj.taskPriority;
        this.status = taskObj.taskStatus;
        this.details = taskObj.taskDetails;
        this.list = taskObj.taskList;
        this.id = taskObj.id;
    }
    get date() {
        let now = new Date();
        let date = new Date(this.rawDate);
        let dateDiff = (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        if (dateDiff < -366) {
            let myDate = (0,_node_modules_date_fns_intlFormatDistance__WEBPACK_IMPORTED_MODULE_1__.intlFormatDistance)(date, now, { unit: 'year' });
            return myDate;
        }
        else if (dateDiff > -366 && dateDiff <= -56) {
            let myDate = (0,_node_modules_date_fns_intlFormatDistance__WEBPACK_IMPORTED_MODULE_1__.intlFormatDistance)(date, now, { unit: 'month' });
            return myDate;
        }
        else if (dateDiff > -56 && dateDiff <= -15) {
            let myDate = (0,_node_modules_date_fns_intlFormatDistance__WEBPACK_IMPORTED_MODULE_1__.intlFormatDistance)(date, now, { unit: 'week' });
            return myDate;
        }
        else if (dateDiff > -15 && dateDiff <= 15) {
            let myDate = (0,_node_modules_date_fns_intlFormatDistance__WEBPACK_IMPORTED_MODULE_1__.intlFormatDistance)(date, now, { unit: 'day' });
            return myDate;
        }
        else {
            let myDate = (0,_node_modules_date_fns_format__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(this.rawDate), 'PP');
            return myDate;
        }
    }
}
//Finds myLists in LS or creates if not there  
function findLocStoreLists() {
    let locStore = Object.keys(localStorage);
    let listsIndex;
    if (Array.isArray(locStore)) {
        listsIndex = locStore.findIndex(e => e === 'myLists');
        if (listsIndex == -1) {
            let x = locStore.length;
            let listsArray = ["My List"];
            localStorage.setItem('myLists', JSON.stringify(listsArray));
            return x;
        }
        else {
            return listsIndex;
        }
    }
    else {
        return -1;
    }
}
;
function createNewList(e) {
    e.preventDefault();
    let listsArray = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createListsArray)();
    const dialog = document.getElementById('newListDialog');
    const form = e.target;
    const formData = new FormData(form);
    let thisList = document.getElementById('newList');
    let newList = formData.get('newList');
    if (Array.isArray(listsArray)) {
        listsArray.push(newList);
        localStorage.setItem('myLists', JSON.stringify(listsArray));
        form.reset();
        dialog === null || dialog === void 0 ? void 0 : dialog.close();
        return listsArray;
    }
}
function createTask(e) {
    e.preventDefault();
    const dialog = document.getElementById('newTaskDialog');
    const form = e.target;
    const formData = new FormData(form);
    const taskArrayLength = Object.entries(localStorage).length + 1;
    const newTask = Object.fromEntries(formData);
    let index = Date.now();
    const taskKey = index.toString();
    newTask.id = taskKey;
    localStorage.setItem(taskKey, JSON.stringify(newTask));
    form.reset();
    dialog === null || dialog === void 0 ? void 0 : dialog.close();
}
function findMyList(listsArray) {
    if (Array.isArray(listsArray)) {
        let listsIndex = listsArray.findIndex(e => e === 'My List');
        if (listsIndex == -1) {
            listsArray.push('My List');
            return listsArray;
        }
        else {
            return listsArray;
        }
    }
    else {
        return -1;
    }
}
;


/***/ }),

/***/ "./src/assets/fonts/roboto-bold-webfont.woff2":
/*!****************************************************!*\
  !*** ./src/assets/fonts/roboto-bold-webfont.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/roboto-bold-webfont.woff2";

/***/ }),

/***/ "./src/assets/fonts/roboto-italic-webfont.woff2":
/*!******************************************************!*\
  !*** ./src/assets/fonts/roboto-italic-webfont.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/roboto-italic-webfont.woff2";

/***/ }),

/***/ "./src/assets/fonts/roboto-medium-webfont.woff2":
/*!******************************************************!*\
  !*** ./src/assets/fonts/roboto-medium-webfont.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/roboto-medium-webfont.woff2";

/***/ }),

/***/ "./src/assets/fonts/roboto-regular-webfont.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/roboto-regular-webfont.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/roboto-regular-webfont.woff2";

/***/ }),

/***/ "./src/assets/images/delete.svg":
/*!**************************************!*\
  !*** ./src/assets/images/delete.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/delete.svg";

/***/ }),

/***/ "./src/assets/images/pencil.svg":
/*!**************************************!*\
  !*** ./src/assets/images/pencil.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pencil.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxPQUFPLHNGQUFzRixVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxtQkFBbUIsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3RkFBd0YsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1B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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxhQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSEFBb0g7QUFDcEgsZ0hBQWdIO0FB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Q0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBQ00sU0FBUyxVQUFVLENBQUMsVUFBaUI7SUFDeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUUsRUFBQyxLQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksVUFBVSxJQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakIsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDO2FBQ0ksQ0FBQztZQUNGLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7SUFDTCxDQUFDO1NBQU0sQ0FBQztRQUNKLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDO0FBQ0wsQ0FBQztBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMvZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdExvY2FsZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0Um91bmRpbmdNZXRob2QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5Ib3Vycy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWludXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5TZWNvbmRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vlay5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRRdWFydGVyLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaW50bEZvcm1hdERpc3RhbmNlLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrWWVhci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZlllYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9mb3JtLmNzcz83NGVhIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zY3JpcHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaWFsb2cge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKiBtaW4td2lkdGg6IDI0MHB4OyAqL1xufVxuZm9ybSB7XG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY29sb3I6cmdiKDgyLCA4MiwgODIpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuI25ld0xpc3REaWFsb2cge1xuICAgIHBhZGRpbmc6IDM1cHggMTJweCA0MHB4IDEwcHg7XG4gICAgJiBmb3JtIHtcbiAgICAgICAgLyogbWluLXdpZHRoOiAyNDBweDsgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOiAwO1xufVxubGkrbGkge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA5NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XG59XG5pbnB1dCwgc2VsZWN0IHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxLjlyZW07XG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW5wdXQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW5wdXRbdHlwZT1kYXRlXSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTpzb2xpZCAxcHggdmFyKC0taW5wdXQtY29sb3IpO1xufVxuLmJ1dHRvbnNSb3c+YnV0dG9uIHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAuM3JlbSAuOXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmJ1dHRvbnNSb3c+YnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG59XG4uYnV0dG9uc1JvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jbmV3Q29sb3JEaWFsb2cge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzoxMHB4IDEwcHggMTVweCAxMHB4O1xuICAgIHdpZHRoOjYwJTtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xufVxuI25ld0NvbG9yRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6MThweDtcbiAgICBwYWRkaW5nOjA7XG59XG4jY2xvc2VEaWFsb2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOnZhcigtLWJ1dHRvbi1jb2xvcik7XG4gICAgYm9yZGVyOjIuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6MXB4IDNweCAxcHggM3B4O1xuICAgIGFsaWduLXNlbGY6ZmxleC1lbmQ7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cbiNuZXdDb2xvckRpYWxvZyB1bCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMDtcbn1cbiNuZXdDb2xvckZvcm0gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxubGkuY2lyY2xlIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6MzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbn1cbmxpLmNpcmNsZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNpcmNsZS1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XG59XG4uY2lyY2xlLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xufVxuLmNpcmNsZS1vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xufVxuLmNpcmNsZS1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XG59XG4uY2lyY2xlLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufVxuXG5cbiNjb25maXJtRGVsZXRlRGlhbG9nIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgcGFkZGluZzozMHB4O1xufVxuLmRlbGV0Q29uZmlybU1zZyB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG4jY29uZmlybURlbGV0ZURpYWxvZyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNjb25maXJtRGVsZXRlRGlhbG9nIC5idXR0b25zUm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ5MHB4KSB7XG4gICAgLyogZGlhbG9nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDM1cHggMTBweCA0MHB4IDEycHg7XG4gICAgfVxuICAgICNuZXdMaXN0RGlhbG9nIHtcbiAgICAgICAgcGFkZGluZzogMzVweCAycHggNDBweCAycHg7XG4gICAgICAgICYgZm9ybSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgfVxuICAgIH0gKi9cbiAgICAubmV3TGlzdEZvcm0ge1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgcGFkZGluZzowO1xuICAgIH1cbiAgICBmb3JtIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGNvbG9yOnJnYig4MiwgODIsIDgyKTtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuICAgIGZpZWxkc2V0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUI7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNIO1FBQ0ksUUFBUTtRQUNSLFNBQVM7SUFDYjtJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsU0FBUztJQUNiO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2cge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogbWluLXdpZHRoOiAyNDBweDsgKi9cXG59XFxuZm9ybSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBjb2xvcjpyZ2IoODIsIDgyLCA4Mik7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4jbmV3TGlzdERpYWxvZyB7XFxuICAgIHBhZGRpbmc6IDM1cHggMTJweCA0MHB4IDEwcHg7XFxuICAgICYgZm9ybSB7XFxuICAgICAgICAvKiBtaW4td2lkdGg6IDI0MHB4OyAqL1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5maWVsZHNldCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxubGkrbGkge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDk1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XFxufVxcbmlucHV0LCBzZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IDEuOXJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW5wdXQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOnNvbGlkIDFweCB2YXIoLS1pbnB1dC1jb2xvcik7XFxufVxcbi5idXR0b25zUm93PmJ1dHRvbiB7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuOXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcbi5idXR0b25zUm93PmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuLmJ1dHRvbnNSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNuZXdDb2xvckRpYWxvZyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOjEwcHggMTBweCAxNXB4IDEwcHg7XFxuICAgIHdpZHRoOjYwJTtcXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG59XFxuI25ld0NvbG9yRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOjE4cHg7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuI2Nsb3NlRGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOnZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgIGJvcmRlcjoyLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6MXB4IDNweCAxcHggM3B4O1xcbiAgICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xcbiAgICBmb250LXN0eWxlOiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuI25ld0NvbG9yRGlhbG9nIHVsIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbiNuZXdDb2xvckZvcm0gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxubGkuY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbn1cXG5saS5jaXJjbGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaXJjbGUtYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcXG59XFxuLmNpcmNsZS1ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XFxufVxcbi5jaXJjbGUtb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpvcmFuZ2U7XFxufVxcbi5jaXJjbGUtZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JleTtcXG59XFxuLmNpcmNsZS1ibGFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XFxufVxcblxcblxcbiNjb25maXJtRGVsZXRlRGlhbG9nIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBwYWRkaW5nOjMwcHg7XFxufVxcbi5kZWxldENvbmZpcm1Nc2cge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG4jY29uZmlybURlbGV0ZURpYWxvZyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbiNjb25maXJtRGVsZXRlRGlhbG9nIC5idXR0b25zUm93IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0OTBweCkge1xcbiAgICAvKiBkaWFsb2cge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDM1cHggMTBweCA0MHB4IDEycHg7XFxuICAgIH1cXG4gICAgI25ld0xpc3REaWFsb2cge1xcbiAgICAgICAgcGFkZGluZzogMzVweCAycHggNDBweCAycHg7XFxuICAgICAgICAmIGZvcm0ge1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIH1cXG4gICAgfSAqL1xcbiAgICAubmV3TGlzdEZvcm0ge1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICBwYWRkaW5nOjA7XFxuICAgIH1cXG4gICAgZm9ybSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOnJnYig4MiwgODIsIDgyKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgcGFkZGluZzowO1xcbiAgICB9XFxuICAgIGlucHV0LCBzZWxlY3Qge1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcbiAgICBmaWVsZHNldCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvcm9ib3RvLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL3JvYm90by1ib2xkLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9yb2JvdG8tbWVkaXVtLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9yb2JvdG8taXRhbGljLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdCgnd29mZjInKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG46cm9vdCwgOnJvb3QuZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAtLWhlYWRpbmctY29sb3I6ICM1NjU2NTY7XG4gICAgLS1ib3JkZXItY29sb3I6ICM4YjhiOGI7XG4gICAgLS1idXR0b24tY29sb3I6ICM1NjU2NTY7XG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IzgwN2U3ZDtcbiAgICAtLWlucHV0LWNvbG9yOiAjOGI4YjhiO1xuICAgIC0tdGV4dDpyZ2IoNzYsIDc1LCA3NSk7XG4gICAgLS1maWx0ZXI6IGludmVydCgzMyUpIHNlcGlhKDElKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4NiUpO1xuICAgIC0taG92ZXItZmlsdGVyOiAgaW52ZXJ0KDAlKSBzZXBpYSg0JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMzA5ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoMTA3JSk7XG59XG46cm9vdCwgOnJvb3Qub3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTIsIDI1MiwgMjUyKTtcbiAgICAtLWhlYWRpbmctY29sb3I6IHJnYigyNTUsIDE1OSwgMjgpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxOTEsIDEwNSk7XG4gICAgLS1idXR0b24tY29sb3I6IHJnYigyMzYsIDE1OSwgNDIpO1xuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOnJnYigyNTUsIDE1OSwgMjgpO1xuICAgIC0taW5wdXQtY29sb3I6IHJnYigyNTUsIDE5MSwgMTA1KTtcbiAgICAtLXRleHQ6cmdiKDExNywgMTE3LCAxMTcpO1xuICAgIC0tZmlsdGVyOiBpbnZlcnQoNzclKSBzZXBpYSgzNSUpIHNhdHVyYXRlKDQ0NjAlKSBodWUtcm90YXRlKDM0NGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDElKTtcbiAgICAtLWhvdmVyLWZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMjQlKSBzYXR1cmF0ZSg1NzA4JSkgaHVlLXJvdGF0ZSgzMDhkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCgxMDMlKTtcbn1cbjpyb290LCA6cm9vdC5ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIC0taGVhZGluZy1jb2xvcjogIzE1Mjk4NTtcbiAgICAtLWJvcmRlci1jb2xvcjogIzA5MmY5NjtcbiAgICAtLWJ1dHRvbi1jb2xvcjogIzA5MmY5NjtcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogIzE5NGI4YjtcbiAgICAtLWlucHV0LWNvbG9yOiAjMDkyZjk2O1xuICAgIC0tdGV4dDojMUQyNzMxO1xuICAgIC0tZmlsdGVyOiBpbnZlcnQoMTclKSBzZXBpYSg3OSUpIHNhdHVyYXRlKDUzNiUpIGh1ZS1yb3RhdGUoMTYxZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDk5JSk7XG4gICAgLS1ob3Zlci1maWx0ZXI6IGludmVydCgzNyUpIHNlcGlhKDcwJSkgc2F0dXJhdGUoNDY5JSkgaHVlLXJvdGF0ZSgxNThkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MiUpO1xufVxuOnJvb3QsIDpyb290LmJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxYTI5MzAgO1xuICAgIC0taGVhZGluZy1jb2xvcjogI2M1YzFjMDtcbiAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLS1idXR0b24tY29sb3I6ICNiOGI4Yjg7XG4gICAgLS1idXR0b24taG92ZXItY29sb3I6ICM5NDkxOTA7XG4gICAgLS1pbnB1dC1jb2xvcjogIzFhMjkzMDtcbiAgICAtLXRleHQ6d2hpdGU7XG4gICAgLS1maWx0ZXI6IGludmVydCg2JSkgc2VwaWEoOSUpIHNhdHVyYXRlKDI1OTMlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDk1JSk7XG4gICAgLS1ob3Zlci1maWx0ZXI6IGludmVydCgwJSkgc2VwaWEoNCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDMwOWRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDEwNyUpO1xuICAgICYgLm5ld1Rhc2tCdXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xuICAgIH1cbiAgICAmIC5uZXdUYXNrQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbiAgICB9XG4gICAgLyogJiBpbnB1dCB7XG4gICAgb3V0bGluZTogc29saWQgMnB4IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIH0gKi9cbn1cbjpyb290LCA6cm9vdC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogIzAwOTkzMztcbiAgICAtLWhlYWRpbmctY29sb3I6IHJnYigxLCAxMTIsIDEpO1xuICAgIC0tYnV0dG9uLWNvbG9yOiAjMDA5OTMzO1xuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOnJnYigxLCAxMTIsIDEpOyBcbiAgICAtLWlucHV0LWNvbG9yOiAjMDA5OTMzO1xuICAgIC0tdGV4dDojMWEyOTMwO1xuICAgIC0tZmlsdGVyOiBpbnZlcnQoMjQlKSBzZXBpYSg1NCUpIHNhdHVyYXRlKDI2NjUlKSBodWUtcm90YXRlKDk1ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoOTklKTtcbiAgICAtLWhvdmVyLWZpbHRlcjogaW52ZXJ0KDI5JSkgc2VwaWEoOTglKSBzYXR1cmF0ZSgxMzU5JSkgaHVlLXJvdGF0ZSgxMjFkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCgxMDElKTtcbn1cbmh0bWwsIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCBjYWxjKDI4cHggKyAxLjV2dykgMTVweDtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgbWFyZ2luOjBweCBhdXRvO1xuIH1cbmhlYWRlcixmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcbiB9XG5mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbn1cbmgxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNvcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjp2YXIoLS10ZXh0KTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5zb3J0LXRleHQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zb3J0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6MTBweCAxNnB4O1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGxlZnQ6LTM2cHg7XG4gICAgdG9wOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xufVxuLnNvcnQtbWVudSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6dmFyKC0tdGV4dCk7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgb3V0bGluZTogc29saWQgM3B4IHZhcigtLWJ1dHRvbi1jb2xvcik7XG4gICAgb3BhY2l0eToxO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zb3J0LW1lbnUgdWw+bGkge1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbn1cbi5zb3J0LW1lbnUgdWw+bGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taGVhZGluZy1jb2xvcik7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnNvcnQtbWVudSB1bCBsaStsaSB7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmdiKDE3NSwgMTcyLCAxNzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG59XG4uY29udGVudCB7XG4gICAgYm9yZGVyOiA0LjlweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtaW4taGVpZ2h0OiA3NSU7XG4gICAgcGFkZGluZzo0cHggMTBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgbWluLXdpZHRoOiAyNjBweDtcbiB9XG4udGFzay1saXN0IHtcbiAgICBtaW4td2lkdGg6MjY1cHggO1xufVxuLnRhc2stbGlzdC1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi40cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMHB4IDFmcjtcbiAgICBwYWRkaW5nOjFweCA4cHggNXB4IDFweDtcbn1cbiBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XG4gfSBcbiBoMjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cbiAubGlzdE5hbWVUaXRsZSB7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiB9XG4ubGlzdC1kZWxldGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OjhweDtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmxpc3QtZGVsZXRlIGltZyB7XG4gICAgaGVpZ2h0OiAxLjdyZW07XG59XG4uaGlkZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG59XG4ubGlzdC10b2dnbGUge1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6MjBweDtcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpc3QtdG9nZ2xlOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWludXMge1xuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcbn1cbi50YXNrTGlzdFdyYXBwZXIge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyOyBcbiAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMC4zcztcbn1cbi5zaG93TGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmcjsgXG59XG4uaW5uZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFzay1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjVweCAxMTBweCAzNXB4IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDEuNHB4IHNvbGlkIHJnYigxNzUsIDE3MiwgMTcyKTtcbn1cbi50YXNrLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50YXNrLXByaW9yaXR5IHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uY2lyY2xlIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6MTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGFzay1uYW1lIHtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzQ7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG4udGFzay1kdWUge1xuICAgIGdyaWQtYXJlYTogMS80LzIvNTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi50YXNrLXRvZ2dsZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzUvMi82O1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhc2stdG9nZ2xlOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFza1dyYXBwZXIge1xuICAgIGdyaWQtYXJlYToyLzIvMy82O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAxMTBweCAzNXB4IDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAgMDsgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMC4zcztcbn1cbi5zaG93VGFzayB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdyZW0gMS43cmVtOyBcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuN3JlbSBhdXRvOyBcbn1cbi50YXNrLWxpc3QtbmFtZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YXNrLWVkaXQge1xuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbn1cbi50YXNrLWVkaXQgaW1nIHtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbn1cbi50YXNrLXN0YXR1cyB7XG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxufVxuLnRhc2stZGVsZXRlIHtcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IC01cHg7XG59XG4udGFzay1kZWxldGUgaW1nIHtcbiAgICBoZWlnaHQ6IDEuNnJlbTtcbn1cbi50YXNrLWluZm8ge1xuICAgIGdyaWQtYXJlYTogMi8xLzMvNTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbn1cblxuLnRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5ub1Rhc2tzTXNnIHtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbmRpYWxvZ3tcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG91dGxpbmU6bm9uZTtcbn1cbmltZyB7XG4gICAgZmlsdGVyOnZhcigtLWZpbHRlcik7XG59XG5pbWc6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IHZhcigtLWhvdmVyLWZpbHRlcik7XG59XG4ubmV3VGFza0J1dHRvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5uZXdUYXNrQnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhlYWRpbmctY29sb3IpO1xufVxuLmZvb3RlckJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOjdweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOndoaXRlO1xufVxuLmJ1dHRvbiB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUyMHB4KSB7XG4udGFzay1saXN0LW5hbWUge1xuICAgIGdyaWQtYXJlYTogMi8yLzMvNTtcbn1cbi50YXNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjVweCA5NXB4IDM1cHggMTVweDtcbn1cbi50YXNrLXByaW9yaXR5IHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG4udGFzay1uYW1lIHtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XG59XG4udGFzay1kdWUge1xuICAgIGdyaWQtYXJlYTogMS80LzIvNTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnRhc2stdG9nZ2xlIHtcbiAgICBncmlkLWFyZWE6IDEvNS8yLzY7XG59XG4udGFza1dyYXBwZXJ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwIDAgMDtcbn1cbi5zaG93VGFzayB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdyZW0gYXV0bzsgXG59XG4udGFzay1saXN0LW5hbWUge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvNTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLnRhc2stZWRpdCB7XG4gICAgZ3JpZC1hcmVhOiAxLzUvMi82O1xufVxuLnRhc2stc3RhdHVzIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzU7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4udGFzay1kZWxldGUge1xuICAgIGdyaWQtYXJlYTogMi81LzMvNjtcbn1cbi50YXNrLWluZm8ge1xuICAgIGdyaWQtYXJlYTogMy8xLzQvNTtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNERBQXdFO0FBQzVFO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDREQUFxRTtBQUN6RTtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw0REFBdUU7QUFDM0U7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNERBQXVFO0lBQ3ZFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDZGQUE2RjtJQUM3RixvR0FBb0c7QUFDeEc7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6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bEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9yb2JvdG8tcmVndWxhci13ZWJmb250LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL3JvYm90by1ib2xkLXdlYmZvbnQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvcm9ib3RvLW1lZGl1bS13ZWJmb250LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL3JvYm90by1pdGFsaWMtd2ViZm9udC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbjpyb290LCA6cm9vdC5ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgLS1oZWFkaW5nLWNvbG9yOiAjNTY1NjU2O1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzhiOGI4YjtcXG4gICAgLS1idXR0b24tY29sb3I6ICM1NjU2NTY7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiM4MDdlN2Q7XFxuICAgIC0taW5wdXQtY29sb3I6ICM4YjhiOGI7XFxuICAgIC0tdGV4dDpyZ2IoNzYsIDc1LCA3NSk7XFxuICAgIC0tZmlsdGVyOiBpbnZlcnQoMzMlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoODYlKTtcXG4gICAgLS1ob3Zlci1maWx0ZXI6ICBpbnZlcnQoMCUpIHNlcGlhKDQlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgzMDlkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCgxMDclKTtcXG59XFxuOnJvb3QsIDpyb290Lm9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MiwgMjUyLCAyNTIpO1xcbiAgICAtLWhlYWRpbmctY29sb3I6IHJnYigyNTUsIDE1OSwgMjgpO1xcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDI1NSwgMTkxLCAxMDUpO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDIzNiwgMTU5LCA0Mik7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOnJnYigyNTUsIDE1OSwgMjgpO1xcbiAgICAtLWlucHV0LWNvbG9yOiByZ2IoMjU1LCAxOTEsIDEwNSk7XFxuICAgIC0tdGV4dDpyZ2IoMTE3LCAxMTcsIDExNyk7XFxuICAgIC0tZmlsdGVyOiBpbnZlcnQoNzclKSBzZXBpYSgzNSUpIHNhdHVyYXRlKDQ0NjAlKSBodWUtcm90YXRlKDM0NGRlZykgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDElKTtcXG4gICAgLS1ob3Zlci1maWx0ZXI6IGludmVydCg5NSUpIHNlcGlhKDI0JSkgc2F0dXJhdGUoNTcwOCUpIGh1ZS1yb3RhdGUoMzA4ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoMTAzJSk7XFxufVxcbjpyb290LCA6cm9vdC5ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgLS1oZWFkaW5nLWNvbG9yOiAjMTUyOTg1O1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzA5MmY5NjtcXG4gICAgLS1idXR0b24tY29sb3I6ICMwOTJmOTY7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiAjMTk0YjhiO1xcbiAgICAtLWlucHV0LWNvbG9yOiAjMDkyZjk2O1xcbiAgICAtLXRleHQ6IzFEMjczMTtcXG4gICAgLS1maWx0ZXI6IGludmVydCgxNyUpIHNlcGlhKDc5JSkgc2F0dXJhdGUoNTM2JSkgaHVlLXJvdGF0ZSgxNjFkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTklKTtcXG4gICAgLS1ob3Zlci1maWx0ZXI6IGludmVydCgzNyUpIHNlcGlhKDcwJSkgc2F0dXJhdGUoNDY5JSkgaHVlLXJvdGF0ZSgxNThkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5MiUpO1xcbn1cXG46cm9vdCwgOnJvb3QuYmxhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxYTI5MzAgO1xcbiAgICAtLWhlYWRpbmctY29sb3I6ICNjNWMxYzA7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgLS1idXR0b24tY29sb3I6ICNiOGI4Yjg7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiAjOTQ5MTkwO1xcbiAgICAtLWlucHV0LWNvbG9yOiAjMWEyOTMwO1xcbiAgICAtLXRleHQ6d2hpdGU7XFxuICAgIC0tZmlsdGVyOiBpbnZlcnQoNiUpIHNlcGlhKDklKSBzYXR1cmF0ZSgyNTkzJSkgaHVlLXJvdGF0ZSgxMDlkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg5NSUpO1xcbiAgICAtLWhvdmVyLWZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSg0JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMzA5ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoMTA3JSk7XFxuICAgICYgLm5ld1Rhc2tCdXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgfVxcbiAgICAmIC5uZXdUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG4gICAgLyogJiBpbnB1dCB7XFxuICAgIG91dGxpbmU6IHNvbGlkIDJweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgfSAqL1xcbn1cXG46cm9vdCwgOnJvb3QuZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICAtLWJvcmRlci1jb2xvcjogIzAwOTkzMztcXG4gICAgLS1oZWFkaW5nLWNvbG9yOiByZ2IoMSwgMTEyLCAxKTtcXG4gICAgLS1idXR0b24tY29sb3I6ICMwMDk5MzM7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOnJnYigxLCAxMTIsIDEpOyBcXG4gICAgLS1pbnB1dC1jb2xvcjogIzAwOTkzMztcXG4gICAgLS10ZXh0OiMxYTI5MzA7XFxuICAgIC0tZmlsdGVyOiBpbnZlcnQoMjQlKSBzZXBpYSg1NCUpIHNhdHVyYXRlKDI2NjUlKSBodWUtcm90YXRlKDk1ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoOTklKTtcXG4gICAgLS1ob3Zlci1maWx0ZXI6IGludmVydCgyOSUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM1OSUpIGh1ZS1yb3RhdGUoMTIxZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoMTAxJSk7XFxufVxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTonUm9ib3RvJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggY2FsYygyOHB4ICsgMS41dncpIDE1cHg7XFxuICAgIG1pbi13aWR0aDogMjgwcHg7XFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxuICAgIG1hcmdpbjowcHggYXV0bztcXG4gfVxcbmhlYWRlcixmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjdyZW07XFxuIH1cXG5mb290ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcbmgxIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uc29ydCB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOnZhcigtLXRleHQpO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnNvcnQtdGV4dDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5zb3J0LXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOjEwcHggMTZweDtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGxlZnQ6LTM2cHg7XFxuICAgIHRvcDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMXM7XFxufVxcbi5zb3J0LW1lbnUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6dmFyKC0tdGV4dCk7XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBvdXRsaW5lOiBzb2xpZCAzcHggdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgb3BhY2l0eToxO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uc29ydC1tZW51IHVsPmxpIHtcXG4gICAgcGFkZGluZzogNHB4IDZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5zb3J0LW1lbnUgdWw+bGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnNvcnQtbWVudSB1bCBsaStsaSB7XFxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYigxNzUsIDE3MiwgMTcyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5jb250ZW50IHtcXG4gICAgYm9yZGVyOiA0LjlweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDc1JTtcXG4gICAgcGFkZGluZzo0cHggMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xcbiB9XFxuLnRhc2stbGlzdCB7XFxuICAgIG1pbi13aWR0aDoyNjVweCA7XFxufVxcbi50YXNrLWxpc3QtaGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi40cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweCAxZnI7XFxuICAgIHBhZGRpbmc6MXB4IDhweCA1cHggMXB4O1xcbn1cXG4gaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMThweDtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiB9IFxcbiBoMjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gfVxcbiAubGlzdE5hbWVUaXRsZSB7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiB9XFxuLmxpc3QtZGVsZXRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6OHB4O1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4ubGlzdC1kZWxldGUgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjdyZW07XFxufVxcbi5oaWRlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4ubGlzdC10b2dnbGUge1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubGlzdC10b2dnbGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWludXMge1xcbiAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG4udGFza0xpc3RXcmFwcGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjsgXFxuICAgIHRyYW5zaXRpb246IGdyaWQtdGVtcGxhdGUtcm93cyAwLjNzO1xcbn1cXG4uc2hvd0xpc3Qge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyOyBcXG59XFxuLmlubmVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43cmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIDI1cHggMTEwcHggMzVweCAxNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxLjRweCBzb2xpZCByZ2IoMTc1LCAxNzIsIDE3Mik7XFxufVxcbi50YXNrLWl0ZW06bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi50YXNrLXByaW9yaXR5IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDoxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udGFzay1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi80O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuLnRhc2stZHVlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4udGFzay10b2dnbGUge1xcbiAgICBncmlkLWFyZWE6IDEvNS8yLzY7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhc2stdG9nZ2xlOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2tXcmFwcGVyIHtcXG4gICAgZ3JpZC1hcmVhOjIvMi8zLzY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1cHggMTEwcHggMzVweCA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMCAwOyBcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDAuM3M7XFxufVxcbi5zaG93VGFzayB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43cmVtIDEuN3JlbTsgXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43cmVtIGF1dG87IFxcbn1cXG4udGFzay1saXN0LW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrLWVkaXQge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcbi50YXNrLWVkaXQgaW1nIHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbi50YXNrLXN0YXR1cyB7XFxuICAgIGdyaWQtYXJlYTogMS8zLzIvNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxufVxcbi50YXNrLWRlbGV0ZSB7XFxuICAgIGdyaWQtYXJlYTogMS80LzIvNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IC01cHg7XFxufVxcbi50YXNrLWRlbGV0ZSBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNnJlbTtcXG59XFxuLnRhc2staW5mbyB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvNTtcXG4gICAgcGFkZGluZy1yaWdodDogMS43cmVtO1xcbiAgICBmb250LXNpemU6IDAuOTVyZW07XFxuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCAxMCk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XFxufVxcblxcbi50b2dnbGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubm9UYXNrc01zZyB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmRpYWxvZ3tcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cXG5pbWcge1xcbiAgICBmaWx0ZXI6dmFyKC0tZmlsdGVyKTtcXG59XFxuaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IHZhcigtLWhvdmVyLWZpbHRlcik7XFxufVxcbi5uZXdUYXNrQnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDo1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcbi5uZXdUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG59XFxuLmZvb3RlckJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOjdweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuLmJ1dHRvbiB7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUyMHB4KSB7XFxuLnRhc2stbGlzdC1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy81O1xcbn1cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIDI1cHggOTVweCAzNXB4IDE1cHg7XFxufVxcbi50YXNrLXByaW9yaXR5IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4udGFzay1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi80O1xcbiAgICBsaW5lLWhlaWdodDogMS4zNXJlbTtcXG59XFxuLnRhc2stZHVlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi50YXNrLXRvZ2dsZSB7XFxuICAgIGdyaWQtYXJlYTogMS81LzIvNjtcXG59XFxuLnRhc2tXcmFwcGVye1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAgMCAwO1xcbn1cXG4uc2hvd1Rhc2sge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuN3JlbSBhdXRvOyBcXG59XFxuLnRhc2stbGlzdC1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi81O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbi50YXNrLWVkaXQge1xcbiAgICBncmlkLWFyZWE6IDEvNS8yLzY7XFxufVxcbi50YXNrLXN0YXR1cyB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvNTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDpzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyBcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbi50YXNrLWRlbGV0ZSB7XFxuICAgIGdyaWQtYXJlYTogMi81LzMvNjtcXG59XFxuLnRhc2staW5mbyB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvNTtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuYWRkTGVhZGluZ1plcm9zID0gYWRkTGVhZGluZ1plcm9zO1xuZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0TG9jYWxlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbmRleC5lblVTO1xuICB9LFxufSk7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uL2xvY2FsZS9lbi1VUy5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5nZXREZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zO1xuZXhwb3J0cy5zZXREZWZhdWx0T3B0aW9ucyA9IHNldERlZmF1bHRPcHRpb25zO1xuXG5sZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZm9ybWF0dGVycyA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi4vLi4vZ2V0RGF5T2ZZZWFyLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi4vLi4vZ2V0SVNPV2Vlay5qc1wiKTtcbnZhciBfaW5kZXgzID0gcmVxdWlyZShcIi4uLy4uL2dldElTT1dlZWtZZWFyLmpzXCIpO1xudmFyIF9pbmRleDQgPSByZXF1aXJlKFwiLi4vLi4vZ2V0V2Vlay5qc1wiKTtcbnZhciBfaW5kZXg1ID0gcmVxdWlyZShcIi4uLy4uL2dldFdlZWtZZWFyLmpzXCIpO1xuXG52YXIgX2luZGV4NiA9IHJlcXVpcmUoXCIuLi9hZGRMZWFkaW5nWmVyb3MuanNcIik7XG52YXIgX2luZGV4NyA9IHJlcXVpcmUoXCIuL2xpZ2h0Rm9ybWF0dGVycy5qc1wiKTtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmNvbnN0IGZvcm1hdHRlcnMgPSAoZXhwb3J0cy5mb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9pbmRleDcubGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gKDAsIF9pbmRleDUuZ2V0V2Vla1llYXIpKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykodHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSAoMCwgX2luZGV4My5nZXRJU09XZWVrWWVhcikoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKSh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBfaW5kZXg3LmxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9ICgwLCBfaW5kZXg0LmdldFdlZWspKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gKDAsIF9pbmRleDIuZ2V0SVNPV2VlaykoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2luZGV4Ny5saWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9ICgwLCBfaW5kZXguZ2V0RGF5T2ZZZWFyKShkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2luZGV4Ny5saWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9pbmRleDcubGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9pbmRleDcubGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9pbmRleDcubGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gX2luZGV4Ny5saWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykodGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKSh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59KTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiAoXG4gICAgc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKG1pbnV0ZXMsIDIpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9ICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5saWdodEZvcm1hdHRlcnMgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uL2FkZExlYWRpbmdaZXJvcy5qc1wiKTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0gKGV4cG9ydHMubGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuICgwLCBfaW5kZXguYWRkTGVhZGluZ1plcm9zKShcbiAgICAgIHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhcixcbiAgICAgIHRva2VuLmxlbmd0aCxcbiAgICApO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiXG4gICAgICA/IFN0cmluZyhtb250aCArIDEpXG4gICAgICA6ICgwLCBfaW5kZXguYWRkTGVhZGluZ1plcm9zKShtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiAoMCwgX2luZGV4LmFkZExlYWRpbmdaZXJvcykoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gKDAsIF9pbmRleC5hZGRMZWFkaW5nWmVyb3MpKFxuICAgICAgZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsXG4gICAgICB0b2tlbi5sZW5ndGgsXG4gICAgKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuICgwLCBfaW5kZXguYWRkTGVhZGluZ1plcm9zKShkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gKDAsIF9pbmRleC5hZGRMZWFkaW5nWmVyb3MpKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuICgwLCBfaW5kZXguYWRkTGVhZGluZ1plcm9zKShkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gKDAsIF9pbmRleC5hZGRMZWFkaW5nWmVyb3MpKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMubG9uZ0Zvcm1hdHRlcnMgPSB2b2lkIDA7XG5cbmNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSAoZXhwb3J0cy5sb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmdldFJvdW5kaW5nTWV0aG9kID0gZ2V0Um91bmRpbmdNZXRob2Q7XG5cbmZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gKG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJvdW5kID0gbWV0aG9kID8gTWF0aFttZXRob2RdIDogTWF0aC50cnVuYztcbiAgICBjb25zdCByZXN1bHQgPSByb3VuZChudW1iZXIpO1xuICAgIC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xuICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi90b0RhdGUuanNcIik7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gKDAsIF9pbmRleC50b0RhdGUpKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5pc1Byb3RlY3RlZERheU9mWWVhclRva2VuID0gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbjtcbmV4cG9ydHMuaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuID0gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuO1xuZXhwb3J0cy53YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yID0gd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcjtcbmNvbnN0IGRheU9mWWVhclRva2VuUkUgPSAvXkQrJC87XG5jb25zdCB3ZWVrWWVhclRva2VuUkUgPSAvXlkrJC87XG5cbmNvbnN0IHRocm93VG9rZW5zID0gW1wiRFwiLCBcIkREXCIsIFwiWVlcIiwgXCJZWVlZXCJdO1xuXG5mdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5mdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZnVuY3Rpb24gd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBfbWVzc2FnZSA9IG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpO1xuICBjb25zb2xlLndhcm4oX21lc3NhZ2UpO1xuICBpZiAodGhyb3dUb2tlbnMuaW5jbHVkZXModG9rZW4pKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihfbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3Qgc3ViamVjdCA9IHRva2VuWzBdID09PSBcIllcIiA/IFwieWVhcnNcIiA6IFwiZGF5cyBvZiB0aGUgbW9udGhcIjtcbiAgcmV0dXJuIGBVc2UgXFxgJHt0b2tlbi50b0xvd2VyQ2FzZSgpfVxcYCBpbnN0ZWFkIG9mIFxcYCR7dG9rZW59XFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nICR7c3ViamVjdH0gdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLnNlY29uZHNJblllYXIgPVxuICBleHBvcnRzLnNlY29uZHNJbldlZWsgPVxuICBleHBvcnRzLnNlY29uZHNJblF1YXJ0ZXIgPVxuICBleHBvcnRzLnNlY29uZHNJbk1vbnRoID1cbiAgZXhwb3J0cy5zZWNvbmRzSW5NaW51dGUgPVxuICBleHBvcnRzLnNlY29uZHNJbkhvdXIgPVxuICBleHBvcnRzLnNlY29uZHNJbkRheSA9XG4gIGV4cG9ydHMucXVhcnRlcnNJblllYXIgPVxuICBleHBvcnRzLm1vbnRoc0luWWVhciA9XG4gIGV4cG9ydHMubW9udGhzSW5RdWFydGVyID1cbiAgZXhwb3J0cy5taW51dGVzSW5ZZWFyID1cbiAgZXhwb3J0cy5taW51dGVzSW5Nb250aCA9XG4gIGV4cG9ydHMubWludXRlc0luSG91ciA9XG4gIGV4cG9ydHMubWludXRlc0luRGF5ID1cbiAgZXhwb3J0cy5taW5UaW1lID1cbiAgZXhwb3J0cy5taWxsaXNlY29uZHNJbldlZWsgPVxuICBleHBvcnRzLm1pbGxpc2Vjb25kc0luU2Vjb25kID1cbiAgZXhwb3J0cy5taWxsaXNlY29uZHNJbk1pbnV0ZSA9XG4gIGV4cG9ydHMubWlsbGlzZWNvbmRzSW5Ib3VyID1cbiAgZXhwb3J0cy5taWxsaXNlY29uZHNJbkRheSA9XG4gIGV4cG9ydHMubWF4VGltZSA9XG4gIGV4cG9ydHMuZGF5c0luWWVhciA9XG4gIGV4cG9ydHMuZGF5c0luV2VlayA9XG4gICAgdm9pZCAwOyAvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCJkYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmNvbnN0IGRheXNJbldlZWsgPSAoZXhwb3J0cy5kYXlzSW5XZWVrID0gNyk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5jb25zdCBkYXlzSW5ZZWFyID0gKGV4cG9ydHMuZGF5c0luWWVhciA9IDM2NS4yNDI1KTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcImRhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5jb25zdCBtYXhUaW1lID0gKGV4cG9ydHMubWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5jb25zdCBtaW5UaW1lID0gKGV4cG9ydHMubWluVGltZSA9IC1tYXhUaW1lKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gKGV4cG9ydHMubWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gKGV4cG9ydHMubWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gKGV4cG9ydHMubWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gKGV4cG9ydHMubWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gKGV4cG9ydHMubWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5jb25zdCBtaW51dGVzSW5ZZWFyID0gKGV4cG9ydHMubWludXRlc0luWWVhciA9IDUyNTYwMCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5jb25zdCBtaW51dGVzSW5Nb250aCA9IChleHBvcnRzLm1pbnV0ZXNJbk1vbnRoID0gNDMyMDApO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5jb25zdCBtaW51dGVzSW5EYXkgPSAoZXhwb3J0cy5taW51dGVzSW5EYXkgPSAxNDQwKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5jb25zdCBtaW51dGVzSW5Ib3VyID0gKGV4cG9ydHMubWludXRlc0luSG91ciA9IDYwKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuY29uc3QgbW9udGhzSW5RdWFydGVyID0gKGV4cG9ydHMubW9udGhzSW5RdWFydGVyID0gMyk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmNvbnN0IG1vbnRoc0luWWVhciA9IChleHBvcnRzLm1vbnRoc0luWWVhciA9IDEyKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuY29uc3QgcXVhcnRlcnNJblllYXIgPSAoZXhwb3J0cy5xdWFydGVyc0luWWVhciA9IDQpO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmNvbnN0IHNlY29uZHNJbkhvdXIgPSAoZXhwb3J0cy5zZWNvbmRzSW5Ib3VyID0gMzYwMCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IChleHBvcnRzLnNlY29uZHNJbk1pbnV0ZSA9IDYwKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuY29uc3Qgc2Vjb25kc0luRGF5ID0gKGV4cG9ydHMuc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0KTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5jb25zdCBzZWNvbmRzSW5XZWVrID0gKGV4cG9ydHMuc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDcpO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmNvbnN0IHNlY29uZHNJblllYXIgPSAoZXhwb3J0cy5zZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcik7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmNvbnN0IHNlY29uZHNJbk1vbnRoID0gKGV4cG9ydHMuc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTIpO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSAoZXhwb3J0cy5zZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5jb25zdHJ1Y3RGcm9tID0gY29uc3RydWN0RnJvbTtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5mdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9jb25zdGFudHMuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZEYXkuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gKDAsIF9pbmRleDIuc3RhcnRPZkRheSkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSAoMCwgX2luZGV4Mi5zdGFydE9mRGF5KShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtXG4gICAgKDAsIF9pbmRleDMuZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcykoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtXG4gICAgKDAsIF9pbmRleDMuZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcykoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICAodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIF9pbmRleC5taWxsaXNlY29uZHNJbkRheSxcbiAgKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9ICgwLCBfaW5kZXgudG9EYXRlKShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSAoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB5ZWFyRGlmZiA9IF9kYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gX2RhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aERpZmYgPSBfZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIF9kYXRlUmlnaHQuZ2V0TW9udGgoKTtcblxuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9nZXRRdWFydGVyLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVyc1xuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBxdWFydGVycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcblxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBxdWFydGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBxdWFydGVycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgyMDEzLCAxMSwgMzEpXG4gKiApXG4gKiAvLz0+IDNcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9ICgwLCBfaW5kZXgyLnRvRGF0ZSkoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gKDAsIF9pbmRleDIudG9EYXRlKShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHllYXJEaWZmID0gX2RhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBfZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHF1YXJ0ZXJEaWZmID1cbiAgICAoMCwgX2luZGV4LmdldFF1YXJ0ZXIpKF9kYXRlTGVmdCkgLSAoMCwgX2luZGV4LmdldFF1YXJ0ZXIpKF9kYXRlUmlnaHQpO1xuXG4gIHJldHVybiB5ZWFyRGlmZiAqIDQgKyBxdWFydGVyRGlmZjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9jb25zdGFudHMuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZXZWVrLmpzXCIpO1xuXG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5qc1wiKTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3N9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3NcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgYXJlIGJldHdlZW4gNSBKdWx5IDIwMTQgYW5kIDIwIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNSlcbiAqIClcbiAqIC8vPT4gM1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LFxuICogLy8gaG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgYXJlIGJldHdlZW4gNSBKdWx5IDIwMTQgYW5kIDIwIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNSksXG4gKiAgIHsgd2Vla1N0YXJ0c09uOiAxIH1cbiAqIClcbiAqIC8vPT4gMlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc3RhcnRPZldlZWtMZWZ0ID0gKDAsIF9pbmRleDIuc3RhcnRPZldlZWspKGRhdGVMZWZ0LCBvcHRpb25zKTtcbiAgY29uc3Qgc3RhcnRPZldlZWtSaWdodCA9ICgwLCBfaW5kZXgyLnN0YXJ0T2ZXZWVrKShkYXRlUmlnaHQsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mV2Vla0xlZnQgLVxuICAgICgwLCBfaW5kZXgzLmdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMpKHN0YXJ0T2ZXZWVrTGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZldlZWtSaWdodCAtXG4gICAgKDAsIF9pbmRleDMuZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcykoc3RhcnRPZldlZWtSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheXMgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKFxuICAgICh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gX2luZGV4Lm1pbGxpc2Vjb25kc0luV2VlayxcbiAgKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFyc1xuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcblxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB5ZWFycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAxMSBGZWJydWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgyMDEzLCAxMSwgMzEpXG4gKiApXG4gKiAvLz0+IDJcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9ICgwLCBfaW5kZXgudG9EYXRlKShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSAoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gX2RhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBfZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZGlmZmVyZW5jZUluSG91cnMgPSBkaWZmZXJlbmNlSW5Ib3VycztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9fbGliL2dldFJvdW5kaW5nTWV0aG9kLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9jb25zdGFudHMuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5qc1wiKTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJbkhvdXJzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluSG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBob3Vyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBob3VycyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAwNjo1MDowMCBhbmQgMiBKdWx5IDIwMTQgMTk6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID1cbiAgICAoMCwgX2luZGV4My5kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC9cbiAgICBfaW5kZXgyLm1pbGxpc2Vjb25kc0luSG91cjtcbiAgcmV0dXJuICgwLCBfaW5kZXguZ2V0Um91bmRpbmdNZXRob2QpKG9wdGlvbnM/LnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmV0dXJuICsoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZUxlZnQpIC0gKygwLCBfaW5kZXgudG9EYXRlKShkYXRlUmlnaHQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmRpZmZlcmVuY2VJbk1pbnV0ZXMgPSBkaWZmZXJlbmNlSW5NaW51dGVzO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL19saWIvZ2V0Um91bmRpbmdNZXRob2QuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy5qc1wiKTtcbnZhciBfaW5kZXgzID0gcmVxdWlyZShcIi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzLmpzXCIpO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZGlmZmVyZW5jZUluTWludXRlc30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbnV0ZXNcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWludXRlcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgc2lnbmVkIG51bWJlciBvZiBmdWxsIChyb3VuZGVkIHRvd2FyZHMgMCkgbWludXRlcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIG1pbnV0ZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWludXRlcyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAxMjowNzo1OSBhbmQgMiBKdWx5IDIwMTQgMTI6MjA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgNywgNTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbnV0ZXMgYXJlIGJldHdlZW4gMTA6MDE6NTkgYW5kIDEwOjAwOjAwXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDAwLCAwLCAxLCAxMCwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMDAsIDAsIDEsIDEwLCAxLCA1OSlcbiAqIClcbiAqIC8vPT4gLTFcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluTWludXRlcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRpZmYgPVxuICAgICgwLCBfaW5kZXgzLmRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcykoZGF0ZUxlZnQsIGRhdGVSaWdodCkgL1xuICAgIF9pbmRleDIubWlsbGlzZWNvbmRzSW5NaW51dGU7XG4gIHJldHVybiAoMCwgX2luZGV4LmdldFJvdW5kaW5nTWV0aG9kKShvcHRpb25zPy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZGlmZmVyZW5jZUluU2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHM7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vX2xpYi9nZXRSb3VuZGluZ01ldGhvZC5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzLmpzXCIpO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZGlmZmVyZW5jZUluU2Vjb25kc30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgKDAsIF9pbmRleDIuZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiAoMCwgX2luZGV4LmdldFJvdW5kaW5nTWV0aG9kKShvcHRpb25zPy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZm9ybWF0ID0gZXhwb3J0cy5mb3JtYXREYXRlID0gZm9ybWF0O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZm9ybWF0dGVyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW5kZXgzLmZvcm1hdHRlcnM7XG4gIH0sXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvbmdGb3JtYXR0ZXJzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pbmRleDQubG9uZ0Zvcm1hdHRlcnM7XG4gIH0sXG59KTtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9fbGliL2RlZmF1bHRMb2NhbGUuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMuanNcIik7XG52YXIgX2luZGV4NCA9IHJlcXVpcmUoXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLmpzXCIpO1xudmFyIF9pbmRleDUgPSByZXF1aXJlKFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5qc1wiKTtcblxudmFyIF9pbmRleDYgPSByZXF1aXJlKFwiLi9pc1ZhbGlkLmpzXCIpO1xudmFyIF9pbmRleDcgPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbi8vIFJleHBvcnRzIG9mIGludGVybmFsIGZvciBsaWJyYXJpZXMgdG8gdXNlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM2MzgjaXNzdWVjb21tZW50LTE4NzcwODI4NzRcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAYWxpYXMgZm9ybWF0RGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSAoMCwgX2luZGV4Mi5nZXREZWZhdWx0T3B0aW9ucykoKTtcbiAgY29uc3QgbG9jYWxlID1cbiAgICBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IF9pbmRleC5kZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSAoMCwgX2luZGV4Ny50b0RhdGUpKGRhdGUpO1xuXG4gIGlmICghKDAsIF9pbmRleDYuaXNWYWxpZCkob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gX2luZGV4NC5sb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApXG4gICAgLm1hcCgoc3Vic3RyaW5nKSA9PiB7XG4gICAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBcIidcIiB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKSB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoX2luZGV4My5mb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgICgwLCBfaW5kZXg1LmlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbikodG9rZW4pKSB8fFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiZcbiAgICAgICAgICAoMCwgX2luZGV4NS5pc1Byb3RlY3RlZERheU9mWWVhclRva2VuKSh0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgKDAsIF9pbmRleDUud2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcikodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gX2luZGV4My5mb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5nZXREYXlPZlllYXIgPSBnZXREYXlPZlllYXI7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9zdGFydE9mWWVhci5qc1wiKTtcbnZhciBfaW5kZXgzID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4My50b0RhdGUpKGRhdGUpO1xuICBjb25zdCBkaWZmID0gKDAsIF9pbmRleC5kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMpKFxuICAgIF9kYXRlLFxuICAgICgwLCBfaW5kZXgyLnN0YXJ0T2ZZZWFyKShfZGF0ZSksXG4gICk7XG4gIGNvbnN0IGRheU9mWWVhciA9IGRpZmYgKyAxO1xuICByZXR1cm4gZGF5T2ZZZWFyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmdldElTT1dlZWsgPSBnZXRJU09XZWVrO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vc3RhcnRPZklTT1dlZWsuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5qc1wiKTtcbnZhciBfaW5kZXg0ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXg0LnRvRGF0ZSkoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPVxuICAgICsoMCwgX2luZGV4Mi5zdGFydE9mSVNPV2VlaykoX2RhdGUpIC1cbiAgICArKDAsIF9pbmRleDMuc3RhcnRPZklTT1dlZWtZZWFyKShfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gX2luZGV4Lm1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmdldElTT1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXI7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vY29uc3RydWN0RnJvbS5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vc3RhcnRPZklTT1dlZWsuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5mdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gKDAsIF9pbmRleDMudG9EYXRlKShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9ICgwLCBfaW5kZXguY29uc3RydWN0RnJvbSkoZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSAoMCwgX2luZGV4Mi5zdGFydE9mSVNPV2VlaykoXG4gICAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcixcbiAgKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gKDAsIF9pbmRleC5jb25zdHJ1Y3RGcm9tKShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gKDAsIF9pbmRleDIuc3RhcnRPZklTT1dlZWspKFxuICAgIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIsXG4gICk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZ2V0UXVhcnRlciA9IGdldFF1YXJ0ZXI7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIGdldFF1YXJ0ZXJcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgeWVhciBxdWFydGVyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSB5ZWFyIHF1YXJ0ZXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBxdWFydGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHF1YXJ0ZXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRRdWFydGVyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAzXG4gKi9cbmZ1bmN0aW9uIGdldFF1YXJ0ZXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkYXRlKTtcbiAgY29uc3QgcXVhcnRlciA9IE1hdGgudHJ1bmMoX2RhdGUuZ2V0TW9udGgoKSAvIDMpICsgMTtcbiAgcmV0dXJuIHF1YXJ0ZXI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZ2V0V2VlayA9IGdldFdlZWs7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vY29uc3RhbnRzLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9zdGFydE9mV2Vlay5qc1wiKTtcbnZhciBfaW5kZXgzID0gcmVxdWlyZShcIi4vc3RhcnRPZldlZWtZZWFyLmpzXCIpO1xudmFyIF9pbmRleDQgPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrIGluZGV4IG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUgd2l0aCBkZWZhdWx0IG9wdGlvbnM/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5mdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4NC50b0RhdGUpKGRhdGUpO1xuICBjb25zdCBkaWZmID1cbiAgICArKDAsIF9pbmRleDIuc3RhcnRPZldlZWspKF9kYXRlLCBvcHRpb25zKSAtXG4gICAgKygwLCBfaW5kZXgzLnN0YXJ0T2ZXZWVrWWVhcikoX2RhdGUsIG9wdGlvbnMpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIF9pbmRleC5taWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5nZXRXZWVrWWVhciA9IGdldFdlZWtZZWFyO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdEZyb20uanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZXZWVrLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbnZhciBfaW5kZXg0ID0gcmVxdWlyZShcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5qc1wiKTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgzLnRvRGF0ZSkoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gKDAsIF9pbmRleDQuZ2V0RGVmYXVsdE9wdGlvbnMpKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9ICgwLCBfaW5kZXguY29uc3RydWN0RnJvbSkoZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9ICgwLCBfaW5kZXgyLnN0YXJ0T2ZXZWVrKShcbiAgICBmaXJzdFdlZWtPZk5leHRZZWFyLFxuICAgIG9wdGlvbnMsXG4gICk7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZUaGlzWWVhciA9ICgwLCBfaW5kZXguY29uc3RydWN0RnJvbSkoZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gKDAsIF9pbmRleDIuc3RhcnRPZldlZWspKFxuICAgIGZpcnN0V2Vla09mVGhpc1llYXIsXG4gICAgb3B0aW9ucyxcbiAgKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5pbnRsRm9ybWF0RGlzdGFuY2UgPSBpbnRsRm9ybWF0RGlzdGFuY2U7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vY29uc3RhbnRzLmpzXCIpO1xuXG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5qc1wiKTtcbnZhciBfaW5kZXgzID0gcmVxdWlyZShcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMuanNcIik7XG52YXIgX2luZGV4NCA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMuanNcIik7XG52YXIgX2luZGV4NSA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MuanNcIik7XG52YXIgX2luZGV4NiA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMuanNcIik7XG52YXIgX2luZGV4NyA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbkhvdXJzLmpzXCIpO1xudmFyIF9pbmRleDggPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5NaW51dGVzLmpzXCIpO1xudmFyIF9pbmRleDkgPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5TZWNvbmRzLmpzXCIpO1xudmFyIF9pbmRleDEwID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaW50bEZvcm1hdERpc3RhbmNlfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogVGhlIHVuaXQgdXNlZCB0byBmb3JtYXQgdGhlIGRpc3RhbmNlIGluIHtAbGluayBpbnRsRm9ybWF0RGlzdGFuY2V9LlxuICovXG5cbi8qKlxuICogQG5hbWUgaW50bEZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdHMgZGlzdGFuY2UgYmV0d2VlbiB0d28gZGF0ZXMgaW4gYSBodW1hbi1yZWFkYWJsZSBmb3JtYXRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gZGF0ZXMgYW5kIGZvcm1hdHMgaXQgYXMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHdpbGwgcGljayB0aGUgbW9zdCBhcHByb3ByaWF0ZSB1bml0IGRlcGVuZGluZyBvbiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBkYXRlcy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBkaXN0YW5jZSBpcyBhIGZldyBob3VycywgaXQgbWlnaHQgcmV0dXJuIGB4IGhvdXJzYC4gSWYgdGhlIGRpc3RhbmNlIGlzIGEgZmV3IG1vbnRocywgaXQgbWlnaHQgcmV0dXJuIGB4IG1vbnRoc2AuXG4gKlxuICogWW91IGNhbiBhbHNvIHNwZWNpZnkgYSB1bml0IHRvIGZvcmNlIHVzaW5nIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGRpc3RhbmNlIHRvIGdldCBhIHJlc3VsdCBsaWtlIGAxMjM0NTYgaG91cnNgLlxuICpcbiAqIFNlZSB0aGUgdGFibGUgYmVsb3cgZm9yIHRoZSB1bml0IHBpY2tpbmcgbG9naWM6XG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0IChwYXN0KSAgfCBSZXN1bHQgKGZ1dHVyZSkgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0gfFxuICogfCAwIHNlY29uZHMgICAgICAgICAgICAgIHwgbm93ICAgICAgICAgICAgfCBub3cgICAgICAgICAgICAgfFxuICogfCAxLTU5IHNlY29uZHMgICAgICAgICAgIHwgWCBzZWNvbmRzIGFnbyAgfCBpbiBYIHNlY29uZHMgICAgfFxuICogfCAxLTU5IG1pbnV0ZXMgICAgICAgICAgIHwgWCBtaW51dGVzIGFnbyAgfCBpbiBYIG1pbnV0ZXMgICAgfFxuICogfCAxLTIzIGhvdXJzICAgICAgICAgICAgIHwgWCBob3VycyBhZ28gICAgfCBpbiBYIGhvdXJzICAgICAgfFxuICogfCAxIGRheSAgICAgICAgICAgICAgICAgIHwgeWVzdGVyZGF5ICAgICAgfCB0b21vcnJvdyAgICAgICAgfFxuICogfCAyLTYgZGF5cyAgICAgICAgICAgICAgIHwgWCBkYXlzIGFnbyAgICAgfCBpbiBYIGRheXMgICAgICAgfFxuICogfCA3IGRheXMgICAgICAgICAgICAgICAgIHwgbGFzdCB3ZWVrICAgICAgfCBuZXh0IHdlZWsgICAgICAgfFxuICogfCA4IGRheXMtMSBtb250aCAgICAgICAgIHwgWCB3ZWVrcyBhZ28gICAgfCBpbiBYIHdlZWtzICAgICAgfFxuICogfCAxIG1vbnRoICAgICAgICAgICAgICAgIHwgbGFzdCBtb250aCAgICAgfCBuZXh0IG1vbnRoICAgICAgfFxuICogfCAyLTMgbW9udGhzICAgICAgICAgICAgIHwgWCBtb250aHMgYWdvICAgfCBpbiBYIG1vbnRocyAgICAgfFxuICogfCAxIHF1YXJ0ZXIgICAgICAgICAgICAgIHwgbGFzdCBxdWFydGVyICAgfCBuZXh0IHF1YXJ0ZXIgICAgfFxuICogfCAyLTMgcXVhcnRlcnMgICAgICAgICAgIHwgWCBxdWFydGVycyBhZ28gfCBpbiBYIHF1YXJ0ZXJzICAgfFxuICogfCAxIHllYXIgICAgICAgICAgICAgICAgIHwgbGFzdCB5ZWFyICAgICAgfCBuZXh0IHllYXIgICAgICAgfFxuICogfCAyKyB5ZWFycyAgICAgICAgICAgICAgIHwgWCB5ZWFycyBhZ28gICAgfCBpbiBYIHllYXJzICAgICAgfFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGVcbiAqIEBwYXJhbSBiYXNlRGF0ZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aC5cbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIFNlZSBNRE4gZm9yIGRldGFpbHMgW0xvY2FsZSBpZGVudGlmaWNhdGlvbiBhbmQgbmVnb3RpYXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwjbG9jYWxlX2lkZW50aWZpY2F0aW9uX2FuZF9uZWdvdGlhdGlvbilcbiAqIFRoZSBuYXJyb3cgb25lIGNvdWxkIGJlIHNpbWlsYXIgdG8gdGhlIHNob3J0IG9uZSBmb3Igc29tZSBsb2NhbGVzLlxuICpcbiAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSBpbiB3b3JkcyBhY2NvcmRpbmcgdG8gbGFuZ3VhZ2Utc2Vuc2l0aXZlIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZy5cbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMudW5pdGAgbXVzdCBub3QgYmUgaW52YWxpZCBVbml0XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBub3QgYmUgaW52YWxpZCBsb2NhbGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlTWF0Y2hlcmAgbXVzdCBub3QgYmUgaW52YWxpZCBsb2NhbGVNYXRjaGVyXG4gKiBAdGhyb3dzIGBvcHRpb25zLm51bWVyaWNgIG11c3Qgbm90IGJlIGludmFsaWQgbnVtZXJpY1xuICogQHRocm93cyBgb3B0aW9ucy5zdHlsZWAgbXVzdCBub3QgYmUgaW52YWxpZCBzdHlsZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBkYXRlcyB3aGVuIHRoZSBmaXN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZD9cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKVxuICogKVxuICogLy89PiAnaW4gMSBob3VyJ1xuICpcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGRhdGVzIHdoZW4gdGhlIGZpc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZD9cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKVxuICogKVxuICogLy89PiAnMSBob3VyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSB1bml0IG9wdGlvbiB0byBmb3JjZSB0aGUgZnVuY3Rpb24gdG8gb3V0cHV0IHRoZSByZXN1bHQgaW4gcXVhcnRlcnMuIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwibmV4dCB5ZWFyXCJcbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NywgNiwgNCwgMTAsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKSxcbiAqICAgeyB1bml0OiAncXVhcnRlcicgfVxuICogKVxuICogLy89PiAnaW4gNSBxdWFydGVycydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSBsb2NhbGUgb3B0aW9uIHRvIGdldCB0aGUgcmVzdWx0IGluIFNwYW5pc2guIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwiaW4gMSBob3VyXCIuXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMCksXG4gKiAgIHsgbG9jYWxlOiAnZXMnIH1cbiAqIClcbiAqIC8vPT4gJ2RlbnRybyBkZSAxIGhvcmEnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgbnVtZXJpYyBvcHRpb24gdG8gZm9yY2UgdGhlIGZ1bmN0aW9uIHRvIHVzZSBudW1lcmljIHZhbHVlcy4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJ0b21vcnJvd1wiLlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA1LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICB7IG51bWVyaWM6ICdhbHdheXMnIH1cbiAqIClcbiAqIC8vPT4gJ2luIDEgZGF5J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIHN0eWxlIG9wdGlvbiB0byBmb3JjZSB0aGUgZnVuY3Rpb24gdG8gdXNlIHNob3J0IHZhbHVlcy4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJpbiAyIHllYXJzXCIuXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODgsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIHsgc3R5bGU6ICdzaG9ydCcgfVxuICogKVxuICogLy89PiAnaW4gMiB5cidcbiAqL1xuZnVuY3Rpb24gaW50bEZvcm1hdERpc3RhbmNlKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIGxldCB2YWx1ZSA9IDA7XG4gIGxldCB1bml0O1xuICBjb25zdCBkYXRlTGVmdCA9ICgwLCBfaW5kZXgxMC50b0RhdGUpKGRhdGUpO1xuICBjb25zdCBkYXRlUmlnaHQgPSAoMCwgX2luZGV4MTAudG9EYXRlKShiYXNlRGF0ZSk7XG5cbiAgaWYgKCFvcHRpb25zPy51bml0KSB7XG4gICAgLy8gR2V0IHRoZSB1bml0IGJhc2VkIG9uIGRpZmZJblNlY29uZHMgY2FsY3VsYXRpb25zIGlmIG5vIHVuaXQgaXMgc3BlY2lmaWVkXG4gICAgY29uc3QgZGlmZkluU2Vjb25kcyA9ICgwLCBfaW5kZXg5LmRpZmZlcmVuY2VJblNlY29uZHMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpOyAvLyBUaGUgc21hbGxlc3QgdW5pdFxuXG4gICAgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgX2luZGV4LnNlY29uZHNJbk1pbnV0ZSkge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4OS5kaWZmZXJlbmNlSW5TZWNvbmRzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSBcInNlY29uZFwiO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBfaW5kZXguc2Vjb25kc0luSG91cikge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4OC5kaWZmZXJlbmNlSW5NaW51dGVzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSBcIm1pbnV0ZVwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IF9pbmRleC5zZWNvbmRzSW5EYXkgJiZcbiAgICAgIE1hdGguYWJzKCgwLCBfaW5kZXgyLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cykoZGF0ZUxlZnQsIGRhdGVSaWdodCkpIDwgMVxuICAgICkge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4Ny5kaWZmZXJlbmNlSW5Ib3VycykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gXCJob3VyXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgX2luZGV4LnNlY29uZHNJbldlZWsgJiZcbiAgICAgICh2YWx1ZSA9ICgwLCBfaW5kZXgyLmRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cykoZGF0ZUxlZnQsIGRhdGVSaWdodCkpICYmXG4gICAgICBNYXRoLmFicyh2YWx1ZSkgPCA3XG4gICAgKSB7XG4gICAgICB1bml0ID0gXCJkYXlcIjtcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgX2luZGV4LnNlY29uZHNJbk1vbnRoKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXg1LmRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9IFwid2Vla1wiO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBfaW5kZXguc2Vjb25kc0luUXVhcnRlcikge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4My5kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gXCJtb250aFwiO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBfaW5kZXguc2Vjb25kc0luWWVhcikge1xuICAgICAgaWYgKCgwLCBfaW5kZXg0LmRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIDwgNCkge1xuICAgICAgICAvLyBUbyBmaWx0ZXIgb3V0IGNhc2VzIHRoYXQgYXJlIGxlc3MgdGhhbiBhIHllYXIgYnV0IG1hdGNoIDQgcXVhcnRlcnNcbiAgICAgICAgdmFsdWUgPSAoMCwgX2luZGV4NC5kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9IFwicXVhcnRlclwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSAoMCwgX2luZGV4Ni5kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9IFwieWVhclwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXg2LmRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9IFwieWVhclwiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBHZXQgdGhlIHZhbHVlIGlmIHVuaXQgaXMgc3BlY2lmaWVkXG4gICAgdW5pdCA9IG9wdGlvbnM/LnVuaXQ7XG4gICAgaWYgKHVuaXQgPT09IFwic2Vjb25kXCIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDkuZGlmZmVyZW5jZUluU2Vjb25kcykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSBcIm1pbnV0ZVwiKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXg4LmRpZmZlcmVuY2VJbk1pbnV0ZXMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJob3VyXCIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDcuZGlmZmVyZW5jZUluSG91cnMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJkYXlcIikge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4Mi5kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDUuZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSBcIm1vbnRoXCIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDMuZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJxdWFydGVyXCIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDQuZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSBcInllYXJcIikge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4Ni5kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBydGYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQob3B0aW9ucz8ubG9jYWxlLCB7XG4gICAgbG9jYWxlTWF0Y2hlcjogb3B0aW9ucz8ubG9jYWxlTWF0Y2hlcixcbiAgICBudW1lcmljOiBvcHRpb25zPy5udW1lcmljIHx8IFwiYXV0b1wiLFxuICAgIHN0eWxlOiBvcHRpb25zPy5zdHlsZSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJ0Zi5mb3JtYXQodmFsdWUsIHVuaXQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTsgLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmlzVmFsaWQgPSBpc1ZhbGlkO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2lzRGF0ZS5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICBpZiAoISgwLCBfaW5kZXguaXNEYXRlKShkYXRlKSAmJiB0eXBlb2YgZGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgyLnRvRGF0ZSkoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuYnVpbGRGb3JtYXRMb25nRm4gPSBidWlsZEZvcm1hdExvbmdGbjtcblxuZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmJ1aWxkTG9jYWxpemVGbiA9IGJ1aWxkTG9jYWxpemVGbjsgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmJ1aWxkTWF0Y2hGbiA9IGJ1aWxkTWF0Y2hGbjtcblxuZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIGZpbmRLZXkocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSk7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5idWlsZE1hdGNoUGF0dGVybkZuID0gYnVpbGRNYXRjaFBhdHRlcm5GbjtcblxuZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmVuVVMgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLmpzXCIpO1xudmFyIF9pbmRleDQgPSByZXF1aXJlKFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLmpzXCIpO1xudmFyIF9pbmRleDUgPSByZXF1aXJlKFwiLi9lbi1VUy9fbGliL21hdGNoLmpzXCIpO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5jb25zdCBlblVTID0gKGV4cG9ydHMuZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogX2luZGV4LmZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBfaW5kZXgyLmZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBfaW5kZXgzLmZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogX2luZGV4NC5sb2NhbGl6ZSxcbiAgbWF0Y2g6IF9pbmRleDUubWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmZvcm1hdERpc3RhbmNlID0gdm9pZCAwO1xuXG5jb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydHMuZm9ybWF0RGlzdGFuY2UgPSBmb3JtYXREaXN0YW5jZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5mb3JtYXRMb25nID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLmpzXCIpO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5jb25zdCBmb3JtYXRMb25nID0gKGV4cG9ydHMuZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogKDAsIF9pbmRleC5idWlsZEZvcm1hdExvbmdGbikoe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6ICgwLCBfaW5kZXguYnVpbGRGb3JtYXRMb25nRm4pKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogKDAsIF9pbmRleC5idWlsZEZvcm1hdExvbmdGbikoe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmZvcm1hdFJlbGF0aXZlID0gdm9pZCAwO1xuXG5jb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuY29uc3QgZm9ybWF0UmVsYXRpdmUgPSAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSA9PlxuICBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG5leHBvcnRzLmZvcm1hdFJlbGF0aXZlID0gZm9ybWF0UmVsYXRpdmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMubG9jYWxpemUgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLmpzXCIpO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5jb25zdCBsb2NhbGl6ZSA9IChleHBvcnRzLmxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogKDAsIF9pbmRleC5idWlsZExvY2FsaXplRm4pKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiAoMCwgX2luZGV4LmJ1aWxkTG9jYWxpemVGbikoe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6ICgwLCBfaW5kZXguYnVpbGRMb2NhbGl6ZUZuKSh7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6ICgwLCBfaW5kZXguYnVpbGRMb2NhbGl6ZUZuKSh7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmJ1aWxkTG9jYWxpemVGbikoe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5tYXRjaCA9IHZvaWQgMDtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5qc1wiKTtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuY29uc3QgbWF0Y2ggPSAoZXhwb3J0cy5tYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogKDAsIF9pbmRleDIuYnVpbGRNYXRjaFBhdHRlcm5Gbikoe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogKHZhbHVlKSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxuICB9KSxcblxuICBlcmE6ICgwLCBfaW5kZXguYnVpbGRNYXRjaEZuKSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogKDAsIF9pbmRleC5idWlsZE1hdGNoRm4pKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gICAgdmFsdWVDYWxsYmFjazogKGluZGV4KSA9PiBpbmRleCArIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiAoMCwgX2luZGV4LmJ1aWxkTWF0Y2hGbikoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXk6ICgwLCBfaW5kZXguYnVpbGRNYXRjaEZuKSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJ3aWRlXCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiAoMCwgX2luZGV4LmJ1aWxkTWF0Y2hGbikoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwiYW55XCIsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5zdGFydE9mRGF5ID0gc3RhcnRPZkRheTtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5zdGFydE9mSVNPV2VlayA9IHN0YXJ0T2ZJU09XZWVrO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZXZWVrLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuICgwLCBfaW5kZXguc3RhcnRPZldlZWspKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLnN0YXJ0T2ZJU09XZWVrWWVhciA9IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9nZXRJU09XZWVrWWVhci5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vc3RhcnRPZklTT1dlZWsuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdEZyb20uanNcIik7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gKDAsIF9pbmRleC5nZXRJU09XZWVrWWVhcikoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9ICgwLCBfaW5kZXgzLmNvbnN0cnVjdEZyb20pKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuICgwLCBfaW5kZXgyLnN0YXJ0T2ZJU09XZWVrKShmb3VydGhPZkphbnVhcnkpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLnN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWs7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIik7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9ICgwLCBfaW5kZXgyLmdldERlZmF1bHRPcHRpb25zKSgpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gKDAsIF9pbmRleC50b0RhdGUpKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5zdGFydE9mV2Vla1llYXIgPSBzdGFydE9mV2Vla1llYXI7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vY29uc3RydWN0RnJvbS5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vZ2V0V2Vla1llYXIuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZXZWVrLmpzXCIpO1xuXG52YXIgX2luZGV4NCA9IHJlcXVpcmUoXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIik7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSAoMCwgX2luZGV4NC5nZXREZWZhdWx0T3B0aW9ucykoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB5ZWFyID0gKDAsIF9pbmRleDIuZ2V0V2Vla1llYXIpKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSAoMCwgX2luZGV4LmNvbnN0cnVjdEZyb20pKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgzLnN0YXJ0T2ZXZWVrKShmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuc3RhcnRPZlllYXIgPSBzdGFydE9mWWVhcjtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdEZyb20uanNcIik7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSkge1xuICBjb25zdCBjbGVhbkRhdGUgPSAoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlID0gKDAsIF9pbmRleDIuY29uc3RydWN0RnJvbSkoZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy50b0RhdGUgPSB0b0RhdGU7XG5cbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3JjL3N0eWxlcy9mb3JtLmNzc1wiO1xuaW1wb3J0IGRlbEltZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgcGVuY2lsSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9wZW5jaWwuc3ZnJztcblxuaW1wb3J0IHsgZmluZExvY1N0b3JlTGlzdHMsIGNyZWF0ZU5ld0xpc3QsIGNyZWF0ZVRhc2ssIHRhc2tJbnQsIHRhc2ssIGZpbmRNeUxpc3QgfSBmcm9tIFwiLi9zY3JpcHRzXCI7XG5cbi8vSUlGRSB0byBzdG9yZSBhbGwgRE9NIHZhcmlhYmxlcyBhbmQgZXZlbnQgbGlzdGVuZXJzXG4oZnVuY3Rpb24oKSB7XG4gICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0J1dHRvbicpOyBcbiAgICAgICAgbmV3VGFza0J1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c2hvd05ld1Rhc2tGb3JtKCkpOyAgIFxuXG4gICAgY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdMaXN0QnV0dG9uJyk7ICAgICAgICBcbiAgICAgICAgbmV3TGlzdEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c2hvd05ld0xpc3RGb3JtKCkpO1xuXG4gICAgY29uc3QgbmV3Q29sb3JCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3Q29sb3JCdXR0b24nKTsgICAgICAgIFxuICAgICAgICBuZXdDb2xvckJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c2hvd0NvbG9yUGlja2VyKCkpOyAgICBcblxuICAgIGNvbnN0IHNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydCcpO1xuICAgICAgICBzb3J0Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT5zaG93U29ydE1lbnUoKSk7ICAgXG4gICAgY29uc3Qgc2hvd0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10b2dnbGUnKTtcbiAgICBjb25zdCBzb3J0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC1tZW51Jyk7XG4gICAgICAgIHNvcnRJdGVtcz8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoZTpFdmVudCk9PnNvcnRCb3JkZXJPZmYoZSkpO1xuICAgICAgICBzb3J0SXRlbXM/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywoZTpFdmVudCk9PnNvcnRCb3JkZXJPbihlKSk7XG4gICAgY29uc3Qgc29ydFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC10YXNrJyk7XG4gICAgICAgIHNvcnRUYXNrPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT5zb3J0QnlUYXNrKGUpKTtcbiAgICBjb25zdCBzb3J0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0LWRhdGUnKTtcbiAgICAgICAgc29ydERhdGU/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNvcnRCeURhdGUoZSkpO1xuICAgIGNvbnN0IHNvcnRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0LXByaW9yaXR5Jyk7XG4gICAgICAgIHNvcnRQcmlvcml0eT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c29ydEJ5UHJpb3JpdHkoZSkpO1xuICAgIGNvbnN0IHNvcnRTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC1zdGF0dXMnKTtcbiAgICAgICAgc29ydFN0YXR1cz8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c29ydEJ5U3RhdHVzKGUpKTsgICBcbiAgICAvL1NvcnQgTWVudSBzdHlsaW5nXG4gICAgZnVuY3Rpb24gc29ydEJvcmRlck9mZihlOkV2ZW50KSB7XG4gICAgICAgIGxldCBzb3J0VGFnID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGlmIChzb3J0VGFnLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICBuZXh0U2libGluZy5zdHlsZS5ib3JkZXJUb3AgPScwJztcbiAgICAgICAgICAgIHNvcnRUYWcuc3R5bGUuYm9yZGVyVG9wID0nMCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc29ydEJvcmRlck9uKGU6RXZlbnQpIHtcbiAgICAgICAgbGV0IHNvcnRUYWcgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgaWYgKHNvcnRUYWcubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc29ydFRhZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICBsZXQgbmV4dFNpYmxpbmcgPSBzb3J0VGFnLm5leHRFbGVtZW50U2libGluZyBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmJvcmRlclRvcCA9JzFweCBzb2xpZCByZ2IoMTc1LDE3MiwxNzInO1xuICAgICAgICAgICAgc29ydFRhZy5zdHlsZS5ib3JkZXJUb3AgPScxcHggc29saWQgcmdiKDE3NSwxNzIsMTcyJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcuc3R5bGUuYm9yZGVyVG9wID0nMXB4IHNvbGlkIHJnYigxNzUsMTcyLDE3Mic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KCkpO1xuXG5mdW5jdGlvbiB1cGRhdGVET00obGlzdHNBcnJheT86c3RyaW5nW10sc29ydEZpZWxkPzpzdHJpbmcpIHtcbiAgICBjbGVhckRPTSgpO1xuICAgIGlmICghbGlzdHNBcnJheSkge1xuICAgICAgICBsaXN0c0FycmF5ID0gY3JlYXRlTGlzdHNBcnJheSgpO1xuICAgIH1cbiAgICByZW5kZXJMaXN0KGxpc3RzQXJyYXkpO1xuICAgIGxldCB0YXNrQXJyYXk9IGNyZWF0ZVRhc2tzQXJyYXkoKTtcbiAgICBsZXQgc29ydGVkVGFza3MgPSBzb3J0VGFza0FycmF5KHRhc2tBcnJheSk7XG4gICAgaWYgKCFzb3J0RmllbGQpIHtcbiAgICAgICAgc29ydEZpZWxkID0gXCJsaXN0XCI7XG4gICAgfVxuICAgIHJlbmRlclRhc2soc29ydEZpZWxkLCBzb3J0ZWRUYXNrcyk7XG4gICAgYWRkTGlzdFRvZ2dsZSgpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIHdoaWxlKGNvbnRlbnQ/LmZpcnN0Q2hpbGQpe1xuICAgICAgICBjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgfSAgXG59O1xuXG5mdW5jdGlvbiBzaG93TmV3TGlzdEZvcm0oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZGlhbG9nLmlkPSduZXdMaXN0RGlhbG9nJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCdkaWFsb2cnKTtcbiAgICAgICAgZm9ybS5pZD0nbmV3TGlzdEZvcm0nO1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICBjcmVhdGVOZXdMaXN0KGUpO1xuICAgICAgICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICAgIH0pXG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICBmaWVsZHNldC5jbGFzc05hbWU9J25ld0xpc3RGb3JtJztcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduZXdMaXN0Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0xpc3QnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnbmV3TGlzdCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywndHJ1ZScpO1xuICAgICAgICBpbnB1dC5pZD0nbmV3TGlzdCc7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgIFxuICAgIFxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYnV0dG9uc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zUm93LmNsYXNzTmFtZT0nYnV0dG9uc1Jvdyc7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NhbmNlbCcpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywncmVzZXQnKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWRkIGxpc3QnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTsgICAgXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYnV0dG9uc1Jvdyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICAgICBcbiAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICAgIGRpYWxvZy5hcHBlbmQoZm9ybSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpO1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cbmZ1bmN0aW9uIHNob3dOZXdUYXNrRm9ybSgpIHtcbiAgICBsZXQgbGlzdHNBcnJheSA9IGNyZWF0ZUxpc3RzQXJyYXkoKTtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBkaWFsb2cuaWQ9J25ld1Rhc2tEaWFsb2cnO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsJ2RpYWxvZycpO1xuICAgICAgICBmb3JtLmNsYXNzTmFtZT0nbmV3SXRlbUZvcm0nO1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICBjcmVhdGVUYXNrKGUpO1xuICAgICAgICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICAgIH0pXG4gICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tOYW1lJyk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Rhc2snKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywndGFza05hbWUnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3RydWUnKTtcbiAgICAgICAgaW5wdXQuaWQ9J3Rhc2tOYW1lJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICAgICBcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGFza0RhdGUnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdEYXRlJyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywndGFza0RhdGUnKTtcbiAgICAgICAgaW5wdXQudmFsdWVBc0RhdGU9bmV3IERhdGUoKTtcbiAgICAgICAgaW5wdXQuaWQ9J3Rhc2tEYXRlJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcbiAgICBcbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tQcmlvcml0eScpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1ByaW9yaXR5Jyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tQcmlvcml0eScpO1xuICAgICAgICBzZWxlY3QuaWQ9J3Rhc2tQcmlvcml0eSc7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ05vcm1hbCcpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05vcm1hbCcpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0hpZ2gnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIaWdoJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnTG93Jyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTG93Jyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrU3RhdHVzJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU3RhdHVzJyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywndGFza1N0YXR1cycpO1xuICAgICAgICBzZWxlY3QuaWQ9J3Rhc2tTdGF0dXMnO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ05vdCBTdGFydGVkJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTm90IFN0YXJ0ZWQnKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdJbiBQcm9ncmVzcycpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0luIFByb2dyZXNzJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnQ29tcGxldGVkJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29tcGxldGVkJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrRGV0YWlscycpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0RldGFpbHMnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrRGV0YWlscycpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRW50ZXIgdGFzayBkZXRhaWxzJyk7IFxuICAgICAgICBpbnB1dC5pZD0ndGFza0RldGFpbHMnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrTGlzdCcpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0xpc3QnKTtcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrTGlzdCcpO1xuICAgICAgICBzZWxlY3QuaWQ9J3Rhc2tMaXN0JztcbiAgICBcbiAgICBsZXQgbGlzdExlbmd0aCA9IGxpc3RzQXJyYXkubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8bGlzdExlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ215LWxpc3QnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxpc3RzQXJyYXlbaV0pO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyBcbiAgICBcbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGJ1dHRvbnNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uc1Jvdy5jbGFzc05hbWU9J2J1dHRvbnNSb3cnO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDYW5jZWwnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3Jlc2V0Jyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgYnV0dG9uc1Jvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FkZCB0YXNrJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoYnV0dG9uc1Jvdyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG4gICAgZGlhbG9nLmFwcGVuZChmb3JtKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgIGNvbnRlbnQ/LmFwcGVuZChmcmFnbWVudCk7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3RzQXJyYXkoKSB7XG4gICAgbGV0IGluZDpudW1iZXIgPSBmaW5kTG9jU3RvcmVMaXN0cygpO1xuICAgIGxldCBsb2NTdG9yZUFycmF5ID0gT2JqZWN0LnZhbHVlcyhsb2NhbFN0b3JhZ2UpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxvY1N0b3JlQXJyYXkpKSB7XG4gICAgICAgIGxldCBsaXN0c0FycmF5OnN0cmluZ1tdPVtdO1xuICAgICAgICBsZXQgbGlzdEl0ZW09bG9jU3RvcmVBcnJheVtpbmRdO1xuICAgICAgICBsZXQgbGlzdHMgPSBKU09OLnBhcnNlKGxpc3RJdGVtKTtcbiAgICAgICAgbGV0IHggPSBsb2NTdG9yZUFycmF5W2luZF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxpc3RzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGxpc3RzQXJyYXkucHVzaChsaXN0c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGZpbmRNeUxpc3QobGlzdHNBcnJheSk7XG4gICAgICAgIHJldHVybiBsaXN0c0FycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gW107XG59XG5mdW5jdGlvbiBjcmVhdGVUYXNrc0FycmF5KCkge1xuICAgIGxldCB4ID0gZmluZExvY1N0b3JlTGlzdHMoKTtcbiAgICBsZXQgbG9jU3RvcmVBcnJheSA9IE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKTsgXG4gICAgbGV0IHN0b3JhZ2VMZW5ndGggPSB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICBsZXQgdGFza0FycmF5OnRhc2tJbnRbXT1bXTtcbiAgICBpZiAoc3RvcmFnZUxlbmd0aD09MCkge1xuICAgICAgICByZXR1cm4gdGFza0FycmF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobG9jU3RvcmVBcnJheSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2k8c3RvcmFnZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGk9PT14KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdGhpc1Rhc2sgPSBsb2NTdG9yZUFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRUYXNrID0gSlNPTi5wYXJzZSh0aGlzVGFzayk7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tPYmogPSBuZXcgdGFzayhwYXJzZWRUYXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrQXJyYXkucHVzaCh0YXNrT2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdGFza0FycmF5O1xuICAgICAgICB9XG59O1xuZnVuY3Rpb24gc29ydFRhc2tBcnJheSh0YXNrQXJyYXk6dGFza0ludFtdKSB7IFxuICAgIGNvbnN0IHNvcnRlZFRhc2tzOnRhc2tJbnRbXSA9IHRhc2tBcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgICByZXR1cm4gYS5yYXdEYXRlLmdldFRpbWUoKSAtIGIucmF3RGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIH0pO1xucmV0dXJuIHNvcnRlZFRhc2tzO1xufTtcbmZ1bmN0aW9uIGZpbmRMaXN0KHRoaXNMaXN0OnN0cmluZyk6SFRNTERpdkVsZW1lbnQgeyAgICBcbiAgICBsZXQgbGlzdEhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImgyXCIpO1xuICAgIGxldCB0YXNrTGlzdCA9IHRoaXNMaXN0O1xuICAgIGZvciAobGV0IGk9MDsgaTxsaXN0SGVhZGluZ3MubGVuZ3RoO2krKykge1xuICAgICAgICBsZXQgbGlzdE5hbWUgPWxpc3RIZWFkaW5nc1tpXS50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKHRhc2tMaXN0ID09IGxpc3ROYW1lKSB7XG4gICAgICAgICAgICBsZXQgZ3JhYkVsZW1lbnQgPSBsaXN0SGVhZGluZ3NbaV0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHJldHVybiBncmFiRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgICAgIGxldCBsaXN0c0FycmF5ID0gY3JlYXRlTGlzdHNBcnJheSgpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0c0FycmF5KSkge1xuICAgICAgICAgICAgbGlzdHNBcnJheS5wdXNoKHRhc2tMaXN0KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUxpc3RzJyxKU09OLnN0cmluZ2lmeShsaXN0c0FycmF5KSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7ICAgIFxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsaXN0LmNsYXNzTmFtZT0nbGlzdCc7XG4gICAgICAgIGxldCBncmFiRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmFiRWxlbWVudC5jbGFzc05hbWU9J3Rhc2stbGlzdCc7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YXNrTGlzdCk7XG4gICAgICAgIGxpc3ROYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBncmFiRWxlbWVudC5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgICAgIGNvbnRlbnQ/LmFwcGVuZENoaWxkKGdyYWJFbGVtZW50KTsgICAgICAgICAgXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpOyAgXG4gICAgICAgIHJldHVybiBncmFiRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcbn07XG5mdW5jdGlvbiByZW5kZXJUYXNrKHNvcnRGaWVsZDpzdHJpbmcsIHRhc2tBcnJheTp0YXNrSW50W10pOnZvaWQge1xuICAgIC8vRmluZHMgbGlzdCBvbiBET00gdG8gYXR0YWNoIHRhc2tcbiAgICB0YXNrQXJyYXkuZm9yRWFjaChmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGxldCB0aGlzTGlzdDtcbiAgICAgICAgbGV0IGdyYWJFbGVtZW50O1xuICAgICAgICBpZiAoc29ydEZpZWxkID09IFwicHJpb3JpdHlcIikge1xuICAgICAgICAgICAgZ3JhYkVsZW1lbnQgPSBmaW5kTGlzdCh0YXNrLnByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb3J0RmllbGQgPT0gXCJzdGF0dXNcIikge1xuICAgICAgICAgICAgZ3JhYkVsZW1lbnQgPSBmaW5kTGlzdCh0YXNrLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc29ydEZpZWxkID09IFwiZGF0ZVwiKSB7XG4gICAgICAgICAgICBncmFiRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QtaGVhZGluZycpITtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdyYWJFbGVtZW50ID0gZmluZExpc3QodGFzay5saXN0KTtcbiAgICAgICAgfSAgICBcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrSXRlbS5jbGFzc05hbWU9J3Rhc2staXRlbSc7XG4gICAgICAgICAgICB0YXNrSXRlbS5kYXRhc2V0LmlkPXRhc2suaWQ7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTmFtZT0ndGFzay1wcmlvcml0eSc7XG4gICAgICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2lyY2xlLmNsYXNzTmFtZT0nY2lyY2xlJztcbiAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5PT0nSGlnaCcpIHtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGFzay5wcmlvcml0eT09J0xvdycpIHtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZ2IoNTcsIDE2MiwgMjExKSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdncmVlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrTmFtZS5jbGFzc05hbWU9J3Rhc2stbmFtZSc7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhc2sudGFzayk7XG4gICAgICAgICAgICB0YXNrTmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRHVlLmNsYXNzTmFtZT0ndGFzay1kdWUnO1xuICAgICAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhc2suZGF0ZSk7XG4gICAgICAgICAgICB0YXNrRHVlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgaWYgKHRhc2sucmF3RGF0ZSA8IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrRHVlLnN0eWxlLmNvbG9yPVwicmVkXCI7XG4gICAgICAgICAgICAgICAgdGFza0R1ZS5zdHlsZS5mb250U3R5bGU9XCJpdGFsaWNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFza1RvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1RvZ2dsZS5jbGFzc05hbWU9J3Rhc2stdG9nZ2xlJztcbiAgICAgICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnKycpO1xuICAgICAgICAgICAgdGFza1RvZ2dsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIHRhc2tUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+dG9nZ2xlSW5mbyhlKSk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrSW5mby5jbGFzc05hbWU9J3Rhc2staW5mbyc7XG4gICAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFzay5kZXRhaWxzKTtcbiAgICAgICAgICAgIHRhc2tJbmZvLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0VkaXQuY2xhc3NOYW1lPSd0YXNrLWVkaXQnO1xuICAgICAgICBjb25zdCBlZGl0UGVuY2lsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIGVkaXRQZW5jaWwuc3JjPXBlbmNpbEltZztcbiAgICAgICAgICAgIGVkaXRQZW5jaWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+ZWRpdFRhc2soZSkpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMuY2xhc3NOYW1lPSd0YXNrLXN0YXR1cyc7XG4gICAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFzay5zdGF0dXMpO1xuICAgICAgICAgICAgdGFza1N0YXR1cy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZS5jbGFzc05hbWU9J3Rhc2stZGVsZXRlJztcbiAgICAgICAgY29uc3QgdHJhc2hCaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgdHJhc2hCaW4uc3JjPWRlbEltZzsgXG4gICAgICAgICAgICB0cmFzaEJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICAgICAgZGVsZXRlSXRlbShlKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgICAgICAgIH0pOyAgIFxuICAgICAgICBjb25zdCB0YXNrTGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tMaXN0TmFtZS5jbGFzc05hbWU9J3Rhc2stbGlzdC1uYW1lJztcbiAgICAgICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YXNrLmxpc3QpO1xuICAgICAgICAgICAgdGFza0xpc3ROYW1lLmFwcGVuZENoaWxkKHRleHQpOyAgICAgICAgXG5cbiAgICAgICAgbGV0IGlubmVyID0gZ3JhYkVsZW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyJyk7XG4gICAgICAgICAgICBpbm5lciEuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoY2lyY2xlKTsgXG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tUb2dnbGUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YXNrSW5mb1dyYXBwZXIuY2xhc3NOYW1lPSd0YXNrSW5mb1dyYXBwZXInO1xuXG4gICAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrV3JhcHBlci5jbGFzc05hbWU9J3Rhc2tXcmFwcGVyJztcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuICAgICAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrTGlzdE5hbWUpO1xuICAgICAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRWRpdCk7XG4gICAgICAgICAgICB0YXNrRWRpdC5hcHBlbmRDaGlsZChlZGl0UGVuY2lsKTtcbiAgICAgICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7ICAgXG4gICAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZS5hcHBlbmRDaGlsZCh0cmFzaEJpbik7IFxuICAgICAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7ICBcbiAgICB9KTtcbn07XG5mdW5jdGlvbiB0b2dnbGVMaXN0RGlzcGxheShlOkV2ZW50KSB7XG4gICAgbGV0IHRoaXNEaXYgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBpZiAodGhpc0Rpdi5jbGFzc05hbWUgPT1cInRhc2stbGlzdC1oZWFkaW5nXCIpe1xuICAgICAgICBsZXQgbGlzdENoaWxkcmVuID0gdGhpc0Rpdi5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGxpc3RDaGlsZHJlbiEubGVuZ3RoPjEpIHtcbiAgICAgICAgICAgIHRoaXNEaXY/LmNoaWxkcmVuWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgZWxzZSByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTGlzdChwYXJzZWRMaXN0OnN0cmluZ1tdKTp2b2lkIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAgICBcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lPSdsaXN0JztcbiAgICBsZXQgbGVuZ3RoID0gcGFyc2VkTGlzdC5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoO2krKykge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTGlzdC5jbGFzc05hbWU9J3Rhc2stbGlzdCc7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTGlzdEhlYWRpbmcuY2xhc3NOYW1lPSd0YXNrLWxpc3QtaGVhZGluZyc7XG5cbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsaXN0TmFtZS5jbGFzc05hbWU9XCJsaXN0TmFtZVRpdGxlXCI7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcnNlZExpc3RbaV0pO1xuICAgICAgICBsaXN0TmFtZVRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsaXN0TmFtZS5hcHBlbmRDaGlsZChsaXN0TmFtZVRpdGxlKTtcblxuICAgICAgICBjb25zdCBsaXN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsaXN0RGVsZXRlLmNsYXNzTmFtZT0nbGlzdC1kZWxldGUgaGlkZSc7XG4gICAgICAgIGNvbnN0IHRyYXNoQmluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIHRyYXNoQmluLnNyYz1kZWxJbWc7IFxuICAgICAgICAgICAgdHJhc2hCaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIGNoZWNrTGlzdFRhc2tzKGUpO1xuICAgICAgICAgICAgfSk7ICBcbiAgICAgICAgbGlzdERlbGV0ZS5hcHBlbmRDaGlsZCh0cmFzaEJpbik7XG5cbiAgICAgICAgY29uc3QgbGlzdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0VG9nZ2xlLmNsYXNzTmFtZT0nbGlzdC10b2dnbGUgbWludXMnO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUyMDEzXCIpO1xuICAgICAgICBsaXN0VG9nZ2xlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsaXN0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnRvZ2dsZUxpc3QoZSkpO1xuICAgICAgICAgICAgdGFza0xpc3RIZWFkaW5nLmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hcHBlbmRDaGlsZChsaXN0RGVsZXRlKTsgXG4gICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYXBwZW5kQ2hpbGQobGlzdFRvZ2dsZSk7XG4gICAgICAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoZTpFdmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGlzdERpc3BsYXkoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoZTpFdmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGlzdERpc3BsYXkoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pOyAgXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0xpc3RXcmFwcGVyLmNsYXNzTmFtZT0ndGFza0xpc3RXcmFwcGVyIHNob3dMaXN0JztcbiAgICAgICAgbGV0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbm5lci5jbGFzc05hbWU9J2lubmVyJztcbiAgICAgICAgICAgIHRhc2tMaXN0V3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYXBwZW5kQ2hpbGQodGFza0xpc3RXcmFwcGVyKTsgICAgIFxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTGlzdEhlYWRpbmcpO1xuICAgICAgICBjb250ZW50Py5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gICAgICAgIH1cbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpOyAgXG59O1xuICAgIFxuLy9PdGhlcnNcbmZ1bmN0aW9uIHRvZ2dsZUluZm8oZTpFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7ICBcbiAgICBsZXQgdGhpc0xpc3RJdGVtID0gZXZlbnQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgdGFza1dyYXBwZXIgPSB0aGlzTGlzdEl0ZW0/LnF1ZXJ5U2VsZWN0b3IoJy50YXNrV3JhcHBlcicpO1xuICAgIGlmICh0YXNrV3JhcHBlcikgdGFza1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd1Rhc2snKTsgXG4gICAgaWYgKHRhc2tXcmFwcGVyPy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dUYXNrJykpe1xuICAgICAgICBldmVudC50ZXh0Q29udGVudD1cIlxcdTIwMTNcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50LnRleHRDb250ZW50PVwiK1wiO1xuICAgIH07XG59O1xuZnVuY3Rpb24gYWRkTGlzdFRvZ2dsZSgpIHtcbiAgICBsZXQgbGlzdEhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWxpc3RcIik7XG4gICAgbGlzdEhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcpPT4ge1xuICAgICAgICBsZXQgaGVhZGluZ0RpdiA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0V3JhcHBlcicpPy5maXJzdENoaWxkIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBpZiAoIWhlYWRpbmdEaXYuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBsZXQgbm9UYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBub1Rhc2tzLmNsYXNzTmFtZT1cIm5vVGFza3NNc2dcIjtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUaGVyZSBhcmUgbm8gdGFza3NcIik7XG4gICAgICAgICAgICBub1Rhc2tzLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgaGVhZGluZ0Rpdi5hcHBlbmRDaGlsZChub1Rhc2tzKTtcbiAgICAgICAgICAgICBsZXQgdGhpc1RvZ2dsZSA9IGhlYWRpbmcuZmlyc3RFbGVtZW50Q2hpbGQ/LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXRvZ2dsZScpO1xuICAgICAgICAgICAgdGhpc1RvZ2dsZSEudGV4dENvbnRlbnQ9XCJcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHRvZ2dsZUxpc3QoZTpFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7ICBcbiAgICBsZXQgdGhpc0xpc3QgPSBldmVudC5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5maXJzdENoaWxkISBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0IHRhc2tMaXN0V3JhcHBlciA9IHRoaXNMaXN0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdFdyYXBwZXInKTtcbiAgICBpZiAodGFza0xpc3RXcmFwcGVyKSB0YXNrTGlzdFdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd0xpc3QnKTtcbiAgICBpZiAodGFza0xpc3RXcmFwcGVyPy5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3dMaXN0Jykpe1xuICAgICAgICBldmVudC50ZXh0Q29udGVudD1cIlxcdTIwMTNcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50LnRleHRDb250ZW50PVwiK1wiO1xuICAgIH07XG59XG5mdW5jdGlvbiBkZWxldGVJdGVtKGU6RXZlbnQpe1xuICAgIGlmIChlLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgaWQgPSB0YXNrPy5kYXRhc2V0LmlkITtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oaWQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNob3dTb3J0TWVudSgpIHtcbiAgICBjb25zdCBzb3J0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0LXdyYXBwZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBzb3J0TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5mdW5jdGlvbiBlZGl0VGFzayhlOkV2ZW50KXtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGxldCB0YXNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGlkID0gdGFzaz8uZGF0YXNldC5pZCE7XG4gICAgICAgIGxldCB0aGlzT25lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xuICAgICAgICBsZXQgbXlUYXNrID0gSlNPTi5wYXJzZSh0aGlzT25lISk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbiAgICAgICAgZmlsbEVkaXRGb3JtKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZmlsbEVkaXRGb3JtKCkge1xuICAgICAgICBzaG93TmV3VGFza0Zvcm0oKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrTmFtZVwiXScpO1xuICAgICAgICAgICAgICAgIHRhc2tOYW1lPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxteVRhc2sudGFza05hbWUpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2tEYXRlXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0YXNrRGF0ZS52YWx1ZT1teVRhc2sudGFza0RhdGU7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2tQcmlvcml0eVwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlPW15VGFzay50YXNrUHJpb3JpdHk7XG4gICAgICAgICAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrU3RhdHVzXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0YXNrU3RhdHVzLnZhbHVlPW15VGFzay50YXNrU3RhdHVzO1xuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2tEZXRhaWxzXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0YXNrRGV0YWlscy52YWx1ZT0gbXlUYXNrLnRhc2tEZXRhaWxzO1xuICAgICAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhc2tMaXN0XCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdC52YWx1ZSA9IG15VGFzay50YXNrTGlzdDsgICAgXG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gc29ydEJ5VGFzayhlOkV2ZW50KXtcbnVwZGF0ZURPTSgpO1xufTtcbmZ1bmN0aW9uIHNvcnRCeVByaW9yaXR5KGU6RXZlbnQpe1xuICAgIGxldCBsaXN0c0FycmF5ID0gW1wiTm9ybWFsXCIsXCJIaWdoXCIsXCJMb3dcIl07XG4gICAgbGV0IHNvcnRGaWVsZCA9IFwicHJpb3JpdHlcIjtcbiAgICB1cGRhdGVTb3J0RE9NKGxpc3RzQXJyYXksc29ydEZpZWxkKTtcbn07XG5mdW5jdGlvbiBzb3J0QnlTdGF0dXMoZTpFdmVudCl7XG4gICAgbGV0IGxpc3RzQXJyYXkgPSBbXCJOb3QgU3RhcnRlZFwiLFwiSW4gUHJvZ3Jlc3NcIixcIkNvbXBsZXRlZFwiXTtcbiAgICBsZXQgc29ydEZpZWxkID0gXCJzdGF0dXNcIjtcbiAgICB1cGRhdGVTb3J0RE9NKGxpc3RzQXJyYXksc29ydEZpZWxkKVxufTtcbmZ1bmN0aW9uIHNvcnRCeURhdGUoZTpFdmVudCl7XG4gICAgY2xlYXJET00oKTtcbiAgICBsZXQgdGFza0FycmF5PSBjcmVhdGVUYXNrc0FycmF5KCk7XG4gICAgbGV0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tBcnJheSh0YXNrQXJyYXkpO1xuICAgIGRhdGVMaXN0TmFtZSgpOyAgICBcbiAgICByZW5kZXJUYXNrKCdkYXRlJywgc29ydGVkVGFza3MpO1xuICAgICAgICBmdW5jdGlvbiBkYXRlTGlzdE5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgICAgXG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGlzdC5jbGFzc05hbWU9J2xpc3QnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LmNsYXNzTmFtZT0ndGFzay1saXN0JztcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGlzdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RIZWFkaW5nLmNsYXNzTmFtZT0ndGFzay1saXN0LWhlYWRpbmcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3ROYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0TmFtZVRpdGxlLmNsYXNzTmFtZT1cImxpc3ROYW1lVGl0bGVcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgICAgIGgyLnRleHRDb250ZW50PSBcIk15IFRhc2tzXCI7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lVGl0bGUuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdERlbGV0ZS5jbGFzc05hbWU9J2xpc3QtZGVsZXRlIGhpZGUnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdFdyYXBwZXIuY2xhc3NOYW1lPSd0YXNrTGlzdFdyYXBwZXIgc2hvd0xpc3QnO1xuICAgICAgICAgICAgICAgIGxldCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBpbm5lci5jbGFzc05hbWU9J2lubmVyJztcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RXcmFwcGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RIZWFkaW5nLmFwcGVuZENoaWxkKGxpc3ROYW1lVGl0bGUpOyAgXG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tMaXN0SGVhZGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hcHBlbmRDaGlsZCh0YXNrTGlzdFdyYXBwZXIpOyAgXG4gICAgICAgICAgICAgICAgY29udGVudD8uYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgICAgICAgICAgfVxufTsgXG5mdW5jdGlvbiBzaG93Q29sb3JQaWNrZXIoKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZGlhbG9nLmlkPSduZXdDb2xvckRpYWxvZyc7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsJ2RpYWxvZycpO1xuICAgICAgICBmb3JtLmlkPSduZXdDb2xvckZvcm0nO1xuICAgIGNvbnN0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNsb3NlRGlhbG9nLmlkPVwiY2xvc2VEaWFsb2dcIjtcbiAgICAgICAgY2xvc2VEaWFsb2cuc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1gnKTtcbiAgICAgICAgY2xvc2VEaWFsb2cuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VEaWFsb2cpO1xuICAgICAgICBjbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTmFtZT1cImNpcmNsZSBjaXJjbGUtYmx1ZVwiO1xuICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJibHVlXCI7XG4gICAgICAgICAgICAgICAgY2hhbmdlQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURPTSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlLWdyZWVuXCI7XG4gICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PntcbiAgICAgICAgICAgIGxldCBjb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgIGNoYW5nZUNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIHVwZGF0ZURPTSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZS1vcmFuZ2VcIjtcbiAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgICAgIGNoYW5nZUNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgIHVwZGF0ZURPTSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICAgIFxuXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlLWdyZXlcIjtcbiAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJncmV5XCI7XG4gICAgICAgICAgICBjaGFuZ2VDb2xvcihjb2xvcik7XG4gICAgICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgICBcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZS1ibGFja1wiO1xuICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICBsZXQgY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjaGFuZ2VDb2xvcihjb2xvcik7XG4gICAgICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIGRpYWxvZy5hcHBlbmQoZm9ybSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpO1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKGNvbG9yOnN0cmluZykge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSBjb2xvcjtcbn1cbmZ1bmN0aW9uIGNoZWNrTGlzdFRhc2tzKGU6RXZlbnQpIHtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGxldCBsaXN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgbGV0IHggPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBpZiAoeCEuZmlyc3RFbGVtZW50Q2hpbGQhLmNsYXNzTmFtZSA9PSBcInRhc2staXRlbVwiKSB7XG4gICAgICAgICAgICBzaG93TGlzdERlbGV0ZUNvbmZpcm0obGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGVMaXN0KGxpc3QpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZGVsZXRlTGlzdChsaXN0OkhUTUxEaXZFbGVtZW50KXtcbiAgICAgICAgbGV0IGlkID0gbGlzdD8uZmlyc3RDaGlsZD8udGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBteUxpc3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlzdHMnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obXlMaXN0cyEpO1xuICAgICAgICBsZXQgbXlQYXJzZWRMaXN0ID0gSlNPTi5wYXJzZShteUxpc3RzISk7IFxuICAgICAgICBsZXQgaW5kID0gbXlQYXJzZWRMaXN0LmluZGV4T2YoaWQpO1xuICAgICAgICBpZiAoaW5kPi0xKSB7XG4gICAgICAgICAgICBteVBhcnNlZExpc3Quc3BsaWNlKGluZCwxKTtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaXN0cycsSlNPTi5zdHJpbmdpZnkobXlQYXJzZWRMaXN0KSk7ICAgICAgICBcbiAgICAgICAgbGV0IGxpc3ROYW1lOnN0cmluZz0gU3RyaW5nKGlkKTsgIFxuICAgICAgICByZW1vdmVMaXN0VGFza3MobGlzdE5hbWUpO1xuICAgICAgICB1cGRhdGVET00oKTtcbn1cbmZ1bmN0aW9uIHNob3dMaXN0RGVsZXRlQ29uZmlybShsaXN0OkhUTUxEaXZFbGVtZW50KSB7XG4gICAgbGV0IGNvbmZpcm1EZWxldGUgPSBmYWxzZTtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBkaWFsb2cuaWQ9J2NvbmZpcm1EZWxldGVEaWFsb2cnO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCdkaWFsb2cnKTtcbiAgICBsZXQgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbXNnLmNsYXNzTmFtZSA9J2RlbGV0ZUNvbmZpcm1Nc2cnO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUaGVyZSBhcmUgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGlzdC4gXFxuQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT8nKTtcbiAgICBtc2cuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGV0IGJ1dHRvbnNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uc1Jvdy5jbGFzc05hbWU9J2J1dHRvbnNSb3cnO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdEZWxldGUnKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdChsaXN0KTtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgYnV0dG9uc1Jvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2FuY2VsJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIGNvbmZpcm1EZWxldGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGNvbmZpcm1EZWxldGU7XG4gICAgfSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGZvcm0uYXBwZW5kKG1zZyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25zUm93KTtcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpO1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUxpc3RUYXNrcyhsaXN0OnN0cmluZykge1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICBsZXQgdGhpc0tleSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSEpO1xuICAgICAgICBpZiAodGhpc0tleS50YXNrTGlzdCA9PSBsaXN0KSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9O1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNvcnRET00obGlzdHNBcnJheTpzdHJpbmdbXSxzb3J0RmllbGQ6c3RyaW5nKSB7XG4gICAgY2xlYXJET00oKTtcbiAgICByZW5kZXJTb3J0TGlzdChsaXN0c0FycmF5KTtcbiAgICBsZXQgdGFza0FycmF5PSBjcmVhdGVUYXNrc0FycmF5KCk7XG4gICAgbGV0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tBcnJheSh0YXNrQXJyYXkpO1xuICAgIHJlbmRlclRhc2soc29ydEZpZWxkLCBzb3J0ZWRUYXNrcyk7XG4gICAgYWRkTGlzdFRvZ2dsZSgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNvcnRMaXN0KHBhcnNlZExpc3Q6c3RyaW5nW10pOnZvaWQge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQ7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7ICAgIFxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdC5jbGFzc05hbWU9J2xpc3QnO1xuICAgIGxldCBsZW5ndGggPSBwYXJzZWRMaXN0Lmxlbmd0aDtcblxuICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7aSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tMaXN0LmNsYXNzTmFtZT0ndGFzay1saXN0JztcbiAgICAgICAgY29uc3QgdGFza0xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tMaXN0SGVhZGluZy5jbGFzc05hbWU9J3Rhc2stbGlzdC1oZWFkaW5nJztcblxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxpc3ROYW1lLmNsYXNzTmFtZT1cImxpc3ROYW1lVGl0bGVcIjtcbiAgICAgICAgY29uc3QgbGlzdE5hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFyc2VkTGlzdFtpXSk7XG4gICAgICAgIGxpc3ROYW1lVGl0bGUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGxpc3ROYW1lLmFwcGVuZENoaWxkKGxpc3ROYW1lVGl0bGUpOyAgICAgICAgXG5cbiAgICAgICAgY29uc3QgbGlzdFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0VG9nZ2xlLmNsYXNzTmFtZT0nbGlzdC10b2dnbGUgbWludXMnO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUyMDEzXCIpO1xuICAgICAgICBsaXN0VG9nZ2xlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsaXN0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnRvZ2dsZUxpc3QoZSkpO1xuICAgICAgICAgICAgdGFza0xpc3RIZWFkaW5nLmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hcHBlbmRDaGlsZChsaXN0VG9nZ2xlKTtcbiAgICAgICAgY29uc3QgdGFza0xpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrTGlzdFdyYXBwZXIuY2xhc3NOYW1lPSd0YXNrTGlzdFdyYXBwZXIgc2hvd0xpc3QnO1xuICAgICAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlubmVyLmNsYXNzTmFtZT0naW5uZXInO1xuICAgICAgICAgICAgdGFza0xpc3RXcmFwcGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hcHBlbmRDaGlsZCh0YXNrTGlzdFdyYXBwZXIpOyAgICAgXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tMaXN0SGVhZGluZyk7XG4gICAgICAgIGNvbnRlbnQ/LmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgICAgICAgfVxuICAgIGNvbnRlbnQ/LmFwcGVuZChmcmFnbWVudCk7ICBcbn07XG51cGRhdGVET00oKTsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IHsgaW50bEZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pbnRsRm9ybWF0RGlzdGFuY2VcIjtcblxuLy9BUFBMSUNBVElPTiBTQ1JJUFRTXG5cbmltcG9ydCB7IGNyZWF0ZUxpc3RzQXJyYXksIGNsZWFyRE9NLCByZW5kZXJMaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGNsYXNzIHRhc2sge1xuICAgIHRhc2s6c3RyaW5nO1xuICAgIHJhd0RhdGU6RGF0ZTtcbiAgICBwcmlvcml0eTpzdHJpbmc7XG4gICAgc3RhdHVzOnN0cmluZztcbiAgICBkZXRhaWxzOnN0cmluZztcbiAgICBsaXN0OnN0cmluZzsgXG4gICAgaWQ6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHRhc2tPYmo6IHt0YXNrTmFtZTpzdHJpbmc7IHRhc2tEYXRlOnN0cmluZzsgdGFza1ByaW9yaXR5OnN0cmluZzt0YXNrU3RhdHVzOnN0cmluZzsgdGFza0RldGFpbHM6c3RyaW5nOyB0YXNrTGlzdDpzdHJpbmc7IGlkOnN0cmluZ30pIHtcbiAgICAgICAgdGhpcy50YXNrID0gdGFza09iai50YXNrTmFtZTtcbiAgICAgICAgdGhpcy5yYXdEYXRlID0gbmV3IERhdGUodGFza09iai50YXNrRGF0ZSk7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB0YXNrT2JqLnRhc2tQcmlvcml0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0YXNrT2JqLnRhc2tTdGF0dXM7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IHRhc2tPYmoudGFza0RldGFpbHM7XG4gICAgICAgIHRoaXMubGlzdCA9IHRhc2tPYmoudGFza0xpc3Q7XG4gICAgICAgIHRoaXMuaWQgPSB0YXNrT2JqLmlkO1xuICAgICAgICB9XG4gICAgZ2V0IGRhdGUoKSB7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlICh0aGlzLnJhd0RhdGUpO1xuICAgICAgICBsZXQgZGF0ZURpZmYgPSAoZGF0ZS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpKS8oMTAwMCo2MCo2MCoyNCk7XG4gICAgICAgIGlmIChkYXRlRGlmZjwtMzY2KSB7XG4gICAgICAgICAgICBsZXQgbXlEYXRlID0gaW50bEZvcm1hdERpc3RhbmNlKGRhdGUsbm93LHt1bml0Oid5ZWFyJ30pXG4gICAgICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGVEaWZmPi0zNjYgJiYgZGF0ZURpZmY8PS01Nil7XG4gICAgICAgICAgICBsZXQgbXlEYXRlID0gaW50bEZvcm1hdERpc3RhbmNlKGRhdGUsbm93LHt1bml0Oidtb250aCd9KVxuICAgICAgICAgICAgcmV0dXJuIG15RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRlRGlmZj4tNTYgJiYgZGF0ZURpZmY8PS0xNSl7XG4gICAgICAgICAgICBsZXQgbXlEYXRlID0gaW50bEZvcm1hdERpc3RhbmNlKGRhdGUsbm93LHt1bml0Oid3ZWVrJ30pXG4gICAgICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgICAgICB9ICAgICBcbiAgICAgICAgZWxzZSBpZiAoZGF0ZURpZmY+LTE1ICYmIGRhdGVEaWZmPD0xNSkge1xuICAgICAgICAgICAgbGV0IG15RGF0ZSA9IGludGxGb3JtYXREaXN0YW5jZShkYXRlLG5vdyx7dW5pdDonZGF5J30pXG4gICAgICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAgICBcbiAgICAgICAgICAgIGxldCBteURhdGUgPSBmb3JtYXQobmV3IERhdGUodGhpcy5yYXdEYXRlKSwnUFAnKTtcbiAgICAgICAgICAgIHJldHVybiBteURhdGU7XG4gICAgICAgIH1cbiAgICB9IFxufVxuLy9GaW5kcyBteUxpc3RzIGluIExTIG9yIGNyZWF0ZXMgaWYgbm90IHRoZXJlICBcbmV4cG9ydCBmdW5jdGlvbiBmaW5kTG9jU3RvcmVMaXN0cygpOm51bWJlciB7XG4gICAgbGV0IGxvY1N0b3JlID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgICBsZXQgbGlzdHNJbmRleDpudW1iZXI7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobG9jU3RvcmUpKSB7XG4gICAgICAgIGxpc3RzSW5kZXggPSBsb2NTdG9yZS5maW5kSW5kZXgoZT0+ZT09PSdteUxpc3RzJyk7XG4gICAgICAgIGlmIChsaXN0c0luZGV4PT0tMSkge1xuICAgICAgICAgICAgbGV0IHg6bnVtYmVyID0gbG9jU3RvcmUubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IGxpc3RzQXJyYXk6c3RyaW5nW109W1wiTXkgTGlzdFwiXTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUxpc3RzJyxKU09OLnN0cmluZ2lmeShsaXN0c0FycmF5KSk7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0c0luZGV4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn07XG5leHBvcnQgaW50ZXJmYWNlIHRhc2tJbnQge1xuICAgIGRhdGU6c3RyaW5nLFxuICAgIHJhd0RhdGU6RGF0ZSxcbiAgICBkZXRhaWxzOnN0cmluZyxcbiAgICBsaXN0OnN0cmluZyxcbiAgICBzdGF0dXM6c3RyaW5nLFxuICAgIHRhc2s6c3RyaW5nLFxuICAgIHByaW9yaXR5OiBzdHJpbmcsXG4gICAgaWQ6c3RyaW5nXG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3TGlzdChlOkV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBsaXN0c0FycmF5ID0gY3JlYXRlTGlzdHNBcnJheSgpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdMaXN0RGlhbG9nJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBsZXQgdGhpc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7ICAgIFxuICAgIGxldCBuZXdMaXN0OnN0cmluZyA9IGZvcm1EYXRhLmdldCgnbmV3TGlzdCcpIGFzIHN0cmluZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0c0FycmF5KSkge1xuICAgICAgICBsaXN0c0FycmF5LnB1c2gobmV3TGlzdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUxpc3RzJyxKU09OLnN0cmluZ2lmeShsaXN0c0FycmF5KSk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgZGlhbG9nPy5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gbGlzdHNBcnJheTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhlOkV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRGlhbG9nJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjb25zdCB0YXNrQXJyYXlMZW5ndGggPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmxlbmd0aCArMTtcbiAgICBjb25zdCBuZXdUYXNrID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgICBsZXQgaW5kZXggPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHRhc2tLZXkgPSBpbmRleC50b1N0cmluZygpO1xuICAgIG5ld1Rhc2suaWQgPSB0YXNrS2V5O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2tLZXksSlNPTi5zdHJpbmdpZnkobmV3VGFzaykpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBkaWFsb2c/LmNsb3NlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZE15TGlzdChsaXN0c0FycmF5Om9iamVjdCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RzQXJyYXkpKSB7XG4gICAgICAgIGxldCBsaXN0c0luZGV4ID0gbGlzdHNBcnJheS5maW5kSW5kZXgoZT0+ZT09PSdNeSBMaXN0Jyk7XG4gICAgICAgIGlmIChsaXN0c0luZGV4PT0tMSkge1xuICAgICAgICAgICAgbGlzdHNBcnJheS5wdXNoKCdNeSBMaXN0Jyk7XG4gICAgICAgICAgICByZXR1cm4gbGlzdHNBcnJheTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0c0FycmF5O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==