exports.ids = ["components-modal-demo-modal-module"];
exports.modules = {

/***/ "+SpF":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-component/service-component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalWithComponent()\">Create modal with component</button>\r\n");

/***/ }),

/***/ "+ggP":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/disable-backdrop/disable-backdrop.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<br>\r\n<br>\r\n<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"config.backdrop = !config.backdrop\">{{config.backdrop ? 'Disable' : 'Enable'}} backdrop</button>\r\n<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"config.ignoreBackdropClick = !config.ignoreBackdropClick\">{{!config.ignoreBackdropClick ? 'Disable' : 'Enable'}} backdrop click</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    Just a modal with a bunch of words inside, nothing serious.\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "/A7J":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-interceptor/service-interceptor.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-interceptor',\n  templateUrl: './service-interceptor.html'\n})\nexport class DemoModalServiceWithInterceptorComponent {\n  bsModalRef: BsModalRef;\n\n  confirmModalRef: BsModalRef;\n  confirmResolve: Function;\n  confirmReject: Function;\n  confirmPromise: Promise<void>;\n\n  constructor(private modalService: BsModalService) {}\n\n  openModalWithInterceptor(confirmTemplate: TemplateRef<any>) {\n    const closeInterceptor = () => {\n      this.confirmPromise = new Promise((resolve, reject) => {\n        this.confirmResolve = resolve;\n        this.confirmReject = reject;\n      });\n      this.confirmModalRef = this.modalService.show(confirmTemplate, {class: 'modal-sm'});\n\n      return this.confirmPromise;\n    };\n    this.bsModalRef = this.modalService.show(ModalContentWithInterceptorComponent, { closeInterceptor });\n    this.bsModalRef.content.closeBtnName = 'Close';\n  }\n\n  confirm(): void {\n    this.confirmResolve();\n    this.confirmModalRef.hide();\n  }\n\n  decline(): void {\n    this.confirmReject();\n    this.confirmModalRef.hide();\n  }\n}\n\n@Component({\n  selector: 'modal-content-with-interceptor',\n  template: `\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Modal with interceptor</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">This modal has closing interceptor</div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n    </div>\n  `\n})\n\nexport class ModalContentWithInterceptorComponent {\n  constructor(public bsModalRef: BsModalRef) { }\n}\n");

/***/ }),

/***/ "/IGX":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-nested/service-nested.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open first modal</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">First modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    This is a first modal<br />\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal2(templateNested)\">Open second modal</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeModal(1)\">Close self</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeModal()\">Close all modal</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #templateNested>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Second modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef2.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    This is nested modal.<br />\r\n    <button *ngIf=\"modalRef\" type=\"button\" class=\"btn btn-danger\" (click)=\"closeFirstModal()\">Close first modal</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal(2)\">Close self</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Close all modal</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "/W40":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+modal/modal-section.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_section_list_1 = __webpack_require__(/*! ./modal-section.list */ "5Zzz");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var ModalSectionComponent = /** @class */ (function () {
    function ModalSectionComponent() {
        this.name = 'Modals';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/modal';
        this.componentContent = modal_section_list_1.demoComponentContent;
    }
    ModalSectionComponent.ɵfac = function ModalSectionComponent_Factory(t) { return new (t || ModalSectionComponent)(); };
    ModalSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalSectionComponent, selectors: [["modal-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function ModalSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return ModalSectionComponent;
}());
exports.ModalSectionComponent = ModalSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'modal-section',
                templateUrl: './modal-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "0fga":
/*!***********************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-template/service-template.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceStaticComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceStaticComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h4", 3);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function DemoModalServiceStaticComponent_ng_template_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtext(7, " This is a modal. ");
    i0.ɵɵelementEnd();
} }
var DemoModalServiceStaticComponent = /** @class */ (function () {
    function DemoModalServiceStaticComponent(modalService) {
        this.modalService = modalService;
    }
    DemoModalServiceStaticComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    DemoModalServiceStaticComponent.ɵfac = function DemoModalServiceStaticComponent_Factory(t) { return new (t || DemoModalServiceStaticComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceStaticComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceStaticComponent, selectors: [["demo-modal-service-static"]], decls: 4, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalServiceStaticComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceStaticComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(3); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Create template modal");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoModalServiceStaticComponent_ng_template_2_Template, 8, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return DemoModalServiceStaticComponent;
}());
exports.DemoModalServiceStaticComponent = DemoModalServiceStaticComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceStaticComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-static',
                templateUrl: './service-template.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "1M8v":
/*!*******************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var sizes_1 = __webpack_require__(/*! ./sizes/sizes */ "VksG");
var static_1 = __webpack_require__(/*! ./static/static */ "ksuB");
var child_1 = __webpack_require__(/*! ./child/child */ "inzw");
var auto_shown_1 = __webpack_require__(/*! ./auto-shown/auto-shown */ "KMKl");
var nested_1 = __webpack_require__(/*! ./nested/nested */ "I60y");
var events_1 = __webpack_require__(/*! ./events/events */ "5PzT");
var service_template_1 = __webpack_require__(/*! ./service-template/service-template */ "0fga");
var service_component_1 = __webpack_require__(/*! ./service-component/service-component */ "CWSE");
var service_interceptor_1 = __webpack_require__(/*! ./service-interceptor/service-interceptor */ "FQNJ");
var service_nested_1 = __webpack_require__(/*! ./service-nested/service-nested */ "rU7H");
var disable_animation_1 = __webpack_require__(/*! ./service-options/disable-animation/disable-animation */ "53if");
var custom_css_class_1 = __webpack_require__(/*! ./service-options/custom-css-class/custom-css-class */ "1nXn");
var disable_esc_closing_1 = __webpack_require__(/*! ./service-options/disable-esc-closing/disable-esc-closing */ "rhTQ");
var disable_backdrop_1 = __webpack_require__(/*! ./service-options/disable-backdrop/disable-backdrop */ "aB/A");
var service_events_1 = __webpack_require__(/*! ./service-events/service-events */ "SEaD");
var service_confirm_window_1 = __webpack_require__(/*! ./service-confirm-window/service-confirm-window */ "obwx");
var scrolling_long_content_1 = __webpack_require__(/*! ./scrolling-long-content/scrolling-long-content */ "vGhm");
var accessibility_1 = __webpack_require__(/*! ./accessibility/accessibility */ "GHg5");
var modal_with_popups_1 = __webpack_require__(/*! ./modal-with-popups/modal-with-popups */ "lsyi");
var change_class_1 = __webpack_require__(/*! ./service-options/change-class/change-class */ "6hMC");
var modal_ref_events_1 = __webpack_require__(/*! ./modal-ref-events/modal-ref-events */ "E730");
exports.DEMO_COMPONENTS = [
    sizes_1.DemoModalSizesComponent,
    child_1.DemoModalChildComponent,
    static_1.DemoModalStaticComponent,
    auto_shown_1.DemoAutoShownModalComponent,
    nested_1.DemoModalNestedComponent,
    service_template_1.DemoModalServiceStaticComponent,
    service_component_1.DemoModalServiceFromComponent,
    service_interceptor_1.DemoModalServiceWithInterceptorComponent,
    service_nested_1.DemoModalServiceNestedComponent,
    custom_css_class_1.DemoModalServiceCustomCSSClassComponent,
    disable_animation_1.DemoModalServiceDisableAnimationComponent,
    disable_esc_closing_1.DemoModalServiceDisableEscClosingComponent,
    disable_backdrop_1.DemoModalServiceDisableBackdropComponent,
    events_1.DemoModalEventsComponent,
    service_events_1.DemoModalServiceEventsComponent,
    service_confirm_window_1.DemoModalServiceConfirmWindowComponent,
    scrolling_long_content_1.DemoModalScrollingLongContentComponent,
    accessibility_1.DemoAccessibilityComponent,
    change_class_1.DemoModalServiceChangeClassComponent,
    modal_with_popups_1.DemoModalWithPopupsComponent,
    modal_ref_events_1.DemoModalRefEventsComponent
];


/***/ }),

/***/ "1nXn":
/*!***************************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-options/custom-css-class/custom-css-class.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceCustomCSSClassComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceCustomCSSClassComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h4", 3);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function DemoModalServiceCustomCSSClassComponent_ng_template_3_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtext(7, " Just a modal with a bunch of words inside, nothing serious. ");
    i0.ɵɵelementEnd();
} }
var DemoModalServiceCustomCSSClassComponent = /** @class */ (function () {
    function DemoModalServiceCustomCSSClassComponent(modalService) {
        this.modalService = modalService;
    }
    DemoModalServiceCustomCSSClassComponent.prototype.openModalWithClass = function (template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    };
    DemoModalServiceCustomCSSClassComponent.ɵfac = function DemoModalServiceCustomCSSClassComponent_Factory(t) { return new (t || DemoModalServiceCustomCSSClassComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceCustomCSSClassComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceCustomCSSClassComponent, selectors: [["demo-modal-service-custom-css-class"]], decls: 5, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalServiceCustomCSSClassComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceCustomCSSClassComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(4); return ctx.openModalWithClass(_r0); });
            i0.ɵɵtext(1, "Open modal with custom css class");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵtemplate(3, DemoModalServiceCustomCSSClassComponent_ng_template_3_Template, 8, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return DemoModalServiceCustomCSSClassComponent;
}());
exports.DemoModalServiceCustomCSSClassComponent = DemoModalServiceCustomCSSClassComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceCustomCSSClassComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-custom-css-class',
                templateUrl: './custom-css-class.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "1o0N":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/auto-shown/auto-shown.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from '@angular/core';\nimport { ModalDirective } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-auto-shown',\n  templateUrl: './auto-shown.html'\n})\nexport class DemoAutoShownModalComponent {\n  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;\n  isModalShown = false;\n\n  showModal(): void {\n    this.isModalShown = true;\n  }\n\n  hideModal(): void {\n    this.autoShownModal.hide();\n  }\n\n  onHidden(): void {\n    this.isModalShown = false;\n  }\n}\n");

/***/ }),

/***/ "4Vm7":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-component/service-component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-component',\n  templateUrl: './service-component.html'\n})\nexport class DemoModalServiceFromComponent {\n  bsModalRef: BsModalRef;\n  constructor(private modalService: BsModalService) {}\n\n  openModalWithComponent() {\n    const initialState = {\n      list: [\n        'Open a modal with component',\n        'Pass your data',\n        'Do something else',\n        '...'\n      ],\n      title: 'Modal with component'\n    };\n    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});\n    this.bsModalRef.content.closeBtnName = 'Close';\n  }\n}\n\n/* This is a component which we pass in modal*/\n\n@Component({\n  selector: 'modal-content',\n  template: `\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{title}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ul *ngIf=\"list.length\">\n        <li *ngFor=\"let item of list\">{{item}}</li>\n      </ul>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n    </div>\n  `\n})\n\nexport class ModalContentComponent implements OnInit {\n  title: string;\n  closeBtnName: string;\n  list: any[] = [];\n\n  constructor(public bsModalRef: BsModalRef) {}\n\n  ngOnInit() {\n    this.list.push('PROFIT!!!');\n  }\n}\n");

/***/ }),

