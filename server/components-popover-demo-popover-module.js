exports.ids = ["components-popover-demo-popover-module"];
exports.modules = {

/***/ "/4Xk":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/triggers-manual/triggers-manual.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  <span popover=\"Hello there! I was triggered manually\"\r\n        triggers=\"\" #pop=\"bs-popover\">\r\n  This text has attached popover\r\n  </span>\r\n</p>\r\n\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\r\n  Show\r\n</button>\r\n<button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\r\n  Hide\r\n</button>\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"pop.toggle()\">\r\n  Toggle\r\n</button>\r\n");

/***/ }),

/***/ "/8N6":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/dismiss/dismiss.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverDismissComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverDismissComponent = /** @class */ (function () {
    function DemoPopoverDismissComponent() {
    }
    DemoPopoverDismissComponent.ɵfac = function DemoPopoverDismissComponent_Factory(t) { return new (t || DemoPopoverDismissComponent)(); };
    DemoPopoverDismissComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverDismissComponent, selectors: [["demo-popover-dismiss"]], decls: 2, vars: 0, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Dismissible popover", "triggers", "focus", 1, "btn", "btn-success"]], template: function DemoPopoverDismissComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Dismissible popover\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverDismissComponent;
}());
exports.DemoPopoverDismissComponent = DemoPopoverDismissComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverDismissComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-dismiss',
                templateUrl: './dismiss.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "/Obq":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/config/config.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n  Preconfigured popover\r\n</button>\r\n");

/***/ }),

/***/ "/mwh":
/*!***********************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/triggers-manual/triggers-manual.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverTriggersManualComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverTriggersManualComponent = /** @class */ (function () {
    function DemoPopoverTriggersManualComponent() {
    }
    DemoPopoverTriggersManualComponent.ɵfac = function DemoPopoverTriggersManualComponent_Factory(t) { return new (t || DemoPopoverTriggersManualComponent)(); };
    DemoPopoverTriggersManualComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverTriggersManualComponent, selectors: [["demo-popover-triggers-manual"]], decls: 10, vars: 0, consts: [["popover", "Hello there! I was triggered manually", "triggers", ""], ["pop", "bs-popover"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoPopoverTriggersManualComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "span", 0, 1);
            i0.ɵɵtext(3, " This text has attached popover ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function DemoPopoverTriggersManualComponent_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(2); return _r0.show(); });
            i0.ɵɵtext(5, " Show\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function DemoPopoverTriggersManualComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(2); return _r0.hide(); });
            i0.ɵɵtext(7, " Hide\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function DemoPopoverTriggersManualComponent_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(2); return _r0.toggle(); });
            i0.ɵɵtext(9, " Toggle\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverTriggersManualComponent;
}());
exports.DemoPopoverTriggersManualComponent = DemoPopoverTriggersManualComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverTriggersManualComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-triggers-manual',
                templateUrl: './triggers-manual.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "1R/L":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/styling-local/styling-local.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-info\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n  I have component level styling\r\n</button>\r\n");

/***/ }),

/***/ "2TEx":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+popover/demo-popover.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var popover_1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var demos_1 = __webpack_require__(/*! ./demos */ "vC59");
var popover_section_component_1 = __webpack_require__(/*! ./popover-section.component */ "DM1+");
var demo_popover_routes_1 = __webpack_require__(/*! ./demo-popover.routes */ "ofy6");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/adaptive-position/adaptive-position */ "7PlQ");
var i2 = __webpack_require__(/*! ./demos/basic/basic */ "ymfy");
var i3 = __webpack_require__(/*! ./demos/trigger-by-isopen-property/trigger-by-isopen-property */ "5hT+");
var i4 = __webpack_require__(/*! ./demos/class/class */ "CPtT");
var i5 = __webpack_require__(/*! ./demos/config/config */ "qLbZ");
var i6 = __webpack_require__(/*! ./demos/container/container */ "ylgG");
var i7 = __webpack_require__(/*! ./demos/popover-context/popover-context */ "721/");
var i8 = __webpack_require__(/*! ./demos/custom-content/custom-content */ "XkU9");
var i9 = __webpack_require__(/*! ./demos/delay/delay */ "hasa");
var i10 = __webpack_require__(/*! ./demos/dismiss/dismiss */ "/8N6");
var i11 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "HwAr");
var i12 = __webpack_require__(/*! ./demos/dynamic-html/dynamic-html */ "sPJM");
var i13 = __webpack_require__(/*! ./demos/events/events */ "mejE");
var i14 = __webpack_require__(/*! ./demos/outside-click/outside-click */ "d6dQ");
var i15 = __webpack_require__(/*! ./demos/placement/placement */ "zZ1n");
var i16 = __webpack_require__(/*! ./demos/styling-global/styling-global */ "6pdD");
var i17 = __webpack_require__(/*! ./demos/styling-local/styling-local */ "O13R");
var i18 = __webpack_require__(/*! ./demos/triggers-custom/triggers-custom */ "Q+3b");
var i19 = __webpack_require__(/*! ./demos/triggers-manual/triggers-manual */ "/mwh");
var i20 = __webpack_require__(/*! ./demos/corner-placement/corner-placement */ "5V8Q");
var i21 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var i22 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoPopoverModule = /** @class */ (function () {
    function DemoPopoverModule() {
    }
    DemoPopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoPopoverModule });
    DemoPopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoPopoverModule_Factory(t) { return new (t || DemoPopoverModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                popover_1.PopoverModule.forRoot(),
                router_1.RouterModule.forChild(demo_popover_routes_1.routes)
            ]] });
    return DemoPopoverModule;
}());
exports.DemoPopoverModule = DemoPopoverModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoPopoverModule, { declarations: [popover_section_component_1.PopoverSectionComponent, i1.DemoPopoverAdaptivePositionComponent, i2.DemoPopoverBasicComponent, i3.DemoPopoverByIsOpenPropComponent, i4.DemoPopoverClassComponent, i5.DemoPopoverConfigComponent, i6.DemoPopoverContainerComponent, i7.DemoPopoverContextComponent, i8.DemoPopoverCustomContentComponent, i9.DemoPopoverDelayComponent, i10.DemoPopoverDismissComponent, i11.DemoPopoverDynamicComponent, i12.DemoPopoverDynamicHtmlComponent, i13.DemoPopoverEventsComponent, i14.DemoPopoverOutsideClickComponent, i15.DemoPopoverPlacementComponent, i16.DemoPopoverStylingGlobalComponent, i17.DemoPopoverStylingLocalComponent, i18.DemoPopoverTriggersCustomComponent, i19.DemoPopoverTriggersManualComponent, i20.DemoPopoverCornerPlacementComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i21.PopoverModule, i22.RouterModule], exports: [popover_section_component_1.PopoverSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    popover_section_component_1.PopoverSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    popover_1.PopoverModule.forRoot(),
                    router_1.RouterModule.forChild(demo_popover_routes_1.routes)
                ],
                exports: [popover_section_component_1.PopoverSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "3XCn":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/class/class.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" containerClass=\"customClass\">\r\n  Custom class demo\r\n</button>\r\n\r\n");

/***/ }),

