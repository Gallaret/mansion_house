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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(26);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(30);


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return frontSpeakerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sideSpeakerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return backSpeakerSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(31);


var orm = new __WEBPACK_IMPORTED_MODULE_0_redux_orm__["ORM"]();
orm.register(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* Hifi */], __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Speaker */], __WEBPACK_IMPORTED_MODULE_1__model__["c" /* Harmonogram */]);
var frontSpeakerSelector = orm.createSelector(function (session) {
    var sections = session.Speaker.filter(function (speaker) {
        return speaker.type === 'Front';
    });
    return sections.toRefArray().map(function (speaker) {
        return {
            id: speaker.id,
            isActive: speaker.isActive,
            type: speaker.type,
            name: speaker.name,
            position: speaker.position
        };
    });
});
var sideSpeakerSelector = orm.createSelector(function (session) {
    var sections = session.Speaker.filter(function (speaker) {
        return speaker.type === 'Side';
    });
    return sections.toRefArray().map(function (speaker) {
        return {
            id: speaker.id,
            isActive: speaker.isActive,
            type: speaker.type,
            name: speaker.name,
            position: speaker.position
        };
    });
});
var backSpeakerSelector = orm.createSelector(function (session) {
    var sections = session.Speaker.filter(function (speaker) {
        return speaker.type === 'Back';
    });
    return sections.toRefArray().map(function (speaker) {
        return {
            id: speaker.id,
            isActive: speaker.isActive,
            type: speaker.type,
            name: speaker.name,
            position: speaker.position
        };
    });
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_SPEAKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_HIFI; });
var ADD_SPEAKER = 'AddSpeakerAction';
var ADD_HIFI = 'AddHifiAction';

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lampSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(37);


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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeTelevisionSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(43);


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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TELEVISION; });
/* unused harmony export actionCreators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(16);
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lazyInject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__);



var _getDecorators = __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default()(__WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__["a" /* container */]);

var lazyInject = _getDecorators.lazyInject;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("domain-task");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_routes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__composition_configureStore__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_camera_state_displayer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__composition_components_devices_television_states_television__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__composition_components_devices_ambilight_state_actions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__composition_components_devices_lighting_state_actions__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__ = __webpack_require__(14);












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
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__["a" /* ADD_HIFI */],
                payload: {
                    id: 1,
                    name: 'my-hifi'
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__["b" /* ADD_SPEAKER */],
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Front-Left',
                        id: 1,
                        type: 'Front',
                        position: 'left',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__["b" /* ADD_SPEAKER */],
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Front-Right',
                        id: 2,
                        type: 'Front',
                        position: 'right',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__["b" /* ADD_SPEAKER */],
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Side-Left',
                        id: 3,
                        type: 'Side',
                        position: 'left',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__["b" /* ADD_SPEAKER */],
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Side-Right',
                        id: 4,
                        type: 'Side',
                        position: 'right',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__["b" /* ADD_SPEAKER */],
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Back-Left',
                        id: 5,
                        type: 'Back',
                        position: 'left',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__["b" /* ADD_SPEAKER */],
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Back-Right',
                        id: 6,
                        type: 'Back',
                        position: 'right',
                        isActive: true
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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_fullscreen__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_camera_Displayer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__floor_Floor__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wall_Wall__ = __webpack_require__(46);
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__ = __webpack_require__(54);
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var logo = __webpack_require__(55);

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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__ = __webpack_require__(18);
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Camera__ = __webpack_require__(28);
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
/* 30 */
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Speaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Harmonogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Hifi = function (_Model) {
    _inherits(Hifi, _Model);

    function Hifi() {
        _classCallCheck(this, Hifi);

        return _possibleConstructorReturn(this, (Hifi.__proto__ || Object.getPrototypeOf(Hifi)).apply(this, arguments));
    }

    _createClass(Hifi, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                speakers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Speaker"),
                harmonograms: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Harmonogram")
            };
        }
    }]);

    return Hifi;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Hifi.modelName = "Hifi";
var Speaker = function (_Model2) {
    _inherits(Speaker, _Model2);

    function Speaker() {
        _classCallCheck(this, Speaker);

        return _possibleConstructorReturn(this, (Speaker.__proto__ || Object.getPrototypeOf(Speaker)).apply(this, arguments));
    }

    _createClass(Speaker, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                type: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isActive: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])()
            };
        }
    }]);

    return Speaker;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Speaker.modelName = "Speaker";
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Back; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Back = function (_React$Component) {
    _inherits(Back, _React$Component);

    function Back() {
        _classCallCheck(this, Back);

        return _possibleConstructorReturn(this, (Back.__proto__ || Object.getPrototypeOf(Back)).apply(this, arguments));
    }

    _createClass(Back, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { style: { position: 'relative' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker-back-small.png', width: '30px', height: '40px', style: { position: 'absolute', left: '-15px', top: '-20px' } })
            );
        }
    }]);

    return Back;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
if (false) {
    module.hot.accept();
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Front; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Front = function (_React$Component) {
    _inherits(Front, _React$Component);

    function Front() {
        _classCallCheck(this, Front);

        return _possibleConstructorReturn(this, (Front.__proto__ || Object.getPrototypeOf(Front)).apply(this, arguments));
    }

    _createClass(Front, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { style: { position: 'relative' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/speaker.png', width: '40px', height: '60px', className: 'frame-shadow', style: { position: 'absolute', top: '-30px', left: '-20px' } })
            );
        }
    }]);

    return Front;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
if (false) {
    module.hot.accept();
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Side; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Side = function (_React$Component) {
    _inherits(Side, _React$Component);

    function Side() {
        _classCallCheck(this, Side);

        return _possibleConstructorReturn(this, (Side.__proto__ || Object.getPrototypeOf(Side)).apply(this, arguments));
    }

    _createClass(Side, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                "div",
                { style: { position: "relative" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "/images/speaker-back.png", height: "120px", width: "20px", style: { position: "absolute", top: "-60px", left: "-10px" } })
            );
        }
    }]);

    return Side;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
if (false) {
    module.hot.accept();
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(14);



var reducer = function reducer(session, action) {
    var Hifi = session.Hifi,
        Speaker = session.Speaker;

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ADD_HIFI */]:
            Hifi.create(action.payload);
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* ADD_SPEAKER */]:
            Speaker.create(action.payload.speaker);
            var speaker = action.payload.speaker;
            Hifi.withId(action.payload.hifi).speakers.add(Speaker.withId(speaker.id));
            break;
    }
    return session.state;
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_orm__["createReducer"])(__WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* orm */], reducer));

/***/ }),
/* 36 */
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
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/hue.png', height: '150px', width: '40px', style: { position: 'absolute', top: '-100px', left: '-20px', zIndex: 0 } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'lamp', style: { background: this.state.color, position: 'absolute', top: '-100px', left: '-20px' } })
            );
        }
    }]);

    return Lamp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(15);
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_ioc_decorators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composition_services_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_components_actions_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_schema__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_television_effects_fireplace_fire__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_aquarium_aquarium__ = __webpack_require__(40);
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aquarium; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fish__ = __webpack_require__(41);
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_lighting_Lamp__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_lighting_models_schema__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devices_hifi_speakers_Front__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devices_hifi_speakers_Side__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devices_hifi_speakers_Back__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__devices_hifi_models_schema__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Sofa__ = __webpack_require__(45);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Floor = function (_React$Component) {
    _inherits(Floor, _React$Component);

    function Floor(props) {
        _classCallCheck(this, Floor);

        var _this = _possibleConstructorReturn(this, (Floor.__proto__ || Object.getPrototypeOf(Floor)).call(this, props));

        _this.state = {
            lamps: props.lamps,
            frontSpeakers: props.frontSpeakers,
            sideSpeakers: props.sideSpeakers,
            backSpeakers: props.backSpeakers
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
                    { style: { width: '60%', marginLeft: '20%', float: 'left', position: 'relative' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'floor-container', style: { position: 'absolute', top: '0' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'floor' })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { height: '50px' } },
                        ' ',
                        this.props.frontSpeakers.map(function (speaker) {
                            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'speaker-front-' + speaker.position },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__devices_hifi_speakers_Front__["a" /* Front */], { key: speaker.id })
                            );
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { height: '50px' } },
                        ' ',
                        this.props.lamps.map(function (lamp) {
                            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'hue-' + lamp.position },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__devices_lighting_Lamp__["a" /* Lamp */], { key: lamp.id, lamp: lamp })
                            );
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { position: 'absolute', top: '150px', width: '100%' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__Sofa__["a" /* Sofa */], null)
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { position: 'absolute', top: '130px', width: '100%' } },
                        ' ',
                        this.props.sideSpeakers.map(function (speaker) {
                            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'speaker-side-' + speaker.position },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__devices_hifi_speakers_Side__["a" /* Side */], { key: speaker.id })
                            );
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { position: 'absolute', top: '220px', width: '100%' } },
                        ' ',
                        this.props.backSpeakers.map(function (speaker) {
                            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { className: 'speaker-back-' + speaker.position },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__devices_hifi_speakers_Back__["a" /* Back */], { key: speaker.id })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Floor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        lamps: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__devices_lighting_models_schema__["b" /* lampSelector */])(state.lamp),
        frontSpeakers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__devices_hifi_models_schema__["b" /* frontSpeakerSelector */])(state.hifi),
        sideSpeakers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__devices_hifi_models_schema__["c" /* sideSpeakerSelector */])(state.hifi),
        backSpeakers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__devices_hifi_models_schema__["d" /* backSpeakerSelector */])(state.hifi)
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, null)(Floor));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sofa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Sofa = function (_React$Component) {
    _inherits(Sofa, _React$Component);

    function Sofa() {
        _classCallCheck(this, Sofa);

        return _possibleConstructorReturn(this, (Sofa.__proto__ || Object.getPrototypeOf(Sofa)).apply(this, arguments));
    }

    _createClass(Sofa, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { style: { height: "50px", position: 'relative', width: '380px', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: '/images/sofa.png', width: '380px', height: '150px', style: { position: 'absolute', top: '-100px', left: '0' } })
            );
        }
    }]);

    return Sofa;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
if (false) {
    module.hot.accept();
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devices_television_Television__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_ambilight_Ambilight__ = __webpack_require__(25);
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
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: "40%", float: "right", height: "300px" } },
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(52);




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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composition_services_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_services_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_television__ = __webpack_require__(51);




var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].CameraService).to(__WEBPACK_IMPORTED_MODULE_2__composition_services_camera__["a" /* CameraActionService */]);
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].TelevisionService).to(__WEBPACK_IMPORTED_MODULE_3__composition_services_television__["a" /* TelevisionActionService */]);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(22);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } })
));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(19);
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelevisionActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(19);
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_devices_ambilight_state_reducer__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_devices_lighting_state_reducer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_devices_hifi_state_reducer__ = __webpack_require__(35);






var reducers = {
    display: __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__["c" /* default */],
    television: __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__["b" /* default */],
    ambilight: __WEBPACK_IMPORTED_MODULE_2__components_devices_ambilight_state_reducer__["a" /* default */],
    lamp: __WEBPACK_IMPORTED_MODULE_3__components_devices_lighting_state_reducer__["a" /* default */],
    hifi: __WEBPACK_IMPORTED_MODULE_4__components_devices_hifi_state_reducer__["a" /* default */]
};

