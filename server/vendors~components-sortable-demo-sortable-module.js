exports.ids = ["vendors~components-sortable-demo-sortable-module"];
exports.modules = {

/***/ "PKsY":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/sortable/fesm2015/bao-tran-angular-sortable.js ***!
  \***************************************************************************************************/
/*! exports provided: DraggableItemService, SortableComponent, SortableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return DraggableItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return SortableModule; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "8vcG");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function SortableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragover", function SortableComponent_div_1_Template_div_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r4.onItemDragover($event, 0);
    })("dragenter", function SortableComponent_div_1_Template_div_dragenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r6.cancelEvent($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.placeholderClass)("ngStyle", ctx_r0.placeholderStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.placeholderItem);
  }
}

function SortableComponent_div_2_ng_template_1_Template(rf, ctx) {}

var _c0 = function _c0(a0, a1) {
  return [a0, a1];
};

var _c1 = function _c1(a0, a1) {
  return {
    item: a0,
    index: a1
  };
};

function SortableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragstart", function SortableComponent_div_2_Template_div_dragstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      var item_r7 = ctx.$implicit;
      var i_r8 = ctx.index;
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r10.onItemDragstart($event, item_r7, i_r8);
    })("dragend", function SortableComponent_div_2_Template_div_dragend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r12.resetActiveItem($event);
    })("dragover", function SortableComponent_div_2_Template_div_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      var i_r8 = ctx.index;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r13.onItemDragover($event, i_r8);
    })("dragenter", function SortableComponent_div_2_Template_div_dragenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r14.cancelEvent($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SortableComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, ctx_r1.itemClass, i_r8 === ctx_r1.activeItem ? ctx_r1.itemActiveClass : ""))("ngStyle", ctx_r1.getItemStyle(i_r8 === ctx_r1.activeItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-grabbed", i_r8 === ctx_r1.activeItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate || _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c1, item_r7, i_r8));
  }
}

function SortableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }

  if (rf & 2) {
    var item_r15 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.value);
  }
}

var DraggableItemService = /*#__PURE__*/function () {
  function DraggableItemService() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DraggableItemService);

    this.onCapture = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
  }
  /**
   * @param {?} item
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DraggableItemService, [{
    key: "dragStart",
    value: function dragStart(item) {
      this.draggableItem = item;
    }
    /**
     * @return {?}
     */

  }, {
    key: "getItem",
    value: function getItem() {
      return this.draggableItem;
    }
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */

  }, {
    key: "captureItem",
    value: function captureItem(overZoneIndex, newIndex) {
      if (this.draggableItem.overZoneIndex !== overZoneIndex) {
        this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
        this.draggableItem.overZoneIndex = overZoneIndex;
        this.onCapture.next(this.draggableItem);
        this.draggableItem = Object.assign({}, this.draggableItem, {
          overZoneIndex: overZoneIndex,
          i: newIndex
        });
      }

      return this.draggableItem;
    }
    /**
     * @return {?}
     */

  }, {
    key: "onCaptureItem",
    value: function onCaptureItem() {
      return this.onCapture;
    }
  }]);

  return DraggableItemService;
}();

DraggableItemService.ɵfac = function DraggableItemService_Factory(t) {
  return new (t || DraggableItemService)();
};

DraggableItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DraggableItemService,
  factory: DraggableItemService.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DraggableItemService, [{
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

/* tslint:disable */

/* tslint:enable */


var SortableComponent = /*#__PURE__*/function () {
  /**
   * @param {?} transfer
   */
  function SortableComponent(transfer) {
    var _this = this;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SortableComponent);

    /**
     * class name for items wrapper
     */
    this.wrapperClass = '';
    /**
     * style object for items wrapper
     */

    this.wrapperStyle = {};
    /**
     * class name for item
     */

    this.itemClass = '';
    /**
     * style object for item
     */

    this.itemStyle = {};
    /**
     * class name for active item
     */

    this.itemActiveClass = '';
    /**
     * style object for active item
     */

    this.itemActiveStyle = {};
    /**
     * class name for placeholder
     */

    this.placeholderClass = '';
    /**
     * style object for placeholder
     */

    this.placeholderStyle = {};
    /**
     * placeholder item which will be shown if collection is empty
     */

    this.placeholderItem = '';
    /**
     * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
     *  Returns new items collection as a payload.
     */

    /* tslint:disable-next-line: no-any */

    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.showPlaceholder = false;
    this.activeItem = -1;
    /* tslint:disable-next-line: no-any */

    this.onTouched = Function.prototype;
    /* tslint:disable-next-line: no-any */

    this.onChanged = Function.prototype;
    this.transfer = transfer;
    this.currentZoneIndex = SortableComponent.globalZoneIndex++;
    this.transfer.onCaptureItem().subscribe(
    /**
    * @param {?} item
    * @return {?}
    */
    function (item) {
      return _this.onDrop(item);
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SortableComponent, [{
    key: "onItemDragstart",

    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    value: function onItemDragstart(event, item, i) {
      this.initDragstartEvent(event);
      this.onTouched();
      this.transfer.dragStart({
        event: event,
        item: item,
        i: i,
        initialIndex: i,
        lastZoneIndex: this.currentZoneIndex,
        overZoneIndex: this.currentZoneIndex
      });
    }
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */

  }, {
    key: "onItemDragover",
    value: function onItemDragover(event, i) {
      if (!this.transfer.getItem()) {
        return;
      }

      event.preventDefault();
      /** @type {?} */

      var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
      /* tslint:disable-next-line: no-any */

      /** @type {?} */

      var newArray = [];

      if (!this.items.length) {
        newArray = [dragItem.item];
      } else if (dragItem.i > i) {
        newArray = [].concat(Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.items.slice(0, i)), [dragItem.item], Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.items.slice(i, dragItem.i)), Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.items.slice(dragItem.i + 1)));
      } else {
        // this.draggedItem.i < i
        newArray = [].concat(Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.items.slice(0, dragItem.i)), Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.items.slice(dragItem.i + 1, i + 1)), [dragItem.item], Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.items.slice(i + 1)));
      }

      this.items = newArray;
      dragItem.i = i;
      this.activeItem = i;
      this.updatePlaceholderState();
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "cancelEvent",
    value: function cancelEvent(event) {
      if (!this.transfer.getItem() || !event) {
        return;
      }

      event.preventDefault();
    }
    /**
     * @param {?} item
     * @return {?}
     */

  }, {
    key: "onDrop",
    value: function onDrop(item) {
      if (item && item.overZoneIndex !== this.currentZoneIndex && item.lastZoneIndex === this.currentZoneIndex) {
        this.items = this.items.filter(
        /**
        * @param {?} x
        * @param {?} i
        * @return {?}
        */
        function (x, i) {
          return i !== item.i;
        });
        this.updatePlaceholderState();
      }

      this.resetActiveItem(undefined);
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "resetActiveItem",
    value: function resetActiveItem(event) {
      this.cancelEvent(event);
      this.activeItem = -1;
    }
    /**
     * @param {?} callback
     * @return {?}
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(callback) {
      this.onChanged = callback;
    }
    /**
     * @param {?} callback
     * @return {?}
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(callback) {
      this.onTouched = callback;
    }
    /* tslint:disable-next-line: no-any */

    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      var _this2 = this;

      if (value) {
        /* tslint:disable-next-line: no-any */
        this.items = value.map(
        /**
        * @param {?} x
        * @param {?} i
        * @return {?}
        */
        function (x, i) {
          return {
            id: i,
            initData: x,
            value: _this2.fieldName ? x[_this2.fieldName] : x
          };
        });
      } else {
        this.items = [];
      }

      this.updatePlaceholderState();
    }
    /**
     * @return {?}
     */

  }, {
    key: "updatePlaceholderState",
    value: function updatePlaceholderState() {
      this.showPlaceholder = !this._items.length;
    }
    /**
     * @param {?} isActive
     * @return {?}
     */

  }, {
    key: "getItemStyle",
    value: function getItemStyle(isActive) {
      return isActive ? Object.assign({}, this.itemStyle, this.itemActiveStyle) : this.itemStyle;
    } // tslint:disable-next-line

    /**
     * @private
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "initDragstartEvent",
    value: function initDragstartEvent(event) {
      // it is necessary for mozilla
      // data type should be 'Text' instead of 'text/plain' to keep compatibility
      // with IE
      event.dataTransfer.setData('Text', 'placeholder');
    }
  }, {
    key: "items",
    get: function get() {
      return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      this._items = value;
      /** @type {?} */

      var out = this.items.map(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x.initData;
      });
      this.onChanged(out);
      this.onChange.emit(out);
    }
  }]);

  return SortableComponent;
}();