/***/ "4liN":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/delay/delay.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" [delay]=\"500\">\r\n  Popover with 0.5sec delay\r\n</button>\r\n\r\n");

/***/ }),

/***/ "5V8Q":
/*!*************************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/corner-placement/corner-placement.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverCornerPlacementComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
var i3 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
function DemoPopoverCornerPlacementComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var placement_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", placement_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", placement_r1, " ");
} }
var DemoPopoverCornerPlacementComponent = /** @class */ (function () {
    function DemoPopoverCornerPlacementComponent() {
        this.placements = [
            'top left',
            'top right',
            'right top',
            'right bottom',
            'bottom right',
            'bottom left',
            'left bottom',
            'left top'
        ];
        this.placement = 'top left';
    }
    DemoPopoverCornerPlacementComponent.ɵfac = function DemoPopoverCornerPlacementComponent_Factory(t) { return new (t || DemoPopoverCornerPlacementComponent)(); };
    DemoPopoverCornerPlacementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverCornerPlacementComponent, selectors: [["demo-popover-corner-placement"]], decls: 5, vars: 5, consts: [[1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-default", "btn-secondary", 3, "popoverTitle", "placement"], [3, "value"]], template: function DemoPopoverCornerPlacementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "select", 0);
            i0.ɵɵlistener("ngModelChange", function DemoPopoverCornerPlacementComponent_Template_select_ngModelChange_1_listener($event) { return ctx.placement = $event; });
            i0.ɵɵtemplate(2, DemoPopoverCornerPlacementComponent_option_2_Template, 2, 2, "option", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.placement);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.placements);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("popoverTitle", "Popover on " + ctx.placement)("placement", ctx.placement);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", "Popover on " + ctx.placement, " ");
        } }, directives: [i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgForOf, i3.PopoverDirective, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    return DemoPopoverCornerPlacementComponent;
}());
exports.DemoPopoverCornerPlacementComponent = DemoPopoverCornerPlacementComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverCornerPlacementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-corner-placement',
                templateUrl: './corner-placement.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "5hT+":
/*!*********************************************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/trigger-by-isopen-property/trigger-by-isopen-property.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverByIsOpenPropComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverByIsOpenPropComponent = /** @class */ (function () {
    function DemoPopoverByIsOpenPropComponent() {
        this.isOpen = false;
    }
    DemoPopoverByIsOpenPropComponent.ɵfac = function DemoPopoverByIsOpenPropComponent_Factory(t) { return new (t || DemoPopoverByIsOpenPropComponent)(); };
    DemoPopoverByIsOpenPropComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverByIsOpenPropComponent, selectors: [["demo-popover-trigger-by-isopen"]], decls: 5, vars: 1, consts: [["popover", "Hello there! I was triggered by changing isOpen property", "triggers", "", 3, "isOpen"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function DemoPopoverByIsOpenPropComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "span", 0);
            i0.ɵɵtext(2, " This text has attached popover ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function DemoPopoverByIsOpenPropComponent_Template_button_click_3_listener() { return ctx.isOpen = !ctx.isOpen; });
            i0.ɵɵtext(4, " Toggle\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("isOpen", ctx.isOpen);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverByIsOpenPropComponent;
}());
exports.DemoPopoverByIsOpenPropComponent = DemoPopoverByIsOpenPropComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverByIsOpenPropComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-trigger-by-isopen',
                templateUrl: './trigger-by-isopen-property.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "6pdD":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/styling-global/styling-global.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverStylingGlobalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverStylingGlobalComponent = /** @class */ (function () {
    function DemoPopoverStylingGlobalComponent() {
    }
    DemoPopoverStylingGlobalComponent.ɵfac = function DemoPopoverStylingGlobalComponent_Factory(t) { return new (t || DemoPopoverStylingGlobalComponent)(); };
    DemoPopoverStylingGlobalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverStylingGlobalComponent, selectors: [["demo-popover-styling-global"]], decls: 2, vars: 0, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-success"]], template: function DemoPopoverStylingGlobalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " I was globally styled\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], styles: ["\n  .popover {\n    background-color: #7B1FA2;\n    color: #fff;\n  }\n  .popover>.arrow:after {\n    border-top-color: #7B1FA2 !important;\n  }\n"], encapsulation: 2 });
    return DemoPopoverStylingGlobalComponent;
}());
exports.DemoPopoverStylingGlobalComponent = DemoPopoverStylingGlobalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverStylingGlobalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-styling-global',
                templateUrl: './styling-global.html',
                encapsulation: core_1.ViewEncapsulation.None
            }]
    }], null, null); })();


/***/ }),

/***/ "721/":
/*!***********************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/popover-context/popover-context.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverContextComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
function DemoPopoverContextComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var message_r2 = ctx.message;
    i0.ɵɵtextInterpolate(message_r2);
} }
var DemoPopoverContextComponent = /** @class */ (function () {
    function DemoPopoverContextComponent() {
        this.context = {
            message: 'Hello there!'
        };
    }
    DemoPopoverContextComponent.ɵfac = function DemoPopoverContextComponent_Factory(t) { return new (t || DemoPopoverContextComponent)(); };
    DemoPopoverContextComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverContextComponent, selectors: [["demo-popover-context"]], decls: 4, vars: 2, consts: [["popTemplate", ""], ["type", "button", 1, "btn", "btn-primary", 3, "popover", "popoverContext"]], template: function DemoPopoverContextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoPopoverContextComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " Open popover with custom context\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("popover", _r0)("popoverContext", ctx.context);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverContextComponent;
}());
exports.DemoPopoverContextComponent = DemoPopoverContextComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverContextComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-context',
                templateUrl: './popover-context.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "73z3":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/config/config.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { PopoverConfig } from 'bao-tran-angular/popover';\n\n// such override allows to keep some initial values\n\nexport function getPopoverConfig(): PopoverConfig {\n  return Object.assign(new PopoverConfig(), {\n    placement: 'right',\n    container: 'body',\n    triggers: 'focus',\n    delay: 500\n  });\n}\n\n@Component({\n  selector: 'demo-popover-config',\n  templateUrl: './config.html',\n  providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }]\n})\nexport class DemoPopoverConfigComponent {}\n");

