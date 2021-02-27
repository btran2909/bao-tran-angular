exports.ids = ["components-timepicker-demo-timepicker-module"];
exports.modules = {

/***/ "/PNQ":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/isvalid/isvalid.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [showMeridian]=\"isMeridian\" (isValid)=\"isValid($event)\"></timepicker>\r\n<hr>\r\n<pre class=\"alert\"\r\n     [class.alert-danger]=\"!valid\"\r\n     [class.alert-success]=\"valid\">\r\n  Time is: {{myTime}}\r\n</pre>\r\n<div *ngIf=\"!valid\" class=\"alert alert-danger\">Invalid time</div>\r\n");

/***/ }),

/***/ "13ec":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/config/config.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"mytime\"></timepicker>\r\n<pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n");

/***/ }),

/***/ "1LXq":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/docs/usage.md ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { TimepickerModule } from 'bao-tran-angular/timepicker';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { TimepickerModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [TimepickerModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "1wqW":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/min-max/min-max.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [min]=\"minTime\" [max]=\"maxTime\"></timepicker>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{myTime}}</pre>\r\n");

/***/ }),

/***/ "2JKa":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/min-max/min-max.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-min-max',\r\n  templateUrl: './min-max.html'\r\n})\r\nexport class DemoTimepickerMinMaxComponent {\r\n  myTime: Date = new Date();\r\n  minTime: Date = new Date();\r\n  maxTime: Date = new Date();\r\n\r\n  constructor() {\r\n    this.minTime.setHours(8);\r\n    this.minTime.setMinutes(0);\r\n    this.maxTime.setHours(23);\r\n    this.maxTime.setMinutes(55);\r\n  }\r\n}\r\n");

/***/ }),

/***/ "31vp":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/form/form.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"form\">\r\n  <form [formGroup]=\"form\">\r\n    <timepicker [formControlName]=\"'myControl'\"></timepicker>\r\n  </form>\r\n\r\n  <br>\r\n  <button class=\"btn btn-succes\" (click)=\"form.get('myControl').enable()\">Enable Control</button>\r\n  <button class=\"btn btn-warning\" (click)=\"form.get('myControl').disable()\">Disable Control</button>\r\n  <br><br>\r\n\r\n  <pre class=\"alert alert-info\">Time is: {{ form.get('myControl').value }}</pre>\r\n</ng-container>\r\n");

/***/ }),

/***/ "39LQ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/mousewheel/mousewheel.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [mousewheel]=\"allowMouseWheel\"></timepicker>\r\n<hr>\r\n\r\n<button type=\"button\" class=\"btn btn-info section bd-example\" (click)=\"allowMouseWheel = !allowMouseWheel\">Enable / Disable mouse wheel</button>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{myTime}}</pre>\r\n");

/***/ }),

/***/ "4yuH":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/mousewheel/mousewheel.ts ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-mousewheel',\r\n  templateUrl: './mousewheel.html'\r\n})\r\nexport class DemoTimepickerMousewheelComponent {\r\n  allowMouseWheel = true;\r\n  myTime = new Date();\r\n}\r\n");

/***/ }),

/***/ "6k8F":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/arrowkeys/arrowkeys.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-arrowkeys',\r\n  templateUrl: './arrowkeys.html'\r\n})\r\nexport class DemoTimepickerArrowkeysComponent {\r\n  allowArrowKeys = true;\r\n  myTime = new Date();\r\n}\r\n");

/***/ }),

/***/ "7N7u":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/meridian/meridian.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"mytime\" [showMeridian]=\"ismeridian\"></timepicker>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n\r\n<br>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"toggleMode()\">12H / 24H</button>\r\n\r\n");

/***/ }),

/***/ "7sW8":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/custom/custom.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"mytime\" [hourStep]=\"hstep\" [minuteStep]=\"mstep\" [showSeconds]=\"true\" [secondsStep]=\"sstep\"></timepicker>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-6 col-6 col-md-3\">\r\n    Hours step is:\r\n    <select class=\"form-control\" [(ngModel)]=\"hstep\">\r\n      <option *ngFor=\"let opt of options.hstep\" [value]=\"opt\">{{opt}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"col-xs-6 col-6 col-md-3\">\r\n    Minutes step is:\r\n    <select class=\"form-control\" [(ngModel)]=\"mstep\">\r\n      <option *ngFor=\"let opt of options.mstep\" [value]=\"opt\">{{opt}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"col-xs-6 col-6 col-md-3\">\r\n    Seconds step is:\r\n    <select class=\"form-control\" [(ngModel)]=\"sstep\">\r\n      <option *ngFor=\"let opt of options.sstep\" [value]=\"opt\">{{opt}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "A2KB":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/custom-meridian/custom-meridian.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"mytime\" [meridians]=\"meridians\"></timepicker>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n");

/***/ }),

/***/ "AcXB":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/config/config.ts ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { TimepickerConfig } from 'ngx-bootstrap/timepicker';\n\n// such override allows to keep some initial values\n\nexport function getTimepickerConfig(): TimepickerConfig {\n  return Object.assign(new TimepickerConfig(), {\n    hourStep: 2,\n    minuteStep: 10,\n    showMeridian: false,\n    readonlyInput: false,\n    mousewheel: true,\n    showMinutes: true,\n    showSeconds: false,\n    labelHours: 'Hours',\n    labelMinutes: 'Minutes',\n    labelSeconds: 'Seconds'\n  });\n}\n\n@Component({\n  selector: 'demo-timepicker-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]\n})\nexport class DemoTimepickerConfigComponent {\n  mytime: string;\n}\n");

/***/ }),

/***/ "C+fL":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/placeholder/placeholder.ts ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-placeholder',\r\n  templateUrl: './placeholder.html'\r\n})\r\nexport class DemoTimepickerPlaceholderComponent {\r\n  hoursPlaceholder = 'hh';\r\n  minutesPlaceholder = 'mm';\r\n  secondsPlaceholder = 'ss';\r\n}\r\n\r\n");

/***/ }),

