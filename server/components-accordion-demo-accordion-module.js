exports.ids = ["components-accordion-demo-accordion-module"];
exports.modules = {

/***/ "/4kt":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/basic/basic.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion>\r\n  <accordion-group heading=\"Static Header\">\r\n    This content is straight in the template.\r\n  </accordion-group>\r\n  <accordion-group heading=\"Another group\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Another group\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Another group\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "/IYN":
/*!***************************************************************************!*\
  !*** ./demo/src/app/components/+accordion/accordion-section.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionSectionComponent = void 0;
// todo: add more samples https://jqueryui.com/accordion/#default
// todo: add more samples https://getbootstrap.com/docs/3.3/components/#panels-alternatives
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var accordion_section_list_1 = __webpack_require__(/*! ./accordion-section.list */ "ANbR");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
// webpack html imports
var AccordionSectionComponent = /** @class */ (function () {
    function AccordionSectionComponent() {
        this.name = 'Accordion';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/accordion';
        this.componentContent = accordion_section_list_1.demoComponentContent;
    }
    AccordionSectionComponent.ɵfac = function AccordionSectionComponent_Factory(t) { return new (t || AccordionSectionComponent)(); };
    AccordionSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccordionSectionComponent, selectors: [["accordion-section"]], decls: 11, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function AccordionSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Displays collapsible content panels for presenting information in a limited amount of space");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "The ");
            i0.ɵɵelementStart(5, "strong");
            i0.ɵɵtext(6, "accordion component");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " builds on top of the collapse directive to provide a list of items, with collapsible bodies that are collapsed or expanded by clicking on the item's header.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "The easiest way to add an accordion component to your app (will be added to the root module)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return AccordionSectionComponent;
}());
exports.AccordionSectionComponent = AccordionSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccordionSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'accordion-section',
                templateUrl: './accordion-section.components.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "062P":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/one-at-a-time/one-at-a-time.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-one-time',\r\n  templateUrl: './one-at-a-time.html'\r\n})\r\nexport class DemoAccordionOneAtATimeComponent {\r\n  oneAtATime: boolean = true;\r\n}\r\n");

/***/ }),

