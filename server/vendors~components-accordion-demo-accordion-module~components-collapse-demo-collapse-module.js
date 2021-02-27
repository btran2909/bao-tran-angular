exports.ids = ["vendors~components-accordion-demo-accordion-module~components-collapse-demo-collapse-module"];
exports.modules = {

/***/ "yZEd":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/collapse/fesm2015/bao-tran-angular-collapse.js ***!
  \***************************************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */



var COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */

var expandAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: 0,
  visibility: 'hidden'
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: '*',
  visibility: 'visible'
}))];
/** @type {?} */

var collapseAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: '*',
  visibility: 'visible'
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
  height: 0,
  visibility: 'hidden'
}))];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var CollapseDirective = /*#__PURE__*/function () {
  /**
   * @param {?} _el
   * @param {?} _renderer
   * @param {?} _builder
   */
  function CollapseDirective(_el, _renderer, _builder) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CollapseDirective);

    this._el = _el;
    this._renderer = _renderer;
    /**
     * This event fires as soon as content collapses
     */

    this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event fires when collapsing is started
     */

    this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event fires as soon as content becomes visible
     */

    this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This event fires when expansion is started
     */

    this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // shown

    this.isExpanded = true;
    this.collapseNewValue = true; // hidden

    this.isCollapsed = false; // stale state

    this.isCollapse = true; // animation state

    this.isCollapsing = false;
    /**
     * turn on/off animation
     */

    this.isAnimated = false;
    this._display = 'block';
    this._stylesLoaded = false;
    this._COLLAPSE_ACTION_NAME = 'collapse';
    this._EXPAND_ACTION_NAME = 'expand';
    this._factoryCollapseAnimation = _builder.build(collapseAnimation);
    this._factoryExpandAnimation = _builder.build(expandAnimation);
  }
  /**
   * @param {?} value
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CollapseDirective, [{
    key: "ngAfterViewChecked",

    /**
     * @return {?}
     */
    value: function ngAfterViewChecked() {
      this._stylesLoaded = true;

      if (!this._player || !this._isAnimationDone) {
        return;
      }

      this._player.reset();

      this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isExpanded) {
        this.hide();
      } else {
        this.show();
      }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      var _this = this;

      this.isCollapsing = true;
      this.isExpanded = false;
      this.isCollapsed = true;
      this.isCollapsing = false;
      this.collapses.emit(this);
      this._isAnimationDone = false;
      this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(
      /**
      * @return {?}
      */
      function () {
        _this._isAnimationDone = true;

        if (_this.collapseNewValue !== _this.isCollapsed && _this.isAnimated) {
          _this.show();

          return;
        }

        _this.collapsed.emit(_this);

        _this._renderer.setStyle(_this._el.nativeElement, 'display', 'none');
      });
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this._renderer.setStyle(this._el.nativeElement, 'display', this._display);

      this.isCollapsing = true;
      this.isExpanded = true;
      this.isCollapsed = false;
      this.isCollapsing = false;
      this.expands.emit(this);
      this._isAnimationDone = false;
      this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(
      /**
      * @return {?}
      */
      function () {
        _this2._isAnimationDone = true;

        if (_this2.collapseNewValue !== _this2.isCollapsed && _this2.isAnimated) {
          _this2.hide();

          return;
        }

        _this2.expanded.emit(_this2);

        _this2._renderer.removeStyle(_this2._el.nativeElement, 'overflow');
      });
    }
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */

  }, {
    key: "animationRun",
    value: function animationRun(isAnimated, action) {
      var _this3 = this;

      if (!isAnimated || !this._stylesLoaded) {
        return (
          /**
          * @param {?} callback
          * @return {?}
          */
          function (callback) {
            return callback();
          }
        );
      }

      this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');

      this._renderer.addClass(this._el.nativeElement, 'collapse');
      /** @type {?} */


      var factoryAnimation = action === this._EXPAND_ACTION_NAME ? this._factoryExpandAnimation : this._factoryCollapseAnimation;

      if (this._player) {
        this._player.destroy();
      }

      this._player = factoryAnimation.create(this._el.nativeElement);

      this._player.play();

      return (
        /**
        * @param {?} callback
        * @return {?}
        */
        function (callback) {
          return _this3._player.onDone(callback);
        }
      );
    }
  }, {
    key: "display",
    set: function set(value) {
      if (!this.isAnimated) {
        this._renderer.setStyle(this._el.nativeElement, 'display', value);

        return;
      }

      this._display = value;

      if (value === 'none') {
        this.hide();
        return;
      }

      this.show();
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "collapse",
    set: function set(value) {
      this.collapseNewValue = value;

      if (!this._player || this._isAnimationDone) {
        this.isExpanded = value;
        this.toggle();
      }
    }
    /**
     * @return {?}
     */
    ,
    get: function get() {
      return this.isExpanded;
    }
  }]);

  return CollapseDirective;
}();

CollapseDirective.ɵfac = function CollapseDirective_Factory(t) {
  return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]));
};

CollapseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CollapseDirective,
  selectors: [["", "collapse", ""]],
  hostVars: 10,
  hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
    }
  },
  inputs: {
    isAnimated: "isAnimated",
    display: "display",
    collapse: "collapse"
  },
  outputs: {
    collapsed: "collapsed",
    collapses: "collapses",
    expanded: "expanded",
    expands: "expands"
  },
  exportAs: ["bs-collapse"]
});
/** @nocollapse */

CollapseDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]
  }];
};

CollapseDirective.propDecorators = {
  collapsed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  collapses: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  expanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  expands: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  isExpanded: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.in']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.show']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['attr.aria-expanded']
  }],
  isCollapsed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['attr.aria-hidden']
  }],
  isCollapse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.collapse']
  }],
  isCollapsing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
    args: ['class.collapsing']
  }],
  display: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  collapse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CollapseDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[collapse]',
      exportAs: 'bs-collapse',
      host: {
        '[class.collapse]': 'true'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]
    }];
  }, {
    collapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    collapses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    expands: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    isExpanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['class.in']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['class.show']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['attr.aria-expanded']
    }],
    isCollapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['attr.aria-hidden']
    }],
    isCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['class.collapse']
    }],
    isCollapsing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
      args: ['class.collapsing']
    }],
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    display: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    collapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var CollapseModule = /*#__PURE__*/function () {
  function CollapseModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CollapseModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CollapseModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: CollapseModule,
        providers: []
      };
    }
  }]);

  return CollapseModule;
}();

CollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CollapseModule
});
CollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function CollapseModule_Factory(t) {
    return new (t || CollapseModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CollapseModule, {
    declarations: [CollapseDirective],
    exports: [CollapseDirective]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CollapseModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [CollapseDirective],
      exports: [CollapseDirective]
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
//# sourceMappingURL=vendors~components-accordion-demo-accordion-module~components-collapse-demo-collapse-module.js.map