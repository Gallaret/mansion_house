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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux-orm");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CAMERA; });
/* unused harmony export UPDATE_CAMERA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_orm__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_orm__ = __webpack_require__(1);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
var Services = {
    CameraService: Symbol("CameraService"),
    TelevisionService: Symbol("TelevisionService")
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TELEVISION_FIREPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
var _this = this;


var TELEVISION_FIREPLACE = 'TelevisionFireplaceAction';
var actionCreators = {
    setFireplace: function setFireplace(id, value) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return dispatch({ type: TELEVISION_FIREPLACE, payload: { id: id, value: value } });

                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeCamerasSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(21);


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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeTelevisionSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(24);


var orm = new __WEBPACK_IMPORTED_MODULE_0_redux_orm__["ORM"]();
orm.register(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* Television */], __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Harmonogram */]);
var activeTelevisionSelector = orm.createSelector(function (session) {
    var television = session.Television.first();
    return {
        id: television.id,
        isActive: television.isActive,
        isFireplaceRunning: television.isFireplaceRunning,
        isAquariumRunning: television.isAquariumRunning,
        name: television.name
    };
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TELEVISION; });
/* unused harmony export actionCreators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_effects__ = __webpack_require__(8);



var ADD_TELEVISION = 'AddTelevisionAction';
var actionCreators = {};
var reducer = function reducer(session, action) {
    var Television = session.Television;

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__actions_effects__["a" /* TELEVISION_FIREPLACE */]:
            Television.withId(action.payload.id).update({ isFireplaceRunning: action.payload.value });
            break;
        case ADD_TELEVISION:
            Television.create(action.payload);
            break;
    }
    return session.state;
};
/* harmony default export */ __webpack_exports__["b"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_orm__["createReducer"])(__WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* orm */], reducer));

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lazyInject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__);



var _getDecorators = __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default()(__WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__["a" /* container */]);

var lazyInject = _getDecorators.lazyInject;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("domain-task");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_routes__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__composition_configureStore__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_camera_state_displayer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__composition_components_devices_television_states_television__ = __webpack_require__(11);









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
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_8__composition_components_devices_television_states_television__["a" /* ADD_TELEVISION */],
                payload: {
                    id: 1,
                    name: "sony bravia",
                    isFireplaceRunning: false,
                    isAquariumRunning: false
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_fullscreen__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_camera_Displayer__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_television_Television__ = __webpack_require__(22);
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
                    __WEBPACK_IMPORTED_MODULE_1__lib_fullscreen__["a" /* default */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'row', id: 'hero' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__devices_camera_Displayer__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'center', style: { display: "block", height: "300px" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { width: "40%", float: "left", height: "300px" } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { float: "right", marginTop: "300px", position: "relative" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker-back.png', height: '120px', width: '20px', style: { position: "absolute", top: "100px", right: "30px" } })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { float: "right", marginRight: "50px", marginTop: "200px", position: "relative" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { className: 'hue2' },
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/hue.png', height: '150px', width: '40px' })
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
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__devices_television_Television__["a" /* default */], null),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { float: "left", width: "100%", textAlign: "center" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker-front.png', width: '75px', height: '20px' })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { height: "50px", clear: "both" } },
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
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { height: "50px", clear: "both", position: "relative" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { style: { position: "absolute", top: "15px", left: "50px" } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker.png', width: '40px', height: '60px', className: 'frame-shadow' })
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { style: { position: "absolute", top: "15px", right: "50px" } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker.png', width: '40px', height: '60px', className: 'frame-shadow' })
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { position: "relative" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { float: "left", position: "absolute", top: "60px" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { style: { height: "150px" } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/sofa.png', width: '380px', height: '150px' })
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { style: { height: "50px" } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                                'div',
                                                { style: { float: "left", marginLeft: "50px" } },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker-back-small.png', width: '25px', height: '40px' })
                                            ),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                                'div',
                                                { style: { float: "right", marginRight: "50px" } },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker-back-small.png', width: '25px', height: '40px' })
                                            )
                                        )
                                    )
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { width: "40%", float: "right", height: "300px" } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { float: "left", marginTop: "300px", position: "relative" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker-back.png', height: '120px', width: '20px', style: { position: "absolute", top: "100px", left: "30px" } })
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { float: "left", marginLeft: "50px", marginTop: "200px", position: "relative" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { className: 'hue' },
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/hue.png', height: '150px', width: '40px' })
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
                            { className: 'row', id: 'footer' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'floor-container' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'floor' })
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'bottom' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { marginTop: "55px", marginLeft: "550px", height: "50px", float: "left" } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { className: 'glyphicon glyphicon-facetime-video', style: { fontSize: "25px" } },
                                    ' '
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { className: 'glyphicon glyphicon-picture', style: { fontSize: "25px", marginLeft: "25px" } },
                                    ' '
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { className: 'glyphicon glyphicon-film', style: { fontSize: "25px", marginLeft: "25px" } },
                                    ' '
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { className: 'glyphicon glyphicon-music', style: { fontSize: "25px", marginLeft: "25px" } },
                                    ' '
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'player', style: { marginTop: "25px", height: "90px", width: "370px", marginLeft: "50px", float: "left", position: "relative" } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'player-left', style: { position: "absolute", left: "-10px", width: "15px", height: "90px" } }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { position: "absolute", left: "20px", width: "320px" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'output',
                                        { className: 'player-display', style: { width: "200px", padding: "0 10px", display: "inline-block", fontSize: "15px", lineHeight: "40px" } },
                                        'Ready to play'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { style: { lineHeight: "40px", display: "inline-block" } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { className: 'glyphicon glyphicon-backward', style: { fontSize: "15px", marginLeft: "10px" } },
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { className: 'glyphicon glyphicon-play', style: { fontSize: "20px", marginLeft: "10px" } },
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { className: 'glyphicon glyphicon-stop', style: { fontSize: "15px", marginLeft: "10px" } },
                                            ' '
                                        ),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                            'div',
                                            { className: 'glyphicon glyphicon-forward', style: { fontSize: "15px", marginLeft: "10px" } },
                                            ' '
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { style: { position: "absolute", width: "320px", bottom: "10px", left: "20px", display: "inline-block" } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { className: 'glyphicon glyphicon-eject', style: { fontSize: "15px", display: "inline-block" } },
                                        ' '
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'output',
                                        { className: 'player-drive', style: { padding: "5px", lineHeight: "15px", marginLeft: "25px", width: "225px", display: "inline-block" } },
                                        'Detroit'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                        'div',
                                        { className: 'glyphicon glyphicon-folder-open', style: { fontSize: "15px", marginLeft: "25px" } },
                                        ' '
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'player-right', style: { position: "absolute", width: "15px", right: "20px", height: "90px" } })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__ = __webpack_require__(32);
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var logo = __webpack_require__(33);

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
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'smart-container' },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'div',
                                    { className: 'smart', style: { backgroundImage: "url('images/gradient.png')" } },
                                    ' '
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: 'images/logo.png', height: '50px', width: '250px', alt: 'Home Logo' })
                            )
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_types__ = __webpack_require__(5);
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
            updateView = setInterval(this.updateCameraView, 1000, this.state.address, this.setState);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Camera__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_orm__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_displayer__ = __webpack_require__(4);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Camera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Harmonogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_ioc_decorators__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composition_services_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_components_actions_effects__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_schema__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_television_effects_fireplace_fire__ = __webpack_require__(23);
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
            id: props.television.id,
            isActive: props.television.isActive,
            isBurning: props.television.isFireplaceRunning
        };
        _this.setState = _this.setState.bind(_this);
        return _this;
    }

    _createClass(Television, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("receive Props");
            console.log(nextProps);
        }
    }, {
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
                var fire, context;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                fire = new __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_television_effects_fireplace_fire__["a" /* Fire */]();
                                context = this.refs.television;

                                fire.initialize(context);
                                setInterval(function () {
                                    return fire.burnBurnBurn();
                                }, 100, fire);
                                this.props.setFireplace(this.state.id, !this.state.isBurning);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: 'setVideo',
        value: function setVideo(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this._service.setVideo(id);

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var television = this.props.television;

            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                'div',
                { style: { height: '180px', margin: "auto" } },
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
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'canvas',
                            { className: this.props.television.isFireplaceRunning ? "burning" : "not-burning", style: { background: "black", height: "125px", width: "250px", marginTop: "40px" }, ref: 'television' },
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { src: '/images/tv.png', height: '125px', width: '250px' })
                        )
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
                                    return _this2.setFireplace(television.id);
                                } : function () {
                                    return _this2.setFireplace(television.id);
                                } }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-leaf television-leaf' }),
                            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-tint television-water', onClick: this.state.isBurning ? function () {
                                    return _this2.setVideo(television.id);
                                } : function () {
                                    return _this2.setVideo(television.id);
                                } })
                        )
                    )
                )
            );
        }
    }]);

    return Television;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__composition_ioc_decorators__["a" /* lazyInject */])(__WEBPACK_IMPORTED_MODULE_4__composition_services_types__["a" /* Services */].TelevisionService), __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)], Television.prototype, "_service", void 0);
