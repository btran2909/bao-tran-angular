exports.ids = ["components-pagination-demo-pagination-module"];
exports.modules = {

/***/ "/UzY":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/direction-links/direction-links.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-direction-links',\r\n  templateUrl: './direction-links.html'\r\n})\r\nexport class DemoPaginationDirectionLinksComponent {\r\n  showDirectionLinks = true;\r\n}\r\n");

/***/ }),

/***/ "/rAY":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demo-pagination.module.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var pagination_1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var pagination_section_component_1 = __webpack_require__(/*! ./pagination-section.component */ "JMwo");
var demos_1 = __webpack_require__(/*! ./demos */ "LQJt");
var demo_pagination_routes_1 = __webpack_require__(/*! ./demo-pagination.routes */ "oGB1");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/basic/basic */ "PK0S");
var i2 = __webpack_require__(/*! ./demos/pager/pager */ "IZRt");
var i3 = __webpack_require__(/*! ./demos/limit/limit */ "EEBi");
var i4 = __webpack_require__(/*! ./demos/styling-global/styling-global */ "uKqC");
var i5 = __webpack_require__(/*! ./demos/manual-switching/manual-switching */ "E8My");
var i6 = __webpack_require__(/*! ./demos/page-changed-event/page-changed-event */ "BfXu");
var i7 = __webpack_require__(/*! ./demos/pages-count-changed/pages-count-changed */ "Vgtf");
var i8 = __webpack_require__(/*! ./demos/boundary-links/boundary-links */ "vTzx");
var i9 = __webpack_require__(/*! ./demos/direction-links/direction-links */ "4yl3");
var i10 = __webpack_require__(/*! ./demos/custom-links-content/custom-links-content */ "JGYJ");
var i11 = __webpack_require__(/*! ./demos/disabled/disabled */ "toMd");
var i12 = __webpack_require__(/*! ./demos/rotate/rotate */ "3AKP");
var i13 = __webpack_require__(/*! ./demos/content-switching/content-switching */ "F4PC");
var i14 = __webpack_require__(/*! ./demos/custom-template/custom-template */ "G/G5");
var i15 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i16 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoPaginationModule = /** @class */ (function () {
    function DemoPaginationModule() {
    }
    DemoPaginationModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoPaginationModule });
    DemoPaginationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoPaginationModule_Factory(t) { return new (t || DemoPaginationModule)(); }, imports: [[
                pagination_1.PaginationModule.forRoot(),
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_pagination_routes_1.routes)
            ]] });
    return DemoPaginationModule;
}());
exports.DemoPaginationModule = DemoPaginationModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoPaginationModule, { declarations: [pagination_section_component_1.PaginationSectionComponent, i1.DemoPaginationBasicComponent, i2.DemoPaginationPagerComponent, i3.DemoPaginationLimitComponent, i4.DemoPaginationStylingComponent, i5.DemoPaginationManualSwitchingComponent, i6.DemoPaginationPageChangedComponent, i7.DemoPaginationPagesCountChangedComponent, i8.DemoPaginationBoundaryLinksComponent, i9.DemoPaginationDirectionLinksComponent, i10.DemoPaginationCustomLinksContentComponent, i11.DemoPaginationDisabledComponent, i12.DemoPaginationRotateComponent, i13.DemoPaginationContentSwitchingComponent, i14.DemoPaginationCustomTemplateComponent], imports: [i15.PaginationModule, common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i16.RouterModule], exports: [pagination_section_component_1.PaginationSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    pagination_section_component_1.PaginationSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    pagination_1.PaginationModule.forRoot(),
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_pagination_routes_1.routes)
                ],
                exports: [pagination_section_component_1.PaginationSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "1krW":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/pages-count-changed/pages-count-changed.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pagination [totalItems]=\"88\" [(ngModel)]=\"currentPage\" (numPages)=\"smallnumPages = $event\"></pagination>\r\n\r\n<pre class=\"card card-block card-header mb-3\">The selected page no: {{currentPage}}/{{smallnumPages}}</pre>\r\n");

/***/ }),

/***/ "3AKP":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/rotate/rotate.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationRotateComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var DemoPaginationRotateComponent = /** @class */ (function () {
    function DemoPaginationRotateComponent() {
        this.rotate = true;
        this.maxSize = 5;
        this.status = "ON";
    }
    DemoPaginationRotateComponent.prototype.toggleBtn = function () {
        this.rotate = !this.rotate;
        this.status = this.rotate ? "ON" : "OFF";
    };
    DemoPaginationRotateComponent.ɵfac = function DemoPaginationRotateComponent_Factory(t) { return new (t || DemoPaginationRotateComponent)(); };
    DemoPaginationRotateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationRotateComponent, selectors: [["demo-pagination-rotate"]], decls: 5, vars: 6, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [3, "totalItems", "rotate", "maxSize"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoPaginationRotateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelement(2, "pagination", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function DemoPaginationRotateComponent_Template_button_click_3_listener() { return ctx.toggleBtn(); });
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("totalItems", 155)("rotate", ctx.rotate)("maxSize", ctx.maxSize);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("background-color", ctx.rotate ? "blue" : "red");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Current page link center is ", ctx.status, "");
        } }, directives: [i1.PaginationComponent], encapsulation: 2 });
    return DemoPaginationRotateComponent;
}());
exports.DemoPaginationRotateComponent = DemoPaginationRotateComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationRotateComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-rotate',
                templateUrl: './rotate.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "4yl3":
