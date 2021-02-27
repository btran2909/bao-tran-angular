exports.ids = ["components-alerts-demo-alert-module"];
exports.modules = {

/***/ "+sp4":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/basic/basic.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-alert-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoAlertBasicComponent {}\r\n");

/***/ }),

/***/ "/qBw":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dynamic-html/dynamic-html.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\r\n  <alert [type]=\"alert.type\"><span [innerHtml]=\"alert.msg\"></span></alert>\r\n</div>\r\n");

/***/ }),

/***/ "0gxi":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dismiss/dismiss.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-alert-dismiss',\r\n  templateUrl: './dismiss.html'\r\n})\r\nexport class DemoAlertDismissComponent {\r\n  dismissible = true;\r\n  defaultAlerts: any[] = [\r\n    {\r\n      type: 'success',\r\n      msg: `You successfully read this important alert message.`\r\n    },\r\n    {\r\n      type: 'info',\r\n      msg: `This alert needs your attention, but it's not super important.`\r\n    },\r\n    {\r\n      type: 'danger',\r\n      msg: `Better check yourself, you're not looking too good.`\r\n    }\r\n  ];\r\n  alerts = this.defaultAlerts;\r\n\r\n  reset(): void {\r\n    this.alerts = this.defaultAlerts;\r\n  }\r\n\r\n  onClosed(dismissedAlert: any): void {\r\n    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);\r\n  }\r\n}\r\n");

/***/ }),

/***/ "25MS":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/basic/basic.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert type=\"success\">\r\n  <strong>Well done!</strong> You successfully read this important alert message.\r\n</alert>\r\n<alert type=\"info\">\r\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n</alert>\r\n<alert type=\"warning\">\r\n  <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n</alert>\r\n<alert type=\"danger\">\r\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n</alert>\r\n");

/***/ }),

/***/ "3R/t":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/config/config.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { AlertConfig } from 'bao-tran-angular/alert';\n\n// such override allows to keep some initial values\n\nexport function getAlertConfig(): AlertConfig {\n  return Object.assign(new AlertConfig(), { type: 'success' });\n}\n\n@Component({\n  selector: 'demo-alert-config',\n  templateUrl: './config.html',\n  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]\n})\nexport class DemoAlertConfigComponent {}\n");

/***/ }),

/***/ "4QJV":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/content/content.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert type=\"success\">\r\n  <h4 class=\"alert-heading\">Well done!</h4>\r\n  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\r\n  <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\r\n</alert>\r\n");

/***/ }),

/***/ "4ZZ2":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dismiss-on-timeout/dismiss-on-timeout.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>If you missed alert under me, just press <code>Add more</code> button</p>\r\n<div *ngFor=\"let alert of alerts\">\r\n  <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add more</button>\r\n");

/***/ }),

/***/ "4wOD":
/*!****************************************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/dismiss-on-timeout/dismiss-on-timeout.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertTimeoutComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
function DemoAlertTimeoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "alert", 2);
    i0.ɵɵlistener("onClosed", function DemoAlertTimeoutComponent_div_5_Template_alert_onClosed_1_listener() { i0.ɵɵrestoreView(_r3); var alert_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClosed(alert_r1); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var alert_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", alert_r1.type)("dismissOnTimeout", alert_r1.timeout);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(alert_r1.msg);
} }
var DemoAlertTimeoutComponent = /** @class */ (function () {
    function DemoAlertTimeoutComponent() {
        this.alerts = [{
                type: 'success',
                msg: "Well done! You successfully read this important alert message. (added: " + new Date().toLocaleTimeString() + ")",
                timeout: 5000
            }];
    }
    DemoAlertTimeoutComponent.prototype.add = function () {
        this.alerts.push({
            type: 'info',
            msg: "This alert will be closed in 5 seconds (added: " + new Date().toLocaleTimeString() + ")",
            timeout: 5000
        });
    };
    DemoAlertTimeoutComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    DemoAlertTimeoutComponent.ɵfac = function DemoAlertTimeoutComponent_Factory(t) { return new (t || DemoAlertTimeoutComponent)(); };
    DemoAlertTimeoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertTimeoutComponent, selectors: [["demo-alert-timeout"]], decls: 8, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "type", "dismissOnTimeout", "onClosed"]], template: function DemoAlertTimeoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "If you missed alert under me, just press ");
            i0.ɵɵelementStart(2, "code");
            i0.ɵɵtext(3, "Add more");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, " button");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, DemoAlertTimeoutComponent_div_5_Template, 3, 3, "div", 0);
            i0.ɵɵelementStart(6, "button", 1);
            i0.ɵɵlistener("click", function DemoAlertTimeoutComponent_Template_button_click_6_listener() { return ctx.add(); });
            i0.ɵɵtext(7, "Add more");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.alerts);
        } }, directives: [i1.NgForOf, i2.AlertComponent], encapsulation: 2 });
    return DemoAlertTimeoutComponent;
}());
exports.DemoAlertTimeoutComponent = DemoAlertTimeoutComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertTimeoutComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-timeout',
                templateUrl: './dismiss-on-timeout.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "5+gN":
/*!********************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var basic_1 = __webpack_require__(/*! ./basic/basic */ "lR1z");
var link_1 = __webpack_require__(/*! ./link/link */ "EnXW");
var content_1 = __webpack_require__(/*! ./content/content */ "wfoA");
var dismiss_1 = __webpack_require__(/*! ./dismiss/dismiss */ "QK5d");
var dynamic_html_1 = __webpack_require__(/*! ./dynamic-html/dynamic-html */ "WfZu");
var dismiss_on_timeout_1 = __webpack_require__(/*! ./dismiss-on-timeout/dismiss-on-timeout */ "4wOD");
var styling_global_1 = __webpack_require__(/*! ./styling-global/styling-global */ "Hsvc");
var styling_local_1 = __webpack_require__(/*! ./styling-local/styling-local */ "oOUS");
var config_1 = __webpack_require__(/*! ./config/config */ "6gqW");
var dynamic_content_1 = __webpack_require__(/*! ./dynamic-content/dynamic-content */ "6usK");
exports.DEMO_COMPONENTS = [
    basic_1.DemoAlertBasicComponent,
    link_1.DemoAlertLinkComponent,
    content_1.DemoAlertContentComponent,
    dismiss_1.DemoAlertDismissComponent,
    dynamic_html_1.DemoAlertDynamicHtmlComponent,
    dynamic_content_1.DemoAlertDynamicContentComponent,
    dismiss_on_timeout_1.DemoAlertTimeoutComponent,
    styling_global_1.DemoAlertStylingGlobalComponent,
    styling_local_1.DemoAlertStylingLocalComponent,
    config_1.DemoAlertConfigComponent
];


/***/ }),

/***/ "50XX":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/docs/usage.md ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { AlertModule } from 'bao-tran-angular/alert';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { AlertModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [AlertModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "67oK":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+alerts/alerts-section.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var alerts_section_list_1 = __webpack_require__(/*! ./alerts-section.list */ "FrF9");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.name = 'Alerts';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/alert';
        this.componentContent = alerts_section_list_1.demoComponentContent;
    }
    AlertsSectionComponent.ɵfac = function AlertsSectionComponent_Factory(t) { return new (t || AlertsSectionComponent)(); };
    AlertsSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertsSectionComponent, selectors: [["alert-section"]], decls: 6, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function AlertsSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "The easiest way to add an alerts component to your app (will be added to the root module)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return AlertsSectionComponent;
}());
exports.AlertsSectionComponent = AlertsSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertsSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'alert-section',
                templateUrl: './alerts-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "6gqW":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/config/config.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertConfigComponent = exports.getAlertConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var alert_1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
