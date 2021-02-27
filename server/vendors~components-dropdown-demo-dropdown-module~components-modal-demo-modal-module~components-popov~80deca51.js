exports.ids = ["vendors~components-dropdown-demo-dropdown-module~components-modal-demo-modal-module~components-popov~80deca51"];
exports.modules = {

/***/ "GFUW":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/component-loader/fesm2015/bao-tran-angular-component-loader.js ***!
  \*******************************************************************************************************************/
/*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return BsComponentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ComponentLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
/* harmony import */ var bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bao-tran-angular/positioning */ "tRfX");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @template T
 */




var BsComponentRef = function BsComponentRef() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BsComponentRef);
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */


var ContentRef =
/**
 * @param {?} nodes
 * @param {?=} viewRef
 * @param {?=} componentRef
 */
function ContentRef(
/* tslint:disable-next-line: no-any */
nodes, viewRef,
/* tslint:disable-next-line: no-any */
componentRef) {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentRef);

  this.nodes = nodes;
  this.viewRef = viewRef;
  this.componentRef = componentRef;
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @template T
 */


var ComponentLoader = /*#__PURE__*/function () {
  /**
   * Do not use this directly, it should be instanced via
   * `ComponentLoadFactory.attach`
   * \@internal
   * @param {?} _viewContainerRef
   * @param {?} _renderer
   * @param {?} _elementRef
   * @param {?} _injector
   * @param {?} _componentFactoryResolver
   * @param {?} _ngZone
   * @param {?} _applicationRef
   * @param {?} _posService
   */
  // tslint:disable-next-line
  function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ComponentLoader);

    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._injector = _injector;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._applicationRef = _applicationRef;
    this._posService = _posService;
    this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /* tslint:disable-next-line: no-any*/

    this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /* tslint:disable-next-line: no-any*/

    this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this._providers = [];
    this._isHiding = false;
    /**
     * A selector used if container element was not found
     */

    this.containerDefaultSelector = 'body';
    this._listenOpts = {};
    this._globalListener = Function.prototype;
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ComponentLoader, [{
    key: "attach",

    /**
     * @param {?} compType
     * @return {?}
     */
    value: function attach(compType) {
      this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
      return this;
    } // todo: add behaviour: to target element, `body`, custom element

    /**
     * @param {?=} container
     * @return {?}
     */

  }, {
    key: "to",
    value: function to(container) {
      this.container = container || this.container;
      return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */

  }, {
    key: "position",
    value: function position(opts) {
      this.attachment = opts.attachment || this.attachment;
      /* tslint:disable-next-line: no-unnecessary-type-assertion */

      this._elementRef =
      /** @type {?} */
      opts.target || this._elementRef;
      return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */

  }, {
    key: "provide",
    value: function provide(provider) {
      this._providers.push(provider);

      return this;
    } // todo: appendChild to element or document.querySelector(this.container)

    /**
     * @param {?=} opts
     * @return {?}
     */

  }, {
    key: "show",
    value: function show() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._subscribePositioning();

      this._innerComponent = null;

      if (!this._componentRef) {
        this.onBeforeShow.emit();
        this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
        /** @type {?} */

        var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
          providers: this._providers,
          parent: this._injector
        });
        this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);

        this._applicationRef.attachView(this._componentRef.hostView); // this._componentRef = this._viewContainerRef
        //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);


        this.instance = this._componentRef.instance;
        Object.assign(this._componentRef.instance, opts);

        if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]) {
          this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
        }

        if (typeof this.container === 'string' && typeof document !== 'undefined') {
          /** @type {?} */
          var selectedElement = document.querySelector(this.container) || document.querySelector(this.containerDefaultSelector);
          selectedElement.appendChild(this._componentRef.location.nativeElement);
        }

        if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
          this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
        } // we need to manually invoke change detection since events registered
        // via
        // Renderer::listen() are not picked up by change detection with the
        // OnPush strategy


        if (this._contentRef.componentRef) {
          this._innerComponent = this._contentRef.componentRef.instance;

          this._contentRef.componentRef.changeDetectorRef.markForCheck();

          this._contentRef.componentRef.changeDetectorRef.detectChanges();
        }

        this._componentRef.changeDetectorRef.markForCheck();

        this._componentRef.changeDetectorRef.detectChanges();

        this.onShown.emit(opts.id ? {
          id: opts.id
        } : this._componentRef.instance);
      }

      this._registerOutsideClick();

      return this._componentRef;
    }
    /**
     * @param {?=} id
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide(id) {
      if (!this._componentRef) {
        return this;
      }

      this._posService.deletePositionElement(this._componentRef.location);

      this.onBeforeHide.emit(this._componentRef.instance);
      /** @type {?} */

      var componentEl = this._componentRef.location.nativeElement;
      componentEl.parentNode.removeChild(componentEl);

      if (this._contentRef.componentRef) {
        this._contentRef.componentRef.destroy();
      }

      if (this._viewContainerRef && this._contentRef.viewRef) {
        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
      }

      if (this._contentRef.viewRef) {
        this._contentRef.viewRef.destroy();
      }

      this._contentRef = null;
      this._componentRef = null;

      this._removeGlobalListener();

      this.onHidden.emit(id ? {
        id: id
      } : null);
      return this;
    }
    /**
     * @return {?}
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isShown) {
        this.hide();
        return;
      }

      this.show();
    }
    /**
     * @return {?}
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (this.isShown) {
        this.hide();
      }

      this._unsubscribePositioning();

      if (this._unregisterListenersFn) {
        this._unregisterListenersFn();
      }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */

  }, {
    key: "listen",
    value: function listen(listenOpts) {
      var _this = this;

      this.triggers = listenOpts.triggers || this.triggers;
      this._listenOpts.outsideClick = listenOpts.outsideClick;
      this._listenOpts.outsideEsc = listenOpts.outsideEsc;
      listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
      /** @type {?} */

      var hide = this._listenOpts.hide =
      /**
      * @return {?}
      */
      function () {
        return listenOpts.hide ? listenOpts.hide() : void _this.hide();
      };
      /** @type {?} */


      var show = this._listenOpts.show =
      /**
      * @param {?} registerHide
      * @return {?}
      */
      function (registerHide) {
        listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
        registerHide();
      };
      /** @type {?} */


      var toggle =
      /**
      * @param {?} registerHide
      * @return {?}
      */
      function toggle(registerHide) {
        _this.isShown ? hide() : show(registerHide);
      };

      this._unregisterListenersFn = Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["listenToTriggersV2"])(this._renderer, {
        target: listenOpts.target,
        triggers: listenOpts.triggers,
        show: show,
        hide: hide,
        toggle: toggle
      });
      return this;
    }
    /**
     * @return {?}
     */

  }, {
    key: "_removeGlobalListener",
    value: function _removeGlobalListener() {
      if (this._globalListener) {
        this._globalListener();

        this._globalListener = null;
      }
    }
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */

  }, {
    key: "attachInline",
    value: function attachInline(vRef,
    /* tslint:disable-next-line: no-any*/
    template) {
      this._inlineViewRef = vRef.createEmbeddedView(template);
      return this;
    }
    /**
     * @return {?}
     */

  }, {
    key: "_registerOutsideClick",
    value: function _registerOutsideClick() {
      var _this2 = this;

      if (!this._componentRef || !this._componentRef.location) {
        return;
      } // why: should run after first event bubble


      if (this._listenOpts.outsideClick) {
        /** @type {?} */
        var target = this._componentRef.location.nativeElement;
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this2._globalListener = Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["registerOutsideClick"])(_this2._renderer, {
            targets: [target, _this2._elementRef.nativeElement],
            outsideClick: _this2._listenOpts.outsideClick,
            hide:
            /**
            * @return {?}
            */
            function hide() {
              return _this2._listenOpts.hide();
            }
          });
        });
      }

      if (this._listenOpts.outsideEsc) {
        /** @type {?} */
        var _target = this._componentRef.location.nativeElement;
        this._globalListener = Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_3__["registerEscClick"])(this._renderer, {
          targets: [_target, this._elementRef.nativeElement],
          outsideEsc: this._listenOpts.outsideEsc,
          hide:
          /**
          * @return {?}
          */
          function hide() {
            return _this2._listenOpts.hide();
          }
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "getInnerComponent",
    value: function getInnerComponent() {
      return this._innerComponent;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_subscribePositioning",
    value: function _subscribePositioning() {
      var _this3 = this;

      if (this._zoneSubscription || !this.attachment) {
        return;
      }

      this.onShown.subscribe(
      /**
      * @return {?}
      */
      function () {
        _this3._posService.position({
          element: _this3._componentRef.location,
          target: _this3._elementRef,
          attachment: _this3.attachment,
          appendToBody: _this3.container === 'body'
        });
      });
      this._zoneSubscription = this._ngZone.onStable.subscribe(
      /**
      * @return {?}
      */
      function () {
        if (!_this3._componentRef) {
          return;
        }

        _this3._posService.calcPosition();
      });
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "_unsubscribePositioning",
    value: function _unsubscribePositioning() {
      if (!this._zoneSubscription) {
        return;
      }

      this._zoneSubscription.unsubscribe();

      this._zoneSubscription = null;
    }
    /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */

  }, {
    key: "_getContentRef",
    value: function _getContentRef(
    /* tslint:disable-next-line: no-any*/
    content,
    /* tslint:disable-next-line: no-any*/
    context,
    /* tslint:disable-next-line: no-any*/
    initialState) {
      if (!content) {
        return new ContentRef([]);
      }

      if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
        if (this._viewContainerRef) {
          /** @type {?} */
          var _viewRef = this._viewContainerRef.createEmbeddedView(content, context);

          _viewRef.markForCheck();

          return new ContentRef([_viewRef.rootNodes], _viewRef);
        }
        /** @type {?} */


        var viewRef = content.createEmbeddedView({});

        this._applicationRef.attachView(viewRef);

        return new ContentRef([viewRef.rootNodes], viewRef);
      }

      if (typeof content === 'function') {
        /** @type {?} */
        var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
        /** @type {?} */


        var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
          providers: this._providers,
          parent: this._injector
        });
        /** @type {?} */

        var componentRef = contentCmptFactory.create(modalContentInjector);
        Object.assign(componentRef.instance, initialState);

        this._applicationRef.attachView(componentRef.hostView);

        return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
      }

      return new ContentRef([[this._renderer.createText("".concat(content))]]);
    }
  }, {
    key: "isShown",
    get: function get() {
      if (this._isHiding) {
        return false;
      }

      return !!this._componentRef;
    }
  }]);

  return ComponentLoader;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ComponentLoaderFactory = /*#__PURE__*/function () {
  /**
   * @param {?} _componentFactoryResolver
   * @param {?} _ngZone
   * @param {?} _injector
   * @param {?} _posService
   * @param {?} _applicationRef
   */
  function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ComponentLoaderFactory);

    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._injector = _injector;
    this._posService = _posService;
    this._applicationRef = _applicationRef;
  }
  /**
   *
   * @template T
   * @param {?} _elementRef
   * @param {?} _viewContainerRef
   * @param {?} _renderer
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ComponentLoaderFactory, [{
    key: "createLoader",
    value: function createLoader(_elementRef, _viewContainerRef, _renderer) {
      return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
  }]);

  return ComponentLoaderFactory;
}();

ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
  return new (t || ComponentLoaderFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]));
};

ComponentLoaderFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ComponentLoaderFactory,
  factory: ComponentLoaderFactory.ɵfac
});
/** @nocollapse */