/*!**************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/direction-links/direction-links.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationDirectionLinksComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var DemoPaginationDirectionLinksComponent = /** @class */ (function () {
    function DemoPaginationDirectionLinksComponent() {
        this.showDirectionLinks = true;
    }
    DemoPaginationDirectionLinksComponent.ɵfac = function DemoPaginationDirectionLinksComponent_Factory(t) { return new (t || DemoPaginationDirectionLinksComponent)(); };
    DemoPaginationDirectionLinksComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationDirectionLinksComponent, selectors: [["demo-pagination-direction-links"]], decls: 5, vars: 2, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [3, "directionLinks", "totalItems"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoPaginationDirectionLinksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelement(2, "pagination", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function DemoPaginationDirectionLinksComponent_Template_button_click_3_listener() { return ctx.showDirectionLinks = !ctx.showDirectionLinks; });
            i0.ɵɵtext(4, "Hide/show direction links");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("directionLinks", ctx.showDirectionLinks)("totalItems", 55);
        } }, directives: [i1.PaginationComponent], encapsulation: 2 });
    return DemoPaginationDirectionLinksComponent;
}());
exports.DemoPaginationDirectionLinksComponent = DemoPaginationDirectionLinksComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationDirectionLinksComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-direction-links',
                templateUrl: './direction-links.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "7OO6":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/pager/pager.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewEncapsulation } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-pager',\r\n  templateUrl: './pager.html',\r\n  styles: ['.pager li.btn:active { box-shadow: none; }'],\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class DemoPaginationPagerComponent {\r\n  totalItems: number = 64;\r\n  currentPage: number = 4;\r\n  smallnumPages: number = 0;\r\n\r\n  pageChanged(event: any): void {\r\n    console.log('Page changed to: ' + event.page);\r\n    console.log('Number items per page: ' + event.itemsPerPage);\r\n  }\r\n}\r\n");

/***/ }),

/***/ "A7d1":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/disabled/disabled.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pagination [disabled]=\"disabled\" [totalItems]=\"66\"></pagination>\r\n  </div>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"toggleState()\">Toggle state</button>\r\n");

/***/ }),

/***/ "BA+v":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/limit/limit.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\"></pagination>\r\n");

/***/ }),

/***/ "BfXu":
/*!********************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/page-changed-event/page-changed-event.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationPageChangedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoPaginationPageChangedComponent = /** @class */ (function () {
    function DemoPaginationPageChangedComponent() {
        this.currentPage = 4;
    }
    DemoPaginationPageChangedComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
    };
    DemoPaginationPageChangedComponent.ɵfac = function DemoPaginationPageChangedComponent_Factory(t) { return new (t || DemoPaginationPageChangedComponent)(); };
    DemoPaginationPageChangedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationPageChangedComponent, selectors: [["demo-pagination-page-changed-event"]], decls: 5, vars: 3, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [3, "totalItems", "ngModel", "ngModelChange", "pageChanged"], [1, "card", "card-block", "card-header", "mb-3"]], template: function DemoPaginationPageChangedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "pagination", 2);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationPageChangedComponent_Template_pagination_ngModelChange_2_listener($event) { return ctx.currentPage = $event; })("pageChanged", function DemoPaginationPageChangedComponent_Template_pagination_pageChanged_2_listener($event) { return ctx.pageChanged($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "pre", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("totalItems", 66)("ngModel", ctx.currentPage);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("  Page changed to: ", ctx.page, "\n");
        } }, directives: [i1.PaginationComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoPaginationPageChangedComponent;
}());
exports.DemoPaginationPageChangedComponent = DemoPaginationPageChangedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationPageChangedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-page-changed-event',
                templateUrl: './page-changed-event.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "DNlo":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/content-switching/content-switching.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from '@angular/core';\nimport { PageChangedEvent } from 'bao-tran-angular/pagination';\n\n@Component({\n  selector: 'demo-pagination-content-switching',\n  templateUrl: './content-switching.html',\n  styles: [`\n    .content-wrapper {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding-left: 10px;\n      margin-bottom: 10px;\n    }\n  `]\n})\nexport class DemoPaginationContentSwitchingComponent implements OnInit {\n  contentArray = new Array(90).fill('');\n  returnedArray: string[];\n\n  ngOnInit(): void {\n    this.contentArray = this.contentArray.map((v: string, i: number) => `Content line ${i + 1}`);\n    this.returnedArray = this.contentArray.slice(0, 10);\n  }\n\n  pageChanged(event: PageChangedEvent): void {\n    const startItem = (event.page - 1) * event.itemsPerPage;\n    const endItem = event.page * event.itemsPerPage;\n    this.returnedArray = this.contentArray.slice(startItem, endItem);\n  }\n}\n");

/***/ }),

/***/ "E8My":
/*!****************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/manual-switching/manual-switching.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationManualSwitchingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoPaginationManualSwitchingComponent = /** @class */ (function () {
    function DemoPaginationManualSwitchingComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
    }
    DemoPaginationManualSwitchingComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    DemoPaginationManualSwitchingComponent.ɵfac = function DemoPaginationManualSwitchingComponent_Factory(t) { return new (t || DemoPaginationManualSwitchingComponent)(); };
    DemoPaginationManualSwitchingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationManualSwitchingComponent, selectors: [["demo-pagination-manual-switching"]], decls: 5, vars: 2, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [3, "totalItems", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoPaginationManualSwitchingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "pagination", 2);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationManualSwitchingComponent_Template_pagination_ngModelChange_2_listener($event) { return ctx.currentPage = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function DemoPaginationManualSwitchingComponent_Template_button_click_3_listener() { return ctx.setPage(3); });
            i0.ɵɵtext(4, "Set current page to: 3");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("totalItems", ctx.totalItems)("ngModel", ctx.currentPage);
        } }, directives: [i1.PaginationComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoPaginationManualSwitchingComponent;
}());
exports.DemoPaginationManualSwitchingComponent = DemoPaginationManualSwitchingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationManualSwitchingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-manual-switching',
                templateUrl: './manual-switching.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "EEBi":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/limit/limit.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationLimitComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoPaginationLimitComponent = /** @class */ (function () {
    function DemoPaginationLimitComponent() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
    }
    DemoPaginationLimitComponent.ɵfac = function DemoPaginationLimitComponent_Factory(t) { return new (t || DemoPaginationLimitComponent)(); };
    DemoPaginationLimitComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationLimitComponent, selectors: [["demo-pagination-limit"]], decls: 1, vars: 3, consts: [[3, "totalItems", "ngModel", "maxSize", "ngModelChange"]], template: function DemoPaginationLimitComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pagination", 0);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationLimitComponent_Template_pagination_ngModelChange_0_listener($event) { return ctx.bigCurrentPage = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("totalItems", ctx.bigTotalItems)("ngModel", ctx.bigCurrentPage)("maxSize", ctx.maxSize);
        } }, directives: [i1.PaginationComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoPaginationLimitComponent;
}());
exports.DemoPaginationLimitComponent = DemoPaginationLimitComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationLimitComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-limit',
                templateUrl: './limit.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "F4PC":