/***/ }),

/***/ "7PlQ":
/*!***************************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/adaptive-position/adaptive-position.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverAdaptivePositionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverAdaptivePositionComponent = /** @class */ (function () {
    function DemoPopoverAdaptivePositionComponent() {
    }
    DemoPopoverAdaptivePositionComponent.ɵfac = function DemoPopoverAdaptivePositionComponent_Factory(t) { return new (t || DemoPopoverAdaptivePositionComponent)(); };
    DemoPopoverAdaptivePositionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverAdaptivePositionComponent, selectors: [["demo-popover-adaptive-position"]], decls: 4, vars: 2, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", "placement", "top", 1, "btn", "btn-default", "btn-secondary", 3, "adaptivePosition"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on right", "placement", "right", 1, "btn", "btn-default", "btn-secondary", 3, "adaptivePosition"]], template: function DemoPopoverAdaptivePositionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Popover on top\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " Popover on right\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("adaptivePosition", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("adaptivePosition", false);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverAdaptivePositionComponent;
}());
exports.DemoPopoverAdaptivePositionComponent = DemoPopoverAdaptivePositionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverAdaptivePositionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-adaptive-position',
                templateUrl: './adaptive-position.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Bfz7":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/outside-click/outside-click.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        [outsideClick]=\"true\">\r\n  Live demo\r\n</button>\r\n\r\n");

/***/ }),

/***/ "CPtT":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/class/class.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverClassComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverClassComponent = /** @class */ (function () {
    function DemoPopoverClassComponent() {
    }
    DemoPopoverClassComponent.ɵfac = function DemoPopoverClassComponent_Factory(t) { return new (t || DemoPopoverClassComponent)(); };
    DemoPopoverClassComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverClassComponent, selectors: [["demo-popover-class"]], decls: 2, vars: 0, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "containerClass", "customClass", 1, "btn", "btn-primary"]], template: function DemoPopoverClassComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Custom class demo\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverClassComponent;
}());
exports.DemoPopoverClassComponent = DemoPopoverClassComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverClassComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-class',
                templateUrl: './class.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "D/F6":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/docs/usage.md ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { PopoverModule } from 'bao-tran-angular/popover';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { PopoverModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [PopoverModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "DM1+":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+popover/popover-section.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var popover_section_list_1 = __webpack_require__(/*! ./popover-section.list */ "Y2T3");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var PopoverSectionComponent = /** @class */ (function () {
    function PopoverSectionComponent() {
        this.name = 'Popover';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/popover';
        this.componentContent = popover_section_list_1.demoComponentContent;
    }
    PopoverSectionComponent.ɵfac = function PopoverSectionComponent_Factory(t) { return new (t || PopoverSectionComponent)(); };
    PopoverSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverSectionComponent, selectors: [["tooltip-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function PopoverSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Add small overlay content, like those found in iOS, to any element for housing secondary information.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return PopoverSectionComponent;
}());
exports.PopoverSectionComponent = PopoverSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'tooltip-section',
                templateUrl: './popover-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "E4Vy":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/dynamic-html/dynamic-html.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-dynamic-html',\r\n  templateUrl: './dynamic-html.html'\r\n})\r\nexport class DemoPopoverDynamicHtmlComponent {\r\n  html: string = `\r\n<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>`;\r\n}\r\n");

/***/ }),

/***/ "Hpi9":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/outside-click/outside-click.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-outside-click',\r\n  templateUrl: './outside-click.html'\r\n})\r\nexport class DemoPopoverOutsideClickComponent {}\r\n");

/***/ }),

/***/ "HwAr":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/dynamic/dynamic.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverDynamicComponent = /** @class */ (function () {
    function DemoPopoverDynamicComponent() {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
    }
    DemoPopoverDynamicComponent.ɵfac = function DemoPopoverDynamicComponent_Factory(t) { return new (t || DemoPopoverDynamicComponent)(); };
    DemoPopoverDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverDynamicComponent, selectors: [["demo-popover-dynamic"]], decls: 2, vars: 2, consts: [["type", "button", 1, "btn", "btn-info", 3, "popover", "popoverTitle"]], template: function DemoPopoverDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Simple binding\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("popover", ctx.content)("popoverTitle", ctx.title);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverDynamicComponent;
}());
exports.DemoPopoverDynamicComponent = DemoPopoverDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-dynamic',
                templateUrl: './dynamic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Jzy3":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/events/events.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        (onShown)=\"onShown()\" (onHidden)=\"onHidden()\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n  Live demo\r\n</button>\r\n<br>\r\n<br>\r\n<pre class=\"card card-block card-header mb-3\">Event: {{message}}</pre>\r\n");

/***/ }),

/***/ "K7pR":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/dismiss/dismiss.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-success\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Dismissible popover\"\r\n        triggers=\"focus\">\r\n  Dismissible popover\r\n</button>\r\n\r\n");

/***/ }),

/***/ "KCn7":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/class/class.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-class',\r\n  templateUrl: './class.html'\r\n})\r\nexport class DemoPopoverClassComponent {}\r\n");

/***/ }),

/***/ "KQWC":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/triggers-manual/triggers-manual.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-triggers-manual',\r\n  templateUrl: './triggers-manual.html'\r\n})\r\nexport class DemoPopoverTriggersManualComponent {}\r\n");

/***/ }),

/***/ "L8Sz":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/trigger-by-isopen-property/trigger-by-isopen-property.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-trigger-by-isopen',\r\n  templateUrl: './trigger-by-isopen-property.html'\r\n})\r\nexport class DemoPopoverByIsOpenPropComponent {\r\n  isOpen = false;\r\n}\r\n");

/***/ }),

/***/ "LGz+":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/dynamic-html/dynamic-html.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #popTemplate>Here we go: <div [innerHtml]=\"html\"></div></ng-template>\r\n<button type=\"button\" class=\"btn btn-success\"\r\n        [popover]=\"popTemplate\" popoverTitle=\"Dynamic html inside\">\r\n  Show me popover with html\r\n</button>\r\n");

/***/ }),

