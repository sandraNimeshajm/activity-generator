/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/components/modal.ts":
/*!************************************!*\
  !*** ./src/ts/components/modal.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar modal = function () {\r\n    var info = document.querySelector(\".js-info\");\r\n    var closeBtn = document.querySelector(\".js-close-btn\");\r\n    var activity = document.querySelector(\".js-activity\");\r\n    var activityBtn = document.querySelector(\".js-btn\");\r\n    function modalOpen() {\r\n        info.classList.add(\"show\");\r\n        activity.style.opacity = String(0);\r\n        activityBtn.style.opacity = String(0);\r\n    }\r\n    function modalClose() {\r\n        info.classList.add(\"animate\");\r\n        info.classList.remove(\"show\");\r\n        activity.style.opacity = String(1);\r\n        activityBtn.style.opacity = String(1);\r\n    }\r\n    window.addEventListener(\"DOMContentLoaded\", modalOpen);\r\n    closeBtn.addEventListener(\"click\", modalClose);\r\n};\r\nexports[\"default\"] = modal;\r\n\n\n//# sourceURL=webpack://activity-generator/./src/ts/components/modal.ts?");

/***/ }),

/***/ "./src/ts/components/randomActivity.ts":
/*!*********************************************!*\
  !*** ./src/ts/components/randomActivity.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar randomActivity = function () {\r\n    var activityContainer = document.querySelector(\".js-activity\");\r\n    var activityBtn = document.querySelector(\".js-btn\");\r\n    var activityTextBox = document.querySelector(\".js-activity-card-text-box\");\r\n    var fetchActivity = function () {\r\n        var url = \"https://www.boredapi.com/api/activity\";\r\n        fetch(url)\r\n            .then(function (res) {\r\n            return res.json();\r\n        })\r\n            .then(function (data) {\r\n            var activity = {\r\n                activity: data.activity,\r\n                accessibility: data.accessibility,\r\n                participants: data.participants,\r\n                type: data.type,\r\n            };\r\n            displayActivity(activity);\r\n            activityTextBox.classList.add(\"animate\");\r\n        });\r\n    };\r\n    fetchActivity();\r\n    var displayActivity = function (activity) {\r\n        var activityHTMLString = \"\\n          <div class=\\\"activity__card\\\">\\n          <h1 class=\\\"activity__card-title\\\">Random activity generator</h1>\\n          <div class=\\\"activity__card-text-box | js-activity-card-text-box\\\">\\n          <p class=\\\"activity__card-text\\\"><span class=\\\"activity__card-text-title\\\">Activity</span>: \" + activity.activity + \"</p>\\n               <p class=\\\"activity__card-text\\\"><span class=\\\"activity__card-text-title\\\">Accessibility</span>: \" + activity.accessibility + \"</p>\\n              <p class=\\\"activity__card-text\\\"><span class=\\\"activity__card-text-title\\\">Participants</span>: \" + activity.participants + \"</p>\\n              <p class=\\\"activity__card-text\\\"><span class=\\\"activity__card-text-title\\\">Type</span>: \" + activity.type + \"</p>\\n          </div>\\n              \\n              \\n          </div>\\n      \";\r\n        activityContainer.innerHTML = activityHTMLString;\r\n        activityBtn.addEventListener(\"click\", fetchActivity);\r\n    };\r\n};\r\nexports[\"default\"] = randomActivity;\r\n\n\n//# sourceURL=webpack://activity-generator/./src/ts/components/randomActivity.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar randomActivity_1 = __webpack_require__(/*! ./components/randomActivity */ \"./src/ts/components/randomActivity.ts\");\r\nvar modal_1 = __webpack_require__(/*! ./components/modal */ \"./src/ts/components/modal.ts\");\r\n(0, randomActivity_1.default)();\r\n(0, modal_1.default)();\r\n\n\n//# sourceURL=webpack://activity-generator/./src/ts/main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;