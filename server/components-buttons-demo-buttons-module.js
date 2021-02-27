exports.ids = ["components-buttons-demo-buttons-module"];
exports.modules = {

/***/ "+g3H":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/radio-reactiveforms/radio-reactiveforms.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">{{ myForm.value | json }}</pre>\r\n<form [formGroup]=\"myForm\" class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    <div class=\"btn-group\" btnRadioGroup formControlName=\"radio\">\r\n      <label btnRadio=\"A\" class=\"btn btn-primary\">A</label>\r\n      <label btnRadio=\"B\" class=\"btn btn-primary\">B</label>\r\n      <label btnRadio=\"C\" class=\"btn btn-primary\">C</label>\r\n    </div>\r\n    <button class=\"btn btn-primary\" (click)=\"myForm.disabled ? myForm.enable() : myForm.disable()\">Enable/Disable</button>\r\n  </div>\r\n\r\n</form>\r\n");

/***/ }),

/***/ "+yoE":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/radio-reactiveforms/radio-reactiveforms.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from '@angular/core';\r\nimport { FormBuilder, FormGroup } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-radio-reactiveforms',\r\n  templateUrl: './radio-reactiveforms.html'\r\n})\r\nexport class DemoButtonsRadioReactiveFormsComponent implements OnInit {\r\n  myForm: FormGroup;\r\n\r\n  constructor(private formBuilder: FormBuilder) {}\r\n\r\n  ngOnInit() {\r\n    this.myForm = this.formBuilder.group({\r\n      radio: 'C'\r\n    });\r\n  }\r\n}\r\n");

/***/ }),

/***/ "/mGz":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/radio-with-group/radio-with-group.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">{{radioModel || 'null'}}</pre>\r\n<div class=\"form-inline\">\r\n  <div class=\"btn-group\" btnRadioGroup [(ngModel)]=\"radioModel\" [disabled]=\"modelGroupDisabled\">\r\n    <label class=\"btn btn-success\" btnRadio=\"Left\">Left</label>\r\n    <label class=\"btn btn-success\" btnRadio=\"Middle\">Middle</label>\r\n    <label class=\"btn btn-success\" btnRadio=\"Another\" [disabled]=\"true\">Disabled</label>\r\n    <label class=\"btn btn-success\" btnRadio=\"Right\">Right</label>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"modelGroupDisabled = !modelGroupDisabled\">Enable/Disable</button>\r\n</div>\r\n\r\n\r\n<pre class=\"card card-block card-header\">{{radioModelDisabled || 'null'}}</pre>\r\n<div class=\"form-inline\">\r\n  <div class=\"btn-group\" btnRadioGroup [(ngModel)]=\"radioModelDisabled\" disabled>\r\n    <label class=\"btn btn-success\" btnRadio=\"Left\">Left</label>\r\n    <label class=\"btn btn-success\" btnRadio=\"Middle\">Middle</label>\r\n    <label class=\"btn btn-success\" btnRadio=\"Right\">Right</label>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "1BST":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/disabled/disabled.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disabled\">Button</button>\r\n<button type=\"button\" class=\"btn btn-warning\" (click)=\"disabled = !disabled\">Enable/Disable</button>\r\n\r\n");

/***/ }),

/***/ "6/7U":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/uncheckable-radio/uncheckable-radio.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">{{uncheckableRadioModel || 'null'}}</pre>\r\n<div class=\"btn-group\" btnRadioGroup [(ngModel)]=\"uncheckableRadioModel\">\r\n  <label class=\"btn btn-info\" btnRadio=\"Left\"\r\n         uncheckable tabindex=\"0\" role=\"button\">Left</label>\r\n  <label class=\"btn btn-info\" btnRadio=\"Middle\"\r\n         uncheckable tabindex=\"0\" role=\"button\">Middle</label>\r\n  <label class=\"btn btn-info\" btnRadio=\"Right\"\r\n         uncheckable tabindex=\"0\" role=\"button\">Right</label>\r\n</div>\r\n");

/***/ }),

/***/ "7DLv":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/custom-checkbox-value/custom-checkbox-value.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-custom-checkbox-value',\r\n  templateUrl: './custom-checkbox-value.html'\r\n})\r\nexport class DemoButtonsCustomCheckboxValueComponent {\r\n  singleModel = '1';\r\n}\r\n");

/***/ }),

/***/ "7Wf+":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/custom-checkbox-value/custom-checkbox-value.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">{{singleModel}}</pre>\r\n<button type=\"button\" class=\"btn btn-primary\"\r\n        [(ngModel)]=\"singleModel\" btnCheckbox\r\n        btnCheckboxTrue=\"1\" btnCheckboxFalse=\"0\">\r\n  Single Toggle\r\n</button>\r\n");

/***/ }),

/***/ "7oHN":
/*!*********************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var basic_1 = __webpack_require__(/*! ./basic/basic */ "NkEV");
var checkbox_1 = __webpack_require__(/*! ./checkbox/checkbox */ "Msmx");
var radio_1 = __webpack_require__(/*! ./radio/radio */ "8ye0");
var checkbox_reactiveforms_1 = __webpack_require__(/*! ./checkbox-reactiveforms/checkbox-reactiveforms */ "gklp");
var disabled_1 = __webpack_require__(/*! ./disabled/disabled */ "l2NX");
var radio_reactiveforms_1 = __webpack_require__(/*! ./radio-reactiveforms/radio-reactiveforms */ "cb7G");
var uncheckable_radio_1 = __webpack_require__(/*! ./uncheckable-radio/uncheckable-radio */ "Crcf");
var custom_checkbox_value_1 = __webpack_require__(/*! ./custom-checkbox-value/custom-checkbox-value */ "vGmA");
var radio_with_group_1 = __webpack_require__(/*! ./radio-with-group/radio-with-group */ "cFNl");
exports.DEMO_COMPONENTS = [
    basic_1.DemoButtonsBasicComponent,
    custom_checkbox_value_1.DemoButtonsCustomCheckboxValueComponent,
    checkbox_1.DemoButtonsCheckboxComponent,
    radio_1.DemoButtonsRadioComponent,
    radio_with_group_1.DemoButtonsRadioWithGroupComponent,
    checkbox_reactiveforms_1.DemoButtonsCheckboxReactiveFormsComponent,
    radio_reactiveforms_1.DemoButtonsRadioReactiveFormsComponent,
    disabled_1.DemoButtonsDisabledComponent,
    uncheckable_radio_1.DemoButtonsUncheckableRadioComponent
];


/***/ }),