/***/ "4vb+":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/auto-shown/auto-shown.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Render auto-shown modal</button>\r\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\"\r\n     class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-auto-name\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-auto-name\" class=\"modal-title pull-left\">Auto shown modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>I am a modal that is shown right after initialization!</p>\r\n        <p>I wasn't present in DOM until you clicked the button</p>\r\n        <p>When you close me, I'll be removed from the DOM</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "53if":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-options/disable-animation/disable-animation.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceDisableAnimationComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceDisableAnimationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "h4", 4);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 5);
    i0.ɵɵlistener("click", function DemoModalServiceDisableAnimationComponent_ng_template_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtext(7, " Just a modal with a bunch of words inside, nothing serious. ");
    i0.ɵɵelementEnd();
} }
var DemoModalServiceDisableAnimationComponent = /** @class */ (function () {
    function DemoModalServiceDisableAnimationComponent(modalService) {
        this.modalService = modalService;
        this.config = {
            animated: true
        };
    }
    DemoModalServiceDisableAnimationComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, this.config);
    };
    DemoModalServiceDisableAnimationComponent.ɵfac = function DemoModalServiceDisableAnimationComponent_Factory(t) { return new (t || DemoModalServiceDisableAnimationComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceDisableAnimationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceDisableAnimationComponent, selectors: [["demo-modal-service-disable-animation"]], decls: 8, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalServiceDisableAnimationComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceDisableAnimationComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(7); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "button", 1);
            i0.ɵɵlistener("click", function DemoModalServiceDisableAnimationComponent_Template_button_click_4_listener() { return ctx.config.animated = !ctx.config.animated; });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, DemoModalServiceDisableAnimationComponent_ng_template_6_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.config.animated ? "Disable" : "Enable", " animation");
        } }, encapsulation: 2 });
    return DemoModalServiceDisableAnimationComponent;
}());
exports.DemoModalServiceDisableAnimationComponent = DemoModalServiceDisableAnimationComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceDisableAnimationComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-disable-animation',
                templateUrl: './disable-animation.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "5PzT":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/events/events.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalEventsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalEventsComponent_pre_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r2);
} }
var DemoModalEventsComponent = /** @class */ (function () {
    function DemoModalEventsComponent() {
    }
    DemoModalEventsComponent.prototype.showModal = function () {
        this.messages = [];
        this.modal.show();
    };
    DemoModalEventsComponent.prototype.handler = function (type, $event) {
        this.messages.push("event " + type + " is fired" + ($event.dismissReason
            ? ', dismissed by ' + $event.dismissReason
            : ''));
    };
    DemoModalEventsComponent.ɵfac = function DemoModalEventsComponent_Factory(t) { return new (t || DemoModalEventsComponent)(); };
    DemoModalEventsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalEventsComponent, selectors: [["demo-modal-events"]], viewQuery: function DemoModalEventsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(modal_1.ModalDirective, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
        } }, decls: 25, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "card card-block card-header", 4, "ngFor", "ngForOf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-events-name", 1, "modal", "fade", 3, "onShow", "onShown", "onHide", "onHidden"], ["modal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-events-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card", "card-block", "card-header"]], template: function DemoModalEventsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r3 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalEventsComponent_Template_button_click_0_listener() { return ctx.showModal(); });
            i0.ɵɵtext(1, "Open a modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵtemplate(4, DemoModalEventsComponent_pre_4_Template, 2, 1, "pre", 1);
            i0.ɵɵelementStart(5, "div", 2, 3);
            i0.ɵɵlistener("onShow", function DemoModalEventsComponent_Template_div_onShow_5_listener($event) { return ctx.handler("onShow", $event); })("onShown", function DemoModalEventsComponent_Template_div_onShown_5_listener($event) { return ctx.handler("onShown", $event); })("onHide", function DemoModalEventsComponent_Template_div_onHide_5_listener($event) { return ctx.handler("onHide", $event); })("onHidden", function DemoModalEventsComponent_Template_div_onHidden_5_listener($event) { return ctx.handler("onHidden", $event); });
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵelementStart(10, "h4", 7);
            i0.ɵɵtext(11, "Modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 8);
            i0.ɵɵlistener("click", function DemoModalEventsComponent_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r3); var _r1 = i0.ɵɵreference(6); return _r1.hide(); });
            i0.ɵɵelementStart(13, "span", 9);
            i0.ɵɵtext(14, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 10);
            i0.ɵɵtext(16, " Just another modal ");
            i0.ɵɵelement(17, "br");
            i0.ɵɵtext(18, " Click ");
            i0.ɵɵelementStart(19, "b");
            i0.ɵɵtext(20, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(21, ", press ");
            i0.ɵɵelementStart(22, "code");
            i0.ɵɵtext(23, "Esc");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, " or click on backdrop to close modal. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.messages);
        } }, directives: [i1.NgForOf, i2.ModalDirective], styles: [".card[_ngcontent-%COMP%] {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }"] });
    return DemoModalEventsComponent;
}());
exports.DemoModalEventsComponent = DemoModalEventsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalEventsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-events',
                templateUrl: './events.html',
                styles: ["\n    .card {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }\n  "]
            }]
    }], null, { modal: [{
            type: core_1.ViewChild,
            args: [modal_1.ModalDirective, { static: false }]
        }] }); })();


/***/ }),

/***/ "5Zzz":
/*!**************************************************************!*\
  !*** ./demo/src/app/components/+modal/modal-section.list.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var service_template_1 = __webpack_require__(/*! ./demos/service-template/service-template */ "0fga");
