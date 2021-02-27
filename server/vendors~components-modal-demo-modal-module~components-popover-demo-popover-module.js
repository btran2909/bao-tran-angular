exports.ids = ["vendors~components-modal-demo-modal-module~components-popover-demo-popover-module"];
exports.modules = {

/***/ "rXnD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/popover/fesm2015/bao-tran-angular-popover.js ***!
  \*************************************************************************************************/
/*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bao-tran-angular/component-loader */ "GFUW");
/* harmony import */ var bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
/* harmony import */ var bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bao-tran-angular/positioning */ "tRfX");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */






function PopoverContainerComponent_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}

var _c0 = ["*"];

var PopoverConfig = function PopoverConfig() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverConfig);

  /**
   * sets disable adaptive position
   */
  this.adaptivePosition = true;
  /**
   * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
   */

  this.placement = 'top';
  /**
   * Specifies events that should trigger. Supports a space separated list of
   * event names.
   */

  this.triggers = 'click';
  this.outsideClick = false;
  /**
   * delay before showing the tooltip
   */

  this.delay = 0;
};

PopoverConfig.ɵfac = function PopoverConfig_Factory(t) {
  return new (t || PopoverConfig)();
};
/** @nocollapse */


PopoverConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function PopoverConfig_Factory() {
    return new PopoverConfig();
  },
  token: PopoverConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
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


var PopoverContainerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function PopoverContainerComponent(config) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverContainerComponent);

    Object.assign(this, config);
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PopoverContainerComponent, [{
    key: "isBs3",
    get: function get() {
      return Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])();
    }
  }]);

  return PopoverContainerComponent;
}();

PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) {
  return new (t || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](PopoverConfig));
};

PopoverContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PopoverContainerComponent,
  selectors: [["popover-container"]],
  hostAttrs: ["role", "tooltip", 2, "display", "block"],
  hostVars: 7,
  hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.popoverId);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
    }
  },
  inputs: {
    placement: "placement",
    title: "title"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 1,
  consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]],
  template: function PopoverContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
  styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"],
  changeDetection: 0
});
/** @nocollapse */

PopoverContainerComponent.ctorParameters = function () {
  return [{
    type: PopoverConfig
  }];
};

