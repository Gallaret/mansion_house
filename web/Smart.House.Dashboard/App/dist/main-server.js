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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT_CAMERAS_REQUEST; });
/* unused harmony export GET_CAMERA_IMAGE_REQUEST */
/* unused harmony export GET_CAMERA_IMAGE_RECEIVED */
/* unused harmony export GET_CAMERA_STATUS_RECEIVED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_domain_task__);
var _this = this;



var INIT_CAMERAS_REQUEST = 'InitCamerasRequestAction';
var GET_CAMERA_IMAGE_REQUEST = 'GetCameraImageRequestAction';
var GET_CAMERA_IMAGE_RECEIVED = 'GetCameraImageReceivedAction';
var GET_CAMERA_STATUS_RECEIVED = "GetCameraStatusReceivedAction";
var DefaultCameraState = {
    list: null
};
var counter = 0;
var actionCreators = {
    getCameraImage: function getCameraImage(model) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var state, newState, i, camera;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                state = getState();
                                newState = [];

                                for (i in state.camera.list) {
                                    camera = state.camera.list[i];

                                    if (camera.id == model.id) {
                                        camera = state.camera.list[i];

                                        newState.push({
                                            name: camera.name,
                                            url: camera.url + '?data=' + counter++,
                                            id: camera.id,
                                            isActive: camera.isActive,
                                            isMotionDetected: camera.isMotionDetected
                                        });
                                    } else {
                                        newState.push(camera);
                                    }
                                }
                                dispatch({
                                    type: GET_CAMERA_IMAGE_RECEIVED, payload: newState
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    },
    checkCameraMotion: function checkCameraMotion(model) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var response, result, state, newState, i;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_domain_task__["fetch"])('/camera/getCameras?id=' + model.id, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context2.sent;

                                if (!response.ok) {
                                    _context2.next = 12;
                                    break;
                                }

                                _context2.next = 6;
                                return response.json();

                            case 6:
                                result = _context2.sent;

                                console.log(result.isMotionDetected);
                                state = getState();
                                newState = [];

                                for (i in state.camera.list) {
                                    if (state.camera.list[i].id == model.id) {
                                        newState.push({
                                            name: model.name,
                                            url: model.url,
                                            id: model.id,
                                            isMotionDetected: result.isMotionDetected,
                                            isActive: false
                                        });
                                    } else {
                                        newState.push(state.camera.list[i]);
                                    }
                                }
                                dispatch({ type: GET_CAMERA_STATUS_RECEIVED, payload: newState });

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        };
    }
};
var reducer = function reducer(state, action) {
    switch (action.type) {
        case INIT_CAMERAS_REQUEST:
            return Object.assign({}, state, { list: action.payload });
        case GET_CAMERA_IMAGE_REQUEST:
            return Object.assign({}, state);
        case GET_CAMERA_IMAGE_RECEIVED:
            return Object.assign({}, state, { list: action.payload });
        case GET_CAMERA_STATUS_RECEIVED:
            return Object.assign({}, state, { list: action.payload });
        default:
            var exhaustiveCheck = action;
    }
    return state || DefaultCameraState;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_camera__ = __webpack_require__(1);








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
                name: 'dupa2',
                url: 'http://192.168.0.234/image/jpeg.cgi',
                id: 1,
                isMotionDetected: false,
                isActive: false
            });
            var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__configureStore__["a" /* default */])();
            store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__store_camera__["a" /* INIT_CAMERAS_REQUEST */], payload: Cameras });
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

        var _this = _possibleConstructorReturn(this, (CameraItem.__proto__ || Object.getPrototypeOf(CameraItem)).apply(this, arguments));

        _this.defaultProps = {
            intervals: []
        };
        return _this;
    }

    _createClass(CameraItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var model = this.props.camera;
            var getCameraImage = this.props.getCameraImage;
            var checkCameraMotion = this.props.checkCameraMotion;
            this.defaultProps.intervals.push(setInterval(function () {
                getCameraImage(model);
            }, 1000));
            this.defaultProps.intervals.push(setInterval(function () {
                checkCameraMotion(model);
            }, 3000));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            for (var item in this.defaultProps.intervals) {
                clearInterval(this.defaultProps.intervals[item]);
            }
        }
    }, {
        key: 'render',
        value: function render() {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_camera__ = __webpack_require__(1);
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
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'form-inline', style: { height: '200px', textAlign: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { display: 'inline-block' } },
                    ' ',
                    this.props.list.map(function (child) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Camera__["a" /* default */], { key: child.id, camera: child, getCameraImage: function getCameraImage(model) {
                                return _this2.props.getCameraImage(model);
                            }, checkCameraMotion: function checkCameraMotion(model) {
                                return _this2.props.checkCameraMotion(model);
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
        list: state.camera.list
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_2__store_camera__["c" /* actionCreators */])(CameraList));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera__ = __webpack_require__(1);


var reducers = {
    camera: __WEBPACK_IMPORTED_MODULE_0__camera__["b" /* reducer */]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY5MTZkZTdkOWVjMzI3M2Q0NzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9BcHAvc3RvcmUvY2FtZXJhLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiIsIndlYnBhY2s6Ly8vLi9BcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0NhbWVyYUxpc3QudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL2Z1bGxzY3JlZW4udHN4Iiwid2VicGFjazovLy8uL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9zY3JvbGwtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2ltYWdlcy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbWFpbi10YXNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2RlYm91bmNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUs3QixJ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QVMsV0FBTztBQUNoRCxzQkFBa0Isb0JBQVEsTUFBUyxXQUM1QztBQUFDO0FBQ0s7QUFBSztrQkFBVyxXQUFTLFNBQU8sT0FBUTtBQUFNLHNCQUN4RDs7QUFBQzs7OztFQXhHMEMsZ0RBQWdEOzs7O0FBUTdFLGFBQVk7QUFDZixhQUFZO0FBQ2IsWUFBRztBQUNBLGVBQUk7QUFDTCxjQUFHO0FBQ0UsbUJBQUc7QUFDTixnQkFBSTtBQUNOLGNBQUUsb0JBQVEsQ0FDcEI7QUFSOEM7QUE4RGhELG1EQURTLG9HQStDVCxNOzs7Ozs7Ozs7Ozs7O0FDOUkyQjtBQUNjO0FBQ0E7QUFDUjtBQUVyQztBQUNVO0FBQU4sTUFBaUIsV0FDYjtBQUFBLHlEQUFNLHVEQUFLLE1BQUksS0FBWSxZQUFDLEVBQU0sTUFHSjs7O0FBQ25DLElBQU8sS0FBSyxFQUFFO0FBQ1AsV0FBSSxJQUNkO0FBQUMsQzs7Ozs7Ozs7O0FDSjJEOztBQUN0RCxJQUFlO0FBQ1gsWUFBUSx3REFDaEI7QUFGc0IsQ0FBakIsQzs7Ozs7O0FDVlAscUNBQXFDLDRZOzs7Ozs7QUNBckMsZ0Q7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsbUQ7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3d3cm9vdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODY5MTZkZTdkOWVjMzI3M2Q0NzIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4vJztcbmltcG9ydCB7IENhbWVyYU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2NhbWVyYU1vZGVsJztcblxuZXhwb3J0IGNvbnN0IElOSVRfQ0FNRVJBU19SRVFVRVNUID0gJ0luaXRDYW1lcmFzUmVxdWVzdEFjdGlvbic7XG5leHBvcnQgY29uc3QgR0VUX0NBTUVSQV9JTUFHRV9SRVFVRVNUID0gJ0dldENhbWVyYUltYWdlUmVxdWVzdEFjdGlvbic7XG5leHBvcnQgY29uc3QgR0VUX0NBTUVSQV9JTUFHRV9SRUNFSVZFRCA9ICdHZXRDYW1lcmFJbWFnZVJlY2VpdmVkQWN0aW9uJztcbmV4cG9ydCBjb25zdCBHRVRfQ0FNRVJBX1NUQVRVU19SRUNFSVZFRCA9IFwiR2V0Q2FtZXJhU3RhdHVzUmVjZWl2ZWRBY3Rpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFTdGF0ZSB7XG4gICAgbGlzdDogQ2FtZXJhTW9kZWxbXVxufVxuXG5jb25zdCBEZWZhdWx0Q2FtZXJhU3RhdGU6IENhbWVyYVN0YXRlID0ge1xuICAgIGxpc3Q6IG51bGxcbn1cblxuaW50ZXJmYWNlIENhbWVyYVJlc3VsdE1vZGVsIHtcbiAgICBtb2RlbDogQ2FtZXJhTW9kZWw7XG59XG5cbmludGVyZmFjZSBHZXRDYW1lcmFJbWFnZVJlcXVlc3RBY3Rpb24ge1xuICAgIHR5cGU6ICdHZXRDYW1lcmFJbWFnZVJlcXVlc3RBY3Rpb24nO1xufVxuXG5pbnRlcmZhY2UgR2V0Q2FtZXJhSW1hZ2VSZWNlaXZlZEFjdGlvbiB7XG4gICAgdHlwZTogJ0dldENhbWVyYUltYWdlUmVjZWl2ZWRBY3Rpb24nO1xuICAgIHBheWxvYWQ6IENhbWVyYU1vZGVsW11cbn1cblxuaW50ZXJmYWNlIEdldENhbWVyYVN0YXR1c1JlY2VpdmVkQWN0aW9uIHtcbiAgICB0eXBlOiAnR2V0Q2FtZXJhU3RhdHVzUmVjZWl2ZWRBY3Rpb24nO1xuICAgIHBheWxvYWQ6IENhbWVyYU1vZGVsW11cbn1cblxuaW50ZXJmYWNlIEluaXRDYW1lcmFzQWN0aW9uIHtcbiAgICB0eXBlOiAnSW5pdENhbWVyYXNSZXF1ZXN0QWN0aW9uJyxcbiAgICBwYXlsb2FkOiBDYW1lcmFNb2RlbFtdXG59XG5cbi8vIFRPRE8gaW1wb3J0IFN1Y2Nlc3MgYW5kIEludmFsaWQgYWN0aW9ucyBmcm9tIHNlcnZlciBhbmQgaGFuZGxlIHRoZW1cbnR5cGUgS25vd25BY3Rpb24gPSBHZXRDYW1lcmFJbWFnZVJlY2VpdmVkQWN0aW9uIHwgR2V0Q2FtZXJhSW1hZ2VSZXF1ZXN0QWN0aW9uIHwgSW5pdENhbWVyYXNBY3Rpb24gfCBHZXRDYW1lcmFTdGF0dXNSZWNlaXZlZEFjdGlvbjtcblxubGV0IGNvdW50ZXIgPSAwO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG5cbiAgICBnZXRDYW1lcmFJbWFnZTogKG1vZGVsOiBDYW1lcmFNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7ICBcblxuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzdGF0ZS5jYW1lcmEubGlzdCkge1xuICAgICAgICAgICAgdmFyIGNhbWVyYSA9IHN0YXRlLmNhbWVyYS5saXN0W2ldO1xuICAgICAgICAgICAgaWYgKGNhbWVyYS5pZCA9PSBtb2RlbC5pZCkge1xuICAgICAgICAgICAgICAgIHZhciBjYW1lcmEgPSBzdGF0ZS5jYW1lcmEubGlzdFtpXTtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY2FtZXJhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogY2FtZXJhLnVybCArICc/ZGF0YT0nICsgY291bnRlcisrLFxuICAgICAgICAgICAgICAgICAgICBpZDogY2FtZXJhLmlkLFxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogY2FtZXJhLmlzQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBjYW1lcmEuaXNNb3Rpb25EZXRlY3RlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnB1c2goY2FtZXJhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEdFVF9DQU1FUkFfSU1BR0VfUkVDRUlWRUQsIHBheWxvYWQ6IG5ld1N0YXRlXHJcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNoZWNrQ2FtZXJhTW90aW9uOiAobW9kZWw6IENhbWVyYU1vZGVsKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvZ2V0Q2FtZXJhcz9pZD0nICsgbW9kZWwuaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5pc01vdGlvbkRldGVjdGVkKTtcblxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzdGF0ZS5jYW1lcmEubGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jYW1lcmEubGlzdFtpXS5pZCA9PSBtb2RlbC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1vZGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG1vZGVsLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtb2RlbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IHJlc3VsdC5pc01vdGlvbkRldGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUucHVzaChzdGF0ZS5jYW1lcmEubGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9DQU1FUkFfU1RBVFVTX1JFQ0VJVkVELCBwYXlsb2FkOiBuZXdTdGF0ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPENhbWVyYVN0YXRlPiA9IChzdGF0ZTogQ2FtZXJhU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSU5JVF9DQU1FUkFTX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGlzdDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgICAgY2FzZSBHRVRfQ0FNRVJBX0lNQUdFX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgICAgICBjYXNlIEdFVF9DQU1FUkFfSU1BR0VfUkVDRUlWRUQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGlzdDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgICAgY2FzZSBHRVRfQ0FNRVJBX1NUQVRVU19SRUNFSVZFRDpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsaXN0OiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGUgfHwgRGVmYXVsdENhbWVyYVN0YXRlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9zdG9yZS9jYW1lcmEudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHNsaWJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ0c2xpYlwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgbWF0Y2gsIFJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgY3JlYXRlTWVtb3J5SGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgSU5JVF9DQU1FUkFTX1JFUVVFU1QgfSBmcm9tICcuL3N0b3JlL2NhbWVyYSdcclxuaW1wb3J0IHsgQ2FtZXJhTW9kZWwgfSBmcm9tICcuL21vZGVscy9jYW1lcmFNb2RlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIE1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0IGFnYWluc3QgdGhlIGxpc3Qgb2YgY2xpZW50LXNpZGUgcm91dGVzXHJcbiAgICAgICAgbWF0Y2goeyByb3V0ZXMsIGxvY2F0aW9uOiBwYXJhbXMubG9jYXRpb24gfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0IG1hdGNoIGFueSByb3V0ZSwgcmVuZGVyUHJvcHMgd2lsbCBiZSB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBsb2NhdGlvbiAnJHtwYXJhbXMudXJsfScgZG9lc24ndCBtYXRjaCBhbnkgcm91dGUgY29uZmlndXJlZCBpbiByZWFjdC1yb3V0ZXIuYCk7XG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgQ2FtZXJhcyA9IChbXSBhcyBDYW1lcmFNb2RlbFtdKTtcbiAgICAgICAgICAgIENhbWVyYXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2R1cGEyJyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vMTkyLjE2OC4wLjIzNC9pbWFnZS9qcGVnLmNnaScsXG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBJTklUX0NBTUVSQVNfUkVRVUVTVCwgcGF5bG9hZDogQ2FtZXJhcyB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5yZW5kZXJQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGFuIGluaXRpYWwgcmVuZGVyIHRoYXQgd2lsbCBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBTY3JvbGxFZmZlY3QgZnJvbSAnLi4vbGliL3Njcm9sbC1lZmZlY3QnO1xuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vbGliL2Z1bGxzY3JlZW4nO1xuaW1wb3J0IENhbWVyYUxpc3QgZnJvbSAnLi9kZXZpY2VzL2NhbWVyYS9DYW1lcmFMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxGdWxsc2NyZWVuPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cImhlcm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPENhbWVyYUxpc3QgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWdsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbEVmZmVjdCBhbmltYXRlPVwiYm91bmNlSW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhvbWUtaW50cm8tdGV4dFwiPkRlbW8hPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhvbWUtaW50cm8tdGV4dFwiPi4uLlJlYWN0LCBSZWR1eCwgT3JsZWFucyBhbmQgRG90bmV0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhvbWUtaW50cm8tdGV4dFwiPkludHJvZHVjaW5nIHRoZSA8U2Nyb2xsLkxpbmsgdG89XCJkZW1vXCIgaHJlZj1cIiNcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs3MDB9IG9mZnNldD17LTUwfT5SUk9EPC9TY3JvbGwuTGluaz4gc3RhY2s8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsRWZmZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbC5MaW5rIHRvPVwiZGVtb1wiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaWNvbi1saW5rXCIgc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NzAwfSBvZmZzZXQ9ey01MH0gPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWNpcmNsZS1kb3duIGN1c3RvbVwiID48L2k+PC9TY3JvbGwuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRnVsbHNjcmVlbj5cbiAgICAgICAgICAgIDxTY3JvbGwuRWxlbWVudCBuYW1lPVwiZGVtb1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb25lbnRzL0hvbWUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdk1lbnUgZnJvbSAnLi9OYXZNZW51JztcbmltcG9ydCBSb3V0ZVRyYW5zaXRpb24gZnJvbSAnLi4vbGliL3JvdXRlLXRyYW5zaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgICBib2R5OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRTdGF0ZXMge1xufVxuXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PExheW91dFByb3BzLCBMYXlvdXRTdGF0ZXM+IHtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPE5hdk1lbnUgLz5cbiAgICAgICAgICAgIDxSb3V0ZVRyYW5zaXRpb24gcGF0aG5hbWU9e3R5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIDogJyd9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJvZHl9XG4gICAgICAgICAgICA8L1JvdXRlVHJhbnNpdGlvbj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZJdGVtLCBOYXZEcm9wZG93biwgTWVudUl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgTGlua0NvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXJvdXRlci1ib290c3RyYXAnO1xuXG5jb25zdCBsb2dvID0gcmVxdWlyZSgnLi4vaW1hZ2VzL2xvZ28uc3ZnJykgYXMgc3RyaW5nO1xuXG5pbnRlcmZhY2UgTmF2TWVudVByb3BzIHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gICAgcm9sZXM6IHN0cmluZ1tdO1xufVxuIFxuY2xhc3MgTmF2TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxOYXZNZW51UHJvcHMsIEFwcGxpY2F0aW9uU3RhdGU+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE5hdmJhciBmaXhlZFRvcD17dHJ1ZX0+XG4gICAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J25hdmJhci1icmFuZCcgdG89eycvJ30+PGltZyBzcmM9e2xvZ299IGFsdD1cIkhvbWUgTG9nb1wiIC8+U21hcnQtSG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSAvPlxuICAgICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8TmF2IHB1bGxSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezF9PkNvbnRhY3Q8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvY291bnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezN9PkNvdW50ZXI8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIGV2ZW50S2V5PXsyfSB0aXRsZT1cIkxvZ2luXCIgaWQ9XCJuYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuMX0+TG9naW48L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi4yfT5SZWdpc3RlcjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi91c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXsyLjN9PlVzZXIgUHJvZmlsZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXshdGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjR9PkxvZ291dDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17NH0+Tm90aWZpY2F0aW9uczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4geyBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLCByb2xlczogW10gfTtcclxuICAgIH0sIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4gICAge30gLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuKShOYXZNZW51KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ2FtZXJhU3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvY2FtZXJhJztcclxuaW1wb3J0IHsgQ2FtZXJhTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGNhbWVyYTogQ2FtZXJhTW9kZWxcclxufVxyXG5cclxuaW50ZXJmYWNlIFByaXZhdGVQcm9wcyB7XHJcbiAgICBpbnRlcnZhbHM6IGFueVtdLFxyXG4gICAgZ2V0Q2FtZXJhSW1hZ2U6IGFueSxcclxuICAgIGNoZWNrQ2FtZXJhTW90aW9uOiBhbnlcclxufVxyXG5cclxudHlwZSBDYW1lcmFQcm9wcyA9IFByb3BzICYgdHlwZW9mIENhbWVyYVN0b3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDYW1lcmFQcm9wcywgQ2FtZXJhU3RvcmUuQ2FtZXJhU3RhdGU+IHtcclxuXHJcbiAgICBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8UHJpdmF0ZVByb3BzPiA9IHtcclxuICAgICAgICBpbnRlcnZhbHM6IFtdLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5wcm9wcy5jYW1lcmE7XHJcbiAgICAgICAgdmFyIGdldENhbWVyYUltYWdlID0gdGhpcy5wcm9wcy5nZXRDYW1lcmFJbWFnZTtcclxuICAgICAgICB2YXIgY2hlY2tDYW1lcmFNb3Rpb24gPSB0aGlzLnByb3BzLmNoZWNrQ2FtZXJhTW90aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRQcm9wcy5pbnRlcnZhbHMucHVzaChcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZ2V0Q2FtZXJhSW1hZ2UobW9kZWwpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByb3BzLmludGVydmFscy5wdXNoKFxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0NhbWVyYU1vdGlvbihtb2RlbCk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaXRlbSBpbiB0aGlzLmRlZmF1bHRQcm9wcy5pbnRlcnZhbHMpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRlZmF1bHRQcm9wcy5pbnRlcnZhbHNbaXRlbV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYW1lcmEudXJsfSBzdHlsZT17eyBoZWlnaHQ6ICcxNTBweCcsIHdpZHRoOiAnMjUwcHgnIH19IGNsYXNzTmFtZT17Y2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWQgPyAnY2FtZXJhLWFsZXJ0JyA6ICdjYW1lcmEtbm8tYWxlcnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsPntjYW1lcmEubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDYW1lcmFTdG9yZSBmcm9tICcuLi8uLi8uLi9zdG9yZS9jYW1lcmEnO1xyXG5pbXBvcnQgeyBDYW1lcmFNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYW1lcmFNb2RlbCc7XHJcbmltcG9ydCBDYW1lcmFJdGVtIGZyb20gJy4vQ2FtZXJhJztcclxuXHJcbmludGVyZmFjZSBDYW1lcmFzUHJvcHMge1xyXG4gICAgbGlzdDogQ2FtZXJhTW9kZWwgW107XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBDYW1lcmFzUHJvcHMgJiB0eXBlb2YgQ2FtZXJhU3RvcmUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5jbGFzcyBDYW1lcmFMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBDYW1lcmFTdG9yZS5DYW1lcmFTdGF0ZT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxpc3QubWFwKChjaGlsZCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUl0ZW0ga2V5PXtjaGlsZC5pZH0gY2FtZXJhPXtjaGlsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENhbWVyYUltYWdlPXsobW9kZWw6IENhbWVyYU1vZGVsKSA9PiB0aGlzLnByb3BzLmdldENhbWVyYUltYWdlKG1vZGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQ2FtZXJhTW90aW9uPXsobW9kZWw6IENhbWVyYU1vZGVsKSA9PiB0aGlzLnByb3BzLmNoZWNrQ2FtZXJhTW90aW9uKG1vZGVsKX0gLz4gKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdDogc3RhdGUuY2FtZXJhLmxpc3RcclxuICAgIH07XHJcblxyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBDYW1lcmFTdG9yZS5hY3Rpb25DcmVhdG9ycyAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4pKENhbWVyYUxpc3QpO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhTGlzdC50c3giLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgU3RvcmVDcmVhdG9yLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCAqIGFzIEFwcFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4gICAgKShjcmVhdGVTdG9yZSkgYXMgU3RvcmVDcmVhdG9yO1xuXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xuXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIEFwcFN0b3JlPignLi9zdG9yZScpO1xuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb25maWd1cmVTdG9yZS50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIERpbWVuc2lvbnMge1xuICAgIGhlaWdodDogc3RyaW5nXG59XG5cbnZhciBnZXREaW1lbnNpb25zID0gKCkgPT4gKHsgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MCArICdweCcgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIERpbWVuc2lvbnM+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGhlaWdodDogJzEwMHZoJyB9O1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzaXplKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKGdldERpbWVuc2lvbnMoKSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7IHN0eWxlOiB7IGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQgfSB9KTtcbiAgICAgICAgLy9yZXR1cm4gPGRpdj57Y2hpbGR9PC9kaXY+O1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvbGliL2Z1bGxzY3JlZW4udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbk1vdGlvbiwgc3ByaW5nIH0gZnJvbSAncmVhY3QtbW90aW9uJztcblxuY29uc3Qgd2lsbEVudGVyID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHNjYWxlOiAwLjk3XG59KTtcblxuY29uc3Qgd2lsbExlYXZlID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiBzcHJpbmcoMCksXG4gICAgc2NhbGU6IHNwcmluZygxLjAwKVxufSk7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogc3ByaW5nKDEpLFxuICAgIHNjYWxlOiBzcHJpbmcoMSlcbn0pO1xuXG5jb25zdCBSb3V0ZVRyYW5zaXRpb24gPSAoeyBjaGlsZHJlbjogY2hpbGQsIHBhdGhuYW1lIH0pID0+IChcbiAgICA8VHJhbnNpdGlvbk1vdGlvblxuICAgICAgICBzdHlsZXM9e1t7XG4gICAgICAgICAgICBrZXk6IHBhdGhuYW1lLFxuICAgICAgICAgICAgc3R5bGU6IGdldFN0eWxlcygpLFxuICAgICAgICAgICAgZGF0YTogeyBjaGlsZCB9XG4gICAgICAgIH1dfVxuICAgICAgICB3aWxsRW50ZXI9e3dpbGxFbnRlcn1cbiAgICAgICAgd2lsbExlYXZlPXt3aWxsTGVhdmV9XG4gICAgPlxuICAgICAgICB7KGludGVycG9sYXRlZCkgPT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2ludGVycG9sYXRlZC5tYXAoKHsga2V5LCBzdHlsZSwgZGF0YSB9KSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2tleX0tdHJhbnNpdGlvbmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLndyYXBwZXIsIHsgb3BhY2l0eTogc3R5bGUub3BhY2l0eSwgdHJhbnNmb3JtOiBgc2NhbGUoJHtzdHlsZS5zY2FsZX0pYCB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY2hpbGR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIDwvVHJhbnNpdGlvbk1vdGlvbiA+XG4pO1xuXG52YXIgc3R5bGVzID0ge1xuICAgIHdyYXBwZXI6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVRyYW5zaXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvbGliL3JvdXRlLXRyYW5zaXRpb24udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tICdjb3JlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIENhbmNlbGFibGUgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbnRlcmZhY2UgU2Nyb2xsRWZmZWN0U3RhdGUge1xuICAgIGFuaW1hdGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU2Nyb2xsRWZmZWN0UHJvcHMge1xuICAgIGFuaW1hdGU/OiBzdHJpbmc7XG4gICAgb2Zmc2V0PzogbnVtYmVyO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBkdXJhdGlvbj86IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBxdWV1ZUR1cmF0aW9uPzogbnVtYmVyO1xuICAgIHF1ZXVlQ2xhc3M/OiBzdHJpbmc7XG4gICAgY2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xufTtcblxuLy92YXIgY2FuVXNlRE9NID0gISEoXG4vLyAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuLy8gICAgd2luZG93LmRvY3VtZW50ICYmXG4vLyAgICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuLy8pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxFZmZlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U2Nyb2xsRWZmZWN0UHJvcHMsIFNjcm9sbEVmZmVjdFN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbmltYXRlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFNjcm9sbEVmZmVjdFByb3BzID0ge1xuICAgICAgICBhbmltYXRlOiBcImZhZGVJblVwXCIsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgcXVldWVEdXJhdGlvbjogMSxcbiAgICAgICAgcXVldWVDbGFzczogXCJcIixcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHsgfVxuICAgIH07XG5cbiAgICBzY3JvbGxIYW5kbGVyOiBFdmVudExpc3RlbmVyICYgQ2FuY2VsYWJsZTtcblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwodW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gZGVib3VuY2UodGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKSwgMjAwLCB7IHRyYWlsaW5nOiB0cnVlIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5jYW5jZWwoKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuXG4gICAgc2luZ2xlQW5pbWF0ZSgpIHtcbiAgICAgICAgLyogY2FsbGJhY2sgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0sICh0aGlzLnByb3BzLmR1cmF0aW9uIHwgMSkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBxdWV1ZUFuaW1hdGUoKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIGxldCBjaGVja0NsYXNzID0gKGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NOYW1lID09PSB0aGlzLnByb3BzLnF1ZXVlQ2xhc3M7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgc2V0Q2xhc3MgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSArICcgYW5pbWF0ZWQgJyArIHRoaXMucHJvcHMuYW5pbWF0ZTtcbiAgICAgICAgICAgIH0sIG51bWJlciAqICh0aGlzLnByb3BzLnF1ZXVlRHVyYXRpb24gKiAxMDAwKSk7XG4gICAgICAgICAgICBudW1iZXIrKztcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZpbmRDbGFzcyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsZW1lbnQuY2hpbGROb2RlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgZmluZENsYXNzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tDbGFzcyhjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2xhc3MoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKiBmaW5kIHF1ZXVlIGNsYXNzZXMgKi9cbiAgICAgICAgZmluZENsYXNzKGVsZW1lbnQpO1xuXG4gICAgICAgIC8qIGNhbGxiYWNrICovXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjaygpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCAqIG51bWJlcik7XG4gICAgfVxuXG4gICAgQGF1dG9iaW5kXG4gICAgaGFuZGxlU2Nyb2xsKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFuaW1hdGVkKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvblkgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uWSA9IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGlmIChzY3JvbGxQb3NpdGlvblkgKyB3aW5kb3dIZWlnaHQgKiAuOTUgPj0gZWxlbWVudFBvc2l0aW9uWSArIHRoaXMucHJvcHMub2Zmc2V0ICogMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVldWVDbGFzcyA9PSBcIlwiICYmIHRoaXMuc2luZ2xlQW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucXVldWVDbGFzcyAhPT0gXCJcIiAmJiB0aGlzLnF1ZXVlQW5pbWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJvcHMsIHN0YXRlXG4gICAgICAgIH0gPSB0aGlzO1xuXG4gICAgICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAnYW5pbWF0ZWQnOiB0cnVlLFxuICAgICAgICAgICAgW3Byb3BzLmFuaW1hdGVdOiBzdGF0ZS5hbmltYXRlZCAmJiBwcm9wcy5xdWV1ZUNsYXNzID09PSBcIlwiXG4gICAgICAgIH0pO1xuICAgICAgICBjbGFzc2VzICs9ICcgJyArIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgbGV0IHN0eWxlOiBhbnkgPSBzdGF0ZS5hbmltYXRlZCA/IHt9IDoge1xuICAgICAgICAgICAgLy8gICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgICAgIH07XG4gICAgICAgIGlmIChwcm9wcy5kdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZS5XZWJraXRBbmltYXRpb25EdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uICsgJ3MnO1xuICAgICAgICAgICAgc3R5bGUuQW5pbWF0aW9uRHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbiArICdzJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtzdHlsZX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgIH1cbn1cblxuLy9sZXQgdGhyb3R0bGUgPSAoZGVsYXksIGNhbGxiYWNrKSA9PiB7XG4vLyAgICBsZXQgcHJldmlvdXNDYWxsID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4vLyAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbi8vICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuLy8gICAgICAgIGlmICgodGltZSAtIHByZXZpb3VzQ2FsbCkgPj0gZGVsYXkpIHtcbi8vICAgICAgICAgICAgcHJldmlvdXNDYWxsID0gdGltZTtcbi8vICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG4vLyAgICAgICAgfVxuLy8gICAgfTtcbi8vfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvbGliL3Njcm9sbC1lZmZlY3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHRcbiAgICA8Um91dGUgY29tcG9uZW50PXtMYXlvdXR9PlxuICAgICAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50cz17eyBib2R5OiBIb21lIH19IC8+XG4gICAgPC9Sb3V0ZT47XG5cbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvcm91dGVzLnRzeCIsImltcG9ydCAqIGFzIENhbWVyYSBmcm9tICcuL2NhbWVyYSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XG4gICAgbmF2bWVudToge30sXG4gICAgY2FtZXJhOiBDYW1lcmEuQ2FtZXJhU3RhdGVcbn1cblxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XG4gICAgY2FtZXJhOiBDYW1lcmEucmVkdWNlclxufTtcblxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9zdG9yZS9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LDc3dS9QSE4yWnlCM2FXUjBhRDBpT1cxdElpQm9aV2xuYUhROUlqbHRiU0lnZG1sbGQwSnZlRDBpTUNBd0lERXdNQ0F4TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2RtVnljMmx2YmowaU1TNHlJaUJpWVhObFVISnZabWxzWlQwaWRHbHVlU0krQ2lBZ1BHUmxjMk0rVWxKUFJDQk1iMmR2UEM5a1pYTmpQZ29nSUR3aExTMGdVMmh2ZHlCdmRYUnNhVzVsSUc5bUlHTmhiblpoY3lCMWMybHVaeUFuY21WamRDY2daV3hsYldWdWRDQXRMVDRLSUNBOFkybHlZMnhsSUdONFBTSTFNQ0lnWTNrOUlqVXdJaUJ5UFNJME1DSWdabWxzYkQwaWQyaHBkR1VpSUhOMGNtOXJaVDBpY21Wa0lpQnpkSEp2YTJVdGQybGtkR2c5SWpFeUlpQWdMejRLUEM5emRtYytcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQXBwL2ltYWdlcy9sb2dvLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzcG5ldC1wcmVyZW5kZXJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1kZWNvcmF0b3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1kZWNvcmF0b3JzXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbWFpbi10YXNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZG9tYWluLXRhc2tcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2RlYm91bmNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoL2RlYm91bmNlXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW90aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtbW90aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=