var service_component_1 = __webpack_require__(/*! ./demos/service-component/service-component */ "CWSE");
var service_nested_1 = __webpack_require__(/*! ./demos/service-nested/service-nested */ "rU7H");
var service_events_1 = __webpack_require__(/*! ./demos/service-events/service-events */ "SEaD");
var disable_animation_1 = __webpack_require__(/*! ./demos/service-options/disable-animation/disable-animation */ "53if");
var custom_css_class_1 = __webpack_require__(/*! ./demos/service-options/custom-css-class/custom-css-class */ "1nXn");
var disable_esc_closing_1 = __webpack_require__(/*! ./demos/service-options/disable-esc-closing/disable-esc-closing */ "rhTQ");
var disable_backdrop_1 = __webpack_require__(/*! ./demos/service-options/disable-backdrop/disable-backdrop */ "aB/A");
var service_confirm_window_1 = __webpack_require__(/*! ./demos/service-confirm-window/service-confirm-window */ "obwx");
var change_class_1 = __webpack_require__(/*! ./demos/service-options/change-class/change-class */ "6hMC");
var static_1 = __webpack_require__(/*! ./demos/static/static */ "ksuB");
var sizes_1 = __webpack_require__(/*! ./demos/sizes/sizes */ "VksG");
var child_1 = __webpack_require__(/*! ./demos/child/child */ "inzw");
var nested_1 = __webpack_require__(/*! ./demos/nested/nested */ "I60y");
var events_1 = __webpack_require__(/*! ./demos/events/events */ "5PzT");
var auto_shown_1 = __webpack_require__(/*! ./demos/auto-shown/auto-shown */ "KMKl");
var accessibility_1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "GHg5");
var modal_with_popups_1 = __webpack_require__(/*! ./demos/modal-with-popups/modal-with-popups */ "lsyi");
var demo_top_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section */ "ClAA");
var demo_examples_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section */ "y20O");
var demo_api_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var scrolling_long_content_1 = __webpack_require__(/*! ./demos/scrolling-long-content/scrolling-long-content */ "vGhm");
var modal_ref_events_1 = __webpack_require__(/*! ./demos/modal-ref-events/modal-ref-events */ "E730");
var service_interceptor_1 = __webpack_require__(/*! ./demos/service-interceptor/service-interceptor */ "FQNJ");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: demo_top_section_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "ye4F")
        }
    },
    {
        name: 'Service examples',
        anchor: 'service-section',
        outlet: demo_examples_section_1.ExamplesComponent,
        description: "\n      <p>Open a modal from service.</p>\n      <p>To be able to open modals from service, inject <code>BsModalService</code> to your constructor.<br>Then, call\n      <code>.show()</code> method of modal service. Pass a <code>TemplateRef</code> or a component as a first argument and\n      config as a second (optionally). <br> <code>.show()</code> method returns an instance of <code>BsModalRef</code>\n      class with <code>.hide()</code> method and <code>content</code> property where you'll find a component\n      which you've passed to service.</p>",
        content: [
            {
                title: 'Template',
                anchor: 'service-template',
                component: __webpack_require__(/*! !raw-loader!./demos/service-template/service-template.ts */ "jv1v"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-template/service-template.html */ "rUXD"),
                outlet: service_template_1.DemoModalServiceStaticComponent
            },
            {
                title: 'Component',
                anchor: 'service-component',
                component: __webpack_require__(/*! !raw-loader!./demos/service-component/service-component.ts */ "4Vm7"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-component/service-component.html */ "+SpF"),
                description: "<p>Creating a modal with component just as easy as it is with template. Just pass your component\n          in <code>.show()</code> method as in example, and don't forget to include your component to\n          <code>entryComponents</code> of your <code>NgModule</code><br> If you passed a component\n          to <code>.show()</code> you can get access to opened modal by injecting <code>BsModalRef</code>. Also you can pass data\n          in your modal by adding <code>initialState</code> field in config. See example for more info</p>",
                outlet: service_component_1.DemoModalServiceFromComponent
            },
            {
                title: 'Nested',
                anchor: 'service-nested',
                component: __webpack_require__(/*! !raw-loader!./demos/service-nested/service-nested.ts */ "lCuT"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-nested/service-nested.html */ "/IGX"),
                description: "<p>Nested modals are supported</p>",
                outlet: service_nested_1.DemoModalServiceNestedComponent
            },
            {
                title: 'Scrolling long content',
                anchor: 'scrolling-long-content',
                component: __webpack_require__(/*! !raw-loader!./demos/scrolling-long-content/scrolling-long-content.ts */ "m9BN"),
                html: __webpack_require__(/*! !raw-loader!./demos/scrolling-long-content/scrolling-long-content.html */ "AKwG"),
                outlet: scrolling_long_content_1.DemoModalScrollingLongContentComponent
            },
            {
                title: 'Events',
                anchor: 'service-events',
                component: __webpack_require__(/*! !raw-loader!./demos/service-events/service-events.ts */ "lJAy"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-events/service-events.html */ "s63r"),
                description: "\n          <p>Modal service events. Modal service exposes 4 events: <code>onShow</code>, <code>onShown</code>,\n          <code>onHide</code>, <code>onHidden</code>.\n          See usage example below.</p>\n          <p><code>onHide</code> and <code>onHidden</code> events emit dismiss reason. Possible values are\n          <code>backdrop-click</code>, <code>esc</code> or <code>{id: number}</code> if modal was closed by direct call of\n          <code>hide()</code> method</p>",
                outlet: service_events_1.DemoModalServiceEventsComponent
            },
            {
                title: 'ModalRef Events',
                anchor: 'modal-ref-events',
                component: __webpack_require__(/*! !raw-loader!./demos/modal-ref-events/modal-ref-events.ts */ "K/sz"),
                html: __webpack_require__(/*! !raw-loader!./demos/modal-ref-events/modal-ref-events.html */ "lGeL"),
                description: "\n          <p>Modal ref events. ModalRef exposes 2 events: <code>onHide</code> and <code>onHidden</code>. Note,\n          <code>onShow</code> and <code>onShown</code> are not options because they have already fired by the time\n          the ModalRef is created.\n          See usage example below.</p>\n          <p><code>onHide</code> and <code>onHidden</code> events emit dismiss reason. Possible values are\n          <code>backdrop-click</code>, <code>esc</code> or <code>{id: number}</code> if modal was closed by direct call of\n          <code>hide()</code> method</p>",
                outlet: modal_ref_events_1.DemoModalRefEventsComponent
            },
            {
                title: 'Confirm Window',
                anchor: 'confirm-window',
                component: __webpack_require__(/*! !raw-loader!./demos/service-confirm-window/service-confirm-window.ts */ "pi/o"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-confirm-window/service-confirm-window.html */ "qD/P"),
                description: "<p>Modal with opportunity to <code>confirm</code> or <code>decline</code>.</p>",
                outlet: service_confirm_window_1.DemoModalServiceConfirmWindowComponent
            },
            {
                title: 'Сustom css class',
                anchor: 'service-custom-css-class',
                component: __webpack_require__(/*! !raw-loader!./demos/service-options/custom-css-class/custom-css-class.ts */ "y5Y2"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-options/custom-css-class/custom-css-class.html */ "dvKC"),
                description: "<p>There is possibility to add custom css class to a modal.\n          See the demo below to learn how to use it</p>",
                outlet: custom_css_class_1.DemoModalServiceCustomCSSClassComponent
            },
            {
                title: 'Animation option',
                anchor: 'service-disable-animation',
                component: __webpack_require__(/*! !raw-loader!./demos/service-options/disable-animation/disable-animation.ts */ "MDEo"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-options/disable-animation/disable-animation.html */ "Yu+G"),
                description: "<p>There is animation option that you can configure.</p>",
                outlet: disable_animation_1.DemoModalServiceDisableAnimationComponent
            },
            {
                title: 'Esc closing option',
                anchor: 'service-disable-esc-closing',
                component: __webpack_require__(/*! !raw-loader!./demos/service-options/disable-esc-closing/disable-esc-closing.ts */ "W/fT"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-options/disable-esc-closing/disable-esc-closing.html */ "qrnN"),
                description: "<p>There is closing by Esc button option that you can configure.</p>",
                outlet: disable_esc_closing_1.DemoModalServiceDisableEscClosingComponent
            },
            {
                title: 'Modal window with tooltip and popover',
                anchor: 'modal-with-popups',
                component: __webpack_require__(/*! !raw-loader!./demos/modal-with-popups/modal-with-popups.ts */ "XOp1"),
                html: __webpack_require__(/*! !raw-loader!./demos/modal-with-popups/modal-with-popups.html */ "ETDU"),
                description: "<p><code>Tooltips</code> and <code>popovers</code> can be placed within modals as needed. When modals are closed, any <code>tooltips</code> and <code>popovers</code> within are also automatically dismissed.</p>",
                outlet: modal_with_popups_1.DemoModalWithPopupsComponent
            },
            {
                title: 'Backdrop options',
                anchor: 'service-disable-backdrop',
                component: __webpack_require__(/*! !raw-loader!./demos/service-options/disable-backdrop/disable-backdrop.ts */ "VfC+"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-options/disable-backdrop/disable-backdrop.html */ "+ggP"),
                description: "<p>There is backdrop options that you can configure.</p>",
                outlet: disable_backdrop_1.DemoModalServiceDisableBackdropComponent
            },
            {
                title: 'Change class',
                anchor: 'change-class',
                component: __webpack_require__(/*! !raw-loader!./demos/service-options/change-class/change-class.ts */ "JG69"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-options/change-class/change-class.html */ "MLnj"),
                description: "<p>Calling setClass method to change modal's window class</p>",
                outlet: change_class_1.DemoModalServiceChangeClassComponent
            },
            {
                title: 'Close interceptor',
                anchor: 'service-with-interceptor',
                component: __webpack_require__(/*! !raw-loader!./demos/service-interceptor/service-interceptor.ts */ "/A7J"),
                html: __webpack_require__(/*! !raw-loader!./demos/service-interceptor/service-interceptor.html */ "H4Bf"),
                description: "<p>When opening a modal with a component, you can provide an interceptor which will be triggered\n          whenever the modal try to close, allowing you to block the disappearance of a modal.</p>",
                outlet: service_interceptor_1.DemoModalServiceWithInterceptorComponent
            }
        ]
    },
    {
        name: 'Directive examples',
        anchor: 'directive-section',
        outlet: demo_examples_section_1.ExamplesComponent,
        description: "<p>Also you can use directive instead of service. See the demos below </p>",
        content: [
            {
                title: 'Static modal',
                anchor: 'directive-static',
                component: __webpack_require__(/*! !raw-loader!./demos/static/static.ts */ "JyEd"),
                html: __webpack_require__(/*! !raw-loader!./demos/static/static.html */ "EJIF"),
                outlet: static_1.DemoModalStaticComponent
            },
            {
                title: 'Optional sizes',
                anchor: 'directive-sizes',
                component: __webpack_require__(/*! !raw-loader!./demos/sizes/sizes.ts */ "sF3K"),
                html: __webpack_require__(/*! !raw-loader!./demos/sizes/sizes.html */ "HPc5"),
                outlet: sizes_1.DemoModalSizesComponent
            },
            {
                title: 'Child modal',
                anchor: 'directive-child',
                component: __webpack_require__(/*! !raw-loader!./demos/child/child.ts */ "Jj6/"),
                html: __webpack_require__(/*! !raw-loader!./demos/child/child.html */ "Rpvm"),
                description: "<p>Control modal from parent component</p>",
                outlet: child_1.DemoModalChildComponent
            },
            {
                title: 'Nested modals',
                anchor: 'directive-nested',
                component: __webpack_require__(/*! !raw-loader!./demos/nested/nested.ts */ "KSR8"),
                html: __webpack_require__(/*! !raw-loader!./demos/nested/nested.html */ "ZNku"),
                description: "<p>Open a modal from another modal</p>",
                outlet: nested_1.DemoModalNestedComponent
            },
            {
                title: 'Modal events',
                anchor: 'directive-events',
                component: __webpack_require__(/*! !raw-loader!./demos/events/events.ts */ "Z4A1"),
                html: __webpack_require__(/*! !raw-loader!./demos/events/events.html */ "UPGS"),
                description: "<p><code>ModalDirective</code> exposes 4 events: <code>onShow</code>, <code>onShown</code>,\n          <code>onHide</code>, <code>onHidden</code>. See usage example below.<br>\n          <code>$event</code> is an instance of <code>ModalDirective</code>. There you may\n          find some useful properties like <code>isShown</code>, <code>dismissReason</code>, etc.\n          <br>For example, you may want to know which one of user's actions caused closing of a modal.\n          Just get the value of <code>dismissReason</code>,<br> possible values are <code>backdrop-click</code>,\n          <code>esc</code> or <code>null</code> if modal was closed by direct call of <code>hide()</code> method</p>",
                outlet: events_1.DemoModalEventsComponent
            },
            {
                title: 'Auto shown modal',
                anchor: 'directive-auto-shown',
                component: __webpack_require__(/*! !raw-loader!./demos/auto-shown/auto-shown.ts */ "1o0N"),
                html: __webpack_require__(/*! !raw-loader!./demos/auto-shown/auto-shown.html */ "4vb+"),
                description: "\n          <p>Show modal right after it has been initialized. This allows you to keep DOM clean by only\n          appending visible modals to the DOM using <code>*ngIf</code> directive.</p>\n          <p>It can also be useful if you want your modal component to perform some initialization operations, but\n          want to defer that until user actually sees modal content. I.e. for a \"Select e-mail recipient\" modal\n          you might want to defer recipient list loading until the modal is shown.</p>",
                outlet: auto_shown_1.DemoAutoShownModalComponent
            },
            {
                title: 'Accessibility',
                anchor: 'accessibility',
                component: __webpack_require__(/*! !raw-loader!./demos/accessibility/accessibility.ts */ "GajS"),
                html: __webpack_require__(/*! !raw-loader!./demos/accessibility/accessibility.html */ "zxN6"),
                description: "\n        <p>\n          Be sure to add <code class=\"highlighter-rouge\">id=\"\"</code> attribute to your title and description\n          in the template to make your modal works according to accessibility. The <code class=\"highlighter-rouge\">aria-labelledby</code>\n          attribute establishes relationships between the modal and its title (only if the title has id attribute). The element\n          containing the modal's description is referenced by <code class=\"highlighter-rouge\">aria-describedby</code> attribute.\n          The dialog does not need <code class=\"highlighter-rouge\">aria-describedby</code> since there is no static\n          text that describes it.\n        </p>\n        <p>\n        Use modal options to set <code class=\"highlighter-rouge\">aria-labelledby</code> and\n        <code class=\"highlighter-rouge\">aria-describedby</code> attributes.\n        </p>\n        ",
                outlet: accessibility_1.DemoAccessibilityComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: demo_api_section_1.ApiSectionsComponent,
        content: [
            {
                title: 'ModalDirective',
                anchor: 'modal-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'ModalBackdropComponent',
                anchor: 'modal-backdrop-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'BsModalService',
                anchor: 'bs-modal-service',
                outlet: api_docs_1.NgApiDocClassComponent
            },
            {
                title: 'BsModalRef',
                anchor: 'bs-modal-ref',
                outlet: api_docs_1.NgApiDocClassComponent
            },
            {
                title: 'ModalOptions',
                anchor: 'modal-options',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "6hMC":
/*!*******************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-options/change-class/change-class.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceChangeClassComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceChangeClassComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h4", 3);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function DemoModalServiceChangeClassComponent_ng_template_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtext(7, " This is a modal. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 7);
    i0.ɵɵlistener("click", function DemoModalServiceChangeClassComponent_ng_template_2_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.setModalClass(); });
    i0.ɵɵtext(9, "Change width");
    i0.ɵɵelementEnd();
} }
var DemoModalServiceChangeClassComponent = /** @class */ (function () {
    function DemoModalServiceChangeClassComponent(modalService) {
        this.modalService = modalService;
        this.valueWidth = false;
    }
    DemoModalServiceChangeClassComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-sm' }));
    };
    DemoModalServiceChangeClassComponent.prototype.setModalClass = function () {
        this.valueWidth = !this.valueWidth;
        var modalWidth = this.valueWidth ? 'modal-lg' : 'modal-sm';
        this.modalRef.setClass(modalWidth);
    };
    DemoModalServiceChangeClassComponent.ɵfac = function DemoModalServiceChangeClassComponent_Factory(t) { return new (t || DemoModalServiceChangeClassComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceChangeClassComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceChangeClassComponent, selectors: [["demo-modal-change-class"]], decls: 4, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", 3, "click"]], template: function DemoModalServiceChangeClassComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceChangeClassComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); var _r0 = i0.ɵɵreference(3); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Create template modal");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoModalServiceChangeClassComponent_ng_template_2_Template, 10, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return DemoModalServiceChangeClassComponent;
}());
exports.DemoModalServiceChangeClassComponent = DemoModalServiceChangeClassComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceChangeClassComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-change-class',
                templateUrl: './change-class.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "7BYA":
/*!*************************************************************!*\
  !*** ./demo/src/app/components/+modal/demo-modal.routes.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var modal_section_component_1 = __webpack_require__(/*! ./modal-section.component */ "/W40");
exports.routes = [{ path: '', component: modal_section_component_1.ModalSectionComponent }];


/***/ }),

/***/ "AKwG":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/scrolling-long-content/scrolling-long-content.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<br>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p *ngFor=\"let item of items\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus enim esse excepturi, impedit,\r\n      iste magnam officia optio, quam quis quisquam saepe sint unde velit vitae! Animi in iusto ut?</p>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "CWSE":
/*!*************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-component/service-component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContentComponent = exports.DemoModalServiceFromComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function ModalContentComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2);
} }
function ModalContentComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, ModalContentComponent_ul_7_li_1_Template, 2, 1, "li", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.list);
} }
var DemoModalServiceFromComponent = /** @class */ (function () {
    function DemoModalServiceFromComponent(modalService) {
        this.modalService = modalService;
    }
    DemoModalServiceFromComponent.prototype.openModalWithComponent = function () {
        var initialState = {
            list: [
                'Open a modal with component',
                'Pass your data',
                'Do something else',
                '...'
            ],
            title: 'Modal with component'
        };
        this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    DemoModalServiceFromComponent.ɵfac = function DemoModalServiceFromComponent_Factory(t) { return new (t || DemoModalServiceFromComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceFromComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceFromComponent, selectors: [["demo-modal-service-component"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function DemoModalServiceFromComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceFromComponent_Template_button_click_0_listener() { return ctx.openModalWithComponent(); });
            i0.ɵɵtext(1, "Create modal with component");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return DemoModalServiceFromComponent;
}());
exports.DemoModalServiceFromComponent = DemoModalServiceFromComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceFromComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-component',
                templateUrl: './service-component.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();
/* This is a component which we pass in modal*/
var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [];
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        this.list.push('PROFIT!!!');
    };
    ModalContentComponent.ɵfac = function ModalContentComponent_Factory(t) { return new (t || ModalContentComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); };
    ModalContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalContentComponent, selectors: [["modal-content"]], decls: 11, vars: 3, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [4, "ngFor", "ngForOf"]], template: function ModalContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function ModalContentComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, ModalContentComponent_ul_7_Template, 2, 1, "ul", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵlistener("click", function ModalContentComponent_Template_button_click_9_listener() { return ctx.bsModalRef.hide(); });
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.list.length);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.closeBtnName);
        } }, directives: [i2.NgIf, i2.NgForOf], encapsulation: 2 });
    return ModalContentComponent;
}());
exports.ModalContentComponent = ModalContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'modal-content',
                template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{title}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ul *ngIf=\"list.length\">\n        <li *ngFor=\"let item of list\">{{item}}</li>\n      </ul>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n    </div>\n  "
            }]
    }], function () { return [{ type: i1.BsModalRef }]; }, null); })();