/***/ "Dqo+":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/dynamic/dynamic.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-dynamic',\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoTimepickerDynamicComponent {\r\n  mytime: Date | undefined = new Date();\r\n  isValid: boolean;\r\n\r\n  update(): void {\r\n    const time = new Date();\r\n    time.setHours(14);\r\n    time.setMinutes(0);\r\n\r\n    this.mytime = time;\r\n  }\r\n\r\n  changed(): void {\r\n    console.log(`Time changed to: ${this.mytime}`);\r\n  }\r\n\r\n  clear(): void {\r\n    this.mytime = void 0;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "GPCp":
/*!****************************************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/toggle-minutes-seconds/toggle-minutes-seconds.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerToggleMinutesSecondsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerToggleMinutesSecondsComponent = /** @class */ (function () {
    function DemoTimepickerToggleMinutesSecondsComponent() {
        this.myTime = new Date();
        this.showMin = true;
        this.showSec = true;
    }
    DemoTimepickerToggleMinutesSecondsComponent.prototype.toggleMinutes = function () {
        this.showMin = !this.showMin;
    };
    DemoTimepickerToggleMinutesSecondsComponent.prototype.toggleSeconds = function () {
        this.showSec = !this.showSec;
    };
    DemoTimepickerToggleMinutesSecondsComponent.ɵfac = function DemoTimepickerToggleMinutesSecondsComponent_Factory(t) { return new (t || DemoTimepickerToggleMinutesSecondsComponent)(); };
    DemoTimepickerToggleMinutesSecondsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerToggleMinutesSecondsComponent, selectors: [["demo-timepicker-seconds"]], decls: 11, vars: 8, consts: [[3, "ngModel", "showMinutes", "showSeconds", "ngModelChange"], [1, "alert", "alert-info"], [1, "btn", "btn-default", "text-center", 3, "click"]], template: function DemoTimepickerToggleMinutesSecondsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerToggleMinutesSecondsComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelement(3, "br");
            i0.ɵɵtext(4);
            i0.ɵɵelement(5, "br");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 2);
            i0.ɵɵlistener("click", function DemoTimepickerToggleMinutesSecondsComponent_Template_button_click_7_listener() { return ctx.toggleMinutes(); });
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 2);
            i0.ɵɵlistener("click", function DemoTimepickerToggleMinutesSecondsComponent_Template_button_click_9_listener() { return ctx.toggleSeconds(); });
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("showMinutes", ctx.showMin)("showSeconds", ctx.showSec);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.myTime, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("showMinutes: ", ctx.showMin, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("showSeconds: ", ctx.showSec, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.showMin ? "Hide minutes" : "Show minutes", "\n");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.showSec ? "Hide seconds" : "Show seconds", "\n");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerToggleMinutesSecondsComponent;
}());
exports.DemoTimepickerToggleMinutesSecondsComponent = DemoTimepickerToggleMinutesSecondsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerToggleMinutesSecondsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-seconds',
                templateUrl: './toggle-minutes-seconds.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "LsI1":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demo-timepicker.module.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var timepicker_1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var timepicker_section_component_1 = __webpack_require__(/*! ./timepicker-section.component */ "oSlN");
var demos_1 = __webpack_require__(/*! ./demos */ "odjH");
var demo_timepicker_routes_1 = __webpack_require__(/*! ./demo-timepicker.routes */ "koIG");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/basic/basic */ "oxKV");
var i2 = __webpack_require__(/*! ./demos/form/form */ "V9jF");
var i3 = __webpack_require__(/*! ./demos/config/config */ "ODd3");
var i4 = __webpack_require__(/*! ./demos/meridian/meridian */ "uZbM");
var i5 = __webpack_require__(/*! ./demos/custom-meridian/custom-meridian */ "uKs7");
var i6 = __webpack_require__(/*! ./demos/min-max/min-max */ "kjOs");
var i7 = __webpack_require__(/*! ./demos/disabled/disabled */ "Osdt");
var i8 = __webpack_require__(/*! ./demos/readonly/readonly */ "VHzG");
var i9 = __webpack_require__(/*! ./demos/custom/custom */ "cdYT");
var i10 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "RBnv");
var i11 = __webpack_require__(/*! ./demos/toggle-minutes-seconds/toggle-minutes-seconds */ "GPCp");
var i12 = __webpack_require__(/*! ./demos/arrowkeys/arrowkeys */ "TLcb");
var i13 = __webpack_require__(/*! ./demos/mousewheel/mousewheel */ "q6Kn");
var i14 = __webpack_require__(/*! ./demos/custom-validation/custom-validation */ "Tq6N");
var i15 = __webpack_require__(/*! ./demos/isvalid/isvalid */ "mF++");
var i16 = __webpack_require__(/*! ./demos/spinners/spinners */ "XiB2");
var i17 = __webpack_require__(/*! ./demos/placeholder/placeholder */ "XiLk");
var i18 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i19 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoTimepickerModule = /** @class */ (function () {
    function DemoTimepickerModule() {
    }
    DemoTimepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoTimepickerModule });
    DemoTimepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoTimepickerModule_Factory(t) { return new (t || DemoTimepickerModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                docs_1.DocsModule,
                timepicker_1.TimepickerModule.forRoot(),
                router_1.RouterModule.forChild(demo_timepicker_routes_1.routes)
            ]] });
    return DemoTimepickerModule;
}());
exports.DemoTimepickerModule = DemoTimepickerModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoTimepickerModule, { declarations: [timepicker_section_component_1.TimepickerSectionComponent, i1.DemoTimepickerBasicComponent, i2.DemoTimepickerFormComponent, i3.DemoTimepickerConfigComponent, i4.DemoTimepickerMeridianComponent, i5.DemoTimepickerCustomMeridianComponent, i6.DemoTimepickerMinMaxComponent, i7.DemoTimepickerDisabledComponent, i8.DemoTimepickerReadonlyComponent, i9.DemoTimepickerCustomComponent, i10.DemoTimepickerDynamicComponent, i11.DemoTimepickerToggleMinutesSecondsComponent, i12.DemoTimepickerArrowkeysComponent, i13.DemoTimepickerMousewheelComponent, i14.DemoTimepickerCustomValidationComponent, i15.DemoTimepickerIsValidComponent, i14.DemoTimepickerCustomValidationComponent, i16.DemoTimepickerSpinnersComponent, i17.DemoTimepickerPlaceholderComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        forms_1.ReactiveFormsModule,
        docs_1.DocsModule, i18.TimepickerModule, i19.RouterModule], exports: [timepicker_section_component_1.TimepickerSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    timepicker_section_component_1.TimepickerSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    docs_1.DocsModule,
                    timepicker_1.TimepickerModule.forRoot(),
                    router_1.RouterModule.forChild(demo_timepicker_routes_1.routes)
                ],
                exports: [timepicker_section_component_1.TimepickerSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "MOXW":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/basic/basic.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"mytime\"></timepicker>\r\n<pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n");

/***/ }),

/***/ "NABL":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/disabled/disabled.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [showMeridian]=\"isMeridian\" [disabled]=\"!isDisabled\"></timepicker>\r\n<hr>\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"isDisabled=!isDisabled\">Enable / Disable input</button>\r\n");

/***/ }),

/***/ "ODd3":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/config/config.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerConfigComponent = exports.getTimepickerConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var timepicker_1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
// such override allows to keep some initial values
function getTimepickerConfig() {
    return Object.assign(new timepicker_1.TimepickerConfig(), {
        hourStep: 2,
        minuteStep: 10,
        showMeridian: false,
        readonlyInput: false,
        mousewheel: true,
        showMinutes: true,
        showSeconds: false,
        labelHours: 'Hours',
        labelMinutes: 'Minutes',
        labelSeconds: 'Seconds'
    });
}
exports.getTimepickerConfig = getTimepickerConfig;
var DemoTimepickerConfigComponent = /** @class */ (function () {
    function DemoTimepickerConfigComponent() {
    }
    DemoTimepickerConfigComponent.ɵfac = function DemoTimepickerConfigComponent_Factory(t) { return new (t || DemoTimepickerConfigComponent)(); };
    DemoTimepickerConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerConfigComponent, selectors: [["demo-timepicker-config"]], features: [i0.ɵɵProvidersFeature([{ provide: timepicker_1.TimepickerConfig, useFactory: getTimepickerConfig }])], decls: 3, vars: 2, consts: [[3, "ngModel", "ngModelChange"], [1, "alert", "alert-info"]], template: function DemoTimepickerConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerConfigComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.mytime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.mytime);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.mytime, "");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerConfigComponent;
}());
exports.DemoTimepickerConfigComponent = DemoTimepickerConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-config',
                templateUrl: './config.html',
                providers: [{ provide: timepicker_1.TimepickerConfig, useFactory: getTimepickerConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "ONrM":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/readonly/readonly.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [showMeridian]=\"isMeridian\" [readonlyInput]=\"!readonly\"></timepicker>\r\n<hr>\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"readonly=!readonly\">Editable / Readonly input</button>\r\n");

/***/ }),