/***/ "5PbX":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/animated/animated.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionAnimatedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionAnimatedComponent = /** @class */ (function () {
    function DemoAccordionAnimatedComponent() {
    }
    DemoAccordionAnimatedComponent.ɵfac = function DemoAccordionAnimatedComponent_Factory(t) { return new (t || DemoAccordionAnimatedComponent)(); };
    DemoAccordionAnimatedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionAnimatedComponent, selectors: [["demo-accordion-animation"]], decls: 12, vars: 1, consts: [[3, "isAnimated"], ["heading", "Static Header"], ["heading", "Another group"]], template: function DemoAccordionAnimatedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion", 0);
            i0.ɵɵelementStart(1, "accordion-group", 1);
            i0.ɵɵtext(2, " This content is straight in the template. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "accordion-group", 2);
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "accordion-group", 2);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "accordion-group", 2);
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("isAnimated", true);
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionAnimatedComponent;
}());
exports.DemoAccordionAnimatedComponent = DemoAccordionAnimatedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionAnimatedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-animation',
                templateUrl: './animated.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "8OKN":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/manual-toggle/manual-toggle.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionManualToggleComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionManualToggleComponent = /** @class */ (function () {
    function DemoAccordionManualToggleComponent() {
        this.isOpen = true;
    }
    DemoAccordionManualToggleComponent.ɵfac = function DemoAccordionManualToggleComponent_Factory(t) { return new (t || DemoAccordionManualToggleComponent)(); };
    DemoAccordionManualToggleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionManualToggleComponent, selectors: [["demo-accordion-manual-toggle"]], decls: 13, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["heading", "Content 1"], ["heading", "Content 2"], ["heading", "Last panel", 3, "isOpen"]], template: function DemoAccordionManualToggleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "button", 0);
            i0.ɵɵlistener("click", function DemoAccordionManualToggleComponent_Template_button_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
            i0.ɵɵtext(2, "Toggle last panel ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "accordion");
            i0.ɵɵelementStart(4, "accordion-group", 1);
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "accordion 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "accordion-group", 2);
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "accordion 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "accordion-group", 3);
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "accordion 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("isOpen", ctx.isOpen);
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionManualToggleComponent;
}());
exports.DemoAccordionManualToggleComponent = DemoAccordionManualToggleComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionManualToggleComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-manual-toggle',
                templateUrl: './manual-toggle.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "9pQW":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/config/config.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion [isAnimated]=\"true\">\r\n  <accordion-group heading=\"Header\">\r\n    This content is straight in the template.\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 1\">\r\n    <p>Content 1</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 2\">\r\n    <p>Content 2</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "ANbR":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+accordion/accordion-section.list.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var animated_1 = __webpack_require__(/*! ./demos/animated/animated */ "5PbX");
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "j7ld");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "Tj3J");
var custom_html_1 = __webpack_require__(/*! ./demos/custom-html/custom-html */ "xCsX");
var disabled_1 = __webpack_require__(/*! ./demos/disabled/disabled */ "BTeT");
var dynamic_1 = __webpack_require__(/*! ./demos/dymanic/dynamic */ "ng6I");
var manual_toggle_1 = __webpack_require__(/*! ./demos/manual-toggle/manual-toggle */ "8OKN");
var one_at_a_time_1 = __webpack_require__(/*! ./demos/one-at-a-time/one-at-a-time */ "ygn2");
var open_event_1 = __webpack_require__(/*! ./demos/open-event/open-event */ "oFJ2");
var styling_1 = __webpack_require__(/*! ./demos/styling/styling */ "QXdJ");
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var opened_1 = __webpack_require__(/*! ./demos/opened/opened */ "sJbm");
var dynamic_body_1 = __webpack_require__(/*! ./demos/dynamic-body/dynamic-body */ "gT8e");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "Lzvr")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: index_2.ExamplesComponent,
        content: [
            {
                title: 'Basic',
                anchor: 'basic-accordion',
                description: "<p>Click headers to expand/collapse content that is broken into logical sections, much\n          like tabs.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic */ "IsoO"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "/4kt"),
                outlet: basic_1.DemoAccordionBasicComponent
            },
            {
                title: 'With animation',
                anchor: 'animated-accordion',
                description: "<p>Use input property or config property <code>isAnimated</code> to enable/disable animation</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/animated/animated */ "looP"),
                html: __webpack_require__(/*! !raw-loader!./demos/animated/animated.html */ "gb9x"),
                outlet: animated_1.DemoAccordionAnimatedComponent
            },
            {
                title: 'Group opening event',
                anchor: 'open-event',
                description: "<p>Accordion with <code>isOpenChange</code> event listener.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/open-event/open-event */ "aOTR"),
                html: __webpack_require__(/*! !raw-loader!./demos/open-event/open-event.html */ "YGAY"),
                outlet: open_event_1.DemoAccordionOpenEventComponent
            },
            {
                title: 'Custom HTML',
                anchor: 'custom-html',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-html/custom-html */ "jAFX"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-html/custom-html.html */ "ukXm"),
                outlet: custom_html_1.DemoAccordionCustomHTMLComponent
            },
            {
                title: 'Disabled',
                anchor: 'disabled',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled */ "sr3Z"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled.html */ "w1AO"),
                outlet: disabled_1.DemoAccordionDisabledComponent
            },
            {
                title: 'Initially opened',
                anchor: 'opened',
                component: __webpack_require__(/*! !raw-loader!./demos/opened/opened */ "DPvs"),
                html: __webpack_require__(/*! !raw-loader!./demos/opened/opened.html */ "GMzA"),
                outlet: opened_1.DemoAccordionOpenedComponent
            },
            {
                title: 'Dynamic accordion',
                anchor: 'dynamic-accordion',
                component: __webpack_require__(/*! !raw-loader!./demos/dymanic/dynamic */ "T+Hm"),
                html: __webpack_require__(/*! !raw-loader!./demos/dymanic/dynamic.html */ "rl/y"),
                outlet: dynamic_1.DemoAccordionDynamicComponent
            },
            {
                title: 'Dynamic body content',
                anchor: 'dynamic-body',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic-body/dynamic-body */ "I8Dl"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic-body/dynamic-body.html */ "unFA"),
                outlet: dynamic_body_1.DemoAccordionDynamicBodyComponent
            },
            {
                title: 'Manual toggle',
                anchor: 'manual-toggle',
                component: __webpack_require__(/*! !raw-loader!./demos/manual-toggle/manual-toggle */ "JgeH"),
                html: __webpack_require__(/*! !raw-loader!./demos/manual-toggle/manual-toggle.html */ "FwuH"),
                outlet: manual_toggle_1.DemoAccordionManualToggleComponent
            },
            {
                title: 'Open only one at a time',
                anchor: 'one-time',
                component: __webpack_require__(/*! !raw-loader!./demos/one-at-a-time/one-at-a-time */ "062P"),
                html: __webpack_require__(/*! !raw-loader!./demos/one-at-a-time/one-at-a-time.html */ "rvMl"),
                outlet: one_at_a_time_1.DemoAccordionOneAtATimeComponent
            },
            {
                title: 'Styling',
                anchor: 'styling',
                component: __webpack_require__(/*! !raw-loader!./demos/styling/styling */ "mIdF"),
                html: __webpack_require__(/*! !raw-loader!./demos/styling/styling.html */ "ReWA"),
                outlet: styling_1.DemoAccordionStylingComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'config',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config */ "M8GV"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "9pQW"),
                outlet: config_1.DemoAccordionConfigComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'AccordionComponent',
                anchor: 'AccordionComponent',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'AccordionPanelComponent',
                anchor: 'AccordionPanelComponent',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'AccordionConfig',
                anchor: 'AccordionConfig',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "BTeT":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/disabled/disabled.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionDisabledComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionDisabledComponent = /** @class */ (function () {
    function DemoAccordionDisabledComponent() {
        this.isFirstDisabled = false;
    }
    DemoAccordionDisabledComponent.ɵfac = function DemoAccordionDisabledComponent_Factory(t) { return new (t || DemoAccordionDisabledComponent)(); };
    DemoAccordionDisabledComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionDisabledComponent, selectors: [["demo-accordion-disabled"]], decls: 12, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["heading", "Static Header", 3, "isDisabled"], ["heading", "Content 1"], ["heading", "Content 2"]], template: function DemoAccordionDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "button", 0);
            i0.ɵɵlistener("click", function DemoAccordionDisabledComponent_Template_button_click_1_listener() { return ctx.isFirstDisabled = !ctx.isFirstDisabled; });
            i0.ɵɵtext(2, " Enable / Disable first panel ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "accordion");
            i0.ɵɵelementStart(4, "accordion-group", 1);
            i0.ɵɵtext(5, " This content is straight in the template. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "accordion-group", 2);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "accordion 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "accordion-group", 3);
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "accordion 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("isDisabled", ctx.isFirstDisabled);
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionDisabledComponent;
}());
exports.DemoAccordionDisabledComponent = DemoAccordionDisabledComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionDisabledComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-disabled',
                templateUrl: './disabled.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "DPvs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/opened/opened.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-opened',\r\n  templateUrl: './opened.html'\r\n})\r\nexport class DemoAccordionOpenedComponent {\r\n  isFirstOpen = true;\r\n}\r\n");

