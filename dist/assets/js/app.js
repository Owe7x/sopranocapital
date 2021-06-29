/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelector('.brands-btn').onclick = function() {\r\n  document.querySelector('.brands-block-none').classList.toggle('visible');\r\n  document.querySelector('.brands-btn').hidden = true\r\n}\r\n\r\nconsole.log('file 1');\r\nvar srvPrices = {}\r\nvar c1 = document.getElementById(\"s3-check1\");\r\nvar c2 = document.getElementById(\"s3-check2\");\r\n\r\n\r\nfunction sliderHandler(price) {\r\n \r\n  if (price === undefined) {\r\n  price = srvPrices;\r\n } \r\n\r\n var persents = (price.totalS2 * price.totalS1) + (price.totalS3 * price.totalS1) + (price.totalS4 * price.totalS1)   ;\r\n var profit = (price.totalS1 * price.totalS2 * 0.25) + (price.totalS1 * price.totalS3 * 0.05) + (price.totalS1 * price.totalS4 * 0.70);\r\n document.getElementById(\"s1\").innerHTML = persents.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \") + ' ' + 'рублей';\r\n document.getElementById(\"s2\").innerHTML = profit.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \") + ' ' + 'рублей'; //\r\n document.getElementById(\"s3\").innerHTML = profit.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \" \") + ' ' + 'рублей'; //\r\n}\r\n\r\nvar srvPrices = {}\r\nvar c1 = document.getElementById(\"s3-check1\");\r\nvar c2 = document.getElementById(\"s3-check2\");\r\n\r\n\r\n$(\".range1\").ionRangeSlider({\r\nfrom: 3,\r\ngrid: false,\r\nvalues: [1,2,3,4,5],\r\nonChange: function (data) {\r\n  srvPrices.totalS1 = data.from_value;\r\n  sliderHandler(srvPrices)\r\n},\r\nonStart: function(data) {\r\n  srvPrices.totalS1 = data.from_value;\r\n  sliderHandler(srvPrices)\r\n}\r\n});  \r\n$(\".range2\").ionRangeSlider({\r\n from: 2,\r\n grid: false,\r\n values: [95000,100000,110000,120000,130000,135500,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000],\r\n onChange: function (data) {\r\n srvPrices.totalS2 = data.from_value;\r\n sliderHandler(srvPrices)\r\n },\r\n onStart: function(data) {\r\n srvPrices.totalS2 = data.from_value;\r\n sliderHandler(srvPrices)\r\n }\r\n});\r\n$(\".range3\").ionRangeSlider({\r\n from: 5,\r\n grid: false,\r\n values: [100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000,360000,370000,380000,390000,400000,410000,420000,430000,440000,450000,460000,470000,480000,490000,500000],\r\n onChange: function (data) {\r\n srvPrices.totalS3 = data.from_value;\r\n sliderHandler(srvPrices)\r\n },\r\n onStart: function(data) {\r\n srvPrices.totalS3 = data.from_value;\r\n sliderHandler(srvPrices)\r\n }\r\n});\r\n$(\".range4\").ionRangeSlider({\r\n from: 10,\r\n grid: false,\r\n values: [50000,60000,70000,80000,90000,100000,110000,120000,130000,135500,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000],\r\n onChange: function (data) {\r\n srvPrices.totalS4 = data.from_value;\r\n sliderHandler(srvPrices)\r\n },\r\n onStart: function(data) {\r\n srvPrices.totalS4 = data.from_value;\r\n sliderHandler(srvPrices)\r\n }\r\n});\r\n\r\n$('.slider-1').slick( {\r\n  infinite: true,\r\n  dots: false,\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\SOPRANOCAPITAL\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\SOPRANOCAPITAL\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });