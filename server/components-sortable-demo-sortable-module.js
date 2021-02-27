exports.ids = ["components-sortable-demo-sortable-module"];
exports.modules = {

/***/ "/9Ae":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+sortable/demo-sortable.routes.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var sortable_section_component_1 = __webpack_require__(/*! ./sortable-section.component */ "9rG6");
exports.routes = [{ path: '', component: sortable_section_component_1.SortableSectionComponent }];


/***/ }),

/***/ "1HNs":
/*!**************************************************************************!*\
  !*** ./demo/src/app/components/+sortable/demos/basic/basic.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/sortable */ "PKsY");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoBasicComponent = /** @class */ (function () {
    function DemoBasicComponent() {
        this.itemStringsLeft = [
            'Windstorm',
            'Bombasto',
            'Magneta',
            'Tornado'
        ];
        this.itemStringsRight = ['Mr. O', 'Tomato'];
    }
    DemoBasicComponent.ɵfac = function DemoBasicComponent_Factory(t) { return new (t || DemoBasicComponent)(); };
    DemoBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoBasicComponent, selectors: [["basic-demo"]], decls: 11, vars: 8, consts: [[1, "row"], [1, "col-xs-6", "col-6", "col-md-5", "col-lg-3"], ["itemClass", "sortable-item", "itemActiveClass", "sortable-item-active", "placeholderItem", "Drag here", "placeholderClass", "placeholderStyle", "wrapperClass", "sortable-wrapper", 3, "ngModel", "ngModelChange"], [1, "code-preview"]], template: function DemoBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "bs-sortable", 2);
            i0.ɵɵlistener("ngModelChange", function DemoBasicComponent_Template_bs_sortable_ngModelChange_2_listener($event) { return ctx.itemStringsLeft = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "pre", 3);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "bs-sortable", 2);
            i0.ɵɵlistener("ngModelChange", function DemoBasicComponent_Template_bs_sortable_ngModelChange_7_listener($event) { return ctx.itemStringsRight = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "pre", 3);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.itemStringsLeft);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("model: ", i0.ɵɵpipeBind1(5, 4, ctx.itemStringsLeft), "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.itemStringsRight);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("model: ", i0.ɵɵpipeBind1(10, 6, ctx.itemStringsRight), "");
        } }, directives: [i1.SortableComponent, i2.NgControlStatus, i2.NgModel], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoBasicComponent;
}());
exports.DemoBasicComponent = DemoBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'basic-demo',
                templateUrl: './basic.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "6k/y":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+sortable/docs/usage.md ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { SortableModule } from 'bao-tran-angular/sortable';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { SortableModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [SortableModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "9rG6":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+sortable/sortable-section.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SortableSectionComponent = void 0;
