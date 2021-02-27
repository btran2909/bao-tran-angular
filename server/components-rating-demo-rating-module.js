exports.ids = ["components-rating-demo-rating-module"];
exports.modules = {

/***/ "+Ag2":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/select-on-enter/select-on-enter.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\"\r\n        (keyup)=\"confirmSelection($event)\"></rating>\r\n<div class=\"card\">\r\n  <pre class=\"card-block card-header\" style=\"margin:15px 0;\">Rating: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;</pre>\r\n</div>\r\n<button class=\"btn btn-primary\" (click)=\"resetStars()\">Reset rating and status</button>\r\n");

/***/ }),

/***/ "3ipK":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+rating/rating-section.list.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "D1r1");
var custom_1 = __webpack_require__(/*! ./demos/custom/custom */ "ubED");
var dynamic_1 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "XJ6s");
var select_on_enter_1 = __webpack_require__(/*! ./demos/select-on-enter/select-on-enter */ "KV2n");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "LL78");
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
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "EZwZ")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: index_2.ExamplesComponent,
        content: [
            {
                title: 'Basic rating',
                anchor: 'rating-basic',
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic */ "4fCm"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "7MXc"),
                outlet: basic_1.DemoRatingBasicComponent
            },
            {
                title: 'Dynamic rating',
                anchor: 'rating-dynamic',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic */ "fUCH"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.html */ "udoz"),
                outlet: dynamic_1.DemoRatingDynamicComponent
            },
            {
                title: 'Custom icons',
                anchor: 'rating-custom',
                component: __webpack_require__(/*! !raw-loader!./demos/custom/custom */ "cmlK"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom/custom.html */ "urKZ"),
                outlet: custom_1.DemoRatingCustomComponent
            },
            {
                title: 'Select on enter',
                description: "Key navigation example. Focus on rating and use arrow keys to set its value,\n          then press <code>Enter</code> to select the value, after this, the rating state will be changed to readonly.",
                anchor: 'select-on-enter',
                component: __webpack_require__(/*! !raw-loader!./demos/select-on-enter/select-on-enter */ "77zR"),
                html: __webpack_require__(/*! !raw-loader!./demos/select-on-enter/select-on-enter.html */ "+Ag2"),
                outlet: select_on_enter_1.DemoRatingSelectOnEnterComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'demo-rating-config',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config */ "DI9D"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "M7E+"),
                outlet: config_1.DemoRatingConfigComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'RatingComponent',
                anchor: 'rating-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'RatingConfig',
                anchor: 'rating-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "4fCm":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/basic/basic.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-rating-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoRatingBasicComponent {\r\n  max: number = 10;\r\n  rate: number = 7;\r\n  isReadonly: boolean = true;\r\n}\r\n");

/***/ }),

/***/ "77zR":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/select-on-enter/select-on-enter.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-select-on-enter',\r\n  templateUrl: './select-on-enter.html'\r\n})\r\nexport class DemoRatingSelectOnEnterComponent {\r\n  max = 10;\r\n  rate = 7;\r\n  isReadonly = false;\r\n\r\n  confirmSelection(event: KeyboardEvent) {\r\n    if (event.keyCode === 13 || event.key === 'Enter') {\r\n      this.isReadonly = true;\r\n    }\r\n  }\r\n\r\n  resetStars() {\r\n    this.rate = 0;\r\n    this.isReadonly = false;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "7MXc":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/basic/basic.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\"></rating>\r\n<div class=\"card\">\r\n    <pre class=\"card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b> </pre>\r\n</div>");

/***/ }),

/***/ "CX1g":
/*!********************************************************!*\
  !*** ./demo/src/app/components/+rating/demos/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var basic_1 = __webpack_require__(/*! ./basic/basic */ "D1r1");
var custom_1 = __webpack_require__(/*! ./custom/custom */ "ubED");
var dynamic_1 = __webpack_require__(/*! ./dynamic/dynamic */ "XJ6s");
var select_on_enter_1 = __webpack_require__(/*! ./select-on-enter/select-on-enter */ "KV2n");
var config_1 = __webpack_require__(/*! ./config/config */ "LL78");
exports.DEMO_COMPONENTS = [
    basic_1.DemoRatingBasicComponent,
    custom_1.DemoRatingCustomComponent,
    dynamic_1.DemoRatingDynamicComponent,
    select_on_enter_1.DemoRatingSelectOnEnterComponent,
    config_1.DemoRatingConfigComponent
];


/***/ }),

