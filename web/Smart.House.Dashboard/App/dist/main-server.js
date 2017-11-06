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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
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

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_EFFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
var SET_EFFECT = 'SetEffectAction';
var ADD = 'AddAction';

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CAMERA; });
/* unused harmony export UPDATE_CAMERA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_orm__ = __webpack_require__(12);
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

                                console.log(session);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_LAMP; });
var SET_COLOR = 'SetColorAction';
var ADD_LAMP = 'AddLampAction';

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
var Services = {
    CameraService: Symbol("CameraService"),
    TelevisionService: Symbol("TelevisionService")
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TELEVISION_FIREPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TELEVISION_AQUARIUM; });
/* unused harmony export AquariumBackground */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devices_ambilight_state_actions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_lighting_state_actions__ = __webpack_require__(6);
var _this = this;




var TELEVISION_FIREPLACE = 'TelevisionFireplaceAction';
var TELEVISION_AQUARIUM = 'TelevisionAquariumAction';
var AquariumBackground = 'url(images/background-flip2.jpg)';
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
                                _context.next = 4;
                                return dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__devices_lighting_state_actions__["b" /* SET_COLOR */], payload: { id: 1, color: value ? 'orange' : '' } });

                            case 4:
                                _context.next = 6;
                                return dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__devices_lighting_state_actions__["b" /* SET_COLOR */], payload: { id: 2, color: value ? 'orange' : '' } });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    },
    setAquarium: function setAquarium(id, value) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return dispatch({ type: TELEVISION_AQUARIUM, payload: { id: id, value: value } });

                            case 2:
                                _context2.next = 4;
                                return dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__devices_ambilight_state_actions__["b" /* SET_EFFECT */], payload: { id: id, pattern: value ? AquariumBackground : '' } });

                            case 4:
                                _context2.next = 6;
                                return dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__devices_lighting_state_actions__["b" /* SET_COLOR */], payload: { id: 1, color: value ? 'dodgerblue' : '' } });

                            case 6:
                                _context2.next = 8;
                                return dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__devices_lighting_state_actions__["b" /* SET_COLOR */], payload: { id: 2, color: value ? 'dodgerblue' : '' } });

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

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeAmbilightSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(24);


var orm = new __WEBPACK_IMPORTED_MODULE_0_redux_orm__["ORM"]();
orm.register(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* Ambilight */], __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Harmonogram */]);
var activeAmbilightSelector = orm.createSelector(function (session) {
    var ambilight = session.Ambilight.first();
    return {
        id: ambilight.id,
        isActive: ambilight.isActive,
        background: ambilight.background,
        name: ambilight.name
    };
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeCamerasSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(28);


var orm = new __WEBPACK_IMPORTED_MODULE_0_redux_orm__["ORM"]();
orm.register(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* Display */], __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Camera */], __WEBPACK_IMPORTED_MODULE_1__model__["c" /* Harmonogram */]);
var activeCamerasSelector = orm.createSelector(function (session) {
    console.log(session);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lampSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(30);


var orm = new __WEBPACK_IMPORTED_MODULE_0_redux_orm__["ORM"]();
orm.register(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* Lamp */], __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Harmonogram */]);
var counter = 0;
var lampSelector = orm.createSelector(function (session) {
    return session.Lamp.all().toRefArray().map(function (lamp) {
        return {
            id: lamp.id,
            isActive: lamp.isActive,
            color: lamp.color,
            name: lamp.name,
            position: lamp.position
        };
    });
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeTelevisionSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(36);


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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TELEVISION; });
/* unused harmony export actionCreators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_effects__ = __webpack_require__(10);



var ADD_TELEVISION = 'AddTelevisionAction';
var actionCreators = {};
var reducer = function reducer(session, action) {
    var Television = session.Television;

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__actions_effects__["a" /* TELEVISION_FIREPLACE */]:
            Television.withId(action.payload.id).update({ isFireplaceRunning: action.payload.value });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions_effects__["b" /* TELEVISION_AQUARIUM */]:
            console.log('aquarium running');
            Television.withId(action.payload.id).update({ isAquariumRunning: action.payload.value });
            break;
        case ADD_TELEVISION:
            Television.create(action.payload);
            break;
    }
    return session.state;
};
/* harmony default export */ __webpack_exports__["b"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_orm__["createReducer"])(__WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* orm */], reducer));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lazyInject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__);



var _getDecorators = __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default()(__WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__["a" /* container */]);

var lazyInject = _getDecorators.lazyInject;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("domain-task");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_routes__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__composition_configureStore__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_camera_state_displayer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__composition_components_devices_television_states_television__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__composition_components_devices_ambilight_state_actions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__composition_components_devices_lighting_state_actions__ = __webpack_require__(6);











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
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_9__composition_components_devices_ambilight_state_actions__["a" /* ADD */],
                payload: {
                    id: 1,
                    name: "hyperion",
                    background: 'url(images/ambient.jpg)',
                    isActive: true
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_10__composition_components_devices_lighting_state_actions__["a" /* ADD_LAMP */],
                payload: {
                    id: 1,
                    name: "hue-left",
                    color: '#f650e8',
                    isActive: true,
                    position: 'left'
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_10__composition_components_devices_lighting_state_actions__["a" /* ADD_LAMP */],
                payload: {
                    id: 2,
                    name: "hue-right",
                    color: '#23f343',
                    isActive: true,
                    position: 'right'
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_fullscreen__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_camera_Displayer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__floor_Floor__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wall_Wall__ = __webpack_require__(38);
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
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__wall_Wall__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__floor_Floor__["a" /* default */], null),
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__ = __webpack_require__(46);
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var logo = __webpack_require__(47);

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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_schema__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Ambilight = function (_React$Component) {
    _inherits(Ambilight, _React$Component);

    function Ambilight(props) {
        _classCallCheck(this, Ambilight);

        var _this = _possibleConstructorReturn(this, (Ambilight.__proto__ || Object.getPrototypeOf(Ambilight)).call(this, props));

        _this.defaultPattern = props.ambilight.background;
        _this.state = {
            id: props.ambilight.id,
            isActive: props.ambilight.isActive,
            background: _this.defaultPattern
        };
        _this.setState = _this.setState.bind(_this);
        return _this;
    }

    _createClass(Ambilight, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var pattern = nextProps.ambilight.background;
            if (nextProps.ambilight.isActive) pattern = pattern !== '' ? pattern : this.defaultPattern;
            this.setState({
                background: pattern
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
        key: 'render',
        value: function render() {
            var ambilight = this.props.ambilight;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'ambilight', style: { width: "260px", height: "125px", backgroundImage: this.state.background } },
                ' '
            );
        }
    }]);

    return Ambilight;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        ambilight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__models_schema__["b" /* activeAmbilightSelector */])(state.ambilight)
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, null)(Ambilight));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ambilight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Harmonogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Ambilight = function (_Model) {
    _inherits(Ambilight, _Model);

    function Ambilight() {
        _classCallCheck(this, Ambilight);

        return _possibleConstructorReturn(this, (Ambilight.__proto__ || Object.getPrototypeOf(Ambilight)).apply(this, arguments));
    }

    _createClass(Ambilight, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                background: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isActive: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                harmonograms: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Harmonogram")
            };
        }
    }]);

    return Ambilight;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Ambilight.modelName = "Ambilight";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(4);



var reducer = function reducer(session, action) {
    var Ambilight = session.Ambilight;

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* SET_EFFECT */]:
            console.log(action.payload);
            Ambilight.withId(action.payload.id).update({ background: action.payload.pattern });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ADD */]:
            Ambilight.create(action.payload);
            break;
    }
    return session.state;
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_orm__["createReducer"])(__WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* orm */], reducer));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_types__ = __webpack_require__(7);
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Camera__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_orm__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_displayer__ = __webpack_require__(5);
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lamp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Lamp = function (_React$Component) {
    _inherits(Lamp, _React$Component);

    function Lamp(props) {
        _classCallCheck(this, Lamp);

        var _this = _possibleConstructorReturn(this, (Lamp.__proto__ || Object.getPrototypeOf(Lamp)).call(this, props));

        _this.defaultColor = props.lamp.color;
        _this.state = {
            color: _this.defaultColor
        };
        return _this;
    }

    _createClass(Lamp, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var color = nextProps.lamp.color;
            if (nextProps.lamp.isActive) color = color !== '' ? color : this.defaultColor;
            this.setState({
                color: color
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { style: { position: 'relative' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/hue.png', height: '150px', width: '40px', style: { position: 'absolute', top: '-80px', left: '0', zIndex: 0 } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'lamp', style: { background: this.state.color, position: 'absolute', top: '-80px', left: '0' } })
            );
        }
    }]);

    return Lamp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Harmonogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Lamp = function (_Model) {
    _inherits(Lamp, _Model);

    function Lamp() {
        _classCallCheck(this, Lamp);

        return _possibleConstructorReturn(this, (Lamp.__proto__ || Object.getPrototypeOf(Lamp)).apply(this, arguments));
    }

    _createClass(Lamp, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isActive: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                harmonograms: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Harmonogram")
            };
        }
    }]);

    return Lamp;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Lamp.modelName = "Lamp";
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(6);



var reducer = function reducer(session, action) {
    var Lamp = session.Lamp;

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* SET_COLOR */]:
            Lamp.withId(action.payload.id).update({ color: action.payload.color });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ADD_LAMP */]:
            console.log('lamp added');
            Lamp.create(action.payload);
            break;
    }
    return session.state;
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_orm__["createReducer"])(__WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* orm */], reducer));

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_ioc_decorators__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composition_services_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_components_actions_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_schema__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_television_effects_fireplace_fire__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_aquarium_aquarium__ = __webpack_require__(33);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var fireplace = void 0;
var fire = void 0;
var aquarium = void 0;
var aqua = void 0;

var Television = function (_React$Component) {
    _inherits(Television, _React$Component);

    function Television(props) {
        _classCallCheck(this, Television);

        var _this = _possibleConstructorReturn(this, (Television.__proto__ || Object.getPrototypeOf(Television)).call(this, props));

        _this.state = {
            id: props.television.id,
            isActive: props.television.isActive,
            isFireplace: props.television.isFireplaceRunning,
            isAquarium: props.television.isAquariumRunning
        };
        fire = new __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_television_effects_fireplace_fire__["a" /* Fire */]();
        aquarium = new __WEBPACK_IMPORTED_MODULE_8__effects_aquarium_aquarium__["a" /* Aquarium */]();
        _this.setState = _this.setState.bind(_this);
        return _this;
    }

    _createClass(Television, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log(nextProps);
            this.setState({
                isFireplace: nextProps.television.isFireplaceRunning,
                isAquarium: nextProps.television.isAquariumRunning
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
        key: 'setFireplace',
        value: function setFireplace(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var background, foreground;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                background = this.refs.television;
                                foreground = this.refs.tvContent;

                                if (this.state.isFireplace) {
                                    clearInterval(fireplace);
                                    fire.clear(background, foreground);
                                } else {
                                    fire.initialize(background, foreground, 'imageBackground');
                                    fireplace = setInterval(function () {
                                        return fire.burnBurnBurn();
                                    }, 100, fire);
                                    this._service.setFireplace(id);
                                }
                                this.props.setFireplace(this.state.id, !this.state.isFireplace);

                            case 4:
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
                var background, foreground;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                background = this.refs.television;
                                foreground = this.refs.tvContent;

                                console.log(this.state.isAquarium);
                                if (this.state.isAquarium) {
                                    clearInterval(aqua);
                                    aquarium.clear(background);
                                    aquarium.clear(foreground);
                                } else {
                                    aquarium.init(background);
                                    aqua = setInterval(function () {
                                        return aquarium.draw(foreground);
                                    }, 16.7, aquarium, foreground);
                                    this._service.setVideo(id);
                                }
                                this.props.setAquarium(this.state.id, !this.state.isAquarium);

                            case 5:
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
                { style: { margin: "auto" }, onMouseEnter: function onMouseEnter() {
                        return _this2.setActive(true);
                    }, onMouseLeave: function onMouseLeave() {
                        return _this2.setActive(false);
                    } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'p',
                    { style: { textAlign: "center", margin: "40px 0 0 0", position: 'relative' } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('canvas', { style: { background: "black", height: "125px", width: "250px", border: "2px solid black" }, ref: 'television' }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('canvas', { style: { height: "125px", width: "250px", position: "absolute", top: '0px', left: '0px' }, ref: 'tvContent' }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { id: 'imageBackground', src: 'images/background-flip2.jpg', style: { height: '125px', width: '250px', display: 'none' } }),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { id: 'imageStrip', src: 'images/fishstrip.png', style: { height: '125px', width: '250px', display: 'none' } })
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
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-fire television-fireplace', onClick: this.state.isFireplace ? function () {
                                return _this2.setFireplace(television.id);
                            } : function () {
                                return _this2.setFireplace(television.id);
                            } }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-leaf television-leaf' }),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('span', { className: 'glyphicon glyphicon-tint television-water', onClick: this.state.isFireplace ? function () {
                                return _this2.setVideo(television.id);
                            } : function () {
                                return _this2.setVideo(television.id);
                            } })
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

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_5__composition_components_actions_effects__["c" /* actionCreators */])(Television));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aquarium; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fish__ = __webpack_require__(34);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Aquarium = function Aquarium() {
    _classCallCheck(this, Aquarium);

    this.init = function (background) {
        this.ctx = background.getContext('2d');
        this.canvasWidth = background.width;
        this.canvasHeight = background.height;

        this.backgroundImage = document.getElementById('imageBackground');
        this.drawBackground(this.ctx);

        this.imageStrip = document.getElementById('imageStrip');
        this.createFish(this.startFish);
    };
    this.createFish = function (max) {
        if (this.fish.length < max) {
            for (var i = this.fish.length; i < max; i++) {
                this.fish.push(new __WEBPACK_IMPORTED_MODULE_0__fish__["a" /* Fish */](this.backgroundImageW, this.backgroundImageH));
            }
        } else {
            this.fish.splice(max, this.fish.length - max);
        }
    };
    this.drawBackground = function (ctx) {
        if (this.canvasWidth < this.backgroundImageW) {
            ctx.drawImage(this.backgroundImage, 0, 0, this.backgroundImageW, this.canvasHeight);
        } else {
            var tileCount = Math.floor(this.canvasWidth / this.backgroundImageW);
            var flip = 1;
            for (var i = 0; i <= tileCount; i++) {
                ctx.save();
                ctx.transform(flip, 0, 0, 1, 0, 0);
                ctx.drawImage(this.backgroundImage, (flip - 1) * this.backgroundImageW / 2 + flip * this.backgroundImageW * i, 0, this.backgroundImageW, this.canvasHeight);
                ctx.restore();
                flip = flip * -1;
            }
        }
    };
    this.draw = function (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (var fishie in this.fish) {
            this.fish[fishie].swim(ctx, this.imageStrip);
        }
    };
    this.clear = function (canvas) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    };
    this.startFish = 5;
    this.backgroundImageW = 250;
    this.backgroundImageH = 125;
    this.fish = [];
};



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fish; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fishW = 50;
var fishH = 50;
var maxLength = 5;