ComponentLoaderFactory.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
  }, {
    type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ComponentLoaderFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
    }, {
      type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "tRfX":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/positioning/fesm2015/bao-tran-angular-positioning.js ***!
  \*********************************************************************************************************/
/*! exports provided: Positioning, PositioningService, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return PositioningService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/defineProperty */ "TR1e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Get CSS computed property of the given element
 * @param {?} element
 * @param {?=} property
 * @return {?}
 */



function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here

  /** @type {?} */


  var window = element.ownerDocument.defaultView;
  /** @type {?} */

  var css = window.getComputedStyle(element, null);
  return property ? css[
  /** @type {?} */
  property] : css;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns the parentNode or the host of the element
 * @param {?} element
 * @return {?}
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @return {?}
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;

    default:
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */

var isIE11 = isBrowser && !!(
/** @type {?} */
window.MSInputMethodContext &&
/** @type {?} */
document.documentMode);
/** @type {?} */

var isIE10 = isBrowser && !!(
/** @type {?} */
window.MSInputMethodContext && /MSIE 10/.test(
/** @type {?} */
navigator.userAgent));
/**
 * @param {?=} version
 * @return {?}
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @return {?}
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  /** @type {?} */


  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  /** @type {?} */

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  /** @type {?} */

  var sibling;

  while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
    sibling = element.nextElementSibling;
    offsetParent = sibling.offsetParent;
  }
  /** @type {?} */


  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @return {?}
 */


function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @param {?} node
 * @return {?}
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element1
 * @param {?} element2
 * @return {?}
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM

  /* tslint:disable-next-line: no-bitwise */

  /** @type {?} */


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  /** @type {?} */

  var start = order ? element1 : element2;
  /** @type {?} */

  var end = order ? element2 : element1; // Get common ancestor container

  /** @type {?} */

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one

  /** @type {?} */


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Helper to detect borders of a given element
 */

/**
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */


function getBordersSize(styles, axis) {
  /** @type {?} */
  var sideA = axis === 'x' ? 'Left' : 'Top';
  /** @type {?} */

  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles[
  /** @type {?} */
  "border".concat(sideA, "Width")]) + parseFloat(styles[
  /** @type {?} */
  "border".concat(sideB, "Width")]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} axis
 * @param {?} body
 * @param {?} html
 * @param {?} computedStyle
 * @return {?}
 */


function getSize(axis, body, html, computedStyle) {
  return Math.max(
  /** @type {?} */
  body["offset".concat(axis)],
  /** @type {?} */
  body["scroll".concat(axis)],
  /** @type {?} */
  html["client".concat(axis)],
  /** @type {?} */
  html["offset".concat(axis)],
  /** @type {?} */
  html["scroll".concat(axis)], isIE(10) ? parseInt(
  /** @type {?} */
  html["offset".concat(axis)], 10) + parseInt(computedStyle[
  /** @type {?} */
  "margin".concat(axis === 'Height' ? 'Top' : 'Left')], 10) + parseInt(computedStyle[
  /** @type {?} */
  "margin".concat(axis === 'Height' ? 'Bottom' : 'Right')], 10) : 0);
}
/**
 * @param {?} document
 * @return {?}
 */