// such override allows to keep some initial values
function getAlertConfig() {
    return Object.assign(new alert_1.AlertConfig(), { type: 'success' });
}
exports.getAlertConfig = getAlertConfig;
var DemoAlertConfigComponent = /** @class */ (function () {
    function DemoAlertConfigComponent() {
    }
    DemoAlertConfigComponent.ɵfac = function DemoAlertConfigComponent_Factory(t) { return new (t || DemoAlertConfigComponent)(); };
    DemoAlertConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertConfigComponent, selectors: [["demo-alert-config"]], features: [i0.ɵɵProvidersFeature([{ provide: alert_1.AlertConfig, useFactory: getAlertConfig }])], decls: 8, vars: 0, consts: [["type", "info"]], template: function DemoAlertConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "alert");
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2, "Well done!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " You successfully read this important alert message.\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "alert", 0);
            i0.ɵɵelementStart(5, "strong");
            i0.ɵɵtext(6, "Heads up!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " This alert needs your attention, but it's not super important.\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.AlertComponent], encapsulation: 2 });
    return DemoAlertConfigComponent;
}());
exports.DemoAlertConfigComponent = DemoAlertConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-config',
                templateUrl: './config.html',
                providers: [{ provide: alert_1.AlertConfig, useFactory: getAlertConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "6usK":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/dynamic-content/dynamic-content.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertDynamicContentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoAlertDynamicContentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "button", 3);
    i0.ɵɵlistener("click", function DemoAlertDynamicContentComponent_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeText(); });
    i0.ɵɵtext(2, "Change text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DemoAlertDynamicContentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function DemoAlertDynamicContentComponent_ng_template_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.index = 0; });
    i0.ɵɵtext(1, "Reset");
    i0.ɵɵelementEnd();
} }
var DemoAlertDynamicContentComponent = /** @class */ (function () {
    function DemoAlertDynamicContentComponent() {
        this.index = 0;
        this.messages = [
            'You successfully read this important alert message.',
            'Now this text is different from what it was before. Go ahead and click the button one more time',
            'Well done! Click reset button and you\'ll see the first message'
        ];
    }
    DemoAlertDynamicContentComponent.prototype.changeText = function () {
        if (this.messages.length - 1 !== this.index) {
            this.index++;
        }
    };
    DemoAlertDynamicContentComponent.ɵfac = function DemoAlertDynamicContentComponent_Factory(t) { return new (t || DemoAlertDynamicContentComponent)(); };
    DemoAlertDynamicContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertDynamicContentComponent, selectors: [["demo-alert-content-html"]], decls: 5, vars: 3, consts: [["type", "success"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "btn", "btn-primary", 3, "click"]], template: function DemoAlertDynamicContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "alert", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoAlertDynamicContentComponent_div_2_Template, 3, 0, "div", 1);
            i0.ɵɵtemplate(3, DemoAlertDynamicContentComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.messages[ctx.index]);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.index !== ctx.messages.length - 1)("ngIfElse", _r1);
        } }, directives: [i1.AlertComponent, i2.NgIf], encapsulation: 2 });
    return DemoAlertDynamicContentComponent;
}());
exports.DemoAlertDynamicContentComponent = DemoAlertDynamicContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertDynamicContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-content-html',
                templateUrl: './dynamic-content.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "80s3":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dismiss/dismiss.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\r\n  <alert [type]=\"alert.type\" [dismissible]=\"dismissible\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible</button>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n");

/***/ }),

/***/ "Biq7":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dynamic-content/dynamic-content.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert type=\"success\">{{messages[index]}}</alert>\r\n\r\n<div *ngIf=\"index !== messages.length -1; else elseBlock\">\r\n  <button class=\"btn btn-primary\" (click)=\"changeText()\">Change text</button>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <button class=\"btn btn-primary\" (click)=\"index = 0\">Reset</button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "D7w+":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/link/link.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert type=\"success\">\r\n  <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\r\n</alert>\r\n<alert type=\"info\">\r\n  <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\r\n</alert>\r\n<alert type=\"warning\">\r\n  <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\r\n</alert>\r\n<alert type=\"danger\">\r\n  <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n</alert>\r\n");

/***/ }),

/***/ "DpZG":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dismiss-on-timeout/dismiss-on-timeout.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { AlertComponent } from 'bao-tran-angular/alert/alert.component';\n\n@Component({\n  selector: 'demo-alert-timeout',\n  templateUrl: './dismiss-on-timeout.html'\n})\nexport class DemoAlertTimeoutComponent {\n  alerts: any[] = [{\n    type: 'success',\n    msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,\n    timeout: 5000\n  }];\n\n  add(): void {\n    this.alerts.push({\n      type: 'info',\n      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,\n      timeout: 5000\n    });\n  }\n\n  onClosed(dismissedAlert: AlertComponent): void {\n    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);\n  }\n}\n");

/***/ }),

