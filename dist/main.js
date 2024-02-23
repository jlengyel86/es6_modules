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

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n    constructor(make, model, year){\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/Car.js?");

/***/ }),

/***/ "./src/Wishlist.js":
/*!*************************!*\
  !*** ./src/Wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\nclass Wishlist {\r\n    constructor() {\r\n        this.cars = [];\r\n    }\r\n\r\n    add(car) {\r\n        this.cars.push(car);\r\n    }\r\n\r\n    remove(car) {\r\n        this.cars = this.cars.filter((existingCar) => existingCar != car)\r\n    }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/Wishlist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ \"./src/Car.js\");\n/* harmony import */ var _Wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wishlist */ \"./src/Wishlist.js\");\n//import Wishlist from \"./Wishlist.js\";\r\n//import Car from \"./Car\";\r\n//let wishlist = new Wishlist();\r\n//let car = new Car(\"Ford\", \"Mustang\", 2022);\r\n//wishlist.add(car);\r\n//console.log(wishlist);\r\n//wishlist.remove(car);\r\n//console.log(wishlist);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Form selections\r\nlet form = document.querySelector(\"#submitForm\");\r\nlet makeInput = document.querySelector(\"#makeInput\");\r\nlet modelInput = document.querySelector(\"#modelInput\");\r\nlet yearInput = document.querySelector(\"#yearInput\");\r\n\r\n//Display Selections\r\nlet wishlistUl = document.querySelector(\"#wishListContainer > ul\");\r\nlet makeP = document.querySelector(\"#car-make\");\r\nlet modelP = document.querySelector(\"#car-model\");\r\nlet yearP = document.querySelector(\"#car-year\");\r\nlet removeBtn = document.querySelector(\"#removeBtn\");\r\n\r\n//Script Values\r\nlet wishlist = new _Wishlist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n//Event Listener\r\n\r\n//Form is submitted\r\nform.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n//Will recieve make, model, year inputs\r\nlet make = makeInput.value;\r\nlet model = modelInput.value;\r\nlet year = yearInput.value;\r\n\r\n//Will make new car from inputs\r\nlet car = new _Car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](make, model, year);\r\n\r\n//Will add new car to wishlist\r\nwishlist.add(car);\r\n\r\n//Will update the DOM\r\nlet li = document.createElement(\"li\");\r\nli.classList.add(\"list-group-item\");\r\nli.textContent = car.model;\r\n\r\n\r\n//Li is clicked\r\nli.addEventListener(\"click\", (event) => {\r\n    //will diplay car details in vehicle card\r\n    makeP.textContent = car.make;\r\n    modelP.textContent = car.model;\r\n    yearP.textContent = car.year;\r\n\r\n    //enable remove button on vehicle card\r\n    removeBtn.disabled = true;\r\n    removeBtn.onclick = (event) => {\r\n        //removes car from wishlist\r\n        wishList.remove(car);\r\n\r\n        //reset vehicle card display value\r\n        makeP.textContent = \"\";\r\n        modelP.textContent = \"\";\r\n        yearP.textContent = \"\";\r\n\r\n        //disabled remove button\r\n        removeBtn.disabled = true;\r\n\r\n        //remove li from DOM\r\n        wishlistUl.removeChild(li);\r\n    };\r\n});\r\n\r\nwishlistUl.appendChild(li);\r\n\r\n//Clear form input\r\nmakeInput.value = \"\";\r\nmodelInput.value = \"\";\r\nyearInput.value = \"\";\r\n});\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;