/*!******************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/content-switching/content-switching.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationContentSwitchingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
function DemoPaginationContentSwitchingComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var content_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(content_r1);
} }
var DemoPaginationContentSwitchingComponent = /** @class */ (function () {
    function DemoPaginationContentSwitchingComponent() {
        this.contentArray = new Array(90).fill('');
    }
    DemoPaginationContentSwitchingComponent.prototype.ngOnInit = function () {
        this.contentArray = this.contentArray.map(function (v, i) { return "Content line " + (i + 1); });
        this.returnedArray = this.contentArray.slice(0, 10);
    };
    DemoPaginationContentSwitchingComponent.prototype.pageChanged = function (event) {
        var startItem = (event.page - 1) * event.itemsPerPage;
        var endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.contentArray.slice(startItem, endItem);
    };
    DemoPaginationContentSwitchingComponent.ɵfac = function DemoPaginationContentSwitchingComponent_Factory(t) { return new (t || DemoPaginationContentSwitchingComponent)(); };
    DemoPaginationContentSwitchingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationContentSwitchingComponent, selectors: [["demo-pagination-content-switching"]], decls: 5, vars: 2, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [1, "content-wrapper"], ["class", "content-item", 4, "ngFor", "ngForOf"], [3, "totalItems", "pageChanged"], [1, "content-item"]], template: function DemoPaginationContentSwitchingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, DemoPaginationContentSwitchingComponent_p_3_Template, 2, 1, "p", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "pagination", 4);
            i0.ɵɵlistener("pageChanged", function DemoPaginationContentSwitchingComponent_Template_pagination_pageChanged_4_listener($event) { return ctx.pageChanged($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.returnedArray);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("totalItems", ctx.contentArray.length);
        } }, directives: [i1.NgForOf, i2.PaginationComponent], styles: [".content-wrapper[_ngcontent-%COMP%] {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding-left: 10px;\n      margin-bottom: 10px;\n    }"] });
    return DemoPaginationContentSwitchingComponent;
}());
exports.DemoPaginationContentSwitchingComponent = DemoPaginationContentSwitchingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationContentSwitchingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-content-switching',
                templateUrl: './content-switching.html',
                styles: ["\n    .content-wrapper {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding-left: 10px;\n      margin-bottom: 10px;\n    }\n  "]
            }]
    }], null, null); })();


/***/ }),

/***/ "G/G5":
/*!**************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/custom-template/custom-template.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationCustomTemplateComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoPaginationCustomTemplateComponent_ng_template_1_em_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("(page ", page_r10.number, ")");
} }
function DemoPaginationCustomTemplateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵtemplate(1, DemoPaginationCustomTemplateComponent_ng_template_1_em_1_Template, 2, 1, "em", 6);
} if (rf & 2) {
    var page_r10 = ctx.$implicit;
    var currentPage_r12 = ctx.currentPage;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.convertToRoman(page_r10), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", page_r10.number === currentPage_r12);
} }
function DemoPaginationCustomTemplateComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u27A1\uFE0F ");
    i0.ɵɵelementContainerEnd();
} }
function DemoPaginationCustomTemplateComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u26D4 ");
    i0.ɵɵelementContainerEnd();
} }
function DemoPaginationCustomTemplateComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DemoPaginationCustomTemplateComponent_ng_template_3_ng_container_0_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(1, DemoPaginationCustomTemplateComponent_ng_template_3_ng_container_1_Template, 2, 0, "ng-container", 6);
} if (rf & 2) {
    var disabled_r15 = ctx.disabled;
    i0.ɵɵproperty("ngIf", !disabled_r15);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", disabled_r15);
} }
function DemoPaginationCustomTemplateComponent_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u2B05\uFE0F ");
    i0.ɵɵelementContainerEnd();
} }
function DemoPaginationCustomTemplateComponent_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u26D4 ");
    i0.ɵɵelementContainerEnd();
} }
function DemoPaginationCustomTemplateComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DemoPaginationCustomTemplateComponent_ng_template_5_ng_container_0_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(1, DemoPaginationCustomTemplateComponent_ng_template_5_ng_container_1_Template, 2, 0, "ng-container", 6);
} if (rf & 2) {
    var disabled_r19 = ctx.disabled;
    i0.ɵɵproperty("ngIf", !disabled_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", disabled_r19);
} }
function DemoPaginationCustomTemplateComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Finish \uD83C\uDFC1\n");
} }
function DemoPaginationCustomTemplateComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Start \uD83C\uDFC1\n");
} }
var DemoPaginationCustomTemplateComponent = /** @class */ (function () {
    function DemoPaginationCustomTemplateComponent() {
    }
    DemoPaginationCustomTemplateComponent.prototype.convertToRoman = function (pageInfo) {
        var roman = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        var pageNumber = pageInfo.number;
        return Object.keys(roman).reduce(function (acc, symbol) {
            var numeralSystem = Math.floor(pageNumber / roman[symbol]);
            // tslint:disable-next-line:no-parameter-reassignment
            pageNumber -= numeralSystem * roman[symbol];
            return acc + symbol.repeat(numeralSystem);
        }, '');
    };
    DemoPaginationCustomTemplateComponent.ɵfac = function DemoPaginationCustomTemplateComponent_Factory(t) { return new (t || DemoPaginationCustomTemplateComponent)(); };
    DemoPaginationCustomTemplateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationCustomTemplateComponent, selectors: [["demo-pagination-custom-template"]], decls: 11, vars: 7, consts: [[3, "totalItems", "boundaryLinks", "customFirstTemplate", "customLastTemplate", "customPreviousTemplate", "customNextTemplate", "customPageTemplate"], ["pageTemplate", ""], ["nextTemplate", ""], ["prevTemplate", ""], ["lastTemplate", ""], ["firstTemplate", ""], [4, "ngIf"]], template: function DemoPaginationCustomTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pagination", 0);
            i0.ɵɵtemplate(1, DemoPaginationCustomTemplateComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, DemoPaginationCustomTemplateComponent_ng_template_3_Template, 2, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, DemoPaginationCustomTemplateComponent_ng_template_5_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(7, DemoPaginationCustomTemplateComponent_ng_template_7_Template, 1, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(9, DemoPaginationCustomTemplateComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(2);
            var _r2 = i0.ɵɵreference(4);
            var _r4 = i0.ɵɵreference(6);
            var _r6 = i0.ɵɵreference(8);
            var _r8 = i0.ɵɵreference(10);
            i0.ɵɵproperty("totalItems", 66)("boundaryLinks", true)("customFirstTemplate", _r8)("customLastTemplate", _r6)("customPreviousTemplate", _r4)("customNextTemplate", _r2)("customPageTemplate", _r0);
        } }, directives: [i1.PaginationComponent, i2.NgIf], encapsulation: 2 });
    return DemoPaginationCustomTemplateComponent;
}());
exports.DemoPaginationCustomTemplateComponent = DemoPaginationCustomTemplateComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationCustomTemplateComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-custom-template',
                templateUrl: './custom-template.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Ha2Y":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/docs/usage.md ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { PaginationModule } from 'bao-tran-angular/pagination';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { PaginationModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [PaginationModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "IZRt":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/pager/pager.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationPagerComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoPaginationPagerComponent = /** @class */ (function () {
    function DemoPaginationPagerComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
    }
    DemoPaginationPagerComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    DemoPaginationPagerComponent.ɵfac = function DemoPaginationPagerComponent_Factory(t) { return new (t || DemoPaginationPagerComponent)(); };
    DemoPaginationPagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationPagerComponent, selectors: [["demo-pagination-pager"]], decls: 6, vars: 6, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [3, "directionLinks", "totalItems", "ngModel", "ngModelChange", "numPages"], ["pageBtnClass", "btn", 1, "pull-left", 3, "totalItems", "ngModel", "itemsPerPage", "ngModelChange", "pageChanged"]], template: function DemoPaginationPagerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "pagination", 2);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationPagerComponent_Template_pagination_ngModelChange_2_listener($event) { return ctx.currentPage = $event; })("numPages", function DemoPaginationPagerComponent_Template_pagination_numPages_2_listener($event) { return ctx.smallnumPages = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelementStart(5, "pager", 3);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationPagerComponent_Template_pager_ngModelChange_5_listener($event) { return ctx.currentPage = $event; })("pageChanged", function DemoPaginationPagerComponent_Template_pager_pageChanged_5_listener($event) { return ctx.pageChanged($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("directionLinks", false)("totalItems", ctx.totalItems)("ngModel", ctx.currentPage);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("totalItems", ctx.totalItems)("ngModel", ctx.currentPage)("itemsPerPage", 10);
        } }, directives: [i1.PaginationComponent, i2.NgControlStatus, i2.NgModel, i1.PagerComponent], styles: [".pager li.btn:active { box-shadow: none; }"], encapsulation: 2 });
    return DemoPaginationPagerComponent;
}());
exports.DemoPaginationPagerComponent = DemoPaginationPagerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationPagerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-pager',
                templateUrl: './pager.html',
                styles: ['.pager li.btn:active { box-shadow: none; }'],
                encapsulation: core_1.ViewEncapsulation.None
            }]
    }], null, null); })();