var Fish = function Fish(width, height) {
    _classCallCheck(this, Fish);

    this.swim = function (ctx, imageStrip) {
        var velocity = 20;

        var nextX = this.x + this.xAngle * velocity * .1;
        var nextY = this.y + this.yAngle * velocity * .1;
        var nextZ = this.z + this.zAngle * .1 * velocity * .1;
        var nextScale = Math.abs(nextZ) / (this.zFar - this.zClose);

        if (nextX + fishW / 2 * this.scale > this.width) {
            if (this.angle >= 0 && this.angle < Math.PI / 2) {
                this.angle = Math.PI - this.angle;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            } else if (this.angle > Math.PI / 2 * 3) {
                this.angle = this.angle - (this.angle - Math.PI / 2 * 3) * 2;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            }
        }

        if (nextX - fishW / 2 * this.scale < 0) {
            if (this.angle > Math.PI / 2 && this.angle < Math.PI) {
                this.angle = Math.PI - this.angle;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            } else if (this.angle > Math.PI && this.angle < Math.PI / 2 * 3) {
                this.angle = this.angle + (Math.PI / 2 * 3 - this.angle) * 2;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
                this.flip = -this.flip;
            }
        }

        if (nextY + fishH / 2 * this.scale > this.height) {
            if (this.angle > 0 && this.angle < Math.PI) {
                this.angle = Math.PI * 2 - this.angle;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle) * Math.random();
            }
        }

        if (nextY - fishH / 2 * this.scale < 0) {
            if (this.angle > Math.PI && this.angle < Math.PI * 2) {
                this.angle = this.angle - (this.angle - Math.PI) * 2;
                this.xAngle = Math.cos(this.angle);
                this.yAngle = Math.sin(this.angle);
            }
        }

        if (nextZ <= this.zClose && this.zAngle < 0) {
            this.zAngle = -this.zAngle;
        }

        if (this.width / fishW * 10 < fishW * maxLength / this.width) {
            this.zFarFactor = .3;
        } else if (this.width / fishW * 2 < fishW * maxLength / this.width) {
            this.zFarFactor = .5;
        } else {
            this.zFarFactor = 1;
        }
        if (nextZ >= this.zFar * this.zFarFactor && this.zAngle > 0) {
            this.zAngle = -this.zAngle;
        }
        if (this.scale < .1) {
            this.scale = .1;
        }
        ;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.transform(this.flip, 0, 0, 1, 0, 0);
        ctx.drawImage(imageStrip, fishW * this.cell, fishH * this.species, fishW, fishH, -fishW / 2, -fishH / 2, fishW, fishH);
        ctx.save();
        this.scale = nextScale;
        ctx.restore();
        ctx.restore();

        this.x = nextX;
        this.y = nextY;
        this.z = nextZ;
        if (this.cell >= this.cellCount - 1 || this.cell <= 0) {
            this.cellReverse = this.cellReverse * -1;
        }
        this.cell = this.cell + 1 * this.cellReverse;
    };
    this.height = height;
    this.width = width;
    this.angle = Math.PI * 2 * Math.random();
    this.xAngle = Math.cos(this.angle);
    this.yAngle = Math.sin(this.angle);
    this.zAngle = 1 + -2 * Math.round(Math.random());
    this.x = Math.floor(Math.random() * (this.width - fishW) + fishW / 2);
    this.y = Math.floor(Math.random() * (this.height - fishH) + fishH / 2);
    this.zFar = 100;
    this.zFarFactor = 1;
    this.zClose = 0;
    this.z = Math.floor(Math.random() * (this.zFar - this.zClose));
    this.scale = .1;
    this.flip = 1;
    this.cellCount = 16;
    this.cell = Math.floor(Math.random() * (this.cellCount - 1));
    this.cellReverse = -1;
    this.species = Math.floor(Math.random() * 3);
    if (this.angle > Math.PI * 4 / 3 && this.angle < Math.PI * 5 / 3 || this.angle > Math.PI * 1 / 3 && this.angle < Math.PI * 2 / 3) {
        this.angle = Math.PI * 1 / 3 * Math.random();
        this.xAngle = Math.cos(this.angle);
        this.yAngle = Math.sin(this.angle);
    }

    if (this.angle > Math.PI / 2 && this.angle < Math.PI / 2 * 3) {
        this.flip = -1;
    }
};



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fire; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fire = function Fire() {
    _classCallCheck(this, Fire);

    this.initialize = function (background, foreground, imageId) {
        this.ctx = foreground.getContext('2d');
        this.canvasWidth = foreground.width;
        this.canvasHeight = foreground.height;
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
    this.clear = function (background, foreground) {
        var bgContext = background.getContext('2d');
        bgContext.clearRect(0, 0, background.width, background.height);
        this.ctx.clearRect(0, 0, foreground.width, foreground.height);
    };
    this.randomizeThreshold = function () {
        this.threshold += Math.random() * 0.2 - 0.1;
        this.threshold = Math.min(Math.max(this.threshold, 0.5), 0.8);
    };
    this.createBackground = function (background) {
        var ctx = background.getContext('2d');
        var canvasWidth = background.width;
        var canvasHeight = background.height;
        ctx.drawImage(this.backgroundImage, 0, 0, canvasWidth, canvasHeight);
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
/* 36 */
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_lighting_Lamp__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_lighting_models_schema__ = __webpack_require__(13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Floor = function (_React$Component) {
    _inherits(Floor, _React$Component);

    function Floor(props) {
        _classCallCheck(this, Floor);

        var _this = _possibleConstructorReturn(this, (Floor.__proto__ || Object.getPrototypeOf(Floor)).call(this, props));

        console.log(props);
        _this.state = {
            lamps: props.lamps
        };
        return _this;
    }

    _createClass(Floor, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'floors' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: '60%', marginLeft: '20%', height: '50px', float: 'left' } },
                    ' ',
                    this.props.lamps.map(function (lamp) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'hue-' + lamp.position },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__devices_lighting_Lamp__["a" /* Lamp */], { key: lamp.id, lamp: lamp })
                        );
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'floor-container' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'floor' })
                    )
                )
            );
        }
    }]);

    return Floor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    console.log(state);
    return {
        lamps: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__devices_lighting_models_schema__["b" /* lampSelector */])(state.lamp)
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, null)(Floor));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devices_television_Television__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_ambilight_Ambilight__ = __webpack_require__(23);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Wall = function (_React$Component) {
    _inherits(Wall, _React$Component);

    function Wall() {
        _classCallCheck(this, Wall);

        return _possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).apply(this, arguments));
    }

    _createClass(Wall, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
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
                        { className: 'image-frame', style: { float: "right", marginRight: "75px" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/marilyn.jpg', className: 'image', width: '125px', height: '170px' })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: "20%", float: "left" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { width: "100%", height: "270px" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { style: { margin: "0 auto", width: "250px", position: "relative" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__devices_ambilight_Ambilight__["a" /* default */], null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__devices_television_Television__["a" /* default */], null)
                        ),
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
            );
        }
    }]);

    return Wall;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Wall);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(44);




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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composition_services_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_services_camera__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_television__ = __webpack_require__(43);




var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].CameraService).to(__WEBPACK_IMPORTED_MODULE_2__composition_services_camera__["a" /* CameraActionService */]);
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].TelevisionService).to(__WEBPACK_IMPORTED_MODULE_3__composition_services_television__["a" /* TelevisionActionService */]);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } })
));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(17);
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelevisionActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(17);
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_devices_ambilight_state_reducer__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_devices_lighting_state_reducer__ = __webpack_require__(31);





var reducers = {
    display: __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__["c" /* default */],
    television: __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__["b" /* default */],
    ambilight: __WEBPACK_IMPORTED_MODULE_2__components_devices_ambilight_state_reducer__["a" /* default */],
    lamp: __WEBPACK_IMPORTED_MODULE_3__components_devices_lighting_state_reducer__["a" /* default */]
};