/***/ }),

/***/ "FwuH":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/manual-toggle/manual-toggle.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n          (click)=\"isOpen = !isOpen\">Toggle last panel\r\n  </button>\r\n</p>\r\n\r\n<accordion>\r\n  <accordion-group heading=\"Content 1\">\r\n    <p>accordion 1</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 2\">\r\n    <p>accordion 2</p>\r\n  </accordion-group>\r\n  <accordion-group [isOpen]=\"isOpen\" heading=\"Last panel\">\r\n    <p>accordion 3</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "GMzA":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/opened/opened.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion>\r\n  <accordion-group heading=\"Content 1\">\r\n    <p>accordion 1</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Initially expanded\"\r\n                   [isOpen]=\"isFirstOpen\">\r\n    This content is straight in the template.\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 2\">\r\n    <p>accordion 3</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "GwFy":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demo-accordion.routes.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var accordion_section_component_1 = __webpack_require__(/*! ./accordion-section.component */ "/IYN");
exports.routes = [{ path: '', component: accordion_section_component_1.AccordionSectionComponent }];


/***/ }),

/***/ "I8Dl":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/dynamic-body/dynamic-body.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-dynamic-body',\r\n  templateUrl: './dynamic-body.html'\r\n})\r\nexport class DemoAccordionDynamicBodyComponent {\r\n  items = ['Item 1', 'Item 2', 'Item 3'];\r\n\r\n  addItem(): void {\r\n    this.items.push(`Item ${this.items.length + 1}`);\r\n  }\r\n}\r\n");

/***/ }),

/***/ "IsoO":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/basic/basic.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoAccordionBasicComponent {}\r\n");

/***/ }),

/***/ "JgeH":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/manual-toggle/manual-toggle.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-manual-toggle',\r\n  templateUrl: './manual-toggle.html'\r\n})\r\nexport class DemoAccordionManualToggleComponent {\r\n  isOpen = true;\r\n}\r\n");

/***/ }),

/***/ "Lzvr":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/docs/usage.md ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\n// RECOMMENDED\nimport { AccordionModule } from 'bao-tran-angular/accordion';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { AccordionModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [\n    BrowserAnimationsModule,\n    AccordionModule.forRoot(),\n    ...\n  ]\n})\nexport class AppModule(){}\n\nAlso should be added web-animations-js polyfill for IE browser (Edge)\n");

/***/ }),

/***/ "M8GV":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/config/config.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { AccordionConfig } from 'bao-tran-angular/accordion';\n\n// such override allows to keep some initial values\n\nexport function getAccordionConfig(): AccordionConfig {\n  return Object.assign(new AccordionConfig(), { closeOthers: true });\n}\n\n@Component({\n  selector: 'demo-accordion-config',\n  templateUrl: './config.html',\n  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]\n})\nexport class DemoAccordionConfigComponent {}\n");