/* tslint:disable:use-view-encapsulation */
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var sortable_section_list_1 = __webpack_require__(/*! ./sortable-section.list */ "WGFc");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var SortableSectionComponent = /** @class */ (function () {
    function SortableSectionComponent() {
        this.name = 'Sortable';
        this.src = 'https://github.com/valor-software/bao-tran-angular/blob/development/src/sortable';
        this.componentContent = sortable_section_list_1.demoComponentContent;
    }
    SortableSectionComponent.ɵfac = function SortableSectionComponent_Factory(t) { return new (t || SortableSectionComponent)(); };
    SortableSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SortableSectionComponent, selectors: [["sortable-section"]], decls: 13, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function SortableSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "The ");
            i0.ɵɵelementStart(3, "strong");
            i0.ɵɵtext(4, "sortable component");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, " represents a list of items, with ability to sort them or move to another container via drag&drop. Input collection isn't mutated by the component, so events ");
            i0.ɵɵelementStart(6, "code");
            i0.ɵɵtext(7, "ngModelChange");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, ", ");
            i0.ɵɵelementStart(9, "code");
            i0.ɵɵtext(10, "onChange");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " are using new collections.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], styles: ["\n    .sortable-item {\n      padding: 6px 12px;\n      margin-bottom: 4px;\n      font-size: 14px;\n      line-height: 1.4em;\n      text-align: center;\n      cursor: grab;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      border-color: #adadad;\n    }\n\n    .sortable-item-active {\n      background-color: #e6e6e6;\n      box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n    }\n\n    .sortable-wrapper {\n      min-height: 150px;\n    }\n  "], encapsulation: 2, changeDetection: 0 });
    return SortableSectionComponent;
}());
exports.SortableSectionComponent = SortableSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortableSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'sortable-section',
                templateUrl: './sortable-section.component.html',
                encapsulation: core_1.ViewEncapsulation.None,
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "Bijr":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+sortable/demos/complex-datamodel/complex-datamodel.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\r\n    <bs-sortable\r\n      [(ngModel)]=\"itemObjectsLeft\"\r\n      fieldName=\"name\"\r\n      itemClass=\"sortable-item\"\r\n      itemActiveClass=\"sortable-item-active\"\r\n      placeholderItem=\"Drag here\"\r\n      placeholderClass=\"placeholderStyle\"\r\n      wrapperClass=\"sortable-wrapper\"\r\n    ></bs-sortable>\r\n    <pre class=\"code-preview\">{{ itemObjectsLeft | json }}</pre>\r\n  </div>\r\n  <div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\r\n    <bs-sortable\r\n      [(ngModel)]=\"itemObjectsRight\"\r\n      fieldName=\"name\"\r\n      itemClass=\"sortable-item\"\r\n      itemActiveClass=\"sortable-item-active\"\r\n      placeholderItem=\"Drag here\"\r\n      placeholderClass=\"placeholderStyle\"\r\n      wrapperClass=\"sortable-wrapper\"\r\n    ></bs-sortable>\r\n    <pre class=\"code-preview\">{{ itemObjectsRight | json }}</pre>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "CR2L":
/*!**********************************************************!*\
  !*** ./demo/src/app/components/+sortable/demos/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var complex_datamodel_component_1 = __webpack_require__(/*! ./complex-datamodel/complex-datamodel.component */ "GAys");
var basic_component_1 = __webpack_require__(/*! ./basic/basic.component */ "1HNs");
var custom_item_template_1 = __webpack_require__(/*! ./custom-item-template/custom-item-template */ "uBmd");
var accessibility_1 = __webpack_require__(/*! ./accessibility/accessibility */ "ShU1");
exports.DEMO_COMPONENTS = [
    basic_component_1.DemoBasicComponent,
    complex_datamodel_component_1.ComplexDatamodelDemoComponent,
    custom_item_template_1.CustomItemTemplateDemoComponent,
    accessibility_1.DemoAccessibilityComponent
];


/***/ }),

/***/ "GAys":
/*!**************************************************************************************************!*\
  !*** ./demo/src/app/components/+sortable/demos/complex-datamodel/complex-datamodel.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexDatamodelDemoComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/sortable */ "PKsY");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var ComplexDatamodelDemoComponent = /** @class */ (function () {
    function ComplexDatamodelDemoComponent() {
        this.itemObjectsLeft = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' }
        ];
        this.itemObjectsRight = [
            { id: 4, name: 'Tornado' },
            { id: 5, name: 'Mr. O' },
            { id: 6, name: 'Tomato' }
        ];
    }
    ComplexDatamodelDemoComponent.ɵfac = function ComplexDatamodelDemoComponent_Factory(t) { return new (t || ComplexDatamodelDemoComponent)(); };
    ComplexDatamodelDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ComplexDatamodelDemoComponent, selectors: [["complex-datamodel-demo"]], decls: 11, vars: 8, consts: [[1, "row"], [1, "col-xs-6", "col-6", "col-md-5", "col-lg-3"], ["fieldName", "name", "itemClass", "sortable-item", "itemActiveClass", "sortable-item-active", "placeholderItem", "Drag here", "placeholderClass", "placeholderStyle", "wrapperClass", "sortable-wrapper", 3, "ngModel", "ngModelChange"], [1, "code-preview"]], template: function ComplexDatamodelDemoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "bs-sortable", 2);
            i0.ɵɵlistener("ngModelChange", function ComplexDatamodelDemoComponent_Template_bs_sortable_ngModelChange_2_listener($event) { return ctx.itemObjectsLeft = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "pre", 3);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "bs-sortable", 2);
            i0.ɵɵlistener("ngModelChange", function ComplexDatamodelDemoComponent_Template_bs_sortable_ngModelChange_7_listener($event) { return ctx.itemObjectsRight = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "pre", 3);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.itemObjectsLeft);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, ctx.itemObjectsLeft));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.itemObjectsRight);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 6, ctx.itemObjectsRight));
        } }, directives: [i1.SortableComponent, i2.NgControlStatus, i2.NgModel], pipes: [i3.JsonPipe], encapsulation: 2 });
    return ComplexDatamodelDemoComponent;
}());
exports.ComplexDatamodelDemoComponent = ComplexDatamodelDemoComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComplexDatamodelDemoComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'complex-datamodel-demo',
                templateUrl: './complex-datamodel.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "K19f":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+sortable/demos/custom-item-template/custom-item-template.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'custom-item-template-demo',\r\n  templateUrl: './custom-item-template.html'\r\n})\r\nexport class CustomItemTemplateDemoComponent {\r\n  itemStringsLeft: any[] = [\r\n    'Windstorm',\r\n    'Bombasto',\r\n    'Magneta',\r\n    'Tornado'\r\n  ];\r\n\r\n  itemStringsRight: any[] = ['Mr. O', 'Tomato'];\r\n}\r\n");

