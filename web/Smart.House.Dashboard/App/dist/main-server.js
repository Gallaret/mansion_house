(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/wwwroot/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT_CAMERAS; });
/* unused harmony export UPDATE_CAMERA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
var _this = this;



var INIT_CAMERAS = 'InitCamerasAction';
var UPDATE_CAMERA = 'UpdateCameraAction';
var DefaultCameraListState = {
    cameraList: []
};
var counter = 0;
var actionCreators = {
    getCameraState: function getCameraState(model) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var state, newState, response, cameraState;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('getState');
                                state = getState().cameras.cameraList.find(function (camera) {
                                    return camera.id == model.id;
                                });
                                newState = {
                                    name: state.name,
                                    url: state.url + '?data=' + counter++,
                                    id: state.id,
                                    isRecording: state.isRecording,
                                    isMotionDetected: state.isMotionDetected
                                };
                                _context.next = 5;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/camera/getCameras?id=' + model.id, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 5:
                                response = _context.sent;

                                if (!response.ok) {
                                    _context.next = 12;
                                    break;
                                }

                                _context.next = 9;
                                return response.json();

                            case 9:
                                cameraState = _context.sent;

                                newState.isMotionDetected = cameraState.isMotionDetected;
                                newState.isRecording = cameraState.isRecording;

                            case 12:
                                dispatch({ type: UPDATE_CAMERA, payload: newState });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    },
    startRecording: function startRecording(model) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/camera/startRecording', {
                                    method: 'POST',
                                    body: JSON.stringify(model.id),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context2.sent;

                                if (response.ok) {
                                    console.log('start recording');
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        };
    },
    stopRecording: function stopRecording(model) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/camera/stopRecording', {
                                    method: 'POST',
                                    body: JSON.stringify(model.id),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context3.sent;

                                if (response.ok) {
                                    console.log('stop recording');
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        };
    }
};
var reducer = function reducer(state, action) {
    switch (action.type) {
        case INIT_CAMERAS:
            return Object.assign({}, state, { cameraList: action.payload });
        case UPDATE_CAMERA:
            return Object.assign({}, state, { cameraList: state.cameraList.map(function (camera) {
                    return camera.id == action.payload.id ? action.payload : camera;
                }) });
        default:
            return state || DefaultCameraListState;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configureStore__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_cameraList__ = __webpack_require__(1);








/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_5__routes__["a" /* default */], location: params.location }, function (error, redirectLocation, renderProps) {
            if (error) {
                throw error;
            }

            if (redirectLocation) {
                resolve({ redirectUrl: redirectLocation.pathname });
                return;
            }

            if (!renderProps) {
                throw new Error('The location \'' + params.url + '\' doesn\'t match any route configured in react-router.');
            }
            var Cameras = [];
            Cameras.push({
                name: 'Salon',
                url: 'http://192.168.0.234/image/jpeg.cgi',
                id: 1,
                isMotionDetected: false,
                isRecording: false
            });
            var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__configureStore__["a" /* default */])();
            store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__store_cameraList__["a" /* INIT_CAMERAS */], payload: Cameras });
            var app = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router__["RouterContext"], renderProps)
            );

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);

            params.domainTasks.then(function () {
                resolve({
                    html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                    globals: { initialReduxState: store.getState() }
                });
            }, reject);
        });
    });
}));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_scroll_effect__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_fullscreen__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devices_camera_CameraList__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'container-fluid' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_3__lib_fullscreen__["a" /* default */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'row', id: 'hero' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__devices_camera_CameraList__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'container' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { id: 'tagline' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_2__lib_scroll_effect__["a" /* default */],
                                    { animate: 'bounceIn' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'h1',
                                        { className: 'home-intro-text' },
                                        'Demo!'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'h1',
                                        { className: 'home-intro-text' },
                                        '...React, Redux, Orleans and Dotnet'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'h3',
                                        { className: 'home-intro-text' },
                                        'Introducing the ',
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            __WEBPACK_IMPORTED_MODULE_1_react_scroll__["Link"],
                                            { to: 'demo', href: '#', smooth: true, duration: 700, offset: -50 },
                                            'RROD'
                                        ),
                                        ' stack'
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'down-link' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_scroll__["Link"],
                                    { to: 'demo', href: '#', className: 'icon-link', smooth: true, duration: 700, offset: -50 },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('i', { className: 'fa fa-arrow-circle-down custom' })
                                )
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_scroll__["Element"], { name: 'demo' }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'row', id: 'footer' })
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__ = __webpack_require__(14);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__NavMenu__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__["a" /* default */],
                    { pathname: typeof window !== 'undefined' ? window.location.pathname : '' },
                    this.props.body
                )
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var logo = __webpack_require__(18);