function getWindowSizes(document) {
  /** @type {?} */
  var body = document.body;
  /** @type {?} */

  var html = document.documentElement;
  /** @type {?} */

  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @param {?} element
 * @param {?=} side
 * @return {?}
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  /** @type {?} */
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  /** @type {?} */

  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    /** @type {?} */
    var html = element.ownerDocument.documentElement;
    /** @type {?} */

    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} offsets
 * @return {?}
 */


function getClientRect(offsets) {
  return Object.assign(Object.assign({}, offsets), {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @return {?}
 */


function getBoundingClientRect(element) {
  /** @type {?} */
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      /** @type {?} */

      var scrollTop = getScroll(element, 'top');
      /** @type {?} */

      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {
    return undefined;
  }
  /** @type {?} */


  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  /** @type {?} */

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  /** @type {?} */

  var width = sizes.width || element.clientWidth || result.right - result.left;
  /** @type {?} */

  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  /** @type {?} */

  var horizScrollbar = element.offsetWidth - width;
  /** @type {?} */

  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    /** @type {?} */
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} rect
 * @param {?} element
 * @param {?=} subtract
 * @return {?}
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  /** @type {?} */
  var scrollTop = getScroll(element, 'top');
  /** @type {?} */

  var scrollLeft = getScroll(element, 'left');
  /** @type {?} */

  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} children
 * @param {?} parent
 * @param {?=} fixedPosition
 * @return {?}
 */


function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  /** @type {?} */
  var isIE10 = isIE(10);
  /** @type {?} */

  var isHTML = parent.nodeName === 'HTML';
  /** @type {?} */

  var childrenRect = getBoundingClientRect(children);
  /** @type {?} */

  var parentRect = getBoundingClientRect(parent);
  /** @type {?} */

  var scrollParent = getScrollParent(children);
  /** @type {?} */

  var styles = getStyleComputedProperty(parent);
  /** @type {?} */

  var borderTopWidth = parseFloat(styles.borderTopWidth);
  /** @type {?} */

  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  /** @type {?} */


  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    /** @type {?} */
    var marginTop = parseFloat(styles.marginTop);
    /** @type {?} */

    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @param {?=} excludeScroll
 * @return {?}
 */


function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  /** @type {?} */
  var html = element.ownerDocument.documentElement;
  /** @type {?} */

  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  /** @type {?} */

  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  /** @type {?} */

  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  /** @type {?} */

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  /** @type {?} */

  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  /** @type {?} */

  var offset = {
    top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
    left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @return {?}
 */


function isFixed(element) {
  /** @type {?} */
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  return isFixed(getParentNode(element));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @return {?}
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  /** @type {?} */


  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} target
 * @param {?} host
 * @param {?=} padding
 * @param {?=} boundariesElement
 * @param {?=} fixedPosition
 * @return {?}
 */


function getBoundaries(target, host) {
  var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var boundariesElement = arguments.length > 3 ? arguments[3] : undefined;
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // NOTE: 1 DOM access here
  // NOTE: 1 DOM access here

  /** @type {?} */
  var boundaries = {
    top: 0,
    left: 0
  };
  /** @type {?} */

  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries

    /** @type {?} */
    var boundariesNode;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(host));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = target.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = target.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    /** @type {?} */


    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(target.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = Number(height) + Number(offsets.top);
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = Number(width) + Number(offsets.left);
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;
  return boundaries;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} __0
 * @return {?}
 */


function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */


function computeAutoPlacement(placement, refRect, target, host) {
  var allowedPositions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ['top', 'bottom', 'right', 'left'];
  var boundariesElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'viewport';
  var padding = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }
  /** @type {?} */


  var boundaries = getBoundaries(target, host, padding, boundariesElement);
  /** @type {?} */

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  /** @type {?} */

  var sortedAreas = Object.keys(rects).map(
  /**
  * @param {?} key
  * @return {?}
  */
  function (key) {
    return Object.assign(Object.assign({
      key: key
    }, rects[key]), {
      area: getArea(rects[key])
    });
  }).sort(
  /**
  * @param {?} a
  * @param {?} b
  * @return {?}
  */
  function (a, b) {
    return b.area - a.area;
  });
  /** @type {?} */

  var filteredAreas = sortedAreas.filter(
  /**
  * @param {?} __0
  * @return {?}
  */
  function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= target.clientWidth && height >= target.clientHeight;
  });
  filteredAreas = filteredAreas.filter(
  /**
  * @param {?} position
  * @return {?}
  */
  function (position) {
    return allowedPositions.some(
    /**
    * @param {?} allowedPosition
    * @return {?}
    */
    function (allowedPosition) {
      return allowedPosition === position.key;
    });
  });
  /** @type {?} */

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  /** @type {?} */

  var variation = placement.split(' ')[1]; // for tooltip on auto position

  target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(computedPlacement));
  return computedPlacement + (variation ? "-".concat(variation) : '');
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} data
 * @return {?}
 */