/***/ }),

/***/ "E730":
/*!***********************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/modal-ref-events/modal-ref-events.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalRefEventsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoModalRefEventsComponent_pre_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r3);
} }
function DemoModalRefEventsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "h4", 5);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function DemoModalRefEventsComponent_ng_template_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 7);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵtext(7, " This is a modal ");
    i0.ɵɵelementEnd();
} }
var DemoModalRefEventsComponent = /** @class */ (function () {
    function DemoModalRefEventsComponent(modalService, changeDetection) {
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.subscriptions = [];
        this.messages = [];
    }
    DemoModalRefEventsComponent.prototype.openModal = function (template) {
        var _this = this;
        this.messages = [];
        this.modalRef = this.modalService.show(template);
        var _combine = rxjs_1.combineLatest(this.modalRef.onHide, this.modalRef.onHidden).subscribe(function () { return _this.changeDetection.markForCheck(); });
        this.subscriptions.push(this.modalRef.onHide.subscribe(function (reason) {
            if (typeof reason !== 'string') {
                reason = "onHide(), modalId is : " + reason.id;
            }
            var _reason = reason ? ", dismissed by " + reason : '';
            _this.messages.push("onHide event has been fired" + _reason);
        }));
        this.subscriptions.push(this.modalRef.onHidden.subscribe(function (reason) {
            if (typeof reason !== 'string') {
                reason = "onHide(), modalId is : " + reason.id;
            }
            var _reason = reason ? ", dismissed by " + reason : '';
            _this.messages.push("onHidden event has been fired" + _reason);
            _this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
    };
    DemoModalRefEventsComponent.prototype.unsubscribe = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    };
    DemoModalRefEventsComponent.ɵfac = function DemoModalRefEventsComponent_Factory(t) { return new (t || DemoModalRefEventsComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    DemoModalRefEventsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalRefEventsComponent, selectors: [["demo-modal-ref-events"]], decls: 7, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "card card-block card-header", 4, "ngFor", "ngForOf"], ["template", ""], [1, "card", "card-block", "card-header"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalRefEventsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r6 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalRefEventsComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); var _r1 = i0.ɵɵreference(6); return ctx.openModal(_r1); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵtemplate(4, DemoModalRefEventsComponent_pre_4_Template, 2, 1, "pre", 1);
            i0.ɵɵtemplate(5, DemoModalRefEventsComponent_ng_template_5_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.messages);
        } }, directives: [i2.NgForOf], styles: [".card[_ngcontent-%COMP%] {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }"] });
    return DemoModalRefEventsComponent;
}());
exports.DemoModalRefEventsComponent = DemoModalRefEventsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalRefEventsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-ref-events',
                templateUrl: './modal-ref-events.html',
                styles: ["\n    .card {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }\n  "]
            }]
    }], function () { return [{ type: i1.BsModalService }, { type: i0.ChangeDetectorRef }]; }, null); })();


/***/ }),

/***/ "EJIF":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/static/static.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">Static modal</button>\r\n\r\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-static-name\" class=\"modal-title pull-left\">Static modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        This is static modal, backdrop click will not close it.\r\n        Click <b>&times;</b> to close modal.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ETDU":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/modal-with-popups/modal-with-popups.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus enim esse excepturi, impedit,\r\n      iste magnam officia optio, quam quis quisquam saepe sint unde velit vitae! Animi in iusto ut?</p>\r\n      <button type=\"button\" class=\"btn btn-primary\" popover=\"Vivamus sagittis\">popover</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" tooltip=\"Vivamus sagittis\">tooltip</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "FQNJ":
/*!*****************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-interceptor/service-interceptor.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContentWithInterceptorComponent = exports.DemoModalServiceWithInterceptorComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceWithInterceptorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "Do you really want to close?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 3);
    i0.ɵɵlistener("click", function DemoModalServiceWithInterceptorComponent_ng_template_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.confirm(); });
    i0.ɵɵtext(4, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 0);
    i0.ɵɵlistener("click", function DemoModalServiceWithInterceptorComponent_ng_template_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.decline(); });
    i0.ɵɵtext(6, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoModalServiceWithInterceptorComponent = /** @class */ (function () {
    function DemoModalServiceWithInterceptorComponent(modalService) {
        this.modalService = modalService;
    }
    DemoModalServiceWithInterceptorComponent.prototype.openModalWithInterceptor = function (confirmTemplate) {
        var _this = this;
        var closeInterceptor = function () {
            _this.confirmPromise = new Promise(function (resolve, reject) {
                _this.confirmResolve = resolve;
                _this.confirmReject = reject;
            });
            _this.confirmModalRef = _this.modalService.show(confirmTemplate, { class: 'modal-sm' });
            return _this.confirmPromise;
        };
        this.bsModalRef = this.modalService.show(ModalContentWithInterceptorComponent, { closeInterceptor: closeInterceptor });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    DemoModalServiceWithInterceptorComponent.prototype.confirm = function () {
        this.confirmResolve();
        this.confirmModalRef.hide();
    };
    DemoModalServiceWithInterceptorComponent.prototype.decline = function () {
        this.confirmReject();
        this.confirmModalRef.hide();
    };
    DemoModalServiceWithInterceptorComponent.ɵfac = function DemoModalServiceWithInterceptorComponent_Factory(t) { return new (t || DemoModalServiceWithInterceptorComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceWithInterceptorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceWithInterceptorComponent, selectors: [["demo-modal-service-interceptor"]], decls: 4, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-body", "text-center"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function DemoModalServiceWithInterceptorComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceWithInterceptorComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); var _r0 = i0.ɵɵreference(3); return ctx.openModalWithInterceptor(_r0); });
            i0.ɵɵtext(1, "Create modal with close interceptor");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoModalServiceWithInterceptorComponent_ng_template_2_Template, 7, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return DemoModalServiceWithInterceptorComponent;
}());
exports.DemoModalServiceWithInterceptorComponent = DemoModalServiceWithInterceptorComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceWithInterceptorComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-interceptor',
                templateUrl: './service-interceptor.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();
var ModalContentWithInterceptorComponent = /** @class */ (function () {
    function ModalContentWithInterceptorComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ModalContentWithInterceptorComponent.ɵfac = function ModalContentWithInterceptorComponent_Factory(t) { return new (t || ModalContentWithInterceptorComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); };
    ModalContentWithInterceptorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalContentWithInterceptorComponent, selectors: [["modal-content-with-interceptor"]], decls: 11, vars: 0, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function ModalContentWithInterceptorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h4", 1);
            i0.ɵɵtext(2, "Modal with interceptor");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function ModalContentWithInterceptorComponent_Template_button_click_3_listener() { return ctx.bsModalRef.hide(); });
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtext(7, "This modal has closing interceptor");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelementStart(9, "button", 6);
            i0.ɵɵlistener("click", function ModalContentWithInterceptorComponent_Template_button_click_9_listener() { return ctx.bsModalRef.hide(); });
            i0.ɵɵtext(10, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return ModalContentWithInterceptorComponent;
}());
exports.ModalContentWithInterceptorComponent = ModalContentWithInterceptorComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalContentWithInterceptorComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'modal-content-with-interceptor',
                template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Modal with interceptor</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">This modal has closing interceptor</div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n    </div>\n  "
            }]
    }], function () { return [{ type: i1.BsModalRef }]; }, null); })();


/***/ }),

/***/ "FZQI":
/*!*************************************************************!*\
  !*** ./demo/src/app/components/+modal/demo-modal.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var modal_section_component_1 = __webpack_require__(/*! ./modal-section.component */ "/W40");
