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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CAMERA; });
/* unused harmony export UPDATE_CAMERA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_orm__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_orm__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_orm__);
var _this = this;




var CREATE_DISPLAY = 'CreateDisplayAction';
var ADD_CAMERA = 'AddCameraAction';
var UPDATE_CAMERA = 'UpdateCameraAction';
var actionCreators = {
    updateCamera: function updateCamera(camera) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var session, state, newState;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                session = __WEBPACK_IMPORTED_MODULE_1__model_orm__["a" /* orm */].session(getState().display);

                                console.log(camera);
                                state = session.Camera.withId(camera.id);
                                newState = {
                                    name: state.name,
                                    address: state.address,
                                    id: state.id,
                                    isRecording: camera.isRecording,
                                    isMotionDetected: camera.isMotionDetected
                                };
                                _context.next = 6;
                                return dispatch({ type: UPDATE_CAMERA, payload: newState });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};
var reducer = function reducer(session, action) {
    var Display = session.Display,
        Camera = session.Camera;

    switch (action.type) {
        case CREATE_DISPLAY:
            Display.create(action.payload);
            break;
        case ADD_CAMERA:
            Camera.create(action.payload.camera);
            Display.withId(action.payload.display).cameras.add(Camera.withId(action.payload.camera.id));
            break;
        case UPDATE_CAMERA:
            Camera.withId(action.payload.id).update(action.payload);
            break;
    }
    return session.state;
};
/* harmony default export */ __webpack_exports__["c"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_orm__["createReducer"])(__WEBPACK_IMPORTED_MODULE_1__model_orm__["a" /* orm */], reducer));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
var Services = {
    CameraService: Symbol("CameraService"),
    TelevisionService: Symbol("TelevisionService")
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-orm");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeCamerasSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(18);


var orm = new __WEBPACK_IMPORTED_MODULE_0_redux_orm__["ORM"]();
orm.register(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* Display */], __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Camera */], __WEBPACK_IMPORTED_MODULE_1__model__["c" /* Harmonogram */]);
var activeCamerasSelector = orm.createSelector(function (session) {
    return session.DisplayCameras.all().toRefArray().map(function (camera) {
        var obj = session.Camera.withId(camera.toCameraId);
        return {
            id: obj.id,
            name: obj.name,
            isRecording: obj.isRecording,
            address: 'http://192.168.0.234/image/jpeg.cgi',
            isMotionDetected: obj.isMotionDetected
        };
    });
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lazyInject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__);



var _getDecorators = __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default()(__WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__["a" /* container */]);

var lazyInject = _getDecorators.lazyInject;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("domain-task");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_routes__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__composition_configureStore__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_camera_state_displayer__ = __webpack_require__(2);








/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router__["match"])({ routes: __WEBPACK_IMPORTED_MODULE_5__composition_routes__["a" /* default */], location: params.location }, function (error, redirectLocation, renderProps) {
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
            var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__composition_configureStore__["a" /* default */])();
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_camera_state_displayer__["a" /* CREATE_DISPLAY */],
                payload: {
                    id: 1
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_camera_state_displayer__["b" /* ADD_CAMERA */],
                payload: {
                    display: 1,
                    camera: {
                        name: 'Salon Front',
                        id: 1
                    }
                }
            });
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_scroll_effect__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_fullscreen__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devices_camera_Displayer__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devices_television_Television__ = __webpack_require__(19);
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
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__devices_camera_Displayer__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'center', style: { display: "block", height: "500px" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { width: "40%", float: "left", height: "500px" } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { float: "right", marginRight: "50px", marginTop: "150px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/lamp.png', height: '250px', width: '40px' })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { className: 'image-frame', style: { float: "right", marginRight: "75px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/marilyn.jpg', className: 'image', width: '125px', height: '170px' })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { width: "20%", float: "left" } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { width: "100%", height: "300px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__devices_television_Television__["a" /* default */], { id: 1, isActive: false, isBurning: false }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { height: "80px", clear: "both" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { className: 'shelf', style: { width: "90%", height: "50px", borderTop: "5px solid rgba(193, 155, 108, 1)", borderBottom: "5px solid rgba(193, 155, 108, 1)", margin: "0 auto" } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { style: { borderBottom: "2px solid #444343", borderTop: "2px solid #444343", width: "25%", height: "40px", float: "left", background: "white" } }),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                                'div',
                                                { className: 'box box-shadow', style: { width: "25%", height: "40px", float: "left" } },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/ps4.png', width: '75px', height: '25px', style: { marginTop: "11px", marginLeft: "7px" } })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                                'div',
                                                { className: 'box box-shadow', style: { width: "25%", height: "40px", float: "left" } },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/htpc.jpg', width: '75px', height: '30px', style: { marginTop: "7px", marginLeft: "7px" } })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'box', style: { width: "25%", height: "40px", float: "left", background: "white" } })
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { width: "100%", height: "200px", marginTop: "150px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { width: "10%", height: "200px", float: "left" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { style: { width: "30px", height: "120px", background: "black", float: "left", marginTop: "50px" } })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { width: "80%", float: "left" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { style: { height: "125px", background: "blue" } }),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { style: { height: "50px" } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { style: { height: "40px", marginTop: "10px", background: "black", width: "25px", float: "left", marginLeft: "20px" } }),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { style: { height: "40px", marginTop: "10px", background: "black", width: "25px", float: "right", marginRight: "20px" } })
                                        )
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { width: "10%", height: "200px", float: "left" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { style: { float: "right", width: "30px", height: "120px", background: "black", marginTop: "50px" } })
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { width: "40%", float: "right", height: "400px" } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { float: "left", marginLeft: "50px", marginTop: "150px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/lamp.png', height: '250px', width: '40px' })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { float: "left", marginLeft: "100px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { className: 'frame-shadow', style: { width: "190px", height: "80px", background: "rgba(193, 155, 108, 1)", display: "inline-block" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { className: 'shadow', style: { marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "10px" } },
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { className: 'shadow', style: { marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "50px" } },
                                            ' '
                                        )
                                    )
                                )
                            )
                        ),
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__ = __webpack_require__(27);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var logo = __webpack_require__(29);

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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_types__ = __webpack_require__(3);
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
            id: props.id,
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
            updateView = setInterval(this.updateCameraView, 5000, this.state.address, this.setState);
            updateState = setInterval(this.updateCameraState, 5000, this.state.id, this._printService.getCameraState, this.props.updateCamera);
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
        key: 'updateCameraState',
        value: function updateCameraState(id, getState, updateState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var camera;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return getState(id);

                            case 2:
                                camera = _context.sent;

                                updateState(camera);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: 'startRecording',
        value: function startRecording(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.setState({
                                    isRecording: true
                                });
                                _context2.next = 3;
                                return this._printService.startRecording(id);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: 'stopRecording',
        value: function stopRecording(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                this.setState({
                                    isRecording: false
                                });
                                _context3.next = 3;
                                return this._printService.stopRecording(id);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var id = this.props.id;

            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                'div',
                { className: 'form-group text-center camera-container', onMouseEnter: function onMouseEnter() {
                        return _this2.setActive(true);
                    }, onMouseLeave: function onMouseLeave() {
                        return _this2.setActive(false);
                    } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'p',
                    { className: 'text-center camera-frame', style: { margin: '0px' } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { src: this.state.address, style: { height: '125px', width: '200px' }, className: this.state.isRecording ? 'camera-recording' : this.state.isMotionDetected ? 'camera-alert' : 'camera-no-alert' })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'div',
                    { className: this.state.isActive ? 'camera-bottom camera-visible' : 'camera-bottom camera-hidden' },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'label',
                        { className: 'camera-name' },
                        this.state.name
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { style: { float: 'right' } },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-record camera-play', style: { padding: '3px' }, onClick: this.state.isRecording ? function () {
                                return _this2.stopRecording(id);
                            } : function () {
                                return _this2.startRecording(id);
                            } }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-stop', style: { width: '25px', cursor: 'pointer', color: 'gray', padding: '3px' }, onClick: function onClick() {
                                return _this2.stopRecording(id);
                            } })
                    )
                )
            );
        }
    }]);

    return CameraItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CameraItem);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__["a" /* lazyInject */])(__WEBPACK_IMPORTED_MODULE_3__composition_services_types__["a" /* Services */].CameraService), __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)], CameraItem.prototype, "_printService", void 0);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Camera__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_orm__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_displayer__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Displayer = function (_React$Component) {
    _inherits(Displayer, _React$Component);

    function Displayer(props) {
        _classCallCheck(this, Displayer);

        var _this = _possibleConstructorReturn(this, (Displayer.__proto__ || Object.getPrototypeOf(Displayer)).call(this, props));

        _this.state = {
            listVisible: props.listVisible
        };
        return _this;
    }

    _createClass(Displayer, [{
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

            var updateCamera = this.props.updateCamera;

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
                            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Camera__["a" /* default */], { key: camera.id, id: camera.id, address: camera.address, name: camera.name, isActive: false, isMotionDetected: camera.isMotionDetected, isRecording: camera.isRecording, updateCamera: updateCamera });
                        })
                    )
                )
            );
        }
    }]);

    return Displayer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        list: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__model_orm__["b" /* activeCamerasSelector */])(state.display),
        listVisible: true
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_4__state_displayer__["d" /* actionCreators */])(Displayer));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Camera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Harmonogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Display = function (_Model) {
    _inherits(Display, _Model);

    function Display() {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
    }

    _createClass(Display, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                cameras: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Camera")
            };
        }
    }]);

    return Display;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Display.modelName = "Display";