var NavMenu = function (_React$Component) {
    _inherits(NavMenu, _React$Component);

    function NavMenu() {
        _classCallCheck(this, NavMenu);

        return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).apply(this, arguments));
    }

    _createClass(NavMenu, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"],
                { fixedTop: true },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Header,
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Brand,
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { className: 'navbar-brand', to: '/' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: logo, alt: 'Home Logo' }),
                            'Smart-Home'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Toggle, null)
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Navbar"].Collapse,
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Nav"],
                        { pullRight: true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                            { to: '/contact' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["NavItem"],
                                { eventKey: 1 },
                                'Contact'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                            { to: '/counter' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["NavItem"],
                                { eventKey: 3 },
                                'Counter'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["NavDropdown"],
                            { eventKey: 2, title: 'Login', id: 'nav-dropdown' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/login' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { disabled: this.props.isAuthenticated, eventKey: 2.1 },
                                    'Login'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/register' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { disabled: this.props.isAuthenticated, eventKey: 2.2 },
                                    'Register'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/user' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { eventKey: 2.3 },
                                    'User Profile'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"], { divider: true }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__["LinkContainer"],
                                { to: '/logout' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                                    { disabled: !this.props.isAuthenticated, eventKey: 2.4 },
                                    'Logout'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["MenuItem"],
                            { eventKey: 4 },
                            'Notifications'
                        )
                    )
                )
            );
        }
    }]);

    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return { isAuthenticated: false, roles: [] };
}, {})(NavMenu));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CameraItem = function (_React$Component) {
    _inherits(CameraItem, _React$Component);

    function CameraItem() {
        _classCallCheck(this, CameraItem);

        return _possibleConstructorReturn(this, (CameraItem.__proto__ || Object.getPrototypeOf(CameraItem)).apply(this, arguments));
    }

    _createClass(CameraItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var model = this.props.camera;
            var getState = this.props.getCameraState;
            setInterval(function () {
                return getState(model);
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(0);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var camera = this.props.camera;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'form-group text-center', style: { margin: 'auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    { className: 'text-center' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: camera.url, style: { height: '150px', width: '250px' }, className: camera.isMotionDetected ? 'camera-alert' : 'camera-no-alert' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'label',
                    null,
                    camera.name
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { onClick: camera.isRecording ? function () {
                            return _this2.props.stopRecording(camera);
                        } : function () {
                            return _this2.props.startRecording(camera);
                        } },
                    'Start'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { onClick: function onClick() {
                            return _this2.props.stopRecording(camera);
                        } },
                    'Stop'
                )
            );
        }
    }]);

    return CameraItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CameraItem);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_cameraList__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Camera__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CameraList = function (_React$Component) {
    _inherits(CameraList, _React$Component);

    function CameraList() {
        _classCallCheck(this, CameraList);

        return _possibleConstructorReturn(this, (CameraList.__proto__ || Object.getPrototypeOf(CameraList)).apply(this, arguments));
    }

    _createClass(CameraList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _getCameraState = _props.getCameraState,
                _startRecording = _props.startRecording,
                _stopRecording = _props.stopRecording;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'form-inline', style: { height: '200px', textAlign: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { display: 'inline-block' } },
                    ' ',
                    this.props.list.map(function (child) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Camera__["a" /* default */], { key: child.id, camera: child, getCameraState: function getCameraState() {
                                return _getCameraState(child);
                            }, startRecording: function startRecording() {
                                return _startRecording(child);
                            }, stopRecording: function stopRecording() {
                                return _stopRecording(child);
                            } });
                    })
                )
            );
        }
    }]);

    return CameraList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        list: state.cameras.cameraList
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_2__store_cameraList__["c" /* actionCreators */])(CameraList));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(17);




function configureStore(initialState) {
    var windowIfDefined = typeof window === 'undefined' ? null : window;

    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a), devToolsExtension ? devToolsExtension() : function (f) {
        return f;
    })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);

    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);

    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var getDimensions = function getDimensions() {
    return { height: window.innerHeight - 50 + 'px' };
};

var FullScreen = function (_React$Component) {
    _inherits(FullScreen, _React$Component);

    function FullScreen(props) {
        _classCallCheck(this, FullScreen);

        var _this = _possibleConstructorReturn(this, (FullScreen.__proto__ || Object.getPrototypeOf(FullScreen)).call(this, props));

        _this.state = { height: '100vh' };
        _this.handleResize = _this.handleResize.bind(_this);
        return _this;
    }

    _createClass(FullScreen, [{
        key: 'handleResize',
        value: function handleResize() {
            this.setState(getDimensions());
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }, {
        key: 'render',
        value: function render() {
            var child = __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children), { style: { height: this.state.height } });

            return child;
        }
    }]);

    return FullScreen;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FullScreen);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);