/***/ }),

/***/ "PmAR":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+sortable/demos/basic/basic.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'basic-demo',\r\n  templateUrl: './basic.component.html'\r\n})\r\nexport class DemoBasicComponent {\r\n  itemStringsLeft = [\r\n    'Windstorm',\r\n    'Bombasto',\r\n    'Magneta',\r\n    'Tornado'\r\n  ];\r\n\r\n  itemStringsRight = ['Mr. O', 'Tomato'];\r\n}\r\n");

/***/ }),

/***/ "ShU1":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+sortable/demos/accessibility/accessibility.ts ***!
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
    DemoAccessibilityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccessibilityComponent, selectors: [["demo-accessibility"]], decls: 26, vars: 0, consts: [["href", "https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect"], [1, "highlighter-rouge"]], template: function DemoAccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "You can use ");
            i0.ɵɵelementStart(2, "code");
            i0.ɵɵtext(3, "aria-dropeffect=\"...\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, " and ");
            i0.ɵɵelementStart(5, "code");
            i0.ɵɵtext(6, "aria-grabbed");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " for ");
            i0.ɵɵelementStart(8, "code");
            i0.ɵɵtext(9, ".sortable-item");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, ". When you start drag item ");
            i0.ɵɵelementStart(11, "code");
            i0.ɵɵtext(12, "aria-grabbed");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " must have ");
            i0.ɵɵelementStart(14, "code");
            i0.ɵɵtext(15, "true");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " state. ");
            i0.ɵɵelementStart(17, "code");
            i0.ɵɵtext(18, "aria-dropeffect");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, " property is defined depending on the grabbed object.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "But be careful, these attributes are ");
            i0.ɵɵelementStart(22, "a", 0);
            i0.ɵɵelementStart(23, "code", 1);
            i0.ɵɵtext(24, "deprecated");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, ".");
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

/***/ "Sxso":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+sortable/demos/complex-datamodel/complex-datamodel.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'complex-datamodel-demo',\r\n  templateUrl: './complex-datamodel.component.html'\r\n})\r\nexport class ComplexDatamodelDemoComponent {\r\n  itemObjectsLeft: any[] = [\r\n    { id: 1, name: 'Windstorm' },\r\n    { id: 2, name: 'Bombasto' },\r\n    { id: 3, name: 'Magneta' }\r\n  ];\r\n\r\n  itemObjectsRight: any[] = [\r\n    { id: 4, name: 'Tornado' },\r\n    { id: 5, name: 'Mr. O' },\r\n    { id: 6, name: 'Tomato' }\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "WGFc":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+sortable/sortable-section.list.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_component_1 = __webpack_require__(/*! ./demos/basic/basic.component */ "1HNs");
var complex_datamodel_component_1 = __webpack_require__(/*! ./demos/complex-datamodel/complex-datamodel.component */ "GAys");
var custom_item_template_1 = __webpack_require__(/*! ./demos/custom-item-template/custom-item-template */ "uBmd");
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var accessibility_1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "ShU1");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "6k/y")
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
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.component.ts */ "PmAR"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.component.html */ "lWZg"),
                outlet: basic_component_1.DemoBasicComponent
            },
            {
                title: 'Complex data model',
                anchor: 'complexDatamodel',
                component: __webpack_require__(/*! !raw-loader!./demos/complex-datamodel/complex-datamodel.component.ts */ "Sxso"),
                html: __webpack_require__(/*! !raw-loader!./demos/complex-datamodel/complex-datamodel.component.html */ "Bijr"),
                outlet: complex_datamodel_component_1.ComplexDatamodelDemoComponent
            },
            {
                title: 'Custom item template',
                anchor: 'itemTemplate',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-item-template/custom-item-template.ts */ "K19f"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-item-template/custom-item-template.html */ "xiAJ"),
                outlet: custom_item_template_1.CustomItemTemplateDemoComponent
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
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'SortableComponent',
                anchor: 'sortable-component',
                outlet: api_docs_1.NgApiDocComponent
            }
        ]
    }
];