/***/ "D1r1":
/*!**************************************************************!*\
  !*** ./demo/src/app/components/+rating/demos/basic/basic.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoRatingBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoRatingBasicComponent = /** @class */ (function () {
    function DemoRatingBasicComponent() {
        this.max = 10;
        this.rate = 7;
        this.isReadonly = true;
    }
    DemoRatingBasicComponent.ɵfac = function DemoRatingBasicComponent_Factory(t) { return new (t || DemoRatingBasicComponent)(); };
    DemoRatingBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoRatingBasicComponent, selectors: [["demo-rating-basic"]], decls: 7, vars: 4, consts: [[3, "ngModel", "max", "readonly", "ngModelChange"], [1, "card"], [1, "card-block", "card-header", 2, "margin", "15px 0"]], template: function DemoRatingBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "rating", 0);
            i0.ɵɵlistener("ngModelChange", function DemoRatingBasicComponent_Template_rating_ngModelChange_0_listener($event) { return ctx.rate = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "pre", 2);
            i0.ɵɵtext(3, "Rate: ");
            i0.ɵɵelementStart(4, "b");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, " ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.rate)("max", ctx.max)("readonly", ctx.isReadonly);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.rate);
        } }, directives: [i1.RatingComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoRatingBasicComponent;
}());
exports.DemoRatingBasicComponent = DemoRatingBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoRatingBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-rating-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "DI9D":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/config/config.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { RatingConfig } from 'bao-tran-angular/rating';\n\n// such override allows to keep some initial values\nexport function getRatingConfig(): RatingConfig {\n  return Object.assign(new RatingConfig(), { ariaLabel: 'My Rating' });\n}\n\n@Component({\n  selector: 'demo-rating-config',\n  templateUrl: './config.html',\n  providers: [{ provide: RatingConfig, useFactory: getRatingConfig }]\n})\nexport class DemoRatingConfigComponent {\n  max = 10;\n  rate = 7;\n}\n");

/***/ }),

/***/ "EZwZ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/docs/usage.md ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { RatingModule } from 'bao-tran-angular/rating';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { RatingModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [RatingModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "KV2n":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+rating/demos/select-on-enter/select-on-enter.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoRatingSelectOnEnterComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoRatingSelectOnEnterComponent = /** @class */ (function () {
    function DemoRatingSelectOnEnterComponent() {
        this.max = 10;
        this.rate = 7;
        this.isReadonly = false;
    }
    DemoRatingSelectOnEnterComponent.prototype.confirmSelection = function (event) {
        if (event.keyCode === 13 || event.key === 'Enter') {
            this.isReadonly = true;
        }
    };
    DemoRatingSelectOnEnterComponent.prototype.resetStars = function () {
        this.rate = 0;
        this.isReadonly = false;
    };
    DemoRatingSelectOnEnterComponent.ɵfac = function DemoRatingSelectOnEnterComponent_Factory(t) { return new (t || DemoRatingSelectOnEnterComponent)(); };
    DemoRatingSelectOnEnterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoRatingSelectOnEnterComponent, selectors: [["demo-select-on-enter"]], decls: 12, vars: 5, consts: [[3, "ngModel", "max", "readonly", "ngModelChange", "keyup"], [1, "card"], [1, "card-block", "card-header", 2, "margin", "15px 0"], [1, "btn", "btn-primary", 3, "click"]], template: function DemoRatingSelectOnEnterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "rating", 0);
            i0.ɵɵlistener("ngModelChange", function DemoRatingSelectOnEnterComponent_Template_rating_ngModelChange_0_listener($event) { return ctx.rate = $event; })("keyup", function DemoRatingSelectOnEnterComponent_Template_rating_keyup_0_listener($event) { return ctx.confirmSelection($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "pre", 2);
            i0.ɵɵtext(3, "Rating: ");
            i0.ɵɵelementStart(4, "b");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, ";  Readonly is: ");
            i0.ɵɵelementStart(7, "i");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9, ";");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 3);
            i0.ɵɵlistener("click", function DemoRatingSelectOnEnterComponent_Template_button_click_10_listener() { return ctx.resetStars(); });
            i0.ɵɵtext(11, "Reset rating and status");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.rate)("max", ctx.max)("readonly", ctx.isReadonly);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.rate);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.isReadonly);
        } }, directives: [i1.RatingComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoRatingSelectOnEnterComponent;
}());
exports.DemoRatingSelectOnEnterComponent = DemoRatingSelectOnEnterComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoRatingSelectOnEnterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-select-on-enter',
                templateUrl: './select-on-enter.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "LL78":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+rating/demos/config/config.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoRatingConfigComponent = exports.getRatingConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var rating_1 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