/***/ }),

/***/ "QXdJ":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/styling/styling.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionStylingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionStylingComponent = /** @class */ (function () {
    function DemoAccordionStylingComponent() {
        this.customClass = 'customClass';
        this.isFirstOpen = true;
    }
    DemoAccordionStylingComponent.ɵfac = function DemoAccordionStylingComponent_Factory(t) { return new (t || DemoAccordionStylingComponent)(); };
    DemoAccordionStylingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionStylingComponent, selectors: [["demo-accordion-styling"]], decls: 9, vars: 2, consts: [["heading", "Static Header, initially expanded", 3, "panelClass", "isOpen"], ["heading", "Content 1"], ["heading", "Content 2", "panelClass", "customClass"]], template: function DemoAccordionStylingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion");
            i0.ɵɵelementStart(1, "accordion-group", 0);
            i0.ɵɵtext(2, " This content is straight in the template. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "accordion-group", 1);
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "accordion 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "accordion-group", 2);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "accordion 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("panelClass", ctx.customClass)("isOpen", ctx.isFirstOpen);
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionStylingComponent;
}());
exports.DemoAccordionStylingComponent = DemoAccordionStylingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionStylingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-styling',
                templateUrl: './styling.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ReWA":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/styling/styling.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion>\r\n  <accordion-group heading=\"Static Header, initially expanded\"\r\n                   [panelClass]=\"customClass\"\r\n                   [isOpen]=\"isFirstOpen\">\r\n    This content is straight in the template.\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 1\">\r\n    <p>accordion 1</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 2\" panelClass=\"customClass\">\r\n    <p>accordion 2</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "T+Hm":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/dymanic/dynamic.ts ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-dynamic',\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoAccordionDynamicComponent {\r\n  groups = [\r\n    {\r\n      title: 'Dynamic Group Header - 1',\r\n      content: 'Dynamic Group Body - 1'\r\n    },\r\n    {\r\n      title: 'Dynamic Group Header - 2',\r\n      content: 'Dynamic Group Body - 2'\r\n    }\r\n  ];\r\n\r\n  addGroupItem(): void {\r\n    this.groups.push({\r\n      title: `Dynamic Group Header - ${this.groups.length + 1}`,\r\n      content: `Dynamic Group Body - ${this.groups.length + 1}`\r\n    });\r\n  }\r\n}\r\n");

/***/ }),

/***/ "Tj3J":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/config/config.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionConfigComponent = exports.getAccordionConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var accordion_1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
// such override allows to keep some initial values
function getAccordionConfig() {
    return Object.assign(new accordion_1.AccordionConfig(), { closeOthers: true });
}
exports.getAccordionConfig = getAccordionConfig;
var DemoAccordionConfigComponent = /** @class */ (function () {
    function DemoAccordionConfigComponent() {
    }
    DemoAccordionConfigComponent.ɵfac = function DemoAccordionConfigComponent_Factory(t) { return new (t || DemoAccordionConfigComponent)(); };
    DemoAccordionConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionConfigComponent, selectors: [["demo-accordion-config"]], features: [i0.ɵɵProvidersFeature([{ provide: accordion_1.AccordionConfig, useFactory: getAccordionConfig }])], decls: 9, vars: 1, consts: [[3, "isAnimated"], ["heading", "Header"], ["heading", "Content 1"], ["heading", "Content 2"]], template: function DemoAccordionConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion", 0);
            i0.ɵɵelementStart(1, "accordion-group", 1);
            i0.ɵɵtext(2, " This content is straight in the template. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "accordion-group", 2);
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "accordion-group", 3);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("isAnimated", true);
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionConfigComponent;
}());
exports.DemoAccordionConfigComponent = DemoAccordionConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-config',
                templateUrl: './config.html',
                providers: [{ provide: accordion_1.AccordionConfig, useFactory: getAccordionConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "VhEc":
/*!***********************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var animated_1 = __webpack_require__(/*! ./animated/animated */ "5PbX");
var basic_1 = __webpack_require__(/*! ./basic/basic */ "j7ld");
var config_1 = __webpack_require__(/*! ./config/config */ "Tj3J");
var custom_html_1 = __webpack_require__(/*! ./custom-html/custom-html */ "xCsX");
var disabled_1 = __webpack_require__(/*! ./disabled/disabled */ "BTeT");
var dynamic_body_1 = __webpack_require__(/*! ./dynamic-body/dynamic-body */ "gT8e");
var dynamic_1 = __webpack_require__(/*! ./dymanic/dynamic */ "ng6I");
var manual_toggle_1 = __webpack_require__(/*! ./manual-toggle/manual-toggle */ "8OKN");
var one_at_a_time_1 = __webpack_require__(/*! ./one-at-a-time/one-at-a-time */ "ygn2");
var opened_1 = __webpack_require__(/*! ./opened/opened */ "sJbm");
var open_event_1 = __webpack_require__(/*! ./open-event/open-event */ "oFJ2");
var styling_1 = __webpack_require__(/*! ./styling/styling */ "QXdJ");
exports.DEMO_COMPONENTS = [
    animated_1.DemoAccordionAnimatedComponent,
    basic_1.DemoAccordionBasicComponent,
    config_1.DemoAccordionConfigComponent,
    custom_html_1.DemoAccordionCustomHTMLComponent,
    disabled_1.DemoAccordionDisabledComponent,
    dynamic_body_1.DemoAccordionDynamicBodyComponent,
    dynamic_1.DemoAccordionDynamicComponent,
    manual_toggle_1.DemoAccordionManualToggleComponent,
    one_at_a_time_1.DemoAccordionOneAtATimeComponent,
    opened_1.DemoAccordionOpenedComponent,
    open_event_1.DemoAccordionOpenEventComponent,
    styling_1.DemoAccordionStylingComponent
];


/***/ }),