/***/ "Ohkx":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/isvalid/isvalid.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-isvalid',\r\n  templateUrl: './isvalid.html'\r\n})\r\nexport class DemoTimepickerIsValidComponent {\r\n  isMeridian = true;\r\n  myTime = new Date();\r\n  valid = true;\r\n\r\n  isValid(event: boolean): void {\r\n    this.valid = event;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "Osdt":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/disabled/disabled.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerDisabledComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerDisabledComponent = /** @class */ (function () {
    function DemoTimepickerDisabledComponent() {
        this.isMeridian = true;
        this.isDisabled = true;
        this.myTime = new Date();
    }
    DemoTimepickerDisabledComponent.ɵfac = function DemoTimepickerDisabledComponent_Factory(t) { return new (t || DemoTimepickerDisabledComponent)(); };
    DemoTimepickerDisabledComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerDisabledComponent, selectors: [["demo-timepicker-disabled"]], decls: 4, vars: 3, consts: [[3, "ngModel", "showMeridian", "disabled", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoTimepickerDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerDisabledComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(1, "hr");
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function DemoTimepickerDisabledComponent_Template_button_click_2_listener() { return ctx.isDisabled = !ctx.isDisabled; });
            i0.ɵɵtext(3, "Enable / Disable input");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("showMeridian", ctx.isMeridian)("disabled", !ctx.isDisabled);
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerDisabledComponent;
}());
exports.DemoTimepickerDisabledComponent = DemoTimepickerDisabledComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerDisabledComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-disabled',
                templateUrl: './disabled.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "PnPN":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/custom/custom.ts ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-custom',\r\n  templateUrl: './custom.html'\r\n})\r\nexport class DemoTimepickerCustomComponent {\r\n  hstep = 1;\r\n  mstep = 15;\r\n  sstep = 10;\r\n\r\n  mytime: Date = new Date();\r\n  options: any = {\r\n    hstep: [1, 2, 3],\r\n    mstep: [1, 5, 10, 15, 25, 30],\r\n    sstep: [5, 10, 20, 30]\r\n  };\r\n}\r\n");

/***/ }),

/***/ "Qgaq":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/custom-validation/custom-validation.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Illustrates custom validation, you have to select time between 11:00 and 12:59</p>\r\n\r\n<div class=\"form-group\">\r\n  <timepicker [(ngModel)]=\"myTime\" [formControl]=\"ctrl\" required></timepicker>\r\n</div>\r\n\r\n<pre class=\"alert\"\r\n     [class.alert-danger]=\"!ctrl.valid && !ctrl.pristine\"\r\n     [class.alert-success]=\"(ctrl.valid && !ctrl.pristine) || ctrl.value == null\">\r\n  Time is: {{myTime}}\r\n</pre>\r\n<div class=\"alert alert-danger\" *ngIf=\"ctrl.errors && ctrl.errors['outOfRange']\">Invalid time</div>\r\n");

/***/ }),

/***/ "RBnv":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/dynamic/dynamic.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTimepickerDynamicComponent_pre_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 5);
    i0.ɵɵtext(1, "Invalid time format");
    i0.ɵɵelementEnd();
} }
var DemoTimepickerDynamicComponent = /** @class */ (function () {
    function DemoTimepickerDynamicComponent() {
        this.mytime = new Date();
    }
    DemoTimepickerDynamicComponent.prototype.update = function () {
        var time = new Date();
        time.setHours(14);
        time.setMinutes(0);
        this.mytime = time;
    };
    DemoTimepickerDynamicComponent.prototype.changed = function () {
        console.log("Time changed to: " + this.mytime);
    };
    DemoTimepickerDynamicComponent.prototype.clear = function () {
        this.mytime = void 0;
    };
    DemoTimepickerDynamicComponent.ɵfac = function DemoTimepickerDynamicComponent_Factory(t) { return new (t || DemoTimepickerDynamicComponent)(); };
    DemoTimepickerDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerDynamicComponent, selectors: [["demo-timepicker-dynamic"]], decls: 8, vars: 3, consts: [[3, "ngModel", "ngModelChange", "isValid"], [1, "alert", "alert-info"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "alert", "alert-danger"]], template: function DemoTimepickerDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerDynamicComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.mytime = $event; })("ngModelChange", function DemoTimepickerDynamicComponent_Template_timepicker_ngModelChange_0_listener() { return ctx.changed(); })("isValid", function DemoTimepickerDynamicComponent_Template_timepicker_isValid_0_listener($event) { return ctx.isValid = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DemoTimepickerDynamicComponent_pre_3_Template, 2, 0, "pre", 2);
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function DemoTimepickerDynamicComponent_Template_button_click_4_listener() { return ctx.update(); });
            i0.ɵɵtext(5, "Set to 14:00");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 4);
            i0.ɵɵlistener("click", function DemoTimepickerDynamicComponent_Template_button_click_6_listener() { return ctx.clear(); });
            i0.ɵɵtext(7, "Clear");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.mytime);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.mytime, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isValid);
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel, i3.NgIf], encapsulation: 2 });
    return DemoTimepickerDynamicComponent;
}());
exports.DemoTimepickerDynamicComponent = DemoTimepickerDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-dynamic',
                templateUrl: './dynamic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "RNU7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/form/form.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\nimport { FormControl, FormGroup } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-form',\r\n  templateUrl: './form.html'\r\n})\r\nexport class DemoTimepickerFormComponent {\r\n  form = new FormGroup({\r\n    myControl: new FormControl(new Date())\r\n  });\r\n}\r\n");

/***/ }),

