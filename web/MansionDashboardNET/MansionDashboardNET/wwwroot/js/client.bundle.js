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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module, exports) {

eval("module.exports = React;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCI/OWRlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./stylesheets/dashboard.scss ***!
  \************************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlc2hlZXRzL2Rhc2hib2FyZC5zY3NzPzJmMzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlc2hlZXRzL2Rhc2hib2FyZC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ../~/expose-loader?Components!./components/index.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"Components\"] = __webpack_require__(/*! -!./index.js */ 3);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/global.js */ 9)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanM/YTMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFtcIkNvbXBvbmVudHNcIl0gPSByZXF1aXJlKFwiLSEuXFxcXGluZGV4LmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vZXhwb3NlLWxvYWRlcj9Db21wb25lbnRzIS4vY29tcG9uZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("﻿module.exports = {\r\n    UsersBox: __webpack_require__(/*! ./UsersBox */ 4)\r\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXguanM/NjY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyLvu79tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFVzZXJzQm94OiByZXF1aXJlKCcuL1VzZXJzQm94JylcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./components/UsersBox.jsx ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ 0);\r\nvar NotificationBar = __webpack_require__(/*! ./top/NotificationBar */ 8);\r\nvar LeftPanel = __webpack_require__(/*! ./left/LeftPanel */ 5);\r\nvar styles = __webpack_require__(/*! ../stylesheets/dashboard.scss */ 1);\r\n\r\nvar UserList = React.createClass({displayName: \"UserList\",\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"div\", null, \r\n                React.createElement(\"label\", null, this.props.data.id), \" \", React.createElement(\"br\", null), \r\n                React.createElement(\"label\", null, this.props.data.password), \" \", React.createElement(\"br\", null), \r\n                React.createElement(\"label\", null, this.props.data.userName)\r\n            )\r\n        );\r\n    }\r\n});\r\n\r\nvar UsersBox = React.createClass({displayName: \"UsersBox\",\r\n    getInitialState: function () {\r\n        return { data: this.props.initialData };\r\n    },\r\n    handleClick: function () {\r\n        console.log(styles);\r\n    },\r\n    render: function () {\r\n\r\n        return (\r\n            React.createElement(\"div\", {className: \"container-fluid\"}, \r\n                React.createElement(NotificationBar, null), \r\n                React.createElement(\"div\", {className: \"content\"}, \r\n                    React.createElement(\"header\", null, \r\n                        React.createElement(\"hgroup\", {className: \"panel panel-info center-block\"}, \r\n                            React.createElement(\"h1\", {className: \"panel-heading\", style: { marginTop: '0px', fontSize: '25px'}}, \"Smart-Home Dashboard\"), \r\n                            React.createElement(\"h2\", {className: \"panel-body\", style: { fontSize: '15px'}}, \"System do zarządzania inteligentnym mieszkaniem\")\r\n                        )\r\n                    ), \r\n                    React.createElement(LeftPanel, null), \r\n                    React.createElement(\"div\", {className: \"panel panel-primary\", style: { height: '500px', width: '33%', float: 'right', marginLeft:'2%'}}, \r\n                        React.createElement(\"div\", {className: \"panel-heading\"}, \"Panel informacyjny\"), \r\n                        React.createElement(\"div\", {className: \"panel-body\"}, \r\n                            React.createElement(UserList, {data: this.state.data}), \r\n                            React.createElement(\"button\", {onClick: this.handleClick}, \"Click\")\r\n                        )\r\n                    ), \r\n                    React.createElement(\"footer\", null, \n                        \"Powered by ReactJS\"\n                    )\r\n                )\r\n            )\r\n        );\r\n    }\r\n});\r\n\r\nmodule.exports = UsersBox;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlcnNCb3guanN4PzhjMzEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIE5vdGlmaWNhdGlvbkJhciA9IHJlcXVpcmUoJy4vdG9wL05vdGlmaWNhdGlvbkJhcicpO1xyXG52YXIgTGVmdFBhbmVsID0gcmVxdWlyZSgnLi9sZWZ0L0xlZnRQYW5lbCcpO1xyXG52YXIgc3R5bGVzID0gcmVxdWlyZSgnLi4vc3R5bGVzaGVldHMvZGFzaGJvYXJkLnNjc3MnKTtcclxuXHJcbnZhciBVc2VyTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMuZGF0YS5pZH08L2xhYmVsPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5wcm9wcy5kYXRhLnBhc3N3b3JkfTwvbGFiZWw+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLmRhdGEudXNlck5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgVXNlcnNCb3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4geyBkYXRhOiB0aGlzLnByb3BzLmluaXRpYWxEYXRhIH07XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHlsZXMpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkJhciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhncm91cCBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1pbmZvIGNlbnRlci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcwcHgnLCBmb250U2l6ZTogJzI1cHgnIH19PlNtYXJ0LUhvbWUgRGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCIgc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fT5TeXN0ZW0gZG8gemFyesSFZHphbmlhIGludGVsaWdlbnRueW0gbWllc3prYW5pZW08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hncm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGVmdFBhbmVsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1wcmltYXJ5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnNTAwcHgnLCB3aWR0aDogJzMzJScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW5MZWZ0OicyJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPlBhbmVsIGluZm9ybWFjeWpueTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyTGlzdCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNsaWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvd2VyZWQgYnkgUmVhY3RKU1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBVc2Vyc0JveDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1VzZXJzQm94LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./components/left/LeftPanel.jsx ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ 0);\r\nvar CamerasList = __webpack_require__(/*! ./monitoring/CamerasList */ 7);\r\nvar DevicesList = __webpack_require__(/*! ./devices/DevicesList */ 6);\r\n\r\nvar LeftPanel = React.createClass({displayName: \"LeftPanel\",\r\n    getInitialState: function () {\r\n        return {\r\n            showCameras: true,\r\n            showDevices: true\r\n        };\r\n    },\r\n    toogleSection: function (visibility, action) {\r\n        switch (action)\r\n        {\r\n            case 'showCameras': \r\n                return this.setState({ showCameras: !visibility });\r\n            default:\r\n                return this.setState({ showDevices: !visibility });\r\n        }\r\n    },\r\n    render: function () {\r\n\r\n        return (\r\n            React.createElement(\"div\", {className: \"panel panel-primary\", style: { height: '500px', width: '65%', float: 'left'}}, \r\n                React.createElement(\"div\", {className: \"panel-heading\"}, \"Panel Smart-Home\"), \r\n                React.createElement(\"div\", {className: \"panel-body\"}, \r\n                    React.createElement(\"ul\", {className: \"list-group\"}, \r\n                        React.createElement(\"li\", {className: \"list-group-item\"}, \r\n                            React.createElement(\"label\", {className: \"text-primary\"}, \r\n                                React.createElement(\"span\", {onClick: function()  {return this.toogleSection(this.state.showCameras, 'showCameras');}.bind(this), className: this.state.showCameras ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-minus'}), \n                                \"Monitoring\"\n                            ), \r\n                            React.createElement(\"span\", {className: \"badge\"}, \"12\"), React.createElement(\"br\", null), \r\n                            React.createElement(\"div\", {id: \"camerasList\", className: this.state.showCameras ? 'show' : 'hide'}, \r\n                                React.createElement(CamerasList, null)\r\n                            )\r\n                        ), \r\n\r\n                        React.createElement(\"li\", {className: \"list-group-item\"}, \"Urządzenia \", React.createElement(\"span\", {className: \"badge\"}, \"5\"), \r\n                            React.createElement(DevicesList, null)\r\n                        ), \r\n                        React.createElement(\"li\", {className: \"list-group-item\"}, \"Magazyn danych \", React.createElement(\"span\", {className: \"badge\"}, \"3\"))\r\n                    )\r\n                )\r\n            )\r\n        );\r\n    }\r\n});\r\n\r\nmodule.exports = LeftPanel;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGVmdC9MZWZ0UGFuZWwuanN4PzI4NDYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIENhbWVyYXNMaXN0ID0gcmVxdWlyZSgnLi9tb25pdG9yaW5nL0NhbWVyYXNMaXN0Jyk7XHJcbnZhciBEZXZpY2VzTGlzdCA9IHJlcXVpcmUoJy4vZGV2aWNlcy9EZXZpY2VzTGlzdCcpO1xyXG5cclxudmFyIExlZnRQYW5lbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNob3dDYW1lcmFzOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93RGV2aWNlczogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdG9vZ2xlU2VjdGlvbjogZnVuY3Rpb24gKHZpc2liaWxpdHksIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAnc2hvd0NhbWVyYXMnOiBcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgc2hvd0NhbWVyYXM6ICF2aXNpYmlsaXR5IH0pO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBzaG93RGV2aWNlczogIXZpc2liaWxpdHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLXByaW1hcnlcIiBzdHlsZT17eyBoZWlnaHQ6ICc1MDBweCcsIHdpZHRoOiAnNjUlJywgZmxvYXQ6ICdsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPlBhbmVsIFNtYXJ0LUhvbWU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvb2dsZVNlY3Rpb24odGhpcy5zdGF0ZS5zaG93Q2FtZXJhcywgJ3Nob3dDYW1lcmFzJyl9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93Q2FtZXJhcyA/ICdnbHlwaGljb24gZ2x5cGhpY29uLXBsdXMnIDogJ2dseXBoaWNvbiBnbHlwaGljb24tbWludXMnfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9uaXRvcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+MTI8L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FtZXJhc0xpc3RcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd0NhbWVyYXMgPyAnc2hvdycgOiAnaGlkZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFzTGlzdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+VXJ6xIVkemVuaWEgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2VcIj41PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERldmljZXNMaXN0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5NYWdhenluIGRhbnljaCA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZVwiPjM8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMZWZ0UGFuZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sZWZ0L0xlZnRQYW5lbC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./components/left/devices/DevicesList.jsx ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ 0);\r\n\r\nvar DevicesList = React.createClass({displayName: \"DevicesList\",\r\n\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"label\", {className: \"custom-file\"}, \r\n                React.createElement(\"input\", {type: \"file\", id: \"file\", className: \"custom-file-input\"}), \r\n                React.createElement(\"span\", {className: \"custom-file-control\"})\r\n            )\r\n        );\r\n    }\r\n});\r\n\r\nmodule.exports = DevicesList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGVmdC9kZXZpY2VzL0RldmljZXNMaXN0LmpzeD8zZWExIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcblxyXG52YXIgRGV2aWNlc0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImN1c3RvbS1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVcIiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1pbnB1dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZS1jb250cm9sXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEZXZpY2VzTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xlZnQvZGV2aWNlcy9EZXZpY2VzTGlzdC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./components/left/monitoring/CamerasList.jsx ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ 0);\r\n\r\nvar CamerasList = React.createClass({displayName: \"CamerasList\",\r\n\r\n    render: function () {\r\n\r\n        var list = [{ id: 'jeden', key: '1', url: '../images/banner1.svg' }, { id: 'dwa', key: '2', url: '../images/banner2.svg' }];\r\n\r\n        return (\r\n            React.createElement(\"div\", {className: \"form-inline\"}, \" \", \r\n                list.map(function (listValue) {\r\n                    return React.createElement(\"div\", {key: listValue.key, className: \"form-group text-center\", style: { marginRight: '25px'}}, \r\n                        React.createElement(\"p\", {className: \"center-block\"}, React.createElement(\"img\", {src: listValue.url, height: \"80px\", width: \"80px\"})), \r\n                        React.createElement(\"label\", null, listValue.id)\r\n                    );\r\n                })\r\n            )\r\n        );\r\n    }\r\n});\r\n\r\nmodule.exports = CamerasList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGVmdC9tb25pdG9yaW5nL0NhbWVyYXNMaXN0LmpzeD9iNDA2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcblxyXG52YXIgQ2FtZXJhc0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBsaXN0ID0gW3sgaWQ6ICdqZWRlbicsIGtleTogJzEnLCB1cmw6ICcuLi9pbWFnZXMvYmFubmVyMS5zdmcnIH0sIHsgaWQ6ICdkd2EnLCBrZXk6ICcyJywgdXJsOiAnLi4vaW1hZ2VzL2Jhbm5lcjIuc3ZnJyB9XTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0Lm1hcChmdW5jdGlvbiAobGlzdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtsaXN0VmFsdWUua2V5fSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcyNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2VudGVyLWJsb2NrXCI+PGltZyBzcmM9e2xpc3RWYWx1ZS51cmx9IGhlaWdodD1cIjgwcHhcIiB3aWR0aD1cIjgwcHhcIiAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntsaXN0VmFsdWUuaWR9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYXNMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGVmdC9tb25pdG9yaW5nL0NhbWVyYXNMaXN0LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./components/top/NotificationBar.jsx ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ 0);\r\n\r\nvar NotificationBar = React.createClass({displayName: \"NotificationBar\",\r\n    render: function () {\r\n        return (\r\n            React.createElement(\"nav\", {className: \"navbar navbar-fixed-top navbar-inverse\"}, \r\n                React.createElement(\"a\", {className: \"navbar-brand\", href: \"#\"}, \"Navbar\"), \r\n                React.createElement(\"ul\", {className: \"navbar-nav\", style: { marginTop: '15px'}}, \r\n                    React.createElement(\"li\", null, \" \", React.createElement(\"a\", {className: \"navbar-link\", href: \"#\", style: { textDecoration: 'none'}}, \"Active\"), \" \"), \r\n                    React.createElement(\"li\", null, \" \", React.createElement(\"a\", {className: \"navbar-link\", href: \"#\", style: { marginLeft: '15px', textDecoration: 'none'}}, \"Link\"), \" \"), \r\n                    React.createElement(\"li\", null, \" \", React.createElement(\"a\", {className: \"navbar-link\", href: \"#\", style: { marginLeft: '15px', textDecoration: 'none'}}, \"Link\"), \" \"), \r\n                    React.createElement(\"li\", null, \" \", React.createElement(\"a\", {className: \"navbar-link\", href: \"#\", style: { marginLeft: '15px', textDecoration: 'none'}}, \"Disabled\"), \" \")\r\n                )\r\n                \r\n            )\r\n        );\r\n    }\r\n});\r\n\r\nmodule.exports = NotificationBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9wL05vdGlmaWNhdGlvbkJhci5qc3g/ZGQ4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxudmFyIE5vdGlmaWNhdGlvbkJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1maXhlZC10b3AgbmF2YmFyLWludmVyc2VcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+TmF2YmFyPC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+IDxhIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCIgaHJlZj1cIiNcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PkFjdGl2ZTwvYT4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+IDxhIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCIgaHJlZj1cIiNcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+TGluazwvYT4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+IDxhIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCIgaHJlZj1cIiNcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+TGluazwvYT4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+IDxhIGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCIgaHJlZj1cIiNcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTVweCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+RGlzYWJsZWQ8L2E+IDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb3RpZmljYXRpb25CYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90b3AvTm90aWZpY2F0aW9uQmFyLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ../~/webpack/buildin/global.js ***!
  \**************************************/
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9+L3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanM/NjJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ (function(module, exports, __webpack_require__) {

eval("﻿var Components = __webpack_require__(/*! expose-loader?Components!./components */ 2);\r\n__webpack_require__(/*! ./stylesheets/dashboard.scss */ 1);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQuanM/ODk0NiJdLCJzb3VyY2VzQ29udGVudCI6WyLvu792YXIgQ29tcG9uZW50cyA9IHJlcXVpcmUoJ2V4cG9zZS1sb2FkZXI/Q29tcG9uZW50cyEuL2NvbXBvbmVudHMnKTtcclxucmVxdWlyZSgnLi9zdHlsZXNoZWV0cy9kYXNoYm9hcmQuc2NzcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);