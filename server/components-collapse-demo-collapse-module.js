exports.ids = ["components-collapse-demo-collapse-module"];
exports.modules = {

/***/ "AgVC":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+collapse/collapse-section.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var collapse_section_list_1 = __webpack_require__(/*! ./collapse-section.list */ "Zils");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var CollapseSectionComponent = /** @class */ (function () {
    function CollapseSectionComponent() {
        this.name = 'Collapse';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/collapse';
        this.componentContent = collapse_section_list_1.demoComponentContent;
    }
    CollapseSectionComponent.ɵfac = function CollapseSectionComponent_Factory(t) { return new (t || CollapseSectionComponent)(); };
    CollapseSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CollapseSectionComponent, selectors: [["collapse-section"]], decls: 10, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function CollapseSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes. Flexible component that utilizes a handful of classes (from the ");
            i0.ɵɵelementStart(3, "strong");
            i0.ɵɵtext(4, "required transitions component");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, "(");
            i0.ɵɵelementStart(6, "em");
            i0.ɵɵtext(7, "not yet implemented");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, ")) for easy toggle behavior.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return CollapseSectionComponent;
}());
exports.CollapseSectionComponent = CollapseSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CollapseSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'collapse-section',
                templateUrl: './collapse-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "AoSH":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/docs/usage.md ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\n// RECOMMENDED\nimport { CollapseModule } from 'bao-tran-angular/collapse';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { CollapseModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [\n    BrowserAnimationsModule,\n    CollapseModule.forRoot(),\n    ...\n  ]\n})\nexport class AppModule(){}\n\nAlso should be added web-animations-js polyfill for IE browser (Edge)\n");

/***/ }),

/***/ "CCq8":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demos/accessibility/accessibility.ts ***!
  \********************************************************************************/
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
    DemoAccessibilityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccessibilityComponent, selectors: [["demo-accessibility"]], decls: 37, vars: 0, consts: [[1, "highlighter-rouge"]], template: function DemoAccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "Be sure to add ");
            i0.ɵɵelementStart(2, "code", 0);
            i0.ɵɵtext(3, "aria-expanded");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, " to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of ");
            i0.ɵɵelementStart(5, "code", 0);
            i0.ɵɵtext(6, "aria-expanded=\"false\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, ". If you\u2019ve set the collapsible element to be open by default using the ");
            i0.ɵɵelementStart(8, "code", 0);
            i0.ɵɵtext(9, "show");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " class, set ");
            i0.ɵɵelementStart(11, "code", 0);
            i0.ɵɵtext(12, "aria-expanded=\"true\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed. If the control element\u2019s HTML element is not a button (e.g., an ");
            i0.ɵɵelementStart(14, "code", 0);
            i0.ɵɵtext(15, "<a>");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " or ");
            i0.ɵɵelementStart(17, "code", 0);
            i0.ɵɵtext(18, "<div>");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, "), the attribute ");
            i0.ɵɵelementStart(20, "code", 0);
            i0.ɵɵtext(21, "role=\"button\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(22, " should be added to the element.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "p");
            i0.ɵɵtext(24, "If your control element is targeting a single collapsible element \u2013 i.e. the ");
            i0.ɵɵelementStart(25, "code", 0);
            i0.ɵɵtext(26, "data-target");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(27, " attribute is pointing to an ");
            i0.ɵɵelementStart(28, "code", 0);
            i0.ɵɵtext(29, "id");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(30, " selector \u2013 you should add the ");
            i0.ɵɵelementStart(31, "code", 0);
            i0.ɵɵtext(32, "aria-controls");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(33, " attribute to the control element, containing the ");
            i0.ɵɵelementStart(34, "code", 0);
            i0.ɵɵtext(35, "id");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(36, " of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.");
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

/***/ "CjxA":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demos/events/events.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseDemoEventsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");
var CollapseDemoEventsComponent = /** @class */ (function () {
    function CollapseDemoEventsComponent() {
        this.isCollapsed = false;
        this.message = 'expanded';
    }
    CollapseDemoEventsComponent.prototype.collapsed = function () {
        this.message = 'collapsed';
    };
    CollapseDemoEventsComponent.prototype.collapses = function () {
        this.message = 'collapses';
    };
    CollapseDemoEventsComponent.prototype.expanded = function () {
        this.message = 'expanded';
    };
    CollapseDemoEventsComponent.prototype.expands = function () {
        this.message = 'expands';
    };
    CollapseDemoEventsComponent.ɵfac = function CollapseDemoEventsComponent_Factory(t) { return new (t || CollapseDemoEventsComponent)(); };
    CollapseDemoEventsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CollapseDemoEventsComponent, selectors: [["collapse-demo-events"]], decls: 11, vars: 4, consts: [[1, "row"], [1, "col-md-3"], ["type", "button", "aria-controls", "collapseEvent", 1, "btn", "btn-primary", 3, "click"], [1, "col-md-9"], [1, "card", "card-block", "card-header"], ["id", "collapseEvent", 3, "isAnimated", "collapse", "collapses", "expands", "collapsed", "expanded"], [1, "well", "well-lg", "card", "card-block", "card-header"]], template: function CollapseDemoEventsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵlistener("click", function CollapseDemoEventsComponent_Template_button_click_2_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵtext(3, "Toggle collapse ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "pre", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "hr");
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵlistener("collapses", function CollapseDemoEventsComponent_Template_div_collapses_8_listener() { return ctx.collapses(); })("expands", function CollapseDemoEventsComponent_Template_div_expands_8_listener() { return ctx.expands(); })("collapsed", function CollapseDemoEventsComponent_Template_div_collapsed_8_listener() { return ctx.collapsed(); })("expanded", function CollapseDemoEventsComponent_Template_div_expanded_8_listener() { return ctx.expanded(); });
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵtext(10, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Event: ", ctx.message, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("isAnimated", true)("collapse", ctx.isCollapsed);
        } }, directives: [i1.CollapseDirective], encapsulation: 2 });
    return CollapseDemoEventsComponent;
}());
exports.CollapseDemoEventsComponent = CollapseDemoEventsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CollapseDemoEventsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'collapse-demo-events',
                templateUrl: './events.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "JRlg":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/animated/animated.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'collapse-demo-animation',\r\n  templateUrl: './animated.html'\r\n})\r\nexport class CollapseDemoAnimatedComponent {\r\n  isCollapsed = false;\r\n}\r\n");

/***/ }),

/***/ "NkiL":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demos/animated/animated.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseDemoAnimatedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");
var CollapseDemoAnimatedComponent = /** @class */ (function () {
    function CollapseDemoAnimatedComponent() {
        this.isCollapsed = false;
    }
    CollapseDemoAnimatedComponent.ɵfac = function CollapseDemoAnimatedComponent_Factory(t) { return new (t || CollapseDemoAnimatedComponent)(); };
    CollapseDemoAnimatedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CollapseDemoAnimatedComponent, selectors: [["collapse-demo-animation"]], decls: 6, vars: 3, consts: [["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseBasic", 3, "collapse", "isAnimated"], [1, "well", "well-lg", "card", "card-block", "card-header"]], template: function CollapseDemoAnimatedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CollapseDemoAnimatedComponent_Template_button_click_0_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵtext(1, "Toggle collapse\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "hr");
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵtext(5, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("collapse", ctx.isCollapsed)("isAnimated", true);
        } }, directives: [i1.CollapseDirective], encapsulation: 2 });
    return CollapseDemoAnimatedComponent;
}());
exports.CollapseDemoAnimatedComponent = CollapseDemoAnimatedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CollapseDemoAnimatedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'collapse-demo-animation',
                templateUrl: './animated.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "QYz2":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/inline-display/inline-display.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-success\" (click)=\"collapse.display='inline-block'\"\r\n        aria-controls=\"collapseBasic\">Inline-block\r\n</button>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"collapse.display='none'\"\r\n        aria-controls=\"collapseBasic\">None\r\n</button>\r\n<hr>\r\n<div id=\"collapseBasic\" [collapse]=\"!isCollapsed\" #collapse=\"bs-collapse\">\r\n  <div class=\"well well-lg card card-block card-header\">Some content</div>\r\n</div>\r\n");

/***/ }),

/***/ "SAxs":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demos/inline-display/inline-display.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineDisplayDemoComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");
var InlineDisplayDemoComponent = /** @class */ (function () {
    function InlineDisplayDemoComponent() {
        this.isCollapsed = false;
    }
    InlineDisplayDemoComponent.ɵfac = function InlineDisplayDemoComponent_Factory(t) { return new (t || InlineDisplayDemoComponent)(); };
    InlineDisplayDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InlineDisplayDemoComponent, selectors: [["inline-display-demo"]], decls: 9, vars: 1, consts: [["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-success", 3, "click"], ["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseBasic", 3, "collapse"], ["collapse", "bs-collapse"], [1, "well", "well-lg", "card", "card-block", "card-header"]], template: function InlineDisplayDemoComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function InlineDisplayDemoComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(6); return _r0.display = "inline-block"; });
            i0.ɵɵtext(1, "Inline-block\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function InlineDisplayDemoComponent_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(6); return _r0.display = "none"; });
            i0.ɵɵtext(3, "None\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "hr");
            i0.ɵɵelementStart(5, "div", 2, 3);
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵtext(8, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("collapse", !ctx.isCollapsed);
        } }, directives: [i1.CollapseDirective], encapsulation: 2 });
    return InlineDisplayDemoComponent;
}());
exports.InlineDisplayDemoComponent = InlineDisplayDemoComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InlineDisplayDemoComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'inline-display-demo',
                templateUrl: './inline-display.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "TLio":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demos/basic/basic.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseDemoComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");
var CollapseDemoComponent = /** @class */ (function () {
    function CollapseDemoComponent() {
        this.isCollapsed = false;
    }
    CollapseDemoComponent.ɵfac = function CollapseDemoComponent_Factory(t) { return new (t || CollapseDemoComponent)(); };
    CollapseDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CollapseDemoComponent, selectors: [["collapse-demo"]], decls: 6, vars: 2, consts: [["type", "button", "aria-controls", "collapseBasic", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseBasic", 3, "collapse"], [1, "well", "well-lg", "card", "card-block", "card-header"]], template: function CollapseDemoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CollapseDemoComponent_Template_button_click_0_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵtext(1, "Toggle collapse\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "hr");
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵtext(5, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵattribute("aria-expanded", !ctx.isCollapsed);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("collapse", ctx.isCollapsed);
        } }, directives: [i1.CollapseDirective], encapsulation: 2 });
    return CollapseDemoComponent;
}());
exports.CollapseDemoComponent = CollapseDemoComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CollapseDemoComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'collapse-demo',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "WonO":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demos/toggle-manual/toggle-manual.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleManualDemoComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");
var ToggleManualDemoComponent = /** @class */ (function () {
    function ToggleManualDemoComponent() {
        this.isOpen = false;
    }
    ToggleManualDemoComponent.ɵfac = function ToggleManualDemoComponent_Factory(t) { return new (t || ToggleManualDemoComponent)(); };
    ToggleManualDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToggleManualDemoComponent, selectors: [["toggle-manual-demo"]], decls: 9, vars: 1, consts: [["type", "button", "aria-controls", "collapseManual", 1, "btn", "btn-primary", 3, "click"], ["id", "collapseManual", 3, "collapse"], ["collapse", "bs-collapse"], [1, "well", "well-lg", "card", "card-block", "card-header"]], template: function ToggleManualDemoComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ToggleManualDemoComponent_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(6); return _r0.show(); });
            i0.ɵɵtext(1, "Show content\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function ToggleManualDemoComponent_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(6); return _r0.hide(); });
            i0.ɵɵtext(3, "Hide content\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "hr");
            i0.ɵɵelementStart(5, "div", 1, 2);
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵtext(8, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("collapse", ctx.isOpen);
        } }, directives: [i1.CollapseDirective], encapsulation: 2 });
    return ToggleManualDemoComponent;
}());
exports.ToggleManualDemoComponent = ToggleManualDemoComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToggleManualDemoComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'toggle-manual-demo',
                templateUrl: './toggle-manual.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Zils":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+collapse/collapse-section.list.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var animated_1 = __webpack_require__(/*! ./demos/animated/animated */ "NkiL");
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "TLio");
var events_1 = __webpack_require__(/*! ./demos/events/events */ "CjxA");
var accessibility_1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "CCq8");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var inline_display_1 = __webpack_require__(/*! ./demos/inline-display/inline-display */ "SAxs");
var toggle_manual_1 = __webpack_require__(/*! ./demos/toggle-manual/toggle-manual */ "WonO");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_2.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "AoSH")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: index_3.ExamplesComponent,
        content: [
            {
                title: 'Basic',
                anchor: 'basic',
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic */ "cmws"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "eBiv"),
                outlet: basic_1.CollapseDemoComponent
            },
            {
                title: 'With animation',
                anchor: 'animated',
                component: __webpack_require__(/*! !raw-loader!./demos/animated/animated */ "JRlg"),
                html: __webpack_require__(/*! !raw-loader!./demos/animated/animated.html */ "ga9V"),
                description: "You can enable animation via <code>isAnimated</code> input option",
                outlet: animated_1.CollapseDemoAnimatedComponent
            },
            {
                title: 'Events',
                anchor: 'events',
                component: __webpack_require__(/*! !raw-loader!./demos/events/events */ "b2Mr"),
                html: __webpack_require__(/*! !raw-loader!./demos/events/events.html */ "uMYu"),
                description: "Collapse directive exposes 4 events: <code>collapses</code>, that fires when a collapse was triggered (animation start),\n                        <code>collapsed</code>, that fires when a content was hidden (animation finished),\n                        <code>expands</code>, that fires when a expansion was triggered (animation start)\n                      and <code>expanded</code>, that fires when a content was shown",
                outlet: events_1.CollapseDemoEventsComponent
            },
            {
                title: 'Manual toggle',
                anchor: 'manual-toggle',
                component: __webpack_require__(/*! !raw-loader!./demos/toggle-manual/toggle-manual */ "tR5V"),
                html: __webpack_require__(/*! !raw-loader!./demos/toggle-manual/toggle-manual.html */ "yuzj"),
                outlet: toggle_manual_1.ToggleManualDemoComponent
            },
            {
                title: 'Inline display',
                anchor: 'inline-display',
                component: __webpack_require__(/*! !raw-loader!./demos/inline-display/inline-display */ "p7X7"),
                html: __webpack_require__(/*! !raw-loader!./demos/inline-display/inline-display.html */ "QYz2"),
                outlet: inline_display_1.InlineDisplayDemoComponent
            },
            {
                title: 'Accessibility',
                anchor: 'accessibility',
                outlet: accessibility_1.DemoAccessibilityComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_1.ApiSectionsComponent,
        content: [
            {
                title: 'CollapseDirective',
                anchor: 'collapse-directive',
                outlet: api_docs_1.NgApiDocComponent
            }
        ]
    }
];


/***/ }),

/***/ "b2Mr":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/events/events.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'collapse-demo-events',\r\n  templateUrl: './events.html'\r\n})\r\nexport class CollapseDemoEventsComponent {\r\n  isCollapsed = false;\r\n  message: string = 'expanded';\r\n\r\n  collapsed(): void {\r\n    this.message = 'collapsed';\r\n  }\r\n\r\n  collapses(): void {\r\n    this.message = 'collapses';\r\n  }\r\n\r\n  expanded(): void {\r\n    this.message = 'expanded';\r\n  }\r\n\r\n  expands(): void {\r\n    this.message = 'expands';\r\n  }\r\n}\r\n");

/***/ }),

/***/ "cmws":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/basic/basic.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'collapse-demo',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class CollapseDemoComponent {\r\n  isCollapsed = false;\r\n}\r\n");

/***/ }),

/***/ "eBiv":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/basic/basic.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n        [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">Toggle collapse\r\n</button>\r\n<hr>\r\n<div id=\"collapseBasic\" [collapse]=\"isCollapsed\">\r\n  <div class=\"well well-lg card card-block card-header\">Some content</div>\r\n</div>\r\n");

/***/ }),

/***/ "f9MD":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demo-collapse.routes.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var collapse_section_component_1 = __webpack_require__(/*! ./collapse-section.component */ "AgVC");
exports.routes = [{ path: '', component: collapse_section_component_1.CollapseSectionComponent }];


/***/ }),

/***/ "fFoH":
/*!**********************************************************!*\
  !*** ./demo/src/app/components/+collapse/demos/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var animated_1 = __webpack_require__(/*! ./animated/animated */ "NkiL");
var basic_1 = __webpack_require__(/*! ./basic/basic */ "TLio");
var events_1 = __webpack_require__(/*! ./events/events */ "CjxA");
var accessibility_1 = __webpack_require__(/*! ./accessibility/accessibility */ "CCq8");
var inline_display_1 = __webpack_require__(/*! ./inline-display/inline-display */ "SAxs");
var toggle_manual_1 = __webpack_require__(/*! ./toggle-manual/toggle-manual */ "WonO");
exports.DEMO_COMPONENTS = [
    animated_1.CollapseDemoAnimatedComponent,
    basic_1.CollapseDemoComponent,
    events_1.CollapseDemoEventsComponent,
    accessibility_1.DemoAccessibilityComponent,
    inline_display_1.InlineDisplayDemoComponent,
    toggle_manual_1.ToggleManualDemoComponent
];


/***/ }),

/***/ "ga9V":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/animated/animated.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n        [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\">Toggle collapse\r\n</button>\r\n<hr>\r\n<div id=\"collapseBasic\" [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\r\n  <div class=\"well well-lg card card-block card-header\">Some content</div>\r\n</div>\r\n");

/***/ }),

/***/ "p7X7":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/inline-display/inline-display.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'inline-display-demo',\r\n  templateUrl: './inline-display.html'\r\n})\r\nexport class InlineDisplayDemoComponent {\r\n  isCollapsed = false;\r\n}\r\n");

/***/ }),

/***/ "tR5V":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/toggle-manual/toggle-manual.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'toggle-manual-demo',\r\n  templateUrl: './toggle-manual.html'\r\n})\r\nexport class ToggleManualDemoComponent {\r\n  isOpen = false;\r\n}\r\n");

/***/ }),

/***/ "uMYu":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/events/events.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n            [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseEvent\">Toggle collapse\r\n    </button>\r\n  </div>\r\n  <div class=\"col-md-9\">\r\n    <pre class=\"card card-block card-header\">Event: {{message}}</pre>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div id=\"collapseEvent\"\r\n     [isAnimated]=\"true\"\r\n     [collapse]=\"isCollapsed\"\r\n     (collapses)=\"collapses()\"\r\n     (expands)=\"expands()\"\r\n     (collapsed)=\"collapsed()\"\r\n     (expanded)=\"expanded()\">\r\n\r\n  <div class=\"well well-lg card card-block card-header\">Some content</div>\r\n</div>\r\n");

/***/ }),

/***/ "yuJs":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+collapse/demo-collapse.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCollapseModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var collapse_1 = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var collapse_section_component_1 = __webpack_require__(/*! ./collapse-section.component */ "AgVC");
var demos_1 = __webpack_require__(/*! ./demos */ "fFoH");
var demo_collapse_routes_1 = __webpack_require__(/*! ./demo-collapse.routes */ "f9MD");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/animated/animated */ "NkiL");
var i2 = __webpack_require__(/*! ./demos/basic/basic */ "TLio");
var i3 = __webpack_require__(/*! ./demos/events/events */ "CjxA");
var i4 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "CCq8");
var i5 = __webpack_require__(/*! ./demos/inline-display/inline-display */ "SAxs");
var i6 = __webpack_require__(/*! ./demos/toggle-manual/toggle-manual */ "WonO");
var i7 = __webpack_require__(/*! bao-tran-angular/collapse */ "yZEd");
var i8 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoCollapseModule = /** @class */ (function () {
    function DemoCollapseModule() {
    }
    DemoCollapseModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoCollapseModule });
    DemoCollapseModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoCollapseModule_Factory(t) { return new (t || DemoCollapseModule)(); }, imports: [[
                collapse_1.CollapseModule.forRoot(),
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_collapse_routes_1.routes)
            ]] });
    return DemoCollapseModule;
}());
exports.DemoCollapseModule = DemoCollapseModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoCollapseModule, { declarations: [collapse_section_component_1.CollapseSectionComponent, i1.CollapseDemoAnimatedComponent, i2.CollapseDemoComponent, i3.CollapseDemoEventsComponent, i4.DemoAccessibilityComponent, i5.InlineDisplayDemoComponent, i6.ToggleManualDemoComponent], imports: [i7.CollapseModule, common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i8.RouterModule], exports: [collapse_section_component_1.CollapseSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCollapseModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    collapse_section_component_1.CollapseSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    collapse_1.CollapseModule.forRoot(),
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_collapse_routes_1.routes)
                ],
                exports: [collapse_section_component_1.CollapseSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "yuzj":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+collapse/demos/toggle-manual/toggle-manual.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" (click)=\"collapse.show()\"\r\n        aria-controls=\"collapseManual\">Show content\r\n</button>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"collapse.hide()\"\r\n        aria-controls=\"collapseManual\">Hide content\r\n</button>\r\n<hr>\r\n<div id=\"collapseManual\" #collapse=\"bs-collapse\" [collapse]=\"isOpen\">\r\n  <div class=\"well well-lg card card-block card-header\">Some content</div>\r\n</div>\r\n");

/***/ })

};;
//# sourceMappingURL=components-collapse-demo-collapse-module.js.map