/***/ "8sFZ":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+buttons/buttons-section.list.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "NkEV");
var checkbox_1 = __webpack_require__(/*! ./demos/checkbox/checkbox */ "Msmx");
var radio_1 = __webpack_require__(/*! ./demos/radio/radio */ "8ye0");
var uncheckable_radio_1 = __webpack_require__(/*! ./demos/uncheckable-radio/uncheckable-radio */ "Crcf");
var checkbox_reactiveforms_1 = __webpack_require__(/*! ./demos/checkbox-reactiveforms/checkbox-reactiveforms */ "gklp");
var radio_reactiveforms_1 = __webpack_require__(/*! ./demos/radio-reactiveforms/radio-reactiveforms */ "cb7G");
var disabled_1 = __webpack_require__(/*! ./demos/disabled/disabled */ "l2NX");
var custom_checkbox_value_1 = __webpack_require__(/*! ./demos/custom-checkbox-value/custom-checkbox-value */ "vGmA");
var radio_with_group_1 = __webpack_require__(/*! ./demos/radio-with-group/radio-with-group */ "cFNl");
var demo_top_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section */ "ClAA");
var demo_examples_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section */ "y20O");
var demo_api_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: demo_top_section_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "sUJ9")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: demo_examples_section_1.ExamplesComponent,
        content: [
            {
                title: 'Basic',
                anchor: 'basic',
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.ts */ "rQhE"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "VL0J"),
                outlet: basic_1.DemoButtonsBasicComponent
            },
            {
                title: 'Checkbox',
                anchor: 'checkbox',
                description: "<p>Checkbox-like buttons set with variable states</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/checkbox/checkbox.ts */ "jFwS"),
                html: __webpack_require__(/*! !raw-loader!./demos/checkbox/checkbox.html */ "YNeZ"),
                outlet: checkbox_1.DemoButtonsCheckboxComponent
            },
            {
                title: 'Custom checkbox value',
                anchor: 'custom-checkbox-value',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-checkbox-value/custom-checkbox-value.ts */ "7DLv"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-checkbox-value/custom-checkbox-value.html */ "7Wf+"),
                outlet: custom_checkbox_value_1.DemoButtonsCustomCheckboxValueComponent
            },
            {
                title: 'Checkbox with Reactive Forms',
                anchor: 'checkbox-reactiveforms"',
                description: "<p>Checkbox buttons with ReactiveForms</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/checkbox-reactiveforms/checkbox-reactiveforms.ts */ "rjbT"),
                html: __webpack_require__(/*! !raw-loader!./demos/checkbox-reactiveforms/checkbox-reactiveforms.html */ "EKQK"),
                outlet: checkbox_reactiveforms_1.DemoButtonsCheckboxReactiveFormsComponent
            },
            {
                title: 'Radio with radio group',
                anchor: 'radio-button-with-group',
                description: "<p>Radio buttons with checked/unchecked states. Radio buttons used together with a <code>btnRadioGroup</code> can be\nused in template driven and reactive forms.\nThey follow the <a href=\"https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton\">W3C WAI-AIRA design pattern for radio groups</a>.\nMeaning\n<ul>\n<li>The Radio Group is inserted in the tab-order of the page by automatically adding a tabindex attribute</li>\n<li>The selected radio element can be changed with the arrow keys if the focus is in the group</li>\n<li>The role of the group is set to \"radiogroup\" and the aria-checked attributes are added according to the state</li>\n</ul>\nIndividual buttons or the whole group can be marked as disabled.\n</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/radio-with-group/radio-with-group.ts */ "Bsqq"),
                html: __webpack_require__(/*! !raw-loader!./demos/radio-with-group/radio-with-group.html */ "/mGz"),
                outlet: radio_with_group_1.DemoButtonsRadioWithGroupComponent
            },
            {
                title: 'Radio without explicit group',
                anchor: 'radio-button',
                description: "<p> The second method to create a radio button group is to use the same <code>ngModel</code> binding with several buttons.\n This works only for template driven forms and is not generally advised. But there are use cases were this might be useful, e.g. in tables.\n In terms of accessibility the buttons in the group can not be selected with the arrow keys, but individually reached by using the tab key\n and then be toggled by using the space key. You can check out the demo below.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/radio/radio.ts */ "INbB"),
                html: __webpack_require__(/*! !raw-loader!./demos/radio/radio.html */ "uya6"),
                outlet: radio_1.DemoButtonsRadioComponent
            },
            {
                title: 'Uncheckable Radio',
                anchor: 'uncheckable-radio-button',
                component: __webpack_require__(/*! !raw-loader!./demos/uncheckable-radio/uncheckable-radio.ts */ "ed5y"),
                html: __webpack_require__(/*! !raw-loader!./demos/uncheckable-radio/uncheckable-radio.html */ "6/7U"),
                outlet: uncheckable_radio_1.DemoButtonsUncheckableRadioComponent
            },
            {
                title: 'Radio with Reactive Forms',
                anchor: 'radio-reactiveforms',
                description: "<p>Radio buttons with ReactiveForms. Example below shows how to use radio buttons with reactive\n forms. Please be aware that for reactive forms it's required to use <code>btnRadioGroup</code> directive along with\n <code>btnRadio</code>'s</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/radio-reactiveforms/radio-reactiveforms.ts */ "+yoE"),
                html: __webpack_require__(/*! !raw-loader!./demos/radio-reactiveforms/radio-reactiveforms.html */ "+g3H"),
                outlet: radio_reactiveforms_1.DemoButtonsRadioReactiveFormsComponent
            },
            {
                title: 'Disabled Buttons',
                anchor: 'disabled-buttons',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled.ts */ "WEuY"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled/disabled.html */ "1BST"),
                outlet: disabled_1.DemoButtonsDisabledComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: demo_api_section_1.ApiSectionsComponent,
        content: [
            {
                title: 'ButtonCheckboxDirective',
                anchor: 'button-checkbox-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'ButtonRadioDirective',
                anchor: 'button-radio-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'ButtonRadioGroupDirective',
                anchor: 'button-radio-group-directive',
                outlet: api_docs_1.NgApiDocComponent
            }
        ]
    }
];


/***/ }),

/***/ "8ye0":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/radio/radio.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsRadioComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoButtonsRadioComponent = /** @class */ (function () {
    function DemoButtonsRadioComponent() {
        this.radioModel = 'Middle';
    }
    DemoButtonsRadioComponent.ɵfac = function DemoButtonsRadioComponent_Factory(t) { return new (t || DemoButtonsRadioComponent)(); };
    DemoButtonsRadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsRadioComponent, selectors: [["demo-buttons-radio"]], decls: 9, vars: 4, consts: [[1, "card", "card-block", "card-header"], [1, "btn-group"], ["btnRadio", "Left", "tabindex", "0", "role", "button", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange"], ["btnRadio", "Middle", "tabindex", "0", "role", "button", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange"], ["btnRadio", "Right", "tabindex", "0", "role", "button", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange"]], template: function DemoButtonsRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "label", 2);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsRadioComponent_Template_label_ngModelChange_3_listener($event) { return ctx.radioModel = $event; });
            i0.ɵɵtext(4, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "label", 3);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsRadioComponent_Template_label_ngModelChange_5_listener($event) { return ctx.radioModel = $event; });
            i0.ɵɵtext(6, "Middle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 4);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsRadioComponent_Template_label_ngModelChange_7_listener($event) { return ctx.radioModel = $event; });
            i0.ɵɵtext(8, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.radioModel || "null");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.radioModel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.radioModel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.radioModel);
        } }, directives: [i1.ButtonRadioDirective, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoButtonsRadioComponent;
}());
exports.DemoButtonsRadioComponent = DemoButtonsRadioComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsRadioComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-radio',
                templateUrl: './radio.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Bsqq":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/radio-with-group/radio-with-group.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-radio-with-group',\r\n  templateUrl: './radio-with-group.html'\r\n})\r\nexport class DemoButtonsRadioWithGroupComponent {\r\n  radioModel = 'Middle';\r\n  radioModelDisabled = 'Middle';\r\n  modelGroupDisabled=false\r\n}\r\n");