/***/ }),

/***/ "JGYJ":
/*!************************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/custom-links-content/custom-links-content.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationCustomLinksContentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var DemoPaginationCustomLinksContentComponent = /** @class */ (function () {
    function DemoPaginationCustomLinksContentComponent() {
    }
    DemoPaginationCustomLinksContentComponent.ɵfac = function DemoPaginationCustomLinksContentComponent_Factory(t) { return new (t || DemoPaginationCustomLinksContentComponent)(); };
    DemoPaginationCustomLinksContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationCustomLinksContentComponent, selectors: [["demo-pagination-custom-links-content"]], decls: 1, vars: 2, consts: [["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems"]], template: function DemoPaginationCustomLinksContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pagination", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("boundaryLinks", true)("totalItems", 77);
        } }, directives: [i1.PaginationComponent], encapsulation: 2 });
    return DemoPaginationCustomLinksContentComponent;
}());
exports.DemoPaginationCustomLinksContentComponent = DemoPaginationCustomLinksContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationCustomLinksContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-custom-links-content',
                templateUrl: './custom-links-content.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "JMwo":
/*!*****************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/pagination-section.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var pagination_section_list_1 = __webpack_require__(/*! ./pagination-section.list */ "nkDf");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var PaginationSectionComponent = /** @class */ (function () {
    function PaginationSectionComponent() {
        this.name = 'Pagination';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/pagination';
        this.componentContent = pagination_section_list_1.demoComponentContent;
    }
    PaginationSectionComponent.ɵfac = function PaginationSectionComponent_Factory(t) { return new (t || PaginationSectionComponent)(); };
    PaginationSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaginationSectionComponent, selectors: [["pagination-section"]], decls: 10, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function PaginationSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵelementStart(2, "strong");
            i0.ɵɵtext(3, "Pagination");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, " - provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵelementStart(6, "strong");
            i0.ɵɵtext(7, "Pager");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, " - quick previous and next links for simple pagination implementations with light markup and styles. It's great for simple sites like blogs or magazines.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return PaginationSectionComponent;
}());
exports.PaginationSectionComponent = PaginationSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginationSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'pagination-section',
                templateUrl: './pagination-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "KVqN":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/custom-links-content/custom-links-content.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pagination [boundaryLinks]=\"true\" [totalItems]=\"77\"\r\n            previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n\r\n</pagination>\r\n");

/***/ }),

/***/ "Ksxm":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/basic/basic.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoPaginationBasicComponent {}\r\n");

/***/ }),

