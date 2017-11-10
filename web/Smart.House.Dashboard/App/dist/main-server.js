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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return playerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return settingsSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(44);


var orm = new __WEBPACK_IMPORTED_MODULE_0_redux_orm__["ORM"]();
orm.register(__WEBPACK_IMPORTED_MODULE_1__model__["a" /* Player */], __WEBPACK_IMPORTED_MODULE_1__model__["b" /* Settings */], __WEBPACK_IMPORTED_MODULE_1__model__["c" /* Harmonogram */]);
var playerSelector = orm.createSelector(function (session) {
    var player = session.Player.first();
    return {
        id: player.id,
        isActive: player.isActive,
        isRunning: player.isRunning,
        isPaused: player.isPaused,
        video: player.video,
        name: player.name
    };
});
var settingsSelector = orm.createSelector(function (session) {
    var settings = session.Player.first().ref.settings;
    return {
        id: settings.id,
        backgroundPlay: settings.backgroundPlay
    };
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
var Services = {
    CameraService: Symbol("CameraService"),
    TelevisionService: Symbol("TelevisionService"),
    PlayerService: Symbol("PlayerService")
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_EFFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD; });
var SET_EFFECT = 'SetEffectAction';
var ADD = 'AddAction';

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CAMERA; });
/* unused harmony export UPDATE_CAMERA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_orm__ = __webpack_require__(16);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_LAMP; });
var SET_COLOR = 'SetColorAction';
var ADD_LAMP = 'AddLampAction';

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PLAY_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_schema__ = __webpack_require__(4);
var _this = this;



var PLAY_VIDEO = 'PlayVideoAction';
var PAUSE = 'PauseAction';
var STOP = 'StopAction';
var ADD_PLAYER = 'AddPlayerAction';
var UPDATE_PLAYER = 'UpdatePlayerAction';
var actionCreators = {
    update: function update(id) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var session, state, newState;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                session = __WEBPACK_IMPORTED_MODULE_1__models_schema__["a" /* orm */].session(getState().player);
                                state = session.Player.withId(id);
                                newState = {
                                    name: state.name,
                                    id: state.id,
                                    video: state.video,
                                    isRunning: state.isRunning,
                                    isPaused: state.isPaused,
                                    isActive: state.isActive
                                };
                                _context.next = 5;
                                return dispatch({ type: UPDATE_PLAYER, payload: newState });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        };
    },
    playVideo: function playVideo(id, video) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return dispatch({ type: PLAY_VIDEO, payload: { id: id, video: video } });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        };
    },
    pause: function pause(id) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return dispatch({ type: PAUSE, payload: { id: id } });

                            case 2:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        };
    },
    stop: function stop(id) {
        return function (dispatch, getState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](_this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return dispatch({ type: STOP, payload: { id: id } });

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        };
    }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lazyInject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators__);



var _getDecorators = __WEBPACK_IMPORTED_MODULE_1_inversify_inject_decorators___default()(__WEBPACK_IMPORTED_MODULE_0__composition_ioc_container__["a" /* container */]);

var lazyInject = _getDecorators.lazyInject;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("domain-task");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TELEVISION_FIREPLACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TELEVISION_AQUARIUM; });
/* unused harmony export AquariumBackground */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return actionCreators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devices_ambilight_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_lighting_state_actions__ = __webpack_require__(9);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeAmbilightSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(30);


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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeCamerasSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(34);


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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return frontSpeakerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sideSpeakerSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return backSpeakerSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(35);


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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_SPEAKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_HIFI; });
var ADD_SPEAKER = 'AddSpeakerAction';
var ADD_HIFI = 'AddHifiAction';

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lampSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(41);


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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return activeTelevisionSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(50);


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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TELEVISION; });
/* unused harmony export actionCreators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_effects__ = __webpack_require__(14);



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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_routes__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__composition_configureStore__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_camera_state_displayer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__composition_components_devices_television_states_television__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__composition_components_devices_ambilight_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__composition_components_devices_lighting_state_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__composition_components_devices_hifi_state_actions__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__composition_components_devices_player_state_actions__ = __webpack_require__(10);













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
            store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_12__composition_components_devices_player_state_actions__["a" /* ADD_PLAYER */],
                payload: {
                    id: 1,
                    name: 'smart-player',
                    video: 'Detroit',
                    isRunning: false,
                    isPaused: false,
                    isActive: true,
                    settings: {
                        id: 1,
                        backgroundPlay: true
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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_fullscreen__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_camera_Displayer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__floor_Floor__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wall_Wall__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basement_Basement__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__background_Background__ = __webpack_require__(27);
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
                        { className: 'row', id: 'hero', style: { position: 'relative' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__background_Background__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__devices_camera_Displayer__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__wall_Wall__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__floor_Floor__["a" /* default */], null),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__basement_Basement__["a" /* default */], null)
                    )
                )
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_route_transition__ = __webpack_require__(65);
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_bootstrap__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var logo = __webpack_require__(66);

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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_player_models_schema__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Background = function (_React$Component) {
    _inherits(Background, _React$Component);

    function Background() {
        _classCallCheck(this, Background);

        var _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this));

        _this.state = {
            show: 0,
            play: false,
            pause: false,
            stop: false,
            isFullscreen: false,
            source: ''
        };
        return _this;
    }

    _createClass(Background, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var play = nextProps.player.isRunning && !nextProps.player.isPaused && nextProps.settings.backgroundPlay;
            var pause = nextProps.player.isPaused;
            var stop = !nextProps.player.isRunning && !nextProps.player.isPaused;
            this.setState({
                play: play,
                show: play ? 1 : stop ? 0 : 1,
                pause: pause,
                isFullscreen: false,
                source: nextProps.player.video
            });
            var video = this.refs.myVideo;
            if (play) {
                this.play(video);
            } else if (pause) {
                this.pause(video);
            } else if (stop) {
                this.stop(video);
            }
        }
    }, {
        key: 'play',
        value: function play(video) {
            video.play();
        }
    }, {
        key: 'stop',
        value: function stop(video) {
            video.pause();
            video.currentTime = 0;
        }
    }, {
        key: 'pause',
        value: function pause(video) {
            video.pause();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'video-container' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'video',
                    { ref: 'myVideo', style: { opacity: this.state.show }, poster: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('source', { src: 'video/Detroit.mp4', type: 'video/mp4' })
                )
            );
        }
    }]);

    return Background;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        player: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__devices_player_models_schema__["b" /* playerSelector */])(state.player),
        settings: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__devices_player_models_schema__["c" /* settingsSelector */])(state.player)
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, null)(Background));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devices_player_Player__ = __webpack_require__(43);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Basement = function (_React$Component) {
    _inherits(Basement, _React$Component);

    function Basement() {
        _classCallCheck(this, Basement);

        return _possibleConstructorReturn(this, (Basement.__proto__ || Object.getPrototypeOf(Basement)).apply(this, arguments));
    }

    _createClass(Basement, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'bottom' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: '400px', height: '105px', float: "left" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'player-media-type' },
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
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__devices_player_Player__["a" /* default */], null)
            );
        }
    }]);

    return Basement;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Basement);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_schema__ = __webpack_require__(15);
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
/* 30 */
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(7);



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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_ioc_decorators__ = __webpack_require__(11);
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_orm__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_displayer__ = __webpack_require__(8);
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(18);



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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(9);



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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_ioc_decorators__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composition_services_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_schema__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_actions__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Player = function (_React$Component) {
    _inherits(Player, _React$Component);

    function Player() {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

        _this.state = {
            isRunning: false,
            isPaused: false,
            video: ''
        };
        return _this;
    }

    _createClass(Player, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                video: nextProps.player.video,
                isPaused: nextProps.player.isPaused,
                isRunning: nextProps.player.isRunning
            });
        }
    }, {
        key: 'play',
        value: function play(playVideo, pause) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.state.isPaused) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 3;
                                return this._service.pause(this.props.player.id);

                            case 3:
                                _context.next = 5;
                                return pause(this.props.player.id);

                            case 5:
                                _context.next = 11;
                                break;

                            case 7:
                                _context.next = 9;
                                return this._service.playVideo(this.props.player.id, this.state.video);

                            case 9:
                                _context.next = 11;
                                return playVideo(this.props.player.id, this.state.video);

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: 'pause',
        value: function pause(updateState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this._service.pause(this.props.player.id);

                            case 2:
                                _context2.next = 4;
                                return updateState(this.props.player.id);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: 'stop',
        value: function stop(updateState) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._service.stop(this.props.player.id);

                            case 2:
                                _context3.next = 4;
                                return updateState(this.props.player.id);

                            case 4:
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

            var _props = this.props,
                playVideo = _props.playVideo,
                pause = _props.pause,
                stop = _props.stop;

            return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                'div',
                { className: 'player', style: { marginTop: "10px", marginLeft: '10px', height: "90px", width: "550px", float: "left", position: "relative" } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'div',
                    { style: { float: 'left', width: '60px', height: '60px', marginTop: '15px' } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { src: 'images/knob.png', height: '60px', width: '60px' })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('div', { className: 'player-left', style: { width: "15px", height: "90px", float: 'left', marginLeft: '15px' } }),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'div',
                    { style: { float: 'left', position: 'relative', width: "320px", height: '90px' } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { style: { position: "absolute", width: "320px", left: "20px", display: "inline-block" } },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'output',
                            { className: 'player-display', style: { width: "200px", padding: "0 10px", display: "inline-block", fontSize: "15px", lineHeight: "40px" } },
                            'Ready to play'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-backward', style: { fontSize: "15px", marginLeft: "10px" } },
                            ' '
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { className: this.state.isRunning ? "glyphicon glyphicon-pause player-button" : "glyphicon glyphicon-play player-button", onClick: function onClick() {
                                    return _this2.state.isRunning ? _this2.pause(pause) : _this2.play(playVideo, pause);
                                }, style: { fontSize: "20px", marginLeft: "10px" } },
                            ' '
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-stop player-button', onClick: function onClick() {
                                    return _this2.stop(stop);
                                }, style: { fontSize: "15px", marginLeft: "10px" } },
                            ' '
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-forward', style: { fontSize: "15px", marginLeft: "10px" } },
                            ' '
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                        'div',
                        { style: { position: "absolute", width: "320px", bottom: "10px", left: "20px", display: "inline-block" } },
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-eject', style: { fontSize: "15px", display: "inline-block" } },
                            ' '
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'output',
                            { className: 'player-drive', style: { padding: "5px", lineHeight: "15px", marginLeft: "25px", width: "225px", display: "inline-block" } },
                            'Detroit'
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-folder-open', style: { fontSize: "15px", marginLeft: "25px" } },
                            ' '
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('div', { className: 'player-right', style: { float: 'left', width: "15px", height: "90px", marginLeft: '15px', marginRight: '15px' } }),
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'div',
                    { style: { float: 'left', width: '60px', height: '60px', marginTop: '15px' } },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]('img', { src: 'images/knob.png', height: '60px', width: '60px' })
                )
            );
        }
    }]);

    return Player;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__composition_ioc_decorators__["a" /* lazyInject */])(__WEBPACK_IMPORTED_MODULE_4__composition_services_types__["a" /* Services */].PlayerService), __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)], Player.prototype, "_service", void 0);
var mapStateToProps = function mapStateToProps(state) {
    return {
        player: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__models_schema__["b" /* playerSelector */])(state.player)
    };
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_6__state_actions__["f" /* actionCreators */])(Player));
if (false) {
    module.hot.accept();
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Harmonogram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_orm__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Player = function (_Model) {
    _inherits(Player, _Model);

    function Player() {
        _classCallCheck(this, Player);

        return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));
    }

    _createClass(Player, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                video: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isRunning: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isPaused: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                isActive: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                settings: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["oneToOne"])("Settings"),
                harmonograms: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["many"])("Harmonogram")
            };
        }
    }]);

    return Player;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Player.modelName = "Player";
var Settings = function (_Model2) {
    _inherits(Settings, _Model2);

    function Settings() {
        _classCallCheck(this, Settings);

        return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
    }

    _createClass(Settings, null, [{
        key: "fields",
        get: function get() {
            return {
                id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])(),
                backgroundPlay: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["attr"])()
            };
        }
    }]);

    return Settings;
}(__WEBPACK_IMPORTED_MODULE_0_redux_orm__["Model"]);
Settings.modelName = "Settings";
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_schema__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_orm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_orm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(10);



var reducer = function reducer(session, action) {
    var Player = session.Player;

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* PLAY_VIDEO */]:
            Player.withId(action.payload.id).update({ video: action.payload.video, isRunning: true, isPaused: false });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* PAUSE */]:
            Player.withId(action.payload.id).update({ isRunning: false, isPaused: true });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* STOP */]:
            Player.withId(action.payload.id).update({ isRunning: false, isPaused: false });
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* ADD_PLAYER */]:
            Player.create(action.payload);
            break;
        case __WEBPACK_IMPORTED_MODULE_2__actions__["e" /* UPDATE_PLAYER */]:
            Player.withId(action.payload.id).update(action.payload);
    }
    return session.state;
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_orm__["createReducer"])(__WEBPACK_IMPORTED_MODULE_0__models_schema__["a" /* orm */], reducer));

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_ioc_decorators__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composition_services_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__composition_components_actions_effects__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_schema__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__composition_components_devices_television_effects_fireplace_fire__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__effects_aquarium_aquarium__ = __webpack_require__(47);
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aquarium; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fish__ = __webpack_require__(48);
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_lighting_Lamp__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_lighting_models_schema__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devices_hifi_speakers_Front__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__devices_hifi_speakers_Side__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__devices_hifi_speakers_Back__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__devices_hifi_models_schema__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Sofa__ = __webpack_require__(52);
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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Picture = function (_React$Component) {
    _inherits(Picture, _React$Component);

    function Picture() {
        _classCallCheck(this, Picture);

        return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));
    }

    _createClass(Picture, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                "div",
                { className: "image-frame", style: { float: "right", marginRight: "75px" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "/images/marilyn.jpg", className: "image", width: "125px", height: "170px" })
            );
        }
    }]);

    return Picture;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Picture);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devices_television_Television__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_ambilight_Ambilight__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shelf_Shelf__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookcase_Bookcase__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Picture__ = __webpack_require__(53);
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
                { className: 'center', style: { display: "block", height: "300px", marginTop: '28px' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: "40%", float: "left", height: "300px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Picture__["a" /* default */], null)
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
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shelf_Shelf__["a" /* default */], null)
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: "40%", float: "right", height: "300px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { float: "left", marginLeft: "100px" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__bookcase_Bookcase__["a" /* default */], null)
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Bookcase = function (_React$Component) {
    _inherits(Bookcase, _React$Component);

    function Bookcase() {
        _classCallCheck(this, Bookcase);

        return _possibleConstructorReturn(this, (Bookcase.__proto__ || Object.getPrototypeOf(Bookcase)).apply(this, arguments));
    }

    _createClass(Bookcase, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                "div",
                { className: "frame-shadow", style: { width: "190px", height: "80px", background: "rgba(193, 155, 108, 1)", display: "inline-block" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    "div",
                    { className: "shadow", style: { marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "10px" } },
                    " "
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    "div",
                    { className: "shadow", style: { marginLeft: "10px", marginRight: "10px", background: "white", height: "5px", marginTop: "50px" } },
                    " "
                )
            );
        }
    }]);

    return Bookcase;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Bookcase);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Shelf = function (_React$Component) {
    _inherits(Shelf, _React$Component);

    function Shelf() {
        _classCallCheck(this, Shelf);

        return _possibleConstructorReturn(this, (Shelf.__proto__ || Object.getPrototypeOf(Shelf)).apply(this, arguments));
    }

    _createClass(Shelf, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { style: { position: 'relative' } },
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
            );
        }
    }]);

    return Shelf;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Shelf);