// such override allows to keep some initial values
function getRatingConfig() {
    return Object.assign(new rating_1.RatingConfig(), { ariaLabel: 'My Rating' });
}
exports.getRatingConfig = getRatingConfig;
var DemoRatingConfigComponent = /** @class */ (function () {
    function DemoRatingConfigComponent() {
        this.max = 10;
        this.rate = 7;
    }
    DemoRatingConfigComponent.ɵfac = function DemoRatingConfigComponent_Factory(t) { return new (t || DemoRatingConfigComponent)(); };
    DemoRatingConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoRatingConfigComponent, selectors: [["demo-rating-config"]], features: [i0.ɵɵProvidersFeature([{ provide: rating_1.RatingConfig, useFactory: getRatingConfig }])], decls: 7, vars: 3, consts: [[3, "ngModel", "max", "ngModelChange"], [1, "card"], [1, "card-block", "card-header", 2, "margin", "15px 0"]], template: function DemoRatingConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "rating", 0);
            i0.ɵɵlistener("ngModelChange", function DemoRatingConfigComponent_Template_rating_ngModelChange_0_listener($event) { return ctx.rate = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "pre", 2);
            i0.ɵɵtext(3, "Rate: ");
            i0.ɵɵelementStart(4, "b");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, " ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.rate)("max", ctx.max);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.rate);
        } }, directives: [i1.RatingComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoRatingConfigComponent;
}());
exports.DemoRatingConfigComponent = DemoRatingConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoRatingConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-rating-config',
                templateUrl: './config.html',
                providers: [{ provide: rating_1.RatingConfig, useFactory: getRatingConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "M7E+":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/config/config.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<rating [(ngModel)]=\"rate\" [max]=\"max\"></rating>\r\n<div class=\"card\">\r\n  <pre class=\"card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b> </pre>\r\n</div>\r\n");

/***/ }),

/***/ "XJ6s":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+rating/demos/dynamic/dynamic.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoRatingDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var _c0 = function () { return ["one", "two", "three"]; };
var _c1 = function (a0, a1, a2) { return { "label-warning": a0, "label-info": a1, "label-success": a2 }; };
var _c2 = function (a0) { return { display: a0 }; };
var DemoRatingDynamicComponent = /** @class */ (function () {
    function DemoRatingDynamicComponent() {
        this.max = 10;
        this.rate = 7;
        this.isReadonly = false;
    }
    DemoRatingDynamicComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = (value / this.max) * 100;
    };
    DemoRatingDynamicComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    DemoRatingDynamicComponent.ɵfac = function DemoRatingDynamicComponent_Factory(t) { return new (t || DemoRatingDynamicComponent)(); };
    DemoRatingDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoRatingDynamicComponent, selectors: [["demo-rating-dynamic"]], decls: 18, vars: 18, consts: [[3, "ngModel", "max", "readonly", "titles", "ngModelChange", "onHover", "onLeave"], [1, "label", 3, "ngClass", "ngStyle"], [1, "card"], [1, "card-block", "card-header", 2, "margin", "15px 0"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function DemoRatingDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "rating", 0);
            i0.ɵɵlistener("ngModelChange", function DemoRatingDynamicComponent_Template_rating_ngModelChange_0_listener($event) { return ctx.rate = $event; })("onHover", function DemoRatingDynamicComponent_Template_rating_onHover_0_listener($event) { return ctx.hoveringOver($event); })("onLeave", function DemoRatingDynamicComponent_Template_rating_onLeave_0_listener() { return ctx.resetStar(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "pre", 3);
            i0.ɵɵtext(5, "Rate: ");
            i0.ɵɵelementStart(6, "b");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, ";  Readonly is: ");
            i0.ɵɵelementStart(9, "i");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, ";  Hovering over: ");
            i0.ɵɵelementStart(12, "b");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "button", 4);
            i0.ɵɵlistener("click", function DemoRatingDynamicComponent_Template_button_click_14_listener() { return ctx.rate = 0; });
            i0.ɵɵtext(15, "Clear\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 5);
            i0.ɵɵlistener("click", function DemoRatingDynamicComponent_Template_button_click_16_listener() { return ctx.isReadonly = !ctx.isReadonly; });
            i0.ɵɵtext(17, "Toggle Readonly\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.rate)("max", ctx.max)("readonly", ctx.isReadonly)("titles", i0.ɵɵpureFunction0(11, _c0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(12, _c1, ctx.percent < 30, ctx.percent >= 30 && ctx.percent < 70, ctx.percent >= 70))("ngStyle", i0.ɵɵpureFunction1(16, _c2, ctx.overStar && !ctx.isReadonly ? "inline" : "none"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx.percent, "%");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.rate);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.isReadonly);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.overStar || "none");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.isReadonly);
        } }, directives: [i1.RatingComponent, i2.NgControlStatus, i2.NgModel, i3.NgClass, i3.NgStyle], encapsulation: 2 });
    return DemoRatingDynamicComponent;
}());
exports.DemoRatingDynamicComponent = DemoRatingDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoRatingDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-rating-dynamic',
                templateUrl: './dynamic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "cmlK":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/custom/custom.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-rating-custom',\r\n  templateUrl: './custom.html'\r\n})\r\nexport class DemoRatingCustomComponent {\r\n  x: number = 5;\r\n  y: number = 2;\r\n}\r\n");