/***/ "LQJt":
/*!************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var basic_1 = __webpack_require__(/*! ./basic/basic */ "PK0S");
var pager_1 = __webpack_require__(/*! ./pager/pager */ "IZRt");
var limit_1 = __webpack_require__(/*! ./limit/limit */ "EEBi");
var styling_global_1 = __webpack_require__(/*! ./styling-global/styling-global */ "uKqC");
var manual_switching_1 = __webpack_require__(/*! ./manual-switching/manual-switching */ "E8My");
var page_changed_event_1 = __webpack_require__(/*! ./page-changed-event/page-changed-event */ "BfXu");
var pages_count_changed_1 = __webpack_require__(/*! ./pages-count-changed/pages-count-changed */ "Vgtf");
var boundary_links_1 = __webpack_require__(/*! ./boundary-links/boundary-links */ "vTzx");
var direction_links_1 = __webpack_require__(/*! ./direction-links/direction-links */ "4yl3");
var custom_links_content_1 = __webpack_require__(/*! ./custom-links-content/custom-links-content */ "JGYJ");
var disabled_1 = __webpack_require__(/*! ./disabled/disabled */ "toMd");
var rotate_1 = __webpack_require__(/*! ./rotate/rotate */ "3AKP");
var content_switching_1 = __webpack_require__(/*! ./content-switching/content-switching */ "F4PC");
var custom_template_1 = __webpack_require__(/*! ./custom-template/custom-template */ "G/G5");
exports.DEMO_COMPONENTS = [
    basic_1.DemoPaginationBasicComponent,
    pager_1.DemoPaginationPagerComponent,
    limit_1.DemoPaginationLimitComponent,
    styling_global_1.DemoPaginationStylingComponent,
    manual_switching_1.DemoPaginationManualSwitchingComponent,
    page_changed_event_1.DemoPaginationPageChangedComponent,
    pages_count_changed_1.DemoPaginationPagesCountChangedComponent,
    boundary_links_1.DemoPaginationBoundaryLinksComponent,
    direction_links_1.DemoPaginationDirectionLinksComponent,
    custom_links_content_1.DemoPaginationCustomLinksContentComponent,
    disabled_1.DemoPaginationDisabledComponent,
    rotate_1.DemoPaginationRotateComponent,
    content_switching_1.DemoPaginationContentSwitchingComponent,
    custom_template_1.DemoPaginationCustomTemplateComponent
];


/***/ }),

/***/ "OjcK":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/pages-count-changed/pages-count-changed.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-pages-count-changed',\r\n  templateUrl: './pages-count-changed.html'\r\n})\r\nexport class DemoPaginationPagesCountChangedComponent {\r\n  currentPage = 4;\r\n  smallnumPages = 0;\r\n}\r\n");

/***/ }),

/***/ "PK0S":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/basic/basic.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var DemoPaginationBasicComponent = /** @class */ (function () {
    function DemoPaginationBasicComponent() {
    }
    DemoPaginationBasicComponent.ɵfac = function DemoPaginationBasicComponent_Factory(t) { return new (t || DemoPaginationBasicComponent)(); };
    DemoPaginationBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationBasicComponent, selectors: [["demo-pagination-basic"]], decls: 1, vars: 1, consts: [[3, "totalItems"]], template: function DemoPaginationBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pagination", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("totalItems", 30);
        } }, directives: [i1.PaginationComponent], encapsulation: 2 });
    return DemoPaginationBasicComponent;
}());
exports.DemoPaginationBasicComponent = DemoPaginationBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "QLmL":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/custom-template/custom-template.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\n\nimport { PagesModel } from 'bao-tran-angular/pagination';\n\n@Component({\n  selector: 'demo-pagination-custom-template',\n  templateUrl: './custom-template.html'\n})\nexport class DemoPaginationCustomTemplateComponent {\n\n  convertToRoman(pageInfo: PagesModel): string {\n    const roman = {\n      M: 1000,\n      CM: 900,\n      D: 500,\n      CD: 400,\n      C: 100,\n      XC: 90,\n      L: 50,\n      XL: 40,\n      X: 10,\n      IX: 9,\n      V: 5,\n      IV: 4,\n      I: 1\n    };\n\n    let pageNumber = pageInfo.number;\n\n    return Object.keys(roman).reduce((acc, symbol) => {\n      const numeralSystem = Math.floor(pageNumber / roman[symbol]);\n      // tslint:disable-next-line:no-parameter-reassignment\n      pageNumber -= numeralSystem * roman[symbol];\n\n      return acc + symbol.repeat(numeralSystem);\n    }, '');\n  }\n}\n");

/***/ }),

/***/ "QYr3":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/custom-template/custom-template.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pagination [totalItems]=\"66\"\r\n            [boundaryLinks]=\"true\"\r\n            [customFirstTemplate]=\"firstTemplate\"\r\n            [customLastTemplate]=\"lastTemplate\"\r\n            [customPreviousTemplate]=\"prevTemplate\"\r\n            [customNextTemplate]=\"nextTemplate\"\r\n            [customPageTemplate]=\"pageTemplate\">\r\n</pagination>\r\n\r\n<ng-template #pageTemplate let-page let-disabled=\"disabled\" let-currentPage=\"currentPage\">\r\n  {{ convertToRoman(page)}}\r\n  <em *ngIf=\"page.number === currentPage\">(page {{ page.number }})</em>\r\n</ng-template>\r\n\r\n<ng-template #nextTemplate let-disabled=\"disabled\" let-currentPage=\"currentPage\">\r\n  <ng-container *ngIf=\"!disabled\">\r\n    ➡️\r\n  </ng-container>\r\n  <ng-container *ngIf=\"disabled\">\r\n    ⛔\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #prevTemplate let-disabled=\"disabled\" let-currentPage=\"currentPage\">\r\n  <ng-container *ngIf=\"!disabled\">\r\n    ⬅️\r\n  </ng-container>\r\n  <ng-container *ngIf=\"disabled\">\r\n    ⛔\r\n  </ng-container>\r\n</ng-template>\r\n\r\n<ng-template #lastTemplate let-disabled=\"disabled\" let-currentPage=\"currentPage\">\r\n  Finish 🏁\r\n</ng-template>\r\n\r\n<ng-template #firstTemplate let-disabled=\"disabled\" let-currentPage=\"currentPage\">\r\n  Start 🏁\r\n</ng-template>\r\n");

/***/ }),

/***/ "SM+w":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/page-changed-event/page-changed-event.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-page-changed-event',\r\n  templateUrl: './page-changed-event.html'\r\n})\r\nexport class DemoPaginationPageChangedComponent {\r\n  currentPage = 4;\r\n  page: number;\r\n\r\n  pageChanged(event: any): void {\r\n    this.page = event.page;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "Um1T":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/direction-links/direction-links.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pagination [directionLinks]=\"showDirectionLinks\" [totalItems]=\"55\"></pagination>\r\n  </div>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"showDirectionLinks = !showDirectionLinks\">Hide/show direction links</button>\r\n");

/***/ }),