var mapStateToProps = function mapStateToProps(state) {
    return {
        television: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__models_schema__["b" /* activeTelevisionSelector */])(state.television)
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_5__composition_components_actions_effects__["b" /* actionCreators */])(Television));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fire; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fire = function Fire() {
    _classCallCheck(this, Fire);

    this.initialize = function (canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.intensity = null;
        this.fps = 30;
        this.threshold = 0.5;
        this.imageData = this.ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
        this.data = this.imageData.data;
        var numPixels = this.data.length / 4;
        this.colors = [];
        for (var i = 0; i < 256; i++) {
            var color = [];
            color[0] = color[1] = color[2] = 0;
            this.colors[i] = color;
        }
        for (var i = 0; i < 32; ++i) {
            this.colors[i][2] = i << 1;
            this.colors[i + 32][0] = i << 3;
            this.colors[i + 32][2] = 64 - (i << 1);
            this.colors[i + 64][0] = 255;
            this.colors[i + 64][1] = i << 3;
            this.colors[i + 96][0] = 255;
            this.colors[i + 96][1] = 255;
            this.colors[i + 96][2] = i << 2;
            this.colors[i + 128][0] = 255;
            this.colors[i + 128][1] = 255;
            this.colors[i + 128][2] = 64 + (i << 2);
            this.colors[i + 160][0] = 255;
            this.colors[i + 160][1] = 255;
            this.colors[i + 160][2] = 128 + (i << 2);
            this.colors[i + 192][0] = 255;
            this.colors[i + 192][1] = 255;
            this.colors[i + 192][2] = 192 + i;
            this.colors[i + 224][0] = 255;
            this.colors[i + 224][1] = 255;
            this.colors[i + 224][2] = 224 + i;
        }
        this.fire = [];
        for (var i = 0; i < this.canvasWidth * this.canvasHeight; i++) {
            this.fire[i] = 0;
        }
        this.time = new Date().getTime();
    };
    this.randomizeThreshold = function () {
        this.threshold += Math.random() * 0.2 - 0.1;
        this.threshold = Math.min(Math.max(this.threshold, 0.5), 0.8);
    };
    this.burnBurnBurn = function () {
        var _this = this;

        window.requestAnimationFrame(function () {
            return _this.burnBurnBurn;
        });
        var now = new Date().getTime();
        var dt = now - this.time;
        if (dt < 1000 / this.fps) return;
        this.time = now;
        var bottomLine = this.canvasWidth * (this.canvasHeight - 1);

        for (var x = 0; x < this.canvasWidth; x++) {
            var value = 0;
            if (Math.random() > this.threshold) value = 255;
            this.fire[bottomLine + x] = value;
        }

        var value = 0;
        for (var y = 0; y < this.canvasHeight; ++y) {
            for (var x = 0; x < this.canvasWidth; ++x) {
                if (x == 0) {
                    value = this.fire[bottomLine];
                    value += this.fire[bottomLine];
                    value += this.fire[bottomLine - this.canvasWidth];
                    value /= 3;
                } else if (x == this.canvasWidth - 1) {
                    value = this.fire[bottomLine + x];
                    value += this.fire[bottomLine - this.canvasWidth + x];
                    value += this.fire[bottomLine + x - 1];
                    value /= 3;
                } else {
                    value = this.fire[bottomLine + x];
                    value += this.fire[bottomLine + x + 1];
                    value += this.fire[bottomLine + x - 1];
                    value += this.fire[bottomLine - this.canvasWidth + x];
                    value /= 4;
                }
                if (value > 1) value -= 1;
                value = Math.floor(value);
                var index = bottomLine - this.canvasWidth + x;
                this.fire[index] = value;
            }
            bottomLine -= this.canvasWidth;
        }
        var skipRows = 2;
        for (var y = skipRows; y < this.canvasHeight; ++y) {
            for (var x = 0; x < this.canvasWidth; ++x) {
                var index = y * this.canvasWidth * 4 + x * 4;
                value = this.fire[(y - skipRows) * this.canvasWidth + x];
                this.data[index] = this.colors[value][0];
                this.data[++index] = this.colors[value][1];
                this.data[++index] = this.colors[value][2];
                this.data[++index] = 255;
            }
        }

        if (this.intensity == null) {
            if (Math.random() > 0.95) {
                this.randomizeThreshold();
            }
        }
        this.ctx.putImageData(this.imageData, 0, 0);
    };
};



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Television; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Harmonogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Television = function (_Model) {
    _inherits(Television, _Model);

    function Television() {
        _classCallCheck(this, Television);

        return _possibleConstructorReturn(this, (Television.__proto__ || Object.getPrototypeOf(Television)).apply(this, arguments));
    }

    _createClass(Television, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isFireplaceRunning: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isAquariumRunning: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                harmonograms: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Harmonogram")
            };
        }
    }]);

    return Television;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Television.modelName = "Television";