/***/ }),

/***/ "lWZg":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+sortable/demos/basic/basic.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\r\n    <bs-sortable\r\n      [(ngModel)]=\"itemStringsLeft\"\r\n      itemClass=\"sortable-item\"\r\n      itemActiveClass=\"sortable-item-active\"\r\n      placeholderItem=\"Drag here\"\r\n      placeholderClass=\"placeholderStyle\"\r\n      wrapperClass=\"sortable-wrapper\"\r\n    ></bs-sortable>\r\n    <pre class=\"code-preview\">model: {{ itemStringsLeft | json }}</pre>\r\n  </div>\r\n  <div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\r\n    <bs-sortable\r\n      [(ngModel)]=\"itemStringsRight\"\r\n      itemClass=\"sortable-item\"\r\n      itemActiveClass=\"sortable-item-active\"\r\n      placeholderItem=\"Drag here\"\r\n      placeholderClass=\"placeholderStyle\"\r\n      wrapperClass=\"sortable-wrapper\"\r\n    ></bs-sortable>\r\n    <pre class=\"code-preview\">model: {{ itemStringsRight | json }}</pre>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "uBmd":
/*!**********************************************************************************************!*\
  !*** ./demo/src/app/components/+sortable/demos/custom-item-template/custom-item-template.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomItemTemplateDemoComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/sortable */ "PKsY");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function CustomItemTemplateDemoComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ctx.item;
    var index_r3 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", index_r3, ": ", item_r2.value, "");
} }
var CustomItemTemplateDemoComponent = /** @class */ (function () {
    function CustomItemTemplateDemoComponent() {
        this.itemStringsLeft = [
            'Windstorm',
            'Bombasto',
            'Magneta',
            'Tornado'
        ];
        this.itemStringsRight = ['Mr. O', 'Tomato'];
    }
    CustomItemTemplateDemoComponent.ɵfac = function CustomItemTemplateDemoComponent_Factory(t) { return new (t || CustomItemTemplateDemoComponent)(); };
    CustomItemTemplateDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomItemTemplateDemoComponent, selectors: [["custom-item-template-demo"]], decls: 13, vars: 9, consts: [["itemTemplate", ""], [1, "row"], [1, "col-xs-6", "col-6", "col-md-5", "col-lg-3"], ["itemClass", "sortable-item", "itemActiveClass", "sortable-item-active", "placeholderItem", "Drag here", "placeholderClass", "placeholderStyle", "wrapperClass", "sortable-wrapper", 3, "ngModel", "itemTemplate", "ngModelChange"], [1, "code-preview"], ["itemClass", "sortable-item", "itemActiveClass", "sortable-item-active", "placeholderItem", "Drag here", "placeholderClass", "placeholderStyle", "wrapperClass", "sortable-wrapper", 3, "ngModel", "ngModelChange"]], template: function CustomItemTemplateDemoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CustomItemTemplateDemoComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "bs-sortable", 3);
            i0.ɵɵlistener("ngModelChange", function CustomItemTemplateDemoComponent_Template_bs_sortable_ngModelChange_4_listener($event) { return ctx.itemStringsLeft = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "pre", 4);
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2);
            i0.ɵɵelementStart(9, "bs-sortable", 5);
            i0.ɵɵlistener("ngModelChange", function CustomItemTemplateDemoComponent_Template_bs_sortable_ngModelChange_9_listener($event) { return ctx.itemStringsRight = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "pre", 4);
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.itemStringsLeft)("itemTemplate", _r0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("model: ", i0.ɵɵpipeBind1(7, 5, ctx.itemStringsLeft), "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.itemStringsRight);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("model: ", i0.ɵɵpipeBind1(12, 7, ctx.itemStringsRight), "");
        } }, directives: [i1.SortableComponent, i2.NgControlStatus, i2.NgModel], pipes: [i3.JsonPipe], encapsulation: 2 });
    return CustomItemTemplateDemoComponent;
}());
exports.CustomItemTemplateDemoComponent = CustomItemTemplateDemoComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomItemTemplateDemoComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'custom-item-template-demo',
                templateUrl: './custom-item-template.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "x7VU":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+sortable/demo-sortable.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoSortableModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var sortable_1 = __webpack_require__(/*! bao-tran-angular/sortable */ "PKsY");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var sortable_section_component_1 = __webpack_require__(/*! ./sortable-section.component */ "9rG6");