var demos_1 = __webpack_require__(/*! ./demos */ "1M8v");
var demo_modal_routes_1 = __webpack_require__(/*! ./demo-modal.routes */ "7BYA");
var service_component_1 = __webpack_require__(/*! ./demos/service-component/service-component */ "CWSE");
var service_interceptor_1 = __webpack_require__(/*! ./demos/service-interceptor/service-interceptor */ "FQNJ");
var popover_1 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var tooltip_1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/sizes/sizes */ "VksG");
var i2 = __webpack_require__(/*! ./demos/child/child */ "inzw");
var i3 = __webpack_require__(/*! ./demos/static/static */ "ksuB");
var i4 = __webpack_require__(/*! ./demos/auto-shown/auto-shown */ "KMKl");
var i5 = __webpack_require__(/*! ./demos/nested/nested */ "I60y");
var i6 = __webpack_require__(/*! ./demos/service-template/service-template */ "0fga");
var i7 = __webpack_require__(/*! ./demos/service-component/service-component */ "CWSE");
var i8 = __webpack_require__(/*! ./demos/service-interceptor/service-interceptor */ "FQNJ");
var i9 = __webpack_require__(/*! ./demos/service-nested/service-nested */ "rU7H");
var i10 = __webpack_require__(/*! ./demos/service-options/custom-css-class/custom-css-class */ "1nXn");
var i11 = __webpack_require__(/*! ./demos/service-options/disable-animation/disable-animation */ "53if");
var i12 = __webpack_require__(/*! ./demos/service-options/disable-esc-closing/disable-esc-closing */ "rhTQ");
var i13 = __webpack_require__(/*! ./demos/service-options/disable-backdrop/disable-backdrop */ "aB/A");
var i14 = __webpack_require__(/*! ./demos/events/events */ "5PzT");
var i15 = __webpack_require__(/*! ./demos/service-events/service-events */ "SEaD");
var i16 = __webpack_require__(/*! ./demos/service-confirm-window/service-confirm-window */ "obwx");
var i17 = __webpack_require__(/*! ./demos/scrolling-long-content/scrolling-long-content */ "vGhm");
var i18 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "GHg5");
var i19 = __webpack_require__(/*! ./demos/service-options/change-class/change-class */ "6hMC");
var i20 = __webpack_require__(/*! ./demos/modal-with-popups/modal-with-popups */ "lsyi");
var i21 = __webpack_require__(/*! ./demos/modal-ref-events/modal-ref-events */ "E730");
var i22 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i23 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var i24 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var i25 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoModalModule = /** @class */ (function () {
    function DemoModalModule() {
    }
    DemoModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoModalModule });
    DemoModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoModalModule_Factory(t) { return new (t || DemoModalModule)(); }, imports: [[
                modal_1.ModalModule.forRoot(),
                popover_1.PopoverModule.forRoot(),
                tooltip_1.TooltipModule.forRoot(),
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_modal_routes_1.routes)
            ]] });
    return DemoModalModule;
}());
exports.DemoModalModule = DemoModalModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoModalModule, { declarations: [modal_section_component_1.ModalSectionComponent,
        service_component_1.ModalContentComponent,
        service_interceptor_1.ModalContentWithInterceptorComponent, i1.DemoModalSizesComponent, i2.DemoModalChildComponent, i3.DemoModalStaticComponent, i4.DemoAutoShownModalComponent, i5.DemoModalNestedComponent, i6.DemoModalServiceStaticComponent, i7.DemoModalServiceFromComponent, i8.DemoModalServiceWithInterceptorComponent, i9.DemoModalServiceNestedComponent, i10.DemoModalServiceCustomCSSClassComponent, i11.DemoModalServiceDisableAnimationComponent, i12.DemoModalServiceDisableEscClosingComponent, i13.DemoModalServiceDisableBackdropComponent, i14.DemoModalEventsComponent, i15.DemoModalServiceEventsComponent, i16.DemoModalServiceConfirmWindowComponent, i17.DemoModalScrollingLongContentComponent, i18.DemoAccessibilityComponent, i19.DemoModalServiceChangeClassComponent, i20.DemoModalWithPopupsComponent, i21.DemoModalRefEventsComponent], imports: [i22.ModalModule, i23.PopoverModule, i24.TooltipModule, common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i25.RouterModule], exports: [modal_section_component_1.ModalSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    modal_section_component_1.ModalSectionComponent,
                    service_component_1.ModalContentComponent,
                    service_interceptor_1.ModalContentWithInterceptorComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    modal_1.ModalModule.forRoot(),
                    popover_1.PopoverModule.forRoot(),
                    tooltip_1.TooltipModule.forRoot(),
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_modal_routes_1.routes)
                ],
                exports: [modal_section_component_1.ModalSectionComponent],
                entryComponents: __spreadArrays([service_component_1.ModalContentComponent, service_interceptor_1.ModalContentWithInterceptorComponent], demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "GHg5":
/*!*****************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/accessibility/accessibility.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccessibilityComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoAccessibilityComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h4", 3);
    i0.ɵɵtext(2, "Modal title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function DemoAccessibilityComponent_ng_template_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtext(8, " This is a modal. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoAccessibilityComponent = /** @class */ (function () {
    function DemoAccessibilityComponent(modalService) {
        this.modalService = modalService;
    }
    DemoAccessibilityComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, {
            ariaDescribedby: 'my-modal-description',
            ariaLabelledBy: 'my-modal-title'
        });
    };
    DemoAccessibilityComponent.ɵfac = function DemoAccessibilityComponent_Factory(t) { return new (t || DemoAccessibilityComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoAccessibilityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccessibilityComponent, selectors: [["demo-accessibility"]], decls: 4, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], ["id", "my-modal-title", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "my-modal-description"]], template: function DemoAccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoAccessibilityComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(3); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Create template modal");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoAccessibilityComponent_ng_template_2_Template, 9, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return DemoAccessibilityComponent;
}());
exports.DemoAccessibilityComponent = DemoAccessibilityComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccessibilityComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accessibility',
                templateUrl: './accessibility.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "GajS":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/accessibility/accessibility.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalRef, BsModalService } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-accessibility',\n  templateUrl: './accessibility.html'\n})\nexport class DemoAccessibilityComponent {\n  modalRef: BsModalRef;\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template, {\n      ariaDescribedby: 'my-modal-description',\n      ariaLabelledBy: 'my-modal-title'\n    });\n  }\n}\n");

/***/ }),

/***/ "H4Bf":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-interceptor/service-interceptor.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalWithInterceptor(template)\">Create modal with close interceptor</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Do you really want to close?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "HPc5":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/sizes/sizes.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Large modal-->\r\n<p>Small modal window have small width on screens only above 768px(boostrap3) and 576px(bootstrap4)</p>\r\n<button class=\"btn btn-primary\" (click)=\"lgModal.show()\">Large modal</button>\r\n\r\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">Large modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        ...\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--Small modal-->\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"smModal.show()\">Small modal</button>\r\n\r\n<div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">Small modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        ...\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "I60y":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/nested/nested.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalNestedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var DemoModalNestedComponent = /** @class */ (function () {
    function DemoModalNestedComponent() {
    }
    DemoModalNestedComponent.ɵfac = function DemoModalNestedComponent_Factory(t) { return new (t || DemoModalNestedComponent)(); };
    DemoModalNestedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalNestedComponent, selectors: [["demo-modal-nested"]], decls: 47, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade"], ["parentModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-nested-name1", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name2", 1, "modal", "fade"], ["childModal", "bs-modal"], [1, "modal-dialog"], ["id", "dialog-nested-name2", 1, "modal-title", "pull-left"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name3", 1, "modal", "fade"], ["thirdModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], ["id", "dialog-nested-name3", 1, "modal-title", "pull-left"]], template: function DemoModalNestedComponent_Template(rf, ctx) { if (rf & 1) {
            var _r3 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalNestedComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); var _r0 = i0.ɵɵreference(3); return _r0.show(); });
            i0.ɵɵtext(1, "Open parent modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1, 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelementStart(7, "h4", 6);
            i0.ɵɵtext(8, "First modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵlistener("click", function DemoModalNestedComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); var _r0 = i0.ɵɵreference(3); return _r0.hide(); });
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵelementStart(13, "button", 0);
            i0.ɵɵlistener("click", function DemoModalNestedComponent_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r3); var _r1 = i0.ɵɵreference(16); return _r1.show(); });
            i0.ɵɵtext(14, "Open second modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 10, 11);
            i0.ɵɵelementStart(17, "div", 12);
            i0.ɵɵelementStart(18, "div", 4);
            i0.ɵɵelementStart(19, "div", 5);
            i0.ɵɵelementStart(20, "h4", 13);
            i0.ɵɵtext(21, "Second modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 7);
            i0.ɵɵlistener("click", function DemoModalNestedComponent_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r3); var _r1 = i0.ɵɵreference(16); return _r1.hide(); });
            i0.ɵɵelementStart(23, "span", 8);
            i0.ɵɵtext(24, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 9);
            i0.ɵɵtext(26, " This is second modal ");
            i0.ɵɵelement(27, "br");
            i0.ɵɵelementStart(28, "button", 0);
            i0.ɵɵlistener("click", function DemoModalNestedComponent_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r3); var _r2 = i0.ɵɵreference(31); return _r2.show(); });
            i0.ɵɵtext(29, "Open third modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 14, 15);
            i0.ɵɵelementStart(32, "div", 16);
            i0.ɵɵelementStart(33, "div", 4);
            i0.ɵɵelementStart(34, "div", 5);
            i0.ɵɵelementStart(35, "h4", 17);
            i0.ɵɵtext(36, "Third modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "button", 7);
            i0.ɵɵlistener("click", function DemoModalNestedComponent_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r3); var _r2 = i0.ɵɵreference(31); return _r2.hide(); });
            i0.ɵɵelementStart(38, "span", 8);
            i0.ɵɵtext(39, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div", 9);
            i0.ɵɵtext(41, " This is third modal ");
            i0.ɵɵelement(42, "br");
            i0.ɵɵtext(43, " Click ");
            i0.ɵɵelementStart(44, "b");
            i0.ɵɵtext(45, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(46, " to close modal. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.ModalDirective], encapsulation: 2 });
    return DemoModalNestedComponent;
}());
exports.DemoModalNestedComponent = DemoModalNestedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalNestedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-nested',
                templateUrl: './nested.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "JG69":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/change-class/change-class.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-change-class',\n  templateUrl: './change-class.html'\n})\nexport class DemoModalServiceChangeClassComponent {\n  modalRef: BsModalRef;\n  valueWidth = false;\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(\n      template,\n      Object.assign({}, { class: 'modal-sm' })\n    );\n  }\n\n  setModalClass() {\n    this.valueWidth = !this.valueWidth;\n    const modalWidth = this.valueWidth ? 'modal-lg' : 'modal-sm';\n    this.modalRef.setClass(modalWidth);\n  }\n}\n");

/***/ }),

/***/ "Jj6/":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/child/child.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from '@angular/core';\nimport { ModalDirective } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-child',\n  templateUrl: './child.html'\n})\nexport class DemoModalChildComponent {\n  @ViewChild('childModal', { static: false }) childModal: ModalDirective;\n\n  showChildModal(): void {\n    this.childModal.show();\n  }\n\n  hideChildModal(): void {\n    this.childModal.hide();\n  }\n}\n");

/***/ }),

/***/ "JyEd":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/static/static.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-modal-static',\r\n  templateUrl: './static.html'\r\n})\r\nexport class DemoModalStaticComponent {}\r\n");

/***/ }),

/***/ "K/sz":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/modal-ref-events/modal-ref-events.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';\nimport { BsModalRef, BsModalService } from 'bao-tran-angular/modal';\nimport { combineLatest, Subscription } from 'rxjs';\n\n@Component({\n  selector: 'demo-modal-ref-events',\n  templateUrl: './modal-ref-events.html',\n  styles: [`\n    .card {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }\n  `]\n})\nexport class DemoModalRefEventsComponent {\n  modalRef: BsModalRef;\n  subscriptions: Subscription[] = [];\n  messages: string[] = [];\n\n  constructor(private modalService: BsModalService, private changeDetection: ChangeDetectorRef) {\n  }\n\n  openModal(template: TemplateRef<any>) {\n    this.messages = [];\n\n    this.modalRef = this.modalService.show(template);\n\n    const _combine = combineLatest(\n      this.modalRef.onHide,\n      this.modalRef.onHidden\n    ).subscribe(() => this.changeDetection.markForCheck());\n\n    this.subscriptions.push(\n      this.modalRef.onHide.subscribe((reason: string | any) => {\n        if (typeof reason !== 'string') {\n          reason = `onHide(), modalId is : ${reason.id}`;\n        }\n        const _reason = reason ? `, dismissed by ${reason}` : '';\n        this.messages.push(`onHide event has been fired${_reason}`);\n      })\n    );\n    this.subscriptions.push(\n      this.modalRef.onHidden.subscribe((reason: string | any) => {\n        if (typeof reason !== 'string') {\n          reason = `onHide(), modalId is : ${reason.id}`;\n        }\n        const _reason = reason ? `, dismissed by ${reason}` : '';\n        this.messages.push(`onHidden event has been fired${_reason}`);\n        this.unsubscribe();\n      })\n    );\n\n    this.subscriptions.push(_combine);\n  }\n\n  unsubscribe() {\n    this.subscriptions.forEach((subscription: Subscription) => {\n      subscription.unsubscribe();\n    });\n    this.subscriptions = [];\n  }\n}\n");

