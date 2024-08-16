"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["index"],{

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
    overflow: hidden;
}
#newListDialog {
    padding: 35px 12px 40px 10px;
    & form {
        /* min-width: 240px; */
        overflow: hidden;
        max-width: 100%;
    }
}
form {
    color: var(--border-color);
    color:rgb(82, 82, 82);
    font-size: 1.3rem;
    min-width: 295px;
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
#newColorDialog ul li {
    display: inline-block;
    margin: 0;
}
#newColorForm ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#newColorDialog {
    border: none;
    border-radius: 6px;
    padding: 35px 30px 40px 20px;
    width:40%;
}
#closeDialog {
    background-color: white;
    color:var(--button-color);
    border:2.5px solid var(--border-color);
    border-radius: 3px;
    padding:2px 4px 2px 4px;
    align-self:flex-end;
    font-style: bold;
    font-size: 1.3rem;
}
#newColorForm {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:30px;
    padding:0;
}
#newColorDialog {
    padding:10px 20px 25px 20px;
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
    dialog {
        background-color: red;
        /* overflow: hidden; */
        max-width: 100%;
        padding: 35px 10px 40px 12px;
    }
    #newListDialog {
        padding: 35px 2px 40px 2px;
        & form {
            min-width: 70%;
            padding:0;
            /* overflow: hidden; */
            /* max-width: 100%; */

        }
    }
    .newListForm {
        margin:0;
        background-color: purple;
        padding:0;
    }
    form {
        background-color: yellow;
        color: var(--border-color);
        color:rgb(82, 82, 82);
        font-size: 1.3rem;
        padding:0;
        /* min-width: 295px; */
    }
    input, select {
        width:100%;
    }
    fieldset {
        padding: 0;
    }

}`, "",{"version":3,"sources":["webpack://./src/styles/form.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,gBAAgB;AACpB;AACA;IACI,4BAA4B;IAC5B;QACI,sBAAsB;QACtB,gBAAgB;QAChB,eAAe;IACnB;AACJ;AACA;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,SAAS;IACT,SAAS;AACb;AACA;IACI,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,cAAc;IACd,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;IACvB,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,yCAAyC;AAC7C;AACA;IACI,oCAAoC;AACxC;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,qCAAqC;IACrC,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,qBAAqB;IACrB,SAAS;AACb;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,SAAS;AACb;AACA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,sCAAsC;IACtC,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,QAAQ;IACR,SAAS;AACb;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,qBAAqB;IACrB,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,qBAAqB;QACrB,sBAAsB;QACtB,eAAe;QACf,4BAA4B;IAChC;IACA;QACI,0BAA0B;QAC1B;YACI,cAAc;YACd,SAAS;YACT,sBAAsB;YACtB,qBAAqB;;QAEzB;IACJ;IACA;QACI,QAAQ;QACR,wBAAwB;QACxB,SAAS;IACb;IACA;QACI,wBAAwB;QACxB,0BAA0B;QAC1B,qBAAqB;QACrB,iBAAiB;QACjB,SAAS;QACT,sBAAsB;IAC1B;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;;AAEJ","sourcesContent":["dialog {\n    border: none;\n    border-radius: 6px;\n    padding: 35px 30px 40px 20px;\n    overflow: hidden;\n}\n#newListDialog {\n    padding: 35px 12px 40px 10px;\n    & form {\n        /* min-width: 240px; */\n        overflow: hidden;\n        max-width: 100%;\n    }\n}\nform {\n    color: var(--border-color);\n    color:rgb(82, 82, 82);\n    font-size: 1.3rem;\n    min-width: 295px;\n}\nfieldset {\n    border: none;\n}\nul {\n    list-style: none;\n    padding:0;\n    margin: 0;\n}\nli+li {\n    margin-top: 1rem;\n}\nlabel {\n    display: inline-block;\n    width: 95px;\n    line-height: 2.2rem;\n}\ninput, select {\n    appearance: none;\n    box-sizing: border-box;\n    height: 1.9rem;\n    border: solid 2px var(--input-color);\n    border-radius: 4px;\n    font-size: 1.2rem;\n    color:var(--text-color);\n    width:100%;\n    background-color: white;\n}\ninput[type=date] {\n    font-family: Arial, Helvetica, sans-serif;\n}\ninput:focus {\n    outline:solid 1px var(--input-color);\n}\n.buttonsRow>button {\n    border:none;\n    border-radius: 4px;\n    color:white;\n    background-color: var(--button-color);\n    padding: .3rem .9rem;\n    font-size: 1.3rem;\n    margin-top: 16px;\n}\n.buttonsRow>button:hover{\n    background-color: var(--button-hover-color);\n}\n.buttonsRow {\n    display: flex;\n    justify-content: space-between;\n}\nli.circle {\n    height: 35px;\n    width:35px;\n    border-radius: 50%;\n    display: block;\n}\nli.circle:hover {\n    cursor: pointer;\n}\n.circle-blue {\n    background-color:blue;\n}\n.circle-green {\n    background-color:green;\n}\n.circle-orange {\n    background-color:orange;\n}\n.circle-grey {\n    background-color:grey;\n}\n.circle-black {\n    background-color:black;\n}\n#newColorDialog ul li {\n    display: inline-block;\n    margin: 0;\n}\n#newColorForm ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n#newColorDialog {\n    border: none;\n    border-radius: 6px;\n    padding: 35px 30px 40px 20px;\n    width:40%;\n}\n#closeDialog {\n    background-color: white;\n    color:var(--button-color);\n    border:2.5px solid var(--border-color);\n    border-radius: 3px;\n    padding:2px 4px 2px 4px;\n    align-self:flex-end;\n    font-style: bold;\n    font-size: 1.3rem;\n}\n#newColorForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap:30px;\n    padding:0;\n}\n#newColorDialog {\n    padding:10px 20px 25px 20px;\n}\n#confirmDeleteDialog {\n    white-space: pre-line;\n    padding:30px;\n}\n.deletConfirmMsg {\n    font-size: 1.3rem;\n    white-space: pre-line;\n    line-height: 1.5rem;\n}\n#confirmDeleteDialog button {\n    font-size: 1rem;\n}\n#confirmDeleteDialog .buttonsRow {\n    margin-top: 10px;\n}\n\n@media screen and (max-width:490px) {\n    dialog {\n        background-color: red;\n        /* overflow: hidden; */\n        max-width: 100%;\n        padding: 35px 10px 40px 12px;\n    }\n    #newListDialog {\n        padding: 35px 2px 40px 2px;\n        & form {\n            min-width: 70%;\n            padding:0;\n            /* overflow: hidden; */\n            /* max-width: 100%; */\n\n        }\n    }\n    .newListForm {\n        margin:0;\n        background-color: purple;\n        padding:0;\n    }\n    form {\n        background-color: yellow;\n        color: var(--border-color);\n        color:rgb(82, 82, 82);\n        font-size: 1.3rem;\n        padding:0;\n        /* min-width: 295px; */\n    }\n    input, select {\n        width:100%;\n    }\n    fieldset {\n        padding: 0;\n    }\n\n}"],"sourceRoot":""}]);
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
/* body {
    padding: 10px 30px;
}     */
} `, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAwE;AAC5E;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAqE;AACzE;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAuE;AAC3E;AACA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,4DAAuE;IACvE,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;IACvB,4BAA4B;IAC5B,sBAAsB;IACtB,sBAAsB;IACtB,6FAA6F;IAC7F,oGAAoG;AACxG;AACA;IACI,mCAAmC;IACnC,kCAAkC;IAClC,kCAAkC;IAClC,iCAAiC;IACjC,sCAAsC;IACtC,iCAAiC;IACjC,yBAAyB;IACzB,mGAAmG;IACnG,wGAAwG;AAC5G;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;IACvB,6BAA6B;IAC7B,sBAAsB;IACtB,cAAc;IACd,iGAAiG;IACjG,sGAAsG;AAC1G;AACA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,qBAAqB;IACrB,uBAAuB;IACvB,6BAA6B;IAC7B,sBAAsB;IACtB,YAAY;IACZ,+FAA+F;IAC/F,mGAAmG;IACnG;QACI,qCAAqC;IACzC;IACA;QACI,2CAA2C;IAC/C;IACA;;OAEG;AACP;AACA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,+BAA+B;IAC/B,uBAAuB;IACvB,mCAAmC;IACnC,sBAAsB;IACtB,cAAc;IACd,gGAAgG;IAChG,wGAAwG;AAC5G;AACA;IACI,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,+BAA+B;IAC/B,eAAe;IACf,qCAAqC;IACrC,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;CAClB;AACD;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,sBAAsB;CACzB;AACD;IACI,8BAA8B;AAClC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,sCAAsC;IACtC,SAAS;IACT,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,qCAAqC;IACrC,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;CACnB;AACD;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,oCAAoC;IACpC,uBAAuB;AAC3B;CACC;IACG,SAAS;IACT,kBAAkB;IAClB,2BAA2B;CAC9B;CACA;IACG,eAAe;CAClB;CACA;IACG,YAAY;IACZ,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mCAAmC;AACvC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,oDAAoD;IACpD,gBAAgB;IAChB,mBAAmB;IACnB,6CAA6C;AACjD;AACA;IACI,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,0BAA0B;IAC1B,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,2CAA2C;IAC3C,uBAAuB;IACvB,gBAAgB;IAChB,mCAAmC;AACvC;AACA;IACI,iCAAiC;IACjC,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,oBAAoB;AACxB;AACA;IACI,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,UAAU;IACV,qCAAqC;IACrC,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,qCAAqC;AACzC;AACA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,wBAAwB;IACxB,mDAAmD;AACvD;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;;OAEO;AACP","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    font-weight: 400;\n    src: url(/src/assets/fonts/roboto-regular-webfont.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Roboto';\n    font-weight: 700;\n    src: url(/src/assets/fonts/roboto-bold-webfont.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Roboto';\n    font-weight: 500;\n    src: url(/src/assets/fonts/roboto-medium-webfont.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Roboto';\n    font-weight: 400;\n    src: url(/src/assets/fonts/roboto-italic-webfont.woff2) format('woff2');\n    font-style: italic;\n}\n:root, :root.grey {\n    background-color:white;\n    --heading-color: #565656;\n    --border-color: #8b8b8b;\n    --button-color: #565656;\n    --button-hover-color:#807e7d;\n    --input-color: #8b8b8b;\n    --text:rgb(76, 75, 75);\n    --filter: invert(33%) sepia(1%) saturate(0%) hue-rotate(350deg) brightness(93%) contrast(86%);\n    --hover-filter:  invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(93%) contrast(107%);\n}\n:root, :root.orange {\n    background-color:rgb(252, 252, 252);\n    --heading-color: rgb(255, 159, 28);\n    --border-color: rgb(255, 191, 105);\n    --button-color: rgb(236, 159, 42);\n    --button-hover-color:rgb(255, 159, 28);\n    --input-color: rgb(255, 191, 105);\n    --text:rgb(117, 117, 117);\n    --filter: invert(77%) sepia(35%) saturate(4460%) hue-rotate(344deg) brightness(101%) contrast(101%);\n    --hover-filter: invert(95%) sepia(24%) saturate(5708%) hue-rotate(308deg) brightness(99%) contrast(103%);\n}\n:root, :root.blue {\n    background-color:white;\n    --heading-color: #152985;\n    --border-color: #092f96;\n    --button-color: #092f96;\n    --button-hover-color: #194b8b;\n    --input-color: #092f96;\n    --text:#1D2731;\n    --filter: invert(17%) sepia(79%) saturate(536%) hue-rotate(161deg) brightness(103%) contrast(99%);\n    --hover-filter: invert(37%) sepia(70%) saturate(469%) hue-rotate(158deg) brightness(95%) contrast(92%);\n}\n:root, :root.black {\n    background-color:#1a2930 ;\n    --heading-color: #c5c1c0;\n    --border-color: white;\n    --button-color: #b8b8b8;\n    --button-hover-color: #949190;\n    --input-color: #1a2930;\n    --text:white;\n    --filter: invert(6%) sepia(9%) saturate(2593%) hue-rotate(109deg) brightness(94%) contrast(95%);\n    --hover-filter: invert(0%) sepia(4%) saturate(0%) hue-rotate(309deg) brightness(93%) contrast(107%);\n    & .newTaskButton {\n        background-color: var(--button-color);\n    }\n    & .newTaskButton:hover {\n        background-color: var(--button-hover-color);\n    }\n    /* & input {\n    outline: solid 2px var(--background-color);\n    } */\n}\n:root, :root.green {\n    background-color:white;\n    --border-color: #009933;\n    --heading-color: rgb(1, 112, 1);\n    --button-color: #009933;\n    --button-hover-color:rgb(1, 112, 1); \n    --input-color: #009933;\n    --text:#1a2930;\n    --filter: invert(24%) sepia(54%) saturate(2665%) hue-rotate(95deg) brightness(94%) contrast(99%);\n    --hover-filter: invert(29%) sepia(98%) saturate(1359%) hue-rotate(121deg) brightness(99%) contrast(101%);\n}\nhtml, body {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n}\nbody {\n    font-family:'Roboto',sans-serif;\n    font-size: 100%;\n    padding: 10px calc(28px + 1.5vw) 15px;\n    min-width: 280px;\n    max-width: 640px;\n    margin:0px auto;\n }\nheader,footer {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    padding-bottom: 0.7rem;\n }\nfooter {\n    justify-content: space-between;\n}\nheader {\n    justify-content:center;\n}\nh1 {\n    font-weight: bold;\n    color: var(--heading-color);\n    font-size: 3rem;\n    margin-bottom: 0;\n    line-height: 3rem;\n    margin-right: auto;\n}\n.sort {\n    align-self: flex-end;\n    font-size: 1.7rem;\n    line-height: 1.7rem;\n    padding: 2px;\n    position: relative;\n    color:var(--text);\n    margin-left: auto;\n}\n.sort-text:hover {\n    cursor: pointer;\n    font-weight: bold;\n}\n.sort-wrapper {\n    padding:10px 16px;\n    position:absolute;\n    left:-36px;\n    top: 2rem;\n    background-color: white;\n    visibility: visible;\n    opacity: 1;\n    transition: all .1s;\n}\n.sort-menu {\n    font-size: 1.2rem;\n    color:var(--text);\n    padding:5px;\n    outline: solid 3px var(--button-color);\n    opacity:1;\n    border-radius: 8px;\n    background-color: white;\n}\n.sort-menu ul>li {\n    padding: 4px 6px;\n    text-align: center;\n    margin: 0;\n}\n.sort-menu ul>li:hover {\n    background-color:var(--heading-color);\n    color:white;\n    border:none;\n    border-radius: 4px;\n}\n.sort-menu ul li+li {\n    border-top:1px solid rgb(175, 172, 172);\n    text-align: center;\n    margin: 0;\n}\n.content {\n    border: 4.9px solid var(--border-color);\n    border-radius: 6px;\n    min-height: 75%;\n    padding:4px 10px;\n    color: var(--text);\n    min-width: 260px;\n }\n.task-list {\n    min-width:265px ;\n}\n.task-list-heading {\n    display: grid;\n    grid-template-rows: 2.4rem;\n    grid-template-columns: auto 30px 1fr;\n    padding:1px 8px 5px 1px;\n}\n h2 {\n    margin: 0;\n    margin-right: 18px;\n    color: var(--heading-color);\n } \n h2:hover {\n    cursor: pointer;\n }\n .listNameTitle {\n    padding: 1px;\n    grid-area: 1/1/2/2;\n }\n.list-delete {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-left:8px;\n    grid-area: 1/2/2/3;\n    transition: all 0.2s;\n    visibility: visible;\n    opacity: 1;\n}\n.list-delete img {\n    height: 1.7rem;\n}\n.hide {\n    visibility: hidden;\n    opacity: 0;\n}\n.list-toggle {\n    color: var(--heading-color);\n    font-size: 2.2rem;\n    font-weight: bold;\n    text-align: center;\n    width:20px;\n    grid-area: 1/3/2/4;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n}\n.list-toggle:hover {\n    color: var(--border-color);\n    cursor: pointer;\n}\n.minus {\n    font-size: 2.3rem;\n    padding-right: 0.2rem;\n}\n.taskListWrapper {\n    grid-area: 2/1/3/4;\n    display: grid;\n    grid-template-rows: 0fr; \n    transition: grid-template-rows 0.3s;\n}\n.showList {\n    grid-template-rows:1fr; \n}\n.inner {\n    overflow: hidden;\n}\n.task-item {\n    display: grid;\n    grid-template-rows: 1.7rem;\n    grid-template-columns: 25px 1fr 25px 110px 35px 15px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n    border-bottom: 1.4px solid rgb(175, 172, 172);\n}\n.task-item:last-child {\n    margin-bottom: 10px;\n}\n.task-priority {\n    grid-area: 1/1/2/2;\n    align-items: center; \n    display: flex;\n    justify-content: flex-start;\n}\n.circle {\n    height: 16px;\n    width:16px;\n    border-radius: 50%;\n    display: block;\n}\n.task-name {\n    grid-area: 1/2/2/4;\n    font-size: 1.1rem;\n}\n.task-due {\n    grid-area: 1/4/2/5;\n    text-align: end;\n    padding-right: 1rem;\n    padding-bottom: 0.2rem;\n    display: flex;\n    align-items:flex-end;\n    justify-content: flex-end;\n}\n.task-toggle {\n    grid-area: 1/5/2/6;\n    color: var(--heading-color);\n    font-size: 2rem;\n    font-weight: bold;\n    line-height: 1rem;\n    text-align: center;\n}\n.task-toggle:hover {\n    color: var(--border-color);\n    cursor: pointer;\n}\n.taskWrapper {\n    grid-area:2/2/3/6;\n    display: grid;\n    grid-template-columns: 1fr 25px 110px 35px ;\n    grid-template-rows: 0 0; \n    overflow: hidden;\n    transition: grid-template-rows 0.3s;\n}\n.showTask {\n    grid-template-rows: 1.7rem 1.7rem; \n    grid-template-rows: 1.7rem auto; \n}\n.task-list-name {\n    grid-area: 1/1/2/2;\n    display: flex;\n    align-items: center;\n}\n.task-edit {\n    grid-area: 1/2/2/3;\n    display: flex;\n    align-items: center;\n    justify-content:center;\n}\n.task-edit img {\n    height: 1.5rem;\n}\n.task-status {\n    grid-area: 1/3/2/4;\n    display: flex;\n    text-align: center;\n    justify-content: center;\n    align-items: center;    \n}\n.task-delete {\n    grid-area: 1/4/2/5;\n    display: flex;\n    align-items: center;\n    justify-content:center;\n    padding-bottom: -5px;\n}\n.task-delete img {\n    height: 1.6rem;\n}\n.task-info {\n    grid-area: 2/1/3/5;\n    padding-right: 1.7rem;\n    font-size: 0.95rem;\n    color: rgb(10, 10, 10);\n    font-style: italic;\n    padding-left: 8px;\n    padding-top: 1px;\n    line-height: 1.7rem;\n}\n\n.toggle {\n    display: none;\n}\n.noTasksMsg {\n    padding-top: 0.3rem;\n    padding-left: 0.5rem;\n    font-style: italic;\n}\ndialog{\n    min-width: 200px;\n    outline:none;\n}\nimg {\n    filter:var(--filter);\n}\nimg:hover {\n    cursor: pointer;\n    filter: var(--hover-filter);\n}\n.newTaskButton {\n    height: 50px;\n    width:50px;\n    background-color: var(--border-color);\n    border-radius: 50%;\n    display: inline-block;\n    text-align:center;\n    line-height: 47px;\n    font-size: 3rem;\n}\n.newTaskButton:hover {\n    background-color:var(--heading-color);\n}\n.footerButton {\n    background-color: var(--button-color);\n    width:fit-content;\n    padding:7px 15px;\n    border-radius: 4px;\n    margin-top: 12px;\n    font-size: 1.2rem;\n    color:white;\n}\n.button {\n    color:white;\n    font-weight: bold;\n}\n.button:hover {\n    background-color:var(--button-hover-color);\n    cursor: pointer;\n}\n\n@media screen and (max-width:520px) {\n.task-list-name {\n    grid-area: 2/2/3/5;\n}\n.task-item {\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 25px 1fr 25px 95px 35px 15px;\n}\n.task-priority {\n    grid-area: 1/1/2/2;\n    display: flex;\n    align-items:flex-start;\n    padding-top: 5px;\n}\n.task-name {\n    grid-area: 1/2/2/4;\n    line-height: 1.35rem;\n}\n.task-due {\n    grid-area: 1/4/2/5;\n    text-align: end;\n    padding-right: 0;\n    padding-bottom: 0.1rem;\n    display: flex;\n    align-items:flex-start;\n    justify-content: flex-end;\n}\n.task-toggle {\n    grid-area: 1/5/2/6;\n}\n.taskWrapper{\n    grid-template-rows: 0 0 0;\n}\n.showTask {\n    grid-template-rows: 1.7rem auto; \n}\n.task-list-name {\n    grid-area: 1/1/2/5;\n    justify-content: flex-start;\n    align-items: flex-end;\n    padding-left: 8px;\n}\n.task-edit {\n    grid-area: 1/5/2/6;\n}\n.task-status {\n    grid-area: 2/1/3/5;\n    text-align: start;\n    justify-content:start;\n    align-items: flex-end; \n    padding-left: 8px;\n}\n.task-delete {\n    grid-area: 2/5/3/6;\n}\n.task-info {\n    grid-area: 3/1/4/5;\n    padding-left: 8px;\n}\n/* body {\n    padding: 10px 30px;\n}     */\n} "],"sourceRoot":""}]);
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixFQUFFLE9BQU8sd0ZBQXdGLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxxQ0FBcUMsNEJBQTRCLHVCQUF1QiwrRUFBK0UsR0FBRyxjQUFjLDRCQUE0Qix1QkFBdUIsNEVBQTRFLEdBQUcs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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0Q7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdCQUFnQjtBQUN6RTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdCQUFnQjtBQUN6RTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzV3QmE7QUFDYix1QkFBdUI7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLDhFQUF1Qjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7O0FDNUxZO0FBQ2IsYUFBYTs7QUFFYixhQUFhLG1CQUFPLENB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SUFDL0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3JCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsS0FBSyxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUNNLFNBQVMsVUFBVSxDQUFDLFVBQWlCO0lBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFFLEVBQUMsS0FBRyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLFVBQVUsSUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0IsT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzthQUNJLENBQUM7WUFDRixPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztTQUFNLENBQUM7UUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztBQUNMLENBQUM7QUFBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGVzL2Zvcm0uY3NzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFJvdW5kaW5nTWV0aG9kLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL3Byb3RlY3RlZFRva2Vucy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluSG91cnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbk1pbnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluU2Vjb25kcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0RGF5T2ZZZWFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0UXVhcnRlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWtZZWFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2ludGxGb3JtYXREaXN0YW5jZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNWYWxpZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vlay5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMvZm9ybS5jc3M/NzRlYSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2NyaXB0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDM1cHggMzBweCA0MHB4IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNuZXdMaXN0RGlhbG9nIHtcbiAgICBwYWRkaW5nOiAzNXB4IDEycHggNDBweCAxMHB4O1xuICAgICYgZm9ybSB7XG4gICAgICAgIC8qIG1pbi13aWR0aDogMjQwcHg7ICovXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5mb3JtIHtcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBjb2xvcjpyZ2IoODIsIDgyLCA4Mik7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbWluLXdpZHRoOiAyOTVweDtcbn1cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOiAwO1xufVxubGkrbGkge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA5NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XG59XG5pbnB1dCwgc2VsZWN0IHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxLjlyZW07XG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW5wdXQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW5wdXRbdHlwZT1kYXRlXSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTpzb2xpZCAxcHggdmFyKC0taW5wdXQtY29sb3IpO1xufVxuLmJ1dHRvbnNSb3c+YnV0dG9uIHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAuM3JlbSAuOXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmJ1dHRvbnNSb3c+YnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG59XG4uYnV0dG9uc1JvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5saS5jaXJjbGUge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDozNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmxpLmNpcmNsZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNpcmNsZS1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XG59XG4uY2lyY2xlLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xufVxuLmNpcmNsZS1vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xufVxuLmNpcmNsZS1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZXk7XG59XG4uY2lyY2xlLWJsYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufVxuI25ld0NvbG9yRGlhbG9nIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xufVxuI25ld0NvbG9yRm9ybSB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNuZXdDb2xvckRpYWxvZyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAzNXB4IDMwcHggNDBweCAyMHB4O1xuICAgIHdpZHRoOjQwJTtcbn1cbiNjbG9zZURpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICBib3JkZXI6Mi41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzoycHggNHB4IDJweCA0cHg7XG4gICAgYWxpZ24tc2VsZjpmbGV4LWVuZDtcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuI25ld0NvbG9yRm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6MzBweDtcbiAgICBwYWRkaW5nOjA7XG59XG4jbmV3Q29sb3JEaWFsb2cge1xuICAgIHBhZGRpbmc6MTBweCAyMHB4IDI1cHggMjBweDtcbn1cbiNjb25maXJtRGVsZXRlRGlhbG9nIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgcGFkZGluZzozMHB4O1xufVxuLmRlbGV0Q29uZmlybU1zZyB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG4jY29uZmlybURlbGV0ZURpYWxvZyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNjb25maXJtRGVsZXRlRGlhbG9nIC5idXR0b25zUm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ5MHB4KSB7XG4gICAgZGlhbG9nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDM1cHggMTBweCA0MHB4IDEycHg7XG4gICAgfVxuICAgICNuZXdMaXN0RGlhbG9nIHtcbiAgICAgICAgcGFkZGluZzogMzVweCAycHggNDBweCAycHg7XG4gICAgICAgICYgZm9ybSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gICAgICAgICAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAubmV3TGlzdEZvcm0ge1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIGZvcm0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgICBjb2xvcjpyZ2IoODIsIDgyLCA4Mik7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIC8qIG1pbi13aWR0aDogMjk1cHg7ICovXG4gICAgfVxuICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbiAgICBmaWVsZHNldCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUI7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixTQUFTO0FBQ2I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCO1lBQ0ksY0FBYztZQUNkLFNBQVM7WUFDVCxzQkFBc0I7WUFDdEIscUJBQXFCOztRQUV6QjtJQUNKO0lBQ0E7UUFDSSxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLFNBQVM7SUFDYjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAzNXB4IDMwcHggNDBweCAyMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jbmV3TGlzdERpYWxvZyB7XFxuICAgIHBhZGRpbmc6IDM1cHggMTJweCA0MHB4IDEwcHg7XFxuICAgICYgZm9ybSB7XFxuICAgICAgICAvKiBtaW4td2lkdGg6IDI0MHB4OyAqL1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5mb3JtIHtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGNvbG9yOnJnYig4MiwgODIsIDgyKTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG1pbi13aWR0aDogMjk1cHg7XFxufVxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5saStsaSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogOTVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcXG59XFxuaW5wdXQsIHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDogMS45cmVtO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1pbnB1dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6c29saWQgMXB4IHZhcigtLWlucHV0LWNvbG9yKTtcXG59XFxuLmJ1dHRvbnNSb3c+YnV0dG9uIHtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC45cmVtO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuLmJ1dHRvbnNSb3c+YnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cXG4uYnV0dG9uc1JvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxubGkuY2lyY2xlIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5saS5jaXJjbGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jaXJjbGUtYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Ymx1ZTtcXG59XFxuLmNpcmNsZS1ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XFxufVxcbi5jaXJjbGUtb3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpvcmFuZ2U7XFxufVxcbi5jaXJjbGUtZ3JleSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JleTtcXG59XFxuLmNpcmNsZS1ibGFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XFxufVxcbiNuZXdDb2xvckRpYWxvZyB1bCBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4jbmV3Q29sb3JGb3JtIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jbmV3Q29sb3JEaWFsb2cge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogMzVweCAzMHB4IDQwcHggMjBweDtcXG4gICAgd2lkdGg6NDAlO1xcbn1cXG4jY2xvc2VEaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgYm9yZGVyOjIuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzoycHggNHB4IDJweCA0cHg7XFxuICAgIGFsaWduLXNlbGY6ZmxleC1lbmQ7XFxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4jbmV3Q29sb3JGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6MzBweDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG4jbmV3Q29sb3JEaWFsb2cge1xcbiAgICBwYWRkaW5nOjEwcHggMjBweCAyNXB4IDIwcHg7XFxufVxcbiNjb25maXJtRGVsZXRlRGlhbG9nIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBwYWRkaW5nOjMwcHg7XFxufVxcbi5kZWxldENvbmZpcm1Nc2cge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG4jY29uZmlybURlbGV0ZURpYWxvZyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbiNjb25maXJtRGVsZXRlRGlhbG9nIC5idXR0b25zUm93IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0OTBweCkge1xcbiAgICBkaWFsb2cge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDM1cHggMTBweCA0MHB4IDEycHg7XFxuICAgIH1cXG4gICAgI25ld0xpc3REaWFsb2cge1xcbiAgICAgICAgcGFkZGluZzogMzVweCAycHggNDBweCAycHg7XFxuICAgICAgICAmIGZvcm0ge1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcXG4gICAgICAgICAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgICAgICAgICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cXG5cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAubmV3TGlzdEZvcm0ge1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgICAgICBwYWRkaW5nOjA7XFxuICAgIH1cXG4gICAgZm9ybSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOnJnYig4MiwgODIsIDgyKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgcGFkZGluZzowO1xcbiAgICAgICAgLyogbWluLXdpZHRoOiAyOTVweDsgKi9cXG4gICAgfVxcbiAgICBpbnB1dCwgc2VsZWN0IHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG4gICAgZmllbGRzZXQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL3JvYm90by1yZWd1bGFyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9yb2JvdG8tYm9sZC13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvcm9ib3RvLW1lZGl1bS13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvcm9ib3RvLWl0YWxpYy13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuOnJvb3QsIDpyb290LmdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgLS1oZWFkaW5nLWNvbG9yOiAjNTY1NjU2O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjOGI4YjhiO1xuICAgIC0tYnV0dG9uLWNvbG9yOiAjNTY1NjU2O1xuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiM4MDdlN2Q7XG4gICAgLS1pbnB1dC1jb2xvcjogIzhiOGI4YjtcbiAgICAtLXRleHQ6cmdiKDc2LCA3NSwgNzUpO1xuICAgIC0tZmlsdGVyOiBpbnZlcnQoMzMlKSBzZXBpYSgxJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoODYlKTtcbiAgICAtLWhvdmVyLWZpbHRlcjogIGludmVydCgwJSkgc2VwaWEoNCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDMwOWRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDEwNyUpO1xufVxuOnJvb3QsIDpyb290Lm9yYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNTIsIDI1Mik7XG4gICAgLS1oZWFkaW5nLWNvbG9yOiByZ2IoMjU1LCAxNTksIDI4KTtcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDI1NSwgMTkxLCAxMDUpO1xuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoMjM2LCAxNTksIDQyKTtcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjpyZ2IoMjU1LCAxNTksIDI4KTtcbiAgICAtLWlucHV0LWNvbG9yOiByZ2IoMjU1LCAxOTEsIDEwNSk7XG4gICAgLS10ZXh0OnJnYigxMTcsIDExNywgMTE3KTtcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDc3JSkgc2VwaWEoMzUlKSBzYXR1cmF0ZSg0NDYwJSkgaHVlLXJvdGF0ZSgzNDRkZWcpIGJyaWdodG5lc3MoMTAxJSkgY29udHJhc3QoMTAxJSk7XG4gICAgLS1ob3Zlci1maWx0ZXI6IGludmVydCg5NSUpIHNlcGlhKDI0JSkgc2F0dXJhdGUoNTcwOCUpIGh1ZS1yb3RhdGUoMzA4ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoMTAzJSk7XG59XG46cm9vdCwgOnJvb3QuYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAtLWhlYWRpbmctY29sb3I6ICMxNTI5ODU7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwOTJmOTY7XG4gICAgLS1idXR0b24tY29sb3I6ICMwOTJmOTY7XG4gICAgLS1idXR0b24taG92ZXItY29sb3I6ICMxOTRiOGI7XG4gICAgLS1pbnB1dC1jb2xvcjogIzA5MmY5NjtcbiAgICAtLXRleHQ6IzFEMjczMTtcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoNzklKSBzYXR1cmF0ZSg1MzYlKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5OSUpO1xuICAgIC0taG92ZXItZmlsdGVyOiBpbnZlcnQoMzclKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDQ2OSUpIGh1ZS1yb3RhdGUoMTU4ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTIlKTtcbn1cbjpyb290LCA6cm9vdC5ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMWEyOTMwIDtcbiAgICAtLWhlYWRpbmctY29sb3I6ICNjNWMxYzA7XG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIC0tYnV0dG9uLWNvbG9yOiAjYjhiOGI4O1xuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiAjOTQ5MTkwO1xuICAgIC0taW5wdXQtY29sb3I6ICMxYTI5MzA7XG4gICAgLS10ZXh0OndoaXRlO1xuICAgIC0tZmlsdGVyOiBpbnZlcnQoNiUpIHNlcGlhKDklKSBzYXR1cmF0ZSgyNTkzJSkgaHVlLXJvdGF0ZSgxMDlkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg5NSUpO1xuICAgIC0taG92ZXItZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDQlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgzMDlkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCgxMDclKTtcbiAgICAmIC5uZXdUYXNrQnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcbiAgICB9XG4gICAgJiAubmV3VGFza0J1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG4gICAgfVxuICAgIC8qICYgaW5wdXQge1xuICAgIG91dGxpbmU6IHNvbGlkIDJweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB9ICovXG59XG46cm9vdCwgOnJvb3QuZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgLS1ib3JkZXItY29sb3I6ICMwMDk5MzM7XG4gICAgLS1oZWFkaW5nLWNvbG9yOiByZ2IoMSwgMTEyLCAxKTtcbiAgICAtLWJ1dHRvbi1jb2xvcjogIzAwOTkzMztcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjpyZ2IoMSwgMTEyLCAxKTsgXG4gICAgLS1pbnB1dC1jb2xvcjogIzAwOTkzMztcbiAgICAtLXRleHQ6IzFhMjkzMDtcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDI0JSkgc2VwaWEoNTQlKSBzYXR1cmF0ZSgyNjY1JSkgaHVlLXJvdGF0ZSg5NWRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDk5JSk7XG4gICAgLS1ob3Zlci1maWx0ZXI6IGludmVydCgyOSUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMTM1OSUpIGh1ZS1yb3RhdGUoMTIxZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoMTAxJSk7XG59XG5odG1sLCBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggY2FsYygyOHB4ICsgMS41dncpIDE1cHg7XG4gICAgbWluLXdpZHRoOiAyODBweDtcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgIG1hcmdpbjowcHggYXV0bztcbiB9XG5oZWFkZXIsZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjdyZW07XG4gfVxuZm9vdGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5oZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5oMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zb3J0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6dmFyKC0tdGV4dCk7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uc29ydC10ZXh0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc29ydC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOjEwcHggMTZweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBsZWZ0Oi0zNnB4O1xuICAgIHRvcDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcztcbn1cbi5zb3J0LW1lbnUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOnZhcigtLXRleHQpO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIG91dGxpbmU6IHNvbGlkIDNweCB2YXIoLS1idXR0b24tY29sb3IpO1xuICAgIG9wYWNpdHk6MTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc29ydC1tZW51IHVsPmxpIHtcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG59XG4uc29ydC1tZW51IHVsPmxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhlYWRpbmctY29sb3IpO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5zb3J0LW1lbnUgdWwgbGkrbGkge1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYigxNzUsIDE3MiwgMTcyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xufVxuLmNvbnRlbnQge1xuICAgIGJvcmRlcjogNC45cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWluLWhlaWdodDogNzUlO1xuICAgIHBhZGRpbmc6NHB4IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIG1pbi13aWR0aDogMjYwcHg7XG4gfVxuLnRhc2stbGlzdCB7XG4gICAgbWluLXdpZHRoOjI2NXB4IDtcbn1cbi50YXNrLWxpc3QtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIuNHJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweCAxZnI7XG4gICAgcGFkZGluZzoxcHggOHB4IDVweCAxcHg7XG59XG4gaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xuIH0gXG4gaDI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gLmxpc3ROYW1lVGl0bGUge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gfVxuLmxpc3QtZGVsZXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDo4cHg7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5saXN0LWRlbGV0ZSBpbWcge1xuICAgIGhlaWdodDogMS43cmVtO1xufVxuLmhpZGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xufVxuLmxpc3QtdG9nZ2xlIHtcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOjIwcHg7XG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0LXRvZ2dsZTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1pbnVzIHtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XG59XG4udGFza0xpc3RXcmFwcGVyIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjsgXG4gICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDAuM3M7XG59XG4uc2hvd0xpc3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnI7IFxufVxuLmlubmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRhc2staXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuN3JlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIDI1cHggMTEwcHggMzVweCAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBib3JkZXItYm90dG9tOiAxLjRweCBzb2xpZCByZ2IoMTc1LCAxNzIsIDE3Mik7XG59XG4udGFzay1pdGVtOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGFzay1wcmlvcml0eSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmNpcmNsZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOjE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhc2stbmFtZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi80O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnRhc2stZHVlIHtcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4udGFzay10b2dnbGUge1xuICAgIGdyaWQtYXJlYTogMS81LzIvNjtcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YXNrLXRvZ2dsZTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2tXcmFwcGVyIHtcbiAgICBncmlkLWFyZWE6Mi8yLzMvNjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI1cHggMTEwcHggMzVweCA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwIDA7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDAuM3M7XG59XG4uc2hvd1Rhc2sge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43cmVtIDEuN3JlbTsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdyZW0gYXV0bzsgXG59XG4udGFzay1saXN0LW5hbWUge1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFzay1lZGl0IHtcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG4udGFzay1lZGl0IGltZyB7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG59XG4udGFzay1zdGF0dXMge1xuICAgIGdyaWQtYXJlYTogMS8zLzIvNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcbn1cbi50YXNrLWRlbGV0ZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAtNXB4O1xufVxuLnRhc2stZGVsZXRlIGltZyB7XG4gICAgaGVpZ2h0OiAxLjZyZW07XG59XG4udGFzay1pbmZvIHtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzU7XG4gICAgcGFkZGluZy1yaWdodDogMS43cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBjb2xvcjogcmdiKDEwLCAxMCwgMTApO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG59XG5cbi50b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubm9UYXNrc01zZyB7XG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5kaWFsb2d7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBvdXRsaW5lOm5vbmU7XG59XG5pbWcge1xuICAgIGZpbHRlcjp2YXIoLS1maWx0ZXIpO1xufVxuaW1nOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiB2YXIoLS1ob3Zlci1maWx0ZXIpO1xufVxuLm5ld1Rhc2tCdXR0b24ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDo1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNDdweDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG4ubmV3VGFza0J1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1oZWFkaW5nLWNvbG9yKTtcbn1cbi5mb290ZXJCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzo3cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5idXR0b24ge1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MjBweCkge1xuLnRhc2stbGlzdC1uYW1lIHtcbiAgICBncmlkLWFyZWE6IDIvMi8zLzU7XG59XG4udGFzay1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIDI1cHggOTVweCAzNXB4IDE1cHg7XG59XG4udGFzay1wcmlvcml0eSB7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnRhc2stbmFtZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzIvMi80O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1cmVtO1xufVxuLnRhc2stZHVlIHtcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi50YXNrLXRvZ2dsZSB7XG4gICAgZ3JpZC1hcmVhOiAxLzUvMi82O1xufVxuLnRhc2tXcmFwcGVye1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMCAwIDA7XG59XG4uc2hvd1Rhc2sge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43cmVtIGF1dG87IFxufVxuLnRhc2stbGlzdC1uYW1lIHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi50YXNrLWVkaXQge1xuICAgIGdyaWQtYXJlYTogMS81LzIvNjtcbn1cbi50YXNrLXN0YXR1cyB7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy81O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDpzdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLnRhc2stZGVsZXRlIHtcbiAgICBncmlkLWFyZWE6IDIvNS8zLzY7XG59XG4udGFzay1pbmZvIHtcbiAgICBncmlkLWFyZWE6IDMvMS80LzU7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4vKiBib2R5IHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59ICAgICAqL1xufSBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNERBQXdFO0FBQzVFO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDREQUFxRTtBQUN6RTtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw0REFBdUU7QUFDM0U7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNERBQXVFO0lBQ3ZFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDZGQUE2RjtJQUM3RixvR0FBb0c7QUFDeEc7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtR0FBbUc7SUFDbkcsd0dBQXdHO0FBQzVHO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsaUdBQWlHO0lBQ2pHLHNHQUFzRztBQUMxRztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJ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QTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7T0FFTztBQUNQXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL3JvYm90by1yZWd1bGFyLXdlYmZvbnQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvcm9ib3RvLWJvbGQtd2ViZm9udC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9yb2JvdG8tbWVkaXVtLXdlYmZvbnQud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvcm9ib3RvLWl0YWxpYy13ZWJmb250LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuOnJvb3QsIDpyb290LmdyZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICAtLWhlYWRpbmctY29sb3I6ICM1NjU2NTY7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjOGI4YjhiO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogIzU2NTY1NjtcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IzgwN2U3ZDtcXG4gICAgLS1pbnB1dC1jb2xvcjogIzhiOGI4YjtcXG4gICAgLS10ZXh0OnJnYig3NiwgNzUsIDc1KTtcXG4gICAgLS1maWx0ZXI6IGludmVydCgzMyUpIHNlcGlhKDElKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4NiUpO1xcbiAgICAtLWhvdmVyLWZpbHRlcjogIGludmVydCgwJSkgc2VwaWEoNCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDMwOWRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDEwNyUpO1xcbn1cXG46cm9vdCwgOnJvb3Qub3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNTIsIDI1Mik7XFxuICAgIC0taGVhZGluZy1jb2xvcjogcmdiKDI1NSwgMTU5LCAyOCk7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxOTEsIDEwNSk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoMjM2LCAxNTksIDQyKTtcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6cmdiKDI1NSwgMTU5LCAyOCk7XFxuICAgIC0taW5wdXQtY29sb3I6IHJnYigyNTUsIDE5MSwgMTA1KTtcXG4gICAgLS10ZXh0OnJnYigxMTcsIDExNywgMTE3KTtcXG4gICAgLS1maWx0ZXI6IGludmVydCg3NyUpIHNlcGlhKDM1JSkgc2F0dXJhdGUoNDQ2MCUpIGh1ZS1yb3RhdGUoMzQ0ZGVnKSBicmlnaHRuZXNzKDEwMSUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICAtLWhvdmVyLWZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMjQlKSBzYXR1cmF0ZSg1NzA4JSkgaHVlLXJvdGF0ZSgzMDhkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCgxMDMlKTtcXG59XFxuOnJvb3QsIDpyb290LmJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICAtLWhlYWRpbmctY29sb3I6ICMxNTI5ODU7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDkyZjk2O1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogIzA5MmY5NjtcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6ICMxOTRiOGI7XFxuICAgIC0taW5wdXQtY29sb3I6ICMwOTJmOTY7XFxuICAgIC0tdGV4dDojMUQyNzMxO1xcbiAgICAtLWZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoNzklKSBzYXR1cmF0ZSg1MzYlKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5OSUpO1xcbiAgICAtLWhvdmVyLWZpbHRlcjogaW52ZXJ0KDM3JSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSg0NjklKSBodWUtcm90YXRlKDE1OGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDkyJSk7XFxufVxcbjpyb290LCA6cm9vdC5ibGFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzFhMjkzMCA7XFxuICAgIC0taGVhZGluZy1jb2xvcjogI2M1YzFjMDtcXG4gICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogI2I4YjhiODtcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6ICM5NDkxOTA7XFxuICAgIC0taW5wdXQtY29sb3I6ICMxYTI5MzA7XFxuICAgIC0tdGV4dDp3aGl0ZTtcXG4gICAgLS1maWx0ZXI6IGludmVydCg2JSkgc2VwaWEoOSUpIHNhdHVyYXRlKDI1OTMlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDk1JSk7XFxuICAgIC0taG92ZXItZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDQlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgzMDlkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCgxMDclKTtcXG4gICAgJiAubmV3VGFza0J1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgICB9XFxuICAgICYgLm5ld1Rhc2tCdXR0b246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG4gICAgfVxcbiAgICAvKiAmIGlucHV0IHtcXG4gICAgb3V0bGluZTogc29saWQgMnB4IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICB9ICovXFxufVxcbjpyb290LCA6cm9vdC5ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDA5OTMzO1xcbiAgICAtLWhlYWRpbmctY29sb3I6IHJnYigxLCAxMTIsIDEpO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogIzAwOTkzMztcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6cmdiKDEsIDExMiwgMSk7IFxcbiAgICAtLWlucHV0LWNvbG9yOiAjMDA5OTMzO1xcbiAgICAtLXRleHQ6IzFhMjkzMDtcXG4gICAgLS1maWx0ZXI6IGludmVydCgyNCUpIHNlcGlhKDU0JSkgc2F0dXJhdGUoMjY2NSUpIGh1ZS1yb3RhdGUoOTVkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg5OSUpO1xcbiAgICAtLWhvdmVyLWZpbHRlcjogaW52ZXJ0KDI5JSkgc2VwaWEoOTglKSBzYXR1cmF0ZSgxMzU5JSkgaHVlLXJvdGF0ZSgxMjFkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCgxMDElKTtcXG59XFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCBjYWxjKDI4cHggKyAxLjV2dykgMTVweDtcXG4gICAgbWluLXdpZHRoOiAyODBweDtcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXG4gICAgbWFyZ2luOjBweCBhdXRvO1xcbiB9XFxuaGVhZGVyLGZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcXG4gfVxcbmZvb3RlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaGVhZGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuaDEge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5zb3J0IHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6dmFyKC0tdGV4dCk7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc29ydC10ZXh0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnNvcnQtd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6MTBweCAxNnB4O1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgbGVmdDotMzZweDtcXG4gICAgdG9wOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcztcXG59XFxuLnNvcnQtbWVudSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjp2YXIoLS10ZXh0KTtcXG4gICAgcGFkZGluZzo1cHg7XFxuICAgIG91dGxpbmU6IHNvbGlkIDNweCB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgICBvcGFjaXR5OjE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5zb3J0LW1lbnUgdWw+bGkge1xcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLnNvcnQtbWVudSB1bD5saTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taGVhZGluZy1jb2xvcik7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uc29ydC1tZW51IHVsIGxpK2xpIHtcXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmdiKDE3NSwgMTcyLCAxNzIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBib3JkZXI6IDQuOXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWluLWhlaWdodDogNzUlO1xcbiAgICBwYWRkaW5nOjRweCAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIG1pbi13aWR0aDogMjYwcHg7XFxuIH1cXG4udGFzay1saXN0IHtcXG4gICAgbWluLXdpZHRoOjI2NXB4IDtcXG59XFxuLnRhc2stbGlzdC1oZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyLjRyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMHB4IDFmcjtcXG4gICAgcGFkZGluZzoxcHggOHB4IDVweCAxcHg7XFxufVxcbiBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGluZy1jb2xvcik7XFxuIH0gXFxuIGgyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiB9XFxuIC5saXN0TmFtZVRpdGxlIHtcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuIH1cXG4ubGlzdC1kZWxldGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDo4cHg7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5saXN0LWRlbGV0ZSBpbWcge1xcbiAgICBoZWlnaHQ6IDEuN3JlbTtcXG59XFxuLmhpZGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5saXN0LXRvZ2dsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGdyaWQtYXJlYTogMS8zLzIvNDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5saXN0LXRvZ2dsZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5taW51cyB7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxufVxcbi50YXNrTGlzdFdyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyOyBcXG4gICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDAuM3M7XFxufVxcbi5zaG93TGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnI7IFxcbn1cXG4uaW5uZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjVweCAxMTBweCAzNXB4IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDEuNHB4IHNvbGlkIHJnYigxNzUsIDE3MiwgMTcyKTtcXG59XFxuLnRhc2staXRlbTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5jaXJjbGUge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOjE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi50YXNrLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzQ7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4udGFzay1kdWUge1xcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi50YXNrLXRvZ2dsZSB7XFxuICAgIGdyaWQtYXJlYTogMS81LzIvNjtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRpbmctY29sb3IpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGFzay10b2dnbGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFza1dyYXBwZXIge1xcbiAgICBncmlkLWFyZWE6Mi8yLzMvNjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjVweCAxMTBweCAzNXB4IDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwIDA7IFxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMC4zcztcXG59XFxuLnNob3dUYXNrIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdyZW0gMS43cmVtOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjdyZW0gYXV0bzsgXFxufVxcbi50YXNrLWxpc3QtbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2stZWRpdCB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuLnRhc2stZWRpdCBpbWcge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRhc2stc3RhdHVzIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXG59XFxuLnRhc2stZGVsZXRlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLTVweDtcXG59XFxuLnRhc2stZGVsZXRlIGltZyB7XFxuICAgIGhlaWdodDogMS42cmVtO1xcbn1cXG4udGFzay1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy81O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjdyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDFweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ub1Rhc2tzTXNnIHtcXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGlhbG9ne1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcbmltZyB7XFxuICAgIGZpbHRlcjp2YXIoLS1maWx0ZXIpO1xcbn1cXG5pbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogdmFyKC0taG92ZXItZmlsdGVyKTtcXG59XFxuLm5ld1Rhc2tCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOjUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDQ3cHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLm5ld1Rhc2tCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhlYWRpbmctY29sb3IpO1xcbn1cXG4uZm9vdGVyQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6N3B4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG4uYnV0dG9uIHtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTIwcHgpIHtcXG4udGFzay1saXN0LW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzU7XFxufVxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMjVweCA5NXB4IDM1cHggMTVweDtcXG59XFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi50YXNrLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1cmVtO1xcbn1cXG4udGFzay1kdWUge1xcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLnRhc2stdG9nZ2xlIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzUvMi82O1xcbn1cXG4udGFza1dyYXBwZXJ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMCAwIDA7XFxufVxcbi5zaG93VGFzayB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS43cmVtIGF1dG87IFxcbn1cXG4udGFzay1saXN0LW5hbWUge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuLnRhc2stZWRpdCB7XFxuICAgIGdyaWQtYXJlYTogMS81LzIvNjtcXG59XFxuLnRhc2stc3RhdHVzIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy81O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IFxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuLnRhc2stZGVsZXRlIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcbn1cXG4udGFzay1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC81O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuLyogYm9keSB7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG59ICAgICAqL1xcbn0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmFkZExlYWRpbmdaZXJvcyA9IGFkZExlYWRpbmdaZXJvcztcbmZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdExvY2FsZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW5kZXguZW5VUztcbiAgfSxcbn0pO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi9sb2NhbGUvZW4tVVMuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZ2V0RGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucztcbmV4cG9ydHMuc2V0RGVmYXVsdE9wdGlvbnMgPSBzZXREZWZhdWx0T3B0aW9ucztcblxubGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmZvcm1hdHRlcnMgPSB2b2lkIDA7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4uLy4uL2dldERheU9mWWVhci5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4uLy4uL2dldElTT1dlZWsuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuLi8uLi9nZXRJU09XZWVrWWVhci5qc1wiKTtcbnZhciBfaW5kZXg0ID0gcmVxdWlyZShcIi4uLy4uL2dldFdlZWsuanNcIik7XG52YXIgX2luZGV4NSA9IHJlcXVpcmUoXCIuLi8uLi9nZXRXZWVrWWVhci5qc1wiKTtcblxudmFyIF9pbmRleDYgPSByZXF1aXJlKFwiLi4vYWRkTGVhZGluZ1plcm9zLmpzXCIpO1xudmFyIF9pbmRleDcgPSByZXF1aXJlKFwiLi9saWdodEZvcm1hdHRlcnMuanNcIik7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5jb25zdCBmb3JtYXR0ZXJzID0gKGV4cG9ydHMuZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfaW5kZXg3LmxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9ICgwLCBfaW5kZXg1LmdldFdlZWtZZWFyKShkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gKDAsIF9pbmRleDMuZ2V0SVNPV2Vla1llYXIpKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gX2luZGV4Ny5saWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSAoMCwgX2luZGV4NC5nZXRXZWVrKShkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9ICgwLCBfaW5kZXgyLmdldElTT1dlZWspKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9pbmRleDcubGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSAoMCwgX2luZGV4LmdldERheU9mWWVhcikoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9pbmRleDcubGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfaW5kZXg3LmxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfaW5kZXg3LmxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfaW5kZXg3LmxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIF9pbmRleDcubGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYyhkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuICgwLCBfaW5kZXg2LmFkZExlYWRpbmdaZXJvcykodGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufSk7XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShtaW51dGVzLCAyKVxuICApO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHJldHVybiBzaWduICsgKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gKDAsIF9pbmRleDYuYWRkTGVhZGluZ1plcm9zKShNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSAoMCwgX2luZGV4Ni5hZGRMZWFkaW5nWmVyb3MpKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMubGlnaHRGb3JtYXR0ZXJzID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi9hZGRMZWFkaW5nWmVyb3MuanNcIik7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IChleHBvcnRzLmxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiAoMCwgX2luZGV4LmFkZExlYWRpbmdaZXJvcykoXG4gICAgICB0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsXG4gICAgICB0b2tlbi5sZW5ndGgsXG4gICAgKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIlxuICAgICAgPyBTdHJpbmcobW9udGggKyAxKVxuICAgICAgOiAoMCwgX2luZGV4LmFkZExlYWRpbmdaZXJvcykobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gKDAsIF9pbmRleC5hZGRMZWFkaW5nWmVyb3MpKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuICgwLCBfaW5kZXguYWRkTGVhZGluZ1plcm9zKShcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLFxuICAgICAgdG9rZW4ubGVuZ3RoLFxuICAgICk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiAoMCwgX2luZGV4LmFkZExlYWRpbmdaZXJvcykoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuICgwLCBfaW5kZXguYWRkTGVhZGluZ1plcm9zKShkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiAoMCwgX2luZGV4LmFkZExlYWRpbmdaZXJvcykoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuICgwLCBfaW5kZXguYWRkTGVhZGluZ1plcm9zKShmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmxvbmdGb3JtYXR0ZXJzID0gdm9pZCAwO1xuXG5jb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmNvbnN0IGxvbmdGb3JtYXR0ZXJzID0gKGV4cG9ydHMubG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5nZXRSb3VuZGluZ01ldGhvZCA9IGdldFJvdW5kaW5nTWV0aG9kO1xuXG5mdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIChudW1iZXIpID0+IHtcbiAgICBjb25zdCByb3VuZCA9IG1ldGhvZCA/IE1hdGhbbWV0aG9kXSA6IE1hdGgudHJ1bmM7XG4gICAgY29uc3QgcmVzdWx0ID0gcm91bmQobnVtYmVyKTtcbiAgICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbiAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiA9IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW47XG5leHBvcnRzLmlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiA9IGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbjtcbmV4cG9ydHMud2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvciA9IHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3I7XG5jb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gZGF5T2ZZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5zZWNvbmRzSW5ZZWFyID1cbiAgZXhwb3J0cy5zZWNvbmRzSW5XZWVrID1cbiAgZXhwb3J0cy5zZWNvbmRzSW5RdWFydGVyID1cbiAgZXhwb3J0cy5zZWNvbmRzSW5Nb250aCA9XG4gIGV4cG9ydHMuc2Vjb25kc0luTWludXRlID1cbiAgZXhwb3J0cy5zZWNvbmRzSW5Ib3VyID1cbiAgZXhwb3J0cy5zZWNvbmRzSW5EYXkgPVxuICBleHBvcnRzLnF1YXJ0ZXJzSW5ZZWFyID1cbiAgZXhwb3J0cy5tb250aHNJblllYXIgPVxuICBleHBvcnRzLm1vbnRoc0luUXVhcnRlciA9XG4gIGV4cG9ydHMubWludXRlc0luWWVhciA9XG4gIGV4cG9ydHMubWludXRlc0luTW9udGggPVxuICBleHBvcnRzLm1pbnV0ZXNJbkhvdXIgPVxuICBleHBvcnRzLm1pbnV0ZXNJbkRheSA9XG4gIGV4cG9ydHMubWluVGltZSA9XG4gIGV4cG9ydHMubWlsbGlzZWNvbmRzSW5XZWVrID1cbiAgZXhwb3J0cy5taWxsaXNlY29uZHNJblNlY29uZCA9XG4gIGV4cG9ydHMubWlsbGlzZWNvbmRzSW5NaW51dGUgPVxuICBleHBvcnRzLm1pbGxpc2Vjb25kc0luSG91ciA9XG4gIGV4cG9ydHMubWlsbGlzZWNvbmRzSW5EYXkgPVxuICBleHBvcnRzLm1heFRpbWUgPVxuICBleHBvcnRzLmRheXNJblllYXIgPVxuICBleHBvcnRzLmRheXNJbldlZWsgPVxuICAgIHZvaWQgMDsgLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5jb25zdCBkYXlzSW5XZWVrID0gKGV4cG9ydHMuZGF5c0luV2VlayA9IDcpO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuY29uc3QgZGF5c0luWWVhciA9IChleHBvcnRzLmRheXNJblllYXIgPSAzNjUuMjQyNSk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCJkYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuY29uc3QgbWF4VGltZSA9IChleHBvcnRzLm1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcImRhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuY29uc3QgbWluVGltZSA9IChleHBvcnRzLm1pblRpbWUgPSAtbWF4VGltZSk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IChleHBvcnRzLm1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5jb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IChleHBvcnRzLm1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDApO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5jb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IChleHBvcnRzLm1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDApO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IChleHBvcnRzLm1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDApO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5jb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IChleHBvcnRzLm1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuY29uc3QgbWludXRlc0luWWVhciA9IChleHBvcnRzLm1pbnV0ZXNJblllYXIgPSA1MjU2MDApO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuY29uc3QgbWludXRlc0luTW9udGggPSAoZXhwb3J0cy5taW51dGVzSW5Nb250aCA9IDQzMjAwKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuY29uc3QgbWludXRlc0luRGF5ID0gKGV4cG9ydHMubWludXRlc0luRGF5ID0gMTQ0MCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuY29uc3QgbWludXRlc0luSG91ciA9IChleHBvcnRzLm1pbnV0ZXNJbkhvdXIgPSA2MCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmNvbnN0IG1vbnRoc0luUXVhcnRlciA9IChleHBvcnRzLm1vbnRoc0luUXVhcnRlciA9IDMpO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5jb25zdCBtb250aHNJblllYXIgPSAoZXhwb3J0cy5tb250aHNJblllYXIgPSAxMik7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gKGV4cG9ydHMucXVhcnRlcnNJblllYXIgPSA0KTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5jb25zdCBzZWNvbmRzSW5Ib3VyID0gKGV4cG9ydHMuc2Vjb25kc0luSG91ciA9IDM2MDApO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5jb25zdCBzZWNvbmRzSW5NaW51dGUgPSAoZXhwb3J0cy5zZWNvbmRzSW5NaW51dGUgPSA2MCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmNvbnN0IHNlY29uZHNJbkRheSA9IChleHBvcnRzLnNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNCk7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuY29uc3Qgc2Vjb25kc0luV2VlayA9IChleHBvcnRzLnNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3KTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5jb25zdCBzZWNvbmRzSW5ZZWFyID0gKGV4cG9ydHMuc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXIpO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5jb25zdCBzZWNvbmRzSW5Nb250aCA9IChleHBvcnRzLnNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyKTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5jb25zdCBzZWNvbmRzSW5RdWFydGVyID0gKGV4cG9ydHMuc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuY29uc3RydWN0RnJvbSA9IGNvbnN0cnVjdEZyb207XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vY29uc3RhbnRzLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9zdGFydE9mRGF5LmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMuanNcIik7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9ICgwLCBfaW5kZXgyLnN0YXJ0T2ZEYXkpKGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gKDAsIF9pbmRleDIuc3RhcnRPZkRheSkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLVxuICAgICgwLCBfaW5kZXgzLmdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMpKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLVxuICAgICgwLCBfaW5kZXgzLmdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMpKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoXG4gICAgKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBfaW5kZXgubWlsbGlzZWNvbmRzSW5EYXksXG4gICk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSAoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gKDAsIF9pbmRleC50b0RhdGUpKGRhdGVSaWdodCk7XG5cbiAgY29uc3QgeWVhckRpZmYgPSBfZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIF9kYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGhEaWZmID0gX2RhdGVMZWZ0LmdldE1vbnRoKCkgLSBfZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG5cbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnM7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vZ2V0UXVhcnRlci5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnNcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG5cbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgcXVhcnRlcnMgYXJlIGJldHdlZW4gMzEgRGVjZW1iZXIgMjAxMyBhbmQgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAzXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSAoMCwgX2luZGV4Mi50b0RhdGUpKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9ICgwLCBfaW5kZXgyLnRvRGF0ZSkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB5ZWFyRGlmZiA9IF9kYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gX2RhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBxdWFydGVyRGlmZiA9XG4gICAgKDAsIF9pbmRleC5nZXRRdWFydGVyKShfZGF0ZUxlZnQpIC0gKDAsIF9pbmRleC5nZXRRdWFydGVyKShfZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4geWVhckRpZmYgKiA0ICsgcXVhcnRlckRpZmY7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3M7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vY29uc3RhbnRzLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9zdGFydE9mV2Vlay5qc1wiKTtcblxudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMuanNcIik7XG5cbi8qKlxuICogVGhlIHtAbGluayBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrc1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHdlZWtzIGFyZSBiZXR3ZWVuIDUgSnVseSAyMDE0IGFuZCAyMCBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDUpXG4gKiApXG4gKiAvLz0+IDNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSxcbiAqIC8vIGhvdyBtYW55IGNhbGVuZGFyIHdlZWtzIGFyZSBiZXR3ZWVuIDUgSnVseSAyMDE0IGFuZCAyMCBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDUpLFxuICogICB7IHdlZWtTdGFydHNPbjogMSB9XG4gKiApXG4gKiAvLz0+IDJcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IHN0YXJ0T2ZXZWVrTGVmdCA9ICgwLCBfaW5kZXgyLnN0YXJ0T2ZXZWVrKShkYXRlTGVmdCwgb3B0aW9ucyk7XG4gIGNvbnN0IHN0YXJ0T2ZXZWVrUmlnaHQgPSAoMCwgX2luZGV4Mi5zdGFydE9mV2VlaykoZGF0ZVJpZ2h0LCBvcHRpb25zKTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZldlZWtMZWZ0IC1cbiAgICAoMCwgX2luZGV4My5nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKShzdGFydE9mV2Vla0xlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZXZWVrUmlnaHQgLVxuICAgICgwLCBfaW5kZXgzLmdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMpKHN0YXJ0T2ZXZWVrUmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXlzIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICAodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIF9pbmRleC5taWxsaXNlY29uZHNJbldlZWssXG4gICk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnM7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnNcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG5cbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgeWVhcnMgYXJlIGJldHdlZW4gMzEgRGVjZW1iZXIgMjAxMyBhbmQgMTEgRmVicnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAyXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBfZGF0ZUxlZnQgPSAoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZUxlZnQpO1xuICBjb25zdCBfZGF0ZVJpZ2h0ID0gKDAsIF9pbmRleC50b0RhdGUpKGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuIF9kYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gX2RhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmRpZmZlcmVuY2VJbkhvdXJzID0gZGlmZmVyZW5jZUluSG91cnM7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vX2xpYi9nZXRSb3VuZGluZ01ldGhvZC5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vY29uc3RhbnRzLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMuanNcIik7XG5cbi8qKlxuICogVGhlIHtAbGluayBkaWZmZXJlbmNlSW5Ib3Vyc30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgaG91cnNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgaG91cnMgYXJlIGJldHdlZW4gMiBKdWx5IDIwMTQgMDY6NTA6MDAgYW5kIDIgSnVseSAyMDE0IDE5OjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluSG91cnMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE5LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgNTApXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgKDAsIF9pbmRleDMuZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvXG4gICAgX2luZGV4Mi5taWxsaXNlY29uZHNJbkhvdXI7XG4gIHJldHVybiAoMCwgX2luZGV4LmdldFJvdW5kaW5nTWV0aG9kKShvcHRpb25zPy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJldHVybiArKDAsIF9pbmRleC50b0RhdGUpKGRhdGVMZWZ0KSAtICsoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZVJpZ2h0KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5kaWZmZXJlbmNlSW5NaW51dGVzID0gZGlmZmVyZW5jZUluTWludXRlcztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9fbGliL2dldFJvdW5kaW5nTWV0aG9kLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9jb25zdGFudHMuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5qc1wiKTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJbk1pbnV0ZXN9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHNpZ25lZCBudW1iZXIgb2YgZnVsbCAocm91bmRlZCB0b3dhcmRzIDApIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBtaW51dGVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbnV0ZXMgYXJlIGJldHdlZW4gMiBKdWx5IDIwMTQgMTI6MDc6NTkgYW5kIDIgSnVseSAyMDE0IDEyOjIwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWludXRlcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDcsIDU5KVxuICogKVxuICogLy89PiAxMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaW51dGVzIGFyZSBiZXR3ZWVuIDEwOjAxOjU5IGFuZCAxMDowMDowMFxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWludXRlcyhcbiAqICAgbmV3IERhdGUoMjAwMCwgMCwgMSwgMTAsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDAwLCAwLCAxLCAxMCwgMSwgNTkpXG4gKiApXG4gKiAvLz0+IC0xXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID1cbiAgICAoMCwgX2luZGV4My5kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC9cbiAgICBfaW5kZXgyLm1pbGxpc2Vjb25kc0luTWludXRlO1xuICByZXR1cm4gKDAsIF9pbmRleC5nZXRSb3VuZGluZ01ldGhvZCkob3B0aW9ucz8ucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmRpZmZlcmVuY2VJblNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL19saWIvZ2V0Um91bmRpbmdNZXRob2QuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy5qc1wiKTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGRpZmZlcmVuY2VJblNlY29uZHN9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRpZmYgPVxuICAgICgwLCBfaW5kZXgyLmRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcykoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gKDAsIF9pbmRleC5nZXRSb3VuZGluZ01ldGhvZCkob3B0aW9ucz8ucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmZvcm1hdCA9IGV4cG9ydHMuZm9ybWF0RGF0ZSA9IGZvcm1hdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZvcm1hdHRlcnNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2luZGV4My5mb3JtYXR0ZXJzO1xuICB9LFxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb25nRm9ybWF0dGVyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaW5kZXg0LmxvbmdGb3JtYXR0ZXJzO1xuICB9LFxufSk7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLmpzXCIpO1xudmFyIF9pbmRleDQgPSByZXF1aXJlKFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5qc1wiKTtcbnZhciBfaW5kZXg1ID0gcmVxdWlyZShcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMuanNcIik7XG5cbnZhciBfaW5kZXg2ID0gcmVxdWlyZShcIi4vaXNWYWxpZC5qc1wiKTtcbnZhciBfaW5kZXg3ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5cbi8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuY29uc3QgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9XG4gIC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuY29uc3QgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuY29uc3QgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xuY29uc3QgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBUaGUge0BsaW5rIGZvcm1hdH0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGFsaWFzIGZvcm1hdERhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXIpKS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5mdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gKDAsIF9pbmRleDIuZ2V0RGVmYXVsdE9wdGlvbnMpKCk7XG4gIGNvbnN0IGxvY2FsZSA9XG4gICAgb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBfaW5kZXguZGVmYXVsdExvY2FsZTtcblxuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3Qgb3JpZ2luYWxEYXRlID0gKDAsIF9pbmRleDcudG9EYXRlKShkYXRlKTtcblxuICBpZiAoISgwLCBfaW5kZXg2LmlzVmFsaWQpKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IF9pbmRleDQubG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9pbmRleDMuZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl0pIHtcbiAgICAgICAgcmV0dXJuIHsgaXNUb2tlbjogdHJ1ZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgaXNUb2tlbjogZmFsc2UsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICB9KTtcblxuICAvLyBpbnZva2UgbG9jYWxpemUgcHJlcHJvY2Vzc29yIChvbmx5IGZvciBmcmVuY2ggbG9jYWxlcyBhdCB0aGUgbW9tZW50KVxuICBpZiAobG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3Nvcikge1xuICAgIHBhcnRzID0gbG9jYWxlLmxvY2FsaXplLnByZXByb2Nlc3NvcihvcmlnaW5hbERhdGUsIHBhcnRzKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgcmV0dXJuIHBhcnRzXG4gICAgLm1hcCgocGFydCkgPT4ge1xuICAgICAgaWYgKCFwYXJ0LmlzVG9rZW4pIHJldHVybiBwYXJ0LnZhbHVlO1xuXG4gICAgICBjb25zdCB0b2tlbiA9IHBhcnQudmFsdWU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiZcbiAgICAgICAgICAoMCwgX2luZGV4NS5pc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4pKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgKDAsIF9pbmRleDUuaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbikodG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgICgwLCBfaW5kZXg1Lndhcm5PclRocm93UHJvdGVjdGVkRXJyb3IpKHRva2VuLCBmb3JtYXRTdHIsIFN0cmluZyhkYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IF9pbmRleDMuZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZ2V0RGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vc3RhcnRPZlllYXIuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gKDAsIF9pbmRleDMudG9EYXRlKShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICgwLCBfaW5kZXguZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKShcbiAgICBfZGF0ZSxcbiAgICAoMCwgX2luZGV4Mi5zdGFydE9mWWVhcikoX2RhdGUpLFxuICApO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5nZXRJU09XZWVrID0gZ2V0SVNPV2VlaztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9jb25zdGFudHMuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9zdGFydE9mSVNPV2Vla1llYXIuanNcIik7XG52YXIgX2luZGV4NCA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5mdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4NC50b0RhdGUpKGRhdGUpO1xuICBjb25zdCBkaWZmID1cbiAgICArKDAsIF9pbmRleDIuc3RhcnRPZklTT1dlZWspKF9kYXRlKSAtXG4gICAgKygwLCBfaW5kZXgzLnN0YXJ0T2ZJU09XZWVrWWVhcikoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIF9pbmRleC5taWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5nZXRJU09XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdEZyb20uanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi90b0RhdGUuanNcIik7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgzLnRvRGF0ZSkoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSAoMCwgX2luZGV4LmNvbnN0cnVjdEZyb20pKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gKDAsIF9pbmRleDIuc3RhcnRPZklTT1dlZWspKFxuICAgIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIsXG4gICk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9ICgwLCBfaW5kZXguY29uc3RydWN0RnJvbSkoZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9ICgwLCBfaW5kZXgyLnN0YXJ0T2ZJU09XZWVrKShcbiAgICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLFxuICApO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmdldFF1YXJ0ZXIgPSBnZXRRdWFydGVyO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBnZXRRdWFydGVyXG4gKiBAY2F0ZWdvcnkgUXVhcnRlciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIHllYXIgcXVhcnRlciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgeWVhciBxdWFydGVyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgcXVhcnRlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBxdWFydGVyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0UXVhcnRlcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gM1xuICovXG5mdW5jdGlvbiBnZXRRdWFydGVyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZSk7XG4gIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLnRydW5jKF9kYXRlLmdldE1vbnRoKCkgLyAzKSArIDE7XG4gIHJldHVybiBxdWFydGVyO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmdldFdlZWsgPSBnZXRXZWVrO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy5qc1wiKTtcbnZhciBfaW5kZXgyID0gcmVxdWlyZShcIi4vc3RhcnRPZldlZWsuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZXZWVrWWVhci5qc1wiKTtcbnZhciBfaW5kZXg0ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZnVuY3Rpb24gZ2V0V2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gKDAsIF9pbmRleDQudG9EYXRlKShkYXRlKTtcbiAgY29uc3QgZGlmZiA9XG4gICAgKygwLCBfaW5kZXgyLnN0YXJ0T2ZXZWVrKShfZGF0ZSwgb3B0aW9ucykgLVxuICAgICsoMCwgX2luZGV4My5zdGFydE9mV2Vla1llYXIpKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBfaW5kZXgubWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZ2V0V2Vla1llYXIgPSBnZXRXZWVrWWVhcjtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9zdGFydE9mV2Vlay5qc1wiKTtcbnZhciBfaW5kZXgzID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG52YXIgX2luZGV4NCA9IHJlcXVpcmUoXCIuL19saWIvZGVmYXVsdE9wdGlvbnMuanNcIik7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4My50b0RhdGUpKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9ICgwLCBfaW5kZXg0LmdldERlZmF1bHRPcHRpb25zKSgpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSAoMCwgX2luZGV4LmNvbnN0cnVjdEZyb20pKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSAoMCwgX2luZGV4Mi5zdGFydE9mV2VlaykoXG4gICAgZmlyc3RXZWVrT2ZOZXh0WWVhcixcbiAgICBvcHRpb25zLFxuICApO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSAoMCwgX2luZGV4LmNvbnN0cnVjdEZyb20pKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9ICgwLCBfaW5kZXgyLnN0YXJ0T2ZXZWVrKShcbiAgICBmaXJzdFdlZWtPZlRoaXNZZWFyLFxuICAgIG9wdGlvbnMsXG4gICk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuaW50bEZvcm1hdERpc3RhbmNlID0gaW50bEZvcm1hdERpc3RhbmNlO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2NvbnN0YW50cy5qc1wiKTtcblxudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMuanNcIik7XG52YXIgX2luZGV4MyA9IHJlcXVpcmUoXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzLmpzXCIpO1xudmFyIF9pbmRleDQgPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzLmpzXCIpO1xudmFyIF9pbmRleDUgPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzLmpzXCIpO1xudmFyIF9pbmRleDYgPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzLmpzXCIpO1xudmFyIF9pbmRleDcgPSByZXF1aXJlKFwiLi9kaWZmZXJlbmNlSW5Ib3Vycy5qc1wiKTtcbnZhciBfaW5kZXg4ID0gcmVxdWlyZShcIi4vZGlmZmVyZW5jZUluTWludXRlcy5qc1wiKTtcbnZhciBfaW5kZXg5ID0gcmVxdWlyZShcIi4vZGlmZmVyZW5jZUluU2Vjb25kcy5qc1wiKTtcbnZhciBfaW5kZXgxMCA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGludGxGb3JtYXREaXN0YW5jZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIFRoZSB1bml0IHVzZWQgdG8gZm9ybWF0IHRoZSBkaXN0YW5jZSBpbiB7QGxpbmsgaW50bEZvcm1hdERpc3RhbmNlfS5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGludGxGb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXRzIGRpc3RhbmNlIGJldHdlZW4gdHdvIGRhdGVzIGluIGEgaHVtYW4tcmVhZGFibGUgZm9ybWF0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGVzIGFuZCBmb3JtYXRzIGl0IGFzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB3aWxsIHBpY2sgdGhlIG1vc3QgYXBwcm9wcmlhdGUgdW5pdCBkZXBlbmRpbmcgb24gdGhlIGRpc3RhbmNlIGJldHdlZW4gZGF0ZXMuIEZvciBleGFtcGxlLCBpZiB0aGUgZGlzdGFuY2UgaXMgYSBmZXcgaG91cnMsIGl0IG1pZ2h0IHJldHVybiBgeCBob3Vyc2AuIElmIHRoZSBkaXN0YW5jZSBpcyBhIGZldyBtb250aHMsIGl0IG1pZ2h0IHJldHVybiBgeCBtb250aHNgLlxuICpcbiAqIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgdW5pdCB0byBmb3JjZSB1c2luZyBpdCByZWdhcmRsZXNzIG9mIHRoZSBkaXN0YW5jZSB0byBnZXQgYSByZXN1bHQgbGlrZSBgMTIzNDU2IGhvdXJzYC5cbiAqXG4gKiBTZWUgdGhlIHRhYmxlIGJlbG93IGZvciB0aGUgdW5pdCBwaWNraW5nIGxvZ2ljOlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAocGFzdCkgIHwgUmVzdWx0IChmdXR1cmUpIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgMCBzZWNvbmRzICAgICAgICAgICAgICB8IG5vdyAgICAgICAgICAgIHwgbm93ICAgICAgICAgICAgIHxcbiAqIHwgMS01OSBzZWNvbmRzICAgICAgICAgICB8IFggc2Vjb25kcyBhZ28gIHwgaW4gWCBzZWNvbmRzICAgIHxcbiAqIHwgMS01OSBtaW51dGVzICAgICAgICAgICB8IFggbWludXRlcyBhZ28gIHwgaW4gWCBtaW51dGVzICAgIHxcbiAqIHwgMS0yMyBob3VycyAgICAgICAgICAgICB8IFggaG91cnMgYWdvICAgIHwgaW4gWCBob3VycyAgICAgIHxcbiAqIHwgMSBkYXkgICAgICAgICAgICAgICAgICB8IHllc3RlcmRheSAgICAgIHwgdG9tb3Jyb3cgICAgICAgIHxcbiAqIHwgMi02IGRheXMgICAgICAgICAgICAgICB8IFggZGF5cyBhZ28gICAgIHwgaW4gWCBkYXlzICAgICAgIHxcbiAqIHwgNyBkYXlzICAgICAgICAgICAgICAgICB8IGxhc3Qgd2VlayAgICAgIHwgbmV4dCB3ZWVrICAgICAgIHxcbiAqIHwgOCBkYXlzLTEgbW9udGggICAgICAgICB8IFggd2Vla3MgYWdvICAgIHwgaW4gWCB3ZWVrcyAgICAgIHxcbiAqIHwgMSBtb250aCAgICAgICAgICAgICAgICB8IGxhc3QgbW9udGggICAgIHwgbmV4dCBtb250aCAgICAgIHxcbiAqIHwgMi0zIG1vbnRocyAgICAgICAgICAgICB8IFggbW9udGhzIGFnbyAgIHwgaW4gWCBtb250aHMgICAgIHxcbiAqIHwgMSBxdWFydGVyICAgICAgICAgICAgICB8IGxhc3QgcXVhcnRlciAgIHwgbmV4dCBxdWFydGVyICAgIHxcbiAqIHwgMi0zIHF1YXJ0ZXJzICAgICAgICAgICB8IFggcXVhcnRlcnMgYWdvIHwgaW4gWCBxdWFydGVycyAgIHxcbiAqIHwgMSB5ZWFyICAgICAgICAgICAgICAgICB8IGxhc3QgeWVhciAgICAgIHwgbmV4dCB5ZWFyICAgICAgIHxcbiAqIHwgMisgeWVhcnMgICAgICAgICAgICAgICB8IFggeWVhcnMgYWdvICAgIHwgaW4gWCB5ZWFycyAgICAgIHxcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlXG4gKiBAcGFyYW0gYmFzZURhdGUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGguXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBTZWUgTUROIGZvciBkZXRhaWxzIFtMb2NhbGUgaWRlbnRpZmljYXRpb24gYW5kIG5lZ290aWF0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsI2xvY2FsZV9pZGVudGlmaWNhdGlvbl9hbmRfbmVnb3RpYXRpb24pXG4gKiBUaGUgbmFycm93IG9uZSBjb3VsZCBiZSBzaW1pbGFyIHRvIHRoZSBzaG9ydCBvbmUgZm9yIHNvbWUgbG9jYWxlcy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgZGlzdGFuY2UgaW4gd29yZHMgYWNjb3JkaW5nIHRvIGxhbmd1YWdlLXNlbnNpdGl2ZSByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmcuXG4gKlxuICogQHRocm93cyBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIGBvcHRpb25zLnVuaXRgIG11c3Qgbm90IGJlIGludmFsaWQgVW5pdFxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3Qgbm90IGJlIGludmFsaWQgbG9jYWxlXG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZU1hdGNoZXJgIG11c3Qgbm90IGJlIGludmFsaWQgbG9jYWxlTWF0Y2hlclxuICogQHRocm93cyBgb3B0aW9ucy5udW1lcmljYCBtdXN0IG5vdCBiZSBpbnZhbGlkIG51bWVyaWNcbiAqIEB0aHJvd3MgYG9wdGlvbnMuc3R5bGVgIG11c3Qgbm90IGJlIGludmFsaWQgc3R5bGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZGF0ZXMgd2hlbiB0aGUgZmlzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQ/XG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMClcbiAqIClcbiAqIC8vPT4gJ2luIDEgaG91cidcbiAqXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBkYXRlcyB3aGVuIHRoZSBmaXN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQ/XG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMClcbiAqIClcbiAqIC8vPT4gJzEgaG91ciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgdW5pdCBvcHRpb24gdG8gZm9yY2UgdGhlIGZ1bmN0aW9uIHRvIG91dHB1dCB0aGUgcmVzdWx0IGluIHF1YXJ0ZXJzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcIm5leHQgeWVhclwiXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDYsIDQsIDEwLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMCksXG4gKiAgIHsgdW5pdDogJ3F1YXJ0ZXInIH1cbiAqIClcbiAqIC8vPT4gJ2luIDUgcXVhcnRlcnMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgbG9jYWxlIG9wdGlvbiB0byBnZXQgdGhlIHJlc3VsdCBpbiBTcGFuaXNoLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcImluIDEgaG91clwiLlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICB7IGxvY2FsZTogJ2VzJyB9XG4gKiApXG4gKiAvLz0+ICdkZW50cm8gZGUgMSBob3JhJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIG51bWVyaWMgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byB1c2UgbnVtZXJpYyB2YWx1ZXMuIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwidG9tb3Jyb3dcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNSwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgeyBudW1lcmljOiAnYWx3YXlzJyB9XG4gKiApXG4gKiAvLz0+ICdpbiAxIGRheSdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSBzdHlsZSBvcHRpb24gdG8gZm9yY2UgdGhlIGZ1bmN0aW9uIHRvIHVzZSBzaG9ydCB2YWx1ZXMuIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwiaW4gMiB5ZWFyc1wiLlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg4LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICB7IHN0eWxlOiAnc2hvcnQnIH1cbiAqIClcbiAqIC8vPT4gJ2luIDIgeXInXG4gKi9cbmZ1bmN0aW9uIGludGxGb3JtYXREaXN0YW5jZShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICBsZXQgdmFsdWUgPSAwO1xuICBsZXQgdW5pdDtcbiAgY29uc3QgZGF0ZUxlZnQgPSAoMCwgX2luZGV4MTAudG9EYXRlKShkYXRlKTtcbiAgY29uc3QgZGF0ZVJpZ2h0ID0gKDAsIF9pbmRleDEwLnRvRGF0ZSkoYmFzZURhdGUpO1xuXG4gIGlmICghb3B0aW9ucz8udW5pdCkge1xuICAgIC8vIEdldCB0aGUgdW5pdCBiYXNlZCBvbiBkaWZmSW5TZWNvbmRzIGNhbGN1bGF0aW9ucyBpZiBubyB1bml0IGlzIHNwZWNpZmllZFxuICAgIGNvbnN0IGRpZmZJblNlY29uZHMgPSAoMCwgX2luZGV4OS5kaWZmZXJlbmNlSW5TZWNvbmRzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTsgLy8gVGhlIHNtYWxsZXN0IHVuaXRcblxuICAgIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IF9pbmRleC5zZWNvbmRzSW5NaW51dGUpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDkuZGlmZmVyZW5jZUluU2Vjb25kcykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gXCJzZWNvbmRcIjtcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgX2luZGV4LnNlY29uZHNJbkhvdXIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDguZGlmZmVyZW5jZUluTWludXRlcykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gXCJtaW51dGVcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBfaW5kZXguc2Vjb25kc0luRGF5ICYmXG4gICAgICBNYXRoLmFicygoMCwgX2luZGV4Mi5kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKSA8IDFcbiAgICApIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDcuZGlmZmVyZW5jZUluSG91cnMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9IFwiaG91clwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IF9pbmRleC5zZWNvbmRzSW5XZWVrICYmXG4gICAgICAodmFsdWUgPSAoMCwgX2luZGV4Mi5kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKSAmJlxuICAgICAgTWF0aC5hYnModmFsdWUpIDwgN1xuICAgICkge1xuICAgICAgdW5pdCA9IFwiZGF5XCI7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IF9pbmRleC5zZWNvbmRzSW5Nb250aCkge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4NS5kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSBcIndlZWtcIjtcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgX2luZGV4LnNlY29uZHNJblF1YXJ0ZXIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDMuZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9IFwibW9udGhcIjtcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgX2luZGV4LnNlY29uZHNJblllYXIpIHtcbiAgICAgIGlmICgoMCwgX2luZGV4NC5kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA8IDQpIHtcbiAgICAgICAgLy8gVG8gZmlsdGVyIG91dCBjYXNlcyB0aGF0IGFyZSBsZXNzIHRoYW4gYSB5ZWFyIGJ1dCBtYXRjaCA0IHF1YXJ0ZXJzXG4gICAgICAgIHZhbHVlID0gKDAsIF9pbmRleDQuZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICAgIHVuaXQgPSBcInF1YXJ0ZXJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gKDAsIF9pbmRleDYuZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICAgIHVuaXQgPSBcInllYXJcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4Ni5kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSBcInllYXJcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gR2V0IHRoZSB2YWx1ZSBpZiB1bml0IGlzIHNwZWNpZmllZFxuICAgIHVuaXQgPSBvcHRpb25zPy51bml0O1xuICAgIGlmICh1bml0ID09PSBcInNlY29uZFwiKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXg5LmRpZmZlcmVuY2VJblNlY29uZHMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJtaW51dGVcIikge1xuICAgICAgdmFsdWUgPSAoMCwgX2luZGV4OC5kaWZmZXJlbmNlSW5NaW51dGVzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09IFwiaG91clwiKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXg3LmRpZmZlcmVuY2VJbkhvdXJzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09IFwiZGF5XCIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDIuZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09IFwid2Vla1wiKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXg1LmRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJtb250aFwiKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXgzLmRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKShkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09IFwicXVhcnRlclwiKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfaW5kZXg0LmRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMpKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJ5ZWFyXCIpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9pbmRleDYuZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycykoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcnRmID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KG9wdGlvbnM/LmxvY2FsZSwge1xuICAgIGxvY2FsZU1hdGNoZXI6IG9wdGlvbnM/LmxvY2FsZU1hdGNoZXIsXG4gICAgbnVtZXJpYzogb3B0aW9ucz8ubnVtZXJpYyB8fCBcImF1dG9cIixcbiAgICBzdHlsZTogb3B0aW9ucz8uc3R5bGUsXG4gIH0pO1xuXG4gIHJldHVybiBydGYuZm9ybWF0KHZhbHVlLCB1bml0KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7IC8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5pc1ZhbGlkID0gaXNWYWxpZDtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9pc0RhdGUuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCEoMCwgX2luZGV4LmlzRGF0ZSkoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4Mi50b0RhdGUpKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmJ1aWxkRm9ybWF0TG9uZ0ZuID0gYnVpbGRGb3JtYXRMb25nRm47XG5cbmZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICBjb25zdCBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5idWlsZExvY2FsaXplRm4gPSBidWlsZExvY2FsaXplRm47IC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5mdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5idWlsZE1hdGNoRm4gPSBidWlsZE1hdGNoRm47XG5cbmZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuYnVpbGRNYXRjaFBhdHRlcm5GbiA9IGJ1aWxkTWF0Y2hQYXR0ZXJuRm47XG5cbmZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5lblVTID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5qc1wiKTtcbnZhciBfaW5kZXgzID0gcmVxdWlyZShcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5qc1wiKTtcbnZhciBfaW5kZXg0ID0gcmVxdWlyZShcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5qc1wiKTtcbnZhciBfaW5kZXg1ID0gcmVxdWlyZShcIi4vZW4tVVMvX2xpYi9tYXRjaC5qc1wiKTtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuY29uc3QgZW5VUyA9IChleHBvcnRzLmVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IF9pbmRleC5mb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogX2luZGV4Mi5mb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogX2luZGV4My5mb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IF9pbmRleDQubG9jYWxpemUsXG4gIG1hdGNoOiBfaW5kZXg1Lm1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5mb3JtYXREaXN0YW5jZSA9IHZvaWQgMDtcblxuY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnRzLmZvcm1hdERpc3RhbmNlID0gZm9ybWF0RGlzdGFuY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuZm9ybWF0TG9uZyA9IHZvaWQgMDtcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5qc1wiKTtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuY29uc3QgZm9ybWF0TG9uZyA9IChleHBvcnRzLmZvcm1hdExvbmcgPSB7XG4gIGRhdGU6ICgwLCBfaW5kZXguYnVpbGRGb3JtYXRMb25nRm4pKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiAoMCwgX2luZGV4LmJ1aWxkRm9ybWF0TG9uZ0ZuKSh7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6ICgwLCBfaW5kZXguYnVpbGRGb3JtYXRMb25nRm4pKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5mb3JtYXRSZWxhdGl2ZSA9IHZvaWQgMDtcblxuY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuZXhwb3J0cy5mb3JtYXRSZWxhdGl2ZSA9IGZvcm1hdFJlbGF0aXZlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLmxvY2FsaXplID0gdm9pZCAwO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5qc1wiKTtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuY29uc3QgbG9jYWxpemUgPSAoZXhwb3J0cy5sb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcixcblxuICBlcmE6ICgwLCBfaW5kZXguYnVpbGRMb2NhbGl6ZUZuKSh7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgcXVhcnRlcjogKDAsIF9pbmRleC5idWlsZExvY2FsaXplRm4pKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBhcmd1bWVudENhbGxiYWNrOiAocXVhcnRlcikgPT4gcXVhcnRlciAtIDEsXG4gIH0pLFxuXG4gIG1vbnRoOiAoMCwgX2luZGV4LmJ1aWxkTG9jYWxpemVGbikoe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5OiAoMCwgX2luZGV4LmJ1aWxkTG9jYWxpemVGbikoe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5idWlsZExvY2FsaXplRm4pKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMubWF0Y2ggPSB2b2lkIDA7XG5cbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4uanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4uanNcIik7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmNvbnN0IG1hdGNoID0gKGV4cG9ydHMubWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6ICgwLCBfaW5kZXgyLmJ1aWxkTWF0Y2hQYXR0ZXJuRm4pKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiAoMCwgX2luZGV4LmJ1aWxkTWF0Y2hGbikoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6ICgwLCBfaW5kZXguYnVpbGRNYXRjaEZuKSh7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogKDAsIF9pbmRleC5idWlsZE1hdGNoRm4pKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiAoMCwgX2luZGV4LmJ1aWxkTWF0Y2hGbikoe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogKDAsIF9pbmRleC5idWlsZE1hdGNoRm4pKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuc3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXk7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4LnRvRGF0ZSkoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuc3RhcnRPZklTT1dlZWsgPSBzdGFydE9mSVNPV2VlaztcbnZhciBfaW5kZXggPSByZXF1aXJlKFwiLi9zdGFydE9mV2Vlay5qc1wiKTtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mSVNPV2VlayhkYXRlKSB7XG4gIHJldHVybiAoMCwgX2luZGV4LnN0YXJ0T2ZXZWVrKShkYXRlLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5zdGFydE9mSVNPV2Vla1llYXIgPSBzdGFydE9mSVNPV2Vla1llYXI7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vZ2V0SVNPV2Vla1llYXIuanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL3N0YXJ0T2ZJU09XZWVrLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9ICgwLCBfaW5kZXguZ2V0SVNPV2Vla1llYXIpKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSAoMCwgX2luZGV4My5jb25zdHJ1Y3RGcm9tKShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiAoMCwgX2luZGV4Mi5zdGFydE9mSVNPV2VlaykoZm91cnRoT2ZKYW51YXJ5KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5zdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL3RvRGF0ZS5qc1wiKTtcblxudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCIpO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSAoMCwgX2luZGV4Mi5nZXREZWZhdWx0T3B0aW9ucykoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgudG9EYXRlKShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuc3RhcnRPZldlZWtZZWFyID0gc3RhcnRPZldlZWtZZWFyO1xudmFyIF9pbmRleCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdEZyb20uanNcIik7XG52YXIgX2luZGV4MiA9IHJlcXVpcmUoXCIuL2dldFdlZWtZZWFyLmpzXCIpO1xudmFyIF9pbmRleDMgPSByZXF1aXJlKFwiLi9zdGFydE9mV2Vlay5qc1wiKTtcblxudmFyIF9pbmRleDQgPSByZXF1aXJlKFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLmpzXCIpO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gKDAsIF9pbmRleDQuZ2V0RGVmYXVsdE9wdGlvbnMpKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9ICgwLCBfaW5kZXgyLmdldFdlZWtZZWFyKShkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gKDAsIF9pbmRleC5jb25zdHJ1Y3RGcm9tKShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSAoMCwgX2luZGV4My5zdGFydE9mV2VlaykoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLnN0YXJ0T2ZZZWFyID0gc3RhcnRPZlllYXI7XG52YXIgX2luZGV4ID0gcmVxdWlyZShcIi4vdG9EYXRlLmpzXCIpO1xudmFyIF9pbmRleDIgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3RGcm9tLmpzXCIpO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gKDAsIF9pbmRleC50b0RhdGUpKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9ICgwLCBfaW5kZXgyLmNvbnN0cnVjdEZyb20pKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMudG9EYXRlID0gdG9EYXRlO1xuXG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5mdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9zdHlsZXMvZm9ybS5jc3NcIjtcbmltcG9ydCBkZWxJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IHBlbmNpbEltZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcGVuY2lsLnN2Zyc7XG5cbmltcG9ydCB7IGZpbmRMb2NTdG9yZUxpc3RzLCBjcmVhdGVOZXdMaXN0LCBjcmVhdGVUYXNrLCB0YXNrSW50LCB0YXNrLCBmaW5kTXlMaXN0IH0gZnJvbSBcIi4vc2NyaXB0c1wiO1xuXG4vL0lJRkUgdG8gc3RvcmUgYWxsIERPTSB2YXJpYWJsZXMgYW5kIGV2ZW50IGxpc3RlbmVyc1xuKGZ1bmN0aW9uKCkge1xuICAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tCdXR0b24nKTsgXG4gICAgICAgIG5ld1Rhc2tCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNob3dOZXdUYXNrRm9ybSgpKTsgICBcblxuICAgIGNvbnN0IG5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3TGlzdEJ1dHRvbicpOyAgICAgICAgXG4gICAgICAgIG5ld0xpc3RCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNob3dOZXdMaXN0Rm9ybSgpKTtcblxuICAgIGNvbnN0IG5ld0NvbG9yQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0NvbG9yQnV0dG9uJyk7ICAgICAgICBcbiAgICAgICAgbmV3Q29sb3JCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNob3dDb2xvclBpY2tlcigpKTsgICAgXG5cbiAgICBjb25zdCBzb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQnKTtcbiAgICAgICAgc29ydD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c2hvd1NvcnRNZW51KCkpOyAgIFxuICAgIGNvbnN0IHNob3dJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdG9nZ2xlJyk7XG4gICAgY29uc3Qgc29ydEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNvcnQtbWVudScpO1xuICAgICAgICBzb3J0SXRlbXM/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGU6RXZlbnQpPT5zb3J0Qm9yZGVyT2ZmKGUpKTtcbiAgICAgICAgc29ydEl0ZW1zPy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsKGU6RXZlbnQpPT5zb3J0Qm9yZGVyT24oZSkpO1xuICAgIGNvbnN0IHNvcnRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQtdGFzaycpO1xuICAgICAgICBzb3J0VGFzaz8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+c29ydEJ5VGFzayhlKSk7XG4gICAgY29uc3Qgc29ydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC1kYXRlJyk7XG4gICAgICAgIHNvcnREYXRlPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT5zb3J0QnlEYXRlKGUpKTtcbiAgICBjb25zdCBzb3J0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC1wcmlvcml0eScpO1xuICAgICAgICBzb3J0UHJpb3JpdHk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNvcnRCeVByaW9yaXR5KGUpKTtcbiAgICBjb25zdCBzb3J0U3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQtc3RhdHVzJyk7XG4gICAgICAgIHNvcnRTdGF0dXM/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnNvcnRCeVN0YXR1cyhlKSk7ICAgXG4gICAgLy9Tb3J0IE1lbnUgc3R5bGluZ1xuICAgIGZ1bmN0aW9uIHNvcnRCb3JkZXJPZmYoZTpFdmVudCkge1xuICAgICAgICBsZXQgc29ydFRhZyA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICBpZiAoc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IHNvcnRUYWcubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgICAgbmV4dFNpYmxpbmcuc3R5bGUuYm9yZGVyVG9wID0nMCc7XG4gICAgICAgICAgICBzb3J0VGFnLnN0eWxlLmJvcmRlclRvcCA9JzAnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNvcnRCb3JkZXJPbihlOkV2ZW50KSB7XG4gICAgICAgIGxldCBzb3J0VGFnID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGlmIChzb3J0VGFnLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgaWYgKHNvcnRUYWcucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gc29ydFRhZy5uZXh0RWxlbWVudFNpYmxpbmcgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICBuZXh0U2libGluZy5zdHlsZS5ib3JkZXJUb3AgPScxcHggc29saWQgcmdiKDE3NSwxNzIsMTcyJztcbiAgICAgICAgICAgIHNvcnRUYWcuc3R5bGUuYm9yZGVyVG9wID0nMXB4IHNvbGlkIHJnYigxNzUsMTcyLDE3Mic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0U2libGluZyA9IHNvcnRUYWcubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nLnN0eWxlLmJvcmRlclRvcCA9JzFweCBzb2xpZCByZ2IoMTc1LDE3MiwxNzInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSgpKTtcblxuZnVuY3Rpb24gdXBkYXRlRE9NKGxpc3RzQXJyYXk/OnN0cmluZ1tdLHNvcnRGaWVsZD86c3RyaW5nKSB7XG4gICAgY2xlYXJET00oKTtcbiAgICBpZiAoIWxpc3RzQXJyYXkpIHtcbiAgICAgICAgbGlzdHNBcnJheSA9IGNyZWF0ZUxpc3RzQXJyYXkoKTtcbiAgICB9XG4gICAgcmVuZGVyTGlzdChsaXN0c0FycmF5KTtcbiAgICBsZXQgdGFza0FycmF5PSBjcmVhdGVUYXNrc0FycmF5KCk7XG4gICAgbGV0IHNvcnRlZFRhc2tzID0gc29ydFRhc2tBcnJheSh0YXNrQXJyYXkpO1xuICAgIGlmICghc29ydEZpZWxkKSB7XG4gICAgICAgIHNvcnRGaWVsZCA9IFwibGlzdFwiO1xuICAgIH1cbiAgICByZW5kZXJUYXNrKHNvcnRGaWVsZCwgc29ydGVkVGFza3MpO1xuICAgIGFkZExpc3RUb2dnbGUoKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJET00oKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICB3aGlsZShjb250ZW50Py5maXJzdENoaWxkKXtcbiAgICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgIH0gIFxufTtcblxuZnVuY3Rpb24gc2hvd05ld0xpc3RGb3JtKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQ7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGRpYWxvZy5pZD0nbmV3TGlzdERpYWxvZyc7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywnZGlhbG9nJyk7XG4gICAgICAgIGZvcm0uaWQ9J25ld0xpc3RGb3JtJztcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgY3JlYXRlTmV3TGlzdChlKTtcbiAgICAgICAgICAgIHVwZGF0ZURPTSgpO1xuICAgICAgICB9KVxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgZmllbGRzZXQuY2xhc3NOYW1lPSduZXdMaXN0Rm9ybSc7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmV3TGlzdCcpO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdMaXN0Jyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ25ld0xpc3QnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJ3RydWUnKTtcbiAgICAgICAgaW5wdXQuaWQ9J25ld0xpc3QnO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgICBcbiAgICBcbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGJ1dHRvbnNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uc1Jvdy5jbGFzc05hbWU9J2J1dHRvbnNSb3cnO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDYW5jZWwnKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3Jlc2V0Jyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FkZCBsaXN0Jyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7ICAgIFxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbnNSb3cpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgICAgXG4gICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgICBkaWFsb2cuYXBwZW5kKGZvcm0pO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgY29udGVudD8uYXBwZW5kKGZyYWdtZW50KTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5mdW5jdGlvbiBzaG93TmV3VGFza0Zvcm0oKSB7XG4gICAgbGV0IGxpc3RzQXJyYXkgPSBjcmVhdGVMaXN0c0FycmF5KCk7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZGlhbG9nLmlkPSduZXdUYXNrRGlhbG9nJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCdkaWFsb2cnKTtcbiAgICAgICAgZm9ybS5jbGFzc05hbWU9J25ld0l0ZW1Gb3JtJztcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgY3JlYXRlVGFzayhlKTtcbiAgICAgICAgICAgIHVwZGF0ZURPTSgpO1xuICAgICAgICB9KVxuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrTmFtZScpO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdUYXNrJyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tOYW1lJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCd0cnVlJyk7XG4gICAgICAgIGlucHV0LmlkPSd0YXNrTmFtZSc7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgICAgXG5cbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3Rhc2tEYXRlJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGF0ZScpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tEYXRlJyk7XG4gICAgICAgIGlucHV0LnZhbHVlQXNEYXRlPW5ldyBEYXRlKCk7XG4gICAgICAgIGlucHV0LmlkPSd0YXNrRGF0ZSc7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG4gICAgXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0YXNrUHJpb3JpdHknKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQcmlvcml0eScpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCd0YXNrUHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0LmlkPSd0YXNrUHJpb3JpdHknO1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdOb3JtYWwnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdOb3JtYWwnKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIaWdoJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSGlnaCcpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0xvdycpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0xvdycpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGFza1N0YXR1cycpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1N0YXR1cycpO1xuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Rhc2tTdGF0dXMnKTtcbiAgICAgICAgc2VsZWN0LmlkPSd0YXNrU3RhdHVzJztcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdOb3QgU3RhcnRlZCcpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ05vdCBTdGFydGVkJyk7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnSW4gUHJvZ3Jlc3MnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdJbiBQcm9ncmVzcycpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0NvbXBsZXRlZCcpO1xuICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NvbXBsZXRlZCcpO1xuICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGFza0RldGFpbHMnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdEZXRhaWxzJyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywndGFza0RldGFpbHMnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0VudGVyIHRhc2sgZGV0YWlscycpOyBcbiAgICAgICAgaW5wdXQuaWQ9J3Rhc2tEZXRhaWxzJztcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7ICBcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGFza0xpc3QnKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdMaXN0Jyk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywndGFza0xpc3QnKTtcbiAgICAgICAgc2VsZWN0LmlkPSd0YXNrTGlzdCc7XG4gICAgXG4gICAgbGV0IGxpc3RMZW5ndGggPSBsaXN0c0FycmF5Lmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpPGxpc3RMZW5ndGg7IGkrKykge1xuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdteS1saXN0Jyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsaXN0c0FycmF5W2ldKTtcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgXG4gICAgXG4gICAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBidXR0b25zUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbnNSb3cuY2xhc3NOYW1lPSdidXR0b25zUm93JztcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2FuY2VsJyk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyZXNldCcpO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBZGQgdGFzaycpO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgYnV0dG9uc1Jvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIFxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbnNSb3cpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuICAgIGRpYWxvZy5hcHBlbmQoZm9ybSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpO1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0c0FycmF5KCkge1xuICAgIGxldCBpbmQ6bnVtYmVyID0gZmluZExvY1N0b3JlTGlzdHMoKTtcbiAgICBsZXQgbG9jU3RvcmVBcnJheSA9IE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NTdG9yZUFycmF5KSkge1xuICAgICAgICBsZXQgbGlzdHNBcnJheTpzdHJpbmdbXT1bXTtcbiAgICAgICAgbGV0IGxpc3RJdGVtPWxvY1N0b3JlQXJyYXlbaW5kXTtcbiAgICAgICAgbGV0IGxpc3RzID0gSlNPTi5wYXJzZShsaXN0SXRlbSk7XG4gICAgICAgIGxldCB4ID0gbG9jU3RvcmVBcnJheVtpbmRdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsaXN0cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBsaXN0c0FycmF5LnB1c2gobGlzdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICBmaW5kTXlMaXN0KGxpc3RzQXJyYXkpO1xuICAgICAgICByZXR1cm4gbGlzdHNBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIFtdO1xufVxuZnVuY3Rpb24gY3JlYXRlVGFza3NBcnJheSgpIHtcbiAgICBsZXQgeCA9IGZpbmRMb2NTdG9yZUxpc3RzKCk7XG4gICAgbGV0IGxvY1N0b3JlQXJyYXkgPSBPYmplY3QudmFsdWVzKGxvY2FsU3RvcmFnZSk7IFxuICAgIGxldCBzdG9yYWdlTGVuZ3RoID0gd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgbGV0IHRhc2tBcnJheTp0YXNrSW50W109W107XG4gICAgaWYgKHN0b3JhZ2VMZW5ndGg9PTApIHtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxvY1N0b3JlQXJyYXkpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpPHN0b3JhZ2VMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpPT09eCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNUYXNrID0gbG9jU3RvcmVBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkVGFzayA9IEpTT04ucGFyc2UodGhpc1Rhc2spO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrT2JqID0gbmV3IHRhc2socGFyc2VkVGFzayk7XG4gICAgICAgICAgICAgICAgdGFza0FycmF5LnB1c2godGFza09iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrQXJyYXk7XG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIHRhc2tBcnJheTtcbiAgICAgICAgfVxufTtcbmZ1bmN0aW9uIHNvcnRUYXNrQXJyYXkodGFza0FycmF5OnRhc2tJbnRbXSkgeyBcbiAgICBjb25zdCBzb3J0ZWRUYXNrczp0YXNrSW50W10gPSB0YXNrQXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICAgICAgcmV0dXJuIGEucmF3RGF0ZS5nZXRUaW1lKCkgLSBiLnJhd0RhdGUuZ2V0VGltZSgpO1xuICAgICAgICB9KTtcbnJldHVybiBzb3J0ZWRUYXNrcztcbn07XG5mdW5jdGlvbiBmaW5kTGlzdCh0aGlzTGlzdDpzdHJpbmcpOkhUTUxEaXZFbGVtZW50IHsgICAgXG4gICAgbGV0IGxpc3RIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMlwiKTtcbiAgICBsZXQgdGFza0xpc3QgPSB0aGlzTGlzdDtcbiAgICBmb3IgKGxldCBpPTA7IGk8bGlzdEhlYWRpbmdzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgbGV0IGxpc3ROYW1lID1saXN0SGVhZGluZ3NbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGlmICh0YXNrTGlzdCA9PSBsaXN0TmFtZSkge1xuICAgICAgICAgICAgbGV0IGdyYWJFbGVtZW50ID0gbGlzdEhlYWRpbmdzW2ldLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICByZXR1cm4gZ3JhYkVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgICAgICBsZXQgbGlzdHNBcnJheSA9IGNyZWF0ZUxpc3RzQXJyYXkoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdHNBcnJheSkpIHtcbiAgICAgICAgICAgIGxpc3RzQXJyYXkucHVzaCh0YXNrTGlzdCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaXN0cycsSlNPTi5zdHJpbmdpZnkobGlzdHNBcnJheSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAgICBcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGlzdC5jbGFzc05hbWU9J2xpc3QnO1xuICAgICAgICBsZXQgZ3JhYkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JhYkVsZW1lbnQuY2xhc3NOYW1lPSd0YXNrLWxpc3QnO1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFza0xpc3QpO1xuICAgICAgICBsaXN0TmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgZ3JhYkVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgICBjb250ZW50Py5hcHBlbmRDaGlsZChncmFiRWxlbWVudCk7ICAgICAgICAgIFxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgY29udGVudD8uYXBwZW5kKGZyYWdtZW50KTsgIFxuICAgICAgICByZXR1cm4gZ3JhYkVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG59O1xuZnVuY3Rpb24gcmVuZGVyVGFzayhzb3J0RmllbGQ6c3RyaW5nLCB0YXNrQXJyYXk6dGFza0ludFtdKTp2b2lkIHtcbiAgICAvL0ZpbmRzIGxpc3Qgb24gRE9NIHRvIGF0dGFjaCB0YXNrXG4gICAgdGFza0FycmF5LmZvckVhY2goZnVuY3Rpb24odGFzaykge1xuICAgICAgICBsZXQgdGhpc0xpc3Q7XG4gICAgICAgIGxldCBncmFiRWxlbWVudDtcbiAgICAgICAgaWYgKHNvcnRGaWVsZCA9PSBcInByaW9yaXR5XCIpIHtcbiAgICAgICAgICAgIGdyYWJFbGVtZW50ID0gZmluZExpc3QodGFzay5wcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc29ydEZpZWxkID09IFwic3RhdHVzXCIpIHtcbiAgICAgICAgICAgIGdyYWJFbGVtZW50ID0gZmluZExpc3QodGFzay5zdGF0dXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNvcnRGaWVsZCA9PSBcImRhdGVcIikge1xuICAgICAgICAgICAgZ3JhYkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0LWhlYWRpbmcnKSE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBncmFiRWxlbWVudCA9IGZpbmRMaXN0KHRhc2subGlzdCk7XG4gICAgICAgIH0gICAgXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NOYW1lPSd0YXNrLWl0ZW0nO1xuICAgICAgICAgICAgdGFza0l0ZW0uZGF0YXNldC5pZD10YXNrLmlkO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc05hbWU9J3Rhc2stcHJpb3JpdHknO1xuICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNpcmNsZS5jbGFzc05hbWU9J2NpcmNsZSc7XG4gICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eT09J0hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvcj0ncmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRhc2sucHJpb3JpdHk9PSdMb3cnKSB7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvcj0ncmdiKDU3LCAxNjIsIDIxMSknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nZ3JlZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza05hbWUuY2xhc3NOYW1lPSd0YXNrLW5hbWUnO1xuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YXNrLnRhc2spO1xuICAgICAgICAgICAgdGFza05hbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0R1ZS5jbGFzc05hbWU9J3Rhc2stZHVlJztcbiAgICAgICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YXNrLmRhdGUpO1xuICAgICAgICAgICAgdGFza0R1ZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIGlmICh0YXNrLnJhd0RhdGUgPCBuZXcgRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza0R1ZS5zdHlsZS5jb2xvcj1cInJlZFwiO1xuICAgICAgICAgICAgICAgIHRhc2tEdWUuc3R5bGUuZm9udFN0eWxlPVwiaXRhbGljXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2tUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tUb2dnbGUuY2xhc3NOYW1lPSd0YXNrLXRvZ2dsZSc7XG4gICAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJysnKTtcbiAgICAgICAgICAgIHRhc2tUb2dnbGUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB0YXNrVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PnRvZ2dsZUluZm8oZSkpO1xuICAgICAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0luZm8uY2xhc3NOYW1lPSd0YXNrLWluZm8nO1xuICAgICAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhc2suZGV0YWlscyk7XG4gICAgICAgICAgICB0YXNrSW5mby5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGFza0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tFZGl0LmNsYXNzTmFtZT0ndGFzay1lZGl0JztcbiAgICAgICAgY29uc3QgZWRpdFBlbmNpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICBlZGl0UGVuY2lsLnNyYz1wZW5jaWxJbWc7XG4gICAgICAgICAgICBlZGl0UGVuY2lsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PmVkaXRUYXNrKGUpKTtcblxuICAgICAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrU3RhdHVzLmNsYXNzTmFtZT0ndGFzay1zdGF0dXMnO1xuICAgICAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhc2suc3RhdHVzKTtcbiAgICAgICAgICAgIHRhc2tTdGF0dXMuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NOYW1lPSd0YXNrLWRlbGV0ZSc7XG4gICAgICAgIGNvbnN0IHRyYXNoQmluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIHRyYXNoQmluLnNyYz1kZWxJbWc7IFxuICAgICAgICAgICAgdHJhc2hCaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0oZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICAgICAgICB9KTsgICBcbiAgICAgICAgY29uc3QgdGFza0xpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrTGlzdE5hbWUuY2xhc3NOYW1lPSd0YXNrLWxpc3QtbmFtZSc7XG4gICAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFzay5saXN0KTtcbiAgICAgICAgICAgIHRhc2tMaXN0TmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTsgICAgICAgIFxuXG4gICAgICAgIGxldCBpbm5lciA9IGdyYWJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpO1xuICAgICAgICAgICAgaW5uZXIhLmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcblxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGNpcmNsZSk7IFxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tEdWUpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrVG9nZ2xlKTtcblxuICAgICAgICBjb25zdCB0YXNrSW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0luZm9XcmFwcGVyLmNsYXNzTmFtZT0ndGFza0luZm9XcmFwcGVyJztcblxuICAgICAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1dyYXBwZXIuY2xhc3NOYW1lPSd0YXNrV3JhcHBlcic7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcbiAgICAgICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3ROYW1lKTtcbiAgICAgICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xuICAgICAgICAgICAgdGFza0VkaXQuYXBwZW5kQ2hpbGQoZWRpdFBlbmNpbCk7XG4gICAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpOyAgIFxuICAgICAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcbiAgICAgICAgICAgIHRhc2tEZWxldGUuYXBwZW5kQ2hpbGQodHJhc2hCaW4pOyBcbiAgICAgICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0luZm8pOyAgXG4gICAgfSk7XG59O1xuZnVuY3Rpb24gdG9nZ2xlTGlzdERpc3BsYXkoZTpFdmVudCkge1xuICAgIGxldCB0aGlzRGl2ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgaWYgKHRoaXNEaXYuY2xhc3NOYW1lID09XCJ0YXNrLWxpc3QtaGVhZGluZ1wiKXtcbiAgICAgICAgbGV0IGxpc3RDaGlsZHJlbiA9IHRoaXNEaXYuY2hpbGRyZW47XG4gICAgICAgIGlmIChsaXN0Q2hpbGRyZW4hLmxlbmd0aD4xKSB7XG4gICAgICAgICAgICB0aGlzRGl2Py5jaGlsZHJlblsxXS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgIGVsc2UgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckxpc3QocGFyc2VkTGlzdDpzdHJpbmdbXSk6dm9pZCB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTsgICAgXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0LmNsYXNzTmFtZT0nbGlzdCc7XG4gICAgbGV0IGxlbmd0aCA9IHBhcnNlZExpc3QubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDtpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xpc3QuY2xhc3NOYW1lPSd0YXNrLWxpc3QnO1xuICAgICAgICBjb25zdCB0YXNrTGlzdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0xpc3RIZWFkaW5nLmNsYXNzTmFtZT0ndGFzay1saXN0LWhlYWRpbmcnO1xuXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGlzdE5hbWUuY2xhc3NOYW1lPVwibGlzdE5hbWVUaXRsZVwiO1xuICAgICAgICBjb25zdCBsaXN0TmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXJzZWRMaXN0W2ldKTtcbiAgICAgICAgbGlzdE5hbWVUaXRsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgbGlzdE5hbWUuYXBwZW5kQ2hpbGQobGlzdE5hbWVUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgbGlzdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGlzdERlbGV0ZS5jbGFzc05hbWU9J2xpc3QtZGVsZXRlIGhpZGUnO1xuICAgICAgICBjb25zdCB0cmFzaEJpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICB0cmFzaEJpbi5zcmM9ZGVsSW1nOyBcbiAgICAgICAgICAgIHRyYXNoQmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PntcbiAgICAgICAgICAgICAgICBjaGVja0xpc3RUYXNrcyhlKTtcbiAgICAgICAgICAgIH0pOyAgXG4gICAgICAgIGxpc3REZWxldGUuYXBwZW5kQ2hpbGQodHJhc2hCaW4pO1xuXG4gICAgICAgIGNvbnN0IGxpc3RUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdFRvZ2dsZS5jbGFzc05hbWU9J2xpc3QtdG9nZ2xlIG1pbnVzJztcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFx1MjAxM1wiKTtcbiAgICAgICAgbGlzdFRvZ2dsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgbGlzdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT50b2dnbGVMaXN0KGUpKTtcbiAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYXBwZW5kQ2hpbGQobGlzdERlbGV0ZSk7IFxuICAgICAgICAgICAgdGFza0xpc3RIZWFkaW5nLmFwcGVuZENoaWxkKGxpc3RUb2dnbGUpO1xuICAgICAgICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxpc3REaXNwbGF5KGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxpc3REaXNwbGF5KGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTsgIFxuICAgICAgICBjb25zdCB0YXNrTGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tMaXN0V3JhcHBlci5jbGFzc05hbWU9J3Rhc2tMaXN0V3JhcHBlciBzaG93TGlzdCc7XG4gICAgICAgIGxldCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5uZXIuY2xhc3NOYW1lPSdpbm5lcic7XG4gICAgICAgICAgICB0YXNrTGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgICAgICAgICAgdGFza0xpc3RIZWFkaW5nLmFwcGVuZENoaWxkKHRhc2tMaXN0V3JhcHBlcik7ICAgICBcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0xpc3RIZWFkaW5nKTtcbiAgICAgICAgY29udGVudD8uYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgICAgICB9XG4gICAgY29udGVudD8uYXBwZW5kKGZyYWdtZW50KTsgIFxufTtcbiAgICBcbi8vT3RoZXJzXG5mdW5jdGlvbiB0b2dnbGVJbmZvKGU6RXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50OyAgXG4gICAgbGV0IHRoaXNMaXN0SXRlbSA9IGV2ZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IHRhc2tXcmFwcGVyID0gdGhpc0xpc3RJdGVtPy5xdWVyeVNlbGVjdG9yKCcudGFza1dyYXBwZXInKTtcbiAgICBpZiAodGFza1dyYXBwZXIpIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dUYXNrJyk7IFxuICAgIGlmICh0YXNrV3JhcHBlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93VGFzaycpKXtcbiAgICAgICAgZXZlbnQudGV4dENvbnRlbnQ9XCJcXHUyMDEzXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudC50ZXh0Q29udGVudD1cIitcIjtcbiAgICB9O1xufTtcbmZ1bmN0aW9uIGFkZExpc3RUb2dnbGUoKSB7XG4gICAgbGV0IGxpc3RIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1saXN0XCIpO1xuICAgIGxpc3RIZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nKT0+IHtcbiAgICAgICAgbGV0IGhlYWRpbmdEaXYgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdFdyYXBwZXInKT8uZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgaWYgKCFoZWFkaW5nRGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgbGV0IG5vVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbm9UYXNrcy5jbGFzc05hbWU9XCJub1Rhc2tzTXNnXCI7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGhlcmUgYXJlIG5vIHRhc2tzXCIpO1xuICAgICAgICAgICAgbm9UYXNrcy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQobm9UYXNrcyk7XG4gICAgICAgICAgICAgbGV0IHRoaXNUb2dnbGUgPSBoZWFkaW5nLmZpcnN0RWxlbWVudENoaWxkPy5xdWVyeVNlbGVjdG9yKCcubGlzdC10b2dnbGUnKTtcbiAgICAgICAgICAgIHRoaXNUb2dnbGUhLnRleHRDb250ZW50PVwiXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5mdW5jdGlvbiB0b2dnbGVMaXN0KGU6RXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50OyAgXG4gICAgbGV0IHRoaXNMaXN0ID0gZXZlbnQucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uZmlyc3RDaGlsZCEgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdCB0YXNrTGlzdFdyYXBwZXIgPSB0aGlzTGlzdC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3RXcmFwcGVyJyk7XG4gICAgaWYgKHRhc2tMaXN0V3JhcHBlcikgdGFza0xpc3RXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dMaXN0Jyk7XG4gICAgaWYgKHRhc2tMaXN0V3JhcHBlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93TGlzdCcpKXtcbiAgICAgICAgZXZlbnQudGV4dENvbnRlbnQ9XCJcXHUyMDEzXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudC50ZXh0Q29udGVudD1cIitcIjtcbiAgICB9O1xufVxuZnVuY3Rpb24gZGVsZXRlSXRlbShlOkV2ZW50KXtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGxldCB0YXNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGlkID0gdGFzaz8uZGF0YXNldC5pZCE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93U29ydE1lbnUoKSB7XG4gICAgY29uc3Qgc29ydE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29ydC13cmFwcGVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgc29ydE1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufVxuZnVuY3Rpb24gZWRpdFRhc2soZTpFdmVudCl7XG4gICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICBsZXQgdGFzayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBpZCA9IHRhc2s/LmRhdGFzZXQuaWQhO1xuICAgICAgICBsZXQgdGhpc09uZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKTtcbiAgICAgICAgbGV0IG15VGFzayA9IEpTT04ucGFyc2UodGhpc09uZSEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpZCk7XG4gICAgICAgIGZpbGxFZGl0Rm9ybSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxFZGl0Rm9ybSgpIHtcbiAgICAgICAgc2hvd05ld1Rhc2tGb3JtKCk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGFza05hbWVcIl0nKTtcbiAgICAgICAgICAgICAgICB0YXNrTmFtZT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsbXlUYXNrLnRhc2tOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrRGF0ZVwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGFza0RhdGUudmFsdWU9bXlUYXNrLnRhc2tEYXRlO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrUHJpb3JpdHlcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZT1teVRhc2sudGFza1ByaW9yaXR5O1xuICAgICAgICAgICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGFza1N0YXR1c1wiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGFza1N0YXR1cy52YWx1ZT1teVRhc2sudGFza1N0YXR1cztcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrRGV0YWlsc1wiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGFza0RldGFpbHMudmFsdWU9IG15VGFzay50YXNrRGV0YWlscztcbiAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0YXNrTGlzdFwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGFza0xpc3QudmFsdWUgPSBteVRhc2sudGFza0xpc3Q7ICAgIFxuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNvcnRCeVRhc2soZTpFdmVudCl7XG51cGRhdGVET00oKTtcbn07XG5mdW5jdGlvbiBzb3J0QnlQcmlvcml0eShlOkV2ZW50KXtcbiAgICBsZXQgbGlzdHNBcnJheSA9IFtcIk5vcm1hbFwiLFwiSGlnaFwiLFwiTG93XCJdO1xuICAgIGxldCBzb3J0RmllbGQgPSBcInByaW9yaXR5XCI7XG4gICAgdXBkYXRlU29ydERPTShsaXN0c0FycmF5LHNvcnRGaWVsZCk7XG59O1xuZnVuY3Rpb24gc29ydEJ5U3RhdHVzKGU6RXZlbnQpe1xuICAgIGxldCBsaXN0c0FycmF5ID0gW1wiTm90IFN0YXJ0ZWRcIixcIkluIFByb2dyZXNzXCIsXCJDb21wbGV0ZWRcIl07XG4gICAgbGV0IHNvcnRGaWVsZCA9IFwic3RhdHVzXCI7XG4gICAgdXBkYXRlU29ydERPTShsaXN0c0FycmF5LHNvcnRGaWVsZClcbn07XG5mdW5jdGlvbiBzb3J0QnlEYXRlKGU6RXZlbnQpe1xuICAgIGNsZWFyRE9NKCk7XG4gICAgbGV0IHRhc2tBcnJheT0gY3JlYXRlVGFza3NBcnJheSgpO1xuICAgIGxldCBzb3J0ZWRUYXNrcyA9IHNvcnRUYXNrQXJyYXkodGFza0FycmF5KTtcbiAgICBkYXRlTGlzdE5hbWUoKTsgICAgXG4gICAgcmVuZGVyVGFzaygnZGF0ZScsIHNvcnRlZFRhc2tzKTtcbiAgICAgICAgZnVuY3Rpb24gZGF0ZUxpc3ROYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7ICAgIFxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxpc3QuY2xhc3NOYW1lPSdsaXN0JztcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5jbGFzc05hbWU9J3Rhc2stbGlzdCc7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5jbGFzc05hbWU9J3Rhc2stbGlzdC1oZWFkaW5nJztcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0TmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdE5hbWVUaXRsZS5jbGFzc05hbWU9XCJsaXN0TmFtZVRpdGxlXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgICAgICBoMi50ZXh0Q29udGVudD0gXCJNeSBUYXNrc1wiO1xuICAgICAgICAgICAgICAgICAgICBsaXN0TmFtZVRpdGxlLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3REZWxldGUuY2xhc3NOYW1lPSdsaXN0LWRlbGV0ZSBoaWRlJztcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RXcmFwcGVyLmNsYXNzTmFtZT0ndGFza0xpc3RXcmFwcGVyIHNob3dMaXN0JztcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXIuY2xhc3NOYW1lPSdpbm5lcic7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0V3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hcHBlbmRDaGlsZChsaXN0TmFtZVRpdGxlKTsgIFxuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTGlzdEhlYWRpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYXBwZW5kQ2hpbGQodGFza0xpc3RXcmFwcGVyKTsgIFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ/LmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgICAgICAgICAgIH1cbn07IFxuZnVuY3Rpb24gc2hvd0NvbG9yUGlja2VyKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQ7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGRpYWxvZy5pZD0nbmV3Q29sb3JEaWFsb2cnO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCdkaWFsb2cnKTtcbiAgICAgICAgZm9ybS5pZD0nbmV3Q29sb3JGb3JtJztcbiAgICBjb25zdCBjbG9zZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjbG9zZURpYWxvZy5pZD1cImNsb3NlRGlhbG9nXCI7XG4gICAgICAgIGNsb3NlRGlhbG9nLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdYJyk7XG4gICAgICAgIGNsb3NlRGlhbG9nLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRGlhbG9nKTtcbiAgICAgICAgY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWU9XCJjaXJjbGUgY2lyY2xlLWJsdWVcIjtcbiAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgICAgIGNoYW5nZUNvbG9yKGNvbG9yKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZS1ncmVlblwiO1xuICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT57XG4gICAgICAgICAgICBsZXQgY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICBjaGFuZ2VDb2xvcihjb2xvcik7XG4gICAgICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgXG5cbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTmFtZT1cImNpcmNsZSBjaXJjbGUtb3JhbmdlXCI7XG4gICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PntcbiAgICAgICAgICAgIGxldCBjb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgICAgICBjaGFuZ2VDb2xvcihjb2xvcik7XG4gICAgICAgICAgICB1cGRhdGVET00oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgICBcblxuICAgIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lPVwiY2lyY2xlIGNpcmNsZS1ncmV5XCI7XG4gICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZTpFdmVudCk9PntcbiAgICAgICAgICAgIGxldCBjb2xvciA9IFwiZ3JleVwiO1xuICAgICAgICAgICAgY2hhbmdlQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgICAgXG5cbiAgICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTmFtZT1cImNpcmNsZSBjaXJjbGUtYmxhY2tcIjtcbiAgICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlOkV2ZW50KT0+e1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY2hhbmdlQ29sb3IoY29sb3IpO1xuICAgICAgICAgICAgdXBkYXRlRE9NKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTsgIFxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBkaWFsb2cuYXBwZW5kKGZvcm0pO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgY29udGVudD8uYXBwZW5kKGZyYWdtZW50KTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5mdW5jdGlvbiBjaGFuZ2VDb2xvcihjb2xvcjpzdHJpbmcpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gY29sb3I7XG59XG5mdW5jdGlvbiBjaGVja0xpc3RUYXNrcyhlOkV2ZW50KSB7XG4gICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICBsZXQgbGlzdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGxldCB4ID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcuaW5uZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgaWYgKHghLmZpcnN0RWxlbWVudENoaWxkIS5jbGFzc05hbWUgPT0gXCJ0YXNrLWl0ZW1cIikge1xuICAgICAgICAgICAgc2hvd0xpc3REZWxldGVDb25maXJtKGxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlTGlzdChsaXN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QobGlzdDpIVE1MRGl2RWxlbWVudCl7XG4gICAgICAgIGxldCBpZCA9IGxpc3Q/LmZpcnN0Q2hpbGQ/LnRleHRDb250ZW50O1xuICAgICAgICBsZXQgbXlMaXN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteUxpc3RzJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG15TGlzdHMhKTtcbiAgICAgICAgbGV0IG15UGFyc2VkTGlzdCA9IEpTT04ucGFyc2UobXlMaXN0cyEpOyBcbiAgICAgICAgbGV0IGluZCA9IG15UGFyc2VkTGlzdC5pbmRleE9mKGlkKTtcbiAgICAgICAgaWYgKGluZD4tMSkge1xuICAgICAgICAgICAgbXlQYXJzZWRMaXN0LnNwbGljZShpbmQsMSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TGlzdHMnLEpTT04uc3RyaW5naWZ5KG15UGFyc2VkTGlzdCkpOyAgICAgICAgXG4gICAgICAgIGxldCBsaXN0TmFtZTpzdHJpbmc9IFN0cmluZyhpZCk7ICBcbiAgICAgICAgcmVtb3ZlTGlzdFRhc2tzKGxpc3ROYW1lKTtcbiAgICAgICAgdXBkYXRlRE9NKCk7XG59XG5mdW5jdGlvbiBzaG93TGlzdERlbGV0ZUNvbmZpcm0obGlzdDpIVE1MRGl2RWxlbWVudCkge1xuICAgIGxldCBjb25maXJtRGVsZXRlID0gZmFsc2U7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudDtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZGlhbG9nLmlkPSdjb25maXJtRGVsZXRlRGlhbG9nJztcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywnZGlhbG9nJyk7XG4gICAgbGV0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1zZy5jbGFzc05hbWUgPSdkZWxldGVDb25maXJtTXNnJztcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVGhlcmUgYXJlIHRhc2tzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxpc3QuIFxcbkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/Jyk7XG4gICAgbXNnLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxldCBidXR0b25zUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbnNSb3cuY2xhc3NOYW1lPSdidXR0b25zUm93JztcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGVsZXRlJyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3QobGlzdCk7XG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGJ1dHRvbnNSb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NhbmNlbCcpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBjb25maXJtRGVsZXRlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBjb25maXJtRGVsZXRlO1xuICAgIH0pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBidXR0b25zUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZChtc2cpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uc1Jvdyk7XG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgY29udGVudD8uYXBwZW5kKGZyYWdtZW50KTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5mdW5jdGlvbiByZW1vdmVMaXN0VGFza3MobGlzdDpzdHJpbmcpIHtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgbGV0IHRoaXNLZXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkhKTtcbiAgICAgICAgaWYgKHRoaXNLZXkudGFza0xpc3QgPT0gbGlzdCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTb3J0RE9NKGxpc3RzQXJyYXk6c3RyaW5nW10sc29ydEZpZWxkOnN0cmluZykge1xuICAgIGNsZWFyRE9NKCk7XG4gICAgcmVuZGVyU29ydExpc3QobGlzdHNBcnJheSk7XG4gICAgbGV0IHRhc2tBcnJheT0gY3JlYXRlVGFza3NBcnJheSgpO1xuICAgIGxldCBzb3J0ZWRUYXNrcyA9IHNvcnRUYXNrQXJyYXkodGFza0FycmF5KTtcbiAgICByZW5kZXJUYXNrKHNvcnRGaWVsZCwgc29ydGVkVGFza3MpO1xuICAgIGFkZExpc3RUb2dnbGUoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTb3J0TGlzdChwYXJzZWRMaXN0OnN0cmluZ1tdKTp2b2lkIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAgICBcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3QuY2xhc3NOYW1lPSdsaXN0JztcbiAgICBsZXQgbGVuZ3RoID0gcGFyc2VkTGlzdC5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoO2krKykge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTGlzdC5jbGFzc05hbWU9J3Rhc2stbGlzdCc7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrTGlzdEhlYWRpbmcuY2xhc3NOYW1lPSd0YXNrLWxpc3QtaGVhZGluZyc7XG5cbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsaXN0TmFtZS5jbGFzc05hbWU9XCJsaXN0TmFtZVRpdGxlXCI7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcnNlZExpc3RbaV0pO1xuICAgICAgICBsaXN0TmFtZVRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsaXN0TmFtZS5hcHBlbmRDaGlsZChsaXN0TmFtZVRpdGxlKTsgICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGxpc3RUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdFRvZ2dsZS5jbGFzc05hbWU9J2xpc3QtdG9nZ2xlIG1pbnVzJztcbiAgICAgICAgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFx1MjAxM1wiKTtcbiAgICAgICAgbGlzdFRvZ2dsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgbGlzdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGU6RXZlbnQpPT50b2dnbGVMaXN0KGUpKTtcbiAgICAgICAgICAgIHRhc2tMaXN0SGVhZGluZy5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYXBwZW5kQ2hpbGQobGlzdFRvZ2dsZSk7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0xpc3RXcmFwcGVyLmNsYXNzTmFtZT0ndGFza0xpc3RXcmFwcGVyIHNob3dMaXN0JztcbiAgICAgICAgbGV0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbm5lci5jbGFzc05hbWU9J2lubmVyJztcbiAgICAgICAgICAgIHRhc2tMaXN0V3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgICAgICAgICB0YXNrTGlzdEhlYWRpbmcuYXBwZW5kQ2hpbGQodGFza0xpc3RXcmFwcGVyKTsgICAgIFxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTGlzdEhlYWRpbmcpO1xuICAgICAgICBjb250ZW50Py5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gICAgICAgIH1cbiAgICBjb250ZW50Py5hcHBlbmQoZnJhZ21lbnQpOyAgXG59O1xudXBkYXRlRE9NKCk7IiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXRcIjtcbmltcG9ydCB7IGludGxGb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaW50bEZvcm1hdERpc3RhbmNlXCI7XG5cbi8vQVBQTElDQVRJT04gU0NSSVBUU1xuXG5pbXBvcnQgeyBjcmVhdGVMaXN0c0FycmF5LCBjbGVhckRPTSwgcmVuZGVyTGlzdCB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyB0YXNrIHtcbiAgICB0YXNrOnN0cmluZztcbiAgICByYXdEYXRlOkRhdGU7XG4gICAgcHJpb3JpdHk6c3RyaW5nO1xuICAgIHN0YXR1czpzdHJpbmc7XG4gICAgZGV0YWlsczpzdHJpbmc7XG4gICAgbGlzdDpzdHJpbmc7IFxuICAgIGlkOnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih0YXNrT2JqOiB7dGFza05hbWU6c3RyaW5nOyB0YXNrRGF0ZTpzdHJpbmc7IHRhc2tQcmlvcml0eTpzdHJpbmc7dGFza1N0YXR1czpzdHJpbmc7IHRhc2tEZXRhaWxzOnN0cmluZzsgdGFza0xpc3Q6c3RyaW5nOyBpZDpzdHJpbmd9KSB7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2tPYmoudGFza05hbWU7XG4gICAgICAgIHRoaXMucmF3RGF0ZSA9IG5ldyBEYXRlKHRhc2tPYmoudGFza0RhdGUpO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdGFza09iai50YXNrUHJpb3JpdHk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGFza09iai50YXNrU3RhdHVzO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSB0YXNrT2JqLnRhc2tEZXRhaWxzO1xuICAgICAgICB0aGlzLmxpc3QgPSB0YXNrT2JqLnRhc2tMaXN0O1xuICAgICAgICB0aGlzLmlkID0gdGFza09iai5pZDtcbiAgICAgICAgfVxuICAgIGdldCBkYXRlKCkge1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSAodGhpcy5yYXdEYXRlKTtcbiAgICAgICAgbGV0IGRhdGVEaWZmID0gKGRhdGUuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKSkvKDEwMDAqNjAqNjAqMjQpO1xuICAgICAgICBpZiAoZGF0ZURpZmY8LTM2Nikge1xuICAgICAgICAgICAgbGV0IG15RGF0ZSA9IGludGxGb3JtYXREaXN0YW5jZShkYXRlLG5vdyx7dW5pdDoneWVhcid9KVxuICAgICAgICAgICAgcmV0dXJuIG15RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRlRGlmZj4tMzY2ICYmIGRhdGVEaWZmPD0tNTYpe1xuICAgICAgICAgICAgbGV0IG15RGF0ZSA9IGludGxGb3JtYXREaXN0YW5jZShkYXRlLG5vdyx7dW5pdDonbW9udGgnfSlcbiAgICAgICAgICAgIHJldHVybiBteURhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0ZURpZmY+LTU2ICYmIGRhdGVEaWZmPD0tMTUpe1xuICAgICAgICAgICAgbGV0IG15RGF0ZSA9IGludGxGb3JtYXREaXN0YW5jZShkYXRlLG5vdyx7dW5pdDond2Vlayd9KVxuICAgICAgICAgICAgcmV0dXJuIG15RGF0ZTtcbiAgICAgICAgfSAgICAgXG4gICAgICAgIGVsc2UgaWYgKGRhdGVEaWZmPi0xNSAmJiBkYXRlRGlmZjw9MTUpIHtcbiAgICAgICAgICAgIGxldCBteURhdGUgPSBpbnRsRm9ybWF0RGlzdGFuY2UoZGF0ZSxub3cse3VuaXQ6J2RheSd9KVxuICAgICAgICAgICAgcmV0dXJuIG15RGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgICAgXG4gICAgICAgICAgICBsZXQgbXlEYXRlID0gZm9ybWF0KG5ldyBEYXRlKHRoaXMucmF3RGF0ZSksJ1BQJyk7XG4gICAgICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgICAgICB9XG4gICAgfSBcbn1cbi8vRmluZHMgbXlMaXN0cyBpbiBMUyBvciBjcmVhdGVzIGlmIG5vdCB0aGVyZSAgXG5leHBvcnQgZnVuY3Rpb24gZmluZExvY1N0b3JlTGlzdHMoKTpudW1iZXIge1xuICAgIGxldCBsb2NTdG9yZSA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgbGV0IGxpc3RzSW5kZXg6bnVtYmVyO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxvY1N0b3JlKSkge1xuICAgICAgICBsaXN0c0luZGV4ID0gbG9jU3RvcmUuZmluZEluZGV4KGU9PmU9PT0nbXlMaXN0cycpO1xuICAgICAgICBpZiAobGlzdHNJbmRleD09LTEpIHtcbiAgICAgICAgICAgIGxldCB4Om51bWJlciA9IGxvY1N0b3JlLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBsaXN0c0FycmF5OnN0cmluZ1tdPVtcIk15IExpc3RcIl07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaXN0cycsSlNPTi5zdHJpbmdpZnkobGlzdHNBcnJheSkpO1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdHNJbmRleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59O1xuZXhwb3J0IGludGVyZmFjZSB0YXNrSW50IHtcbiAgICBkYXRlOnN0cmluZyxcbiAgICByYXdEYXRlOkRhdGUsXG4gICAgZGV0YWlsczpzdHJpbmcsXG4gICAgbGlzdDpzdHJpbmcsXG4gICAgc3RhdHVzOnN0cmluZyxcbiAgICB0YXNrOnN0cmluZyxcbiAgICBwcmlvcml0eTogc3RyaW5nLFxuICAgIGlkOnN0cmluZ1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0xpc3QoZTpFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbGlzdHNBcnJheSA9IGNyZWF0ZUxpc3RzQXJyYXkoKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3TGlzdERpYWxvZycpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xuICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgbGV0IHRoaXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0xpc3QnKSBhcyBIVE1MSW5wdXRFbGVtZW50OyAgICBcbiAgICBsZXQgbmV3TGlzdDpzdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ25ld0xpc3QnKSBhcyBzdHJpbmc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdHNBcnJheSkpIHtcbiAgICAgICAgbGlzdHNBcnJheS5wdXNoKG5ld0xpc3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaXN0cycsSlNPTi5zdHJpbmdpZnkobGlzdHNBcnJheSkpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIGRpYWxvZz8uY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGxpc3RzQXJyYXk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soZTpFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0RpYWxvZycpIGFzIEhUTUxEaWFsb2dFbGVtZW50O1xuICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgY29uc3QgdGFza0FycmF5TGVuZ3RoID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5sZW5ndGggKzE7XG4gICAgY29uc3QgbmV3VGFzayA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgbGV0IGluZGV4ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCB0YXNrS2V5ID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICBuZXdUYXNrLmlkID0gdGFza0tleTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrS2V5LEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZGlhbG9nPy5jbG9zZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRNeUxpc3QobGlzdHNBcnJheTpvYmplY3QpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0c0FycmF5KSkge1xuICAgICAgICBsZXQgbGlzdHNJbmRleCA9IGxpc3RzQXJyYXkuZmluZEluZGV4KGU9PmU9PT0nTXkgTGlzdCcpO1xuICAgICAgICBpZiAobGlzdHNJbmRleD09LTEpIHtcbiAgICAgICAgICAgIGxpc3RzQXJyYXkucHVzaCgnTXkgTGlzdCcpO1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RzQXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdHNBcnJheTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=