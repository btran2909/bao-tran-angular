exports.ids = ["components-tabs-demo-tabs-module"];
exports.modules = {

/***/ "++Cd":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/disabled-key-navigations/disabled-key-navigations.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabset>\r\n  <tab  heading=\"Tab1\">Tab1</tab>\r\n  <tab  heading=\"Tab2\">Tab2</tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "+q+B":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/dynamic-content-rendering/dynamic-content-rendering.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'dynamic-content-rendering',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  templateUrl: './dynamic-content-rendering.html',\r\n  styleUrls: ['./dynamic-content-rendering.css']\r\n})\r\nexport class DynamicContentRenderingComponent {\r\n\r\n  messages: string[] = [];\r\n\r\n  message(s: string) {\r\n    this.messages.push(s);\r\n  }\r\n\r\n}\r\n");

/***/ }),

/***/ "/3Eu":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/justified/justified.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsJustifiedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var DemoTabsJustifiedComponent = /** @class */ (function () {
    function DemoTabsJustifiedComponent() {
    }
    DemoTabsJustifiedComponent.ɵfac = function DemoTabsJustifiedComponent_Factory(t) { return new (t || DemoTabsJustifiedComponent)(); };
    DemoTabsJustifiedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsJustifiedComponent, selectors: [["demo-tabs-justified"]], decls: 7, vars: 1, consts: [[3, "justified"], ["heading", "Justified"], ["heading", "SJ"], ["heading", "Long Justified"]], template: function DemoTabsJustifiedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tabset", 0);
            i0.ɵɵelementStart(1, "tab", 1);
            i0.ɵɵtext(2, "Justified content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "tab", 2);
            i0.ɵɵtext(4, "Short Labeled Justified content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "tab", 3);
            i0.ɵɵtext(6, "Long Labeled Justified content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("justified", true);
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoTabsJustifiedComponent;
}());
exports.DemoTabsJustifiedComponent = DemoTabsJustifiedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsJustifiedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-justified',
                templateUrl: './justified.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "0aVI":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/basic/basic.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoTabsBasicComponent {}\r\n");

/***/ }),

/***/ "56vY":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/select-event/select-event.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-3\">\r\n  <pre class=\"card card-block card-header\" *ngIf=\"value\">Event select is fired. The heading of the selected tab is: {{value}}</pre>\r\n</div>\r\n<tabset>\r\n  <tab heading=\"First tab\" class=\"mt-2\" (selectTab)=\"onSelect($event)\">\r\n    <h4>Title</h4>\r\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\r\n      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n  </tab>\r\n  <tab heading=\"Second tab\" class=\"mt-2\" (selectTab)=\"onSelect($event)\">\r\n    <h4>Title 2</h4>\r\n    <p>It has survived not only five centuries, but also the leap into electronic typesetting,\r\n      remaining essentially unchanged. It was popularised in the 1960s with the release of\r\n      Letraset sheets containing Lorem Ipsum passages</p>\r\n  </tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "5UwF":
/*!***********************************************************!*\
  !*** ./demo/src/app/components/+tabs/demo-tabs.routes.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var tabs_section_component_1 = __webpack_require__(/*! ./tabs-section.component */ "Ad5P");
exports.routes = [{ path: '', component: tabs_section_component_1.TabsSectionComponent }];


/***/ }),

/***/ "6Ost":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/basic/basic.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <tabset>\r\n    <tab heading=\"Basic title\" id=\"tab1\">Basic content</tab>\r\n    <tab heading=\"Basic Title 1\">Basic content 1</tab>\r\n    <tab heading=\"Basic Title 2\">Basic content 2</tab>\r\n  </tabset>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "79mg":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/manual-selection/manual-selection.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'bao-tran-angular/tabs';\n\n@Component({\n  selector: 'demo-tabs-manual-selection',\n  templateUrl: './manual-selection.html'\n})\nexport class DemoTabsManualSelectionComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  selectTab(tabId: number) {\n    this.staticTabs.tabs[tabId].active = true;\n  }\n}\n");

/***/ }),

/***/ "8K8F":
/*!************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/pills/pills.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsPillsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var DemoTabsPillsComponent = /** @class */ (function () {
    function DemoTabsPillsComponent() {
    }
    DemoTabsPillsComponent.ɵfac = function DemoTabsPillsComponent_Factory(t) { return new (t || DemoTabsPillsComponent)(); };
    DemoTabsPillsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsPillsComponent, selectors: [["demo-tabs-pills"]], decls: 5, vars: 0, consts: [["type", "pills"], ["heading", "Pills 1"], ["heading", "Pills 2"]], template: function DemoTabsPillsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tabset", 0);
            i0.ɵɵelementStart(1, "tab", 1);
            i0.ɵɵtext(2, "Pills content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "tab", 2);
            i0.ɵɵtext(4, "Pills content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoTabsPillsComponent;
}());
exports.DemoTabsPillsComponent = DemoTabsPillsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsPillsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-pills',
                templateUrl: './pills.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "8MTU":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/pills/pills.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabset type=\"pills\">\r\n  <tab heading=\"Pills 1\">Pills content 1</tab>\r\n  <tab heading=\"Pills 2\">Pills content 2</tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "94iu":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/dynamic/dynamic.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"$event.preventDefault()\">\r\n    <p>Change quantity of tabs by manipulating tabs array</p>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNewTab()\">\r\n      Add new tab\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"tabs = []\"  *ngIf=\"tabs.length\">\r\n      Remove all tabs\r\n    </button>\r\n  <hr/>\r\n  <tabset>\r\n    <tab heading=\"Static title\">Static content</tab>\r\n    <tab *ngFor=\"let tabz of tabs\"\r\n         [heading]=\"tabz.title\"\r\n         [active]=\"tabz.active\"\r\n         (selectTab)=\"tabz.active = true\"\r\n         (deselect)=\"tabz.active = false\"\r\n         [disabled]=\"tabz.disabled\"\r\n         [removable]=\"tabz.removable\"\r\n         (removed)=\"removeTabHandler(tabz)\"\r\n         [customClass]=\"tabz.customClass\">\r\n      {{tabz?.content}}\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n");

/***/ }),

/***/ "Ad5P":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+tabs/tabs-section.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var tabs_section_list_1 = __webpack_require__(/*! ./tabs-section.list */ "fIrP");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.name = 'Tabs';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/tabs';
        this.componentContent = tabs_section_list_1.demoComponentContent;
    }
    TabsSectionComponent.ɵfac = function TabsSectionComponent_Factory(t) { return new (t || TabsSectionComponent)(); };
    TabsSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TabsSectionComponent, selectors: [["tabs-section"]], decls: 6, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function TabsSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. ");
            i0.ɵɵelementStart(3, "strong");
            i0.ɵɵtext(4, "Nested tabs are not supported.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return TabsSectionComponent;
}());
exports.TabsSectionComponent = TabsSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabsSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'tabs-section',
                templateUrl: './tabs-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "CXga":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/vertical-pills/vertical-pills.ts ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-vertical-pills',\r\n  templateUrl: './vertical-pills.html'\r\n})\r\nexport class DemoTabsVerticalPillsComponent {}\r\n");

/***/ }),

/***/ "CcHA":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/select-event/select-event.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { TabDirective } from 'bao-tran-angular/tabs';\n\n@Component({\n  selector: 'demo-tabs-select-event',\n  templateUrl: './select-event.html'\n})\nexport class DemoTabsSelectEventComponent {\n  value: string;\n  onSelect(data: TabDirective): void {\n    this.value = data.heading;\n  }\n}\n");

/***/ }),

/***/ "Do+o":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/dynamic-content-rendering/dynamic-content-rendering.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>The Component inside the Tab is rendered, when the tab is activated and destroyed when the tab is left.</p>\r\n<ul class=\"eventlist\">\r\n  <li *ngFor=\"let message of messages\">{{ message }}</li>\r\n</ul>\r\n<tabset>\r\n  <tab heading=\"Tab A\" #tabA=\"tab\">\r\n    <sub-component\r\n      name=\"A\"\r\n      *ngIf=\"tabA.active\"\r\n      (onInit)=\"message('Sub-Component A activated')\"\r\n      (onDestroy)=\"message('Sub-Component A destroyed')\"\r\n    ></sub-component>\r\n  </tab>\r\n\r\n  <tab heading=\"Tab B\" #tabB=\"tab\">\r\n    <sub-component\r\n      name=\"B\"\r\n      *ngIf=\"tabB.active\"\r\n      (onInit)=\"message('Sub-Component B activated')\"\r\n      (onDestroy)=\"message('Sub-Component B destroyed')\"\r\n    ></sub-component>\r\n  </tab>\r\n\r\n  <tab heading=\"Tab C\" #tabC=\"tab\">\r\n    <sub-component\r\n      name=\"C\"\r\n      *ngIf=\"tabC.active\"\r\n      (onInit)=\"message('Sub-Component C activated')\"\r\n      (onDestroy)=\"message('Sub-Component C destroyed')\"\r\n    ></sub-component>\r\n  </tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "Fma8":
/*!**************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/select-event/select-event.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsSelectEventComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
function DemoTabsSelectEventComponent_pre_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Event select is fired. The heading of the selected tab is: ", ctx_r0.value, "");
} }
var DemoTabsSelectEventComponent = /** @class */ (function () {
    function DemoTabsSelectEventComponent() {
    }
    DemoTabsSelectEventComponent.prototype.onSelect = function (data) {
        this.value = data.heading;
    };
    DemoTabsSelectEventComponent.ɵfac = function DemoTabsSelectEventComponent_Factory(t) { return new (t || DemoTabsSelectEventComponent)(); };
    DemoTabsSelectEventComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsSelectEventComponent, selectors: [["demo-tabs-select-event"]], decls: 13, vars: 1, consts: [[1, "mb-3"], ["class", "card card-block card-header", 4, "ngIf"], ["heading", "First tab", 1, "mt-2", 3, "selectTab"], ["heading", "Second tab", 1, "mt-2", 3, "selectTab"], [1, "card", "card-block", "card-header"]], template: function DemoTabsSelectEventComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DemoTabsSelectEventComponent_pre_1_Template, 2, 1, "pre", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "tabset");
            i0.ɵɵelementStart(3, "tab", 2);
            i0.ɵɵlistener("selectTab", function DemoTabsSelectEventComponent_Template_tab_selectTab_3_listener($event) { return ctx.onSelect($event); });
            i0.ɵɵelementStart(4, "h4");
            i0.ɵɵtext(5, "Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "tab", 3);
            i0.ɵɵlistener("selectTab", function DemoTabsSelectEventComponent_Template_tab_selectTab_8_listener($event) { return ctx.onSelect($event); });
            i0.ɵɵelementStart(9, "h4");
            i0.ɵɵtext(10, "Title 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.value);
        } }, directives: [i1.NgIf, i2.TabsetComponent, i2.TabDirective], encapsulation: 2 });
    return DemoTabsSelectEventComponent;
}());
exports.DemoTabsSelectEventComponent = DemoTabsSelectEventComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsSelectEventComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-select-event',
                templateUrl: './select-event.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "JE5T":
/*!******************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/vertical-pills/vertical-pills.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsVerticalPillsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var DemoTabsVerticalPillsComponent = /** @class */ (function () {
    function DemoTabsVerticalPillsComponent() {
    }
    DemoTabsVerticalPillsComponent.ɵfac = function DemoTabsVerticalPillsComponent_Factory(t) { return new (t || DemoTabsVerticalPillsComponent)(); };
    DemoTabsVerticalPillsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsVerticalPillsComponent, selectors: [["demo-tabs-vertical-pills"]], decls: 5, vars: 1, consts: [["type", "pills", 3, "vertical"], ["heading", "Vertical 1"], ["heading", "Vertical 2"]], template: function DemoTabsVerticalPillsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tabset", 0);
            i0.ɵɵelementStart(1, "tab", 1);
            i0.ɵɵtext(2, "Vertical content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "tab", 2);
            i0.ɵɵtext(4, "Vertical content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("vertical", true);
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoTabsVerticalPillsComponent;
}());
exports.DemoTabsVerticalPillsComponent = DemoTabsVerticalPillsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsVerticalPillsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-vertical-pills',
                templateUrl: './vertical-pills.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "JN29":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/dynamic/dynamic.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ChangeDetectionStrategy } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-dynamic',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoTabsDynamicComponent {\r\n  tabs: any[] = [\r\n    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },\r\n    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },\r\n    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }\r\n  ];\r\n\r\n  addNewTab(): void {\r\n    const newTabIndex = this.tabs.length + 1;\r\n    this.tabs.push({\r\n      title: `Dynamic Title ${newTabIndex}`,\r\n      content: `Dynamic content ${newTabIndex}`,\r\n      disabled: false,\r\n      removable: true\r\n    });\r\n  }\r\n\r\n  removeTabHandler(tab: any): void {\r\n    this.tabs.splice(this.tabs.indexOf(tab), 1);\r\n    console.log('Remove Tab handler');\r\n  }\r\n}\r\n");

/***/ }),