/***/ }),

/***/ "Crcf":
/*!***************************************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/uncheckable-radio/uncheckable-radio.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsUncheckableRadioComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoButtonsUncheckableRadioComponent = /** @class */ (function () {
    function DemoButtonsUncheckableRadioComponent() {
        this.uncheckableRadioModel = 'Middle';
    }
    DemoButtonsUncheckableRadioComponent.ɵfac = function DemoButtonsUncheckableRadioComponent_Factory(t) { return new (t || DemoButtonsUncheckableRadioComponent)(); };
    DemoButtonsUncheckableRadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsUncheckableRadioComponent, selectors: [["demo-buttons-radio-uncheckable"]], decls: 9, vars: 2, consts: [[1, "card", "card-block", "card-header"], ["btnRadioGroup", "", 1, "btn-group", 3, "ngModel", "ngModelChange"], ["btnRadio", "Left", "uncheckable", "", "tabindex", "0", "role", "button", 1, "btn", "btn-info"], ["btnRadio", "Middle", "uncheckable", "", "tabindex", "0", "role", "button", 1, "btn", "btn-info"], ["btnRadio", "Right", "uncheckable", "", "tabindex", "0", "role", "button", 1, "btn", "btn-info"]], template: function DemoButtonsUncheckableRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsUncheckableRadioComponent_Template_div_ngModelChange_2_listener($event) { return ctx.uncheckableRadioModel = $event; });
            i0.ɵɵelementStart(3, "label", 2);
            i0.ɵɵtext(4, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "label", 3);
            i0.ɵɵtext(6, "Middle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 4);
            i0.ɵɵtext(8, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.uncheckableRadioModel || "null");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.uncheckableRadioModel);
        } }, directives: [i1.ButtonRadioGroupDirective, i2.NgControlStatus, i2.NgModel, i1.ButtonRadioDirective], encapsulation: 2 });
    return DemoButtonsUncheckableRadioComponent;
}());
exports.DemoButtonsUncheckableRadioComponent = DemoButtonsUncheckableRadioComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsUncheckableRadioComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-radio-uncheckable',
                templateUrl: './uncheckable-radio.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "EKQK":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/checkbox-reactiveforms/checkbox-reactiveforms.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">{{myForm.value | json}}</pre>\r\n<form [formGroup]=\"myForm\">\r\n  <div class=\"btn-group\">\r\n    <label class=\"btn btn-primary\" [class.active]=\"myForm.value.left\"\r\n           btnCheckbox formControlName=\"left\"\r\n           tabindex=\"0\" role=\"button\">Left</label>\r\n    <label class=\"btn btn-primary\" [class.active]=\"myForm.value.middle\"\r\n           btnCheckbox formControlName=\"middle\"\r\n           tabindex=\"0\" role=\"button\">Middle</label>\r\n    <label class=\"btn btn-primary\" [class.active]=\"myForm.value.right\"\r\n           btnCheckbox formControlName=\"right\"\r\n           tabindex=\"0\" role=\"button\">Right</label>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "INbB":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/radio/radio.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-radio',\r\n  templateUrl: './radio.html'\r\n})\r\nexport class DemoButtonsRadioComponent {\r\n  radioModel = 'Middle';\r\n}\r\n");

/***/ }),

