/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  color: #ffd36e;\\n  font-family: 'Playfair Display', serif;\\n  font-weight: 700;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  height: 100vh;\\n  width: 100vw;\\n  background: fixed rgb(93, 65, 0);\\n  background: fixed\\n    linear-gradient(67deg, rgba(93, 65, 0, 1) 0%, rgba(48, 32, 0, 1) 58%);\\n}\\n\\nh1 {\\n  font-weight: 900;\\n}\\n\\nh2 {\\n  font-weight: 700;\\n}\\n\\np,\\nli {\\n  font-weight: 200;\\n}\\n\\n#meet {\\n  grid-area: 2 / 1 / 3 / 3;\\n}\\n\\n#tab-container {\\n  margin-top: 20px;\\n  margin-bottom: 40px;\\n  display: flex;\\n  justify-content: center;\\n  gap: 4ch;\\n}\\n\\n#tab-container div {\\n  padding: 1ch 4ch;\\n  display: flex;\\n  justify-content: center;\\n  border: none;\\n  border-radius: 1ch;\\n  min-width: 10ch;\\n  width: 200px;\\n  background-color: #2a1d00;\\n  box-shadow: 2px 2px 0px 2px #5d4100;\\n  color: #ffd87f;\\n}\\n\\n#tab-container div:hover {\\n  background-color: #ffc43b;\\n  color: #080600;\\n  transition: all ease-in-out 0.3s;\\n  box-shadow: 2px 2px 0px 2px #5d4100;\\n}\\n\\n#tab-container div:active {\\n  background-color: #191200;\\n  color: #ffd87f;\\n}\\n\\n#page-container {\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: fit-content repeat(auto-fit, minmax(250px, 1fr));\\n}\\n\\n#page-container > div {\\n  max-width: 40ch;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-bottom: 4ch;\\n  /* display: grid;\\n  place-items: center; */\\n}\\n\\n#page-container div img {\\n  object-fit: contain;\\n  max-height: 150px;\\n}\\n\\n#page-container :first-child {\\n  grid-area: 1 / 1 / 2 / 3;\\n  /* min-width: 60vw; */\\n}\\n\\n#hero-container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#the-team {\\n  place-self: center;\\n  grid-column: 1 / span 2;\\n  width: 65vw;\\n  margin-top: 5ch;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_person_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/person.png */ \"./src/assets/person.png\");\n\n\nfunction loadAbout() {\n  const pageContainer = document.createElement('div');\n  pageContainer.id = 'page-container';\n  content.appendChild(pageContainer);\n  // Title\n  const title = document.createElement('h1');\n  title.textContent = 'You have come too far';\n  pageContainer.appendChild(title);\n  // Meet the team\n  const meet = document.createElement('p');\n  meet.id = 'meet';\n  meet.textContent = 'Now you must meet the team';\n  pageContainer.appendChild(meet);\n  // The Team\n  const theTeam = new Image();\n  theTeam.id = 'the-team';\n  theTeam.src = _assets_person_png__WEBPACK_IMPORTED_MODULE_0__;\n  pageContainer.appendChild(theTeam);\n  //\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n\n//# sourceURL=webpack://restaurant-page/./src/about-us.js?");