var Harmonogram = function (_Model2) {
    _inherits(Harmonogram, _Model2);

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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(30);




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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composition_services_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_services_camera__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_television__ = __webpack_require__(29);




var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].CameraService).to(__WEBPACK_IMPORTED_MODULE_2__composition_services_camera__["a" /* CameraActionService */]);
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].TelevisionService).to(__WEBPACK_IMPORTED_MODULE_3__composition_services_television__["a" /* TelevisionActionService */]);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(16);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } })
));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(13);
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelevisionActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(13);
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
    }, {
        key: "setVideo",
        value: function setVideo(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/television/setVideo', {
                                    method: 'POST',
                                    body: JSON.stringify(id),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context2.sent;

                                if (response.ok) {
                                    console.log('set video');
                                }

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }]);

    return TelevisionActionService;
}();
TelevisionActionService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inversify__["injectable"])()], TelevisionActionService);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__ = __webpack_require__(11);



var reducers = {
    display: __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__["c" /* default */],
    television: __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__["b" /* default */]
};

/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB3aWR0aD0iOW1tIiBoZWlnaHQ9IjltbSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSI+CiAgPGRlc2M+UlJPRCBMb2dvPC9kZXNjPgogIDwhLS0gU2hvdyBvdXRsaW5lIG9mIGNhbnZhcyB1c2luZyAncmVjdCcgZWxlbWVudCAtLT4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEyIiAgLz4KPC9zdmc+"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("inversify-inject-decorators");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

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