/***/ "Msmx":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/checkbox/checkbox.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsCheckboxComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoButtonsCheckboxComponent = /** @class */ (function () {
    function DemoButtonsCheckboxComponent() {
        this.checkModel = { left: false, middle: true, right: false };
    }
    DemoButtonsCheckboxComponent.ɵfac = function DemoButtonsCheckboxComponent_Factory(t) { return new (t || DemoButtonsCheckboxComponent)(); };
    DemoButtonsCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsCheckboxComponent, selectors: [["demo-buttons-checkbox"]], decls: 10, vars: 6, consts: [[1, "card", "card-block", "card-header"], [1, "btn-group"], ["btnCheckbox", "", "tabindex", "0", "role", "button", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange"]], template: function DemoButtonsCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "label", 2);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsCheckboxComponent_Template_label_ngModelChange_4_listener($event) { return ctx.checkModel.left = $event; });
            i0.ɵɵtext(5, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "label", 2);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsCheckboxComponent_Template_label_ngModelChange_6_listener($event) { return ctx.checkModel.middle = $event; });
            i0.ɵɵtext(7, "Middle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "label", 2);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsCheckboxComponent_Template_label_ngModelChange_8_listener($event) { return ctx.checkModel.right = $event; });
            i0.ɵɵtext(9, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 4, ctx.checkModel));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.checkModel.left);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.checkModel.middle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.checkModel.right);
        } }, directives: [i1.ButtonCheckboxDirective, i2.NgControlStatus, i2.NgModel], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoButtonsCheckboxComponent;
}());
exports.DemoButtonsCheckboxComponent = DemoButtonsCheckboxComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsCheckboxComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-checkbox',
                templateUrl: './checkbox.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "NkEV":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/basic/basic.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var DemoButtonsBasicComponent = /** @class */ (function () {
    function DemoButtonsBasicComponent() {
    }
    DemoButtonsBasicComponent.ɵfac = function DemoButtonsBasicComponent_Factory(t) { return new (t || DemoButtonsBasicComponent)(); };
    DemoButtonsBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsBasicComponent, selectors: [["demo-buttons-basic"]], decls: 2, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary"]], template: function DemoButtonsBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Single Button\n");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return DemoButtonsBasicComponent;
}());
exports.DemoButtonsBasicComponent = DemoButtonsBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "VL0J":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/basic/basic.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\">\r\n  Single Button\r\n</button>\r\n");

/***/ }),

/***/ "WEuY":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/disabled/disabled.ts ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-disabled',\r\n  templateUrl: './disabled.html'\r\n})\r\nexport class DemoButtonsDisabledComponent {\r\n  disabled: boolean = false;\r\n}\r\n");

/***/ }),

/***/ "YNeZ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/checkbox/checkbox.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">{{checkModel | json}}</pre>\r\n\r\n<div class=\"btn-group\">\r\n  <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.left\"\r\n         btnCheckbox tabindex=\"0\" role=\"button\">Left</label>\r\n  <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.middle\"\r\n         btnCheckbox tabindex=\"0\" role=\"button\">Middle</label>\r\n  <label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.right\"\r\n         btnCheckbox tabindex=\"0\" role=\"button\">Right</label>\r\n</div>\r\n");

/***/ }),

/***/ "cFNl":
/*!*************************************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/radio-with-group/radio-with-group.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsRadioWithGroupComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoButtonsRadioWithGroupComponent = /** @class */ (function () {
    function DemoButtonsRadioWithGroupComponent() {
        this.radioModel = 'Middle';
        this.radioModelDisabled = 'Middle';
        this.modelGroupDisabled = false;
    }
    DemoButtonsRadioWithGroupComponent.ɵfac = function DemoButtonsRadioWithGroupComponent_Factory(t) { return new (t || DemoButtonsRadioWithGroupComponent)(); };
    DemoButtonsRadioWithGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsRadioWithGroupComponent, selectors: [["demo-buttons-radio-with-group"]], decls: 24, vars: 6, consts: [[1, "card", "card-block", "card-header"], [1, "form-inline"], ["btnRadioGroup", "", 1, "btn-group", 3, "ngModel", "disabled", "ngModelChange"], ["btnRadio", "Left", 1, "btn", "btn-success"], ["btnRadio", "Middle", 1, "btn", "btn-success"], ["btnRadio", "Another", 1, "btn", "btn-success", 3, "disabled"], ["btnRadio", "Right", 1, "btn", "btn-success"], [1, "btn", "btn-warning", 3, "click"], ["btnRadioGroup", "", "disabled", "", 1, "btn-group", 3, "ngModel", "ngModelChange"]], template: function DemoButtonsRadioWithGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsRadioWithGroupComponent_Template_div_ngModelChange_3_listener($event) { return ctx.radioModel = $event; });
            i0.ɵɵelementStart(4, "label", 3);
            i0.ɵɵtext(5, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "label", 4);
            i0.ɵɵtext(7, "Middle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "label", 5);
            i0.ɵɵtext(9, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "label", 6);
            i0.ɵɵtext(11, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 7);
            i0.ɵɵlistener("click", function DemoButtonsRadioWithGroupComponent_Template_button_click_12_listener() { return ctx.modelGroupDisabled = !ctx.modelGroupDisabled; });
            i0.ɵɵtext(13, "Enable/Disable");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "pre", 0);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 1);
            i0.ɵɵelementStart(17, "div", 8);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsRadioWithGroupComponent_Template_div_ngModelChange_17_listener($event) { return ctx.radioModelDisabled = $event; });
            i0.ɵɵelementStart(18, "label", 3);
            i0.ɵɵtext(19, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "label", 4);
            i0.ɵɵtext(21, "Middle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "label", 6);
            i0.ɵɵtext(23, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.radioModel || "null");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.radioModel)("disabled", ctx.modelGroupDisabled);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", true);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.radioModelDisabled || "null");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.radioModelDisabled);
        } }, directives: [i1.ButtonRadioGroupDirective, i2.NgControlStatus, i2.NgModel, i1.ButtonRadioDirective], encapsulation: 2 });
    return DemoButtonsRadioWithGroupComponent;
}());
exports.DemoButtonsRadioWithGroupComponent = DemoButtonsRadioWithGroupComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsRadioWithGroupComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-radio-with-group',
                templateUrl: './radio-with-group.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "cb7G":