var willEnter = function willEnter() {
    return {
        opacity: 0,
        scale: 0.97
    };
};
var willLeave = function willLeave() {
    return {
        opacity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(0),
        scale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(1.00)
    };
};
var getStyles = function getStyles() {
    return {
        opacity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(1),
        scale: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(1)
    };
};
var RouteTransition = function RouteTransition(_ref) {
    var child = _ref.children,
        pathname = _ref.pathname;
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        __WEBPACK_IMPORTED_MODULE_1_react_motion__["TransitionMotion"],
        { styles: [{
                key: pathname,
                style: getStyles(),
                data: { child: child }
            }], willEnter: willEnter, willLeave: willLeave },
        function (interpolated) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                interpolated.map(function (_ref2) {
                    var key = _ref2.key,
                        style = _ref2.style,
                        data = _ref2.data;
                    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { key: key + '-transition', style: Object.assign({}, styles.wrapper, { opacity: style.opacity, transform: 'scale(' + style.scale + ')' }) },
                        data.child
                    );
                })
            );
        }
    );
};
var styles = {
    wrapper: {
        position: 'absolute',
        width: '100%'
    }
};
/* harmony default export */ __webpack_exports__["a"] = (RouteTransition);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_decorators__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_decorators__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







;

var ScrollEffect = function (_React$Component) {
    _inherits(ScrollEffect, _React$Component);

    function ScrollEffect() {
        _classCallCheck(this, ScrollEffect);

        var _this = _possibleConstructorReturn(this, (ScrollEffect.__proto__ || Object.getPrototypeOf(ScrollEffect)).call(this));

        _this.state = {
            animated: false
        };
        return _this;
    }

    _createClass(ScrollEffect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleScroll(undefined);
            this.scrollHandler = __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default()(this.handleScroll.bind(this), 200, { trailing: true });
            window.addEventListener('scroll', this.scrollHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.scrollHandler.cancel();
            window.removeEventListener('scroll', this.scrollHandler);
        }
    }, {
        key: 'singleAnimate',
        value: function singleAnimate() {
            var _this2 = this;

            setTimeout(function () {
                _this2.props.callback();
            }, (this.props.duration | 1) * 1000);
        }
    }, {
        key: 'queueAnimate',
        value: function queueAnimate() {
            var _this3 = this;

            var element = __WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"](this);
            var checkClass = function checkClass(el) {
                return el.className === _this3.props.queueClass;
            };
            var number = 0;
            var setClass = function setClass(el) {
                el.style.visibility = "hidden";
                setTimeout(function () {
                    el.style.visibility = "visible";
                    el.className = el.className + ' animated ' + _this3.props.animate;
                }, number * (_this3.props.queueDuration * 1000));
                number++;
            };
            var findClass = function findClass(element) {
                Array.prototype.forEach.call(element.childNodes, function (child) {
                    findClass(child);
                    if (checkClass(child)) {
                        setClass(child);
                    }
                });
            };

            findClass(element);

            setTimeout(function () {
                _this3.props.callback();
            }, this.props.duration * 1000 * number);
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(e) {
            if (!this.state.animated) {
                var element = __WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"](this);
                var elementPositionY = element.getBoundingClientRect().top + document.body.scrollTop,
                    scrollPositionY = window.scrollY,
                    windowHeight = window.innerHeight;
                if (scrollPositionY + windowHeight * .95 >= elementPositionY + this.props.offset * 1) {
                    this.setState({
                        animated: true
                    });
                    this.props.queueClass == "" && this.singleAnimate();
                    this.props.queueClass !== "" && this.queueAnimate();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state;

            var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(_defineProperty({
                'animated': true
            }, props.animate, state.animated && props.queueClass === ""));
            classes += ' ' + props.className;
            var style = state.animated ? {} : {};
            if (props.duration !== undefined) {
                style.WebkitAnimationDuration = props.duration + 's';
                style.AnimationDuration = props.duration + 's';
            }
            return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](
                'div',
                { className: classes, style: style },
                props.children
            );
        }
    }]);

    return ScrollEffect;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ScrollEffect);

ScrollEffect.defaultProps = {
    animate: "fadeInUp",
    offset: 0,
    className: "",
    duration: 1,
    queueDuration: 1,
    queueClass: "",
    callback: function callback() {}
};
__WEBPACK_IMPORTED_MODULE_1_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_5_core_decorators__["autobind"]], ScrollEffect.prototype, "handleScroll", null);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } })
));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cameraList__ = __webpack_require__(1);


