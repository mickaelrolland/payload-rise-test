"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@payloadcms+live-preview@3.43.0";
exports.ids = ["vendor-chunks/@payloadcms+live-preview@3.43.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@payloadcms+live-preview@3.43.0/node_modules/@payloadcms/live-preview/dist/isDocumentEvent.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@payloadcms+live-preview@3.43.0/node_modules/@payloadcms/live-preview/dist/isDocumentEvent.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isDocumentEvent: () => (/* binding */ isDocumentEvent)\n/* harmony export */ });\nconst isDocumentEvent = (event, serverURL)=>event.origin === serverURL && event.data && typeof event.data === 'object' && event.data.type === 'payload-document-event';\n\n//# sourceMappingURL=isDocumentEvent.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHBheWxvYWRjbXMrbGl2ZS1wcmV2aWV3QDMuNDMuMC9ub2RlX21vZHVsZXMvQHBheWxvYWRjbXMvbGl2ZS1wcmV2aWV3L2Rpc3QvaXNEb2N1bWVudEV2ZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTzs7QUFFUCIsInNvdXJjZXMiOlsiL1VzZXJzL21pY2thZWwvRG9jdW1lbnRzL2dhbGFkcmltL3Jpc2UvY21zX3Jlc2VhcmNoL3BheWxvYWQvcmlzZS9ub2RlX21vZHVsZXMvLnBucG0vQHBheWxvYWRjbXMrbGl2ZS1wcmV2aWV3QDMuNDMuMC9ub2RlX21vZHVsZXMvQHBheWxvYWRjbXMvbGl2ZS1wcmV2aWV3L2Rpc3QvaXNEb2N1bWVudEV2ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpc0RvY3VtZW50RXZlbnQgPSAoZXZlbnQsIHNlcnZlclVSTCk9PmV2ZW50Lm9yaWdpbiA9PT0gc2VydmVyVVJMICYmIGV2ZW50LmRhdGEgJiYgdHlwZW9mIGV2ZW50LmRhdGEgPT09ICdvYmplY3QnICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ3BheWxvYWQtZG9jdW1lbnQtZXZlbnQnO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0RvY3VtZW50RXZlbnQuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@payloadcms+live-preview@3.43.0/node_modules/@payloadcms/live-preview/dist/isDocumentEvent.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@payloadcms+live-preview@3.43.0/node_modules/@payloadcms/live-preview/dist/ready.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@payloadcms+live-preview@3.43.0/node_modules/@payloadcms/live-preview/dist/ready.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ready: () => (/* binding */ ready)\n/* harmony export */ });\nconst ready = (args)=>{\n    const { serverURL } = args;\n    if (typeof window !== 'undefined') {\n        // This subscription may have been from either an iframe or a popup\n        // We need to report 'ready' to the parent window, whichever it may be\n        // i.e. `window?.opener` for popups, `window?.parent` for iframes\n        const windowToPostTo = window?.opener || window?.parent;\n        windowToPostTo?.postMessage({\n            type: 'payload-live-preview',\n            ready: true\n        }, serverURL);\n    }\n};\n\n//# sourceMappingURL=ready.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHBheWxvYWRjbXMrbGl2ZS1wcmV2aWV3QDMuNDMuMC9ub2RlX21vZHVsZXMvQHBheWxvYWRjbXMvbGl2ZS1wcmV2aWV3L2Rpc3QvcmVhZHkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1AsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsiL1VzZXJzL21pY2thZWwvRG9jdW1lbnRzL2dhbGFkcmltL3Jpc2UvY21zX3Jlc2VhcmNoL3BheWxvYWQvcmlzZS9ub2RlX21vZHVsZXMvLnBucG0vQHBheWxvYWRjbXMrbGl2ZS1wcmV2aWV3QDMuNDMuMC9ub2RlX21vZHVsZXMvQHBheWxvYWRjbXMvbGl2ZS1wcmV2aWV3L2Rpc3QvcmVhZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlYWR5ID0gKGFyZ3MpPT57XG4gICAgY29uc3QgeyBzZXJ2ZXJVUkwgfSA9IGFyZ3M7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFRoaXMgc3Vic2NyaXB0aW9uIG1heSBoYXZlIGJlZW4gZnJvbSBlaXRoZXIgYW4gaWZyYW1lIG9yIGEgcG9wdXBcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZXBvcnQgJ3JlYWR5JyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2hldmVyIGl0IG1heSBiZVxuICAgICAgICAvLyBpLmUuIGB3aW5kb3c/Lm9wZW5lcmAgZm9yIHBvcHVwcywgYHdpbmRvdz8ucGFyZW50YCBmb3IgaWZyYW1lc1xuICAgICAgICBjb25zdCB3aW5kb3dUb1Bvc3RUbyA9IHdpbmRvdz8ub3BlbmVyIHx8IHdpbmRvdz8ucGFyZW50O1xuICAgICAgICB3aW5kb3dUb1Bvc3RUbz8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ3BheWxvYWQtbGl2ZS1wcmV2aWV3JyxcbiAgICAgICAgICAgIHJlYWR5OiB0cnVlXG4gICAgICAgIH0sIHNlcnZlclVSTCk7XG4gICAgfVxufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhZHkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@payloadcms+live-preview@3.43.0/node_modules/@payloadcms/live-preview/dist/ready.js\n");

/***/ })

};
;