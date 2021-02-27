exports.ids = ["vendors~components-buttons-demo-buttons-module"];
exports.modules = {

/***/ "4eYB":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/buttons/fesm2015/bao-tran-angular-buttons.js ***!
  \*************************************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons

/** @type {?} */


var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return ButtonCheckboxDirective;
  }),
  multi: true
};
/**
 * Add checkbox functionality to any element
 */

var ButtonCheckboxDirective = /*#__PURE__*/function () {
  function ButtonCheckboxDirective() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonCheckboxDirective);

    /**
     * Truthy value, will be set to ngModel
     */
    this.btnCheckboxTrue = true;
    /**
     * Falsy value, will be set to ngModel
     */

    this.btnCheckboxFalse = false;
    this.state = false;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
  } // view -> model

  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonCheckboxDirective, [{
    key: "onClick",
    value: function onClick() {
      if (this.isDisabled) {
        return;
      }

      this.toggle(!this.state);
      this.onChange(this.value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.toggle(this.trueValue === this.value);
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "toggle",

    /**
     * @param {?} state
     * @return {?}
     */
    value: function toggle(state) {
      this.state = state;
      this.value = this.state ? this.trueValue : this.falseValue;
    } // ControlValueAccessor
    // model -> view

    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.state = this.trueValue === value;
      this.value = value ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.isDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
  }, {
    key: "trueValue",
    get: function get() {
      return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "falseValue",
    get: function get() {
      return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
    }
  }]);

  return ButtonCheckboxDirective;
}();

ButtonCheckboxDirective.ɵfac = function ButtonCheckboxDirective_Factory(t) {
  return new (t || ButtonCheckboxDirective)();
};

ButtonCheckboxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ButtonCheckboxDirective,
  selectors: [["", "btnCheckbox", ""]],
  hostVars: 3,
  hostBindings: function ButtonCheckboxDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonCheckboxDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-pressed", ctx.state);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.state);
    }
  },
  inputs: {
    btnCheckboxTrue: "btnCheckboxTrue",
    btnCheckboxFalse: "btnCheckboxFalse"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([CHECKBOX_CONTROL_VALUE_ACCESSOR])]
});
ButtonCheckboxDirective.propDecorators = {
  btnCheckboxTrue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  btnCheckboxFalse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  state: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.active']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.aria-pressed']
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ButtonCheckboxDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[btnCheckbox]',
      providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
    }]
  }], function () {
    return [];
  }, {
    btnCheckboxTrue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    btnCheckboxFalse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['class.active']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['attr.aria-pressed']
    }],
    // view -> model

    /**
     * @return {?}
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['click']
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var RADIO_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return ButtonRadioDirective;
  }),
  multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */

var ButtonRadioDirective = /*#__PURE__*/function () {
  /**
   * @param {?} el
   * @param {?} cdr
   * @param {?} renderer
   * @param {?} group
   */
  function ButtonRadioDirective(el, cdr, renderer, group) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonRadioDirective);

    this.el = el;
    this.cdr = cdr;
    this.renderer = renderer;
    this.group = group;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.role = 'radio';
    this._hasFocus = false;
  }
  /**
   * Current value of radio component or group
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonRadioDirective, [{
    key: "toggleIfAllowed",

    /**
     * @return {?}
     */
    value: function toggleIfAllowed() {
      if (!this.canToggle()) {
        return;
      }

      this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onSpacePressed",
    value: function onSpacePressed(event) {
      this.toggleIfAllowed();
      event.preventDefault();
    }
    /**
     * @return {?}
     */

  }, {
    key: "focus",
    value: function focus() {
      this.el.nativeElement.focus();
    }
    /**
     * @return {?}
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      this._hasFocus = true;
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      this._hasFocus = false;
      this.onTouched();
    }
    /**
     * @return {?}
     */

  }, {
    key: "canToggle",
    value: function canToggle() {
      return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_onChange",
    value: function _onChange(value) {
      if (this.group) {
        this.group.value = value;
        return;
      }

      this.onTouched();
      this.onChange(value);
    } // ControlValueAccessor
    // model -> view

    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;
      this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(disabled) {
      this._disabled = disabled;

      if (disabled) {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
        return;
      }

      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }, {
    key: "value",
    get: function get() {
      return this.group ? this.group.value : this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      if (this.group) {
        this.group.value = value;
        return;
      }

      this._value = value;

      this._onChange(value);
    }
    /**
     * If `true` — radio button is disabled
     * @return {?}
     */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    ,
    set: function set(disabled) {
      this.setDisabledState(disabled);
    }
    /**
     * @return {?}
     */

  }, {
    key: "controlOrGroupDisabled",
    get: function get() {
      return this.disabled || this.group && this.group.disabled ? true : undefined;
    }
    /**
     * @return {?}
     */

  }, {
    key: "hasDisabledClass",
    get: function get() {
      // Although the radio is disabled the active radio should still stand out.
      // The disabled class will prevent this so don't add it on the active radio
      return this.controlOrGroupDisabled && !this.isActive;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isActive",
    get: function get() {
      return this.btnRadio === this.value;
    }
    /**
     * @return {?}
     */

  }, {
    key: "tabindex",
    get: function get() {
      if (this.controlOrGroupDisabled) {
        // Disabled radio buttons should not receive focus
        return undefined;
      } else if (this.isActive || this.group == null) {
        return 0;
      } else {
        return -1;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "hasFocus",
    get: function get() {
      return this._hasFocus;
    }
  }]);

  return ButtonRadioDirective;
}();

ButtonRadioDirective.ɵfac = function ButtonRadioDirective_Factory(t) {
  return new (t || ButtonRadioDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return ButtonRadioGroupDirective;
  }), 8));
};

ButtonRadioDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ButtonRadioDirective,
  selectors: [["", "btnRadio", ""]],
  hostVars: 8,
  hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonRadioDirective_click_HostBindingHandler() {
        return ctx.toggleIfAllowed();
      })("keydown.space", function ButtonRadioDirective_keydown_space_HostBindingHandler($event) {
        return ctx.onSpacePressed($event);
      })("focus", function ButtonRadioDirective_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function ButtonRadioDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx.role)("aria-disabled", ctx.controlOrGroupDisabled)("aria-checked", ctx.isActive)("tabindex", ctx.tabindex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx.hasDisabledClass)("active", ctx.isActive);
    }
  },
  inputs: {
    value: "value",
    disabled: "disabled",
    uncheckable: "uncheckable",
    btnRadio: "btnRadio"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR])]
});
/** @nocollapse */

ButtonRadioDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: ButtonRadioGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return ButtonRadioGroupDirective;
      })]
    }]
  }];
};

ButtonRadioDirective.propDecorators = {
  btnRadio: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  uncheckable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  controlOrGroupDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.aria-disabled']
  }],
  hasDisabledClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.disabled']
  }],
  isActive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.active']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.aria-checked']
  }],
  role: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.role']
  }],
  tabindex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.tabindex']
  }],
  toggleIfAllowed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['click']
  }],
  onSpacePressed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.space', ['$event']]
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['focus']
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['blur']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ButtonRadioDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[btnRadio]',
      providers: [RADIO_CONTROL_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }, {
      type: ButtonRadioGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
        /**
         * @return {?}
         */
        function () {
          return ButtonRadioGroupDirective;
        })]
      }]
    }];
  }, {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['attr.role']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    controlOrGroupDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['attr.aria-disabled']
    }],
    hasDisabledClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['class.disabled']
    }],
    isActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['class.active']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['attr.aria-checked']
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['attr.tabindex']
    }],

    /**
     * @return {?}
     */
    toggleIfAllowed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['click']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onSpacePressed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.space', ['$event']]
    }],

    /**
     * @return {?}
     */
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['focus']
    }],

    /**
     * @return {?}
     */
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['blur']
    }],
    uncheckable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    btnRadio: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],

  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return ButtonRadioGroupDirective;
  }),
  multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */

var ButtonRadioGroupDirective = /*#__PURE__*/function () {
  /**
   * @param {?} cdr
   */
  function ButtonRadioGroupDirective(cdr) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonRadioGroupDirective);

    this.cdr = cdr;
    this.onChange = Function.prototype;
    this.onTouched = Function.prototype;
    this.role = 'radiogroup';
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonRadioGroupDirective, [{
    key: "writeValue",

    /**
     * @param {?} value
     * @return {?}
     */
    value: function writeValue(value) {
      this._value = value;
      this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(disabled) {
      if (this.radioButtons) {
        this._disabled = disabled;
        this.radioButtons.forEach(
        /**
        * @param {?} buttons
        * @return {?}
        */
        function (buttons) {
          buttons.setDisabledState(disabled);
        });
        this.cdr.markForCheck();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      if (this._disabled) {
        return;
      }
      /** @type {?} */


      var activeRadio = this.getActiveOrFocusedRadio();

      if (activeRadio) {
        activeRadio.focus();
      } else {
        /** @type {?} */
        var firstEnabled = this.radioButtons.find(
        /**
        * @param {?} r
        * @return {?}
        */
        function (r) {
          return !r.disabled;
        });

        if (firstEnabled) {
          firstEnabled.focus();
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      if (this.onTouched) {
        this.onTouched();
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "selectNext",
    value: function selectNext(event) {
      this.selectInDirection('next');
      event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "selectPrevious",
    value: function selectPrevious(event) {
      this.selectInDirection('previous');
      event.preventDefault();
    }
    /**
     * @return {?}
     */

  }, {
    key: "selectInDirection",

    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    value: function selectInDirection(direction) {
      if (this._disabled) {
        return;
      }
      /**
       * @param {?} currentIndex
       * @param {?} buttonRadioDirectives
       * @return {?}
       */


      function nextIndex(currentIndex, buttonRadioDirectives) {
        /** @type {?} */
        var step = direction === 'next' ? 1 : -1;
        /** @type {?} */

        var calcIndex = (currentIndex + step) % buttonRadioDirectives.length;

        if (calcIndex < 0) {
          calcIndex = buttonRadioDirectives.length - 1;
        }

        return calcIndex;
      }
      /** @type {?} */


      var activeRadio = this.getActiveOrFocusedRadio();

      if (activeRadio) {
        /** @type {?} */
        var buttonRadioDirectives = this.radioButtons.toArray();
        /** @type {?} */

        var currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);

        for (var i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
          if (buttonRadioDirectives[i].canToggle()) {
            buttonRadioDirectives[i].toggleIfAllowed();
            buttonRadioDirectives[i].focus();
            break;
          }
        }
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getActiveOrFocusedRadio",
    value: function getActiveOrFocusedRadio() {
      return this.radioButtons.find(
      /**
      * @param {?} button
      * @return {?}
      */
      function (button) {
        return button.isActive;
      }) || this.radioButtons.find(
      /**
      * @param {?} button
      * @return {?}
      */
      function (button) {
        return button.hasFocus;
      });
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._value = value;
      this.onChange(value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "tabindex",
    get: function get() {
      if (this._disabled) {
        return null;
      } else {
        return 0;
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    }
  }]);

  return ButtonRadioGroupDirective;
}();

ButtonRadioGroupDirective.ɵfac = function ButtonRadioGroupDirective_Factory(t) {
  return new (t || ButtonRadioGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
};

ButtonRadioGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ButtonRadioGroupDirective,
  selectors: [["", "btnRadioGroup", ""]],
  contentQueries: function ButtonRadioGroupDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, ButtonRadioDirective, false);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.radioButtons = _t);
    }
  },
  hostVars: 2,
  hostBindings: function ButtonRadioGroupDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function ButtonRadioGroupDirective_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function ButtonRadioGroupDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("keydown.ArrowRight", function ButtonRadioGroupDirective_keydown_ArrowRight_HostBindingHandler($event) {
        return ctx.selectNext($event);
      })("keydown.ArrowDown", function ButtonRadioGroupDirective_keydown_ArrowDown_HostBindingHandler($event) {
        return ctx.selectNext($event);
      })("keydown.ArrowLeft", function ButtonRadioGroupDirective_keydown_ArrowLeft_HostBindingHandler($event) {
        return ctx.selectPrevious($event);
      })("keydown.ArrowUp", function ButtonRadioGroupDirective_keydown_ArrowUp_HostBindingHandler($event) {
        return ctx.selectPrevious($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR$1])]
});
/** @nocollapse */

ButtonRadioGroupDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
  }];
};

ButtonRadioGroupDirective.propDecorators = {
  role: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.role']
  }],
  radioButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
    args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return ButtonRadioDirective;
    })]
  }],
  tabindex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['attr.tabindex']
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['focus']
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['blur']
  }],
  selectNext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.ArrowRight', ['$event']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.ArrowDown', ['$event']]
  }],
  selectPrevious: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.ArrowLeft', ['$event']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
    args: ['keydown.ArrowUp', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ButtonRadioGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[btnRadioGroup]',
      providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
    }];
  }, {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['attr.role']
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['attr.tabindex']
    }],

    /**
     * @return {?}
     */
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['focus']
    }],

    /**
     * @return {?}
     */
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['blur']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    selectNext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.ArrowRight', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.ArrowDown', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    selectPrevious: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.ArrowLeft', ['$event']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
      args: ['keydown.ArrowUp', ['$event']]
    }],
    radioButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
      args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return ButtonRadioDirective;
      })]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ButtonsModule = /*#__PURE__*/function () {
  function ButtonsModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ButtonsModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ButtonsModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: ButtonsModule,
        providers: []
      };
    }
  }]);

  return ButtonsModule;
}();

ButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ButtonsModule
});
ButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function ButtonsModule_Factory(t) {
    return new (t || ButtonsModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ButtonsModule, {
    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ButtonsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
      exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
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
//# sourceMappingURL=vendors~components-buttons-demo-buttons-module.js.map