/***/ "JiBl":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/manual-selection/manual-selection.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsManualSelectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var tabs_1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var _c0 = ["staticTabs"];
var DemoTabsManualSelectionComponent = /** @class */ (function () {
    function DemoTabsManualSelectionComponent() {
    }
    DemoTabsManualSelectionComponent.prototype.selectTab = function (tabId) {
        this.staticTabs.tabs[tabId].active = true;
    };
    DemoTabsManualSelectionComponent.ɵfac = function DemoTabsManualSelectionComponent_Factory(t) { return new (t || DemoTabsManualSelectionComponent)(); };
    DemoTabsManualSelectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsManualSelectionComponent, selectors: [["demo-tabs-manual-selection"]], viewQuery: function DemoTabsManualSelectionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.staticTabs = _t.first);
        } }, decls: 19, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["staticTabs", ""], ["heading", "Static title"], ["heading", "Static Title 1"], ["heading", "Static Title 2"], ["heading", "Static Title 3"]], template: function DemoTabsManualSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "You can select tabs directly from component");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵelementStart(4, "button", 0);
            i0.ɵɵlistener("click", function DemoTabsManualSelectionComponent_Template_button_click_4_listener() { return ctx.selectTab(1); });
            i0.ɵɵtext(5, "Select second tab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 0);
            i0.ɵɵlistener("click", function DemoTabsManualSelectionComponent_Template_button_click_6_listener() { return ctx.selectTab(2); });
            i0.ɵɵtext(7, "Select third tab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "hr");
            i0.ɵɵelementStart(9, "tabset", null, 1);
            i0.ɵɵelementStart(11, "tab", 2);
            i0.ɵɵtext(12, "Static content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "tab", 3);
            i0.ɵɵtext(14, "Static content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "tab", 4);
            i0.ɵɵtext(16, "Static content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "tab", 5);
            i0.ɵɵtext(18, "Static content 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoTabsManualSelectionComponent;
}());
exports.DemoTabsManualSelectionComponent = DemoTabsManualSelectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsManualSelectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-manual-selection',
                templateUrl: './manual-selection.html'
            }]
    }], null, { staticTabs: [{
            type: core_1.ViewChild,
            args: ['staticTabs', { static: false }]
        }] }); })();


/***/ }),

/***/ "JmFz":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/dynamic/dynamic.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
function DemoTabsDynamicComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function DemoTabsDynamicComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.tabs = []; });
    i0.ɵɵtext(1, " Remove all tabs ");
    i0.ɵɵelementEnd();
} }
function DemoTabsDynamicComponent_tab_10_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tab", 5);
    i0.ɵɵlistener("selectTab", function DemoTabsDynamicComponent_tab_10_Template_tab_selectTab_0_listener() { var tabz_r4 = ctx.$implicit; return tabz_r4.active = true; })("deselect", function DemoTabsDynamicComponent_tab_10_Template_tab_deselect_0_listener() { var tabz_r4 = ctx.$implicit; return tabz_r4.active = false; })("removed", function DemoTabsDynamicComponent_tab_10_Template_tab_removed_0_listener() { i0.ɵɵrestoreView(_r8); var tabz_r4 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.removeTabHandler(tabz_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tabz_r4 = ctx.$implicit;
    i0.ɵɵproperty("heading", tabz_r4.title)("active", tabz_r4.active)("disabled", tabz_r4.disabled)("removable", tabz_r4.removable)("customClass", tabz_r4.customClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tabz_r4 == null ? null : tabz_r4.content, " ");
} }
var DemoTabsDynamicComponent = /** @class */ (function () {
    function DemoTabsDynamicComponent() {
        this.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
            { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
        ];
    }
    DemoTabsDynamicComponent.prototype.addNewTab = function () {
        var newTabIndex = this.tabs.length + 1;
        this.tabs.push({
            title: "Dynamic Title " + newTabIndex,
            content: "Dynamic content " + newTabIndex,
            disabled: false,
            removable: true
        });
    };
    DemoTabsDynamicComponent.prototype.removeTabHandler = function (tab) {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
        console.log('Remove Tab handler');
    };
    DemoTabsDynamicComponent.ɵfac = function DemoTabsDynamicComponent_Factory(t) { return new (t || DemoTabsDynamicComponent)(); };
    DemoTabsDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsDynamicComponent, selectors: [["demo-tabs-dynamic"]], decls: 11, vars: 2, consts: [[3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "button", "class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], ["heading", "Static title"], [3, "heading", "active", "disabled", "removable", "customClass", "selectTab", "deselect", "removed", 4, "ngFor", "ngForOf"], [3, "heading", "active", "disabled", "removable", "customClass", "selectTab", "deselect", "removed"]], template: function DemoTabsDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function DemoTabsDynamicComponent_Template_div_click_0_listener($event) { return $event.preventDefault(); });
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Change quantity of tabs by manipulating tabs array");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 1);
            i0.ɵɵlistener("click", function DemoTabsDynamicComponent_Template_button_click_3_listener() { return ctx.addNewTab(); });
            i0.ɵɵtext(4, " Add new tab ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, DemoTabsDynamicComponent_button_5_Template, 2, 0, "button", 2);
            i0.ɵɵelement(6, "hr");
            i0.ɵɵelementStart(7, "tabset");
            i0.ɵɵelementStart(8, "tab", 3);
            i0.ɵɵtext(9, "Static content");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, DemoTabsDynamicComponent_tab_10_Template, 2, 6, "tab", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.tabs.length);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, directives: [i1.NgIf, i2.TabsetComponent, i2.TabDirective, i1.NgForOf], encapsulation: 2, changeDetection: 0 });
    return DemoTabsDynamicComponent;
}());
exports.DemoTabsDynamicComponent = DemoTabsDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-dynamic',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                templateUrl: './dynamic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Knr6":
/*!************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/basic/basic.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var DemoTabsBasicComponent = /** @class */ (function () {
    function DemoTabsBasicComponent() {
    }
    DemoTabsBasicComponent.ɵfac = function DemoTabsBasicComponent_Factory(t) { return new (t || DemoTabsBasicComponent)(); };
    DemoTabsBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsBasicComponent, selectors: [["demo-tabs-basic"]], decls: 8, vars: 0, consts: [["heading", "Basic title", "id", "tab1"], ["heading", "Basic Title 1"], ["heading", "Basic Title 2"]], template: function DemoTabsBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "tabset");
            i0.ɵɵelementStart(2, "tab", 0);
            i0.ɵɵtext(3, "Basic content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "tab", 1);
            i0.ɵɵtext(5, "Basic content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "tab", 2);
            i0.ɵɵtext(7, "Basic content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoTabsBasicComponent;
}());
exports.DemoTabsBasicComponent = DemoTabsBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Medm":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/pills/pills.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-pills',\r\n  templateUrl: './pills.html'\r\n})\r\nexport class DemoTabsPillsComponent {}\r\n");

/***/ }),