if (false) {
    module.hot.accept();
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(63);




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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__composition_services_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__composition_services_camera__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composition_services_television__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__composition_services_player__ = __webpack_require__(61);





var container = new __WEBPACK_IMPORTED_MODULE_0_inversify__["Container"]();
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].CameraService).to(__WEBPACK_IMPORTED_MODULE_2__composition_services_camera__["a" /* CameraActionService */]);
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].TelevisionService).to(__WEBPACK_IMPORTED_MODULE_3__composition_services_television__["a" /* TelevisionActionService */]);
container.bind(__WEBPACK_IMPORTED_MODULE_1__composition_services_types__["a" /* Services */].PlayerService).to(__WEBPACK_IMPORTED_MODULE_4__composition_services_player__["a" /* PlayerActionService */]);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(24);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } })
));

if (false) {
    module.hot.accept();
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(12);
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
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_domain_task__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var PlayerActionService = function () {
    function PlayerActionService() {
        _classCallCheck(this, PlayerActionService);
    }

    _createClass(PlayerActionService, [{
        key: "playVideo",
        value: function playVideo(id, video) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/television/setVideo', {
                                    method: 'POST',
                                    body: JSON.stringify(id),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context.sent;

                                if (response.ok) {
                                    console.log('play video');
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
        key: "pause",
        value: function pause(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/television/pausePlayer', {
                                    method: 'POST',
                                    body: JSON.stringify(id),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context2.sent;

                                if (response.ok) {
                                    console.log('pause player');
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
        key: "stop",
        value: function stop(id) {
            return __WEBPACK_IMPORTED_MODULE_0_tslib__["__awaiter"](this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_domain_task__["fetch"])('/television/stopPlayer', {
                                    method: 'POST',
                                    body: JSON.stringify(id),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                });

                            case 2:
                                response = _context3.sent;

                                if (response.ok) {
                                    console.log('stop player');
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

    return PlayerActionService;
}();
PlayerActionService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inversify__["injectable"])()], PlayerActionService);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelevisionActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tslib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inversify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inversify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_domain_task__ = __webpack_require__(12);
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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_devices_ambilight_state_reducer__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_devices_lighting_state_reducer__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_devices_hifi_state_reducer__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_devices_player_state_reducer__ = __webpack_require__(45);







var reducers = {
    display: __WEBPACK_IMPORTED_MODULE_0__components_devices_camera_state_displayer__["c" /* default */],
    television: __WEBPACK_IMPORTED_MODULE_1__components_devices_television_states_television__["b" /* default */],
    ambilight: __WEBPACK_IMPORTED_MODULE_2__components_devices_ambilight_state_reducer__["a" /* default */],
    lamp: __WEBPACK_IMPORTED_MODULE_3__components_devices_lighting_state_reducer__["a" /* default */],
    hifi: __WEBPACK_IMPORTED_MODULE_4__components_devices_hifi_state_reducer__["a" /* default */],
    player: __WEBPACK_IMPORTED_MODULE_5__components_devices_player_state_reducer__["a" /* default */]
};

/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(71);
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
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB3aWR0aD0iOW1tIiBoZWlnaHQ9IjltbSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSI+CiAgPGRlc2M+UlJPRCBMb2dvPC9kZXNjPgogIDwhLS0gU2hvdyBvdXRsaW5lIG9mIGNhbnZhcyB1c2luZyAncmVjdCcgZWxlbWVudCAtLT4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEyIiAgLz4KPC9zdmc+"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("inversify-inject-decorators");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(22);


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjllOTQwOTU2Zjc3YzAwY2JkNWEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1vcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0c2xpYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5XCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbWFpbi10YXNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvYWN0aW9ucy9lZmZlY3RzLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L21vZGVscy9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvb3JtLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9tb2RlbHMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc3RhdGVzL3RlbGV2aXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9iYXNlbWVudC9CYXNlbWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvQW1iaWxpZ2h0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9tb2RlbHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0Rpc3BsYXllci50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL21vZGVscy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvQmFjay50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3NwZWFrZXJzL0Zyb250LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvU2lkZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3N0YXRlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9MYW1wLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL3N0YXRlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvUGxheWVyLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9tb2RlbHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vVGVsZXZpc2lvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vYXF1YXJpdW0udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vZmlzaC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Zsb29yL0Zsb29yLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9mbG9vci9Tb2ZhLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL1BpY3R1cmUudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL3dhbGwvV2FsbC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvd2FsbC9ib29rY2FzZS9Cb29rY2FzZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvd2FsbC9zaGVsZi9TaGVsZi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9pb2MvY29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy9jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdGVsZXZpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL3JvdXRlLXRyYW5zaXRpb24udHN4Iiwid2VicGFjazovLy8uL0FwcC9pbWFnZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxrQzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUN3QjtBQUdqRCxJQUFTLE1BQUcsSUFBVTtBQUMxQixJQUFTLFNBQU8sd0RBQVUsMERBQWU7QUFFdEMsSUFBcUIscUJBQXFCLGVBQVE7QUFFcEQsUUFBVSxTQUFVLFFBQU8sT0FBUztBQUU5QjtBQUNBLFlBQVEsT0FBRztBQUNMLGtCQUFRLE9BQVM7QUFDaEIsbUJBQVEsT0FBVTtBQUNuQixrQkFBUSxPQUFTO0FBQ3BCLGVBQVEsT0FBTTtBQUNmLGNBQVEsT0FFcEI7QUFSNEI7QUFRekIsQ0FaOEIsQ0FBMUI7QUFjRCxJQUF1Qix1QkFBcUIsZUFBUTtBQUV0RCxRQUFZLFdBQVUsUUFBTyxPQUFRLFFBQUksSUFBVTtBQUU3QztBQUNBLFlBQVUsU0FBRztBQUNELHdCQUFVLFNBRWhDO0FBSjhCO0FBSTNCLENBUmdDLENBQTVCLEM7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QUEsK0M7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3d3d3Jvb3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY5ZTk0MDk1NmY3N2MwMGNiZDVhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LW9ybVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LW9ybVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRzbGliXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidHNsaWJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgUGxheWVyLCBTZXR0aW5ncywgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgUGxheWVyVmlld01vZGVsLCBTZXR0aW5nc1ZpZXdNb2RlbCB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoUGxheWVyLCBTZXR0aW5ncywgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXllclNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG5cclxuICAgIHZhciBwbGF5ZXIgPSBzZXNzaW9uLlBsYXllci5maXJzdCgpO1xyXG5cclxuICAgIHJldHVybiA8UGxheWVyVmlld01vZGVsPntcclxuICAgICAgICBpZDogcGxheWVyLmlkLFxyXG4gICAgICAgIGlzQWN0aXZlOiBwbGF5ZXIuaXNBY3RpdmUsXHJcbiAgICAgICAgaXNSdW5uaW5nOiBwbGF5ZXIuaXNSdW5uaW5nLFxyXG4gICAgICAgIGlzUGF1c2VkOiBwbGF5ZXIuaXNQYXVzZWQsXHJcbiAgICAgICAgdmlkZW86IHBsYXllci52aWRlbyxcclxuICAgICAgICBuYW1lOiBwbGF5ZXIubmFtZVxyXG4gICAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3NTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuXHJcbiAgICB2YXIgc2V0dGluZ3MgPSBzZXNzaW9uLlBsYXllci5maXJzdCgpLnJlZi5zZXR0aW5ncztcclxuXHJcbiAgICByZXR1cm4gPFNldHRpbmdzVmlld01vZGVsPntcclxuICAgICAgICBpZDogc2V0dGluZ3MuaWQsXHJcbiAgICAgICAgYmFja2dyb3VuZFBsYXk6IHNldHRpbmdzLmJhY2tncm91bmRQbGF5XHJcbiAgICB9O1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9tb2RlbHMvc2NoZW1hLnRzIiwiZXhwb3J0IGNvbnN0IFNlcnZpY2VzID0ge1xyXG4gICAgQ2FtZXJhU2VydmljZTogU3ltYm9sKFwiQ2FtZXJhU2VydmljZVwiKSxcclxuICAgIFRlbGV2aXNpb25TZXJ2aWNlOiBTeW1ib2woXCJUZWxldmlzaW9uU2VydmljZVwiKSxcclxuICAgIFBsYXllclNlcnZpY2U6IFN5bWJvbChcIlBsYXllclNlcnZpY2VcIilcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbnZlcnNpZnlcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBbWJpbGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9FRkZFQ1QgPSAnU2V0RWZmZWN0QWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0RWZmZWN0QWN0aW9uIHtcclxuICAgIHR5cGU6ICdTZXRFZmZlY3RBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcGF0dGVybjogc3RyaW5nXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREID0gJ0FkZEFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IEFtYmlsaWdodDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9hY3Rpb25zLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbC92aWV3bW9kZWwnO1xyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbC9vcm0nO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRElTUExBWSA9ICdDcmVhdGVEaXNwbGF5QWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQU1FUkEgPSAnQWRkQ2FtZXJhQWN0aW9uJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DQU1FUkEgPSAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRGlzcGxheUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQ3JlYXRlRGlzcGxheUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkQ2FtZXJhQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRDYW1lcmFBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGRpc3BsYXk6IG51bWJlcixcclxuICAgICAgICBjYW1lcmE6IENhbWVyYVZpZXdNb2RlbFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUNhbWVyYUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVXBkYXRlQ2FtZXJhQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IENhbWVyYVZpZXdNb2RlbDtcclxufVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IENyZWF0ZURpc3BsYXlBY3Rpb24gfCBBZGRDYW1lcmFBY3Rpb24gfCBVcGRhdGVDYW1lcmFBY3Rpb25cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHVwZGF0ZUNhbWVyYTogKGNhbWVyYTogQ2FtZXJhVmlld01vZGVsKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG9ybS5zZXNzaW9uKGdldFN0YXRlKCkuZGlzcGxheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuXG4gICAgICAgIHZhciBzdGF0ZSA9IHNlc3Npb24uQ2FtZXJhLndpdGhJZChjYW1lcmEuaWQpO1xuXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IDxDYW1lcmFWaWV3TW9kZWw+e1xuICAgICAgICAgICAgbmFtZTogc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXG4gICAgICAgICAgICBpZDogc3RhdGUuaWQsXG4gICAgICAgICAgICBpc1JlY29yZGluZzogY2FtZXJhLmlzUmVjb3JkaW5nLFxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogY2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWRcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9DQU1FUkEsIHBheWxvYWQ6IG5ld1N0YXRlIH0pO1xuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc2Vzc2lvbiwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBEaXNwbGF5LCBDYW1lcmEgfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQ1JFQVRFX0RJU1BMQVk6XHJcbiAgICAgICAgICAgIERpc3BsYXkuY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ0FNRVJBOlxyXG4gICAgICAgICAgICBDYW1lcmEuY3JlYXRlKGFjdGlvbi5wYXlsb2FkLmNhbWVyYSk7XHJcbiAgICAgICAgICAgIERpc3BsYXkud2l0aElkKGFjdGlvbi5wYXlsb2FkLmRpc3BsYXkpXHJcbiAgICAgICAgICAgICAgICAuY2FtZXJhcy5hZGQoQ2FtZXJhLndpdGhJZChhY3Rpb24ucGF5bG9hZC5jYW1lcmEuaWQpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVUERBVEVfQ0FNRVJBOlxyXG4gICAgICAgICAgICBDYW1lcmEud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiA8RGlzcGxheT5zZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllci50cyIsImltcG9ydCB7IExhbXAgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9DT0xPUiA9ICdTZXRDb2xvckFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldENvbG9yQWN0aW9uIHtcclxuICAgIHR5cGU6ICdTZXRDb2xvckFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBjb2xvcjogc3RyaW5nXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0xBTVAgPSAnQWRkTGFtcEFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZExhbXBBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZExhbXBBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogTGFtcDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL3N0YXRlL2FjdGlvbnMudHMiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdmlldyc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFZX1ZJREVPID0gJ1BsYXlWaWRlb0FjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlWaWRlb0FjdGlvbiB7XHJcbiAgICB0eXBlOiAnUGxheVZpZGVvQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHZpZGVvOiBzdHJpbmdcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQQVVTRSA9ICdQYXVzZUFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhdXNlQWN0aW9uIHtcclxuICAgIHR5cGU6ICdQYXVzZUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlclxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUT1AgPSAnU3RvcEFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0b3BBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1N0b3BBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXJcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUExBWUVSID0gJ0FkZFBsYXllckFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZFBsYXllckFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkUGxheWVyQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IFBsYXllcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9QTEFZRVIgPSAnVXBkYXRlUGxheWVyQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUGxheWVyQWN0aW9uIHtcclxuICAgIHR5cGU6ICdVcGRhdGVQbGF5ZXJBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogUGxheWVyVmlld01vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBLbm93bkFjdGlvbiA9IFBsYXlWaWRlb0FjdGlvbiB8IFBhdXNlQWN0aW9uIHwgQWRkUGxheWVyQWN0aW9uIHwgVXBkYXRlUGxheWVyQWN0aW9uIHwgU3RvcEFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHVwZGF0ZTogKGlkOiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gb3JtLnNlc3Npb24oZ2V0U3RhdGUoKS5wbGF5ZXIpO1xuXG4gICAgICAgIHZhciBzdGF0ZSA9IHNlc3Npb24uUGxheWVyLndpdGhJZChpZCk7XG5cbiAgICAgICAgdmFyIG5ld1N0YXRlID0gPFBsYXllclZpZXdNb2RlbD4ge1xuICAgICAgICAgICAgbmFtZTogc3RhdGUubmFtZSxcbiAgICAgICAgICAgIGlkOiBzdGF0ZS5pZCxcbiAgICAgICAgICAgIHZpZGVvOiBzdGF0ZS52aWRlbyxcbiAgICAgICAgICAgIGlzUnVubmluZzogc3RhdGUuaXNSdW5uaW5nLFxuICAgICAgICAgICAgaXNQYXVzZWQ6IHN0YXRlLmlzUGF1c2VkLFxuICAgICAgICAgICAgaXNBY3RpdmU6IHN0YXRlLmlzQWN0aXZlXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfUExBWUVSLCBwYXlsb2FkOiBuZXdTdGF0ZSB9KTtcbiAgICB9LFxyXG5cclxuICAgIHBsYXlWaWRlbzogKGlkOiBudW1iZXIsIHZpZGVvOiBzdHJpbmcpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFBMQVlfVklERU8sIHBheWxvYWQ6IHsgaWQ6IGlkLCB2aWRlbzogdmlkZW8gfSB9KTtcbiAgICB9LFxyXG5cclxuICAgIHBhdXNlOiAoaWQ6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogUEFVU0UsIHBheWxvYWQ6IHsgaWQ6IGlkIH0gfSk7XG4gICAgfSxcclxuXHJcbiAgICBzdG9wOiAoaWQ6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogU1RPUCwgcGF5bG9hZDogeyBpZDogaWQgfSB9KTtcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvc3RhdGUvYWN0aW9ucy50cyIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2lvYy9jb250YWluZXInXHJcbmltcG9ydCBnZXREZWNvcmF0b3JzIGZyb20gXCJpbnZlcnNpZnktaW5qZWN0LWRlY29yYXRvcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGxhenlJbmplY3QgfSA9IGdldERlY29yYXRvcnMoY29udGFpbmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb21haW4tdGFza1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRvbWFpbi10YXNrXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi9jb21wb3NpdGlvbi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIEFtYmlsaWdodCBmcm9tICcuLi9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9hY3Rpb25zJ1xyXG5pbXBvcnQgKiBhcyBMYW1wIGZyb20gJy4uL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvYWN0aW9ucydcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVEVMRVZJU0lPTl9GSVJFUExBQ0UgPSAnVGVsZXZpc2lvbkZpcmVwbGFjZUFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1RlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgdmFsdWU6IGJvb2xlYW5cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBURUxFVklTSU9OX0FRVUFSSVVNID0gJ1RlbGV2aXNpb25BcXVhcml1bUFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlbGV2aXNpb25BcXVhcml1bUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVGVsZXZpc2lvbkFxdWFyaXVtQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHZhbHVlOiBib29sZWFuXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IFRlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24gfCBUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24gfCBBbWJpbGlnaHQuU2V0RWZmZWN0QWN0aW9uIHwgTGFtcC5TZXRDb2xvckFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcXVhcml1bUJhY2tncm91bmQgPSAndXJsKGltYWdlcy9iYWNrZ3JvdW5kLWZsaXAyLmpwZyknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgc2V0RmlyZXBsYWNlOiAoaWQ6IG51bWJlciwgdmFsdWU6IGJvb2xlYW4pOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFRFTEVWSVNJT05fRklSRVBMQUNFLCBwYXlsb2FkOiB7IGlkOiBpZCwgdmFsdWU6IHZhbHVlfSB9KTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBMYW1wLlNFVF9DT0xPUiwgcGF5bG9hZDogeyBpZDogMSwgY29sb3I6IHZhbHVlID8gJ29yYW5nZScgOiAnJyB9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IExhbXAuU0VUX0NPTE9SLCBwYXlsb2FkOiB7IGlkOiAyLCBjb2xvcjogdmFsdWUgPyAnb3JhbmdlJyA6ICcnIH0gfSk7XG4gICAgfSxcclxuXHJcbiAgICBzZXRBcXVhcml1bTogKGlkOiBudW1iZXIsIHZhbHVlOiBib29sZWFuKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBURUxFVklTSU9OX0FRVUFSSVVNLCBwYXlsb2FkOiB7IGlkOiBpZCwgdmFsdWU6IHZhbHVlIH0gfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogQW1iaWxpZ2h0LlNFVF9FRkZFQ1QsIHBheWxvYWQ6IHsgaWQ6IGlkLCBwYXR0ZXJuOiB2YWx1ZSA/IEFxdWFyaXVtQmFja2dyb3VuZCA6ICcnIH0gfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogTGFtcC5TRVRfQ09MT1IsIHBheWxvYWQ6IHsgaWQ6IDEsIGNvbG9yOiB2YWx1ZSA/ICdkb2RnZXJibHVlJyA6ICcnIH0gfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogTGFtcC5TRVRfQ09MT1IsIHBheWxvYWQ6IHsgaWQ6IDIsIGNvbG9yOiB2YWx1ZSA/ICdkb2RnZXJibHVlJyA6ICcnIH0gfSk7XG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2FjdGlvbnMvZWZmZWN0cy50cyIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IEFtYmlsaWdodCwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgQW1iaWxpZ2h0Vmlld01vZGVsIH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBvcm0gPSBuZXcgT1JNKCk7XHJcbm9ybS5yZWdpc3RlcihBbWJpbGlnaHQsIEhhcm1vbm9ncmFtKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVBbWJpbGlnaHRTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuXHJcbiAgICB2YXIgYW1iaWxpZ2h0ID0gc2Vzc2lvbi5BbWJpbGlnaHQuZmlyc3QoKTtcclxuXHJcbiAgICByZXR1cm4gPEFtYmlsaWdodFZpZXdNb2RlbD57XHJcbiAgICAgICAgaWQ6IGFtYmlsaWdodC5pZCxcclxuICAgICAgICBpc0FjdGl2ZTogYW1iaWxpZ2h0LmlzQWN0aXZlLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGFtYmlsaWdodC5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIG5hbWU6IGFtYmlsaWdodC5uYW1lXHJcbiAgICB9O1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9tb2RlbHMvc2NoZW1hLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgRGlzcGxheSwgQ2FtZXJhLCBIYXJtb25vZ3JhbSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXdtb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoRGlzcGxheSwgQ2FtZXJhLCBIYXJtb25vZ3JhbSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlQ2FtZXJhc1NlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2Vzc2lvbik7XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uRGlzcGxheUNhbWVyYXMuYWxsKCkudG9SZWZBcnJheSgpLm1hcChjYW1lcmEgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHNlc3Npb24uQ2FtZXJhLndpdGhJZChjYW1lcmEudG9DYW1lcmFJZCk7XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FtZXJhVmlld01vZGVsPiB7XHJcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IG9iai5uYW1lLFxyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogb2JqLmlzUmVjb3JkaW5nLFxuICAgICAgICAgICAgYWRkcmVzczogJ2h0dHA6Ly8xOTIuMTY4LjAuMjM0L2ltYWdlL2pwZWcuY2dpJyxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IG9iai5pc01vdGlvbkRldGVjdGVkXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9vcm0udHMiLCJpbXBvcnQgeyBPUk0gfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgeyBIaWZpLCBTcGVha2VyLCBIYXJtb25vZ3JhbSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBTcGVha2VyVmlld01vZGVsIH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBvcm0gPSBuZXcgT1JNKCk7XHJcbm9ybS5yZWdpc3RlcihIaWZpLCBTcGVha2VyLCBIYXJtb25vZ3JhbSk7XHJcblxyXG5leHBvcnQgY29uc3QgZnJvbnRTcGVha2VyU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IHNlc3Npb24uU3BlYWtlci5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHsgcmV0dXJuIHNwZWFrZXIudHlwZSA9PT0gJ0Zyb250JyB9KTtcclxuICAgIHJldHVybiBzZWN0aW9ucy50b1JlZkFycmF5KCkubWFwKHNwZWFrZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiA8U3BlYWtlclZpZXdNb2RlbD57XHJcbiAgICAgICAgICAgIGlkOiBzcGVha2VyLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogc3BlYWtlci5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgdHlwZTogc3BlYWtlci50eXBlLFxyXG4gICAgICAgICAgICBuYW1lOiBzcGVha2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzcGVha2VyLnBvc2l0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWRlU3BlYWtlclNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBzZXNzaW9uLlNwZWFrZXIuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7IHJldHVybiBzcGVha2VyLnR5cGUgPT09ICdTaWRlJyB9KTtcclxuICAgIHJldHVybiBzZWN0aW9ucy50b1JlZkFycmF5KCkubWFwKHNwZWFrZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiA8U3BlYWtlclZpZXdNb2RlbD57XHJcbiAgICAgICAgICAgIGlkOiBzcGVha2VyLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogc3BlYWtlci5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgdHlwZTogc3BlYWtlci50eXBlLFxyXG4gICAgICAgICAgICBuYW1lOiBzcGVha2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzcGVha2VyLnBvc2l0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYWNrU3BlYWtlclNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBzZXNzaW9uLlNwZWFrZXIuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7IHJldHVybiBzcGVha2VyLnR5cGUgPT09ICdCYWNrJyB9KTtcclxuICAgIHJldHVybiBzZWN0aW9ucy50b1JlZkFycmF5KCkubWFwKHNwZWFrZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiA8U3BlYWtlclZpZXdNb2RlbD57XHJcbiAgICAgICAgICAgIGlkOiBzcGVha2VyLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogc3BlYWtlci5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgdHlwZTogc3BlYWtlci50eXBlLFxyXG4gICAgICAgICAgICBuYW1lOiBzcGVha2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzcGVha2VyLnBvc2l0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvbW9kZWxzL3NjaGVtYS50cyIsImltcG9ydCB7IEhpZmksIFNwZWFrZXIgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBTcGVha2VyVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9TUEVBS0VSID0gJ0FkZFNwZWFrZXJBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRTcGVha2VyQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRTcGVha2VyQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBoaWZpOiBudW1iZXIsXHJcbiAgICAgICAgc3BlYWtlcjogU3BlYWtlclxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9ISUZJID0gJ0FkZEhpZmlBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRIaWZpQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRIaWZpQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IEhpZmk7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9hY3Rpb25zLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgTGFtcCwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgTGFtcFZpZXdNb2RlbCB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoTGFtcCwgSGFybW9ub2dyYW0pO1xyXG5cclxubGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhbXBTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIHJldHVybiBzZXNzaW9uLkxhbXAuYWxsKCkudG9SZWZBcnJheSgpLm1hcChsYW1wID0+IHtcclxuICAgICAgICByZXR1cm4gPExhbXBWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICBpZDogbGFtcC5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGxhbXAuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGNvbG9yOiBsYW1wLmNvbG9yLFxyXG4gICAgICAgICAgICBuYW1lOiBsYW1wLm5hbWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBsYW1wLnBvc2l0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy9zY2hlbWEudHMiLCJpbXBvcnQgeyBPUk0gfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uLCBIYXJtb25vZ3JhbSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uVmlld01vZGVsIH0gZnJvbSAnLi92aWV3bW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKFRlbGV2aXNpb24sIEhhcm1vbm9ncmFtKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3RpdmVUZWxldmlzaW9uU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcblxyXG4gICAgdmFyIHRlbGV2aXNpb24gPSBzZXNzaW9uLlRlbGV2aXNpb24uZmlyc3QoKTtcclxuXHJcbiAgICByZXR1cm4gPFRlbGV2aXNpb25WaWV3TW9kZWw+e1xyXG4gICAgICAgIGlkOiB0ZWxldmlzaW9uLmlkLFxyXG4gICAgICAgIGlzQWN0aXZlOiB0ZWxldmlzaW9uLmlzQWN0aXZlLFxyXG4gICAgICAgIGlzRmlyZXBsYWNlUnVubmluZzogdGVsZXZpc2lvbi5pc0ZpcmVwbGFjZVJ1bm5pbmcsXHJcbiAgICAgICAgaXNBcXVhcml1bVJ1bm5pbmc6IHRlbGV2aXNpb24uaXNBcXVhcml1bVJ1bm5pbmcsXHJcbiAgICAgICAgbmFtZTogdGVsZXZpc2lvbi5uYW1lXHJcbiAgICB9O1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL3NjaGVtYS50cyIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvbiB9IGZyb20gJy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgVEVMRVZJU0lPTl9GSVJFUExBQ0UsIFRlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24sIFRFTEVWSVNJT05fQVFVQVJJVU0sIFRlbGV2aXNpb25BcXVhcml1bUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZWZmZWN0cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1RFTEVWSVNJT04gPSAnQWRkVGVsZXZpc2lvbkFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZFRlbGV2aXNpb25BY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZFRlbGV2aXNpb25BY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogVGVsZXZpc2lvbjtcclxufVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IFRlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24gfCBBZGRUZWxldmlzaW9uQWN0aW9uIHwgVGVsZXZpc2lvbkFxdWFyaXVtQWN0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgVGVsZXZpc2lvbiB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBURUxFVklTSU9OX0ZJUkVQTEFDRTpcclxuICAgICAgICAgICAgVGVsZXZpc2lvbi53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGlzRmlyZXBsYWNlUnVubmluZzogYWN0aW9uLnBheWxvYWQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVEVMRVZJU0lPTl9BUVVBUklVTTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FxdWFyaXVtIHJ1bm5pbmcnKTtcclxuICAgICAgICAgICAgVGVsZXZpc2lvbi53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGlzQXF1YXJpdW1SdW5uaW5nOiBhY3Rpb24ucGF5bG9hZC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfVEVMRVZJU0lPTjpcclxuICAgICAgICAgICAgVGVsZXZpc2lvbi5jcmVhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2Vzc2lvbi5zdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIob3JtLCByZWR1Y2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc3RhdGVzL3RlbGV2aXNpb24udHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IG1hdGNoLCBSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IGNyZWF0ZU1lbW9yeUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL2NvbXBvc2l0aW9uL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgQ2FtZXJhLCBEaXNwbGF5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgQUREX0NBTUVSQSwgQ1JFQVRFX0RJU1BMQVkgfSBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc3RhdGUvZGlzcGxheWVyJztcclxuaW1wb3J0IHsgQUREX1RFTEVWSVNJT04gfSBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3N0YXRlcy90ZWxldmlzaW9uJztcclxuaW1wb3J0ICogYXMgQW1iaWxpZ2h0IGZyb20gJy4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgTGFtcCBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgSGlmaSBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3N0YXRlL2FjdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBQbGF5ZXIgZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL3N0YXRlL2FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBNYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdCBhZ2FpbnN0IHRoZSBsaXN0IG9mIGNsaWVudC1zaWRlIHJvdXRlc1xyXG4gICAgICAgIG1hdGNoKHsgcm91dGVzLCBsb2NhdGlvbjogcGFyYW1zLmxvY2F0aW9uIH0sIChlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgcmVuZGVyUHJvcHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcmVkaXJlY3RMb2NhdGlvbi5wYXRobmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgaXQgZGlkbid0IG1hdGNoIGFueSByb3V0ZSwgcmVuZGVyUHJvcHMgd2lsbCBiZSB1bmRlZmluZWRcclxuICAgICAgICAgICAgaWYgKCFyZW5kZXJQcm9wcykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbG9jYXRpb24gJyR7cGFyYW1zLnVybH0nIGRvZXNuJ3QgbWF0Y2ggYW55IHJvdXRlIGNvbmZpZ3VyZWQgaW4gcmVhY3Qtcm91dGVyLmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDUkVBVEVfRElTUExBWSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9DQU1FUkEsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogMSxcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NhbG9uIEZyb250JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfVEVMRVZJU0lPTixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNvbnkgYnJhdmlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNGaXJlcGxhY2VSdW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FxdWFyaXVtUnVubmluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFtYmlsaWdodC5BREQsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJoeXBlcmlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoaW1hZ2VzL2FtYmllbnQuanBnKScsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExhbXAuQUREX0xBTVAsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJodWUtbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2Y2NTBlOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTGFtcC5BRERfTEFNUCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImh1ZS1yaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzIzZjM0MycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhpZmkuQUREX0hJRkksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ215LWhpZmknXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Zyb250LUxlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBIaWZpLkFERF9TUEVBS0VSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZmk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRnJvbnQtUmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NpZGUtTGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU2lkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NpZGUtUmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NpZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBIaWZpLkFERF9TUEVBS0VSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZmk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQmFjay1MZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdCYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBIaWZpLkFERF9TUEVBS0VSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZmk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQmFjay1SaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQmFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFBsYXllci5BRERfUExBWUVSLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzbWFydC1wbGF5ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvOiAnRGV0cm9pdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc1BhdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQbGF5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gYW4gaW5pdGlhbCByZW5kZXIgdGhhdCB3aWxsIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvYm9vdC1zZXJ2ZXIudHN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBTY3JvbGwgZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBTY3JvbGxFZmZlY3QgZnJvbSAnLi4vLi4vbGliL3Njcm9sbC1lZmZlY3QnO1xuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSAnLi4vLi4vbGliL2Z1bGxzY3JlZW4nO1xuaW1wb3J0IENhbWVyYUxpc3QgZnJvbSAnLi9kZXZpY2VzL2NhbWVyYS9EaXNwbGF5ZXInO1xuaW1wb3J0IEZsb29yIGZyb20gJy4vZmxvb3IvRmxvb3InO1xuaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxsL1dhbGwnO1xuaW1wb3J0IEJhc2VtZW50IGZyb20gJy4vYmFzZW1lbnQvQmFzZW1lbnQnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPEZ1bGxzY3JlZW4+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGlkPVwiaGVyb1wiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZCAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDYW1lcmFMaXN0IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFdhbGwgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Rmxvb3IgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxCYXNlbWVudCAvPiAgICAgICAgICBcbiAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Z1bGxzY3JlZW4+ICAgICAgXG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9Ib21lLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZNZW51IGZyb20gJy4vTmF2TWVudSc7XG5pbXBvcnQgUm91dGVUcmFuc2l0aW9uIGZyb20gJy4uLy4uL2xpYi9yb3V0ZS10cmFuc2l0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgYm9keTogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGVzIHtcbn1cblxuZXhwb3J0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxMYXlvdXRQcm9wcywgTGF5b3V0U3RhdGVzPiB7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgIDxOYXZNZW51IC8+XG4gICAgICAgICAgICA8Um91dGVUcmFuc2l0aW9uIHBhdGhuYW1lPXt0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA6ICcnfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ib2R5fVxuICAgICAgICAgICAgPC9Sb3V0ZVRyYW5zaXRpb24+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0xheW91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9zdG9yZSc7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IExpbmtDb250YWluZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItYm9vdHN0cmFwJztcblxuY29uc3QgbG9nbyA9IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9sb2dvLnN2ZycpIGFzIHN0cmluZztcblxuaW50ZXJmYWNlIE5hdk1lbnVQcm9wcyB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICAgIHJvbGVzOiBzdHJpbmdbXTtcbn1cbiBcbmNsYXNzIE5hdk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TmF2TWVudVByb3BzLCBBcHBsaWNhdGlvblN0YXRlPiB7XG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxOYXZiYXIgZml4ZWRUb3A9e3RydWV9PlxuICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnIHRvPXsnLyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFydC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYXJ0XCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgnaW1hZ2VzL2dyYWRpZW50LnBuZycpXCIgfX0gPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiIGhlaWdodD1cIjUwcHhcIiB3aWR0aD1cIjI1MHB4XCIgYWx0PVwiSG9tZSBMb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgPE5hdiBwdWxsUmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfT5Db250YWN0PC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2NvdW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXszfT5Db3VudGVyPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93biBldmVudEtleT17Mn0gdGl0bGU9XCJMb2dpblwiIGlkPVwibmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjF9PkxvZ2luPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuMn0+UmVnaXN0ZXI8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBldmVudEtleT17Mi4zfT5Vc2VyIFByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL2xvZ291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17IXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi40fT5Mb2dvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezR9Pk5vdGlmaWNhdGlvbnM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSwgcm9sZXM6IFtdIH07XHJcbiAgICB9LCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xuICAgIHt9IC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbikoTmF2TWVudSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IHBsYXllclNlbGVjdG9yLCBzZXR0aW5nc1NlbGVjdG9yIH0gZnJvbSAnLi4vZGV2aWNlcy9wbGF5ZXIvbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IFBsYXllclZpZXdNb2RlbCwgU2V0dGluZ3NWaWV3TW9kZWwgfSBmcm9tICcuLi9kZXZpY2VzL3BsYXllci9tb2RlbHMvdmlldyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcGxheWVyOiBQbGF5ZXJWaWV3TW9kZWwsXHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3NWaWV3TW9kZWxcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIHNob3c6IG51bWJlcjtcclxuICAgIHBsYXk6IGJvb2xlYW47XHJcbiAgICBwYXVzZTogYm9vbGVhbjtcclxuICAgIHN0b3A6IGJvb2xlYW47XHJcbiAgICBpc0Z1bGxzY3JlZW46IGJvb2xlYW47XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQmFja2dyb3VuZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93OiAwLFxyXG4gICAgICAgICAgICBwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgcGF1c2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNGdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgc291cmNlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XHJcblxyXG4gICAgICAgIHZhciBwbGF5ID0gbmV4dFByb3BzLnBsYXllci5pc1J1bm5pbmdcclxuICAgICAgICAgICAgJiYgIW5leHRQcm9wcy5wbGF5ZXIuaXNQYXVzZWRcclxuICAgICAgICAgICAgJiYgbmV4dFByb3BzLnNldHRpbmdzLmJhY2tncm91bmRQbGF5O1xyXG5cclxuICAgICAgICB2YXIgcGF1c2UgPSBuZXh0UHJvcHMucGxheWVyLmlzUGF1c2VkO1xyXG5cclxuICAgICAgICB2YXIgc3RvcCA9ICFuZXh0UHJvcHMucGxheWVyLmlzUnVubmluZ1xyXG4gICAgICAgICAgICAmJiAhbmV4dFByb3BzLnBsYXllci5pc1BhdXNlZDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBsYXk6IHBsYXksXHJcbiAgICAgICAgICAgIHNob3c6IHBsYXkgPyAxIDogc3RvcCA/IDAgOiAxLFxyXG4gICAgICAgICAgICBwYXVzZTogcGF1c2UsXHJcbiAgICAgICAgICAgIGlzRnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNvdXJjZTogbmV4dFByb3BzLnBsYXllci52aWRlb1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdmlkZW8gPSB0aGlzLnJlZnMubXlWaWRlbztcclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkodmlkZW8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXVzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlKHZpZGVvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AodmlkZW8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5KHZpZGVvOiBhbnkpIHtcclxuICAgICAgICB2aWRlby5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCh2aWRlbzogYW55KSB7XHJcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UodmlkZW86IGFueSkge1xyXG4gICAgICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHZpZGVvIHJlZj1cIm15VmlkZW9cIiBzdHlsZT17eyBvcGFjaXR5OiB0aGlzLnN0YXRlLnNob3cgfX0gcG9zdGVyPVwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vNDI3My9wb2xpbmEuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJ2aWRlby9EZXRyb2l0Lm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGxheWVyOiBwbGF5ZXJTZWxlY3RvcihzdGF0ZS5wbGF5ZXIpLFxyXG4gICAgICAgIHNldHRpbmdzOiBzZXR0aW5nc1NlbGVjdG9yKHN0YXRlLnBsYXllcilcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG51bGxcclxuKShCYWNrZ3JvdW5kKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2JhY2tncm91bmQvQmFja2dyb3VuZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZGV2aWNlcy9wbGF5ZXIvUGxheWVyJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzQwMHB4JywgaGVpZ2h0OiAnMTA1cHgnLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItbWVkaWEtdHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZmFjZXRpbWUtdmlkZW9cIiBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGljdHVyZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsbVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbXVzaWNcIiBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMjVweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8UGxheWVyIC8+XG5cbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Jhc2VtZW50L0Jhc2VtZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCB7IGFjdGl2ZUFtYmlsaWdodFNlbGVjdG9yIH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSAnLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBBbWJpbGlnaHRWaWV3TW9kZWwgfSBmcm9tICcuL21vZGVscy92aWV3JztcclxuXHJcbmludGVyZmFjZSBBbWJpbGlnaHRQcm9wcyB7XHJcbiAgICBhbWJpbGlnaHQ6IEFtYmlsaWdodFZpZXdNb2RlbDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbixcclxuICAgIGJhY2tncm91bmQ6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gQW1iaWxpZ2h0UHJvcHM7XHJcblxyXG5jbGFzcyBBbWJpbGlnaHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgZGVmYXVsdFBhdHRlcm46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFBhdHRlcm4gPSBwcm9wcy5hbWJpbGlnaHQuYmFja2dyb3VuZDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogcHJvcHMuYW1iaWxpZ2h0LmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMuYW1iaWxpZ2h0LmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmRlZmF1bHRQYXR0ZXJuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gbmV4dFByb3BzLmFtYmlsaWdodC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuYW1iaWxpZ2h0LmlzQWN0aXZlKVxyXG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiAhPT0gJycgPyBwYXR0ZXJuIDogdGhpcy5kZWZhdWx0UGF0dGVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhdHRlcm5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgYW1iaWxpZ2h0IH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYW1iaWxpZ2h0XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjYwcHhcIiwgaGVpZ2h0OiBcIjEyNXB4XCIsIGJhY2tncm91bmRJbWFnZTogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kIH19PiA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFtYmlsaWdodDogYWN0aXZlQW1iaWxpZ2h0U2VsZWN0b3Ioc3RhdGUuYW1iaWxpZ2h0KSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG51bGxcclxuKShBbWJpbGlnaHQpO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvQW1iaWxpZ2h0LnRzeCIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFtYmlsaWdodCBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5BbWJpbGlnaHQubW9kZWxOYW1lID0gXCJBbWJpbGlnaHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL21vZGVsLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBbWJpbGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBBY3Rpb25zLlNldEVmZmVjdEFjdGlvbiB8IEFjdGlvbnMuQWRkQWN0aW9uO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IEFtYmlsaWdodCB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNFVF9FRkZFQ1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgQW1iaWxpZ2h0LndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKHsgYmFja2dyb3VuZDogYWN0aW9uLnBheWxvYWQucGF0dGVybiB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkFERDpcclxuICAgICAgICAgICAgQW1iaWxpZ2h0LmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L3N0YXRlL3JlZHVjZXIudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENhbWVyYVN0b3JlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllclwiO1xyXG5pbXBvcnQgeyBsYXp5SW5qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJztcclxuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3NlcnZpY2VzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC92aWV3bW9kZWxcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcclxuICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBzdHJpbmcsXHJcbiAgICB1cGRhdGVDYW1lcmE6IChjYW1lcmE6IENhbWVyYVZpZXdNb2RlbCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGlzUmVjb3JkaW5nOiBib29sZWFuO1xuICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxubGV0IHVwZGF0ZVZpZXc7XHJcbmxldCB1cGRhdGVTdGF0ZTtcclxubGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBwcm9wcy5pc1JlY29yZGluZyxcclxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogcHJvcHMuaXNNb3Rpb25EZXRlY3RlZCxcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcmVzc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGxhenlJbmplY3QoU2VydmljZXMuQ2FtZXJhU2VydmljZSlcclxuICAgIHByaXZhdGUgX3ByaW50U2VydmljZTogQ2FtZXJhU2VydmljZTtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogbmV4dFByb3BzLmlzUmVjb3JkaW5nLFxyXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBuZXh0UHJvcHMuaXNNb3Rpb25EZXRlY3RlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHVwZGF0ZVZpZXcgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNhbWVyYVZpZXcsXHJcbiAgICAgICAgICAgIDEwMDAsIHRoaXMuc3RhdGUuYWRkcmVzcywgdGhpcy5zZXRTdGF0ZSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVN0YXRlID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDYW1lcmFTdGF0ZSxcclxuICAgICAgICAgICAgNTAwMCwgdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgICAgdGhpcy5fcHJpbnRTZXJ2aWNlLmdldENhbWVyYVN0YXRlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVWaWV3KTtcclxuICAgICAgICBjbGVhckludGVydmFsKHVwZGF0ZVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYW1lcmFWaWV3KGFkZHJlc3MsIHNldFN0YXRlKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzICsgJz9kYXRhPScgKyBjb3VudGVyKytcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ2FtZXJhU3RhdGUoaWQ6IG51bWJlciwgZ2V0U3RhdGUsIHVwZGF0ZVN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGNhbWVyYSA9IGF3YWl0IGdldFN0YXRlKGlkKTtcclxuICAgICAgICB1cGRhdGVTdGF0ZShjYW1lcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0UmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fcHJpbnRTZXJ2aWNlLnN0YXJ0UmVjb3JkaW5nKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdG9wUmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3ByaW50U2VydmljZS5zdG9wUmVjb3JkaW5nKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgY2FtZXJhLWNvbnRhaW5lclwiIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjYW1lcmEtZnJhbWVcIiBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5hZGRyZXNzfSBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNSZWNvcmRpbmcgPyAnY2FtZXJhLXJlY29yZGluZycgOiB0aGlzLnN0YXRlLmlzTW90aW9uRGV0ZWN0ZWQgPyAnY2FtZXJhLWFsZXJ0JyA6ICdjYW1lcmEtbm8tYWxlcnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICdjYW1lcmEtYm90dG9tIGNhbWVyYS12aXNpYmxlJyA6ICdjYW1lcmEtYm90dG9tIGNhbWVyYS1oaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhbWVyYS1uYW1lXCI+e3RoaXMuc3RhdGUubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWNvcmQgY2FtZXJhLXBsYXlcIiBzdHlsZT17eyBwYWRkaW5nOiAnM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaXNSZWNvcmRpbmcgPyAoKSA9PiB0aGlzLnN0b3BSZWNvcmRpbmcoaWQpIDogKCkgPT4gdGhpcy5zdGFydFJlY29yZGluZyhpZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RvcFwiIHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ2dyYXknLCBwYWRkaW5nOiAnM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RvcFJlY29yZGluZyhpZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCBDYW1lcmFJdGVtIGZyb20gJy4vQ2FtZXJhJztcclxuaW1wb3J0IHsgYWN0aXZlQ2FtZXJhc1NlbGVjdG9yIH0gZnJvbSAnLi9tb2RlbC9vcm0nO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tIFwiLi9tb2RlbC92aWV3bW9kZWxcIjtcclxuaW1wb3J0ICogYXMgRGlzcGxheVN0b3JlIGZyb20gXCIuL3N0YXRlL2Rpc3BsYXllclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxpc3Q6IENhbWVyYVZpZXdNb2RlbFtdO1xyXG4gICAgbGlzdFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XG4gICAgbGlzdFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgQ2FtZXJhc1Byb3BzID0gUHJvcHMgJiB0eXBlb2YgRGlzcGxheVN0b3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgRGlzcGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENhbWVyYXNQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1lcmFzUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxpc3RWaXNpYmxlOiBwcm9wcy5saXN0VmlzaWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b29nbGVDYW1lcmFzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsaXN0VmlzaWJsZTogIXRoaXMuc3RhdGUubGlzdFZpc2libGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1cGRhdGVDYW1lcmEgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtZXJhLXRvcGJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duIGNhbWVyYS1jb2xsYXBzZS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy50b29nbGVDYW1lcmFzKCl9IHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGxheSBjYW1lcmEtcGxheVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leWUtb3BlbiBjYW1lcmEtbW90aW9uXCIgc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXZvbHVtZS11cCBjYW1lcmEtc291bmRcIiBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tb3B0aW9uLWhvcml6b250YWwgY2FtZXJhLXRvcGJhci1zZXR0aW5nc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saXN0VmlzaWJsZSA/ICdzbGlkZS1kb3duJyA6ICdzbGlkZS11cCd9PiB7dGhpcy5wcm9wcy5saXN0Lm1hcCgoY2FtZXJhKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhSXRlbSBrZXk9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17Y2FtZXJhLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NhbWVyYS5uYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkPXtjYW1lcmEuaXNNb3Rpb25EZXRlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWNvcmRpbmc9e2NhbWVyYS5pc1JlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FtZXJhPXt1cGRhdGVDYW1lcmF9IC8+KX1cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdDogYWN0aXZlQ2FtZXJhc1NlbGVjdG9yKHN0YXRlLmRpc3BsYXkpLFxyXG4gICAgICAgIGxpc3RWaXNpYmxlOiB0cnVlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBEaXNwbGF5U3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuKShEaXNwbGF5ZXIpO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyLnRzeCIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BsYXkgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgY2FtZXJhczogbWFueShcIkNhbWVyYVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkRpc3BsYXkubW9kZWxOYW1lID0gXCJEaXNwbGF5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGF0dHIoKSxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5DYW1lcmEubW9kZWxOYW1lID0gXCJDYW1lcmFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL21vZGVsLnRzIiwiaW1wb3J0IHsgTW9kZWwsIG1hbnksIGF0dHIgfSBmcm9tIFwicmVkdXgtb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlmaSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIHNwZWFrZXJzOiBtYW55KFwiU3BlYWtlclwiKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5IaWZpLm1vZGVsTmFtZSA9IFwiSGlmaVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWFrZXIgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICB0eXBlOiBhdHRyKCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBhdHRyKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5TcGVha2VyLm1vZGVsTmFtZSA9IFwiU3BlYWtlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvbW9kZWxzL21vZGVsLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcGVha2VyLWJhY2stc21hbGwucG5nXCIgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiNDBweFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTE1cHgnLCB0b3A6ICctMjBweCcgfX0gLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zcGVha2Vycy9CYWNrLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGcm9udCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXIucG5nXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNjBweFwiIGNsYXNzTmFtZT1cImZyYW1lLXNoYWRvd1wiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICctMzBweCcsIGxlZnQ6ICctMjBweCcgfX0gLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zcGVha2Vycy9Gcm9udC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1iYWNrLnBuZ1wiIGhlaWdodD1cIjEyMHB4XCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcIi02MHB4XCIsIGxlZnQ6IFwiLTEwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3NwZWFrZXJzL1NpZGUudHN4IiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwZWFrZXJWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdmlldyc7XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gQWN0aW9ucy5BZGRIaWZpQWN0aW9uIHwgQWN0aW9ucy5BZGRTcGVha2VyQWN0aW9uO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IEhpZmksIFNwZWFrZXIgfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5BRERfSElGSTpcclxuICAgICAgICAgICAgSGlmaS5jcmVhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuQUREX1NQRUFLRVI6XHJcbiAgICAgICAgICAgIFNwZWFrZXIuY3JlYXRlKGFjdGlvbi5wYXlsb2FkLnNwZWFrZXIpO1xyXG4gICAgICAgICAgICB2YXIgc3BlYWtlciA9IDxTcGVha2VyVmlld01vZGVsPiBhY3Rpb24ucGF5bG9hZC5zcGVha2VyO1xyXG4gICAgICAgICAgICBIaWZpLndpdGhJZChhY3Rpb24ucGF5bG9hZC5oaWZpKVxyXG4gICAgICAgICAgICAgICAgLnNwZWFrZXJzLmFkZChTcGVha2VyLndpdGhJZChzcGVha2VyLmlkKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9yZWR1Y2VyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnQXBwL2NvbXBvc2l0aW9uL3N0b3JlJztcclxuaW1wb3J0IHsgTGFtcFZpZXdNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3ZpZXcnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxhbXA6IExhbXBWaWV3TW9kZWxcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW1wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gICAgZGVmYXVsdENvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvbG9yID0gcHJvcHMubGFtcC5jb2xvcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5kZWZhdWx0Q29sb3JcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV4dFByb3BzLmxhbXAuY29sb3I7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5sYW1wLmlzQWN0aXZlKVxyXG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yICE9PSAnJyA/IGNvbG9yIDogdGhpcy5kZWZhdWx0Q29sb3I7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2h1ZS5wbmdcIiBoZWlnaHQ9XCIxNTBweFwiIHdpZHRoPVwiNDBweFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICctMTAwcHgnLCBsZWZ0OiAnLTIwcHgnLCB6SW5kZXg6IDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmNvbG9yLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMHB4JywgbGVmdDogJy0yMHB4JyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9MYW1wLnRzeCIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhbXAgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBjb2xvcjogYXR0cigpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogYXR0cigpLFxyXG4gICAgICAgICAgICBoYXJtb25vZ3JhbXM6IG1hbnkoXCJIYXJtb25vZ3JhbVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkxhbXAubW9kZWxOYW1lID0gXCJMYW1wXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFybW9ub2dyYW0gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5IYXJtb25vZ3JhbS5tb2RlbE5hbWUgPSBcIkhhcm1vbm9ncmFtXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL21vZGVsLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBMYW1wIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gQWN0aW9ucy5TZXRDb2xvckFjdGlvbiB8IEFjdGlvbnMuQWRkTGFtcEFjdGlvbjtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc2Vzc2lvbiwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBMYW1wIH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvbnMuU0VUX0NPTE9SOlxyXG4gICAgICAgICAgICBMYW1wLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKHsgY29sb3I6IGFjdGlvbi5wYXlsb2FkLmNvbG9yIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuQUREX0xBTVA6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYW1wIGFkZGVkJyk7XHJcbiAgICAgICAgICAgIExhbXAuY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9yZWR1Y2VyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsYXp5SW5qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgcGxheWVyU2VsZWN0b3IgfSBmcm9tICcuL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwgfSBmcm9tICcuL21vZGVscy92aWV3JztcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGxheWVyJ1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyUHJvcHMge1xyXG4gICAgcGxheWVyOiBQbGF5ZXJWaWV3TW9kZWw7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB2aWRlbzogc3RyaW5nO1xyXG4gICAgaXNSdW5uaW5nOiBib29sZWFuO1xyXG4gICAgaXNQYXVzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBQbGF5ZXJQcm9wcyAmIHR5cGVvZiBBY3Rpb25zLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIEBsYXp5SW5qZWN0KFNlcnZpY2VzLlBsYXllclNlcnZpY2UpXHJcbiAgICBwcml2YXRlIF9zZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzUnVubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQbGF5ZXJQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aWRlbzogbmV4dFByb3BzLnBsYXllci52aWRlbyxcclxuICAgICAgICAgICAgaXNQYXVzZWQ6IG5leHRQcm9wcy5wbGF5ZXIuaXNQYXVzZWQsXHJcbiAgICAgICAgICAgIGlzUnVubmluZzogbmV4dFByb3BzLnBsYXllci5pc1J1bm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5KHBsYXlWaWRlbywgcGF1c2UpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zZXJ2aWNlLnBhdXNlKHRoaXMucHJvcHMucGxheWVyLmlkKTtcclxuICAgICAgICAgICAgYXdhaXQgcGF1c2UodGhpcy5wcm9wcy5wbGF5ZXIuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc2VydmljZS5wbGF5VmlkZW8odGhpcy5wcm9wcy5wbGF5ZXIuaWQsIHRoaXMuc3RhdGUudmlkZW8pO1xyXG4gICAgICAgICAgICBhd2FpdCBwbGF5VmlkZW8odGhpcy5wcm9wcy5wbGF5ZXIuaWQsIHRoaXMuc3RhdGUudmlkZW8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwYXVzZSh1cGRhdGVTdGF0ZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NlcnZpY2UucGF1c2UodGhpcy5wcm9wcy5wbGF5ZXIuaWQpO1xyXG4gICAgICAgIGF3YWl0IHVwZGF0ZVN0YXRlKHRoaXMucHJvcHMucGxheWVyLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdG9wKHVwZGF0ZVN0YXRlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VydmljZS5zdG9wKHRoaXMucHJvcHMucGxheWVyLmlkKTtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTdGF0ZSh0aGlzLnByb3BzLnBsYXllci5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGxheVZpZGVvLCBwYXVzZSwgc3RvcCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkxlZnQ6ICcxMHB4JywgaGVpZ2h0OiBcIjkwcHhcIiwgd2lkdGg6IFwiNTUwcHhcIiwgZmxvYXQ6IFwibGVmdFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6JzYwcHgnLCBoZWlnaHQ6JzYwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4J319PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9rbm9iLnBuZ1wiIGhlaWdodD1cIjYwcHhcIiB3aWR0aD1cIjYwcHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItbGVmdFwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgaGVpZ2h0OiBcIjkwcHhcIiwgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luTGVmdDogJzE1cHgnIH19PjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6IFwiMzIwcHhcIiwgaGVpZ2h0OiAnOTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMzIwcHhcIiwgbGVmdDogXCIyMHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvdXRwdXQgY2xhc3NOYW1lPVwicGxheWVyLWRpc3BsYXlcIiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBmb250U2l6ZTogXCIxNXB4XCIsIGxpbmVIZWlnaHQ6IFwiNDBweFwiIH19PlJlYWR5IHRvIHBsYXk8L291dHB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1iYWNrd2FyZFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNSdW5uaW5nID8gXCJnbHlwaGljb24gZ2x5cGhpY29uLXBhdXNlIHBsYXllci1idXR0b25cIiA6IFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5IHBsYXllci1idXR0b25cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0YXRlLmlzUnVubmluZyA/IHRoaXMucGF1c2UocGF1c2UpIDogdGhpcy5wbGF5KHBsYXlWaWRlbywgcGF1c2UpfSBzdHlsZT17eyBmb250U2l6ZTogXCIyMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdG9wIHBsYXllci1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN0b3Aoc3RvcCl9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZvcndhcmRcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMzIwcHhcIiwgYm90dG9tOiBcIjEwcHhcIiwgbGVmdDogXCIyMHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZWplY3RcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG91dHB1dCBjbGFzc05hbWU9XCJwbGF5ZXItZHJpdmVcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiLCBsaW5lSGVpZ2h0OiBcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIyNXB4XCIsIHdpZHRoOiBcIjIyNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+RGV0cm9pdDwvb3V0cHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1vcGVuXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBtYXJnaW5MZWZ0OiBcIjI1cHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllci1yaWdodFwiIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIHdpZHRoOiBcIjE1cHhcIiwgaGVpZ2h0OiBcIjkwcHhcIiwgbWFyZ2luTGVmdDogJzE1cHgnLCBtYXJnaW5SaWdodDogJzE1cHgnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6ICc2MHB4JywgaGVpZ2h0OiAnNjBweCcsIG1hcmdpblRvcDogJzE1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9rbm9iLnBuZ1wiIGhlaWdodD1cIjYwcHhcIiB3aWR0aD1cIjYwcHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBsYXllcjogcGxheWVyU2VsZWN0b3Ioc3RhdGUucGxheWVyKVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgQWN0aW9ucy5hY3Rpb25DcmVhdG9yc1xyXG4pKFBsYXllcik7XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL1BsYXllci50c3giLCJpbXBvcnQgeyBNb2RlbCwgb25lVG9PbmUsIG1hbnksIGF0dHIgfSBmcm9tIFwicmVkdXgtb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgdmlkZW86IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNSdW5uaW5nOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzUGF1c2VkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBhdHRyKCksXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiBvbmVUb09uZShcIlNldHRpbmdzXCIpLFxyXG4gICAgICAgICAgICBoYXJtb25vZ3JhbXM6IG1hbnkoXCJIYXJtb25vZ3JhbVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcblBsYXllci5tb2RlbE5hbWUgPSBcIlBsYXllclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUGxheTogYXR0cigpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuU2V0dGluZ3MubW9kZWxOYW1lID0gXCJTZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9tb2RlbHMvbW9kZWwudHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IG9ybSB9IGZyb20gJy4uL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEFjdGlvbnMuS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgUGxheWVyIH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvbnMuUExBWV9WSURFTzpcclxuICAgICAgICAgICAgUGxheWVyLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKHsgdmlkZW86IGFjdGlvbi5wYXlsb2FkLnZpZGVvLCBpc1J1bm5pbmc6IHRydWUsIGlzUGF1c2VkOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuUEFVU0U6XHJcbiAgICAgICAgICAgIFBsYXllci53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGlzUnVubmluZzogZmFsc2UsIGlzUGF1c2VkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuU1RPUDpcclxuICAgICAgICAgICAgUGxheWVyLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKHsgaXNSdW5uaW5nOiBmYWxzZSwgaXNQYXVzZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuQUREX1BMQVlFUjpcclxuICAgICAgICAgICAgUGxheWVyLmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5VUERBVEVfUExBWUVSOlxyXG4gICAgICAgICAgICBQbGF5ZXIud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL3N0YXRlL3JlZHVjZXIudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgeyBsYXp5SW5qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJztcclxuaW1wb3J0ICogYXMgRWZmZWN0cyBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2FjdGlvbnMvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3NlcnZpY2VzL3RlbGV2aXNpb25cIjtcclxuaW1wb3J0IHsgYWN0aXZlVGVsZXZpc2lvblNlbGVjdG9yIH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSAnLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uVmlld01vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdmlld21vZGVsJztcclxuaW1wb3J0ICogYXMgRmlyZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2ZpcmVwbGFjZS9maXJlJztcclxuaW1wb3J0IHsgQXF1YXJpdW0gfSBmcm9tICcuL2VmZmVjdHMvYXF1YXJpdW0vYXF1YXJpdW0nO1xyXG5cclxuaW50ZXJmYWNlIFRlbGV2aXNpb25Qcm9wcyB7XHJcbiAgICB0ZWxldmlzaW9uOiBUZWxldmlzaW9uVmlld01vZGVsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGlzQWN0aXZlOiBib29sZWFuLFxyXG4gICAgaXNGaXJlcGxhY2U6IGJvb2xlYW4sXHJcbiAgICBpc0FxdWFyaXVtOiBib29sZWFuXHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBUZWxldmlzaW9uUHJvcHMgJiB0eXBlb2YgRWZmZWN0cy5hY3Rpb25DcmVhdG9ycztcclxuXHJcbmxldCBmaXJlcGxhY2U7XHJcbmxldCBmaXJlO1xyXG5sZXQgYXF1YXJpdW07XHJcbmxldCBhcXVhO1xyXG5cclxuY2xhc3MgVGVsZXZpc2lvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICBhcXVhcml1bTogQXF1YXJpdW07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogcHJvcHMudGVsZXZpc2lvbi5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHByb3BzLnRlbGV2aXNpb24uaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGlzRmlyZXBsYWNlOiBwcm9wcy50ZWxldmlzaW9uLmlzRmlyZXBsYWNlUnVubmluZyxcclxuICAgICAgICAgICAgaXNBcXVhcml1bTogcHJvcHMudGVsZXZpc2lvbi5pc0FxdWFyaXVtUnVubmluZ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZpcmUgPSBuZXcgRmlyZS5GaXJlKCk7XHJcbiAgICAgICAgYXF1YXJpdW0gPSBuZXcgQXF1YXJpdW0oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzRmlyZXBsYWNlOiBuZXh0UHJvcHMudGVsZXZpc2lvbi5pc0ZpcmVwbGFjZVJ1bm5pbmcsXHJcbiAgICAgICAgICAgIGlzQXF1YXJpdW06IG5leHRQcm9wcy50ZWxldmlzaW9uLmlzQXF1YXJpdW1SdW5uaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldEZpcmVwbGFjZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSB0aGlzLnJlZnMudGVsZXZpc2lvbjtcclxuICAgICAgICB2YXIgZm9yZWdyb3VuZCA9IHRoaXMucmVmcy50dkNvbnRlbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzRmlyZXBsYWNlKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmlyZXBsYWNlKTtcclxuICAgICAgICAgICAgZmlyZS5jbGVhcihiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpcmUuaW5pdGlhbGl6ZShiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kLCAnaW1hZ2VCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgICAgIGZpcmVwbGFjZSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXJlLmJ1cm5CdXJuQnVybigpO1xyXG4gICAgICAgICAgICB9LCAxMDAsIGZpcmUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRGaXJlcGxhY2UoaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGaXJlcGxhY2UodGhpcy5zdGF0ZS5pZCwgIXRoaXMuc3RhdGUuaXNGaXJlcGxhY2UpOyAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0VmlkZW8oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gdGhpcy5yZWZzLnRlbGV2aXNpb247XHJcbiAgICAgICAgdmFyIGZvcmVncm91bmQgPSB0aGlzLnJlZnMudHZDb250ZW50O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzQXF1YXJpdW0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0FxdWFyaXVtKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYXF1YSk7XHJcbiAgICAgICAgICAgIGFxdWFyaXVtLmNsZWFyKGJhY2tncm91bmQpO1xyXG4gICAgICAgICAgICBhcXVhcml1bS5jbGVhcihmb3JlZ3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFxdWFyaXVtLmluaXQoYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgIGFxdWEgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXF1YXJpdW0uZHJhdyhmb3JlZ3JvdW5kKTtcclxuICAgICAgICAgICAgfSwgMTYuNywgYXF1YXJpdW0sIGZvcmVncm91bmQpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLnByb3BzLnNldEFxdWFyaXVtKHRoaXMuc3RhdGUuaWQsICF0aGlzLnN0YXRlLmlzQXF1YXJpdW0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBsYXp5SW5qZWN0KFNlcnZpY2VzLlRlbGV2aXNpb25TZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSBfc2VydmljZTogVGVsZXZpc2lvblNlcnZpY2U7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGVsZXZpc2lvbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvXCIgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldEFjdGl2ZSh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnNldEFjdGl2ZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiNDBweCAwIDAgMFwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiYmxhY2tcIiwgaGVpZ2h0OiBcIjEyNXB4XCIsIHdpZHRoOiBcIjI1MHB4XCIsIGJvcmRlcjogXCIycHggc29saWQgYmxhY2tcIiB9fSByZWY9XCJ0ZWxldmlzaW9uXCI+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBzdHlsZT17eyBoZWlnaHQ6IFwiMTI1cHhcIiwgd2lkdGg6IFwiMjUwcHhcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAnMHB4JywgbGVmdDogJzBweCcgfX0gcmVmPVwidHZDb250ZW50XCI+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImltYWdlQmFja2dyb3VuZFwiIHNyYz1cImltYWdlcy9iYWNrZ3JvdW5kLWZsaXAyLmpwZ1wiIHN0eWxlPXt7IGhlaWdodDogJzEyNXB4Jywgd2lkdGg6ICcyNTBweCcsIGRpc3BsYXk6ICdub25lJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpbWFnZVN0cmlwXCIgc3JjPVwiaW1hZ2VzL2Zpc2hzdHJpcC5wbmdcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjUwcHgnLCBkaXNwbGF5OiAnbm9uZScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzQWN0aXZlID8gJ3RlbGV2aXNpb24tYm90dG9tIGNhbWVyYS12aXNpYmxlJyA6ICd0ZWxldmlzaW9uLWJvdHRvbSBjYW1lcmEtaGlkZGVuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhbWVyYS1uYW1lXCI+U29ueSBCcmF2aWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZmlyZSB0ZWxldmlzaW9uLWZpcmVwbGFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzRmlyZXBsYWNlID8gKCkgPT4gdGhpcy5zZXRGaXJlcGxhY2UodGVsZXZpc2lvbi5pZCkgOiAoKSA9PiB0aGlzLnNldEZpcmVwbGFjZSh0ZWxldmlzaW9uLmlkKX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbGVhZiB0ZWxldmlzaW9uLWxlYWZcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdGludCB0ZWxldmlzaW9uLXdhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaXNGaXJlcGxhY2UgPyAoKSA9PiB0aGlzLnNldFZpZGVvKHRlbGV2aXNpb24uaWQpIDogKCkgPT4gdGhpcy5zZXRWaWRlbyh0ZWxldmlzaW9uLmlkKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVsZXZpc2lvbjogYWN0aXZlVGVsZXZpc2lvblNlbGVjdG9yKHN0YXRlLnRlbGV2aXNpb24pLFxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgRWZmZWN0cy5hY3Rpb25DcmVhdG9yc1xyXG4pKFRlbGV2aXNpb24pO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL1RlbGV2aXNpb24udHN4IiwiaW1wb3J0IHsgRmlzaCB9IGZyb20gJy4vZmlzaCdcclxuXHJcbmNsYXNzIEFxdWFyaXVtIHtcclxuICAgIGN0eDogYW55OyAgICAgICAgICAgICAgICAgICAgLy9jYW52YXMgY29udGV4dCBmb3IgZHJhd2luZyB0aGUgZmlzaFxyXG4gICAgc3RhcnRGaXNoOiBudW1iZXI7ICAgICAgICAgIC8vbnVtYmVyIG9mIGZpc2ggdG8gc3RhcnQgd2l0aFxyXG4gICAgZmlzaDogRmlzaCBbXTsgICAgICAgICAgICAgICAvL2FycmF5IG9mIGZpc2hcclxuICAgIGJhY2tncm91bmRJbWFnZTogYW55OyAgICAgICAgIC8vYmFja2dyb3VuZCBpbWFnZVxyXG4gICAgYmFja2dyb3VuZEltYWdlVzogbnVtYmVyOyAgLy9iYWNrZ3JvdW5kIGltYWdlIHdpZHRoXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2VIOiBudW1iZXI7ICAvL2JhY2tncm91bmQgaW1hZ2UgaGVpZ2h0XHJcbiAgICBpbWFnZVN0cmlwOiBhbnk7ICAgICAgICAgICAgICAvL2Zpc2ggaW1hZ2Ugc3RyaXAgXHJcbiAgICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gICAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEZpc2ggPSA1O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlVyA9IDI1MDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZUggPSAxMjU7XHJcbiAgICAgICAgdGhpcy5maXNoID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGJhY2tncm91bmQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gYmFja2dyb3VuZC53aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGJhY2tncm91bmQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvL2RyYXcgdGhlIGJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUJhY2tncm91bmQnKTtcclxuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgdGhlIGZpc2hcclxuICAgICAgICB0aGlzLmltYWdlU3RyaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VTdHJpcCcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRmlzaCh0aGlzLnN0YXJ0RmlzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlzaCA9IGZ1bmN0aW9uKG1heCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpc2gubGVuZ3RoIDwgbWF4KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmZpc2gubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlzaC5wdXNoKG5ldyBGaXNoKHRoaXMuYmFja2dyb3VuZEltYWdlVywgdGhpcy5iYWNrZ3JvdW5kSW1hZ2VIKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vcmVtb3ZlIGZpc2hcclxuICAgICAgICAgICAgdGhpcy5maXNoLnNwbGljZShtYXgsIHRoaXMuZmlzaC5sZW5ndGggLSBtYXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3QmFja2dyb3VuZCA9IGZ1bmN0aW9uIChjdHg6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhc1dpZHRoIDwgdGhpcy5iYWNrZ3JvdW5kSW1hZ2VXKSB7XHJcbiAgICAgICAgICAgIC8vU2hvdyBhIHBvcnRpb24gb2YgdGhlIGJhY2tncm91bmQgaWYgdGhlIHdpbmRvdyBpcyBtb3JlIG5hcnJvdyB0aGFuIHRoZSBiYWNrZ3JvdW5kSW1hZ2VcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWFnZSwgMCwgMCwgdGhpcy5iYWNrZ3JvdW5kSW1hZ2VXLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL3RpbGUgdGhlIGJhY2tncm91bmRJbWFnZSBob3Jpem9udGFsbHkgaWYgdGhlIHdpbmRvdyBpcyBtb3JlIHdpZGUgdGhhbiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgdmFyIHRpbGVDb3VudCA9IE1hdGguZmxvb3IodGhpcy5jYW52YXNXaWR0aCAvIHRoaXMuYmFja2dyb3VuZEltYWdlVyk7XHJcbiAgICAgICAgICAgIHZhciBmbGlwID0gMTsgLy9mbGlwIHRoZSBpbWFnZSB3aGVuIGZsaXA9PS0xIGZvciBiZXR0ZXIgbG9va2luZyB0aWxlc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSB0aWxlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggYWxsIHRoZSB0aWxlcyB0aGF0IGFyZSBuZWVkZWQgYW5kIHBvc2l0aW9uIHRoZW1cclxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKGZsaXAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWFnZSwgKGZsaXAgLSAxKSAqIHRoaXMuYmFja2dyb3VuZEltYWdlVyAvIDIgKyBmbGlwICogdGhpcy5iYWNrZ3JvdW5kSW1hZ2VXICogaSwgMCwgdGhpcy5iYWNrZ3JvdW5kSW1hZ2VXLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgZmxpcCA9IGZsaXAgKiAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyA9IGZ1bmN0aW9uIChjYW52YXM6IGFueSkge1xyXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzV2lkdGgsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgZmlzaGllIGluIHRoaXMuZmlzaCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpc2hbZmlzaGllXS5zd2ltKGN0eCwgdGhpcy5pbWFnZVN0cmlwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSBmdW5jdGlvbiAoY2FudmFzOiBhbnkpIHtcclxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFxdWFyaXVtIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vYXF1YXJpdW0udHMiLCJsZXQgZmlzaFcgPSA1MDtcclxubGV0IGZpc2hIID0gNTA7XHJcbmxldCBtYXhMZW5ndGggPSA1O1xyXG5cclxuY2xhc3MgRmlzaCB7XHJcblxyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgYW5nbGU6IG51bWJlcjtcclxuICAgIHhBbmdsZTogbnVtYmVyO1xyXG4gICAgeUFuZ2xlOiBudW1iZXI7XHJcbiAgICB6QW5nbGU6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHo6IG51bWJlcjtcclxuICAgIHpGYXI6IG51bWJlcjtcclxuICAgIHpDbG9zZTogbnVtYmVyO1xyXG4gICAgc2NhbGU6IG51bWJlcjtcclxuICAgIGZsaXA6IG51bWJlcjtcclxuICAgIHpGYXJGYWN0b3I6IG51bWJlcjtcclxuICAgIGNlbGw6IG51bWJlcjtcclxuICAgIHNwZWNpZXM6IG51bWJlcjtcclxuICAgIGNlbGxDb3VudDogbnVtYmVyO1xyXG4gICAgY2VsbFJldmVyc2U6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIHgseSBkaXJlY3Rpb24gdGhpcyBmaXNoIHN3aW1zXHJcbiAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgeCB2YWx1ZSBvZiB0aGUgYW5nbGVcclxuICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSB5IHZhbHVlIG9mIHRoZSBhbmdsZVxyXG4gICAgICAgIHRoaXMuekFuZ2xlID0gMSArIC0yICogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTsgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCBpZiB0aGUgZmlzaCBpcyBzd2ltbWluZyB0b3dhcmQgdXMgb3IgYXdheS4gMSA9IHRvd2FyZCB1czsgLTEgPSBhd2F5IGZyb20gdXNcclxuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy53aWR0aCAtIGZpc2hXKSArIGZpc2hXIC8gMik7ICAgIC8vc2V0IHRoZSBzdGFydGluZyB4IGxvY2F0aW9uICBcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5oZWlnaHQgLSBmaXNoSCkgKyBmaXNoSCAvIDIpOyAgIC8vc2V0IHRoZSBzdGFydGluZyB5IGxvY2F0aW9uICBcclxuICAgICAgICB0aGlzLnpGYXIgPSAxMDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCBob3cgZmFyIGF3YXkgY2FuIGEgZmlzaCBnb1xyXG4gICAgICAgIHRoaXMuekZhckZhY3RvciA9IDE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBtYXggc2l6ZSB0aGUgZmlzaCBjYW4gYmUuIDE9MTAwJVxyXG4gICAgICAgIHRoaXMuekNsb3NlID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IGhvdyBuZWFyIGEgZmlzaCBjYW4gY29tZVxyXG4gICAgICAgIHRoaXMueiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgodGhpcy56RmFyIC0gdGhpcy56Q2xvc2UpKSk7ICAgICAgICAgICAgICAvL3NldCB0aGUgc3RhcnRpbmcgeiBsb2NhdGlvbiBcclxuICAgICAgICB0aGlzLnNjYWxlID0gLjE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgcmF0ZSBvZiBzY2FsaW5nIGVhY2ggZnJhbWVcclxuICAgICAgICB0aGlzLmZsaXAgPSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBmaXNoLiAxPXJpZ2h0OyAtMT1sZWZ0XHJcbiAgICAgICAgdGhpcy5jZWxsQ291bnQgPSAxNjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIG51bWJlciBvZiBjZWxscyAoY29sdW1ucykgaW4gdGhlIGltYWdlIHN0cmlwIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuY2VsbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNlbGxDb3VudCAtIDEpKTsgICAgICAgICAgICAgICAvL3NldCB0aGUgZmlyc3QgY2VsbCAoY29sdW1ucykgb2YgdGhlIGltYWdlIHN0cmlwIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuY2VsbFJldmVyc2UgPSAtMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHdoaWNoIGRpcmVjdGlvbiB3ZSBnbyB0aHJvdWdoIHRoZSBpbWFnZSBzdHJpcFxyXG4gICAgICAgIHRoaXMuc3BlY2llcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpOyAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHdoaWNoIHNwZWNpZXMgb2YgZmlzaCB0aGlzIGZpc2ggaXMuIGVhY2ggc3BlY2llcyBpcyBhIHJvdyBpbiB0aGUgaW1hZ2Ugc3RyaXAgXHJcblxyXG4gICAgICAgIC8vIHN0b3AgZmlzaCBmcm9tIHN3aW1taW5nIHN0cmFpZ2h0IHVwIG9yIGRvd25cclxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IE1hdGguUEkgKiA0IC8gMyAmJiB0aGlzLmFuZ2xlIDwgTWF0aC5QSSAqIDUgLyAzIHx8IHRoaXMuYW5nbGUgPiBNYXRoLlBJICogMSAvIDMgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgKiAyIC8gMykge1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5QSSAqIDEgLyAzICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmFjZSB0aGUgZmlzaCB0aGUgcmlnaHQgd2F5IGlmIGFuZ2xlIGlzIGJldHdlZW4gNiBvJ2Nsb2NrIGFuZCAxMiBvJ2Nsb2NrXHJcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJIC8gMiAmJiB0aGlzLmFuZ2xlIDwgTWF0aC5QSSAvIDIgKiAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZHJhdyB0aGUgZmlzaCBlYWNoIGZyYW1lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgICAgICAgICBcclxuICAgIHN3aW0gPSBmdW5jdGlvbiAoY3R4OiBhbnksIGltYWdlU3RyaXA6IGFueSkge1xyXG4gICAgICAgIHZhciB2ZWxvY2l0eSA9IDIwO1xyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXh0IHBvc2l0aW9uIG9mIGZpc2hcclxuICAgICAgICB2YXIgbmV4dFggPSB0aGlzLnggKyB0aGlzLnhBbmdsZSAqIHZlbG9jaXR5ICogLjE7XHJcbiAgICAgICAgdmFyIG5leHRZID0gdGhpcy55ICsgdGhpcy55QW5nbGUgKiB2ZWxvY2l0eSAqIC4xO1xyXG4gICAgICAgIHZhciBuZXh0WiA9IHRoaXMueiArIHRoaXMuekFuZ2xlICogLjEgKiB2ZWxvY2l0eSAqIC4xO1xyXG4gICAgICAgIHZhciBuZXh0U2NhbGUgPSBNYXRoLmFicyhuZXh0WikgLyAodGhpcy56RmFyIC0gdGhpcy56Q2xvc2UpO1xyXG5cclxuICAgICAgICAvLyBJZiBmaXNoIGlzIGdvaW5nIHRvIG1vdmUgb2ZmIHJpZ2h0IHNpZGUgb2Ygc2NyZWVuXHJcbiAgICAgICAgaWYgKG5leHRYICsgZmlzaFcgLyAyICogdGhpcy5zY2FsZSA+IHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgLy8gSWYgYW5nbGUgaXMgYmV0d2VlbiAzIG8nY2xvY2sgYW5kIDYgbydjbG9ja1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuYW5nbGUgPj0gMCAmJiB0aGlzLmFuZ2xlIDwgTWF0aC5QSSAvIDIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5QSSAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhBbmdsZSA9IE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAtdGhpcy5mbGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gMTIgbydjbG9jayBhbmQgMyBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJIC8gMiAqIDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gKHRoaXMuYW5nbGUgLSBNYXRoLlBJIC8gMiAqIDMpICogMlxyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gLXRoaXMuZmxpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiBsZWZ0IHNpZGUgb2Ygc2NyZWVuXHJcbiAgICAgICAgaWYgKG5leHRYIC0gZmlzaFcgLyAyICogdGhpcy5zY2FsZSA8IDApIHtcclxuICAgICAgICAgICAgLy8gSWYgYW5nbGUgaXMgYmV0d2VlbiA2IG8nY2xvY2sgYW5kIDkgbydjbG9ja1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuYW5nbGUgPiBNYXRoLlBJIC8gMiAmJiB0aGlzLmFuZ2xlIDwgTWF0aC5QSSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLlBJIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxpcCA9IC10aGlzLmZsaXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgYW5nbGUgaXMgYmV0d2VlbiA5IG8nY2xvY2sgYW5kIDEyIG8nY2xvY2tcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmdsZSA+IE1hdGguUEkgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgLyAyICogMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAoTWF0aC5QSSAvIDIgKiAzIC0gdGhpcy5hbmdsZSkgKiAyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnhBbmdsZSA9IE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAtdGhpcy5mbGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBmaXNoIGlzIGdvaW5nIHRvIG1vdmUgb2ZmIGJvdHRvbSBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WSArIGZpc2hIIC8gMiAqIHRoaXMuc2NhbGUgPiB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbmdsZSBpcyBiZXR3ZWVuIDMgbydjbG9jayBhbmQgOSBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGlmICgodGhpcy5hbmdsZSA+IDAgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5QSSAqIDIgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBmaXNoIGlzIGdvaW5nIHRvIG1vdmUgb2ZmIHRvcCBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WSAtIGZpc2hIIC8gMiAqIHRoaXMuc2NhbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gOSBvJ2Nsb2NrIGFuZCAzIG8nY2xvY2tcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmFuZ2xlID4gTWF0aC5QSSAmJiB0aGlzLmFuZ2xlIDwgTWF0aC5QSSAqIDIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtICh0aGlzLmFuZ2xlIC0gTWF0aC5QSSkgKiAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZpc2ggaXMgZ29pbmcgdG9vIGZhciAoZ2V0dGluZyB0b28gc21hbGwpXHJcbiAgICAgICAgaWYgKG5leHRaIDw9IHRoaXMuekNsb3NlICYmIHRoaXMuekFuZ2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpBbmdsZSA9IC10aGlzLnpBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnZXR0aW5nIHRvIGNsb3NlIChnZXR0aW5nIHRvbyBsYXJnZSlcclxuICAgICAgICBpZiAoKCh0aGlzLndpZHRoIC8gZmlzaFcpICogMTApIDwgKChmaXNoVyAqIG1heExlbmd0aCkgLyB0aGlzLndpZHRoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnpGYXJGYWN0b3IgPSAuM1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoKHRoaXMud2lkdGggLyBmaXNoVykgKiAyKSA8ICgoZmlzaFcgKiBtYXhMZW5ndGgpIC8gdGhpcy53aWR0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy56RmFyRmFjdG9yID0gLjVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMuekZhckZhY3RvciA9IDEgfVxyXG5cclxuICAgICAgICBpZiAobmV4dFogPj0gdGhpcy56RmFyICogdGhpcy56RmFyRmFjdG9yICYmIHRoaXMuekFuZ2xlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpBbmdsZSA9IC10aGlzLnpBbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2NhbGUgPCAuMSkgeyB0aGlzLnNjYWxlID0gLjEgfTsgLy9kb24ndCBsZXQgZmlzaCBnZXQgdG9vIHRpbnlcclxuXHJcbiAgICAgICAgLy9kcmF3IHRoZSBmaXNoXHJcbiAgICAgICAgLy9sb2NhdGUgdGhlIGZpc2hcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTsgLy8gbWFrZSB0aGUgZmlzaCBiaWdnZXIgb3Igc21hbGxlciBkZXBlbmRpbmcgb24gaG93IGZhciBhd2F5IGl0IGlzLlxyXG4gICAgICAgIGN0eC50cmFuc2Zvcm0odGhpcy5mbGlwLCAwLCAwLCAxLCAwLCAwKTsgLy9tYWtlIHRoZSBmaXNoIGZhY2UgdGhlIHdheSBoZSdzIHN3aW1taW5nLlxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VTdHJpcCwgZmlzaFcgKiB0aGlzLmNlbGwsIGZpc2hIICogdGhpcy5zcGVjaWVzLCBmaXNoVywgZmlzaEgsIC1maXNoVyAvIDIsIC1maXNoSCAvIDIsIGZpc2hXLCBmaXNoSCk7IC8vZHJhdyB0aGUgZmlzaFxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IG5leHRTY2FsZSAvLyBpbmNyZW1lbnQgc2NhbGUgZm9yIG5leHQgdGltZSBcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIC8vaW5jcmVtZW50IHRvIG5leHQgc3RhdGVcclxuICAgICAgICB0aGlzLnggPSBuZXh0WDtcclxuICAgICAgICB0aGlzLnkgPSBuZXh0WTtcclxuICAgICAgICB0aGlzLnogPSBuZXh0WjtcclxuICAgICAgICBpZiAodGhpcy5jZWxsID49IHRoaXMuY2VsbENvdW50IC0gMSB8fCB0aGlzLmNlbGwgPD0gMCkgeyB0aGlzLmNlbGxSZXZlcnNlID0gdGhpcy5jZWxsUmV2ZXJzZSAqIC0xOyB9IC8vZ28gdGhyb3VnaCBlYWNoIGNlbGwgaW4gdGhlIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuY2VsbCA9IHRoaXMuY2VsbCArIDEgKiB0aGlzLmNlbGxSZXZlcnNlOyAvL2dvIGJhY2sgZG93biBvbmNlIHdlIGhpdCB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRmlzaCB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2FxdWFyaXVtL2Zpc2gudHMiLCJjbGFzcyBGaXJlIHtcclxuICAgIHRocmVzaG9sZDogbnVtYmVyO1xyXG4gICAgZmlyZTogYW55W107XHJcbiAgICB0aW1lOiBhbnk7XHJcbiAgICBmcHM6IG51bWJlcjtcclxuICAgIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgICBjYW52YXNIZWlnaHQ6IG51bWJlcjtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIGNvbG9yczogYW55W107XHJcbiAgICBpbWFnZURhdGE6IGFueTtcclxuICAgIGJhY2tncm91bmRJbWFnZTogYW55O1xyXG4gICAgY3R4OiBhbnk7XHJcbiAgICBpbnRlbnNpdHk6IGFueTtcclxuXHJcbiAgICBpbml0aWFsaXplID0gZnVuY3Rpb24gKGJhY2tncm91bmQsIGZvcmVncm91bmQsIGltYWdlSWQpIHtcclxuICAgICAgICAvL3RoaXMuYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlQmFja2dyb3VuZCcpO1xyXG4gICAgICAgIC8vdGhpcy5jcmVhdGVCYWNrZ3JvdW5kKGJhY2tncm91bmQpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eCA9IGZvcmVncm91bmQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gZm9yZWdyb3VuZC53aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGZvcmVncm91bmQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuaW50ZW5zaXR5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZwcyA9IDMwO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gMC41O1xyXG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzV2lkdGgsIHRoaXMuY2FudmFzSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmltYWdlRGF0YS5kYXRhO1xyXG4gICAgICAgIHZhciBudW1QaXhlbHMgPSB0aGlzLmRhdGEubGVuZ3RoIC8gNDtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY29sb3IgPSBbXTtcclxuICAgICAgICAgICAgY29sb3JbMF0gPSBjb2xvclsxXSA9IGNvbG9yWzJdID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaV0gPSBjb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzI7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpXVsyXSA9IGkgPDwgMTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDMyXVswXSA9IGkgPDwgMztcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDMyXVsyXSA9IDY0IC0gKGkgPDwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyA2NF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyA2NF1bMV0gPSBpIDw8IDM7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyA5Nl1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyA5Nl1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyA5Nl1bMl0gPSBpIDw8IDI7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxMjhdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTI4XVsxXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDEyOF1bMl0gPSA2NCArIChpIDw8IDIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTYwXVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE2MF1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxNjBdWzJdID0gMTI4ICsgKGkgPDwgMik7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxOTJdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTkyXVsxXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE5Ml1bMl0gPSAxOTIgKyBpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMjI0XVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDIyNF1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAyMjRdWzJdID0gMjI0ICsgaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmlyZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2FudmFzV2lkdGggKiB0aGlzLmNhbnZhc0hlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVtpXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhciA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kKSB7XHJcbiAgICAgICAgdmFyIGJnQ29udGV4dCA9IGJhY2tncm91bmQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBiZ0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGJhY2tncm91bmQud2lkdGgsIGJhY2tncm91bmQuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGZvcmVncm91bmQud2lkdGgsIGZvcmVncm91bmQuaGVpZ2h0KTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9taXplVGhyZXNob2xkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkICs9IE1hdGgucmFuZG9tKCkgKiAwLjIgLSAwLjE7XHJcbiAgICAgICAgdGhpcy50aHJlc2hvbGQgPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLnRocmVzaG9sZCwgMC41KSwgMC44KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKGJhY2tncm91bmQpIHtcclxuICAgICAgICB2YXIgY3R4ID0gYmFja2dyb3VuZC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBjYW52YXNXaWR0aCA9IGJhY2tncm91bmQud2lkdGg7XHJcbiAgICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IGJhY2tncm91bmQuaGVpZ2h0O1xyXG5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZEltYWdlLCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBidXJuQnVybkJ1cm4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5idXJuQnVybkJ1cm4pO1xyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZHQgPSBub3cgLSB0aGlzLnRpbWU7XHJcblxyXG4gICAgICAgIGlmIChkdCA8ICgxMDAwIC8gdGhpcy5mcHMpKVxyXG4gICAgICAgICAgICByZXR1cm47IC8vIHNraXAgYSBmcmFtZVxyXG5cclxuICAgICAgICB0aGlzLnRpbWUgPSBub3c7XHJcblxyXG4gICAgICAgIHZhciBib3R0b21MaW5lID0gdGhpcy5jYW52YXNXaWR0aCAqICh0aGlzLmNhbnZhc0hlaWdodCAtIDEpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHJhbmRvbSBwaXhlbHMgYXQgdGhlIGJvdHRvbSBsaW5lXHJcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmNhbnZhc1dpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gdGhpcy50aHJlc2hvbGQpXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDI1NTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVtib3R0b21MaW5lICsgeF0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG1vdmUgZmxpcCB1cHdhcmRzLCBzdGFydCBhdCBib3R0b21cclxuICAgICAgICB2YXIgdmFsdWUgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuY2FudmFzSGVpZ2h0OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmNhbnZhc1dpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZmlyZVtib3R0b21MaW5lXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAvPSAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4ID09IHRoaXMuY2FudmFzV2lkdGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRoaXMuZmlyZVtib3R0b21MaW5lIC0gdGhpcy5jYW52YXNXaWR0aCArIHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRoaXMuZmlyZVtib3R0b21MaW5lICsgeCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC89IDM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHggKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSAtIHRoaXMuY2FudmFzV2lkdGggKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAvPSA0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYm90dG9tTGluZSAtIHRoaXMuY2FudmFzV2lkdGggKyB4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBib3R0b21MaW5lIC09IHRoaXMuY2FudmFzV2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2tpcFJvd3MgPSAyOyAvLyBza2lwIHRoZSBib3R0b20gMiByb3dzXHJcblxyXG4gICAgICAgIC8vIHJlbmRlciB0aGUgZmxhbWVzIHVzaW5nIG91ciBjb2xvciB0YWJsZVxyXG4gICAgICAgIGZvciAodmFyIHkgPSBza2lwUm93czsgeSA8IHRoaXMuY2FudmFzSGVpZ2h0OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmNhbnZhc1dpZHRoOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHkgKiB0aGlzLmNhbnZhc1dpZHRoICogNCArIHggKiA0O1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpcmVbKHkgLSBza2lwUm93cykgKiB0aGlzLmNhbnZhc1dpZHRoICsgeF07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2luZGV4XSA9IHRoaXMuY29sb3JzW3ZhbHVlXVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsrK2luZGV4XSA9IHRoaXMuY29sb3JzW3ZhbHVlXVsxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsrK2luZGV4XSA9IHRoaXMuY29sb3JzW3ZhbHVlXVsyXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVsrK2luZGV4XSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc29tZXRpbWVzIGNoYW5nZSBmaXJlIGludGVuc2l0eVxyXG4gICAgICAgIGlmICh0aGlzLmludGVuc2l0eSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC45NSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb21pemVUaHJlc2hvbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHgucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRmlyZSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2ZpcmVwbGFjZS9maXJlLnRzIiwiaW1wb3J0IHsgTW9kZWwsIG1hbnksIGF0dHIgfSBmcm9tIFwicmVkdXgtb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVsZXZpc2lvbiBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzRmlyZXBsYWNlUnVubmluZzogYXR0cigpLFxuICAgICAgICAgICAgaXNBcXVhcml1bVJ1bm5pbmc6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5UZWxldmlzaW9uLm1vZGVsTmFtZSA9IFwiVGVsZXZpc2lvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL21vZGVscy9tb2RlbC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCB7IExhbXAgfSBmcm9tICcuLi9kZXZpY2VzL2xpZ2h0aW5nL0xhbXAnO1xyXG5pbXBvcnQgeyBsYW1wU2VsZWN0b3IgfSBmcm9tICcuLi9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBMYW1wVmlld01vZGVsIH0gZnJvbSBcIi4uL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL3ZpZXdcIjtcclxuaW1wb3J0IHsgRnJvbnQgfSBmcm9tIFwiLi4vZGV2aWNlcy9oaWZpL3NwZWFrZXJzL0Zyb250XCI7XHJcbmltcG9ydCB7IFNpZGUgfSBmcm9tIFwiLi4vZGV2aWNlcy9oaWZpL3NwZWFrZXJzL1NpZGVcIjtcclxuaW1wb3J0IHsgQmFjayB9IGZyb20gXCIuLi9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvQmFja1wiO1xyXG5pbXBvcnQgeyBTcGVha2VyVmlld01vZGVsIH0gZnJvbSBcIi4uL2RldmljZXMvaGlmaS9tb2RlbHMvdmlld1wiO1xyXG5pbXBvcnQgeyBmcm9udFNwZWFrZXJTZWxlY3Rvciwgc2lkZVNwZWFrZXJTZWxlY3RvciwgYmFja1NwZWFrZXJTZWxlY3RvciB9IGZyb20gXCIuLi9kZXZpY2VzL2hpZmkvbW9kZWxzL3NjaGVtYVwiO1xyXG5pbXBvcnQgeyBTb2ZhIH0gZnJvbSBcIi4vU29mYVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxhbXBzOiBMYW1wVmlld01vZGVsW107XHJcbiAgICBmcm9udFNwZWFrZXJzOiBTcGVha2VyVmlld01vZGVsW107XHJcbiAgICBzaWRlU3BlYWtlcnM6IFNwZWFrZXJWaWV3TW9kZWxbXTtcclxuICAgIGJhY2tTcGVha2VyczogU3BlYWtlclZpZXdNb2RlbFtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgbGFtcHM6IExhbXBWaWV3TW9kZWxbXTtcclxuICAgIGZyb250U3BlYWtlcnM6IFNwZWFrZXJWaWV3TW9kZWxbXTtcclxuICAgIHNpZGVTcGVha2VyczogU3BlYWtlclZpZXdNb2RlbFtdO1xyXG4gICAgYmFja1NwZWFrZXJzOiBTcGVha2VyVmlld01vZGVsW107XHJcbn1cclxuXHJcbmNsYXNzIEZsb29yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsYW1wczogcHJvcHMubGFtcHMsXHJcbiAgICAgICAgICAgIGZyb250U3BlYWtlcnM6IHByb3BzLmZyb250U3BlYWtlcnMsXHJcbiAgICAgICAgICAgIHNpZGVTcGVha2VyczogcHJvcHMuc2lkZVNwZWFrZXJzLFxyXG4gICAgICAgICAgICBiYWNrU3BlYWtlcnM6IHByb3BzLmJhY2tTcGVha2Vyc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxvb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzYwJScsIG1hcmdpbkxlZnQ6ICcyMCUnLCBmbG9hdDogJ2xlZnQnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9vci1jb250YWluZXJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzUwcHgnIH19PiB7dGhpcy5wcm9wcy5mcm9udFNwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcGVha2VyLWZyb250LScgKyBzcGVha2VyLnBvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcm9udCBrZXk9e3NwZWFrZXIuaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MHB4JyB9fT4ge3RoaXMucHJvcHMubGFtcHMubWFwKChsYW1wKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICdodWUtJyArIGxhbXAucG9zaXRpb24gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYW1wIGtleT17bGFtcC5pZH0gbGFtcD17bGFtcH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzE1MHB4Jywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvZmEgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMTMwcHgnLCB3aWR0aDogJzEwMCUnIH19PiB7dGhpcy5wcm9wcy5zaWRlU3BlYWtlcnMubWFwKChzcGVha2VyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NwZWFrZXItc2lkZS0nICsgc3BlYWtlci5wb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZSBrZXk9e3NwZWFrZXIuaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzIyMHB4Jywgd2lkdGg6ICcxMDAlJyB9fT4ge3RoaXMucHJvcHMuYmFja1NwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcGVha2VyLWJhY2stJyArIHNwZWFrZXIucG9zaXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2sga2V5PXtzcGVha2VyLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhbXBzOiBsYW1wU2VsZWN0b3Ioc3RhdGUubGFtcCksXHJcbiAgICAgICAgZnJvbnRTcGVha2VyczogZnJvbnRTcGVha2VyU2VsZWN0b3Ioc3RhdGUuaGlmaSksXHJcbiAgICAgICAgc2lkZVNwZWFrZXJzOiBzaWRlU3BlYWtlclNlbGVjdG9yKHN0YXRlLmhpZmkpLFxyXG4gICAgICAgIGJhY2tTcGVha2VyczogYmFja1NwZWFrZXJTZWxlY3RvcihzdGF0ZS5oaWZpKVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gV2lyZSB1cCB0aGUgUmVhY3QgY29tcG9uZW50IHRvIHRoZSBSZWR1eCBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbnVsbFxyXG4pKEZsb29yKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Zsb29yL0Zsb29yLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb2ZhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNTBweFwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6ICczODBweCcsIG1hcmdpbjogJzAgYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zb2ZhLnBuZ1wiIHdpZHRoPVwiMzgwcHhcIiBoZWlnaHQ9XCIxNTBweFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICctMTAwcHgnLCBsZWZ0OiAnMCcgIH19IC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9mbG9vci9Tb2ZhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWZyYW1lXCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luUmlnaHQ6IFwiNzVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tYXJpbHluLmpwZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIgd2lkdGg9XCIxMjVweFwiIGhlaWdodD1cIjE3MHB4XCIgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL3dhbGwvUGljdHVyZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZWxldmlzaW9uIGZyb20gJy4uL2RldmljZXMvdGVsZXZpc2lvbi9UZWxldmlzaW9uJztcbmltcG9ydCBBbWJpbGlnaHQgZnJvbSAnLi4vZGV2aWNlcy9hbWJpbGlnaHQvQW1iaWxpZ2h0JztcclxuaW1wb3J0IFNoZWxmIGZyb20gJy4vc2hlbGYvU2hlbGYnO1xyXG5pbXBvcnQgQm9va2Nhc2UgZnJvbSAnLi9ib29rY2FzZS9Cb29rY2FzZSc7XHJcbmltcG9ydCBQaWN0dXJlIGZyb20gJy4vUGljdHVyZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCIgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBoZWlnaHQ6IFwiMzAwcHhcIiwgbWFyZ2luVG9wOiAnMjhweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwJVwiLCBmbG9hdDogXCJsZWZ0XCIsIGhlaWdodDogXCIzMDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIyMCVcIiwgZmxvYXQ6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjcwcHhcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiwgd2lkdGg6IFwiMjUwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbWJpbGlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZWxldmlzaW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGVsZiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwJVwiLCBmbG9hdDogXCJyaWdodFwiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgbWFyZ2luTGVmdDogXCIxMDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2Nhc2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL3dhbGwvV2FsbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rY2FzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZnJhbWUtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTkwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgYmFja2dyb3VuZDogXCJyZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGhlaWdodDogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3dcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGhlaWdodDogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjUwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL2Jvb2tjYXNlL0Jvb2tjYXNlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWxmIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiwgd2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcGVha2VyLWZyb250LnBuZ1wiIHdpZHRoPVwiNzVweFwiIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiwgY2xlYXI6IFwiYm90aFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoZWxmXCIgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIGhlaWdodDogXCI1MHB4XCIsIGJvcmRlclRvcDogXCI1cHggc29saWQgcmdiYSgxOTMsIDE1NSwgMTA4LCAxKVwiLCBib3JkZXJCb3R0b206IFwiNXB4IHNvbGlkIHJnYmEoMTkzLCAxNTUsIDEwOCwgMSlcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkICM0NDQzNDNcIiwgYm9yZGVyVG9wOiBcIjJweCBzb2xpZCAjNDQ0MzQzXCIsIHdpZHRoOiBcIjI1JVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBmbG9hdDogXCJsZWZ0XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcHM0LnBuZ1wiIHdpZHRoPVwiNzVweFwiIGhlaWdodD1cIjI1cHhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTFweFwiLCBtYXJnaW5MZWZ0OiBcIjdweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGJveC1zaGFkb3dcIiBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgZmxvYXQ6IFwibGVmdFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9odHBjLmpwZ1wiIHdpZHRoPVwiNzVweFwiIGhlaWdodD1cIjMwcHhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiN3B4XCIsIG1hcmdpbkxlZnQ6IFwiN3B4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgZmxvYXQ6IFwibGVmdFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL3dhbGwvc2hlbGYvU2hlbGYudHN4IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIFN0b3JlQ3JlYXRvciwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgKiBhcyBBcHBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuICAgICkoY3JlYXRlU3RvcmUpIGFzIFN0b3JlQ3JlYXRvcjtcblxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcblxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBBcHBTdG9yZT4oJy4vc3RvcmUnKTtcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdG9yZTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2Vycykge1xuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29uZmlndXJlU3RvcmUudHMiLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XHJcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3NlcnZpY2VzL2NhbWVyYSc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc2VydmljZXMvdGVsZXZpc2lvbic7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL3NlcnZpY2VzL3BsYXllcic7XHJcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMnXHJcbmltcG9ydCB7IENhbWVyYUFjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25BY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3RlbGV2aXNpb25cIjtcclxuaW1wb3J0IHsgUGxheWVyQWN0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy9wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcblxyXG5jb250YWluZXIuYmluZDxDYW1lcmFTZXJ2aWNlPihTZXJ2aWNlcy5DYW1lcmFTZXJ2aWNlKS50byhDYW1lcmFBY3Rpb25TZXJ2aWNlKTtcclxuY29udGFpbmVyLmJpbmQ8VGVsZXZpc2lvblNlcnZpY2U+KFNlcnZpY2VzLlRlbGV2aXNpb25TZXJ2aWNlKS50byhUZWxldmlzaW9uQWN0aW9uU2VydmljZSk7XHJcbmNvbnRhaW5lci5iaW5kPFBsYXllclNlcnZpY2U+KFNlcnZpY2VzLlBsYXllclNlcnZpY2UpLnRvKFBsYXllckFjdGlvblNlcnZpY2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9pb2MvY29udGFpbmVyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHRcbiAgICA8Um91dGUgY29tcG9uZW50PXtMYXlvdXR9PlxuICAgICAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50cz17eyBib2R5OiBIb21lIH19IC8+XG4gICAgPC9Sb3V0ZT47XG5cbi8vIEVuYWJsZSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IChITVIpXG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vcm91dGVzLnRzeCIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zZXJ2aWNlcy9jYW1lcmEnO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tICcuLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL3ZpZXdtb2RlbCc7XHJcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhQWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIENhbWVyYVNlcnZpY2Uge1xyXG5cclxuICAgIGFzeW5jIGdldENhbWVyYVN0YXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPENhbWVyYVZpZXdNb2RlbD4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9nZXRDYW1lcmFzP2lkPScgKyBpZCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHZhciBjYW1lcmEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gPENhbWVyYVZpZXdNb2RlbD57XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBjYW1lcmEuaXNNb3Rpb25EZXRlY3RlZCxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBjYW1lcmEuaXNSZWNvcmRpbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RhcnRSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9zdGFydFJlY29yZGluZycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgcmVjb3JkaW5nJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgc3RvcFJlY29yZGluZyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvY2FtZXJhL3N0b3BSZWNvcmRpbmcnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3AgcmVjb3JkaW5nJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy9jYW1lcmEudHMiLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9zZXJ2aWNlcy9wbGF5ZXInO1xyXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsYXllckFjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBQbGF5ZXJTZXJ2aWNlIHtcclxuICAgIGFzeW5jIHBsYXlWaWRlbyhpZDogbnVtYmVyLCB2aWRlbzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvdGVsZXZpc2lvbi9zZXRWaWRlbycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGxheSB2aWRlbycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIHBhdXNlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy90ZWxldmlzaW9uL3BhdXNlUGxheWVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXVzZSBwbGF5ZXInKTtcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBzdG9wKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy90ZWxldmlzaW9uL3N0b3BQbGF5ZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0b3AgcGxheWVyJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvcGxheWVyLnRzIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgVGVsZXZpc2lvblNlcnZpY2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zZXJ2aWNlcy90ZWxldmlzaW9uJztcclxuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWxldmlzaW9uQWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRlbGV2aXNpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBhc3luYyBzZXRGaXJlcGxhY2UoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL3RlbGV2aXNpb24vc2V0RmlyZXBsYWNlJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgZmlyZXBsYWNlJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgc2V0VmlkZW8oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL3RlbGV2aXNpb24vc2V0VmlkZW8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCB2aWRlbycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3RlbGV2aXNpb24udHMiLCJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvbW9kZWxcIjtcbmltcG9ydCB7IFRlbGV2aXNpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQgeyBBbWJpbGlnaHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9tb2RlbHMvbW9kZWxcIjtcbmltcG9ydCB7IExhbXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy9tb2RlbFwiO1xuaW1wb3J0IHsgSGlmaSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9tb2RlbHMvbW9kZWxcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL21vZGVscy9tb2RlbFwiO1xuaW1wb3J0ICogYXMgRGlzcGxheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllclwiO1xuaW1wb3J0ICogYXMgVGVsZXZpc2lvblJlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3N0YXRlcy90ZWxldmlzaW9uXCI7XG5pbXBvcnQgKiBhcyBBbWJpbGlnaHRSZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L3N0YXRlL3JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIExhbXBSZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvcmVkdWNlclwiO1xuaW1wb3J0ICogYXMgSGlmaVJlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3N0YXRlL3JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIFBsYXllclJlZHVjZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvc3RhdGUvcmVkdWNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xuICAgIG5hdm1lbnU6IHt9LFxuICAgIGRpc3BsYXk6IERpc3BsYXksXG4gICAgdGVsZXZpc2lvbjogVGVsZXZpc2lvbixcbiAgICBhbWJpbGlnaHQ6IEFtYmlsaWdodCxcbiAgICBsYW1wOiBMYW1wLFxuICAgIGhpZmk6IEhpZmksXG4gICAgcGxheWVyOiBQbGF5ZXJcbn1cblxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XG4gICAgZGlzcGxheTogRGlzcGxheWVyLmRlZmF1bHQsXG4gICAgdGVsZXZpc2lvbjogVGVsZXZpc2lvblJlZHVjZXIuZGVmYXVsdCxcbiAgICBhbWJpbGlnaHQ6IEFtYmlsaWdodFJlZHVjZXIuZGVmYXVsdCxcbiAgICBsYW1wOiBMYW1wUmVkdWNlci5kZWZhdWx0LFxuICAgIGhpZmk6IEhpZmlSZWR1Y2VyLmRlZmF1bHQsXG4gICAgcGxheWVyOiBQbGF5ZXJSZWR1Y2VyLmRlZmF1bHRcbn07XG5cbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc3RvcmUvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBEaW1lbnNpb25zIHtcbiAgICBoZWlnaHQ6IHN0cmluZ1xufVxuXG52YXIgZ2V0RGltZW5zaW9ucyA9ICgpID0+ICh7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTAgKyAncHgnIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBEaW1lbnNpb25zPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBoZWlnaHQ6ICcxMDB2aCcgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXREaW1lbnNpb25zKCkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwgeyBzdHlsZTogeyBoZWlnaHQ6IHRoaXMuc3RhdGUuaGVpZ2h0IH0gfSk7XG4gICAgICAgIC8vcmV0dXJuIDxkaXY+e2NoaWxkfTwvZGl2PjtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zaXRpb25Nb3Rpb24sIHNwcmluZyB9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IHdpbGxFbnRlciA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogMCxcbiAgICBzY2FsZTogMC45N1xufSk7XG5cbmNvbnN0IHdpbGxMZWF2ZSA9ICgpID0+ICh7XG4gICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgIHNjYWxlOiBzcHJpbmcoMS4wMClcbn0pO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygxKSxcbiAgICBzY2FsZTogc3ByaW5nKDEpXG59KTtcblxuY29uc3QgUm91dGVUcmFuc2l0aW9uID0gKHsgY2hpbGRyZW46IGNoaWxkLCBwYXRobmFtZSB9KSA9PiAoXG4gICAgPFRyYW5zaXRpb25Nb3Rpb25cbiAgICAgICAgc3R5bGVzPXtbe1xuICAgICAgICAgICAga2V5OiBwYXRobmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiBnZXRTdHlsZXMoKSxcbiAgICAgICAgICAgIGRhdGE6IHsgY2hpbGQgfVxuICAgICAgICB9XX1cbiAgICAgICAgd2lsbEVudGVyPXt3aWxsRW50ZXJ9XG4gICAgICAgIHdpbGxMZWF2ZT17d2lsbExlYXZlfVxuICAgID5cbiAgICAgICAgeyhpbnRlcnBvbGF0ZWQpID0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtpbnRlcnBvbGF0ZWQubWFwKCh7IGtleSwgc3R5bGUsIGRhdGEgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtrZXl9LXRyYW5zaXRpb25gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIHN0eWxlcy53cmFwcGVyLCB7IG9wYWNpdHk6IHN0eWxlLm9wYWNpdHksIHRyYW5zZm9ybTogYHNjYWxlKCR7c3R5bGUuc2NhbGV9KWAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmNoaWxkfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICA8L1RyYW5zaXRpb25Nb3Rpb24gPlxuKTtcblxudmFyIHN0eWxlcyA9IHtcbiAgICB3cmFwcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVUcmFuc2l0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2xpYi9yb3V0ZS10cmFuc2l0aW9uLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LDc3dS9QSE4yWnlCM2FXUjBhRDBpT1cxdElpQm9aV2xuYUhROUlqbHRiU0lnZG1sbGQwSnZlRDBpTUNBd0lERXdNQ0F4TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2RtVnljMmx2YmowaU1TNHlJaUJpWVhObFVISnZabWxzWlQwaWRHbHVlU0krQ2lBZ1BHUmxjMk0rVWxKUFJDQk1iMmR2UEM5a1pYTmpQZ29nSUR3aExTMGdVMmh2ZHlCdmRYUnNhVzVsSUc5bUlHTmhiblpoY3lCMWMybHVaeUFuY21WamRDY2daV3hsYldWdWRDQXRMVDRLSUNBOFkybHlZMnhsSUdONFBTSTFNQ0lnWTNrOUlqVXdJaUJ5UFNJME1DSWdabWxzYkQwaWQyaHBkR1VpSUhOMGNtOXJaVDBpY21Wa0lpQnpkSEp2YTJVdGQybGtkR2c5SWpFeUlpQWdMejRLUEM5emRtYytcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQXBwL2ltYWdlcy9sb2dvLnN2Z1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzcG5ldC1wcmVyZW5kZXJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCJcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9