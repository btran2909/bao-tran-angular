exports.ids = ["vendors~components-modal-demo-modal-module"];
exports.modules = {

/***/ "mxkV":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/modal/fesm2015/bao-tran-angular-modal.js ***!
  \*********************************************************************************************/
/*! exports provided: BsModalRef, BsModalService, MODAL_CONFIG_DEFAULT_OVERRIDE, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_CONFIG_DEFAULT_OVERRIDE", function() { return MODAL_CONFIG_DEFAULT_OVERRIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CLASS_NAME; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "QdLy");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
/* harmony import */ var bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bao-tran-angular/component-loader */ "GFUW");
/* harmony import */ var bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bao-tran-angular/positioning */ "tRfX");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @template T
 */
// tslint:disable-next-line:no-any



var _c0 = ["*"];

var BsModalRef = function BsModalRef() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsModalRef);

  /**
   * Hides the modal
   */
  this.hide = Function;
  /**
   * Sets new class to modal window
   */

  this.setClass = Function;
};

BsModalRef.ɵfac = function BsModalRef_Factory(t) {
  return new (t || BsModalRef)();
};

BsModalRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BsModalRef,
  factory: BsModalRef.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsModalRef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ModalBackdropOptions =
/**
 * @param {?} options
 */
function ModalBackdropOptions(options) {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalBackdropOptions);

  this.animate = true;
  Object.assign(this, options);
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @template T
 */


var ModalOptions = function ModalOptions() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalOptions);
};

ModalOptions.ɵfac = function ModalOptions_Factory(t) {
  return new (t || ModalOptions)();
};

ModalOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ModalOptions,
  factory: ModalOptions.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalOptions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], null, null);
})();

if (false) {}
/** @type {?} */


var modalConfigDefaults = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: false,
  ignoreBackdropClick: false,
  class: '',
  animated: true,
  initialState: {},
  closeInterceptor: null
};
/** @type {?} */

var MODAL_CONFIG_DEFAULT_OVERRIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('override-default-config');
/** @type {?} */

var CLASS_NAME = {
  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
  BACKDROP: 'modal-backdrop',
  OPEN: 'modal-open',
  FADE: 'fade',
  IN: 'in',
  // bs3
  SHOW: 'show' // bs4

};
/** @type {?} */