SortableComponent.ɵfac = function SortableComponent_Factory(t) {
  return new (t || SortableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DraggableItemService));
};

SortableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SortableComponent,
  selectors: [["bs-sortable"]],
  inputs: {
    wrapperClass: "wrapperClass",
    wrapperStyle: "wrapperStyle",
    itemClass: "itemClass",
    itemStyle: "itemStyle",
    itemActiveClass: "itemActiveClass",
    itemActiveStyle: "itemActiveStyle",
    placeholderClass: "placeholderClass",
    placeholderStyle: "placeholderStyle",
    placeholderItem: "placeholderItem",
    fieldName: "fieldName",
    itemTemplate: "itemTemplate"
  },
  outputs: {
    onChange: "onChange"
  },
  exportAs: ["bs-sortable"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return SortableComponent;
    }),
    multi: true
  }])],
  decls: 5,
  vars: 4,
  consts: [[3, "ngClass", "ngStyle", "dragover", "dragenter", "drop", "mouseleave"], [3, "ngClass", "ngStyle", "dragover", "dragenter", 4, "ngIf"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter", 4, "ngFor", "ngForOf"], ["defItemTemplate", ""], [3, "ngClass", "ngStyle", "dragover", "dragenter"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function SortableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragover", function SortableComponent_Template_div_dragover_0_listener($event) {
        return ctx.cancelEvent($event);
      })("dragenter", function SortableComponent_Template_div_dragenter_0_listener($event) {
        return ctx.cancelEvent($event);
      })("drop", function SortableComponent_Template_div_drop_0_listener($event) {
        return ctx.resetActiveItem($event);
      })("mouseleave", function SortableComponent_Template_div_mouseleave_0_listener($event) {
        return ctx.resetActiveItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SortableComponent_div_1_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SortableComponent_div_2_Template, 2, 11, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SortableComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.wrapperClass)("ngStyle", ctx.wrapperStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showPlaceholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
  encapsulation: 2
});
SortableComponent.globalZoneIndex = 0;
/** @nocollapse */

SortableComponent.ctorParameters = function () {
  return [{
    type: DraggableItemService
  }];
};

SortableComponent.propDecorators = {
  fieldName: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  wrapperClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  wrapperStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  itemClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  itemStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  itemActiveClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  itemActiveStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  placeholderClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  placeholderStyle: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  placeholderItem: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  itemTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  onChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SortableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'bs-sortable',
      exportAs: 'bs-sortable',
      template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return SortableComponent;
        }),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: DraggableItemService
    }];
  }, {
    wrapperClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    wrapperStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    itemClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    itemStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    itemActiveClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    itemActiveStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    placeholderClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    placeholderStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    placeholderItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    fieldName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var SortableModule = /*#__PURE__*/function () {
  function SortableModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SortableModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SortableModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: SortableModule,
        providers: [DraggableItemService]
      };
    }
  }]);

  return SortableModule;
}();

SortableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SortableModule
});
SortableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function SortableModule_Factory(t) {
    return new (t || SortableModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SortableModule, {
    declarations: function declarations() {
      return [SortableComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [SortableComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SortableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [SortableComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      exports: [SortableComponent]
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
//# sourceMappingURL=vendors~components-sortable-demo-sortable-module.js.map