var Camera = function (_Model2) {
    _inherits(Camera, _Model2);

    function Camera() {
        _classCallCheck(this, Camera);

        return _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).apply(this, arguments));
    }

    _createClass(Camera, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isRecording: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isMotionDetected: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                harmonograms: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Harmonogram")
            };
        }
    }]);

    return Camera;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Camera.modelName = "Camera";
var Harmonogram = function (_Model3) {
    _inherits(Harmonogram, _Model3);

    function Harmonogram() {
        _classCallCheck(this, Harmonogram);

        return _possibleConstructorReturn(this, (Harmonogram.__proto__ || Object.getPrototypeOf(Harmonogram)).apply(this, arguments));
    }

    _createClass(Harmonogram, null, [{
        key: "fields",
        get: function get() {
            return {};
        }
    }]);

    return Harmonogram;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Harmonogram.modelName = "Harmonogram";

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_types__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Television = function (_React$Component) {
    _inherits(Television, _React$Component);

    function Television(props) {
        _classCallCheck(this, Television);

        var _this = _possibleConstructorReturn(this, (Television.__proto__ || Object.getPrototypeOf(Television)).call(this, props));

        _this.state = {
            id: props.id,
            isActive: props.isActive,
            isBurning: props.isBurning
        };
        _this.setState = _this.setState.bind(_this);
        return _this;
    }

    _createClass(Television, [{
        key: 'setActive',
        value: function setActive(value) {
            this.setState({
                isActive: value
            });
        }
    }, {
        key: 'setFireplace',
        value: function setFireplace(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this._service.setFireplace(id);

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var id = this.props.id;

            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                'div',
                { style: { height: '200px', margin: "auto" } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'div',
                    { style: { margin: "0 auto", width: "250px", position: "relative" }, onMouseEnter: function onMouseEnter() {
                            return _this2.setActive(true);
                        }, onMouseLeave: function onMouseLeave() {
                            return _this2.setActive(false);
                        } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { className: 'ambilight', style: { width: "260px", height: "125px", left: "-5px", top: "35px", backgroundImage: "url('images/ambient.jpg')" } },
                        ' '
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'p',
                        { style: { textAlign: "center", margin: "0px" } },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { src: '/images/tv.png', height: '125px', width: '250px', style: { marginTop: "40px" } })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { className: this.state.isActive ? 'television-bottom camera-visible' : 'television-bottom camera-hidden' },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'label',
                            { className: 'camera-name' },
                            'Sony Bravia'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { style: { float: 'right' } },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-fire television-fireplace', onClick: this.state.isBurning ? function () {
                                    return _this2.setFireplace(id);
                                } : function () {
                                    return _this2.setFireplace(id);
                                } }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-leaf television-leaf' }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-tint television-water' })
                        )
                    )
                )
            );
        }
    }]);

    return Television;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Television);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__["a" /* lazyInject */])(__WEBPACK_IMPORTED_MODULE_3__composition_services_types__["a" /* Services */].TelevisionService), __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)], Television.prototype, "_service", void 0);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(25);




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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composition_services_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_services_camera__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_television__ = __webpack_require__(24);