/***/ "Vgtf":
/*!**********************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/pages-count-changed/pages-count-changed.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationPagesCountChangedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoPaginationPagesCountChangedComponent = /** @class */ (function () {
    function DemoPaginationPagesCountChangedComponent() {
        this.currentPage = 4;
        this.smallnumPages = 0;
    }
    DemoPaginationPagesCountChangedComponent.ɵfac = function DemoPaginationPagesCountChangedComponent_Factory(t) { return new (t || DemoPaginationPagesCountChangedComponent)(); };
    DemoPaginationPagesCountChangedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationPagesCountChangedComponent, selectors: [["demo-pagination-pages-count-changed"]], decls: 3, vars: 4, consts: [[3, "totalItems", "ngModel", "ngModelChange", "numPages"], [1, "card", "card-block", "card-header", "mb-3"]], template: function DemoPaginationPagesCountChangedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pagination", 0);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationPagesCountChangedComponent_Template_pagination_ngModelChange_0_listener($event) { return ctx.currentPage = $event; })("numPages", function DemoPaginationPagesCountChangedComponent_Template_pagination_numPages_0_listener($event) { return ctx.smallnumPages = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("totalItems", 88)("ngModel", ctx.currentPage);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("The selected page no: ", ctx.currentPage, "/", ctx.smallnumPages, "");
        } }, directives: [i1.PaginationComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoPaginationPagesCountChangedComponent;
}());
exports.DemoPaginationPagesCountChangedComponent = DemoPaginationPagesCountChangedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationPagesCountChangedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-pages-count-changed',
                templateUrl: './pages-count-changed.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Vgtw":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/rotate/rotate.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pagination [totalItems]=\"155\" [rotate]=\"rotate\" [maxSize]=\"maxSize\"></pagination>\r\n  </div>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" [style.background-color]=\"rotate ? 'blue' : 'red'\" (click)=\"toggleBtn()\">Current page link center is {{status}}</button>\r\n");

/***/ }),

/***/ "X6vw":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/boundary-links/boundary-links.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pagination [boundaryLinks]=\"showBoundaryLinks\" [totalItems]=\"55\"></pagination>\r\n  </div>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"showBoundaryLinks = !showBoundaryLinks\">Hide/show boundary links</button>\r\n");

/***/ }),

/***/ "XTNb":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/basic/basic.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pagination [totalItems]=\"30\"></pagination>\r\n");

/***/ }),

/***/ "XapM":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/pager/pager.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pagination\r\n      [directionLinks]=\"false\"\r\n      [totalItems]=\"totalItems\"\r\n      [(ngModel)]=\"currentPage\"\r\n      (numPages)=\"smallnumPages = $event\">\r\n    </pagination>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pager\r\n      [totalItems]=\"totalItems\"\r\n      [(ngModel)]=\"currentPage\"\r\n      (pageChanged)=\"pageChanged($event)\"\r\n      pageBtnClass=\"btn\"\r\n      [itemsPerPage]=\"10\"\r\n      class=\"pull-left\">\r\n    </pager>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Yd+p":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/boundary-links/boundary-links.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-boundary-links',\r\n  templateUrl: './boundary-links.html'\r\n})\r\nexport class DemoPaginationBoundaryLinksComponent {\r\n  showBoundaryLinks = true;\r\n}\r\n");

/***/ }),

/***/ "cXNu":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/page-changed-event/page-changed-event.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pagination [totalItems]=\"66\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n  </div>\r\n</div>\r\n\r\n<pre class=\"card card-block card-header mb-3\">\r\n  Page changed to: {{page}}\r\n</pre>\r\n");

/***/ }),

/***/ "dQ7O":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/limit/limit.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-limit',\r\n  templateUrl: './limit.html'\r\n})\r\nexport class DemoPaginationLimitComponent {\r\n  maxSize = 5;\r\n  bigTotalItems = 175;\r\n  bigCurrentPage = 1;\r\n}\r\n");

/***/ }),

/***/ "gvjD":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/content-switching/content-switching.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <div class=\"content-wrapper\">\r\n      <p class=\"content-item\" *ngFor=\"let content of returnedArray\">{{content}}</p>\r\n    </div>\r\n    <pagination [totalItems]=\"contentArray.length\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "jSIt":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/custom-links-content/custom-links-content.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-custom-links-content',\r\n  templateUrl: './custom-links-content.html'\r\n})\r\nexport class DemoPaginationCustomLinksContentComponent {}\r\n");

/***/ }),