/***/ "O13R":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/styling-local/styling-local.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverStylingLocalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverStylingLocalComponent = /** @class */ (function () {
    function DemoPopoverStylingLocalComponent() {
    }
    DemoPopoverStylingLocalComponent.ɵfac = function DemoPopoverStylingLocalComponent_Factory(t) { return new (t || DemoPopoverStylingLocalComponent)(); };
    DemoPopoverStylingLocalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverStylingLocalComponent, selectors: [["demo-popover-styling-local"]], decls: 2, vars: 0, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-info"]], template: function DemoPopoverStylingLocalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " I have component level styling\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], styles: ["[_nghost-%COMP%]     .popover {\n  background-color: #009688;\n  color: #fff;\n}\n[_nghost-%COMP%]     .popover>.arrow:after {\n  border-top-color: #009688;\n}"] });
    return DemoPopoverStylingLocalComponent;
}());
exports.DemoPopoverStylingLocalComponent = DemoPopoverStylingLocalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverStylingLocalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-styling-local',
                templateUrl: './styling-local.html',
                /* tslint:disable no-unused-css*/
                styles: [
                    "\n:host >>> .popover {\n  background-color: #009688;\n  color: #fff;\n}\n:host >>> .popover>.arrow:after {\n  border-top-color: #009688;\n}\n  "
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ow0u":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/adaptive-position/adaptive-position.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Popover on top\"\r\n        [adaptivePosition]=\"false\"\r\n        placement=\"top\">\r\n  Popover on top\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Popover on right\"\r\n        [adaptivePosition]=\"false\"\r\n        placement=\"right\">\r\n  Popover on right\r\n</button>");

/***/ }),

/***/ "Q+3b":
/*!***********************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/triggers-custom/triggers-custom.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverTriggersCustomComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverTriggersCustomComponent = /** @class */ (function () {
    function DemoPopoverTriggersCustomComponent() {
    }
    DemoPopoverTriggersCustomComponent.ɵfac = function DemoPopoverTriggersCustomComponent_Factory(t) { return new (t || DemoPopoverTriggersCustomComponent)(); };
    DemoPopoverTriggersCustomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverTriggersCustomComponent, selectors: [["demo-popover-triggers-custom"]], decls: 9, vars: 0, consts: [[1, "row"], [1, "col-md-2"], ["type", "button", "popover", "I will hide on blur", "triggers", "mouseenter:mouseleave", 1, "btn", "btn-info"], ["type", "button", "popover", "Double click one more time", "triggers", "dblclick", 1, "btn", "btn-info"], [1, "col-md-3"], ["type", "text", "placeholder", "Show popover on input change", "popover", "I will hide on blur", "triggers", "keypress:focusout", 1, "form-control"]], template: function DemoPopoverTriggersCustomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵtext(3, " Hover over me! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵtext(6, " Double click me! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵelement(8, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverTriggersCustomComponent;
}());
exports.DemoPopoverTriggersCustomComponent = DemoPopoverTriggersCustomComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverTriggersCustomComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-triggers-custom',
                templateUrl: './triggers-custom.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "SUq1":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/custom-content/custom-content.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #popTemplate>Just another: {{content}}</ng-template>\r\n<button type=\"button\" class=\"btn btn-warning\"\r\n        [popover]=\"popTemplate\" popoverTitle=\"Template ref content inside\">\r\n  TemplateRef binding\r\n</button>\r\n");

/***/ }),

/***/ "TNRt":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/adaptive-position/adaptive-position.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-adaptive-position',\r\n  templateUrl: './adaptive-position.html'\r\n})\r\nexport class DemoPopoverAdaptivePositionComponent {}\r\n");

/***/ }),

/***/ "UdKa":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/dismiss/dismiss.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-dismiss',\r\n  templateUrl: './dismiss.html'\r\n})\r\nexport class DemoPopoverDismissComponent {}\r\n");

/***/ }),

/***/ "Vm6/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/basic/basic.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoPopoverBasicComponent {}\r\n");

/***/ }),