/***/ "EnXW":
/*!************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/link/link.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertLinkComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var DemoAlertLinkComponent = /** @class */ (function () {
    function DemoAlertLinkComponent() {
    }
    DemoAlertLinkComponent.ɵfac = function DemoAlertLinkComponent_Factory(t) { return new (t || DemoAlertLinkComponent)(); };
    DemoAlertLinkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertLinkComponent, selectors: [["demo-alert-link"]], decls: 27, vars: 0, consts: [["type", "success"], ["href", "#", 1, "alert-link"], ["type", "info"], ["type", "warning"], ["type", "danger"]], template: function DemoAlertLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "alert", 0);
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2, "Well done!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " You successfully read ");
            i0.ɵɵelementStart(4, "a", 1);
            i0.ɵɵtext(5, "this important alert message");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, ".\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "alert", 2);
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9, "Heads up!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " This ");
            i0.ɵɵelementStart(11, "a", 1);
            i0.ɵɵtext(12, "alert needs your attention");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, ", but it's not super important.\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "alert", 3);
            i0.ɵɵelementStart(15, "strong");
            i0.ɵɵtext(16, "Warning!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, " Better check yourself, you're ");
            i0.ɵɵelementStart(18, "a", 1);
            i0.ɵɵtext(19, "not looking too good");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, ".\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "alert", 4);
            i0.ɵɵelementStart(22, "strong");
            i0.ɵɵtext(23, "Oh snap!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "a", 1);
            i0.ɵɵtext(25, "Change a few things up");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " and try submitting again.\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.AlertComponent], encapsulation: 2 });
    return DemoAlertLinkComponent;
}());
exports.DemoAlertLinkComponent = DemoAlertLinkComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertLinkComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-link',
                templateUrl: './link.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "FrF9":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+alerts/alerts-section.list.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "lR1z");
var link_1 = __webpack_require__(/*! ./demos/link/link */ "EnXW");
var content_1 = __webpack_require__(/*! ./demos/content/content */ "wfoA");
var dismiss_1 = __webpack_require__(/*! ./demos/dismiss/dismiss */ "QK5d");
var dynamic_html_1 = __webpack_require__(/*! ./demos/dynamic-html/dynamic-html */ "WfZu");
var dynamic_content_1 = __webpack_require__(/*! ./demos/dynamic-content/dynamic-content */ "6usK");
var dismiss_on_timeout_1 = __webpack_require__(/*! ./demos/dismiss-on-timeout/dismiss-on-timeout */ "4wOD");
var styling_global_1 = __webpack_require__(/*! ./demos/styling-global/styling-global */ "Hsvc");
var styling_local_1 = __webpack_require__(/*! ./demos/styling-local/styling-local */ "oOUS");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "6gqW");
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
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "50XX")
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
                description: "<p>Alerts are available for any length of text, as well as an optional dismiss\n          button. For proper styling, use one of the four <strong>required</strong>\n          contextual classes (e.g., <code>.alert-success</code>). For inline\n          dismissal, use the <code>dismissible</code> property.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic */ "+sp4"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "25MS"),
                outlet: basic_1.DemoAlertBasicComponent
            },
            {
                title: 'Link color',
                anchor: 'link-color',
                description: "<p>Use the <code>.alert-link</code> utility class to quickly provide matching\n          colored links within any alert.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/link/link.ts */ "ZI10"),
                html: __webpack_require__(/*! !raw-loader!./demos/link/link.html */ "D7w+"),
                outlet: link_1.DemoAlertLinkComponent
            },
            {
                title: 'Additional content',
                anchor: 'additional-content',
                description: "<p>Alerts can also contain additional HTML elements like headings and\n          paragraphs.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/content/content.ts */ "mNWG"),
                html: __webpack_require__(/*! !raw-loader!./demos/content/content.html */ "4QJV"),
                outlet: content_1.DemoAlertContentComponent
            },
            {
                title: 'Dismissing',
                anchor: 'dismissing',
                description: "<p>Alerts have <code>dismiss</code> option. Enabling it will show close button\n          to the right of the alert.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/dismiss/dismiss.ts */ "0gxi"),
                html: __webpack_require__(/*! !raw-loader!./demos/dismiss/dismiss.html */ "80s3"),
                outlet: dismiss_1.DemoAlertDismissComponent
            },
            {
                title: 'Dynamic html',
                anchor: 'dynamic-html',
                description: "<p>Sometimes you will need to show dynamically generated html in alerts, here\n          is how you can make it. And don't forget to sanitize your html.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic-html/dynamic-html.ts */ "uSVt"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic-html/dynamic-html.html */ "/qBw"),
                outlet: dynamic_html_1.DemoAlertDynamicHtmlComponent
            },
            {
                title: 'Dynamic content',
                anchor: 'dynamic-content',
                description: "<p>Alerts fully support bindings.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic-content/dynamic-content.ts */ "oxdj"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic-content/dynamic-content.html */ "Biq7"),
                outlet: dynamic_content_1.DemoAlertDynamicContentComponent
            },
            {
                title: 'Dismiss on timeout',
                anchor: 'dismiss-on-timeout',
                description: "<p>You can simply set timeout in milliseconds to <code>dismissOnTimeout</code>\n          property to create self closable alerts.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/dismiss-on-timeout/dismiss-on-timeout.ts */ "DpZG"),
                html: __webpack_require__(/*! !raw-loader!./demos/dismiss-on-timeout/dismiss-on-timeout.html */ "4ZZ2"),
                outlet: dismiss_on_timeout_1.DemoAlertTimeoutComponent
            },
            {
                title: 'Global styling',
                anchor: 'global-styling',
                description: "<p>You can add additional types of alerts globally.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/styling-global/styling-global.ts */ "qMQJ"),
                html: __webpack_require__(/*! !raw-loader!./demos/styling-global/styling-global.html */ "aSi3"),
                outlet: styling_global_1.DemoAlertStylingGlobalComponent
            },
            {
                title: 'Component level styling',
                anchor: 'local-styling',
                description: "<p>You can add additional types of alerts directly to containing component</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/styling-local/styling-local.ts */ "tpBY"),
                html: __webpack_require__(/*! !raw-loader!./demos/styling-local/styling-local.html */ "SQCk"),
                outlet: styling_local_1.DemoAlertStylingLocalComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'configuration',
                description: "<p>It is possible to override default alert config partially or completely.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/config/config.ts */ "3R/t"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "XY5g"),
                outlet: config_1.DemoAlertConfigComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'AlertComponent',
                anchor: 'alert-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'AlertConfig',
                anchor: 'alert-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "Hsvc":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/styling-global/styling-global.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertStylingGlobalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var DemoAlertStylingGlobalComponent = /** @class */ (function () {
    function DemoAlertStylingGlobalComponent() {
    }
    DemoAlertStylingGlobalComponent.ɵfac = function DemoAlertStylingGlobalComponent_Factory(t) { return new (t || DemoAlertStylingGlobalComponent)(); };
    DemoAlertStylingGlobalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertStylingGlobalComponent, selectors: [["demo-alert-styling-global"]], decls: 4, vars: 0, consts: [["type", "md-color"]], template: function DemoAlertStylingGlobalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "alert", 0);
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2, "Well done!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " You successfully read this important alert message.\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.AlertComponent], styles: ["\n  .alert-md-color {\n    background-color: #7B1FA2;\n    border-color: #4A148C;\n    color: #fff;\n  }\n"], encapsulation: 2 });
    return DemoAlertStylingGlobalComponent;
}());
exports.DemoAlertStylingGlobalComponent = DemoAlertStylingGlobalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertStylingGlobalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-styling-global',
                templateUrl: './styling-global.html',
                encapsulation: core_1.ViewEncapsulation.None
            }]
    }], null, null); })();