/***/ "nkDf":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/pagination-section.list.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "PK0S");
var pager_1 = __webpack_require__(/*! ./demos/pager/pager */ "IZRt");
var limit_1 = __webpack_require__(/*! ./demos/limit/limit */ "EEBi");
var manual_switching_1 = __webpack_require__(/*! ./demos/manual-switching/manual-switching */ "E8My");
var page_changed_event_1 = __webpack_require__(/*! ./demos/page-changed-event/page-changed-event */ "BfXu");
var pages_count_changed_1 = __webpack_require__(/*! ./demos/pages-count-changed/pages-count-changed */ "Vgtf");
var boundary_links_1 = __webpack_require__(/*! ./demos/boundary-links/boundary-links */ "vTzx");
var direction_links_1 = __webpack_require__(/*! ./demos/direction-links/direction-links */ "4yl3");
var custom_links_content_1 = __webpack_require__(/*! ./demos/custom-links-content/custom-links-content */ "JGYJ");
var content_switching_1 = __webpack_require__(/*! ./demos/content-switching/content-switching */ "F4PC");
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var disabled_1 = __webpack_require__(/*! ./demos/disabled/disabled */ "toMd");
var rotate_1 = __webpack_require__(/*! ./demos/rotate/rotate */ "3AKP");
var custom_template_1 = __webpack_require__(/*! ./demos/custom-template/custom-template */ "G/G5");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "Ha2Y")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: index_2.ExamplesComponent,
        description: "<p>On small screens bootstrap4 pagination can be cropped</p>",
        content: [
            {
                title: 'Basic',
                anchor: 'basic',
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.ts */ "Ksxm"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "XTNb"),
                outlet: basic_1.DemoPaginationBasicComponent
            },
            {
                title: 'Manual switching page',
                anchor: 'manual-switching',
                component: __webpack_require__(/*! !raw-loader!./demos/manual-switching/manual-switching.ts */ "pl6r"),
                html: __webpack_require__(/*! !raw-loader!./demos/manual-switching/manual-switching.html */ "p+Te"),
                outlet: manual_switching_1.DemoPaginationManualSwitchingComponent
            },
            {
                title: 'Page changed event',
                anchor: 'page-changed-event',
                component: __webpack_require__(/*! !raw-loader!./demos/page-changed-event/page-changed-event.ts */ "SM+w"),
                html: __webpack_require__(/*! !raw-loader!./demos/page-changed-event/page-changed-event.html */ "cXNu"),
                outlet: page_changed_event_1.DemoPaginationPageChangedComponent
            },
            {
                title: 'Pages count changed event',
                anchor: 'pages-count-changed',
                component: __webpack_require__(/*! !raw-loader!./demos/pages-count-changed/pages-count-changed.ts */ "OjcK"),
                html: __webpack_require__(/*! !raw-loader!./demos/pages-count-changed/pages-count-changed.html */ "1krW"),
                outlet: pages_count_changed_1.DemoPaginationPagesCountChangedComponent
            },
            {
                title: 'Boundary links',
                anchor: 'boundary-links',
                component: __webpack_require__(/*! !raw-loader!./demos/boundary-links/boundary-links.ts */ "Yd+p"),
                html: __webpack_require__(/*! !raw-loader!./demos/boundary-links/boundary-links.html */ "X6vw"),
                outlet: boundary_links_1.DemoPaginationBoundaryLinksComponent
            },
            {
                title: 'Direction links',
                anchor: 'direction-links',
                component: __webpack_require__(/*! !raw-loader!./demos/direction-links/direction-links.ts */ "/UzY"),
                html: __webpack_require__(/*! !raw-loader!./demos/direction-links/direction-links.html */ "Um1T"),
                outlet: direction_links_1.DemoPaginationDirectionLinksComponent
            },
            {
                title: 'Custom links content',
                anchor: 'custom-links-content',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-links-content/custom-links-content.ts */ "jSIt"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-links-content/custom-links-content.html */ "KVqN"),
                outlet: custom_links_content_1.DemoPaginationCustomLinksContentComponent
            },
            {
                title: 'Disabled',
                anchor: 'pagination-disabled',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled.ts */ "wcvk"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled.html */ "A7d1"),
                outlet: disabled_1.DemoPaginationDisabledComponent
            },
            {
                title: 'Limits',
                anchor: 'pagination-limit',
                component: __webpack_require__(/*! !raw-loader!./demos/limit/limit.ts */ "dQ7O"),
                html: __webpack_require__(/*! !raw-loader!./demos/limit/limit.html */ "BA+v"),
                description: "<p>Limit the maximum visible page numbers</p>",
                outlet: limit_1.DemoPaginationLimitComponent
            },
            {
                title: 'Centering the active page link',
                anchor: 'pagination-rotate',
                component: __webpack_require__(/*! !raw-loader!./demos/rotate/rotate.ts */ "sAZR"),
                html: __webpack_require__(/*! !raw-loader!./demos/rotate/rotate.html */ "Vgtw"),
                description: "<p>Set current page link to center</p>",
                outlet: rotate_1.DemoPaginationRotateComponent
            },
            {
                title: 'Content switching',
                anchor: 'content-switching',
                component: __webpack_require__(/*! !raw-loader!./demos/content-switching/content-switching.ts */ "DNlo"),
                html: __webpack_require__(/*! !raw-loader!./demos/content-switching/content-switching.html */ "gvjD"),
                outlet: content_switching_1.DemoPaginationContentSwitchingComponent
            },
            {
                title: 'Pager',
                anchor: 'pagination-pager',
                component: __webpack_require__(/*! !raw-loader!./demos/pager/pager.ts */ "7OO6"),
                html: __webpack_require__(/*! !raw-loader!./demos/pager/pager.html */ "XapM"),
                outlet: pager_1.DemoPaginationPagerComponent
            },
            {
                title: 'Custom Template',
                anchor: 'custom-template',
                description: "\n          <p>\n            It is possible to customize what exactly is displayed in each pagination link. To overwrite default\n            templates use these inputs:\n            <ul>\n              <li><code>customPageTemplate</code></li>\n              <li><code>customNextTemplate</code></li>\n              <li><code>customPreviousTemplate</code></li>\n              <li><code>customFirstTemplate</code></li>\n              <li><code>customLastTemplate</code></li>\n            </ul>\n            Each template has a context object. The object <code>PaginationLinkContext</code> is available for all\n            templates and for page numbers there is a <code>PaginationNumberLinkContext</code> that\n            contains the page number.\n          </p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/custom-template/custom-template.ts */ "QLmL"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-template/custom-template.html */ "QYr3"),
                outlet: custom_template_1.DemoPaginationCustomTemplateComponent
            }
            /* TODO: temporary disabled pageBtnClass option
            {
              title: 'Styling',
              anchor: 'pagination-styling',
              component: require('!!raw-loader!./demos/styling-global/styling-global.ts'),
              html: require('!!raw-loader!./demos/styling-global/styling-global.html'),
              outlet: DemoPaginationStylingComponent
            }*/
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'PaginationComponent',
                anchor: 'pagination-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'PagerComponent',
                anchor: 'pager-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'PaginationConfig',
                anchor: 'pagination-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            },
            {
                title: 'PaginationLinkContext',
                anchor: 'pagination-link-context',
                outlet: api_docs_1.NgApiDocConfigComponent
            },
            {
                title: 'PaginationNumberLinkContext',
                anchor: 'pagination-number-link-context',
                outlet: api_docs_1.NgApiDocConfigComponent
            },
            {
                title: 'PagesModel',
                anchor: 'pagination-models',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "oGB1":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demo-pagination.routes.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var pagination_section_component_1 = __webpack_require__(/*! ./pagination-section.component */ "JMwo");
exports.routes = [{ path: '', component: pagination_section_component_1.PaginationSectionComponent }];


/***/ }),

/***/ "p+Te":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/manual-switching/manual-switching.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pagination [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\"></pagination>\r\n  </div>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\r\n");

/***/ }),