/***/ "XkU9":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/custom-content/custom-content.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverCustomContentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
function DemoPopoverCustomContentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1("Just another: ", ctx_r1.content, "");
} }
var DemoPopoverCustomContentComponent = /** @class */ (function () {
    function DemoPopoverCustomContentComponent() {
        this.title = 'Welcome word';
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
    }
    DemoPopoverCustomContentComponent.ɵfac = function DemoPopoverCustomContentComponent_Factory(t) { return new (t || DemoPopoverCustomContentComponent)(); };
    DemoPopoverCustomContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverCustomContentComponent, selectors: [["demo-popover-custom-content"]], decls: 4, vars: 1, consts: [["popTemplate", ""], ["type", "button", "popoverTitle", "Template ref content inside", 1, "btn", "btn-warning", 3, "popover"]], template: function DemoPopoverCustomContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoPopoverCustomContentComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " TemplateRef binding\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("popover", _r0);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverCustomContentComponent;
}());
exports.DemoPopoverCustomContentComponent = DemoPopoverCustomContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverCustomContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-custom-content',
                templateUrl: './custom-content.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Y2T3":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+popover/popover-section.list.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var adaptive_position_1 = __webpack_require__(/*! ./demos/adaptive-position/adaptive-position */ "7PlQ");
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "ymfy");
var trigger_by_isopen_property_1 = __webpack_require__(/*! ./demos/trigger-by-isopen-property/trigger-by-isopen-property */ "5hT+");
var class_1 = __webpack_require__(/*! ./demos/class/class */ "CPtT");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "qLbZ");
var container_1 = __webpack_require__(/*! ./demos/container/container */ "ylgG");
var popover_context_1 = __webpack_require__(/*! ./demos/popover-context/popover-context */ "721/");
var custom_content_1 = __webpack_require__(/*! ./demos/custom-content/custom-content */ "XkU9");
var delay_1 = __webpack_require__(/*! ./demos/delay/delay */ "hasa");
var dismiss_1 = __webpack_require__(/*! ./demos/dismiss/dismiss */ "/8N6");
var dynamic_1 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "HwAr");
var dynamic_html_1 = __webpack_require__(/*! ./demos/dynamic-html/dynamic-html */ "sPJM");
var events_1 = __webpack_require__(/*! ./demos/events/events */ "mejE");
var outside_click_1 = __webpack_require__(/*! ./demos/outside-click/outside-click */ "d6dQ");
var placement_1 = __webpack_require__(/*! ./demos/placement/placement */ "zZ1n");
var styling_local_1 = __webpack_require__(/*! ./demos/styling-local/styling-local */ "O13R");
var triggers_custom_1 = __webpack_require__(/*! ./demos/triggers-custom/triggers-custom */ "Q+3b");
var triggers_manual_1 = __webpack_require__(/*! ./demos/triggers-manual/triggers-manual */ "/mwh");
var corner_placement_1 = __webpack_require__(/*! ./demos/corner-placement/corner-placement */ "5V8Q");
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "D/F6")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: index_2.ExamplesComponent,
        content: [
            {
                title: 'Basic',
                anchor: 'basic',
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.ts */ "Vm6/"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "h/Mc"),
                outlet: basic_1.DemoPopoverBasicComponent
            },
            {
                title: 'Placement',
                anchor: 'placement',
                component: __webpack_require__(/*! !raw-loader!./demos/placement/placement.ts */ "b4o4"),
                html: __webpack_require__(/*! !raw-loader!./demos/placement/placement.html */ "dMHN"),
                description: "<p>Four base positioning options are available: <code>top</code>, <code>right</code>,\n        <code>bottom</code>, and <code>left</code>.\n        Besides that, <code>auto</code> option may be used to detect a position that fits the component on screen.</p>",
                outlet: placement_1.DemoPopoverPlacementComponent
            },
            {
                title: 'Corner placement',
                anchor: 'corner-placement',
                description: "\n          <p>Placement property of a popover can contain \"corner placement\" specifier following the base positioning.\n          Thus, in addition to the four base positioning options, namely <code>top</code>, <code>right</code>,\n          <code>bottom</code>, and <code>left</code>, eight more positioning options are available: <code>top left</code>, <code>top right</code>,\n          <code>right top</code>, <code>right bottom</code>, <code>bottom right</code>, <code>bottom left</code>, <code>left bottom</code>, and <code>left top</code>.",
                component: __webpack_require__(/*! !raw-loader!./demos/corner-placement/corner-placement.ts */ "cmry"),
                html: __webpack_require__(/*! !raw-loader!./demos/corner-placement/corner-placement.html */ "tXj9"),
                outlet: corner_placement_1.DemoPopoverCornerPlacementComponent
            },
            {
                title: 'Disable adaptive position',
                anchor: 'adaptive-position',
                description: "\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/adaptive-position/adaptive-position.ts */ "TNRt"),
                html: __webpack_require__(/*! !raw-loader!./demos/adaptive-position/adaptive-position.html */ "Ow0u"),
                outlet: adaptive_position_1.DemoPopoverAdaptivePositionComponent
            },
            {
                title: 'Dismiss on next click',
                anchor: 'popover-dismiss',
                component: __webpack_require__(/*! !raw-loader!./demos/dismiss/dismiss.ts */ "UdKa"),
                html: __webpack_require__(/*! !raw-loader!./demos/dismiss/dismiss.html */ "K7pR"),
                description: "<p>Use the <code>focus</code> trigger to dismiss popovers on the next click that the\n      user makes.</p>",
                outlet: dismiss_1.DemoPopoverDismissComponent
            },
            {
                title: 'Dynamic content',
                anchor: 'dynamic-content',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.ts */ "cf+9"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.html */ "n0b3"),
                description: "<p>Pass a string as popover content.</p>",
                outlet: dynamic_1.DemoPopoverDynamicComponent
            },
            {
                title: 'Custom content template',
                anchor: 'custom-content-template',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-content/custom-content.ts */ "sGwo"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-content/custom-content.html */ "SUq1"),
                description: "<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[popover]=\"myId\"</code> as popover content.</p>",
                outlet: custom_content_1.DemoPopoverCustomContentComponent
            },
            {
                title: 'Dynamic Html',
                anchor: 'dynamic-html',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic-html/dynamic-html.ts */ "E4Vy"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic-html/dynamic-html.html */ "LGz+"),
                description: "<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you can display any dynamic html</p>",
                outlet: dynamic_html_1.DemoPopoverDynamicHtmlComponent
            },
            {
                title: 'Append to body',
                anchor: 'container-body',
                component: __webpack_require__(/*! !raw-loader!./demos/container/container.ts */ "bDWm"),
                html: __webpack_require__(/*! !raw-loader!./demos/container/container.html */ "pOBs"),
                description: "<p>When you have any styles on a parent element that interfere with a popover,\n        you\u2019ll want to specify a <code>container=\"body\"</code> so that the popover\u2019s HTML will be\n        appended to body. This will help to avoid rendering problems in more complex components\n        (like input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>",
                outlet: container_1.DemoPopoverContainerComponent
            },
            {
                title: 'Visibility events',
                anchor: 'events',
                component: __webpack_require__(/*! !raw-loader!./demos/events/events.ts */ "z8d/"),
                html: __webpack_require__(/*! !raw-loader!./demos/events/events.html */ "Jzy3"),
                outlet: events_1.DemoPopoverEventsComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'config-defaults',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config.ts */ "73z3"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "/Obq"),
                outlet: config_1.DemoPopoverConfigComponent
            },
            {
                title: 'Outside click',
                anchor: 'outside-click',
                component: __webpack_require__(/*! !raw-loader!./demos/outside-click/outside-click.ts */ "Hpi9"),
                html: __webpack_require__(/*! !raw-loader!./demos/outside-click/outside-click.html */ "Bfz7"),
                outlet: outside_click_1.DemoPopoverOutsideClickComponent
            },
            {
                title: 'Custom triggers',
                anchor: 'triggers-custom',
                component: __webpack_require__(/*! !raw-loader!./demos/triggers-custom/triggers-custom.ts */ "njqA"),
                html: __webpack_require__(/*! !raw-loader!./demos/triggers-custom/triggers-custom.html */ "vYo2"),
                outlet: triggers_custom_1.DemoPopoverTriggersCustomComponent
            },
            {
                title: 'Manual triggering',
                anchor: 'triggers-manual',
                component: __webpack_require__(/*! !raw-loader!./demos/triggers-manual/triggers-manual.ts */ "KQWC"),
                html: __webpack_require__(/*! !raw-loader!./demos/triggers-manual/triggers-manual.html */ "/4Xk"),
                description: "<p>This demo shows manipulating popover by <code>show</code>,\n        <code>hide</code> and <code>toggle</code> methods</p>",
                outlet: triggers_manual_1.DemoPopoverTriggersManualComponent
            },
            {
                title: 'Trigger by isOpen property',
                anchor: 'trigger-by-isopen-property',
                component: __webpack_require__(/*! !raw-loader!./demos/trigger-by-isopen-property/trigger-by-isopen-property.ts */ "L8Sz"),
                html: __webpack_require__(/*! !raw-loader!./demos/trigger-by-isopen-property/trigger-by-isopen-property.html */ "wbG2"),
                description: "<p>You can show/hide popover by switching <code>isOpen</code> property</p>",
                outlet: trigger_by_isopen_property_1.DemoPopoverByIsOpenPropComponent
            },
            {
                title: 'Component level styling',
                anchor: 'styling-local',
                component: __webpack_require__(/*! !raw-loader!./demos/styling-local/styling-local.ts */ "mXuH"),
                html: __webpack_require__(/*! !raw-loader!./demos/styling-local/styling-local.html */ "1R/L"),
                outlet: styling_local_1.DemoPopoverStylingLocalComponent
            },
            {
                title: 'Custom class',
                anchor: 'popover-custom-class',
                component: __webpack_require__(/*! !raw-loader!./demos/class/class.ts */ "KCn7"),
                html: __webpack_require__(/*! !raw-loader!./demos/class/class.html */ "3XCn"),
                outlet: class_1.DemoPopoverClassComponent
            },
            {
                title: 'Popover context',
                anchor: 'popover-context',
                component: __webpack_require__(/*! !raw-loader!./demos/popover-context/popover-context.ts */ "npZp"),
                html: __webpack_require__(/*! !raw-loader!./demos/popover-context/popover-context.html */ "ofIm"),
                outlet: popover_context_1.DemoPopoverContextComponent
            },
            {
                title: 'Popover with delay',
                anchor: 'popover-delay',
                component: __webpack_require__(/*! !raw-loader!./demos/delay/delay.ts */ "ZYpZ"),
                html: __webpack_require__(/*! !raw-loader!./demos/delay/delay.html */ "4liN"),
                description: "<p>Click on the button to see popover delayed for 0,5 second </p>",
                outlet: delay_1.DemoPopoverDelayComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'PopoverDirective',
                anchor: 'popover-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'PopoverConfig',
                anchor: 'popover-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "ZYpZ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/delay/delay.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-delay',\r\n  templateUrl: './delay.html'\r\n})\r\nexport class DemoPopoverDelayComponent {}\r\n");