/***/ "N7sL":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/custom-template/custom-template.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsCustomComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
function DemoTabsCustomComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtext(1, "Heading");
    i0.ɵɵelementEnd();
} }
function DemoTabsCustomComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i");
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2, "Tab 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoTabsCustomComponent = /** @class */ (function () {
    function DemoTabsCustomComponent() {
    }
    DemoTabsCustomComponent.ɵfac = function DemoTabsCustomComponent_Factory(t) { return new (t || DemoTabsCustomComponent)(); };
    DemoTabsCustomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsCustomComponent, selectors: [["demo-tabs-custom-template"]], decls: 10, vars: 0, consts: [["heading", "Static"], ["tabHeading", ""], [1, "badge", "badge-secondary"]], template: function DemoTabsCustomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "tabset");
            i0.ɵɵelementStart(2, "tab", 0);
            i0.ɵɵtext(3, " Tab 1 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "tab");
            i0.ɵɵtemplate(5, DemoTabsCustomComponent_ng_template_5_Template, 2, 0, "ng-template", 1);
            i0.ɵɵtext(6, " I've got an HTML heading. Pretty cool! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "tab");
            i0.ɵɵtemplate(8, DemoTabsCustomComponent_ng_template_8_Template, 3, 0, "ng-template", 1);
            i0.ɵɵtext(9, " Tab with html tags in heading ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TabsetComponent, i1.TabDirective, i1.TabHeadingDirective], encapsulation: 2 });
    return DemoTabsCustomComponent;
}());
exports.DemoTabsCustomComponent = DemoTabsCustomComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsCustomComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-custom-template',
                templateUrl: './custom-template.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "OEuy":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/manual-selection/manual-selection.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <p>You can select tabs directly from component</p>\r\n  <p>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"selectTab(1)\">Select second tab</button>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"selectTab(2)\">Select third tab</button>\r\n  </p>\r\n  <hr/>\r\n  <tabset #staticTabs>\r\n    <tab heading=\"Static title\">Static content</tab>\r\n    <tab heading=\"Static Title 1\">Static content 1</tab>\r\n    <tab heading=\"Static Title 2\">Static content 2</tab>\r\n    <tab heading=\"Static Title 3\">Static content 3</tab>\r\n  </tabset>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "OOAf":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/disabled/disabled.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'bao-tran-angular/tabs';\n\n@Component({\n  selector: 'demo-tabs-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoTabsDisabledComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  disableEnable() {\n    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;\n  }\n}\n");

/***/ }),

/***/ "RKu0":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/justified/justified.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabset [justified]=\"true\">\r\n  <tab heading=\"Justified\">Justified content</tab>\r\n  <tab heading=\"SJ\">Short Labeled Justified content</tab>\r\n  <tab heading=\"Long Justified\">Long Labeled Justified content</tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "RaAK":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/custom-template/custom-template.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-custom-template',\r\n  templateUrl: './custom-template.html'\r\n})\r\nexport class DemoTabsCustomComponent {}\r\n");

/***/ }),

/***/ "SCZi":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/config/config.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { TabsetConfig } from 'bao-tran-angular/tabs';\n\n// such override allows to keep some initial values\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });\n}\n\n@Component({\n  selector: 'demo-tabs-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoTabsConfigComponent {}\n");

/***/ }),

/***/ "Uzid":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/custom-template/custom-template.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <tabset>\r\n    <tab heading=\"Static\">\r\n      Tab 1\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading>\r\n        <span class=\"badge badge-secondary\">Heading</span>\r\n      </ng-template>\r\n      I've got an HTML heading. Pretty cool!\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading>\r\n        <i><b>Tab 3</b></i>\r\n      </ng-template>\r\n      Tab with html tags in heading\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n");

/***/ }),

/***/ "Zm1W":
/*!******************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var basic_1 = __webpack_require__(/*! ./basic/basic */ "Knr6");
var dynamic_1 = __webpack_require__(/*! ./dynamic/dynamic */ "JmFz");
var custom_class_1 = __webpack_require__(/*! ./custom-class/custom-class */ "zLg/");
var pills_1 = __webpack_require__(/*! ./pills/pills */ "8K8F");
var vertical_pills_1 = __webpack_require__(/*! ./vertical-pills/vertical-pills */ "JE5T");
var justified_1 = __webpack_require__(/*! ./justified/justified */ "/3Eu");
var config_1 = __webpack_require__(/*! ./config/config */ "fWSB");
var manual_selection_1 = __webpack_require__(/*! ./manual-selection/manual-selection */ "JiBl");
var disabled_1 = __webpack_require__(/*! ./disabled/disabled */ "dr6k");
var custom_template_1 = __webpack_require__(/*! ./custom-template/custom-template */ "N7sL");
var select_event_1 = __webpack_require__(/*! ./select-event/select-event */ "Fma8");
var accessibility_1 = __webpack_require__(/*! ./accessibility/accessibility */ "hJZT");
var dynamic_content_rendering_1 = __webpack_require__(/*! ./dynamic-content-rendering/dynamic-content-rendering */ "y6Bp");
var sub_component_1 = __webpack_require__(/*! ./dynamic-content-rendering/sub-component/sub-component */ "dKC5");
var disabled_key_navigations_1 = __webpack_require__(/*! ./disabled-key-navigations/disabled-key-navigations */ "p98P");
exports.DEMO_COMPONENTS = [
    basic_1.DemoTabsBasicComponent,
    manual_selection_1.DemoTabsManualSelectionComponent,
    disabled_1.DemoTabsDisabledComponent,
    dynamic_1.DemoTabsDynamicComponent,
    custom_class_1.DemoTabsCustomClassComponent,
    pills_1.DemoTabsPillsComponent,
    vertical_pills_1.DemoTabsVerticalPillsComponent,
    justified_1.DemoTabsJustifiedComponent,
    config_1.DemoTabsConfigComponent,
    custom_template_1.DemoTabsCustomComponent,
    select_event_1.DemoTabsSelectEventComponent,
    accessibility_1.DemoAccessibilityComponent,
    dynamic_content_rendering_1.DynamicContentRenderingComponent,
    sub_component_1.SubComponent,
    disabled_key_navigations_1.DemoDisabledKeyNavigationsComponent
];


/***/ }),

/***/ "afuA":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/justified/justified.ts ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-justified',\r\n  templateUrl: './justified.html'\r\n})\r\nexport class DemoTabsJustifiedComponent {}\r\n");

/***/ }),

/***/ "dKC5":
/*!******************************************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/dynamic-content-rendering/sub-component/sub-component.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SubComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var SubComponent = /** @class */ (function () {
    function SubComponent() {
        this.onInit = new core_1.EventEmitter();
        this.onDestroy = new core_1.EventEmitter();
    }
    SubComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            return _this.onInit.emit();
        });
    };
    SubComponent.prototype.ngOnDestroy = function () {
        this.onDestroy.emit();
    };
    SubComponent.ɵfac = function SubComponent_Factory(t) { return new (t || SubComponent)(); };
    SubComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SubComponent, selectors: [["sub-component"]], inputs: { name: "name" }, outputs: { onInit: "onInit", onDestroy: "onDestroy" }, decls: 2, vars: 1, template: function SubComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" Sub-Component ", ctx.name, "\n");
        } }, styles: ["p[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InN1Yi1jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
    return SubComponent;
}());
exports.SubComponent = SubComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SubComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'sub-component',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                templateUrl: './sub-component.html',
                styleUrls: ['./sub-component.css']
            }]
    }], null, { name: [{
            type: core_1.Input
        }], onInit: [{
            type: core_1.Output
        }], onDestroy: [{
            type: core_1.Output
        }] }); })();