/***/ "YGAY":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/open-event/open-event.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion>\r\n  <accordion-group heading=\"Group without isOpenChange event listener\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Group with isOpenChange event listener\" (isOpenChange)=\"log($event)\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Group with isOpenChange event listener\" (isOpenChange)=\"log($event)\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "aOTR":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/open-event/open-event.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-open-event',\r\n  templateUrl: './open-event.html'\r\n})\r\nexport class DemoAccordionOpenEventComponent {\r\n  log(event: boolean) {\r\n    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);\r\n  }\r\n}\r\n");

/***/ }),

/***/ "gT8e":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/dynamic-body/dynamic-body.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionDynamicBodyComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoAccordionDynamicBodyComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1);
} }
var DemoAccordionDynamicBodyComponent = /** @class */ (function () {
    function DemoAccordionDynamicBodyComponent() {
        this.items = ['Item 1', 'Item 2', 'Item 3'];
    }
    DemoAccordionDynamicBodyComponent.prototype.addItem = function () {
        this.items.push("Item " + (this.items.length + 1));
    };
    DemoAccordionDynamicBodyComponent.ɵfac = function DemoAccordionDynamicBodyComponent_Factory(t) { return new (t || DemoAccordionDynamicBodyComponent)(); };
    DemoAccordionDynamicBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionDynamicBodyComponent, selectors: [["demo-accordion-dynamic-body"]], decls: 13, vars: 1, consts: [["heading", "Dynamic Body Content"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], ["heading", "Content 2"], ["heading", "Content 3"]], template: function DemoAccordionDynamicBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion");
            i0.ɵɵelementStart(1, "accordion-group", 0);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "The body of the accordion group grows to fit the contents");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 1);
            i0.ɵɵlistener("click", function DemoAccordionDynamicBodyComponent_Template_button_click_4_listener() { return ctx.addItem(); });
            i0.ɵɵtext(5, "Add Item ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, DemoAccordionDynamicBodyComponent_div_6_Template, 2, 1, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "accordion-group", 3);
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "accordion 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "accordion-group", 4);
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "accordion 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent, i2.NgForOf], encapsulation: 2 });
    return DemoAccordionDynamicBodyComponent;
}());
exports.DemoAccordionDynamicBodyComponent = DemoAccordionDynamicBodyComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionDynamicBodyComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-dynamic-body',
                templateUrl: './dynamic-body.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "gb9x":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/animated/animated.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion [isAnimated]=\"true\">\r\n  <accordion-group heading=\"Static Header\">\r\n    This content is straight in the template.\r\n  </accordion-group>\r\n  <accordion-group heading=\"Another group\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Another group\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Another group\">\r\n    <p>Some content</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "j7ld":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/basic/basic.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionBasicComponent = /** @class */ (function () {
    function DemoAccordionBasicComponent() {
    }
    DemoAccordionBasicComponent.ɵfac = function DemoAccordionBasicComponent_Factory(t) { return new (t || DemoAccordionBasicComponent)(); };
    DemoAccordionBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionBasicComponent, selectors: [["demo-accordion-basic"]], decls: 12, vars: 0, consts: [["heading", "Static Header"], ["heading", "Another group"]], template: function DemoAccordionBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion");
            i0.ɵɵelementStart(1, "accordion-group", 0);
            i0.ɵɵtext(2, " This content is straight in the template. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "accordion-group", 1);
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "accordion-group", 1);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "accordion-group", 1);
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionBasicComponent;
}());
exports.DemoAccordionBasicComponent = DemoAccordionBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "jAFX":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/custom-html/custom-html.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-custom-html',\r\n  templateUrl: './custom-html.html'\r\n})\r\nexport class DemoAccordionCustomHTMLComponent {}\r\n");

/***/ }),

/***/ "looP":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/animated/animated.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-animation',\r\n  templateUrl: './animated.html'\r\n})\r\nexport class DemoAccordionAnimatedComponent {}\r\n");

/***/ }),

/***/ "mIdF":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/styling/styling.ts ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-styling',\r\n  templateUrl: './styling.html'\r\n})\r\nexport class DemoAccordionStylingComponent {\r\n  customClass = 'customClass';\r\n  isFirstOpen = true;\r\n}\r\n");

/***/ }),

/***/ "nYfa":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demo-accordion.module.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var accordion_1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var accordion_section_component_1 = __webpack_require__(/*! ./accordion-section.component */ "/IYN");
var demos_1 = __webpack_require__(/*! ./demos */ "VhEc");
var demo_accordion_routes_1 = __webpack_require__(/*! ./demo-accordion.routes */ "GwFy");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/animated/animated */ "5PbX");
var i2 = __webpack_require__(/*! ./demos/basic/basic */ "j7ld");
var i3 = __webpack_require__(/*! ./demos/config/config */ "Tj3J");
var i4 = __webpack_require__(/*! ./demos/custom-html/custom-html */ "xCsX");
var i5 = __webpack_require__(/*! ./demos/disabled/disabled */ "BTeT");
var i6 = __webpack_require__(/*! ./demos/dynamic-body/dynamic-body */ "gT8e");
var i7 = __webpack_require__(/*! ./demos/dymanic/dynamic */ "ng6I");
var i8 = __webpack_require__(/*! ./demos/manual-toggle/manual-toggle */ "8OKN");
var i9 = __webpack_require__(/*! ./demos/one-at-a-time/one-at-a-time */ "ygn2");
var i10 = __webpack_require__(/*! ./demos/opened/opened */ "sJbm");
var i11 = __webpack_require__(/*! ./demos/open-event/open-event */ "oFJ2");
var i12 = __webpack_require__(/*! ./demos/styling/styling */ "QXdJ");
var i13 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var i14 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoAccordionModule = /** @class */ (function () {
    function DemoAccordionModule() {
    }
    DemoAccordionModule.routes = demo_accordion_routes_1.routes;
    DemoAccordionModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoAccordionModule });
    DemoAccordionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoAccordionModule_Factory(t) { return new (t || DemoAccordionModule)(); }, imports: [[
                accordion_1.AccordionModule.forRoot(),
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_accordion_routes_1.routes)
            ]] });
    return DemoAccordionModule;
}());
exports.DemoAccordionModule = DemoAccordionModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoAccordionModule, { declarations: [accordion_section_component_1.AccordionSectionComponent, i1.DemoAccordionAnimatedComponent, i2.DemoAccordionBasicComponent, i3.DemoAccordionConfigComponent, i4.DemoAccordionCustomHTMLComponent, i5.DemoAccordionDisabledComponent, i6.DemoAccordionDynamicBodyComponent, i7.DemoAccordionDynamicComponent, i8.DemoAccordionManualToggleComponent, i9.DemoAccordionOneAtATimeComponent, i10.DemoAccordionOpenedComponent, i11.DemoAccordionOpenEventComponent, i12.DemoAccordionStylingComponent], imports: [i13.AccordionModule, common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i14.RouterModule], exports: [accordion_section_component_1.AccordionSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    accordion_section_component_1.AccordionSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    accordion_1.AccordionModule.forRoot(),
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_accordion_routes_1.routes)
                ],
                exports: [accordion_section_component_1.AccordionSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "ng6I":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/dymanic/dynamic.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoAccordionDynamicComponent_accordion_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "accordion-group", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r1 = ctx.$implicit;
    i0.ɵɵproperty("heading", group_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", group_r1 == null ? null : group_r1.content, " ");
} }
var DemoAccordionDynamicComponent = /** @class */ (function () {
    function DemoAccordionDynamicComponent() {
        this.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];
    }
    DemoAccordionDynamicComponent.prototype.addGroupItem = function () {
        this.groups.push({
            title: "Dynamic Group Header - " + (this.groups.length + 1),
            content: "Dynamic Group Body - " + (this.groups.length + 1)
        });
    };
    DemoAccordionDynamicComponent.ɵfac = function DemoAccordionDynamicComponent_Factory(t) { return new (t || DemoAccordionDynamicComponent)(); };
    DemoAccordionDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionDynamicComponent, selectors: [["demo-accordion-dynamic"]], decls: 5, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [3, "heading", 4, "ngFor", "ngForOf"], [3, "heading"]], template: function DemoAccordionDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "button", 0);
            i0.ɵɵlistener("click", function DemoAccordionDynamicComponent_Template_button_click_1_listener() { return ctx.addGroupItem(); });
            i0.ɵɵtext(2, " Add Group Item ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "accordion");
            i0.ɵɵtemplate(4, DemoAccordionDynamicComponent_accordion_group_4_Template, 2, 2, "accordion-group", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.groups);
        } }, directives: [i1.AccordionComponent, i2.NgForOf, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionDynamicComponent;
}());
exports.DemoAccordionDynamicComponent = DemoAccordionDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-dynamic',
                templateUrl: './dynamic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "oFJ2":
/*!***************************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/open-event/open-event.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionOpenEventComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionOpenEventComponent = /** @class */ (function () {
    function DemoAccordionOpenEventComponent() {
    }
    DemoAccordionOpenEventComponent.prototype.log = function (event) {
        console.log("Accordion has been " + (event ? 'opened' : 'closed'));
    };
    DemoAccordionOpenEventComponent.ɵfac = function DemoAccordionOpenEventComponent_Factory(t) { return new (t || DemoAccordionOpenEventComponent)(); };
    DemoAccordionOpenEventComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionOpenEventComponent, selectors: [["demo-accordion-open-event"]], decls: 10, vars: 0, consts: [["heading", "Group without isOpenChange event listener"], ["heading", "Group with isOpenChange event listener", 3, "isOpenChange"]], template: function DemoAccordionOpenEventComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion");
            i0.ɵɵelementStart(1, "accordion-group", 0);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "accordion-group", 1);
            i0.ɵɵlistener("isOpenChange", function DemoAccordionOpenEventComponent_Template_accordion_group_isOpenChange_4_listener($event) { return ctx.log($event); });
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "accordion-group", 1);
            i0.ɵɵlistener("isOpenChange", function DemoAccordionOpenEventComponent_Template_accordion_group_isOpenChange_7_listener($event) { return ctx.log($event); });
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Some content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionOpenEventComponent;
}());
exports.DemoAccordionOpenEventComponent = DemoAccordionOpenEventComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionOpenEventComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-open-event',
                templateUrl: './open-event.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "rl/y":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/dymanic/dynamic.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addGroupItem()\">\r\n    Add Group Item\r\n  </button>\r\n</p>\r\n\r\n<accordion>\r\n  <accordion-group *ngFor=\"let group of groups\" [heading]=\"group.title\">\r\n    {{ group?.content }}\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "rvMl":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/one-at-a-time/one-at-a-time.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"checkbox\">\r\n  <label>\r\n    <input type=\"checkbox\" [(ngModel)]=\"oneAtATime\">\r\n    Open only one at a time\r\n  </label>\r\n</div>\r\n\r\n<accordion [closeOthers]=\"oneAtATime\">\r\n  <accordion-group heading=\"Header\">\r\n    This content is straight in the template.\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 1\">\r\n    <p>Content 1</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 2\">\r\n    <p>Content 2</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "sJbm":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/opened/opened.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionOpenedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionOpenedComponent = /** @class */ (function () {
    function DemoAccordionOpenedComponent() {
        this.isFirstOpen = true;
    }
    DemoAccordionOpenedComponent.ɵfac = function DemoAccordionOpenedComponent_Factory(t) { return new (t || DemoAccordionOpenedComponent)(); };
    DemoAccordionOpenedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionOpenedComponent, selectors: [["demo-accordion-opened"]], decls: 9, vars: 1, consts: [["heading", "Content 1"], ["heading", "Initially expanded", 3, "isOpen"], ["heading", "Content 2"]], template: function DemoAccordionOpenedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion");
            i0.ɵɵelementStart(1, "accordion-group", 0);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "accordion 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "accordion-group", 1);
            i0.ɵɵtext(5, " This content is straight in the template. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "accordion-group", 2);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "accordion 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("isOpen", ctx.isFirstOpen);
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionOpenedComponent;
}());
exports.DemoAccordionOpenedComponent = DemoAccordionOpenedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionOpenedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-opened',
                templateUrl: './opened.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "sr3Z":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/disabled/disabled.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-accordion-disabled',\r\n  templateUrl: './disabled.html'\r\n})\r\nexport class DemoAccordionDisabledComponent {\r\n  isFirstDisabled = false;\r\n}\r\n");

/***/ }),

/***/ "ukXm":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/custom-html/custom-html.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion>\r\n  <accordion-group>\r\n    <button class=\"btn btn-link btn-block clearfix\" accordion-heading type=\"button\">\r\n      <div class=\"pull-left float-left\">I can have markup!</div>\r\n      <span class=\"badge badge-secondary float-right pull-right\">Some HTML here</span>\r\n    </button>\r\n    This is just some content to illustrate fancy headings.\r\n  </accordion-group>\r\n  <accordion-group>\r\n    <button class=\"btn btn-link\" accordion-heading type=\"button\">\r\n      I can have markup, too!\r\n    </button>\r\n    <span class=\"badge badge-secondary center\">And some HTML here</span>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "unFA":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/dynamic-body/dynamic-body.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<accordion>\r\n  <accordion-group heading=\"Dynamic Body Content\">\r\n    <p>The body of the accordion group grows to fit the contents</p>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addItem()\">Add\r\n      Item\r\n    </button>\r\n    <div *ngFor=\"let item of items\">{{item}}</div>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 2\">\r\n    <p>accordion 2</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 3\">\r\n    <p>accordion 3</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "w1AO":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+accordion/demos/disabled/disabled.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"isFirstDisabled = !isFirstDisabled\">\r\n    Enable / Disable first panel\r\n  </button>\r\n</p>\r\n\r\n<accordion>\r\n  <accordion-group heading=\"Static Header\"\r\n                   [isDisabled]=\"isFirstDisabled\">\r\n    This content is straight in the template.\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 1\">\r\n    <p>accordion 1</p>\r\n  </accordion-group>\r\n  <accordion-group heading=\"Content 2\">\r\n    <p>accordion 2</p>\r\n  </accordion-group>\r\n</accordion>\r\n");

/***/ }),

/***/ "xCsX":
/*!*****************************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/custom-html/custom-html.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionCustomHTMLComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionCustomHTMLComponent = /** @class */ (function () {
    function DemoAccordionCustomHTMLComponent() {
    }
    DemoAccordionCustomHTMLComponent.ɵfac = function DemoAccordionCustomHTMLComponent_Factory(t) { return new (t || DemoAccordionCustomHTMLComponent)(); };
    DemoAccordionCustomHTMLComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionCustomHTMLComponent, selectors: [["demo-accordion-custom-html"]], decls: 13, vars: 0, consts: [["accordion-heading", "", "type", "button", 1, "btn", "btn-link", "btn-block", "clearfix"], [1, "pull-left", "float-left"], [1, "badge", "badge-secondary", "float-right", "pull-right"], ["accordion-heading", "", "type", "button", 1, "btn", "btn-link"], [1, "badge", "badge-secondary", "center"]], template: function DemoAccordionCustomHTMLComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "accordion");
            i0.ɵɵelementStart(1, "accordion-group");
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵtext(4, "I can have markup!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 2);
            i0.ɵɵtext(6, "Some HTML here");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " This is just some content to illustrate fancy headings. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "accordion-group");
            i0.ɵɵelementStart(9, "button", 3);
            i0.ɵɵtext(10, " I can have markup, too! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "span", 4);
            i0.ɵɵtext(12, "And some HTML here");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.AccordionComponent, i1.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionCustomHTMLComponent;
}());
exports.DemoAccordionCustomHTMLComponent = DemoAccordionCustomHTMLComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionCustomHTMLComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-custom-html',
                templateUrl: './custom-html.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ygn2":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+accordion/demos/one-at-a-time/one-at-a-time.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoAccordionOneAtATimeComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/accordion */ "gVSX");
var DemoAccordionOneAtATimeComponent = /** @class */ (function () {
    function DemoAccordionOneAtATimeComponent() {
        this.oneAtATime = true;
    }
    DemoAccordionOneAtATimeComponent.ɵfac = function DemoAccordionOneAtATimeComponent_Factory(t) { return new (t || DemoAccordionOneAtATimeComponent)(); };
    DemoAccordionOneAtATimeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccordionOneAtATimeComponent, selectors: [["demo-accordion-one-time"]], decls: 13, vars: 2, consts: [[1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [3, "closeOthers"], ["heading", "Header"], ["heading", "Content 1"], ["heading", "Content 2"]], template: function DemoAccordionOneAtATimeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "label");
            i0.ɵɵelementStart(2, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoAccordionOneAtATimeComponent_Template_input_ngModelChange_2_listener($event) { return ctx.oneAtATime = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3, " Open only one at a time ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "accordion", 2);
            i0.ɵɵelementStart(5, "accordion-group", 3);
            i0.ɵɵtext(6, " This content is straight in the template. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "accordion-group", 4);
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "accordion-group", 5);
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "Content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.oneAtATime);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("closeOthers", ctx.oneAtATime);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel, i2.AccordionComponent, i2.AccordionPanelComponent], encapsulation: 2 });
    return DemoAccordionOneAtATimeComponent;
}());
exports.DemoAccordionOneAtATimeComponent = DemoAccordionOneAtATimeComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoAccordionOneAtATimeComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-accordion-one-time',
                templateUrl: './one-at-a-time.html'
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-accordion-demo-accordion-module.js.map