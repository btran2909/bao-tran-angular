exports.ids = ["vendors~components-accordion-demo-accordion-module"];
exports.modules = {

/***/ "gVSX":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/accordion/fesm2015/bao-tran-angular-accordion.js ***!
  \*****************************************************************************************************/
/*! exports provided: AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return AccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return AccordionPanelComponent; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var bao_tran_angular_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Configuration service, provides default values for the AccordionComponent.
 */




var _c0 = ["*"];

var _c1 = function _c1(a0) {
  return {
    "text-muted": a0
  };
};

function AccordionPanelComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r0.isDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.heading, " ");
  }
}

var _c2 = [[["", "accordion-heading", ""]], "*"];
var _c3 = ["[accordion-heading]", "*"];

var AccordionConfig = function AccordionConfig() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AccordionConfig);

  /**
   * Whether the other panels should be closed when a panel is opened
   */
  this.closeOthers = false;
  /**
   * turn on/off animation
   */

  this.isAnimated = false;
};

AccordionConfig.ɵfac = function AccordionConfig_Factory(t) {
  return new (t || AccordionConfig)();
};
/** @nocollapse */


AccordionConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function AccordionConfig_Factory() {
    return new AccordionConfig();
  },
  token: AccordionConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AccordionConfig, [{
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

/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */


var AccordionComponent = /*#__PURE__*/function () {
  /**
   * @param {?} config
   */
  function AccordionComponent(config) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AccordionComponent);

    /**
     * turn on/off animation
     */
    this.isAnimated = false;
    this.groups = [];
    Object.assign(this, config);
  }
  /**
   * @param {?} openGroup
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AccordionComponent, [{
    key: "closeOtherPanels",
    value: function closeOtherPanels(openGroup) {
      if (!this.closeOthers) {
        return;
      }

      this.groups.forEach(
      /**
      * @param {?} group
      * @return {?}
      */
      function (group) {
        if (group !== openGroup) {
          group.isOpen = false;
        }
      });
    }
    /**
     * @param {?} group
     * @return {?}
     */

  }, {
    key: "addGroup",
    value: function addGroup(group) {
      group.isAnimated = this.isAnimated;
      this.groups.push(group);
    }
    /**
     * @param {?} group
     * @return {?}
     */

  }, {
    key: "removeGroup",
    value: function removeGroup(group) {
      /** @type {?} */
      var index = this.groups.indexOf(group);

      if (index !== -1) {
        this.groups.splice(index, 1);
      }
    }
  }]);

  return AccordionComponent;
}();

AccordionComponent.ɵfac = function AccordionComponent_Factory(t) {
  return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](AccordionConfig));
};

AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccordionComponent,
  selectors: [["accordion"]],
  hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"],
  hostVars: 1,
  hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-multiselectable", ctx.closeOthers);
    }
  },
  inputs: {
    isAnimated: "isAnimated",
    closeOthers: "closeOthers"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function AccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
/** @nocollapse */

AccordionComponent.ctorParameters = function () {
  return [{
    type: AccordionConfig
  }];
};

AccordionComponent.propDecorators = {
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  closeOthers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AccordionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'accordion',
      template: "<ng-content></ng-content>",
      host: {
        '[attr.aria-multiselectable]': 'closeOthers',
        role: 'tablist',
        class: 'panel-group',
        style: 'display: block'
      }
    }]
  }], function () {
    return [{
      type: AccordionConfig
    }];
  }, {
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    closeOthers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */


var AccordionPanelComponent = /*#__PURE__*/function () {
  /**
   * @param {?} accordion
   */
  function AccordionPanelComponent(accordion) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AccordionPanelComponent);

    /**
     * turn on/off animation
     */
    this.isAnimated = false;
    /**
     * Emits when the opened state changes
     */

    this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this._isOpen = false;
    this.accordion = accordion;
  } // Questionable, maybe .panel-open should be on child div.panel element?

  /**
   * Is accordion group open or closed. This property supports two-way binding
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AccordionPanelComponent, [{
    key: "ngOnInit",

    /**
     * @return {?}
     */
    value: function ngOnInit() {
      this.panelClass = this.panelClass || 'panel-default';
      this.accordion.addGroup(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.accordion.removeGroup(this);
    }
    /**
     * @return {?}
     */

  }, {
    key: "toggleOpen",
    value: function toggleOpen() {
      if (!this.isDisabled) {
        this.isOpen = !this.isOpen;
      }
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      var _this = this;

      if (value !== this.isOpen) {
        if (value) {
          this.accordion.closeOtherPanels(this);
        }

        this._isOpen = value;
        Promise.resolve(null).then(
        /**
        * @return {?}
        */
        function () {
          _this.isOpenChange.emit(value);
        }).catch(
        /**
        * @param {?} error
        * @return {?}
        */
        function (error) {
          /* tslint:disable: no-console */
          console.log(error);
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "isBs3",
    get: function get() {
      return Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
    }
  }]);

  return AccordionPanelComponent;
}();

AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) {
  return new (t || AccordionPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](AccordionComponent));
};

AccordionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccordionPanelComponent,
  selectors: [["accordion-group"], ["accordion-panel"]],
  hostAttrs: [1, "panel", 2, "display", "block"],
  hostVars: 2,
  hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("panel-open", ctx.isOpen);
    }
  },
  inputs: {
    isOpen: "isOpen",
    panelClass: "panelClass",
    heading: "heading",
    isDisabled: "isDisabled"
  },
  outputs: {
    isOpenChange: "isOpenChange"
  },
  ngContentSelectors: _c3,
  decls: 9,
  vars: 6,
  consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]],
  template: function AccordionPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccordionPanelComponent_Template_div_click_1_listener() {
        return ctx.toggleOpen();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](8, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.panelClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", ctx.isOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], bao_tran_angular_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseDirective"]],
  styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]
});
/** @nocollapse */

AccordionPanelComponent.ctorParameters = function () {
  return [{
    type: AccordionComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
      args: [AccordionComponent]
    }]
  }];
};

AccordionPanelComponent.propDecorators = {
  heading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  panelClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isDisabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  isOpenChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
    args: ['class.panel-open']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AccordionPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'accordion-group, accordion-panel',
      template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\r\n  <div\r\n    class=\"panel-heading card-header\"\r\n    role=\"tab\"\r\n    (click)=\"toggleOpen()\"\r\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\r\n  >\r\n    <div class=\"panel-title\">\r\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\r\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\r\n          {{ heading }}\r\n        </button>\r\n        <ng-content select=\"[accordion-heading]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\r\n    <div class=\"panel-body card-block card-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
      host: {
        class: 'panel',
        style: 'display: block'
      },
      styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]
    }]
  }], function () {
    return [{
      type: AccordionComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
        args: [AccordionComponent]
      }]
    }];
  }, {
    isOpenChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
      args: ['class.panel-open']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    heading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    isDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var AccordionModule = /*#__PURE__*/function () {
  function AccordionModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AccordionModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AccordionModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: AccordionModule,
        providers: []
      };
    }
  }]);

  return AccordionModule;
}();

AccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AccordionModule
});
AccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function AccordionModule_Factory(t) {
    return new (t || AccordionModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], bao_tran_angular_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccordionModule, {
    declarations: function declarations() {
      return [AccordionComponent, AccordionPanelComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], bao_tran_angular_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"]];
    },
    exports: function exports() {
      return [AccordionComponent, AccordionPanelComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], bao_tran_angular_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"]],
      declarations: [AccordionComponent, AccordionPanelComponent],
      exports: [AccordionComponent, AccordionPanelComponent]
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
//# sourceMappingURL=vendors~components-accordion-demo-accordion-module.js.map