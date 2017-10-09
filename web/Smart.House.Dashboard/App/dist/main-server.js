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
    cameraList: [],
    listVisible: true
};
var counter = 0;
var actionCreators = {
    getCameraState: function getCameraState(id) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var state, response, cameraState, newState;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                state = getState().cameras.cameraList.find(function (camera) {
                                    return camera.id == id;
                                });
                                _context.next = 3;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/camera/getCameras?id=' + id, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 3:
                                response = _context.sent;

                                if (!response.ok) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 7;
                                return response.json();

                            case 7:
                                cameraState = _context.sent;
                                newState = {
                                    name: state.name,
                                    url: state.url,
                                    id: state.id,
                                    isRecording: cameraState.isRecording,
                                    isMotionDetected: cameraState.isMotionDetected
                                };

                                dispatch({ type: UPDATE_CAMERA, payload: newState });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    },
    startRecording: function startRecording(id) {
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
                                    body: JSON.stringify(id),
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
    stopRecording: function stopRecording(id) {
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
                                    body: JSON.stringify(id),
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
            return Object.assign({}, state, { cameraList: action.payload, listVisible: true });
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
                name: 'Salon Front',
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


var updateView = void 0;
var updateState = void 0;
var counter = 0;

var CameraItem = function (_React$Component) {
    _inherits(CameraItem, _React$Component);

    function CameraItem(props) {
        _classCallCheck(this, CameraItem);

        var _this = _possibleConstructorReturn(this, (CameraItem.__proto__ || Object.getPrototypeOf(CameraItem)).call(this, props));

        _this.state = {
            isActive: props.isActive,
            isRecording: props.isRecording,
            isMotionDetected: props.isMotionDetected,
            name: props.name,
            address: props.address
        };
        _this.setState = _this.setState.bind(_this);
        return _this;
    }

    _createClass(CameraItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                isRecording: nextProps.isRecording,
                isMotionDetected: nextProps.isMotionDetected
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            updateView = setInterval(this.updateCameraView, 1000, this.state.address, this.setState);
            updateState = setInterval(function (props) {
                return props.getCameraState(props.id);
            }, 5000, this.props);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(updateView);
            clearInterval(updateState);
        }
    }, {
        key: 'updateCameraView',
        value: function updateCameraView(address, setState) {
            setState({
                address: address + '?data=' + counter++
            });
        }
    }, {
        key: 'setActive',
        value: function setActive(value) {
            this.setState({
                isActive: value
            });
        }
    }, {
        key: 'startRecording',
        value: function startRecording(id) {
            this.setState({
                isRecording: true
            });
            return this.props.startRecording(id);
        }
    }, {
        key: 'stopRecording',
        value: function stopRecording(id) {
            this.setState({
                isRecording: false
            });
            return this.props.stopRecording(id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var id = this.props.id;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'form-group text-center camera-container', onMouseEnter: function onMouseEnter() {
                        return _this2.setActive(true);
                    }, onMouseLeave: function onMouseLeave() {
                        return _this2.setActive(false);
                    } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    { className: 'text-center camera-frame', style: { margin: '0px' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: this.state.address, style: { height: '125px', width: '200px' }, className: this.state.isRecording ? 'camera-recording' : this.state.isMotionDetected ? 'camera-alert' : 'camera-no-alert' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: this.state.isActive ? 'camera-bottom camera-visible' : 'camera-bottom camera-hidden' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'label',
                        { className: 'camera-name' },
                        this.state.name
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { float: 'right' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-play camera-play', style: { padding: '3px' }, onClick: this.state.isRecording ? function () {
                                return _this2.stopRecording(id);
                            } : function () {
                                return _this2.startRecording(id);
                            } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-stop', style: { width: '25px', cursor: 'pointer', color: 'gray', padding: '3px' }, onClick: function onClick() {
                                return _this2.stopRecording(id);
                            } })
                    )
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

    function CameraList(props) {
        _classCallCheck(this, CameraList);

        var _this = _possibleConstructorReturn(this, (CameraList.__proto__ || Object.getPrototypeOf(CameraList)).call(this, props));

        _this.state = {
            cameraList: props.list,
            listVisible: props.listVisible
        };
        return _this;
    }

    _createClass(CameraList, [{
        key: 'toogleCameras',
        value: function toogleCameras() {
            this.setState({
                listVisible: !this.state.listVisible
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _getCameraState = _props.getCameraState,
                _startRecording = _props.startRecording,
                _stopRecording = _props.stopRecording;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'form-inline', style: { height: '200px', textAlign: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'camera-topbar' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { height: '30px', position: 'relative' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-chevron-down camera-collapse-down', onClick: function onClick() {
                                return _this2.toogleCameras();
                            }, style: { padding: '7px' } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-play camera-play', style: { padding: '7px' } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-eye-open camera-motion', style: { padding: '7px' } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-volume-up camera-sound', style: { padding: '7px' } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-option-horizontal camera-topbar-settings' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: this.state.listVisible ? 'slide-down' : 'slide-up' },
                        ' ',
                        this.props.list.map(function (camera) {
                            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Camera__["a" /* default */], { key: camera.id, id: camera.id, address: camera.url, name: camera.name, isActive: false, isMotionDetected: camera.isMotionDetected, isRecording: camera.isRecording, getCameraState: function getCameraState() {
                                    return _getCameraState(camera.id);
                                }, startRecording: function startRecording() {
                                    return _startRecording(camera.id);
                                }, stopRecording: function stopRecording() {
                                    return _stopRecording(camera.id);
                                } });
                        })
                    )
                )
            );
        }
    }]);

    return CameraList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        list: state.cameras.cameraList,
        listVisible: state.cameras.listVisible
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDFiYTI3OGJlY2FhYmQzM2ZhNGYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9BcHAvc3RvcmUvY2FtZXJhTGlzdC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRzbGliXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL0FwcC9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmFMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL3JvdXRlLXRyYW5zaXRpb24udHN4Iiwid2VicGFjazovLy8uL0FwcC9saWIvc2Nyb2xsLWVmZmVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL0FwcC9pbWFnZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb21haW4tdGFza1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBSzdC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QkFDVjtBQUZxQixlQUVmLE1BQVMsU0FBTyxNQUFTLFlBQVMsTUFBVyxlQUNwRDtBQUNJLHVCQUFPLE1BQVEsTUFBVztBQUNqQyxnQkFBUyxRQUFhLE1BQVMsV0FBSyxLQUVsQztBQUNDLGdCQUFNLE1BQVMsYUFBZSxXQUFFO0FBQzFCLHNCQUF3QiwwQkFBUSxNQUFTLFdBQU87QUFDaEQsc0JBQWtCLG9CQUFRLE1BQVMsV0FDNUM7QUFBQztBQUNLO0FBQUs7a0JBQVcsV0FBUyxTQUFPLE9BQVE7QUFBTSxzQkFDeEQ7O0FBQUM7Ozs7RUF4RzBDLGdEQUFnRDs7OztBQVE3RSxhQUFZO0FBQ2YsYUFBWTtBQUNiLFlBQUc7QUFDQSxlQUFJO0FBQ0wsY0FBRztBQUNFLG1CQUFHO0FBQ04sZ0JBQUk7QUFDTixjQUFFLG9CQUFRLENBQ3BCO0FBUjhDO0FBOERoRCxtREFEUyxvR0ErQ1QsTTs7Ozs7Ozs7Ozs7OztBQzlJMkI7QUFDYztBQUNBO0FBQ1I7QUFFckM7QUFDVTtBQUFOLE1BQWlCLFdBQ2I7QUFBQSx5REFBTSx1REFBSyxNQUFJLEtBQVksWUFBQyxFQUFNLE1BR0o7OztBQUNuQyxJQUFPLEtBQUssRUFBRTtBQUNQLFdBQUksSUFDZDtBQUFDLEM7Ozs7Ozs7OztBQ0gyRDs7QUFDdEQsSUFBZTtBQUNWLGFBQVksNERBQ3JCO0FBRnNCLENBQWpCLEM7Ozs7OztBQ1hQLHFDQUFxQyw0WTs7Ozs7O0FDQXJDLGdEOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3d3d3Jvb3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQxYmEyNzhiZWNhYWJkMzNmYTRmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBDYW1lcmFNb2RlbCB9IGZyb20gJy4uL21vZGVscy9jYW1lcmFNb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgSU5JVF9DQU1FUkFTID0gJ0luaXRDYW1lcmFzQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DQU1FUkEgPSAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhTGlzdFN0YXRlIHtcclxuICAgIGNhbWVyYUxpc3Q6IENhbWVyYU1vZGVsW107XHJcbiAgICBsaXN0VmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgRGVmYXVsdENhbWVyYUxpc3RTdGF0ZTogQ2FtZXJhTGlzdFN0YXRlID0ge1xyXG4gICAgY2FtZXJhTGlzdDogW10sXHJcbiAgICBsaXN0VmlzaWJsZTogdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUNhbWVyYUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IENhbWVyYU1vZGVsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FtZXJhTGlzdFJlc3VsdE1vZGVsIHtcclxuICAgIGNhbWVyYUxpc3Q6IENhbWVyYU1vZGVsW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbml0Q2FtZXJhc0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnSW5pdENhbWVyYXNBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogQ2FtZXJhTW9kZWxbXTtcclxufVxyXG5cclxuLy8gVE9ETyBpbXBvcnQgU3VjY2VzcyBhbmQgSW52YWxpZCBhY3Rpb25zIGZyb20gc2VydmVyIGFuZCBoYW5kbGUgdGhlbVxyXG50eXBlIEtub3duQWN0aW9uID0gSW5pdENhbWVyYXNBY3Rpb24gfCBVcGRhdGVDYW1lcmFBY3Rpb25cclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGdldENhbWVyYVN0YXRlOiAoaWQ6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCkuY2FtZXJhcy5jYW1lcmFMaXN0XG4gICAgICAgICAgICAuZmluZChjYW1lcmEgPT4gY2FtZXJhLmlkID09IGlkKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvZ2V0Q2FtZXJhcz9pZD0nICsgaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHZhciBjYW1lcmFTdGF0ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIHVybDogc3RhdGUudXJsLFxuICAgICAgICAgICAgICAgIGlkOiBzdGF0ZS5pZCxcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZzogY2FtZXJhU3RhdGUuaXNSZWNvcmRpbmcsXG4gICAgICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogY2FtZXJhU3RhdGUuaXNNb3Rpb25EZXRlY3RlZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfQ0FNRVJBLCBwYXlsb2FkOiBuZXdTdGF0ZSB9KTtcbiAgICAgICAgfSAgICAgICBcbiAgICB9LFxuXG4gICAgc3RhcnRSZWNvcmRpbmc6IChpZDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvY2FtZXJhL3N0YXJ0UmVjb3JkaW5nJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCByZWNvcmRpbmcnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wUmVjb3JkaW5nOiAoaWQ6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9zdG9wUmVjb3JkaW5nJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wIHJlY29yZGluZycpO1xuICAgICAgICB9XG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Q2FtZXJhTGlzdFN0YXRlPiA9IChzdGF0ZTogQ2FtZXJhTGlzdFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBJTklUX0NBTUVSQVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYW1lcmFMaXN0OiBhY3Rpb24ucGF5bG9hZCwgbGlzdFZpc2libGU6IHRydWUgfTtcclxuICAgICAgICBjYXNlIFVQREFURV9DQU1FUkE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgY2FtZXJhTGlzdDogc3RhdGUuY2FtZXJhTGlzdC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhID0+IGNhbWVyYS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZCA/IGFjdGlvbi5wYXlsb2FkIDogY2FtZXJhKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSB8fCBEZWZhdWx0Q2FtZXJhTGlzdFN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvc3RvcmUvY2FtZXJhTGlzdC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRzbGliXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBJTklUX0NBTUVSQVMgfSBmcm9tICcuL3N0b3JlL2NhbWVyYUxpc3QnXHJcbmltcG9ydCB7IENhbWVyYU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIG1hdGNoKHsgcm91dGVzLCBsb2NhdGlvbjogcGFyYW1zLmxvY2F0aW9uIH0sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcmVkaXJlY3RMb2NhdGlvbi5wYXRobmFtZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbG9jYXRpb24gJyR7cGFyYW1zLnVybH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IENhbWVyYXMgPSAoW10gYXMgQ2FtZXJhTW9kZWxbXSk7XG4gICAgICAgICAgICBDYW1lcmFzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTYWxvbiBGcm9udCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovLzE5Mi4xNjguMC4yMzQvaW1hZ2UvanBlZy5jZ2knLFxuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBJTklUX0NBTUVSQVMsIHBheWxvYWQ6IENhbWVyYXMgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbiBpbml0aWFsIHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuICAgICAgICAgICAgLy8gT25jZSB0aGUgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9ib290LXNlcnZlci50c3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgU2Nyb2xsRWZmZWN0IGZyb20gJy4uL2xpYi9zY3JvbGwtZWZmZWN0JztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uL2xpYi9mdWxsc2NyZWVuJztcbmltcG9ydCBDYW1lcmFMaXN0IGZyb20gJy4vZGV2aWNlcy9jYW1lcmEvQ2FtZXJhTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8RnVsbHNjcmVlbj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJoZXJvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYW1lcmFMaXN0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFnbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxFZmZlY3QgYW5pbWF0ZT1cImJvdW5jZUluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lLWludHJvLXRleHRcIj5EZW1vITwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lLWludHJvLXRleHRcIj4uLi5SZWFjdCwgUmVkdXgsIE9ybGVhbnMgYW5kIERvdG5ldDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJob21lLWludHJvLXRleHRcIj5JbnRyb2R1Y2luZyB0aGUgPFNjcm9sbC5MaW5rIHRvPVwiZGVtb1wiIGhyZWY9XCIjXCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NzAwfSBvZmZzZXQ9ey01MH0+UlJPRDwvU2Nyb2xsLkxpbms+IHN0YWNrPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbEVmZmVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd24tbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGwuTGluayB0bz1cImRlbW9cIiBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImljb24tbGlua1wiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezcwMH0gb2Zmc2V0PXstNTB9ID48aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1jaXJjbGUtZG93biBjdXN0b21cIiA+PC9pPjwvU2Nyb2xsLkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Z1bGxzY3JlZW4+XG4gICAgICAgICAgICA8U2Nyb2xsLkVsZW1lbnQgbmFtZT1cImRlbW9cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZNZW51IGZyb20gJy4vTmF2TWVudSc7XG5pbXBvcnQgUm91dGVUcmFuc2l0aW9uIGZyb20gJy4uL2xpYi9yb3V0ZS10cmFuc2l0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgYm9keTogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGVzIHtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgTGF5b3V0U3RhdGVzPiB7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxOYXZNZW51IC8+XG4gICAgICAgICAgICA8Um91dGVUcmFuc2l0aW9uIHBhdGhuYW1lPXt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA6ICcnfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ib2R5fVxuICAgICAgICAgICAgPC9Sb3V0ZVRyYW5zaXRpb24+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb25lbnRzL0xheW91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJztcblxuY29uc3QgbG9nbyA9IHJlcXVpcmUoJy4uL2ltYWdlcy9sb2dvLnN2ZycpIGFzIHN0cmluZztcblxuaW50ZXJmYWNlIE5hdk1lbnVQcm9wcyB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHJvbGVzOiBzdHJpbmdbXTtcbn1cbiBcbmNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TmF2TWVudVByb3BzLCBBcHBsaWNhdGlvblN0YXRlPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxOYXZiYXIgZml4ZWRUb3A9e3RydWV9PlxuICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnIHRvPXsnLyd9PjxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJIb21lIExvZ29cIiAvPlNtYXJ0LUhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfT5Db250YWN0PC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvdW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXszfT5Db3VudGVyPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17Mn0gdGl0bGU9XCJMb2dpblwiIGlkPVwibmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjF9PkxvZ2luPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuMn0+UmVnaXN0ZXI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17Mi4zfT5Vc2VyIFByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2xvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17IXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi40fT5Mb2dvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezR9Pk5vdGlmaWNhdGlvbnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSwgcm9sZXM6IFtdIH07XHJcbiAgICB9LCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuICAgIHt9IC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbikoTmF2TWVudSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENhbWVyYVN0b3JlIGZyb20gJy4uLy4uLy4uL3N0b3JlL2NhbWVyYUxpc3QnO1xyXG5pbXBvcnQgeyBDYW1lcmFNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYW1lcmFNb2RlbCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgaXNSZWNvcmRpbmc6IGJvb2xlYW47XHJcbiAgICBpc01vdGlvbkRldGVjdGVkOiBib29sZWFuO1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgYWRkcmVzczogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBDYW1lcmFTdGF0ZSB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcclxuICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBzdHJpbmdcbn1cclxuXHJcbnR5cGUgQ2FtZXJhUHJvcHMgPSBQcm9wcyAmIHR5cGVvZiBDYW1lcmFTdG9yZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmxldCB1cGRhdGVWaWV3O1xyXG5sZXQgdXBkYXRlU3RhdGU7XHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2FtZXJhUHJvcHMsIENhbWVyYVN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FtZXJhUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IHByb3BzLmlzUmVjb3JkaW5nLFxyXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBwcm9wcy5pc01vdGlvbkRldGVjdGVkLFxyXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBwcm9wcy5hZGRyZXNzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogbmV4dFByb3BzLmlzUmVjb3JkaW5nLFxyXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBuZXh0UHJvcHMuaXNNb3Rpb25EZXRlY3RlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHVwZGF0ZVZpZXcgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNhbWVyYVZpZXcsXHJcbiAgICAgICAgICAgIDEwMDAsIHRoaXMuc3RhdGUuYWRkcmVzcywgdGhpcy5zZXRTdGF0ZSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVN0YXRlID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5nZXRDYW1lcmFTdGF0ZShwcm9wcy5pZCk7XHJcbiAgICAgICAgfSwgNTAwMCwgdGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVWaWV3KTtcclxuICAgICAgICBjbGVhckludGVydmFsKHVwZGF0ZVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYW1lcmFWaWV3KGFkZHJlc3MsIHNldFN0YXRlKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzICsgJz9kYXRhPScgKyBjb3VudGVyKytcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdGFydFJlY29yZGluZyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zdG9wUmVjb3JkaW5nKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgY2FtZXJhLWNvbnRhaW5lclwiIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjYW1lcmEtZnJhbWVcIiBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5hZGRyZXNzfSBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNSZWNvcmRpbmcgPyAnY2FtZXJhLXJlY29yZGluZycgOiB0aGlzLnN0YXRlLmlzTW90aW9uRGV0ZWN0ZWQgPyAnY2FtZXJhLWFsZXJ0JyA6ICdjYW1lcmEtbm8tYWxlcnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICdjYW1lcmEtYm90dG9tIGNhbWVyYS12aXNpYmxlJyA6ICdjYW1lcmEtYm90dG9tIGNhbWVyYS1oaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhbWVyYS1uYW1lXCI+e3RoaXMuc3RhdGUubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5IGNhbWVyYS1wbGF5XCIgc3R5bGU9e3sgcGFkZGluZzogJzNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzUmVjb3JkaW5nID8gKCkgPT4gdGhpcy5zdG9wUmVjb3JkaW5nKGlkKSA6ICgpID0+IHRoaXMuc3RhcnRSZWNvcmRpbmcoaWQpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0b3BcIiBzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdncmF5JywgcGFkZGluZzogJzNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RvcFJlY29yZGluZyhpZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ2FtZXJhU3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvY2FtZXJhTGlzdCc7XHJcbmltcG9ydCB7IENhbWVyYU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhbWVyYU1vZGVsJztcclxuaW1wb3J0IENhbWVyYUl0ZW0gZnJvbSAnLi9DYW1lcmEnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxpc3Q6IENhbWVyYU1vZGVsW107XHJcbiAgICBsaXN0VmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxudHlwZSBDYW1lcmFzUHJvcHMgPSBQcm9wcyAmIHR5cGVvZiBDYW1lcmFTdG9yZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmNsYXNzIENhbWVyYUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2FtZXJhc1Byb3BzLCBDYW1lcmFTdG9yZS5DYW1lcmFMaXN0U3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1lcmFzUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhbWVyYUxpc3Q6IHByb3BzLmxpc3QsXHJcbiAgICAgICAgICAgIGxpc3RWaXNpYmxlOiBwcm9wcy5saXN0VmlzaWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b29nbGVDYW1lcmFzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsaXN0VmlzaWJsZTogIXRoaXMuc3RhdGUubGlzdFZpc2libGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBnZXRDYW1lcmFTdGF0ZSwgc3RhcnRSZWNvcmRpbmcsIHN0b3BSZWNvcmRpbmcgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtZXJhLXRvcGJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duIGNhbWVyYS1jb2xsYXBzZS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy50b29nbGVDYW1lcmFzKCl9IHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGxheSBjYW1lcmEtcGxheVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leWUtb3BlbiBjYW1lcmEtbW90aW9uXCIgc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXZvbHVtZS11cCBjYW1lcmEtc291bmRcIiBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tb3B0aW9uLWhvcml6b250YWwgY2FtZXJhLXRvcGJhci1zZXR0aW5nc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saXN0VmlzaWJsZSA/ICdzbGlkZS1kb3duJyA6ICdzbGlkZS11cCd9PiB7dGhpcy5wcm9wcy5saXN0Lm1hcCgoY2FtZXJhKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhSXRlbSBrZXk9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17Y2FtZXJhLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2FtZXJhLm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ9e2NhbWVyYS5pc01vdGlvbkRldGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlY29yZGluZz17Y2FtZXJhLmlzUmVjb3JkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDYW1lcmFTdGF0ZT17KCkgPT4gZ2V0Q2FtZXJhU3RhdGUoY2FtZXJhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRSZWNvcmRpbmc9eygpID0+IHN0YXJ0UmVjb3JkaW5nKGNhbWVyYS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BSZWNvcmRpbmc9eygpID0+IHN0b3BSZWNvcmRpbmcoY2FtZXJhLmlkKX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaXN0OiBzdGF0ZS5jYW1lcmFzLmNhbWVyYUxpc3QsXHJcbiAgICAgICAgbGlzdFZpc2libGU6IHN0YXRlLmNhbWVyYXMubGlzdFZpc2libGVcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIENhbWVyYVN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbikoQ2FtZXJhTGlzdCk7XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmFMaXN0LnRzeCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBTdG9yZUNyZWF0b3IsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0ICogYXMgQXBwU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbiAgICApKGNyZWF0ZVN0b3JlKSBhcyBTdG9yZUNyZWF0b3I7XG5cbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XG5cbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgQXBwU3RvcmU+KCcuL3N0b3JlJyk7XG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgaGVpZ2h0OiBzdHJpbmdcbn1cblxudmFyIGdldERpbWVuc2lvbnMgPSAoKSA9PiAoeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUwICsgJ3B4JyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgaGVpZ2h0OiAnMTAwdmgnIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0RGltZW5zaW9ucygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHsgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB9IH0pO1xuICAgICAgICAvL3JldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvZnVsbHNjcmVlbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uTW90aW9uLCBzcHJpbmcgfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuXG5jb25zdCB3aWxsRW50ZXIgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDAuOTdcbn0pO1xuXG5jb25zdCB3aWxsTGVhdmUgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICBzY2FsZTogc3ByaW5nKDEuMDApXG59KTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiBzcHJpbmcoMSksXG4gICAgc2NhbGU6IHNwcmluZygxKVxufSk7XG5cbmNvbnN0IFJvdXRlVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuOiBjaGlsZCwgcGF0aG5hbWUgfSkgPT4gKFxuICAgIDxUcmFuc2l0aW9uTW90aW9uXG4gICAgICAgIHN0eWxlcz17W3tcbiAgICAgICAgICAgIGtleTogcGF0aG5hbWUsXG4gICAgICAgICAgICBzdHlsZTogZ2V0U3R5bGVzKCksXG4gICAgICAgICAgICBkYXRhOiB7IGNoaWxkIH1cbiAgICAgICAgfV19XG4gICAgICAgIHdpbGxFbnRlcj17d2lsbEVudGVyfVxuICAgICAgICB3aWxsTGVhdmU9e3dpbGxMZWF2ZX1cbiAgICA+XG4gICAgICAgIHsoaW50ZXJwb2xhdGVkKSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aW50ZXJwb2xhdGVkLm1hcCgoeyBrZXksIHN0eWxlLCBkYXRhIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7a2V5fS10cmFuc2l0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMud3JhcHBlciwgeyBvcGFjaXR5OiBzdHlsZS5vcGFjaXR5LCB0cmFuc2Zvcm06IGBzY2FsZSgke3N0eWxlLnNjYWxlfSlgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9UcmFuc2l0aW9uTW90aW9uID5cbik7XG5cbnZhciBzdHlsZXMgPSB7XG4gICAgd3JhcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlVHJhbnNpdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJ2NvcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgQ2FuY2VsYWJsZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmludGVyZmFjZSBTY3JvbGxFZmZlY3RTdGF0ZSB7XG4gICAgYW5pbWF0ZWQ6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY3JvbGxFZmZlY3RQcm9wcyB7XG4gICAgYW5pbWF0ZT86IHN0cmluZztcbiAgICBvZmZzZXQ/OiBudW1iZXI7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGR1cmF0aW9uPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIHF1ZXVlRHVyYXRpb24/OiBudW1iZXI7XG4gICAgcXVldWVDbGFzcz86IHN0cmluZztcbiAgICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG59O1xuXG4vL3ZhciBjYW5Vc2VET00gPSAhIShcbi8vICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4vLyAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbi8vICAgIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4vLyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEVmZmVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTY3JvbGxFZmZlY3RQcm9wcywgU2Nyb2xsRWZmZWN0U3RhdGU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogU2Nyb2xsRWZmZWN0UHJvcHMgPSB7XG4gICAgICAgIGFuaW1hdGU6IFwiZmFkZUluVXBcIixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBxdWV1ZUR1cmF0aW9uOiAxLFxuICAgICAgICBxdWV1ZUNsYXNzOiBcIlwiLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4geyB9XG4gICAgfTtcblxuICAgIHNjcm9sbEhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgJiBDYW5jZWxhYmxlO1xuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCh1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBkZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpLCAyMDAsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmNhbmNlbCgpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzaW5nbGVBbmltYXRlKCkge1xuICAgICAgICAvKiBjYWxsYmFjayAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2soKTtcbiAgICAgICAgfSwgKHRoaXMucHJvcHMuZHVyYXRpb24gfCAxKSAqIDEwMDApO1xuICAgIH1cblxuICAgIHF1ZXVlQW5pbWF0ZSgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgbGV0IGNoZWNrQ2xhc3MgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc05hbWUgPT09IHRoaXMucHJvcHMucXVldWVDbGFzcztcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzZXRDbGFzcyA9IChlbCkgPT4ge1xuICAgICAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyBhbmltYXRlZCAnICsgdGhpcy5wcm9wcy5hbmltYXRlO1xuICAgICAgICAgICAgfSwgbnVtYmVyICogKHRoaXMucHJvcHMucXVldWVEdXJhdGlvbiAqIDEwMDApKTtcbiAgICAgICAgICAgIG51bWJlcisrO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZmluZENsYXNzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmaW5kQ2xhc3MoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0NsYXNzKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDbGFzcyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qIGZpbmQgcXVldWUgY2xhc3NlcyAqL1xuICAgICAgICBmaW5kQ2xhc3MoZWxlbWVudCk7XG5cbiAgICAgICAgLyogY2FsbGJhY2sgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0sIHRoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwICogbnVtYmVyKTtcbiAgICB9XG5cbiAgICBAYXV0b2JpbmRcbiAgICBoYW5kbGVTY3JvbGwoZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuYW5pbWF0ZWQpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uWSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb25ZID0gd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uWSArIHdpbmRvd0hlaWdodCAqIC45NSA+PSBlbGVtZW50UG9zaXRpb25ZICsgdGhpcy5wcm9wcy5vZmZzZXQgKiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWV1ZUNsYXNzID09IFwiXCIgJiYgdGhpcy5zaW5nbGVBbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWV1ZUNsYXNzICE9PSBcIlwiICYmIHRoaXMucXVldWVBbmltYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9wcywgc3RhdGVcbiAgICAgICAgfSA9IHRoaXM7XG5cbiAgICAgICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdhbmltYXRlZCc6IHRydWUsXG4gICAgICAgICAgICBbcHJvcHMuYW5pbWF0ZV06IHN0YXRlLmFuaW1hdGVkICYmIHByb3BzLnF1ZXVlQ2xhc3MgPT09IFwiXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNsYXNzZXMgKz0gJyAnICsgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHN0YXRlLmFuaW1hdGVkID8ge30gOiB7XG4gICAgICAgICAgICAvLyAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHByb3BzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlLldlYmtpdEFuaW1hdGlvbkR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb24gKyAncyc7XG4gICAgICAgICAgICBzdHlsZS5BbmltYXRpb25EdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uICsgJ3MnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgfVxufVxuXG4vL2xldCB0aHJvdHRsZSA9IChkZWxheSwgY2FsbGJhY2spID0+IHtcbi8vICAgIGxldCBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbi8vICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuLy8gICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4vLyAgICAgICAgaWYgKCh0aW1lIC0gcHJldmlvdXNDYWxsKSA+PSBkZWxheSkge1xuLy8gICAgICAgICAgICBwcmV2aW91c0NhbGwgPSB0aW1lO1xuLy8gICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcbi8vICAgICAgICB9XG4vLyAgICB9O1xuLy99O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvc2Nyb2xsLWVmZmVjdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdFxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e0xheW91dH0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnRzPXt7IGJvZHk6IEhvbWUgfX0gLz5cbiAgICA8L1JvdXRlPjtcblxuLy8gRW5hYmxlIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgKEhNUilcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9yb3V0ZXMudHN4IiwiaW1wb3J0ICogYXMgQ2FtZXJhTGlzdCBmcm9tICcuL2NhbWVyYUxpc3QnO1xuaW1wb3J0ICogYXMgQ2FtZXJhIGZyb20gJy4vY2FtZXJhJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcbiAgICBuYXZtZW51OiB7fSxcbiAgICBjYW1lcmFzOiBDYW1lcmFMaXN0LkNhbWVyYUxpc3RTdGF0ZVxufVxuXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcbiAgICBjYW1lcmFzOiBDYW1lcmFMaXN0LnJlZHVjZXJcbn07XG5cbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCw3N3UvUEhOMlp5QjNhV1IwYUQwaU9XMXRJaUJvWldsbmFIUTlJamx0YlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TUNBeE1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbVZ5YzJsdmJqMGlNUzR5SWlCaVlYTmxVSEp2Wm1sc1pUMGlkR2x1ZVNJK0NpQWdQR1JsYzJNK1VsSlBSQ0JNYjJkdlBDOWtaWE5qUGdvZ0lEd2hMUzBnVTJodmR5QnZkWFJzYVc1bElHOW1JR05oYm5aaGN5QjFjMmx1WnlBbmNtVmpkQ2NnWld4bGJXVnVkQ0F0TFQ0S0lDQThZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnWm1sc2JEMGlkMmhwZEdVaUlITjBjbTlyWlQwaWNtVmtJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXlJaUFnTHo0S1BDOXpkbWMrXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0FwcC9pbWFnZXMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzcG5ldC1wcmVyZW5kZXJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtZGVjb3JhdG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtZGVjb3JhdG9yc1wiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb21haW4tdGFza1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRvbWFpbi10YXNrXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9kZWJvdW5jZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LW1vdGlvblwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9