function getOffsets(data) {
  return {
    width: data.offsets.target.width,
    height: data.offsets.target.height,
    left: Math.floor(data.offsets.target.left),
    top: Math.round(data.offsets.target.top),
    bottom: Math.round(data.offsets.target.bottom),
    right: Math.floor(data.offsets.target.right)
  };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Get the opposite placement of the given one
 * @param {?} placement
 * @return {?}
 */


function getOppositePlacement(placement) {
  /** @type {?} */
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g,
  /**
  * @param {?} matched
  * @return {?}
  */
  function (matched) {
    return (
      /** @type {?} */
      hash[matched]
    );
  });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Get the opposite placement variation of the given one
 * @param {?} variation
 * @return {?}
 */


function getOppositeVariation(variation) {
  if (variation === 'right') {
    return 'left';
  } else if (variation === 'left') {
    return 'right';
  }

  return variation;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @param {?} element
 * @return {?}
 */


function getOuterSizes(element) {
  /** @type {?} */
  var window = element.ownerDocument.defaultView;
  /** @type {?} */

  var styles = window.getComputedStyle(element);
  /** @type {?} */

  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  /** @type {?} */

  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  return {
    width: Number(element.offsetWidth) + y,
    height: Number(element.offsetHeight) + x
  };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} target
 * @param {?} host
 * @param {?=} fixedPosition
 * @return {?}
 */


function getReferenceOffsets(target, host) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  /** @type {?} */
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
  return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */


function getTargetOffsets(target, hostOffsets, position) {
  /** @type {?} */
  var placement = position.split(' ')[0]; // Get target node sizes

  /** @type {?} */

  var targetRect = getOuterSizes(target); // Add position, width and height to our offsets object

  /** @type {?} */

  var targetOffsets = {
    width: targetRect.width,
    height: targetRect.height
  }; // depending by the target placement we have to compute its offsets slightly differently

  /** @type {?} */

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  /** @type {?} */

  var mainSide = isHoriz ? 'top' : 'left';
  /** @type {?} */

  var secondarySide = isHoriz ? 'left' : 'top';
  /** @type {?} */

  var measurement = isHoriz ? 'height' : 'width';
  /** @type {?} */

  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  /** @type {?} */
  targetOffsets[mainSide] = hostOffsets[mainSide] + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;

  /** @type {?} */
  targetOffsets[secondarySide] = placement === secondarySide ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement] :
  /** @type {?} */
  hostOffsets[getOppositePlacement(secondarySide)];
  return targetOffsets;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Helper used to know if the given modifier is enabled.
 * @param {?} options
 * @param {?} modifierName
 * @return {?}
 */


function isModifierEnabled(options, modifierName) {
  return options && options.modifiers && options.modifiers[modifierName] && options.modifiers[modifierName].enabled;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Tells if a given input is a number
 * @param {?} n
 * @return {?}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} data
 * @param {?=} renderer
 * @return {?}
 */


function updateContainerClass(data, renderer) {
  /** @type {?} */
  var target = data.instance.target;
  /** @type {?} */

  var containerClass = target.className;

  if (data.placementAuto) {
    containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-".concat(data.placement));
    containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-".concat(data.placement));
    containerClass = containerClass.replace(/\sauto/g, " ".concat(data.placement));

    if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
      containerClass += ' popover-auto';
    }

    if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
      containerClass += ' tooltip-auto';
    }
  }

  containerClass = containerClass.replace(/left|right|top|bottom/g, "".concat(data.placement.split(' ')[0]));

  if (renderer) {
    renderer.setAttribute(target, 'class', containerClass);
    return;
  }

  target.className = containerClass;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} element
 * @param {?} styles
 * @param {?=} renderer
 * @return {?}
 */


