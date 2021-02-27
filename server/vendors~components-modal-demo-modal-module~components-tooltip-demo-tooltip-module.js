exports.ids = ["vendors~components-modal-demo-modal-module~components-tooltip-demo-tooltip-module"];
exports.modules = {

/***/ "J916":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/tooltip/fesm2015/bao-tran-angular-tooltip.js ***!
  \*************************************************************************************************/
/*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bao-tran-angular/component-loader */ "GFUW");
/* harmony import */ var bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bao-tran-angular/positioning */ "tRfX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Default values provider for tooltip
 */




var _c0 = ["*"];

var TooltipConfig = function TooltipConfig() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipConfig);

  /**
   * sets disable adaptive position
   */
  this.adaptivePosition = true;
  /**
   * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
   */

  this.placement = 'top';
  /**
   * array of event names which triggers tooltip opening
   */

  this.triggers = 'hover focus';
  /**
   * delay before showing the tooltip
   */

  this.delay = 0;
};

TooltipConfig.ɵfac = function TooltipConfig_Factory(t) {
  return new (t || TooltipConfig)();
};
/** @nocollapse */


TooltipConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function TooltipConfig_Factory() {
    return new TooltipConfig();
  },
  token: TooltipConfig,
  providedIn: "root"
});

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TooltipContainerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function TooltipContainerComponent(config) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipContainerComponent);

    Object.assign(this, config);
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(TooltipContainerComponent, [{
    key: "ngAfterViewInit",

    /**
     * @return {?}
     */
    value: function ngAfterViewInit() {
      this.classMap = {
        in: false,
        fade: false
      };
      this.classMap[this.placement] = true;
      this.classMap["tooltip-".concat(this.placement)] = true;
      this.classMap.in = true;

      if (this.animation) {
        this.classMap.fade = true;
      }

      if (this.containerClass) {
        this.classMap[this.containerClass] = true;
      }
    }
  }, {
    key: "isBs3",
    get: function get() {
      return Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
    }
  }]);

  return TooltipContainerComponent;
}();

TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) {
  return new (t || TooltipContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](TooltipConfig));
};

TooltipContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TooltipContainerComponent,
  selectors: [["bs-tooltip-container"]],
  hostAttrs: ["role", "tooltip"],
  hostVars: 7,
  hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
    }
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]],
  template: function TooltipContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"],
  changeDetection: 0
});
/** @nocollapse */

TooltipContainerComponent.ctorParameters = function () {
  return [{
    type: TooltipConfig
  }];
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var id = 0;

var TooltipDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _viewContainerRef
   * @param {?} cis
   * @param {?} config
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} _positionService
   */
  function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipDirective);

    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    this.tooltipId = id++;
    /**
     * Fired when tooltip content changes
     */

    /* tslint:disable-next-line:no-any */

    this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /**
     * Css class for tooltip container
     */

    this.containerClass = '';
    /**
     * @deprecated - removed, will be added to configuration
     */

    this.tooltipAnimation = true;
    /**
     * @deprecated
     */

    this.tooltipFadeDuration = 150;
    /**
     * @deprecated
     */

    this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this._tooltip = cis.createLoader(this._elementRef, _viewContainerRef, this._renderer).provide({
      provide: TooltipConfig,
      useValue: config
    });
    Object.assign(this, config);
    this.onShown = this._tooltip.onShown;
    this.onHidden = this._tooltip.onHidden;
  }
  /**
   * Returns whether or not the tooltip is currently being shown
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(TooltipDirective, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {
      var _this = this;

      this._tooltip.listen({
        triggers: this.triggers,
        show:
        /**
        * @return {?}
        */
        function show() {
          return _this.show();
        }
      });
      /* tslint:disable-next-line:no-any */


      this.tooltipChange.subscribe(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        if (!value) {
          _this._tooltip.hide();
        }
      });
      this.onShown.subscribe(
      /**
      * @return {?}
      */
      function () {
        _this.setAriaDescribedBy();
      });
      this.onHidden.subscribe(
      /**
      * @return {?}
      */
      function () {
        _this.setAriaDescribedBy();
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "setAriaDescribedBy",
    value: function setAriaDescribedBy() {
      this._ariaDescribedby = this.isOpen ? "tooltip-".concat(this.tooltipId) : null;

      if (this._ariaDescribedby) {
        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
      } else {
        this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
      }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isOpen) {
        return this.hide();
      }

      this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this._positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this.adaptivePosition
          },
          preventOverflow: {
            enabled: this.adaptivePosition,
            boundariesElement: this.boundariesElement || 'scrollParent'
          }
        }
      });

      if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
        return;
      }
      /** @type {?} */


      var showTooltip =
      /**
      * @return {?}
      */
      function showTooltip() {
        if (_this2._delayTimeoutId) {
          _this2._delayTimeoutId = undefined;
        }

        _this2._tooltip.attach(TooltipContainerComponent).to(_this2.container).position({
          attachment: _this2.placement
        }).show({
          content: _this2.tooltip,
          placement: _this2.placement,
          containerClass: _this2.containerClass,
          id: "tooltip-".concat(_this2.tooltipId)
        });
      };
      /** @type {?} */


      var cancelDelayedTooltipShowing =
      /**
      * @return {?}
      */
      function cancelDelayedTooltipShowing() {
        if (_this2._tooltipCancelShowFn) {
          _this2._tooltipCancelShowFn();
        }
      };

      if (this.delay) {
        if (this._delaySubscription) {
          this._delaySubscription.unsubscribe();
        }

        this._delaySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(this.delay).subscribe(
        /**
        * @return {?}
        */
        function () {
          showTooltip();
          cancelDelayedTooltipShowing();
        });

        if (this.triggers) {
          Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["parseTriggers"])(this.triggers).forEach(
          /**
          * @param {?} trigger
          * @return {?}
          */
          function (trigger) {
            _this2._tooltipCancelShowFn = _this2._renderer.listen(_this2._elementRef.nativeElement, trigger.close,
            /**
            * @return {?}
            */
            function () {
              _this2._delaySubscription.unsubscribe();

              cancelDelayedTooltipShowing();
            });
          });
        }
      } else {
        showTooltip();
      }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      if (this._delayTimeoutId) {
        clearTimeout(this._delayTimeoutId);
        this._delayTimeoutId = undefined;
      }

      if (!this._tooltip.isShown) {
        return;
      }

      this._tooltip.instance.classMap.in = false;
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        _this3._tooltip.hide();
      }, this.tooltipFadeDuration);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._tooltip.dispose();

      this.tooltipChange.unsubscribe();

      if (this._delaySubscription) {
        this._delaySubscription.unsubscribe();
      }

      this.onShown.unsubscribe();
      this.onHidden.unsubscribe();
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this._tooltip.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    }
    /**
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "htmlContent",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
      this.tooltip = value;
    }
    /**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_placement",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
      this.placement = value;
    }
    /**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_isOpen",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
      this.isOpen = value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
      return this.isOpen;
    }
    /**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_enable",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
      this.isDisabled = !value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
      return this.isDisabled;
    }
    /**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_appendToBody",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
      this.container = value ? 'body' : this.container;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
      return this.container === 'body';
    }
    /**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_popupClass",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipClass deprecated');
    }
    /**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_tooltipContext",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipContext deprecated');
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "_tooltipPopupDelay",
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
      this.delay = value;
    }
    /**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */

  }, {
    key: "_tooltipTrigger",
    get: function get() {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
      return this.triggers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
      this.triggers = (value || '').toString();
    }
  }]);

  return TooltipDirective;
}();

TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](TooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]));
};

TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: TooltipDirective,
  selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]],
  inputs: {
    containerClass: "containerClass",
    tooltipAnimation: "tooltipAnimation",
    tooltipFadeDuration: "tooltipFadeDuration",
    isOpen: "isOpen",
    htmlContent: ["tooltipHtml", "htmlContent"],
    tooltip: "tooltip",
    _placement: ["tooltipPlacement", "_placement"],
    placement: "placement",
    _isOpen: ["tooltipIsOpen", "_isOpen"],
    _enable: ["tooltipEnable", "_enable"],
    isDisabled: "isDisabled",
    _appendToBody: ["tooltipAppendToBody", "_appendToBody"],
    container: "container",
    _popupClass: ["tooltipClass", "_popupClass"],
    _tooltipContext: ["tooltipContext", "_tooltipContext"],
    _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"],
    delay: "delay",
    _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"],
    triggers: "triggers",
    adaptivePosition: "adaptivePosition",
    boundariesElement: "boundariesElement"
  },
  outputs: {
    tooltipChange: "tooltipChange",
    tooltipStateChanged: "tooltipStateChanged",
    onShown: "onShown",
    onHidden: "onHidden"
  },
  exportAs: ["bs-tooltip"]
});
/** @nocollapse */

TooltipDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
  }, {
    type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
  }, {
    type: TooltipConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]
  }];
};

TooltipDirective.propDecorators = {
  adaptivePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  tooltip: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  tooltipChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  containerClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  boundariesElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  delay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  htmlContent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipHtml']
  }],
  _placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipPlacement']
  }],
  _isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipIsOpen']
  }],
  _enable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipEnable']
  }],
  _appendToBody: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipAppendToBody']
  }],
  tooltipAnimation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  _popupClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipClass']
  }],
  _tooltipContext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipContext']
  }],
  _tooltipPopupDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipPopupDelay']
  }],
  tooltipFadeDuration: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  _tooltipTrigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
    args: ['tooltipTrigger']
  }],
  tooltipStateChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }]
};

Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["OnChange"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)], TooltipDirective.prototype, "tooltip", void 0);
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'bs-tooltip-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      // tslint:disable-next-line
      host: {
        '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
        '[class.show]': '!isBs3',
        '[class.bs3]': 'isBs3',
        '[attr.id]': 'this.id',
        role: 'tooltip'
      },
      template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
      styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: TooltipConfig
    }];
  }, null);
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[tooltip], [tooltipHtml]',
      exportAs: 'bs-tooltip'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
    }, {
      type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
    }, {
      type: TooltipConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }, {
      type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]
    }];
  }, {
    tooltipChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    tooltipAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    tooltipFadeDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    tooltipStateChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    htmlContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipHtml']
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    _placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipPlacement']
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    _isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipIsOpen']
    }],
    _enable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipEnable']
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    _appendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipAppendToBody']
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    _popupClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipClass']
    }],
    _tooltipContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipContext']
    }],
    _tooltipPopupDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipPopupDelay']
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    _tooltipTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['tooltipTrigger']
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    adaptivePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    boundariesElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TooltipModule = /*#__PURE__*/function () {
  function TooltipModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(TooltipModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: TooltipModule,
        providers: [bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"]]
      };
    }
  }]);

  return TooltipModule;
}();

TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TooltipModule
});
TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function TooltipModule_Factory(t) {
    return new (t || TooltipModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TooltipModule, {
    declarations: function declarations() {
      return [TooltipDirective, TooltipContainerComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]];
    },
    exports: function exports() {
      return [TooltipDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
      declarations: [TooltipDirective, TooltipContainerComponent],
      exports: [TooltipDirective],
      entryComponents: [TooltipContainerComponent]
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
//# sourceMappingURL=vendors~components-modal-demo-modal-module~components-tooltip-demo-tooltip-module.js.map