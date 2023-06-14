"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst basePromptPrefix = `Wendy is an amazing, smart, kind, beautiful, talented woman who is turning 29 today. She loves thoughtful gifts and cooking for people she loves. Have the celebrity / famous personality indicated below greet her a happy birthday, in their tone of voice. Poems / songs / jokes are more than welcome.\n\nPersonality / Celebrity:`;\nconst generateAction = async (req, res)=>{\n    // Run first prompt\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}`,\n        temperature: 0.8,\n        max_tokens: 250\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    res.status(200).json({\n        output: basePromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFDN0IsTUFBTU0sbUJBQW1CLENBQUM7O3dCQUVGLENBQUM7QUFDekIsTUFBTUMsaUJBQWlCLE9BQU9DLEtBQUtDLE1BQVE7SUFDekMsbUJBQW1CO0lBQ25CQyxRQUFRQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUVMLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBRTNELE1BQU1DLGlCQUFpQixNQUFNVCxPQUFPVSxnQkFBZ0IsQ0FBQztRQUNuREMsT0FBTztRQUNQQyxRQUFRLENBQUMsRUFBRVgsaUJBQWlCLEVBQUVFLElBQUlJLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7UUFDbERLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBRUEsTUFBTUMsbUJBQW1CTixlQUFlTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRztJQUV4RGQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxRQUFRTjtJQUFpQjtBQUNsRDtBQUVBLGlFQUFlYixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NyYXRjaHBhZC8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gJ29wZW5haSc7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcbmNvbnN0IGJhc2VQcm9tcHRQcmVmaXggPSBgV2VuZHkgaXMgYW4gYW1hemluZywgc21hcnQsIGtpbmQsIGJlYXV0aWZ1bCwgdGFsZW50ZWQgd29tYW4gd2hvIGlzIHR1cm5pbmcgMjkgdG9kYXkuIFNoZSBsb3ZlcyB0aG91Z2h0ZnVsIGdpZnRzIGFuZCBjb29raW5nIGZvciBwZW9wbGUgc2hlIGxvdmVzLiBIYXZlIHRoZSBjZWxlYnJpdHkgLyBmYW1vdXMgcGVyc29uYWxpdHkgaW5kaWNhdGVkIGJlbG93IGdyZWV0IGhlciBhIGhhcHB5IGJpcnRoZGF5LCBpbiB0aGVpciB0b25lIG9mIHZvaWNlLiBQb2VtcyAvIHNvbmdzIC8gam9rZXMgYXJlIG1vcmUgdGhhbiB3ZWxjb21lLlxuXG5QZXJzb25hbGl0eSAvIENlbGVicml0eTpgXG5jb25zdCBnZW5lcmF0ZUFjdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyBSdW4gZmlyc3QgcHJvbXB0XG4gIGNvbnNvbGUubG9nKGBBUEk6ICR7YmFzZVByb21wdFByZWZpeH0ke3JlcS5ib2R5LnVzZXJJbnB1dH1gKVxuXG4gIGNvbnN0IGJhc2VDb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiAndGV4dC1kYXZpbmNpLTAwMycsXG4gICAgcHJvbXB0OiBgJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fWAsXG4gICAgdGVtcGVyYXR1cmU6IDAuOCxcbiAgICBtYXhfdG9rZW5zOiAyNTAsXG4gIH0pO1xuICBcbiAgY29uc3QgYmFzZVByb21wdE91dHB1dCA9IGJhc2VDb21wbGV0aW9uLmRhdGEuY2hvaWNlcy5wb3AoKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG91dHB1dDogYmFzZVByb21wdE91dHB1dCB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQWN0aW9uOyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsImJhc2VQcm9tcHRQcmVmaXgiLCJnZW5lcmF0ZUFjdGlvbiIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidXNlcklucHV0IiwiYmFzZUNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJiYXNlUHJvbXB0T3V0cHV0IiwiZGF0YSIsImNob2ljZXMiLCJwb3AiLCJzdGF0dXMiLCJqc29uIiwib3V0cHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();