/***/ }),

/***/ "dr6k":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/disabled/disabled.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsDisabledComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var tabs_1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var _c0 = ["staticTabs"];
var DemoTabsDisabledComponent = /** @class */ (function () {
    function DemoTabsDisabledComponent() {
    }
    DemoTabsDisabledComponent.prototype.disableEnable = function () {
        this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
    };
    DemoTabsDisabledComponent.ɵfac = function DemoTabsDisabledComponent_Factory(t) { return new (t || DemoTabsDisabledComponent)(); };
    DemoTabsDisabledComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsDisabledComponent, selectors: [["demo-tabs-disabled"]], viewQuery: function DemoTabsDisabledComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.staticTabs = _t.first);
        } }, decls: 20, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["staticTabs", ""], ["heading", "Static title"], ["heading", "Static Title 1"], ["heading", "Static Title 2"], ["heading", "Static Title 3"]], template: function DemoTabsDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Tabs can be enabled or disabled by changing ");
            i0.ɵɵelementStart(3, "code");
            i0.ɵɵtext(4, "disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, " input property");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵelementStart(7, "button", 0);
            i0.ɵɵlistener("click", function DemoTabsDisabledComponent_Template_button_click_7_listener() { return ctx.disableEnable(); });
            i0.ɵɵtext(8, " Enable / Disable third tab ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "hr");
            i0.ɵɵelementStart(10, "tabset", null, 1);
            i0.ɵɵelementStart(12, "tab", 2);
            i0.ɵɵtext(13, "Static content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "tab", 3);
            i0.ɵɵtext(15, "Static content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "tab", 4);
            i0.ɵɵtext(17, "Static content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "tab", 5);
            i0.ɵɵtext(19, "Static content 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoTabsDisabledComponent;
}());
exports.DemoTabsDisabledComponent = DemoTabsDisabledComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsDisabledComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-disabled',
                templateUrl: './disabled.html'
            }]
    }], null, { staticTabs: [{
            type: core_1.ViewChild,
            args: ['staticTabs', { static: false }]
        }] }); })();


/***/ }),

/***/ "fIrP":
/*!************************************************************!*\
  !*** ./demo/src/app/components/+tabs/tabs-section.list.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "Knr6");
var manual_selection_1 = __webpack_require__(/*! ./demos/manual-selection/manual-selection */ "JiBl");
var dynamic_1 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "JmFz");
var pills_1 = __webpack_require__(/*! ./demos/pills/pills */ "8K8F");
var vertical_pills_1 = __webpack_require__(/*! ./demos/vertical-pills/vertical-pills */ "JE5T");
var justified_1 = __webpack_require__(/*! ./demos/justified/justified */ "/3Eu");
var custom_class_1 = __webpack_require__(/*! ./demos/custom-class/custom-class */ "zLg/");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "fWSB");
var disabled_1 = __webpack_require__(/*! ./demos/disabled/disabled */ "dr6k");
var custom_template_1 = __webpack_require__(/*! ./demos/custom-template/custom-template */ "N7sL");
var select_event_1 = __webpack_require__(/*! ./demos/select-event/select-event */ "Fma8");
var accessibility_1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "hJZT");
var dynamic_content_rendering_1 = __webpack_require__(/*! ./demos/dynamic-content-rendering/dynamic-content-rendering */ "y6Bp");
var disabled_key_navigations_1 = __webpack_require__(/*! ./demos/disabled-key-navigations/disabled-key-navigations */ "p98P");
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
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "rNKZ")
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
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic */ "0aVI"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "6Ost"),
                outlet: basic_1.DemoTabsBasicComponent
            },
            {
                title: 'Manual selection',
                anchor: 'tabs-manual-select',
                component: __webpack_require__(/*! !raw-loader!./demos/manual-selection/manual-selection */ "79mg"),
                html: __webpack_require__(/*! !raw-loader!./demos/manual-selection/manual-selection.html */ "OEuy"),
                outlet: manual_selection_1.DemoTabsManualSelectionComponent
            },
            {
                title: 'Disabled tabs',
                anchor: 'disabled',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled */ "OOAf"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled.html */ "v/Cv"),
                outlet: disabled_1.DemoTabsDisabledComponent
            },
            {
                title: 'Dynamic tabs',
                anchor: 'tabs-dynamic',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic */ "JN29"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.html */ "94iu"),
                outlet: dynamic_1.DemoTabsDynamicComponent
            },
            {
                title: 'Pills',
                anchor: 'tabs-Pills',
                component: __webpack_require__(/*! !raw-loader!./demos/pills/pills */ "Medm"),
                html: __webpack_require__(/*! !raw-loader!./demos/pills/pills.html */ "8MTU"),
                outlet: pills_1.DemoTabsPillsComponent
            },
            {
                title: 'Vertical Pills',
                anchor: 'tabs-vertical-pills',
                component: __webpack_require__(/*! !raw-loader!./demos/vertical-pills/vertical-pills */ "CXga"),
                html: __webpack_require__(/*! !raw-loader!./demos/vertical-pills/vertical-pills.html */ "tXcc"),
                outlet: vertical_pills_1.DemoTabsVerticalPillsComponent
            },
            {
                title: 'Justified',
                anchor: 'tabs-justified',
                component: __webpack_require__(/*! !raw-loader!./demos/justified/justified */ "afuA"),
                html: __webpack_require__(/*! !raw-loader!./demos/justified/justified.html */ "RKu0"),
                description: '<p><i>Bootstrap 4 doesn\'t have justified classes</i></p>',
                outlet: justified_1.DemoTabsJustifiedComponent
            },
            {
                title: 'Custom class',
                anchor: 'tabs-custom-class',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-class/custom-class */ "sF0j"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-class/custom-class.html */ "krWe"),
                outlet: custom_class_1.DemoTabsCustomClassComponent
            },
            {
                title: 'Select event',
                anchor: 'select-event',
                component: __webpack_require__(/*! !raw-loader!./demos/select-event/select-event */ "CcHA"),
                html: __webpack_require__(/*! !raw-loader!./demos/select-event/select-event.html */ "56vY"),
                description: '<p>You can subscribe to tab\'s <code>select</code> event</p>',
                outlet: select_event_1.DemoTabsSelectEventComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'tabs-config-defaults',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config */ "SCZi"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "gAuF"),
                outlet: config_1.DemoTabsConfigComponent
            },
            {
                title: 'Custom template',
                anchor: 'tabs-custom-template',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-template/custom-template */ "RaAK"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-template/custom-template.html */ "Uzid"),
                outlet: custom_template_1.DemoTabsCustomComponent
            },
            {
                title: 'Dynamic content rendering',
                anchor: 'dynamic-content-rendering',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic-content-rendering/dynamic-content-rendering */ "+q+B"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic-content-rendering/dynamic-content-rendering.html */ "Do+o"),
                outlet: dynamic_content_rendering_1.DynamicContentRenderingComponent
            },
            {
                title: 'Accessibility',
                anchor: 'accessibility',
                outlet: accessibility_1.DemoAccessibilityComponent
            },
            {
                title: 'Disable key navigations',
                anchor: 'disable-key-navigations',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled-key-navigations/disabled-key-navigations */ "irbw"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled-key-navigations/disabled-key-navigations.html */ "++Cd"),
                outlet: disabled_key_navigations_1.DemoDisabledKeyNavigationsComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'TabsetComponent',
                anchor: 'tabset-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'TabDirective',
                anchor: 'tab-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'TabHeadingDirective',
                anchor: 'tab-heading-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'TabsetConfig',
                anchor: 'tabset-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "fWSB":