/***/ }),

/***/ "d3ti":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+rating/demo-rating.module.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoRatingModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var rating_1 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var rating_section_component_1 = __webpack_require__(/*! ./rating-section.component */ "gHnb");
var demos_1 = __webpack_require__(/*! ./demos */ "CX1g");
var demo_rating_routes_1 = __webpack_require__(/*! ./demo-rating.routes */ "pRTz");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/basic/basic */ "D1r1");
var i2 = __webpack_require__(/*! ./demos/custom/custom */ "ubED");
var i3 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "XJ6s");
var i4 = __webpack_require__(/*! ./demos/select-on-enter/select-on-enter */ "KV2n");
var i5 = __webpack_require__(/*! ./demos/config/config */ "LL78");
var i6 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var i7 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoRatingModule = /** @class */ (function () {
    function DemoRatingModule() {
    }
    DemoRatingModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoRatingModule });
    DemoRatingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoRatingModule_Factory(t) { return new (t || DemoRatingModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                rating_1.RatingModule.forRoot(),
                router_1.RouterModule.forChild(demo_rating_routes_1.routes)
            ]] });
    return DemoRatingModule;
}());
exports.DemoRatingModule = DemoRatingModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoRatingModule, { declarations: [rating_section_component_1.RatingSectionComponent, i1.DemoRatingBasicComponent, i2.DemoRatingCustomComponent, i3.DemoRatingDynamicComponent, i4.DemoRatingSelectOnEnterComponent, i5.DemoRatingConfigComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i6.RatingModule, i7.RouterModule], exports: [rating_section_component_1.RatingSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoRatingModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    rating_section_component_1.RatingSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    rating_1.RatingModule.forRoot(),
                    router_1.RouterModule.forChild(demo_rating_routes_1.routes)
                ],
                exports: [rating_section_component_1.RatingSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "fUCH":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/dynamic/dynamic.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-rating-dynamic',\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoRatingDynamicComponent {\r\n  max = 10;\r\n  rate = 7;\r\n  isReadonly = false;\r\n\r\n  overStar: number | undefined;\r\n  percent: number;\r\n\r\n  hoveringOver(value: number): void {\r\n    this.overStar = value;\r\n    this.percent = (value / this.max) * 100;\r\n  }\r\n\r\n  resetStar(): void {\r\n    this.overStar = void 0;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "gHnb":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+rating/rating-section.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var rating_section_list_1 = __webpack_require__(/*! ./rating-section.list */ "3ipK");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var RatingSectionComponent = /** @class */ (function () {
    function RatingSectionComponent() {
        this.name = 'Rating';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/rating';
        this.componentContent = rating_section_list_1.demoComponentContent;
    }
    RatingSectionComponent.ɵfac = function RatingSectionComponent_Factory(t) { return new (t || RatingSectionComponent)(); };
    RatingSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RatingSectionComponent, selectors: [["rating-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function RatingSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Rating component that will take care of visualising a star rating bar");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return RatingSectionComponent;
}());
exports.RatingSectionComponent = RatingSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RatingSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'rating-section',
                templateUrl: './rating-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "pRTz":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+rating/demo-rating.routes.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var rating_section_component_1 = __webpack_require__(/*! ./rating-section.component */ "gHnb");
exports.routes = [{ path: '', component: rating_section_component_1.RatingSectionComponent }];


/***/ }),