var reducers = {
    cameras: __WEBPACK_IMPORTED_MODULE_0__cameraList__["b" /* reducer */]
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB3aWR0aD0iOW1tIiBoZWlnaHQ9IjltbSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSI+CiAgPGRlc2M+UlJPRCBMb2dvPC9kZXNjPgogIDwhLS0gU2hvdyBvdXRsaW5lIG9mIGNhbnZhcyB1c2luZyAncmVjdCcgZWxlbWVudCAtLT4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEyIiAgLz4KPC9zdmc+"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-decorators");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("domain-task");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(5);


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTU5YjM1NmFhMGU3ZjVjM2ZjMjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9BcHAvc3RvcmUvY2FtZXJhTGlzdC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRzbGliXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL0FwcC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmFMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL3JvdXRlLXRyYW5zaXRpb24udHN4Iiwid2VicGFjazovLy8uL0FwcC9saWIvc2Nyb2xsLWVmZmVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL0FwcC9pbWFnZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb21haW4tdGFza1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBSzdC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QUNOLGdCQUFJO0FBQ04sY0FBRSxvQkFBUSxDQUNwQjtBQVI4QztBQThEaEQsbURBRFMsb0dBK0NULE07Ozs7Ozs7Ozs7Ozs7QUM5STJCO0FBQ2M7QUFDQTtBQUNSO0FBRXJDO0FBQ1U7QUFBTixNQUFpQixXQUNiO0FBQUEseURBQU0sdURBQUssTUFBSSxLQUFZLFlBQUMsRUFBTSxNQUdKOzs7QUFDbkMsSUFBTyxLQUFLLEVBQUU7QUFDUCxXQUFJLElBQ2Q7QUFBQyxDOzs7Ozs7Ozs7QUNIMkQ7O0FBQ3RELElBQWU7QUFDVixhQUFZLDREQUNyQjtBQUZzQixDQUFqQixDOzs7Ozs7QUNYUCxxQ0FBcUMsNFk7Ozs7OztBQ0FyQyxnRDs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSxzQzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93d3dyb290L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNTliMzU2YWEwZTdmNWMzZmMyMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgQ2FtZXJhTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRfQ0FNRVJBUyA9ICdJbml0Q2FtZXJhc0FjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0FNRVJBID0gJ1VwZGF0ZUNhbWVyYUFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYUxpc3RTdGF0ZSB7XHJcbiAgICBjYW1lcmFMaXN0OiBDYW1lcmFNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBEZWZhdWx0Q2FtZXJhTGlzdFN0YXRlOiBDYW1lcmFMaXN0U3RhdGUgPSB7XHJcbiAgICBjYW1lcmFMaXN0OiBbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUNhbWVyYUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IENhbWVyYU1vZGVsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FtZXJhTGlzdFJlc3VsdE1vZGVsIHtcclxuICAgIGNhbWVyYUxpc3Q6IENhbWVyYU1vZGVsW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbml0Q2FtZXJhc0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnSW5pdENhbWVyYXNBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogQ2FtZXJhTW9kZWxbXTtcclxufVxyXG5cclxuLy8gVE9ETyBpbXBvcnQgU3VjY2VzcyBhbmQgSW52YWxpZCBhY3Rpb25zIGZyb20gc2VydmVyIGFuZCBoYW5kbGUgdGhlbVxyXG50eXBlIEtub3duQWN0aW9uID0gSW5pdENhbWVyYXNBY3Rpb24gfCBVcGRhdGVDYW1lcmFBY3Rpb25cclxuXHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBnZXRDYW1lcmFTdGF0ZTogKG1vZGVsOiBDYW1lcmFNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRTdGF0ZScpO1xuXG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCkuY2FtZXJhcy5jYW1lcmFMaXN0XG4gICAgICAgICAgICAuZmluZChjYW1lcmEgPT4gY2FtZXJhLmlkID09IG1vZGVsLmlkKTtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgICAgdXJsOiBzdGF0ZS51cmwgKyAnP2RhdGE9JyArIGNvdW50ZXIrKyxcbiAgICAgICAgICAgIGlkOiBzdGF0ZS5pZCxcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBzdGF0ZS5pc1JlY29yZGluZyxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IHN0YXRlLmlzTW90aW9uRGV0ZWN0ZWRcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvZ2V0Q2FtZXJhcz9pZD0nICsgbW9kZWwuaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHZhciBjYW1lcmFTdGF0ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgbmV3U3RhdGUuaXNNb3Rpb25EZXRlY3RlZCA9IGNhbWVyYVN0YXRlLmlzTW90aW9uRGV0ZWN0ZWQ7XG4gICAgICAgICAgICBuZXdTdGF0ZS5pc1JlY29yZGluZyA9IGNhbWVyYVN0YXRlLmlzUmVjb3JkaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfQ0FNRVJBLCBwYXlsb2FkOiBuZXdTdGF0ZSB9KTtcbiAgICB9LFxuXG4gICAgc3RhcnRSZWNvcmRpbmc6IChtb2RlbDogQ2FtZXJhTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvc3RhcnRSZWNvcmRpbmcnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vZGVsLmlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IHJlY29yZGluZycpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0b3BSZWNvcmRpbmc6IChtb2RlbDogQ2FtZXJhTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvc3RvcFJlY29yZGluZycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobW9kZWwuaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcCByZWNvcmRpbmcnKTtcbiAgICAgICAgfVxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPENhbWVyYUxpc3RTdGF0ZT4gPSAoc3RhdGU6IENhbWVyYUxpc3RTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSU5JVF9DQU1FUkFTOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FtZXJhTGlzdDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBjYXNlIFVQREFURV9DQU1FUkE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgY2FtZXJhTGlzdDogc3RhdGUuY2FtZXJhTGlzdC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhID0+IGNhbWVyYS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZCA/IGFjdGlvbi5wYXlsb2FkIDogY2FtZXJhKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSB8fCBEZWZhdWx0Q2FtZXJhTGlzdFN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvc3RvcmUvY2FtZXJhTGlzdC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRzbGliXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBJTklUX0NBTUVSQVMgfSBmcm9tICcuL3N0b3JlL2NhbWVyYUxpc3QnXHJcbmltcG9ydCB7IENhbWVyYU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIG1hdGNoKHsgcm91dGVzLCBsb2NhdGlvbjogcGFyYW1zLmxvY2F0aW9uIH0sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcmVkaXJlY3RMb2NhdGlvbi5wYXRobmFtZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbG9jYXRpb24gJyR7cGFyYW1zLnVybH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IENhbWVyYXMgPSAoW10gYXMgQ2FtZXJhTW9kZWxbXSk7XG4gICAgICAgICAgICBDYW1lcmFzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTYWxvbicsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzE5Mi4xNjguMC4yMzQvaW1hZ2UvanBlZy5jZ2knLFxuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogSU5JVF9DQU1FUkFTLCBwYXlsb2FkOiBDYW1lcmFzIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW4gaW5pdGlhbCByZW5kZXIgdGhhdCB3aWxsIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvYm9vdC1zZXJ2ZXIudHN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tICcuLi9saWIvc2Nyb2xsLWVmZmVjdCc7XG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9saWIvZnVsbHNjcmVlbic7XG5pbXBvcnQgQ2FtZXJhTGlzdCBmcm9tICcuL2RldmljZXMvY2FtZXJhL0NhbWVyYUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPEZ1bGxzY3JlZW4+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhTGlzdCAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRhZ2xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsRWZmZWN0IGFuaW1hdGU9XCJib3VuY2VJblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+RGVtbyE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+Li4uUmVhY3QsIFJlZHV4LCBPcmxlYW5zIGFuZCBEb3RuZXQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+SW50cm9kdWNpbmcgdGhlIDxTY3JvbGwuTGluayB0bz1cImRlbW9cIiBocmVmPVwiI1wiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezcwMH0gb2Zmc2V0PXstNTB9PlJST0Q8L1Njcm9sbC5MaW5rPiBzdGFjazwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxFZmZlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3duLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsLkxpbmsgdG89XCJkZW1vXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpY29uLWxpbmtcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs3MDB9IG9mZnNldD17LTUwfSA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctY2lyY2xlLWRvd24gY3VzdG9tXCIgPjwvaT48L1Njcm9sbC5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GdWxsc2NyZWVuPlxuICAgICAgICAgICAgPFNjcm9sbC5FbGVtZW50IG5hbWU9XCJkZW1vXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2TWVudSBmcm9tICcuL05hdk1lbnUnO1xuaW1wb3J0IFJvdXRlVHJhbnNpdGlvbiBmcm9tICcuLi9saWIvcm91dGUtdHJhbnNpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGJvZHk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlcyB7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIExheW91dFN0YXRlcz4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8TmF2TWVudSAvPlxuICAgICAgICAgICAgPFJvdXRlVHJhbnNpdGlvbiBwYXRobmFtZT17dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgOiAnJ30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYm9keX1cbiAgICAgICAgICAgIDwvUm91dGVUcmFuc2l0aW9uPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE5hdkRyb3Bkb3duLCBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XG5cbmNvbnN0IGxvZ28gPSByZXF1aXJlKCcuLi9pbWFnZXMvbG9nby5zdmcnKSBhcyBzdHJpbmc7XG5cbmludGVyZmFjZSBOYXZNZW51UHJvcHMge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICByb2xlczogc3RyaW5nW107XG59XG4gXG5jbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdk1lbnVQcm9wcywgQXBwbGljYXRpb25TdGF0ZT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TmF2YmFyIGZpeGVkVG9wPXt0cnVlfT5cbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17Jy8nfT48aW1nIHNyYz17bG9nb30gYWx0PVwiSG9tZSBMb2dvXCIgLz5TbWFydC1Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIC8+XG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0+Q29udGFjdDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb3VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30+Q291bnRlcjwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezJ9IHRpdGxlPVwiTG9naW5cIiBpZD1cIm5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi4xfT5Mb2dpbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjJ9PlJlZ2lzdGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezIuM30+VXNlciBQcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuNH0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs0fT5Ob3RpZmljYXRpb25zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGlzQXV0aGVudGljYXRlZDogZmFsc2UsIHJvbGVzOiBbXSB9O1xyXG4gICAgfSwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbiAgICB7fSAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4pKE5hdk1lbnUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDYW1lcmFTdG9yZSBmcm9tICcuLi8uLi8uLi9zdG9yZS9jYW1lcmFMaXN0JztcclxuaW1wb3J0IHsgQ2FtZXJhTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGNhbWVyYTogQ2FtZXJhTW9kZWxcclxufVxyXG5cclxuaW50ZXJmYWNlIENhbWVyYVN0YXRlIHtcbiAgICBtb2RlbDogQ2FtZXJhTW9kZWw7XG59XHJcblxyXG50eXBlIENhbWVyYVByb3BzID0gUHJvcHMgJiB0eXBlb2YgQ2FtZXJhU3RvcmUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENhbWVyYVByb3BzLCBDYW1lcmFTdGF0ZT4ge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLnByb3BzLmNhbWVyYTtcclxuICAgICAgICB2YXIgZ2V0U3RhdGUgPSB0aGlzLnByb3BzLmdldENhbWVyYVN0YXRlO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRTdGF0ZShtb2RlbCkgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCgwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYW1lcmEudXJsfSBzdHlsZT17eyBoZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMjUwcHgnIH19IGNsYXNzTmFtZT17Y2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWQgPyAnY2FtZXJhLWFsZXJ0JyA6ICdjYW1lcmEtbm8tYWxlcnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsPntjYW1lcmEubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYW1lcmEuaXNSZWNvcmRpbmcgPyAoKSA9PiB0aGlzLnByb3BzLnN0b3BSZWNvcmRpbmcoY2FtZXJhKSA6ICgpID0+IHRoaXMucHJvcHMuc3RhcnRSZWNvcmRpbmcoY2FtZXJhKX0+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zdG9wUmVjb3JkaW5nKGNhbWVyYSl9PlN0b3A8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDYW1lcmFTdG9yZSBmcm9tICcuLi8uLi8uLi9zdG9yZS9jYW1lcmFMaXN0JztcclxuaW1wb3J0IHsgQ2FtZXJhTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xyXG5pbXBvcnQgQ2FtZXJhSXRlbSBmcm9tICcuL0NhbWVyYSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbGlzdDogQ2FtZXJhTW9kZWxbXTtcclxufVxyXG5cclxudHlwZSBDYW1lcmFzUHJvcHMgPSBQcm9wcyAmIHR5cGVvZiBDYW1lcmFTdG9yZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmNsYXNzIENhbWVyYUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2FtZXJhc1Byb3BzLCBDYW1lcmFTdG9yZS5DYW1lcmFMaXN0U3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBnZXRDYW1lcmFTdGF0ZSwgc3RhcnRSZWNvcmRpbmcsIHN0b3BSZWNvcmRpbmcgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PiB7dGhpcy5wcm9wcy5saXN0Lm1hcCgoY2hpbGQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFJdGVtIGtleT17Y2hpbGQuaWR9IGNhbWVyYT17Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDYW1lcmFTdGF0ZT17KCkgPT4gZ2V0Q2FtZXJhU3RhdGUoY2hpbGQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRSZWNvcmRpbmc9eygpID0+IHN0YXJ0UmVjb3JkaW5nKGNoaWxkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BSZWNvcmRpbmc9eygpID0+IHN0b3BSZWNvcmRpbmcoY2hpbGQpfSAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdDogc3RhdGUuY2FtZXJhcy5jYW1lcmFMaXN0XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBDYW1lcmFTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4pKENhbWVyYUxpc3QpO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhTGlzdC50c3giLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgU3RvcmVDcmVhdG9yLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCAqIGFzIEFwcFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4gICAgKShjcmVhdGVTdG9yZSkgYXMgU3RvcmVDcmVhdG9yO1xuXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xuXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIEFwcFN0b3JlPignLi9zdG9yZScpO1xuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb25maWd1cmVTdG9yZS50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIERpbWVuc2lvbnMge1xuICAgIGhlaWdodDogc3RyaW5nXG59XG5cbnZhciBnZXREaW1lbnNpb25zID0gKCkgPT4gKHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MCArICdweCcgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIERpbWVuc2lvbnM+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGhlaWdodDogJzEwMHZoJyB9O1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKGdldERpbWVuc2lvbnMoKSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7IHN0eWxlOiB7IGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgfSB9KTtcbiAgICAgICAgLy9yZXR1cm4gPGRpdj57Y2hpbGR9PC9kaXY+O1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvbGliL2Z1bGxzY3JlZW4udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbk1vdGlvbiwgc3ByaW5nIH0gZnJvbSAncmVhY3QtbW90aW9uJztcblxuY29uc3Qgd2lsbEVudGVyID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHNjYWxlOiAwLjk3XG59KTtcblxuY29uc3Qgd2lsbExlYXZlID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiBzcHJpbmcoMCksXG4gICAgc2NhbGU6IHNwcmluZygxLjAwKVxufSk7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogc3ByaW5nKDEpLFxuICAgIHNjYWxlOiBzcHJpbmcoMSlcbn0pO1xuXG5jb25zdCBSb3V0ZVRyYW5zaXRpb24gPSAoeyBjaGlsZHJlbjogY2hpbGQsIHBhdGhuYW1lIH0pID0+IChcbiAgICA8VHJhbnNpdGlvbk1vdGlvblxuICAgICAgICBzdHlsZXM9e1t7XG4gICAgICAgICAgICBrZXk6IHBhdGhuYW1lLFxuICAgICAgICAgICAgc3R5bGU6IGdldFN0eWxlcygpLFxuICAgICAgICAgICAgZGF0YTogeyBjaGlsZCB9XG4gICAgICAgIH1dfVxuICAgICAgICB3aWxsRW50ZXI9e3dpbGxFbnRlcn1cbiAgICAgICAgd2lsbExlYXZlPXt3aWxsTGVhdmV9XG4gICAgPlxuICAgICAgICB7KGludGVycG9sYXRlZCkgPT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2ludGVycG9sYXRlZC5tYXAoKHsga2V5LCBzdHlsZSwgZGF0YSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2tleX0tdHJhbnNpdGlvbmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLndyYXBwZXIsIHsgb3BhY2l0eTogc3R5bGUub3BhY2l0eSwgdHJhbnNmb3JtOiBgc2NhbGUoJHtzdHlsZS5zY2FsZX0pYCB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY2hpbGR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvVHJhbnNpdGlvbk1vdGlvbiA+XG4pO1xuXG52YXIgc3R5bGVzID0ge1xuICAgIHdyYXBwZXI6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVRyYW5zaXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvbGliL3JvdXRlLXRyYW5zaXRpb24udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tICdjb3JlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIENhbmNlbGFibGUgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbnRlcmZhY2UgU2Nyb2xsRWZmZWN0U3RhdGUge1xuICAgIGFuaW1hdGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2Nyb2xsRWZmZWN0UHJvcHMge1xuICAgIGFuaW1hdGU/OiBzdHJpbmc7XG4gICAgb2Zmc2V0PzogbnVtYmVyO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBkdXJhdGlvbj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBxdWV1ZUR1cmF0aW9uPzogbnVtYmVyO1xuICAgIHF1ZXVlQ2xhc3M/OiBzdHJpbmc7XG4gICAgY2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xufTtcblxuLy92YXIgY2FuVXNlRE9NID0gISEoXG4vLyAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuLy8gICAgd2luZG93LmRvY3VtZW50ICYmXG4vLyAgICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuLy8pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxFZmZlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2Nyb2xsRWZmZWN0UHJvcHMsIFNjcm9sbEVmZmVjdFN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFNjcm9sbEVmZmVjdFByb3BzID0ge1xuICAgICAgICBhbmltYXRlOiBcImZhZGVJblVwXCIsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgcXVldWVEdXJhdGlvbjogMSxcbiAgICAgICAgcXVldWVDbGFzczogXCJcIixcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHsgfVxuICAgIH07XG5cbiAgICBzY3JvbGxIYW5kbGVyOiBFdmVudExpc3RlbmVyICYgQ2FuY2VsYWJsZTtcblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwodW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gZGVib3VuY2UodGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKSwgMjAwLCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5jYW5jZWwoKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuXG4gICAgc2luZ2xlQW5pbWF0ZSgpIHtcbiAgICAgICAgLyogY2FsbGJhY2sgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0sICh0aGlzLnByb3BzLmR1cmF0aW9uIHwgMSkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBxdWV1ZUFuaW1hdGUoKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIGxldCBjaGVja0NsYXNzID0gKGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NOYW1lID09PSB0aGlzLnByb3BzLnF1ZXVlQ2xhc3M7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgc2V0Q2xhc3MgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSArICcgYW5pbWF0ZWQgJyArIHRoaXMucHJvcHMuYW5pbWF0ZTtcbiAgICAgICAgICAgIH0sIG51bWJlciAqICh0aGlzLnByb3BzLnF1ZXVlRHVyYXRpb24gKiAxMDAwKSk7XG4gICAgICAgICAgICBudW1iZXIrKztcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZpbmRDbGFzcyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnQuY2hpbGROb2RlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgZmluZENsYXNzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tDbGFzcyhjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2xhc3MoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKiBmaW5kIHF1ZXVlIGNsYXNzZXMgKi9cbiAgICAgICAgZmluZENsYXNzKGVsZW1lbnQpO1xuXG4gICAgICAgIC8qIGNhbGxiYWNrICovXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjaygpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCAqIG51bWJlcik7XG4gICAgfVxuXG4gICAgQGF1dG9iaW5kXG4gICAgaGFuZGxlU2Nyb2xsKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVkKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvblkgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uWSA9IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGlmIChzY3JvbGxQb3NpdGlvblkgKyB3aW5kb3dIZWlnaHQgKiAuOTUgPj0gZWxlbWVudFBvc2l0aW9uWSArIHRoaXMucHJvcHMub2Zmc2V0ICogMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVldWVDbGFzcyA9PSBcIlwiICYmIHRoaXMuc2luZ2xlQW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVldWVDbGFzcyAhPT0gXCJcIiAmJiB0aGlzLnF1ZXVlQW5pbWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJvcHMsIHN0YXRlXG4gICAgICAgIH0gPSB0aGlzO1xuXG4gICAgICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAnYW5pbWF0ZWQnOiB0cnVlLFxuICAgICAgICAgICAgW3Byb3BzLmFuaW1hdGVdOiBzdGF0ZS5hbmltYXRlZCAmJiBwcm9wcy5xdWV1ZUNsYXNzID09PSBcIlwiXG4gICAgICAgIH0pO1xuICAgICAgICBjbGFzc2VzICs9ICcgJyArIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSBzdGF0ZS5hbmltYXRlZCA/IHt9IDoge1xuICAgICAgICAgICAgLy8gICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgICAgIH07XG4gICAgICAgIGlmIChwcm9wcy5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZS5XZWJraXRBbmltYXRpb25EdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uICsgJ3MnO1xuICAgICAgICAgICAgc3R5bGUuQW5pbWF0aW9uRHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbiArICdzJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIH1cbn1cblxuLy9sZXQgdGhyb3R0bGUgPSAoZGVsYXksIGNhbGxiYWNrKSA9PiB7XG4vLyAgICBsZXQgcHJldmlvdXNDYWxsID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4vLyAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbi8vICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuLy8gICAgICAgIGlmICgodGltZSAtIHByZXZpb3VzQ2FsbCkgPj0gZGVsYXkpIHtcbi8vICAgICAgICAgICAgcHJldmlvdXNDYWxsID0gdGltZTtcbi8vICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG4vLyAgICAgICAgfVxuLy8gICAgfTtcbi8vfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvbGliL3Njcm9sbC1lZmZlY3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHRcbiAgICA8Um91dGUgY29tcG9uZW50PXtMYXlvdXR9PlxuICAgICAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50cz17eyBib2R5OiBIb21lIH19IC8+XG4gICAgPC9Sb3V0ZT47XG5cbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvcm91dGVzLnRzeCIsImltcG9ydCAqIGFzIENhbWVyYUxpc3QgZnJvbSAnLi9jYW1lcmFMaXN0JztcbmltcG9ydCAqIGFzIENhbWVyYSBmcm9tICcuL2NhbWVyYSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XG4gICAgbmF2bWVudToge30sXG4gICAgY2FtZXJhczogQ2FtZXJhTGlzdC5DYW1lcmFMaXN0U3RhdGVcbn1cblxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XG4gICAgY2FtZXJhczogQ2FtZXJhTGlzdC5yZWR1Y2VyXG59O1xuXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL3N0b3JlL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsNzd1L1BITjJaeUIzYVdSMGFEMGlPVzF0SWlCb1pXbG5hSFE5SWpsdGJTSWdkbWxsZDBKdmVEMGlNQ0F3SURFd01DQXhNREFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZG1WeWMybHZiajBpTVM0eUlpQmlZWE5sVUhKdlptbHNaVDBpZEdsdWVTSStDaUFnUEdSbGMyTStVbEpQUkNCTWIyZHZQQzlrWlhOalBnb2dJRHdoTFMwZ1UyaHZkeUJ2ZFhSc2FXNWxJRzltSUdOaGJuWmhjeUIxYzJsdVp5QW5jbVZqZENjZ1pXeGxiV1Z1ZENBdExUNEtJQ0E4WTJseVkyeGxJR040UFNJMU1DSWdZM2s5SWpVd0lpQnlQU0kwTUNJZ1ptbHNiRDBpZDJocGRHVWlJSE4wY205clpUMGljbVZrSWlCemRISnZhMlV0ZDJsa2RHZzlJakV5SWlBZ0x6NEtQQzl6ZG1jK1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9BcHAvaW1hZ2VzL2xvZ28uc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xhc3NuYW1lc1wiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWRlY29yYXRvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWRlY29yYXRvcnNcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG9tYWluLXRhc2tcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkb21haW4tdGFza1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvZGVib3VuY2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvZGVib3VuY2VcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbVwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==