PopoverContainerComponent.propDecorators = {
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'popover-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
      // tslint:disable-next-line
      host: {
        '[attr.id]': 'popoverId',
        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
        '[class.show]': '!isBs3',
        '[class.bs3]': 'isBs3',
        role: 'tooltip',
        style: 'display:block;'
      },
      template: "<div class=\"popover-arrow arrow\"></div>\r\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\r\n<div class=\"popover-content popover-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
      styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
    }]
  }], function () {
    return [{
      type: PopoverConfig
    }];
  }, {
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    title: [{
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


var id = 0;
/**
 * A lightweight, extensible directive for fancy popover creation.
 */

var PopoverDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _config
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} _viewContainerRef
   * @param {?} cis
   * @param {?} _positionService
   */
  function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverDirective);

    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._positionService = _positionService;
    /**
     * unique id popover - use for aria-describedby
     */

    this.popoverId = id++;
    /**
     * Close popover on outside click
     */

    this.outsideClick = false;
    /**
     * Css class for popover container
     */

    this.containerClass = '';
    this._isInited = false;
    this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
      provide: PopoverConfig,
      useValue: _config
    });
    Object.assign(this, _config);
    this.onShown = this._popover.onShown;
    this.onHidden = this._popover.onHidden; // fix: no focus on button on Mac OS #1795

    if (typeof window !== 'undefined') {
      _elementRef.nativeElement.addEventListener('click',
      /**
      * @return {?}
      */
      function () {
        try {
          _elementRef.nativeElement.focus();
        } catch (err) {
          return;
        }
      });
    }
  }
  /**
   * Returns whether or not the popover is currently being shown
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PopoverDirective, [{
    key: "setAriaDescribedBy",

    /**
     * Set attribute aria-describedBy for element directive and
     * set id for the popover
     * @return {?}
     */
    value: function setAriaDescribedBy() {
      this._ariaDescribedby = this.isOpen ? "ngx-popover-".concat(this.popoverId) : null;

      if (this._ariaDescribedby) {
        this._popover.instance.popoverId = this._ariaDescribedby;

        this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
      } else {
        this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
      }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var _this = this;

      if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
        return;
      }

      this._positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this.adaptivePosition
          },
          preventOverflow: {
            enabled: this.adaptivePosition
          }
        }
      });
      /** @type {?} */


      var showPopover =
      /**
      * @return {?}
      */
      function showPopover() {
        if (_this._delayTimeoutId) {
          _this._delayTimeoutId = undefined;
        }

        _this._popover.attach(PopoverContainerComponent).to(_this.container).position({
          attachment: _this.placement
        }).show({
          content: _this.popover,
          context: _this.popoverContext,
          placement: _this.placement,
          title: _this.popoverTitle,
          containerClass: _this.containerClass
        });

        if (!_this.adaptivePosition) {
          _this._positionService.calcPosition();

          _this._positionService.deletePositionElement(_this._popover._componentRef.location);
        }

        _this.isOpen = true;

        _this.setAriaDescribedBy();
      };
      /** @type {?} */


      var cancelDelayedTooltipShowing =
      /**
      * @return {?}
      */
      function cancelDelayedTooltipShowing() {
        if (_this._popoverCancelShowFn) {
          _this._popoverCancelShowFn();
        }
      };

      if (this.delay) {
        /** @type {?} */
        var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(this.delay).subscribe(
        /**
        * @return {?}
        */
        function () {
          showPopover();
          cancelDelayedTooltipShowing();
        });

        if (this.triggers) {
          Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["parseTriggers"])(this.triggers).forEach(
          /**
          * @param {?} trigger
          * @return {?}
          */
          function (trigger) {
            _this._popoverCancelShowFn = _this._renderer.listen(_this._elementRef.nativeElement, trigger.close,
            /**
            * @return {?}
            */
            function () {
              _timer.unsubscribe();

              cancelDelayedTooltipShowing();
            });
          });
        }
      } else {
        showPopover();
      }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      if (this._delayTimeoutId) {
        clearTimeout(this._delayTimeoutId);
        this._delayTimeoutId = undefined;
      }

      if (this.isOpen) {
        this._popover.hide();

        this.setAriaDescribedBy();
        this.isOpen = false;
      }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
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
     * @return {?}
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      // fix: seems there are an issue with `routerLinkActive`
      // which result in duplicated call ngOnInit without call to ngOnDestroy
      // read more: https://github.com/valor-software/bao-tran-angular/issues/1885
      if (this._isInited) {
        return;
      }

      this._isInited = true;

      this._popover.listen({
        triggers: this.triggers,
        outsideClick: this.outsideClick,
        show:
        /**
        * @return {?}
        */
        function show() {
          return _this2.show();
        },
        hide:
        /**
        * @return {?}
        */
        function hide() {
          return _this2.hide();
        }
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._popover.dispose();
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this._popover.isShown;
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
  }]);

  return PopoverDirective;
}();

PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
  return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]));
};

PopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: PopoverDirective,
  selectors: [["", "popover", ""]],
  inputs: {
    outsideClick: "outsideClick",
    containerClass: "containerClass",
    isOpen: "isOpen",
    adaptivePosition: "adaptivePosition",
    popover: "popover",
    popoverContext: "popoverContext",
    popoverTitle: "popoverTitle",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    delay: "delay"
  },
  outputs: {
    onShown: "onShown",
    onHidden: "onHidden"
  },
  exportAs: ["bs-popover"]
});
/** @nocollapse */

PopoverDirective.ctorParameters = function () {
  return [{
    type: PopoverConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
  }, {
    type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
  }, {
    type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
  }];
};

PopoverDirective.propDecorators = {
  adaptivePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  popover: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  popoverContext: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  popoverTitle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  outsideClick: [{
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
  isOpen: [{
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
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
    args: [{
      selector: '[popover]',
      exportAs: 'bs-popover'
    }]
  }], function () {
    return [{
      type: PopoverConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
    }, {
      type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]
    }, {
      type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
    }];
  }, {
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    containerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
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
    adaptivePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    popover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    popoverContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    popoverTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
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
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var PopoverModule = /*#__PURE__*/function () {
  function PopoverModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopoverModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(PopoverModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: PopoverModule,
        providers: [bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]]
      };
    }
  }]);

  return PopoverModule;
}();

PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PopoverModule
});
PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function PopoverModule_Factory(t) {
    return new (t || PopoverModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PopoverModule, {
    declarations: function declarations() {
      return [PopoverDirective, PopoverContainerComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]];
    },
    exports: function exports() {
      return [PopoverDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
      declarations: [PopoverDirective, PopoverContainerComponent],
      exports: [PopoverDirective],
      entryComponents: [PopoverContainerComponent]
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
//# sourceMappingURL=vendors~components-modal-demo-modal-module~components-popover-demo-popover-module.js.map