/*!*******************************************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/radio-reactiveforms/radio-reactiveforms.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsRadioReactiveFormsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoButtonsRadioReactiveFormsComponent = /** @class */ (function () {
    function DemoButtonsRadioReactiveFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    DemoButtonsRadioReactiveFormsComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            radio: 'C'
        });
    };
    DemoButtonsRadioReactiveFormsComponent.ɵfac = function DemoButtonsRadioReactiveFormsComponent_Factory(t) { return new (t || DemoButtonsRadioReactiveFormsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    DemoButtonsRadioReactiveFormsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsRadioReactiveFormsComponent, selectors: [["demo-buttons-radio-reactiveforms"]], decls: 14, vars: 4, consts: [[1, "card", "card-block", "card-header"], [1, "form-inline", 3, "formGroup"], [1, "form-group"], ["btnRadioGroup", "", "formControlName", "radio", 1, "btn-group"], ["btnRadio", "A", 1, "btn", "btn-primary"], ["btnRadio", "B", 1, "btn", "btn-primary"], ["btnRadio", "C", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"]], template: function DemoButtonsRadioReactiveFormsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "form", 1);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵelementStart(6, "label", 4);
            i0.ɵɵtext(7, "A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "label", 5);
            i0.ɵɵtext(9, "B");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "label", 6);
            i0.ɵɵtext(11, "C");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 7);
            i0.ɵɵlistener("click", function DemoButtonsRadioReactiveFormsComponent_Template_button_click_12_listener() { return ctx.myForm.disabled ? ctx.myForm.enable() : ctx.myForm.disable(); });
            i0.ɵɵtext(13, "Enable/Disable");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, ctx.myForm.value));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.myForm);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.ButtonRadioGroupDirective, i1.NgControlStatus, i1.FormControlName, i2.ButtonRadioDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoButtonsRadioReactiveFormsComponent;
}());
exports.DemoButtonsRadioReactiveFormsComponent = DemoButtonsRadioReactiveFormsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsRadioReactiveFormsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-radio-reactiveforms',
                templateUrl: './radio-reactiveforms.html'
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();


/***/ }),

/***/ "ed5y":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/uncheckable-radio/uncheckable-radio.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-radio-uncheckable',\r\n  templateUrl: './uncheckable-radio.html'\r\n})\r\nexport class DemoButtonsUncheckableRadioComponent {\r\n  uncheckableRadioModel = 'Middle';\r\n}\r\n");

/***/ }),

/***/ "gklp":
/*!*************************************************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/checkbox-reactiveforms/checkbox-reactiveforms.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsCheckboxReactiveFormsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoButtonsCheckboxReactiveFormsComponent = /** @class */ (function () {
    function DemoButtonsCheckboxReactiveFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    DemoButtonsCheckboxReactiveFormsComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            left: false,
            middle: true,
            right: false
        });
    };
    DemoButtonsCheckboxReactiveFormsComponent.ɵfac = function DemoButtonsCheckboxReactiveFormsComponent_Factory(t) { return new (t || DemoButtonsCheckboxReactiveFormsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    DemoButtonsCheckboxReactiveFormsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsCheckboxReactiveFormsComponent, selectors: [["demo-buttons-checkbox-reactiveforms"]], decls: 11, vars: 10, consts: [[1, "card", "card-block", "card-header"], [3, "formGroup"], [1, "btn-group"], ["btnCheckbox", "", "formControlName", "left", "tabindex", "0", "role", "button", 1, "btn", "btn-primary"], ["btnCheckbox", "", "formControlName", "middle", "tabindex", "0", "role", "button", 1, "btn", "btn-primary"], ["btnCheckbox", "", "formControlName", "right", "tabindex", "0", "role", "button", 1, "btn", "btn-primary"]], template: function DemoButtonsCheckboxReactiveFormsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "form", 1);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "label", 3);
            i0.ɵɵtext(6, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "label", 4);
            i0.ɵɵtext(8, "Middle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "label", 5);
            i0.ɵɵtext(10, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 8, ctx.myForm.value));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.myForm);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.myForm.value.left);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.myForm.value.middle);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.myForm.value.right);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.ButtonCheckboxDirective, i1.NgControlStatus, i1.FormControlName], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoButtonsCheckboxReactiveFormsComponent;
}());
exports.DemoButtonsCheckboxReactiveFormsComponent = DemoButtonsCheckboxReactiveFormsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsCheckboxReactiveFormsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-checkbox-reactiveforms',
                templateUrl: './checkbox-reactiveforms.html'
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();