/***/ }),

/***/ "b4o4":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/placement/placement.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-placement',\r\n  templateUrl: './placement.html'\r\n})\r\nexport class DemoPopoverPlacementComponent {}\r\n");

/***/ }),

/***/ "bDWm":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/container/container.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-container',\r\n  templateUrl: './container.html'\r\n})\r\nexport class DemoPopoverContainerComponent {}\r\n");

/***/ }),

/***/ "cf+9":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/dynamic/dynamic.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-dynamic',\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoPopoverDynamicComponent {\r\n  title = 'Welcome word';\r\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\r\n}\r\n");

/***/ }),

/***/ "cmry":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/corner-placement/corner-placement.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-corner-placement',\r\n  templateUrl: './corner-placement.html'\r\n})\r\nexport class DemoPopoverCornerPlacementComponent {\r\n  placements = [\r\n    'top left',\r\n    'top right',\r\n    'right top',\r\n    'right bottom',\r\n    'bottom right',\r\n    'bottom left',\r\n    'left bottom',\r\n    'left top'\r\n  ]\r\n  placement = 'top left';\r\n}\r\n");

/***/ }),

/***/ "d6dQ":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/outside-click/outside-click.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverOutsideClickComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverOutsideClickComponent = /** @class */ (function () {
    function DemoPopoverOutsideClickComponent() {
    }
    DemoPopoverOutsideClickComponent.ɵfac = function DemoPopoverOutsideClickComponent_Factory(t) { return new (t || DemoPopoverOutsideClickComponent)(); };
    DemoPopoverOutsideClickComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverOutsideClickComponent, selectors: [["demo-popover-outside-click"]], decls: 2, vars: 1, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary", 3, "outsideClick"]], template: function DemoPopoverOutsideClickComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Live demo\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("outsideClick", true);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverOutsideClickComponent;
}());
exports.DemoPopoverOutsideClickComponent = DemoPopoverOutsideClickComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverOutsideClickComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-outside-click',
                templateUrl: './outside-click.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "dMHN":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/placement/placement.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Popover on top\"\r\n        placement=\"top\">\r\n  Popover on top\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Popover on right\"\r\n        placement=\"right\">\r\n  Popover on right\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Popover auto\"\r\n        placement=\"auto\">\r\n  Popover auto\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Popover on left\"\r\n        placement=\"left\">\r\n  Popover on left\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        popoverTitle=\"Popover on bottom\"\r\n        placement=\"bottom\">\r\n  Popover on bottom\r\n</button>\r\n");

/***/ }),

/***/ "h/Mc":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/basic/basic.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n  Live demo\r\n</button>\r\n\r\n");

/***/ }),

/***/ "hasa":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/delay/delay.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverDelayComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverDelayComponent = /** @class */ (function () {
    function DemoPopoverDelayComponent() {
    }
    DemoPopoverDelayComponent.ɵfac = function DemoPopoverDelayComponent_Factory(t) { return new (t || DemoPopoverDelayComponent)(); };
    DemoPopoverDelayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverDelayComponent, selectors: [["demo-popover-delay"]], decls: 2, vars: 1, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary", 3, "delay"]], template: function DemoPopoverDelayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Popover with 0.5sec delay\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("delay", 500);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverDelayComponent;
}());
exports.DemoPopoverDelayComponent = DemoPopoverDelayComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverDelayComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-delay',
                templateUrl: './delay.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "mXuH":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/styling-local/styling-local.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-styling-local',\r\n  templateUrl: './styling-local.html',\r\n  /* tslint:disable no-unused-css*/\r\n  styles: [\r\n    `\r\n:host >>> .popover {\r\n  background-color: #009688;\r\n  color: #fff;\r\n}\r\n:host >>> .popover>.arrow:after {\r\n  border-top-color: #009688;\r\n}\r\n  `\r\n  ]\r\n})\r\nexport class DemoPopoverStylingLocalComponent {}\r\n");

/***/ }),

/***/ "mejE":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/events/events.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverEventsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverEventsComponent = /** @class */ (function () {
    function DemoPopoverEventsComponent() {
    }
    DemoPopoverEventsComponent.prototype.onShown = function () {
        this.message = 'shown';
    };
    DemoPopoverEventsComponent.prototype.onHidden = function () {
        this.message = 'hidden';
    };
    DemoPopoverEventsComponent.ɵfac = function DemoPopoverEventsComponent_Factory(t) { return new (t || DemoPopoverEventsComponent)(); };
    DemoPopoverEventsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverEventsComponent, selectors: [["demo-popover-events"]], decls: 6, vars: 1, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary", 3, "onShown", "onHidden"], [1, "card", "card-block", "card-header", "mb-3"]], template: function DemoPopoverEventsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("onShown", function DemoPopoverEventsComponent_Template_button_onShown_0_listener() { return ctx.onShown(); })("onHidden", function DemoPopoverEventsComponent_Template_button_onHidden_0_listener() { return ctx.onHidden(); });
            i0.ɵɵtext(1, " Live demo\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "pre", 1);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("Event: ", ctx.message, "");
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverEventsComponent;
}());
exports.DemoPopoverEventsComponent = DemoPopoverEventsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverEventsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-events',
                templateUrl: './events.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "n0b3":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/dynamic/dynamic.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-info\"\r\n        [popover]=\"content\" [popoverTitle]=\"title\">\r\n  Simple binding\r\n</button>\r\n");

/***/ }),