/***/ }),

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_fog_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fog.png */ \"./src/assets/fog.png\");\n/* harmony import */ var _assets_juice_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/juice.png */ \"./src/assets/juice.png\");\n/* harmony import */ var _assets_coffee_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/coffee.png */ \"./src/assets/coffee.png\");\n\n\n\n\nfunction loadDrinks() {\n  const pageContainer = document.createElement('div');\n  pageContainer.id = 'page-container';\n  content.appendChild(pageContainer);\n  // Menu title\n  const menuTitle = document.createElement('h1');\n  menuTitle.textContent = 'Beverages';\n  pageContainer.appendChild(menuTitle);\n  // Juice\n  const juice = document.createElement('div');\n  pageContainer.appendChild(juice);\n  const juiceTitle = document.createElement('h2');\n  juiceTitle.textContent = 'Juice: $5.50';\n  juice.appendChild(juiceTitle);\n  const juiceImg = new Image();\n  juiceImg.src = _assets_juice_png__WEBPACK_IMPORTED_MODULE_1__;\n  juice.appendChild(juiceImg);\n  const juiceText = document.createElement('p');\n  juiceText.textContent =\n    'A refreshing splash of coloured, flavoured juice! Served tepid, with or without pulp (at our discretion). Cup: +$2';\n  juice.appendChild(juiceText);\n  // Fog\n  const fog = document.createElement('div');\n  pageContainer.appendChild(fog);\n  const fogTitle = document.createElement('h2');\n  fogTitle.textContent = 'Thick Fog: $3';\n  fog.appendChild(fogTitle);\n  const fogImg = new Image();\n  fogImg.src = _assets_fog_png__WEBPACK_IMPORTED_MODULE_0__;\n  fog.appendChild(fogImg);\n  const fogText = document.createElement('p');\n  fogText.textContent =\n    'Quench your thirst with a delicious, thick fog. 99% water. Environmentally friendly packaging.';\n  fog.appendChild(fogText);\n  // Coffee\n  const coffee = document.createElement('div');\n  pageContainer.appendChild(coffee);\n  const coffeeTitle = document.createElement('h2');\n  coffeeTitle.textContent = 'Caffè Latte: $4';\n  coffee.appendChild(coffeeTitle);\n  const coffeeImg = new Image();\n  coffeeImg.src = _assets_coffee_png__WEBPACK_IMPORTED_MODULE_2__;\n  coffee.appendChild(coffeeImg);\n  const coffeeText = document.createElement('p');\n  coffeeText.textContent =\n    'Single origin 100% Arabica coffee, roasted in-house. We achieve our signature texture by steaming custard instead of milk. Non-dairy custard $9 extra.';\n  coffee.appendChild(coffeeText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDrinks);\n\n\n//# sourceURL=webpack://restaurant-page/./src/drinks.js?");

/***/ }),

