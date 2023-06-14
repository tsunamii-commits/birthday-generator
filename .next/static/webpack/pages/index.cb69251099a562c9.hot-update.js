"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_buildspace_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/buildspace-logo.png */ \"./assets/buildspace-logo.png\");\n/* harmony import */ var _assets_Wendy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Wendy.png */ \"./assets/Wendy.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [isGenerating, setIsGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const callGenerateEndpoint = async ()=>{\n        setIsGenerating(true);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(\"OpenAI replied...\", output.text);\n        setApiOutput(\"\".concat(output.text));\n        setIsGenerating(false);\n    };\n    const onUserChangedText = (event)=>{\n        setUserInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"GPT-3 Writer | buildspace\"\n                }, void 0, false, {\n                    fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-logo\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets_Wendy_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"buildspace Logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"wendy's magic birthday message generator!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-subtitle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"It's Wendy's 29th and she doesn't have enough friends to greet her. Make wendy's day by picking a random person - or animal - and have them greet Wendy a happy birthday in their special way!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"start typing here\",\n                            className: \"prompt-box\",\n                            value: userInput,\n                            onChange: onUserChangedText\n                        }, void 0, false, {\n                            fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-buttons\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                            onClick: callGenerateEndpoint,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"generate\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Generate\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 3\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"output\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-header-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output-header\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            setUserInput,\n                                            \" says:\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-content\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: apiOutput\n                                }, void 0, false, {\n                                    fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                                lineNumber: 79,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 3\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jampilarca/repos/gpt3-writer-starter/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"zURHhZF+x6f0bxSt0B3dBbYqFAU=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNFO0FBQzRCO0FBQ25CO0FBQ1A7QUFFakMsTUFBTUssT0FBTyxJQUFNOztJQUNuQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFdEQsTUFBTVEsdUJBQXVCLFVBQVk7UUFDdkNELGdCQUFnQixJQUFJO1FBRXBCRSxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO1lBQzVDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRWY7WUFBVTtRQUNuQztRQUVBLE1BQU1nQixPQUFPLE1BQU1QLFNBQVNRLElBQUk7UUFDaEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7UUFDbkJULFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJVLE9BQU9DLElBQUk7UUFFNUNoQixhQUFhLEdBQWUsT0FBWmUsT0FBT0MsSUFBSTtRQUMzQmQsZ0JBQWdCLEtBQUs7SUFDdkI7SUFHQSxNQUFNZSxvQkFBb0IsQ0FBQ0MsUUFBVTtRQUNuQ3BCLGFBQWFvQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDakM7SUFFRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMvQixrREFBSUE7MEJBQ0gsNEVBQUNnQzs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQzlCLG1EQUFLQTtvQ0FBQ2dDLEtBQUs5Qix5REFBS0E7b0NBQUUrQixLQUFJOzs7Ozs7Ozs7OzswQ0FFekIsOERBQUNKO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSTs4Q0FBRzs7Ozs7Ozs7Ozs7MENBRU4sOERBQUNMO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSzs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNOO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDTTs0QkFDREMsYUFBWTs0QkFDWlAsV0FBVTs0QkFDVkYsT0FBT3ZCOzRCQUNQaUMsVUFBVWI7Ozs7Ozs7Ozs7O2tDQUVaLDhEQUFDSTt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ1M7NEJBQ0NULFdBQVdyQixlQUFlLDRCQUE0QixpQkFBaUI7NEJBQ3ZFK0IsU0FBUzdCO3NDQUVqQiw0RUFBQ2tCO2dDQUFJQyxXQUFVOzBDQUNULDRFQUFDVzs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUlSbEMsMkJBQ0QsOERBQUNzQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0s7OzRDQUFJN0I7NENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUd0Qiw4REFBQ3VCO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDVzs4Q0FBR2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNWO0dBbEZNSDtLQUFBQTtBQW9GTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgYnVpbGRzcGFjZUxvZ28gZnJvbSAnLi4vYXNzZXRzL2J1aWxkc3BhY2UtbG9nby5wbmcnO1xuaW1wb3J0IHdlbmR5IGZyb20gJy4uL2Fzc2V0cy9XZW5keS5wbmcnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5jb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG5jb25zdCBbYXBpT3V0cHV0LCBzZXRBcGlPdXRwdXRdID0gdXNlU3RhdGUoJycpXG5jb25zdCBbaXNHZW5lcmF0aW5nLCBzZXRJc0dlbmVyYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbmNvbnN0IGNhbGxHZW5lcmF0ZUVuZHBvaW50ID0gYXN5bmMgKCkgPT4ge1xuICBzZXRJc0dlbmVyYXRpbmcodHJ1ZSk7XG4gIFxuICBjb25zb2xlLmxvZyhcIkNhbGxpbmcgT3BlbkFJLi4uXCIpXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2VuZXJhdGUnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcklucHV0IH0pLFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCB7IG91dHB1dCB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coXCJPcGVuQUkgcmVwbGllZC4uLlwiLCBvdXRwdXQudGV4dClcblxuICBzZXRBcGlPdXRwdXQoYCR7b3V0cHV0LnRleHR9YCk7XG4gIHNldElzR2VuZXJhdGluZyhmYWxzZSk7XG59XG5cblxuY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHQgPSAoZXZlbnQpID0+IHtcbiAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG59O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkdQVC0zIFdyaXRlciB8IGJ1aWxkc3BhY2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17d2VuZHl9IGFsdD1cImJ1aWxkc3BhY2UgTG9nb1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMT53ZW5keSdzIG1hZ2ljIGJpcnRoZGF5IG1lc3NhZ2UgZ2VuZXJhdG9yITwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5JdCdzIFdlbmR5J3MgMjl0aCBhbmQgc2hlIGRvZXNuJ3QgaGF2ZSBlbm91Z2ggZnJpZW5kcyB0byBncmVldCBoZXIuIE1ha2Ugd2VuZHkncyBkYXkgYnkgcGlja2luZyBhIHJhbmRvbSBwZXJzb24gLSBvciBhbmltYWwgLSBhbmQgaGF2ZSB0aGVtIGdyZWV0IFdlbmR5IGEgaGFwcHkgYmlydGhkYXkgaW4gdGhlaXIgc3BlY2lhbCB3YXkhPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInN0YXJ0IHR5cGluZyBoZXJlXCIgXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWJveFwiIFxuICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uVXNlckNoYW5nZWRUZXh0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0dlbmVyYXRpbmcgPyAnZ2VuZXJhdGUtYnV0dG9uIGxvYWRpbmcnIDogJ2dlbmVyYXRlLWJ1dHRvbid9XG4gICAgICAgICAgb25DbGljaz17Y2FsbEdlbmVyYXRlRW5kcG9pbnR9XG4gID4gICAgICAgICAgXG4gIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cbiAgICAgICAgPHA+R2VuZXJhdGU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICB7YXBpT3V0cHV0ICYmIChcbiAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXJcIj5cbiAgICAgICAgPGgyPntzZXRVc2VySW5wdXR9IHNheXM6PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cbiAgICAgIDxwPnthcGlPdXRwdXR9PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbil9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJidWlsZHNwYWNlTG9nbyIsIndlbmR5IiwidXNlU3RhdGUiLCJIb21lIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiYXBpT3V0cHV0Iiwic2V0QXBpT3V0cHV0IiwiaXNHZW5lcmF0aW5nIiwic2V0SXNHZW5lcmF0aW5nIiwiY2FsbEdlbmVyYXRlRW5kcG9pbnQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib3V0cHV0IiwidGV4dCIsIm9uVXNlckNoYW5nZWRUZXh0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic3JjIiwiYWx0IiwiaDEiLCJoMiIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImEiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});