exports.ids = ["vendors~components-timepicker-demo-timepicker-module"];
exports.modules = {

/***/ "2oBD":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js ***!
  \***********************************************************************************************/
/*! exports provided: MiniState, MiniStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return MiniState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return MiniStore; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "mvVQ");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "/E8u");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @template T
 */

var MiniState = /*#__PURE__*/function (_BehaviorSubject) {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MiniState, _BehaviorSubject);

  var _super = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MiniState);

  /**
   * @param {?} _initialState
   * @param {?} actionsDispatcher$
   * @param {?} reducer
   */
  function MiniState(_initialState, actionsDispatcher$, reducer) {
    var _this;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MiniState);

    _this = _super.call(this, _initialState);
    /** @type {?} */

    var actionInQueue$ = actionsDispatcher$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_4__["queueScheduler"]));
    /** @type {?} */

    var state$ = actionInQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(
    /**
    * @param {?} state
    * @param {?} action
    * @return {?}
    */
    function (state, action) {
      if (!action) {
        return state;
      }

      return reducer(state, action);
    }, _initialState));
    state$.subscribe(
    /**
    * @param {?} value
    * @return {?}
    */
    function (value) {
      return _this.next(value);
    });
    return _this;
  }

  return MiniState;
}(rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @template T
 */


var MiniStore = /*#__PURE__*/function (_Observable) {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MiniStore, _Observable);

  var _super2 = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MiniStore);

  /**
   * @param {?} _dispatcher
   * @param {?} _reducer
   * @param {?} state$
   */
  function MiniStore(_dispatcher, _reducer,
  /* tslint:disable-next-line: no-any */
  state$) {
    var _this2;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MiniStore);

    _this2 = _super2.call(this);
    _this2._dispatcher = _dispatcher;
    _this2._reducer = _reducer;
    /* tslint:disable-next-line: deprecation */

    _this2.source = state$;
    return _this2;
  }
  /**
   * @template R
   * @param {?} pathOrMapFn
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MiniStore, [{
    key: "select",
    value: function select(pathOrMapFn) {
      /* tslint:disable-next-line: deprecation */

      /** @type {?} */
      var mapped$ = this.source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(pathOrMapFn));
      return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */

  }, {
    key: "lift",
    value: function lift(operator) {
      /** @type {?} */
      var store = new MiniStore(this._dispatcher, this._reducer, this);
      /* tslint:disable-next-line: deprecation */

      store.operator = operator;
      return store;
    }
    /**
     * @param {?} action
     * @return {?}
     */

  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this._dispatcher.next(action);
    }
    /**
     * @param {?} action
     * @return {?}
     */

  }, {
    key: "next",
    value: function next(action) {
      this._dispatcher.next(action);
    }
    /* tslint:disable-next-line: no-any */

    /**
     * @param {?} err
     * @return {?}
     */

  }, {
    key: "error",
    value: function error(err) {
      this._dispatcher.error(err);
    }
    /**
     * @return {?}
     */

  }, {
    key: "complete",
    value: function complete() {
      /*noop*/
    }
  }]);

  return MiniStore;
}(rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]);

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function Action() {}

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "kUHs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm2015/ngx-bootstrap-timepicker.js ***!
  \*************************************************************************************************/
