exports.ids = ["vendors~components-dropdown-demo-dropdown-module"];
exports.modules = {

/***/ "6UXF":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/dropdown/fesm2015/bao-tran-angular-dropdown.js ***!
  \***************************************************************************************************/
/*! exports provided: BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownModule, BsDropdownState, BsDropdownToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return BsDropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "QdLy");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bao-tran-angular/component-loader */ "GFUW");
/* harmony import */ var bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bao-tran-angular/positioning */ "tRfX");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Default dropdown configuration
 */




var _c0 = ["*"];

var BsDropdownConfig = function BsDropdownConfig() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsDropdownConfig);

  /**
   * default dropdown auto closing behavior
   */
  this.autoClose = true;
  /**
   * default dropdown auto closing behavior
   */

  this.insideClick = false;
  /**
   * turn on/off animation
   */

  this.isAnimated = false;
};

BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(t) {
  return new (t || BsDropdownConfig)();
};
/** @nocollapse */


BsDropdownConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function BsDropdownConfig_Factory() {
    return new BsDropdownConfig();
  },
  token: BsDropdownConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsDropdownConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
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


var BsDropdownState = function BsDropdownState() {
  var _this = this;

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsDropdownState);

  this.direction = 'down';
  this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  this.dropdownMenu = new Promise(
  /**
  * @param {?} resolve
  * @return {?}
  */
  function (resolve) {
    _this.resolveDropdownMenu = resolve;
  });
};

BsDropdownState.ɵfac = function BsDropdownState_Factory(t) {
  return new (t || BsDropdownState)();
};

BsDropdownState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BsDropdownState,
  factory: BsDropdownState.ɵfac
});
/** @nocollapse */

BsDropdownState.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsDropdownState, [{
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

/** @type {?} */


var DROPDOWN_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */

var dropdownAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
  height: 0,
  overflow: 'hidden'
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(DROPDOWN_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
  height: '*',
  overflow: 'hidden'
}))];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var BsDropdownContainerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} _state
   * @param {?} cd
   * @param {?} _renderer
   * @param {?} _element
   * @param {?} _builder
   */
  function BsDropdownContainerComponent(_state, cd, _renderer, _element, _builder) {
    var _this2 = this;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsDropdownContainerComponent);

    this._state = _state;
    this.cd = cd;
    this._renderer = _renderer;
    this._element = _element;
    this.isOpen = false;
    this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
    this._subscription = _state.isOpenChange.subscribe(
    /**
    * @param {?} value
    * @return {?}
    */
    function (value) {
      _this2.isOpen = value;
      /** @type {?} */

      var dropdown = _this2._element.nativeElement.querySelector('.dropdown-menu');

      _this2._renderer.addClass(_this2._element.nativeElement.querySelector('div'), 'open');

      if (dropdown && !Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_6__["isBs3"])()) {
        _this2._renderer.addClass(dropdown, 'show');

        if (dropdown.classList.contains('dropdown-menu-right')) {
          _this2._renderer.setStyle(dropdown, 'left', 'auto');

          _this2._renderer.setStyle(dropdown, 'right', '0');
        }

        if (_this2.direction === 'up') {
          _this2._renderer.setStyle(dropdown, 'top', 'auto');

          _this2._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
        }
      }

      if (dropdown && _this2._state.isAnimated) {
        _this2._factoryDropDownAnimation.create(dropdown).play();
      }

      _this2.cd.markForCheck();

      _this2.cd.detectChanges();
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BsDropdownContainerComponent, [{
    key: "_contains",

    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    value: function _contains(el) {
      return this._element.nativeElement.contains(el);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._subscription.unsubscribe();
    }
  }, {
    key: "direction",
    get: function get() {
      return this._state.direction;
    }
  }]);

  return BsDropdownContainerComponent;
}();

BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(t) {
  return new (t || BsDropdownContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"]));
};

BsDropdownContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BsDropdownContainerComponent,
  selectors: [["bs-dropdown-container"]],
  hostAttrs: [2, "display", "block", "position", "absolute", "z-index", "1040"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 8,
  template: function BsDropdownContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dropup", ctx.direction === "up")("dropdown", ctx.direction === "down")("show", ctx.isOpen)("open", ctx.isOpen);
    }
  },
  directives: function directives() {
    return [BsDropdownDirective];
  },
  encapsulation: 2,
  changeDetection: 0
});
/** @nocollapse */