/***/ }),

/***/ "QK5d":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/dismiss/dismiss.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertDismissComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
function DemoAlertDismissComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "alert", 2);
    i0.ɵɵlistener("onClosed", function DemoAlertDismissComponent_div_0_Template_alert_onClosed_1_listener() { i0.ɵɵrestoreView(_r3); var alert_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClosed(alert_r1); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var alert_r1 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", alert_r1.type)("dismissible", ctx_r0.dismissible);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(alert_r1.msg);
} }
var DemoAlertDismissComponent = /** @class */ (function () {
    function DemoAlertDismissComponent() {
        this.dismissible = true;
        this.defaultAlerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
        this.alerts = this.defaultAlerts;
    }
    DemoAlertDismissComponent.prototype.reset = function () {
        this.alerts = this.defaultAlerts;
    };
    DemoAlertDismissComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    DemoAlertDismissComponent.ɵfac = function DemoAlertDismissComponent_Factory(t) { return new (t || DemoAlertDismissComponent)(); };
    DemoAlertDismissComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertDismissComponent, selectors: [["demo-alert-dismiss"]], decls: 5, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "type", "dismissible", "onClosed"]], template: function DemoAlertDismissComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoAlertDismissComponent_div_0_Template, 3, 3, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵlistener("click", function DemoAlertDismissComponent_Template_button_click_1_listener() { return ctx.dismissible = !ctx.dismissible; });
            i0.ɵɵtext(2, "Toggle dismissible");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function DemoAlertDismissComponent_Template_button_click_3_listener() { return ctx.reset(); });
            i0.ɵɵtext(4, "Reset");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.alerts);
        } }, directives: [i1.NgForOf, i2.AlertComponent], encapsulation: 2 });
    return DemoAlertDismissComponent;
}());
exports.DemoAlertDismissComponent = DemoAlertDismissComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertDismissComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-dismiss',
                templateUrl: './dismiss.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "SQCk":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/styling-local/styling-local.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert type=\"md-local\">\r\n  <strong>Well done!</strong> You successfully read this important alert message.\r\n</alert>\r\n");

