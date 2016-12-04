/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var DynamicScroll_tsx_1 = __webpack_require__(3);
	var testDivs = [];
	for (var i = 0; i < 1000; i++) {
	    testDivs.push(React.createElement("div", {"data-test": i, key: i}, 
	        "test", 
	        i));
	}
	ReactDOM.render(React.createElement(DynamicScroll_tsx_1.default, {data: testDivs, height: 500, itemHeight: 18}), document.getElementById("main"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DynamicScroll = (function (_super) {
	    __extends(DynamicScroll, _super);
	    function DynamicScroll() {
	        _super.call(this);
	        this.state = {
	            currentMin: 0,
	            displayNum: 40,
	            children: []
	        };
	    }
	    DynamicScroll.prototype.componentWillMount = function () {
	        var displayNum = this.props.height / this.props.itemHeight + 10;
	        this.setState({
	            currentMin: 0,
	            displayNum: displayNum,
	            children: this.props.data.slice(this.state.currentMin, this.state.currentMin + displayNum)
	        });
	    };
	    DynamicScroll.prototype.componentDidMount = function () {
	        var _this = this;
	        this.refs.scrollFather.addEventListener('scroll', function () {
	            var scrollTop = _this.refs.scrollFather.scrollTop;
	            var itemHeight = _this.props.itemHeight;
	            var currentMin = 0;
	            if (scrollTop > itemHeight * 5) {
	                currentMin = (scrollTop - itemHeight * 5) / itemHeight;
	            }
	            _this.setState({
	                currentMin: currentMin,
	                children: _this.props.data.slice(currentMin, currentMin + _this.state.displayNum)
	            });
	        });
	    };
	    DynamicScroll.prototype.render = function () {
	        var divStyle = {
	            height: this.props.height,
	            overflow: 'auto'
	        };
	        var topHeight = this.props.itemHeight * this.state.currentMin;
	        var bottomHeight = (this.props.data.length - this.state.currentMin - this.state.displayNum) * this.props.itemHeight;
	        return (React.createElement("div", {id: 'scrollFather', ref: 'scrollFather', style: divStyle}, 
	            React.createElement("div", {style: { height: topHeight }}), 
	            this.state.children, 
	            React.createElement("div", {style: { height: bottomHeight }})));
	    };
	    return DynamicScroll;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DynamicScroll;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map