BsDropdownContainerComponent.ctorParameters = function () {
  return [{
    type: BsDropdownState
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsDropdownContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'bs-dropdown-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
      host: {
        style: 'display:block;position: absolute;z-index: 1040'
      },
      template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content>\n    </div>\n  "
    }]
  }], function () {
    return [{
      type: BsDropdownState
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var BsDropdownDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _elementRef
   * @param {?} _renderer
   * @param {?} _viewContainerRef
   * @param {?} _cis
   * @param {?} _state
   * @param {?} _config
   * @param {?} _builder
   */
  function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsDropdownDirective);

    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._viewContainerRef = _viewContainerRef;
    this._cis = _cis;
    this._state = _state;
    this._config = _config; // todo: move to component loader

    this._isInlineOpen = false;
    this._subscriptions = [];
    this._isInited = false; // set initial dropdown state from config

    this._state.autoClose = this._config.autoClose;
    this._state.insideClick = this._config.insideClick;
    this._state.isAnimated = this._config.isAnimated;
    this._factoryDropDownAnimation = _builder.build(dropdownAnimation); // create dropdown component loader

    this._dropdown = this._cis.createLoader(this._elementRef, this._viewContainerRef, this._renderer).provide({
      provide: BsDropdownState,
      useValue: this._state
    });
    this.onShown = this._dropdown.onShown;
    this.onHidden = this._dropdown.onHidden;
    this.isOpenChange = this._state.isOpenChange;
  }
  /**
   * Indicates that dropdown will be closed on item or document click,
   * and after pressing ESC
   * @param {?} value
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BsDropdownDirective, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {
      var _this3 = this;

      // fix: seems there are an issue with `routerLinkActive`
      // which result in duplicated call ngOnInit without call to ngOnDestroy
      if (this._isInited) {
        return;
      }

      this._isInited = true; // attach DOM listeners

      this._dropdown.listen({
        // because of dropdown inline mode
        outsideClick: false,
        triggers: this.triggers,
        show:
        /**
        * @return {?}
        */
        function show() {
          return _this3.show();
        }
      }); // toggle visibility on toggle element click


      this._subscriptions.push(this._state.toggleClick.subscribe(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        return _this3.toggle(value);
      })); // hide dropdown if set disabled while opened


      this._subscriptions.push(this._state.isDisabledChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        return value;
      })).subscribe(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        return _this3.hide();
      }));
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var _this4 = this;

      if (this.isOpen || this.isDisabled) {
        return;
      }

      if (this._showInline) {
        if (!this._inlinedMenu) {
          this._state.dropdownMenu.then(
          /**
          * @param {?} dropdownMenu
          * @return {?}
          */
          function (dropdownMenu) {
            _this4._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);

            _this4._inlinedMenu = _this4._dropdown._inlineViewRef;

            _this4.addBs4Polyfills();

            _this4._renderer.addClass(_this4._inlinedMenu.rootNodes[0].parentNode, 'open');

            _this4.playAnimation();
          }) // swallow errors
          .catch();
        }

        this.addBs4Polyfills();
        this._isInlineOpen = true;
        this.onShown.emit(true);

        this._state.isOpenChange.emit(true);

        this.playAnimation();
        return;
      }

      this._state.dropdownMenu.then(
      /**
      * @param {?} dropdownMenu
      * @return {?}
      */
      function (dropdownMenu) {
        // check direction in which dropdown should be opened

        /** @type {?} */
        var _dropup = _this4.dropup || typeof _this4.dropup !== 'undefined' && _this4.dropup;

        _this4._state.direction = _dropup ? 'up' : 'down';
        /** @type {?} */

        var _placement = _this4.placement || (_dropup ? 'top start' : 'bottom start'); // show dropdown


        _this4._dropdown.attach(BsDropdownContainerComponent).to(_this4.container).position({
          attachment: _placement
        }).show({
          content: dropdownMenu.templateRef,
          placement: _placement
        });

        _this4._state.isOpenChange.emit(true);
      }) // swallow error
      .catch();
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      if (!this.isOpen) {
        return;
      }

      if (this._showInline) {
        this.removeShowClass();
        this.removeDropupStyles();
        this._isInlineOpen = false;
        this.onHidden.emit(true);
      } else {
        this._dropdown.hide();
      }

      this._state.isOpenChange.emit(false);
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * @param {?=} value
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle(value) {
      if (this.isOpen || !value) {
        return this.hide();
      }

      return this.show();
    }
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "_contains",
    value: function _contains(event) {
      return this._elementRef.nativeElement.contains(event.target) || this._dropdown.instance && this._dropdown.instance._contains(event.target);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // clean up subscriptions and destroy dropdown
      var _iterator = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this._subscriptions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sub = _step.value;
          sub.unsubscribe();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._dropdown.dispose();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "addBs4Polyfills",
    value: function addBs4Polyfills() {
      if (!Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_6__["isBs3"])()) {
        this.addShowClass();
        this.checkRightAlignment();
        this.addDropupStyles();
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "playAnimation",
    value: function playAnimation() {
      var _this5 = this;

      if (this._state.isAnimated && this._inlinedMenu) {
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this5._factoryDropDownAnimation.create(_this5._inlinedMenu.rootNodes[0]).play();
        });
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "addShowClass",
    value: function addShowClass() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "removeShowClass",
    value: function removeShowClass() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "checkRightAlignment",
    value: function checkRightAlignment() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        /** @type {?} */
        var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');

        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');

        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "addDropupStyles",
    value: function addDropupStyles() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        // a little hack to not break support of bootstrap 4 beta
        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');

        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');

        this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "removeDropupStyles",
    value: function removeDropupStyles() {
      if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
        this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');

        this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');

        this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
      }
    }
  }, {
    key: "autoClose",
    set: function set(value) {
      this._state.autoClose = value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._state.autoClose;
    }
    /**
     * Indicates that dropdown will be animated
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "isAnimated",
    set: function set(value) {
      this._state.isAnimated = value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._state.isAnimated;
    }
    /**
     * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "insideClick",
    set: function set(value) {
      this._state.insideClick = value;
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._state.insideClick;
    }
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "isDisabled",
    set: function set(value) {
      this._isDisabled = value;

      this._state.isDisabledChange.emit(value);

      if (value) {
        this.hide();
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this._isDisabled;
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */

  }, {
    key: "isOpen",
    get: function get() {
      if (this._showInline) {
        return this._isInlineOpen;
      }

      return this._dropdown.isShown;
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
     * @return {?}
     */

  }, {
    key: "isBs4",
    get: function get() {
      return !Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_6__["isBs3"])();
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_showInline",
    get: function get() {
      return !this.container;
    }
  }]);

  return BsDropdownDirective;
}();

BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) {
  return new (t || BsDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](BsDropdownConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"]));
};

BsDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: BsDropdownDirective,
  selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]],
  hostVars: 6,
  hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen && ctx.isBs4);
    }
  },
  inputs: {
    autoClose: "autoClose",
    isAnimated: "isAnimated",
    insideClick: "insideClick",
    isDisabled: "isDisabled",
    isOpen: "isOpen",
    placement: "placement",
    triggers: "triggers",
    container: "container",
    dropup: "dropup"
  },
  outputs: {
    onShown: "onShown",
    onHidden: "onHidden",
    isOpenChange: "isOpenChange"
  },
  exportAs: ["bs-dropdown"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([BsDropdownState])]
});
/** @nocollapse */

BsDropdownDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
  }, {
    type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
  }, {
    type: BsDropdownState
  }, {
    type: BsDropdownConfig
  }, {
    type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"]
  }];
};

BsDropdownDirective.propDecorators = {
  placement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  triggers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  dropup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  autoClose: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  insideClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isOpenChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  onShown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  onHidden: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsDropdownDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[bsDropdown],[dropdown]',
      exportAs: 'bs-dropdown',
      providers: [BsDropdownState],
      host: {
        '[class.dropup]': 'dropup',
        '[class.open]': 'isOpen',
        '[class.show]': 'isOpen && isBs4'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
    }, {
      type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]
    }, {
      type: BsDropdownState
    }, {
      type: BsDropdownConfig
    }, {
      type: _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"]
    }];
  }, {
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    isOpenChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    autoClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    insideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    triggers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    dropup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var BsDropdownMenuDirective = // tslint:disable:no-any

/**
 * @param {?} _state
 * @param {?} _viewContainer
 * @param {?} _templateRef
 */
function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsDropdownMenuDirective);

  _state.resolveDropdownMenu({
    templateRef: _templateRef,
    viewContainer: _viewContainer
  });
};

BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) {
  return new (t || BsDropdownMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](BsDropdownState), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
};

BsDropdownMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: BsDropdownMenuDirective,
  selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]],
  exportAs: ["bs-dropdown-menu"]
});
/** @nocollapse */