/***/ }),

/***/ "iSbs":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+buttons/buttons-section.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var buttons_section_list_1 = __webpack_require__(/*! ./buttons-section.list */ "8sFZ");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
        this.name = 'Buttons';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/buttons';
        this.componentContent = buttons_section_list_1.demoComponentContent;
    }
    ButtonsSectionComponent.ɵfac = function ButtonsSectionComponent_Factory(t) { return new (t || ButtonsSectionComponent)(); };
    ButtonsSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonsSectionComponent, selectors: [["buttons-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function ButtonsSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return ButtonsSectionComponent;
}());
exports.ButtonsSectionComponent = ButtonsSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonsSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'buttons-section',
                templateUrl: './buttons-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "jFwS":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/checkbox/checkbox.ts ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-checkbox',\r\n  templateUrl: './checkbox.html'\r\n})\r\nexport class DemoButtonsCheckboxComponent {\r\n  checkModel: any = { left: false, middle: true, right: false };\r\n}\r\n");

/***/ }),

/***/ "l2NX":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/disabled/disabled.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsDisabledComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var DemoButtonsDisabledComponent = /** @class */ (function () {
    function DemoButtonsDisabledComponent() {
        this.disabled = false;
    }
    DemoButtonsDisabledComponent.ɵfac = function DemoButtonsDisabledComponent_Factory(t) { return new (t || DemoButtonsDisabledComponent)(); };
    DemoButtonsDisabledComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsDisabledComponent, selectors: [["demo-buttons-disabled"]], decls: 4, vars: 1, consts: [["type", "button", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]], template: function DemoButtonsDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, "Button");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function DemoButtonsDisabledComponent_Template_button_click_2_listener() { return ctx.disabled = !ctx.disabled; });
            i0.ɵɵtext(3, "Enable/Disable");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("disabled", ctx.disabled);
        } }, encapsulation: 2 });
    return DemoButtonsDisabledComponent;
}());
exports.DemoButtonsDisabledComponent = DemoButtonsDisabledComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsDisabledComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-buttons-disabled',
                templateUrl: './disabled.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "lQGh":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demo-buttons.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var buttons_1 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var buttons_section_component_1 = __webpack_require__(/*! ./buttons-section.component */ "iSbs");
var demos_1 = __webpack_require__(/*! ./demos */ "7oHN");
var demo_buttons_routes_1 = __webpack_require__(/*! ./demo-buttons.routes */ "nkUQ");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/basic/basic */ "NkEV");
var i2 = __webpack_require__(/*! ./demos/custom-checkbox-value/custom-checkbox-value */ "vGmA");
var i3 = __webpack_require__(/*! ./demos/checkbox/checkbox */ "Msmx");
var i4 = __webpack_require__(/*! ./demos/radio/radio */ "8ye0");
var i5 = __webpack_require__(/*! ./demos/radio-with-group/radio-with-group */ "cFNl");
var i6 = __webpack_require__(/*! ./demos/checkbox-reactiveforms/checkbox-reactiveforms */ "gklp");
var i7 = __webpack_require__(/*! ./demos/radio-reactiveforms/radio-reactiveforms */ "cb7G");
var i8 = __webpack_require__(/*! ./demos/disabled/disabled */ "l2NX");
var i9 = __webpack_require__(/*! ./demos/uncheckable-radio/uncheckable-radio */ "Crcf");
var i10 = __webpack_require__(/*! @angular/router */ "tyNb");
var i11 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var DemoButtonsModule = /** @class */ (function () {
    function DemoButtonsModule() {
    }
    DemoButtonsModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoButtonsModule });
    DemoButtonsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoButtonsModule_Factory(t) { return new (t || DemoButtonsModule)(); }, imports: [[
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_buttons_routes_1.routes),
                buttons_1.ButtonsModule.forRoot()
            ]] });
    return DemoButtonsModule;
}());
exports.DemoButtonsModule = DemoButtonsModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoButtonsModule, { declarations: [buttons_section_component_1.ButtonsSectionComponent, i1.DemoButtonsBasicComponent, i2.DemoButtonsCustomCheckboxValueComponent, i3.DemoButtonsCheckboxComponent, i4.DemoButtonsRadioComponent, i5.DemoButtonsRadioWithGroupComponent, i6.DemoButtonsCheckboxReactiveFormsComponent, i7.DemoButtonsRadioReactiveFormsComponent, i8.DemoButtonsDisabledComponent, i9.DemoButtonsUncheckableRadioComponent], imports: [forms_1.FormsModule,
        forms_1.ReactiveFormsModule,
        common_1.CommonModule,
        docs_1.DocsModule, i10.RouterModule, i11.ButtonsModule], exports: [buttons_section_component_1.ButtonsSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    buttons_section_component_1.ButtonsSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    common_1.CommonModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_buttons_routes_1.routes),
                    buttons_1.ButtonsModule.forRoot()
                ],
                exports: [buttons_section_component_1.ButtonsSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "nkUQ":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demo-buttons.routes.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var buttons_section_component_1 = __webpack_require__(/*! ./buttons-section.component */ "iSbs");
exports.routes = [{ path: '', component: buttons_section_component_1.ButtonsSectionComponent }];


/***/ }),