/*!**************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/config/config.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsConfigComponent = exports.getTabsetConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var tabs_1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
// such override allows to keep some initial values
function getTabsetConfig() {
    return Object.assign(new tabs_1.TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}
exports.getTabsetConfig = getTabsetConfig;
var DemoTabsConfigComponent = /** @class */ (function () {
    function DemoTabsConfigComponent() {
    }
    DemoTabsConfigComponent.ɵfac = function DemoTabsConfigComponent_Factory(t) { return new (t || DemoTabsConfigComponent)(); };
    DemoTabsConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsConfigComponent, selectors: [["demo-tabs-config"]], features: [i0.ɵɵProvidersFeature([{ provide: tabs_1.TabsetConfig, useFactory: getTabsetConfig }])], decls: 5, vars: 0, consts: [["heading", "Config 1"], ["heading", "Config 2"]], template: function DemoTabsConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tabset");
            i0.ɵɵelementStart(1, "tab", 0);
            i0.ɵɵtext(2, "Config content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "tab", 1);
            i0.ɵɵtext(4, "Config content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoTabsConfigComponent;
}());
exports.DemoTabsConfigComponent = DemoTabsConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-config',
                templateUrl: './config.html',
                providers: [{ provide: tabs_1.TabsetConfig, useFactory: getTabsetConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "gAuF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/config/config.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabset>\r\n  <tab heading=\"Config 1\">Config content 1</tab>\r\n  <tab heading=\"Config 2\">Config content 2</tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "hJZT":
/*!****************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/accessibility/accessibility.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccessibilityComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var DemoAccessibilityComponent = /** @class */ (function () {
    function DemoAccessibilityComponent() {
    }
    DemoAccessibilityComponent.ɵfac = function DemoAccessibilityComponent_Factory(t) { return new (t || DemoAccessibilityComponent)(); };
    DemoAccessibilityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccessibilityComponent, selectors: [["demo-accessibility"]], decls: 76, vars: 0, consts: [[1, "highlighter-rouge"], ["href", "https://www.w3.org/TR/wai-aria-practices/#tabpanel"], ["title", "Web Accessibility Initiative"], ["title", "Accessible Rich Internet Applications"], [1, "table", "table-bordered"], [1, "col-xs-3"], [1, "col-xs-9"]], template: function DemoAccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "Note that tabs can be given ");
            i0.ɵɵelementStart(2, "code", 0);
            i0.ɵɵtext(3, "role=\"tablist\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, ", ");
            i0.ɵɵelementStart(5, "code", 0);
            i0.ɵɵtext(6, "role=\"tab\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " and ");
            i0.ɵɵelementStart(8, "code", 0);
            i0.ɵɵtext(9, "role=\"tabpanel\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " attributes. These are appropriate for tabbed interfaces, as described in the ");
            i0.ɵɵelementStart(11, "a", 1);
            i0.ɵɵelementStart(12, "abbr", 2);
            i0.ɵɵtext(13, "WAI");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "abbr", 3);
            i0.ɵɵtext(15, "ARIA");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " Authoring Practices");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, ".");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵtext(19, "If your control element is targeting a single collapsible element - you should add the ");
            i0.ɵɵelementStart(20, "code");
            i0.ɵɵtext(21, "aria-controls");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(22, " attribute to the control element, containing the ");
            i0.ɵɵelementStart(23, "code");
            i0.ɵɵtext(24, "id");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " of the collapsible element.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "p");
            i0.ɵɵtext(27, "To confirm the tab content opening you should use ");
            i0.ɵɵelementStart(28, "code");
            i0.ɵɵtext(29, "aria-selected");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(30, " property. If ");
            i0.ɵɵelementStart(31, "code");
            i0.ɵɵtext(32, "aria-selected=\"true\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(33, " it indicates the tab control is activated and its associated panel is displayed.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "p");
            i0.ɵɵtext(35, "If you use a visible text element on the page as a label for a focusable element - you should add ");
            i0.ɵɵelementStart(36, "code");
            i0.ɵɵtext(37, "aria-labelledby");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(38, ". It refers to the tab element that controls the panel.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "h4");
            i0.ɵɵtext(40, "Keyboard interaction");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "table", 4);
            i0.ɵɵelementStart(42, "tbody");
            i0.ɵɵelementStart(43, "tr");
            i0.ɵɵelementStart(44, "td", 5);
            i0.ɵɵelementStart(45, "code");
            i0.ɵɵtext(46, " LEFT_ARROW ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "td", 6);
            i0.ɵɵtext(48, " Move focus to previous tab ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "tr");
            i0.ɵɵelementStart(50, "td", 5);
            i0.ɵɵelementStart(51, "code");
            i0.ɵɵtext(52, " RIGHT_ARROW ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "td", 6);
            i0.ɵɵtext(54, " Move focus to next tab ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "tr");
            i0.ɵɵelementStart(56, "td", 5);
            i0.ɵɵelementStart(57, "code");
            i0.ɵɵtext(58, " HOME ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "td", 6);
            i0.ɵɵtext(60, " Move focus to first tab ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "tr");
            i0.ɵɵelementStart(62, "td", 5);
            i0.ɵɵelementStart(63, "code");
            i0.ɵɵtext(64, " END ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "td", 6);
            i0.ɵɵtext(66, " Move focus to last tab ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "tr");
            i0.ɵɵelementStart(68, "td", 5);
            i0.ɵɵelementStart(69, "code");
            i0.ɵɵtext(70, "SPACE");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(71, " or ");
            i0.ɵɵelementStart(72, "code");
            i0.ɵɵtext(73, "ENTER");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "td", 6);
            i0.ɵɵtext(75, " Switch to focused tab ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
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
    }], null, null); })();


/***/ }),

/***/ "iTcO":
/*!***********************************************************!*\
  !*** ./demo/src/app/components/+tabs/demo-tabs.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var tabs_1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var tabs_section_component_1 = __webpack_require__(/*! ./tabs-section.component */ "Ad5P");
var demos_1 = __webpack_require__(/*! ./demos */ "Zm1W");
var demo_tabs_routes_1 = __webpack_require__(/*! ./demo-tabs.routes */ "5UwF");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/basic/basic */ "Knr6");
var i2 = __webpack_require__(/*! ./demos/manual-selection/manual-selection */ "JiBl");
var i3 = __webpack_require__(/*! ./demos/disabled/disabled */ "dr6k");
var i4 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "JmFz");
var i5 = __webpack_require__(/*! ./demos/custom-class/custom-class */ "zLg/");
var i6 = __webpack_require__(/*! ./demos/pills/pills */ "8K8F");
var i7 = __webpack_require__(/*! ./demos/vertical-pills/vertical-pills */ "JE5T");
var i8 = __webpack_require__(/*! ./demos/justified/justified */ "/3Eu");
var i9 = __webpack_require__(/*! ./demos/config/config */ "fWSB");
var i10 = __webpack_require__(/*! ./demos/custom-template/custom-template */ "N7sL");
var i11 = __webpack_require__(/*! ./demos/select-event/select-event */ "Fma8");
var i12 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "hJZT");
var i13 = __webpack_require__(/*! ./demos/dynamic-content-rendering/dynamic-content-rendering */ "y6Bp");
var i14 = __webpack_require__(/*! ./demos/dynamic-content-rendering/sub-component/sub-component */ "dKC5");
var i15 = __webpack_require__(/*! ./demos/disabled-key-navigations/disabled-key-navigations */ "p98P");
var i16 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var i17 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoTabsModule = /** @class */ (function () {
    function DemoTabsModule() {
    }
    DemoTabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoTabsModule });
    DemoTabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoTabsModule_Factory(t) { return new (t || DemoTabsModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                tabs_1.TabsModule.forRoot(),
                router_1.RouterModule.forChild(demo_tabs_routes_1.routes)
            ]] });
    return DemoTabsModule;
}());
exports.DemoTabsModule = DemoTabsModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoTabsModule, { declarations: [tabs_section_component_1.TabsSectionComponent, i1.DemoTabsBasicComponent, i2.DemoTabsManualSelectionComponent, i3.DemoTabsDisabledComponent, i4.DemoTabsDynamicComponent, i5.DemoTabsCustomClassComponent, i6.DemoTabsPillsComponent, i7.DemoTabsVerticalPillsComponent, i8.DemoTabsJustifiedComponent, i9.DemoTabsConfigComponent, i10.DemoTabsCustomComponent, i11.DemoTabsSelectEventComponent, i12.DemoAccessibilityComponent, i13.DynamicContentRenderingComponent, i14.SubComponent, i15.DemoDisabledKeyNavigationsComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i16.TabsModule, i17.RouterModule], exports: [tabs_section_component_1.TabsSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    tabs_section_component_1.TabsSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    tabs_1.TabsModule.forRoot(),
                    router_1.RouterModule.forChild(demo_tabs_routes_1.routes)
                ],
                exports: [tabs_section_component_1.TabsSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "irbw":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/disabled-key-navigations/disabled-key-navigations.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { TabsetConfig } from 'bao-tran-angular/tabs';\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'tabs', isKeysAllowed: false });\n}\n\n@Component({\n  selector: 'demo-disabled-key-navigations',\n  templateUrl: './disabled-key-navigations.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoDisabledKeyNavigationsComponent {\n}\n");

/***/ }),