/***/ "./src/foodstuffs.js":
/*!***************************!*\
  !*** ./src/foodstuffs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_breakfast_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/breakfast.png */ \"./src/assets/breakfast.png\");\n/* harmony import */ var _assets_apple_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/apple.png */ \"./src/assets/apple.png\");\n/* harmony import */ var _assets_croissant_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/croissant.png */ \"./src/assets/croissant.png\");\n/* harmony import */ var _assets_ramen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ramen.png */ \"./src/assets/ramen.png\");\n/* harmony import */ var _assets_rice_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/rice.png */ \"./src/assets/rice.png\");\n\n\n\n\n\n\nfunction loadFood() {\n  const pageContainer = document.createElement('div');\n  pageContainer.id = 'page-container';\n  content.appendChild(pageContainer);\n  //Title\n  const menuTitle = document.createElement('h1');\n  menuTitle.textContent = 'Foodstuffs';\n  pageContainer.appendChild(menuTitle);\n  // Breakfast\n  const breakfast = document.createElement('div');\n  pageContainer.appendChild(breakfast);\n  const breakfastTitle = document.createElement('h2');\n  breakfastTitle.textContent = 'Big Breakfast: $14';\n  breakfast.appendChild(breakfastTitle);\n  const breakfastImg = new Image();\n  breakfastImg.src = _assets_breakfast_png__WEBPACK_IMPORTED_MODULE_0__;\n  breakfast.appendChild(breakfastImg);\n  const breakfastText = document.createElement('p');\n  breakfastText.innerHTML =\n    'Free-range pancakes topped with butter and our choice of syrup, two bacon strips, and a side of <b>the egg</b>.';\n  breakfast.appendChild(breakfastText);\n  // Apple\n  const a = document.createElement('div');\n  pageContainer.appendChild(a);\n  const aTitle = document.createElement('h2');\n  aTitle.textContent = 'Apple: $8';\n  a.appendChild(aTitle);\n  const appleImg = new Image();\n  appleImg.src = _assets_apple_png__WEBPACK_IMPORTED_MODULE_1__;\n  a.appendChild(appleImg);\n  const aText = document.createElement('p');\n  aText.textContent =\n    'Developed in partnership with Trees™. This is a real apple that exists and biting into it causes a satisfying crunch in your mouth.';\n  a.appendChild(aText);\n  // Croissant\n  const c = document.createElement('div');\n  pageContainer.appendChild(c);\n  const cTitle = document.createElement('h2');\n  cTitle.textContent = 'Croissant: €5';\n  c.appendChild(cTitle);\n  const cImg = new Image();\n  cImg.src = _assets_croissant_png__WEBPACK_IMPORTED_MODULE_2__;\n  c.appendChild(cImg);\n  const cText = document.createElement('p');\n  cText.textContent =\n    'This imported croissant is the real deal. It is absolutely bursting to the brim with a brown gel. Bite into the crispy, buttery flake and discover a new you inside this goopy paradise.';\n  c.appendChild(cText);\n  // Ramen\n  const ramen = document.createElement('div');\n  pageContainer.appendChild(ramen);\n  const ramenTitle = document.createElement('h2');\n  ramenTitle.textContent = 'Small Ramen: ¥ 1200';\n  ramen.appendChild(ramenTitle);\n  const ramenImg = new Image();\n  ramenImg.src = _assets_ramen_png__WEBPACK_IMPORTED_MODULE_3__;\n  ramen.appendChild(ramenImg);\n  const ramenText = document.createElement('p');\n  ramenText.textContent =\n    \"A very small bowl of ramen. It comes with all the trimmings: noodle, spoon, mushrooms, green lines, two halves of an egg, and sticks. Slurp it on down, what's the worst that could happen?\";\n  ramen.appendChild(ramenText);\n  const rice = document.createElement('div');\n  pageContainer.appendChild(rice);\n  const riceTitle = document.createElement('h2');\n  riceTitle.textContent = 'Bag of Rice: $24';\n  rice.appendChild(riceTitle);\n  const riceImg = new Image();\n  riceImg.src = _assets_rice_png__WEBPACK_IMPORTED_MODULE_4__;\n  rice.appendChild(riceImg);\n  const riceText = document.createElement('p');\n  riceText.textContent =\n    'Bag of rice. For convenient snacking on-the-go, each grain is individually wrapped. Great for sharing, or as a guilty pleasure all to yourself!';\n  rice.appendChild(riceText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFood);\n\n\n//# sourceURL=webpack://restaurant-page/./src/foodstuffs.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_table_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/table.png */ \"./src/assets/table.png\");\n\n\nfunction loadHome() {\n  const pageContainer = document.createElement('div');\n  pageContainer.id = 'page-container';\n  content.appendChild(pageContainer);\n  //Hero container\n  const heroContainer = document.createElement('div');\n  heroContainer.id = 'hero-container';\n  pageContainer.appendChild(heroContainer);\n  //Image\n  const heroImg = new Image();\n  heroImg.src = _assets_table_png__WEBPACK_IMPORTED_MODULE_0__;\n  heroContainer.appendChild(heroImg);\n  // Heading\n  const h1 = document.createElement('h1');\n  h1.id = 'header';\n  h1.textContent = 'Real food for real people';\n  heroContainer.appendChild(h1);\n  // Blurb\n  const copy = document.createElement('h3');\n  copy.id = 'copy';\n  copy.textContent =\n    'Welcome to The Restaurant! We serve food and drinks; nothing more, nothing less.';\n  heroContainer.appendChild(copy);\n\n  // Hours container\n  const hoursContainer = document.createElement('div');\n  hoursContainer.id = 'hours-container';\n  pageContainer.appendChild(hoursContainer);\n  // Hours header\n  const hoursHead = document.createElement('h2');\n  hoursHead.textContent = 'Hours';\n  hoursContainer.appendChild(hoursHead);\n  // Hours UL\n  const hrsList = document.createElement('ul');\n  hoursContainer.appendChild(hrsList);\n  // Hours content\n  const mondayHrs = document.createElement('li');\n  mondayHrs.textContent = 'Monday: 5:00am - 3:00pm';\n  hrsList.appendChild(mondayHrs);\n  const tuesdayHrs = document.createElement('li');\n  tuesdayHrs.textContent = 'Tuesday: Closed';\n  hrsList.appendChild(tuesdayHrs);\n  const wednesdayHrs = document.createElement('li');\n  wednesdayHrs.textContent = 'Wednesday: Closed';\n  hrsList.appendChild(wednesdayHrs);\n  const thursdayHrs = document.createElement('li');\n  thursdayHrs.textContent = 'Thursday: 5:00am - 3:00pm';\n  hrsList.appendChild(thursdayHrs);\n  const fridayHrs = document.createElement('li');\n  fridayHrs.textContent = 'Friday: Closed';\n  hrsList.appendChild(fridayHrs);\n  const saturdayHrs = document.createElement('li');\n  saturdayHrs.textContent = 'Saturday: 11:00am - 1:00pm';\n  hrsList.appendChild(saturdayHrs);\n  const sundayHrs = document.createElement('li');\n  sundayHrs.textContent = 'Sunday: 3:00pm - 3:15pm';\n  hrsList.appendChild(sundayHrs);\n\n  // Location container\n  const locationContainer = document.createElement('div');\n  locationContainer.id = 'location-container';\n  pageContainer.appendChild(locationContainer);\n  // Location header\n  const addressHead = document.createElement('h2');\n  addressHead.textContent = 'Address';\n  locationContainer.appendChild(addressHead);\n  // Location\n  const locationText = document.createElement('p');\n  locationText.textContent = '404 Cherry Grove, Brittons Swamp, TAS 7330';\n  locationContainer.appendChild(locationText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _foodstuffs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodstuffs */ \"./src/foodstuffs.js\");\n/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drinks */ \"./src/drinks.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\n// Tab container\nconst tabContainer = document.createElement('div');\ntabContainer.id = 'tab-container';\ncontent.appendChild(tabContainer);\n// Home tab\nconst homeTab = document.createElement('div');\nhomeTab.id = 'home';\nhomeTab.textContent = 'Home';\nhomeTab.addEventListener('click', () =>\n  document.getElementById('page-container').remove()\n);\nhomeTab.addEventListener('click', _homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ntabContainer.appendChild(homeTab);\n// Food tab\nconst foodTab = document.createElement('div');\nfoodTab.id = 'food-menu';\nfoodTab.textContent = 'Foodstuffs';\nfoodTab.addEventListener('click', () =>\n  document.getElementById('page-container').remove()\n);\nfoodTab.addEventListener('click', _foodstuffs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ntabContainer.appendChild(foodTab);\n// Drinks tab\nconst drinksTab = document.createElement('div');\ndrinksTab.id = 'drinks-menu';\ndrinksTab.textContent = 'Beverages';\ndrinksTab.addEventListener('click', () =>\n  document.getElementById('page-container').remove()\n);\ndrinksTab.addEventListener('click', _drinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ntabContainer.appendChild(drinksTab);\n// About Us tab\nconst aboutTab = document.createElement('div');\naboutTab.id = 'about-us';\naboutTab.textContent = 'About Us';\naboutTab.addEventListener('click', () =>\n  document.getElementById('page-container').remove()\n);\naboutTab.addEventListener('click', _about_us__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\ntabContainer.appendChild(aboutTab);\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// loadFood();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/apple.png":