/***/ }),

/***/ "WfZu":
/*!****************************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/dynamic-html/dynamic-html.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertDynamicHtmlComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
var i3 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
function DemoAlertDynamicHtmlComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "alert", 1);
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var alert_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", alert_r1.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", alert_r1.msg, i0.ɵɵsanitizeHtml);
} }
var DemoAlertDynamicHtmlComponent = /** @class */ (function () {
    function DemoAlertDynamicHtmlComponent(sanitizer) {
        this.alerts = [
            {
                type: 'success',
                msg: "<strong>Well done!</strong> You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "<strong>Heads up!</strong> This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
            }
        ];
        this.alerts = this.alerts.map(function (alert) { return ({
            type: alert.type,
            msg: sanitizer.sanitize(core_1.SecurityContext.HTML, alert.msg)
        }); });
    }
    DemoAlertDynamicHtmlComponent.ɵfac = function DemoAlertDynamicHtmlComponent_Factory(t) { return new (t || DemoAlertDynamicHtmlComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
    DemoAlertDynamicHtmlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertDynamicHtmlComponent, selectors: [["demo-alert-dynamic-html"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "type"], [3, "innerHtml"]], template: function DemoAlertDynamicHtmlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoAlertDynamicHtmlComponent_div_0_Template, 3, 2, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.alerts);
        } }, directives: [i2.NgForOf, i3.AlertComponent], encapsulation: 2 });
    return DemoAlertDynamicHtmlComponent;
}());
exports.DemoAlertDynamicHtmlComponent = DemoAlertDynamicHtmlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertDynamicHtmlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-dynamic-html',
                templateUrl: './dynamic-html.html'
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();


/***/ }),