/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(52);
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
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB3aWR0aD0iOW1tIiBoZWlnaHQ9IjltbSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSI+CiAgPGRlc2M+UlJPRCBMb2dvPC9kZXNjPgogIDwhLS0gU2hvdyBvdXRsaW5lIG9mIGNhbnZhcyB1c2luZyAncmVjdCcgZWxlbWVudCAtLT4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEyIiAgLz4KPC9zdmc+"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("inversify-inject-decorators");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(18);


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDA3MDAyNmI1YWJlZDZkNzE3ZmQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1vcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRzbGliXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9vcm0udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG9tYWluLXRhc2tcIiIsIndlYnBhY2s6Ly8vLi9BcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9BbWJpbGlnaHQudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L21vZGVscy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0NhbWVyYS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL0xhbXAudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vVGVsZXZpc2lvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vYXF1YXJpdW0udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vZmlzaC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Zsb29yL0Zsb29yLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL1dhbGwudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvY2FtZXJhLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90ZWxldmlzaW9uLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL2Z1bGxzY3JlZW4udHN4Iiwid2VicGFjazovLy8uL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2ltYWdlcy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNB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Ozs7Ozs7QUNBckMsZ0Q7Ozs7OztBQ0FBLHdEOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxtRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3d3d3Jvb3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQwNzAwMjZiNWFiZWQ2ZDcxN2ZkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LW9ybVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LW9ybVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRzbGliXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQW1iaWxpZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfRUZGRUNUID0gJ1NldEVmZmVjdEFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldEVmZmVjdEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnU2V0RWZmZWN0QWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHBhdHRlcm46IHN0cmluZ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERCA9ICdBZGRBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZEFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBBbWJpbGlnaHQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucy50cyIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWwvdmlld21vZGVsJztcclxuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWwvb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RJU1BMQVkgPSAnQ3JlYXRlRGlzcGxheUFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FNRVJBID0gJ0FkZENhbWVyYUFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0FNRVJBID0gJ1VwZGF0ZUNhbWVyYUFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZURpc3BsYXlBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0NyZWF0ZURpc3BsYXlBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZENhbWVyYUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkQ2FtZXJhQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXHJcbiAgICAgICAgY2FtZXJhOiBDYW1lcmFWaWV3TW9kZWxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVDYW1lcmFBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1VwZGF0ZUNhbWVyYUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBDYW1lcmFWaWV3TW9kZWw7XHJcbn1cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBDcmVhdGVEaXNwbGF5QWN0aW9uIHwgQWRkQ2FtZXJhQWN0aW9uIHwgVXBkYXRlQ2FtZXJhQWN0aW9uXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICB1cGRhdGVDYW1lcmE6IChjYW1lcmE6IENhbWVyYVZpZXdNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBvcm0uc2Vzc2lvbihnZXRTdGF0ZSgpLmRpc3BsYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBzZXNzaW9uLkNhbWVyYS53aXRoSWQoY2FtZXJhLmlkKTtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSA8Q2FtZXJhVmlld01vZGVsPntcbiAgICAgICAgICAgIG5hbWU6IHN0YXRlLm5hbWUsXG4gICAgICAgICAgICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxuICAgICAgICAgICAgaWQ6IHN0YXRlLmlkLFxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGNhbWVyYS5pc1JlY29yZGluZyxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGNhbWVyYS5pc01vdGlvbkRldGVjdGVkXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfQ0FNRVJBLCBwYXlsb2FkOiBuZXdTdGF0ZSB9KTtcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgRGlzcGxheSwgQ2FtZXJhIH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIENSRUFURV9ESVNQTEFZOlxyXG4gICAgICAgICAgICBEaXNwbGF5LmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NBTUVSQTpcclxuICAgICAgICAgICAgQ2FtZXJhLmNyZWF0ZShhY3Rpb24ucGF5bG9hZC5jYW1lcmEpO1xyXG4gICAgICAgICAgICBEaXNwbGF5LndpdGhJZChhY3Rpb24ucGF5bG9hZC5kaXNwbGF5KVxyXG4gICAgICAgICAgICAgICAgLmNhbWVyYXMuYWRkKENhbWVyYS53aXRoSWQoYWN0aW9uLnBheWxvYWQuY2FtZXJhLmlkKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBEQVRFX0NBTUVSQTpcclxuICAgICAgICAgICAgQ2FtZXJhLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPERpc3BsYXk+c2Vzc2lvbi5zdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIob3JtLCByZWR1Y2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXIudHMiLCJpbXBvcnQgeyBMYW1wIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfQ09MT1IgPSAnU2V0Q29sb3JBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDb2xvckFjdGlvbiB7XHJcbiAgICB0eXBlOiAnU2V0Q29sb3JBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9MQU1QID0gJ0FkZExhbXBBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRMYW1wQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRMYW1wQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IExhbXA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwiZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0ge1xyXG4gICAgQ2FtZXJhU2VydmljZTogU3ltYm9sKFwiQ2FtZXJhU2VydmljZVwiKSxcclxuICAgIFRlbGV2aXNpb25TZXJ2aWNlOiBTeW1ib2woXCJUZWxldmlzaW9uU2VydmljZVwiKVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImludmVyc2lmeVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uL2NvbXBvc2l0aW9uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQW1iaWxpZ2h0IGZyb20gJy4uL2RldmljZXMvYW1iaWxpZ2h0L3N0YXRlL2FjdGlvbnMnXHJcbmltcG9ydCAqIGFzIExhbXAgZnJvbSAnLi4vZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBURUxFVklTSU9OX0ZJUkVQTEFDRSA9ICdUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVsZXZpc2lvbkZpcmVwbGFjZUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVGVsZXZpc2lvbkZpcmVwbGFjZUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICB2YWx1ZTogYm9vbGVhblxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRFTEVWSVNJT05fQVFVQVJJVU0gPSAnVGVsZXZpc2lvbkFxdWFyaXVtQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGVsZXZpc2lvbkFxdWFyaXVtQWN0aW9uIHtcclxuICAgIHR5cGU6ICdUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgdmFsdWU6IGJvb2xlYW5cclxuICAgIH07XHJcbn1cclxuXHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gVGVsZXZpc2lvbkZpcmVwbGFjZUFjdGlvbiB8IFRlbGV2aXNpb25BcXVhcml1bUFjdGlvbiB8IEFtYmlsaWdodC5TZXRFZmZlY3RBY3Rpb24gfCBMYW1wLlNldENvbG9yQWN0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFxdWFyaXVtQmFja2dyb3VuZCA9ICd1cmwoaW1hZ2VzL2JhY2tncm91bmQtZmxpcDIuanBnKSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBzZXRGaXJlcGxhY2U6IChpZDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogVEVMRVZJU0lPTl9GSVJFUExBQ0UsIHBheWxvYWQ6IHsgaWQ6IGlkLCB2YWx1ZTogdmFsdWV9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IExhbXAuU0VUX0NPTE9SLCBwYXlsb2FkOiB7IGlkOiAxLCBjb2xvcjogdmFsdWUgPyAnb3JhbmdlJyA6ICcnIH0gfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogTGFtcC5TRVRfQ09MT1IsIHBheWxvYWQ6IHsgaWQ6IDIsIGNvbG9yOiB2YWx1ZSA/ICdvcmFuZ2UnIDogJycgfSB9KTtcbiAgICB9LFxyXG5cclxuICAgIHNldEFxdWFyaXVtOiAoaWQ6IG51bWJlciwgdmFsdWU6IGJvb2xlYW4pOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFRFTEVWSVNJT05fQVFVQVJJVU0sIHBheWxvYWQ6IHsgaWQ6IGlkLCB2YWx1ZTogdmFsdWUgfSB9KTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBBbWJpbGlnaHQuU0VUX0VGRkVDVCwgcGF5bG9hZDogeyBpZDogaWQsIHBhdHRlcm46IHZhbHVlID8gQXF1YXJpdW1CYWNrZ3JvdW5kIDogJycgfSB9KTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBMYW1wLlNFVF9DT0xPUiwgcGF5bG9hZDogeyBpZDogMSwgY29sb3I6IHZhbHVlID8gJ2RvZGdlcmJsdWUnIDogJycgfSB9KTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBMYW1wLlNFVF9DT0xPUiwgcGF5bG9hZDogeyBpZDogMiwgY29sb3I6IHZhbHVlID8gJ2RvZGdlcmJsdWUnIDogJycgfSB9KTtcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvYWN0aW9ucy9lZmZlY3RzLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgQW1iaWxpZ2h0LCBIYXJtb25vZ3JhbSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBBbWJpbGlnaHRWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKEFtYmlsaWdodCwgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZUFtYmlsaWdodFNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG5cclxuICAgIHZhciBhbWJpbGlnaHQgPSBzZXNzaW9uLkFtYmlsaWdodC5maXJzdCgpO1xyXG5cclxuICAgIHJldHVybiA8QW1iaWxpZ2h0Vmlld01vZGVsPntcclxuICAgICAgICBpZDogYW1iaWxpZ2h0LmlkLFxyXG4gICAgICAgIGlzQWN0aXZlOiBhbWJpbGlnaHQuaXNBY3RpdmUsXHJcbiAgICAgICAgYmFja2dyb3VuZDogYW1iaWxpZ2h0LmJhY2tncm91bmQsXHJcbiAgICAgICAgbmFtZTogYW1iaWxpZ2h0Lm5hbWVcclxuICAgIH07XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L21vZGVscy9zY2hlbWEudHMiLCJpbXBvcnQgeyBPUk0gfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgeyBEaXNwbGF5LCBDYW1lcmEsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IENhbWVyYVZpZXdNb2RlbCB9IGZyb20gJy4vdmlld21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBvcm0gPSBuZXcgT1JNKCk7XHJcbm9ybS5yZWdpc3RlcihEaXNwbGF5LCBDYW1lcmEsIEhhcm1vbm9ncmFtKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVDYW1lcmFzU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcclxuXHJcbiAgICByZXR1cm4gc2Vzc2lvbi5EaXNwbGF5Q2FtZXJhcy5hbGwoKS50b1JlZkFycmF5KCkubWFwKGNhbWVyYSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gc2Vzc2lvbi5DYW1lcmEud2l0aElkKGNhbWVyYS50b0NhbWVyYUlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYW1lcmFWaWV3TW9kZWw+IHtcclxuICAgICAgICAgICAgaWQ6IG9iai5pZCxcclxuICAgICAgICAgICAgbmFtZTogb2JqLm5hbWUsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBvYmouaXNSZWNvcmRpbmcsXG4gICAgICAgICAgICBhZGRyZXNzOiAnaHR0cDovLzE5Mi4xNjguMC4yMzQvaW1hZ2UvanBlZy5jZ2knLFxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogb2JqLmlzTW90aW9uRGV0ZWN0ZWRcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL29ybS50cyIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IExhbXAsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IExhbXBWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKExhbXAsIEhhcm1vbm9ncmFtKTtcclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW1wU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gc2Vzc2lvbi5MYW1wLmFsbCgpLnRvUmVmQXJyYXkoKS5tYXAobGFtcCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxMYW1wVmlld01vZGVsPntcclxuICAgICAgICAgICAgaWQ6IGxhbXAuaWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBsYW1wLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBjb2xvcjogbGFtcC5jb2xvcixcclxuICAgICAgICAgICAgbmFtZTogbGFtcC5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogbGFtcC5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvbiwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblZpZXdNb2RlbCB9IGZyb20gJy4vdmlld21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBvcm0gPSBuZXcgT1JNKCk7XHJcbm9ybS5yZWdpc3RlcihUZWxldmlzaW9uLCBIYXJtb25vZ3JhbSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlVGVsZXZpc2lvblNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG5cclxuICAgIHZhciB0ZWxldmlzaW9uID0gc2Vzc2lvbi5UZWxldmlzaW9uLmZpcnN0KCk7XHJcblxyXG4gICAgcmV0dXJuIDxUZWxldmlzaW9uVmlld01vZGVsPntcclxuICAgICAgICBpZDogdGVsZXZpc2lvbi5pZCxcclxuICAgICAgICBpc0FjdGl2ZTogdGVsZXZpc2lvbi5pc0FjdGl2ZSxcclxuICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IHRlbGV2aXNpb24uaXNGaXJlcGxhY2VSdW5uaW5nLFxyXG4gICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiB0ZWxldmlzaW9uLmlzQXF1YXJpdW1SdW5uaW5nLFxyXG4gICAgICAgIG5hbWU6IHRlbGV2aXNpb24ubmFtZVxyXG4gICAgfTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL21vZGVscy9zY2hlbWEudHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb24gfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IFRFTEVWSVNJT05fRklSRVBMQUNFLCBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uLCBURUxFVklTSU9OX0FRVUFSSVVNLCBUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2VmZmVjdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9URUxFVklTSU9OID0gJ0FkZFRlbGV2aXNpb25BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRUZWxldmlzaW9uQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRUZWxldmlzaW9uQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IFRlbGV2aXNpb247XHJcbn1cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uIHwgQWRkVGVsZXZpc2lvbkFjdGlvbiB8IFRlbGV2aXNpb25BcXVhcml1bUFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IFRlbGV2aXNpb24gfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVEVMRVZJU0lPTl9GSVJFUExBQ0U6XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24ud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGFjdGlvbi5wYXlsb2FkLnZhbHVlIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRFTEVWSVNJT05fQVFVQVJJVU06XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcXVhcml1bSBydW5uaW5nJyk7XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24ud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBpc0FxdWFyaXVtUnVubmluZzogYWN0aW9uLnBheWxvYWQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1RFTEVWSVNJT046XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24uY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3N0YXRlcy90ZWxldmlzaW9uLnRzIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lcidcclxuaW1wb3J0IGdldERlY29yYXRvcnMgZnJvbSBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbGF6eUluamVjdCB9ID0gZ2V0RGVjb3JhdG9ycyhjb250YWluZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9pb2MvZGVjb3JhdG9ycy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbWFpbi10YXNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZG9tYWluLXRhc2tcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9jb21wb3NpdGlvbi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IENhbWVyYSwgRGlzcGxheSB9IGZyb20gJy4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEFERF9DQU1FUkEsIENSRUFURV9ESVNQTEFZIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllcic7XHJcbmltcG9ydCB7IEFERF9URUxFVklTSU9OIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvbic7XHJcbmltcG9ydCAqIGFzIEFtYmlsaWdodCBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIExhbXAgZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIE1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0IGFnYWluc3QgdGhlIGxpc3Qgb2YgY2xpZW50LXNpZGUgcm91dGVzXHJcbiAgICAgICAgbWF0Y2goeyByb3V0ZXMsIGxvY2F0aW9uOiBwYXJhbXMubG9jYXRpb24gfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RMb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBpdCBkaWRuJ3QgbWF0Y2ggYW55IHJvdXRlLCByZW5kZXJQcm9wcyB3aWxsIGJlIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBpZiAoIXJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBsb2NhdGlvbiAnJHtwYXJhbXMudXJsfScgZG9lc24ndCBtYXRjaCBhbnkgcm91dGUgY29uZmlndXJlZCBpbiByZWFjdC1yb3V0ZXIuYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IENSRUFURV9ESVNQTEFZLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX0NBTUVSQSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU2Fsb24gRnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9URUxFVklTSU9OLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic29ueSBicmF2aWFcIixcclxuICAgICAgICAgICAgICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQW1iaWxpZ2h0LkFERCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImh5cGVyaW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3VybChpbWFnZXMvYW1iaWVudC5qcGcpJyxcclxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTGFtcC5BRERfTEFNUCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImh1ZS1sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZjY1MGU4JyxcclxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMYW1wLkFERF9MQU1QLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaHVlLXJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMjNmMzQzJyxcclxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW4gaW5pdGlhbCByZW5kZXIgdGhhdCB3aWxsIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvYm9vdC1zZXJ2ZXIudHN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBTY3JvbGxFZmZlY3QgZnJvbSAnLi4vLi4vbGliL3Njcm9sbC1lZmZlY3QnO1xuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vLi4vbGliL2Z1bGxzY3JlZW4nO1xuaW1wb3J0IENhbWVyYUxpc3QgZnJvbSAnLi9kZXZpY2VzL2NhbWVyYS9EaXNwbGF5ZXInO1xuaW1wb3J0IEZsb29yIGZyb20gJy4vZmxvb3IvRmxvb3InO1xuaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxsL1dhbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPEZ1bGxzY3JlZW4+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiaGVyb1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDYW1lcmFMaXN0IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFdhbGwgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Rmxvb3IgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1NXB4XCIsIG1hcmdpbkxlZnQ6IFwiNTUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZmxvYXQ6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1mYWNldGltZS12aWRlb1wiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBpY3R1cmVcIiBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMjVweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsbVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1tdXNpY1wiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyNXB4XCIsIGhlaWdodDogXCI5MHB4XCIsIHdpZHRoOiBcIjM3MHB4XCIsIG1hcmdpbkxlZnQ6IFwiNTBweFwiLCBmbG9hdDogXCJsZWZ0XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItbGVmdFwiICBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OlwiLTEwcHhcIiwgd2lkdGg6IFwiMTVweFwiLCBoZWlnaHQ6IFwiOTBweFwiIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogXCIyMHB4XCIsIHdpZHRoOiBcIjMyMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG91dHB1dCBjbGFzc05hbWU9XCJwbGF5ZXItZGlzcGxheVwiIHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIGZvbnRTaXplOiBcIjE1cHhcIiwgbGluZUhlaWdodDogXCI0MHB4XCIgfX0+UmVhZHkgdG8gcGxheTwvb3V0cHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiNDBweFwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWJhY2t3YXJkXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0b3BcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1mb3J3YXJkXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIzMjBweFwiLCBib3R0b206XCIxMHB4XCIsIGxlZnQ6IFwiMjBweFwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZWplY3RcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT1cInBsYXllci1kcml2ZVwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIsIGxpbmVIZWlnaHQ6XCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMjVweFwiLCB3aWR0aDogXCIyMjVweFwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PkRldHJvaXQ8L291dHB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1vcGVuXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBtYXJnaW5MZWZ0OiBcIjI1cHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1yaWdodFwiIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBcIjE1cHhcIiwgcmlnaHQ6IFwiMjBweFwiLCBoZWlnaHQ6IFwiOTBweFwiIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GdWxsc2NyZWVuPiAgICAgIFxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2TWVudSBmcm9tICcuL05hdk1lbnUnO1xuaW1wb3J0IFJvdXRlVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9saWIvcm91dGUtdHJhbnNpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGJvZHk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlcyB7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIExheW91dFN0YXRlcz4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8TmF2TWVudSAvPlxuICAgICAgICAgICAgPFJvdXRlVHJhbnNpdGlvbiBwYXRobmFtZT17dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgOiAnJ30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYm9keX1cbiAgICAgICAgICAgIDwvUm91dGVUcmFuc2l0aW9uPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vc3RvcmUnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE5hdkRyb3Bkb3duLCBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XG5cbmNvbnN0IGxvZ28gPSByZXF1aXJlKCcuLi8uLi9pbWFnZXMvbG9nby5zdmcnKSBhcyBzdHJpbmc7XG5cbmludGVyZmFjZSBOYXZNZW51UHJvcHMge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICByb2xlczogc3RyaW5nW107XG59XG4gXG5jbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdk1lbnVQcm9wcywgQXBwbGljYXRpb25TdGF0ZT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TmF2YmFyIGZpeGVkVG9wPXt0cnVlfT5cbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17Jy8nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hcnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFydFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2ltYWdlcy9ncmFkaWVudC5wbmcnKVwiIH19ID4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBoZWlnaHQ9XCI1MHB4XCIgd2lkdGg9XCIyNTBweFwiIGFsdD1cIkhvbWUgTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIC8+XG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0+Q29udGFjdDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb3VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30+Q291bnRlcjwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezJ9IHRpdGxlPVwiTG9naW5cIiBpZD1cIm5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi4xfT5Mb2dpbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjJ9PlJlZ2lzdGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezIuM30+VXNlciBQcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuNH0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs0fT5Ob3RpZmljYXRpb25zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGlzQXV0aGVudGljYXRlZDogZmFsc2UsIHJvbGVzOiBbXSB9O1xyXG4gICAgfSwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbiAgICB7fSAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4pKE5hdk1lbnUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnQXBwL2NvbXBvc2l0aW9uL3N0b3JlJztcclxuaW1wb3J0IHsgYWN0aXZlQW1iaWxpZ2h0U2VsZWN0b3IgfSBmcm9tICcuL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tICcuL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEFtYmlsaWdodFZpZXdNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3ZpZXcnO1xyXG5cclxuaW50ZXJmYWNlIEFtYmlsaWdodFByb3BzIHtcclxuICAgIGFtYmlsaWdodDogQW1iaWxpZ2h0Vmlld01vZGVsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGlzQWN0aXZlOiBib29sZWFuLFxyXG4gICAgYmFja2dyb3VuZDogc3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBBbWJpbGlnaHRQcm9wcztcclxuXHJcbmNsYXNzIEFtYmlsaWdodCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICBkZWZhdWx0UGF0dGVybjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UGF0dGVybiA9IHByb3BzLmFtYmlsaWdodC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy5hbWJpbGlnaHQuaWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy5hbWJpbGlnaHQuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuZGVmYXVsdFBhdHRlcm5cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSBuZXh0UHJvcHMuYW1iaWxpZ2h0LmJhY2tncm91bmQ7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5hbWJpbGlnaHQuaXNBY3RpdmUpXHJcbiAgICAgICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuICE9PSAnJyA/IHBhdHRlcm4gOiB0aGlzLmRlZmF1bHRQYXR0ZXJuO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcGF0dGVyblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhbWJpbGlnaHQgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbWJpbGlnaHRcIiBzdHlsZT17eyB3aWR0aDogXCIyNjBweFwiLCBoZWlnaHQ6IFwiMTI1cHhcIiwgYmFja2dyb3VuZEltYWdlOiB0aGlzLnN0YXRlLmJhY2tncm91bmQgfX0+IDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYW1iaWxpZ2h0OiBhY3RpdmVBbWJpbGlnaHRTZWxlY3RvcihzdGF0ZS5hbWJpbGlnaHQpLFxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbnVsbFxyXG4pKEFtYmlsaWdodCk7XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9BbWJpbGlnaHQudHN4IiwiaW1wb3J0IHsgTW9kZWwsIG1hbnksIGF0dHIgfSBmcm9tIFwicmVkdXgtb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW1iaWxpZ2h0IGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogYXR0cigpLFxyXG4gICAgICAgICAgICBoYXJtb25vZ3JhbXM6IG1hbnkoXCJIYXJtb25vZ3JhbVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkFtYmlsaWdodC5tb2RlbE5hbWUgPSBcIkFtYmlsaWdodFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9tb2RlbHMvbW9kZWwudHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IEFtYmlsaWdodCB9IGZyb20gJy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEFjdGlvbnMuU2V0RWZmZWN0QWN0aW9uIHwgQWN0aW9ucy5BZGRBY3Rpb247XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgQW1iaWxpZ2h0IH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvbnMuU0VUX0VGRkVDVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBBbWJpbGlnaHQud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBiYWNrZ3JvdW5kOiBhY3Rpb24ucGF5bG9hZC5wYXR0ZXJuIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuQUREOlxyXG4gICAgICAgICAgICBBbWJpbGlnaHQuY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvcmVkdWNlci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgQ2FtZXJhU3RvcmUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc3RhdGUvZGlzcGxheWVyXCI7XHJcbmltcG9ydCB7IGxhenlJbmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9pb2MvZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc2VydmljZXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IENhbWVyYVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL3ZpZXdtb2RlbFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgIGlzUmVjb3JkaW5nOiBib29sZWFuO1xyXG4gICAgaXNNb3Rpb25EZXRlY3RlZDogYm9vbGVhbjtcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGFkZHJlc3M6IHN0cmluZyxcclxuICAgIHVwZGF0ZUNhbWVyYTogKGNhbWVyYTogQ2FtZXJhVmlld01vZGVsKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgaXNSZWNvcmRpbmc6IGJvb2xlYW47XG4gICAgaXNNb3Rpb25EZXRlY3RlZDogYm9vbGVhbjtcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5sZXQgdXBkYXRlVmlldztcclxubGV0IHVwZGF0ZVN0YXRlO1xyXG5sZXQgY291bnRlciA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IHByb3BzLmlzUmVjb3JkaW5nLFxyXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBwcm9wcy5pc01vdGlvbkRldGVjdGVkLFxyXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBwcm9wcy5hZGRyZXNzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBAbGF6eUluamVjdChTZXJ2aWNlcy5DYW1lcmFTZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSBfcHJpbnRTZXJ2aWNlOiBDYW1lcmFTZXJ2aWNlO1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBuZXh0UHJvcHMuaXNSZWNvcmRpbmcsXHJcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IG5leHRQcm9wcy5pc01vdGlvbkRldGVjdGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdXBkYXRlVmlldyA9IHNldEludGVydmFsKHRoaXMudXBkYXRlQ2FtZXJhVmlldyxcclxuICAgICAgICAgICAgMTAwMCwgdGhpcy5zdGF0ZS5hZGRyZXNzLCB0aGlzLnNldFN0YXRlKTtcclxuXHJcbiAgICAgICAgdXBkYXRlU3RhdGUgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNhbWVyYVN0YXRlLFxyXG4gICAgICAgICAgICA1MDAwLCB0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgICAgICB0aGlzLl9wcmludFNlcnZpY2UuZ2V0Q2FtZXJhU3RhdGUsXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlQ2FtZXJhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHVwZGF0ZVZpZXcpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBkYXRlU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhbWVyYVZpZXcoYWRkcmVzcywgc2V0U3RhdGUpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MgKyAnP2RhdGE9JyArIGNvdW50ZXIrK1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVDYW1lcmFTdGF0ZShpZDogbnVtYmVyLCBnZXRTdGF0ZSwgdXBkYXRlU3RhdGUpIHtcclxuICAgICAgICB2YXIgY2FtZXJhID0gYXdhaXQgZ2V0U3RhdGUoaWQpO1xyXG4gICAgICAgIHVwZGF0ZVN0YXRlKGNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RhcnRSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9wcmludFNlcnZpY2Uuc3RhcnRSZWNvcmRpbmcoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0b3BSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fcHJpbnRTZXJ2aWNlLnN0b3BSZWNvcmRpbmcoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlciBjYW1lcmEtY29udGFpbmVyXCIgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldEFjdGl2ZSh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldEFjdGl2ZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGNhbWVyYS1mcmFtZVwiIHN0eWxlPXt7IG1hcmdpbjogJzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnN0YXRlLmFkZHJlc3N9IHN0eWxlPXt7IGhlaWdodDogJzEyNXB4Jywgd2lkdGg6ICcyMDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc1JlY29yZGluZyA/ICdjYW1lcmEtcmVjb3JkaW5nJyA6IHRoaXMuc3RhdGUuaXNNb3Rpb25EZXRlY3RlZCA/ICdjYW1lcmEtYWxlcnQnIDogJ2NhbWVyYS1uby1hbGVydCd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzQWN0aXZlID8gJ2NhbWVyYS1ib3R0b20gY2FtZXJhLXZpc2libGUnIDogJ2NhbWVyYS1ib3R0b20gY2FtZXJhLWhpZGRlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2FtZXJhLW5hbWVcIj57dGhpcy5zdGF0ZS5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlY29yZCBjYW1lcmEtcGxheVwiIHN0eWxlPXt7IHBhZGRpbmc6ICczcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5pc1JlY29yZGluZyA/ICgpID0+IHRoaXMuc3RvcFJlY29yZGluZyhpZCkgOiAoKSA9PiB0aGlzLnN0YXJ0UmVjb3JkaW5nKGlkKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdG9wXCIgc3R5bGU9e3sgd2lkdGg6ICcyNXB4JywgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAnZ3JheScsIHBhZGRpbmc6ICczcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdG9wUmVjb3JkaW5nKGlkKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnQXBwL2NvbXBvc2l0aW9uL3N0b3JlJztcclxuaW1wb3J0IENhbWVyYUl0ZW0gZnJvbSAnLi9DYW1lcmEnO1xyXG5pbXBvcnQgeyBhY3RpdmVDYW1lcmFzU2VsZWN0b3IgfSBmcm9tICcuL21vZGVsL29ybSc7XHJcbmltcG9ydCB7IENhbWVyYVZpZXdNb2RlbCB9IGZyb20gXCIuL21vZGVsL3ZpZXdtb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBEaXNwbGF5U3RvcmUgZnJvbSBcIi4vc3RhdGUvZGlzcGxheWVyXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbGlzdDogQ2FtZXJhVmlld01vZGVsW107XHJcbiAgICBsaXN0VmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBsaXN0VmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxudHlwZSBDYW1lcmFzUHJvcHMgPSBQcm9wcyAmIHR5cGVvZiBEaXNwbGF5U3RvcmUuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5jbGFzcyBEaXNwbGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q2FtZXJhc1Byb3BzLCBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IENhbWVyYXNQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGlzdFZpc2libGU6IHByb3BzLmxpc3RWaXNpYmxlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvb2dsZUNhbWVyYXMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxpc3RWaXNpYmxlOiAhdGhpcy5zdGF0ZS5saXN0VmlzaWJsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHVwZGF0ZUNhbWVyYSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMjAwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1lcmEtdG9wYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzMwcHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWRvd24gY2FtZXJhLWNvbGxhcHNlLWRvd25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvb2dsZUNhbWVyYXMoKX0gc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5IGNhbWVyYS1wbGF5XCIgc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWV5ZS1vcGVuIGNhbWVyYS1tb3Rpb25cIiBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdm9sdW1lLXVwIGNhbWVyYS1zb3VuZFwiIHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1vcHRpb24taG9yaXpvbnRhbCBjYW1lcmEtdG9wYmFyLXNldHRpbmdzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmxpc3RWaXNpYmxlID8gJ3NsaWRlLWRvd24nIDogJ3NsaWRlLXVwJ30+IHt0aGlzLnByb3BzLmxpc3QubWFwKChjYW1lcmEpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYW1lcmFJdGVtIGtleT17Y2FtZXJhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FtZXJhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXtjYW1lcmEuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y2FtZXJhLm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ9e2NhbWVyYS5pc01vdGlvbkRldGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlY29yZGluZz17Y2FtZXJhLmlzUmVjb3JkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYW1lcmE9e3VwZGF0ZUNhbWVyYX0gLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaXN0OiBhY3RpdmVDYW1lcmFzU2VsZWN0b3Ioc3RhdGUuZGlzcGxheSksXHJcbiAgICAgICAgbGlzdFZpc2libGU6IHRydWVcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIERpc3BsYXlTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4pKERpc3BsYXllcik7XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9EaXNwbGF5ZXIudHN4IiwiaW1wb3J0IHsgTW9kZWwsIG1hbnksIGF0dHIgfSBmcm9tIFwicmVkdXgtb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGxheSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBjYW1lcmFzOiBtYW55KFwiQ2FtZXJhXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuRGlzcGxheS5tb2RlbE5hbWUgPSBcIkRpc3BsYXlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogYXR0cigpLFxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogYXR0cigpLFxyXG4gICAgICAgICAgICBoYXJtb25vZ3JhbXM6IG1hbnkoXCJIYXJtb25vZ3JhbVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkNhbWVyYS5tb2RlbE5hbWUgPSBcIkNhbWVyYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvbW9kZWwudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgeyBMYW1wVmlld01vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdmlldyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbGFtcDogTGFtcFZpZXdNb2RlbFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhbXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICBkZWZhdWx0Q29sb3I6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29sb3IgPSBwcm9wcy5sYW1wLmNvbG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmRlZmF1bHRDb2xvclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSBuZXh0UHJvcHMubGFtcC5jb2xvcjtcclxuICAgICAgICBpZiAobmV4dFByb3BzLmxhbXAuaXNBY3RpdmUpXHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3IgIT09ICcnID8gY29sb3IgOiB0aGlzLmRlZmF1bHRDb2xvcjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaHVlLnBuZ1wiIGhlaWdodD1cIjE1MHB4XCIgd2lkdGg9XCI0MHB4XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy04MHB4JywgbGVmdDogJzAnLCB6SW5kZXg6IDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmNvbG9yLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTgwcHgnLCBsZWZ0OiAnMCcgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvTGFtcC50c3giLCJpbXBvcnQgeyBNb2RlbCwgbWFueSwgYXR0ciB9IGZyb20gXCJyZWR1eC1vcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYW1wIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgY29sb3I6IGF0dHIoKSxcclxuICAgICAgICAgICAgcG9zaXRpb246IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5MYW1wLm1vZGVsTmFtZSA9IFwiTGFtcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy9tb2RlbC50cyIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgTGFtcCB9IGZyb20gJy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEFjdGlvbnMuU2V0Q29sb3JBY3Rpb24gfCBBY3Rpb25zLkFkZExhbXBBY3Rpb247XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgTGFtcCB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNFVF9DT0xPUjpcclxuICAgICAgICAgICAgTGFtcC53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGNvbG9yOiBhY3Rpb24ucGF5bG9hZC5jb2xvciB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkFERF9MQU1QOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGFtcCBhZGRlZCcpO1xyXG4gICAgICAgICAgICBMYW1wLmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvcmVkdWNlci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCB7IGxhenlJbmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9pb2MvZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBFZmZlY3RzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvYWN0aW9ucy9lZmZlY3RzJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc2VydmljZXMvdGVsZXZpc2lvblwiO1xyXG5pbXBvcnQgeyBhY3RpdmVUZWxldmlzaW9uU2VsZWN0b3IgfSBmcm9tICcuL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tICcuL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25WaWV3TW9kZWwgfSBmcm9tICcuL21vZGVscy92aWV3bW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBGaXJlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvZmlyZXBsYWNlL2ZpcmUnO1xyXG5pbXBvcnQgeyBBcXVhcml1bSB9IGZyb20gJy4vZWZmZWN0cy9hcXVhcml1bS9hcXVhcml1bSc7XHJcblxyXG5pbnRlcmZhY2UgVGVsZXZpc2lvblByb3BzIHtcclxuICAgIHRlbGV2aXNpb246IFRlbGV2aXNpb25WaWV3TW9kZWw7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4sXHJcbiAgICBpc0ZpcmVwbGFjZTogYm9vbGVhbixcclxuICAgIGlzQXF1YXJpdW06IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSBQcm9wcyA9IFRlbGV2aXNpb25Qcm9wcyAmIHR5cGVvZiBFZmZlY3RzLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxubGV0IGZpcmVwbGFjZTtcclxubGV0IGZpcmU7XHJcbmxldCBhcXVhcml1bTtcclxubGV0IGFxdWE7XHJcblxyXG5jbGFzcyBUZWxldmlzaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIGFxdWFyaXVtOiBBcXVhcml1bTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy50ZWxldmlzaW9uLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMudGVsZXZpc2lvbi5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgaXNGaXJlcGxhY2U6IHByb3BzLnRlbGV2aXNpb24uaXNGaXJlcGxhY2VSdW5uaW5nLFxyXG4gICAgICAgICAgICBpc0FxdWFyaXVtOiBwcm9wcy50ZWxldmlzaW9uLmlzQXF1YXJpdW1SdW5uaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmlyZSA9IG5ldyBGaXJlLkZpcmUoKTtcclxuICAgICAgICBhcXVhcml1bSA9IG5ldyBBcXVhcml1bSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV4dFByb3BzKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNGaXJlcGxhY2U6IG5leHRQcm9wcy50ZWxldmlzaW9uLmlzRmlyZXBsYWNlUnVubmluZyxcclxuICAgICAgICAgICAgaXNBcXVhcml1bTogbmV4dFByb3BzLnRlbGV2aXNpb24uaXNBcXVhcml1bVJ1bm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0RmlyZXBsYWNlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMucmVmcy50ZWxldmlzaW9uO1xyXG4gICAgICAgIHZhciBmb3JlZ3JvdW5kID0gdGhpcy5yZWZzLnR2Q29udGVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNGaXJlcGxhY2UpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmaXJlcGxhY2UpO1xyXG4gICAgICAgICAgICBmaXJlLmNsZWFyKGJhY2tncm91bmQsIGZvcmVncm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlyZS5pbml0aWFsaXplKGJhY2tncm91bmQsIGZvcmVncm91bmQsICdpbWFnZUJhY2tncm91bmQnKTtcclxuICAgICAgICAgICAgZmlyZXBsYWNlID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcmUuYnVybkJ1cm5CdXJuKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCwgZmlyZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldEZpcmVwbGFjZShpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLnNldEZpcmVwbGFjZSh0aGlzLnN0YXRlLmlkLCAhdGhpcy5zdGF0ZS5pc0ZpcmVwbGFjZSk7ICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRWaWRlbyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSB0aGlzLnJlZnMudGVsZXZpc2lvbjtcclxuICAgICAgICB2YXIgZm9yZWdyb3VuZCA9IHRoaXMucmVmcy50dkNvbnRlbnQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNBcXVhcml1bSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzQXF1YXJpdW0pIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhcXVhKTtcclxuICAgICAgICAgICAgYXF1YXJpdW0uY2xlYXIoYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgIGFxdWFyaXVtLmNsZWFyKGZvcmVncm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXF1YXJpdW0uaW5pdChiYWNrZ3JvdW5kKTtcclxuICAgICAgICAgICAgYXF1YSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcXVhcml1bS5kcmF3KGZvcmVncm91bmQpO1xyXG4gICAgICAgICAgICB9LCAxNi43LCBhcXVhcml1bSwgZm9yZWdyb3VuZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldFZpZGVvKGlkKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRBcXVhcml1bSh0aGlzLnN0YXRlLmlkLCAhdGhpcy5zdGF0ZS5pc0FxdWFyaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBAbGF6eUluamVjdChTZXJ2aWNlcy5UZWxldmlzaW9uU2VydmljZSlcclxuICAgIHByaXZhdGUgX3NlcnZpY2U6IFRlbGV2aXNpb25TZXJ2aWNlO1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRlbGV2aXNpb24gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19IG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjQwcHggMCAwIDBcIiwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsIGhlaWdodDogXCIxMjVweFwiLCB3aWR0aDogXCIyNTBweFwiLCBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIgfX0gcmVmPVwidGVsZXZpc2lvblwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgc3R5bGU9e3sgaGVpZ2h0OiBcIjEyNXB4XCIsIHdpZHRoOiBcIjI1MHB4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnIH19IHJlZj1cInR2Q29udGVudFwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpbWFnZUJhY2tncm91bmRcIiBzcmM9XCJpbWFnZXMvYmFja2dyb3VuZC1mbGlwMi5qcGdcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjUwcHgnLCBkaXNwbGF5OiAnbm9uZScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiaW1hZ2VTdHJpcFwiIHNyYz1cImltYWdlcy9maXNoc3RyaXAucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTI1cHgnLCB3aWR0aDogJzI1MHB4JywgZGlzcGxheTogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICd0ZWxldmlzaW9uLWJvdHRvbSBjYW1lcmEtdmlzaWJsZScgOiAndGVsZXZpc2lvbi1ib3R0b20gY2FtZXJhLWhpZGRlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYW1lcmEtbmFtZVwiPlNvbnkgQnJhdmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZpcmUgdGVsZXZpc2lvbi1maXJlcGxhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5pc0ZpcmVwbGFjZSA/ICgpID0+IHRoaXMuc2V0RmlyZXBsYWNlKHRlbGV2aXNpb24uaWQpIDogKCkgPT4gdGhpcy5zZXRGaXJlcGxhY2UodGVsZXZpc2lvbi5pZCl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxlYWYgdGVsZXZpc2lvbi1sZWFmXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRpbnQgdGVsZXZpc2lvbi13YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzRmlyZXBsYWNlID8gKCkgPT4gdGhpcy5zZXRWaWRlbyh0ZWxldmlzaW9uLmlkKSA6ICgpID0+IHRoaXMuc2V0VmlkZW8odGVsZXZpc2lvbi5pZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbGV2aXNpb246IGFjdGl2ZVRlbGV2aXNpb25TZWxlY3RvcihzdGF0ZS50ZWxldmlzaW9uKSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIEVmZmVjdHMuYWN0aW9uQ3JlYXRvcnNcclxuKShUZWxldmlzaW9uKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9UZWxldmlzaW9uLnRzeCIsImltcG9ydCB7IEZpc2ggfSBmcm9tICcuL2Zpc2gnXHJcblxyXG5jbGFzcyBBcXVhcml1bSB7XHJcbiAgICBjdHg6IGFueTsgICAgICAgICAgICAgICAgICAgIC8vY2FudmFzIGNvbnRleHQgZm9yIGRyYXdpbmcgdGhlIGZpc2hcclxuICAgIHN0YXJ0RmlzaDogbnVtYmVyOyAgICAgICAgICAvL251bWJlciBvZiBmaXNoIHRvIHN0YXJ0IHdpdGhcclxuICAgIGZpc2g6IEZpc2ggW107ICAgICAgICAgICAgICAgLy9hcnJheSBvZiBmaXNoXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGFueTsgICAgICAgICAvL2JhY2tncm91bmQgaW1hZ2VcclxuICAgIGJhY2tncm91bmRJbWFnZVc6IG51bWJlcjsgIC8vYmFja2dyb3VuZCBpbWFnZSB3aWR0aFxyXG4gICAgYmFja2dyb3VuZEltYWdlSDogbnVtYmVyOyAgLy9iYWNrZ3JvdW5kIGltYWdlIGhlaWdodFxyXG4gICAgaW1hZ2VTdHJpcDogYW55OyAgICAgICAgICAgICAgLy9maXNoIGltYWdlIHN0cmlwIFxyXG4gICAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICAgIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRGaXNoID0gNTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZVcgPSAyNTA7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2VIID0gMTI1O1xyXG4gICAgICAgIHRoaXMuZmlzaCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSBmdW5jdGlvbiAoYmFja2dyb3VuZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBiYWNrZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGJhY2tncm91bmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBiYWNrZ3JvdW5kLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy9kcmF3IHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRoZSBmaXNoXHJcbiAgICAgICAgdGhpcy5pbWFnZVN0cmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlU3RyaXAnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUZpc2godGhpcy5zdGFydEZpc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpc2ggPSBmdW5jdGlvbihtYXgpIHtcclxuICAgICAgICBpZiAodGhpcy5maXNoLmxlbmd0aCA8IG1heCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5maXNoLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpc2gucHVzaChuZXcgRmlzaCh0aGlzLmJhY2tncm91bmRJbWFnZVcsIHRoaXMuYmFja2dyb3VuZEltYWdlSCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL3JlbW92ZSBmaXNoXHJcbiAgICAgICAgICAgIHRoaXMuZmlzaC5zcGxpY2UobWF4LCB0aGlzLmZpc2gubGVuZ3RoIC0gbWF4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXNXaWR0aCA8IHRoaXMuYmFja2dyb3VuZEltYWdlVykge1xyXG4gICAgICAgICAgICAvL1Nob3cgYSBwb3J0aW9uIG9mIHRoZSBiYWNrZ3JvdW5kIGlmIHRoZSB3aW5kb3cgaXMgbW9yZSBuYXJyb3cgdGhhbiB0aGUgYmFja2dyb3VuZEltYWdlXHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kSW1hZ2UsIDAsIDAsIHRoaXMuYmFja2dyb3VuZEltYWdlVywgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy90aWxlIHRoZSBiYWNrZ3JvdW5kSW1hZ2UgaG9yaXpvbnRhbGx5IGlmIHRoZSB3aW5kb3cgaXMgbW9yZSB3aWRlIHRoYW4gdGhlIGltYWdlXHJcbiAgICAgICAgICAgIHZhciB0aWxlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMuY2FudmFzV2lkdGggLyB0aGlzLmJhY2tncm91bmRJbWFnZVcpO1xyXG4gICAgICAgICAgICB2YXIgZmxpcCA9IDE7IC8vZmxpcCB0aGUgaW1hZ2Ugd2hlbiBmbGlwPT0tMSBmb3IgYmV0dGVyIGxvb2tpbmcgdGlsZXNcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGlsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCB0aGUgdGlsZXMgdGhhdCBhcmUgbmVlZGVkIGFuZCBwb3NpdGlvbiB0aGVtXHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShmbGlwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kSW1hZ2UsIChmbGlwIC0gMSkgKiB0aGlzLmJhY2tncm91bmRJbWFnZVcgLyAyICsgZmxpcCAqIHRoaXMuYmFja2dyb3VuZEltYWdlVyAqIGksIDAsIHRoaXMuYmFja2dyb3VuZEltYWdlVywgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIGZsaXAgPSBmbGlwICogLTE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcgPSBmdW5jdGlvbiAoY2FudmFzOiBhbnkpIHtcclxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGZpc2hpZSBpbiB0aGlzLmZpc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5maXNoW2Zpc2hpZV0uc3dpbShjdHgsIHRoaXMuaW1hZ2VTdHJpcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gZnVuY3Rpb24gKGNhbnZhczogYW55KSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcXVhcml1bSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2FxdWFyaXVtL2FxdWFyaXVtLnRzIiwibGV0IGZpc2hXID0gNTA7XHJcbmxldCBmaXNoSCA9IDUwO1xyXG5sZXQgbWF4TGVuZ3RoID0gNTtcclxuXHJcbmNsYXNzIEZpc2gge1xyXG5cclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGFuZ2xlOiBudW1iZXI7XHJcbiAgICB4QW5nbGU6IG51bWJlcjtcclxuICAgIHlBbmdsZTogbnVtYmVyO1xyXG4gICAgekFuZ2xlOiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB6OiBudW1iZXI7XHJcbiAgICB6RmFyOiBudW1iZXI7XHJcbiAgICB6Q2xvc2U6IG51bWJlcjtcclxuICAgIHNjYWxlOiBudW1iZXI7XHJcbiAgICBmbGlwOiBudW1iZXI7XHJcbiAgICB6RmFyRmFjdG9yOiBudW1iZXI7XHJcbiAgICBjZWxsOiBudW1iZXI7XHJcbiAgICBzcGVjaWVzOiBudW1iZXI7XHJcbiAgICBjZWxsQ291bnQ6IG51bWJlcjtcclxuICAgIGNlbGxSZXZlcnNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSB4LHkgZGlyZWN0aW9uIHRoaXMgZmlzaCBzd2ltc1xyXG4gICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIHggdmFsdWUgb2YgdGhlIGFuZ2xlXHJcbiAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgeSB2YWx1ZSBvZiB0aGUgYW5nbGVcclxuICAgICAgICB0aGlzLnpBbmdsZSA9IDEgKyAtMiAqIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgaWYgdGhlIGZpc2ggaXMgc3dpbW1pbmcgdG93YXJkIHVzIG9yIGF3YXkuIDEgPSB0b3dhcmQgdXM7IC0xID0gYXdheSBmcm9tIHVzXHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMud2lkdGggLSBmaXNoVykgKyBmaXNoVyAvIDIpOyAgICAvL3NldCB0aGUgc3RhcnRpbmcgeCBsb2NhdGlvbiAgXHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuaGVpZ2h0IC0gZmlzaEgpICsgZmlzaEggLyAyKTsgICAvL3NldCB0aGUgc3RhcnRpbmcgeSBsb2NhdGlvbiAgXHJcbiAgICAgICAgdGhpcy56RmFyID0gMTAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgaG93IGZhciBhd2F5IGNhbiBhIGZpc2ggZ29cclxuICAgICAgICB0aGlzLnpGYXJGYWN0b3IgPSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgbWF4IHNpemUgdGhlIGZpc2ggY2FuIGJlLiAxPTEwMCVcclxuICAgICAgICB0aGlzLnpDbG9zZSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCBob3cgbmVhciBhIGZpc2ggY2FuIGNvbWVcclxuICAgICAgICB0aGlzLnogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKHRoaXMuekZhciAtIHRoaXMuekNsb3NlKSkpOyAgICAgICAgICAgICAgLy9zZXQgdGhlIHN0YXJ0aW5nIHogbG9jYXRpb24gXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IC4xOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIHJhdGUgb2Ygc2NhbGluZyBlYWNoIGZyYW1lXHJcbiAgICAgICAgdGhpcy5mbGlwID0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgZmlzaC4gMT1yaWdodDsgLTE9bGVmdFxyXG4gICAgICAgIHRoaXMuY2VsbENvdW50ID0gMTY7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBudW1iZXIgb2YgY2VsbHMgKGNvbHVtbnMpIGluIHRoZSBpbWFnZSBzdHJpcCBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jZWxsQ291bnQgLSAxKSk7ICAgICAgICAgICAgICAgLy9zZXQgdGhlIGZpcnN0IGNlbGwgKGNvbHVtbnMpIG9mIHRoZSBpbWFnZSBzdHJpcCBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGxSZXZlcnNlID0gLTE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB3aGljaCBkaXJlY3Rpb24gd2UgZ28gdGhyb3VnaCB0aGUgaW1hZ2Ugc3RyaXBcclxuICAgICAgICB0aGlzLnNwZWNpZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB3aGljaCBzcGVjaWVzIG9mIGZpc2ggdGhpcyBmaXNoIGlzLiBlYWNoIHNwZWNpZXMgaXMgYSByb3cgaW4gdGhlIGltYWdlIHN0cmlwIFxyXG5cclxuICAgICAgICAvLyBzdG9wIGZpc2ggZnJvbSBzd2ltbWluZyBzdHJhaWdodCB1cCBvciBkb3duXHJcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJICogNCAvIDMgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgKiA1IC8gMyB8fCB0aGlzLmFuZ2xlID4gTWF0aC5QSSAqIDEgLyAzICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJICogMiAvIDMpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgKiAxIC8gMyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZhY2UgdGhlIGZpc2ggdGhlIHJpZ2h0IHdheSBpZiBhbmdsZSBpcyBiZXR3ZWVuIDYgbydjbG9jayBhbmQgMTIgbydjbG9ja1xyXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgLyAyICogMykge1xyXG4gICAgICAgICAgICB0aGlzLmZsaXAgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGRyYXcgdGhlIGZpc2ggZWFjaCBmcmFtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgICAgICAgICAgXHJcbiAgICBzd2ltID0gZnVuY3Rpb24gKGN0eDogYW55LCBpbWFnZVN0cmlwOiBhbnkpIHtcclxuICAgICAgICB2YXIgdmVsb2NpdHkgPSAyMDtcclxuICAgICAgICAvLyBDYWxjdWxhdGUgbmV4dCBwb3NpdGlvbiBvZiBmaXNoXHJcbiAgICAgICAgdmFyIG5leHRYID0gdGhpcy54ICsgdGhpcy54QW5nbGUgKiB2ZWxvY2l0eSAqIC4xO1xyXG4gICAgICAgIHZhciBuZXh0WSA9IHRoaXMueSArIHRoaXMueUFuZ2xlICogdmVsb2NpdHkgKiAuMTtcclxuICAgICAgICB2YXIgbmV4dFogPSB0aGlzLnogKyB0aGlzLnpBbmdsZSAqIC4xICogdmVsb2NpdHkgKiAuMTtcclxuICAgICAgICB2YXIgbmV4dFNjYWxlID0gTWF0aC5hYnMobmV4dFopIC8gKHRoaXMuekZhciAtIHRoaXMuekNsb3NlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiByaWdodCBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WCArIGZpc2hXIC8gMiAqIHRoaXMuc2NhbGUgPiB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gMyBvJ2Nsb2NrIGFuZCA2IG8nY2xvY2tcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmFuZ2xlID49IDAgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgLyAyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gLXRoaXMuZmxpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiBhbmdsZSBpcyBiZXR3ZWVuIDEyIG8nY2xvY2sgYW5kIDMgbydjbG9ja1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgKiAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtICh0aGlzLmFuZ2xlIC0gTWF0aC5QSSAvIDIgKiAzKSAqIDJcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxpcCA9IC10aGlzLmZsaXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZpc2ggaXMgZ29pbmcgdG8gbW92ZSBvZmYgbGVmdCBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WCAtIGZpc2hXIC8gMiAqIHRoaXMuc2NhbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gNiBvJ2Nsb2NrIGFuZCA5IG8nY2xvY2tcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5QSSAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhBbmdsZSA9IE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAtdGhpcy5mbGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gOSBvJ2Nsb2NrIGFuZCAxMiBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJIC8gMiAqIDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKE1hdGguUEkgLyAyICogMyAtIHRoaXMuYW5nbGUpICogMlxyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gLXRoaXMuZmxpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiBib3R0b20gc2lkZSBvZiBzY3JlZW5cclxuICAgICAgICBpZiAobmV4dFkgKyBmaXNoSCAvIDIgKiB0aGlzLnNjYWxlID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgLy8gSWYgYW5nbGUgaXMgYmV0d2VlbiAzIG8nY2xvY2sgYW5kIDkgbydjbG9ja1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuYW5nbGUgPiAwICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiB0b3Agc2lkZSBvZiBzY3JlZW5cclxuICAgICAgICBpZiAobmV4dFkgLSBmaXNoSCAvIDIgKiB0aGlzLnNjYWxlIDwgMCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbmdsZSBpcyBiZXR3ZWVuIDkgbydjbG9jayBhbmQgMyBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGlmICgodGhpcy5hbmdsZSA+IE1hdGguUEkgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgKiAyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAodGhpcy5hbmdsZSAtIE1hdGguUEkpICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBmaXNoIGlzIGdvaW5nIHRvbyBmYXIgKGdldHRpbmcgdG9vIHNtYWxsKVxyXG4gICAgICAgIGlmIChuZXh0WiA8PSB0aGlzLnpDbG9zZSAmJiB0aGlzLnpBbmdsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy56QW5nbGUgPSAtdGhpcy56QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGZpc2ggaXMgZ2V0dGluZyB0byBjbG9zZSAoZ2V0dGluZyB0b28gbGFyZ2UpXHJcbiAgICAgICAgaWYgKCgodGhpcy53aWR0aCAvIGZpc2hXKSAqIDEwKSA8ICgoZmlzaFcgKiBtYXhMZW5ndGgpIC8gdGhpcy53aWR0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy56RmFyRmFjdG9yID0gLjNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKCh0aGlzLndpZHRoIC8gZmlzaFcpICogMikgPCAoKGZpc2hXICogbWF4TGVuZ3RoKSAvIHRoaXMud2lkdGgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuekZhckZhY3RvciA9IC41XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyB0aGlzLnpGYXJGYWN0b3IgPSAxIH1cclxuXHJcbiAgICAgICAgaWYgKG5leHRaID49IHRoaXMuekZhciAqIHRoaXMuekZhckZhY3RvciAmJiB0aGlzLnpBbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56QW5nbGUgPSAtdGhpcy56QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNjYWxlIDwgLjEpIHsgdGhpcy5zY2FsZSA9IC4xIH07IC8vZG9uJ3QgbGV0IGZpc2ggZ2V0IHRvbyB0aW55XHJcblxyXG4gICAgICAgIC8vZHJhdyB0aGUgZmlzaFxyXG4gICAgICAgIC8vbG9jYXRlIHRoZSBmaXNoXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7IC8vIG1ha2UgdGhlIGZpc2ggYmlnZ2VyIG9yIHNtYWxsZXIgZGVwZW5kaW5nIG9uIGhvdyBmYXIgYXdheSBpdCBpcy5cclxuICAgICAgICBjdHgudHJhbnNmb3JtKHRoaXMuZmxpcCwgMCwgMCwgMSwgMCwgMCk7IC8vbWFrZSB0aGUgZmlzaCBmYWNlIHRoZSB3YXkgaGUncyBzd2ltbWluZy5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlU3RyaXAsIGZpc2hXICogdGhpcy5jZWxsLCBmaXNoSCAqIHRoaXMuc3BlY2llcywgZmlzaFcsIGZpc2hILCAtZmlzaFcgLyAyLCAtZmlzaEggLyAyLCBmaXNoVywgZmlzaEgpOyAvL2RyYXcgdGhlIGZpc2hcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXh0U2NhbGUgLy8gaW5jcmVtZW50IHNjYWxlIGZvciBuZXh0IHRpbWUgXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAvL2luY3JlbWVudCB0byBuZXh0IHN0YXRlXHJcbiAgICAgICAgdGhpcy54ID0gbmV4dFg7XHJcbiAgICAgICAgdGhpcy55ID0gbmV4dFk7XHJcbiAgICAgICAgdGhpcy56ID0gbmV4dFo7XHJcbiAgICAgICAgaWYgKHRoaXMuY2VsbCA+PSB0aGlzLmNlbGxDb3VudCAtIDEgfHwgdGhpcy5jZWxsIDw9IDApIHsgdGhpcy5jZWxsUmV2ZXJzZSA9IHRoaXMuY2VsbFJldmVyc2UgKiAtMTsgfSAvL2dvIHRocm91Z2ggZWFjaCBjZWxsIGluIHRoZSBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGwgPSB0aGlzLmNlbGwgKyAxICogdGhpcy5jZWxsUmV2ZXJzZTsgLy9nbyBiYWNrIGRvd24gb25jZSB3ZSBoaXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZpc2ggfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9hcXVhcml1bS9maXNoLnRzIiwiY2xhc3MgRmlyZSB7XHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcclxuICAgIGZpcmU6IGFueVtdO1xyXG4gICAgdGltZTogYW55O1xyXG4gICAgZnBzOiBudW1iZXI7XHJcbiAgICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gICAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBjb2xvcnM6IGFueVtdO1xyXG4gICAgaW1hZ2VEYXRhOiBhbnk7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGFueTtcclxuICAgIGN0eDogYW55O1xyXG4gICAgaW50ZW5zaXR5OiBhbnk7XHJcblxyXG4gICAgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kLCBpbWFnZUlkKSB7XHJcbiAgICAgICAgLy90aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUJhY2tncm91bmQnKTtcclxuICAgICAgICAvL3RoaXMuY3JlYXRlQmFja2dyb3VuZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHggPSBmb3JlZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGZvcmVncm91bmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBmb3JlZ3JvdW5kLmhlaWdodDtcclxuICAgICAgICB0aGlzLmludGVuc2l0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSAzMDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDAuNTtcclxuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5pbWFnZURhdGEuZGF0YTtcclxuICAgICAgICB2YXIgbnVtUGl4ZWxzID0gdGhpcy5kYXRhLmxlbmd0aCAvIDQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gW107XHJcbiAgICAgICAgICAgIGNvbG9yWzBdID0gY29sb3JbMV0gPSBjb2xvclsyXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2ldID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDMyOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaV1bMl0gPSBpIDw8IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMF0gPSBpIDw8IDM7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMl0gPSA2NCAtIChpIDw8IDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzFdID0gaSA8PCAzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzJdID0gaSA8PCAyO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTI4XVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDEyOF1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxMjhdWzJdID0gNjQgKyAoaSA8PCAyKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE2MF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxNjBdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTYwXVsyXSA9IDEyOCArIChpIDw8IDIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTkyXVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE5Ml1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxOTJdWzJdID0gMTkyICsgaTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDIyNF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAyMjRdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMjI0XVsyXSA9IDIyNCArIGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpcmUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1dpZHRoICogdGhpcy5jYW52YXNIZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSBmdW5jdGlvbiAoYmFja2dyb3VuZCwgZm9yZWdyb3VuZCkge1xyXG4gICAgICAgIHZhciBiZ0NvbnRleHQgPSBiYWNrZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgYmdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBiYWNrZ3JvdW5kLndpZHRoLCBiYWNrZ3JvdW5kLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBmb3JlZ3JvdW5kLndpZHRoLCBmb3JlZ3JvdW5kLmhlaWdodCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbWl6ZVRocmVzaG9sZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCArPSBNYXRoLnJhbmRvbSgpICogMC4yIC0gMC4xO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy50aHJlc2hvbGQsIDAuNSksIDAuOCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGJhY2tncm91bmQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgY2FudmFzV2lkdGggPSBiYWNrZ3JvdW5kLndpZHRoO1xyXG4gICAgICAgIHZhciBjYW52YXNIZWlnaHQgPSBiYWNrZ3JvdW5kLmhlaWdodDtcclxuXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWFnZSwgMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVybkJ1cm5CdXJuID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYnVybkJ1cm5CdXJuKTtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIGR0ID0gbm93IC0gdGhpcy50aW1lO1xyXG5cclxuICAgICAgICBpZiAoZHQgPCAoMTAwMCAvIHRoaXMuZnBzKSlcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBza2lwIGEgZnJhbWVcclxuXHJcbiAgICAgICAgdGhpcy50aW1lID0gbm93O1xyXG5cclxuICAgICAgICB2YXIgYm90dG9tTGluZSA9IHRoaXMuY2FudmFzV2lkdGggKiAodGhpcy5jYW52YXNIZWlnaHQgLSAxKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyByYW5kb20gcGl4ZWxzIGF0IHRoZSBib3R0b20gbGluZVxyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHRoaXMudGhyZXNob2xkKVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpcmVbYm90dG9tTGluZSArIHhdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtb3ZlIGZsaXAgdXB3YXJkcywgc3RhcnQgYXQgYm90dG9tXHJcbiAgICAgICAgdmFyIHZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmNhbnZhc0hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpcmVbYm90dG9tTGluZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRoaXMuZmlyZVtib3R0b21MaW5lIC0gdGhpcy5jYW52YXNXaWR0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLz0gMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA9PSB0aGlzLmNhbnZhc1dpZHRoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSAtIHRoaXMuY2FudmFzV2lkdGggKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAvPSAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZmlyZVtib3R0b21MaW5lICsgeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoICsgeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLz0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGJvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoICsgeDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYm90dG9tTGluZSAtPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNraXBSb3dzID0gMjsgLy8gc2tpcCB0aGUgYm90dG9tIDIgcm93c1xyXG5cclxuICAgICAgICAvLyByZW5kZXIgdGhlIGZsYW1lcyB1c2luZyBvdXIgY29sb3IgdGFibGVcclxuICAgICAgICBmb3IgKHZhciB5ID0gc2tpcFJvd3M7IHkgPCB0aGlzLmNhbnZhc0hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB5ICogdGhpcy5jYW52YXNXaWR0aCAqIDQgKyB4ICogNDtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlWyh5IC0gc2tpcFJvd3MpICogdGhpcy5jYW52YXNXaWR0aCArIHhdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNvbWV0aW1lcyBjaGFuZ2UgZmlyZSBpbnRlbnNpdHlcclxuICAgICAgICBpZiAodGhpcy5pbnRlbnNpdHkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9taXplVGhyZXNob2xkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZpcmUgfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZS50cyIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlbGV2aXNpb24gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGF0dHIoKSxcbiAgICAgICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGhhcm1vbm9ncmFtczogbWFueShcIkhhcm1vbm9ncmFtXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuVGVsZXZpc2lvbi5tb2RlbE5hbWUgPSBcIlRlbGV2aXNpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvbW9kZWwudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgeyBMYW1wIH0gZnJvbSAnLi4vZGV2aWNlcy9saWdodGluZy9MYW1wJztcclxuaW1wb3J0IHsgbGFtcFNlbGVjdG9yIH0gZnJvbSAnLi4vZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgTGFtcFZpZXdNb2RlbCB9IGZyb20gXCIuLi9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy92aWV3XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbGFtcHM6IExhbXBWaWV3TW9kZWwgW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBsYW1wczogTGFtcFZpZXdNb2RlbCBbXTtcclxufVxyXG5cclxuY2xhc3MgRmxvb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGFtcHM6IHByb3BzLmxhbXBzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbG9vcnNcIj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNjAlJywgbWFyZ2luTGVmdDogJzIwJScsIGhlaWdodDogJzUwcHgnLCBmbG9hdDogJ2xlZnQnIH19PiB7IHRoaXMucHJvcHMubGFtcHMubWFwKChsYW1wKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgJ2h1ZS0nICsgbGFtcC5wb3NpdGlvbiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFtcCBrZXk9e2xhbXAuaWR9IGxhbXA9e2xhbXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9vci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9vclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFtcHM6IGxhbXBTZWxlY3RvcihzdGF0ZS5sYW1wKVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbnVsbFxyXG4pKEZsb29yKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Zsb29yL0Zsb29yLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRlbGV2aXNpb24gZnJvbSAnLi4vZGV2aWNlcy90ZWxldmlzaW9uL1RlbGV2aXNpb24nO1xuaW1wb3J0IEFtYmlsaWdodCBmcm9tICcuLi9kZXZpY2VzL2FtYmlsaWdodC9BbWJpbGlnaHQnO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIGhlaWdodDogXCIzMDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgZmxvYXQ6IFwibGVmdFwiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblRvcDogXCIzMDBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1iYWNrLnBuZ1wiIGhlaWdodD1cIjEyMHB4XCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcIjEwMHB4XCIsIHJpZ2h0OiBcIjMwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtZnJhbWVcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBtYXJnaW5SaWdodDogXCI3NXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tYXJpbHluLmpwZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIgd2lkdGg9XCIxMjVweFwiIGhlaWdodD1cIjE3MHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjIwJVwiLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIyNzBweFwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiLCB3aWR0aDogXCIyNTBweFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtYmlsaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlbGV2aXNpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXItZnJvbnQucG5nXCIgd2lkdGg9XCI3NXB4XCIgaGVpZ2h0PVwiMjBweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIsIGNsZWFyOiBcImJvdGhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hlbGZcIiBzdHlsZT17eyB3aWR0aDogXCI5MCVcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgYm9yZGVyVG9wOiBcIjVweCBzb2xpZCByZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgcmdiYSgxOTMsIDE1NSwgMTA4LCAxKVwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkICM0NDQzNDNcIiwgYm9yZGVyVG9wOiBcIjJweCBzb2xpZCAjNDQ0MzQzXCIsIHdpZHRoOiBcIjI1JVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBmbG9hdDogXCJsZWZ0XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGJveC1zaGFkb3dcIiBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgZmxvYXQ6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcHM0LnBuZ1wiIHdpZHRoPVwiNzVweFwiIGhlaWdodD1cIjI1cHhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTFweFwiLCBtYXJnaW5MZWZ0OiBcIjdweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYm94LXNoYWRvd1wiIHN0eWxlPXt7IHdpZHRoOiBcIjI1JVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9odHBjLmpwZ1wiIHdpZHRoPVwiNzVweFwiIGhlaWdodD1cIjMwcHhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiN3B4XCIsIG1hcmdpbkxlZnQ6IFwiN3B4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiIHN0eWxlPXt7IHdpZHRoOiBcIjI1JVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBmbG9hdDogXCJsZWZ0XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIsIGNsZWFyOiBcImJvdGhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOlwiMTVweFwiLCBsZWZ0OlwiNTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcGVha2VyLnBuZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjYwcHhcIiBjbGFzc05hbWU9XCJmcmFtZS1zaGFkb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogXCIxNXB4XCIsIHJpZ2h0OiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci5wbmdcIiB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI2MHB4XCIgY2xhc3NOYW1lPVwiZnJhbWUtc2hhZG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246XCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcIjYwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NvZmEucG5nXCIgd2lkdGg9XCIzODBweFwiIGhlaWdodD1cIjE1MHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBtYXJnaW5MZWZ0OiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXItYmFjay1zbWFsbC5wbmdcIiB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCI0MHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjUwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXItYmFjay1zbWFsbC5wbmdcIiB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCI0MHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwJVwiLCBmbG9hdDogXCJyaWdodFwiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgbWFyZ2luVG9wOiBcIjMwMHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcGVha2VyLWJhY2sucG5nXCIgaGVpZ2h0PVwiMTIwcHhcIiB3aWR0aD1cIjIwcHhcIiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IFwiMTAwcHhcIiwgbGVmdDogXCIzMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgbWFyZ2luTGVmdDogXCIxMDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyYW1lLXNoYWRvd1wiIHN0eWxlPXt7IHdpZHRoOiBcIjE5MHB4XCIsIGhlaWdodDogXCI4MHB4XCIsIGJhY2tncm91bmQ6IFwicmdiYSgxOTMsIDE1NSwgMTA4LCAxKVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGhlaWdodDogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgaGVpZ2h0OiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiNTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL1dhbGwudHN4IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIFN0b3JlQ3JlYXRvciwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBBcHBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuICAgICkoY3JlYXRlU3RvcmUpIGFzIFN0b3JlQ3JlYXRvcjtcblxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcblxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBBcHBTdG9yZT4oJy4vc3RvcmUnKTtcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XHJcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3NlcnZpY2VzL2NhbWVyYSc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc2VydmljZXMvdGVsZXZpc2lvbic7XHJcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMnXHJcbmltcG9ydCB7IENhbWVyYUFjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25BY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3RlbGV2aXNpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcblxyXG5jb250YWluZXIuYmluZDxDYW1lcmFTZXJ2aWNlPihTZXJ2aWNlcy5DYW1lcmFTZXJ2aWNlKS50byhDYW1lcmFBY3Rpb25TZXJ2aWNlKTtcclxuY29udGFpbmVyLmJpbmQ8VGVsZXZpc2lvblNlcnZpY2U+KFNlcnZpY2VzLlRlbGV2aXNpb25TZXJ2aWNlKS50byhUZWxldmlzaW9uQWN0aW9uU2VydmljZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9pb2MvY29udGFpbmVyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHRcbiAgICA8Um91dGUgY29tcG9uZW50PXtMYXlvdXR9PlxuICAgICAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50cz17eyBib2R5OiBIb21lIH19IC8+XG4gICAgPC9Sb3V0ZT47XG5cbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vcm91dGVzLnRzeCIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zZXJ2aWNlcy9jYW1lcmEnO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tICcuLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL3ZpZXdtb2RlbCc7XHJcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIENhbWVyYVNlcnZpY2Uge1xyXG5cclxuICAgIGFzeW5jIGdldENhbWVyYVN0YXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPENhbWVyYVZpZXdNb2RlbD4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9nZXRDYW1lcmFzP2lkPScgKyBpZCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHZhciBjYW1lcmEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gPENhbWVyYVZpZXdNb2RlbD57XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBjYW1lcmEuaXNNb3Rpb25EZXRlY3RlZCxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBjYW1lcmEuaXNSZWNvcmRpbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RhcnRSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9zdGFydFJlY29yZGluZycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgcmVjb3JkaW5nJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgc3RvcFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvY2FtZXJhL3N0b3BSZWNvcmRpbmcnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3AgcmVjb3JkaW5nJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy9jYW1lcmEudHMiLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uU2VydmljZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3NlcnZpY2VzL3RlbGV2aXNpb24nO1xyXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlbGV2aXNpb25BY3Rpb25TZXJ2aWNlIGltcGxlbWVudHMgVGVsZXZpc2lvblNlcnZpY2Uge1xyXG5cclxuICAgIGFzeW5jIHNldEZpcmVwbGFjZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvdGVsZXZpc2lvbi9zZXRGaXJlcGxhY2UnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBmaXJlcGxhY2UnKTtcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBzZXRWaWRlbyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvdGVsZXZpc2lvbi9zZXRWaWRlbycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IHZpZGVvJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdGVsZXZpc2lvbi50cyIsImltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbFwiO1xuaW1wb3J0IHsgVGVsZXZpc2lvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvbW9kZWxcIjtcbmltcG9ydCB7IEFtYmlsaWdodCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L21vZGVscy9tb2RlbFwiO1xuaW1wb3J0IHsgTGFtcCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQgKiBhcyBEaXNwbGF5ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc3RhdGUvZGlzcGxheWVyXCI7XG5pbXBvcnQgKiBhcyBUZWxldmlzaW9uUmVkdWNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc3RhdGVzL3RlbGV2aXNpb25cIjtcbmltcG9ydCAqIGFzIEFtYmlsaWdodFJlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvcmVkdWNlclwiO1xuaW1wb3J0ICogYXMgTGFtcFJlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9yZWR1Y2VyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XG4gICAgbmF2bWVudToge30sXG4gICAgZGlzcGxheTogRGlzcGxheSxcbiAgICB0ZWxldmlzaW9uOiBUZWxldmlzaW9uLFxuICAgIGFtYmlsaWdodDogQW1iaWxpZ2h0LFxuICAgIGxhbXA6IExhbXBcbn1cblxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XG4gICAgZGlzcGxheTogRGlzcGxheWVyLmRlZmF1bHQsXG4gICAgdGVsZXZpc2lvbjogVGVsZXZpc2lvblJlZHVjZXIuZGVmYXVsdCxcbiAgICBhbWJpbGlnaHQ6IEFtYmlsaWdodFJlZHVjZXIuZGVmYXVsdCxcbiAgICBsYW1wOiBMYW1wUmVkdWNlci5kZWZhdWx0XG59O1xuXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3N0b3JlL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgaGVpZ2h0OiBzdHJpbmdcbn1cblxudmFyIGdldERpbWVuc2lvbnMgPSAoKSA9PiAoeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUwICsgJ3B4JyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgaGVpZ2h0OiAnMTAwdmgnIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0RGltZW5zaW9ucygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHsgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB9IH0pO1xuICAgICAgICAvL3JldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvZnVsbHNjcmVlbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uTW90aW9uLCBzcHJpbmcgfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuXG5jb25zdCB3aWxsRW50ZXIgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDAuOTdcbn0pO1xuXG5jb25zdCB3aWxsTGVhdmUgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICBzY2FsZTogc3ByaW5nKDEuMDApXG59KTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiBzcHJpbmcoMSksXG4gICAgc2NhbGU6IHNwcmluZygxKVxufSk7XG5cbmNvbnN0IFJvdXRlVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuOiBjaGlsZCwgcGF0aG5hbWUgfSkgPT4gKFxuICAgIDxUcmFuc2l0aW9uTW90aW9uXG4gICAgICAgIHN0eWxlcz17W3tcbiAgICAgICAgICAgIGtleTogcGF0aG5hbWUsXG4gICAgICAgICAgICBzdHlsZTogZ2V0U3R5bGVzKCksXG4gICAgICAgICAgICBkYXRhOiB7IGNoaWxkIH1cbiAgICAgICAgfV19XG4gICAgICAgIHdpbGxFbnRlcj17d2lsbEVudGVyfVxuICAgICAgICB3aWxsTGVhdmU9e3dpbGxMZWF2ZX1cbiAgICA+XG4gICAgICAgIHsoaW50ZXJwb2xhdGVkKSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aW50ZXJwb2xhdGVkLm1hcCgoeyBrZXksIHN0eWxlLCBkYXRhIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7a2V5fS10cmFuc2l0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMud3JhcHBlciwgeyBvcGFjaXR5OiBzdHlsZS5vcGFjaXR5LCB0cmFuc2Zvcm06IGBzY2FsZSgke3N0eWxlLnNjYWxlfSlgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9UcmFuc2l0aW9uTW90aW9uID5cbik7XG5cbnZhciBzdHlsZXMgPSB7XG4gICAgd3JhcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlVHJhbnNpdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCw3N3UvUEhOMlp5QjNhV1IwYUQwaU9XMXRJaUJvWldsbmFIUTlJamx0YlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TUNBeE1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbVZ5YzJsdmJqMGlNUzR5SWlCaVlYTmxVSEp2Wm1sc1pUMGlkR2x1ZVNJK0NpQWdQR1JsYzJNK1VsSlBSQ0JNYjJkdlBDOWtaWE5qUGdvZ0lEd2hMUzBnVTJodmR5QnZkWFJzYVc1bElHOW1JR05oYm5aaGN5QjFjMmx1WnlBbmNtVmpkQ2NnWld4bGJXVnVkQ0F0TFQ0S0lDQThZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnWm1sc2JEMGlkMmhwZEdVaUlITjBjbTlyWlQwaWNtVmtJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXlJaUFnTHo0S1BDOXpkbWMrXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0FwcC9pbWFnZXMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzcG5ldC1wcmVyZW5kZXJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW90aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtbW90aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==