var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].CameraService).to(__WEBPACK_IMPORTED_MODULE_2__composition_services_camera__["a" /* CameraActionService */]);
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].TelevisionService).to(__WEBPACK_IMPORTED_MODULE_3__composition_services_television__["a" /* TelevisionActionService */]);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(13);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } })
));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_domain_task__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CameraActionService = function () {
    function CameraActionService() {
        _classCallCheck(this, CameraActionService);
    }

    _createClass(CameraActionService, [{
        key: "getCameraState",
        value: function getCameraState(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var response, camera;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/camera/getCameras?id=' + id, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context.sent;

                                if (!response.ok) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 6;
                                return response.json();

                            case 6:
                                camera = _context.sent;
                                return _context.abrupt("return", {
                                    id: id,
                                    isMotionDetected: camera.isMotionDetected,
                                    isRecording: camera.isRecording
                                });

                            case 8:
                                return _context.abrupt("return", null);

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "startRecording",
        value: function startRecording(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/camera/startRecording', {
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
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: "stopRecording",
        value: function stopRecording(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/camera/stopRecording', {
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
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }]);

    return CameraActionService;
}();
CameraActionService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inversify__["injectable"])()], CameraActionService);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelevisionActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_domain_task__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var TelevisionActionService = function () {
    function TelevisionActionService() {
        _classCallCheck(this, TelevisionActionService);
    }

    _createClass(TelevisionActionService, [{
        key: "setFireplace",
        value: function setFireplace(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/television/setFireplace', {
                                    method: 'POST',
                                    body: JSON.stringify(id),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context.sent;

                                if (response.ok) {
                                    console.log('set fireplace');
                                }

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return TelevisionActionService;
}();
TelevisionActionService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inversify__["injectable"])()], TelevisionActionService);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__ = __webpack_require__(2);


var reducers = {
    display: __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__["c" /* default */]
};

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(38);
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_decorators__ = __webpack_require__(32);
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
__WEBPACK_IMPORTED_MODULE_1_tslib__["__decorate"]([__WEBPACK_IMPORTED_MODULE_5_core_decorators__["autobind"], __WEBPACK_IMPORTED_MODULE_1_tslib__["__metadata"]("design:type", Function), __WEBPACK_IMPORTED_MODULE_1_tslib__["__metadata"]("design:paramtypes", [Object]), __WEBPACK_IMPORTED_MODULE_1_tslib__["__metadata"]("design:returntype", void 0)], ScrollEffect.prototype, "handleScroll", null);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB3aWR0aD0iOW1tIiBoZWlnaHQ9IjltbSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSI+CiAgPGRlc2M+UlJPRCBMb2dvPC9kZXNjPgogIDwhLS0gU2hvdyBvdXRsaW5lIG9mIGNhbnZhcyB1c2luZyAncmVjdCcgZWxlbWVudCAtLT4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEyIiAgLz4KPC9zdmc+"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-decorators");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("inversify-inject-decorators");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(11);


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWI1Zjk0MzZiMjg0YzM4ZTM5YWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0c2xpYlwiIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1vcm1cIiIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9vcm0udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbWFpbi10YXNrXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9EaXNwbGF5ZXIudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9UZWxldmlzaW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2lvYy9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL3JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdGVsZXZpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL3JvdXRlLXRyYW5zaXRpb24udHN4Iiwid2VicGFjazovLy8uL0FwcC9saWIvc2Nyb2xsLWVmZmVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2ltYWdlcy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxrQzs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLbUM7QUFDTztBQUVuQyxJQUFvQixpQkFBeUI7QUFDN0MsSUFBZ0IsYUFBcUI7QUFDckMsSUFBbUIsZ0JBQXdCO0FBc0I1QyxJQUFxQjtBQUNYLHdDQUEwQjtBQUF4Qix5QkFBeUUsVUFBVTtBQUF6QjtBQUNwRTs7Ozs7QUFBYSwwQ0FBTSx3REFBUSxRQUFXLFdBQVU7O0FBQ3pDLHdDQUFJLElBRVg7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Q04sZ0JBQUk7QUFDTixjQUFFLG9CQUFRLENBQ3BCO0FBUjhDO0FBOERoRCxtREFEUyxrVkErQ1QsTTs7Ozs7O0FDOUlKLHFDQUFxQyw0WTs7Ozs7O0FDQXJDLGdEOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLHdEOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3d3d3Jvb3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDliNWY5NDM2YjI4NGMzOGUzOWFmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbGliXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidHNsaWJcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IENhbWVyYVZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVsL3ZpZXdtb2RlbCc7XHJcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVsL29ybSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9ESVNQTEFZID0gJ0NyZWF0ZURpc3BsYXlBY3Rpb24nO1xyXG5leHBvcnQgY29uc3QgQUREX0NBTUVSQSA9ICdBZGRDYW1lcmFBY3Rpb24nO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NBTUVSQSA9ICdVcGRhdGVDYW1lcmFBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVEaXNwbGF5QWN0aW9uIHtcclxuICAgIHR5cGU6ICdDcmVhdGVEaXNwbGF5QWN0aW9uJztcclxuICAgIHBheWxvYWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRDYW1lcmFBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZENhbWVyYUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgZGlzcGxheTogbnVtYmVyLFxyXG4gICAgICAgIGNhbWVyYTogQ2FtZXJhVmlld01vZGVsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQ2FtZXJhQWN0aW9uIHtcclxuICAgIHR5cGU6ICdVcGRhdGVDYW1lcmFBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogQ2FtZXJhVmlld01vZGVsO1xyXG59XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gQ3JlYXRlRGlzcGxheUFjdGlvbiB8IEFkZENhbWVyYUFjdGlvbiB8IFVwZGF0ZUNhbWVyYUFjdGlvblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgdXBkYXRlQ2FtZXJhOiAoY2FtZXJhOiBDYW1lcmFWaWV3TW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gb3JtLnNlc3Npb24oZ2V0U3RhdGUoKS5kaXNwbGF5KTtcbiAgICAgICAgY29uc29sZS5sb2coY2FtZXJhKTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBzZXNzaW9uLkNhbWVyYS53aXRoSWQoY2FtZXJhLmlkKTtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSA8Q2FtZXJhVmlld01vZGVsPntcbiAgICAgICAgICAgIG5hbWU6IHN0YXRlLm5hbWUsXG4gICAgICAgICAgICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxuICAgICAgICAgICAgaWQ6IHN0YXRlLmlkLFxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGNhbWVyYS5pc1JlY29yZGluZyxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGNhbWVyYS5pc01vdGlvbkRldGVjdGVkXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfQ0FNRVJBLCBwYXlsb2FkOiBuZXdTdGF0ZSB9KTtcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgRGlzcGxheSwgQ2FtZXJhIH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIENSRUFURV9ESVNQTEFZOlxyXG4gICAgICAgICAgICBEaXNwbGF5LmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NBTUVSQTpcclxuICAgICAgICAgICAgQ2FtZXJhLmNyZWF0ZShhY3Rpb24ucGF5bG9hZC5jYW1lcmEpO1xyXG4gICAgICAgICAgICBEaXNwbGF5LndpdGhJZChhY3Rpb24ucGF5bG9hZC5kaXNwbGF5KVxyXG4gICAgICAgICAgICAgICAgLmNhbWVyYXMuYWRkKENhbWVyYS53aXRoSWQoYWN0aW9uLnBheWxvYWQuY2FtZXJhLmlkKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBEQVRFX0NBTUVSQTpcclxuICAgICAgICAgICAgQ2FtZXJhLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPERpc3BsYXk+c2Vzc2lvbi5zdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIob3JtLCByZWR1Y2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXIudHMiLCJleHBvcnQgY29uc3QgU2VydmljZXMgPSB7XHJcbiAgICBDYW1lcmFTZXJ2aWNlOiBTeW1ib2woXCJDYW1lcmFTZXJ2aWNlXCIpLFxyXG4gICAgVGVsZXZpc2lvblNlcnZpY2U6IFN5bWJvbChcIlRlbGV2aXNpb25TZXJ2aWNlXCIpXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW52ZXJzaWZ5XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LW9ybVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LW9ybVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IERpc3BsYXksIENhbWVyYSwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi92aWV3bW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKERpc3BsYXksIENhbWVyYSwgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZUNhbWVyYXNTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIHJldHVybiBzZXNzaW9uLkRpc3BsYXlDYW1lcmFzLmFsbCgpLnRvUmVmQXJyYXkoKS5tYXAoY2FtZXJhID0+IHtcclxuICAgICAgICBjb25zdCBvYmogPSBzZXNzaW9uLkNhbWVyYS53aXRoSWQoY2FtZXJhLnRvQ2FtZXJhSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhbWVyYVZpZXdNb2RlbD4ge1xyXG4gICAgICAgICAgICBpZDogb2JqLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBvYmoubmFtZSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IG9iai5pc1JlY29yZGluZyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdodHRwOi8vMTkyLjE2OC4wLjIzNC9pbWFnZS9qcGVnLmNnaScsXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBvYmouaXNNb3Rpb25EZXRlY3RlZFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvb3JtLnRzIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lcidcclxuaW1wb3J0IGdldERlY29yYXRvcnMgZnJvbSBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbGF6eUluamVjdCB9ID0gZ2V0RGVjb3JhdG9ycyhjb250YWluZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9pb2MvZGVjb3JhdG9ycy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbWFpbi10YXNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZG9tYWluLXRhc2tcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9jb21wb3NpdGlvbi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IENhbWVyYSwgRGlzcGxheSB9IGZyb20gJy4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEFERF9DQU1FUkEsIENSRUFURV9ESVNQTEFZIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIE1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0IGFnYWluc3QgdGhlIGxpc3Qgb2YgY2xpZW50LXNpZGUgcm91dGVzXHJcbiAgICAgICAgbWF0Y2goeyByb3V0ZXMsIGxvY2F0aW9uOiBwYXJhbXMubG9jYXRpb24gfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QgbWF0Y2ggYW55IHJvdXRlLCByZW5kZXJQcm9wcyB3aWxsIGJlIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBsb2NhdGlvbiAnJHtwYXJhbXMudXJsfScgZG9lc24ndCBtYXRjaCBhbnkgcm91dGUgY29uZmlndXJlZCBpbiByZWFjdC1yb3V0ZXIuYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENSRUFURV9ESVNQTEFZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0NBTUVSQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU2Fsb24gRnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5yZW5kZXJQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGFuIGluaXRpYWwgcmVuZGVyIHRoYXQgd2lsbCBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgU2Nyb2xsRWZmZWN0IGZyb20gJy4uLy4uL2xpYi9zY3JvbGwtZWZmZWN0JztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uLy4uL2xpYi9mdWxsc2NyZWVuJztcbmltcG9ydCBDYW1lcmFMaXN0IGZyb20gJy4vZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyJztcbmltcG9ydCBUZWxldmlzaW9uIGZyb20gJy4vZGV2aWNlcy90ZWxldmlzaW9uL1RlbGV2aXNpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPEZ1bGxzY3JlZW4+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhTGlzdCAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBoZWlnaHQ6IFwiNTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIsIGZsb2F0OiBcImxlZnRcIiwgaGVpZ2h0OlwiNTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjUwcHhcIiwgbWFyZ2luVG9wOiBcIjE1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sYW1wLnBuZ1wiIGhlaWdodD1cIjI1MHB4XCIgd2lkdGg9XCI0MHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWZyYW1lXCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiNzVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbWFyaWx5bi5qcGdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIHdpZHRoPVwiMTI1cHhcIiBoZWlnaHQ9XCIxNzBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMCVcIiwgZmxvYXQ6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVsZXZpc2lvbiBpZD17MX0gaXNBY3RpdmU9e2ZhbHNlfSBpc0J1cm5pbmc9e2ZhbHNlfSAvPlxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiODBweFwiLCBjbGVhcjogXCJib3RoXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoZWxmXCIgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIGhlaWdodDogXCI1MHB4XCIsIGJvcmRlclRvcDogXCI1cHggc29saWQgcmdiYSgxOTMsIDE1NSwgMTA4LCAxKVwiLCBib3JkZXJCb3R0b206IFwiNXB4IHNvbGlkIHJnYmEoMTkzLCAxNTUsIDEwOCwgMSlcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCAjNDQ0MzQzXCIsIGJvcmRlclRvcDogXCIycHggc29saWQgIzQ0NDM0M1wiLCB3aWR0aDogXCIyNSVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgZmxvYXQ6IFwibGVmdFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BzNC5wbmdcIiB3aWR0aD1cIjc1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjExcHhcIiwgbWFyZ2luTGVmdDogXCI3cHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGJveC1zaGFkb3dcIiBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgZmxvYXQ6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaHRwYy5qcGdcIiB3aWR0aD1cIjc1cHhcIiBoZWlnaHQ9XCIzMHB4XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjdweFwiLCBtYXJnaW5MZWZ0OiBcIjdweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgZmxvYXQ6IFwibGVmdFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgbWFyZ2luVG9wOlwiMTUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMCVcIiwgaGVpZ2h0OiBcIjIwMHB4XCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMTIwcHhcIiwgYmFja2dyb3VuZDogXCJibGFja1wiLCBmbG9hdDogXCJsZWZ0XCIsIG1hcmdpblRvcDogXCI1MHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiODAlXCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEyNXB4XCIsIGJhY2tncm91bmQ6IFwiYmx1ZVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNDBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsIHdpZHRoOiBcIjI1cHhcIiwgZmxvYXQ6IFwibGVmdFwiLCBtYXJnaW5MZWZ0OiBcIjIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwcHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgYmFja2dyb3VuZDogXCJibGFja1wiLCB3aWR0aDogXCIyNXB4XCIsIGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwJVwiLCBoZWlnaHQ6IFwiMjAwcHhcIiwgZmxvYXQ6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIxMjBweFwiLCBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsIG1hcmdpblRvcDogXCI1MHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIGhlaWdodDpcIjQwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIG1hcmdpbkxlZnQ6IFwiNTBweFwiLCBtYXJnaW5Ub3A6IFwiMTUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xhbXAucG5nXCIgaGVpZ2h0PVwiMjUwcHhcIiB3aWR0aD1cIjQwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBtYXJnaW5MZWZ0OiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbWUtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTkwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgYmFja2dyb3VuZDogXCJyZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgaGVpZ2h0OiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBoZWlnaHQ6IFwiNXB4XCIsIG1hcmdpblRvcDogXCI1MHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRhZ2xpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsRWZmZWN0IGFuaW1hdGU9XCJib3VuY2VJblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+RGVtbyE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+Li4uUmVhY3QsIFJlZHV4LCBPcmxlYW5zIGFuZCBEb3RuZXQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaG9tZS1pbnRyby10ZXh0XCI+SW50cm9kdWNpbmcgdGhlIDxTY3JvbGwuTGluayB0bz1cImRlbW9cIiBocmVmPVwiI1wiIHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezcwMH0gb2Zmc2V0PXstNTB9PlJST0Q8L1Njcm9sbC5MaW5rPiBzdGFjazwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxFZmZlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3duLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsLkxpbmsgdG89XCJkZW1vXCIgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpY29uLWxpbmtcIiBzbW9vdGg9e3RydWV9IGR1cmF0aW9uPXs3MDB9IG9mZnNldD17LTUwfSA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctY2lyY2xlLWRvd24gY3VzdG9tXCIgPjwvaT48L1Njcm9sbC5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GdWxsc2NyZWVuPlxuICAgICAgICAgICAgPFNjcm9sbC5FbGVtZW50IG5hbWU9XCJkZW1vXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2TWVudSBmcm9tICcuL05hdk1lbnUnO1xuaW1wb3J0IFJvdXRlVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9saWIvcm91dGUtdHJhbnNpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGJvZHk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlcyB7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIExheW91dFN0YXRlcz4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8TmF2TWVudSAvPlxuICAgICAgICAgICAgPFJvdXRlVHJhbnNpdGlvbiBwYXRobmFtZT17dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgOiAnJ30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYm9keX1cbiAgICAgICAgICAgIDwvUm91dGVUcmFuc2l0aW9uPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vc3RvcmUnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE5hdkRyb3Bkb3duLCBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XG5cbmNvbnN0IGxvZ28gPSByZXF1aXJlKCcuLi8uLi9pbWFnZXMvbG9nby5zdmcnKSBhcyBzdHJpbmc7XG5cbmludGVyZmFjZSBOYXZNZW51UHJvcHMge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICByb2xlczogc3RyaW5nW107XG59XG4gXG5jbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdk1lbnVQcm9wcywgQXBwbGljYXRpb25TdGF0ZT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TmF2YmFyIGZpeGVkVG9wPXt0cnVlfT5cbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17Jy8nfT48aW1nIHNyYz17bG9nb30gYWx0PVwiSG9tZSBMb2dvXCIgLz5TbWFydC1Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIC8+XG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0+Q29udGFjdDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb3VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30+Q291bnRlcjwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezJ9IHRpdGxlPVwiTG9naW5cIiBpZD1cIm5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi4xfT5Mb2dpbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjJ9PlJlZ2lzdGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezIuM30+VXNlciBQcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuNH0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs0fT5Ob3RpZmljYXRpb25zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGlzQXV0aGVudGljYXRlZDogZmFsc2UsIHJvbGVzOiBbXSB9O1xyXG4gICAgfSwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbiAgICB7fSAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4pKE5hdk1lbnUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDYW1lcmFTdG9yZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXJcIjtcclxuaW1wb3J0IHsgbGF6eUluamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcyc7XHJcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zZXJ2aWNlcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvdmlld21vZGVsXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgaXNSZWNvcmRpbmc6IGJvb2xlYW47XHJcbiAgICBpc01vdGlvbkRldGVjdGVkOiBib29sZWFuO1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgYWRkcmVzczogc3RyaW5nLFxyXG4gICAgdXBkYXRlQ2FtZXJhOiAoY2FtZXJhOiBDYW1lcmFWaWV3TW9kZWwpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcbiAgICBpc01vdGlvbkRldGVjdGVkOiBib29sZWFuO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmxldCB1cGRhdGVWaWV3O1xyXG5sZXQgdXBkYXRlU3RhdGU7XHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHByb3BzLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogcHJvcHMuaXNSZWNvcmRpbmcsXHJcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IHByb3BzLmlzTW90aW9uRGV0ZWN0ZWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLmFkZHJlc3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBsYXp5SW5qZWN0KFNlcnZpY2VzLkNhbWVyYVNlcnZpY2UpXHJcbiAgICBwcml2YXRlIF9wcmludFNlcnZpY2U6IENhbWVyYVNlcnZpY2U7XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IG5leHRQcm9wcy5pc1JlY29yZGluZyxcclxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogbmV4dFByb3BzLmlzTW90aW9uRGV0ZWN0ZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB1cGRhdGVWaWV3ID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDYW1lcmFWaWV3LFxyXG4gICAgICAgICAgICA1MDAwLCB0aGlzLnN0YXRlLmFkZHJlc3MsIHRoaXMuc2V0U3RhdGUpO1xyXG5cclxuICAgICAgICB1cGRhdGVTdGF0ZSA9IHNldEludGVydmFsKHRoaXMudXBkYXRlQ2FtZXJhU3RhdGUsXHJcbiAgICAgICAgICAgIDUwMDAsIHRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICAgIHRoaXMuX3ByaW50U2VydmljZS5nZXRDYW1lcmFTdGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVDYW1lcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBkYXRlVmlldyk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FtZXJhVmlldyhhZGRyZXNzLCBzZXRTdGF0ZSkge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyArICc/ZGF0YT0nICsgY291bnRlcisrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNhbWVyYVN0YXRlKGlkOiBudW1iZXIsIGdldFN0YXRlLCB1cGRhdGVTdGF0ZSkge1xyXG4gICAgICAgIHZhciBjYW1lcmEgPSBhd2FpdCBnZXRTdGF0ZShpZCk7XHJcbiAgICAgICAgdXBkYXRlU3RhdGUoY2FtZXJhKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3ByaW50U2VydmljZS5zdGFydFJlY29yZGluZyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RvcFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9wcmludFNlcnZpY2Uuc3RvcFJlY29yZGluZyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyIGNhbWVyYS1jb250YWluZXJcIiBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0QWN0aXZlKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuc2V0QWN0aXZlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY2FtZXJhLWZyYW1lXCIgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUuYWRkcmVzc30gc3R5bGU9e3sgaGVpZ2h0OiAnMTI1cHgnLCB3aWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzUmVjb3JkaW5nID8gJ2NhbWVyYS1yZWNvcmRpbmcnIDogdGhpcy5zdGF0ZS5pc01vdGlvbkRldGVjdGVkID8gJ2NhbWVyYS1hbGVydCcgOiAnY2FtZXJhLW5vLWFsZXJ0J30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNBY3RpdmUgPyAnY2FtZXJhLWJvdHRvbSBjYW1lcmEtdmlzaWJsZScgOiAnY2FtZXJhLWJvdHRvbSBjYW1lcmEtaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYW1lcmEtbmFtZVwiPnt0aGlzLnN0YXRlLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVjb3JkIGNhbWVyYS1wbGF5XCIgc3R5bGU9e3sgcGFkZGluZzogJzNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzUmVjb3JkaW5nID8gKCkgPT4gdGhpcy5zdG9wUmVjb3JkaW5nKGlkKSA6ICgpID0+IHRoaXMuc3RhcnRSZWNvcmRpbmcoaWQpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0b3BcIiBzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdncmF5JywgcGFkZGluZzogJzNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0b3BSZWNvcmRpbmcoaWQpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0NhbWVyYS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgQ2FtZXJhSXRlbSBmcm9tICcuL0NhbWVyYSc7XHJcbmltcG9ydCB7IGFjdGl2ZUNhbWVyYXNTZWxlY3RvciB9IGZyb20gJy4vbW9kZWwvb3JtJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSBcIi4vbW9kZWwvdmlld21vZGVsXCI7XHJcbmltcG9ydCAqIGFzIERpc3BsYXlTdG9yZSBmcm9tIFwiLi9zdGF0ZS9kaXNwbGF5ZXJcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsaXN0OiBDYW1lcmFWaWV3TW9kZWxbXTtcclxuICAgIGxpc3RWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgIGxpc3RWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG50eXBlIENhbWVyYXNQcm9wcyA9IFByb3BzICYgdHlwZW9mIERpc3BsYXlTdG9yZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmNsYXNzIERpc3BsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDYW1lcmFzUHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FtZXJhc1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsaXN0VmlzaWJsZTogcHJvcHMubGlzdFZpc2libGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9vZ2xlQ2FtZXJhcygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGlzdFZpc2libGU6ICF0aGlzLnN0YXRlLmxpc3RWaXNpYmxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXBkYXRlQ2FtZXJhIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBzdHlsZT17eyBoZWlnaHQ6ICcyMDBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbWVyYS10b3BiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93biBjYW1lcmEtY29sbGFwc2UtZG93blwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9vZ2xlQ2FtZXJhcygpfSBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsYXkgY2FtZXJhLXBsYXlcIiBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZXllLW9wZW4gY2FtZXJhLW1vdGlvblwiIHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi12b2x1bWUtdXAgY2FtZXJhLXNvdW5kXCIgc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsIGNhbWVyYS10b3BiYXItc2V0dGluZ3NcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlzdFZpc2libGUgPyAnc2xpZGUtZG93bicgOiAnc2xpZGUtdXAnfT4ge3RoaXMucHJvcHMubGlzdC5tYXAoKGNhbWVyYSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUl0ZW0ga2V5PXtjYW1lcmEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYW1lcmEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e2NhbWVyYS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYW1lcmEubmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZD17Y2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nPXtjYW1lcmEuaXNSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhbWVyYT17dXBkYXRlQ2FtZXJhfSAvPil9XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpc3Q6IGFjdGl2ZUNhbWVyYXNTZWxlY3RvcihzdGF0ZS5kaXNwbGF5KSxcclxuICAgICAgICBsaXN0VmlzaWJsZTogdHJ1ZVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgRGlzcGxheVN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbikoRGlzcGxheWVyKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0Rpc3BsYXllci50c3giLCJpbXBvcnQgeyBNb2RlbCwgbWFueSwgYXR0ciB9IGZyb20gXCJyZWR1eC1vcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNwbGF5IGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGNhbWVyYXM6IG1hbnkoXCJDYW1lcmFcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5EaXNwbGF5Lm1vZGVsTmFtZSA9IFwiRGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBhdHRyKCksXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGhhcm1vbm9ncmFtczogbWFueShcIkhhcm1vbm9ncmFtXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuQ2FtZXJhLm1vZGVsTmFtZSA9IFwiQ2FtZXJhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFybW9ub2dyYW0gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5IYXJtb25vZ3JhbS5tb2RlbE5hbWUgPSBcIkhhcm1vbm9ncmFtXCI7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbGF6eUluamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcyc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3NlcnZpY2VzL3RlbGV2aXNpb25cIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc0J1cm5pbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc0J1cm5pbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGV2aXNpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHByb3BzLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBpc0J1cm5pbmc6IHByb3BzLmlzQnVybmluZ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldEZpcmVwbGFjZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5zZXRGaXJlcGxhY2UoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBsYXp5SW5qZWN0KFNlcnZpY2VzLlRlbGV2aXNpb25TZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSBfc2VydmljZTogVGVsZXZpc2lvblNlcnZpY2U7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcyMDBweCcsIG1hcmdpbjogXCJhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiLCB3aWR0aDogXCIyNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19IG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW1iaWxpZ2h0XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjYwcHhcIiwgaGVpZ2h0OiBcIjEyNXB4XCIsIGxlZnQ6IFwiLTVweFwiLCB0b3A6IFwiMzVweFwiLCBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCdpbWFnZXMvYW1iaWVudC5qcGcnKVwiIH19PiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3R2LnBuZ1wiIGhlaWdodD1cIjEyNXB4XCIgd2lkdGg9XCIyNTBweFwiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjQwcHhcIn19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzQWN0aXZlID8gJ3RlbGV2aXNpb24tYm90dG9tIGNhbWVyYS12aXNpYmxlJyA6ICd0ZWxldmlzaW9uLWJvdHRvbSBjYW1lcmEtaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYW1lcmEtbmFtZVwiPlNvbnkgQnJhdmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZmlyZSB0ZWxldmlzaW9uLWZpcmVwbGFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5pc0J1cm5pbmcgPyAoKSA9PiB0aGlzLnNldEZpcmVwbGFjZShpZCkgOiAoKSA9PiB0aGlzLnNldEZpcmVwbGFjZShpZCl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sZWFmIHRlbGV2aXNpb24tbGVhZlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdGludCB0ZWxldmlzaW9uLXdhdGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9UZWxldmlzaW9uLnRzeCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBTdG9yZUNyZWF0b3IsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0ICogYXMgQXBwU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbiAgICApKGNyZWF0ZVN0b3JlKSBhcyBTdG9yZUNyZWF0b3I7XG5cbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XG5cbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgQXBwU3RvcmU+KCcuL3N0b3JlJyk7XG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zZXJ2aWNlcy9jYW1lcmEnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3NlcnZpY2VzL3RlbGV2aXNpb24nO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJ1xyXG5pbXBvcnQgeyBDYW1lcmFBY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uQWN0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90ZWxldmlzaW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cclxuY29udGFpbmVyLmJpbmQ8Q2FtZXJhU2VydmljZT4oU2VydmljZXMuQ2FtZXJhU2VydmljZSkudG8oQ2FtZXJhQWN0aW9uU2VydmljZSk7XHJcbmNvbnRhaW5lci5iaW5kPFRlbGV2aXNpb25TZXJ2aWNlPihTZXJ2aWNlcy5UZWxldmlzaW9uU2VydmljZSkudG8oVGVsZXZpc2lvbkFjdGlvblNlcnZpY2UpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0XG4gICAgPFJvdXRlIGNvbXBvbmVudD17TGF5b3V0fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudHM9e3sgYm9keTogSG9tZSB9fSAvPlxuICAgIDwvUm91dGU+O1xuXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3JvdXRlcy50c3giLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc2VydmljZXMvY2FtZXJhJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC92aWV3bW9kZWwnO1xyXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbWVyYUFjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBDYW1lcmFTZXJ2aWNlIHtcclxuXHJcbiAgICBhc3luYyBnZXRDYW1lcmFTdGF0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxDYW1lcmFWaWV3TW9kZWw+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvZ2V0Q2FtZXJhcz9pZD0nICsgaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB2YXIgY2FtZXJhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIDxDYW1lcmFWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogY2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZzogY2FtZXJhLmlzUmVjb3JkaW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0UmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvc3RhcnRSZWNvcmRpbmcnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IHJlY29yZGluZycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIHN0b3BSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9zdG9wUmVjb3JkaW5nJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wIHJlY29yZGluZycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvY2FtZXJhLnRzIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgVGVsZXZpc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zZXJ2aWNlcy90ZWxldmlzaW9uJztcclxuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWxldmlzaW9uQWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRlbGV2aXNpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBhc3luYyBzZXRGaXJlcGxhY2UoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL3RlbGV2aXNpb24vc2V0RmlyZXBsYWNlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgZmlyZXBsYWNlJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdGVsZXZpc2lvbi50cyIsImltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbFwiO1xuaW1wb3J0IHsgb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvb3JtXCI7XG5pbXBvcnQgKiBhcyBEaXNwbGF5ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc3RhdGUvZGlzcGxheWVyXCJcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcbiAgICBuYXZtZW51OiB7fSxcbiAgICBkaXNwbGF5OiBEaXNwbGF5XG59XG5cbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICAgIGRpc3BsYXk6IERpc3BsYXllci5kZWZhdWx0XG59O1xuXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3N0b3JlL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgaGVpZ2h0OiBzdHJpbmdcbn1cblxudmFyIGdldERpbWVuc2lvbnMgPSAoKSA9PiAoeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUwICsgJ3B4JyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgaGVpZ2h0OiAnMTAwdmgnIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0RGltZW5zaW9ucygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHsgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB9IH0pO1xuICAgICAgICAvL3JldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvZnVsbHNjcmVlbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uTW90aW9uLCBzcHJpbmcgfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuXG5jb25zdCB3aWxsRW50ZXIgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDAuOTdcbn0pO1xuXG5jb25zdCB3aWxsTGVhdmUgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICBzY2FsZTogc3ByaW5nKDEuMDApXG59KTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiBzcHJpbmcoMSksXG4gICAgc2NhbGU6IHNwcmluZygxKVxufSk7XG5cbmNvbnN0IFJvdXRlVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuOiBjaGlsZCwgcGF0aG5hbWUgfSkgPT4gKFxuICAgIDxUcmFuc2l0aW9uTW90aW9uXG4gICAgICAgIHN0eWxlcz17W3tcbiAgICAgICAgICAgIGtleTogcGF0aG5hbWUsXG4gICAgICAgICAgICBzdHlsZTogZ2V0U3R5bGVzKCksXG4gICAgICAgICAgICBkYXRhOiB7IGNoaWxkIH1cbiAgICAgICAgfV19XG4gICAgICAgIHdpbGxFbnRlcj17d2lsbEVudGVyfVxuICAgICAgICB3aWxsTGVhdmU9e3dpbGxMZWF2ZX1cbiAgICA+XG4gICAgICAgIHsoaW50ZXJwb2xhdGVkKSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aW50ZXJwb2xhdGVkLm1hcCgoeyBrZXksIHN0eWxlLCBkYXRhIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7a2V5fS10cmFuc2l0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMud3JhcHBlciwgeyBvcGFjaXR5OiBzdHlsZS5vcGFjaXR5LCB0cmFuc2Zvcm06IGBzY2FsZSgke3N0eWxlLnNjYWxlfSlgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9UcmFuc2l0aW9uTW90aW9uID5cbik7XG5cbnZhciBzdHlsZXMgPSB7XG4gICAgd3JhcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlVHJhbnNpdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJ2NvcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgQ2FuY2VsYWJsZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmludGVyZmFjZSBTY3JvbGxFZmZlY3RTdGF0ZSB7XG4gICAgYW5pbWF0ZWQ6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY3JvbGxFZmZlY3RQcm9wcyB7XG4gICAgYW5pbWF0ZT86IHN0cmluZztcbiAgICBvZmZzZXQ/OiBudW1iZXI7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIGR1cmF0aW9uPzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIHF1ZXVlRHVyYXRpb24/OiBudW1iZXI7XG4gICAgcXVldWVDbGFzcz86IHN0cmluZztcbiAgICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG59O1xuXG4vL3ZhciBjYW5Vc2VET00gPSAhIShcbi8vICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4vLyAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbi8vICAgIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4vLyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEVmZmVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTY3JvbGxFZmZlY3RQcm9wcywgU2Nyb2xsRWZmZWN0U3RhdGU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogU2Nyb2xsRWZmZWN0UHJvcHMgPSB7XG4gICAgICAgIGFuaW1hdGU6IFwiZmFkZUluVXBcIixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBxdWV1ZUR1cmF0aW9uOiAxLFxuICAgICAgICBxdWV1ZUNsYXNzOiBcIlwiLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4geyB9XG4gICAgfTtcblxuICAgIHNjcm9sbEhhbmRsZXI6IEV2ZW50TGlzdGVuZXIgJiBDYW5jZWxhYmxlO1xuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCh1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBkZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpLCAyMDAsIHsgdHJhaWxpbmc6IHRydWUgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmNhbmNlbCgpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzaW5nbGVBbmltYXRlKCkge1xuICAgICAgICAvKiBjYWxsYmFjayAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2soKTtcbiAgICAgICAgfSwgKHRoaXMucHJvcHMuZHVyYXRpb24gfCAxKSAqIDEwMDApO1xuICAgIH1cblxuICAgIHF1ZXVlQW5pbWF0ZSgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgbGV0IGNoZWNrQ2xhc3MgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc05hbWUgPT09IHRoaXMucHJvcHMucXVldWVDbGFzcztcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzZXRDbGFzcyA9IChlbCkgPT4ge1xuICAgICAgICAgICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyBhbmltYXRlZCAnICsgdGhpcy5wcm9wcy5hbmltYXRlO1xuICAgICAgICAgICAgfSwgbnVtYmVyICogKHRoaXMucHJvcHMucXVldWVEdXJhdGlvbiAqIDEwMDApKTtcbiAgICAgICAgICAgIG51bWJlcisrO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZmluZENsYXNzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmaW5kQ2xhc3MoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja0NsYXNzKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDbGFzcyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qIGZpbmQgcXVldWUgY2xhc3NlcyAqL1xuICAgICAgICBmaW5kQ2xhc3MoZWxlbWVudCk7XG5cbiAgICAgICAgLyogY2FsbGJhY2sgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKCk7XG4gICAgICAgIH0sIHRoaXMucHJvcHMuZHVyYXRpb24gKiAxMDAwICogbnVtYmVyKTtcbiAgICB9XG5cbiAgICBAYXV0b2JpbmRcbiAgICBoYW5kbGVTY3JvbGwoZSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuYW5pbWF0ZWQpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uWSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb25ZID0gd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uWSArIHdpbmRvd0hlaWdodCAqIC45NSA+PSBlbGVtZW50UG9zaXRpb25ZICsgdGhpcy5wcm9wcy5vZmZzZXQgKiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWV1ZUNsYXNzID09IFwiXCIgJiYgdGhpcy5zaW5nbGVBbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWV1ZUNsYXNzICE9PSBcIlwiICYmIHRoaXMucXVldWVBbmltYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9wcywgc3RhdGVcbiAgICAgICAgfSA9IHRoaXM7XG5cbiAgICAgICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdhbmltYXRlZCc6IHRydWUsXG4gICAgICAgICAgICBbcHJvcHMuYW5pbWF0ZV06IHN0YXRlLmFuaW1hdGVkICYmIHByb3BzLnF1ZXVlQ2xhc3MgPT09IFwiXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNsYXNzZXMgKz0gJyAnICsgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICBsZXQgc3R5bGU6IGFueSA9IHN0YXRlLmFuaW1hdGVkID8ge30gOiB7XG4gICAgICAgICAgICAvLyAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHByb3BzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlLldlYmtpdEFuaW1hdGlvbkR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb24gKyAncyc7XG4gICAgICAgICAgICBzdHlsZS5BbmltYXRpb25EdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uICsgJ3MnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e3N0eWxlfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgfVxufVxuXG4vL2xldCB0aHJvdHRsZSA9IChkZWxheSwgY2FsbGJhY2spID0+IHtcbi8vICAgIGxldCBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbi8vICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuLy8gICAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4vLyAgICAgICAgaWYgKCh0aW1lIC0gcHJldmlvdXNDYWxsKSA+PSBkZWxheSkge1xuLy8gICAgICAgICAgICBwcmV2aW91c0NhbGwgPSB0aW1lO1xuLy8gICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcbi8vICAgICAgICB9XG4vLyAgICB9O1xuLy99O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvc2Nyb2xsLWVmZmVjdC50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCw3N3UvUEhOMlp5QjNhV1IwYUQwaU9XMXRJaUJvWldsbmFIUTlJamx0YlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TUNBeE1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbVZ5YzJsdmJqMGlNUzR5SWlCaVlYTmxVSEp2Wm1sc1pUMGlkR2x1ZVNJK0NpQWdQR1JsYzJNK1VsSlBSQ0JNYjJkdlBDOWtaWE5qUGdvZ0lEd2hMUzBnVTJodmR5QnZkWFJzYVc1bElHOW1JR05oYm5aaGN5QjFjMmx1WnlBbmNtVmpkQ2NnWld4bGJXVnVkQ0F0TFQ0S0lDQThZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnWm1sc2JEMGlkMmhwZEdVaUlITjBjbTlyWlQwaWNtVmtJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXlJaUFnTHo0S1BDOXpkbWMrXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0FwcC9pbWFnZXMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzcG5ldC1wcmVyZW5kZXJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtZGVjb3JhdG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtZGVjb3JhdG9yc1wiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2RlYm91bmNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoL2RlYm91bmNlXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb21cIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW90aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtbW90aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=