/***/ "XPdg":
/*!**************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demo-alert.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertsModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var alert_1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var alerts_section_component_1 = __webpack_require__(/*! ./alerts-section.component */ "67oK");
var demos_1 = __webpack_require__(/*! ./demos */ "5+gN");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var demo_alerts_routes_1 = __webpack_require__(/*! ./demo-alerts.routes */ "ewAh");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/basic/basic */ "lR1z");
var i2 = __webpack_require__(/*! ./demos/link/link */ "EnXW");
var i3 = __webpack_require__(/*! ./demos/content/content */ "wfoA");
var i4 = __webpack_require__(/*! ./demos/dismiss/dismiss */ "QK5d");
var i5 = __webpack_require__(/*! ./demos/dynamic-html/dynamic-html */ "WfZu");
var i6 = __webpack_require__(/*! ./demos/dynamic-content/dynamic-content */ "6usK");
var i7 = __webpack_require__(/*! ./demos/dismiss-on-timeout/dismiss-on-timeout */ "4wOD");
var i8 = __webpack_require__(/*! ./demos/styling-global/styling-global */ "Hsvc");
var i9 = __webpack_require__(/*! ./demos/styling-local/styling-local */ "oOUS");
var i10 = __webpack_require__(/*! ./demos/config/config */ "6gqW");
var i11 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var i12 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoAlertsModule = /** @class */ (function () {
    function DemoAlertsModule() {
    }
    DemoAlertsModule.routes = demo_alerts_routes_1.routes;
    DemoAlertsModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoAlertsModule });
    DemoAlertsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoAlertsModule_Factory(t) { return new (t || DemoAlertsModule)(); }, imports: [[
                alert_1.AlertModule.forRoot(),
                common_1.CommonModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_alerts_routes_1.routes)
            ]] });
    return DemoAlertsModule;
}());
exports.DemoAlertsModule = DemoAlertsModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoAlertsModule, { declarations: [alerts_section_component_1.AlertsSectionComponent, i1.DemoAlertBasicComponent, i2.DemoAlertLinkComponent, i3.DemoAlertContentComponent, i4.DemoAlertDismissComponent, i5.DemoAlertDynamicHtmlComponent, i6.DemoAlertDynamicContentComponent, i7.DemoAlertTimeoutComponent, i8.DemoAlertStylingGlobalComponent, i9.DemoAlertStylingLocalComponent, i10.DemoAlertConfigComponent], imports: [i11.AlertModule, common_1.CommonModule,
        docs_1.DocsModule, i12.RouterModule], exports: [alerts_section_component_1.AlertsSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertsModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    alerts_section_component_1.AlertsSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    alert_1.AlertModule.forRoot(),
                    common_1.CommonModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_alerts_routes_1.routes)
                ],
                exports: [alerts_section_component_1.AlertsSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "XY5g":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/config/config.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert>\r\n  <strong>Well done!</strong> You successfully read this important alert message.\r\n</alert>\r\n<alert type=\"info\">\r\n  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\r\n</alert>\r\n");

/***/ }),

/***/ "ZI10":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/link/link.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-alert-link',\r\n  templateUrl: './link.html'\r\n})\r\nexport class DemoAlertLinkComponent {}\r\n");

/***/ }),

/***/ "aSi3":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/styling-global/styling-global.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .alert-md-color {\r\n    background-color: #7B1FA2;\r\n    border-color: #4A148C;\r\n    color: #fff;\r\n  }\r\n</style>\r\n<alert type=\"md-color\">\r\n  <strong>Well done!</strong> You successfully read this important alert message.\r\n</alert>\r\n");

/***/ }),

/***/ "ewAh":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demo-alerts.routes.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var alerts_section_component_1 = __webpack_require__(/*! ./alerts-section.component */ "67oK");
exports.routes = [{ path: '', component: alerts_section_component_1.AlertsSectionComponent }];


/***/ }),

/***/ "lR1z":
/*!**************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/basic/basic.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var DemoAlertBasicComponent = /** @class */ (function () {
    function DemoAlertBasicComponent() {
    }
    DemoAlertBasicComponent.ɵfac = function DemoAlertBasicComponent_Factory(t) { return new (t || DemoAlertBasicComponent)(); };
    DemoAlertBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertBasicComponent, selectors: [["demo-alert-basic"]], decls: 16, vars: 0, consts: [["type", "success"], ["type", "info"], ["type", "warning"], ["type", "danger"]], template: function DemoAlertBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "alert", 0);
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2, "Well done!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " You successfully read this important alert message.\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "alert", 1);
            i0.ɵɵelementStart(5, "strong");
            i0.ɵɵtext(6, "Heads up!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " This alert needs your attention, but it's not super important.\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "alert", 2);
            i0.ɵɵelementStart(9, "strong");
            i0.ɵɵtext(10, "Warning!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " Better check yourself, you're not looking too good.\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "alert", 3);
            i0.ɵɵelementStart(13, "strong");
            i0.ɵɵtext(14, "Oh snap!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(15, " Change a few things up and try submitting again.\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.AlertComponent], encapsulation: 2 });
    return DemoAlertBasicComponent;
}());
exports.DemoAlertBasicComponent = DemoAlertBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "mNWG":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/content/content.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-alert-content',\r\n  templateUrl: './content.html'\r\n})\r\nexport class DemoAlertContentComponent {}\r\n");

/***/ }),