module.exports = require("redux");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(14);


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDIxOThjZDU3YTZkYzY2ZDQwYWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1vcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0c2xpYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc3RhdGUvZGlzcGxheWVyLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvb3JtLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG9tYWluLXRhc2tcIiIsIndlYnBhY2s6Ly8vLi9BcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0Rpc3BsYXllci50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL1RlbGV2aXNpb24udHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2ZpcmVwbGFjZS9maXJlLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9pb2MvY29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy9jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3RlbGV2aXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL0FwcC9saWIvZnVsbHNjcmVlbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9yb3V0ZS10cmFuc2l0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzcG5ldC1wcmVyZW5kZXJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsa0M7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7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Qjs7Ozs7OztBQUVGLElBQVU7QUFDQztBQUNLLGtCQUFZO0FBQ2YsZUFFWDtBQUpXO0FBREE7QUFPYix5REFBK0IsaUI7Ozs7OztBQ2xEL0IscUNBQXFDLDRZOzs7Ozs7QUNBckMsZ0Q7Ozs7OztBQ0FBLHdEOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3d3d3Jvb3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQyMTk4Y2Q1N2E2ZGM2NmQ0MGFmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LW9ybVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LW9ybVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbGliXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidHNsaWJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbC92aWV3bW9kZWwnO1xyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbC9vcm0nO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRElTUExBWSA9ICdDcmVhdGVEaXNwbGF5QWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQU1FUkEgPSAnQWRkQ2FtZXJhQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DQU1FUkEgPSAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRGlzcGxheUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQ3JlYXRlRGlzcGxheUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkQ2FtZXJhQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRDYW1lcmFBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGRpc3BsYXk6IG51bWJlcixcclxuICAgICAgICBjYW1lcmE6IENhbWVyYVZpZXdNb2RlbFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUNhbWVyYUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IENhbWVyYVZpZXdNb2RlbDtcclxufVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IENyZWF0ZURpc3BsYXlBY3Rpb24gfCBBZGRDYW1lcmFBY3Rpb24gfCBVcGRhdGVDYW1lcmFBY3Rpb25cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHVwZGF0ZUNhbWVyYTogKGNhbWVyYTogQ2FtZXJhVmlld01vZGVsKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG9ybS5zZXNzaW9uKGdldFN0YXRlKCkuZGlzcGxheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhbWVyYSk7XG5cbiAgICAgICAgdmFyIHN0YXRlID0gc2Vzc2lvbi5DYW1lcmEud2l0aElkKGNhbWVyYS5pZCk7XG5cbiAgICAgICAgdmFyIG5ld1N0YXRlID0gPENhbWVyYVZpZXdNb2RlbD57XG4gICAgICAgICAgICBuYW1lOiBzdGF0ZS5uYW1lLFxuICAgICAgICAgICAgYWRkcmVzczogc3RhdGUuYWRkcmVzcyxcbiAgICAgICAgICAgIGlkOiBzdGF0ZS5pZCxcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBjYW1lcmEuaXNSZWNvcmRpbmcsXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBjYW1lcmEuaXNNb3Rpb25EZXRlY3RlZFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogVVBEQVRFX0NBTUVSQSwgcGF5bG9hZDogbmV3U3RhdGUgfSk7XG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IERpc3BsYXksIENhbWVyYSB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBDUkVBVEVfRElTUExBWTpcclxuICAgICAgICAgICAgRGlzcGxheS5jcmVhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9DQU1FUkE6XHJcbiAgICAgICAgICAgIENhbWVyYS5jcmVhdGUoYWN0aW9uLnBheWxvYWQuY2FtZXJhKTtcclxuICAgICAgICAgICAgRGlzcGxheS53aXRoSWQoYWN0aW9uLnBheWxvYWQuZGlzcGxheSlcclxuICAgICAgICAgICAgICAgIC5jYW1lcmFzLmFkZChDYW1lcmEud2l0aElkKGFjdGlvbi5wYXlsb2FkLmNhbWVyYS5pZCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVQREFURV9DQU1FUkE6XHJcbiAgICAgICAgICAgIENhbWVyYS53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxEaXNwbGF5PnNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc3RhdGUvZGlzcGxheWVyLnRzIiwiZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0ge1xyXG4gICAgQ2FtZXJhU2VydmljZTogU3ltYm9sKFwiQ2FtZXJhU2VydmljZVwiKSxcclxuICAgIFRlbGV2aXNpb25TZXJ2aWNlOiBTeW1ib2woXCJUZWxldmlzaW9uU2VydmljZVwiKVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImludmVyc2lmeVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLy4uLy4uL3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBURUxFVklTSU9OX0ZJUkVQTEFDRSA9ICdUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVsZXZpc2lvbkZpcmVwbGFjZUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVGVsZXZpc2lvbkZpcmVwbGFjZUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICB2YWx1ZTogYm9vbGVhblxyXG4gICAgfTtcclxufVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IFRlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBzZXRGaXJlcGxhY2U6IChpZDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogVEVMRVZJU0lPTl9GSVJFUExBQ0UsIHBheWxvYWQ6IHsgaWQ6IGlkLCB2YWx1ZTogdmFsdWV9IH0pO1xuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMudHMiLCJpbXBvcnQgeyBPUk0gfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgeyBEaXNwbGF5LCBDYW1lcmEsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IENhbWVyYVZpZXdNb2RlbCB9IGZyb20gJy4vdmlld21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBvcm0gPSBuZXcgT1JNKCk7XHJcbm9ybS5yZWdpc3RlcihEaXNwbGF5LCBDYW1lcmEsIEhhcm1vbm9ncmFtKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVDYW1lcmFzU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gc2Vzc2lvbi5EaXNwbGF5Q2FtZXJhcy5hbGwoKS50b1JlZkFycmF5KCkubWFwKGNhbWVyYSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gc2Vzc2lvbi5DYW1lcmEud2l0aElkKGNhbWVyYS50b0NhbWVyYUlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYW1lcmFWaWV3TW9kZWw+IHtcclxuICAgICAgICAgICAgaWQ6IG9iai5pZCxcclxuICAgICAgICAgICAgbmFtZTogb2JqLm5hbWUsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBvYmouaXNSZWNvcmRpbmcsXG4gICAgICAgICAgICBhZGRyZXNzOiAnaHR0cDovLzE5Mi4xNjguMC4yMzQvaW1hZ2UvanBlZy5jZ2knLFxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogb2JqLmlzTW90aW9uRGV0ZWN0ZWRcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL29ybS50cyIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb24sIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25WaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXdtb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoVGVsZXZpc2lvbiwgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZVRlbGV2aXNpb25TZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuXHJcbiAgICB2YXIgdGVsZXZpc2lvbiA9IHNlc3Npb24uVGVsZXZpc2lvbi5maXJzdCgpO1xyXG5cclxuICAgIHJldHVybiA8VGVsZXZpc2lvblZpZXdNb2RlbD57XHJcbiAgICAgICAgaWQ6IHRlbGV2aXNpb24uaWQsXHJcbiAgICAgICAgaXNBY3RpdmU6IHRlbGV2aXNpb24uaXNBY3RpdmUsXHJcbiAgICAgICAgaXNGaXJlcGxhY2VSdW5uaW5nOiB0ZWxldmlzaW9uLmlzRmlyZXBsYWNlUnVubmluZyxcclxuICAgICAgICBpc0FxdWFyaXVtUnVubmluZzogdGVsZXZpc2lvbi5pc0FxdWFyaXVtUnVubmluZyxcclxuICAgICAgICBuYW1lOiB0ZWxldmlzaW9uLm5hbWVcclxuICAgIH07XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvc2NoZW1hLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgeyBURUxFVklTSU9OX0ZJUkVQTEFDRSwgVGVsZXZpc2lvbkZpcmVwbGFjZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZWZmZWN0cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1RFTEVWSVNJT04gPSAnQWRkVGVsZXZpc2lvbkFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZFRlbGV2aXNpb25BY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZFRlbGV2aXNpb25BY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogVGVsZXZpc2lvbjtcclxufVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IFRlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24gJiBBZGRUZWxldmlzaW9uQWN0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgVGVsZXZpc2lvbiB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBURUxFVklTSU9OX0ZJUkVQTEFDRTpcclxuICAgICAgICAgICAgVGVsZXZpc2lvbi53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGlzRmlyZXBsYWNlUnVubmluZzogYWN0aW9uLnBheWxvYWQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1RFTEVWSVNJT046XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24uY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3N0YXRlcy90ZWxldmlzaW9uLnRzIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lcidcclxuaW1wb3J0IGdldERlY29yYXRvcnMgZnJvbSBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbGF6eUluamVjdCB9ID0gZ2V0RGVjb3JhdG9ycyhjb250YWluZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9pb2MvZGVjb3JhdG9ycy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbWFpbi10YXNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZG9tYWluLXRhc2tcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9jb21wb3NpdGlvbi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IENhbWVyYSwgRGlzcGxheSB9IGZyb20gJy4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEFERF9DQU1FUkEsIENSRUFURV9ESVNQTEFZIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllcic7XHJcbmltcG9ydCB7IEFERF9URUxFVklTSU9OIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIE1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0IGFnYWluc3QgdGhlIGxpc3Qgb2YgY2xpZW50LXNpZGUgcm91dGVzXHJcbiAgICAgICAgbWF0Y2goeyByb3V0ZXMsIGxvY2F0aW9uOiBwYXJhbXMubG9jYXRpb24gfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QgbWF0Y2ggYW55IHJvdXRlLCByZW5kZXJQcm9wcyB3aWxsIGJlIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBsb2NhdGlvbiAnJHtwYXJhbXMudXJsfScgZG9lc24ndCBtYXRjaCBhbnkgcm91dGUgY29uZmlndXJlZCBpbiByZWFjdC1yb3V0ZXIuYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENSRUFURV9ESVNQTEFZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0NBTUVSQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU2Fsb24gRnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9URUxFVklTSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic29ueSBicmF2aWFcIixcclxuICAgICAgICAgICAgICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5yZW5kZXJQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGFuIGluaXRpYWwgcmVuZGVyIHRoYXQgd2lsbCBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgU2Nyb2xsRWZmZWN0IGZyb20gJy4uLy4uL2xpYi9zY3JvbGwtZWZmZWN0JztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uLy4uL2xpYi9mdWxsc2NyZWVuJztcbmltcG9ydCBDYW1lcmFMaXN0IGZyb20gJy4vZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyJztcbmltcG9ydCBUZWxldmlzaW9uIGZyb20gJy4vZGV2aWNlcy90ZWxldmlzaW9uL1RlbGV2aXNpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPEZ1bGxzY3JlZW4+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiaGVyb1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhTGlzdCAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIsIGZsb2F0OiBcImxlZnRcIiwgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5Ub3A6IFwiMzAwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXItYmFjay5wbmdcIiBoZWlnaHQ9XCIxMjBweFwiIHdpZHRoPVwiMjBweFwiIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogXCIxMDBweFwiLCByaWdodDogXCIzMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjUwcHhcIiwgbWFyZ2luVG9wOiBcIjIwMHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHVlMlwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2h1ZS5wbmdcIiBoZWlnaHQ9XCIxNTBweFwiIHdpZHRoPVwiNDBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1mcmFtZVwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjc1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL21hcmlseW4uanBnXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiB3aWR0aD1cIjEyNXB4XCIgaGVpZ2h0PVwiMTcwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlbGV2aXNpb24gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1mcm9udC5wbmdcIiB3aWR0aD1cIjc1cHhcIiBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiwgY2xlYXI6IFwiYm90aFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGVsZlwiIHN0eWxlPXt7IHdpZHRoOiBcIjkwJVwiLCBoZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJUb3A6IFwiNXB4IHNvbGlkIHJnYmEoMTkzLCAxNTUsIDEwOCwgMSlcIiwgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCByZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIycHggc29saWQgIzQ0NDM0M1wiLCBib3JkZXJUb3A6IFwiMnB4IHNvbGlkICM0NDQzNDNcIiwgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYm94LXNoYWRvd1wiIHN0eWxlPXt7IHdpZHRoOiBcIjI1JVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wczQucG5nXCIgd2lkdGg9XCI3NXB4XCIgaGVpZ2h0PVwiMjVweFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMXB4XCIsIG1hcmdpbkxlZnQ6IFwiN3B4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2h0cGMuanBnXCIgd2lkdGg9XCI3NXB4XCIgaGVpZ2h0PVwiMzBweFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI3cHhcIiwgbWFyZ2luTGVmdDogXCI3cHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiwgY2xlYXI6IFwiYm90aFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6XCIxNXB4XCIsIGxlZnQ6XCI1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXIucG5nXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNjBweFwiIGNsYXNzTmFtZT1cImZyYW1lLXNoYWRvd1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcIjE1cHhcIiwgcmlnaHQ6IFwiNTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcGVha2VyLnBuZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjYwcHhcIiBjbGFzc05hbWU9XCJmcmFtZS1zaGFkb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjpcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29mYS5wbmdcIiB3aWR0aD1cIjM4MHB4XCIgaGVpZ2h0PVwiMTUwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIG1hcmdpbkxlZnQ6IFwiNTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1iYWNrLXNtYWxsLnBuZ1wiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjQwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiNTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1iYWNrLXNtYWxsLnBuZ1wiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjQwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIG1hcmdpblRvcDogXCIzMDBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1iYWNrLnBuZ1wiIGhlaWdodD1cIjEyMHB4XCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcIjEwMHB4XCIsIGxlZnQ6IFwiMzBweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIG1hcmdpbkxlZnQ6IFwiNTBweFwiLCBtYXJnaW5Ub3A6IFwiMjAwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJodWVcIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9odWUucG5nXCIgaGVpZ2h0PVwiMTUwcHhcIiB3aWR0aD1cIjQwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBtYXJnaW5MZWZ0OiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbWUtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTkwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgYmFja2dyb3VuZDogXCJyZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgaGVpZ2h0OiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBoZWlnaHQ6IFwiNXB4XCIsIG1hcmdpblRvcDogXCI1MHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9vci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjU1cHhcIiwgbWFyZ2luTGVmdDogXCI1NTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGljdHVyZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWxtXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjI1cHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLW11c2ljXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjI1cHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgaGVpZ2h0OiBcIjkwcHhcIiwgd2lkdGg6IFwiMzcwcHhcIiwgbWFyZ2luTGVmdDogXCI1MHB4XCIsIGZsb2F0OiBcImxlZnRcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1sZWZ0XCIgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6XCItMTBweFwiLCB3aWR0aDogXCIxNXB4XCIsIGhlaWdodDogXCI5MHB4XCIgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMzIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT1cInBsYXllci1kaXNwbGF5XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgZm9udFNpemU6IFwiMTVweFwiLCBsaW5lSGVpZ2h0OiBcIjQwcHhcIiB9fT5SZWFkeSB0byBwbGF5PC9vdXRwdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbGluZUhlaWdodDogXCI0MHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tYmFja3dhcmRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5XCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RvcFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZvcndhcmRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBcIjMyMHB4XCIsIGJvdHRvbTpcIjEwcHhcIiwgbGVmdDogXCIyMHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lamVjdFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvdXRwdXQgY2xhc3NOYW1lPVwicGxheWVyLWRyaXZlXCIgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiwgbGluZUhlaWdodDpcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIsIHdpZHRoOiBcIjIyNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+RGV0cm9pdDwvb3V0cHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLW9wZW5cIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMjVweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLXJpZ2h0XCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTVweFwiLCByaWdodDogXCIyMHB4XCIsIGhlaWdodDogXCI5MHB4XCIgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Z1bGxzY3JlZW4+ICAgICAgXG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZNZW51IGZyb20gJy4vTmF2TWVudSc7XG5pbXBvcnQgUm91dGVUcmFuc2l0aW9uIGZyb20gJy4uLy4uL2xpYi9yb3V0ZS10cmFuc2l0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgYm9keTogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGVzIHtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgTGF5b3V0U3RhdGVzPiB7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxOYXZNZW51IC8+XG4gICAgICAgICAgICA8Um91dGVUcmFuc2l0aW9uIHBhdGhuYW1lPXt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA6ICcnfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ib2R5fVxuICAgICAgICAgICAgPC9Sb3V0ZVRyYW5zaXRpb24+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0xheW91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9zdG9yZSc7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJztcblxuY29uc3QgbG9nbyA9IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9sb2dvLnN2ZycpIGFzIHN0cmluZztcblxuaW50ZXJmYWNlIE5hdk1lbnVQcm9wcyB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHJvbGVzOiBzdHJpbmdbXTtcbn1cbiBcbmNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TmF2TWVudVByb3BzLCBBcHBsaWNhdGlvblN0YXRlPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxOYXZiYXIgZml4ZWRUb3A9e3RydWV9PlxuICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnIHRvPXsnLyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYXJ0XCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgnaW1hZ2VzL2dyYWRpZW50LnBuZycpXCIgfX0gPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjUwcHhcIiB3aWR0aD1cIjI1MHB4XCIgYWx0PVwiSG9tZSBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfT5Db250YWN0PC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvdW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXszfT5Db3VudGVyPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17Mn0gdGl0bGU9XCJMb2dpblwiIGlkPVwibmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjF9PkxvZ2luPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuMn0+UmVnaXN0ZXI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17Mi4zfT5Vc2VyIFByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2xvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17IXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi40fT5Mb2dvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezR9Pk5vdGlmaWNhdGlvbnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSwgcm9sZXM6IFtdIH07XHJcbiAgICB9LCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuICAgIHt9IC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbikoTmF2TWVudSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENhbWVyYVN0b3JlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllclwiO1xyXG5pbXBvcnQgeyBsYXp5SW5qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJztcclxuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3NlcnZpY2VzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC92aWV3bW9kZWxcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcclxuICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBzdHJpbmcsXHJcbiAgICB1cGRhdGVDYW1lcmE6IChjYW1lcmE6IENhbWVyYVZpZXdNb2RlbCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGlzUmVjb3JkaW5nOiBib29sZWFuO1xuICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxubGV0IHVwZGF0ZVZpZXc7XHJcbmxldCB1cGRhdGVTdGF0ZTtcclxubGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBwcm9wcy5pc1JlY29yZGluZyxcclxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogcHJvcHMuaXNNb3Rpb25EZXRlY3RlZCxcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcmVzc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGxhenlJbmplY3QoU2VydmljZXMuQ2FtZXJhU2VydmljZSlcclxuICAgIHByaXZhdGUgX3ByaW50U2VydmljZTogQ2FtZXJhU2VydmljZTtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogbmV4dFByb3BzLmlzUmVjb3JkaW5nLFxyXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBuZXh0UHJvcHMuaXNNb3Rpb25EZXRlY3RlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHVwZGF0ZVZpZXcgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNhbWVyYVZpZXcsXHJcbiAgICAgICAgICAgIDEwMDAsIHRoaXMuc3RhdGUuYWRkcmVzcywgdGhpcy5zZXRTdGF0ZSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVN0YXRlID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDYW1lcmFTdGF0ZSxcclxuICAgICAgICAgICAgNTAwMCwgdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgICAgdGhpcy5fcHJpbnRTZXJ2aWNlLmdldENhbWVyYVN0YXRlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVWaWV3KTtcclxuICAgICAgICBjbGVhckludGVydmFsKHVwZGF0ZVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYW1lcmFWaWV3KGFkZHJlc3MsIHNldFN0YXRlKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzICsgJz9kYXRhPScgKyBjb3VudGVyKytcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ2FtZXJhU3RhdGUoaWQ6IG51bWJlciwgZ2V0U3RhdGUsIHVwZGF0ZVN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGNhbWVyYSA9IGF3YWl0IGdldFN0YXRlKGlkKTtcclxuICAgICAgICB1cGRhdGVTdGF0ZShjYW1lcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0UmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fcHJpbnRTZXJ2aWNlLnN0YXJ0UmVjb3JkaW5nKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdG9wUmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3ByaW50U2VydmljZS5zdG9wUmVjb3JkaW5nKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgY2FtZXJhLWNvbnRhaW5lclwiIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjYW1lcmEtZnJhbWVcIiBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5hZGRyZXNzfSBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNSZWNvcmRpbmcgPyAnY2FtZXJhLXJlY29yZGluZycgOiB0aGlzLnN0YXRlLmlzTW90aW9uRGV0ZWN0ZWQgPyAnY2FtZXJhLWFsZXJ0JyA6ICdjYW1lcmEtbm8tYWxlcnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICdjYW1lcmEtYm90dG9tIGNhbWVyYS12aXNpYmxlJyA6ICdjYW1lcmEtYm90dG9tIGNhbWVyYS1oaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhbWVyYS1uYW1lXCI+e3RoaXMuc3RhdGUubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWNvcmQgY2FtZXJhLXBsYXlcIiBzdHlsZT17eyBwYWRkaW5nOiAnM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaXNSZWNvcmRpbmcgPyAoKSA9PiB0aGlzLnN0b3BSZWNvcmRpbmcoaWQpIDogKCkgPT4gdGhpcy5zdGFydFJlY29yZGluZyhpZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RvcFwiIHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ2dyYXknLCBwYWRkaW5nOiAnM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RvcFJlY29yZGluZyhpZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCBDYW1lcmFJdGVtIGZyb20gJy4vQ2FtZXJhJztcclxuaW1wb3J0IHsgYWN0aXZlQ2FtZXJhc1NlbGVjdG9yIH0gZnJvbSAnLi9tb2RlbC9vcm0nO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tIFwiLi9tb2RlbC92aWV3bW9kZWxcIjtcclxuaW1wb3J0ICogYXMgRGlzcGxheVN0b3JlIGZyb20gXCIuL3N0YXRlL2Rpc3BsYXllclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxpc3Q6IENhbWVyYVZpZXdNb2RlbFtdO1xyXG4gICAgbGlzdFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XG4gICAgbGlzdFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgQ2FtZXJhc1Byb3BzID0gUHJvcHMgJiB0eXBlb2YgRGlzcGxheVN0b3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgRGlzcGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENhbWVyYXNQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1lcmFzUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxpc3RWaXNpYmxlOiBwcm9wcy5saXN0VmlzaWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b29nbGVDYW1lcmFzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsaXN0VmlzaWJsZTogIXRoaXMuc3RhdGUubGlzdFZpc2libGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1cGRhdGVDYW1lcmEgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtZXJhLXRvcGJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duIGNhbWVyYS1jb2xsYXBzZS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy50b29nbGVDYW1lcmFzKCl9IHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGxheSBjYW1lcmEtcGxheVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leWUtb3BlbiBjYW1lcmEtbW90aW9uXCIgc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXZvbHVtZS11cCBjYW1lcmEtc291bmRcIiBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tb3B0aW9uLWhvcml6b250YWwgY2FtZXJhLXRvcGJhci1zZXR0aW5nc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saXN0VmlzaWJsZSA/ICdzbGlkZS1kb3duJyA6ICdzbGlkZS11cCd9PiB7dGhpcy5wcm9wcy5saXN0Lm1hcCgoY2FtZXJhKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhSXRlbSBrZXk9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17Y2FtZXJhLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NhbWVyYS5uYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkPXtjYW1lcmEuaXNNb3Rpb25EZXRlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWNvcmRpbmc9e2NhbWVyYS5pc1JlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FtZXJhPXt1cGRhdGVDYW1lcmF9IC8+KX1cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdDogYWN0aXZlQ2FtZXJhc1NlbGVjdG9yKHN0YXRlLmRpc3BsYXkpLFxyXG4gICAgICAgIGxpc3RWaXNpYmxlOiB0cnVlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBEaXNwbGF5U3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuKShEaXNwbGF5ZXIpO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyLnRzeCIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BsYXkgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgY2FtZXJhczogbWFueShcIkNhbWVyYVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkRpc3BsYXkubW9kZWxOYW1lID0gXCJEaXNwbGF5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGF0dHIoKSxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5DYW1lcmEubW9kZWxOYW1lID0gXCJDYW1lcmFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL21vZGVsLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnQXBwL2NvbXBvc2l0aW9uL3N0b3JlJztcclxuaW1wb3J0IHsgbGF6eUluamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcyc7XHJcbmltcG9ydCAqIGFzIEVmZmVjdHMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zZXJ2aWNlcy90ZWxldmlzaW9uXCI7XHJcbmltcG9ydCB7IGFjdGl2ZVRlbGV2aXNpb25TZWxlY3RvciB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gJy4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblZpZXdNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3ZpZXdtb2RlbCc7XHJcbmltcG9ydCAqIGFzIEZpcmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZSc7XHJcblxyXG5pbnRlcmZhY2UgVGVsZXZpc2lvblByb3BzIHtcclxuICAgIHRlbGV2aXNpb246IFRlbGV2aXNpb25WaWV3TW9kZWw7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4sXHJcbiAgICBpc0J1cm5pbmc6IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSBQcm9wcyA9IFRlbGV2aXNpb25Qcm9wcyAmIHR5cGVvZiBFZmZlY3RzLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgVGVsZXZpc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLnRlbGV2aXNpb24uaWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy50ZWxldmlzaW9uLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBpc0J1cm5pbmc6IHByb3BzLnRlbGV2aXNpb24uaXNGaXJlcGxhY2VSdW5uaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZSBQcm9wc1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRGaXJlcGxhY2UoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBmaXJlID0gbmV3IEZpcmUuRmlyZSgpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5yZWZzLnRlbGV2aXNpb247XHJcbiAgICAgICAgZmlyZS5pbml0aWFsaXplKGNvbnRleHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcmUuYnVybkJ1cm5CdXJuKCk7XHJcbiAgICAgICAgfSwgMTAwLCBmaXJlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGaXJlcGxhY2UodGhpcy5zdGF0ZS5pZCwgIXRoaXMuc3RhdGUuaXNCdXJuaW5nKTtcclxuXHJcbiAgICAgICAgLy90aGlzLl9zZXJ2aWNlLnNldEZpcmVwbGFjZShpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0VmlkZW8oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0VmlkZW8oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBsYXp5SW5qZWN0KFNlcnZpY2VzLlRlbGV2aXNpb25TZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSBfc2VydmljZTogVGVsZXZpc2lvblNlcnZpY2U7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGVsZXZpc2lvbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzE4MHB4JywgbWFyZ2luOiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIsIHdpZHRoOiBcIjI1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldEFjdGl2ZSh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldEFjdGl2ZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbWJpbGlnaHRcIiBzdHlsZT17eyB3aWR0aDogXCIyNjBweFwiLCBoZWlnaHQ6IFwiMTI1cHhcIiwgbGVmdDogXCItNXB4XCIsIHRvcDogXCIzNXB4XCIsIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2ltYWdlcy9hbWJpZW50LmpwZycpXCIgfX0+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9e3RoaXMucHJvcHMudGVsZXZpc2lvbi5pc0ZpcmVwbGFjZVJ1bm5pbmcgPyBcImJ1cm5pbmdcIiA6IFwibm90LWJ1cm5pbmdcIn0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCJibGFja1wiLCBoZWlnaHQ6IFwiMTI1cHhcIiwgd2lkdGg6IFwiMjUwcHhcIiwgbWFyZ2luVG9wOiBcIjQwcHhcIiB9fSByZWY9XCJ0ZWxldmlzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdHYucG5nXCIgaGVpZ2h0PVwiMTI1cHhcIiB3aWR0aD1cIjI1MHB4XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNBY3RpdmUgPyAndGVsZXZpc2lvbi1ib3R0b20gY2FtZXJhLXZpc2libGUnIDogJ3RlbGV2aXNpb24tYm90dG9tIGNhbWVyYS1oaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhbWVyYS1uYW1lXCI+U29ueSBCcmF2aWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maXJlIHRlbGV2aXNpb24tZmlyZXBsYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzQnVybmluZyA/ICgpID0+IHRoaXMuc2V0RmlyZXBsYWNlKHRlbGV2aXNpb24uaWQpIDogKCkgPT4gdGhpcy5zZXRGaXJlcGxhY2UodGVsZXZpc2lvbi5pZCl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sZWFmIHRlbGV2aXNpb24tbGVhZlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdGludCB0ZWxldmlzaW9uLXdhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzQnVybmluZyA/ICgpID0+IHRoaXMuc2V0VmlkZW8odGVsZXZpc2lvbi5pZCkgOiAoKSA9PiB0aGlzLnNldFZpZGVvKHRlbGV2aXNpb24uaWQpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVsZXZpc2lvbjogYWN0aXZlVGVsZXZpc2lvblNlbGVjdG9yKHN0YXRlLnRlbGV2aXNpb24pLFxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgRWZmZWN0cy5hY3Rpb25DcmVhdG9yc1xyXG4pKFRlbGV2aXNpb24pO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL1RlbGV2aXNpb24udHN4IiwiY2xhc3MgRmlyZSB7XHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcclxuICAgIGZpcmU6IGFueVtdO1xyXG4gICAgdGltZTogYW55O1xyXG4gICAgZnBzOiBudW1iZXI7XHJcbiAgICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gICAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBjb2xvcnM6IGFueVtdO1xyXG4gICAgaW1hZ2VEYXRhOiBhbnk7XHJcbiAgICBjdHg6IGFueTtcclxuICAgIGludGVuc2l0eTogYW55O1xyXG5cclxuICAgIGluaXRpYWxpemUgPSBmdW5jdGlvbiAoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmludGVuc2l0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSAzMDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDAuNTtcclxuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5pbWFnZURhdGEuZGF0YTtcclxuICAgICAgICB2YXIgbnVtUGl4ZWxzID0gdGhpcy5kYXRhLmxlbmd0aCAvIDQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gW107XHJcbiAgICAgICAgICAgIGNvbG9yWzBdID0gY29sb3JbMV0gPSBjb2xvclsyXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2ldID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDMyOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaV1bMl0gPSBpIDw8IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMF0gPSBpIDw8IDM7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMl0gPSA2NCAtIChpIDw8IDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzFdID0gaSA8PCAzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzJdID0gaSA8PCAyO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTI4XVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDEyOF1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxMjhdWzJdID0gNjQgKyAoaSA8PCAyKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE2MF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxNjBdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTYwXVsyXSA9IDEyOCArIChpIDw8IDIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTkyXVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE5Ml1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxOTJdWzJdID0gMTkyICsgaTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDIyNF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAyMjRdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMjI0XVsyXSA9IDIyNCArIGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpcmUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1dpZHRoICogdGhpcy5jYW52YXNIZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9taXplVGhyZXNob2xkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkICs9IE1hdGgucmFuZG9tKCkgKiAwLjIgLSAwLjE7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGQgPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLnRocmVzaG9sZCwgMC41KSwgMC44KTtcclxuICAgIH1cclxuXHJcbiAgICBidXJuQnVybkJ1cm4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5idXJuQnVybkJ1cm4pO1xyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZHQgPSBub3cgLSB0aGlzLnRpbWU7XHJcblxyXG4gICAgICAgIGlmIChkdCA8ICgxMDAwIC8gdGhpcy5mcHMpKVxyXG4gICAgICAgICAgICByZXR1cm47IC8vIHNraXAgYSBmcmFtZVxyXG5cclxuICAgICAgICB0aGlzLnRpbWUgPSBub3c7XHJcblxyXG4gICAgICAgIHZhciBib3R0b21MaW5lID0gdGhpcy5jYW52YXNXaWR0aCAqICh0aGlzLmNhbnZhc0hlaWdodCAtIDEpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHJhbmRvbSBwaXhlbHMgYXQgdGhlIGJvdHRvbSBsaW5lXHJcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmNhbnZhc1dpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gdGhpcy50aHJlc2hvbGQpXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDI1NTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVtib3R0b21MaW5lICsgeF0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG1vdmUgZmxpcCB1cHdhcmRzLCBzdGFydCBhdCBib3R0b21cclxuICAgICAgICB2YXIgdmFsdWUgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuY2FudmFzSGVpZ2h0OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmNhbnZhc1dpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZmlyZVtib3R0b21MaW5lXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAvPSAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4ID09IHRoaXMuY2FudmFzV2lkdGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRoaXMuZmlyZVtib3R0b21MaW5lIC0gdGhpcy5jYW52YXNXaWR0aCArIHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRoaXMuZmlyZVtib3R0b21MaW5lICsgeCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC89IDM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHggKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSAtIHRoaXMuY2FudmFzV2lkdGggKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAvPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYm90dG9tTGluZSAtIHRoaXMuY2FudmFzV2lkdGggKyB4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBib3R0b21MaW5lIC09IHRoaXMuY2FudmFzV2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2tpcFJvd3MgPSAyOyAvLyBza2lwIHRoZSBib3R0b20gMiByb3dzXHJcblxyXG4gICAgICAgIC8vIHJlbmRlciB0aGUgZmxhbWVzIHVzaW5nIG91ciBjb2xvciB0YWJsZVxyXG4gICAgICAgIGZvciAodmFyIHkgPSBza2lwUm93czsgeSA8IHRoaXMuY2FudmFzSGVpZ2h0OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmNhbnZhc1dpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHkgKiB0aGlzLmNhbnZhc1dpZHRoICogNCArIHggKiA0O1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpcmVbKHkgLSBza2lwUm93cykgKiB0aGlzLmNhbnZhc1dpZHRoICsgeF07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2luZGV4XSA9IHRoaXMuY29sb3JzW3ZhbHVlXVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsrK2luZGV4XSA9IHRoaXMuY29sb3JzW3ZhbHVlXVsxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsrK2luZGV4XSA9IHRoaXMuY29sb3JzW3ZhbHVlXVsyXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsrK2luZGV4XSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc29tZXRpbWVzIGNoYW5nZSBmaXJlIGludGVuc2l0eVxyXG4gICAgICAgIGlmICh0aGlzLmludGVuc2l0eSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC45NSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb21pemVUaHJlc2hvbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRmlyZSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2ZpcmVwbGFjZS9maXJlLnRzIiwiaW1wb3J0IHsgTW9kZWwsIG1hbnksIGF0dHIgfSBmcm9tIFwicmVkdXgtb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVsZXZpc2lvbiBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzRmlyZXBsYWNlUnVubmluZzogYXR0cigpLFxuICAgICAgICAgICAgaXNBcXVhcml1bVJ1bm5pbmc6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5UZWxldmlzaW9uLm1vZGVsTmFtZSA9IFwiVGVsZXZpc2lvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL21vZGVscy9tb2RlbC50cyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBTdG9yZUNyZWF0b3IsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0ICogYXMgQXBwU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbiAgICApKGNyZWF0ZVN0b3JlKSBhcyBTdG9yZUNyZWF0b3I7XG5cbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XG5cbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgQXBwU3RvcmU+KCcuL3N0b3JlJyk7XG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zZXJ2aWNlcy9jYW1lcmEnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3NlcnZpY2VzL3RlbGV2aXNpb24nO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJ1xyXG5pbXBvcnQgeyBDYW1lcmFBY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uQWN0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90ZWxldmlzaW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cclxuY29udGFpbmVyLmJpbmQ8Q2FtZXJhU2VydmljZT4oU2VydmljZXMuQ2FtZXJhU2VydmljZSkudG8oQ2FtZXJhQWN0aW9uU2VydmljZSk7XHJcbmNvbnRhaW5lci5iaW5kPFRlbGV2aXNpb25TZXJ2aWNlPihTZXJ2aWNlcy5UZWxldmlzaW9uU2VydmljZSkudG8oVGVsZXZpc2lvbkFjdGlvblNlcnZpY2UpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0XG4gICAgPFJvdXRlIGNvbXBvbmVudD17TGF5b3V0fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudHM9e3sgYm9keTogSG9tZSB9fSAvPlxuICAgIDwvUm91dGU+O1xuXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3JvdXRlcy50c3giLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc2VydmljZXMvY2FtZXJhJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC92aWV3bW9kZWwnO1xyXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbWVyYUFjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBDYW1lcmFTZXJ2aWNlIHtcclxuXHJcbiAgICBhc3luYyBnZXRDYW1lcmFTdGF0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxDYW1lcmFWaWV3TW9kZWw+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvZ2V0Q2FtZXJhcz9pZD0nICsgaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB2YXIgY2FtZXJhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIDxDYW1lcmFWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogY2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZzogY2FtZXJhLmlzUmVjb3JkaW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0UmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvc3RhcnRSZWNvcmRpbmcnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IHJlY29yZGluZycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIHN0b3BSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9zdG9wUmVjb3JkaW5nJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wIHJlY29yZGluZycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvY2FtZXJhLnRzIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgVGVsZXZpc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zZXJ2aWNlcy90ZWxldmlzaW9uJztcclxuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWxldmlzaW9uQWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRlbGV2aXNpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBhc3luYyBzZXRGaXJlcGxhY2UoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL3RlbGV2aXNpb24vc2V0RmlyZXBsYWNlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgZmlyZXBsYWNlJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgc2V0VmlkZW8oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL3RlbGV2aXNpb24vc2V0VmlkZW8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCB2aWRlbycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3RlbGV2aXNpb24udHMiLCJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvbW9kZWxcIjtcbmltcG9ydCB7IFRlbGV2aXNpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQgeyBvcm0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9vcm1cIjtcbmltcG9ydCAqIGFzIERpc3BsYXllciBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXJcIjtcbmltcG9ydCAqIGFzIFRlbGV2aXNpb25SZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xuICAgIG5hdm1lbnU6IHt9LFxuICAgIGRpc3BsYXk6IERpc3BsYXksXG4gICAgdGVsZXZpc2lvbjogVGVsZXZpc2lvblxufVxuXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcbiAgICBkaXNwbGF5OiBEaXNwbGF5ZXIuZGVmYXVsdCxcbiAgICB0ZWxldmlzaW9uOiBUZWxldmlzaW9uUmVkdWNlci5kZWZhdWx0XG59O1xuXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3N0b3JlL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgaGVpZ2h0OiBzdHJpbmdcbn1cblxudmFyIGdldERpbWVuc2lvbnMgPSAoKSA9PiAoeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUwICsgJ3B4JyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgaGVpZ2h0OiAnMTAwdmgnIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0RGltZW5zaW9ucygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHsgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB9IH0pO1xuICAgICAgICAvL3JldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvZnVsbHNjcmVlbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uTW90aW9uLCBzcHJpbmcgfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuXG5jb25zdCB3aWxsRW50ZXIgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDAuOTdcbn0pO1xuXG5jb25zdCB3aWxsTGVhdmUgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICBzY2FsZTogc3ByaW5nKDEuMDApXG59KTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiBzcHJpbmcoMSksXG4gICAgc2NhbGU6IHNwcmluZygxKVxufSk7XG5cbmNvbnN0IFJvdXRlVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuOiBjaGlsZCwgcGF0aG5hbWUgfSkgPT4gKFxuICAgIDxUcmFuc2l0aW9uTW90aW9uXG4gICAgICAgIHN0eWxlcz17W3tcbiAgICAgICAgICAgIGtleTogcGF0aG5hbWUsXG4gICAgICAgICAgICBzdHlsZTogZ2V0U3R5bGVzKCksXG4gICAgICAgICAgICBkYXRhOiB7IGNoaWxkIH1cbiAgICAgICAgfV19XG4gICAgICAgIHdpbGxFbnRlcj17d2lsbEVudGVyfVxuICAgICAgICB3aWxsTGVhdmU9e3dpbGxMZWF2ZX1cbiAgICA+XG4gICAgICAgIHsoaW50ZXJwb2xhdGVkKSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aW50ZXJwb2xhdGVkLm1hcCgoeyBrZXksIHN0eWxlLCBkYXRhIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7a2V5fS10cmFuc2l0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMud3JhcHBlciwgeyBvcGFjaXR5OiBzdHlsZS5vcGFjaXR5LCB0cmFuc2Zvcm06IGBzY2FsZSgke3N0eWxlLnNjYWxlfSlgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9UcmFuc2l0aW9uTW90aW9uID5cbik7XG5cbnZhciBzdHlsZXMgPSB7XG4gICAgd3JhcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlVHJhbnNpdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCw3N3UvUEhOMlp5QjNhV1IwYUQwaU9XMXRJaUJvWldsbmFIUTlJamx0YlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TUNBeE1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbVZ5YzJsdmJqMGlNUzR5SWlCaVlYTmxVSEp2Wm1sc1pUMGlkR2x1ZVNJK0NpQWdQR1JsYzJNK1VsSlBSQ0JNYjJkdlBDOWtaWE5qUGdvZ0lEd2hMUzBnVTJodmR5QnZkWFJzYVc1bElHOW1JR05oYm5aaGN5QjFjMmx1WnlBbmNtVmpkQ2NnWld4bGJXVnVkQ0F0TFQ0S0lDQThZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnWm1sc2JEMGlkMmhwZEdVaUlITjBjbTlyWlQwaWNtVmtJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXlJaUFnTHo0S1BDOXpkbWMrXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0FwcC9pbWFnZXMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzcG5ldC1wcmVyZW5kZXJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW90aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtbW90aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==