/***/ }),

/***/ "KMKl":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/auto-shown/auto-shown.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAutoShownModalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var _c0 = ["autoShownModal"];
var _c1 = function () { return { show: true }; };
function DemoAutoShownModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2, 3);
    i0.ɵɵlistener("onHidden", function DemoAutoShownModalComponent_div_2_Template_div_onHidden_0_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onHidden(); });
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "h4", 7);
    i0.ɵɵtext(6, "Auto shown modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 8);
    i0.ɵɵlistener("click", function DemoAutoShownModalComponent_div_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.hideModal(); });
    i0.ɵɵelementStart(8, "span", 9);
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 10);
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "I am a modal that is shown right after initialization!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14, "I wasn't present in DOM until you clicked the button");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16, "When you close me, I'll be removed from the DOM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("config", i0.ɵɵpureFunction0(1, _c1));
} }
var DemoAutoShownModalComponent = /** @class */ (function () {
    function DemoAutoShownModalComponent() {
        this.isModalShown = false;
    }
    DemoAutoShownModalComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    DemoAutoShownModalComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    DemoAutoShownModalComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    DemoAutoShownModalComponent.ɵfac = function DemoAutoShownModalComponent_Factory(t) { return new (t || DemoAutoShownModalComponent)(); };
    DemoAutoShownModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAutoShownModalComponent, selectors: [["demo-modal-auto-shown"]], viewQuery: function DemoAutoShownModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autoShownModal = _t.first);
        } }, decls: 3, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "class", "modal fade", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-auto-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoAutoShownModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoAutoShownModalComponent_Template_button_click_0_listener() { return ctx.showModal(); });
            i0.ɵɵtext(1, "Render auto-shown modal");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoAutoShownModalComponent_div_2_Template, 17, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isModalShown);
        } }, directives: [i1.NgIf, i2.ModalDirective], encapsulation: 2 });
    return DemoAutoShownModalComponent;
}());
exports.DemoAutoShownModalComponent = DemoAutoShownModalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAutoShownModalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-auto-shown',
                templateUrl: './auto-shown.html'
            }]
    }], null, { autoShownModal: [{
            type: core_1.ViewChild,
            args: ['autoShownModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "KSR8":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/nested/nested.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-modal-nested',\r\n  templateUrl: './nested.html'\r\n})\r\nexport class DemoModalNestedComponent {}\r\n");

/***/ }),

/***/ "MDEo":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/disable-animation/disable-animation.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-disable-animation',\n  templateUrl: './disable-animation.html'\n})\nexport class DemoModalServiceDisableAnimationComponent {\n  modalRef: BsModalRef;\n  config = {\n    animated: true\n  };\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template, this.config);\n  }\n}\n");

/***/ }),

/***/ "MLnj":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/change-class/change-class.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    This is a modal.\r\n  </div>\r\n  <button type=\"button\" class=\"btn\" (click)=\"setModalClass()\">Change width</button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "Rpvm":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/child/child.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"showChildModal()\">Open child modal</button>\r\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\r\n     role=\"dialog\" aria-labelledby=\"dialog-child-name\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-child-name\" class=\"modal-title pull-left\">Child modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        I am a child modal, opened from parent component!\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "SEaD":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-events/service-events.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceEventsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoModalServiceEventsComponent_pre_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r3);
} }
function DemoModalServiceEventsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "h4", 5);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function DemoModalServiceEventsComponent_ng_template_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 7);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8);
    i0.ɵɵtext(7, " This is a modal ");
    i0.ɵɵelementEnd();
} }
var DemoModalServiceEventsComponent = /** @class */ (function () {
    function DemoModalServiceEventsComponent(modalService, changeDetection) {
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.subscriptions = [];
        this.messages = [];
    }
    DemoModalServiceEventsComponent.prototype.openModal = function (template) {
        var _this = this;
        this.messages = [];
        var _combine = rxjs_1.combineLatest(this.modalService.onShow, this.modalService.onShown, this.modalService.onHide, this.modalService.onHidden).subscribe(function () { return _this.changeDetection.markForCheck(); });
        this.subscriptions.push(this.modalService.onShow.subscribe(function () {
            _this.messages.push("onShow event has been fired");
        }));
        this.subscriptions.push(this.modalService.onShown.subscribe(function () {
            _this.messages.push("onShown event has been fired");
        }));
        this.subscriptions.push(this.modalService.onHide.subscribe(function (reason) {
            if (typeof reason !== 'string') {
                reason = "onHide(), modalId is : " + reason.id;
            }
            var _reason = reason ? ", dismissed by " + reason : '';
            _this.messages.push("onHide event has been fired" + _reason);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe(function (reason) {
            if (typeof reason !== 'string') {
                reason = "onHide(), modalId is : " + reason.id;
            }
            var _reason = reason ? ", dismissed by " + reason : '';
            _this.messages.push("onHidden event has been fired" + _reason);
            _this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(template);
    };
    DemoModalServiceEventsComponent.prototype.unsubscribe = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    };
    DemoModalServiceEventsComponent.ɵfac = function DemoModalServiceEventsComponent_Factory(t) { return new (t || DemoModalServiceEventsComponent)(i0.ɵɵdirectiveInject(i1.BsModalService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    DemoModalServiceEventsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceEventsComponent, selectors: [["demo-modal-service-events"]], decls: 7, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "card card-block card-header", 4, "ngFor", "ngForOf"], ["template", ""], [1, "card", "card-block", "card-header"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalServiceEventsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r6 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceEventsComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); var _r1 = i0.ɵɵreference(6); return ctx.openModal(_r1); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵtemplate(4, DemoModalServiceEventsComponent_pre_4_Template, 2, 1, "pre", 1);
            i0.ɵɵtemplate(5, DemoModalServiceEventsComponent_ng_template_5_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.messages);
        } }, directives: [i2.NgForOf], styles: [".card[_ngcontent-%COMP%] {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }"] });
    return DemoModalServiceEventsComponent;
}());
exports.DemoModalServiceEventsComponent = DemoModalServiceEventsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceEventsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-events',
                templateUrl: './service-events.html',
                styles: ["\n    .card {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }\n  "]
            }]
    }], function () { return [{ type: i1.BsModalService }, { type: i0.ChangeDetectorRef }]; }, null); })();


/***/ }),

/***/ "UPGS":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/events/events.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"showModal()\">Open a modal</button>\r\n<br><br>\r\n<pre class=\"card card-block card-header\" *ngFor=\"let message of messages\">{{message}}</pre>\r\n\r\n<div class=\"modal fade\" bsModal #modal=\"bs-modal\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-events-name\"\r\n     (onShow)=\"handler('onShow', $event)\"\r\n     (onShown)=\"handler('onShown', $event)\"\r\n     (onHide)=\"handler('onHide', $event)\"\r\n     (onHidden)=\"handler('onHidden', $event)\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-events-name\" class=\"modal-title pull-left\">Modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Just another modal <br>\r\n        Click <b>&times;</b>, press <code>Esc</code> or click on backdrop to close modal.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "VfC+":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/disable-backdrop/disable-backdrop.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-disable-backdrop',\n  templateUrl: './disable-backdrop.html'\n})\nexport class DemoModalServiceDisableBackdropComponent {\n  modalRef: BsModalRef;\n  config = {\n    backdrop: true,\n    ignoreBackdropClick: false\n  };\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template, this.config);\n  }\n}\n");

/***/ }),

/***/ "VksG":
/*!*************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/sizes/sizes.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalSizesComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var DemoModalSizesComponent = /** @class */ (function () {
    function DemoModalSizesComponent() {
    }
    DemoModalSizesComponent.ɵfac = function DemoModalSizesComponent_Factory(t) { return new (t || DemoModalSizesComponent)(); };
    DemoModalSizesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalSizesComponent, selectors: [["demo-modal-sizes"]], decls: 30, vars: 0, consts: [[1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-sizes-name1", 1, "modal", "fade"], ["lgModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-sizes-name1", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-sizes-name2", 1, "modal", "fade"], ["smModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], ["id", "dialog-sizes-name2", 1, "modal-title", "pull-left"]], template: function DemoModalSizesComponent_Template(rf, ctx) { if (rf & 1) {
            var _r2 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "Small modal window have small width on screens only above 768px(boostrap3) and 576px(bootstrap4)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function DemoModalSizesComponent_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(5); return _r0.show(); });
            i0.ɵɵtext(3, "Large modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1, 2);
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelementStart(9, "h4", 6);
            i0.ɵɵtext(10, "Large modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function DemoModalSizesComponent_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(5); return _r0.hide(); });
            i0.ɵɵelementStart(12, "span", 8);
            i0.ɵɵtext(13, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 9);
            i0.ɵɵtext(15, " ... ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 10);
            i0.ɵɵlistener("click", function DemoModalSizesComponent_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r2); var _r1 = i0.ɵɵreference(19); return _r1.show(); });
            i0.ɵɵtext(17, "Small modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 11, 12);
            i0.ɵɵelementStart(20, "div", 13);
            i0.ɵɵelementStart(21, "div", 4);
            i0.ɵɵelementStart(22, "div", 5);
            i0.ɵɵelementStart(23, "h4", 14);
            i0.ɵɵtext(24, "Small modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 7);
            i0.ɵɵlistener("click", function DemoModalSizesComponent_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r2); var _r1 = i0.ɵɵreference(19); return _r1.hide(); });
            i0.ɵɵelementStart(26, "span", 8);
            i0.ɵɵtext(27, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 9);
            i0.ɵɵtext(29, " ... ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.ModalDirective], encapsulation: 2 });
    return DemoModalSizesComponent;
}());
exports.DemoModalSizesComponent = DemoModalSizesComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalSizesComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-sizes',
                templateUrl: './sizes.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "W/fT":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/disable-esc-closing/disable-esc-closing.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-disable-esc-closing',\n  templateUrl: './disable-esc-closing.html'\n})\nexport class DemoModalServiceDisableEscClosingComponent {\n  modalRef: BsModalRef;\n  config = {\n    keyboard: true\n  };\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template, this.config);\n  }\n}\n");

/***/ }),

/***/ "XOp1":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/modal-with-popups/modal-with-popups.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-with-popups',\n  templateUrl: './modal-with-popups.html'\n})\nexport class DemoModalWithPopupsComponent {\n  modalRef: BsModalRef;\n\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template);\n  }\n}\n");

/***/ }),

/***/ "Yu+G":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/disable-animation/disable-animation.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<br>\r\n<br>\r\n<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"config.animated = !config.animated\">{{config.animated ? 'Disable' : 'Enable'}} animation</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    Just a modal with a bunch of words inside, nothing serious.\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "Z4A1":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/events/events.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from '@angular/core';\nimport { ModalDirective } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-events',\n  templateUrl: './events.html',\n  styles: [`\n    .card {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }\n  `]\n})\nexport class DemoModalEventsComponent {\n  @ViewChild(ModalDirective, { static: false }) modal: ModalDirective;\n  messages: string[];\n\n  showModal() {\n    this.messages = [];\n    this.modal.show();\n  }\n  handler(type: string, $event: ModalDirective) {\n    this.messages.push(\n      `event ${type} is fired${$event.dismissReason\n        ? ', dismissed by ' + $event.dismissReason\n        : ''}`\n    );\n  }\n}\n");

/***/ }),