/***/ "rQhE":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/basic/basic.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoButtonsBasicComponent {}\r\n");

/***/ }),

/***/ "rjbT":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/checkbox-reactiveforms/checkbox-reactiveforms.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from '@angular/core';\r\nimport { FormBuilder, FormGroup } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'demo-buttons-checkbox-reactiveforms',\r\n  templateUrl: './checkbox-reactiveforms.html'\r\n})\r\nexport class DemoButtonsCheckboxReactiveFormsComponent implements OnInit {\r\n  myForm: FormGroup;\r\n\r\n  constructor(private formBuilder: FormBuilder) {}\r\n\r\n  ngOnInit() {\r\n    this.myForm = this.formBuilder.group({\r\n      left: false,\r\n      middle: true,\r\n      right: false\r\n    });\r\n  }\r\n}\r\n");

/***/ }),

/***/ "sUJ9":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/docs/usage.md ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { ButtonsModule } from 'bao-tran-angular/buttons';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { ButtonsModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [ButtonsModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "uya6":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+buttons/demos/radio/radio.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">{{radioModel || 'null'}}</pre>\r\n<div class=\"btn-group\">\r\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\r\n         btnRadio=\"Left\" tabindex=\"0\" role=\"button\">Left</label>\r\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\r\n         btnRadio=\"Middle\" tabindex=\"0\" role=\"button\">Middle</label>\r\n  <label class=\"btn btn-primary\" [(ngModel)]=\"radioModel\"\r\n         btnRadio=\"Right\" tabindex=\"0\" role=\"button\">Right</label>\r\n</div>\r\n");

/***/ }),

/***/ "vGmA":
/*!***********************************************************************************************!*\
  !*** ./demo/src/app/components/+buttons/demos/custom-checkbox-value/custom-checkbox-value.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoButtonsCustomCheckboxValueComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/buttons */ "4eYB");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var DemoButtonsCustomCheckboxValueComponent = /** @class */ (function () {
    function DemoButtonsCustomCheckboxValueComponent() {
        this.singleModel = '1';
    }
    DemoButtonsCustomCheckboxValueComponent.ɵfac = function DemoButtonsCustomCheckboxValueComponent_Factory(t) { return new (t || DemoButtonsCustomCheckboxValueComponent)(); };
    DemoButtonsCustomCheckboxValueComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoButtonsCustomCheckboxValueComponent, selectors: [["demo-custom-checkbox-value"]], decls: 4, vars: 2, consts: [[1, "card", "card-block", "card-header"], ["type", "button", "btnCheckbox", "", "btnCheckboxTrue", "1", "btnCheckboxFalse", "0", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange"]], template: function DemoButtonsCustomCheckboxValueComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("ngModelChange", function DemoButtonsCustomCheckboxValueComponent_Template_button_ngModelChange_2_listener($event) { return ctx.singleModel = $event; });
            i0.ɵɵtext(3, " Single Toggle\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.singleModel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.singleModel);
        } }, directives: [i1.ButtonCheckboxDirective, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return DemoButtonsCustomCheckboxValueComponent;
}());
exports.DemoButtonsCustomCheckboxValueComponent = DemoButtonsCustomCheckboxValueComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoButtonsCustomCheckboxValueComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-custom-checkbox-value',
                templateUrl: './custom-checkbox-value.html'
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-buttons-demo-buttons-module.js.map