/***/ "Royt":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/timepicker-section.list.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "oxKV");
var meridian_1 = __webpack_require__(/*! ./demos/meridian/meridian */ "uZbM");
var custom_meridian_1 = __webpack_require__(/*! ./demos/custom-meridian/custom-meridian */ "uKs7");
var min_max_1 = __webpack_require__(/*! ./demos/min-max/min-max */ "kjOs");
var placeholder_1 = __webpack_require__(/*! ./demos/placeholder/placeholder */ "XiLk");
var toggle_minutes_seconds_1 = __webpack_require__(/*! ./demos/toggle-minutes-seconds/toggle-minutes-seconds */ "GPCp");
var disabled_1 = __webpack_require__(/*! ./demos/disabled/disabled */ "Osdt");
var custom_1 = __webpack_require__(/*! ./demos/custom/custom */ "cdYT");
var custom_validation_1 = __webpack_require__(/*! ./demos/custom-validation/custom-validation */ "Tq6N");
var dynamic_1 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "RBnv");
var mousewheel_1 = __webpack_require__(/*! ./demos/mousewheel/mousewheel */ "q6Kn");
var arrowkeys_1 = __webpack_require__(/*! ./demos/arrowkeys/arrowkeys */ "TLcb");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "ODd3");
var readonly_1 = __webpack_require__(/*! ./demos/readonly/readonly */ "VHzG");
var spinners_1 = __webpack_require__(/*! ./demos/spinners/spinners */ "XiB2");
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var isvalid_1 = __webpack_require__(/*! ./demos/isvalid/isvalid */ "mF++");
var form_1 = __webpack_require__(/*! ./demos/form/form */ "V9jF");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "1LXq")
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
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic */ "ntwN"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "MOXW"),
                outlet: basic_1.DemoTimepickerBasicComponent
            },
            {
                title: 'Form',
                anchor: 'form',
                component: __webpack_require__(/*! !raw-loader!./demos/form/form */ "RNU7"),
                html: __webpack_require__(/*! !raw-loader!./demos/form/form.html */ "31vp"),
                outlet: form_1.DemoTimepickerFormComponent
            },
            {
                title: 'Meridian',
                anchor: 'meridian',
                component: __webpack_require__(/*! !raw-loader!./demos/meridian/meridian */ "zkII"),
                html: __webpack_require__(/*! !raw-loader!./demos/meridian/meridian.html */ "7N7u"),
                outlet: meridian_1.DemoTimepickerMeridianComponent
            },
            {
                title: 'Custom meridian',
                anchor: 'custom-meridian',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-meridian/custom-meridian */ "n5He"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-meridian/custom-meridian.html */ "A2KB"),
                description: "<p>Text in meridian labels can be customized by using <code>meridians</code> input property</p>",
                outlet: custom_meridian_1.DemoTimepickerCustomMeridianComponent
            },
            {
                title: 'Min - Max',
                anchor: 'min-max',
                component: __webpack_require__(/*! !raw-loader!./demos/min-max/min-max */ "2JKa"),
                html: __webpack_require__(/*! !raw-loader!./demos/min-max/min-max.html */ "1wqW"),
                outlet: min_max_1.DemoTimepickerMinMaxComponent
            },
            {
                title: 'Toggle minutes/seconds',
                anchor: 'toggleMinutesSeconds',
                component: __webpack_require__(/*! !raw-loader!./demos/toggle-minutes-seconds/toggle-minutes-seconds */ "lCQv"),
                html: __webpack_require__(/*! !raw-loader!./demos/toggle-minutes-seconds/toggle-minutes-seconds.html */ "fFwu"),
                outlet: toggle_minutes_seconds_1.DemoTimepickerToggleMinutesSecondsComponent
            },
            {
                title: 'Disabled',
                anchor: 'disabled',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled */ "j+Sp"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled.html */ "NABL"),
                outlet: disabled_1.DemoTimepickerDisabledComponent
            },
            {
                title: 'Readonly',
                anchor: 'readonly',
                component: __webpack_require__(/*! !raw-loader!./demos/readonly/readonly */ "ga8c"),
                html: __webpack_require__(/*! !raw-loader!./demos/readonly/readonly.html */ "ONrM"),
                outlet: readonly_1.DemoTimepickerReadonlyComponent
            },
            {
                title: 'Custom steps',
                anchor: 'custom',
                component: __webpack_require__(/*! !raw-loader!./demos/custom/custom */ "PnPN"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom/custom.html */ "7sW8"),
                outlet: custom_1.DemoTimepickerCustomComponent
            },
            {
                title: 'Custom validation',
                anchor: 'custom-validation',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-validation/custom-validation */ "S1r6"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-validation/custom-validation.html */ "Qgaq"),
                outlet: custom_validation_1.DemoTimepickerCustomValidationComponent
            },
            {
                title: 'Custom validation with isValid event',
                anchor: 'isvalid',
                component: __webpack_require__(/*! !raw-loader!./demos/isvalid/isvalid */ "Ohkx"),
                html: __webpack_require__(/*! !raw-loader!./demos/isvalid/isvalid.html */ "/PNQ"),
                description: "<p><code>isValid</code> event emits true if a value is a valid data.\n            Enter an invalid data to see error</p>",
                outlet: isvalid_1.DemoTimepickerIsValidComponent
            },
            {
                title: 'Dynamic',
                anchor: 'dynamic',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic */ "Dqo+"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.html */ "kGeV"),
                outlet: dynamic_1.DemoTimepickerDynamicComponent
            },
            {
                title: 'Mouse wheel',
                anchor: 'mouse-wheel',
                component: __webpack_require__(/*! !raw-loader!./demos/mousewheel/mousewheel */ "4yuH"),
                html: __webpack_require__(/*! !raw-loader!./demos/mousewheel/mousewheel.html */ "39LQ"),
                outlet: mousewheel_1.DemoTimepickerMousewheelComponent
            },
            {
                title: 'Arrow keys',
                anchor: 'arrow keys',
                component: __webpack_require__(/*! !raw-loader!./demos/arrowkeys/arrowkeys */ "6k8F"),
                html: __webpack_require__(/*! !raw-loader!./demos/arrowkeys/arrowkeys.html */ "jHEt"),
                outlet: arrowkeys_1.DemoTimepickerArrowkeysComponent
            },
            {
                title: 'Spinners',
                anchor: 'spinners',
                component: __webpack_require__(/*! !raw-loader!./demos/spinners/spinners */ "YJZP"),
                html: __webpack_require__(/*! !raw-loader!./demos/spinners/spinners.html */ "hwhI"),
                outlet: spinners_1.DemoTimepickerSpinnersComponent
            },
            {
                title: 'Placeholder',
                anchor: 'placeholder',
                component: __webpack_require__(/*! !raw-loader!./demos/placeholder/placeholder */ "C+fL"),
                html: __webpack_require__(/*! !raw-loader!./demos/placeholder/placeholder.html */ "bGd+"),
                outlet: placeholder_1.DemoTimepickerPlaceholderComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'config-defaults',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config */ "AcXB"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "13ec"),
                outlet: config_1.DemoTimepickerConfigComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'TimepickerComponent',
                anchor: 'timepicker-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'TimepickerConfig',
                anchor: 'timepicker-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "S1r6":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/custom-validation/custom-validation.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\nimport { AbstractControl, FormControl } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-custom-validation',\r\n  templateUrl: './custom-validation.html'\r\n})\r\nexport class DemoTimepickerCustomValidationComponent {\r\n  myTime: Date;\r\n\r\n  ctrl = new FormControl('', (control: AbstractControl) => {\r\n    const value = control.value;\r\n\r\n    if (!value) {\r\n      return null;\r\n    }\r\n\r\n    const hours = value.getHours();\r\n\r\n    if (hours < 11 || hours > 12) {\r\n      return { outOfRange: true };\r\n    }\r\n\r\n    return null;\r\n  });\r\n}\r\n");