var SELECTOR = {
  DIALOG: '.modal-dialog',
  DATA_TOGGLE: '[data-toggle="modal"]',
  DATA_DISMISS: '[data-dismiss="modal"]',
  FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */

var TRANSITION_DURATIONS = {
  MODAL: 300,
  BACKDROP: 150
};
/** @type {?} */

var DISMISS_REASONS = {
  BACKRDOP: 'backdrop-click',
  ESC: 'esc',
  BACK: 'browser-back-navigation-clicked'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var ModalContainerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} options
   * @param {?} _element
   * @param {?} _renderer
   */
  function ModalContainerComponent(options, _element, _renderer) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalContainerComponent);

    this._element = _element;
    this._renderer = _renderer;
    this.isShown = false;
    this.isModalHiding = false;
    this.clickStartedInContent = false;
    this.config = Object.assign({}, options);
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ModalContainerComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      if (this.isAnimated) {
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
      }

      this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

      setTimeout(
      /**
      * @return {?}
      */
      function () {
        _this.isShown = true;

        _this._renderer.addClass(_this._element.nativeElement, Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
      }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);

      if (document && document.body) {
        if (this.bsModalService.getModalsCount() === 1) {
          this.bsModalService.checkScrollbar();
          this.bsModalService.setScrollbar();
        }

        this._renderer.addClass(document.body, CLASS_NAME.OPEN);
      }

      if (this._element.nativeElement) {
        this._element.nativeElement.focus();
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onClickStarted",
    value: function onClickStarted(event) {
      this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onClickStop",
    value: function onClickStop(event) {
      /** @type {?} */
      var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

      if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
        this.clickStartedInContent = false;
        return;
      }

      this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
      this.hide();
    }
    /**
     * @return {?}
     */

  }, {
    key: "onPopState",
    value: function onPopState() {
      this.bsModalService.setDismissReason(DISMISS_REASONS.BACK);
      this.hide();
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onEsc",
    value: function onEsc(event) {
      if (!this.isShown) {
        return;
      } // tslint:disable-next-line:deprecation


      if (event.keyCode === 27 || event.key === 'Escape') {
        event.preventDefault();
      }

      if (this.config.keyboard && this.level === this.bsModalService.getModalsCount()) {
        this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
        this.hide();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.isShown) {
        this._hide();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      if (this.isModalHiding || !this.isShown) {
        return;
      }

      if (this.config.closeInterceptor) {
        this.config.closeInterceptor().then(
        /**
        * @return {?}
        */
        function () {
          return _this2._hide();
        },
        /**
        * @return {?}
        */
        function () {
          return undefined;
        });
        return;
      }

      this._hide();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_hide",
    value: function _hide() {
      var _this3 = this;

      this.isModalHiding = true;

      this._renderer.removeClass(this._element.nativeElement, Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);

      setTimeout(
      /**
      * @return {?}
      */
      function () {
        _this3.isShown = false;

        if (document && document.body && _this3.bsModalService.getModalsCount() === 1) {
          _this3._renderer.removeClass(document.body, CLASS_NAME.OPEN);
        }

        _this3.bsModalService.hide(_this3.config.id);

        _this3.isModalHiding = false;
      }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
  }]);

  return ModalContainerComponent;
}();

ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) {
  return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]));
};

ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ModalContainerComponent,
  selectors: [["modal-container"]],
  hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"],
  hostVars: 3,
  hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) {
        return ctx.onClickStarted($event);
      })("click", function ModalContainerComponent_click_HostBindingHandler($event) {
        return ctx.onClickStop($event);
      })("popstate", function ModalContainerComponent_popstate_HostBindingHandler() {
        return ctx.onPopState();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"])("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) {
        return ctx.onEsc($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
    }
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [["role", "document"], [1, "modal-content"]],
  template: function ModalContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("modal-dialog" + (ctx.config.class ? " " + ctx.config.class : ""));
    }
  },
  encapsulation: 2
});
/** @nocollapse */

ModalContainerComponent.ctorParameters = function () {
  return [{
    type: ModalOptions
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }];
};

ModalContainerComponent.propDecorators = {
  onClickStarted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['mousedown', ['$event']]
  }],
  onClickStop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['click', ['$event']]
  }],
  onPopState: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['window:popstate']
  }],
  onEsc: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['window:keydown.esc', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'modal-container',
      template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
      host: {
        class: 'modal',
        role: 'dialog',
        tabindex: '-1',
        '[attr.aria-modal]': 'true',
        '[attr.aria-labelledby]': 'config.ariaLabelledBy',
        '[attr.aria-describedby]': 'config.ariaDescribedby'
      }
    }]
  }], function () {
    return [{
      type: ModalOptions
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }];
  }, {
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['mousedown', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['click', ['$event']]
    }],

    /**
     * @return {?}
     */
    onPopState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['window:popstate']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['window:keydown.esc', ['$event']]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * This component will be added as background layout for modals if enabled
 */


var ModalBackdropComponent = /*#__PURE__*/function () {
  /**
   * @param {?} element
   * @param {?} renderer
   */
  function ModalBackdropComponent(element, renderer) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalBackdropComponent);

    this._isShown = false;
    this.element = element;
    this.renderer = renderer;
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ModalBackdropComponent, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {
      if (this.isAnimated) {
        this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.FADE));
        bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].reflow(this.element.nativeElement);
      }

      this.isShown = true;
    }
  }, {
    key: "isAnimated",
    get: function get() {
      return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._isAnimated = value; // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
    }
    /**
     * @return {?}
     */

  }, {
    key: "isShown",
    get: function get() {
      return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._isShown = value;

      if (value) {
        this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
      } else {
        this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.IN));
      }

      if (!Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])()) {
        if (value) {
          this.renderer.addClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
        } else {
          this.renderer.removeClass(this.element.nativeElement, "".concat(CLASS_NAME.SHOW));
        }
      }
    }
  }]);

  return ModalBackdropComponent;
}();

ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) {
  return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]));
};

ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ModalBackdropComponent,
  selectors: [["bs-modal-backdrop"]],
  hostAttrs: [1, "modal-backdrop"],
  decls: 0,
  vars: 0,
  template: function ModalBackdropComponent_Template(rf, ctx) {},
  encapsulation: 2
});
/** @nocollapse */

ModalBackdropComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalBackdropComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'bs-modal-backdrop',
      template: ' ',
      host: {
        class: CLASS_NAME.BACKDROP
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var TRANSITION_DURATION = 300;
/** @type {?} */

var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */

var ModalDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _element
   * @param {?} _viewContainerRef
   * @param {?} _renderer
   * @param {?} clf
   * @param {?} modalDefaultOption
   */
  function ModalDirective(_element, _viewContainerRef, _renderer, clf, modalDefaultOption) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalDirective);

    this._element = _element;
    this._renderer = _renderer;
    /**
     * This event fires immediately when the `show` instance method is called.
     */

    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event is fired when the modal has been made visible to the user
     * (will wait for CSS transitions to complete)
     */

    this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event is fired immediately when
     * the hide instance method has been called.
     */

    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event is fired when the modal has finished being
     * hidden from the user (will wait for CSS transitions to complete).
     */

    this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this._isShown = false;
    this.isBodyOverflowing = false;
    this.originalBodyPadding = 0;
    this.scrollbarWidth = 0;
    this.timerHideModal = 0;
    this.timerRmBackDrop = 0;
    this.isNested = false;
    this.clickStartedInContent = false;
    this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    this._config = modalDefaultOption || modalConfigDefaults;
  }
  /**
   * allows to set modal configuration via element property
   * @param {?} conf
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ModalDirective, [{
    key: "onClickStarted",

    /**
     * @param {?} event
     * @return {?}
     */
    value: function onClickStarted(event) {
      this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onClickStop",
    value: function onClickStop(event) {
      /** @type {?} */
      var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;

      if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || !clickedInBackdrop) {
        this.clickStartedInContent = false;
        return;
      }

      this.dismissReason = DISMISS_REASONS.BACKRDOP;
      this.hide(event);
    } // todo: consider preventing default and stopping propagation

    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onEsc",
    value: function onEsc(event) {
      if (!this._isShown) {
        return;
      } // tslint:disable-next-line:deprecation


      if (event.keyCode === 27 || event.key === 'Escape') {
        event.preventDefault();
      }

      if (this.config.keyboard) {
        this.dismissReason = DISMISS_REASONS.ESC;
        this.hide();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.config = void 0;

      if (this._isShown) {
        this._isShown = false;
        this.hideModal();

        this._backdrop.dispose();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this4 = this;

      this._config = this._config || this.getConfig();
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        if (_this4._config.show) {
          _this4.show();
        }
      }, 0);
    }
    /* Public methods */

    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      return this._isShown ? this.hide() : this.show();
    }
    /**
     * Allows to manually open modal
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var _this5 = this;

      this.dismissReason = null;
      this.onShow.emit(this);

      if (this._isShown) {
        return;
      }

      clearTimeout(this.timerHideModal);
      clearTimeout(this.timerRmBackDrop);
      this._isShown = true;
      this.checkScrollbar();
      this.setScrollbar();

      if (bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"] && bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body) {
        if (bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
          this.isNested = true;
        } else {
          this._renderer.addClass(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body, CLASS_NAME.OPEN);
        }
      }

      this.showBackdrop(
      /**
      * @return {?}
      */
      function () {
        _this5.showElement();
      });
    }
    /**
     * Check if we can close the modal
     * @param {?=} event
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide(event) {
      var _this6 = this;

      if (!this._isShown) {
        return;
      }

      if (event) {
        event.preventDefault();
      }

      if (this.config.closeInterceptor) {
        this.config.closeInterceptor().then(
        /**
        * @return {?}
        */
        function () {
          return _this6._hide();
        },
        /**
        * @return {?}
        */
        function () {
          return undefined;
        });
        return;
      }

      this._hide();
    }
    /** Private methods @internal */

    /**
     *  Manually close modal
     * \@internal
     * @protected
     * @return {?}
     */

  }, {
    key: "_hide",
    value: function _hide() {
      var _this7 = this;

      this.onHide.emit(this);
      bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["window"].clearTimeout(this.timerHideModal);
      bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["window"].clearTimeout(this.timerRmBackDrop);
      this._isShown = false;

      this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);

      if (!Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])()) {
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
      } // this._addClassIn = false;


      if (this._config.animated) {
        this.timerHideModal = bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["window"].setTimeout(
        /**
        * @return {?}
        */
        function () {
          return _this7.hideModal();
        }, TRANSITION_DURATION);
      } else {
        this.hideModal();
      }
    }
    /**
     * @protected
     * @param {?=} config
     * @return {?}
     */

  }, {
    key: "getConfig",
    value: function getConfig(config) {
      return Object.assign({}, this._config, config);
    }
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */

  }, {
    key: "showElement",
    value: function showElement() {
      var _this8 = this;

      // todo: replace this with component loader usage
      if (!this._element.nativeElement.parentNode || this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        if (bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"] && bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body) {
          bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body.appendChild(this._element.nativeElement);
        }
      }

      this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');

      this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');

      this._renderer.setStyle(this._element.nativeElement, 'display', 'block');

      this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);

      if (this._config.animated) {
        bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].reflow(this._element.nativeElement);
      } // this._addClassIn = true;


      this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);

      if (!Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])()) {
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
      }
      /** @type {?} */


      var transitionComplete =
      /**
      * @return {?}
      */
      function transitionComplete() {
        if (_this8._config.focus) {
          _this8._element.nativeElement.focus();
        }

        _this8.onShown.emit(_this8);
      };

      if (this._config.animated) {
        setTimeout(transitionComplete, TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */

  }, {
    key: "hideModal",
    value: function hideModal() {
      var _this9 = this;

      this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');

      this._renderer.setStyle(this._element.nativeElement, 'display', 'none');

      this.showBackdrop(
      /**
      * @return {?}
      */
      function () {
        if (!_this9.isNested) {
          if (bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"] && bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body) {
            _this9._renderer.removeClass(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body, CLASS_NAME.OPEN);
          }

          _this9.resetScrollbar();
        }

        _this9.resetAdjustments();

        _this9.focusOtherModal();

        _this9.onHidden.emit(_this9);
      });
    } // todo: original show was calling a callback when done, but we can use
    // promise

    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */

  }, {
    key: "showBackdrop",
    value: function showBackdrop(callback) {
      var _this10 = this;

      if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
        this.removeBackdrop();

        this._backdrop.attach(ModalBackdropComponent).to('body').show({
          isAnimated: this._config.animated
        });

        this.backdrop = this._backdrop._componentRef;

        if (!callback) {
          return;
        }

        if (!this._config.animated) {
          callback();
          return;
        }

        setTimeout(callback, BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this.backdrop) {
        this.backdrop.instance.isShown = false;
        /** @type {?} */

        var callbackRemove =
        /**
        * @return {?}
        */
        function callbackRemove() {
          _this10.removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (this.backdrop.instance.isAnimated) {
          this.timerRmBackDrop = bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */

  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      this._backdrop.hide();
    }
    /**
     * Events tricks
     * @protected
     * @return {?}
     */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }

  }, {
    key: "focusOtherModal",
    value: function focusOtherModal() {
      if (this._element.nativeElement.parentElement == null) {
        return;
      }
      /** @type {?} */


      var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');

      if (!otherOpenedModals.length) {
        return;
      }

      otherOpenedModals[otherOpenedModals.length - 1].focus();
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */

  }, {
    key: "resetAdjustments",
    value: function resetAdjustments() {
      this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');

      this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /** Scroll bar tricks */

    /**
     * \@internal
     * @protected
     * @return {?}
     */

  }, {
    key: "checkScrollbar",
    value: function checkScrollbar() {
      this.isBodyOverflowing = bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body.clientWidth < bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["window"].innerWidth;
      this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "setScrollbar",
    value: function setScrollbar() {
      if (!bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"]) {
        return;
      }

      this.originalBodyPadding = parseInt(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["window"].getComputedStyle(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body).getPropertyValue('padding-right') || 0, 10);

      if (this.isBodyOverflowing) {
        bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
      }
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "resetScrollbar",
    value: function resetScrollbar() {
      bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
    } // thx d.walsh

    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      /** @type {?} */
      var scrollDiv = this._renderer.createElement('div');

      this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

      this._renderer.appendChild(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body, scrollDiv);
      /** @type {?} */


      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

      this._renderer.removeChild(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["document"].body, scrollDiv);

      return scrollbarWidth;
    }
  }, {
    key: "config",
    set: function set(conf) {
      this._config = this.getConfig(conf);
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._config;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isShown",
    get: function get() {
      return this._isShown;
    }
  }]);

  return ModalDirective;
}();

ModalDirective.ɵfac = function ModalDirective_Factory(t) {
  return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8));
};

ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ModalDirective,
  selectors: [["", "bsModal", ""]],
  hostBindings: function ModalDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) {
        return ctx.onClickStarted($event);
      })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) {
        return ctx.onClickStop($event);
      })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) {
        return ctx.onEsc($event);
      });
    }
  },
  inputs: {
    config: "config",
    closeInterceptor: "closeInterceptor"
  },
  outputs: {
    onShow: "onShow",
    onShown: "onShown",
    onHide: "onHide",
    onHidden: "onHidden"
  },
  exportAs: ["bs-modal"]
});
/** @nocollapse */

ModalDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
  }, {
    type: ModalOptions,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
    }]
  }];
};

ModalDirective.propDecorators = {
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  closeInterceptor: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  onShow: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  onHide: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  onClickStarted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['mousedown', ['$event']]
  }],
  onClickStop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['mouseup', ['$event']]
  }],
  onEsc: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['keydown.esc', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[bsModal]',
      exportAs: 'bs-modal'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
    }, {
      type: ModalOptions,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
      }]
    }];
  }, {
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['mousedown', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['mouseup', ['$event']]
    }],
    // todo: consider preventing default and stopping propagation

    /**
     * @param {?} event
     * @return {?}
     */
    onEsc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['keydown.esc', ['$event']]
    }],
    closeInterceptor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var BsModalService = /*#__PURE__*/function () {
  /**
   * @param {?} rendererFactory
   * @param {?} clf
   * @param {?} modalDefaultOption
   */
  function BsModalService(rendererFactory, clf, modalDefaultOption) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsModalService);

    this.clf = clf;
    this.modalDefaultOption = modalDefaultOption; // tslint:disable-next-line:no-any

    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-next-line:no-any

    this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-next-line:no-any

    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-next-line:no-any

    this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.isBodyOverflowing = false;
    this.originalBodyPadding = 0;
    this.scrollbarWidth = 0;
    this.modalsCount = 0;
    this.lastDismissReason = null;
    this.loaders = [];
    this._backdropLoader = this.clf.createLoader(null, null, null);
    this._renderer = rendererFactory.createRenderer(null, null);
    this.config = modalDefaultOption ? Object.assign({}, modalConfigDefaults, modalDefaultOption) : modalConfigDefaults;
  }
  /**
   * Shows a modal
   * @template T
   * @param {?} content
   * @param {?=} config
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BsModalService, [{
    key: "show",
    value: function show( // tslint:disable-next-line:no-any
    content, config) {
      this.modalsCount++;

      this._createLoaders();
      /** @type {?} */


      var id = (config === null || config === void 0 ? void 0 : config.id) || new Date().getUTCMilliseconds();
      this.config = this.modalDefaultOption ? Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) : Object.assign({}, modalConfigDefaults, config);
      this.config.id = id;

      this._showBackdrop();

      this.lastDismissReason = null;
      return this._showModal(content);
    }
    /**
     * @param {?=} id
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide(id) {
      var _this11 = this;

      if (this.modalsCount === 1 || id == null) {
        this._hideBackdrop();

        this.resetScrollbar();
      }

      this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        _this11._hideModal(id);

        _this11.removeLoaders(id);
      }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    /**
     * @return {?}
     */

  }, {
    key: "_showBackdrop",
    value: function _showBackdrop() {
      /** @type {?} */
      var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
      /** @type {?} */

      var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;

      if (this.modalsCount === 1) {
        this.removeBackdrop();

        if (isBackdropEnabled && isBackdropInDOM) {
          this._backdropLoader.attach(ModalBackdropComponent).to('body').show({
            isAnimated: this.config.animated
          });

          this.backdropRef = this._backdropLoader._componentRef;
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "_hideBackdrop",
    value: function _hideBackdrop() {
      var _this12 = this;

      if (!this.backdropRef) {
        return;
      }

      this.backdropRef.instance.isShown = false;
      /** @type {?} */

      var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        return _this12.removeBackdrop();
      }, duration);
    } // tslint:disable-next-line:no-any

    /**
     * @param {?} content
     * @return {?}
     */

  }, {
    key: "_showModal",
    value: function _showModal(content) {
      var _a;
      /** @type {?} */


      var modalLoader = this.loaders[this.loaders.length - 1];

      if (this.config && this.config.providers) {
        var _iterator = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this.config.providers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var provider = _step.value;
            modalLoader.provide(provider);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      /** @type {?} */


      var bsModalRef = new BsModalRef();
      /** @type {?} */

      var modalContainerRef = modalLoader.provide({
        provide: ModalOptions,
        useValue: this.config
      }).provide({
        provide: BsModalRef,
        useValue: bsModalRef
      }).attach(ModalContainerComponent).to('body');

      bsModalRef.hide =
      /**
      * @return {?}
      */
      function () {
        return modalContainerRef.instance.hide();
      };

      bsModalRef.setClass =
      /**
      * @param {?} newClass
      * @return {?}
      */
      function (newClass) {
        modalContainerRef.instance.config.class = newClass;
      };

      bsModalRef.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      bsModalRef.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
      this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden); // call 'show' method after assign setClass in bsModalRef.
      // it makes modal component's bsModalRef available to call setClass method

      modalContainerRef.show({
        content: content,
        isAnimated: this.config.animated,
        initialState: this.config.initialState,
        bsModalService: this,
        id: this.config.id
      });
      modalContainerRef.instance.level = this.getModalsCount();
      bsModalRef.content = modalLoader.getInnerComponent() || null;
      bsModalRef.id = (_a = modalContainerRef.instance.config) === null || _a === void 0 ? void 0 : _a.id;
      return bsModalRef;
    }
    /**
     * @param {?=} id
     * @return {?}
     */

  }, {
    key: "_hideModal",
    value: function _hideModal(id) {
      if (id != null) {
        /** @type {?} */
        var indexToRemove = this.loaders.findIndex(
        /**
        * @param {?} loader
        * @return {?}
        */
        function (loader) {
          return loader.instance.config.id === id;
        });
        /** @type {?} */

        var modalLoader = this.loaders[indexToRemove];

        if (modalLoader) {
          modalLoader.hide(id);
        }
      } else {
        this.loaders.forEach(
        /**
        * @param {?} loader
        * @return {?}
        */
        function (loader) {
          loader.hide(loader.instance.config.id);
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "getModalsCount",
    value: function getModalsCount() {
      return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */

  }, {
    key: "setDismissReason",
    value: function setDismissReason(reason) {
      this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */

  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      this._renderer.removeClass(document.body, CLASS_NAME.OPEN);

      this._backdropLoader.hide();

      this.backdropRef = null;
    }
    /** Checks if the body is overflowing and sets scrollbar width */

    /**
     * \@internal
     * @return {?}
     */

  }, {
    key: "checkScrollbar",
    value: function checkScrollbar() {
      this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */

  }, {
    key: "setScrollbar",
    value: function setScrollbar() {
      if (!document) {
        return;
      }

      this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);

      if (this.isBodyOverflowing) {
        document.body.style.paddingRight = "".concat(this.originalBodyPadding + this.scrollbarWidth, "px");
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "resetScrollbar",
    value: function resetScrollbar() {
      document.body.style.paddingRight = "".concat(this.originalBodyPadding, "px");
    } // thx d.walsh

    /**
     * @private
     * @return {?}
     */

  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      /** @type {?} */
      var scrollDiv = this._renderer.createElement('div');

      this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);

      this._renderer.appendChild(document.body, scrollDiv);
      /** @type {?} */


      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

      this._renderer.removeChild(document.body, scrollDiv);

      return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_createLoaders",
    value: function _createLoaders() {
      /** @type {?} */
      var loader = this.clf.createLoader(null, null, null);
      this.copyEvent(loader.onBeforeShow, this.onShow);
      this.copyEvent(loader.onShown, this.onShown);
      this.copyEvent(loader.onBeforeHide, this.onHide);
      this.copyEvent(loader.onHidden, this.onHidden);
      this.loaders.push(loader);
    }
    /**
     * @private
     * @param {?=} id
     * @return {?}
     */

  }, {
    key: "removeLoaders",
    value: function removeLoaders(id) {
      if (id != null) {
        /** @type {?} */
        var indexToRemove = this.loaders.findIndex(
        /**
        * @param {?} loader
        * @return {?}
        */
        function (loader) {
          return loader.instance.config.id === id;
        });

        if (indexToRemove >= 0) {
          this.loaders.splice(indexToRemove, 1);
          this.loaders.forEach(
          /**
          * @param {?} loader
          * @param {?} i
          * @return {?}
          */
          function (loader, i) {
            loader.instance.level = i + 1;
          });
        }
      } else {
        this.loaders.splice(0, this.loaders.length);
      }
    } // tslint:disable-next-line:no-any

    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */

  }, {
    key: "copyEvent",
    value: function copyEvent(from, to) {
      var _this13 = this;

      from.subscribe(
      /**
      * @param {?} data
      * @return {?}
      */
      function (data) {
        to.emit(_this13.lastDismissReason || data);
      });
    }
  }]);

  return BsModalService;
}();

BsModalService.ɵfac = function BsModalService_Factory(t) {
  return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8));
};

BsModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BsModalService,
  factory: BsModalService.ɵfac
});
/** @nocollapse */

BsModalService.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"]
  }, {
    type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
  }, {
    type: ModalOptions,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsModalService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"]
    }, {
      type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
    }, {
      type: ModalOptions,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
      }]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ModalModule = /*#__PURE__*/function () {
  function ModalModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ModalModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ModalModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: ModalModule,
        providers: [BsModalService, bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]]
      };
    }
    /**
     * @return {?}
     */

  }, {
    key: "forChild",
    value: function forChild() {
      return {
        ngModule: ModalModule,
        providers: [BsModalService, bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]]
      };
    }
  }]);

  return ModalModule;
}();

ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ModalModule
});
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function ModalModule_Factory(t) {
    return new (t || ModalModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ModalModule, {
    declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
    exports: [ModalBackdropComponent, ModalDirective]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ModalModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
      exports: [ModalBackdropComponent, ModalDirective],
      entryComponents: [ModalBackdropComponent, ModalContainerComponent]
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
//# sourceMappingURL=vendors~components-modal-demo-modal-module.js.map