/***/ "ZNku":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/nested/nested.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"parentModal.show()\">Open parent modal</button>\r\n<div class=\"modal fade\" bsModal #parentModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-nested-name1\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-nested-name1\" class=\"modal-title pull-left\">First modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"parentModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"childModal.show()\">Open second modal</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #childModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-nested-name2\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-nested-name2\" class=\"modal-title pull-left\">Second modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"childModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        This is second modal <br>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"thirdModal.show()\">Open third modal</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #thirdModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-nested-name3\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-nested-name3\" class=\"modal-title pull-left\">Third modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"thirdModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        This is third modal <br>\r\n        Click <b>&times;</b> to close modal.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "aB/A":
/*!***************************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-options/disable-backdrop/disable-backdrop.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceDisableBackdropComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceDisableBackdropComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "h4", 4);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 5);
    i0.ɵɵlistener("click", function DemoModalServiceDisableBackdropComponent_ng_template_8_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtext(7, " Just a modal with a bunch of words inside, nothing serious. ");
    i0.ɵɵelementEnd();
} }
var DemoModalServiceDisableBackdropComponent = /** @class */ (function () {
    function DemoModalServiceDisableBackdropComponent(modalService) {
        this.modalService = modalService;
        this.config = {
            backdrop: true,
            ignoreBackdropClick: false
        };
    }
    DemoModalServiceDisableBackdropComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, this.config);
    };
    DemoModalServiceDisableBackdropComponent.ɵfac = function DemoModalServiceDisableBackdropComponent_Factory(t) { return new (t || DemoModalServiceDisableBackdropComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceDisableBackdropComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceDisableBackdropComponent, selectors: [["demo-modal-service-disable-backdrop"]], decls: 10, vars: 2, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalServiceDisableBackdropComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceDisableBackdropComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(9); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "button", 1);
            i0.ɵɵlistener("click", function DemoModalServiceDisableBackdropComponent_Template_button_click_4_listener() { return ctx.config.backdrop = !ctx.config.backdrop; });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 1);
            i0.ɵɵlistener("click", function DemoModalServiceDisableBackdropComponent_Template_button_click_6_listener() { return ctx.config.ignoreBackdropClick = !ctx.config.ignoreBackdropClick; });
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, DemoModalServiceDisableBackdropComponent_ng_template_8_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.config.backdrop ? "Disable" : "Enable", " backdrop");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", !ctx.config.ignoreBackdropClick ? "Disable" : "Enable", " backdrop click");
        } }, encapsulation: 2 });
    return DemoModalServiceDisableBackdropComponent;
}());
exports.DemoModalServiceDisableBackdropComponent = DemoModalServiceDisableBackdropComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceDisableBackdropComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-disable-backdrop',
                templateUrl: './disable-backdrop.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "dvKC":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/custom-css-class/custom-css-class.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModalWithClass(template)\">Open modal with custom css class</button>\r\n<br>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    Just a modal with a bunch of words inside, nothing serious.\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "inzw":
/*!*************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/child/child.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalChildComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var _c0 = ["childModal"];
var DemoModalChildComponent = /** @class */ (function () {
    function DemoModalChildComponent() {
    }
    DemoModalChildComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    DemoModalChildComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    DemoModalChildComponent.ɵfac = function DemoModalChildComponent_Factory(t) { return new (t || DemoModalChildComponent)(); };
    DemoModalChildComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalChildComponent, selectors: [["demo-modal-child"]], viewQuery: function DemoModalChildComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.childModal = _t.first);
        } }, decls: 14, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-child-name", 1, "modal", "fade"], ["childModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-child-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalChildComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalChildComponent_Template_button_click_0_listener() { return ctx.showChildModal(); });
            i0.ɵɵtext(1, "Open child modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1, 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelementStart(7, "h4", 6);
            i0.ɵɵtext(8, "Child modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵlistener("click", function DemoModalChildComponent_Template_button_click_9_listener() { return ctx.hideChildModal(); });
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵtext(13, " I am a child modal, opened from parent component! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.ModalDirective], encapsulation: 2 });
    return DemoModalChildComponent;
}());
exports.DemoModalChildComponent = DemoModalChildComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalChildComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-child',
                templateUrl: './child.html'
            }]
    }], null, { childModal: [{
            type: core_1.ViewChild,
            args: ['childModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "jv1v":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-template/service-template.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-static',\n  templateUrl: './service-template.html'\n})\nexport class DemoModalServiceStaticComponent {\n  modalRef: BsModalRef;\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template);\n  }\n}\n");

/***/ }),

/***/ "ksuB":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/static/static.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalStaticComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var _c0 = function () { return { backdrop: "static" }; };
var DemoModalStaticComponent = /** @class */ (function () {
    function DemoModalStaticComponent() {
    }
    DemoModalStaticComponent.ɵfac = function DemoModalStaticComponent_Factory(t) { return new (t || DemoModalStaticComponent)(); };
    DemoModalStaticComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalStaticComponent, selectors: [["demo-modal-static"]], decls: 17, vars: 2, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-static-name", 1, "modal", "fade", 3, "config"], ["staticModal", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-static-name", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalStaticComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalStaticComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(3); return _r0.show(); });
            i0.ɵɵtext(1, "Static modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1, 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelementStart(7, "h4", 6);
            i0.ɵɵtext(8, "Static modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 7);
            i0.ɵɵlistener("click", function DemoModalStaticComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(3); return _r0.hide(); });
            i0.ɵɵelementStart(10, "span", 8);
            i0.ɵɵtext(11, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵtext(13, " This is static modal, backdrop click will not close it. Click ");
            i0.ɵɵelementStart(14, "b");
            i0.ɵɵtext(15, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " to close modal. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", i0.ɵɵpureFunction0(1, _c0));
        } }, directives: [i1.ModalDirective], encapsulation: 2 });
    return DemoModalStaticComponent;
}());
exports.DemoModalStaticComponent = DemoModalStaticComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalStaticComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-static',
                templateUrl: './static.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "lCuT":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-nested/service-nested.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-nested',\n  templateUrl: './service-nested.html'\n})\nexport class DemoModalServiceNestedComponent {\n  modalRef: BsModalRef | null;\n  modalRef2: BsModalRef;\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });\n  }\n  openModal2(template: TemplateRef<any>) {\n    this.modalRef2 = this.modalService.show(template, {id: 2, class: 'second' });\n  }\n  closeFirstModal() {\n    if (!this.modalRef) {\n      return;\n    }\n\n    this.modalRef.hide();\n    this.modalRef = null;\n  }\n  closeModal(modalId?: number){\n    this.modalService.hide(modalId);\n  }\n}\n");

/***/ }),

/***/ "lGeL":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/modal-ref-events/modal-ref-events.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<br><br>\r\n<pre class=\"card card-block card-header\" *ngFor=\"let message of messages\">{{message}}</pre>\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    This is a modal\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "lJAy":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-events/service-events.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectorRef, Component, TemplateRef } from '@angular/core';\nimport { BsModalRef, BsModalService } from 'bao-tran-angular/modal';\nimport { combineLatest, Subscription } from 'rxjs';\n\n@Component({\n  selector: 'demo-modal-service-events',\n  templateUrl: './service-events.html',\n  styles: [`\n    .card {\n      margin-bottom: 0.75rem;\n      padding: 8px;\n    }\n  `]\n})\nexport class DemoModalServiceEventsComponent {\n  modalRef: BsModalRef;\n  subscriptions: Subscription[] = [];\n  messages: string[] = [];\n\n  constructor(private modalService: BsModalService, private changeDetection: ChangeDetectorRef) {\n  }\n\n  openModal(template: TemplateRef<any>) {\n    this.messages = [];\n\n    const _combine = combineLatest(\n      this.modalService.onShow,\n      this.modalService.onShown,\n      this.modalService.onHide,\n      this.modalService.onHidden\n    ).subscribe(() => this.changeDetection.markForCheck());\n\n    this.subscriptions.push(\n      this.modalService.onShow.subscribe(() => {\n        this.messages.push(`onShow event has been fired`);\n      })\n    );\n    this.subscriptions.push(\n      this.modalService.onShown.subscribe(() => {\n        this.messages.push(`onShown event has been fired`);\n      })\n    );\n    this.subscriptions.push(\n      this.modalService.onHide.subscribe((reason: string | any) => {\n        if (typeof reason !== 'string') {\n          reason = `onHide(), modalId is : ${reason.id}`;\n        }\n        const _reason = reason ? `, dismissed by ${reason}` : '';\n        this.messages.push(`onHide event has been fired${_reason}`);\n      })\n    );\n    this.subscriptions.push(\n      this.modalService.onHidden.subscribe((reason: string | any) => {\n        if (typeof reason !== 'string') {\n          reason = `onHide(), modalId is : ${reason.id}`;\n        }\n        const _reason = reason ? `, dismissed by ${reason}` : '';\n        this.messages.push(`onHidden event has been fired${_reason}`);\n        this.unsubscribe();\n      })\n    );\n\n    this.subscriptions.push(_combine);\n\n    this.modalRef = this.modalService.show(template);\n  }\n\n  unsubscribe() {\n    this.subscriptions.forEach((subscription: Subscription) => {\n      subscription.unsubscribe();\n    });\n    this.subscriptions = [];\n  }\n}\n");

/***/ }),

/***/ "lsyi":
/*!*************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/modal-with-popups/modal-with-popups.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalWithPopupsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i2 = __webpack_require__(/*! bao-tran-angular/popover */ "rXnD");
var i3 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
function DemoModalWithPopupsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h4", 3);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function DemoModalWithPopupsComponent_ng_template_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus enim esse excepturi, impedit, iste magnam officia optio, quam quis quisquam saepe sint unde velit vitae! Animi in iusto ut?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 7);
    i0.ɵɵtext(10, "popover");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 8);
    i0.ɵɵtext(12, "tooltip");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoModalWithPopupsComponent = /** @class */ (function () {
    function DemoModalWithPopupsComponent(modalService) {
        this.modalService = modalService;
    }
    DemoModalWithPopupsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    DemoModalWithPopupsComponent.ɵfac = function DemoModalWithPopupsComponent_Factory(t) { return new (t || DemoModalWithPopupsComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalWithPopupsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalWithPopupsComponent, selectors: [["demo-modal-with-popups"]], decls: 4, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", "popover", "Vivamus sagittis", 1, "btn", "btn-primary"], ["type", "button", "tooltip", "Vivamus sagittis", 1, "btn", "btn-primary"]], template: function DemoModalWithPopupsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalWithPopupsComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(3); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoModalWithPopupsComponent_ng_template_2_Template, 13, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, directives: [i2.PopoverDirective, i3.TooltipDirective], encapsulation: 2 });
    return DemoModalWithPopupsComponent;
}());
exports.DemoModalWithPopupsComponent = DemoModalWithPopupsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalWithPopupsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-with-popups',
                templateUrl: './modal-with-popups.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "m9BN":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/scrolling-long-content/scrolling-long-content.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-scrolling-long-content',\n  templateUrl: './scrolling-long-content.html'\n})\nexport class DemoModalScrollingLongContentComponent {\n  modalRef: BsModalRef;\n  items: any[];\n\n  constructor(private modalService: BsModalService) {\n    this.items = Array(15).fill(0);\n  }\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template);\n  }\n}\n");

/***/ }),

/***/ "obwx":
/*!***********************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-confirm-window/service-confirm-window.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceConfirmWindowComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceConfirmWindowComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2, "Do you want to confirm?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function DemoModalServiceConfirmWindowComponent_ng_template_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.confirm(); });
    i0.ɵɵtext(4, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 0);
    i0.ɵɵlistener("click", function DemoModalServiceConfirmWindowComponent_ng_template_6_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.decline(); });
    i0.ɵɵtext(6, "No");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoModalServiceConfirmWindowComponent = /** @class */ (function () {
    function DemoModalServiceConfirmWindowComponent(modalService) {
        this.modalService = modalService;
    }
    DemoModalServiceConfirmWindowComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    DemoModalServiceConfirmWindowComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        this.modalRef.hide();
    };
    DemoModalServiceConfirmWindowComponent.prototype.decline = function () {
        this.message = 'Declined!';
        this.modalRef.hide();
    };
    DemoModalServiceConfirmWindowComponent.ɵfac = function DemoModalServiceConfirmWindowComponent_Factory(t) { return new (t || DemoModalServiceConfirmWindowComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceConfirmWindowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceConfirmWindowComponent, selectors: [["demo-modal-service-confirm-window"]], decls: 8, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card", "card-block", "card-header"], ["template", ""], [1, "modal-body", "text-center"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function DemoModalServiceConfirmWindowComponent_Template(rf, ctx) { if (rf & 1) {
            var _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceConfirmWindowComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); var _r0 = i0.ɵɵreference(7); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "pre", 1);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, DemoModalServiceConfirmWindowComponent_ng_template_6_Template, 7, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.message);
        } }, encapsulation: 2 });
    return DemoModalServiceConfirmWindowComponent;
}());
exports.DemoModalServiceConfirmWindowComponent = DemoModalServiceConfirmWindowComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceConfirmWindowComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-confirm-window',
                templateUrl: './service-confirm-window.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "pi/o":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-confirm-window/service-confirm-window.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-confirm-window',\n  templateUrl: './service-confirm-window.html'\n})\nexport class DemoModalServiceConfirmWindowComponent {\n  modalRef: BsModalRef;\n  message: string;\n  constructor(private modalService: BsModalService) {}\n\n  openModal(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});\n  }\n\n  confirm(): void {\n    this.message = 'Confirmed!';\n    this.modalRef.hide();\n  }\n\n  decline(): void {\n    this.message = 'Declined!';\n    this.modalRef.hide();\n  }\n}\n");

/***/ }),

/***/ "qD/P":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-confirm-window/service-confirm-window.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<br><br>\r\n<pre class=\"card card-block card-header\">{{message}}</pre>\r\n<ng-template #template>\r\n  <div class=\"modal-body text-center\">\r\n    <p>Do you want to confirm?</p>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "qrnN":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/disable-esc-closing/disable-esc-closing.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<br>\r\n<br>\r\n<button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"config.keyboard = !config.keyboard\">{{config.keyboard ? 'Disable' : 'Enable'}} Esc</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    Just a modal with a bunch of words inside, nothing serious.\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "rU7H":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-nested/service-nested.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceNestedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoModalServiceNestedComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "h4", 4);
    i0.ɵɵtext(2, "First modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 5);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtext(7, " This is a first modal");
    i0.ɵɵelement(8, "br");
    i0.ɵɵelementStart(9, "button", 0);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_2_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r5); var ctx_r6 = i0.ɵɵnextContext(); var _r2 = i0.ɵɵreference(5); return ctx_r6.openModal2(_r2); });
    i0.ɵɵtext(10, "Open second modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 0);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_2_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r5); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.closeModal(1); });
    i0.ɵɵtext(12, "Close self");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 0);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_2_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r5); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.closeModal(); });
    i0.ɵɵtext(14, "Close all modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DemoModalServiceNestedComponent_ng_template_4_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_4_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.closeFirstModal(); });
    i0.ɵɵtext(1, "Close first modal");
    i0.ɵɵelementEnd();
} }
function DemoModalServiceNestedComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "h4", 4);
    i0.ɵɵtext(2, "Second modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 5);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_4_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.modalRef2.hide(); });
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtext(7, " This is nested modal.");
    i0.ɵɵelement(8, "br");
    i0.ɵɵtemplate(9, DemoModalServiceNestedComponent_ng_template_4_button_9_Template, 2, 0, "button", 8);
    i0.ɵɵelementStart(10, "button", 9);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_4_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r13); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.closeModal(2); });
    i0.ɵɵtext(11, "Close self");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 9);
    i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_ng_template_4_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r13); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.closeModal(); });
    i0.ɵɵtext(13, "Close all modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r3.modalRef);
} }
var DemoModalServiceNestedComponent = /** @class */ (function () {
    function DemoModalServiceNestedComponent(modalService) {
        this.modalService = modalService;
    }
    DemoModalServiceNestedComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg' });
    };
    DemoModalServiceNestedComponent.prototype.openModal2 = function (template) {
        this.modalRef2 = this.modalService.show(template, { id: 2, class: 'second' });
    };
    DemoModalServiceNestedComponent.prototype.closeFirstModal = function () {
        if (!this.modalRef) {
            return;
        }
        this.modalRef.hide();
        this.modalRef = null;
    };
    DemoModalServiceNestedComponent.prototype.closeModal = function (modalId) {
        this.modalService.hide(modalId);
    };
    DemoModalServiceNestedComponent.ɵfac = function DemoModalServiceNestedComponent_Factory(t) { return new (t || DemoModalServiceNestedComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceNestedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceNestedComponent, selectors: [["demo-modal-service-nested"]], decls: 6, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], ["templateNested", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function DemoModalServiceNestedComponent_Template(rf, ctx) { if (rf & 1) {
            var _r16 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceNestedComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); var _r0 = i0.ɵɵreference(3); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Open first modal");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, DemoModalServiceNestedComponent_ng_template_2_Template, 15, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, DemoModalServiceNestedComponent_ng_template_4_Template, 14, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } }, directives: [i2.NgIf], encapsulation: 2 });
    return DemoModalServiceNestedComponent;
}());
exports.DemoModalServiceNestedComponent = DemoModalServiceNestedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceNestedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-nested',
                templateUrl: './service-nested.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "rUXD":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-template/service-template.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    This is a modal.\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "rhTQ":
/*!*********************************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/service-options/disable-esc-closing/disable-esc-closing.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalServiceDisableEscClosingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
function DemoModalServiceDisableEscClosingComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "h4", 4);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 5);
    i0.ɵɵlistener("click", function DemoModalServiceDisableEscClosingComponent_ng_template_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtext(7, " Just a modal with a bunch of words inside, nothing serious. ");
    i0.ɵɵelementEnd();
} }
var DemoModalServiceDisableEscClosingComponent = /** @class */ (function () {
    function DemoModalServiceDisableEscClosingComponent(modalService) {
        this.modalService = modalService;
        this.config = {
            keyboard: true
        };
    }
    DemoModalServiceDisableEscClosingComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, this.config);
    };
    DemoModalServiceDisableEscClosingComponent.ɵfac = function DemoModalServiceDisableEscClosingComponent_Factory(t) { return new (t || DemoModalServiceDisableEscClosingComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalServiceDisableEscClosingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalServiceDisableEscClosingComponent, selectors: [["demo-modal-service-disable-esc-closing"]], decls: 8, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function DemoModalServiceDisableEscClosingComponent_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalServiceDisableEscClosingComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(7); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "button", 1);
            i0.ɵɵlistener("click", function DemoModalServiceDisableEscClosingComponent_Template_button_click_4_listener() { return ctx.config.keyboard = !ctx.config.keyboard; });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, DemoModalServiceDisableEscClosingComponent_ng_template_6_Template, 8, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.config.keyboard ? "Disable" : "Enable", " Esc");
        } }, encapsulation: 2 });
    return DemoModalServiceDisableEscClosingComponent;
}());
exports.DemoModalServiceDisableEscClosingComponent = DemoModalServiceDisableEscClosingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalServiceDisableEscClosingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-service-disable-esc-closing',
                templateUrl: './disable-esc-closing.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "s63r":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-events/service-events.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Open modal</button>\r\n<br><br>\r\n<pre class=\"card card-block card-header\" *ngFor=\"let message of messages\">{{message}}</pre>\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Modal</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    This is a modal\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "sF3K":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/sizes/sizes.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-modal-sizes',\r\n  templateUrl: './sizes.html'\r\n})\r\nexport class DemoModalSizesComponent {}\r\n");

/***/ }),

/***/ "vGhm":
/*!***********************************************************************************************!*\
  !*** ./demo/src/app/components/+modal/demos/scrolling-long-content/scrolling-long-content.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoModalScrollingLongContentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var modal_1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/modal */ "mxkV");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoModalScrollingLongContentComponent_ng_template_3_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus enim esse excepturi, impedit, iste magnam officia optio, quam quis quisquam saepe sint unde velit vitae! Animi in iusto ut?");
    i0.ɵɵelementEnd();
} }
function DemoModalScrollingLongContentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "h4", 3);
    i0.ɵɵtext(2, "Modal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵlistener("click", function DemoModalScrollingLongContentComponent_ng_template_3_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.modalRef.hide(); });
    i0.ɵɵelementStart(4, "span", 5);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtemplate(7, DemoModalScrollingLongContentComponent_ng_template_3_p_7_Template, 2, 0, "p", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.items);
} }
var DemoModalScrollingLongContentComponent = /** @class */ (function () {
    function DemoModalScrollingLongContentComponent(modalService) {
        this.modalService = modalService;
        this.items = Array(15).fill(0);
    }
    DemoModalScrollingLongContentComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    DemoModalScrollingLongContentComponent.ɵfac = function DemoModalScrollingLongContentComponent_Factory(t) { return new (t || DemoModalScrollingLongContentComponent)(i0.ɵɵdirectiveInject(i1.BsModalService)); };
    DemoModalScrollingLongContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoModalScrollingLongContentComponent, selectors: [["demo-modal-scrolling-long-content"]], decls: 5, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"]], template: function DemoModalScrollingLongContentComponent_Template(rf, ctx) { if (rf & 1) {
            var _r6 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoModalScrollingLongContentComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); var _r0 = i0.ɵɵreference(4); return ctx.openModal(_r0); });
            i0.ɵɵtext(1, "Open modal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵtemplate(3, DemoModalScrollingLongContentComponent_ng_template_3_Template, 8, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, directives: [i2.NgForOf], encapsulation: 2 });
    return DemoModalScrollingLongContentComponent;
}());
exports.DemoModalScrollingLongContentComponent = DemoModalScrollingLongContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoModalScrollingLongContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-modal-scrolling-long-content',
                templateUrl: './scrolling-long-content.html'
            }]
    }], function () { return [{ type: i1.BsModalService }]; }, null); })();


/***/ }),

/***/ "y5Y2":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/service-options/custom-css-class/custom-css-class.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, TemplateRef } from '@angular/core';\nimport { BsModalService, BsModalRef } from 'bao-tran-angular/modal';\n\n@Component({\n  selector: 'demo-modal-service-custom-css-class',\n  templateUrl: './custom-css-class.html'\n})\nexport class DemoModalServiceCustomCSSClassComponent {\n  modalRef: BsModalRef;\n  constructor(private modalService: BsModalService) {}\n\n  openModalWithClass(template: TemplateRef<any>) {\n    this.modalRef = this.modalService.show(\n      template,\n      Object.assign({}, { class: 'gray modal-lg' })\n    );\n  }\n}\n");

/***/ }),

/***/ "ye4F":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/docs/usage.md ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { ModalModule } from 'bao-tran-angular/modal';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { ModalModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [ModalModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "zxN6":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+modal/demos/accessibility/accessibility.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\" id=\"my-modal-title\">Modal title</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div id=\"my-modal-description\">\r\n      This is a modal.\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n");

/***/ })

};;
//# sourceMappingURL=components-modal-demo-modal-module.js.map