function setStyles(element, styles, renderer) {
  Object.keys(styles).forEach(
  /**
  * @param {?} prop
  * @return {?}
  */
  function (prop) {
    /** @type {?} */
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    if (renderer) {
      renderer.setStyle(element, prop, "".concat(String(styles[prop])).concat(unit));
      return;
    }

    element.style[prop] = String(styles[prop]) + unit;
  });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} data
 * @return {?}
 */


function arrow(data) {
  var _data$offsets$arrow;

  /** @type {?} */
  var targetOffsets = data.offsets.target; // if arrowElement is a string, suppose it's a CSS selector

  /** @type {?} */

  var arrowElement = data.instance.target.querySelector('.arrow'); // if arrowElement is not found, don't run the modifier

  if (!arrowElement) {
    return data;
  }
  /** @type {?} */


  var isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
  /** @type {?} */

  var len = isVertical ? 'height' : 'width';
  /** @type {?} */

  var sideCapitalized = isVertical ? 'Top' : 'Left';
  /** @type {?} */

  var side = sideCapitalized.toLowerCase();
  /** @type {?} */

  var altSide = isVertical ? 'left' : 'top';
  /** @type {?} */

  var opSide = isVertical ? 'bottom' : 'right';
  /** @type {?} */

  var arrowElementSize = getOuterSizes(arrowElement)[len];
  /** @type {?} */

  var placementVariation = data.placement.split(' ')[1]; // top/left side

  if (data.offsets.host[opSide] - arrowElementSize <
  /** @type {?} */
  targetOffsets[side]) {
    /** @type {?} */
    targetOffsets[side] -=
    /** @type {?} */
    targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
  } // bottom/right side


  if (Number(
  /** @type {?} */
  data.offsets.host[side]) + Number(arrowElementSize) >
  /** @type {?} */
  targetOffsets[opSide]) {
    /** @type {?} */
    targetOffsets[side] += Number(
    /** @type {?} */
    data.offsets.host[side]) + Number(arrowElementSize) - Number(
    /** @type {?} */
    targetOffsets[opSide]);
  }

  targetOffsets = getClientRect(targetOffsets); // Compute the sideValue using the updated target offsets
  // take target margin in account because we don't have this info available

  /** @type {?} */

  var css = getStyleComputedProperty(data.instance.target);
  /** @type {?} */

  var targetMarginSide = parseFloat(css["margin".concat(sideCapitalized)]);
  /** @type {?} */

  var targetBorderSide = parseFloat(css["border".concat(sideCapitalized, "Width")]); // compute center of the target

  /** @type {?} */

  var center;

  if (!placementVariation) {
    center = Number(
    /** @type {?} */
    data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
  } else {
    /** @type {?} */
    var targetBorderRadius = parseFloat(css.borderRadius);
    /** @type {?} */

    var targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
    center = side === placementVariation ? Number(
    /** @type {?} */
    data.offsets.host[side]) + targetSideArrowOffset : Number(
    /** @type {?} */
    data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
  }
  /** @type {?} */


  var sideValue = center -
  /** @type {?} */
  targetOffsets[side] - targetMarginSide - targetBorderSide; // prevent arrowElement from being placed not contiguously to its target

  sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
  data.offsets.arrow = (_data$offsets$arrow = {}, Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_data$offsets$arrow, side, Math.round(sideValue)), Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  data.instance.arrow = arrowElement;
  return data;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} data
 * @return {?}
 */


function flip(data) {
  data.offsets.target = getClientRect(data.offsets.target);

  if (!isModifierEnabled(data.options, 'flip')) {
    data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    return data;
  }
  /** @type {?} */


  var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
  'viewport', false // positionFixed
  );
  /** @type {?} */

  var placement = data.placement.split(' ')[0];
  /** @type {?} */

  var variation = data.placement.split(' ')[1] || '';
  /** @type {?} */

  var offsetsHost = data.offsets.host;
  /** @type {?} */

  var target = data.instance.target;
  /** @type {?} */

  var host = data.instance.host;
  /** @type {?} */

  var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
  /** @type {?} */

  var flipOrder = [placement, adaptivePosition];
  /* tslint:disable-next-line: cyclomatic-complexity */

  flipOrder.forEach(
  /**
  * @param {?} step
  * @param {?} index
  * @return {?}
  */
  function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split(' ')[0]; // using floor because the host offsets may contain decimals we are not going to consider here

    /** @type {?} */

    var overlapsRef = placement === 'left' && Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left) || placement === 'right' && Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right) || placement === 'top' && Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top) || placement === 'bottom' && Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom);
    /** @type {?} */

    var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
    /** @type {?} */

    var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
    /** @type {?} */

    var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
    /** @type {?} */

    var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
    /** @type {?} */

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    /** @type {?} */

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    /** @type {?} */

    var flippedVariation = isVertical && variation === 'left' && overflowsLeft || isVertical && variation === 'right' && overflowsRight || !isVertical && variation === 'left' && overflowsTop || !isVertical && variation === 'right' && overflowsBottom;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? " ".concat(variation) : '');
      data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    }
  });
  return data;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */


function initData(targetElement, hostElement, position, options) {
  /** @type {?} */
  var hostElPosition = getReferenceOffsets(targetElement, hostElement);

  if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/) && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
    /* tslint:disable-next-line: no-parameter-reassignment */
    position = 'auto';
  }
  /** @type {?} */


  var placementAuto = !!position.match(/auto/g); // support old placements 'auto left|right|top|bottom'

  /** @type {?} */

  var placement = position.match(/auto\s(left|right|top|bottom)/) ? position.split(' ')[1] || 'auto' : position; // Normalize placements that have identical main placement and variation ("right right" => "right").

  /** @type {?} */

  var matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);

  if (matches) {
    placement = matches[1] + (matches[2] ? " ".concat(matches[2]) : '');
  } // "left right", "top bottom" etc. placements also considered incorrect.


  if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
    placement = 'auto';
  }
  /** @type {?} */


  var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
  placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
  return {
    options: options,
    instance: {
      target: targetElement,
      host: hostElement,
      arrow: null
    },
    offsets: {
      target: targetOffset,
      host: hostElPosition,
      arrow: null
    },
    positionFixed: false,
    placement: placement,
    placementAuto: placementAuto
  };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} data
 * @return {?}
 */


function preventOverflow(data) {
  if (!isModifierEnabled(data.options, 'preventOverflow')) {
    return data;
  } // NOTE: DOM access here
  // resets the targetOffsets's position so that the document size can be calculated excluding
  // the size of the targetOffsets element itself

  /** @type {?} */


  var transformProp = 'transform';
  /** @type {?} */

  var targetStyles = data.instance.target.style; // assignment to help minification

  var top = targetStyles.top,
      left = targetStyles.left,
      transform = targetStyles[transformProp];
  targetStyles.top = '';
  targetStyles.left = '';
  targetStyles[transformProp] = '';
  /** @type {?} */

  var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
  data.options.modifiers.preventOverflow.boundariesElement || 'scrollParent', false // positionFixed
  ); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  targetStyles.top = top;
  targetStyles.left = left;
  targetStyles[transformProp] = transform;
  /** @type {?} */

  var order = ['left', 'right', 'top', 'bottom'];
  /** @type {?} */

  var check = {
    /**
     * @param {?} placement
     * @return {?}
     */
    primary: function primary(placement) {
      /** @type {?} */
      var value =
      /** @type {?} */
      data.offsets.target[placement];

      if (
      /** @type {?} */
      data.offsets.target[placement] < boundaries[placement] && !false // options.escapeWithReference
      ) {
          value = Math.max(
          /** @type {?} */
          data.offsets.target[placement], boundaries[placement]);
        }

      return Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, placement, value);
    },

    /**
     * @param {?} placement
     * @return {?}
     */
    secondary: function secondary(placement) {
      /** @type {?} */
      var mainSide = placement === 'right' ? 'left' : 'top';
      /** @type {?} */

      var value = data.offsets.target[mainSide];

      if (
      /** @type {?} */
      data.offsets.target[placement] > boundaries[placement] && !false // escapeWithReference
      ) {
          value = Math.min(data.offsets.target[mainSide], boundaries[placement] - (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
        }

      return Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, mainSide, value);
    }
  };
  /** @type {?} */

  var side;
  order.forEach(
  /**
  * @param {?} placement
  * @return {?}
  */
  function (placement) {
    side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    data.offsets.target = Object.assign(Object.assign({}, data.offsets.target),
    /** @type {?} */
    check[side](placement));
  });
  return data;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} data
 * @return {?}
 */