/***/ "ubED":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+rating/demos/custom/custom.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoRatingCustomComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/rating */ "LXam");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
function DemoRatingCustomComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var index_r4 = ctx.index;
    var value_r5 = ctx.value;
    i0.ɵɵtextInterpolate(index_r4 < value_r5 ? "\u2611" : "\u2610");
} }
function DemoRatingCustomComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r6 = ctx.index;
    var v_r7 = ctx.value;
    i0.ɵɵclassMapInterpolate1("btn btn-", i_r6 < v_r7 ? "warning" : "default", "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r6 < v_r7 ? "\u2605" : "\u2606", " ");
} }
var DemoRatingCustomComponent = /** @class */ (function () {
    function DemoRatingCustomComponent() {
        this.x = 5;
        this.y = 2;
    }
    DemoRatingCustomComponent.ɵfac = function DemoRatingCustomComponent_Factory(t) { return new (t || DemoRatingCustomComponent)(); };
    DemoRatingCustomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoRatingCustomComponent, selectors: [["demo-rating-custom"]], decls: 24, vars: 8, consts: [[2, "color", "#0275d8", "font-size", "20px", 3, "max", "ngModel", "customTemplate", "ngModelChange"], [1, "card"], [1, "card-block", "card-header", 2, "margin", "15px 0"], ["t", ""], [3, "max", "ngModel", "customTemplate", "ngModelChange"], ["tt", ""]], template: function DemoRatingCustomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "rating", 0);
            i0.ɵɵlistener("ngModelChange", function DemoRatingCustomComponent_Template_rating_ngModelChange_1_listener($event) { return ctx.x = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "pre", 2);
            i0.ɵɵelementStart(4, "b");
            i0.ɵɵtext(5, "(");
            i0.ɵɵelementStart(6, "i");
            i0.ɵɵtext(7, "Rate:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, DemoRatingCustomComponent_ng_template_9_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div");
            i0.ɵɵelementStart(12, "rating", 4);
            i0.ɵɵlistener("ngModelChange", function DemoRatingCustomComponent_Template_rating_ngModelChange_12_listener($event) { return ctx.y = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 1);
            i0.ɵɵelementStart(14, "pre", 2);
            i0.ɵɵtext(15, " ");
            i0.ɵɵelementStart(16, "b");
            i0.ɵɵtext(17, "(");
            i0.ɵɵelementStart(18, "i");
            i0.ɵɵtext(19, "Rate:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, " ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, DemoRatingCustomComponent_ng_template_22_Template, 2, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(10);
            var _r2 = i0.ɵɵreference(23);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("max", 10)("ngModel", ctx.x)("customTemplate", _r0);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1(" ", ctx.x, ")");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("max", 10)("ngModel", ctx.y)("customTemplate", _r2);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", ctx.y, ")");
        } }, directives: [i1.RatingComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoRatingCustomComponent;
}());
exports.DemoRatingCustomComponent = DemoRatingCustomComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoRatingCustomComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-rating-custom',
                templateUrl: './custom.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "udoz":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/dynamic/dynamic.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\"\r\n        (onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar()\"\r\n        [titles]=\"['one','two','three']\"></rating>\r\n<span class=\"label\"\r\n      [ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\"\r\n      [ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\r\n<div class=\"card\">\r\n    <pre class=\"card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;  Hovering over: <b>{{overStar || \"none\"}}</b></pre>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"rate = 0\"\r\n        [disabled]=\"isReadonly\">Clear\r\n</button>\r\n<button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n        (click)=\"isReadonly = ! isReadonly\">Toggle Readonly\r\n</button>\r\n");

/***/ }),

/***/ "urKZ":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+rating/demos/custom/custom.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <rating [max]=\"10\" [(ngModel)]=\"x\" [customTemplate]=\"t\" style=\"color: #0275d8;font-size: 20px;\"></rating>\r\n  <div class=\"card\">\r\n    <pre class=\"card-block card-header\" style=\"margin:15px 0;\"><b>(<i>Rate:</i> {{x}})</b></pre>\r\n  </div>\r\n  <ng-template #t let-index=\"index\" let-value=\"value\">{{index < value ? '&#9745;' : '&#9744;'}}</ng-template>\r\n</div>\r\n\r\n<div>\r\n  <rating [max]=\"10\" [(ngModel)]=\"y\" [customTemplate]=\"tt\"></rating>\r\n  <div class=\"card\">\r\n    <pre class=\"card-block card-header\" style=\"margin:15px 0;\"> <b>(<i>Rate:</i> {{y}})</b> </pre>\r\n  </div>\r\n  <ng-template #tt let-i=\"index\" let-v=\"value\">\r\n    <button class=\"btn btn-{{i < v ? 'warning' : 'default'}}\">\r\n      {{i < v ? '&#9733;' : '&#9734;'}}\r\n    </button>\r\n  </ng-template>\r\n</div>\r\n");

/***/ })

};;
//# sourceMappingURL=components-rating-demo-rating-module.js.map