/***/ "pl6r":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/manual-switching/manual-switching.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-manual-switching',\r\n  templateUrl: './manual-switching.html'\r\n})\r\nexport class DemoPaginationManualSwitchingComponent {\r\n  totalItems = 64;\r\n  currentPage = 4;\r\n\r\n  setPage(pageNo: number): void {\r\n    this.currentPage = pageNo;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "sAZR":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/rotate/rotate.ts ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-rotate',\r\n  templateUrl: './rotate.html'\r\n})\r\nexport class DemoPaginationRotateComponent {\r\n  rotate = true;\r\n  maxSize = 5;\r\n  status = \"ON\";\r\n\r\n  toggleBtn() : void {\r\n    this.rotate = !this.rotate;\r\n    this.status = this.rotate ? \"ON\" : \"OFF\";\r\n  }\r\n}\r\n");

/***/ }),

/***/ "toMd":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/disabled/disabled.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationDisabledComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var DemoPaginationDisabledComponent = /** @class */ (function () {
    function DemoPaginationDisabledComponent() {
        this.disabled = false;
    }
    DemoPaginationDisabledComponent.prototype.toggleState = function () {
        this.disabled = !this.disabled;
    };
    DemoPaginationDisabledComponent.ɵfac = function DemoPaginationDisabledComponent_Factory(t) { return new (t || DemoPaginationDisabledComponent)(); };
    DemoPaginationDisabledComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationDisabledComponent, selectors: [["demo-pagination-disabled"]], decls: 5, vars: 2, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [3, "disabled", "totalItems"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoPaginationDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelement(2, "pagination", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function DemoPaginationDisabledComponent_Template_button_click_3_listener() { return ctx.toggleState(); });
            i0.ɵɵtext(4, "Toggle state");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled)("totalItems", 66);
        } }, directives: [i1.PaginationComponent], encapsulation: 2 });
    return DemoPaginationDisabledComponent;
}());
exports.DemoPaginationDisabledComponent = DemoPaginationDisabledComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationDisabledComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-disabled',
                templateUrl: './disabled.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "uKqC":
/*!************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/styling-global/styling-global.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationStylingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoPaginationStylingComponent = /** @class */ (function () {
    function DemoPaginationStylingComponent() {
        this.totalItems = 64;
        this.currentPage = 4;
        this.smallnumPages = 0;
    }
    DemoPaginationStylingComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    DemoPaginationStylingComponent.ɵfac = function DemoPaginationStylingComponent_Factory(t) { return new (t || DemoPaginationStylingComponent)(); };
    DemoPaginationStylingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationStylingComponent, selectors: [["demo-pagination-styling"]], decls: 4, vars: 6, consts: [[1, "col-md-6"], ["pageBtnClass", "custom", 3, "directionLinks", "totalItems", "ngModel", "ngModelChange", "numPages"], ["pageBtnClass", "btn-custom", 3, "totalItems", "ngModel", "itemsPerPage", "ngModelChange", "pageChanged"]], template: function DemoPaginationStylingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "pagination", 1);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationStylingComponent_Template_pagination_ngModelChange_1_listener($event) { return ctx.currentPage = $event; })("numPages", function DemoPaginationStylingComponent_Template_pagination_numPages_1_listener($event) { return ctx.smallnumPages = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "pager", 2);
            i0.ɵɵlistener("ngModelChange", function DemoPaginationStylingComponent_Template_pager_ngModelChange_3_listener($event) { return ctx.currentPage = $event; })("pageChanged", function DemoPaginationStylingComponent_Template_pager_pageChanged_3_listener($event) { return ctx.pageChanged($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("directionLinks", false)("totalItems", ctx.totalItems)("ngModel", ctx.currentPage);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("totalItems", ctx.totalItems)("ngModel", ctx.currentPage)("itemsPerPage", 10);
        } }, directives: [i1.PaginationComponent, i2.NgControlStatus, i2.NgModel, i1.PagerComponent], styles: [".btn-custom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n       background: #31b0d5;\n    }"] });
    return DemoPaginationStylingComponent;
}());
exports.DemoPaginationStylingComponent = DemoPaginationStylingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationStylingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-styling',
                // encapsulation: ViewEncapsulation.None,
                templateUrl: './styling-global.html',
                /* tslint:disable no-unused-css*/
                styles: [
                    "\n    .btn-custom a {\n       background: #31b0d5;\n    }\n  "
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vTzx":
/*!************************************************************************************!*\
  !*** ./demo/src/app/components/+pagination/demos/boundary-links/boundary-links.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPaginationBoundaryLinksComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/pagination */ "iw/B");
var DemoPaginationBoundaryLinksComponent = /** @class */ (function () {
    function DemoPaginationBoundaryLinksComponent() {
        this.showBoundaryLinks = true;
    }
    DemoPaginationBoundaryLinksComponent.ɵfac = function DemoPaginationBoundaryLinksComponent_Factory(t) { return new (t || DemoPaginationBoundaryLinksComponent)(); };
    DemoPaginationBoundaryLinksComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoPaginationBoundaryLinksComponent, selectors: [["demo-pagination-boundary-links"]], decls: 5, vars: 2, consts: [[1, "row"], [1, "col-xs-12", "col-12"], [3, "boundaryLinks", "totalItems"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoPaginationBoundaryLinksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelement(2, "pagination", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function DemoPaginationBoundaryLinksComponent_Template_button_click_3_listener() { return ctx.showBoundaryLinks = !ctx.showBoundaryLinks; });
            i0.ɵɵtext(4, "Hide/show boundary links");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("boundaryLinks", ctx.showBoundaryLinks)("totalItems", 55);
        } }, directives: [i1.PaginationComponent], encapsulation: 2 });
    return DemoPaginationBoundaryLinksComponent;
}());
exports.DemoPaginationBoundaryLinksComponent = DemoPaginationBoundaryLinksComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoPaginationBoundaryLinksComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-pagination-boundary-links',
                templateUrl: './boundary-links.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "wcvk":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+pagination/demos/disabled/disabled.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-pagination-disabled',\r\n  templateUrl: './disabled.html'\r\n})\r\nexport class DemoPaginationDisabledComponent {\r\n  disabled = false;\r\n\r\n  toggleState(): void {\r\n    this.disabled = !this.disabled;\r\n  }\r\n}\r\n");

/***/ })

};;
//# sourceMappingURL=components-pagination-demo-pagination-module.js.map