/***/ "njqA":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/triggers-custom/triggers-custom.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-triggers-custom',\r\n  templateUrl: './triggers-custom.html'\r\n})\r\nexport class DemoPopoverTriggersCustomComponent {}\r\n");

/***/ }),

/***/ "npZp":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/popover-context/popover-context.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-context',\r\n  templateUrl: './popover-context.html'\r\n})\r\nexport class DemoPopoverContextComponent {\r\n  context = {\r\n    message: 'Hello there!'\r\n  };\r\n}\r\n");

/***/ }),

/***/ "ofIm":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/popover-context/popover-context.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #popTemplate let-message=\"message\">{{ message }}</ng-template>\r\n<button type=\"button\" class=\"btn btn-primary\"\r\n        [popover]=\"popTemplate\" [popoverContext]=\"context\">\r\n  Open popover with custom context\r\n</button>\r\n");

/***/ }),

/***/ "ofy6":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+popover/demo-popover.routes.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var popover_section_component_1 = __webpack_require__(/*! ./popover-section.component */ "DM1+");
exports.routes = [{ path: '', component: popover_section_component_1.PopoverSectionComponent }];


/***/ }),

/***/ "pOBs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/container/container.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row panel\" style=\"position: relative; overflow: hidden;\">\r\n  <div class=\"card-block panel-body\">\r\n    <button type=\"button\" class=\"btn btn-danger\"\r\n            popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n      Default popover\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-success\"\r\n            popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n            container=\"body\">\r\n      Popover appended to body\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "qLbZ":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/config/config.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverConfigComponent = exports.getPopoverConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var popover_1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
// such override allows to keep some initial values
function getPopoverConfig() {
    return Object.assign(new popover_1.PopoverConfig(), {
        placement: 'right',
        container: 'body',
        triggers: 'focus',
        delay: 500
    });
}
exports.getPopoverConfig = getPopoverConfig;
var DemoPopoverConfigComponent = /** @class */ (function () {
    function DemoPopoverConfigComponent() {
    }
    DemoPopoverConfigComponent.ɵfac = function DemoPopoverConfigComponent_Factory(t) { return new (t || DemoPopoverConfigComponent)(); };
    DemoPopoverConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverConfigComponent, selectors: [["demo-popover-config"]], features: [i0.ɵɵProvidersFeature([{ provide: popover_1.PopoverConfig, useFactory: getPopoverConfig }])], decls: 2, vars: 0, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary"]], template: function DemoPopoverConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Preconfigured popover\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverConfigComponent;
}());
exports.DemoPopoverConfigComponent = DemoPopoverConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-config',
                templateUrl: './config.html',
                providers: [{ provide: popover_1.PopoverConfig, useFactory: getPopoverConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "sGwo":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/custom-content/custom-content.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-custom-content',\r\n  templateUrl: './custom-content.html'\r\n})\r\nexport class DemoPopoverCustomContentComponent {\r\n  title = 'Welcome word';\r\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\r\n}\r\n");

/***/ }),

/***/ "sPJM":
/*!*****************************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/dynamic-html/dynamic-html.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverDynamicHtmlComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
function DemoPopoverDynamicHtmlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Here we go: ");
    i0.ɵɵelement(1, "div", 2);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r1.html, i0.ɵɵsanitizeHtml);
} }
var DemoPopoverDynamicHtmlComponent = /** @class */ (function () {
    function DemoPopoverDynamicHtmlComponent() {
        this.html = "\n<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>";
    }
    DemoPopoverDynamicHtmlComponent.ɵfac = function DemoPopoverDynamicHtmlComponent_Factory(t) { return new (t || DemoPopoverDynamicHtmlComponent)(); };
    DemoPopoverDynamicHtmlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverDynamicHtmlComponent, selectors: [["demo-popover-dynamic-html"]], decls: 4, vars: 1, consts: [["popTemplate", ""], ["type", "button", "popoverTitle", "Dynamic html inside", 1, "btn", "btn-success", 3, "popover"], [3, "innerHtml"]], template: function DemoPopoverDynamicHtmlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoPopoverDynamicHtmlComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " Show me popover with html\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("popover", _r0);
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverDynamicHtmlComponent;
}());
exports.DemoPopoverDynamicHtmlComponent = DemoPopoverDynamicHtmlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverDynamicHtmlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-dynamic-html',
                templateUrl: './dynamic-html.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "tXj9":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/corner-placement/corner-placement.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  <select [(ngModel)]=\"placement\" class=\"form-control\">\r\n    <option *ngFor=\"let placement of placements\"\r\n      [value]=\"placement\">\r\n      {{ placement }}\r\n    </option>\r\n  </select>\r\n</p>\r\n<button type=\"button\" class=\"btn btn-default btn-secondary\"\r\n  popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n  [popoverTitle]=\"'Popover on ' + placement\"\r\n  [placement]=\"placement\">\r\n  {{ 'Popover on ' + placement }} \r\n</button>\r\n");

/***/ }),