/*!******************************!*\
  !*** ./src/assets/apple.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f13f69a046aa83c03a3c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/apple.png?");

/***/ }),

/***/ "./src/assets/breakfast.png":
/*!**********************************!*\
  !*** ./src/assets/breakfast.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba2dad45553881fdc7b5.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/breakfast.png?");

/***/ }),

/***/ "./src/assets/coffee.png":
/*!*******************************!*\
  !*** ./src/assets/coffee.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0bb5bdad1fde1de29de.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/coffee.png?");

/***/ }),

/***/ "./src/assets/croissant.png":
/*!**********************************!*\
  !*** ./src/assets/croissant.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d0eb280c8fee73ad38bd.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/croissant.png?");

/***/ }),

/***/ "./src/assets/fog.png":
/*!****************************!*\
  !*** ./src/assets/fog.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4ea7aca474c62185d9f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/fog.png?");

/***/ }),

/***/ "./src/assets/juice.png":
/*!******************************!*\
  !*** ./src/assets/juice.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a711f766c401f33efba0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/juice.png?");

/***/ }),

/***/ "./src/assets/person.png":
/*!*******************************!*\
  !*** ./src/assets/person.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae01395139bcb1007fc1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/person.png?");

/***/ }),

/***/ "./src/assets/ramen.png":
/*!******************************!*\
  !*** ./src/assets/ramen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47c660636d6e20e0160a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/ramen.png?");

/***/ }),

/***/ "./src/assets/rice.png":
/*!*****************************!*\
  !*** ./src/assets/rice.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23c044e6cd89a0317615.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/rice.png?");

/***/ }),

/***/ "./src/assets/table.png":
/*!******************************!*\
  !*** ./src/assets/table.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8e95ca9f3a5dacc6894.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/table.png?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;