/***/ "krWe":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/custom-class/custom-class.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabset>\r\n  <tab heading=\"Static title\" customClass=\"customClass\">Static content</tab>\r\n  <tab *ngFor=\"let tabz of tabs\"\r\n       [heading]=\"tabz.title\"\r\n       [customClass]=\"tabz.customClass\">\r\n    {{tabz?.content}}\r\n  </tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "p98P":
/*!**************************************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/disabled-key-navigations/disabled-key-navigations.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDisabledKeyNavigationsComponent = exports.getTabsetConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var tabs_1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
function getTabsetConfig() {
    return Object.assign(new tabs_1.TabsetConfig(), { type: 'tabs', isKeysAllowed: false });
}
exports.getTabsetConfig = getTabsetConfig;
var DemoDisabledKeyNavigationsComponent = /** @class */ (function () {
    function DemoDisabledKeyNavigationsComponent() {
    }
    DemoDisabledKeyNavigationsComponent.ɵfac = function DemoDisabledKeyNavigationsComponent_Factory(t) { return new (t || DemoDisabledKeyNavigationsComponent)(); };
    DemoDisabledKeyNavigationsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDisabledKeyNavigationsComponent, selectors: [["demo-disabled-key-navigations"]], features: [i0.ɵɵProvidersFeature([{ provide: tabs_1.TabsetConfig, useFactory: getTabsetConfig }])], decls: 5, vars: 0, consts: [["heading", "Tab1"], ["heading", "Tab2"]], template: function DemoDisabledKeyNavigationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tabset");
            i0.ɵɵelementStart(1, "tab", 0);
            i0.ɵɵtext(2, "Tab1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "tab", 1);
            i0.ɵɵtext(4, "Tab2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TabsetComponent, i1.TabDirective], encapsulation: 2 });
    return DemoDisabledKeyNavigationsComponent;
}());
exports.DemoDisabledKeyNavigationsComponent = DemoDisabledKeyNavigationsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDisabledKeyNavigationsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-disabled-key-navigations',
                templateUrl: './disabled-key-navigations.html',
                providers: [{ provide: tabs_1.TabsetConfig, useFactory: getTabsetConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "rNKZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/docs/usage.md ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { TabsModule } from 'bao-tran-angular/tabs';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { TabsModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [TabsModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "sF0j":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/custom-class/custom-class.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-custom-class',\r\n  templateUrl: './custom-class.html'\r\n})\r\nexport class DemoTabsCustomClassComponent {\r\n  tabs: any[] = [\r\n    {\r\n      title: 'Dynamic Title 1',\r\n      content: 'Dynamic content 1',\r\n      customClass: 'customClass'\r\n    },\r\n    {\r\n      title: 'Dynamic Title 2',\r\n      content: 'Dynamic content 2',\r\n      customClass: 'customClass'\r\n    }\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "tXcc":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/vertical-pills/vertical-pills.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tabset [vertical]=\"true\" type=\"pills\">\r\n  <tab heading=\"Vertical 1\">Vertical content 1</tab>\r\n  <tab heading=\"Vertical 2\">Vertical content 2</tab>\r\n</tabset>\r\n");

/***/ }),

/***/ "v/Cv":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tabs/demos/disabled/disabled.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <p>Tabs can be enabled or disabled by changing <code>disabled</code> input property</p>\r\n  <p>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"disableEnable()\">\r\n      Enable / Disable third tab\r\n    </button>\r\n  </p>\r\n  <hr/>\r\n  <tabset #staticTabs>\r\n    <tab heading=\"Static title\">Static content</tab>\r\n    <tab heading=\"Static Title 1\">Static content 1</tab>\r\n    <tab heading=\"Static Title 2\">Static content 2</tab>\r\n    <tab heading=\"Static Title 3\">Static content 3</tab>\r\n  </tabset>\r\n</div>\r\n");