/***/ "vC59":
/*!*********************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var adaptive_position_1 = __webpack_require__(/*! ./adaptive-position/adaptive-position */ "7PlQ");
var basic_1 = __webpack_require__(/*! ./basic/basic */ "ymfy");
var trigger_by_isopen_property_1 = __webpack_require__(/*! ./trigger-by-isopen-property/trigger-by-isopen-property */ "5hT+");
var class_1 = __webpack_require__(/*! ./class/class */ "CPtT");
var config_1 = __webpack_require__(/*! ./config/config */ "qLbZ");
var container_1 = __webpack_require__(/*! ./container/container */ "ylgG");
var popover_context_1 = __webpack_require__(/*! ./popover-context/popover-context */ "721/");
var custom_content_1 = __webpack_require__(/*! ./custom-content/custom-content */ "XkU9");
var delay_1 = __webpack_require__(/*! ./delay/delay */ "hasa");
var dismiss_1 = __webpack_require__(/*! ./dismiss/dismiss */ "/8N6");
var dynamic_1 = __webpack_require__(/*! ./dynamic/dynamic */ "HwAr");
var dynamic_html_1 = __webpack_require__(/*! ./dynamic-html/dynamic-html */ "sPJM");
var events_1 = __webpack_require__(/*! ./events/events */ "mejE");
var outside_click_1 = __webpack_require__(/*! ./outside-click/outside-click */ "d6dQ");
var placement_1 = __webpack_require__(/*! ./placement/placement */ "zZ1n");
var styling_global_1 = __webpack_require__(/*! ./styling-global/styling-global */ "6pdD");
var styling_local_1 = __webpack_require__(/*! ./styling-local/styling-local */ "O13R");
var triggers_custom_1 = __webpack_require__(/*! ./triggers-custom/triggers-custom */ "Q+3b");
var triggers_manual_1 = __webpack_require__(/*! ./triggers-manual/triggers-manual */ "/mwh");
var corner_placement_1 = __webpack_require__(/*! ./corner-placement/corner-placement */ "5V8Q");
exports.DEMO_COMPONENTS = [
    adaptive_position_1.DemoPopoverAdaptivePositionComponent,
    basic_1.DemoPopoverBasicComponent,
    trigger_by_isopen_property_1.DemoPopoverByIsOpenPropComponent,
    class_1.DemoPopoverClassComponent,
    config_1.DemoPopoverConfigComponent,
    container_1.DemoPopoverContainerComponent,
    popover_context_1.DemoPopoverContextComponent,
    custom_content_1.DemoPopoverCustomContentComponent,
    delay_1.DemoPopoverDelayComponent,
    dismiss_1.DemoPopoverDismissComponent,
    dynamic_1.DemoPopoverDynamicComponent,
    dynamic_html_1.DemoPopoverDynamicHtmlComponent,
    events_1.DemoPopoverEventsComponent,
    outside_click_1.DemoPopoverOutsideClickComponent,
    placement_1.DemoPopoverPlacementComponent,
    styling_global_1.DemoPopoverStylingGlobalComponent,
    styling_local_1.DemoPopoverStylingLocalComponent,
    triggers_custom_1.DemoPopoverTriggersCustomComponent,
    triggers_manual_1.DemoPopoverTriggersManualComponent,
    corner_placement_1.DemoPopoverCornerPlacementComponent
];


/***/ }),

/***/ "vYo2":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/triggers-custom/triggers-custom.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n    <button type=\"button\" class=\"btn btn-info\"\r\n            popover=\"I will hide on blur\"\r\n            triggers=\"mouseenter:mouseleave\">\r\n      Hover over me!\r\n    </button>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <button type=\"button\" class=\"btn btn-info\"\r\n            popover=\"Double click one more time\"\r\n            triggers=\"dblclick\">\r\n      Double click me!\r\n    </button>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           placeholder=\"Show popover on input change\"\r\n           popover=\"I will hide on blur\"\r\n           triggers=\"keypress:focusout\">\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "wbG2":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/trigger-by-isopen-property/trigger-by-isopen-property.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  <span popover=\"Hello there! I was triggered by changing isOpen property\"\r\n        triggers=\"\"  [isOpen]=\"isOpen\">\r\n  This text has attached popover\r\n  </span>\r\n</p>\r\n<button type=\"button\" class=\"btn btn-primary\"\r\n        (click)=\"isOpen = !isOpen\">\r\n  Toggle\r\n</button>\r\n");

/***/ }),

/***/ "ylgG":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/container/container.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverContainerComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverContainerComponent = /** @class */ (function () {
    function DemoPopoverContainerComponent() {
    }
    DemoPopoverContainerComponent.ɵfac = function DemoPopoverContainerComponent_Factory(t) { return new (t || DemoPopoverContainerComponent)(); };
    DemoPopoverContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverContainerComponent, selectors: [["demo-popover-container"]], decls: 6, vars: 0, consts: [[1, "row", "panel", 2, "position", "relative", "overflow", "hidden"], [1, "card-block", "panel-body"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-danger"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "container", "body", 1, "btn", "btn-success"]], template: function DemoPopoverContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵtext(3, " Default popover ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵtext(5, " Popover appended to body ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverContainerComponent;
}());
exports.DemoPopoverContainerComponent = DemoPopoverContainerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverContainerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-container',
                templateUrl: './container.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ymfy":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/basic/basic.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverBasicComponent = /** @class */ (function () {
    function DemoPopoverBasicComponent() {
    }
    DemoPopoverBasicComponent.ɵfac = function DemoPopoverBasicComponent_Factory(t) { return new (t || DemoPopoverBasicComponent)(); };
    DemoPopoverBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverBasicComponent, selectors: [["demo-popover-basic"]], decls: 2, vars: 0, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary"]], template: function DemoPopoverBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Live demo\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverBasicComponent;
}());
exports.DemoPopoverBasicComponent = DemoPopoverBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "z8d/":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+popover/demos/events/events.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-popover-events',\r\n  templateUrl: './events.html'\r\n})\r\nexport class DemoPopoverEventsComponent {\r\n  message: string;\r\n\r\n  onShown(): void {\r\n    this.message = 'shown';\r\n  }\r\n\r\n  onHidden(): void {\r\n    this.message = 'hidden';\r\n  }\r\n}\r\n");

/***/ }),

/***/ "zZ1n":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+popover/demos/placement/placement.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPopoverPlacementComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var DemoPopoverPlacementComponent = /** @class */ (function () {
    function DemoPopoverPlacementComponent() {
    }
    DemoPopoverPlacementComponent.ɵfac = function DemoPopoverPlacementComponent_Factory(t) { return new (t || DemoPopoverPlacementComponent)(); };
    DemoPopoverPlacementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPopoverPlacementComponent, selectors: [["demo-popover-placement"]], decls: 10, vars: 0, consts: [["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on top", "placement", "top", 1, "btn", "btn-default", "btn-secondary"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on right", "placement", "right", 1, "btn", "btn-default", "btn-secondary"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover auto", "placement", "auto", 1, "btn", "btn-default", "btn-secondary"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on left", "placement", "left", 1, "btn", "btn-default", "btn-secondary"], ["type", "button", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "popoverTitle", "Popover on bottom", "placement", "bottom", 1, "btn", "btn-default", "btn-secondary"]], template: function DemoPopoverPlacementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Popover on top\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " Popover on right\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, " Popover auto\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵtext(7, " Popover on left\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵtext(9, " Popover on bottom\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.PopoverDirective], encapsulation: 2 });
    return DemoPopoverPlacementComponent;
}());
exports.DemoPopoverPlacementComponent = DemoPopoverPlacementComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPopoverPlacementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-popover-placement',
                templateUrl: './placement.html'
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-popover-demo-popover-module.js.map