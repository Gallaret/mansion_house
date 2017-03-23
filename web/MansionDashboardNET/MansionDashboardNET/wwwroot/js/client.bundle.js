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
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	var Components = __webpack_require__(/*! expose?Components!./components */ 1);

/***/ },
/* 1 */
/*!***********************************************************!*\
  !*** ../~/expose-loader?Components!./components/index.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(/*! -!./index.js */ 2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {
	    UsersBox: __webpack_require__(/*! ./UsersBox */ 3)
	};

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./components/UsersBox.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 4);
	var NotificationBar = __webpack_require__(/*! ./top/NotificationBar */ 5);
	
	var UserList = React.createClass({displayName: "UserList",
	    render: function () {
	        return (
	            React.createElement("div", null, 
	                React.createElement("label", null, this.props.data.id), " ", React.createElement("br", null), 
	                React.createElement("label", null, this.props.data.password), " ", React.createElement("br", null), 
	                React.createElement("label", null, this.props.data.userName)
	            )
	        );
	    }
	});
	
	var UsersBox = React.createClass({displayName: "UsersBox",
	    getInitialState: function () {
	        return { data: this.props.initialData };
	    },
	    handleClick: function () {
	        console.log('clicked');
	    },
	    render: function () {
	        return (
	            React.createElement("div", {className: "userBox"}, 
	                React.createElement(NotificationBar, null), 
	                React.createElement("header", null, 
	                    React.createElement("hgroup", null, 
	                        React.createElement("h1", null, "Dashboard")
	                    )
	                ), 
	                React.createElement(UserList, {data: this.state.data}), 
	                React.createElement("button", {onClick: this.handleClick}, "Click")
	            )
	        );
	    }
	});
	
	module.exports = UsersBox;

/***/ },
/* 4 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/*!********************************************!*\
  !*** ./components/top/NotificationBar.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 4);
	
	var NotificationBar = React.createClass({displayName: "NotificationBar",
	    render: function () {
	        return (
	            React.createElement("div", {className: "notificationBar", style: { position: 'fixed', top: 0, left: 0, background: 'blue', width: '100%'}}, 
	                "asdasdasdas"
	            )
	        );
	    }
	});
	
	module.exports = NotificationBar;

/***/ }
/******/ ]);
//# sourceMappingURL=client.bundle.js.map