/***/ }),

/***/ "y6Bp":
/*!****************************************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/dynamic-content-rendering/dynamic-content-rendering.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicContentRenderingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var i3 = __webpack_require__(/*! ./sub-component/sub-component */ "dKC5");
function DynamicContentRenderingComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r7);
} }
function DynamicContentRenderingComponent_sub_component_7_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "sub-component", 11);
    i0.ɵɵlistener("onInit", function DynamicContentRenderingComponent_sub_component_7_Template_sub_component_onInit_0_listener() { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.message("Sub-Component A activated"); })("onDestroy", function DynamicContentRenderingComponent_sub_component_7_Template_sub_component_onDestroy_0_listener() { i0.ɵɵrestoreView(_r9); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.message("Sub-Component A destroyed"); });
    i0.ɵɵelementEnd();
} }
function DynamicContentRenderingComponent_sub_component_10_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "sub-component", 12);
    i0.ɵɵlistener("onInit", function DynamicContentRenderingComponent_sub_component_10_Template_sub_component_onInit_0_listener() { i0.ɵɵrestoreView(_r12); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.message("Sub-Component B activated"); })("onDestroy", function DynamicContentRenderingComponent_sub_component_10_Template_sub_component_onDestroy_0_listener() { i0.ɵɵrestoreView(_r12); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.message("Sub-Component B destroyed"); });
    i0.ɵɵelementEnd();
} }
function DynamicContentRenderingComponent_sub_component_13_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "sub-component", 13);
    i0.ɵɵlistener("onInit", function DynamicContentRenderingComponent_sub_component_13_Template_sub_component_onInit_0_listener() { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.message("Sub-Component C activated"); })("onDestroy", function DynamicContentRenderingComponent_sub_component_13_Template_sub_component_onDestroy_0_listener() { i0.ɵɵrestoreView(_r15); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.message("Sub-Component C destroyed"); });
    i0.ɵɵelementEnd();
} }
var DynamicContentRenderingComponent = /** @class */ (function () {
    function DynamicContentRenderingComponent() {
        this.messages = [];
    }
    DynamicContentRenderingComponent.prototype.message = function (s) {
        this.messages.push(s);
    };
    DynamicContentRenderingComponent.ɵfac = function DynamicContentRenderingComponent_Factory(t) { return new (t || DynamicContentRenderingComponent)(); };
    DynamicContentRenderingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DynamicContentRenderingComponent, selectors: [["dynamic-content-rendering"]], decls: 14, vars: 4, consts: [[1, "eventlist"], [4, "ngFor", "ngForOf"], ["heading", "Tab A"], ["tabA", "tab"], ["name", "A", 3, "onInit", "onDestroy", 4, "ngIf"], ["heading", "Tab B"], ["tabB", "tab"], ["name", "B", 3, "onInit", "onDestroy", 4, "ngIf"], ["heading", "Tab C"], ["tabC", "tab"], ["name", "C", 3, "onInit", "onDestroy", 4, "ngIf"], ["name", "A", 3, "onInit", "onDestroy"], ["name", "B", 3, "onInit", "onDestroy"], ["name", "C", 3, "onInit", "onDestroy"]], template: function DynamicContentRenderingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "The Component inside the Tab is rendered, when the tab is activated and destroyed when the tab is left.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul", 0);
            i0.ɵɵtemplate(3, DynamicContentRenderingComponent_li_3_Template, 2, 1, "li", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "tabset");
            i0.ɵɵelementStart(5, "tab", 2, 3);
            i0.ɵɵtemplate(7, DynamicContentRenderingComponent_sub_component_7_Template, 1, 0, "sub-component", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "tab", 5, 6);
            i0.ɵɵtemplate(10, DynamicContentRenderingComponent_sub_component_10_Template, 1, 0, "sub-component", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "tab", 8, 9);
            i0.ɵɵtemplate(13, DynamicContentRenderingComponent_sub_component_13_Template, 1, 0, "sub-component", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(6);
            var _r3 = i0.ɵɵreference(9);
            var _r5 = i0.ɵɵreference(12);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.messages);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", _r1.active);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r3.active);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", _r5.active);
        } }, directives: [i1.NgForOf, i2.TabsetComponent, i2.TabDirective, i1.NgIf, i3.SubComponent], styles: [".eventlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-family: monospace;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtY29udGVudC1yZW5kZXJpbmcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImR5bmFtaWMtY29udGVudC1yZW5kZXJpbmcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50bGlzdCBsaSB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
    return DynamicContentRenderingComponent;
}());
exports.DynamicContentRenderingComponent = DynamicContentRenderingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DynamicContentRenderingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'dynamic-content-rendering',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                templateUrl: './dynamic-content-rendering.html',
                styleUrls: ['./dynamic-content-rendering.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "zLg/":
/*!**************************************************************************!*\
  !*** ./demo/src/app/components/+tabs/demos/custom-class/custom-class.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTabsCustomClassComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tabs */ "h0Vf");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTabsCustomClassComponent_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tab", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tabz_r1 = ctx.$implicit;
    i0.ɵɵproperty("heading", tabz_r1.title)("customClass", tabz_r1.customClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tabz_r1 == null ? null : tabz_r1.content, " ");
} }
var DemoTabsCustomClassComponent = /** @class */ (function () {
    function DemoTabsCustomClassComponent() {
        this.tabs = [
            {
                title: 'Dynamic Title 1',
                content: 'Dynamic content 1',
                customClass: 'customClass'
            },
            {
                title: 'Dynamic Title 2',
                content: 'Dynamic content 2',
                customClass: 'customClass'
            }
        ];
    }
    DemoTabsCustomClassComponent.ɵfac = function DemoTabsCustomClassComponent_Factory(t) { return new (t || DemoTabsCustomClassComponent)(); };
    DemoTabsCustomClassComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTabsCustomClassComponent, selectors: [["demo-tabs-custom-class"]], decls: 4, vars: 1, consts: [["heading", "Static title", "customClass", "customClass"], [3, "heading", "customClass", 4, "ngFor", "ngForOf"], [3, "heading", "customClass"]], template: function DemoTabsCustomClassComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tabset");
            i0.ɵɵelementStart(1, "tab", 0);
            i0.ɵɵtext(2, "Static content");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DemoTabsCustomClassComponent_tab_3_Template, 2, 3, "tab", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, directives: [i1.TabsetComponent, i1.TabDirective, i2.NgForOf], encapsulation: 2 });
    return DemoTabsCustomClassComponent;
}());
exports.DemoTabsCustomClassComponent = DemoTabsCustomClassComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTabsCustomClassComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tabs-custom-class',
                templateUrl: './custom-class.html'
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-tabs-demo-tabs-module.js.map