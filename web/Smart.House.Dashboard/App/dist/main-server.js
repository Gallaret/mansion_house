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

        var _this = _possibleConstructorReturn(this, (Basement.__proto__ || Object.getPrototypeOf(Basement)).call(this));

        _this.state = {
            isMusic: false,
            isVideo: false,
            isTheme: false,
            isPicture: false
        };
        return _this;
    }

    _createClass(Basement, [{
        key: 'selectMusic',
        value: function selectMusic() {
            this.setState({
                isMusic: true,
                isVideo: false,
                isPicture: false,
                isTheme: false
            });
        }
    }, {
        key: 'selectPicture',
        value: function selectPicture() {
            this.setState({
                isMusic: false,
                isVideo: false,
                isPicture: true,
                isTheme: false
            });
        }
    }, {
        key: 'selectVideo',
        value: function selectVideo() {
            this.setState({
                isMusic: false,
                isVideo: true,
                isPicture: false,
                isTheme: false
            });
        }
    }, {
        key: 'selectTheme',
        value: function selectTheme() {
            this.setState({
                isMusic: false,
                isVideo: false,
                isPicture: false,
                isTheme: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'bottom' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: '370px', height: '105px', float: "left" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'player-media-type', style: { width: '200px', marginTop: '25px', marginLeft: '125px' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-facetime-video', onClick: function onClick() {
                                    return _this2.selectVideo();
                                }, style: { fontSize: "25px", position: 'relative' } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { position: 'absolute', left: '10px' }, className: this.state.isVideo ? 'player-media-selected' : '' },
                                ' '
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-picture', onClick: function onClick() {
                                    return _this2.selectPicture();
                                }, style: { fontSize: "25px", marginLeft: "20px" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { position: 'absolute', left: '10px' }, className: this.state.isPicture ? 'player-media-selected' : '' },
                                ' '
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-film', onClick: function onClick() {
                                    return _this2.selectTheme();
                                }, style: { fontSize: "25px", marginLeft: "20px" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { position: 'absolute', left: '10px' }, className: this.state.isTheme ? 'player-media-selected' : '' },
                                ' '
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'glyphicon glyphicon-music', onClick: function onClick() {
                                    return _this2.selectMusic();
                                }, style: { fontSize: "25px", marginLeft: "20px" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { position: 'absolute', left: '10px' }, className: this.state.isMusic ? 'player-media-selected' : '' },
                                ' '
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__devices_player_Player__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { style: { width: '360px', height: '105px', float: "left" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { style: { height: '100%', display: 'inline' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'player-media-type', style: { float: 'left', display: 'inline-block', width: '200px', height: '60px', position: 'relative', marginLeft: '45px', marginTop: '25px' } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('input', { type: 'range', min: '0', max: '100', step: '1', style: { display: 'inline', width: '185px', position: 'absolute', top: '18px', left: '5px' } }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'div',
                                { style: { display: 'inline', position: 'absolute', top: ' 16px', width: '185px', left: '5' } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'span',
                                    { style: { marginRight: '30px' } },
                                    '0'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'span',
                                    { style: { marginRight: '30px' } },
                                    '25'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'span',
                                    { style: { marginRight: '30px' } },
                                    '50'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'span',
                                    null,
                                    '75'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    'span',
                                    { style: { float: 'right' } },
                                    '100'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { className: 'player-quickSettings', style: { height: '60px', width: '60px', float: 'right' } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('img', { src: 'images/settings.png', height: '60px', width: '60px' })
                        )
                    )
                )
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
                { className: 'player', style: { marginTop: "10px", marginLeft: '10px', height: "90px", width: "580px", float: "left", position: "relative" } },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](
                    'div',
                    { style: { float: 'left', width: '60px', height: '60px', marginTop: '15px', marginRight: '30px' } },
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
                            { className: 'player-display', style: { width: "200px", padding: "0 5px", display: "inline-block", fontSize: "12px", lineHeight: "35px" } },
                            'Video: '
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
                    { style: { float: 'left', width: '60px', height: '60px', marginTop: '15px', marginLeft: '30px' } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA3Mzg4NDJiZjgwYjZmZjJlYzMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1vcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0c2xpYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW52ZXJzaWZ5XCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbWFpbi10YXNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvYWN0aW9ucy9lZmZlY3RzLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L21vZGVscy9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvb3JtLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9tb2RlbHMvc2NoZW1hLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL3NjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc3RhdGVzL3RlbGV2aXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvTmF2TWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9iYXNlbWVudC9CYXNlbWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvQW1iaWxpZ2h0LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9tb2RlbHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9DYW1lcmEudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL0Rpc3BsYXllci50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL21vZGVscy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvQmFjay50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3NwZWFrZXJzL0Zyb250LnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3BlYWtlcnMvU2lkZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3N0YXRlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9MYW1wLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL3N0YXRlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvUGxheWVyLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9tb2RlbHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvc3RhdGUvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vVGVsZXZpc2lvbi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vYXF1YXJpdW0udHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL2VmZmVjdHMvYXF1YXJpdW0vZmlzaC50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZS50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Zsb29yL0Zsb29yLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9mbG9vci9Tb2ZhLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL1BpY3R1cmUudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL3dhbGwvV2FsbC50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvd2FsbC9ib29rY2FzZS9Cb29rY2FzZS50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvd2FsbC9zaGVsZi9TaGVsZi50c3giLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9pb2MvY29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy9jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvdGVsZXZpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9BcHAvY29tcG9zaXRpb24vc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQXBwL2xpYi9mdWxsc2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9BcHAvbGliL3JvdXRlLXRyYW5zaXRpb24udHN4Iiwid2VicGFjazovLy8uL0FwcC9pbWFnZXMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNwbmV0LXByZXJlbmRlcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxrQzs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7OztBQ0FnQztBQUN3QjtBQUdqRCxJQUFTLE1BQUcsSUFBVTtBQUMxQixJQUFTLFNBQU8sd0RBQVUsMERBQWU7QUFFdEMsSUFBcUIscUJBQXFCLGVBQVE7QUFFcEQsUUFBVSxTQUFVLFFBQU8sT0FBUztBQUU5QjtBQUNBLFlBQVEsT0FBRztBQUNMLGtCQUFRLE9BQVM7QUFDaEIsbUJBQVEsT0FBVTtBQUNuQixrQkFBUSxPQUFTO0FBQ3BCLGVBQVEsT0FBTTtBQUNmLGNBQVEsT0FFcEI7QUFSNEI7QUFRekIsQ0FaOEIsQ0FBMUI7QUFjRCxJQUF1Qix1QkFBcUIsZUFBUTtBQUV0RCxRQUFZLFdBQVUsUUFBTyxPQUFRLFFBQUksSUFBVTtBQUU3QztBQUNBLFlBQVUsU0FBRztBQUNELHdCQUFVLFNBRWhDO0FBSjhCO0FBSTNCLENBUmdDLENBQTVCLEM7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QUFlO0FBQVM7QUFDYixpQkFBUSw0RUFBRztBQUNiLGVBQVEsNEVBQ2Q7QUFIc0I7O0FBS3pCLElBQXFCO0FBQUksUUFBaUIsYUFBUDtRQUF3Qjs7QUFDdEM7QUFBakIsVUFDVztBQUNBLHFCQUFVO0FBQ1IsdUJBQWE7QUFDZCxzQkFBRSxFQUNQO0FBSk0sYUFBRCxHQUtFLFdBQVcsV0FDWCxXQUVWO0FBQUMsa0JBQWE7O0FBRU47O0FBQWEsNkJBQUk7QUFBRSx3QkFBSzt3QkFBTzt3QkFBUTs7QUFDL0I7MEJBQ0ssS0FBb0IscUJBQ25CLE9BQU8sT0FBTyxPQUFHLElBQVEsT0FBUSxTQUFFLEVBQVMsU0FBTyxNQUFRLFNBQWEsc0JBQWMsTUFFNUY7QUFBSyw2QkFNM0I7Ozs7Ozs7QUFFRixJQUFVO0FBQ0M7QUFDSyxrQkFBWTtBQUNmLGVBRVg7QUFKVztBQURBO0FBT2IseURBQStCLGlCOzs7Ozs7QUNsRC9CLHFDQUFxQyw0WTs7Ozs7O0FDQXJDLGdEOzs7Ozs7QUNBQSx3RDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsbUQ7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93d3dyb290L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDc2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1MDczODg0MmJmODBiNmZmMmVjMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1vcm1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1vcm1cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInRzbGliXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IFBsYXllciwgU2V0dGluZ3MsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IFBsYXllclZpZXdNb2RlbCwgU2V0dGluZ3NWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKFBsYXllciwgU2V0dGluZ3MsIEhhcm1vbm9ncmFtKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5ZXJTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuXHJcbiAgICB2YXIgcGxheWVyID0gc2Vzc2lvbi5QbGF5ZXIuZmlyc3QoKTtcclxuXHJcbiAgICByZXR1cm4gPFBsYXllclZpZXdNb2RlbD57XHJcbiAgICAgICAgaWQ6IHBsYXllci5pZCxcclxuICAgICAgICBpc0FjdGl2ZTogcGxheWVyLmlzQWN0aXZlLFxyXG4gICAgICAgIGlzUnVubmluZzogcGxheWVyLmlzUnVubmluZyxcclxuICAgICAgICBpc1BhdXNlZDogcGxheWVyLmlzUGF1c2VkLFxyXG4gICAgICAgIHZpZGVvOiBwbGF5ZXIudmlkZW8sXHJcbiAgICAgICAgbmFtZTogcGxheWVyLm5hbWVcclxuICAgIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0gc2Vzc2lvbi5QbGF5ZXIuZmlyc3QoKS5yZWYuc2V0dGluZ3M7XHJcblxyXG4gICAgcmV0dXJuIDxTZXR0aW5nc1ZpZXdNb2RlbD57XHJcbiAgICAgICAgaWQ6IHNldHRpbmdzLmlkLFxyXG4gICAgICAgIGJhY2tncm91bmRQbGF5OiBzZXR0aW5ncy5iYWNrZ3JvdW5kUGxheVxyXG4gICAgfTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvbW9kZWxzL3NjaGVtYS50cyIsImV4cG9ydCBjb25zdCBTZXJ2aWNlcyA9IHtcclxuICAgIENhbWVyYVNlcnZpY2U6IFN5bWJvbChcIkNhbWVyYVNlcnZpY2VcIiksXHJcbiAgICBUZWxldmlzaW9uU2VydmljZTogU3ltYm9sKFwiVGVsZXZpc2lvblNlcnZpY2VcIiksXHJcbiAgICBQbGF5ZXJTZXJ2aWNlOiBTeW1ib2woXCJQbGF5ZXJTZXJ2aWNlXCIpXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW52ZXJzaWZ5XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQW1iaWxpZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfRUZGRUNUID0gJ1NldEVmZmVjdEFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldEVmZmVjdEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnU2V0RWZmZWN0QWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHBhdHRlcm46IHN0cmluZ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERCA9ICdBZGRBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZEFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBBbWJpbGlnaHQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucy50cyIsImltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5pbXBvcnQgeyBSZWR1Y2VyLCBBY3Rpb25DcmVhdG9yIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWwvdmlld21vZGVsJztcclxuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWwvb3JtJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0RJU1BMQVkgPSAnQ3JlYXRlRGlzcGxheUFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FNRVJBID0gJ0FkZENhbWVyYUFjdGlvbic7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0FNRVJBID0gJ1VwZGF0ZUNhbWVyYUFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZURpc3BsYXlBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0NyZWF0ZURpc3BsYXlBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZENhbWVyYUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkQ2FtZXJhQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBkaXNwbGF5OiBudW1iZXIsXHJcbiAgICAgICAgY2FtZXJhOiBDYW1lcmFWaWV3TW9kZWxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVDYW1lcmFBY3Rpb24ge1xyXG4gICAgdHlwZTogJ1VwZGF0ZUNhbWVyYUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBDYW1lcmFWaWV3TW9kZWw7XHJcbn1cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBDcmVhdGVEaXNwbGF5QWN0aW9uIHwgQWRkQ2FtZXJhQWN0aW9uIHwgVXBkYXRlQ2FtZXJhQWN0aW9uXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICB1cGRhdGVDYW1lcmE6IChjYW1lcmE6IENhbWVyYVZpZXdNb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBvcm0uc2Vzc2lvbihnZXRTdGF0ZSgpLmRpc3BsYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBzZXNzaW9uLkNhbWVyYS53aXRoSWQoY2FtZXJhLmlkKTtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSA8Q2FtZXJhVmlld01vZGVsPntcbiAgICAgICAgICAgIG5hbWU6IHN0YXRlLm5hbWUsXG4gICAgICAgICAgICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxuICAgICAgICAgICAgaWQ6IHN0YXRlLmlkLFxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGNhbWVyYS5pc1JlY29yZGluZyxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGNhbWVyYS5pc01vdGlvbkRldGVjdGVkXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfQ0FNRVJBLCBwYXlsb2FkOiBuZXdTdGF0ZSB9KTtcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHNlc3Npb24sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgRGlzcGxheSwgQ2FtZXJhIH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIENSRUFURV9ESVNQTEFZOlxyXG4gICAgICAgICAgICBEaXNwbGF5LmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NBTUVSQTpcclxuICAgICAgICAgICAgQ2FtZXJhLmNyZWF0ZShhY3Rpb24ucGF5bG9hZC5jYW1lcmEpO1xyXG4gICAgICAgICAgICBEaXNwbGF5LndpdGhJZChhY3Rpb24ucGF5bG9hZC5kaXNwbGF5KVxyXG4gICAgICAgICAgICAgICAgLmNhbWVyYXMuYWRkKENhbWVyYS53aXRoSWQoYWN0aW9uLnBheWxvYWQuY2FtZXJhLmlkKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVVBEQVRFX0NBTUVSQTpcclxuICAgICAgICAgICAgQ2FtZXJhLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPERpc3BsYXk+c2Vzc2lvbi5zdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIob3JtLCByZWR1Y2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXIudHMiLCJpbXBvcnQgeyBMYW1wIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfQ09MT1IgPSAnU2V0Q29sb3JBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDb2xvckFjdGlvbiB7XHJcbiAgICB0eXBlOiAnU2V0Q29sb3JBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9MQU1QID0gJ0FkZExhbXBBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRMYW1wQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRMYW1wQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IExhbXA7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgUGxheWVyVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXcnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUExBWV9WSURFTyA9ICdQbGF5VmlkZW9BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbGF5VmlkZW9BY3Rpb24ge1xyXG4gICAgdHlwZTogJ1BsYXlWaWRlb0FjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICB2aWRlbzogc3RyaW5nXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUEFVU0UgPSAnUGF1c2VBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXVzZUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnUGF1c2VBY3Rpb24nO1xyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGlkOiBudW1iZXJcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVE9QID0gJ1N0b3BBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdG9wQWN0aW9uIHtcclxuICAgIHR5cGU6ICdTdG9wQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZDogbnVtYmVyXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BMQVlFUiA9ICdBZGRQbGF5ZXJBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRQbGF5ZXJBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FkZFBsYXllckFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBQbGF5ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUExBWUVSID0gJ1VwZGF0ZVBsYXllckFjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVBsYXllckFjdGlvbiB7XHJcbiAgICB0eXBlOiAnVXBkYXRlUGxheWVyQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IFBsYXllclZpZXdNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgS25vd25BY3Rpb24gPSBQbGF5VmlkZW9BY3Rpb24gfCBQYXVzZUFjdGlvbiB8IEFkZFBsYXllckFjdGlvbiB8IFVwZGF0ZVBsYXllckFjdGlvbiB8IFN0b3BBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICB1cGRhdGU6IChpZDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG9ybS5zZXNzaW9uKGdldFN0YXRlKCkucGxheWVyKTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBzZXNzaW9uLlBsYXllci53aXRoSWQoaWQpO1xuXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IDxQbGF5ZXJWaWV3TW9kZWw+IHtcbiAgICAgICAgICAgIG5hbWU6IHN0YXRlLm5hbWUsXG4gICAgICAgICAgICBpZDogc3RhdGUuaWQsXG4gICAgICAgICAgICB2aWRlbzogc3RhdGUudmlkZW8sXG4gICAgICAgICAgICBpc1J1bm5pbmc6IHN0YXRlLmlzUnVubmluZyxcbiAgICAgICAgICAgIGlzUGF1c2VkOiBzdGF0ZS5pc1BhdXNlZCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiBzdGF0ZS5pc0FjdGl2ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogVVBEQVRFX1BMQVlFUiwgcGF5bG9hZDogbmV3U3RhdGUgfSk7XG4gICAgfSxcclxuXHJcbiAgICBwbGF5VmlkZW86IChpZDogbnVtYmVyLCB2aWRlbzogc3RyaW5nKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBQTEFZX1ZJREVPLCBwYXlsb2FkOiB7IGlkOiBpZCwgdmlkZW86IHZpZGVvIH0gfSk7XG4gICAgfSxcclxuXHJcbiAgICBwYXVzZTogKGlkOiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFBBVVNFLCBwYXlsb2FkOiB7IGlkOiBpZCB9IH0pO1xuICAgIH0sXHJcblxyXG4gICAgc3RvcDogKGlkOiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IFNUT1AsIHBheWxvYWQ6IHsgaWQ6IGlkIH0gfSk7XG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL3N0YXRlL2FjdGlvbnMudHMiLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9pb2MvY29udGFpbmVyJ1xyXG5pbXBvcnQgZ2V0RGVjb3JhdG9ycyBmcm9tIFwiaW52ZXJzaWZ5LWluamVjdC1kZWNvcmF0b3JzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgeyBsYXp5SW5qZWN0IH0gPSBnZXREZWNvcmF0b3JzKGNvbnRhaW5lcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG9tYWluLXRhc2tcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkb21haW4tdGFza1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vY29tcG9zaXRpb24vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBBbWJpbGlnaHQgZnJvbSAnLi4vZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucydcclxuaW1wb3J0ICogYXMgTGFtcCBmcm9tICcuLi9kZXZpY2VzL2xpZ2h0aW5nL3N0YXRlL2FjdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRFTEVWSVNJT05fRklSRVBMQUNFID0gJ1RlbGV2aXNpb25GaXJlcGxhY2VBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uIHtcclxuICAgIHR5cGU6ICdUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIHZhbHVlOiBib29sZWFuXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVEVMRVZJU0lPTl9BUVVBUklVTSA9ICdUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24ge1xyXG4gICAgdHlwZTogJ1RlbGV2aXNpb25BcXVhcml1bUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICB2YWx1ZTogYm9vbGVhblxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uIHwgVGVsZXZpc2lvbkFxdWFyaXVtQWN0aW9uIHwgQW1iaWxpZ2h0LlNldEVmZmVjdEFjdGlvbiB8IExhbXAuU2V0Q29sb3JBY3Rpb247XHJcblxyXG5leHBvcnQgY29uc3QgQXF1YXJpdW1CYWNrZ3JvdW5kID0gJ3VybChpbWFnZXMvYmFja2dyb3VuZC1mbGlwMi5qcGcpJztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIHNldEZpcmVwbGFjZTogKGlkOiBudW1iZXIsIHZhbHVlOiBib29sZWFuKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBURUxFVklTSU9OX0ZJUkVQTEFDRSwgcGF5bG9hZDogeyBpZDogaWQsIHZhbHVlOiB2YWx1ZX0gfSk7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogTGFtcC5TRVRfQ09MT1IsIHBheWxvYWQ6IHsgaWQ6IDEsIGNvbG9yOiB2YWx1ZSA/ICdvcmFuZ2UnIDogJycgfSB9KTtcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goeyB0eXBlOiBMYW1wLlNFVF9DT0xPUiwgcGF5bG9hZDogeyBpZDogMiwgY29sb3I6IHZhbHVlID8gJ29yYW5nZScgOiAnJyB9IH0pO1xuICAgIH0sXHJcblxyXG4gICAgc2V0QXF1YXJpdW06IChpZDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHsgdHlwZTogVEVMRVZJU0lPTl9BUVVBUklVTSwgcGF5bG9hZDogeyBpZDogaWQsIHZhbHVlOiB2YWx1ZSB9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IEFtYmlsaWdodC5TRVRfRUZGRUNULCBwYXlsb2FkOiB7IGlkOiBpZCwgcGF0dGVybjogdmFsdWUgPyBBcXVhcml1bUJhY2tncm91bmQgOiAnJyB9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IExhbXAuU0VUX0NPTE9SLCBwYXlsb2FkOiB7IGlkOiAxLCBjb2xvcjogdmFsdWUgPyAnZG9kZ2VyYmx1ZScgOiAnJyB9IH0pO1xuICAgICAgICBhd2FpdCBkaXNwYXRjaCh7IHR5cGU6IExhbXAuU0VUX0NPTE9SLCBwYXlsb2FkOiB7IGlkOiAyLCBjb2xvcjogdmFsdWUgPyAnZG9kZ2VyYmx1ZScgOiAnJyB9IH0pO1xuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMudHMiLCJpbXBvcnQgeyBPUk0gfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgeyBBbWJpbGlnaHQsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IEFtYmlsaWdodFZpZXdNb2RlbCB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoQW1iaWxpZ2h0LCBIYXJtb25vZ3JhbSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlQW1iaWxpZ2h0U2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcblxyXG4gICAgdmFyIGFtYmlsaWdodCA9IHNlc3Npb24uQW1iaWxpZ2h0LmZpcnN0KCk7XHJcblxyXG4gICAgcmV0dXJuIDxBbWJpbGlnaHRWaWV3TW9kZWw+e1xyXG4gICAgICAgIGlkOiBhbWJpbGlnaHQuaWQsXHJcbiAgICAgICAgaXNBY3RpdmU6IGFtYmlsaWdodC5pc0FjdGl2ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhbWJpbGlnaHQuYmFja2dyb3VuZCxcclxuICAgICAgICBuYW1lOiBhbWJpbGlnaHQubmFtZVxyXG4gICAgfTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL3NjaGVtYS50cyIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IERpc3BsYXksIENhbWVyYSwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi92aWV3bW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKERpc3BsYXksIENhbWVyYSwgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZUNhbWVyYXNTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLkRpc3BsYXlDYW1lcmFzLmFsbCgpLnRvUmVmQXJyYXkoKS5tYXAoY2FtZXJhID0+IHtcclxuICAgICAgICBjb25zdCBvYmogPSBzZXNzaW9uLkNhbWVyYS53aXRoSWQoY2FtZXJhLnRvQ2FtZXJhSWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gPENhbWVyYVZpZXdNb2RlbD4ge1xyXG4gICAgICAgICAgICBpZDogb2JqLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBvYmoubmFtZSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IG9iai5pc1JlY29yZGluZyxcbiAgICAgICAgICAgIGFkZHJlc3M6ICdodHRwOi8vMTkyLjE2OC4wLjIzNC9pbWFnZS9qcGVnLmNnaScsXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBvYmouaXNNb3Rpb25EZXRlY3RlZFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvbW9kZWwvb3JtLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgSGlmaSwgU3BlYWtlciwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgU3BlYWtlclZpZXdNb2RlbCB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3JtID0gbmV3IE9STSgpO1xyXG5vcm0ucmVnaXN0ZXIoSGlmaSwgU3BlYWtlciwgSGFybW9ub2dyYW0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyb250U3BlYWtlclNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBzZXNzaW9uLlNwZWFrZXIuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7IHJldHVybiBzcGVha2VyLnR5cGUgPT09ICdGcm9udCcgfSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbnMudG9SZWZBcnJheSgpLm1hcChzcGVha2VyID0+IHtcclxuICAgICAgICByZXR1cm4gPFNwZWFrZXJWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICBpZDogc3BlYWtlci5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHNwZWFrZXIuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHR5cGU6IHNwZWFrZXIudHlwZSxcclxuICAgICAgICAgICAgbmFtZTogc3BlYWtlci5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3BlYWtlci5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZVNwZWFrZXJTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gc2Vzc2lvbi5TcGVha2VyLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikgeyByZXR1cm4gc3BlYWtlci50eXBlID09PSAnU2lkZScgfSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbnMudG9SZWZBcnJheSgpLm1hcChzcGVha2VyID0+IHtcclxuICAgICAgICByZXR1cm4gPFNwZWFrZXJWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICBpZDogc3BlYWtlci5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHNwZWFrZXIuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHR5cGU6IHNwZWFrZXIudHlwZSxcclxuICAgICAgICAgICAgbmFtZTogc3BlYWtlci5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3BlYWtlci5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYmFja1NwZWFrZXJTZWxlY3RvciA9IG9ybS5jcmVhdGVTZWxlY3RvcihzZXNzaW9uID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gc2Vzc2lvbi5TcGVha2VyLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikgeyByZXR1cm4gc3BlYWtlci50eXBlID09PSAnQmFjaycgfSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbnMudG9SZWZBcnJheSgpLm1hcChzcGVha2VyID0+IHtcclxuICAgICAgICByZXR1cm4gPFNwZWFrZXJWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICBpZDogc3BlYWtlci5pZCxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHNwZWFrZXIuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHR5cGU6IHNwZWFrZXIudHlwZSxcclxuICAgICAgICAgICAgbmFtZTogc3BlYWtlci5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3BlYWtlci5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL21vZGVscy9zY2hlbWEudHMiLCJpbXBvcnQgeyBIaWZpLCBTcGVha2VyIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgU3BlYWtlclZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscy92aWV3JztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfU1BFQUtFUiA9ICdBZGRTcGVha2VyQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkU3BlYWtlckFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkU3BlYWtlckFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgaGlmaTogbnVtYmVyLFxyXG4gICAgICAgIHNwZWFrZXI6IFNwZWFrZXJcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfSElGSSA9ICdBZGRIaWZpQWN0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkSGlmaUFjdGlvbiB7XHJcbiAgICB0eXBlOiAnQWRkSGlmaUFjdGlvbic7XHJcbiAgICBwYXlsb2FkOiBIaWZpO1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvc3RhdGUvYWN0aW9ucy50cyIsImltcG9ydCB7IE9STSB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IExhbXAsIEhhcm1vbm9ncmFtIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IExhbXBWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9ybSA9IG5ldyBPUk0oKTtcclxub3JtLnJlZ2lzdGVyKExhbXAsIEhhcm1vbm9ncmFtKTtcclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW1wU2VsZWN0b3IgPSBvcm0uY3JlYXRlU2VsZWN0b3Ioc2Vzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gc2Vzc2lvbi5MYW1wLmFsbCgpLnRvUmVmQXJyYXkoKS5tYXAobGFtcCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxMYW1wVmlld01vZGVsPntcclxuICAgICAgICAgICAgaWQ6IGxhbXAuaWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBsYW1wLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBjb2xvcjogbGFtcC5jb2xvcixcclxuICAgICAgICAgICAgbmFtZTogbGFtcC5uYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogbGFtcC5wb3NpdGlvblxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hLnRzIiwiaW1wb3J0IHsgT1JNIH0gZnJvbSAncmVkdXgtb3JtJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvbiwgSGFybW9ub2dyYW0gfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblZpZXdNb2RlbCB9IGZyb20gJy4vdmlld21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBvcm0gPSBuZXcgT1JNKCk7XHJcbm9ybS5yZWdpc3RlcihUZWxldmlzaW9uLCBIYXJtb25vZ3JhbSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aXZlVGVsZXZpc2lvblNlbGVjdG9yID0gb3JtLmNyZWF0ZVNlbGVjdG9yKHNlc3Npb24gPT4ge1xyXG5cclxuICAgIHZhciB0ZWxldmlzaW9uID0gc2Vzc2lvbi5UZWxldmlzaW9uLmZpcnN0KCk7XHJcblxyXG4gICAgcmV0dXJuIDxUZWxldmlzaW9uVmlld01vZGVsPntcclxuICAgICAgICBpZDogdGVsZXZpc2lvbi5pZCxcclxuICAgICAgICBpc0FjdGl2ZTogdGVsZXZpc2lvbi5pc0FjdGl2ZSxcclxuICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IHRlbGV2aXNpb24uaXNGaXJlcGxhY2VSdW5uaW5nLFxyXG4gICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiB0ZWxldmlzaW9uLmlzQXF1YXJpdW1SdW5uaW5nLFxyXG4gICAgICAgIG5hbWU6IHRlbGV2aXNpb24ubmFtZVxyXG4gICAgfTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL21vZGVscy9zY2hlbWEudHMiLCJpbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IFRlbGV2aXNpb24gfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCB7IFRFTEVWSVNJT05fRklSRVBMQUNFLCBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uLCBURUxFVklTSU9OX0FRVUFSSVVNLCBUZWxldmlzaW9uQXF1YXJpdW1BY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2VmZmVjdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9URUxFVklTSU9OID0gJ0FkZFRlbGV2aXNpb25BY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRUZWxldmlzaW9uQWN0aW9uIHtcclxuICAgIHR5cGU6ICdBZGRUZWxldmlzaW9uQWN0aW9uJztcclxuICAgIHBheWxvYWQ6IFRlbGV2aXNpb247XHJcbn1cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBUZWxldmlzaW9uRmlyZXBsYWNlQWN0aW9uIHwgQWRkVGVsZXZpc2lvbkFjdGlvbiB8IFRlbGV2aXNpb25BcXVhcml1bUFjdGlvbjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IFRlbGV2aXNpb24gfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVEVMRVZJU0lPTl9GSVJFUExBQ0U6XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24ud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGFjdGlvbi5wYXlsb2FkLnZhbHVlIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFRFTEVWSVNJT05fQVFVQVJJVU06XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcXVhcml1bSBydW5uaW5nJyk7XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24ud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBpc0FxdWFyaXVtUnVubmluZzogYWN0aW9uLnBheWxvYWQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1RFTEVWSVNJT046XHJcbiAgICAgICAgICAgIFRlbGV2aXNpb24uY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3N0YXRlcy90ZWxldmlzaW9uLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBjcmVhdGVNZW1vcnlIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9jb21wb3NpdGlvbi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb21wb3NpdGlvbi9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IENhbWVyYSwgRGlzcGxheSB9IGZyb20gJy4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEFERF9DQU1FUkEsIENSRUFURV9ESVNQTEFZIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllcic7XHJcbmltcG9ydCB7IEFERF9URUxFVklTSU9OIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvbic7XHJcbmltcG9ydCAqIGFzIEFtYmlsaWdodCBmcm9tICcuL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvc3RhdGUvYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIExhbXAgZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvc3RhdGUvYWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIEhpZmkgZnJvbSAnLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9hY3Rpb25zJztcclxuaW1wb3J0ICogYXMgUGxheWVyIGZyb20gJy4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9zdGF0ZS9hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gTWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QgYWdhaW5zdCB0aGUgbGlzdCBvZiBjbGllbnQtc2lkZSByb3V0ZXNcclxuICAgICAgICBtYXRjaCh7IHJvdXRlcywgbG9jYXRpb246IHBhcmFtcy5sb2NhdGlvbiB9LCAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJlZGlyZWN0TG9jYXRpb24ucGF0aG5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGl0IGRpZG4ndCBtYXRjaCBhbnkgcm91dGUsIHJlbmRlclByb3BzIHdpbGwgYmUgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICghcmVuZGVyUHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGxvY2F0aW9uICcke3BhcmFtcy51cmx9JyBkb2Vzbid0IG1hdGNoIGFueSByb3V0ZSBjb25maWd1cmVkIGluIHJlYWN0LXJvdXRlci5gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQ1JFQVRFX0RJU1BMQVksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfQ0FNRVJBLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTYWxvbiBGcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUREX1RFTEVWSVNJT04sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzb255IGJyYXZpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyZXBsYWNlUnVubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBcXVhcml1bVJ1bm5pbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBbWJpbGlnaHQuQURELFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaHlwZXJpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAndXJsKGltYWdlcy9hbWJpZW50LmpwZyknLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMYW1wLkFERF9MQU1QLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaHVlLWxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmNjUwZTgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExhbXAuQUREX0xBTVAsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJodWUtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMyM2YzNDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBIaWZpLkFERF9ISUZJLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdteS1oaWZpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhpZmkuQUREX1NQRUFLRVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlmaTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGcm9udC1MZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Zyb250LVJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGcm9udCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhpZmkuQUREX1NQRUFLRVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlmaTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTaWRlLUxlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NpZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEhpZmkuQUREX1NQRUFLRVIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlmaTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTaWRlLVJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTaWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JhY2stTGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQmFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogSGlmaS5BRERfU1BFQUtFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBoaWZpOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JhY2stUmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0JhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBQbGF5ZXIuQUREX1BMQVlFUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc21hcnQtcGxheWVyJyxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlbzogJ0RldHJvaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUnVubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUGxheTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJDb250ZXh0IHsuLi5yZW5kZXJQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGFuIGluaXRpYWwgcmVuZGVyIHRoYXQgd2lsbCBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG4gICAgICAgICAgICAvLyBPbmNlIHRoZSB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2Jvb3Qtc2VydmVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgU2Nyb2xsRWZmZWN0IGZyb20gJy4uLy4uL2xpYi9zY3JvbGwtZWZmZWN0JztcbmltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4uLy4uL2xpYi9mdWxsc2NyZWVuJztcbmltcG9ydCBDYW1lcmFMaXN0IGZyb20gJy4vZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyJztcbmltcG9ydCBGbG9vciBmcm9tICcuL2Zsb29yL0Zsb29yJztcbmltcG9ydCBXYWxsIGZyb20gJy4vd2FsbC9XYWxsJztcbmltcG9ydCBCYXNlbWVudCBmcm9tICcuL2Jhc2VtZW50L0Jhc2VtZW50JztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vYmFja2dyb3VuZC9CYWNrZ3JvdW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxGdWxsc2NyZWVuPiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBpZD1cImhlcm9cIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmQgLz5cblxuICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhTGlzdCAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxXYWxsIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZsb29yIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8QmFzZW1lbnQgLz4gICAgICAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GdWxsc2NyZWVuPiAgICAgIFxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2TWVudSBmcm9tICcuL05hdk1lbnUnO1xuaW1wb3J0IFJvdXRlVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9saWIvcm91dGUtdHJhbnNpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGJvZHk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlcyB7XG59XG5cbmV4cG9ydCBjbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8TGF5b3V0UHJvcHMsIExheW91dFN0YXRlcz4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICA8TmF2TWVudSAvPlxuICAgICAgICAgICAgPFJvdXRlVHJhbnNpdGlvbiBwYXRobmFtZT17dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgOiAnJ30+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYm9keX1cbiAgICAgICAgICAgIDwvUm91dGVUcmFuc2l0aW9uPlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9MYXlvdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vc3RvcmUnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0sIE5hdkRyb3Bkb3duLCBNZW51SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rQ29udGFpbmVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcCc7XG5cbmNvbnN0IGxvZ28gPSByZXF1aXJlKCcuLi8uLi9pbWFnZXMvbG9nby5zdmcnKSBhcyBzdHJpbmc7XG5cbmludGVyZmFjZSBOYXZNZW51UHJvcHMge1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgICByb2xlczogc3RyaW5nW107XG59XG4gXG5jbGFzcyBOYXZNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE5hdk1lbnVQcm9wcywgQXBwbGljYXRpb25TdGF0ZT4ge1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8TmF2YmFyIGZpeGVkVG9wPXt0cnVlfT5cbiAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJyB0bz17Jy8nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hcnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFydFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2ltYWdlcy9ncmFkaWVudC5wbmcnKVwiIH19ID4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBoZWlnaHQ9XCI1MHB4XCIgd2lkdGg9XCIyNTBweFwiIGFsdD1cIkhvbWUgTG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIC8+XG4gICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxOYXYgcHVsbFJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0+Q29udGFjdDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9jb3VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30+Q291bnRlcjwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gZXZlbnRLZXk9ezJ9IHRpdGxlPVwiTG9naW5cIiBpZD1cIm5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkfSBldmVudEtleT17Mi4xfT5Mb2dpbjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWR9IGV2ZW50S2V5PXsyLjJ9PlJlZ2lzdGVyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGFpbmVyIHRvPVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZXZlbnRLZXk9ezIuM30+VXNlciBQcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRhaW5lciB0bz1cIi9sb2dvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZH0gZXZlbnRLZXk9ezIuNH0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGV2ZW50S2V5PXs0fT5Ob3RpZmljYXRpb25zPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGlzQXV0aGVudGljYXRlZDogZmFsc2UsIHJvbGVzOiBbXSB9O1xyXG4gICAgfSwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcbiAgICB7fSAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXG4pKE5hdk1lbnUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL05hdk1lbnUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBwbGF5ZXJTZWxlY3Rvciwgc2V0dGluZ3NTZWxlY3RvciB9IGZyb20gJy4uL2RldmljZXMvcGxheWVyL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwsIFNldHRpbmdzVmlld01vZGVsIH0gZnJvbSAnLi4vZGV2aWNlcy9wbGF5ZXIvbW9kZWxzL3ZpZXcnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHBsYXllcjogUGxheWVyVmlld01vZGVsLFxyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzVmlld01vZGVsXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBzaG93OiBudW1iZXI7XHJcbiAgICBwbGF5OiBib29sZWFuO1xyXG4gICAgcGF1c2U6IGJvb2xlYW47XHJcbiAgICBzdG9wOiBib29sZWFuO1xyXG4gICAgaXNGdWxsc2NyZWVuOiBib29sZWFuO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvdzogMCxcclxuICAgICAgICAgICAgcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhdXNlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RvcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNvdXJjZTogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xyXG5cclxuICAgICAgICB2YXIgcGxheSA9IG5leHRQcm9wcy5wbGF5ZXIuaXNSdW5uaW5nXHJcbiAgICAgICAgICAgICYmICFuZXh0UHJvcHMucGxheWVyLmlzUGF1c2VkXHJcbiAgICAgICAgICAgICYmIG5leHRQcm9wcy5zZXR0aW5ncy5iYWNrZ3JvdW5kUGxheTtcclxuXHJcbiAgICAgICAgdmFyIHBhdXNlID0gbmV4dFByb3BzLnBsYXllci5pc1BhdXNlZDtcclxuXHJcbiAgICAgICAgdmFyIHN0b3AgPSAhbmV4dFByb3BzLnBsYXllci5pc1J1bm5pbmdcclxuICAgICAgICAgICAgJiYgIW5leHRQcm9wcy5wbGF5ZXIuaXNQYXVzZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwbGF5OiBwbGF5LFxyXG4gICAgICAgICAgICBzaG93OiBwbGF5ID8gMSA6IHN0b3AgPyAwIDogMSxcclxuICAgICAgICAgICAgcGF1c2U6IHBhdXNlLFxyXG4gICAgICAgICAgICBpc0Z1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBzb3VyY2U6IG5leHRQcm9wcy5wbGF5ZXIudmlkZW9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHZpZGVvID0gdGhpcy5yZWZzLm15VmlkZW87XHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5KHZpZGVvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGF1c2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZSh2aWRlbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHN0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKHZpZGVvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheSh2aWRlbzogYW55KSB7XHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AodmlkZW86IGFueSkge1xyXG4gICAgICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKHZpZGVvOiBhbnkpIHtcclxuICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDx2aWRlbyByZWY9XCJteVZpZGVvXCIgc3R5bGU9e3sgb3BhY2l0eTogdGhpcy5zdGF0ZS5zaG93IH19IHBvc3Rlcj1cImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzQyNzMvcG9saW5hLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwidmlkZW8vRGV0cm9pdC5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBsYXllcjogcGxheWVyU2VsZWN0b3Ioc3RhdGUucGxheWVyKSxcclxuICAgICAgICBzZXR0aW5nczogc2V0dGluZ3NTZWxlY3RvcihzdGF0ZS5wbGF5ZXIpXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBudWxsXHJcbikoQmFja2dyb3VuZCk7XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9iYWNrZ3JvdW5kL0JhY2tncm91bmQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2RldmljZXMvcGxheWVyL1BsYXllcidcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBpc011c2ljOiBib29sZWFuO1xyXG4gICAgaXNWaWRlbzogYm9vbGVhbjtcclxuICAgIGlzVGhlbWU6IGJvb2xlYW47XHJcbiAgICBpc1BpY3R1cmU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzTXVzaWM6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZpZGVvOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNUaGVtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUGljdHVyZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0TXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTXVzaWM6IHRydWUsXHJcbiAgICAgICAgICAgIGlzVmlkZW86IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1BpY3R1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1RoZW1lOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFBpY3R1cmUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTXVzaWM6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1ZpZGVvOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNQaWN0dXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1RoZW1lOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFZpZGVvKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc011c2ljOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWaWRlbzogdHJ1ZSxcclxuICAgICAgICAgICAgaXNQaWN0dXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNUaGVtZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RUaGVtZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNNdXNpYzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmlkZW86IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1BpY3R1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1RoZW1lOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzM3MHB4JywgaGVpZ2h0OiAnMTA1cHgnLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItbWVkaWEtdHlwZVwiIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBtYXJnaW5Ub3A6ICcyNXB4JywgbWFyZ2luTGVmdDogJzEyNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZhY2V0aW1lLXZpZGVvXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZWxlY3RWaWRlbygpfSBzdHlsZT17eyBmb250U2l6ZTogXCIyNXB4XCIsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzEwcHgnIH19IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc1ZpZGVvID8gJ3BsYXllci1tZWRpYS1zZWxlY3RlZCcgOiAnJ30+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBpY3R1cmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbGVjdFBpY3R1cmUoKX0gc3R5bGU9e3sgZm9udFNpemU6IFwiMjVweFwiLCBtYXJnaW5MZWZ0OiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6ICcxMHB4JyB9fSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNQaWN0dXJlID8gJ3BsYXllci1tZWRpYS1zZWxlY3RlZCcgOiAnJ30+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZpbG1cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbGVjdFRoZW1lKCl9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMTBweCcgfX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzVGhlbWUgPyAncGxheWVyLW1lZGlhLXNlbGVjdGVkJyA6ICcnfT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbXVzaWNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbGVjdE11c2ljKCl9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgbWFyZ2luTGVmdDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnMTBweCcgfX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzTXVzaWMgPyAncGxheWVyLW1lZGlhLXNlbGVjdGVkJyA6ICcnfT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxQbGF5ZXIgLz5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzM2MHB4JywgaGVpZ2h0OiAnMTA1cHgnLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2lubGluZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItbWVkaWEtdHlwZVwiIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnNjBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5MZWZ0OiAnNDVweCcsIG1hcmdpblRvcDogJzI1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnLCB3aWR0aDogJzE4NXB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzE4cHgnLCBsZWZ0OiAnNXB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOicgMTZweCcsIHdpZHRoOiAnMTg1cHgnLCBsZWZ0OiAnNScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzMwcHgnIH19PjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzMwcHgnIH19PjI1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICczMHB4JyB9fT41MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjc1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+MTAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItcXVpY2tTZXR0aW5nc1wiIHN0eWxlPXt7IGhlaWdodDogJzYwcHgnLCB3aWR0aDogJzYwcHgnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3NldHRpbmdzLnBuZ1wiIGhlaWdodD1cIjYwcHhcIiB3aWR0aD1cIjYwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2Jhc2VtZW50L0Jhc2VtZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCB7IGFjdGl2ZUFtYmlsaWdodFNlbGVjdG9yIH0gZnJvbSAnLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSAnLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBBbWJpbGlnaHRWaWV3TW9kZWwgfSBmcm9tICcuL21vZGVscy92aWV3JztcclxuXHJcbmludGVyZmFjZSBBbWJpbGlnaHRQcm9wcyB7XHJcbiAgICBhbWJpbGlnaHQ6IEFtYmlsaWdodFZpZXdNb2RlbDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbixcclxuICAgIGJhY2tncm91bmQ6IHN0cmluZ1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gQW1iaWxpZ2h0UHJvcHM7XHJcblxyXG5jbGFzcyBBbWJpbGlnaHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgZGVmYXVsdFBhdHRlcm46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFBhdHRlcm4gPSBwcm9wcy5hbWJpbGlnaHQuYmFja2dyb3VuZDtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZDogcHJvcHMuYW1iaWxpZ2h0LmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMuYW1iaWxpZ2h0LmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmRlZmF1bHRQYXR0ZXJuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gbmV4dFByb3BzLmFtYmlsaWdodC5iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGlmIChuZXh0UHJvcHMuYW1iaWxpZ2h0LmlzQWN0aXZlKVxyXG4gICAgICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiAhPT0gJycgPyBwYXR0ZXJuIDogdGhpcy5kZWZhdWx0UGF0dGVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHBhdHRlcm5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgYW1iaWxpZ2h0IH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYW1iaWxpZ2h0XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjYwcHhcIiwgaGVpZ2h0OiBcIjEyNXB4XCIsIGJhY2tncm91bmRJbWFnZTogdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kIH19PiA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFtYmlsaWdodDogYWN0aXZlQW1iaWxpZ2h0U2VsZWN0b3Ioc3RhdGUuYW1iaWxpZ2h0KSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG51bGxcclxuKShBbWJpbGlnaHQpO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvQW1iaWxpZ2h0LnRzeCIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFtYmlsaWdodCBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5BbWJpbGlnaHQubW9kZWxOYW1lID0gXCJBbWJpbGlnaHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL21vZGVsLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBbWJpbGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBBY3Rpb25zLlNldEVmZmVjdEFjdGlvbiB8IEFjdGlvbnMuQWRkQWN0aW9uO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IEFtYmlsaWdodCB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNFVF9FRkZFQ1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgQW1iaWxpZ2h0LndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKHsgYmFja2dyb3VuZDogYWN0aW9uLnBheWxvYWQucGF0dGVybiB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkFERDpcclxuICAgICAgICAgICAgQW1iaWxpZ2h0LmNyZWF0ZShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvYW1iaWxpZ2h0L3N0YXRlL3JlZHVjZXIudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIENhbWVyYVN0b3JlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3N0YXRlL2Rpc3BsYXllclwiO1xyXG5pbXBvcnQgeyBsYXp5SW5qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJztcclxuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL3NlcnZpY2VzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC92aWV3bW9kZWxcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcclxuICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBzdHJpbmcsXHJcbiAgICB1cGRhdGVDYW1lcmE6IChjYW1lcmE6IENhbWVyYVZpZXdNb2RlbCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGlzUmVjb3JkaW5nOiBib29sZWFuO1xuICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxufVxyXG5cclxubGV0IHVwZGF0ZVZpZXc7XHJcbmxldCB1cGRhdGVTdGF0ZTtcclxubGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBwcm9wcy5pc1JlY29yZGluZyxcclxuICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogcHJvcHMuaXNNb3Rpb25EZXRlY3RlZCxcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMuYWRkcmVzc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQGxhenlJbmplY3QoU2VydmljZXMuQ2FtZXJhU2VydmljZSlcclxuICAgIHByaXZhdGUgX3ByaW50U2VydmljZTogQ2FtZXJhU2VydmljZTtcclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZzogbmV4dFByb3BzLmlzUmVjb3JkaW5nLFxyXG4gICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkOiBuZXh0UHJvcHMuaXNNb3Rpb25EZXRlY3RlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHVwZGF0ZVZpZXcgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUNhbWVyYVZpZXcsXHJcbiAgICAgICAgICAgIDEwMDAsIHRoaXMuc3RhdGUuYWRkcmVzcywgdGhpcy5zZXRTdGF0ZSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVN0YXRlID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVDYW1lcmFTdGF0ZSxcclxuICAgICAgICAgICAgNTAwMCwgdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgICAgdGhpcy5fcHJpbnRTZXJ2aWNlLmdldENhbWVyYVN0YXRlLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGRhdGVWaWV3KTtcclxuICAgICAgICBjbGVhckludGVydmFsKHVwZGF0ZVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYW1lcmFWaWV3KGFkZHJlc3MsIHNldFN0YXRlKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzICsgJz9kYXRhPScgKyBjb3VudGVyKytcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlQ2FtZXJhU3RhdGUoaWQ6IG51bWJlciwgZ2V0U3RhdGUsIHVwZGF0ZVN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGNhbWVyYSA9IGF3YWl0IGdldFN0YXRlKGlkKTtcclxuICAgICAgICB1cGRhdGVTdGF0ZShjYW1lcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0UmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5fcHJpbnRTZXJ2aWNlLnN0YXJ0UmVjb3JkaW5nKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdG9wUmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IHRoaXMuX3ByaW50U2VydmljZS5zdG9wUmVjb3JkaW5nKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgY2FtZXJhLWNvbnRhaW5lclwiIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjYW1lcmEtZnJhbWVcIiBzdHlsZT17eyBtYXJnaW46ICcwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5hZGRyZXNzfSBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjAwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXNSZWNvcmRpbmcgPyAnY2FtZXJhLXJlY29yZGluZycgOiB0aGlzLnN0YXRlLmlzTW90aW9uRGV0ZWN0ZWQgPyAnY2FtZXJhLWFsZXJ0JyA6ICdjYW1lcmEtbm8tYWxlcnQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICdjYW1lcmEtYm90dG9tIGNhbWVyYS12aXNpYmxlJyA6ICdjYW1lcmEtYm90dG9tIGNhbWVyYS1oaWRkZW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNhbWVyYS1uYW1lXCI+e3RoaXMuc3RhdGUubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWNvcmQgY2FtZXJhLXBsYXlcIiBzdHlsZT17eyBwYWRkaW5nOiAnM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhdGUuaXNSZWNvcmRpbmcgPyAoKSA9PiB0aGlzLnN0b3BSZWNvcmRpbmcoaWQpIDogKCkgPT4gdGhpcy5zdGFydFJlY29yZGluZyhpZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RvcFwiIHN0eWxlPXt7IHdpZHRoOiAnMjVweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ2dyYXknLCBwYWRkaW5nOiAnM3B4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RvcFJlY29yZGluZyhpZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvQ2FtZXJhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJ0FwcC9jb21wb3NpdGlvbi9zdG9yZSc7XHJcbmltcG9ydCBDYW1lcmFJdGVtIGZyb20gJy4vQ2FtZXJhJztcclxuaW1wb3J0IHsgYWN0aXZlQ2FtZXJhc1NlbGVjdG9yIH0gZnJvbSAnLi9tb2RlbC9vcm0nO1xyXG5pbXBvcnQgeyBDYW1lcmFWaWV3TW9kZWwgfSBmcm9tIFwiLi9tb2RlbC92aWV3bW9kZWxcIjtcclxuaW1wb3J0ICogYXMgRGlzcGxheVN0b3JlIGZyb20gXCIuL3N0YXRlL2Rpc3BsYXllclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxpc3Q6IENhbWVyYVZpZXdNb2RlbFtdO1xyXG4gICAgbGlzdFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XG4gICAgbGlzdFZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgQ2FtZXJhc1Byb3BzID0gUHJvcHMgJiB0eXBlb2YgRGlzcGxheVN0b3JlLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgRGlzcGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENhbWVyYXNQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBDYW1lcmFzUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxpc3RWaXNpYmxlOiBwcm9wcy5saXN0VmlzaWJsZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b29nbGVDYW1lcmFzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsaXN0VmlzaWJsZTogIXRoaXMuc3RhdGUubGlzdFZpc2libGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyB1cGRhdGVDYW1lcmEgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtZXJhLXRvcGJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1kb3duIGNhbWVyYS1jb2xsYXBzZS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy50b29nbGVDYW1lcmFzKCl9IHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGxheSBjYW1lcmEtcGxheVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc3cHgnIH19Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1leWUtb3BlbiBjYW1lcmEtbW90aW9uXCIgc3R5bGU9e3sgcGFkZGluZzogJzdweCcgfX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXZvbHVtZS11cCBjYW1lcmEtc291bmRcIiBzdHlsZT17eyBwYWRkaW5nOiAnN3B4JyB9fT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tb3B0aW9uLWhvcml6b250YWwgY2FtZXJhLXRvcGJhci1zZXR0aW5nc1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5saXN0VmlzaWJsZSA/ICdzbGlkZS1kb3duJyA6ICdzbGlkZS11cCd9PiB7dGhpcy5wcm9wcy5saXN0Lm1hcCgoY2FtZXJhKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhSXRlbSBrZXk9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhbWVyYS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17Y2FtZXJhLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NhbWVyYS5uYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01vdGlvbkRldGVjdGVkPXtjYW1lcmEuaXNNb3Rpb25EZXRlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWNvcmRpbmc9e2NhbWVyYS5pc1JlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FtZXJhPXt1cGRhdGVDYW1lcmF9IC8+KX1cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdDogYWN0aXZlQ2FtZXJhc1NlbGVjdG9yKHN0YXRlLmRpc3BsYXkpLFxyXG4gICAgICAgIGxpc3RWaXNpYmxlOiB0cnVlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBXaXJlIHVwIHRoZSBSZWFjdCBjb21wb25lbnQgdG8gdGhlIFJlZHV4IHN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBEaXNwbGF5U3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuKShEaXNwbGF5ZXIpO1xyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvRGlzcGxheWVyLnRzeCIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BsYXkgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgY2FtZXJhczogbWFueShcIkNhbWVyYVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkRpc3BsYXkubW9kZWxOYW1lID0gXCJEaXNwbGF5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBhdHRyKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGF0dHIoKSxcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGF0dHIoKSxcbiAgICAgICAgICAgIGlzTW90aW9uRGV0ZWN0ZWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5DYW1lcmEubW9kZWxOYW1lID0gXCJDYW1lcmFcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL21vZGVsLnRzIiwiaW1wb3J0IHsgTW9kZWwsIG1hbnksIGF0dHIgfSBmcm9tIFwicmVkdXgtb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlmaSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIHNwZWFrZXJzOiBtYW55KFwiU3BlYWtlclwiKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5IaWZpLm1vZGVsTmFtZSA9IFwiSGlmaVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWFrZXIgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICB0eXBlOiBhdHRyKCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBhdHRyKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5TcGVha2VyLm1vZGVsTmFtZSA9IFwiU3BlYWtlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhcm1vbm9ncmFtIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgc3RhdGljIG1vZGVsTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBnZXQgZmllbGRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5cclxuSGFybW9ub2dyYW0ubW9kZWxOYW1lID0gXCJIYXJtb25vZ3JhbVwiO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvbW9kZWxzL21vZGVsLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcGVha2VyLWJhY2stc21hbGwucG5nXCIgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiNDBweFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTE1cHgnLCB0b3A6ICctMjBweCcgfX0gLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zcGVha2Vycy9CYWNrLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGcm9udCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NwZWFrZXIucG5nXCIgd2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNjBweFwiIGNsYXNzTmFtZT1cImZyYW1lLXNoYWRvd1wiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICctMzBweCcsIGxlZnQ6ICctMjBweCcgfX0gLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zcGVha2Vycy9Gcm9udC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1iYWNrLnBuZ1wiIGhlaWdodD1cIjEyMHB4XCIgd2lkdGg9XCIyMHB4XCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcIi02MHB4XCIsIGxlZnQ6IFwiLTEwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9oaWZpL3NwZWFrZXJzL1NpZGUudHN4IiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBTcGVha2VyIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNwZWFrZXJWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdmlldyc7XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gQWN0aW9ucy5BZGRIaWZpQWN0aW9uIHwgQWN0aW9ucy5BZGRTcGVha2VyQWN0aW9uO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzZXNzaW9uLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IEhpZmksIFNwZWFrZXIgfSA9IHNlc3Npb247XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9ucy5BRERfSElGSTpcclxuICAgICAgICAgICAgSGlmaS5jcmVhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuQUREX1NQRUFLRVI6XHJcbiAgICAgICAgICAgIFNwZWFrZXIuY3JlYXRlKGFjdGlvbi5wYXlsb2FkLnNwZWFrZXIpO1xyXG4gICAgICAgICAgICB2YXIgc3BlYWtlciA9IDxTcGVha2VyVmlld01vZGVsPiBhY3Rpb24ucGF5bG9hZC5zcGVha2VyO1xyXG4gICAgICAgICAgICBIaWZpLndpdGhJZChhY3Rpb24ucGF5bG9hZC5oaWZpKVxyXG4gICAgICAgICAgICAgICAgLnNwZWFrZXJzLmFkZChTcGVha2VyLndpdGhJZChzcGVha2VyLmlkKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uLnN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihvcm0sIHJlZHVjZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9yZWR1Y2VyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnQXBwL2NvbXBvc2l0aW9uL3N0b3JlJztcclxuaW1wb3J0IHsgTGFtcFZpZXdNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3ZpZXcnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxhbXA6IExhbXBWaWV3TW9kZWxcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW1wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gICAgZGVmYXVsdENvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGVmYXVsdENvbG9yID0gcHJvcHMubGFtcC5jb2xvcjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5kZWZhdWx0Q29sb3JcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gbmV4dFByb3BzLmxhbXAuY29sb3I7XHJcbiAgICAgICAgaWYgKG5leHRQcm9wcy5sYW1wLmlzQWN0aXZlKVxyXG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yICE9PSAnJyA/IGNvbG9yIDogdGhpcy5kZWZhdWx0Q29sb3I7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2h1ZS5wbmdcIiBoZWlnaHQ9XCIxNTBweFwiIHdpZHRoPVwiNDBweFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICctMTAwcHgnLCBsZWZ0OiAnLTIwcHgnLCB6SW5kZXg6IDAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbXBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmNvbG9yLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMHB4JywgbGVmdDogJy0yMHB4JyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLy8gU2V0IHVwIEhNUiByZS1yZW5kZXJpbmcuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9MYW1wLnRzeCIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhbXAgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBjb2xvcjogYXR0cigpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogYXR0cigpLFxyXG4gICAgICAgICAgICBoYXJtb25vZ3JhbXM6IG1hbnkoXCJIYXJtb25vZ3JhbVwiKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkxhbXAubW9kZWxOYW1lID0gXCJMYW1wXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGFybW9ub2dyYW0gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59XHJcblxyXG5IYXJtb25vZ3JhbS5tb2RlbE5hbWUgPSBcIkhhcm1vbm9ncmFtXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvbGlnaHRpbmcvbW9kZWxzL21vZGVsLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBMYW1wIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgb3JtIH0gZnJvbSAnLi4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1vcm0nO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gQWN0aW9ucy5TZXRDb2xvckFjdGlvbiB8IEFjdGlvbnMuQWRkTGFtcEFjdGlvbjtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc2Vzc2lvbiwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBMYW1wIH0gPSBzZXNzaW9uO1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvbnMuU0VUX0NPTE9SOlxyXG4gICAgICAgICAgICBMYW1wLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKHsgY29sb3I6IGFjdGlvbi5wYXlsb2FkLmNvbG9yIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuQUREX0xBTVA6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYW1wIGFkZGVkJyk7XHJcbiAgICAgICAgICAgIExhbXAuY3JlYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24uc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKG9ybSwgcmVkdWNlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9zdGF0ZS9yZWR1Y2VyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsYXp5SW5qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vaW9jL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgcGxheWVyU2VsZWN0b3IgfSBmcm9tICcuL21vZGVscy9zY2hlbWEnO1xyXG5pbXBvcnQgeyBQbGF5ZXJWaWV3TW9kZWwgfSBmcm9tICcuL21vZGVscy92aWV3JztcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGxheWVyJ1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyUHJvcHMge1xyXG4gICAgcGxheWVyOiBQbGF5ZXJWaWV3TW9kZWw7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICB2aWRlbzogc3RyaW5nO1xyXG4gICAgaXNSdW5uaW5nOiBib29sZWFuO1xyXG4gICAgaXNQYXVzZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBQbGF5ZXJQcm9wcyAmIHR5cGVvZiBBY3Rpb25zLmFjdGlvbkNyZWF0b3JzO1xyXG5cclxuY2xhc3MgUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIEBsYXp5SW5qZWN0KFNlcnZpY2VzLlBsYXllclNlcnZpY2UpXHJcbiAgICBwcml2YXRlIF9zZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzUnVubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBQbGF5ZXJQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aWRlbzogbmV4dFByb3BzLnBsYXllci52aWRlbyxcclxuICAgICAgICAgICAgaXNQYXVzZWQ6IG5leHRQcm9wcy5wbGF5ZXIuaXNQYXVzZWQsXHJcbiAgICAgICAgICAgIGlzUnVubmluZzogbmV4dFByb3BzLnBsYXllci5pc1J1bm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5KHBsYXlWaWRlbywgcGF1c2UpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9zZXJ2aWNlLnBhdXNlKHRoaXMucHJvcHMucGxheWVyLmlkKTtcclxuICAgICAgICAgICAgYXdhaXQgcGF1c2UodGhpcy5wcm9wcy5wbGF5ZXIuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc2VydmljZS5wbGF5VmlkZW8odGhpcy5wcm9wcy5wbGF5ZXIuaWQsIHRoaXMuc3RhdGUudmlkZW8pO1xyXG4gICAgICAgICAgICBhd2FpdCBwbGF5VmlkZW8odGhpcy5wcm9wcy5wbGF5ZXIuaWQsIHRoaXMuc3RhdGUudmlkZW8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwYXVzZSh1cGRhdGVTdGF0ZSkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX3NlcnZpY2UucGF1c2UodGhpcy5wcm9wcy5wbGF5ZXIuaWQpO1xyXG4gICAgICAgIGF3YWl0IHVwZGF0ZVN0YXRlKHRoaXMucHJvcHMucGxheWVyLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdG9wKHVwZGF0ZVN0YXRlKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fc2VydmljZS5zdG9wKHRoaXMucHJvcHMucGxheWVyLmlkKTtcclxuICAgICAgICBhd2FpdCB1cGRhdGVTdGF0ZSh0aGlzLnByb3BzLnBsYXllci5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcGxheVZpZGVvLCBwYXVzZSwgc3RvcCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkxlZnQ6ICcxMHB4JywgaGVpZ2h0OiBcIjkwcHhcIiwgd2lkdGg6IFwiNTgwcHhcIiwgZmxvYXQ6IFwibGVmdFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6JzYwcHgnLCBoZWlnaHQ6JzYwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4JywgbWFyZ2luUmlnaHQ6ICczMHB4J319PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9rbm9iLnBuZ1wiIGhlaWdodD1cIjYwcHhcIiB3aWR0aD1cIjYwcHhcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXItbGVmdFwiIHN0eWxlPXt7IHdpZHRoOiBcIjE1cHhcIiwgaGVpZ2h0OiBcIjkwcHhcIiwgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luTGVmdDogJzE1cHgnIH19PjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgd2lkdGg6IFwiMzIwcHhcIiwgaGVpZ2h0OiAnOTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgd2lkdGg6IFwiMzIwcHhcIiwgbGVmdDogXCIyMHB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvdXRwdXQgY2xhc3NOYW1lPVwicGxheWVyLWRpc3BsYXlcIiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiLCBwYWRkaW5nOiBcIjAgNXB4XCIsIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIGZvbnRTaXplOiBcIjEycHhcIiwgbGluZUhlaWdodDogXCIzNXB4XCIgfX0+VmlkZW86IDwvb3V0cHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWJhY2t3YXJkXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc1J1bm5pbmcgPyBcImdseXBoaWNvbiBnbHlwaGljb24tcGF1c2UgcGxheWVyLWJ1dHRvblwiIDogXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsYXkgcGxheWVyLWJ1dHRvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RhdGUuaXNSdW5uaW5nID8gdGhpcy5wYXVzZShwYXVzZSkgOiB0aGlzLnBsYXkocGxheVZpZGVvLCBwYXVzZSl9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjIwcHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0b3AgcGxheWVyLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc3RvcChzdG9wKX0gc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBtYXJnaW5MZWZ0OiBcIjEwcHhcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZm9yd2FyZFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB3aWR0aDogXCIzMjBweFwiLCBib3R0b206IFwiMTBweFwiLCBsZWZ0OiBcIjIwcHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lamVjdFwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3V0cHV0IGNsYXNzTmFtZT1cInBsYXllci1kcml2ZVwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIsIGxpbmVIZWlnaHQ6IFwiMTVweFwiLCBtYXJnaW5MZWZ0OiBcIjI1cHhcIiwgd2lkdGg6IFwiMjI1cHhcIiwgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5EZXRyb2l0PC9vdXRwdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZm9sZGVyLW9wZW5cIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMjVweFwiIH19PiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLXJpZ2h0XCIgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0Jywgd2lkdGg6IFwiMTVweFwiLCBoZWlnaHQ6IFwiOTBweFwiLCBtYXJnaW5MZWZ0OiAnMTVweCcsIG1hcmdpblJpZ2h0OiAnMTVweCcgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnLCB3aWR0aDogJzYwcHgnLCBoZWlnaHQ6ICc2MHB4JywgbWFyZ2luVG9wOiAnMTVweCcsIG1hcmdpbkxlZnQ6ICczMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMva25vYi5wbmdcIiBoZWlnaHQ9XCI2MHB4XCIgd2lkdGg9XCI2MHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwbGF5ZXI6IHBsYXllclNlbGVjdG9yKHN0YXRlLnBsYXllcilcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIEFjdGlvbnMuYWN0aW9uQ3JlYXRvcnNcclxuKShQbGF5ZXIpO1xyXG5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9QbGF5ZXIudHN4IiwiaW1wb3J0IHsgTW9kZWwsIG9uZVRvT25lLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogYXR0cigpLFxyXG4gICAgICAgICAgICBuYW1lOiBhdHRyKCksXHJcbiAgICAgICAgICAgIHZpZGVvOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGlzUnVubmluZzogYXR0cigpLFxyXG4gICAgICAgICAgICBpc1BhdXNlZDogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogYXR0cigpLFxyXG4gICAgICAgICAgICBzZXR0aW5nczogb25lVG9PbmUoXCJTZXR0aW5nc1wiKSxcclxuICAgICAgICAgICAgaGFybW9ub2dyYW1zOiBtYW55KFwiSGFybW9ub2dyYW1cIilcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5QbGF5ZXIubW9kZWxOYW1lID0gXCJQbGF5ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFBsYXk6IGF0dHIoKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcblNldHRpbmdzLm1vZGVsTmFtZSA9IFwiU2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvbW9kZWxzL21vZGVsLnRzIiwiaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcbmltcG9ydCB7IFJlZHVjZXIsIEFjdGlvbkNyZWF0b3IgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBvcm0gfSBmcm9tICcuLi9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LW9ybSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc2Vzc2lvbiwgYWN0aW9uOiBBY3Rpb25zLktub3duQWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IFBsYXllciB9ID0gc2Vzc2lvbjtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlBMQVlfVklERU86XHJcbiAgICAgICAgICAgIFBsYXllci53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IHZpZGVvOiBhY3Rpb24ucGF5bG9hZC52aWRlbywgaXNSdW5uaW5nOiB0cnVlLCBpc1BhdXNlZDogZmFsc2V9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlBBVVNFOlxyXG4gICAgICAgICAgICBQbGF5ZXIud2l0aElkKGFjdGlvbi5wYXlsb2FkLmlkKS51cGRhdGUoeyBpc1J1bm5pbmc6IGZhbHNlLCBpc1BhdXNlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLlNUT1A6XHJcbiAgICAgICAgICAgIFBsYXllci53aXRoSWQoYWN0aW9uLnBheWxvYWQuaWQpLnVwZGF0ZSh7IGlzUnVubmluZzogZmFsc2UsIGlzUGF1c2VkOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25zLkFERF9QTEFZRVI6XHJcbiAgICAgICAgICAgIFBsYXllci5jcmVhdGUoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvbnMuVVBEQVRFX1BMQVlFUjpcclxuICAgICAgICAgICAgUGxheWVyLndpdGhJZChhY3Rpb24ucGF5bG9hZC5pZCkudXBkYXRlKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2Vzc2lvbi5zdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIob3JtLCByZWR1Y2VyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9zdGF0ZS9yZWR1Y2VyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnQXBwL2NvbXBvc2l0aW9uL3N0b3JlJztcclxuaW1wb3J0IHsgbGF6eUluamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2lvYy9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90eXBlcyc7XHJcbmltcG9ydCAqIGFzIEVmZmVjdHMgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9hY3Rpb25zL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zZXJ2aWNlcy90ZWxldmlzaW9uXCI7XHJcbmltcG9ydCB7IGFjdGl2ZVRlbGV2aXNpb25TZWxlY3RvciB9IGZyb20gJy4vbW9kZWxzL3NjaGVtYSc7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gJy4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgVGVsZXZpc2lvblZpZXdNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3ZpZXdtb2RlbCc7XHJcbmltcG9ydCAqIGFzIEZpcmUgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZSc7XHJcbmltcG9ydCB7IEFxdWFyaXVtIH0gZnJvbSAnLi9lZmZlY3RzL2FxdWFyaXVtL2FxdWFyaXVtJztcclxuXHJcbmludGVyZmFjZSBUZWxldmlzaW9uUHJvcHMge1xyXG4gICAgdGVsZXZpc2lvbjogVGVsZXZpc2lvblZpZXdNb2RlbDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbixcclxuICAgIGlzRmlyZXBsYWNlOiBib29sZWFuLFxyXG4gICAgaXNBcXVhcml1bTogYm9vbGVhblxyXG59XHJcblxyXG50eXBlIFByb3BzID0gVGVsZXZpc2lvblByb3BzICYgdHlwZW9mIEVmZmVjdHMuYWN0aW9uQ3JlYXRvcnM7XHJcblxyXG5sZXQgZmlyZXBsYWNlO1xyXG5sZXQgZmlyZTtcclxubGV0IGFxdWFyaXVtO1xyXG5sZXQgYXF1YTtcclxuXHJcbmNsYXNzIFRlbGV2aXNpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgYXF1YXJpdW06IEFxdWFyaXVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLnRlbGV2aXNpb24uaWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9wcy50ZWxldmlzaW9uLmlzQWN0aXZlLFxyXG4gICAgICAgICAgICBpc0ZpcmVwbGFjZTogcHJvcHMudGVsZXZpc2lvbi5pc0ZpcmVwbGFjZVJ1bm5pbmcsXHJcbiAgICAgICAgICAgIGlzQXF1YXJpdW06IHByb3BzLnRlbGV2aXNpb24uaXNBcXVhcml1bVJ1bm5pbmdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmaXJlID0gbmV3IEZpcmUuRmlyZSgpO1xyXG4gICAgICAgIGFxdWFyaXVtID0gbmV3IEFxdWFyaXVtKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogUHJvcHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0ZpcmVwbGFjZTogbmV4dFByb3BzLnRlbGV2aXNpb24uaXNGaXJlcGxhY2VSdW5uaW5nLFxyXG4gICAgICAgICAgICBpc0FxdWFyaXVtOiBuZXh0UHJvcHMudGVsZXZpc2lvbi5pc0FxdWFyaXVtUnVubmluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0FjdGl2ZTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRGaXJlcGxhY2UoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gdGhpcy5yZWZzLnRlbGV2aXNpb247XHJcbiAgICAgICAgdmFyIGZvcmVncm91bmQgPSB0aGlzLnJlZnMudHZDb250ZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0ZpcmVwbGFjZSkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZpcmVwbGFjZSk7XHJcbiAgICAgICAgICAgIGZpcmUuY2xlYXIoYmFja2dyb3VuZCwgZm9yZWdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaXJlLmluaXRpYWxpemUoYmFja2dyb3VuZCwgZm9yZWdyb3VuZCwgJ2ltYWdlQmFja2dyb3VuZCcpO1xyXG4gICAgICAgICAgICBmaXJlcGxhY2UgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyZS5idXJuQnVybkJ1cm4oKTtcclxuICAgICAgICAgICAgfSwgMTAwLCBmaXJlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0RmlyZXBsYWNlKGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0RmlyZXBsYWNlKHRoaXMuc3RhdGUuaWQsICF0aGlzLnN0YXRlLmlzRmlyZXBsYWNlKTsgICAgfVxyXG5cclxuICAgIGFzeW5jIHNldFZpZGVvKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMucmVmcy50ZWxldmlzaW9uO1xyXG4gICAgICAgIHZhciBmb3JlZ3JvdW5kID0gdGhpcy5yZWZzLnR2Q29udGVudDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pc0FxdWFyaXVtKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNBcXVhcml1bSkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGFxdWEpO1xyXG4gICAgICAgICAgICBhcXVhcml1bS5jbGVhcihiYWNrZ3JvdW5kKTtcclxuICAgICAgICAgICAgYXF1YXJpdW0uY2xlYXIoZm9yZWdyb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhcXVhcml1bS5pbml0KGJhY2tncm91bmQpO1xyXG4gICAgICAgICAgICBhcXVhID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFxdWFyaXVtLmRyYXcoZm9yZWdyb3VuZCk7XHJcbiAgICAgICAgICAgIH0sIDE2LjcsIGFxdWFyaXVtLCBmb3JlZ3JvdW5kKTtcclxuICAgICAgICB9ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRBcXVhcml1bSh0aGlzLnN0YXRlLmlkLCAhdGhpcy5zdGF0ZS5pc0FxdWFyaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBAbGF6eUluamVjdChTZXJ2aWNlcy5UZWxldmlzaW9uU2VydmljZSlcclxuICAgIHByaXZhdGUgX3NlcnZpY2U6IFRlbGV2aXNpb25TZXJ2aWNlO1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHRlbGV2aXNpb24gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19IG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRBY3RpdmUodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjQwcHggMCAwIDBcIiwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsIGhlaWdodDogXCIxMjVweFwiLCB3aWR0aDogXCIyNTBweFwiLCBib3JkZXI6IFwiMnB4IHNvbGlkIGJsYWNrXCIgfX0gcmVmPVwidGVsZXZpc2lvblwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgc3R5bGU9e3sgaGVpZ2h0OiBcIjEyNXB4XCIsIHdpZHRoOiBcIjI1MHB4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnIH19IHJlZj1cInR2Q29udGVudFwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpbWFnZUJhY2tncm91bmRcIiBzcmM9XCJpbWFnZXMvYmFja2dyb3VuZC1mbGlwMi5qcGdcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMjVweCcsIHdpZHRoOiAnMjUwcHgnLCBkaXNwbGF5OiAnbm9uZScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiaW1hZ2VTdHJpcFwiIHNyYz1cImltYWdlcy9maXNoc3RyaXAucG5nXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTI1cHgnLCB3aWR0aDogJzI1MHB4JywgZGlzcGxheTogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pc0FjdGl2ZSA/ICd0ZWxldmlzaW9uLWJvdHRvbSBjYW1lcmEtdmlzaWJsZScgOiAndGVsZXZpc2lvbi1ib3R0b20gY2FtZXJhLWhpZGRlbid9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjYW1lcmEtbmFtZVwiPlNvbnkgQnJhdmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZpcmUgdGVsZXZpc2lvbi1maXJlcGxhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdGF0ZS5pc0ZpcmVwbGFjZSA/ICgpID0+IHRoaXMuc2V0RmlyZXBsYWNlKHRlbGV2aXNpb24uaWQpIDogKCkgPT4gdGhpcy5zZXRGaXJlcGxhY2UodGVsZXZpc2lvbi5pZCl9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxlYWYgdGVsZXZpc2lvbi1sZWFmXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRpbnQgdGVsZXZpc2lvbi13YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmlzRmlyZXBsYWNlID8gKCkgPT4gdGhpcy5zZXRWaWRlbyh0ZWxldmlzaW9uLmlkKSA6ICgpID0+IHRoaXMuc2V0VmlkZW8odGVsZXZpc2lvbi5pZCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbGV2aXNpb246IGFjdGl2ZVRlbGV2aXNpb25TZWxlY3RvcihzdGF0ZS50ZWxldmlzaW9uKSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIEVmZmVjdHMuYWN0aW9uQ3JlYXRvcnNcclxuKShUZWxldmlzaW9uKTtcclxuXHJcbi8vIFNldCB1cCBITVIgcmUtcmVuZGVyaW5nLlxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9UZWxldmlzaW9uLnRzeCIsImltcG9ydCB7IEZpc2ggfSBmcm9tICcuL2Zpc2gnXHJcblxyXG5jbGFzcyBBcXVhcml1bSB7XHJcbiAgICBjdHg6IGFueTsgICAgICAgICAgICAgICAgICAgIC8vY2FudmFzIGNvbnRleHQgZm9yIGRyYXdpbmcgdGhlIGZpc2hcclxuICAgIHN0YXJ0RmlzaDogbnVtYmVyOyAgICAgICAgICAvL251bWJlciBvZiBmaXNoIHRvIHN0YXJ0IHdpdGhcclxuICAgIGZpc2g6IEZpc2ggW107ICAgICAgICAgICAgICAgLy9hcnJheSBvZiBmaXNoXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGFueTsgICAgICAgICAvL2JhY2tncm91bmQgaW1hZ2VcclxuICAgIGJhY2tncm91bmRJbWFnZVc6IG51bWJlcjsgIC8vYmFja2dyb3VuZCBpbWFnZSB3aWR0aFxyXG4gICAgYmFja2dyb3VuZEltYWdlSDogbnVtYmVyOyAgLy9iYWNrZ3JvdW5kIGltYWdlIGhlaWdodFxyXG4gICAgaW1hZ2VTdHJpcDogYW55OyAgICAgICAgICAgICAgLy9maXNoIGltYWdlIHN0cmlwIFxyXG4gICAgY2FudmFzV2lkdGg6IG51bWJlcjtcclxuICAgIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRGaXNoID0gNTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZVcgPSAyNTA7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2VIID0gMTI1O1xyXG4gICAgICAgIHRoaXMuZmlzaCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSBmdW5jdGlvbiAoYmFja2dyb3VuZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBiYWNrZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGJhY2tncm91bmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBiYWNrZ3JvdW5kLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy9kcmF3IHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VCYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHRoZSBmaXNoXHJcbiAgICAgICAgdGhpcy5pbWFnZVN0cmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlU3RyaXAnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUZpc2godGhpcy5zdGFydEZpc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpc2ggPSBmdW5jdGlvbihtYXgpIHtcclxuICAgICAgICBpZiAodGhpcy5maXNoLmxlbmd0aCA8IG1heCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5maXNoLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpc2gucHVzaChuZXcgRmlzaCh0aGlzLmJhY2tncm91bmRJbWFnZVcsIHRoaXMuYmFja2dyb3VuZEltYWdlSCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL3JlbW92ZSBmaXNoXHJcbiAgICAgICAgICAgIHRoaXMuZmlzaC5zcGxpY2UobWF4LCB0aGlzLmZpc2gubGVuZ3RoIC0gbWF4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0JhY2tncm91bmQgPSBmdW5jdGlvbiAoY3R4OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXNXaWR0aCA8IHRoaXMuYmFja2dyb3VuZEltYWdlVykge1xyXG4gICAgICAgICAgICAvL1Nob3cgYSBwb3J0aW9uIG9mIHRoZSBiYWNrZ3JvdW5kIGlmIHRoZSB3aW5kb3cgaXMgbW9yZSBuYXJyb3cgdGhhbiB0aGUgYmFja2dyb3VuZEltYWdlXHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kSW1hZ2UsIDAsIDAsIHRoaXMuYmFja2dyb3VuZEltYWdlVywgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy90aWxlIHRoZSBiYWNrZ3JvdW5kSW1hZ2UgaG9yaXpvbnRhbGx5IGlmIHRoZSB3aW5kb3cgaXMgbW9yZSB3aWRlIHRoYW4gdGhlIGltYWdlXHJcbiAgICAgICAgICAgIHZhciB0aWxlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMuY2FudmFzV2lkdGggLyB0aGlzLmJhY2tncm91bmRJbWFnZVcpO1xyXG4gICAgICAgICAgICB2YXIgZmxpcCA9IDE7IC8vZmxpcCB0aGUgaW1hZ2Ugd2hlbiBmbGlwPT0tMSBmb3IgYmV0dGVyIGxvb2tpbmcgdGlsZXNcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdGlsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCB0aGUgdGlsZXMgdGhhdCBhcmUgbmVlZGVkIGFuZCBwb3NpdGlvbiB0aGVtXHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybShmbGlwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5iYWNrZ3JvdW5kSW1hZ2UsIChmbGlwIC0gMSkgKiB0aGlzLmJhY2tncm91bmRJbWFnZVcgLyAyICsgZmxpcCAqIHRoaXMuYmFja2dyb3VuZEltYWdlVyAqIGksIDAsIHRoaXMuYmFja2dyb3VuZEltYWdlVywgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIGZsaXAgPSBmbGlwICogLTE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcgPSBmdW5jdGlvbiAoY2FudmFzOiBhbnkpIHtcclxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGZpc2hpZSBpbiB0aGlzLmZpc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5maXNoW2Zpc2hpZV0uc3dpbShjdHgsIHRoaXMuaW1hZ2VTdHJpcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gZnVuY3Rpb24gKGNhbnZhczogYW55KSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcXVhcml1bSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9lZmZlY3RzL2FxdWFyaXVtL2FxdWFyaXVtLnRzIiwibGV0IGZpc2hXID0gNTA7XHJcbmxldCBmaXNoSCA9IDUwO1xyXG5sZXQgbWF4TGVuZ3RoID0gNTtcclxuXHJcbmNsYXNzIEZpc2gge1xyXG5cclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGFuZ2xlOiBudW1iZXI7XHJcbiAgICB4QW5nbGU6IG51bWJlcjtcclxuICAgIHlBbmdsZTogbnVtYmVyO1xyXG4gICAgekFuZ2xlOiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB6OiBudW1iZXI7XHJcbiAgICB6RmFyOiBudW1iZXI7XHJcbiAgICB6Q2xvc2U6IG51bWJlcjtcclxuICAgIHNjYWxlOiBudW1iZXI7XHJcbiAgICBmbGlwOiBudW1iZXI7XHJcbiAgICB6RmFyRmFjdG9yOiBudW1iZXI7XHJcbiAgICBjZWxsOiBudW1iZXI7XHJcbiAgICBzcGVjaWVzOiBudW1iZXI7XHJcbiAgICBjZWxsQ291bnQ6IG51bWJlcjtcclxuICAgIGNlbGxSZXZlcnNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSB4LHkgZGlyZWN0aW9uIHRoaXMgZmlzaCBzd2ltc1xyXG4gICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIHggdmFsdWUgb2YgdGhlIGFuZ2xlXHJcbiAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgeSB2YWx1ZSBvZiB0aGUgYW5nbGVcclxuICAgICAgICB0aGlzLnpBbmdsZSA9IDEgKyAtMiAqIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7ICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgaWYgdGhlIGZpc2ggaXMgc3dpbW1pbmcgdG93YXJkIHVzIG9yIGF3YXkuIDEgPSB0b3dhcmQgdXM7IC0xID0gYXdheSBmcm9tIHVzXHJcbiAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMud2lkdGggLSBmaXNoVykgKyBmaXNoVyAvIDIpOyAgICAvL3NldCB0aGUgc3RhcnRpbmcgeCBsb2NhdGlvbiAgXHJcbiAgICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuaGVpZ2h0IC0gZmlzaEgpICsgZmlzaEggLyAyKTsgICAvL3NldCB0aGUgc3RhcnRpbmcgeSBsb2NhdGlvbiAgXHJcbiAgICAgICAgdGhpcy56RmFyID0gMTAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgaG93IGZhciBhd2F5IGNhbiBhIGZpc2ggZ29cclxuICAgICAgICB0aGlzLnpGYXJGYWN0b3IgPSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgbWF4IHNpemUgdGhlIGZpc2ggY2FuIGJlLiAxPTEwMCVcclxuICAgICAgICB0aGlzLnpDbG9zZSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCBob3cgbmVhciBhIGZpc2ggY2FuIGNvbWVcclxuICAgICAgICB0aGlzLnogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKHRoaXMuekZhciAtIHRoaXMuekNsb3NlKSkpOyAgICAgICAgICAgICAgLy9zZXQgdGhlIHN0YXJ0aW5nIHogbG9jYXRpb24gXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IC4xOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIHJhdGUgb2Ygc2NhbGluZyBlYWNoIGZyYW1lXHJcbiAgICAgICAgdGhpcy5mbGlwID0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgZmlzaC4gMT1yaWdodDsgLTE9bGVmdFxyXG4gICAgICAgIHRoaXMuY2VsbENvdW50ID0gMTY7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBudW1iZXIgb2YgY2VsbHMgKGNvbHVtbnMpIGluIHRoZSBpbWFnZSBzdHJpcCBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5jZWxsQ291bnQgLSAxKSk7ICAgICAgICAgICAgICAgLy9zZXQgdGhlIGZpcnN0IGNlbGwgKGNvbHVtbnMpIG9mIHRoZSBpbWFnZSBzdHJpcCBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGxSZXZlcnNlID0gLTE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB3aGljaCBkaXJlY3Rpb24gd2UgZ28gdGhyb3VnaCB0aGUgaW1hZ2Ugc3RyaXBcclxuICAgICAgICB0aGlzLnNwZWNpZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTsgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB3aGljaCBzcGVjaWVzIG9mIGZpc2ggdGhpcyBmaXNoIGlzLiBlYWNoIHNwZWNpZXMgaXMgYSByb3cgaW4gdGhlIGltYWdlIHN0cmlwIFxyXG5cclxuICAgICAgICAvLyBzdG9wIGZpc2ggZnJvbSBzd2ltbWluZyBzdHJhaWdodCB1cCBvciBkb3duXHJcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJICogNCAvIDMgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgKiA1IC8gMyB8fCB0aGlzLmFuZ2xlID4gTWF0aC5QSSAqIDEgLyAzICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJICogMiAvIDMpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgKiAxIC8gMyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZhY2UgdGhlIGZpc2ggdGhlIHJpZ2h0IHdheSBpZiBhbmdsZSBpcyBiZXR3ZWVuIDYgbydjbG9jayBhbmQgMTIgbydjbG9ja1xyXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgLyAyICogMykge1xyXG4gICAgICAgICAgICB0aGlzLmZsaXAgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGRyYXcgdGhlIGZpc2ggZWFjaCBmcmFtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgICAgICAgICAgXHJcbiAgICBzd2ltID0gZnVuY3Rpb24gKGN0eDogYW55LCBpbWFnZVN0cmlwOiBhbnkpIHtcclxuICAgICAgICB2YXIgdmVsb2NpdHkgPSAyMDtcclxuICAgICAgICAvLyBDYWxjdWxhdGUgbmV4dCBwb3NpdGlvbiBvZiBmaXNoXHJcbiAgICAgICAgdmFyIG5leHRYID0gdGhpcy54ICsgdGhpcy54QW5nbGUgKiB2ZWxvY2l0eSAqIC4xO1xyXG4gICAgICAgIHZhciBuZXh0WSA9IHRoaXMueSArIHRoaXMueUFuZ2xlICogdmVsb2NpdHkgKiAuMTtcclxuICAgICAgICB2YXIgbmV4dFogPSB0aGlzLnogKyB0aGlzLnpBbmdsZSAqIC4xICogdmVsb2NpdHkgKiAuMTtcclxuICAgICAgICB2YXIgbmV4dFNjYWxlID0gTWF0aC5hYnMobmV4dFopIC8gKHRoaXMuekZhciAtIHRoaXMuekNsb3NlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiByaWdodCBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WCArIGZpc2hXIC8gMiAqIHRoaXMuc2NhbGUgPiB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gMyBvJ2Nsb2NrIGFuZCA2IG8nY2xvY2tcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmFuZ2xlID49IDAgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgLyAyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgLSB0aGlzLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gLXRoaXMuZmxpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiBhbmdsZSBpcyBiZXR3ZWVuIDEyIG8nY2xvY2sgYW5kIDMgbydjbG9ja1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgKiAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSAtICh0aGlzLmFuZ2xlIC0gTWF0aC5QSSAvIDIgKiAzKSAqIDJcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxpcCA9IC10aGlzLmZsaXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZpc2ggaXMgZ29pbmcgdG8gbW92ZSBvZmYgbGVmdCBzaWRlIG9mIHNjcmVlblxyXG4gICAgICAgIGlmIChuZXh0WCAtIGZpc2hXIC8gMiAqIHRoaXMuc2NhbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gNiBvJ2Nsb2NrIGFuZCA5IG8nY2xvY2tcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmFuZ2xlID4gTWF0aC5QSSAvIDIgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5QSSAtIHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhBbmdsZSA9IE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55QW5nbGUgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsaXAgPSAtdGhpcy5mbGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIGFuZ2xlIGlzIGJldHdlZW4gOSBvJ2Nsb2NrIGFuZCAxMiBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5nbGUgPiBNYXRoLlBJICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJIC8gMiAqIDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKE1hdGguUEkgLyAyICogMyAtIHRoaXMuYW5nbGUpICogMlxyXG4gICAgICAgICAgICAgICAgdGhpcy54QW5nbGUgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUFuZ2xlID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwID0gLXRoaXMuZmxpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiBib3R0b20gc2lkZSBvZiBzY3JlZW5cclxuICAgICAgICBpZiAobmV4dFkgKyBmaXNoSCAvIDIgKiB0aGlzLnNjYWxlID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgLy8gSWYgYW5nbGUgaXMgYmV0d2VlbiAzIG8nY2xvY2sgYW5kIDkgbydjbG9ja1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuYW5nbGUgPiAwICYmIHRoaXMuYW5nbGUgPCBNYXRoLlBJKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyIC0gdGhpcy5hbmdsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZmlzaCBpcyBnb2luZyB0byBtb3ZlIG9mZiB0b3Agc2lkZSBvZiBzY3JlZW5cclxuICAgICAgICBpZiAobmV4dFkgLSBmaXNoSCAvIDIgKiB0aGlzLnNjYWxlIDwgMCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbmdsZSBpcyBiZXR3ZWVuIDkgbydjbG9jayBhbmQgMyBvJ2Nsb2NrXHJcbiAgICAgICAgICAgIGlmICgodGhpcy5hbmdsZSA+IE1hdGguUEkgJiYgdGhpcy5hbmdsZSA8IE1hdGguUEkgKiAyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgLSAodGhpcy5hbmdsZSAtIE1hdGguUEkpICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMueEFuZ2xlID0gTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnlBbmdsZSA9IE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBmaXNoIGlzIGdvaW5nIHRvbyBmYXIgKGdldHRpbmcgdG9vIHNtYWxsKVxyXG4gICAgICAgIGlmIChuZXh0WiA8PSB0aGlzLnpDbG9zZSAmJiB0aGlzLnpBbmdsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy56QW5nbGUgPSAtdGhpcy56QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGZpc2ggaXMgZ2V0dGluZyB0byBjbG9zZSAoZ2V0dGluZyB0b28gbGFyZ2UpXHJcbiAgICAgICAgaWYgKCgodGhpcy53aWR0aCAvIGZpc2hXKSAqIDEwKSA8ICgoZmlzaFcgKiBtYXhMZW5ndGgpIC8gdGhpcy53aWR0aCkpIHtcclxuICAgICAgICAgICAgdGhpcy56RmFyRmFjdG9yID0gLjNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKCh0aGlzLndpZHRoIC8gZmlzaFcpICogMikgPCAoKGZpc2hXICogbWF4TGVuZ3RoKSAvIHRoaXMud2lkdGgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuekZhckZhY3RvciA9IC41XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyB0aGlzLnpGYXJGYWN0b3IgPSAxIH1cclxuXHJcbiAgICAgICAgaWYgKG5leHRaID49IHRoaXMuekZhciAqIHRoaXMuekZhckZhY3RvciAmJiB0aGlzLnpBbmdsZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy56QW5nbGUgPSAtdGhpcy56QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNjYWxlIDwgLjEpIHsgdGhpcy5zY2FsZSA9IC4xIH07IC8vZG9uJ3QgbGV0IGZpc2ggZ2V0IHRvbyB0aW55XHJcblxyXG4gICAgICAgIC8vZHJhdyB0aGUgZmlzaFxyXG4gICAgICAgIC8vbG9jYXRlIHRoZSBmaXNoXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7IC8vIG1ha2UgdGhlIGZpc2ggYmlnZ2VyIG9yIHNtYWxsZXIgZGVwZW5kaW5nIG9uIGhvdyBmYXIgYXdheSBpdCBpcy5cclxuICAgICAgICBjdHgudHJhbnNmb3JtKHRoaXMuZmxpcCwgMCwgMCwgMSwgMCwgMCk7IC8vbWFrZSB0aGUgZmlzaCBmYWNlIHRoZSB3YXkgaGUncyBzd2ltbWluZy5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlU3RyaXAsIGZpc2hXICogdGhpcy5jZWxsLCBmaXNoSCAqIHRoaXMuc3BlY2llcywgZmlzaFcsIGZpc2hILCAtZmlzaFcgLyAyLCAtZmlzaEggLyAyLCBmaXNoVywgZmlzaEgpOyAvL2RyYXcgdGhlIGZpc2hcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXh0U2NhbGUgLy8gaW5jcmVtZW50IHNjYWxlIGZvciBuZXh0IHRpbWUgXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAvL2luY3JlbWVudCB0byBuZXh0IHN0YXRlXHJcbiAgICAgICAgdGhpcy54ID0gbmV4dFg7XHJcbiAgICAgICAgdGhpcy55ID0gbmV4dFk7XHJcbiAgICAgICAgdGhpcy56ID0gbmV4dFo7XHJcbiAgICAgICAgaWYgKHRoaXMuY2VsbCA+PSB0aGlzLmNlbGxDb3VudCAtIDEgfHwgdGhpcy5jZWxsIDw9IDApIHsgdGhpcy5jZWxsUmV2ZXJzZSA9IHRoaXMuY2VsbFJldmVyc2UgKiAtMTsgfSAvL2dvIHRocm91Z2ggZWFjaCBjZWxsIGluIHRoZSBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmNlbGwgPSB0aGlzLmNlbGwgKyAxICogdGhpcy5jZWxsUmV2ZXJzZTsgLy9nbyBiYWNrIGRvd24gb25jZSB3ZSBoaXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZpc2ggfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9hcXVhcml1bS9maXNoLnRzIiwiY2xhc3MgRmlyZSB7XHJcbiAgICB0aHJlc2hvbGQ6IG51bWJlcjtcclxuICAgIGZpcmU6IGFueVtdO1xyXG4gICAgdGltZTogYW55O1xyXG4gICAgZnBzOiBudW1iZXI7XHJcbiAgICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gICAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBjb2xvcnM6IGFueVtdO1xyXG4gICAgaW1hZ2VEYXRhOiBhbnk7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGFueTtcclxuICAgIGN0eDogYW55O1xyXG4gICAgaW50ZW5zaXR5OiBhbnk7XHJcblxyXG4gICAgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kLCBmb3JlZ3JvdW5kLCBpbWFnZUlkKSB7XHJcbiAgICAgICAgLy90aGlzLmJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZUJhY2tncm91bmQnKTtcclxuICAgICAgICAvL3RoaXMuY3JlYXRlQmFja2dyb3VuZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdHggPSBmb3JlZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGZvcmVncm91bmQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXNIZWlnaHQgPSBmb3JlZ3JvdW5kLmhlaWdodDtcclxuICAgICAgICB0aGlzLmludGVuc2l0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mcHMgPSAzMDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IDAuNTtcclxuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhc1dpZHRoLCB0aGlzLmNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5pbWFnZURhdGEuZGF0YTtcclxuICAgICAgICB2YXIgbnVtUGl4ZWxzID0gdGhpcy5kYXRhLmxlbmd0aCAvIDQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gW107XHJcbiAgICAgICAgICAgIGNvbG9yWzBdID0gY29sb3JbMV0gPSBjb2xvclsyXSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2ldID0gY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDMyOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaV1bMl0gPSBpIDw8IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMF0gPSBpIDw8IDM7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAzMl1bMl0gPSA2NCAtIChpIDw8IDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgNjRdWzFdID0gaSA8PCAzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzBdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgOTZdWzJdID0gaSA8PCAyO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTI4XVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDEyOF1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxMjhdWzJdID0gNjQgKyAoaSA8PCAyKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE2MF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxNjBdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTYwXVsyXSA9IDEyOCArIChpIDw8IDIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMTkyXVswXSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDE5Ml1bMV0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAxOTJdWzJdID0gMTkyICsgaTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnNbaSArIDIyNF1bMF0gPSAyNTU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzW2kgKyAyMjRdWzFdID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yc1tpICsgMjI0XVsyXSA9IDIyNCArIGk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpcmUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1dpZHRoICogdGhpcy5jYW52YXNIZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSBmdW5jdGlvbiAoYmFja2dyb3VuZCwgZm9yZWdyb3VuZCkge1xyXG4gICAgICAgIHZhciBiZ0NvbnRleHQgPSBiYWNrZ3JvdW5kLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgYmdDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBiYWNrZ3JvdW5kLndpZHRoLCBiYWNrZ3JvdW5kLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBmb3JlZ3JvdW5kLndpZHRoLCBmb3JlZ3JvdW5kLmhlaWdodCk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbWl6ZVRocmVzaG9sZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCArPSBNYXRoLnJhbmRvbSgpICogMC4yIC0gMC4xO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy50aHJlc2hvbGQsIDAuNSksIDAuOCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGJhY2tncm91bmQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgY2FudmFzV2lkdGggPSBiYWNrZ3JvdW5kLndpZHRoO1xyXG4gICAgICAgIHZhciBjYW52YXNIZWlnaHQgPSBiYWNrZ3JvdW5kLmhlaWdodDtcclxuXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWFnZSwgMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVybkJ1cm5CdXJuID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYnVybkJ1cm5CdXJuKTtcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIGR0ID0gbm93IC0gdGhpcy50aW1lO1xyXG5cclxuICAgICAgICBpZiAoZHQgPCAoMTAwMCAvIHRoaXMuZnBzKSlcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBza2lwIGEgZnJhbWVcclxuXHJcbiAgICAgICAgdGhpcy50aW1lID0gbm93O1xyXG5cclxuICAgICAgICB2YXIgYm90dG9tTGluZSA9IHRoaXMuY2FudmFzV2lkdGggKiAodGhpcy5jYW52YXNIZWlnaHQgLSAxKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyByYW5kb20gcGl4ZWxzIGF0IHRoZSBib3R0b20gbGluZVxyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHRoaXMudGhyZXNob2xkKVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpcmVbYm90dG9tTGluZSArIHhdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtb3ZlIGZsaXAgdXB3YXJkcywgc3RhcnQgYXQgYm90dG9tXHJcbiAgICAgICAgdmFyIHZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmNhbnZhc0hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmZpcmVbYm90dG9tTGluZV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHRoaXMuZmlyZVtib3R0b21MaW5lIC0gdGhpcy5jYW52YXNXaWR0aF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLz0gMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA9PSB0aGlzLmNhbnZhc1dpZHRoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSAtIHRoaXMuY2FudmFzV2lkdGggKyB4XTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLmZpcmVbYm90dG9tTGluZSArIHggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAvPSAzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZmlyZVtib3R0b21MaW5lICsgeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgKyB4IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gdGhpcy5maXJlW2JvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoICsgeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgLz0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIC09IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGJvdHRvbUxpbmUgLSB0aGlzLmNhbnZhc1dpZHRoICsgeDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZVtpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYm90dG9tTGluZSAtPSB0aGlzLmNhbnZhc1dpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNraXBSb3dzID0gMjsgLy8gc2tpcCB0aGUgYm90dG9tIDIgcm93c1xyXG5cclxuICAgICAgICAvLyByZW5kZXIgdGhlIGZsYW1lcyB1c2luZyBvdXIgY29sb3IgdGFibGVcclxuICAgICAgICBmb3IgKHZhciB5ID0gc2tpcFJvd3M7IHkgPCB0aGlzLmNhbnZhc0hlaWdodDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXNXaWR0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB5ICogdGhpcy5jYW52YXNXaWR0aCAqIDQgKyB4ICogNDtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5maXJlWyh5IC0gc2tpcFJvd3MpICogdGhpcy5jYW52YXNXaWR0aCArIHhdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSB0aGlzLmNvbG9yc1t2YWx1ZV1bMl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbKytpbmRleF0gPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNvbWV0aW1lcyBjaGFuZ2UgZmlyZSBpbnRlbnNpdHlcclxuICAgICAgICBpZiAodGhpcy5pbnRlbnNpdHkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9taXplVGhyZXNob2xkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnB1dEltYWdlRGF0YSh0aGlzLmltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEZpcmUgfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vZWZmZWN0cy9maXJlcGxhY2UvZmlyZS50cyIsImltcG9ydCB7IE1vZGVsLCBtYW55LCBhdHRyIH0gZnJvbSBcInJlZHV4LW9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRlbGV2aXNpb24gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBzdGF0aWMgbW9kZWxOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIGdldCBmaWVsZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGF0dHIoKSxcclxuICAgICAgICAgICAgbmFtZTogYXR0cigpLFxyXG4gICAgICAgICAgICBpc0ZpcmVwbGFjZVJ1bm5pbmc6IGF0dHIoKSxcbiAgICAgICAgICAgIGlzQXF1YXJpdW1SdW5uaW5nOiBhdHRyKCksXHJcbiAgICAgICAgICAgIGhhcm1vbm9ncmFtczogbWFueShcIkhhcm1vbm9ncmFtXCIpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuVGVsZXZpc2lvbi5tb2RlbE5hbWUgPSBcIlRlbGV2aXNpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXJtb25vZ3JhbSBleHRlbmRzIE1vZGVsIHtcclxuICAgIHN0YXRpYyBtb2RlbE5hbWU6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGZpZWxkcygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbkhhcm1vbm9ncmFtLm1vZGVsTmFtZSA9IFwiSGFybW9ub2dyYW1cIjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9tb2RlbHMvbW9kZWwudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICdBcHAvY29tcG9zaXRpb24vc3RvcmUnO1xyXG5pbXBvcnQgeyBMYW1wIH0gZnJvbSAnLi4vZGV2aWNlcy9saWdodGluZy9MYW1wJztcclxuaW1wb3J0IHsgbGFtcFNlbGVjdG9yIH0gZnJvbSAnLi4vZGV2aWNlcy9saWdodGluZy9tb2RlbHMvc2NoZW1hJztcclxuaW1wb3J0IHsgTGFtcFZpZXdNb2RlbCB9IGZyb20gXCIuLi9kZXZpY2VzL2xpZ2h0aW5nL21vZGVscy92aWV3XCI7XHJcbmltcG9ydCB7IEZyb250IH0gZnJvbSBcIi4uL2RldmljZXMvaGlmaS9zcGVha2Vycy9Gcm9udFwiO1xyXG5pbXBvcnQgeyBTaWRlIH0gZnJvbSBcIi4uL2RldmljZXMvaGlmaS9zcGVha2Vycy9TaWRlXCI7XHJcbmltcG9ydCB7IEJhY2sgfSBmcm9tIFwiLi4vZGV2aWNlcy9oaWZpL3NwZWFrZXJzL0JhY2tcIjtcclxuaW1wb3J0IHsgU3BlYWtlclZpZXdNb2RlbCB9IGZyb20gXCIuLi9kZXZpY2VzL2hpZmkvbW9kZWxzL3ZpZXdcIjtcclxuaW1wb3J0IHsgZnJvbnRTcGVha2VyU2VsZWN0b3IsIHNpZGVTcGVha2VyU2VsZWN0b3IsIGJhY2tTcGVha2VyU2VsZWN0b3IgfSBmcm9tIFwiLi4vZGV2aWNlcy9oaWZpL21vZGVscy9zY2hlbWFcIjtcclxuaW1wb3J0IHsgU29mYSB9IGZyb20gXCIuL1NvZmFcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsYW1wczogTGFtcFZpZXdNb2RlbFtdO1xyXG4gICAgZnJvbnRTcGVha2VyczogU3BlYWtlclZpZXdNb2RlbFtdO1xyXG4gICAgc2lkZVNwZWFrZXJzOiBTcGVha2VyVmlld01vZGVsW107XHJcbiAgICBiYWNrU3BlYWtlcnM6IFNwZWFrZXJWaWV3TW9kZWxbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIGxhbXBzOiBMYW1wVmlld01vZGVsW107XHJcbiAgICBmcm9udFNwZWFrZXJzOiBTcGVha2VyVmlld01vZGVsW107XHJcbiAgICBzaWRlU3BlYWtlcnM6IFNwZWFrZXJWaWV3TW9kZWxbXTtcclxuICAgIGJhY2tTcGVha2VyczogU3BlYWtlclZpZXdNb2RlbFtdO1xyXG59XHJcblxyXG5jbGFzcyBGbG9vciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGFtcHM6IHByb3BzLmxhbXBzLFxyXG4gICAgICAgICAgICBmcm9udFNwZWFrZXJzOiBwcm9wcy5mcm9udFNwZWFrZXJzLFxyXG4gICAgICAgICAgICBzaWRlU3BlYWtlcnM6IHByb3BzLnNpZGVTcGVha2VycyxcclxuICAgICAgICAgICAgYmFja1NwZWFrZXJzOiBwcm9wcy5iYWNrU3BlYWtlcnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsb29yc1wiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc2MCUnLCBtYXJnaW5MZWZ0OiAnMjAlJywgZmxvYXQ6ICdsZWZ0JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvb3ItY29udGFpbmVyXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb29yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MHB4JyB9fT4ge3RoaXMucHJvcHMuZnJvbnRTcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BlYWtlci1mcm9udC0nICsgc3BlYWtlci5wb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJvbnQga2V5PXtzcGVha2VyLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNTBweCcgfX0+IHt0aGlzLnByb3BzLmxhbXBzLm1hcCgobGFtcCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyAnaHVlLScgKyBsYW1wLnBvc2l0aW9uIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFtcCBrZXk9e2xhbXAuaWR9IGxhbXA9e2xhbXB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcxNTBweCcsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb2ZhIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzEzMHB4Jywgd2lkdGg6ICcxMDAlJyB9fT4ge3RoaXMucHJvcHMuc2lkZVNwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcGVha2VyLXNpZGUtJyArIHNwZWFrZXIucG9zaXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGUga2V5PXtzcGVha2VyLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcyMjBweCcsIHdpZHRoOiAnMTAwJScgfX0+IHt0aGlzLnByb3BzLmJhY2tTcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BlYWtlci1iYWNrLScgKyBzcGVha2VyLnBvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrIGtleT17c3BlYWtlci5pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsYW1wczogbGFtcFNlbGVjdG9yKHN0YXRlLmxhbXApLFxyXG4gICAgICAgIGZyb250U3BlYWtlcnM6IGZyb250U3BlYWtlclNlbGVjdG9yKHN0YXRlLmhpZmkpLFxyXG4gICAgICAgIHNpZGVTcGVha2Vyczogc2lkZVNwZWFrZXJTZWxlY3RvcihzdGF0ZS5oaWZpKSxcclxuICAgICAgICBiYWNrU3BlYWtlcnM6IGJhY2tTcGVha2VyU2VsZWN0b3Ioc3RhdGUuaGlmaSlcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIFdpcmUgdXAgdGhlIFJlYWN0IGNvbXBvbmVudCB0byB0aGUgUmVkdXggc3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG51bGxcclxuKShGbG9vcik7XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy9mbG9vci9GbG9vci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU29mYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiwgcG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOiAnMzgwcHgnLCBtYXJnaW46ICcwIGF1dG8nIH19PlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29mYS5wbmdcIiB3aWR0aD1cIjM4MHB4XCIgaGVpZ2h0PVwiMTUwcHhcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMHB4JywgbGVmdDogJzAnICB9fSAvPlxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZmxvb3IvU29mYS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWN0dXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1mcmFtZVwiIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIG1hcmdpblJpZ2h0OiBcIjc1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbWFyaWx5bi5qcGdcIiBjbGFzc05hbWU9XCJpbWFnZVwiIHdpZHRoPVwiMTI1cHhcIiBoZWlnaHQ9XCIxNzBweFwiIC8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL1BpY3R1cmUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGVsZXZpc2lvbiBmcm9tICcuLi9kZXZpY2VzL3RlbGV2aXNpb24vVGVsZXZpc2lvbic7XG5pbXBvcnQgQW1iaWxpZ2h0IGZyb20gJy4uL2RldmljZXMvYW1iaWxpZ2h0L0FtYmlsaWdodCc7XHJcbmltcG9ydCBTaGVsZiBmcm9tICcuL3NoZWxmL1NoZWxmJztcclxuaW1wb3J0IEJvb2tjYXNlIGZyb20gJy4vYm9va2Nhc2UvQm9va2Nhc2UnO1xyXG5pbXBvcnQgUGljdHVyZSBmcm9tICcuL1BpY3R1cmUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgaGVpZ2h0OiBcIjMwMHB4XCIsIG1hcmdpblRvcDogJzI4cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgZmxvYXQ6IFwibGVmdFwiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGljdHVyZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMjAlXCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjI3MHB4XCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIsIHdpZHRoOiBcIjI1MHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1iaWxpZ2h0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVsZXZpc2lvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hlbGYgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIG1hcmdpbkxlZnQ6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tjYXNlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTZXQgdXAgSE1SIHJlLXJlbmRlcmluZy5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL1dhbGwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2Nhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZyYW1lLXNoYWRvd1wiIHN0eWxlPXt7IHdpZHRoOiBcIjE5MHB4XCIsIGhlaWdodDogXCI4MHB4XCIsIGJhY2tncm91bmQ6IFwicmdiYSgxOTMsIDE1NSwgMTA4LCAxKVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBoZWlnaHQ6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBoZWlnaHQ6IFwiNXB4XCIsIG1hcmdpblRvcDogXCI1MHB4XCIgfX0+IDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvd2FsbC9ib29rY2FzZS9Cb29rY2FzZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGVsZiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIsIHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3BlYWtlci1mcm9udC5wbmdcIiB3aWR0aD1cIjc1cHhcIiBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIsIGNsZWFyOiBcImJvdGhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGVsZlwiIHN0eWxlPXt7IHdpZHRoOiBcIjkwJVwiLCBoZWlnaHQ6IFwiNTBweFwiLCBib3JkZXJUb3A6IFwiNXB4IHNvbGlkIHJnYmEoMTkzLCAxNTUsIDEwOCwgMSlcIiwgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCByZ2JhKDE5MywgMTU1LCAxMDgsIDEpXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCAjNDQ0MzQzXCIsIGJvcmRlclRvcDogXCIycHggc29saWQgIzQ0NDM0M1wiLCB3aWR0aDogXCIyNSVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgZmxvYXQ6IFwibGVmdFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggYm94LXNoYWRvd1wiIHN0eWxlPXt7IHdpZHRoOiBcIjI1JVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BzNC5wbmdcIiB3aWR0aD1cIjc1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjExcHhcIiwgbWFyZ2luTGVmdDogXCI3cHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBib3gtc2hhZG93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaHRwYy5qcGdcIiB3aWR0aD1cIjc1cHhcIiBoZWlnaHQ9XCIzMHB4XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjdweFwiLCBtYXJnaW5MZWZ0OiBcIjdweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgc3R5bGU9e3sgd2lkdGg6IFwiMjUlXCIsIGhlaWdodDogXCI0MHB4XCIsIGZsb2F0OiBcImxlZnRcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vY29tcG9uZW50cy93YWxsL3NoZWxmL1NoZWxmLnRzeCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBTdG9yZUNyZWF0b3IsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0ICogYXMgQXBwU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbiAgICApKGNyZWF0ZVN0b3JlKSBhcyBTdG9yZUNyZWF0b3I7XG5cbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XG5cbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgQXBwU3RvcmU+KCcuL3N0b3JlJyk7XG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnMpIHtcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zZXJ2aWNlcy9jYW1lcmEnO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL3NlcnZpY2VzL3RlbGV2aXNpb24nO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9zZXJ2aWNlcy9wbGF5ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3R5cGVzJ1xyXG5pbXBvcnQgeyBDYW1lcmFBY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2NvbXBvc2l0aW9uL3NlcnZpY2VzL2NhbWVyYVwiO1xyXG5pbXBvcnQgeyBUZWxldmlzaW9uQWN0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9jb21wb3NpdGlvbi9zZXJ2aWNlcy90ZWxldmlzaW9uXCI7XHJcbmltcG9ydCB7IFBsYXllckFjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vY29tcG9zaXRpb24vc2VydmljZXMvcGxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cclxuY29udGFpbmVyLmJpbmQ8Q2FtZXJhU2VydmljZT4oU2VydmljZXMuQ2FtZXJhU2VydmljZSkudG8oQ2FtZXJhQWN0aW9uU2VydmljZSk7XHJcbmNvbnRhaW5lci5iaW5kPFRlbGV2aXNpb25TZXJ2aWNlPihTZXJ2aWNlcy5UZWxldmlzaW9uU2VydmljZSkudG8oVGVsZXZpc2lvbkFjdGlvblNlcnZpY2UpO1xyXG5jb250YWluZXIuYmluZDxQbGF5ZXJTZXJ2aWNlPihTZXJ2aWNlcy5QbGF5ZXJTZXJ2aWNlKS50byhQbGF5ZXJBY3Rpb25TZXJ2aWNlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vaW9jL2NvbnRhaW5lci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0XG4gICAgPFJvdXRlIGNvbXBvbmVudD17TGF5b3V0fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudHM9e3sgYm9keTogSG9tZSB9fSAvPlxuICAgIDwvUm91dGU+O1xuXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3JvdXRlcy50c3giLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgUmVkdWNlciwgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV2aWNlcy9jYW1lcmEvc2VydmljZXMvY2FtZXJhJztcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9tb2RlbC92aWV3bW9kZWwnO1xyXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2RvbWFpbi10YXNrJztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbWVyYUFjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBDYW1lcmFTZXJ2aWNlIHtcclxuXHJcbiAgICBhc3luYyBnZXRDYW1lcmFTdGF0ZShpZDogbnVtYmVyKTogUHJvbWlzZTxDYW1lcmFWaWV3TW9kZWw+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvZ2V0Q2FtZXJhcz9pZD0nICsgaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB2YXIgY2FtZXJhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIDxDYW1lcmFWaWV3TW9kZWw+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgaXNNb3Rpb25EZXRlY3RlZDogY2FtZXJhLmlzTW90aW9uRGV0ZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBpc1JlY29yZGluZzogY2FtZXJhLmlzUmVjb3JkaW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN0YXJ0UmVjb3JkaW5nKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy9jYW1lcmEvc3RhcnRSZWNvcmRpbmcnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IHJlY29yZGluZycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIHN0b3BSZWNvcmRpbmcoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL2NhbWVyYS9zdG9wUmVjb3JkaW5nJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wIHJlY29yZGluZycpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAvY29tcG9zaXRpb24vc2VydmljZXMvY2FtZXJhLnRzIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV2aWNlcy9wbGF5ZXIvc2VydmljZXMvcGxheWVyJztcclxuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdkb21haW4tdGFzayc7XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJBY3Rpb25TZXJ2aWNlIGltcGxlbWVudHMgUGxheWVyU2VydmljZSB7XHJcbiAgICBhc3luYyBwbGF5VmlkZW8oaWQ6IG51bWJlciwgdmlkZW86IHN0cmluZykge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IDxSZXNwb25zZT5hd2FpdCBmZXRjaCgnL3RlbGV2aXNpb24vc2V0VmlkZW8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgdmlkZW8nKTtcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBwYXVzZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvdGVsZXZpc2lvbi9wYXVzZVBsYXllcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF1c2UgcGxheWVyJyk7XG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgc3RvcChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gPFJlc3BvbnNlPmF3YWl0IGZldGNoKCcvdGVsZXZpc2lvbi9zdG9wUGxheWVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdG9wIHBsYXllcicpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3NlcnZpY2VzL3BsYXllci50cyIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XHJcbmltcG9ydCB7IFRlbGV2aXNpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXZpY2VzL3RlbGV2aXNpb24vc2VydmljZXMvdGVsZXZpc2lvbic7XHJcbmltcG9ydCB7IGZldGNoIH0gZnJvbSAnZG9tYWluLXRhc2snO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVsZXZpc2lvbkFjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBUZWxldmlzaW9uU2VydmljZSB7XHJcblxyXG4gICAgYXN5bmMgc2V0RmlyZXBsYWNlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy90ZWxldmlzaW9uL3NldEZpcmVwbGFjZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGZpcmVwbGFjZScpO1xuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIHNldFZpZGVvKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSA8UmVzcG9uc2U+YXdhaXQgZmV0Y2goJy90ZWxldmlzaW9uL3NldFZpZGVvJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgdmlkZW8nKTtcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9jb21wb3NpdGlvbi9zZXJ2aWNlcy90ZWxldmlzaW9uLnRzIiwiaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvY2FtZXJhL21vZGVsL21vZGVsXCI7XG5pbXBvcnQgeyBUZWxldmlzaW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy90ZWxldmlzaW9uL21vZGVscy9tb2RlbFwiO1xuaW1wb3J0IHsgQW1iaWxpZ2h0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9hbWJpbGlnaHQvbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQgeyBMYW1wIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZGV2aWNlcy9saWdodGluZy9tb2RlbHMvbW9kZWxcIjtcbmltcG9ydCB7IEhpZmkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2hpZmkvbW9kZWxzL21vZGVsXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL3BsYXllci9tb2RlbHMvbW9kZWxcIjtcbmltcG9ydCAqIGFzIERpc3BsYXllciBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2NhbWVyYS9zdGF0ZS9kaXNwbGF5ZXJcIjtcbmltcG9ydCAqIGFzIFRlbGV2aXNpb25SZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvdGVsZXZpc2lvbi9zdGF0ZXMvdGVsZXZpc2lvblwiO1xuaW1wb3J0ICogYXMgQW1iaWxpZ2h0UmVkdWNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2FtYmlsaWdodC9zdGF0ZS9yZWR1Y2VyXCI7XG5pbXBvcnQgKiBhcyBMYW1wUmVkdWNlciBmcm9tIFwiLi4vY29tcG9uZW50cy9kZXZpY2VzL2xpZ2h0aW5nL3N0YXRlL3JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIEhpZmlSZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvaGlmaS9zdGF0ZS9yZWR1Y2VyXCI7XG5pbXBvcnQgKiBhcyBQbGF5ZXJSZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2RldmljZXMvcGxheWVyL3N0YXRlL3JlZHVjZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcbiAgICBuYXZtZW51OiB7fSxcbiAgICBkaXNwbGF5OiBEaXNwbGF5LFxuICAgIHRlbGV2aXNpb246IFRlbGV2aXNpb24sXG4gICAgYW1iaWxpZ2h0OiBBbWJpbGlnaHQsXG4gICAgbGFtcDogTGFtcCxcbiAgICBoaWZpOiBIaWZpLFxuICAgIHBsYXllcjogUGxheWVyXG59XG5cbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICAgIGRpc3BsYXk6IERpc3BsYXllci5kZWZhdWx0LFxuICAgIHRlbGV2aXNpb246IFRlbGV2aXNpb25SZWR1Y2VyLmRlZmF1bHQsXG4gICAgYW1iaWxpZ2h0OiBBbWJpbGlnaHRSZWR1Y2VyLmRlZmF1bHQsXG4gICAgbGFtcDogTGFtcFJlZHVjZXIuZGVmYXVsdCxcbiAgICBoaWZpOiBIaWZpUmVkdWNlci5kZWZhdWx0LFxuICAgIHBsYXllcjogUGxheWVyUmVkdWNlci5kZWZhdWx0XG59O1xuXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL2NvbXBvc2l0aW9uL3N0b3JlL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgaGVpZ2h0OiBzdHJpbmdcbn1cblxudmFyIGdldERpbWVuc2lvbnMgPSAoKSA9PiAoeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUwICsgJ3B4JyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgRGltZW5zaW9ucz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgaGVpZ2h0OiAnMTAwdmgnIH07XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0RGltZW5zaW9ucygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHsgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodCB9IH0pO1xuICAgICAgICAvL3JldHVybiA8ZGl2PntjaGlsZH08L2Rpdj47XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvZnVsbHNjcmVlbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uTW90aW9uLCBzcHJpbmcgfSBmcm9tICdyZWFjdC1tb3Rpb24nO1xuXG5jb25zdCB3aWxsRW50ZXIgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDAuOTdcbn0pO1xuXG5jb25zdCB3aWxsTGVhdmUgPSAoKSA9PiAoe1xuICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICBzY2FsZTogc3ByaW5nKDEuMDApXG59KTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgICBvcGFjaXR5OiBzcHJpbmcoMSksXG4gICAgc2NhbGU6IHNwcmluZygxKVxufSk7XG5cbmNvbnN0IFJvdXRlVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuOiBjaGlsZCwgcGF0aG5hbWUgfSkgPT4gKFxuICAgIDxUcmFuc2l0aW9uTW90aW9uXG4gICAgICAgIHN0eWxlcz17W3tcbiAgICAgICAgICAgIGtleTogcGF0aG5hbWUsXG4gICAgICAgICAgICBzdHlsZTogZ2V0U3R5bGVzKCksXG4gICAgICAgICAgICBkYXRhOiB7IGNoaWxkIH1cbiAgICAgICAgfV19XG4gICAgICAgIHdpbGxFbnRlcj17d2lsbEVudGVyfVxuICAgICAgICB3aWxsTGVhdmU9e3dpbGxMZWF2ZX1cbiAgICA+XG4gICAgICAgIHsoaW50ZXJwb2xhdGVkKSA9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7aW50ZXJwb2xhdGVkLm1hcCgoeyBrZXksIHN0eWxlLCBkYXRhIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7a2V5fS10cmFuc2l0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMud3JhcHBlciwgeyBvcGFjaXR5OiBzdHlsZS5vcGFjaXR5LCB0cmFuc2Zvcm06IGBzY2FsZSgke3N0eWxlLnNjYWxlfSlgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgPC9UcmFuc2l0aW9uTW90aW9uID5cbik7XG5cbnZhciBzdHlsZXMgPSB7XG4gICAgd3JhcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlVHJhbnNpdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9saWIvcm91dGUtdHJhbnNpdGlvbi50c3giLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCw3N3UvUEhOMlp5QjNhV1IwYUQwaU9XMXRJaUJvWldsbmFIUTlJamx0YlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TUNBeE1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbVZ5YzJsdmJqMGlNUzR5SWlCaVlYTmxVSEp2Wm1sc1pUMGlkR2x1ZVNJK0NpQWdQR1JsYzJNK1VsSlBSQ0JNYjJkdlBDOWtaWE5qUGdvZ0lEd2hMUzBnVTJodmR5QnZkWFJzYVc1bElHOW1JR05oYm5aaGN5QjFjMmx1WnlBbmNtVmpkQ2NnWld4bGJXVnVkQ0F0TFQ0S0lDQThZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnWm1sc2JEMGlkMmhwZEdVaUlITjBjbTlyWlQwaWNtVmtJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXlJaUFnTHo0S1BDOXpkbWMrXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0FwcC9pbWFnZXMvbG9nby5zdmdcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzcG5ldC1wcmVyZW5kZXJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhc3BuZXQtcHJlcmVuZGVyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImludmVyc2lmeS1pbmplY3QtZGVjb3JhdG9yc1wiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIlxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW90aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtbW90aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1ib290c3RyYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtdGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==