var demos_1 = __webpack_require__(/*! ./demos */ "CR2L");
var demo_sortable_routes_1 = __webpack_require__(/*! ./demo-sortable.routes */ "/9Ae");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/basic/basic.component */ "1HNs");
var i2 = __webpack_require__(/*! ./demos/complex-datamodel/complex-datamodel.component */ "GAys");
var i3 = __webpack_require__(/*! ./demos/custom-item-template/custom-item-template */ "uBmd");
var i4 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "ShU1");
var i5 = __webpack_require__(/*! bao-tran-angular/sortable */ "PKsY");
var i6 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoSortableModule = /** @class */ (function () {
    function DemoSortableModule() {
    }
    DemoSortableModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoSortableModule });
    DemoSortableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoSortableModule_Factory(t) { return new (t || DemoSortableModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                sortable_1.SortableModule.forRoot(),
                router_1.RouterModule.forChild(demo_sortable_routes_1.routes)
            ]] });
    return DemoSortableModule;
}());
exports.DemoSortableModule = DemoSortableModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoSortableModule, { declarations: [sortable_section_component_1.SortableSectionComponent, i1.DemoBasicComponent, i2.ComplexDatamodelDemoComponent, i3.CustomItemTemplateDemoComponent, i4.DemoAccessibilityComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i5.SortableModule, i6.RouterModule], exports: [sortable_section_component_1.SortableSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoSortableModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    sortable_section_component_1.SortableSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    sortable_1.SortableModule.forRoot(),
                    router_1.RouterModule.forChild(demo_sortable_routes_1.routes)
                ],
                exports: [sortable_section_component_1.SortableSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "xiAJ":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+sortable/demos/custom-item-template/custom-item-template.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #itemTemplate let-item=\"item\" let-index=\"index\"><span>{{index}}: {{item.value}}</span></ng-template>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\r\n    <bs-sortable\r\n      [(ngModel)]=\"itemStringsLeft\"\r\n      [itemTemplate]=\"itemTemplate\"\r\n      itemClass=\"sortable-item\"\r\n      itemActiveClass=\"sortable-item-active\"\r\n      placeholderItem=\"Drag here\"\r\n      placeholderClass=\"placeholderStyle\"\r\n      wrapperClass=\"sortable-wrapper\"\r\n    ></bs-sortable>\r\n    <pre class=\"code-preview\">model: {{ itemStringsLeft | json }}</pre>\r\n  </div>\r\n  <div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\r\n    <bs-sortable\r\n      [(ngModel)]=\"itemStringsRight\"\r\n      itemClass=\"sortable-item\"\r\n      itemActiveClass=\"sortable-item-active\"\r\n      placeholderItem=\"Drag here\"\r\n      placeholderClass=\"placeholderStyle\"\r\n      wrapperClass=\"sortable-wrapper\"\r\n    ></bs-sortable>\r\n    <pre class=\"code-preview\">model: {{ itemStringsRight | json }}</pre>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ })

};;
//# sourceMappingURL=components-sortable-demo-sortable-module.js.map