/***/ }),
/* 53 */
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(60);
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
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB3aWR0aD0iOW1tIiBoZWlnaHQ9IjltbSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSI+CiAgPGRlc2M+UlJPRCBMb2dvPC9kZXNjPgogIDwhLS0gU2hvdyBvdXRsaW5lIG9mIGNhbnZhcyB1c2luZyAncmVjdCcgZWxlbWVudCAtLT4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEyIiAgLz4KPC9zdmc+"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("inversify-inject-decorators");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
module.exports = __webpack_require__(20);


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2UwOTExMjEyMWQwZWVmNWZhMDkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1vcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRzbGliXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9vcm0udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL21vZGVscy9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG9tYWluLXRhc2tcIiIsIndlYnBhY2s6Ly8vLi9BcHAvYm9vdC1zZXJ2ZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9OYXZNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9BbWJpbGlnaHQudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L21vZGVscy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0NhbWVyYS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zcGVha2Vycy9CYWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvRnJvbnQudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zcGVha2Vycy9TaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL0xhbXAudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vVGVsZXZpc2lvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vYXF1YXJpdW0udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vZmlzaC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Zsb29yL0Zsb29yLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9mbG9vci9Tb2ZhLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL1dhbGwudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvY2FtZXJhLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90ZWxldmlzaW9uLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL2Z1bGxzY3JlZW4udHN4Iiwid2VicGFjazovLy8uL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2ltYWdlcy9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLGtDOzs7Ozs7QUNBQSxzQzs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7QUNFTyxJQUFnQixhQUFxQjtBQVVyQyxJQUFTLE1BQWUsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BJO0FBQ087QUFFbkMsSUFBb0IsaUJBQXlCO0FBQzdDLElBQWdCLGFBQXFCO0FBQ3JDLElBQW1CLGdCQUF3QjtBQXNCNUMsSUFBcUI7QUFDWCx3Q0FBMEI7QUFBeEIseUJBQXlFLFVBQVU7QUFBekI7QUFDcEU7Ozs7O0FBQWEsMENBQU0sd0RBQVEsUUFBVyxX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Q0FyQyxnRDs7Ozs7O0FDQUEsd0Q7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLG1EOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3d3cm9vdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2UwOTExMjEyMWQwZWVmNWZhMDkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtb3JtXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtb3JtXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbGliXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidHNsaWJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBbWJpbGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9FRkZFQ1QgPSAnU2V0RWZmZWN0QWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0RWZmZWN0QWN0aW9uIHtcclxuICAgIHR5cGU6ICdTZXRFZmZlY3RBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcGF0dGVybjogc3RyaW5nXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREID0gJ0FkZEFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IEFtYmlsaWdodDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9hY3Rpb25zLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbC92aWV3bW9kZWwnO1xyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbC9vcm0nO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRElTUExBWSA9ICdDcmVhdGVEaXNwbGF5QWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQU1FUkEgPSAnQWRkQ2FtZXJhQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DQU1FUkEgPSAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRGlzcGxheUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQ3JlYXRlRGlzcGxheUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkQ2FtZXJhQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRDYW1lcmFBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGRpc3BsYXk6IG51bWJlcixcclxuICAgICAgICBjYW1lcmE6IENhbWVyYVZpZXdNb2RlbFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUNhbWVyYUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IENhbWVyYVZpZXdNb2RlbDtcclxufVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IENyZWF0ZURpc3BsYXlBY3Rpb24gfCBBZGRDYW1lcmFBY3Rpb24gfCBVcGRhdGVDYW1lcmFBY3Rpb25cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHVwZGF0ZUNhbWVyYTogKGNhbWVyYTogQ2FtZXJhVmlld01vZGVsKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG9ybS5zZXNzaW9uKGdldFN0YXRlKCkuZGlzcGxheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuXG4gICAgICAgIHZhciBzdGF0ZSA9IHNlc3Npb24uQ2FtZXJhLndpdGhJZChjYW1lcmEuaWQpO1xuXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IDxDYW1lcmFWaWV3TW9kZWw+e1xuICAgICAgICAgICAgbmFtZTogc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXG4gICAgICAgICAgICBpZDogc3RhdGUuaWQsXG4gICAgICAgICAgICBpc1JlY29yZGluZzogY2FtZXJhLmlzUmVjb3JkaW5nLFxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogY2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWRcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9DQU1FUkEsIHBheWxvYWQ6IG5ld1N0YXRlIH0pO1xuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc2Vzc2lvbiwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBEaXNwbGF5LCBDYW1lcmEgfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ1JFQVRFX0RJU1BMQVk6XHJcbiAgICAgICAgICAgIERpc3BsYXkuY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ0FNRVJBOlxyXG4gICAgICAgICAgICBDYW1lcmEuY3JlYXRlKGFjdGlvbi5wYXlsb2FkLmNhbWVyYSk7XHJcbiAgICAgICAgICAgIERpc3BsYXkud2l0aElkKGFjdGlvbi5wYXlsb2FkLmRpc3BsYXkpXHJcbiAgICAgICAgICAgICAgICAuY2FtZXJhcy5hZGQoQ2FtZXJhLndpdGhJZChhY3Rpb24ucGF5bG9hZC5jYW1lcmEuaWQpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVUERBVEVfQ0FNRVJBOlxyXG4gICAgICAgICAgICBDYW1lcmEud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiA8RGlzcGxheT5zZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllci50cyIsImltcG9ydCB7IExhbXAgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9DT0xPUiA9ICdTZXRDb2xvckFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldENvbG9yQWN0aW9uIHtcclxuICAgIHR5cGU6ICdTZXRDb2xvckFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBjb2xvcjogc3RyaW5nXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xBTVAgPSAnQWRkTGFtcEFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZExhbXBBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZExhbXBBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogTGFtcDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL3N0YXRlL2FjdGlvbnMudHMiLCJleHBvcnQgY29uc3QgU2VydmljZXMgPSB7XHJcbiAgICBDYW1lcmFTZXJ2aWNlOiBTeW1ib2woXCJDYW1lcmFTZXJ2aWNlXCIpLFxyXG4gICAgVGVsZXZpc2lvblNlcnZpY2U6IFN5bWJvbChcIlRlbGV2aXNpb25TZXJ2aWNlXCIpXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW52ZXJzaWZ5XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vY29tcG9zaXRpb24vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBBbWJpbGlnaHQgZnJvbSAnLi4vZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucydcclxuaW1wb3J0ICogYXMgTGFtcCBmcm9tICcuLi9kZXZpY2VzL2xpZ2h0aW5nL3N0YXRlL2FjdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRFTEVWSVNJT05fRklSRVBMQUNFID0gJ1RlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uIHtcclxuICAgIHR5cGU6ICdUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHZhbHVlOiBib29sZWFuXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVEVMRVZJU0lPTl9BUVVBUklVTSA9ICdUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24ge1xyXG4gICAgdHlwZTogJ1RlbGV2aXNpb25BcXVhcml1bUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICB2YWx1ZTogYm9vbGVhblxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uIHwgVGVsZXZpc2lvbkFxdWFyaXVtQWN0aW9uIHwgQW1iaWxpZ2h0LlNldEVmZmVjdEFjdGlvbiB8IExhbXAuU2V0Q29sb3JBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgQXF1YXJpdW1CYWNrZ3JvdW5kID0gJ3VybChpbWFnZXMvYmFja2dyb3VuZC1mbGlwMi5qcGcpJztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHNldEZpcmVwbGFjZTogKGlkOiBudW1iZXIsIHZhbHVlOiBib29sZWFuKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBURUxFVklTSU9OX0ZJUkVQTEFDRSwgcGF5bG9hZDogeyBpZDogaWQsIHZhbHVlOiB2YWx1ZX0gfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogTGFtcC5TRVRfQ09MT1IsIHBheWxvYWQ6IHsgaWQ6IDEsIGNvbG9yOiB2YWx1ZSA/ICdvcmFuZ2UnIDogJycgfSB9KTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBMYW1wLlNFVF9DT0xPUiwgcGF5bG9hZDogeyBpZDogMiwgY29sb3I6IHZhbHVlID8gJ29yYW5nZScgOiAnJyB9IH0pO1xuICAgIH0sXHJcblxyXG4gICAgc2V0QXF1YXJpdW06IChpZDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogVEVMRVZJU0lPTl9BUVVBUklVTSwgcGF5bG9hZDogeyBpZDogaWQsIHZhbHVlOiB2YWx1ZSB9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IEFtYmlsaWdodC5TRVRfRUZGRUNULCBwYXlsb2FkOiB7IGlkOiBpZCwgcGF0dGVybjogdmFsdWUgPyBBcXVhcml1bUJhY2tncm91bmQgOiAnJyB9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IExhbXAuU0VUX0NPTE9SLCBwYXlsb2FkOiB7IGlkOiAxLCBjb2xvcjogdmFsdWUgPyAnZG9kZ2VyYmx1ZScgOiAnJyB9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IExhbXAuU0VUX0NPTE9SLCBwYXlsb2FkOiB7IGlkOiAyLCBjb2xvcjogdmFsdWUgPyAnZG9kZ2VyYmx1ZScgOiAnJyB9IH0pO1xuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMudHMiLCJpbXBvcnQgeyBPUk0gfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgeyBBbWJpbGlnaHQsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IEFtYmlsaWdodFZpZXdNb2RlbCB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoQW1iaWxpZ2h0LCBIYXJtb25vZ3JhbSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlQW1iaWxpZ2h0U2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcblxyXG4gICAgdmFyIGFtYmlsaWdodCA9IHNlc3Npb24uQW1iaWxpZ2h0LmZpcnN0KCk7XHJcblxyXG4gICAgcmV0dXJuIDxBbWJpbGlnaHRWaWV3TW9kZWw+e1xyXG4gICAgICAgIGlkOiBhbWJpbGlnaHQuaWQsXHJcbiAgICAgICAgaXNBY3RpdmU6IGFtYmlsaWdodC5pc0FjdGl2ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhbWJpbGlnaHQuYmFja2dyb3VuZCxcclxuICAgICAgICBuYW1lOiBhbWJpbGlnaHQubmFtZVxyXG4gICAgfTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL3NjaGVtYS50cyIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IERpc3BsYXksIENhbWVyYSwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi92aWV3bW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKERpc3BsYXksIENhbWVyYSwgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZUNhbWVyYXNTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLkRpc3BsYXlDYW1lcmFzLmFsbCgpLnRvUmVmQXJyYXkoKS5tYXAoY2FtZXJhID0+IHtcclxuICAgICAgICBjb25zdCBvYmogPSBzZXNzaW9uLkNhbWVyYS53aXRoSWQoY2FtZXJhLnRvQ2FtZXJhSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhbWVyYVZpZXdNb2RlbD4ge1xyXG4gICAgICAgICAgICBpZDogb2JqLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBvYmoubmFtZSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IG9iai5pc1JlY29yZGluZyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdodHRwOi8vMTkyLjE2OC4wLjIzNC9pbWFnZS9qcGVnLmNnaScsXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBvYmouaXNNb3Rpb25EZXRlY3RlZFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvb3JtLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgSGlmaSwgU3BlYWtlciwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgU3BlYWtlclZpZXdNb2RlbCB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoSGlmaSwgU3BlYWtlciwgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb250U3BlYWtlclNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBzZXNzaW9uLlNwZWFrZXIuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7IHJldHVybiBzcGVha2VyLnR5cGUgPT09ICdGcm9udCcgfSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbnMudG9SZWZBcnJheSgpLm1hcChzcGVha2VyID0+IHtcclxuICAgICAgICByZXR1cm4gPFNwZWFrZXJWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICBpZDogc3BlYWtlci5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHNwZWFrZXIuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHR5cGU6IHNwZWFrZXIudHlwZSxcclxuICAgICAgICAgICAgbmFtZTogc3BlYWtlci5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3BlYWtlci5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZVNwZWFrZXJTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gc2Vzc2lvbi5TcGVha2VyLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikgeyByZXR1cm4gc3BlYWtlci50eXBlID09PSAnU2lkZScgfSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbnMudG9SZWZBcnJheSgpLm1hcChzcGVha2VyID0+IHtcclxuICAgICAgICByZXR1cm4gPFNwZWFrZXJWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICBpZDogc3BlYWtlci5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHNwZWFrZXIuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHR5cGU6IHNwZWFrZXIudHlwZSxcclxuICAgICAgICAgICAgbmFtZTogc3BlYWtlci5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3BlYWtlci5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYmFja1NwZWFrZXJTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gc2Vzc2lvbi5TcGVha2VyLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikgeyByZXR1cm4gc3BlYWtlci50eXBlID09PSAnQmFjaycgfSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbnMudG9SZWZBcnJheSgpLm1hcChzcGVha2VyID0+IHtcclxuICAgICAgICByZXR1cm4gPFNwZWFrZXJWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICBpZDogc3BlYWtlci5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHNwZWFrZXIuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHR5cGU6IHNwZWFrZXIudHlwZSxcclxuICAgICAgICAgICAgbmFtZTogc3BlYWtlci5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3BlYWtlci5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL21vZGVscy9zY2hlbWEudHMiLCJpbXBvcnQgeyBIaWZpLCBTcGVha2VyIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgU3BlYWtlclZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscy92aWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfU1BFQUtFUiA9ICdBZGRTcGVha2VyQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkU3BlYWtlckFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkU3BlYWtlckFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaGlmaTogbnVtYmVyLFxyXG4gICAgICAgIHNwZWFrZXI6IFNwZWFrZXJcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfSElGSSA9ICdBZGRIaWZpQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkSGlmaUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkSGlmaUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBIaWZpO1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3RhdGUvYWN0aW9ucy50cyIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IExhbXAsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IExhbXBWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKExhbXAsIEhhcm1vbm9ncmFtKTtcclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW1wU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gc2Vzc2lvbi5MYW1wLmFsbCgpLnRvUmVmQXJyYXkoKS5tYXAobGFtcCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxMYW1wVmlld01vZGVsPntcclxuICAgICAgICAgICAgaWQ6IGxhbXAuaWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBsYW1wLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBjb2xvcjogbGFtcC5jb2xvcixcclxuICAgICAgICAgICAgbmFtZTogbGFtcC5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogbGFtcC5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvbiwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblZpZXdNb2RlbCB9IGZyb20gJy4vdmlld21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBvcm0gPSBuZXcgT1JNKCk7XHJcbm9ybS5yZWdpc3RlcihUZWxldmlzaW9uLCBIYXJtb25vZ3JhbSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlVGVsZXZpc2lvblNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG5cclxuICAgIHZhciB0ZWxldmlzaW9uID0gc2Vzc2lvbi5UZWxldmlzaW9uLmZpcnN0KCk7XHJcblxyXG4gICAgcmV0dXJuIDxUZWxldmlzaW9uVmlld01vZGVsPntcclxuICAgICAgICBpZDogdGVsZXZpc2lvbi5pZCxcclxuICAgICAgICBpc0FjdGl2ZTogdGVsZXZpc2lvbi5pc0FjdGl2ZSxcclxuICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IHRlbGV2aXNpb24uaXNGaXJlcGxhY2VSdW5uaW5nLFxyXG4gICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiB0ZWxldmlzaW9uLmlzQXF1YXJpdW1SdW5uaW5nLFxyXG4gICAgICAgIG5hbWU6IHRlbGV2aXNpb24ubmFtZVxyXG4gICAgfTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL21vZGVscy9zY2hlbWEudHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb24gfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IFRFTEVWSVNJT05fRklSRVBMQUNFLCBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uLCBURUxFVklTSU9OX0FRVUFSSVVNLCBUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2VmZmVjdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9URUxFVklTSU9OID0gJ0FkZFRlbGV2aXNpb25BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRUZWxldmlzaW9uQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRUZWxldmlzaW9uQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IFRlbGV2aXNpb247XHJcbn1cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uIHwgQWRkVGVsZXZpc2lvbkFjdGlvbiB8IFRlbGV2aXNpb25BcXVhcml1bUFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IFRlbGV2aXNpb24gfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVEVMRVZJU0lPTl9GSVJFUExBQ0U6XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24ud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGFjdGlvbi5wYXlsb2FkLnZhbHVlIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRFTEVWSVNJT05fQVFVQVJJVU06XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcXVhcml1bSBydW5uaW5nJyk7XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24ud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBpc0FxdWFyaXVtUnVubmluZzogYWN0aW9uLnBheWxvYWQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1RFTEVWSVNJT046XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24uY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3N0YXRlcy90ZWxldmlzaW9uLnRzIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lcidcclxuaW1wb3J0IGdldERlY29yYXRvcnMgZnJvbSBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgbGF6eUluamVjdCB9ID0gZ2V0RGVjb3JhdG9ycyhjb250YWluZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9pb2MvZGVjb3JhdG9ycy50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbWFpbi10YXNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZG9tYWluLXRhc2tcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9jb21wb3NpdGlvbi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IENhbWVyYSwgRGlzcGxheSB9IGZyb20gJy4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEFERF9DQU1FUkEsIENSRUFURV9ESVNQTEFZIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllcic7XHJcbmltcG9ydCB7IEFERF9URUxFVklTSU9OIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvbic7XHJcbmltcG9ydCAqIGFzIEFtYmlsaWdodCBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIExhbXAgZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIEhpZmkgZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gTWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QgYWdhaW5zdCB0aGUgbGlzdCBvZiBjbGllbnQtc2lkZSByb3V0ZXNcclxuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICcke3BhcmFtcy51cmx9JyBkb2Vzbid0IG1hdGNoIGFueSByb3V0ZSBjb25maWd1cmVkIGluIHJlYWN0LXJvdXRlci5gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQ1JFQVRFX0RJU1BMQVksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfQ0FNRVJBLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTYWxvbiBGcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX1RFTEVWSVNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzb255IGJyYXZpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyZXBsYWNlUnVubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBcXVhcml1bVJ1bm5pbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBbWJpbGlnaHQuQURELFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaHlwZXJpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndXJsKGltYWdlcy9hbWJpZW50LmpwZyknLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMYW1wLkFERF9MQU1QLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaHVlLWxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmNjUwZTgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExhbXAuQUREX0xBTVAsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJodWUtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMyM2YzNDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBIaWZpLkFERF9ISUZJLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdteS1oaWZpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhpZmkuQUREX1NQRUFLRVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlmaTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGcm9udC1MZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Zyb250LVJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhpZmkuQUREX1NQRUFLRVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlmaTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTaWRlLUxlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NpZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhpZmkuQUREX1NQRUFLRVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlmaTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTaWRlLVJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTaWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JhY2stTGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQmFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JhY2stUmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0JhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gUGVyZm9ybSBhbiBpbml0aWFsIHJlbmRlciB0aGF0IHdpbGwgY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuICAgICAgICAgICAgLy8gT25jZSB0aGUgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9ib290LXNlcnZlci50c3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFNjcm9sbCBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IFNjcm9sbEVmZmVjdCBmcm9tICcuLi8uLi9saWIvc2Nyb2xsLWVmZmVjdCc7XG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi8uLi9saWIvZnVsbHNjcmVlbic7XG5pbXBvcnQgQ2FtZXJhTGlzdCBmcm9tICcuL2RldmljZXMvY2FtZXJhL0Rpc3BsYXllcic7XG5pbXBvcnQgRmxvb3IgZnJvbSAnLi9mbG9vci9GbG9vcic7XG5pbXBvcnQgV2FsbCBmcm9tICcuL3dhbGwvV2FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8RnVsbHNjcmVlbj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJoZXJvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPENhbWVyYUxpc3QgLz5cblxuICAgICAgICAgICAgICAgICAgICA8V2FsbCAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGbG9vciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjU1cHhcIiwgbWFyZ2luTGVmdDogXCI1NTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGljdHVyZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWxtXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjI1cHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLW11c2ljXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjI1cHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiwgaGVpZ2h0OiBcIjkwcHhcIiwgd2lkdGg6IFwiMzcwcHhcIiwgbWFyZ2luTGVmdDogXCI1MHB4XCIsIGZsb2F0OiBcImxlZnRcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1sZWZ0XCIgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6XCItMTBweFwiLCB3aWR0aDogXCIxNXB4XCIsIGhlaWdodDogXCI5MHB4XCIgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjIwcHhcIiwgd2lkdGg6IFwiMzIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT1cInBsYXllci1kaXNwbGF5XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgZm9udFNpemU6IFwiMTVweFwiLCBsaW5lSGVpZ2h0OiBcIjQwcHhcIiB9fT5SZWFkeSB0byBwbGF5PC9vdXRwdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbGluZUhlaWdodDogXCI0MHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tYmFja3dhcmRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5XCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RvcFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZvcndhcmRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHdpZHRoOiBcIjMyMHB4XCIsIGJvdHRvbTpcIjEwcHhcIiwgbGVmdDogXCIyMHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lamVjdFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvdXRwdXQgY2xhc3NOYW1lPVwicGxheWVyLWRyaXZlXCIgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiwgbGluZUhlaWdodDpcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIsIHdpZHRoOiBcIjIyNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+RGV0cm9pdDwvb3V0cHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLW9wZW5cIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMjVweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLXJpZ2h0XCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMTVweFwiLCByaWdodDogXCIyMHB4XCIsIGhlaWdodDogXCI5MHB4XCIgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Z1bGxzY3JlZW4+ICAgICAgXG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZNZW51IGZyb20gJy4vTmF2TWVudSc7XG5pbXBvcnQgUm91dGVUcmFuc2l0aW9uIGZyb20gJy4uLy4uL2xpYi9yb3V0ZS10cmFuc2l0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgYm9keTogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGVzIHtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgTGF5b3V0U3RhdGVzPiB7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxOYXZNZW51IC8+XG4gICAgICAgICAgICA8Um91dGVUcmFuc2l0aW9uIHBhdGhuYW1lPXt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA6ICcnfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ib2R5fVxuICAgICAgICAgICAgPC9Sb3V0ZVRyYW5zaXRpb24+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0xheW91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9zdG9yZSc7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJztcblxuY29uc3QgbG9nbyA9IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9sb2dvLnN2ZycpIGFzIHN0cmluZztcblxuaW50ZXJmYWNlIE5hdk1lbnVQcm9wcyB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHJvbGVzOiBzdHJpbmdbXTtcbn1cbiBcbmNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TmF2TWVudVByb3BzLCBBcHBsaWNhdGlvblN0YXRlPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxOYXZiYXIgZml4ZWRUb3A9e3RydWV9PlxuICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnIHRvPXsnLyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYXJ0XCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgnaW1hZ2VzL2dyYWRpZW50LnBuZycpXCIgfX0gPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjUwcHhcIiB3aWR0aD1cIjI1MHB4XCIgYWx0PVwiSG9tZSBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfT5Db250YWN0PC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvdW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXszfT5Db3VudGVyPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17Mn0gdGl0bGU9XCJMb2dpblwiIGlkPVwibmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjF9PkxvZ2luPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuMn0+UmVnaXN0ZXI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17Mi4zfT5Vc2VyIFByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2xvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17IXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi40fT5Mb2dvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezR9Pk5vdGlmaWNhdGlvbnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSwgcm9sZXM6IFtdIH07XHJcbiAgICB9LCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuICAgIHt9IC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbikoTmF2TWVudSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgeyBhY3RpdmVBbWJpbGlnaHRTZWxlY3RvciB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gJy4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgQW1iaWxpZ2h0Vmlld01vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdmlldyc7XHJcblxyXG5pbnRlcmZhY2UgQW1iaWxpZ2h0UHJvcHMge1xyXG4gICAgYW1iaWxpZ2h0OiBBbWJpbGlnaHRWaWV3TW9kZWw7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4sXHJcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmdcclxufVxyXG5cclxudHlwZSBQcm9wcyA9IEFtYmlsaWdodFByb3BzO1xyXG5cclxuY2xhc3MgQW1iaWxpZ2h0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIGRlZmF1bHRQYXR0ZXJuOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRQYXR0ZXJuID0gcHJvcHMuYW1iaWxpZ2h0LmJhY2tncm91bmQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmFtYmlsaWdodC5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHByb3BzLmFtYmlsaWdodC5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5kZWZhdWx0UGF0dGVyblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcclxuICAgICAgICB2YXIgcGF0dGVybiA9IG5leHRQcm9wcy5hbWJpbGlnaHQuYmFja2dyb3VuZDtcclxuICAgICAgICBpZiAobmV4dFByb3BzLmFtYmlsaWdodC5pc0FjdGl2ZSlcclxuICAgICAgICAgICAgcGF0dGVybiA9IHBhdHRlcm4gIT09ICcnID8gcGF0dGVybiA6IHRoaXMuZGVmYXVsdFBhdHRlcm47XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBwYXR0ZXJuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGFtYmlsaWdodCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFtYmlsaWdodFwiIHN0eWxlPXt7IHdpZHRoOiBcIjI2MHB4XCIsIGhlaWdodDogXCIxMjVweFwiLCBiYWNrZ3JvdW5kSW1hZ2U6IHRoaXMuc3RhdGUuYmFja2dyb3VuZCB9fT4gPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhbWJpbGlnaHQ6IGFjdGl2ZUFtYmlsaWdodFNlbGVjdG9yKHN0YXRlLmFtYmlsaWdodCksXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBudWxsXHJcbikoQW1iaWxpZ2h0KTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L0FtYmlsaWdodC50c3giLCJpbXBvcnQgeyBNb2RlbCwgbWFueSwgYXR0ciB9IGZyb20gXCJyZWR1eC1vcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbWJpbGlnaHQgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGhhcm1vbm9ncmFtczogbWFueShcIkhhcm1vbm9ncmFtXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuQW1iaWxpZ2h0Lm1vZGVsTmFtZSA9IFwiQW1iaWxpZ2h0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFybW9ub2dyYW0gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5IYXJtb25vZ3JhbS5tb2RlbE5hbWUgPSBcIkhhcm1vbm9ncmFtXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L21vZGVscy9tb2RlbC50cyIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgQW1iaWxpZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gQWN0aW9ucy5TZXRFZmZlY3RBY3Rpb24gfCBBY3Rpb25zLkFkZEFjdGlvbjtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc2Vzc2lvbiwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBBbWJpbGlnaHQgfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5TRVRfRUZGRUNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIEFtYmlsaWdodC53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGJhY2tncm91bmQ6IGFjdGlvbi5wYXlsb2FkLnBhdHRlcm4gfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5BREQ6XHJcbiAgICAgICAgICAgIEFtYmlsaWdodC5jcmVhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2Vzc2lvbi5zdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIob3JtLCByZWR1Y2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9yZWR1Y2VyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBDYW1lcmFTdG9yZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXJcIjtcclxuaW1wb3J0IHsgbGF6eUluamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcyc7XHJcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zZXJ2aWNlcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvdmlld21vZGVsXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgaXNSZWNvcmRpbmc6IGJvb2xlYW47XHJcbiAgICBpc01vdGlvbkRldGVjdGVkOiBib29sZWFuO1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgYWRkcmVzczogc3RyaW5nLFxyXG4gICAgdXBkYXRlQ2FtZXJhOiAoY2FtZXJhOiBDYW1lcmFWaWV3TW9kZWwpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcbiAgICBpc01vdGlvbkRldGVjdGVkOiBib29sZWFuO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmxldCB1cGRhdGVWaWV3O1xyXG5sZXQgdXBkYXRlU3RhdGU7XHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHByb3BzLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogcHJvcHMuaXNSZWNvcmRpbmcsXHJcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IHByb3BzLmlzTW90aW9uRGV0ZWN0ZWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLmFkZHJlc3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEBsYXp5SW5qZWN0KFNlcnZpY2VzLkNhbWVyYVNlcnZpY2UpXHJcbiAgICBwcml2YXRlIF9wcmludFNlcnZpY2U6IENhbWVyYVNlcnZpY2U7XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IG5leHRQcm9wcy5pc1JlY29yZGluZyxcclxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogbmV4dFByb3BzLmlzTW90aW9uRGV0ZWN0ZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB1cGRhdGVWaWV3ID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDYW1lcmFWaWV3LFxyXG4gICAgICAgICAgICAxMDAwLCB0aGlzLnN0YXRlLmFkZHJlc3MsIHRoaXMuc2V0U3RhdGUpO1xyXG5cclxuICAgICAgICB1cGRhdGVTdGF0ZSA9IHNldEludGVydmFsKHRoaXMudXBkYXRlQ2FtZXJhU3RhdGUsXHJcbiAgICAgICAgICAgIDUwMDAsIHRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICAgIHRoaXMuX3ByaW50U2VydmljZS5nZXRDYW1lcmFTdGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVDYW1lcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBkYXRlVmlldyk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FtZXJhVmlldyhhZGRyZXNzLCBzZXRTdGF0ZSkge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyArICc/ZGF0YT0nICsgY291bnRlcisrXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZUNhbWVyYVN0YXRlKGlkOiBudW1iZXIsIGdldFN0YXRlLCB1cGRhdGVTdGF0ZSkge1xyXG4gICAgICAgIHZhciBjYW1lcmEgPSBhd2FpdCBnZXRTdGF0ZShpZCk7XHJcbiAgICAgICAgdXBkYXRlU3RhdGUoY2FtZXJhKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3ByaW50U2VydmljZS5zdGFydFJlY29yZGluZyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RvcFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9wcmludFNlcnZpY2Uuc3RvcFJlY29yZGluZyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHRleHQtY2VudGVyIGNhbWVyYS1jb250YWluZXJcIiBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0QWN0aXZlKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuc2V0QWN0aXZlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY2FtZXJhLWZyYW1lXCIgc3R5bGU9e3sgbWFyZ2luOiAnMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUuYWRkcmVzc30gc3R5bGU9e3sgaGVpZ2h0OiAnMTI1cHgnLCB3aWR0aDogJzIwMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzUmVjb3JkaW5nID8gJ2NhbWVyYS1yZWNvcmRpbmcnIDogdGhpcy5zdGF0ZS5pc01vdGlvbkRldGVjdGVkID8gJ2NhbWVyYS1hbGVydCcgOiAnY2FtZXJhLW5vLWFsZXJ0J30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNBY3RpdmUgPyAnY2FtZXJhLWJvdHRvbSBjYW1lcmEtdmlzaWJsZScgOiAnY2FtZXJhLWJvdHRvbSBjYW1lcmEtaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYW1lcmEtbmFtZVwiPnt0aGlzLnN0YXRlLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVjb3JkIGNhbWVyYS1wbGF5XCIgc3R5bGU9e3sgcGFkZGluZzogJzNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzUmVjb3JkaW5nID8gKCkgPT4gdGhpcy5zdG9wUmVjb3JkaW5nKGlkKSA6ICgpID0+IHRoaXMuc3RhcnRSZWNvcmRpbmcoaWQpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0b3BcIiBzdHlsZT17eyB3aWR0aDogJzI1cHgnLCBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdncmF5JywgcGFkZGluZzogJzNweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0b3BSZWNvcmRpbmcoaWQpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0NhbWVyYS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgQ2FtZXJhSXRlbSBmcm9tICcuL0NhbWVyYSc7XHJcbmltcG9ydCB7IGFjdGl2ZUNhbWVyYXNTZWxlY3RvciB9IGZyb20gJy4vbW9kZWwvb3JtJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSBcIi4vbW9kZWwvdmlld21vZGVsXCI7XHJcbmltcG9ydCAqIGFzIERpc3BsYXlTdG9yZSBmcm9tIFwiLi9zdGF0ZS9kaXNwbGF5ZXJcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsaXN0OiBDYW1lcmFWaWV3TW9kZWxbXTtcclxuICAgIGxpc3RWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgIGxpc3RWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG50eXBlIENhbWVyYXNQcm9wcyA9IFByb3BzICYgdHlwZW9mIERpc3BsYXlTdG9yZS5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmNsYXNzIERpc3BsYXllciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDYW1lcmFzUHJvcHMsIFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FtZXJhc1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsaXN0VmlzaWJsZTogcHJvcHMubGlzdFZpc2libGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9vZ2xlQ2FtZXJhcygpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGlzdFZpc2libGU6ICF0aGlzLnN0YXRlLmxpc3RWaXNpYmxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdXBkYXRlQ2FtZXJhIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBzdHlsZT17eyBoZWlnaHQ6ICcyMDBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbWVyYS10b3BiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93biBjYW1lcmEtY29sbGFwc2UtZG93blwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9vZ2xlQ2FtZXJhcygpfSBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsYXkgY2FtZXJhLXBsYXlcIiBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZXllLW9wZW4gY2FtZXJhLW1vdGlvblwiIHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi12b2x1bWUtdXAgY2FtZXJhLXNvdW5kXCIgc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsIGNhbWVyYS10b3BiYXItc2V0dGluZ3NcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubGlzdFZpc2libGUgPyAnc2xpZGUtZG93bicgOiAnc2xpZGUtdXAnfT4ge3RoaXMucHJvcHMubGlzdC5tYXAoKGNhbWVyYSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbWVyYUl0ZW0ga2V5PXtjYW1lcmEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYW1lcmEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e2NhbWVyYS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjYW1lcmEubmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZD17Y2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nPXtjYW1lcmEuaXNSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhbWVyYT17dXBkYXRlQ2FtZXJhfSAvPil9XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpc3Q6IGFjdGl2ZUNhbWVyYXNTZWxlY3RvcihzdGF0ZS5kaXNwbGF5KSxcclxuICAgICAgICBsaXN0VmlzaWJsZTogdHJ1ZVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgRGlzcGxheVN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbikoRGlzcGxheWVyKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0Rpc3BsYXllci50c3giLCJpbXBvcnQgeyBNb2RlbCwgbWFueSwgYXR0ciB9IGZyb20gXCJyZWR1eC1vcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXNwbGF5IGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGNhbWVyYXM6IG1hbnkoXCJDYW1lcmFcIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5EaXNwbGF5Lm1vZGVsTmFtZSA9IFwiRGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBhdHRyKCksXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGhhcm1vbm9ncmFtczogbWFueShcIkhhcm1vbm9ncmFtXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuQ2FtZXJhLm1vZGVsTmFtZSA9IFwiQ2FtZXJhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFybW9ub2dyYW0gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5IYXJtb25vZ3JhbS5tb2RlbE5hbWUgPSBcIkhhcm1vbm9ncmFtXCI7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbC50cyIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpZmkgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBzcGVha2VyczogbWFueShcIlNwZWFrZXJcIiksXHJcbiAgICAgICAgICAgIGhhcm1vbm9ncmFtczogbWFueShcIkhhcm1vbm9ncmFtXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuSGlmaS5tb2RlbE5hbWUgPSBcIkhpZmlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVha2VyIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgdHlwZTogYXR0cigpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogYXR0cigpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuU3BlYWtlci5tb2RlbE5hbWUgPSBcIlNwZWFrZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL21vZGVscy9tb2RlbC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1iYWNrLXNtYWxsLnBuZ1wiIHdpZHRoPVwiMzBweFwiIGhlaWdodD1cIjQwcHhcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJy0xNXB4JywgdG9wOiAnLTIwcHgnIH19IC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvQmFjay50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnJvbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcGVha2VyLnBuZ1wiIHdpZHRoPVwiNDBweFwiIGhlaWdodD1cIjYwcHhcIiBjbGFzc05hbWU9XCJmcmFtZS1zaGFkb3dcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTMwcHgnLCBsZWZ0OiAnLTIwcHgnIH19IC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvRnJvbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXItYmFjay5wbmdcIiBoZWlnaHQ9XCIxMjBweFwiIHdpZHRoPVwiMjBweFwiIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogXCItNjBweFwiLCBsZWZ0OiBcIi0xMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zcGVha2Vycy9TaWRlLnRzeCIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgU3BlYWtlciB9IGZyb20gJy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBTcGVha2VyVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXcnO1xyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEFjdGlvbnMuQWRkSGlmaUFjdGlvbiB8IEFjdGlvbnMuQWRkU3BlYWtlckFjdGlvbjtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc2Vzc2lvbiwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBIaWZpLCBTcGVha2VyIH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvbnMuQUREX0hJRkk6XHJcbiAgICAgICAgICAgIEhpZmkuY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkFERF9TUEVBS0VSOlxyXG4gICAgICAgICAgICBTcGVha2VyLmNyZWF0ZShhY3Rpb24ucGF5bG9hZC5zcGVha2VyKTtcclxuICAgICAgICAgICAgdmFyIHNwZWFrZXIgPSA8U3BlYWtlclZpZXdNb2RlbD4gYWN0aW9uLnBheWxvYWQuc3BlYWtlcjtcclxuICAgICAgICAgICAgSGlmaS53aXRoSWQoYWN0aW9uLnBheWxvYWQuaGlmaSlcclxuICAgICAgICAgICAgICAgIC5zcGVha2Vycy5hZGQoU3BlYWtlci53aXRoSWQoc3BlYWtlci5pZCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2Vzc2lvbi5zdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIob3JtLCByZWR1Y2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3RhdGUvcmVkdWNlci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCB7IExhbXBWaWV3TW9kZWwgfSBmcm9tICcuL21vZGVscy92aWV3JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsYW1wOiBMYW1wVmlld01vZGVsXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFtcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICAgIGRlZmF1bHRDb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRlZmF1bHRDb2xvciA9IHByb3BzLmxhbXAuY29sb3I7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMuZGVmYXVsdENvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHZhciBjb2xvciA9IG5leHRQcm9wcy5sYW1wLmNvbG9yO1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMubGFtcC5pc0FjdGl2ZSlcclxuICAgICAgICAgICAgY29sb3IgPSBjb2xvciAhPT0gJycgPyBjb2xvciA6IHRoaXMuZGVmYXVsdENvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9odWUucG5nXCIgaGVpZ2h0PVwiMTUwcHhcIiB3aWR0aD1cIjQwcHhcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMHB4JywgbGVmdDogJy0yMHB4JywgekluZGV4OiAwIH19IC8+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW1wXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5jb2xvciwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJy0xMDBweCcsIGxlZnQ6ICctMjBweCcgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvTGFtcC50c3giLCJpbXBvcnQgeyBNb2RlbCwgbWFueSwgYXR0ciB9IGZyb20gXCJyZWR1eC1vcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYW1wIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgY29sb3I6IGF0dHIoKSxcclxuICAgICAgICAgICAgcG9zaXRpb246IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5MYW1wLm1vZGVsTmFtZSA9IFwiTGFtcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy9tb2RlbC50cyIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgTGFtcCB9IGZyb20gJy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEFjdGlvbnMuU2V0Q29sb3JBY3Rpb24gfCBBY3Rpb25zLkFkZExhbXBBY3Rpb247XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgTGFtcCB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNFVF9DT0xPUjpcclxuICAgICAgICAgICAgTGFtcC53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGNvbG9yOiBhY3Rpb24ucGF5bG9hZC5jb2xvciB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkFERF9MQU1QOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGFtcCBhZGRlZCcpO1xyXG4gICAgICAgICAgICBMYW1wLmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvcmVkdWNlci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCB7IGxhenlJbmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9pb2MvZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBFZmZlY3RzIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvYWN0aW9ucy9lZmZlY3RzJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc2VydmljZXMvdGVsZXZpc2lvblwiO1xyXG5pbXBvcnQgeyBhY3RpdmVUZWxldmlzaW9uU2VsZWN0b3IgfSBmcm9tICcuL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgKiBhcyBNb2RlbCBmcm9tICcuL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25WaWV3TW9kZWwgfSBmcm9tICcuL21vZGVscy92aWV3bW9kZWwnO1xyXG5pbXBvcnQgKiBhcyBGaXJlIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvZmlyZXBsYWNlL2ZpcmUnO1xyXG5pbXBvcnQgeyBBcXVhcml1bSB9IGZyb20gJy4vZWZmZWN0cy9hcXVhcml1bS9hcXVhcml1bSc7XHJcblxyXG5pbnRlcmZhY2UgVGVsZXZpc2lvblByb3BzIHtcclxuICAgIHRlbGV2aXNpb246IFRlbGV2aXNpb25WaWV3TW9kZWw7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW4sXHJcbiAgICBpc0ZpcmVwbGFjZTogYm9vbGVhbixcclxuICAgIGlzQXF1YXJpdW06IGJvb2xlYW5cclxufVxyXG5cclxudHlwZSBQcm9wcyA9IFRlbGV2aXNpb25Qcm9wcyAmIHR5cGVvZiBFZmZlY3RzLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxubGV0IGZpcmVwbGFjZTtcclxubGV0IGZpcmU7XHJcbmxldCBhcXVhcml1bTtcclxubGV0IGFxdWE7XHJcblxyXG5jbGFzcyBUZWxldmlzaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIGFxdWFyaXVtOiBBcXVhcml1bTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBwcm9wcy50ZWxldmlzaW9uLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMudGVsZXZpc2lvbi5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgaXNGaXJlcGxhY2U6IHByb3BzLnRlbGV2aXNpb24uaXNGaXJlcGxhY2VSdW5uaW5nLFxyXG4gICAgICAgICAgICBpc0FxdWFyaXVtOiBwcm9wcy50ZWxldmlzaW9uLmlzQXF1YXJpdW1SdW5uaW5nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmlyZSA9IG5ldyBGaXJlLkZpcmUoKTtcclxuICAgICAgICBhcXVhcml1bSA9IG5ldyBBcXVhcml1bSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV4dFByb3BzKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNGaXJlcGxhY2U6IG5leHRQcm9wcy50ZWxldmlzaW9uLmlzRmlyZXBsYWNlUnVubmluZyxcclxuICAgICAgICAgICAgaXNBcXVhcml1bTogbmV4dFByb3BzLnRlbGV2aXNpb24uaXNBcXVhcml1bVJ1bm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0RmlyZXBsYWNlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMucmVmcy50ZWxldmlzaW9uO1xyXG4gICAgICAgIHZhciBmb3JlZ3JvdW5kID0gdGhpcy5yZWZzLnR2Q29udGVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNGaXJlcGxhY2UpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmaXJlcGxhY2UpO1xyXG4gICAgICAgICAgICBmaXJlLmNsZWFyKGJhY2tncm91bmQsIGZvcmVncm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlyZS5pbml0aWFsaXplKGJhY2tncm91bmQsIGZvcmVncm91bmQsICdpbWFnZUJhY2tncm91bmQnKTtcclxuICAgICAgICAgICAgZmlyZXBsYWNlID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcmUuYnVybkJ1cm5CdXJuKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCwgZmlyZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldEZpcmVwbGFjZShpZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLnNldEZpcmVwbGFjZSh0aGlzLnN0YXRlLmlkLCAhdGhpcy5zdGF0ZS5pc0ZpcmVwbGFjZSk7ICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRWaWRlbyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSB0aGlzLnJlZnMudGVsZXZpc2lvbjtcclxuICAgICAgICB2YXIgZm9yZWdyb3VuZCA9IHRoaXMucmVmcy50dkNvbnRlbnQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNBcXVhcml1bSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzQXF1YXJpdW0pIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhcXVhKTtcclxuICAgICAgICAgICAgYXF1YXJpdW0uY2xlYXIoYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgIGFxdWFyaXVtLmNsZWFyKGZvcmVncm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXF1YXJpdW0uaW5pdChiYWNrZ3JvdW5kKTtcclxuICAgICAgICAgICAgYXF1YSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcXVhcml1bS5kcmF3KGZvcmVncm91bmQpO1xyXG4gICAgICAgICAgICB9LCAxNi43LCBhcXVhcml1bSwgZm9yZWdyb3VuZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLnNldFZpZGVvKGlkKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRBcXVhcml1bSh0aGlzLnN0YXRlLmlkLCAhdGhpcy5zdGF0ZS5pc0FxdWFyaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBAbGF6eUluamVjdChTZXJ2aWNlcy5UZWxldmlzaW9uU2VydmljZSlcclxuICAgIHByaXZhdGUgX3NlcnZpY2U6IFRlbGV2aXNpb25TZXJ2aWNlO1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRlbGV2aXNpb24gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19IG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjQwcHggMCAwIDBcIiwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsIGhlaWdodDogXCIxMjVweFwiLCB3aWR0aDogXCIyNTBweFwiLCBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIgfX0gcmVmPVwidGVsZXZpc2lvblwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgc3R5bGU9e3sgaGVpZ2h0OiBcIjEyNXB4XCIsIHdpZHRoOiBcIjI1MHB4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnIH19IHJlZj1cInR2Q29udGVudFwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpbWFnZUJhY2tncm91bmRcIiBzcmM9XCJpbWFnZXMvYmFja2dyb3VuZC1mbGlwMi5qcGdcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjUwcHgnLCBkaXNwbGF5OiAnbm9uZScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiaW1hZ2VTdHJpcFwiIHNyYz1cImltYWdlcy9maXNoc3RyaXAucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTI1cHgnLCB3aWR0aDogJzI1MHB4JywgZGlzcGxheTogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICd0ZWxldmlzaW9uLWJvdHRvbSBjYW1lcmEtdmlzaWJsZScgOiAndGVsZXZpc2lvbi1ib3R0b20gY2FtZXJhLWhpZGRlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYW1lcmEtbmFtZVwiPlNvbnkgQnJhdmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZpcmUgdGVsZXZpc2lvbi1maXJlcGxhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5pc0ZpcmVwbGFjZSA/ICgpID0+IHRoaXMuc2V0RmlyZXBsYWNlKHRlbGV2aXNpb24uaWQpIDogKCkgPT4gdGhpcy5zZXRGaXJlcGxhY2UodGVsZXZpc2lvbi5pZCl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxlYWYgdGVsZXZpc2lvbi1sZWFmXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRpbnQgdGVsZXZpc2lvbi13YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzRmlyZXBsYWNlID8gKCkgPT4gdGhpcy5zZXRWaWRlbyh0ZWxldmlzaW9uLmlkKSA6ICgpID0+IHRoaXMuc2V0VmlkZW8odGVsZXZpc2lvbi5pZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbGV2aXNpb246IGFjdGl2ZVRlbGV2aXNpb25TZWxlY3RvcihzdGF0ZS50ZWxldmlzaW9uKSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIEVmZmVjdHMuYWN0aW9uQ3JlYXRvcnNcclxuKShUZWxldmlzaW9uKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9UZWxldmlzaW9uLnRzeCIsImltcG9ydCB7IEZpc2ggfSBmcm9tICcuL2Zpc2gnXHJcblxyXG5jbGFzcyBBcXVhcml1bSB7XHJcbiAgICBjdHg6IGFueTsgICAgICAgICAgICAgICAgICAgIC8vY2FudmFzIGNvbnRleHQgZm9yIGRyYXdpbmcgdGhlIGZpc2hcclxuICAgIHN0YXJ0RmlzaDogbnVtYmVyOyAgICAgICAgICAvL251bWJlciBvZiBmaXNoIHRvIHN0YXJ0IHdpdGhcclxuICAgIGZpc2g6IEZpc2ggW107ICAgICAgICAgICAgICAgLy9hcnJheSBvZiBmaXNoXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGFueTsgICAgICAgICAvL2JhY2tncm91bmQgaW1hZ2VcclxuICAgIGJhY2tncm91bmRJbWFnZVc6IG51bWJlcjsgIC8vYmFja2dyb3VuZCBpbWFnZSB3aWR0aFxyXG4gICAgYmFja2dyb3VuZEltYWdlSDogbnVtYmVyOyAgLy9iYWNrZ3JvdW5kIGltYWdlIGhlaWdodFxyXG4gICAgaW1hZ2VTdHJpcDogYW55OyAgICAgICAgICAgICAgLy9maXNoIGltYWdlIHN0cmlwIFxyXG4gICAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICAgIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRGaXNoID0gNTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZVcgPSAyNTA7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2VIID0gMTI1O1xyXG4gICAgICAgIHRoaXMuZmlzaCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSBmdW5jdGlvbiAoYmFja2dyb3VuZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBiYWNrZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGJhY2tncm91bmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBiYWNrZ3JvdW5kLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy9kcmF3IHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRoZSBmaXNoXHJcbiAgICAgICAgdGhpcy5pbWFnZVN0cmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlU3RyaXAnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUZpc2godGhpcy5zdGFydEZpc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpc2ggPSBmdW5jdGlvbihtYXgpIHtcclxuICAgICAgICBpZiAodGhpcy5maXNoLmxlbmd0aCA8IG1heCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5maXNoLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpc2gucHVzaChuZXcgRmlzaCh0aGlzLmJhY2tncm91bmRJbWFnZVcsIHRoaXMuYmFja2dyb3VuZEltYWdlSCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL3JlbW92ZSBmaXNoXHJcbiAgICAgICAgICAgIHRoaXMuZmlzaC5zcGxpY2UobWF4LCB0aGlzLmZpc2gubGVuZ3RoIC0gbWF4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXNXaWR0aCA8IHRoaXMuYmFja2dyb3VuZEltYWdlVykge1xyXG4gICAgICAgICAgICAvL1Nob3cgYSBwb3J0aW9uIG9mIHRoZSBiYWNrZ3JvdW5kIGlmIHRoZSB3aW5kb3cgaXMgbW9yZSBuYXJyb3cgdGhhbiB0aGUgYmFja2dyb3VuZEltYWdlXHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kSW1hZ2UsIDAsIDAsIHRoaXMuYmFja2dyb3VuZEltYWdlVywgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy90aWxlIHRoZSBiYWNrZ3JvdW5kSW1hZ2UgaG9yaXpvbnRhbGx5IGlmIHRoZSB3aW5kb3cgaXMgbW9yZSB3aWRlIHRoYW4gdGhlIGltYWdlXHJcbiAgICAgICAgICAgIHZhciB0aWxlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMuY2FudmFzV2lkdGggLyB0aGlzLmJhY2tncm91bmRJbWFnZVcpO1xyXG4gICAgICAgICAgICB2YXIgZmxpcCA9IDE7IC8vZmxpcCB0aGUgaW1hZ2Ugd2hlbiBmbGlwPT0tMSBmb3IgYmV0dGVyIGxvb2tpbmcgdGlsZXNcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGlsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCB0aGUgdGlsZXMgdGhhdCBhcmUgbmVlZGVkIGFuZCBwb3NpdGlvbiB0aGVtXHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShmbGlwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kSW1hZ2UsIChmbGlwIC0gMSkgKiB0aGlzLmJhY2tncm91bmRJbWFnZVcgLyAyICsgZmxpcCAqIHRoaXMuYmFja2dyb3VuZEltYWdlVyAqIGksIDAsIHRoaXMuYmFja2dyb3VuZEltYWdlVywgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIGZsaXAgPSBmbGlwICogLTE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcgPSBmdW5jdGlvbiAoY2FudmFzOiBhbnkpIHtcclxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGZpc2hpZSBpbiB0aGlzLmZpc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5maXNoW2Zpc2hpZV0uc3dpbShjdHgsIHRoaXMuaW1hZ2VTdHJpcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gZnVuY3Rpb24gKGNhbnZhczogYW55KSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcXVhcml1bSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2FxdWFyaXVtL2FxdWFyaXVtLnRzIiwibGV0IGZpc2hXID0gNTA7XHJcbmxldCBmaXNoSCA9IDUwO1xyXG5sZXQgbWF4TGVuZ3RoID0gNTtcclxuXHJcbmNsYXNzIEZpc2gge1xyXG5cclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGFuZ2xlOiBudW1iZXI7XHJcbiAgICB4QW5nbGU6IG51bWJlcjtcclxuICAgIHlBbmdsZTogbnVtYmVyO1xyXG4gICAgekFuZ2xlOiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB6OiBudW1iZXI7XHJcbiAgICB6RmFyOiBudW1iZXI7XHJcbiAgICB6Q2xvc2U6IG51bWJlcjtcclxuICAgIHNjYWxlOiBudW1iZXI7XHJcbiAgICBmbGlwOiBudW1iZXI7XHJcbiAgICB6RmFyRmFjdG9yOiBudW1iZXI7XHJcbiAgICBjZWxsOiBudW1iZXI7XHJcbiAgICBzcGVjaWVzOiBudW1iZXI7XHJcbiAgICBjZWxsQ291bnQ6IG51bWJlcjtcclxuICAgIGNlbGxSZXZlcnNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSB4LHkgZGlyZWN0aW9uIHRoaXMgZmlzaCBzd2ltc1xyXG4gICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIHggdmFsdWUgb2YgdGhlIGFuZ2xlXHJcbiAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgeSB2YWx1ZSBvZiB0aGUgYW5nbGVcclxuICAgICAgICB0aGlzLnpBbmdsZSA9IDEgKyAtMiAqIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgaWYgdGhlIGZpc2ggaXMgc3dpbW1pbmcgdG93YXJkIHVzIG9yIGF3YXkuIDEgPSB0b3dhcmQgdXM7IC0xID0gYXdheSBmcm9tIHVzXHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMud2lkdGggLSBmaXNoVykgKyBmaXNoVyAvIDIpOyAgICAvL3NldCB0aGUgc3RhcnRpbmcgeCBsb2NhdGlvbiAgXHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuaGVpZ2h0IC0gZmlzaEgpICsgZmlzaEggLyAyKTsgICAvL3NldCB0aGUgc3RhcnRpbmcgeSBsb2NhdGlvbiAgXHJcbiAgICAgICAgdGhpcy56RmFyID0gMTAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgaG93IGZhciBhd2F5IGNhbiBhIGZpc2ggZ29cclxuICAgICAgICB0aGlzLnpGYXJGYWN0b3IgPSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgbWF4IHNpemUgdGhlIGZpc2ggY2FuIGJlLiAxPTEwMCVcclxuICAgICAgICB0aGlzLnpDbG9zZSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCBob3cgbmVhciBhIGZpc2ggY2FuIGNvbWVcclxuICAgICAgICB0aGlzLnogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKHRoaXMuekZhciAtIHRoaXMuekNsb3NlKSkpOyAgICAgICAgICAgICAgLy9zZXQgdGhlIHN0YXJ0aW5nIHogbG9jYXRpb24gXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IC4xOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIHJhdGUgb2Ygc2NhbGluZyBlYWNoIGZyYW1lXHJcbiAgICAgICAgdGhpcy5mbGlwID0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgZmlzaC4gMT1yaWdodDsgLTE9bGVmdFxyXG4gICAgICAgIHRoaXMuY2VsbENvdW50ID0gMTY7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBudW1iZXIgb2YgY2VsbHMgKGNvbHVtbnMpIGluIHRoZSBpbWFnZSBzdHJpcCBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jZWxsQ291bnQgLSAxKSk7ICAgICAgICAgICAgICAgLy9zZXQgdGhlIGZpcnN0IGNlbGwgKGNvbHVtbnMpIG9mIHRoZSBpbWFnZSBzdHJpcCBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGxSZXZlcnNlID0gLTE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB3aGljaCBkaXJlY3Rpb24gd2UgZ28gdGhyb3VnaCB0aGUgaW1hZ2Ugc3RyaXBcclxuICAgICAgICB0aGlzLnNwZWNpZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB3aGljaCBzcGVjaWVzIG9mIGZpc2ggdGhpcyBmaXNoIGlzLiBlYWNoIHNwZWNpZXMgaXMgYSByb3cgaW4gdGhlIGltYWdlIHN0cmlwIFxyXG5cclxuICAgICAgICAvLyBzdG9wIGZpc2ggZnJvbSBzd2ltbWluZyBzdHJhaWdodCB1cCBvciBkb3duXHJcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJICogNCAvIDMgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgKiA1IC8gMyB8fCB0aGlzLmFuZ2xlID4gTWF0aC5QSSAqIDEgLyAzICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJICogMiAvIDMpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgKiAxIC8gMyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZhY2UgdGhlIGZpc2ggdGhlIHJpZ2h0IHdheSBpZiBhbmdsZSBpcyBiZXR3ZWVuIDYgbydjbG9jayBhbmQgMTIgbydjbG9ja1xyXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgLyAyICogMykge1xyXG4gICAgICAgICAgICB0aGlzLmZsaXAgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGRyYXcgdGhlIGZpc2ggZWFjaCBmcmFtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgICAgICAgICAgXHJcbiAgICBzd2ltID0gZnVuY3Rpb24gKGN0eDogYW55LCBpbWFnZVN0cmlwOiBhbnkpIHtcclxuICAgICAgICB2YXIgdmVsb2NpdHkgPSAyMDtcclxuICAgICAgICAvLyBDYWxjdWxhdGUgbmV4dCBwb3NpdGlvbiBvZiBmaXNoXHJcbiAgICAgICAgdmFyIG5leHRYID0gdGhpcy54ICsgdGhpcy54QW5nbGUgKiB2ZWxvY2l0eSAqIC4xO1xyXG4gICAgICAgIHZhciBuZXh0WSA9IHRoaXMueSArIHRoaXMueUFuZ2xlICogdmVsb2NpdHkgKiAuMTtcclxuICAgICAgICB2YXIgbmV4dFogPSB0aGlzLnogKyB0aGlzLnpBbmdsZSAqIC4xICogdmVsb2NpdHkgKiAuMTtcclxuICAgICAgICB2YXIgbmV4dFNjYWxlID0gTWF0aC5hYnMobmV4dFopIC8gKHRoaXMuekZhciAtIHRoaXMuekNsb3NlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiByaWdodCBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WCArIGZpc2hXIC8gMiAqIHRoaXMuc2NhbGUgPiB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gMyBvJ2Nsb2NrIGFuZCA2IG8nY2xvY2tcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmFuZ2xlID49IDAgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgLyAyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gLXRoaXMuZmxpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiBhbmdsZSBpcyBiZXR3ZWVuIDEyIG8nY2xvY2sgYW5kIDMgbydjbG9ja1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgKiAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtICh0aGlzLmFuZ2xlIC0gTWF0aC5QSSAvIDIgKiAzKSAqIDJcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxpcCA9IC10aGlzLmZsaXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZpc2ggaXMgZ29pbmcgdG8gbW92ZSBvZmYgbGVmdCBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WCAtIGZpc2hXIC8gMiAqIHRoaXMuc2NhbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gNiBvJ2Nsb2NrIGFuZCA5IG8nY2xvY2tcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5QSSAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhBbmdsZSA9IE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAtdGhpcy5mbGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gOSBvJ2Nsb2NrIGFuZCAxMiBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJIC8gMiAqIDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKE1hdGguUEkgLyAyICogMyAtIHRoaXMuYW5nbGUpICogMlxyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gLXRoaXMuZmxpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiBib3R0b20gc2lkZSBvZiBzY3JlZW5cclxuICAgICAgICBpZiAobmV4dFkgKyBmaXNoSCAvIDIgKiB0aGlzLnNjYWxlID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgLy8gSWYgYW5nbGUgaXMgYmV0d2VlbiAzIG8nY2xvY2sgYW5kIDkgbydjbG9ja1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuYW5nbGUgPiAwICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiB0b3Agc2lkZSBvZiBzY3JlZW5cclxuICAgICAgICBpZiAobmV4dFkgLSBmaXNoSCAvIDIgKiB0aGlzLnNjYWxlIDwgMCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbmdsZSBpcyBiZXR3ZWVuIDkgbydjbG9jayBhbmQgMyBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGlmICgodGhpcy5hbmdsZSA+IE1hdGguUEkgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgKiAyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAodGhpcy5hbmdsZSAtIE1hdGguUEkpICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBmaXNoIGlzIGdvaW5nIHRvbyBmYXIgKGdldHRpbmcgdG9vIHNtYWxsKVxyXG4gICAgICAgIGlmIChuZXh0WiA8PSB0aGlzLnpDbG9zZSAmJiB0aGlzLnpBbmdsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy56QW5nbGUgPSAtdGhpcy56QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGZpc2ggaXMgZ2V0dGluZyB0byBjbG9zZSAoZ2V0dGluZyB0b28gbGFyZ2UpXHJcbiAgICAgICAgaWYgKCgodGhpcy53aWR0aCAvIGZpc2hXKSAqIDEwKSA8ICgoZmlzaFcgKiBtYXhMZW5ndGgpIC8gdGhpcy53aWR0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy56RmFyRmFjdG9yID0gLjNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKCh0aGlzLndpZHRoIC8gZmlzaFcpICogMikgPCAoKGZpc2hXICogbWF4TGVuZ3RoKSAvIHRoaXMud2lkdGgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuekZhckZhY3RvciA9IC41XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyB0aGlzLnpGYXJGYWN0b3IgPSAxIH1cclxuXHJcbiAgICAgICAgaWYgKG5leHRaID49IHRoaXMuekZhciAqIHRoaXMuekZhckZhY3RvciAmJiB0aGlzLnpBbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56QW5nbGUgPSAtdGhpcy56QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNjYWxlIDwgLjEpIHsgdGhpcy5zY2FsZSA9IC4xIH07IC8vZG9uJ3QgbGV0IGZpc2ggZ2V0IHRvbyB0aW55XHJcblxyXG4gICAgICAgIC8vZHJhdyB0aGUgZmlzaFxyXG4gICAgICAgIC8vbG9jYXRlIHRoZSBmaXNoXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7IC8vIG1ha2UgdGhlIGZpc2ggYmlnZ2VyIG9yIHNtYWxsZXIgZGVwZW5kaW5nIG9uIGhvdyBmYXIgYXdheSBpdCBpcy5cclxuICAgICAgICBjdHgudHJhbnNmb3JtKHRoaXMuZmxpcCwgMCwgMCwgMSwgMCwgMCk7IC8vbWFrZSB0aGUgZmlzaCBmYWNlIHRoZSB3YXkgaGUncyBzd2ltbWluZy5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlU3RyaXAsIGZpc2hXICogdGhpcy5jZWxsLCBmaXNoSCAqIHRoaXMuc3BlY2llcywgZmlzaFcsIGZpc2hILCAtZmlzaFcgLyAyLCAtZmlzaEggLyAyLCBmaXNoVywgZmlzaEgpOyAvL2RyYXcgdGhlIGZpc2hcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXh0U2NhbGUgLy8gaW5jcmVtZW50IHNjYWxlIGZvciBuZXh0IHRpbWUgXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAvL2luY3JlbWVudCB0byBuZXh0IHN0YXRlXHJcbiAgICAgICAgdGhpcy54ID0gbmV4dFg7XHJcbiAgICAgICAgdGhpcy55ID0gbmV4dFk7XHJcbiAgICAgICAgdGhpcy56ID0gbmV4dFo7XHJcbiAgICAgICAgaWYgKHRoaXMuY2VsbCA+PSB0aGlzLmNlbGxDb3VudCAtIDEgfHwgdGhpcy5jZWxsIDw9IDApIHsgdGhpcy5jZWxsUmV2ZXJzZSA9IHRoaXMuY2VsbFJldmVyc2UgKiAtMTsgfSAvL2dvIHRocm91Z2ggZWFjaCBjZWxsIGluIHRoZSBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGwgPSB0aGlzLmNlbGwgKyAxICogdGhpcy5jZWxsUmV2ZXJzZTsgLy9nbyBiYWNrIGRvd24gb25jZSB3ZSBoaXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZpc2ggfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9hcXVhcml1bS9maXNoLnRzIiwiY2xhc3MgRmlyZSB7XHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcclxuICAgIGZpcmU6IGFueVtdO1xyXG4gICAgdGltZTogYW55O1xyXG4gICAgZnBzOiBudW1iZXI7XHJcbiAgICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gICAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBjb2xvcnM6IGFueVtdO1xyXG4gICAgaW1hZ2VEYXRhOiBhbnk7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGFueTtcclxuICAgIGN0eDogYW55O1xyXG4gICAgaW50ZW5zaXR5OiBhbnk7XHJcblxyXG4gICAgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kLCBpbWFnZUlkKSB7XHJcbiAgICAgICAgLy90aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUJhY2tncm91bmQnKTtcclxuICAgICAgICAvL3RoaXMuY3JlYXRlQmFja2dyb3VuZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHggPSBmb3JlZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGZvcmVncm91bmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBmb3JlZ3JvdW5kLmhlaWdodDtcclxuICAgICAgICB0aGlzLmludGVuc2l0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSAzMDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDAuNTtcclxuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5pbWFnZURhdGEuZGF0YTtcclxuICAgICAgICB2YXIgbnVtUGl4ZWxzID0gdGhpcy5kYXRhLmxlbmd0aCAvIDQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gW107XHJcbiAgICAgICAgICAgIGNvbG9yWzBdID0gY29sb3JbMV0gPSBjb2xvclsyXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2ldID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDMyOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaV1bMl0gPSBpIDw8IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMF0gPSBpIDw8IDM7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMl0gPSA2NCAtIChpIDw8IDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzFdID0gaSA8PCAzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzJdID0gaSA8PCAyO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTI4XVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDEyOF1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxMjhdWzJdID0gNjQgKyAoaSA8PCAyKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE2MF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxNjBdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTYwXVsyXSA9IDEyOCArIChpIDw8IDIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTkyXVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE5Ml1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxOTJdWzJdID0gMTkyICsgaTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDIyNF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAyMjRdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMjI0XVsyXSA9IDIyNCArIGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpcmUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1dpZHRoICogdGhpcy5jYW52YXNIZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSBmdW5jdGlvbiAoYmFja2dyb3VuZCwgZm9yZWdyb3VuZCkge1xyXG4gICAgICAgIHZhciBiZ0NvbnRleHQgPSBiYWNrZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgYmdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBiYWNrZ3JvdW5kLndpZHRoLCBiYWNrZ3JvdW5kLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBmb3JlZ3JvdW5kLndpZHRoLCBmb3JlZ3JvdW5kLmhlaWdodCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbWl6ZVRocmVzaG9sZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCArPSBNYXRoLnJhbmRvbSgpICogMC4yIC0gMC4xO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy50aHJlc2hvbGQsIDAuNSksIDAuOCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGJhY2tncm91bmQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgY2FudmFzV2lkdGggPSBiYWNrZ3JvdW5kLndpZHRoO1xyXG4gICAgICAgIHZhciBjYW52YXNIZWlnaHQgPSBiYWNrZ3JvdW5kLmhlaWdodDtcclxuXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWFnZSwgMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVybkJ1cm5CdXJuID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYnVybkJ1cm5CdXJuKTtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIGR0ID0gbm93IC0gdGhpcy50aW1lO1xyXG5cclxuICAgICAgICBpZiAoZHQgPCAoMTAwMCAvIHRoaXMuZnBzKSlcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBza2lwIGEgZnJhbWVcclxuXHJcbiAgICAgICAgdGhpcy50aW1lID0gbm93O1xyXG5cclxuICAgICAgICB2YXIgYm90dG9tTGluZSA9IHRoaXMuY2FudmFzV2lkdGggKiAodGhpcy5jYW52YXNIZWlnaHQgLSAxKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyByYW5kb20gcGl4ZWxzIGF0IHRoZSBib3R0b20gbGluZVxyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHRoaXMudGhyZXNob2xkKVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpcmVbYm90dG9tTGluZSArIHhdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtb3ZlIGZsaXAgdXB3YXJkcywgc3RhcnQgYXQgYm90dG9tXHJcbiAgICAgICAgdmFyIHZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmNhbnZhc0hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpcmVbYm90dG9tTGluZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRoaXMuZmlyZVtib3R0b21MaW5lIC0gdGhpcy5jYW52YXNXaWR0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLz0gMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA9PSB0aGlzLmNhbnZhc1dpZHRoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSAtIHRoaXMuY2FudmFzV2lkdGggKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAvPSAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZmlyZVtib3R0b21MaW5lICsgeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoICsgeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLz0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGJvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoICsgeDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYm90dG9tTGluZSAtPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNraXBSb3dzID0gMjsgLy8gc2tpcCB0aGUgYm90dG9tIDIgcm93c1xyXG5cclxuICAgICAgICAvLyByZW5kZXIgdGhlIGZsYW1lcyB1c2luZyBvdXIgY29sb3IgdGFibGVcclxuICAgICAgICBmb3IgKHZhciB5ID0gc2tpcFJvd3M7IHkgPCB0aGlzLmNhbnZhc0hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB5ICogdGhpcy5jYW52YXNXaWR0aCAqIDQgKyB4ICogNDtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlWyh5IC0gc2tpcFJvd3MpICogdGhpcy5jYW52YXNXaWR0aCArIHhdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNvbWV0aW1lcyBjaGFuZ2UgZmlyZSBpbnRlbnNpdHlcclxuICAgICAgICBpZiAodGhpcy5pbnRlbnNpdHkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9taXplVGhyZXNob2xkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZpcmUgfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZS50cyIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlbGV2aXNpb24gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGF0dHIoKSxcbiAgICAgICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGhhcm1vbm9ncmFtczogbWFueShcIkhhcm1vbm9ncmFtXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuVGVsZXZpc2lvbi5tb2RlbE5hbWUgPSBcIlRlbGV2aXNpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvbW9kZWwudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgeyBMYW1wIH0gZnJvbSAnLi4vZGV2aWNlcy9saWdodGluZy9MYW1wJztcclxuaW1wb3J0IHsgbGFtcFNlbGVjdG9yIH0gZnJvbSAnLi4vZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgTGFtcFZpZXdNb2RlbCB9IGZyb20gXCIuLi9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy92aWV3XCI7XHJcbmltcG9ydCB7IEZyb250IH0gZnJvbSBcIi4uL2RldmljZXMvaGlmaS9zcGVha2Vycy9Gcm9udFwiO1xyXG5pbXBvcnQgeyBTaWRlIH0gZnJvbSBcIi4uL2RldmljZXMvaGlmaS9zcGVha2Vycy9TaWRlXCI7XHJcbmltcG9ydCB7IEJhY2sgfSBmcm9tIFwiLi4vZGV2aWNlcy9oaWZpL3NwZWFrZXJzL0JhY2tcIjtcclxuaW1wb3J0IHsgU3BlYWtlclZpZXdNb2RlbCB9IGZyb20gXCIuLi9kZXZpY2VzL2hpZmkvbW9kZWxzL3ZpZXdcIjtcclxuaW1wb3J0IHsgZnJvbnRTcGVha2VyU2VsZWN0b3IsIHNpZGVTcGVha2VyU2VsZWN0b3IsIGJhY2tTcGVha2VyU2VsZWN0b3IgfSBmcm9tIFwiLi4vZGV2aWNlcy9oaWZpL21vZGVscy9zY2hlbWFcIjtcclxuaW1wb3J0IHsgU29mYSB9IGZyb20gXCIuL1NvZmFcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsYW1wczogTGFtcFZpZXdNb2RlbFtdO1xyXG4gICAgZnJvbnRTcGVha2VyczogU3BlYWtlclZpZXdNb2RlbFtdO1xyXG4gICAgc2lkZVNwZWFrZXJzOiBTcGVha2VyVmlld01vZGVsW107XHJcbiAgICBiYWNrU3BlYWtlcnM6IFNwZWFrZXJWaWV3TW9kZWxbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGxhbXBzOiBMYW1wVmlld01vZGVsW107XHJcbiAgICBmcm9udFNwZWFrZXJzOiBTcGVha2VyVmlld01vZGVsW107XHJcbiAgICBzaWRlU3BlYWtlcnM6IFNwZWFrZXJWaWV3TW9kZWxbXTtcclxuICAgIGJhY2tTcGVha2VyczogU3BlYWtlclZpZXdNb2RlbFtdO1xyXG59XHJcblxyXG5jbGFzcyBGbG9vciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGFtcHM6IHByb3BzLmxhbXBzLFxyXG4gICAgICAgICAgICBmcm9udFNwZWFrZXJzOiBwcm9wcy5mcm9udFNwZWFrZXJzLFxyXG4gICAgICAgICAgICBzaWRlU3BlYWtlcnM6IHByb3BzLnNpZGVTcGVha2VycyxcclxuICAgICAgICAgICAgYmFja1NwZWFrZXJzOiBwcm9wcy5iYWNrU3BlYWtlcnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsb29yc1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc2MCUnLCBtYXJnaW5MZWZ0OiAnMjAlJywgZmxvYXQ6ICdsZWZ0JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvb3ItY29udGFpbmVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb29yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MHB4JyB9fT4ge3RoaXMucHJvcHMuZnJvbnRTcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BlYWtlci1mcm9udC0nICsgc3BlYWtlci5wb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJvbnQga2V5PXtzcGVha2VyLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTBweCcgfX0+IHt0aGlzLnByb3BzLmxhbXBzLm1hcCgobGFtcCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnaHVlLScgKyBsYW1wLnBvc2l0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFtcCBrZXk9e2xhbXAuaWR9IGxhbXA9e2xhbXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcxNTBweCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb2ZhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzEzMHB4Jywgd2lkdGg6ICcxMDAlJyB9fT4ge3RoaXMucHJvcHMuc2lkZVNwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcGVha2VyLXNpZGUtJyArIHNwZWFrZXIucG9zaXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGUga2V5PXtzcGVha2VyLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcyMjBweCcsIHdpZHRoOiAnMTAwJScgfX0+IHt0aGlzLnByb3BzLmJhY2tTcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BlYWtlci1iYWNrLScgKyBzcGVha2VyLnBvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrIGtleT17c3BlYWtlci5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsYW1wczogbGFtcFNlbGVjdG9yKHN0YXRlLmxhbXApLFxyXG4gICAgICAgIGZyb250U3BlYWtlcnM6IGZyb250U3BlYWtlclNlbGVjdG9yKHN0YXRlLmhpZmkpLFxyXG4gICAgICAgIHNpZGVTcGVha2Vyczogc2lkZVNwZWFrZXJTZWxlY3RvcihzdGF0ZS5oaWZpKSxcclxuICAgICAgICBiYWNrU3BlYWtlcnM6IGJhY2tTcGVha2VyU2VsZWN0b3Ioc3RhdGUuaGlmaSlcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG51bGxcclxuKShGbG9vcik7XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9mbG9vci9GbG9vci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29mYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiwgcG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOiAnMzgwcHgnLCBtYXJnaW46ICcwIGF1dG8nIH19PlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29mYS5wbmdcIiB3aWR0aD1cIjM4MHB4XCIgaGVpZ2h0PVwiMTUwcHhcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMHB4JywgbGVmdDogJzAnICB9fSAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZmxvb3IvU29mYS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZWxldmlzaW9uIGZyb20gJy4uL2RldmljZXMvdGVsZXZpc2lvbi9UZWxldmlzaW9uJztcbmltcG9ydCBBbWJpbGlnaHQgZnJvbSAnLi4vZGV2aWNlcy9hbWJpbGlnaHQvQW1iaWxpZ2h0JztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIsIGZsb2F0OiBcImxlZnRcIiwgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1mcmFtZVwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjc1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL21hcmlseW4uanBnXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIiB3aWR0aD1cIjEyNXB4XCIgaGVpZ2h0PVwiMTcwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjI3MHB4XCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIsIHdpZHRoOiBcIjI1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1iaWxpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVsZXZpc2lvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1mcm9udC5wbmdcIiB3aWR0aD1cIjc1cHhcIiBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiwgY2xlYXI6IFwiYm90aFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGVsZlwiIHN0eWxlPXt7IHdpZHRoOiBcIjkwJVwiLCBoZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJUb3A6IFwiNXB4IHNvbGlkIHJnYmEoMTkzLCAxNTUsIDEwOCwgMSlcIiwgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCByZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIycHggc29saWQgIzQ0NDM0M1wiLCBib3JkZXJUb3A6IFwiMnB4IHNvbGlkICM0NDQzNDNcIiwgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYm94LXNoYWRvd1wiIHN0eWxlPXt7IHdpZHRoOiBcIjI1JVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wczQucG5nXCIgd2lkdGg9XCI3NXB4XCIgaGVpZ2h0PVwiMjVweFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMXB4XCIsIG1hcmdpbkxlZnQ6IFwiN3B4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2h0cGMuanBnXCIgd2lkdGg9XCI3NXB4XCIgaGVpZ2h0PVwiMzBweFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI3cHhcIiwgbWFyZ2luTGVmdDogXCI3cHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIGhlaWdodDogXCIzMDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBtYXJnaW5MZWZ0OiBcIjEwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJhbWUtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTkwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgYmFja2dyb3VuZDogXCJyZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTBweFwiLCBtYXJnaW5SaWdodDogXCIxMHB4XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgaGVpZ2h0OiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBoZWlnaHQ6IFwiNXB4XCIsIG1hcmdpblRvcDogXCI1MHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL3dhbGwvV2FsbC50c3giLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgU3RvcmVDcmVhdG9yLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCAqIGFzIEFwcFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4gICAgKShjcmVhdGVTdG9yZSkgYXMgU3RvcmVDcmVhdG9yO1xuXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xuXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIEFwcFN0b3JlPignLi9zdG9yZScpO1xuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZS50cyIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc2VydmljZXMvY2FtZXJhJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zZXJ2aWNlcy90ZWxldmlzaW9uJztcclxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcydcclxuaW1wb3J0IHsgQ2FtZXJhQWN0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgVGVsZXZpc2lvbkFjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvdGVsZXZpc2lvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuXHJcbmNvbnRhaW5lci5iaW5kPENhbWVyYVNlcnZpY2U+KFNlcnZpY2VzLkNhbWVyYVNlcnZpY2UpLnRvKENhbWVyYUFjdGlvblNlcnZpY2UpO1xyXG5jb250YWluZXIuYmluZDxUZWxldmlzaW9uU2VydmljZT4oU2VydmljZXMuVGVsZXZpc2lvblNlcnZpY2UpLnRvKFRlbGV2aXNpb25BY3Rpb25TZXJ2aWNlKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2lvYy9jb250YWluZXIudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdFxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e0xheW91dH0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnRzPXt7IGJvZHk6IEhvbWUgfX0gLz5cbiAgICA8L1JvdXRlPjtcblxuLy8gRW5hYmxlIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgKEhNUilcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9yb3V0ZXMudHN4IiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3NlcnZpY2VzL2NhbWVyYSc7XHJcbmltcG9ydCB7IENhbWVyYVZpZXdNb2RlbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvdmlld21vZGVsJztcclxuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFBY3Rpb25TZXJ2aWNlIGltcGxlbWVudHMgQ2FtZXJhU2VydmljZSB7XHJcblxyXG4gICAgYXN5bmMgZ2V0Q2FtZXJhU3RhdGUoaWQ6IG51bWJlcik6IFByb21pc2U8Q2FtZXJhVmlld01vZGVsPiB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvY2FtZXJhL2dldENhbWVyYXM/aWQ9JyArIGlkLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdmFyIGNhbWVyYSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiA8Q2FtZXJhVmlld01vZGVsPntcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGNhbWVyYS5pc01vdGlvbkRldGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGNhbWVyYS5pc1JlY29yZGluZ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvY2FtZXJhL3N0YXJ0UmVjb3JkaW5nJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCByZWNvcmRpbmcnKTtcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBzdG9wUmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvc3RvcFJlY29yZGluZycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcCByZWNvcmRpbmcnKTtcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL2NhbWVyYS50cyIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc2VydmljZXMvdGVsZXZpc2lvbic7XHJcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVsZXZpc2lvbkFjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBUZWxldmlzaW9uU2VydmljZSB7XHJcblxyXG4gICAgYXN5bmMgc2V0RmlyZXBsYWNlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy90ZWxldmlzaW9uL3NldEZpcmVwbGFjZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGZpcmVwbGFjZScpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIHNldFZpZGVvKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy90ZWxldmlzaW9uL3NldFZpZGVvJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgdmlkZW8nKTtcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90ZWxldmlzaW9uLnRzIiwiaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL21vZGVsXCI7XG5pbXBvcnQgeyBUZWxldmlzaW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL21vZGVscy9tb2RlbFwiO1xuaW1wb3J0IHsgQW1iaWxpZ2h0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQgeyBMYW1wIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9tb2RlbHMvbW9kZWxcIjtcbmltcG9ydCB7IEhpZmkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQgKiBhcyBEaXNwbGF5ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc3RhdGUvZGlzcGxheWVyXCI7XG5pbXBvcnQgKiBhcyBUZWxldmlzaW9uUmVkdWNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc3RhdGVzL3RlbGV2aXNpb25cIjtcbmltcG9ydCAqIGFzIEFtYmlsaWdodFJlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvcmVkdWNlclwiO1xuaW1wb3J0ICogYXMgTGFtcFJlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9yZWR1Y2VyXCI7XG5pbXBvcnQgKiBhcyBIaWZpUmVkdWNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3RhdGUvcmVkdWNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xuICAgIG5hdm1lbnU6IHt9LFxuICAgIGRpc3BsYXk6IERpc3BsYXksXG4gICAgdGVsZXZpc2lvbjogVGVsZXZpc2lvbixcbiAgICBhbWJpbGlnaHQ6IEFtYmlsaWdodCxcbiAgICBsYW1wOiBMYW1wLFxuICAgIGhpZmk6IEhpZmlcbn1cblxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XG4gICAgZGlzcGxheTogRGlzcGxheWVyLmRlZmF1bHQsXG4gICAgdGVsZXZpc2lvbjogVGVsZXZpc2lvblJlZHVjZXIuZGVmYXVsdCxcbiAgICBhbWJpbGlnaHQ6IEFtYmlsaWdodFJlZHVjZXIuZGVmYXVsdCxcbiAgICBsYW1wOiBMYW1wUmVkdWNlci5kZWZhdWx0LFxuICAgIGhpZmk6IEhpZmlSZWR1Y2VyLmRlZmF1bHRcbn07XG5cbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc3RvcmUvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBEaW1lbnNpb25zIHtcbiAgICBoZWlnaHQ6IHN0cmluZ1xufVxuXG52YXIgZ2V0RGltZW5zaW9ucyA9ICgpID0+ICh7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTAgKyAncHgnIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBEaW1lbnNpb25zPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBoZWlnaHQ6ICcxMDB2aCcgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXREaW1lbnNpb25zKCkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwgeyBzdHlsZTogeyBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0IH0gfSk7XG4gICAgICAgIC8vcmV0dXJuIDxkaXY+e2NoaWxkfTwvZGl2PjtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zaXRpb25Nb3Rpb24sIHNwcmluZyB9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IHdpbGxFbnRlciA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogMCxcbiAgICBzY2FsZTogMC45N1xufSk7XG5cbmNvbnN0IHdpbGxMZWF2ZSA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgIHNjYWxlOiBzcHJpbmcoMS4wMClcbn0pO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygxKSxcbiAgICBzY2FsZTogc3ByaW5nKDEpXG59KTtcblxuY29uc3QgUm91dGVUcmFuc2l0aW9uID0gKHsgY2hpbGRyZW46IGNoaWxkLCBwYXRobmFtZSB9KSA9PiAoXG4gICAgPFRyYW5zaXRpb25Nb3Rpb25cbiAgICAgICAgc3R5bGVzPXtbe1xuICAgICAgICAgICAga2V5OiBwYXRobmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiBnZXRTdHlsZXMoKSxcbiAgICAgICAgICAgIGRhdGE6IHsgY2hpbGQgfVxuICAgICAgICB9XX1cbiAgICAgICAgd2lsbEVudGVyPXt3aWxsRW50ZXJ9XG4gICAgICAgIHdpbGxMZWF2ZT17d2lsbExlYXZlfVxuICAgID5cbiAgICAgICAgeyhpbnRlcnBvbGF0ZWQpID0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtpbnRlcnBvbGF0ZWQubWFwKCh7IGtleSwgc3R5bGUsIGRhdGEgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtrZXl9LXRyYW5zaXRpb25gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHN0eWxlcy53cmFwcGVyLCB7IG9wYWNpdHk6IHN0eWxlLm9wYWNpdHksIHRyYW5zZm9ybTogYHNjYWxlKCR7c3R5bGUuc2NhbGV9KWAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNoaWxkfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L1RyYW5zaXRpb25Nb3Rpb24gPlxuKTtcblxudmFyIHN0eWxlcyA9IHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVUcmFuc2l0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2xpYi9yb3V0ZS10cmFuc2l0aW9uLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LDc3dS9QSE4yWnlCM2FXUjBhRDBpT1cxdElpQm9aV2xuYUhROUlqbHRiU0lnZG1sbGQwSnZlRDBpTUNBd0lERXdNQ0F4TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2RtVnljMmx2YmowaU1TNHlJaUJpWVhObFVISnZabWxzWlQwaWRHbHVlU0krQ2lBZ1BHUmxjMk0rVWxKUFJDQk1iMmR2UEM5a1pYTmpQZ29nSUR3aExTMGdVMmh2ZHlCdmRYUnNhVzVsSUc5bUlHTmhiblpoY3lCMWMybHVaeUFuY21WamRDY2daV3hsYldWdWRDQXRMVDRLSUNBOFkybHlZMnhsSUdONFBTSTFNQ0lnWTNrOUlqVXdJaUJ5UFNJME1DSWdabWxzYkQwaWQyaHBkR1VpSUhOMGNtOXJaVDBpY21Wa0lpQnpkSEp2YTJVdGQybGtkR2c5SWpFeUlpQWdMejRLUEM5emRtYytcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQXBwL2ltYWdlcy9sb2dvLnN2Z1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzcG5ldC1wcmVyZW5kZXJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCJcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9