/*! exports provided: TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerActions", function() { return TimepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return TimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return TimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerStore", function() { return TimepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TIMEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "mvVQ");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "/E8u");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "2oBD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function TimepickerComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimepickerComponent_td_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r18.changeMinutes(ctx_r18.minuteStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
  }
}

function TimepickerComponent_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimepickerComponent_td_9_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r20.changeSeconds(ctx_r20.secondsStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
  }
}

function TimepickerComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "td");
  }
}

function TimepickerComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0:\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r22.prevDef($event);
      return ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel");
    })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r24.changeMinutes(ctx_r24.minuteStep, "key");
    })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key");
    })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r26.updateMinutes($event.target.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-error", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx_r7.labelMinutes);
  }
}

function TimepickerComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0:\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r27.prevDef($event);
      return ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel");
    })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r29.changeSeconds(ctx_r29.secondsStep, "key");
    })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key");
    })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r31.updateSeconds($event.target.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-error", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx_r9.labelSeconds);
  }
}

function TimepickerComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimepickerComponent_td_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r32.toggleMeridian();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r11.meridian, " ");
  }
}

function TimepickerComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimepickerComponent_td_26_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r34.changeMinutes(-ctx_r34.minuteStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
  }
}

function TimepickerComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimepickerComponent_td_28_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r36.changeSeconds(-ctx_r36.secondsStep);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
  }
}

function TimepickerComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function TimepickerComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "td");
  }
}

var TimepickerActions = /*#__PURE__*/function () {
  function TimepickerActions() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TimepickerActions);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TimepickerActions, [{
    key: "writeValue",

    /**
     * @param {?} value
     * @return {?}
     */
    value: function writeValue(value) {
      return {
        type: TimepickerActions.WRITE_VALUE,
        payload: value
      };
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "changeHours",
    value: function changeHours(event) {
      return {
        type: TimepickerActions.CHANGE_HOURS,
        payload: event
      };
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "changeMinutes",
    value: function changeMinutes(event) {
      return {
        type: TimepickerActions.CHANGE_MINUTES,
        payload: event
      };
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "changeSeconds",
    value: function changeSeconds(event) {
      return {
        type: TimepickerActions.CHANGE_SECONDS,
        payload: event
      };
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setTime",
    value: function setTime(value) {
      return {
        type: TimepickerActions.SET_TIME_UNIT,
        payload: value
      };
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "updateControls",
    value: function updateControls(value) {
      return {
        type: TimepickerActions.UPDATE_CONTROLS,
        payload: value
      };
    }
  }]);

  return TimepickerActions;
}();

TimepickerActions.ɵfac = function TimepickerActions_Factory(t) {
  return new (t || TimepickerActions)();
};

TimepickerActions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: TimepickerActions,
  factory: TimepickerActions.ɵfac
});
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TimepickerActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
  }], null, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var dex = 10;
/** @type {?} */

var hoursPerDay = 24;
/** @type {?} */

var hoursPerDayHalf = 12;
/** @type {?} */

var minutesPerHour = 60;
/** @type {?} */

var secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */

function isValidDate(value) {
  if (!value) {
    return false;
  }

  if (value instanceof Date && isNaN(value.getHours())) {
    return false;
  }

  if (typeof value === 'string') {
    return isValidDate(new Date(value));
  }

  return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */


function isValidLimit(controls, newDate) {
  if (controls.min && newDate < controls.min) {
    return false;
  }

  if (controls.max && newDate > controls.max) {
    return false;
  }

  return true;
}
/**
 * @param {?} value
 * @return {?}
 */


function toNumber(value) {
  if (typeof value === 'number') {
    return value;
  }

  return parseInt(value, dex);
}
/**
 * @param {?} value
 * @return {?}
 */


function isNumber(value) {
  return !isNaN(toNumber(value));
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */


function parseHours(value) {
  var isPM = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  /** @type {?} */
  var hour = toNumber(value);

  if (isNaN(hour) || hour < 0 || hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
    return NaN;
  }

  return hour;
}
/**
 * @param {?} value
 * @return {?}
 */


function parseMinutes(value) {
  /** @type {?} */
  var minute = toNumber(value);

  if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
    return NaN;
  }

  return minute;
}
/**
 * @param {?} value
 * @return {?}
 */


function parseSeconds(value) {
  /** @type {?} */
  var seconds = toNumber(value);

  if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
    return NaN;
  }

  return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */


function parseTime(value) {
  if (typeof value === 'string') {
    return new Date(value);
  }

  return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */


function changeTime(value, diff) {
  if (!value) {
    return changeTime(createDate(new Date(), 0, 0, 0), diff);
  }
  /** @type {?} */


  var hour = value.getHours();
  /** @type {?} */

  var minutes = value.getMinutes();
  /** @type {?} */

  var seconds = value.getSeconds();

  if (diff.hour) {
    hour = hour + toNumber(diff.hour);
  }

  if (diff.minute) {
    minutes = minutes + toNumber(diff.minute);
  }

  if (diff.seconds) {
    seconds = seconds + toNumber(diff.seconds);
  }

  return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */


function setTime(value, opts) {
  /** @type {?} */
  var hour = parseHours(opts.hour);
  /** @type {?} */

  var minute = parseMinutes(opts.minute);
  /** @type {?} */

  var seconds = parseSeconds(opts.seconds) || 0;

  if (opts.isPM && hour !== 12) {
    hour += hoursPerDayHalf;
  }

  if (!value) {
    if (!isNaN(hour) && !isNaN(minute)) {
      return createDate(new Date(), hour, minute, seconds);
    }

    return value;
  }

  if (isNaN(hour) || isNaN(minute)) {
    return value;
  }

  return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */


function createDate(value, hours, minutes, seconds) {
  /** @type {?} */
  var newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds()); // #3139 ensure date part remains unchanged

  newValue.setFullYear(value.getFullYear());
  newValue.setMonth(value.getMonth());
  newValue.setDate(value.getDate());
  return newValue;
}
/**
 * @param {?} value
 * @return {?}
 */


function padNumber(value) {
  /** @type {?} */
  var _value = value.toString();

  if (_value.length > 1) {
    return _value;
  }

  return "0".concat(_value);
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */


function isHourInputValid(hours, isPM) {
  return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */


function isMinuteInputValid(minutes) {
  return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */


function isSecondInputValid(seconds) {
  return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */


function isInputLimitValid(diff, max, min) {
  /** @type {?} */
  var newDate = setTime(new Date(), diff);

  if (max && newDate > max) {
    return false;
  }

  if (min && newDate < min) {
    return false;
  }

  return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */


function isInputValid(hours) {
  var minutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  var seconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var isPM = arguments.length > 3 ? arguments[3] : undefined;
  return isHourInputValid(hours, isPM) && isMinuteInputValid(minutes) && isSecondInputValid(seconds);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */


function canChangeValue(state, event) {
  if (state.readonlyInput || state.disabled) {
    return false;
  }

  if (event) {
    if (event.source === 'wheel' && !state.mousewheel) {
      return false;
    }

    if (event.source === 'key' && !state.arrowkeys) {
      return false;
    }
  }

  return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */


function canChangeHours(event, controls) {
  if (!event.step) {
    return false;
  }

  if (event.step > 0 && !controls.canIncrementHours) {
    return false;
  }

  if (event.step < 0 && !controls.canDecrementHours) {
    return false;
  }

  return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */


function canChangeMinutes(event, controls) {
  if (!event.step) {
    return false;
  }

  if (event.step > 0 && !controls.canIncrementMinutes) {
    return false;
  }

  if (event.step < 0 && !controls.canDecrementMinutes) {
    return false;
  }

  return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */


function canChangeSeconds(event, controls) {
  if (!event.step) {
    return false;
  }

  if (event.step > 0 && !controls.canIncrementSeconds) {
    return false;
  }

  if (event.step < 0 && !controls.canDecrementSeconds) {
    return false;
  }

  return true;
}
/**
 * @param {?} state
 * @return {?}
 */


function getControlsValue(state) {
  var hourStep = state.hourStep,
      minuteStep = state.minuteStep,
      secondsStep = state.secondsStep,
      readonlyInput = state.readonlyInput,
      disabled = state.disabled,
      mousewheel = state.mousewheel,
      arrowkeys = state.arrowkeys,
      showSpinners = state.showSpinners,
      showMeridian = state.showMeridian,
      showSeconds = state.showSeconds,
      meridians = state.meridians,
      min = state.min,
      max = state.max;
  return {
    hourStep: hourStep,
    minuteStep: minuteStep,
    secondsStep: secondsStep,
    readonlyInput: readonlyInput,
    disabled: disabled,
    mousewheel: mousewheel,
    arrowkeys: arrowkeys,
    showSpinners: showSpinners,
    showMeridian: showMeridian,
    showSeconds: showSeconds,
    meridians: meridians,
    min: min,
    max: max
  };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */


function timepickerControls(value, state) {
  /** @type {?} */
  var hoursPerDay = 24;
  /** @type {?} */

  var hoursPerDayHalf = 12;
  var min = state.min,
      max = state.max,
      hourStep = state.hourStep,
      minuteStep = state.minuteStep,
      secondsStep = state.secondsStep,
      showSeconds = state.showSeconds;
  /** @type {?} */

  var res = {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  };

  if (!value) {
    return res;
  } // compare dates


  if (max) {
    /** @type {?} */
    var _newHour = changeTime(value, {
      hour: hourStep
    });

    res.canIncrementHours = max > _newHour && value.getHours() + hourStep < hoursPerDay;

    if (!res.canIncrementHours) {
      /** @type {?} */
      var _newMinutes = changeTime(value, {
        minute: minuteStep
      });

      res.canIncrementMinutes = showSeconds ? max > _newMinutes : max >= _newMinutes;
    }

    if (!res.canIncrementMinutes) {
      /** @type {?} */
      var _newSeconds = changeTime(value, {
        seconds: secondsStep
      });

      res.canIncrementSeconds = max >= _newSeconds;
    }

    if (value.getHours() < hoursPerDayHalf) {
      res.canToggleMeridian = changeTime(value, {
        hour: hoursPerDayHalf
      }) < max;
    }
  }

  if (min) {
    /** @type {?} */
    var _newHour2 = changeTime(value, {
      hour: -hourStep
    });

    res.canDecrementHours = min < _newHour2;

    if (!res.canDecrementHours) {
      /** @type {?} */
      var _newMinutes2 = changeTime(value, {
        minute: -minuteStep
      });

      res.canDecrementMinutes = showSeconds ? min < _newMinutes2 : min <= _newMinutes2;
    }

    if (!res.canDecrementMinutes) {
      /** @type {?} */
      var _newSeconds2 = changeTime(value, {
        seconds: -secondsStep
      });

      res.canDecrementSeconds = min <= _newSeconds2;
    }

    if (value.getHours() >= hoursPerDayHalf) {
      res.canToggleMeridian = changeTime(value, {
        hour: -hoursPerDayHalf
      }) > min;
    }
  }

  return res;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Provides default configuration values for timepicker
 */


var TimepickerConfig = function TimepickerConfig() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TimepickerConfig);

  /**
   * hours change step
   */
  this.hourStep = 1;
  /**
   * minutes change step
   */

  this.minuteStep = 5;
  /**
   * seconds changes step
   */

  this.secondsStep = 10;
  /**
   * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
   */

  this.showMeridian = true;
  /**
   * meridian labels based on locale
   */

  this.meridians = ['AM', 'PM'];
  /**
   * if true hours and minutes fields will be readonly
   */

  this.readonlyInput = false;
  /**
   * if true hours and minutes fields will be disabled
   */

  this.disabled = false;
  /**
   * if true scroll inside hours and minutes inputs will change time
   */

  this.mousewheel = true;
  /**
   * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
   */

  this.arrowkeys = true;
  /**
   * if true spinner arrows above and below the inputs will be shown
   */

  this.showSpinners = true;
  /**
   * show seconds in timepicker
   */

  this.showSeconds = false;
  /**
   * show minutes in timepicker
   */

  this.showMinutes = true;
  /**
   * placeholder for hours field in timepicker
   */

  this.hoursPlaceholder = 'HH';
  /**
   * placeholder for minutes field in timepicker
   */

  this.minutesPlaceholder = 'MM';
  /**
   * placeholder for seconds field in timepicker
   */

  this.secondsPlaceholder = 'SS';
  /**
   * hours aria label
   */

  this.ariaLabelHours = 'hours';
  /**
   * minutes aria label
   */

  this.ariaLabelMinutes = 'minutes';
  /**
   * seconds aria label
   */

  this.ariaLabelSeconds = 'seconds';
};

TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) {
  return new (t || TimepickerConfig)();
};
/** @nocollapse */


TimepickerConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
  factory: function TimepickerConfig_Factory() {
    return new TimepickerConfig();
  },
  token: TimepickerConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TimepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TimepickerState = function TimepickerState() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TimepickerState);
};

if (false) {}
/** @type {?} */


var initialState = {
  value: null,
  config: new TimepickerConfig(),
  controls: {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  }
}; // tslint:disable-next-line:cyclomatic-complexity

/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */

function timepickerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TimepickerActions.WRITE_VALUE:
      {
        return Object.assign({}, state, {
          value: action.payload
        });
      }

    case TimepickerActions.CHANGE_HOURS:
      {
        if (!canChangeValue(state.config, action.payload) || !canChangeHours(action.payload, state.controls)) {
          return state;
        }
        /** @type {?} */


        var _newTime = changeTime(state.value, {
          hour: action.payload.step
        });

        if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
          return state;
        }

        return Object.assign({}, state, {
          value: _newTime
        });
      }

    case TimepickerActions.CHANGE_MINUTES:
      {
        if (!canChangeValue(state.config, action.payload) || !canChangeMinutes(action.payload, state.controls)) {
          return state;
        }
        /** @type {?} */


        var _newTime2 = changeTime(state.value, {
          minute: action.payload.step
        });

        if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime2)) {
          return state;
        }

        return Object.assign({}, state, {
          value: _newTime2
        });
      }

    case TimepickerActions.CHANGE_SECONDS:
      {
        if (!canChangeValue(state.config, action.payload) || !canChangeSeconds(action.payload, state.controls)) {
          return state;
        }
        /** @type {?} */


        var _newTime3 = changeTime(state.value, {
          seconds: action.payload.step
        });

        if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime3)) {
          return state;
        }

        return Object.assign({}, state, {
          value: _newTime3
        });
      }

    case TimepickerActions.SET_TIME_UNIT:
      {
        if (!canChangeValue(state.config)) {
          return state;
        }
        /** @type {?} */


        var _newTime4 = setTime(state.value, action.payload);

        return Object.assign({}, state, {
          value: _newTime4
        });
      }

    case TimepickerActions.UPDATE_CONTROLS:
      {
        /** @type {?} */
        var _newControlsState = timepickerControls(state.value, action.payload);
        /** @type {?} */


        var _newState = {
          value: state.value,
          config: action.payload,
          controls: _newControlsState
        };

        if (state.config.showMeridian !== _newState.config.showMeridian) {
          if (state.value) {
            _newState.value = new Date(state.value);
          }
        }

        return Object.assign({}, state, _newState);
      }

    default:
      return state;
  }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TimepickerStore = /*#__PURE__*/function (_MiniStore) {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(TimepickerStore, _MiniStore);

  var _super = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(TimepickerStore);

  function TimepickerStore() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TimepickerStore);

    /** @type {?} */
    var _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
      type: '[mini-ngrx] dispatcher init'
    });
    /** @type {?} */


    var state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_7__["MiniState"](initialState, _dispatcher, timepickerReducer);
    return _super.call(this, _dispatcher, timepickerReducer, state);
  }

  return TimepickerStore;
}(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_7__["MiniStore"]);