/***/ "oOUS":
/*!******************************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/styling-local/styling-local.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertStylingLocalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var DemoAlertStylingLocalComponent = /** @class */ (function () {
    function DemoAlertStylingLocalComponent() {
    }
    DemoAlertStylingLocalComponent.ɵfac = function DemoAlertStylingLocalComponent_Factory(t) { return new (t || DemoAlertStylingLocalComponent)(); };
    DemoAlertStylingLocalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertStylingLocalComponent, selectors: [["demo-alert-styling-local"]], decls: 4, vars: 0, consts: [["type", "md-local"]], template: function DemoAlertStylingLocalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "alert", 0);
            i0.ɵɵelementStart(1, "strong");
            i0.ɵɵtext(2, "Well done!");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " You successfully read this important alert message.\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.AlertComponent], styles: ["[_nghost-%COMP%]     .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }"] });
    return DemoAlertStylingLocalComponent;
}());
exports.DemoAlertStylingLocalComponent = DemoAlertStylingLocalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertStylingLocalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-styling-local',
                templateUrl: './styling-local.html',
                /* tslint:disable no-unused-css*/
                styles: [
                    "\n  :host >>> .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  "
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "oxdj":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dynamic-content/dynamic-content.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-alert-content-html',\r\n  templateUrl: './dynamic-content.html'\r\n})\r\nexport class DemoAlertDynamicContentComponent {\r\n  index = 0;\r\n  messages = [\r\n    'You successfully read this important alert message.',\r\n    'Now this text is different from what it was before. Go ahead and click the button one more time',\r\n    'Well done! Click reset button and you\\'ll see the first message'\r\n  ];\r\n\r\n  changeText() {\r\n    if (this.messages.length - 1 !== this.index) {\r\n      this.index++;\r\n    }\r\n  }\r\n}\r\n");

/***/ }),

/***/ "qMQJ":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/styling-global/styling-global.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewEncapsulation } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-alert-styling-global',\r\n  templateUrl: './styling-global.html',\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class DemoAlertStylingGlobalComponent {}\r\n");

/***/ }),

/***/ "tpBY":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/styling-local/styling-local.ts ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-alert-styling-local',\r\n  templateUrl: './styling-local.html',\r\n  /* tslint:disable no-unused-css*/\r\n  styles: [\r\n    `\r\n  :host >>> .alert-md-local {\r\n    background-color: #009688;\r\n    border-color: #00695C;\r\n    color: #fff;\r\n  }\r\n  `\r\n  ]\r\n})\r\nexport class DemoAlertStylingLocalComponent {}\r\n");

/***/ }),

/***/ "uSVt":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+alerts/demos/dynamic-html/dynamic-html.ts ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, SecurityContext } from '@angular/core';\r\nimport { DomSanitizer } from '@angular/platform-browser';\r\n\r\n@Component({\r\n  selector: 'demo-alert-dynamic-html',\r\n  templateUrl: './dynamic-html.html'\r\n})\r\nexport class DemoAlertDynamicHtmlComponent {\r\n  alerts: any = [\r\n    {\r\n      type: 'success',\r\n      msg: `<strong>Well done!</strong> You successfully read this important alert message.`\r\n    },\r\n    {\r\n      type: 'info',\r\n      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`\r\n    },\r\n    {\r\n      type: 'danger',\r\n      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`\r\n    }\r\n  ];\r\n\r\n  constructor(sanitizer: DomSanitizer) {\r\n    this.alerts = this.alerts.map((alert: any) => ({\r\n      type: alert.type,\r\n      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)\r\n    }));\r\n  }\r\n}\r\n");

/***/ }),

/***/ "wfoA":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+alerts/demos/content/content.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAlertContentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/alert */ "4Fsh");
var DemoAlertContentComponent = /** @class */ (function () {
    function DemoAlertContentComponent() {
    }
    DemoAlertContentComponent.ɵfac = function DemoAlertContentComponent_Factory(t) { return new (t || DemoAlertContentComponent)(); };
    DemoAlertContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAlertContentComponent, selectors: [["demo-alert-content"]], decls: 7, vars: 0, consts: [["type", "success"], [1, "alert-heading"], [1, "mb-0"]], template: function DemoAlertContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "alert", 0);
            i0.ɵɵelementStart(1, "h4", 1);
            i0.ɵɵtext(2, "Well done!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 2);
            i0.ɵɵtext(6, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.AlertComponent], encapsulation: 2 });
    return DemoAlertContentComponent;
}());
exports.DemoAlertContentComponent = DemoAlertContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAlertContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-alert-content',
                templateUrl: './content.html'
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-alerts-demo-alert-module.js.map