/***/ }),

/***/ "TLcb":
/*!**************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/arrowkeys/arrowkeys.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerArrowkeysComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerArrowkeysComponent = /** @class */ (function () {
    function DemoTimepickerArrowkeysComponent() {
        this.allowArrowKeys = true;
        this.myTime = new Date();
    }
    DemoTimepickerArrowkeysComponent.ɵfac = function DemoTimepickerArrowkeysComponent_Factory(t) { return new (t || DemoTimepickerArrowkeysComponent)(); };
    DemoTimepickerArrowkeysComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerArrowkeysComponent, selectors: [["demo-timepicker-arrowkeys"]], decls: 6, vars: 3, consts: [[3, "ngModel", "arrowkeys", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", "section", "bd-example", 3, "click"], [1, "alert", "alert-info"]], template: function DemoTimepickerArrowkeysComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerArrowkeysComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(1, "hr");
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function DemoTimepickerArrowkeysComponent_Template_button_click_2_listener() { return ctx.allowArrowKeys = !ctx.allowArrowKeys; });
            i0.ɵɵtext(3, "Enable / Disable keyboard arrow keys");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "pre", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("arrowkeys", ctx.allowArrowKeys);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.myTime, "");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerArrowkeysComponent;
}());
exports.DemoTimepickerArrowkeysComponent = DemoTimepickerArrowkeysComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerArrowkeysComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-arrowkeys',
                templateUrl: './arrowkeys.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Tq6N":
/*!******************************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/custom-validation/custom-validation.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerCustomValidationComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTimepickerCustomValidationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, "Invalid time");
    i0.ɵɵelementEnd();
} }
var DemoTimepickerCustomValidationComponent = /** @class */ (function () {
    function DemoTimepickerCustomValidationComponent() {
        this.ctrl = new forms_1.FormControl('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            var hours = value.getHours();
            if (hours < 11 || hours > 12) {
                return { outOfRange: true };
            }
            return null;
        });
    }
    DemoTimepickerCustomValidationComponent.ɵfac = function DemoTimepickerCustomValidationComponent_Factory(t) { return new (t || DemoTimepickerCustomValidationComponent)(); };
    DemoTimepickerCustomValidationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerCustomValidationComponent, selectors: [["demo-timepicker-custom-validation"]], decls: 7, vars: 8, consts: [[1, "form-group"], ["required", "", 3, "ngModel", "formControl", "ngModelChange"], [1, "alert"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function DemoTimepickerCustomValidationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "Illustrates custom validation, you have to select time between 11:00 and 12:59");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "timepicker", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerCustomValidationComponent_Template_timepicker_ngModelChange_3_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "pre", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, DemoTimepickerCustomValidationComponent_div_6_Template, 2, 0, "div", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.myTime)("formControl", ctx.ctrl);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("alert-danger", !ctx.ctrl.valid && !ctx.ctrl.pristine)("alert-success", ctx.ctrl.valid && !ctx.ctrl.pristine || ctx.ctrl.value == null);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("  Time is: ", ctx.myTime, "\n");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.ctrl.errors && ctx.ctrl.errors["outOfRange"]);
        } }, directives: [i1.TimepickerComponent, i2.RequiredValidator, i2.NgControlStatus, i2.FormControlDirective, i3.NgIf], encapsulation: 2 });
    return DemoTimepickerCustomValidationComponent;
}());
exports.DemoTimepickerCustomValidationComponent = DemoTimepickerCustomValidationComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerCustomValidationComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-custom-validation',
                templateUrl: './custom-validation.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "V9jF":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/form/form.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerFormComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
function DemoTimepickerFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 1);
    i0.ɵɵelement(2, "timepicker", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "button", 3);
    i0.ɵɵlistener("click", function DemoTimepickerFormComponent_ng_container_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.form.get("myControl").enable(); });
    i0.ɵɵtext(5, "Enable Control");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 4);
    i0.ɵɵlistener("click", function DemoTimepickerFormComponent_ng_container_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.form.get("myControl").disable(); });
    i0.ɵɵtext(7, "Disable Control");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "br");
    i0.ɵɵelement(9, "br");
    i0.ɵɵelementStart(10, "pre", 5);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", "myControl");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("Time is: ", ctx_r0.form.get("myControl").value, "");
} }
var DemoTimepickerFormComponent = /** @class */ (function () {
    function DemoTimepickerFormComponent() {
        this.form = new forms_1.FormGroup({
            myControl: new forms_1.FormControl(new Date())
        });
    }
    DemoTimepickerFormComponent.ɵfac = function DemoTimepickerFormComponent_Factory(t) { return new (t || DemoTimepickerFormComponent)(); };
    DemoTimepickerFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerFormComponent, selectors: [["demo-timepicker-form"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "formGroup"], [3, "formControlName"], [1, "btn", "btn-succes", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "alert", "alert-info"]], template: function DemoTimepickerFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoTimepickerFormComponent_ng_container_0_Template, 12, 3, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.form);
        } }, directives: [i1.NgIf, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i3.TimepickerComponent, i2.NgControlStatus, i2.FormControlName], encapsulation: 2 });
    return DemoTimepickerFormComponent;
}());
exports.DemoTimepickerFormComponent = DemoTimepickerFormComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerFormComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-form',
                templateUrl: './form.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "VHzG":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/readonly/readonly.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerReadonlyComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerReadonlyComponent = /** @class */ (function () {
    function DemoTimepickerReadonlyComponent() {
        this.isMeridian = false;
        this.readonly = true;
        this.myTime = new Date();
    }
    DemoTimepickerReadonlyComponent.ɵfac = function DemoTimepickerReadonlyComponent_Factory(t) { return new (t || DemoTimepickerReadonlyComponent)(); };
    DemoTimepickerReadonlyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerReadonlyComponent, selectors: [["demo-timepicker-readonly"]], decls: 4, vars: 3, consts: [[3, "ngModel", "showMeridian", "readonlyInput", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoTimepickerReadonlyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerReadonlyComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(1, "hr");
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function DemoTimepickerReadonlyComponent_Template_button_click_2_listener() { return ctx.readonly = !ctx.readonly; });
            i0.ɵɵtext(3, "Editable / Readonly input");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("showMeridian", ctx.isMeridian)("readonlyInput", !ctx.readonly);
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerReadonlyComponent;
}());
exports.DemoTimepickerReadonlyComponent = DemoTimepickerReadonlyComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerReadonlyComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-readonly',
                templateUrl: './readonly.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "XiB2":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/spinners/spinners.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerSpinnersComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerSpinnersComponent = /** @class */ (function () {
    function DemoTimepickerSpinnersComponent() {
        this.isMeridian = false;
        this.showSpinners = true;
        this.myTime = new Date();
    }
    DemoTimepickerSpinnersComponent.ɵfac = function DemoTimepickerSpinnersComponent_Factory(t) { return new (t || DemoTimepickerSpinnersComponent)(); };
    DemoTimepickerSpinnersComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerSpinnersComponent, selectors: [["demo-timepicker-spinners"]], decls: 4, vars: 3, consts: [[3, "ngModel", "showMeridian", "showSpinners", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoTimepickerSpinnersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerSpinnersComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(1, "hr");
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function DemoTimepickerSpinnersComponent_Template_button_click_2_listener() { return ctx.showSpinners = !ctx.showSpinners; });
            i0.ɵɵtext(3, "Show / Hide spinners");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("showMeridian", ctx.isMeridian)("showSpinners", ctx.showSpinners);
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerSpinnersComponent;
}());
exports.DemoTimepickerSpinnersComponent = DemoTimepickerSpinnersComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerSpinnersComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-spinners',
                templateUrl: './spinners.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "XiLk":
