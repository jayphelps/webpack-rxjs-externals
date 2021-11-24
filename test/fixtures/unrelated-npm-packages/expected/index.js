(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs-whatever"), require("whatever-rxjs"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs_whatever", "whatever_rxjs"], factory);
	else if(typeof exports === 'object')
		exports["rxjsTest"] = factory(require("rxjs-whatever"), require("whatever-rxjs"));
	else
		root["rxjsTest"] = factory(root["rxjs-whatever"], root["whatever-rxjs"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_rxjs_whatever__, __WEBPACK_EXTERNAL_MODULE_whatever_rxjs__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "rxjs-whatever":
/*!**********************************************************************************************************************!*\
  !*** external {"root":"rxjs-whatever","commonjs":"rxjs-whatever","commonjs2":"rxjs-whatever","amd":"rxjs_whatever"} ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_whatever__;

/***/ }),

/***/ "whatever-rxjs":
/*!**********************************************************************************************************************!*\
  !*** external {"root":"whatever-rxjs","commonjs":"whatever-rxjs","commonjs2":"whatever-rxjs","amd":"whatever_rxjs"} ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_whatever_rxjs__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./test/fixtures/unrelated-npm-packages/index.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_whatever__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs-whatever */ "rxjs-whatever");
/* harmony import */ var rxjs_whatever__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_whatever__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatever_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatever-rxjs */ "whatever-rxjs");
/* harmony import */ var whatever_rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(whatever_rxjs__WEBPACK_IMPORTED_MODULE_1__);



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});