function shift(data) {
  /** @type {?} */
  var placement = data.placement;
  /** @type {?} */

  var basePlacement = placement.split(' ')[0];
  /** @type {?} */

  var shiftVariation = placement.split(' ')[1];

  if (shiftVariation) {
    var _data$offsets = data.offsets,
        host = _data$offsets.host,
        target = _data$offsets.target;
    /** @type {?} */

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    /** @type {?} */

    var side = isVertical ? 'left' : 'top';
    /** @type {?} */

    var measurement = isVertical ? 'width' : 'height';
    /** @type {?} */

    var shiftOffsets = {
      start: Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, side, host[side]),
      end: Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, side, host[side] + host[measurement] - target[measurement])
    };
    data.offsets.target = Object.assign(Object.assign({}, target), Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, side, side === shiftVariation ?
    /** @type {?} */
    shiftOffsets.start[side] :
    /** @type {?} */
    shiftOffsets.end[side]));
  }

  return data;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var Positioning = /*#__PURE__*/function () {
  function Positioning() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Positioning);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Positioning, [{
    key: "position",

    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    value: function position(hostElement, targetElement) {
      var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return this.offset(hostElement, targetElement, false);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */

  }, {
    key: "offset",
    value: function offset(hostElement, targetElement) {
      var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */

  }, {
    key: "positionElements",
    value: function positionElements(hostElement, targetElement, position, appendToBody, options) {
      /** @type {?} */
      var chainOfModifiers = [flip, shift, preventOverflow, arrow];
      return chainOfModifiers.reduce(
      /**
      * @param {?} modifiedData
      * @param {?} modifier
      * @return {?}
      */
      function (modifiedData, modifier) {
        return modifier(modifiedData);
      }, initData(targetElement, hostElement, position, options));
    }
  }]);

  return Positioning;
}();
/** @type {?} */


var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */

function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
  /** @type {?} */
  var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
  /** @type {?} */

  var offsets = getOffsets(data);
  setStyles(targetElement, {
    'will-change': 'transform',
    top: '0px',
    left: '0px',
    transform: "translate3d(".concat(offsets.left, "px, ").concat(offsets.top, "px, 0px)")
  }, renderer);

  if (data.instance.arrow) {
    setStyles(data.instance.arrow, data.offsets.arrow, renderer);
  }

  updateContainerClass(data, renderer);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function PositioningOptions() {}

if (false) {}

var PositioningService = /*#__PURE__*/function () {
  /**
   * @param {?} ngZone
   * @param {?} rendererFactory
   * @param {?} platformId
   */
  function PositioningService(ngZone, rendererFactory, platformId) {
    var _this = this;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PositioningService);

    this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    this.positionElements = new Map();
    this.isDisabled = false;

    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(platformId)) {
      ngZone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this.triggerEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'scroll', {
          passive: true
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize', {
          passive: true
        }),
        /* tslint:disable-next-line: deprecation */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"]), _this.update$$);

        _this.triggerEvent$.subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this.isDisabled) {
            return;
          }

          _this.positionElements
          /* tslint:disable-next-line: no-any */
          .forEach(
          /**
          * @param {?} positionElement
          * @return {?}
          */
          function (positionElement) {
            positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
          });
        });
      });
    }
  }
  /**
   * @param {?} options
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PositioningService, [{
    key: "position",
    value: function position(options) {
      this.addPositionElement(options);
    }
    /**
     * @return {?}
     */

  }, {
    key: "disable",

    /**
     * @return {?}
     */
    value: function disable() {
      this.isDisabled = true;
    }
    /**
     * @return {?}
     */

  }, {
    key: "enable",
    value: function enable() {
      this.isDisabled = false;
    }
    /**
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "addPositionElement",
    value: function addPositionElement(options) {
      this.positionElements.set(_getHtmlElement(options.element), options);
    }
    /**
     * @return {?}
     */

  }, {
    key: "calcPosition",
    value: function calcPosition() {
      this.update$$.next();
    }
    /**
     * @param {?} elRef
     * @return {?}
     */

  }, {
    key: "deletePositionElement",
    value: function deletePositionElement(elRef) {
      this.positionElements.delete(_getHtmlElement(elRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "event$",
    get: function get() {
      return this.triggerEvent$;
    }
  }]);

  return PositioningService;
}();

PositioningService.ɵfac = function PositioningService_Factory(t) {
  return new (t || PositioningService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]));
};

PositioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PositioningService,
  factory: PositioningService.ɵfac
});
/** @nocollapse */

PositioningService.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"]
  }, {
    type: Number,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PositioningService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"]
    }, {
      type: Number,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
      }]
    }];
  }, null);
})();

if (false) {}
/**
 * @param {?} element
 * @return {?}
 */


function _getHtmlElement(element) {
  // it means that we got a selector
  if (typeof element === 'string') {
    return document.querySelector(element);
  }

  if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) {
    return element.nativeElement;
  }

  return element;
}
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
//# sourceMappingURL=vendors~components-dropdown-demo-dropdown-module~components-modal-demo-modal-module~components-popov~80deca51.js.map