/*!******************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/placeholder/placeholder.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerPlaceholderComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var DemoTimepickerPlaceholderComponent = /** @class */ (function () {
    function DemoTimepickerPlaceholderComponent() {
        this.hoursPlaceholder = 'hh';
        this.minutesPlaceholder = 'mm';
        this.secondsPlaceholder = 'ss';
    }
    DemoTimepickerPlaceholderComponent.ɵfac = function DemoTimepickerPlaceholderComponent_Factory(t) { return new (t || DemoTimepickerPlaceholderComponent)(); };
    DemoTimepickerPlaceholderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerPlaceholderComponent, selectors: [["demo-timepicker-placeholder"]], decls: 1, vars: 3, consts: [["showSeconds", "true", 3, "hoursPlaceholder", "minutesPlaceholder", "secondsPlaceholder"]], template: function DemoTimepickerPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "timepicker", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("hoursPlaceholder", ctx.hoursPlaceholder)("minutesPlaceholder", ctx.minutesPlaceholder)("secondsPlaceholder", ctx.secondsPlaceholder);
        } }, directives: [i1.TimepickerComponent], encapsulation: 2 });
    return DemoTimepickerPlaceholderComponent;
}());
exports.DemoTimepickerPlaceholderComponent = DemoTimepickerPlaceholderComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerPlaceholderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-placeholder',
                templateUrl: './placeholder.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "YJZP":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/spinners/spinners.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-spinners',\r\n  templateUrl: './spinners.html'\r\n})\r\nexport class DemoTimepickerSpinnersComponent {\r\n  isMeridian = false;\r\n  showSpinners = true;\r\n  myTime: Date = new Date();\r\n}\r\n");

/***/ }),

/***/ "bGd+":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/placeholder/placeholder.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [hoursPlaceholder]=\"hoursPlaceholder\"\r\n            [minutesPlaceholder]=\"minutesPlaceholder\"\r\n            [secondsPlaceholder]=\"secondsPlaceholder\" showSeconds=\"true\"></timepicker>\r\n\r\n");

/***/ }),

/***/ "cdYT":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/custom/custom.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerCustomComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTimepickerCustomComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r3);
} }
function DemoTimepickerCustomComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r4);
} }
function DemoTimepickerCustomComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var opt_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(opt_r5);
} }
var DemoTimepickerCustomComponent = /** @class */ (function () {
    function DemoTimepickerCustomComponent() {
        this.hstep = 1;
        this.mstep = 15;
        this.sstep = 10;
        this.mytime = new Date();
        this.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30],
            sstep: [5, 10, 20, 30]
        };
    }
    DemoTimepickerCustomComponent.ɵfac = function DemoTimepickerCustomComponent_Factory(t) { return new (t || DemoTimepickerCustomComponent)(); };
    DemoTimepickerCustomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerCustomComponent, selectors: [["demo-timepicker-custom"]], decls: 16, vars: 12, consts: [[3, "ngModel", "hourStep", "minuteStep", "showSeconds", "secondsStep", "ngModelChange"], [1, "alert", "alert-info"], [1, "row"], [1, "col-xs-6", "col-6", "col-md-3"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DemoTimepickerCustomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerCustomComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.mytime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵtext(5, " Hours step is: ");
            i0.ɵɵelementStart(6, "select", 4);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerCustomComponent_Template_select_ngModelChange_6_listener($event) { return ctx.hstep = $event; });
            i0.ɵɵtemplate(7, DemoTimepickerCustomComponent_option_7_Template, 2, 2, "option", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 3);
            i0.ɵɵtext(9, " Minutes step is: ");
            i0.ɵɵelementStart(10, "select", 4);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerCustomComponent_Template_select_ngModelChange_10_listener($event) { return ctx.mstep = $event; });
            i0.ɵɵtemplate(11, DemoTimepickerCustomComponent_option_11_Template, 2, 2, "option", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 3);
            i0.ɵɵtext(13, " Seconds step is: ");
            i0.ɵɵelementStart(14, "select", 4);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerCustomComponent_Template_select_ngModelChange_14_listener($event) { return ctx.sstep = $event; });
            i0.ɵɵtemplate(15, DemoTimepickerCustomComponent_option_15_Template, 2, 2, "option", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.mytime)("hourStep", ctx.hstep)("minuteStep", ctx.mstep)("showSeconds", true)("secondsStep", ctx.sstep);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.mytime, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.hstep);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.options.hstep);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.mstep);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.options.mstep);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.sstep);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.options.sstep);
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel, i2.SelectControlValueAccessor, i3.NgForOf, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    return DemoTimepickerCustomComponent;
}());
exports.DemoTimepickerCustomComponent = DemoTimepickerCustomComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerCustomComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-custom',
                templateUrl: './custom.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "fFwu":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/toggle-minutes-seconds/toggle-minutes-seconds.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [showMinutes]=\"showMin\" [showSeconds]=\"showSec\"></timepicker>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{myTime}}<br>showMinutes: {{showMin}}<br>showSeconds: {{showSec}}</pre>\r\n\r\n<button class=\"btn btn-default text-center\" (click)=\"toggleMinutes()\">\r\n  {{showMin? 'Hide minutes' : 'Show minutes'}}\r\n</button>\r\n<button class=\"btn btn-default text-center\" (click)=\"toggleSeconds()\">\r\n  {{showSec? 'Hide seconds' : 'Show seconds'}}\r\n</button>\r\n");

/***/ }),

/***/ "ga8c":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/readonly/readonly.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-readonly',\r\n  templateUrl: './readonly.html'\r\n})\r\nexport class DemoTimepickerReadonlyComponent {\r\n  isMeridian = false;\r\n  readonly = true;\r\n  myTime = new Date();\r\n}\r\n");

/***/ }),

/***/ "hwhI":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/spinners/spinners.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [showMeridian]=\"isMeridian\" [showSpinners]=\"showSpinners\"></timepicker>\r\n<hr>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"showSpinners = !showSpinners\">Show / Hide spinners</button>\r\n\r\n");

/***/ }),

/***/ "j+Sp":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/disabled/disabled.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-disabled',\r\n  templateUrl: './disabled.html'\r\n})\r\nexport class DemoTimepickerDisabledComponent {\r\n  isMeridian = true;\r\n  isDisabled = true;\r\n  myTime = new Date();\r\n}\r\n");

/***/ }),