BsDropdownMenuDirective.ctorParameters = function () {
  return [{
    type: BsDropdownState
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsDropdownMenuDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[bsDropdownMenu],[dropdownMenu]',
      exportAs: 'bs-dropdown-menu'
    }]
  }], function () {
    return [{
      type: BsDropdownState
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
    }];
  }, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var BsDropdownToggleDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _changeDetectorRef
   * @param {?} _dropdown
   * @param {?} _element
   * @param {?} _renderer
   * @param {?} _state
   */
  function BsDropdownToggleDirective(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
    var _this6 = this;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsDropdownToggleDirective);

    this._changeDetectorRef = _changeDetectorRef;
    this._dropdown = _dropdown;
    this._element = _element;
    this._renderer = _renderer;
    this._state = _state;
    this.isDisabled = null;
    this._subscriptions = []; // sync is open value with state

    this._subscriptions.push(this._state.isOpenChange.subscribe(
    /**
    * @param {?} value
    * @return {?}
    */
    function (value) {
      _this6.isOpen = value;

      if (value) {
        _this6._documentClickListener = _this6._renderer.listen('document', 'click',
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this6._state.autoClose && event.button !== 2 && !_this6._element.nativeElement.contains(event.target) && !(_this6._state.insideClick && _this6._dropdown._contains(event))) {
            _this6._state.toggleClick.emit(false);

            _this6._changeDetectorRef.detectChanges();
          }
        });
        _this6._escKeyUpListener = _this6._renderer.listen(_this6._element.nativeElement, 'keyup.esc',
        /**
        * @return {?}
        */
        function () {
          if (_this6._state.autoClose) {
            _this6._state.toggleClick.emit(false);

            _this6._changeDetectorRef.detectChanges();
          }
        });
      } else {
        _this6._documentClickListener();

        _this6._escKeyUpListener();
      }
    })); // populate disabled state


    this._subscriptions.push(this._state.isDisabledChange.subscribe(
    /**
    * @param {?} value
    * @return {?}
    */
    function (value) {
      return _this6.isDisabled = value || null;
    }));
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BsDropdownToggleDirective, [{
    key: "onClick",
    value: function onClick() {
      if (this.isDisabled) {
        return;
      }

      this._state.toggleClick.emit(true);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this._documentClickListener) {
        this._documentClickListener();
      }

      if (this._escKeyUpListener) {
        this._escKeyUpListener();
      }

      var _iterator2 = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this._subscriptions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var sub = _step2.value;
          sub.unsubscribe();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return BsDropdownToggleDirective;
}();

BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) {
  return new (t || BsDropdownToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](BsDropdownDirective), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](BsDropdownState));
};

BsDropdownToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: BsDropdownToggleDirective,
  selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]],
  hostVars: 3,
  hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BsDropdownToggleDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
    }
  },
  exportAs: ["bs-dropdown-toggle"]
});
/** @nocollapse */

BsDropdownToggleDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }, {
    type: BsDropdownDirective
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: BsDropdownState
  }];
};

BsDropdownToggleDirective.propDecorators = {
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['attr.disabled']
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['attr.aria-expanded']
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['click', []]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsDropdownToggleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[bsDropdownToggle],[dropdownToggle]',
      exportAs: 'bs-dropdown-toggle',
      host: {
        '[attr.aria-haspopup]': 'true'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }, {
      type: BsDropdownDirective
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: BsDropdownState
    }];
  }, {
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['attr.disabled']
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['attr.aria-expanded']
    }],

    /**
     * @return {?}
     */
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['click', []]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var BsDropdownModule = /*#__PURE__*/function () {
  function BsDropdownModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BsDropdownModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BsDropdownModule, null, [{
    key: "forRoot",
    // tslint:disable-next-line:no-any

    /**
     * @param {?=} config
     * @return {?}
     */
    value: function forRoot(config) {
      return {
        ngModule: BsDropdownModule,
        providers: [bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"], bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_8__["PositioningService"], BsDropdownState]
      };
    }
  }]);

  return BsDropdownModule;
}();

BsDropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: BsDropdownModule
});
BsDropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function BsDropdownModule_Factory(t) {
    return new (t || BsDropdownModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BsDropdownModule, {
    declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
    exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BsDropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
      exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective],
      entryComponents: [BsDropdownContainerComponent]
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
//# sourceMappingURL=vendors~components-dropdown-demo-dropdown-module.js.map