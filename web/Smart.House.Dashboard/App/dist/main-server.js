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
var DefaultCameraState = {
    list: null
};
var counter = 0;
var actionCreators = {
    getCameraImage: function getCameraImage(model) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var state, newState, i;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                state = getState();
                                newState = [];

                                for (i in state.camera.list) {
                                    if (state.camera.list[i].id == model.id) {
                                        newState.push({
                                            name: model.name,
                                            url: model.url + '?data=' + counter++,
                                            id: model.id,
                                            isActive: false
                                        });
                                    } else {
                                        newState.push(state.camera.list[i]);
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
                var response, result;
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
                                    _context2.next = 8;
                                    break;
                                }

                                _context2.next = 6;
                                return response.json();

                            case 6:
                                result = _context2.sent;

                                if (result) {
                                    console.log(result);
                                }

                            case 8:
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
            }, 5000));
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
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: camera.url, style: { height: '150px', width: '250px' } })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTIzZGIxYmY5YzZmMmZiMDZmMDMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9BcHAvc3RvcmUvY2FtZXJhLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiIsIndlYnBhY2s6Ly8vLi9BcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0NhbWVyYUxpc3QudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL2Z1bGxzY3JlZW4udHN4Iiwid2VicGFjazovLy8uL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9zY3JvbGwtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2ltYWdlcy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbWFpbi10YXNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2RlYm91bmNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBSzdCLElB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Ozs7Ozs7QUNWUCxxQ0FBcUMsNFk7Ozs7OztBQ0FyQyxnRDs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSxzQzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93d3dyb290L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMjNkYjFiZjljNmYyZmIwNmYwMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgQ2FtZXJhTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xuXG5leHBvcnQgY29uc3QgSU5JVF9DQU1FUkFTX1JFUVVFU1QgPSAnSW5pdENhbWVyYXNSZXF1ZXN0QWN0aW9uJztcbmV4cG9ydCBjb25zdCBHRVRfQ0FNRVJBX0lNQUdFX1JFUVVFU1QgPSAnR2V0Q2FtZXJhSW1hZ2VSZXF1ZXN0QWN0aW9uJztcbmV4cG9ydCBjb25zdCBHRVRfQ0FNRVJBX0lNQUdFX1JFQ0VJVkVEID0gJ0dldENhbWVyYUltYWdlUmVjZWl2ZWRBY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVN0YXRlIHtcbiAgICBsaXN0OiBDYW1lcmFNb2RlbFtdXG59XG5cbmNvbnN0IERlZmF1bHRDYW1lcmFTdGF0ZTogQ2FtZXJhU3RhdGUgPSB7XG4gICAgbGlzdDogbnVsbFxufVxuXG5pbnRlcmZhY2UgQ2FtZXJhUmVzdWx0TW9kZWwge1xuICAgIG1vZGVsOiBDYW1lcmFNb2RlbDtcbn1cblxuaW50ZXJmYWNlIEdldENhbWVyYUltYWdlUmVxdWVzdEFjdGlvbiB7XG4gICAgdHlwZTogJ0dldENhbWVyYUltYWdlUmVxdWVzdEFjdGlvbic7XG59XG5cbmludGVyZmFjZSBHZXRDYW1lcmFJbWFnZVJlY2VpdmVkQWN0aW9uIHtcbiAgICB0eXBlOiAnR2V0Q2FtZXJhSW1hZ2VSZWNlaXZlZEFjdGlvbic7XG4gICAgcGF5bG9hZDogQ2FtZXJhTW9kZWxbXVxufVxuXG5pbnRlcmZhY2UgSW5pdENhbWVyYXNBY3Rpb24ge1xuICAgIHR5cGU6ICdJbml0Q2FtZXJhc1JlcXVlc3RBY3Rpb24nLFxuICAgIHBheWxvYWQ6IENhbWVyYU1vZGVsW11cbn1cblxuLy8gVE9ETyBpbXBvcnQgU3VjY2VzcyBhbmQgSW52YWxpZCBhY3Rpb25zIGZyb20gc2VydmVyIGFuZCBoYW5kbGUgdGhlbVxudHlwZSBLbm93bkFjdGlvbiA9IEdldENhbWVyYUltYWdlUmVjZWl2ZWRBY3Rpb24gfCBHZXRDYW1lcmFJbWFnZVJlcXVlc3RBY3Rpb24gfCBJbml0Q2FtZXJhc0FjdGlvbjtcblxubGV0IGNvdW50ZXIgPSAwO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG5cbiAgICBnZXRDYW1lcmFJbWFnZTogKG1vZGVsOiBDYW1lcmFNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7ICBcblxuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzdGF0ZS5jYW1lcmEubGlzdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNhbWVyYS5saXN0W2ldLmlkID09IG1vZGVsLmlkKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG1vZGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbW9kZWwudXJsICsgJz9kYXRhPScgKyBjb3VudGVyKyssXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtb2RlbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUucHVzaChzdGF0ZS5jYW1lcmEubGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBHRVRfQ0FNRVJBX0lNQUdFX1JFQ0VJVkVELCBwYXlsb2FkOiBuZXdTdGF0ZVxyXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjaGVja0NhbWVyYU1vdGlvbjogKG1vZGVsOiBDYW1lcmFNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvY2FtZXJhL2dldENhbWVyYXM/aWQ9JyArIG1vZGVsLmlkLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9kaXNwYXRjaCh7IHR5cGU6IEdFVF9DQU1FUkFTX1JFQ0VJVkVELCBwYXlsb2FkOiByZXN1bHQgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxDYW1lcmFTdGF0ZT4gPSAoc3RhdGU6IENhbWVyYVN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIElOSVRfQ0FNRVJBU19SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxpc3Q6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgICAgIGNhc2UgR0VUX0NBTUVSQV9JTUFHRV9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICAgICAgY2FzZSBHRVRfQ0FNRVJBX0lNQUdFX1JFQ0VJVkVEOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxpc3Q6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZSB8fCBEZWZhdWx0Q2FtZXJhU3RhdGU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL3N0b3JlL2NhbWVyYS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRzbGliXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBJTklUX0NBTUVSQVNfUkVRVUVTVCB9IGZyb20gJy4vc3RvcmUvY2FtZXJhJ1xyXG5pbXBvcnQgeyBDYW1lcmFNb2RlbCB9IGZyb20gJy4vbW9kZWxzL2NhbWVyYU1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gTWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QgYWdhaW5zdCB0aGUgbGlzdCBvZiBjbGllbnQtc2lkZSByb3V0ZXNcclxuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QgbWF0Y2ggYW55IHJvdXRlLCByZW5kZXJQcm9wcyB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCFyZW5kZXJQcm9wcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICcke3BhcmFtcy51cmx9JyBkb2Vzbid0IG1hdGNoIGFueSByb3V0ZSBjb25maWd1cmVkIGluIHJlYWN0LXJvdXRlci5gKTtcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBDYW1lcmFzID0gKFtdIGFzIENhbWVyYU1vZGVsW10pO1xuICAgICAgICAgICAgQ2FtZXJhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZHVwYTInLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMjM0L2ltYWdlL2pwZWcuY2dpJyxcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9DYW1lcmFzLnB1c2goe1xuICAgICAgICAgICAgLy8gICAgbmFtZTogJ2R1cGEzJyxcbiAgICAgICAgICAgIC8vICAgIHVybDogJ2h0dHA6Ly8xOTIuMTY4LjAuMjM0L2ltYWdlL2pwZWcuY2dpJyxcbiAgICAgICAgICAgIC8vICAgIGlkOiAyLFxuICAgICAgICAgICAgLy8gICAgaXNBY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IElOSVRfQ0FNRVJBU19SRVFVRVNULCBwYXlsb2FkOiBDYW1lcmFzIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW4gaW5pdGlhbCByZW5kZXIgdGhhdCB3aWxsIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvYm9vdC1zZXJ2ZXIudHN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tICcuLi9saWIvc2Nyb2xsLWVmZmVjdCc7XG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9saWIvZnVsbHNjcmVlbic7XG5pbXBvcnQgQ2FtZXJhTGlzdCBmcm9tICcuL2RldmljZXMvY2FtZXJhL0NhbWVyYUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPEZ1bGxzY3JlZW4+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhTGlzdCAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRhZ2xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsRWZmZWN0IGFuaW1hdGU9XCJib3VuY2VJblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+RGVtbyE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+Li4uUmVhY3QsIFJlZHV4LCBPcmxlYW5zIGFuZCBEb3RuZXQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+SW50cm9kdWNpbmcgdGhlIDxTY3JvbGwuTGluayB0bz1cImRlbW9cIiBocmVmPVwiI1wiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezcwMH0gb2Zmc2V0PXstNTB9PlJST0Q8L1Njcm9sbC5MaW5rPiBzdGFjazwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxFZmZlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3duLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsLkxpbmsgdG89XCJkZW1vXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpY29uLWxpbmtcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs3MDB9IG9mZnNldD17LTUwfSA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctY2lyY2xlLWRvd24gY3VzdG9tXCIgPjwvaT48L1Njcm9sbC5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GdWxsc2NyZWVuPlxuICAgICAgICAgICAgPFNjcm9sbC5FbGVtZW50IG5hbWU9XCJkZW1vXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2TWVudSBmcm9tICcuL05hdk1lbnUnO1xuaW1wb3J0IFJvdXRlVHJhbnNpdGlvbiBmcm9tICcuLi9saWIvcm91dGUtdHJhbnNpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGJvZHk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlcyB7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIExheW91dFN0YXRlcz4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8TmF2TWVudSAvPlxuICAgICAgICAgICAgPFJvdXRlVHJhbnNpdGlvbiBwYXRobmFtZT17dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgOiAnJ30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYm9keX1cbiAgICAgICAgICAgIDwvUm91dGVUcmFuc2l0aW9uPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE5hdkRyb3Bkb3duLCBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XG5cbmNvbnN0IGxvZ28gPSByZXF1aXJlKCcuLi9pbWFnZXMvbG9nby5zdmcnKSBhcyBzdHJpbmc7XG5cbmludGVyZmFjZSBOYXZNZW51UHJvcHMge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICByb2xlczogc3RyaW5nW107XG59XG4gXG5jbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdk1lbnVQcm9wcywgQXBwbGljYXRpb25TdGF0ZT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TmF2YmFyIGZpeGVkVG9wPXt0cnVlfT5cbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17Jy8nfT48aW1nIHNyYz17bG9nb30gYWx0PVwiSG9tZSBMb2dvXCIgLz5TbWFydC1Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIC8+XG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0+Q29udGFjdDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb3VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30+Q291bnRlcjwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezJ9IHRpdGxlPVwiTG9naW5cIiBpZD1cIm5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi4xfT5Mb2dpbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjJ9PlJlZ2lzdGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezIuM30+VXNlciBQcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuNH0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGlzQXV0aGVudGljYXRlZDogZmFsc2UsIHJvbGVzOiBbXSB9O1xyXG4gICAgfSwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbiAgICB7fSAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4pKE5hdk1lbnUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDYW1lcmFTdG9yZSBmcm9tICcuLi8uLi8uLi9zdG9yZS9jYW1lcmEnO1xyXG5pbXBvcnQgeyBDYW1lcmFNb2RlbCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYW1lcmFNb2RlbCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgY2FtZXJhOiBDYW1lcmFNb2RlbFxyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJpdmF0ZVByb3BzIHtcclxuICAgIGludGVydmFsczogYW55W10sXHJcbiAgICBnZXRDYW1lcmFJbWFnZTogYW55LFxyXG4gICAgY2hlY2tDYW1lcmFNb3Rpb246IGFueVxyXG59XHJcblxyXG50eXBlIENhbWVyYVByb3BzID0gUHJvcHMgJiB0eXBlb2YgQ2FtZXJhU3RvcmUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENhbWVyYVByb3BzLCBDYW1lcmFTdG9yZS5DYW1lcmFTdGF0ZT4ge1xyXG5cclxuICAgIGRlZmF1bHRQcm9wczogUGFydGlhbDxQcml2YXRlUHJvcHM+ID0ge1xyXG4gICAgICAgIGludGVydmFsczogW10sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLnByb3BzLmNhbWVyYTtcclxuICAgICAgICB2YXIgZ2V0Q2FtZXJhSW1hZ2UgPSB0aGlzLnByb3BzLmdldENhbWVyYUltYWdlO1xyXG4gICAgICAgIHZhciBjaGVja0NhbWVyYU1vdGlvbiA9IHRoaXMucHJvcHMuY2hlY2tDYW1lcmFNb3Rpb247XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByb3BzLmludGVydmFscy5wdXNoKFxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRDYW1lcmFJbWFnZShtb2RlbCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvcHMuaW50ZXJ2YWxzLnB1c2goXHJcbiAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrQ2FtZXJhTW90aW9uKG1vZGVsKTtcclxuICAgICAgICAgICAgfSwgNTAwMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpdGVtIGluIHRoaXMuZGVmYXVsdFByb3BzLmludGVydmFscykge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZGVmYXVsdFByb3BzLmludGVydmFsc1tpdGVtXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW46ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhbWVyYS51cmx9IHN0eWxlPXt7IGhlaWdodDogJzE1MHB4Jywgd2lkdGg6ICcyNTBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD57Y2FtZXJhLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ2FtZXJhU3RvcmUgZnJvbSAnLi4vLi4vLi4vc3RvcmUvY2FtZXJhJztcclxuaW1wb3J0IHsgQ2FtZXJhTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY2FtZXJhTW9kZWwnO1xyXG5pbXBvcnQgQ2FtZXJhSXRlbSBmcm9tICcuL0NhbWVyYSc7XHJcblxyXG5pbnRlcmZhY2UgQ2FtZXJhc1Byb3BzIHtcclxuICAgIGxpc3Q6IENhbWVyYU1vZGVsIFtdO1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gQ2FtZXJhc1Byb3BzICYgdHlwZW9mIENhbWVyYVN0b3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgQ2FtZXJhTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgQ2FtZXJhU3RvcmUuQ2FtZXJhU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBzdHlsZT17eyBoZWlnaHQ6ICcyMDBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5saXN0Lm1hcCgoY2hpbGQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFJdGVtIGtleT17Y2hpbGQuaWR9IGNhbWVyYT17Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDYW1lcmFJbWFnZT17KG1vZGVsOiBDYW1lcmFNb2RlbCkgPT4gdGhpcy5wcm9wcy5nZXRDYW1lcmFJbWFnZShtb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0NhbWVyYU1vdGlvbj17KG1vZGVsOiBDYW1lcmFNb2RlbCkgPT4gdGhpcy5wcm9wcy5jaGVja0NhbWVyYU1vdGlvbihtb2RlbCl9IC8+ICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpc3Q6IHN0YXRlLmNhbWVyYS5saXN0XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgQ2FtZXJhU3RvcmUuYWN0aW9uQ3JlYXRvcnMgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShDYW1lcmFMaXN0KTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0NhbWVyYUxpc3QudHN4IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIFN0b3JlQ3JlYXRvciwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBBcHBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuICAgICkoY3JlYXRlU3RvcmUpIGFzIFN0b3JlQ3JlYXRvcjtcblxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcblxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBBcHBTdG9yZT4oJy4vc3RvcmUnKTtcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBEaW1lbnNpb25zIHtcbiAgICBoZWlnaHQ6IHN0cmluZ1xufVxuXG52YXIgZ2V0RGltZW5zaW9ucyA9ICgpID0+ICh7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTAgKyAncHgnIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBEaW1lbnNpb25zPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBoZWlnaHQ6ICcxMDB2aCcgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXREaW1lbnNpb25zKCkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwgeyBzdHlsZTogeyBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0IH0gfSk7XG4gICAgICAgIC8vcmV0dXJuIDxkaXY+e2NoaWxkfTwvZGl2PjtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zaXRpb25Nb3Rpb24sIHNwcmluZyB9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IHdpbGxFbnRlciA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogMCxcbiAgICBzY2FsZTogMC45N1xufSk7XG5cbmNvbnN0IHdpbGxMZWF2ZSA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgIHNjYWxlOiBzcHJpbmcoMS4wMClcbn0pO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygxKSxcbiAgICBzY2FsZTogc3ByaW5nKDEpXG59KTtcblxuY29uc3QgUm91dGVUcmFuc2l0aW9uID0gKHsgY2hpbGRyZW46IGNoaWxkLCBwYXRobmFtZSB9KSA9PiAoXG4gICAgPFRyYW5zaXRpb25Nb3Rpb25cbiAgICAgICAgc3R5bGVzPXtbe1xuICAgICAgICAgICAga2V5OiBwYXRobmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiBnZXRTdHlsZXMoKSxcbiAgICAgICAgICAgIGRhdGE6IHsgY2hpbGQgfVxuICAgICAgICB9XX1cbiAgICAgICAgd2lsbEVudGVyPXt3aWxsRW50ZXJ9XG4gICAgICAgIHdpbGxMZWF2ZT17d2lsbExlYXZlfVxuICAgID5cbiAgICAgICAgeyhpbnRlcnBvbGF0ZWQpID0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtpbnRlcnBvbGF0ZWQubWFwKCh7IGtleSwgc3R5bGUsIGRhdGEgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtrZXl9LXRyYW5zaXRpb25gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHN0eWxlcy53cmFwcGVyLCB7IG9wYWNpdHk6IHN0eWxlLm9wYWNpdHksIHRyYW5zZm9ybTogYHNjYWxlKCR7c3R5bGUuc2NhbGV9KWAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNoaWxkfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L1RyYW5zaXRpb25Nb3Rpb24gPlxuKTtcblxudmFyIHN0eWxlcyA9IHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVUcmFuc2l0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2xpYi9yb3V0ZS10cmFuc2l0aW9uLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSAnY29yZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IGRlYm91bmNlLCBDYW5jZWxhYmxlIH0gZnJvbSAnbG9kYXNoJztcblxuaW50ZXJmYWNlIFNjcm9sbEVmZmVjdFN0YXRlIHtcbiAgICBhbmltYXRlZDogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFNjcm9sbEVmZmVjdFByb3BzIHtcbiAgICBhbmltYXRlPzogc3RyaW5nO1xuICAgIG9mZnNldD86IG51bWJlcjtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgZHVyYXRpb24/OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgcXVldWVEdXJhdGlvbj86IG51bWJlcjtcbiAgICBxdWV1ZUNsYXNzPzogc3RyaW5nO1xuICAgIGNhbGxiYWNrPzogKCkgPT4gdm9pZDtcbn07XG5cbi8vdmFyIGNhblVzZURPTSA9ICEhKFxuLy8gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbi8vICAgIHdpbmRvdy5kb2N1bWVudCAmJlxuLy8gICAgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbi8vKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsRWZmZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFNjcm9sbEVmZmVjdFByb3BzLCBTY3JvbGxFZmZlY3RTdGF0ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBTY3JvbGxFZmZlY3RQcm9wcyA9IHtcbiAgICAgICAgYW5pbWF0ZTogXCJmYWRlSW5VcFwiLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIHF1ZXVlRHVyYXRpb246IDEsXG4gICAgICAgIHF1ZXVlQ2xhc3M6IFwiXCIsXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7IH1cbiAgICB9O1xuXG4gICAgc2Nyb2xsSGFuZGxlcjogRXZlbnRMaXN0ZW5lciAmIENhbmNlbGFibGU7XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IGRlYm91bmNlKHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyksIDIwMCwgeyB0cmFpbGluZzogdHJ1ZSB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuY2FuY2VsKCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHNpbmdsZUFuaW1hdGUoKSB7XG4gICAgICAgIC8qIGNhbGxiYWNrICovXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjaygpO1xuICAgICAgICB9LCAodGhpcy5wcm9wcy5kdXJhdGlvbiB8IDEpICogMTAwMCk7XG4gICAgfVxuXG4gICAgcXVldWVBbmltYXRlKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICBsZXQgY2hlY2tDbGFzcyA9IChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTmFtZSA9PT0gdGhpcy5wcm9wcy5xdWV1ZUNsYXNzO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHNldENsYXNzID0gKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUgKyAnIGFuaW1hdGVkICcgKyB0aGlzLnByb3BzLmFuaW1hdGU7XG4gICAgICAgICAgICB9LCBudW1iZXIgKiAodGhpcy5wcm9wcy5xdWV1ZUR1cmF0aW9uICogMTAwMCkpO1xuICAgICAgICAgICAgbnVtYmVyKys7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBmaW5kQ2xhc3MgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbGVtZW50LmNoaWxkTm9kZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGZpbmRDbGFzcyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrQ2xhc3MoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENsYXNzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyogZmluZCBxdWV1ZSBjbGFzc2VzICovXG4gICAgICAgIGZpbmRDbGFzcyhlbGVtZW50KTtcblxuICAgICAgICAvKiBjYWxsYmFjayAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2soKTtcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDAgKiBudW1iZXIpO1xuICAgIH1cblxuICAgIEBhdXRvYmluZFxuICAgIGhhbmRsZVNjcm9sbChlKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5hbmltYXRlZCkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb25ZID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxQb3NpdGlvblkgPSB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb25ZICsgd2luZG93SGVpZ2h0ICogLjk1ID49IGVsZW1lbnRQb3NpdGlvblkgKyB0aGlzLnByb3BzLm9mZnNldCAqIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1ZXVlQ2xhc3MgPT0gXCJcIiAmJiB0aGlzLnNpbmdsZUFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnF1ZXVlQ2xhc3MgIT09IFwiXCIgJiYgdGhpcy5xdWV1ZUFuaW1hdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByb3BzLCBzdGF0ZVxuICAgICAgICB9ID0gdGhpcztcblxuICAgICAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgJ2FuaW1hdGVkJzogdHJ1ZSxcbiAgICAgICAgICAgIFtwcm9wcy5hbmltYXRlXTogc3RhdGUuYW5pbWF0ZWQgJiYgcHJvcHMucXVldWVDbGFzcyA9PT0gXCJcIlxuICAgICAgICB9KTtcbiAgICAgICAgY2xhc3NlcyArPSAnICcgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIGxldCBzdHlsZTogYW55ID0gc3RhdGUuYW5pbWF0ZWQgPyB7fSA6IHtcbiAgICAgICAgICAgIC8vICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgICAgICB9O1xuICAgICAgICBpZiAocHJvcHMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGUuV2Via2l0QW5pbWF0aW9uRHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbiArICdzJztcbiAgICAgICAgICAgIHN0eWxlLkFuaW1hdGlvbkR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb24gKyAncyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSBzdHlsZT17c3R5bGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICB9XG59XG5cbi8vbGV0IHRocm90dGxlID0gKGRlbGF5LCBjYWxsYmFjaykgPT4ge1xuLy8gICAgbGV0IHByZXZpb3VzQ2FsbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuLy8gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4vLyAgICAgICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbi8vICAgICAgICBpZiAoKHRpbWUgLSBwcmV2aW91c0NhbGwpID49IGRlbGF5KSB7XG4vLyAgICAgICAgICAgIHByZXZpb3VzQ2FsbCA9IHRpbWU7XG4vLyAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3MpO1xuLy8gICAgICAgIH1cbi8vICAgIH07XG4vL307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2xpYi9zY3JvbGwtZWZmZWN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0XG4gICAgPFJvdXRlIGNvbXBvbmVudD17TGF5b3V0fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudHM9e3sgYm9keTogSG9tZSB9fSAvPlxuICAgIDwvUm91dGU+O1xuXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL3JvdXRlcy50c3giLCJpbXBvcnQgKiBhcyBDYW1lcmEgZnJvbSAnLi9jYW1lcmEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xuICAgIG5hdm1lbnU6IHt9LFxuICAgIGNhbWVyYTogQ2FtZXJhLkNhbWVyYVN0YXRlXG59XG5cbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICAgIGNhbWVyYTogQ2FtZXJhLnJlZHVjZXJcbn07XG5cbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvc3RvcmUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCw3N3UvUEhOMlp5QjNhV1IwYUQwaU9XMXRJaUJvWldsbmFIUTlJamx0YlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TUNBeE1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbVZ5YzJsdmJqMGlNUzR5SWlCaVlYTmxVSEp2Wm1sc1pUMGlkR2x1ZVNJK0NpQWdQR1JsYzJNK1VsSlBSQ0JNYjJkdlBDOWtaWE5qUGdvZ0lEd2hMUzBnVTJodmR5QnZkWFJzYVc1bElHOW1JR05oYm5aaGN5QjFjMmx1WnlBbmNtVmpkQ2NnWld4bGJXVnVkQ0F0TFQ0S0lDQThZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnWm1sc2JEMGlkMmhwZEdVaUlITjBjbTlyWlQwaWNtVmtJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXlJaUFnTHo0S1BDOXpkbWMrXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0FwcC9pbWFnZXMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzcG5ldC1wcmVyZW5kZXJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtZGVjb3JhdG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtZGVjb3JhdG9yc1wiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb21haW4tdGFza1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRvbWFpbi10YXNrXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9kZWJvdW5jZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LW1vdGlvblwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9