/***/ "jHEt":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/arrowkeys/arrowkeys.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"myTime\" [arrowkeys]=\"allowArrowKeys\"></timepicker>\r\n<hr>\r\n\r\n<button type=\"button\" class=\"btn btn-info section bd-example\" (click)=\"allowArrowKeys = !allowArrowKeys\">Enable / Disable keyboard arrow keys</button>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{myTime}}</pre>\r\n");

/***/ }),

/***/ "kGeV":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/dynamic/dynamic.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<timepicker [(ngModel)]=\"mytime\" (ngModelChange)=\"changed()\" (isValid)=\"isValid = $event\"></timepicker>\r\n\r\n<pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n<pre *ngIf=\"!isValid\" class=\"alert alert-danger\">Invalid time format</pre>\r\n\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Set to 14:00</button>\r\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\r\n");

/***/ }),

/***/ "kjOs":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/min-max/min-max.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerMinMaxComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerMinMaxComponent = /** @class */ (function () {
    function DemoTimepickerMinMaxComponent() {
        this.myTime = new Date();
        this.minTime = new Date();
        this.maxTime = new Date();
        this.minTime.setHours(8);
        this.minTime.setMinutes(0);
        this.maxTime.setHours(23);
        this.maxTime.setMinutes(55);
    }
    DemoTimepickerMinMaxComponent.ɵfac = function DemoTimepickerMinMaxComponent_Factory(t) { return new (t || DemoTimepickerMinMaxComponent)(); };
    DemoTimepickerMinMaxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerMinMaxComponent, selectors: [["demo-timepicker-min-max"]], decls: 3, vars: 4, consts: [[3, "ngModel", "min", "max", "ngModelChange"], [1, "alert", "alert-info"]], template: function DemoTimepickerMinMaxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerMinMaxComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("min", ctx.minTime)("max", ctx.maxTime);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.myTime, "");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerMinMaxComponent;
}());
exports.DemoTimepickerMinMaxComponent = DemoTimepickerMinMaxComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerMinMaxComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-min-max',
                templateUrl: './min-max.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "koIG":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demo-timepicker.routes.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var timepicker_section_component_1 = __webpack_require__(/*! ./timepicker-section.component */ "oSlN");
exports.routes = [{ path: '', component: timepicker_section_component_1.TimepickerSectionComponent }];


/***/ }),

/***/ "lCQv":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/toggle-minutes-seconds/toggle-minutes-seconds.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-seconds',\r\n  templateUrl: './toggle-minutes-seconds.html'\r\n})\r\nexport class DemoTimepickerToggleMinutesSecondsComponent {\r\n  myTime: Date = new Date();\r\n  showMin: boolean = true;\r\n  showSec: boolean = true;\r\n\r\n  toggleMinutes(): void {\r\n    this.showMin = !this.showMin;\r\n  }\r\n\r\n  toggleSeconds(): void {\r\n    this.showSec = !this.showSec;\r\n  }\r\n\r\n}\r\n");

/***/ }),

/***/ "mF++":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/isvalid/isvalid.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerIsValidComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTimepickerIsValidComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1, "Invalid time");
    i0.ɵɵelementEnd();
} }
var DemoTimepickerIsValidComponent = /** @class */ (function () {
    function DemoTimepickerIsValidComponent() {
        this.isMeridian = true;
        this.myTime = new Date();
        this.valid = true;
    }
    DemoTimepickerIsValidComponent.prototype.isValid = function (event) {
        this.valid = event;
    };
    DemoTimepickerIsValidComponent.ɵfac = function DemoTimepickerIsValidComponent_Factory(t) { return new (t || DemoTimepickerIsValidComponent)(); };
    DemoTimepickerIsValidComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerIsValidComponent, selectors: [["demo-timepicker-isvalid"]], decls: 5, vars: 8, consts: [[3, "ngModel", "showMeridian", "ngModelChange", "isValid"], [1, "alert"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"]], template: function DemoTimepickerIsValidComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerIsValidComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; })("isValid", function DemoTimepickerIsValidComponent_Template_timepicker_isValid_0_listener($event) { return ctx.isValid($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(1, "hr");
            i0.ɵɵelementStart(2, "pre", 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoTimepickerIsValidComponent_div_4_Template, 2, 0, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("showMeridian", ctx.isMeridian);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("alert-danger", !ctx.valid)("alert-success", ctx.valid);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("  Time is: ", ctx.myTime, "\n");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.valid);
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel, i3.NgIf], encapsulation: 2 });
    return DemoTimepickerIsValidComponent;
}());
exports.DemoTimepickerIsValidComponent = DemoTimepickerIsValidComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerIsValidComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-isvalid',
                templateUrl: './isvalid.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "n5He":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/custom-meridian/custom-meridian.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-custom-meridian',\r\n  templateUrl: './custom-meridian.html'\r\n})\r\nexport class DemoTimepickerCustomMeridianComponent {\r\n  mytime: Date = new Date();\r\n  meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];\r\n}\r\n");

/***/ }),

/***/ "ntwN":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/basic/basic.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoTimepickerBasicComponent {\r\n  mytime: Date = new Date();\r\n}\r\n");

/***/ }),

/***/ "oSlN":
/*!*****************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/timepicker-section.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TimepickerSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var timepicker_section_list_1 = __webpack_require__(/*! ./timepicker-section.list */ "Royt");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var TimepickerSectionComponent = /** @class */ (function () {
    function TimepickerSectionComponent() {
        this.name = 'Timepicker';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/timepicker';
        this.componentContent = timepicker_section_list_1.demoComponentContent;
    }
    TimepickerSectionComponent.ɵfac = function TimepickerSectionComponent_Factory(t) { return new (t || TimepickerSectionComponent)(); };
    TimepickerSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimepickerSectionComponent, selectors: [["timepicker-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function TimepickerSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "A lightweight & configurable timepicker directive");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return TimepickerSectionComponent;
}());
exports.TimepickerSectionComponent = TimepickerSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimepickerSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'timepicker-section',
                templateUrl: './timepicker-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "odjH":
/*!************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var basic_1 = __webpack_require__(/*! ./basic/basic */ "oxKV");
var config_1 = __webpack_require__(/*! ./config/config */ "ODd3");
var meridian_1 = __webpack_require__(/*! ./meridian/meridian */ "uZbM");
var custom_meridian_1 = __webpack_require__(/*! ./custom-meridian/custom-meridian */ "uKs7");
var disabled_1 = __webpack_require__(/*! ./disabled/disabled */ "Osdt");
var custom_1 = __webpack_require__(/*! ./custom/custom */ "cdYT");
var dynamic_1 = __webpack_require__(/*! ./dynamic/dynamic */ "RBnv");
var min_max_1 = __webpack_require__(/*! ./min-max/min-max */ "kjOs");
var toggle_minutes_seconds_1 = __webpack_require__(/*! ./toggle-minutes-seconds/toggle-minutes-seconds */ "GPCp");
var arrowkeys_1 = __webpack_require__(/*! ./arrowkeys/arrowkeys */ "TLcb");
var mousewheel_1 = __webpack_require__(/*! ./mousewheel/mousewheel */ "q6Kn");
var custom_validation_1 = __webpack_require__(/*! ./custom-validation/custom-validation */ "Tq6N");
var isvalid_1 = __webpack_require__(/*! ./isvalid/isvalid */ "mF++");
var spinners_1 = __webpack_require__(/*! ./spinners/spinners */ "XiB2");
var readonly_1 = __webpack_require__(/*! ./readonly/readonly */ "VHzG");
var form_1 = __webpack_require__(/*! ./form/form */ "V9jF");
var placeholder_1 = __webpack_require__(/*! ./placeholder/placeholder */ "XiLk");
exports.DEMO_COMPONENTS = [
    basic_1.DemoTimepickerBasicComponent,
    form_1.DemoTimepickerFormComponent,
    config_1.DemoTimepickerConfigComponent,
    meridian_1.DemoTimepickerMeridianComponent,
    custom_meridian_1.DemoTimepickerCustomMeridianComponent,
    min_max_1.DemoTimepickerMinMaxComponent,
    disabled_1.DemoTimepickerDisabledComponent,
    readonly_1.DemoTimepickerReadonlyComponent,
    custom_1.DemoTimepickerCustomComponent,
    dynamic_1.DemoTimepickerDynamicComponent,
    toggle_minutes_seconds_1.DemoTimepickerToggleMinutesSecondsComponent,
    arrowkeys_1.DemoTimepickerArrowkeysComponent,
    mousewheel_1.DemoTimepickerMousewheelComponent,
    custom_validation_1.DemoTimepickerCustomValidationComponent,
    isvalid_1.DemoTimepickerIsValidComponent,
    custom_validation_1.DemoTimepickerCustomValidationComponent,
    spinners_1.DemoTimepickerSpinnersComponent,
    placeholder_1.DemoTimepickerPlaceholderComponent
];


/***/ }),