TimepickerStore.ɵfac = function TimepickerStore_Factory(t) {
  return new (t || TimepickerStore)();
};

TimepickerStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: TimepickerStore,
  factory: TimepickerStore.ɵfac
});
/** @nocollapse */

TimepickerStore.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TimepickerStore, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return TimepickerComponent;
  }),
  multi: true
};

var TimepickerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} _config
   * @param {?} _cd
   * @param {?} _store
   * @param {?} _timepickerActions
   */
  function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
    var _this = this;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TimepickerComponent);

    this._cd = _cd;
    this._store = _store;
    this._timepickerActions = _timepickerActions;
    /**
     * emits true if value is a valid date
     */

    this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // min\max validation for input fields

    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false; // control value accessor methods
    // tslint:disable-next-line:no-any

    this.onChange = Function.prototype; // tslint:disable-next-line:no-any

    this.onTouched = Function.prototype;
    Object.assign(this, _config);
    this.timepickerSub = _store.select(
    /**
    * @param {?} state
    * @return {?}
    */
    function (state) {
      return state.value;
    }).subscribe(
    /**
    * @param {?} value
    * @return {?}
    */
    function (value) {
      // update UI values if date changed
      _this._renderTime(value);

      _this.onChange(value);

      _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
    });

    _store.select(
    /**
    * @param {?} state
    * @return {?}
    */
    function (state) {
      return state.controls;
    }).subscribe(
    /**
    * @param {?} controlsState
    * @return {?}
    */
    function (controlsState) {
      _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));

      Object.assign(_this, controlsState);

      _cd.markForCheck();
    });
  }
  /**
   * @deprecated - please use `isEditable` instead
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TimepickerComponent, [{
    key: "resetValidation",

    /**
     * @return {?}
     */
    value: function resetValidation() {
      this.invalidHours = false;
      this.invalidMinutes = false;
      this.invalidSeconds = false;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isPM",
    value: function isPM() {
      return this.showMeridian && this.meridian === this.meridians[1];
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "prevDef",
    value: function prevDef($event) {
      $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */

  }, {
    key: "wheelSign",
    value: function wheelSign($event) {
      return Math.sign($event.deltaY) * -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */

  }, {
    key: "changeHours",
    value: function changeHours(step) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.resetValidation();

      this._store.dispatch(this._timepickerActions.changeHours({
        step: step,
        source: source
      }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */

  }, {
    key: "changeMinutes",
    value: function changeMinutes(step) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.resetValidation();

      this._store.dispatch(this._timepickerActions.changeMinutes({
        step: step,
        source: source
      }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */

  }, {
    key: "changeSeconds",
    value: function changeSeconds(step) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.resetValidation();

      this._store.dispatch(this._timepickerActions.changeSeconds({
        step: step,
        source: source
      }));
    }
    /**
     * @param {?} hours
     * @return {?}
     */

  }, {
    key: "updateHours",
    value: function updateHours(hours) {
      this.resetValidation();
      this.hours = hours;
      /** @type {?} */

      var isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();

      if (!isValid) {
        this.invalidHours = true;
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }

      this._updateTime();
    }
    /**
     * @param {?} minutes
     * @return {?}
     */

  }, {
    key: "updateMinutes",
    value: function updateMinutes(minutes) {
      this.resetValidation();
      this.minutes = minutes;
      /** @type {?} */

      var isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();

      if (!isValid) {
        this.invalidMinutes = true;
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }

      this._updateTime();
    }
    /**
     * @param {?} seconds
     * @return {?}
     */

  }, {
    key: "updateSeconds",
    value: function updateSeconds(seconds) {
      this.resetValidation();
      this.seconds = seconds;
      /** @type {?} */

      var isValid = isSecondInputValid(this.seconds) && this.isValidLimit();

      if (!isValid) {
        this.invalidSeconds = true;
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }

      this._updateTime();
    }
    /**
     * @return {?}
     */

  }, {
    key: "isValidLimit",
    value: function isValidLimit() {
      return isInputLimitValid({
        hour: this.hours,
        minute: this.minutes,
        seconds: this.seconds,
        isPM: this.isPM()
      }, this.max, this.min);
    }
    /**
     * @return {?}
     */

  }, {
    key: "_updateTime",
    value: function _updateTime() {
      /** @type {?} */
      var _seconds = this.showSeconds ? this.seconds : void 0;
      /** @type {?} */


      var _minutes = this.showMinutes ? this.minutes : void 0;

      if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
        this.isValid.emit(false);
        this.onChange(null);
        return;
      }

      this._store.dispatch(this._timepickerActions.setTime({
        hour: this.hours,
        minute: this.minutes,
        seconds: this.seconds,
        isPM: this.isPM()
      }));
    }
    /**
     * @return {?}
     */

  }, {
    key: "toggleMeridian",
    value: function toggleMeridian() {
      if (!this.showMeridian || !this.isEditable) {
        return;
      }
      /** @type {?} */


      var _hoursPerDayHalf = 12;

      this._store.dispatch(this._timepickerActions.changeHours({
        step: _hoursPerDayHalf,
        source: ''
      }));
    }
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(obj) {
      if (isValidDate(obj)) {
        this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
      } else if (obj == null) {
        this._store.dispatch(this._timepickerActions.writeValue(null));
      }
    }
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;

      this._cd.markForCheck();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.timepickerSub.unsubscribe();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_renderTime",
    value: function _renderTime(value) {
      if (!isValidDate(value)) {
        this.hours = '';
        this.minutes = '';
        this.seconds = '';
        this.meridian = this.meridians[0];
        return;
      }
      /** @type {?} */


      var _value = parseTime(value);
      /** @type {?} */


      var _hoursPerDayHalf = 12;
      /** @type {?} */

      var _hours = _value.getHours();

      if (this.showMeridian) {
        this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
        _hours = _hours % _hoursPerDayHalf; // should be 12 PM, not 00 PM

        if (_hours === 0) {
          _hours = _hoursPerDayHalf;
        }
      }

      this.hours = padNumber(_hours);
      this.minutes = padNumber(_value.getMinutes());
      this.seconds = padNumber(_value.getUTCSeconds());
    }
  }, {
    key: "isSpinnersVisible",
    get: function get() {
      return this.showSpinners && !this.readonlyInput;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isEditable",
    get: function get() {
      return !(this.readonlyInput || this.disabled);
    }
  }]);

  return TimepickerComponent;
}();

TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) {
  return new (t || TimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](TimepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](TimepickerStore), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](TimepickerActions));
};

TimepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TimepickerComponent,
  selectors: [["timepicker"]],
  inputs: {
    disabled: "disabled",
    hourStep: "hourStep",
    minuteStep: "minuteStep",
    secondsStep: "secondsStep",
    readonlyInput: "readonlyInput",
    mousewheel: "mousewheel",
    arrowkeys: "arrowkeys",
    showSpinners: "showSpinners",
    showMeridian: "showMeridian",
    showMinutes: "showMinutes",
    showSeconds: "showSeconds",
    meridians: "meridians",
    min: "min",
    max: "max",
    hoursPlaceholder: "hoursPlaceholder",
    minutesPlaceholder: "minutesPlaceholder",
    secondsPlaceholder: "secondsPlaceholder"
  },
  outputs: {
    isValid: "isValid"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 31,
  vars: 33,
  consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]],
  template: function TimepickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_4_listener() {
        return ctx.changeHours(ctx.hourStep);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) {
        ctx.prevDef($event);
        return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel");
      })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() {
        return ctx.changeHours(ctx.hourStep, "key");
      })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() {
        return ctx.changeHours(-ctx.hourStep, "key");
      })("change", function TimepickerComponent_Template_input_change_14_listener($event) {
        return ctx.updateHours($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "tr", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_23_listener() {
        return ctx.changeHours(-ctx.hourStep);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.showSpinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canIncrementHours || !ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMinutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMinutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSeconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSeconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMeridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMeridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("has-error", ctx.invalidHours);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-invalid", ctx.invalidHours);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.labelHours);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMinutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMinutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSeconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSeconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMeridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMeridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.showSpinners);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", !ctx.canDecrementHours || !ctx.isEditable);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMinutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMinutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSeconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSeconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMeridian);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showMeridian);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
  styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "],
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

TimepickerComponent.ctorParameters = function () {
  return [{
    type: TimepickerConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }, {
    type: TimepickerStore
  }, {
    type: TimepickerActions
  }];
};

TimepickerComponent.propDecorators = {
  hourStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  minuteStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  secondsStep: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  readonlyInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  mousewheel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  arrowkeys: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  showSpinners: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  showMeridian: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  showMinutes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  showSeconds: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  meridians: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  min: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  max: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  hoursPlaceholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  minutesPlaceholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  secondsPlaceholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }],
  isValid: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TimepickerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
    args: [{
      selector: 'timepicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
      providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
      template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\" [attr.aria-label]=\"labelHours\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\" [attr.aria-label]=\"labelMinutes\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\" [attr.aria-label]=\"labelSeconds\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
      styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: TimepickerConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }, {
      type: TimepickerStore
    }, {
      type: TimepickerActions
    }];
  }, {
    isValid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    hourStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    minuteStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    secondsStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    readonlyInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    mousewheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    arrowkeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    showSpinners: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    showMeridian: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    showMinutes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    showSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    meridians: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    hoursPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    minutesPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }],
    secondsPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TimepickerModule = /*#__PURE__*/function () {
  function TimepickerModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TimepickerModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TimepickerModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: TimepickerModule,
        providers: [TimepickerActions, TimepickerStore]
      };
    }
  }]);

  return TimepickerModule;
}();

TimepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: TimepickerModule
});
TimepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function TimepickerModule_Factory(t) {
    return new (t || TimepickerModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TimepickerModule, {
    declarations: function declarations() {
      return [TimepickerComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]];
    },
    exports: function exports() {
      return [TimepickerComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TimepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
      declarations: [TimepickerComponent],
      exports: [TimepickerComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ })

};;
//# sourceMappingURL=vendors~components-timepicker-demo-timepicker-module.js.map