/***/ "oxKV":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/basic/basic.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerBasicComponent = /** @class */ (function () {
    function DemoTimepickerBasicComponent() {
        this.mytime = new Date();
    }
    DemoTimepickerBasicComponent.ɵfac = function DemoTimepickerBasicComponent_Factory(t) { return new (t || DemoTimepickerBasicComponent)(); };
    DemoTimepickerBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerBasicComponent, selectors: [["demo-timepicker-basic"]], decls: 3, vars: 2, consts: [[3, "ngModel", "ngModelChange"], [1, "alert", "alert-info"]], template: function DemoTimepickerBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerBasicComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.mytime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.mytime);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.mytime, "");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerBasicComponent;
}());
exports.DemoTimepickerBasicComponent = DemoTimepickerBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "q6Kn":
/*!****************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/mousewheel/mousewheel.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerMousewheelComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerMousewheelComponent = /** @class */ (function () {
    function DemoTimepickerMousewheelComponent() {
        this.allowMouseWheel = true;
        this.myTime = new Date();
    }
    DemoTimepickerMousewheelComponent.ɵfac = function DemoTimepickerMousewheelComponent_Factory(t) { return new (t || DemoTimepickerMousewheelComponent)(); };
    DemoTimepickerMousewheelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerMousewheelComponent, selectors: [["demo-timepicker-mousewheel"]], decls: 6, vars: 3, consts: [[3, "ngModel", "mousewheel", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", "section", "bd-example", 3, "click"], [1, "alert", "alert-info"]], template: function DemoTimepickerMousewheelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerMousewheelComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.myTime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(1, "hr");
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function DemoTimepickerMousewheelComponent_Template_button_click_2_listener() { return ctx.allowMouseWheel = !ctx.allowMouseWheel; });
            i0.ɵɵtext(3, "Enable / Disable mouse wheel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "pre", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.myTime)("mousewheel", ctx.allowMouseWheel);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.myTime, "");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerMousewheelComponent;
}());
exports.DemoTimepickerMousewheelComponent = DemoTimepickerMousewheelComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerMousewheelComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-mousewheel',
                templateUrl: './mousewheel.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "uKs7":
/*!**************************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/custom-meridian/custom-meridian.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerCustomMeridianComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerCustomMeridianComponent = /** @class */ (function () {
    function DemoTimepickerCustomMeridianComponent() {
        this.mytime = new Date();
        this.meridians = ['AM(Midnight to Noon)', 'PM(Noon to Midnight)'];
    }
    DemoTimepickerCustomMeridianComponent.ɵfac = function DemoTimepickerCustomMeridianComponent_Factory(t) { return new (t || DemoTimepickerCustomMeridianComponent)(); };
    DemoTimepickerCustomMeridianComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerCustomMeridianComponent, selectors: [["demo-timepicker-custom-meridian"]], decls: 3, vars: 3, consts: [[3, "ngModel", "meridians", "ngModelChange"], [1, "alert", "alert-info"]], template: function DemoTimepickerCustomMeridianComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerCustomMeridianComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.mytime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.mytime)("meridians", ctx.meridians);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.mytime, "");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerCustomMeridianComponent;
}());
exports.DemoTimepickerCustomMeridianComponent = DemoTimepickerCustomMeridianComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerCustomMeridianComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-custom-meridian',
                templateUrl: './custom-meridian.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "uZbM":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+timepicker/demos/meridian/meridian.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTimepickerMeridianComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ngx-bootstrap/timepicker */ "kUHs");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoTimepickerMeridianComponent = /** @class */ (function () {
    function DemoTimepickerMeridianComponent() {
        this.ismeridian = true;
        this.mytime = new Date();
    }
    DemoTimepickerMeridianComponent.prototype.toggleMode = function () {
        this.ismeridian = !this.ismeridian;
    };
    DemoTimepickerMeridianComponent.ɵfac = function DemoTimepickerMeridianComponent_Factory(t) { return new (t || DemoTimepickerMeridianComponent)(); };
    DemoTimepickerMeridianComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTimepickerMeridianComponent, selectors: [["demo-timepicker-meridian"]], decls: 6, vars: 3, consts: [[3, "ngModel", "showMeridian", "ngModelChange"], [1, "alert", "alert-info"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoTimepickerMeridianComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "timepicker", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTimepickerMeridianComponent_Template_timepicker_ngModelChange_0_listener($event) { return ctx.mytime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "pre", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function DemoTimepickerMeridianComponent_Template_button_click_4_listener() { return ctx.toggleMode(); });
            i0.ɵɵtext(5, "12H / 24H");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.mytime)("showMeridian", ctx.ismeridian);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Time is: ", ctx.mytime, "");
        } }, directives: [i1.TimepickerComponent, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoTimepickerMeridianComponent;
}());
exports.DemoTimepickerMeridianComponent = DemoTimepickerMeridianComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTimepickerMeridianComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-timepicker-meridian',
                templateUrl: './meridian.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "zkII":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+timepicker/demos/meridian/meridian.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-timepicker-meridian',\r\n  templateUrl: './meridian.html'\r\n})\r\nexport class DemoTimepickerMeridianComponent {\r\n  ismeridian: boolean = true;\r\n\r\n  mytime: Date = new Date();\r\n\r\n  toggleMode(): void {\r\n    this.ismeridian = !this.ismeridian;\r\n  }\r\n}\r\n");

/***/ })

};;
//# sourceMappingURL=components-timepicker-demo-timepicker-module.js.map