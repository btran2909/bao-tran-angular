exports.ids = ["components-typeahead-demo-typeahead-module"];
exports.modules = {

/***/ "/GSO":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/no-result/no-result.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadNoResultComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
function DemoTypeaheadNoResultComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1, "No Results Found");
    i0.ɵɵelementEnd();
} }
var DemoTypeaheadNoResultComponent = /** @class */ (function () {
    function DemoTypeaheadNoResultComponent() {
        this.noResult = false;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadNoResultComponent.prototype.typeaheadNoResults = function (event) {
        this.noResult = event;
    };
    DemoTypeaheadNoResultComponent.ɵfac = function DemoTypeaheadNoResultComponent_Factory(t) { return new (t || DemoTypeaheadNoResultComponent)(); };
    DemoTypeaheadNoResultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadNoResultComponent, selectors: [["demo-typeahead-no-result"]], decls: 5, vars: 6, consts: [[1, "card", "card-block", "card-header"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-control", 3, "ngModel", "typeahead", "ngModelChange", "typeaheadNoResults"], [1, "alert", "alert-danger"]], template: function DemoTypeaheadNoResultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DemoTypeaheadNoResultComponent_div_3_Template, 2, 0, "div", 1);
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadNoResultComponent_Template_input_ngModelChange_4_listener($event) { return ctx.selected = $event; })("typeaheadNoResults", function DemoTypeaheadNoResultComponent_Template_input_typeaheadNoResults_4_listener($event) { return ctx.typeaheadNoResults($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.noResult);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states);
        } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TypeaheadDirective], pipes: [i1.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadNoResultComponent;
}());
exports.DemoTypeaheadNoResultComponent = DemoTypeaheadNoResultComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadNoResultComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-no-result',
                templateUrl: './no-result.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "/mQM":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/selected-first-item/selected-first-item.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-selected-first-item',\r\n  templateUrl: './selected-first-item.html'\r\n})\r\nexport class DemotypeaheadSelectFirstItemComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "0bRp":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/ordering/ordering.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from '@angular/core';\n\nimport { TypeaheadOrder } from 'bao-tran-angular/typeahead';\nimport { Observable, of, Subscriber } from 'rxjs';\nimport { switchMap } from 'rxjs/operators';\n\n@Component({\n  selector: 'demo-typeahead-ordering',\n  templateUrl: './ordering.html'\n})\nexport class DemoTypeaheadOrderingComponent implements OnInit {\n  selected1: string;\n  selected2: string;\n  selected3: string;\n  selected4: string;\n  sortConfig1: TypeaheadOrder = {\n    direction: 'desc'\n  };\n  sortConfig2: TypeaheadOrder = {\n    direction: 'asc'\n  };\n  sortConfig3: TypeaheadOrder = {\n    direction: 'asc',\n    field: 'city'\n  };\n  states$: Observable<string[]>;\n  states: string[] = [\n    'New Mexico',\n    'New York',\n    'North Dakota',\n    'North Carolina',\n    'Ohio',\n    'Oklahoma',\n    'Oregon',\n    'Pennsylvania',\n    'Rhode Island',\n    'South Carolina',\n    'South Dakota',\n    'Tennessee',\n    'Texas',\n    'Utah',\n    'Alaska',\n    'Alabama',\n    'Iowa',\n    'Kansas',\n    'Kentucky',\n    'Louisiana',\n    'Maine',\n    'Maryland',\n    'Massachusetts',\n    'Michigan',\n    'Minnesota',\n    'Mississippi',\n    'Missouri',\n    'Montana',\n    'Nebraska',\n    'Nevada',\n    'New Hampshire',\n    'New Jersey',\n    'Arizona',\n    'Arkansas',\n    'California',\n    'Colorado',\n    'Connecticut',\n    'Delaware',\n    'Florida',\n    'Georgia',\n    'Hawaii',\n    'Idaho',\n    'Illinois',\n    'Indiana',\n    'Vermont',\n    'Virginia',\n    'Washington',\n    'West Virginia',\n    'Wisconsin',\n    'Wyoming'\n  ];\n  cities = [{\n    city: 'Norton',\n    state: 'Virginia',\n    code: '61523'\n  }, {\n    city: 'Grundy',\n    state: 'Virginia',\n    code: '77054'\n  }, {\n    city: 'Coeburn',\n    state: 'Virginia',\n    code: '01665'\n  }, {\n    city: 'Phoenix',\n    state: 'Arizona',\n    code: '29128'\n  }, {\n    city: 'Tucson',\n    state: 'Arizona',\n    code: '32084'\n  }, {\n    city: 'Mesa',\n    state: 'Arizona',\n    code: '21465'\n  }, {\n    city: 'Independence',\n    state: 'Missouri',\n    code: '26887'\n  }, {\n    city: 'Kansas City',\n    state: 'Missouri',\n    code: '79286'\n  }, {\n    city: 'Springfield',\n    state: 'Missouri',\n    code: '92325'\n  }, {\n    city: 'St. Louis',\n    state: 'Missouri',\n    code: '64891'\n  }];\n\n  ngOnInit(): void {\n    this.states$ = new Observable((observer: Subscriber<string>) => {\n      // Runs on every search\n      observer.next(this.selected4);\n    })\n      .pipe(\n        switchMap((token: string) => {\n          const query = new RegExp(token, 'i');\n\n          return of(\n            this.states.filter((state: string) => query.test(state))\n          );\n        })\n      );\n  }\n}\n");

/***/ }),

/***/ "11RB":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/first-item-active/first-item-active.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-first-item-active',\r\n  templateUrl: './first-item-active.html'\r\n})\r\nexport class DemoTypeaheadFirstItemActiveComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "3dxZ":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/no-result/no-result.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n<div class=\"alert alert-danger\" *ngIf=\"noResult\">No Results Found</div>\r\n\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       (typeaheadNoResults)=\"typeaheadNoResults($event)\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "3mDI":
/*!*************************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/multiple-search/multiple-search.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadMultipleSearchComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadMultipleSearchComponent = /** @class */ (function () {
    function DemoTypeaheadMultipleSearchComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadMultipleSearchComponent.ɵfac = function DemoTypeaheadMultipleSearchComponent_Factory(t) { return new (t || DemoTypeaheadMultipleSearchComponent)(); };
    DemoTypeaheadMultipleSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadMultipleSearchComponent, selectors: [["demo-typeahead-multiple-search"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header"], ["typeaheadMultipleSearchDelimiters", ",|", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadMultipleSearch", "ngModelChange"]], template: function DemoTypeaheadMultipleSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadMultipleSearchComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadMultipleSearch", true);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadMultipleSearchComponent;
}());
exports.DemoTypeaheadMultipleSearchComponent = DemoTypeaheadMultipleSearchComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadMultipleSearchComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-multiple-search',
                templateUrl: './multiple-search.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "48SJ":
/*!*****************************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/adaptive-position/adaptive-position.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadAdaptivePositionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadAdaptivePositionComponent = /** @class */ (function () {
    function DemoTypeaheadAdaptivePositionComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadAdaptivePositionComponent.ɵfac = function DemoTypeaheadAdaptivePositionComponent_Factory(t) { return new (t || DemoTypeaheadAdaptivePositionComponent)(); };
    DemoTypeaheadAdaptivePositionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadAdaptivePositionComponent, selectors: [["demo-typeahead-adaptive-position"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "adaptivePosition", "ngModelChange"]], template: function DemoTypeaheadAdaptivePositionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadAdaptivePositionComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("adaptivePosition", true);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadAdaptivePositionComponent;
}());
exports.DemoTypeaheadAdaptivePositionComponent = DemoTypeaheadAdaptivePositionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadAdaptivePositionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-adaptive-position',
                templateUrl: './adaptive-position.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "4NyX":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/animated/animated.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-animated',\r\n  templateUrl: './animated.html'\r\n})\r\nexport class DemoTypeaheadAnimatedComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "4Trs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/config/config.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { TypeaheadConfig } from 'bao-tran-angular/typeahead';\n\n// such override allows to keep some initial values\nexport function getTypeaheadConfig(): TypeaheadConfig {\n  return Object.assign(new TypeaheadConfig(), { hideResultsOnBlur: false });\n}\n\n@Component({\n  selector: 'demo-typeahead-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TypeaheadConfig, useFactory: getTypeaheadConfig }]\n})\nexport class DemoTypeaheadConfigComponent {\n  selected: string;\n  states: string[] = [\n    'Alabama',\n    'Alaska',\n    'Arizona',\n    'Arkansas',\n    'California',\n    'Colorado',\n    'Connecticut',\n    'Delaware',\n    'Florida',\n    'Georgia',\n    'Hawaii',\n    'Idaho',\n    'Illinois',\n    'Indiana',\n    'Iowa',\n    'Kansas',\n    'Kentucky',\n    'Louisiana',\n    'Maine',\n    'Maryland',\n    'Massachusetts',\n    'Michigan',\n    'Minnesota',\n    'Mississippi',\n    'Missouri',\n    'Montana',\n    'Nebraska',\n    'Nevada',\n    'New Hampshire',\n    'New Jersey',\n    'New Mexico',\n    'New York',\n    'North Dakota',\n    'North Carolina',\n    'Ohio',\n    'Oklahoma',\n    'Oregon',\n    'Pennsylvania',\n    'Rhode Island',\n    'South Carolina',\n    'South Dakota',\n    'Tennessee',\n    'Texas',\n    'Utah',\n    'Vermont',\n    'Virginia',\n    'Washington',\n    'West Virginia',\n    'Wisconsin',\n    'Wyoming'\n  ];\n}\n");

/***/ }),

/***/ "4vHX":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/show-on-blur/show-on-blur.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadShowOnBlurComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadShowOnBlurComponent = /** @class */ (function () {
    function DemoTypeaheadShowOnBlurComponent() {
        this.typeaheadHideResultsOnBlur = false;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadShowOnBlurComponent.ɵfac = function DemoTypeaheadShowOnBlurComponent_Factory(t) { return new (t || DemoTypeaheadShowOnBlurComponent)(); };
    DemoTypeaheadShowOnBlurComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadShowOnBlurComponent, selectors: [["demo-typeahead-show-on-blur"]], decls: 6, vars: 7, consts: [["type", "button", 1, "btn", "btn-primary", "mb-3", 3, "click"], [1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadHideResultsOnBlur", "ngModelChange"]], template: function DemoTypeaheadShowOnBlurComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoTypeaheadShowOnBlurComponent_Template_button_click_0_listener() { return ctx.typeaheadHideResultsOnBlur = !ctx.typeaheadHideResultsOnBlur; });
            i0.ɵɵtext(1, "Toggle typeaheadHideResultsOnBlur\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "pre", 1);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadShowOnBlurComponent_Template_input_ngModelChange_5_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("  typeaheadHideResultsOnBlur: ", ctx.typeaheadHideResultsOnBlur, "\n  Model: ", i0.ɵɵpipeBind1(4, 5, ctx.selected), "\n");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadHideResultsOnBlur", ctx.typeaheadHideResultsOnBlur);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadShowOnBlurComponent;
}());
exports.DemoTypeaheadShowOnBlurComponent = DemoTypeaheadShowOnBlurComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadShowOnBlurComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-show-on-blur',
                templateUrl: './show-on-blur.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "66IV":
/*!***************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/scrollable/scrollable.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadScrollableComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadScrollableComponent = /** @class */ (function () {
    function DemoTypeaheadScrollableComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadScrollableComponent.ɵfac = function DemoTypeaheadScrollableComponent_Factory(t) { return new (t || DemoTypeaheadScrollableComponent)(); };
    DemoTypeaheadScrollableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadScrollableComponent, selectors: [["demo-typeahead-scrollable"]], decls: 4, vars: 7, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadScrollable", "typeaheadOptionsInScrollableView", "ngModelChange"]], template: function DemoTypeaheadScrollableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadScrollableComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 5, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadScrollable", true)("typeaheadOptionsInScrollableView", 5);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadScrollableComponent;
}());
exports.DemoTypeaheadScrollableComponent = DemoTypeaheadScrollableComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadScrollableComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-scrollable',
                templateUrl: './scrollable.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "6q8U":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/config/config.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadConfigComponent = exports.getTypeaheadConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var typeahead_1 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
// such override allows to keep some initial values
function getTypeaheadConfig() {
    return Object.assign(new typeahead_1.TypeaheadConfig(), { hideResultsOnBlur: false });
}
exports.getTypeaheadConfig = getTypeaheadConfig;
var DemoTypeaheadConfigComponent = /** @class */ (function () {
    function DemoTypeaheadConfigComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadConfigComponent.ɵfac = function DemoTypeaheadConfigComponent_Factory(t) { return new (t || DemoTypeaheadConfigComponent)(); };
    DemoTypeaheadConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadConfigComponent, selectors: [["demo-typeahead-config"]], features: [i0.ɵɵProvidersFeature([{ provide: typeahead_1.TypeaheadConfig, useFactory: getTypeaheadConfig }])], decls: 1, vars: 2, consts: [[1, "form-control", 3, "ngModel", "typeahead", "ngModelChange"]], template: function DemoTypeaheadConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadConfigComponent_Template_input_ngModelChange_0_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], encapsulation: 2 });
    return DemoTypeaheadConfigComponent;
}());
exports.DemoTypeaheadConfigComponent = DemoTypeaheadConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-config',
                templateUrl: './config.html',
                providers: [{ provide: typeahead_1.TypeaheadConfig, useFactory: getTypeaheadConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "72st":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/first-item-active/first-item-active.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadIsFirstItemActive]=\"false\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "7mX/":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/on-select/on-select.ts ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { TypeaheadMatch } from 'bao-tran-angular/typeahead/typeahead-match.class';\n\n@Component({\n  selector: 'demo-typeahead-on-select',\n  templateUrl: './on-select.html'\n})\nexport class DemoTypeaheadOnSelectComponent {\n  selectedValue: string;\n  selectedOption: any;\n  previewOption: any = null;\n  states: any[] = [\n    { id: 1, name: 'Alabama', region: 'South' },\n    { id: 2, name: 'Alaska', region: 'West' },\n    { id: 3, name: 'Arizona', region: 'West' },\n    { id: 4, name: 'Arkansas', region: 'South' },\n    { id: 5, name: 'California', region: 'West' },\n    { id: 6, name: 'Colorado', region: 'West' },\n    { id: 7, name: 'Connecticut', region: 'Northeast' },\n    { id: 8, name: 'Delaware', region: 'South' },\n    { id: 9, name: 'Florida', region: 'South' },\n    { id: 10, name: 'Georgia', region: 'South' },\n    { id: 11, name: 'Hawaii', region: 'West' },\n    { id: 12, name: 'Idaho', region: 'West' },\n    { id: 13, name: 'Illinois', region: 'Midwest' },\n    { id: 14, name: 'Indiana', region: 'Midwest' },\n    { id: 15, name: 'Iowa', region: 'Midwest' },\n    { id: 16, name: 'Kansas', region: 'Midwest' },\n    { id: 17, name: 'Kentucky', region: 'South' },\n    { id: 18, name: 'Louisiana', region: 'South' },\n    { id: 19, name: 'Maine', region: 'Northeast' },\n    { id: 21, name: 'Maryland', region: 'South' },\n    { id: 22, name: 'Massachusetts', region: 'Northeast' },\n    { id: 23, name: 'Michigan', region: 'Midwest' },\n    { id: 24, name: 'Minnesota', region: 'Midwest' },\n    { id: 25, name: 'Mississippi', region: 'South' },\n    { id: 26, name: 'Missouri', region: 'Midwest' },\n    { id: 27, name: 'Montana', region: 'West' },\n    { id: 28, name: 'Nebraska', region: 'Midwest' },\n    { id: 29, name: 'Nevada', region: 'West' },\n    { id: 30, name: 'New Hampshire', region: 'Northeast' },\n    { id: 31, name: 'New Jersey', region: 'Northeast' },\n    { id: 32, name: 'New Mexico', region: 'West' },\n    { id: 33, name: 'New York', region: 'Northeast' },\n    { id: 34, name: 'North Dakota', region: 'Midwest' },\n    { id: 35, name: 'North Carolina', region: 'South' },\n    { id: 36, name: 'Ohio', region: 'Midwest' },\n    { id: 37, name: 'Oklahoma', region: 'South' },\n    { id: 38, name: 'Oregon', region: 'West' },\n    { id: 39, name: 'Pennsylvania', region: 'Northeast' },\n    { id: 40, name: 'Rhode Island', region: 'Northeast' },\n    { id: 41, name: 'South Carolina', region: 'South' },\n    { id: 42, name: 'South Dakota', region: 'Midwest' },\n    { id: 43, name: 'Tennessee', region: 'South' },\n    { id: 44, name: 'Texas', region: 'South' },\n    { id: 45, name: 'Utah', region: 'West' },\n    { id: 46, name: 'Vermont', region: 'Northeast' },\n    { id: 47, name: 'Virginia', region: 'South' },\n    { id: 48, name: 'Washington', region: 'South' },\n    { id: 49, name: 'West Virginia', region: 'South' },\n    { id: 50, name: 'Wisconsin', region: 'Midwest' },\n    { id: 51, name: 'Wyoming', region: 'West' }\n  ];\n\n  onSelect(event: TypeaheadMatch): void {\n    this.selectedOption = event.item;\n  }\n\n  onPreview(event: TypeaheadMatch): void {\n    if (event) {\n      this.previewOption = event.item;\n    } else {\n      this.previewOption = null;\n    }\n  }\n}\n");

/***/ }),

/***/ "9Yxd":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/dropup/dropup.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [dropup]=\"true\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "9r8w":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demo-typeahead.routes.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var typeahead_section_component_1 = __webpack_require__(/*! ./typeahead-section.component */ "VH/0");
exports.routes = [{ path: '', component: typeahead_section_component_1.TypeaheadSectionComponent }];


/***/ }),

/***/ "AcOC":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/item-template/item-template.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\r\n  <h5>This is: {{model | json}} Index: {{ index }}</h5>\r\n</ng-template>\r\n\r\n<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadItemTemplate]=\"customItemTemplate\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "Ax1w":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/item-template/item-template.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-item-template',\r\n  templateUrl: './item-template.html'\r\n})\r\nexport class DemoTypeaheadItemTemplateComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "Bdl8":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/on-blur/on-blur.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadOnBlurComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadOnBlurComponent = /** @class */ (function () {
    function DemoTypeaheadOnBlurComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadOnBlurComponent.prototype.typeaheadOnBlur = function (event) {
        this.optionOnBlur = event.item;
    };
    DemoTypeaheadOnBlurComponent.ɵfac = function DemoTypeaheadOnBlurComponent_Factory(t) { return new (t || DemoTypeaheadOnBlurComponent)(); };
    DemoTypeaheadOnBlurComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadOnBlurComponent, selectors: [["demo-typeahead-on-blur"]], decls: 7, vars: 8, consts: [[1, "card", "card-block", "card-header"], [1, "form-control", 3, "ngModel", "typeahead", "ngModelChange", "typeaheadOnBlur"]], template: function DemoTypeaheadOnBlurComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "pre", 0);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadOnBlurComponent_Template_input_ngModelChange_6_listener($event) { return ctx.selected = $event; })("typeaheadOnBlur", function DemoTypeaheadOnBlurComponent_Template_input_typeaheadOnBlur_6_listener($event) { return ctx.typeaheadOnBlur($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Option on blur: ", i0.ɵɵpipeBind1(5, 6, ctx.optionOnBlur), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadOnBlurComponent;
}());
exports.DemoTypeaheadOnBlurComponent = DemoTypeaheadOnBlurComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadOnBlurComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-on-blur',
                templateUrl: './on-blur.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "BxZE":
/*!***************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/min-length/min-length.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadMinLengthComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadMinLengthComponent = /** @class */ (function () {
    function DemoTypeaheadMinLengthComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadMinLengthComponent.ɵfac = function DemoTypeaheadMinLengthComponent_Factory(t) { return new (t || DemoTypeaheadMinLengthComponent)(); };
    DemoTypeaheadMinLengthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadMinLengthComponent, selectors: [["demo-typeahead-min-length"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadMinLength", "ngModelChange"]], template: function DemoTypeaheadMinLengthComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadMinLengthComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadMinLength", 0);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadMinLengthComponent;
}());
exports.DemoTypeaheadMinLengthComponent = DemoTypeaheadMinLengthComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadMinLengthComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-min-length',
                templateUrl: './min-length.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "CR70":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/on-select/on-select.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadOnSelectComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTypeaheadOnSelectComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.previewOption == null ? null : ctx_r0.previewOption.region);
} }
function DemoTypeaheadOnSelectComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "N/A");
    i0.ɵɵelementEnd();
} }
var DemoTypeaheadOnSelectComponent = /** @class */ (function () {
    function DemoTypeaheadOnSelectComponent() {
        this.previewOption = null;
        this.states = [
            { id: 1, name: 'Alabama', region: 'South' },
            { id: 2, name: 'Alaska', region: 'West' },
            { id: 3, name: 'Arizona', region: 'West' },
            { id: 4, name: 'Arkansas', region: 'South' },
            { id: 5, name: 'California', region: 'West' },
            { id: 6, name: 'Colorado', region: 'West' },
            { id: 7, name: 'Connecticut', region: 'Northeast' },
            { id: 8, name: 'Delaware', region: 'South' },
            { id: 9, name: 'Florida', region: 'South' },
            { id: 10, name: 'Georgia', region: 'South' },
            { id: 11, name: 'Hawaii', region: 'West' },
            { id: 12, name: 'Idaho', region: 'West' },
            { id: 13, name: 'Illinois', region: 'Midwest' },
            { id: 14, name: 'Indiana', region: 'Midwest' },
            { id: 15, name: 'Iowa', region: 'Midwest' },
            { id: 16, name: 'Kansas', region: 'Midwest' },
            { id: 17, name: 'Kentucky', region: 'South' },
            { id: 18, name: 'Louisiana', region: 'South' },
            { id: 19, name: 'Maine', region: 'Northeast' },
            { id: 21, name: 'Maryland', region: 'South' },
            { id: 22, name: 'Massachusetts', region: 'Northeast' },
            { id: 23, name: 'Michigan', region: 'Midwest' },
            { id: 24, name: 'Minnesota', region: 'Midwest' },
            { id: 25, name: 'Mississippi', region: 'South' },
            { id: 26, name: 'Missouri', region: 'Midwest' },
            { id: 27, name: 'Montana', region: 'West' },
            { id: 28, name: 'Nebraska', region: 'Midwest' },
            { id: 29, name: 'Nevada', region: 'West' },
            { id: 30, name: 'New Hampshire', region: 'Northeast' },
            { id: 31, name: 'New Jersey', region: 'Northeast' },
            { id: 32, name: 'New Mexico', region: 'West' },
            { id: 33, name: 'New York', region: 'Northeast' },
            { id: 34, name: 'North Dakota', region: 'Midwest' },
            { id: 35, name: 'North Carolina', region: 'South' },
            { id: 36, name: 'Ohio', region: 'Midwest' },
            { id: 37, name: 'Oklahoma', region: 'South' },
            { id: 38, name: 'Oregon', region: 'West' },
            { id: 39, name: 'Pennsylvania', region: 'Northeast' },
            { id: 40, name: 'Rhode Island', region: 'Northeast' },
            { id: 41, name: 'South Carolina', region: 'South' },
            { id: 42, name: 'South Dakota', region: 'Midwest' },
            { id: 43, name: 'Tennessee', region: 'South' },
            { id: 44, name: 'Texas', region: 'South' },
            { id: 45, name: 'Utah', region: 'West' },
            { id: 46, name: 'Vermont', region: 'Northeast' },
            { id: 47, name: 'Virginia', region: 'South' },
            { id: 48, name: 'Washington', region: 'South' },
            { id: 49, name: 'West Virginia', region: 'South' },
            { id: 50, name: 'Wisconsin', region: 'Midwest' },
            { id: 51, name: 'Wyoming', region: 'West' }
        ];
    }
    DemoTypeaheadOnSelectComponent.prototype.onSelect = function (event) {
        this.selectedOption = event.item;
    };
    DemoTypeaheadOnSelectComponent.prototype.onPreview = function (event) {
        if (event) {
            this.previewOption = event.item;
        }
        else {
            this.previewOption = null;
        }
    };
    DemoTypeaheadOnSelectComponent.ɵfac = function DemoTypeaheadOnSelectComponent_Factory(t) { return new (t || DemoTypeaheadOnSelectComponent)(); };
    DemoTypeaheadOnSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadOnSelectComponent, selectors: [["demo-typeahead-on-select"]], decls: 12, vars: 10, consts: [[1, "card", "card-block", "card-header", "mb-3"], ["typeaheadOptionField", "name", 1, "form-control", 3, "ngModel", "typeahead", "ngModelChange", "typeaheadOnSelect", "typeaheadOnPreview"], [1, "card", "card-block", "card-header", "mb-3", 2, "float", "right", "width", "160px"], [4, "ngIf"]], template: function DemoTypeaheadOnSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "pre", 0);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div");
            i0.ɵɵelementStart(7, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadOnSelectComponent_Template_input_ngModelChange_7_listener($event) { return ctx.selectedValue = $event; })("typeaheadOnSelect", function DemoTypeaheadOnSelectComponent_Template_input_typeaheadOnSelect_7_listener($event) { return ctx.onSelect($event); })("typeaheadOnPreview", function DemoTypeaheadOnSelectComponent_Template_input_typeaheadOnPreview_7_listener($event) { return ctx.onPreview($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2);
            i0.ɵɵtext(9, " Preview region: ");
            i0.ɵɵtemplate(10, DemoTypeaheadOnSelectComponent_span_10_Template, 2, 1, "span", 3);
            i0.ɵɵtemplate(11, DemoTypeaheadOnSelectComponent_span_11_Template, 2, 0, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 6, ctx.selectedValue), "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Selected option: ", i0.ɵɵpipeBind1(5, 8, ctx.selectedOption), "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.selectedValue)("typeahead", ctx.states);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.previewOption != null);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.previewOption == null);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective, i3.NgIf], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadOnSelectComponent;
}());
exports.DemoTypeaheadOnSelectComponent = DemoTypeaheadOnSelectComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadOnSelectComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-on-select',
                templateUrl: './on-select.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "DV2g":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/single-world/single-world.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        (click)=\"typeaheadSingleWords = !typeaheadSingleWords\">Toggle typeaheadSingleWords\r\n</button>\r\n<pre class=\"card card-block card-header\">\r\n  typeaheadSingleWords: {{typeaheadSingleWords}}\r\n  Model: {{selected | json}}\r\n</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadSingleWords]=\"typeaheadSingleWords\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "DaIi":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/item-template/item-template.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadItemTemplateComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTypeaheadItemTemplateComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h5");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "json");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var model_r2 = ctx.item;
    var index_r3 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("This is: ", i0.ɵɵpipeBind1(2, 2, model_r2), " Index: ", index_r3, "");
} }
var DemoTypeaheadItemTemplateComponent = /** @class */ (function () {
    function DemoTypeaheadItemTemplateComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadItemTemplateComponent.ɵfac = function DemoTypeaheadItemTemplateComponent_Factory(t) { return new (t || DemoTypeaheadItemTemplateComponent)(); };
    DemoTypeaheadItemTemplateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadItemTemplateComponent, selectors: [["demo-typeahead-item-template"]], decls: 6, vars: 6, consts: [["customItemTemplate", ""], [1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadItemTemplate", "ngModelChange"]], template: function DemoTypeaheadItemTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoTypeaheadItemTemplateComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "pre", 1);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadItemTemplateComponent_Template_input_ngModelChange_5_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(4, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadItemTemplate", _r0);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadItemTemplateComponent;
}());
exports.DemoTypeaheadItemTemplateComponent = DemoTypeaheadItemTemplateComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadItemTemplateComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-item-template',
                templateUrl: './item-template.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "DyAL":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/grouping/grouping.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{groupSelected | json}}</pre>\r\n<input [(ngModel)]=\"groupSelected\"\r\n       [typeahead]=\"statesComplex\"\r\n       typeaheadOptionField=\"name\"\r\n       typeaheadGroupField=\"region\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "Ecca":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/phrase-delimiters/phrase-delimiters.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadSingleWords]=\"true\"\r\n       typeaheadPhraseDelimiters=\"&,\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "F+Ot":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/single-world/single-world.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadSingleWorldComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadSingleWorldComponent = /** @class */ (function () {
    function DemoTypeaheadSingleWorldComponent() {
        this.typeaheadSingleWords = true;
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadSingleWorldComponent.ɵfac = function DemoTypeaheadSingleWorldComponent_Factory(t) { return new (t || DemoTypeaheadSingleWorldComponent)(); };
    DemoTypeaheadSingleWorldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadSingleWorldComponent, selectors: [["demo-typeahead-single-world"]], decls: 6, vars: 7, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card", "card-block", "card-header"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadSingleWords", "ngModelChange"]], template: function DemoTypeaheadSingleWorldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function DemoTypeaheadSingleWorldComponent_Template_button_click_0_listener() { return ctx.typeaheadSingleWords = !ctx.typeaheadSingleWords; });
            i0.ɵɵtext(1, "Toggle typeaheadSingleWords\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "pre", 1);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadSingleWorldComponent_Template_input_ngModelChange_5_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("  typeaheadSingleWords: ", ctx.typeaheadSingleWords, "\n  Model: ", i0.ɵɵpipeBind1(4, 5, ctx.selected), "\n");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadSingleWords", ctx.typeaheadSingleWords);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadSingleWorldComponent;
}());
exports.DemoTypeaheadSingleWorldComponent = DemoTypeaheadSingleWorldComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadSingleWorldComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-single-world',
                templateUrl: './single-world.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "FR36":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/async/async.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\nimport { Observable, of, Subscriber } from 'rxjs';\r\nimport { mergeMap } from 'rxjs/operators';\r\n\r\ninterface DataSourceType {\r\n  id: number;\r\n  name: string;\r\n  region: string;\r\n}\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-async',\r\n  templateUrl: './async.html'\r\n})\r\nexport class DemoTypeaheadAsyncComponent {\r\n  asyncSelected: string;\r\n  dataSource: Observable<DataSourceType[]>;\r\n  typeaheadLoading: boolean;\r\n  statesComplex: DataSourceType[] = [\r\n    { id: 1, name: 'Alabama', region: 'South' },\r\n    { id: 2, name: 'Alaska', region: 'West' },\r\n    { id: 3, name: 'Arizona', region: 'West' },\r\n    { id: 4, name: 'Arkansas', region: 'South' },\r\n    { id: 5, name: 'California', region: 'West' },\r\n    { id: 6, name: 'Colorado', region: 'West' },\r\n    { id: 7, name: 'Connecticut', region: 'Northeast' },\r\n    { id: 8, name: 'Delaware', region: 'South' },\r\n    { id: 9, name: 'Florida', region: 'South' },\r\n    { id: 10, name: 'Georgia', region: 'South' },\r\n    { id: 11, name: 'Hawaii', region: 'West' },\r\n    { id: 12, name: 'Idaho', region: 'West' },\r\n    { id: 13, name: 'Illinois', region: 'Midwest' },\r\n    { id: 14, name: 'Indiana', region: 'Midwest' },\r\n    { id: 15, name: 'Iowa', region: 'Midwest' },\r\n    { id: 16, name: 'Kansas', region: 'Midwest' },\r\n    { id: 17, name: 'Kentucky', region: 'South' },\r\n    { id: 18, name: 'Louisiana', region: 'South' },\r\n    { id: 19, name: 'Maine', region: 'Northeast' },\r\n    { id: 21, name: 'Maryland', region: 'South' },\r\n    { id: 22, name: 'Massachusetts', region: 'Northeast' },\r\n    { id: 23, name: 'Michigan', region: 'Midwest' },\r\n    { id: 24, name: 'Minnesota', region: 'Midwest' },\r\n    { id: 25, name: 'Mississippi', region: 'South' },\r\n    { id: 26, name: 'Missouri', region: 'Midwest' },\r\n    { id: 27, name: 'Montana', region: 'West' },\r\n    { id: 28, name: 'Nebraska', region: 'Midwest' },\r\n    { id: 29, name: 'Nevada', region: 'West' },\r\n    { id: 30, name: 'New Hampshire', region: 'Northeast' },\r\n    { id: 31, name: 'New Jersey', region: 'Northeast' },\r\n    { id: 32, name: 'New Mexico', region: 'West' },\r\n    { id: 33, name: 'New York', region: 'Northeast' },\r\n    { id: 34, name: 'North Dakota', region: 'Midwest' },\r\n    { id: 35, name: 'North Carolina', region: 'South' },\r\n    { id: 36, name: 'Ohio', region: 'Midwest' },\r\n    { id: 37, name: 'Oklahoma', region: 'South' },\r\n    { id: 38, name: 'Oregon', region: 'West' },\r\n    { id: 39, name: 'Pennsylvania', region: 'Northeast' },\r\n    { id: 40, name: 'Rhode Island', region: 'Northeast' },\r\n    { id: 41, name: 'South Carolina', region: 'South' },\r\n    { id: 42, name: 'South Dakota', region: 'Midwest' },\r\n    { id: 43, name: 'Tennessee', region: 'South' },\r\n    { id: 44, name: 'Texas', region: 'South' },\r\n    { id: 45, name: 'Utah', region: 'West' },\r\n    { id: 46, name: 'Vermont', region: 'Northeast' },\r\n    { id: 47, name: 'Virginia', region: 'South' },\r\n    { id: 48, name: 'Washington', region: 'South' },\r\n    { id: 49, name: 'West Virginia', region: 'South' },\r\n    { id: 50, name: 'Wisconsin', region: 'Midwest' },\r\n    { id: 51, name: 'Wyoming', region: 'West' }\r\n  ];\r\n\r\n  constructor() {\r\n    this.dataSource = new Observable((observer: Subscriber<string>) => {\r\n      // Runs on every search\r\n      observer.next(this.asyncSelected);\r\n    })\r\n      .pipe(\r\n        mergeMap((token: string) => this.getStatesAsObservable(token))\r\n      );\r\n  }\r\n\r\n  getStatesAsObservable(token: string): Observable<DataSourceType[]> {\r\n    const query = new RegExp(token, 'i');\r\n\r\n    return of(\r\n      this.statesComplex.filter((state: any) => {\r\n        return query.test(state.name);\r\n      })\r\n    );\r\n  }\r\n\r\n  changeTypeaheadLoading(e: boolean): void {\r\n    this.typeaheadLoading = e;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "GOvO":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/latinize/latinize.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"frenchWords\"\r\n       [typeaheadLatinize]=\"true\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "Gkq4":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/delay/delay.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       typeaheadWaitMs=\"1000\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "HacW":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/container/container.ts ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-container',\r\n  templateUrl: './container.html'\r\n})\r\nexport class DemoTypeaheadContainerComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "ILPZ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/latinize/latinize.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-latinize',\r\n  templateUrl: './latinize.html'\r\n})\r\nexport class DemoTypeaheadLatinizeComponent {\r\n  selected: string;\r\n  frenchWords: string[] = [\r\n    'popularisé',\r\n    'français',\r\n    'intéressé',\r\n    'générateur',\r\n    'répandue',\r\n    'répétition',\r\n    'súper'\r\n    ];\r\n}\r\n");

/***/ }),

/***/ "JChd":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/reactive-form/reactive-form.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{myForm.value.state | json}}</pre>\r\n\r\n<form [formGroup]=\"myForm\">\r\n  <input formControlName=\"state\"\r\n         [typeahead]=\"states\"\r\n         [typeaheadOptionsLimit]=\"7\"\r\n         [typeaheadMinLength]=\"0\"\r\n         placeholder=\"Typeahead inside a form\"\r\n         class=\"form-control\">\r\n</form>\r\n");

/***/ }),

/***/ "JViy":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/basic/basic.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadBasicComponent = /** @class */ (function () {
    function DemoTypeaheadBasicComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadBasicComponent.ɵfac = function DemoTypeaheadBasicComponent_Factory(t) { return new (t || DemoTypeaheadBasicComponent)(); };
    DemoTypeaheadBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadBasicComponent, selectors: [["demo-typeahead-basic"]], decls: 4, vars: 5, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "ngModelChange"]], template: function DemoTypeaheadBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadBasicComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 3, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadBasicComponent;
}());
exports.DemoTypeaheadBasicComponent = DemoTypeaheadBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "Ja22":
/*!*****************************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/first-item-active/first-item-active.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadFirstItemActiveComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadFirstItemActiveComponent = /** @class */ (function () {
    function DemoTypeaheadFirstItemActiveComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadFirstItemActiveComponent.ɵfac = function DemoTypeaheadFirstItemActiveComponent_Factory(t) { return new (t || DemoTypeaheadFirstItemActiveComponent)(); };
    DemoTypeaheadFirstItemActiveComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadFirstItemActiveComponent, selectors: [["demo-typeahead-first-item-active"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadIsFirstItemActive", "ngModelChange"]], template: function DemoTypeaheadFirstItemActiveComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadFirstItemActiveComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadIsFirstItemActive", false);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadFirstItemActiveComponent;
}());
exports.DemoTypeaheadFirstItemActiveComponent = DemoTypeaheadFirstItemActiveComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadFirstItemActiveComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-first-item-active',
                templateUrl: './first-item-active.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "K6Fm":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/animated/animated.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [isAnimated]=\"true\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "KDYd":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/config/config.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "Ko8U":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/async/async.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{ asyncSelected | json }}</pre>\r\n\r\n<input [(ngModel)]=\"asyncSelected\"\r\n       [typeahead]=\"dataSource\"\r\n       [typeaheadAsync]=\"true\"\r\n       typeaheadOptionField=\"name\"\r\n       (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\r\n       placeholder=\"Locations loaded via observable\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "L+ZD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/basic/basic.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "Md+7":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/form/form.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{model | json}}</pre>\r\n\r\n<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"address\">Address</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"address\" required\r\n           [(ngModel)]=\"model.address\" name=\"address\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"state\">State</label>\r\n    <input id=\"state\" class=\"form-control\" name=\"state\"\r\n           [(ngModel)]=\"model.state\" [typeahead]=\"states\">\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "NogK":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/list-template/list-template.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\n\nimport { isBs3 } from 'bao-tran-angular/utils';\n\n@Component({\n  selector: 'demo-typeahead-templates',\n  templateUrl: './list-template.html',\n  styles: [`\n    .custom-list-group {\n      display: flex;\n      flex-direction: column;\n      width: 300px;\n      padding-left: 0;\n      margin: 0;\n      list-style: none;\n    }\n\n    .custom-list-group-item {\n      position: relative;\n      display: block;\n      padding: .75rem 1.25rem;\n      background-color: #fff;\n    }\n\n    .custom-list-group-item.active {\n      z-index: 2;\n      color: #fff;\n      background-color: #FF4461;\n      border-color: #FF4461;\n    }\n  `]\n})\nexport class DemoTypeaheadListTemplateComponent {\n  isBs3 = isBs3();\n  selected: string;\n  states: string[] = [\n    'Alabama',\n    'Alaska',\n    'Arizona',\n    'Arkansas',\n    'California',\n    'Colorado',\n    'Connecticut',\n    'Delaware',\n    'Florida',\n    'Georgia',\n    'Hawaii',\n    'Idaho',\n    'Illinois',\n    'Indiana',\n    'Iowa',\n    'Kansas',\n    'Kentucky',\n    'Louisiana',\n    'Maine',\n    'Maryland',\n    'Massachusetts',\n    'Michigan',\n    'Minnesota',\n    'Mississippi',\n    'Missouri',\n    'Montana',\n    'Nebraska',\n    'Nevada',\n    'New Hampshire',\n    'New Jersey',\n    'New Mexico',\n    'New York',\n    'North Dakota',\n    'North Carolina',\n    'Ohio',\n    'Oklahoma',\n    'Oregon',\n    'Pennsylvania',\n    'Rhode Island',\n    'South Carolina',\n    'South Dakota',\n    'Tennessee',\n    'Texas',\n    'Utah',\n    'Vermont',\n    'Virginia',\n    'Washington',\n    'West Virginia',\n    'Wisconsin',\n    'Wyoming'\n  ];\n}\n");

/***/ }),

/***/ "PAni":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/adaptive-position/adaptive-position.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [adaptivePosition]=\"true\"\r\n       class=\"form-control\">");

/***/ }),

/***/ "Pppw":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/container/container.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       container=\"body\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "QWpI":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/show-on-blur/show-on-blur.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary mb-3\"\r\n        (click)=\"typeaheadHideResultsOnBlur = !typeaheadHideResultsOnBlur\">Toggle typeaheadHideResultsOnBlur\r\n</button>\r\n<pre class=\"card card-block card-header mb-3\">\r\n  typeaheadHideResultsOnBlur: {{typeaheadHideResultsOnBlur}}\r\n  Model: {{selected | json}}\r\n</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadHideResultsOnBlur]=\"typeaheadHideResultsOnBlur\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "R2Xs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/delay/delay.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-delay',\r\n  templateUrl: './delay.html'\r\n})\r\nexport class DemoTypeaheadDelayComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "RLzM":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/field/field.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadFieldComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadFieldComponent = /** @class */ (function () {
    function DemoTypeaheadFieldComponent() {
        this.statesComplex = [
            { id: 1, name: 'Alabama', region: 'South' },
            { id: 2, name: 'Alaska', region: 'West' },
            { id: 3, name: 'Arizona', region: 'West' },
            { id: 4, name: 'Arkansas', region: 'South' },
            { id: 5, name: 'California', region: 'West' },
            { id: 6, name: 'Colorado', region: 'West' },
            { id: 7, name: 'Connecticut', region: 'Northeast' },
            { id: 8, name: 'Delaware', region: 'South' },
            { id: 9, name: 'Florida', region: 'South' },
            { id: 10, name: 'Georgia', region: 'South' },
            { id: 11, name: 'Hawaii', region: 'West' },
            { id: 12, name: 'Idaho', region: 'West' },
            { id: 13, name: 'Illinois', region: 'Midwest' },
            { id: 14, name: 'Indiana', region: 'Midwest' },
            { id: 15, name: 'Iowa', region: 'Midwest' },
            { id: 16, name: 'Kansas', region: 'Midwest' },
            { id: 17, name: 'Kentucky', region: 'South' },
            { id: 18, name: 'Louisiana', region: 'South' },
            { id: 19, name: 'Maine', region: 'Northeast' },
            { id: 21, name: 'Maryland', region: 'South' },
            { id: 22, name: 'Massachusetts', region: 'Northeast' },
            { id: 23, name: 'Michigan', region: 'Midwest' },
            { id: 24, name: 'Minnesota', region: 'Midwest' },
            { id: 25, name: 'Mississippi', region: 'South' },
            { id: 26, name: 'Missouri', region: 'Midwest' },
            { id: 27, name: 'Montana', region: 'West' },
            { id: 28, name: 'Nebraska', region: 'Midwest' },
            { id: 29, name: 'Nevada', region: 'West' },
            { id: 30, name: 'New Hampshire', region: 'Northeast' },
            { id: 31, name: 'New Jersey', region: 'Northeast' },
            { id: 32, name: 'New Mexico', region: 'West' },
            { id: 33, name: 'New York', region: 'Northeast' },
            { id: 34, name: 'North Dakota', region: 'Midwest' },
            { id: 35, name: 'North Carolina', region: 'South' },
            { id: 36, name: 'Ohio', region: 'Midwest' },
            { id: 37, name: 'Oklahoma', region: 'South' },
            { id: 38, name: 'Oregon', region: 'West' },
            { id: 39, name: 'Pennsylvania', region: 'Northeast' },
            { id: 40, name: 'Rhode Island', region: 'Northeast' },
            { id: 41, name: 'South Carolina', region: 'South' },
            { id: 42, name: 'South Dakota', region: 'Midwest' },
            { id: 43, name: 'Tennessee', region: 'South' },
            { id: 44, name: 'Texas', region: 'South' },
            { id: 45, name: 'Utah', region: 'West' },
            { id: 46, name: 'Vermont', region: 'Northeast' },
            { id: 47, name: 'Virginia', region: 'South' },
            { id: 48, name: 'Washington', region: 'South' },
            { id: 49, name: 'West Virginia', region: 'South' },
            { id: 50, name: 'Wisconsin', region: 'Midwest' },
            { id: 51, name: 'Wyoming', region: 'West' }
        ];
    }
    DemoTypeaheadFieldComponent.ɵfac = function DemoTypeaheadFieldComponent_Factory(t) { return new (t || DemoTypeaheadFieldComponent)(); };
    DemoTypeaheadFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadFieldComponent, selectors: [["demo-typeahead-field"]], decls: 4, vars: 5, consts: [[1, "card", "card-block", "card-header", "mb-3"], ["typeaheadOptionField", "name", 1, "form-control", 3, "ngModel", "typeahead", "ngModelChange"]], template: function DemoTypeaheadFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadFieldComponent_Template_input_ngModelChange_3_listener($event) { return ctx.customSelected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 3, ctx.customSelected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.customSelected)("typeahead", ctx.statesComplex);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadFieldComponent;
}());
exports.DemoTypeaheadFieldComponent = DemoTypeaheadFieldComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadFieldComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-field',
                templateUrl: './field.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "S5QM":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/scrollable/scrollable.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadScrollable]=\"true\"\r\n       [typeaheadOptionsInScrollableView]=\"5\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "StlQ":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/typeahead-section.list.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var demo_api_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section */ "nk7K");
var demo_top_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section */ "ClAA");
var adaptive_position_1 = __webpack_require__(/*! ./demos/adaptive-position/adaptive-position */ "48SJ");
var animated_1 = __webpack_require__(/*! ./demos/animated/animated */ "TJxy");
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "JViy");
var cancel_on_focus_lost_1 = __webpack_require__(/*! ./demos/cancel-on-focus-lost/cancel-on-focus-lost */ "VPiw");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "6q8U");
var container_1 = __webpack_require__(/*! ./demos/container/container */ "aNgY");
var delay_1 = __webpack_require__(/*! ./demos/delay/delay */ "mRh0");
var dropup_1 = __webpack_require__(/*! ./demos/dropup/dropup */ "w2n1");
var field_1 = __webpack_require__(/*! ./demos/field/field */ "RLzM");
var async_1 = __webpack_require__(/*! ./demos/async/async */ "mY4/");
var reactive_form_1 = __webpack_require__(/*! ./demos/reactive-form/reactive-form */ "ZAbq");
var form_1 = __webpack_require__(/*! ./demos/form/form */ "plvV");
var grouping_1 = __webpack_require__(/*! ./demos/grouping/grouping */ "stFf");
var item_template_1 = __webpack_require__(/*! ./demos/item-template/item-template */ "DaIi");
var list_template_1 = __webpack_require__(/*! ./demos/list-template/list-template */ "isib");
var latinize_1 = __webpack_require__(/*! ./demos/latinize/latinize */ "WT7e");
var min_length_1 = __webpack_require__(/*! ./demos/min-length/min-length */ "BxZE");
var no_result_1 = __webpack_require__(/*! ./demos/no-result/no-result */ "/GSO");
var on_blur_1 = __webpack_require__(/*! ./demos/on-blur/on-blur */ "Bdl8");
var on_select_1 = __webpack_require__(/*! ./demos/on-select/on-select */ "CR70");
var phrase_delimiters_1 = __webpack_require__(/*! ./demos/phrase-delimiters/phrase-delimiters */ "nH25");
var scrollable_1 = __webpack_require__(/*! ./demos/scrollable/scrollable */ "66IV");
var selected_first_item_1 = __webpack_require__(/*! ./demos/selected-first-item/selected-first-item */ "yqwq");
var show_on_blur_1 = __webpack_require__(/*! ./demos/show-on-blur/show-on-blur */ "4vHX");
var single_world_1 = __webpack_require__(/*! ./demos/single-world/single-world */ "F+Ot");
var demo_examples_section_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section */ "y20O");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var first_item_active_1 = __webpack_require__(/*! ./demos/first-item-active/first-item-active */ "Ja22");
var async_http_request_1 = __webpack_require__(/*! ./demos/async-http-request/async-http-request */ "UanY");
var ordering_1 = __webpack_require__(/*! ./demos/ordering/ordering */ "uiZ9");
var multiple_search_1 = __webpack_require__(/*! ./demos/multiple-search/multiple-search */ "3mDI");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: demo_top_section_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "UmaE")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: demo_examples_section_1.ExamplesComponent,
        content: [
            {
                title: 'Basic array',
                anchor: 'Basic-array',
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.ts */ "UTeL"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "L+ZD"),
                outlet: basic_1.DemoTypeaheadBasicComponent
            },
            {
                title: 'With animation',
                anchor: 'animated',
                component: __webpack_require__(/*! !raw-loader!./demos/animated/animated */ "4NyX"),
                html: __webpack_require__(/*! !raw-loader!./demos/animated/animated.html */ "K6Fm"),
                description: "You can enable animation via <code>isAnimated</code> input or config option",
                outlet: animated_1.DemoTypeaheadAnimatedComponent
            },
            {
                title: 'Adaptive position',
                anchor: 'adaptive-position',
                description: "\n          <p>You can enable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/adaptive-position/adaptive-position.ts */ "x08E"),
                html: __webpack_require__(/*! !raw-loader!./demos/adaptive-position/adaptive-position.html */ "PAni"),
                outlet: adaptive_position_1.DemoTypeaheadAdaptivePositionComponent
            },
            {
                title: 'Item template',
                anchor: 'item-template',
                component: __webpack_require__(/*! !raw-loader!./demos/item-template/item-template.ts */ "Ax1w"),
                html: __webpack_require__(/*! !raw-loader!./demos/item-template/item-template.html */ "AcOC"),
                outlet: item_template_1.DemoTypeaheadItemTemplateComponent
            },
            {
                title: 'List template',
                anchor: 'list-template',
                component: __webpack_require__(/*! !raw-loader!./demos/list-template/list-template.ts */ "NogK"),
                html: __webpack_require__(/*! !raw-loader!./demos/list-template/list-template.html */ "dTuF"),
                outlet: list_template_1.DemoTypeaheadListTemplateComponent
            },
            {
                title: 'Option field',
                anchor: 'option-field',
                component: __webpack_require__(/*! !raw-loader!./demos/field/field.ts */ "k/JK"),
                html: __webpack_require__(/*! !raw-loader!./demos/field/field.html */ "ayFk"),
                outlet: field_1.DemoTypeaheadFieldComponent
            },
            {
                title: 'Async data',
                anchor: 'async-data',
                component: __webpack_require__(/*! !raw-loader!./demos/async/async.ts */ "FR36"),
                html: __webpack_require__(/*! !raw-loader!./demos/async/async.html */ "Ko8U"),
                outlet: async_1.DemoTypeaheadAsyncComponent
            },
            {
                title: 'Async using http request',
                anchor: 'async-http-request',
                description: "\n          <p>Use http request to search for data. If you need to handle http error, do this inside <code>tap</code> operator.\n          Enter search value several times (10-15), and after a few success responses API should return an error\n          (GitHub limit for requests)</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/async-http-request/async-http-request.ts */ "sf+i"),
                html: __webpack_require__(/*! !raw-loader!./demos/async-http-request/async-http-request.html */ "ZVTM"),
                outlet: async_http_request_1.DemoTypeaheadAsyncHttpRequestComponent
            },
            {
                title: 'Cancel on focus lost',
                anchor: 'cancel-on-focus-lost',
                description: "<p>Set config property <code>cancelRequestOnFocusLost</code> to <code>true</code> if you want to cancel async request on focus lost event</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/cancel-on-focus-lost/cancel-on-focus-lost.ts */ "T1Na"),
                html: __webpack_require__(/*! !raw-loader!./demos/cancel-on-focus-lost/cancel-on-focus-lost.html */ "irdt"),
                outlet: cancel_on_focus_lost_1.DemoTypeaheadCancelRequestOnFocusLostComponent
            },
            {
                title: 'With delay',
                anchor: 'delay',
                description: "\n          <p>Use <code>typeaheadWaitMs</code> to set minimal waiting time after last character typed\n          before typeahead kicks-in. In example a search begins with delay in 1 second</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/delay/delay.ts */ "R2Xs"),
                html: __webpack_require__(/*! !raw-loader!./demos/delay/delay.html */ "Gkq4"),
                outlet: delay_1.DemoTypeaheadDelayComponent
            },
            {
                title: 'Template-driven forms',
                anchor: 'forms',
                description: "\n          <p>Typeahead can be used in template-driven forms. Keep in mind that value of <code>ngModel</code> is\n          <code>string</code></p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/form/form.ts */ "qf3C"),
                html: __webpack_require__(/*! !raw-loader!./demos/form/form.html */ "Md+7"),
                outlet: form_1.DemoTypeaheadFormComponent
            },
            {
                title: 'Reactive forms',
                anchor: 'reactive-forms',
                description: "\n          <p>Typeahead can be used in reactive forms</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/reactive-form/reactive-form.ts */ "rIWn"),
                html: __webpack_require__(/*! !raw-loader!./demos/reactive-form/reactive-form.html */ "JChd"),
                outlet: reactive_form_1.DemoTypeaheadReactiveFormComponent
            },
            {
                title: 'Grouping results',
                anchor: 'grouping-results',
                component: __webpack_require__(/*! !raw-loader!./demos/grouping/grouping.ts */ "oOfT"),
                html: __webpack_require__(/*! !raw-loader!./demos/grouping/grouping.html */ "DyAL"),
                outlet: grouping_1.DemoTypeaheadGroupingComponent
            },
            {
                title: 'Ignore spaces and order',
                anchor: 'single-world',
                component: __webpack_require__(/*! !raw-loader!./demos/single-world/single-world.ts */ "njhx"),
                html: __webpack_require__(/*! !raw-loader!./demos/single-world/single-world.html */ "DV2g"),
                description: "\n          <p>After setting <code>typeaheadSingleWords</code> input property to <code>true</code>\n          order of typed symbols and spaces between them will be ignored. For example, \"<i>zona ari</i>\"\n          will match with \"<i>Arizona</i>\"</p>\n        ",
                outlet: single_world_1.DemoTypeaheadSingleWorldComponent
            },
            {
                title: 'Phrase delimiters',
                anchor: 'phrase-delimiters',
                component: __webpack_require__(/*! !raw-loader!./demos/phrase-delimiters/phrase-delimiters.ts */ "cD+m"),
                html: __webpack_require__(/*! !raw-loader!./demos/phrase-delimiters/phrase-delimiters.html */ "Ecca"),
                description: "\n          <p>Set the word delimiter by <code>typeaheadPhraseDelimiters</code> to match exact phrase.\n          This is demo with delimeters \"<code>&</code>\" and \"<code>,</code>\"</p>\n        ",
                outlet: phrase_delimiters_1.DemoTypeaheadPhraseDelimitersComponent
            },
            {
                title: 'Dropup',
                anchor: 'dropup',
                component: __webpack_require__(/*! !raw-loader!./demos/dropup/dropup.ts */ "mz7B"),
                html: __webpack_require__(/*! !raw-loader!./demos/dropup/dropup.html */ "9Yxd"),
                outlet: dropup_1.DemoTypeaheadDropupComponent
            },
            {
                title: 'On blur',
                anchor: 'on-blur',
                description: "\n         <p>Returns an option on which user lost a focus. To reproduce start typing the name of the state, then focus\n         on one of the options with mouse or arrow keys and click outside of the typeahead</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/on-blur/on-blur.ts */ "qqzA"),
                html: __webpack_require__(/*! !raw-loader!./demos/on-blur/on-blur.html */ "V+7F"),
                outlet: on_blur_1.DemoTypeaheadOnBlurComponent
            },
            {
                title: 'Append to body',
                anchor: 'container',
                description: "\n        <p><code>container</code> is an input property specifying the element the typeahead should be appended to.</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/container/container.ts */ "HacW"),
                html: __webpack_require__(/*! !raw-loader!./demos/container/container.html */ "Pppw"),
                outlet: container_1.DemoTypeaheadContainerComponent
            },
            {
                title: 'No result',
                anchor: 'no-result',
                description: "\n         <p>Used to display the state when no matches were found. To see message\n         \"No Results Found\" enter the value that doesn't match anything from the list</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/no-result/no-result.ts */ "qCqX"),
                html: __webpack_require__(/*! !raw-loader!./demos/no-result/no-result.html */ "3dxZ"),
                outlet: no_result_1.DemoTypeaheadNoResultComponent
            },
            {
                title: 'Scrollable',
                anchor: 'scrollable',
                component: __webpack_require__(/*! !raw-loader!./demos/scrollable/scrollable.ts */ "vw14"),
                html: __webpack_require__(/*! !raw-loader!./demos/scrollable/scrollable.html */ "S5QM"),
                outlet: scrollable_1.DemoTypeaheadScrollableComponent
            },
            {
                title: 'Latinize',
                anchor: 'latinize',
                description: "\n          <p>Use <code>typeaheadLatinize</code> property for matching latin symbols. If it is set\n          to <code>true</code> the word <strong>s\u00FAper</strong> would match <strong>super</strong> and vice versa.</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/latinize/latinize.ts */ "ILPZ"),
                html: __webpack_require__(/*! !raw-loader!./demos/latinize/latinize.html */ "GOvO"),
                outlet: latinize_1.DemoTypeaheadLatinizeComponent
            },
            {
                title: 'On select / On preview',
                anchor: 'on-select',
                description: "\n          <p><code>typeaheadOnSelect</code> event is fired when an option was selected.\n          Returns an object with this option.</p>\n          <p><code>typeaheadOnPreview</code> event is fired when an option was highlighted.\n          Returns an object with this option.</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/on-select/on-select.ts */ "7mX/"),
                html: __webpack_require__(/*! !raw-loader!./demos/on-select/on-select.html */ "kq2S"),
                outlet: on_select_1.DemoTypeaheadOnSelectComponent
            },
            {
                title: 'Min length',
                anchor: 'min-length',
                description: "\n          <p>Minimal number of characters that needs to be entered before typeahead kicks in. When set to 0, typeahead shows on focus with full list of options.</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/min-length/min-length.ts */ "fRcN"),
                html: __webpack_require__(/*! !raw-loader!./demos/min-length/min-length.html */ "gviR"),
                outlet: min_length_1.DemoTypeaheadMinLengthComponent
            },
            {
                title: 'Show results on blur',
                anchor: 'show-on-blur',
                description: "\n          <p>Use input property <code>typeaheadHideResultsOnBlur</code> or config property <code>hideResultsOnBlur</code>\n          to prevent hiding typeahead's results until a user doesn't choose an item</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/show-on-blur/show-on-blur.ts */ "h+t+"),
                html: __webpack_require__(/*! !raw-loader!./demos/show-on-blur/show-on-blur.html */ "QWpI"),
                outlet: show_on_blur_1.DemoTypeaheadShowOnBlurComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'configuration',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config */ "4Trs"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "KDYd"),
                outlet: config_1.DemoTypeaheadConfigComponent
            },
            {
                title: 'Is first item active',
                anchor: 'first-item-active',
                description: "\n          <p>Use input property <code>typeaheadIsFirstItemActive</code> or config property <code>isFirstItemActive</code> to make the first item active/inactive </p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/first-item-active/first-item-active.ts */ "11RB"),
                html: __webpack_require__(/*! !raw-loader!./demos/first-item-active/first-item-active.html */ "72st"),
                outlet: first_item_active_1.DemoTypeaheadFirstItemActiveComponent
            },
            {
                title: 'Selected first item',
                anchor: 'selected-first-item',
                description: "\n          <p>Use <code>typeaheadSelectFirstItem</code> property to make the first item in options list unselectable by tab and enter.</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/selected-first-item/selected-first-item.ts */ "/mQM"),
                html: __webpack_require__(/*! !raw-loader!./demos/selected-first-item/selected-first-item.html */ "aWA+"),
                outlet: selected_first_item_1.DemotypeaheadSelectFirstItemComponent
            },
            {
                title: 'Order results',
                anchor: 'typeahead-ordering',
                description: "\n          <p>Use <code>typeaheadOrderBy</code> property to order your result by a certain field and in certain direction</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/ordering/ordering.ts */ "0bRp"),
                html: __webpack_require__(/*! !raw-loader!./demos/ordering/ordering.html */ "pfHP"),
                outlet: ordering_1.DemoTypeaheadOrderingComponent
            },
            {
                title: 'Multiple search',
                anchor: 'multiple-search',
                component: __webpack_require__(/*! !raw-loader!./demos/multiple-search/multiple-search.ts */ "gT4G"),
                html: __webpack_require__(/*! !raw-loader!./demos/multiple-search/multiple-search.html */ "nXsi"),
                description: "\n          <p>Set <code>typeaheadMultipleSearch</code> input property to <code>true</code>\n          and provide the multiple search delimiter by <code>typeaheadMultipleSearchDelimiters</code>\n          to be able to search typeahead again after using one of the provided delimiters. Default delimiter\n          is \"<code>,</code>\" if <code>typeaheadMultipleSearchDelimiters</code> is not used.\n          After picking a first value from typeahead\n          dropdown, type \"<code>,</code>\" or \"<code>|</code>\" and then next value can be searched.\n          This is demo with delimeters \"<code>,</code>\" and \"<code>|</code>\"</p>\n        ",
                outlet: multiple_search_1.DemoTypeaheadMultipleSearchComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: demo_api_section_1.ApiSectionsComponent,
        content: [
            {
                title: 'TypeaheadDirective',
                anchor: 'TypeaheadDirective',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'TypeaheadConfig',
                anchor: 'bs-typeahead-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            },
            {
                title: 'TypeaheadOptionListContext',
                anchor: 'typeahead-option-list-context',
                outlet: api_docs_1.NgApiDocConfigComponent
            },
            {
                title: 'TypeaheadOptionItemContext',
                anchor: 'typeahead-option-item-context',
                outlet: api_docs_1.NgApiDocConfigComponent
            },
            {
                title: 'TypeaheadTemplateMethods',
                anchor: 'typeahead-template method',
                outlet: api_docs_1.NgApiDocConfigComponent,
                showMethods: true
            }
        ]
    }
    // tslint:disable-next-line:max-file-line-count
];


/***/ }),

/***/ "T1Na":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/cancel-on-focus-lost/cancel-on-focus-lost.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { Observable, of } from 'rxjs';\nimport { TypeaheadMatch } from 'bao-tran-angular/typeahead';\nimport { mergeMap, delay } from 'rxjs/operators';\nimport { TypeaheadConfig } from 'bao-tran-angular/typeahead';\n\nexport function getTypeaheadConfig(): TypeaheadConfig {\n  return Object.assign(new TypeaheadConfig(), { cancelRequestOnFocusLost: true });\n}\n\n@Component({\n  selector: 'demo-typeahead-cancel-on-focus-lost',\n  templateUrl: './cancel-on-focus-lost.html',\n  providers: [{ provide: TypeaheadConfig, useFactory: getTypeaheadConfig }]\n})\nexport class DemoTypeaheadCancelRequestOnFocusLostComponent {\n  asyncSelected: string;\n  typeaheadLoading: boolean;\n  typeaheadNoResults: boolean;\n  dataSource: Observable<any>;\n  statesComplex: any[] = [\n    { id: 1, name: 'Alabama', region: 'South' },\n    { id: 2, name: 'Alaska', region: 'West' },\n    { id: 3, name: 'Arizona', region: 'West' },\n    { id: 4, name: 'Arkansas', region: 'South' },\n    { id: 5, name: 'California', region: 'West' },\n    { id: 6, name: 'Colorado', region: 'West' },\n    { id: 7, name: 'Connecticut', region: 'Northeast' },\n    { id: 8, name: 'Delaware', region: 'South' },\n    { id: 9, name: 'Florida', region: 'South' },\n    { id: 10, name: 'Georgia', region: 'South' },\n    { id: 11, name: 'Hawaii', region: 'West' },\n    { id: 12, name: 'Idaho', region: 'West' },\n    { id: 13, name: 'Illinois', region: 'Midwest' },\n    { id: 14, name: 'Indiana', region: 'Midwest' },\n    { id: 15, name: 'Iowa', region: 'Midwest' },\n    { id: 16, name: 'Kansas', region: 'Midwest' },\n    { id: 17, name: 'Kentucky', region: 'South' },\n    { id: 18, name: 'Louisiana', region: 'South' },\n    { id: 19, name: 'Maine', region: 'Northeast' },\n    { id: 21, name: 'Maryland', region: 'South' },\n    { id: 22, name: 'Massachusetts', region: 'Northeast' },\n    { id: 23, name: 'Michigan', region: 'Midwest' },\n    { id: 24, name: 'Minnesota', region: 'Midwest' },\n    { id: 25, name: 'Mississippi', region: 'South' },\n    { id: 26, name: 'Missouri', region: 'Midwest' },\n    { id: 27, name: 'Montana', region: 'West' },\n    { id: 28, name: 'Nebraska', region: 'Midwest' },\n    { id: 29, name: 'Nevada', region: 'West' },\n    { id: 30, name: 'New Hampshire', region: 'Northeast' },\n    { id: 31, name: 'New Jersey', region: 'Northeast' },\n    { id: 32, name: 'New Mexico', region: 'West' },\n    { id: 33, name: 'New York', region: 'Northeast' },\n    { id: 34, name: 'North Dakota', region: 'Midwest' },\n    { id: 35, name: 'North Carolina', region: 'South' },\n    { id: 36, name: 'Ohio', region: 'Midwest' },\n    { id: 37, name: 'Oklahoma', region: 'South' },\n    { id: 38, name: 'Oregon', region: 'West' },\n    { id: 39, name: 'Pennsylvania', region: 'Northeast' },\n    { id: 40, name: 'Rhode Island', region: 'Northeast' },\n    { id: 41, name: 'South Carolina', region: 'South' },\n    { id: 42, name: 'South Dakota', region: 'Midwest' },\n    { id: 43, name: 'Tennessee', region: 'South' },\n    { id: 44, name: 'Texas', region: 'South' },\n    { id: 45, name: 'Utah', region: 'West' },\n    { id: 46, name: 'Vermont', region: 'Northeast' },\n    { id: 47, name: 'Virginia', region: 'South' },\n    { id: 48, name: 'Washington', region: 'South' },\n    { id: 49, name: 'West Virginia', region: 'South' },\n    { id: 50, name: 'Wisconsin', region: 'Midwest' },\n    { id: 51, name: 'Wyoming', region: 'West' }\n  ];\n\n  constructor() {\n    this.dataSource = Observable.create((observer: any) => {\n      // Runs on every search\n      observer.next(this.asyncSelected);\n    })\n      .pipe(\n        mergeMap((token: string) => this.getStatesAsObservable(token)),\n        delay(1000)\n      );\n  }\n\n  getStatesAsObservable(token: string): Observable<any> {\n    const query = new RegExp(token, 'i');\n\n    return of(\n      this.statesComplex.filter((state: any) => {\n        return query.test(state.name);\n      })\n    );\n  }\n\n  changeTypeaheadLoading(e: boolean): void {\n    this.typeaheadLoading = e;\n  }\n\n  typeaheadOnSelect(e: TypeaheadMatch): void {\n    console.log('Selected value: ', e.value);\n  }\n}\n");

/***/ }),

/***/ "T345":
/*!***********************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var adaptive_position_1 = __webpack_require__(/*! ./adaptive-position/adaptive-position */ "48SJ");
var async_1 = __webpack_require__(/*! ./async/async */ "mY4/");
var basic_1 = __webpack_require__(/*! ./basic/basic */ "JViy");
var config_1 = __webpack_require__(/*! ./config/config */ "6q8U");
var animated_1 = __webpack_require__(/*! ./animated/animated */ "TJxy");
var container_1 = __webpack_require__(/*! ./container/container */ "aNgY");
var delay_1 = __webpack_require__(/*! ./delay/delay */ "mRh0");
var dropup_1 = __webpack_require__(/*! ./dropup/dropup */ "w2n1");
var list_template_1 = __webpack_require__(/*! ./list-template/list-template */ "isib");
var field_1 = __webpack_require__(/*! ./field/field */ "RLzM");
var cancel_on_focus_lost_1 = __webpack_require__(/*! ./cancel-on-focus-lost/cancel-on-focus-lost */ "VPiw");
var reactive_form_1 = __webpack_require__(/*! ./reactive-form/reactive-form */ "ZAbq");
var first_item_active_1 = __webpack_require__(/*! ./first-item-active/first-item-active */ "Ja22");
var form_1 = __webpack_require__(/*! ./form/form */ "plvV");
var grouping_1 = __webpack_require__(/*! ./grouping/grouping */ "stFf");
var item_template_1 = __webpack_require__(/*! ./item-template/item-template */ "DaIi");
var latinize_1 = __webpack_require__(/*! ./latinize/latinize */ "WT7e");
var min_length_1 = __webpack_require__(/*! ./min-length/min-length */ "BxZE");
var no_result_1 = __webpack_require__(/*! ./no-result/no-result */ "/GSO");
var on_blur_1 = __webpack_require__(/*! ./on-blur/on-blur */ "Bdl8");
var on_select_1 = __webpack_require__(/*! ./on-select/on-select */ "CR70");
var phrase_delimiters_1 = __webpack_require__(/*! ./phrase-delimiters/phrase-delimiters */ "nH25");
var scrollable_1 = __webpack_require__(/*! ./scrollable/scrollable */ "66IV");
var selected_first_item_1 = __webpack_require__(/*! ./selected-first-item/selected-first-item */ "yqwq");
var show_on_blur_1 = __webpack_require__(/*! ./show-on-blur/show-on-blur */ "4vHX");
var single_world_1 = __webpack_require__(/*! ./single-world/single-world */ "F+Ot");
var async_http_request_1 = __webpack_require__(/*! ./async-http-request/async-http-request */ "UanY");
var ordering_1 = __webpack_require__(/*! ./ordering/ordering */ "uiZ9");
var multiple_search_1 = __webpack_require__(/*! ./multiple-search/multiple-search */ "3mDI");
exports.DEMO_COMPONENTS = [
    adaptive_position_1.DemoTypeaheadAdaptivePositionComponent,
    animated_1.DemoTypeaheadAnimatedComponent,
    async_1.DemoTypeaheadAsyncComponent,
    basic_1.DemoTypeaheadBasicComponent,
    config_1.DemoTypeaheadConfigComponent,
    container_1.DemoTypeaheadContainerComponent,
    delay_1.DemoTypeaheadDelayComponent,
    dropup_1.DemoTypeaheadDropupComponent,
    list_template_1.DemoTypeaheadListTemplateComponent,
    field_1.DemoTypeaheadFieldComponent,
    async_1.DemoTypeaheadAsyncComponent,
    cancel_on_focus_lost_1.DemoTypeaheadCancelRequestOnFocusLostComponent,
    reactive_form_1.DemoTypeaheadReactiveFormComponent,
    first_item_active_1.DemoTypeaheadFirstItemActiveComponent,
    form_1.DemoTypeaheadFormComponent,
    grouping_1.DemoTypeaheadGroupingComponent,
    item_template_1.DemoTypeaheadItemTemplateComponent,
    latinize_1.DemoTypeaheadLatinizeComponent,
    min_length_1.DemoTypeaheadMinLengthComponent,
    no_result_1.DemoTypeaheadNoResultComponent,
    on_blur_1.DemoTypeaheadOnBlurComponent,
    on_select_1.DemoTypeaheadOnSelectComponent,
    phrase_delimiters_1.DemoTypeaheadPhraseDelimitersComponent,
    reactive_form_1.DemoTypeaheadReactiveFormComponent,
    scrollable_1.DemoTypeaheadScrollableComponent,
    selected_first_item_1.DemotypeaheadSelectFirstItemComponent,
    show_on_blur_1.DemoTypeaheadShowOnBlurComponent,
    single_world_1.DemoTypeaheadSingleWorldComponent,
    async_http_request_1.DemoTypeaheadAsyncHttpRequestComponent,
    ordering_1.DemoTypeaheadOrderingComponent,
    multiple_search_1.DemoTypeaheadMultipleSearchComponent
];


/***/ }),

/***/ "TJxy":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/animated/animated.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadAnimatedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadAnimatedComponent = /** @class */ (function () {
    function DemoTypeaheadAnimatedComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadAnimatedComponent.ɵfac = function DemoTypeaheadAnimatedComponent_Factory(t) { return new (t || DemoTypeaheadAnimatedComponent)(); };
    DemoTypeaheadAnimatedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadAnimatedComponent, selectors: [["demo-typeahead-animated"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "isAnimated", "ngModelChange"]], template: function DemoTypeaheadAnimatedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadAnimatedComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("isAnimated", true);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadAnimatedComponent;
}());
exports.DemoTypeaheadAnimatedComponent = DemoTypeaheadAnimatedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadAnimatedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-animated',
                templateUrl: './animated.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "TLIY":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demo-typeahead.module.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var typeahead_1 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var typeahead_section_component_1 = __webpack_require__(/*! ./typeahead-section.component */ "VH/0");
var demos_1 = __webpack_require__(/*! ./demos */ "T345");
var demo_typeahead_routes_1 = __webpack_require__(/*! ./demo-typeahead.routes */ "9r8w");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/adaptive-position/adaptive-position */ "48SJ");
var i2 = __webpack_require__(/*! ./demos/animated/animated */ "TJxy");
var i3 = __webpack_require__(/*! ./demos/async/async */ "mY4/");
var i4 = __webpack_require__(/*! ./demos/basic/basic */ "JViy");
var i5 = __webpack_require__(/*! ./demos/config/config */ "6q8U");
var i6 = __webpack_require__(/*! ./demos/container/container */ "aNgY");
var i7 = __webpack_require__(/*! ./demos/delay/delay */ "mRh0");
var i8 = __webpack_require__(/*! ./demos/dropup/dropup */ "w2n1");
var i9 = __webpack_require__(/*! ./demos/list-template/list-template */ "isib");
var i10 = __webpack_require__(/*! ./demos/field/field */ "RLzM");
var i11 = __webpack_require__(/*! ./demos/cancel-on-focus-lost/cancel-on-focus-lost */ "VPiw");
var i12 = __webpack_require__(/*! ./demos/reactive-form/reactive-form */ "ZAbq");
var i13 = __webpack_require__(/*! ./demos/first-item-active/first-item-active */ "Ja22");
var i14 = __webpack_require__(/*! ./demos/form/form */ "plvV");
var i15 = __webpack_require__(/*! ./demos/grouping/grouping */ "stFf");
var i16 = __webpack_require__(/*! ./demos/item-template/item-template */ "DaIi");
var i17 = __webpack_require__(/*! ./demos/latinize/latinize */ "WT7e");
var i18 = __webpack_require__(/*! ./demos/min-length/min-length */ "BxZE");
var i19 = __webpack_require__(/*! ./demos/no-result/no-result */ "/GSO");
var i20 = __webpack_require__(/*! ./demos/on-blur/on-blur */ "Bdl8");
var i21 = __webpack_require__(/*! ./demos/on-select/on-select */ "CR70");
var i22 = __webpack_require__(/*! ./demos/phrase-delimiters/phrase-delimiters */ "nH25");
var i23 = __webpack_require__(/*! ./demos/scrollable/scrollable */ "66IV");
var i24 = __webpack_require__(/*! ./demos/selected-first-item/selected-first-item */ "yqwq");
var i25 = __webpack_require__(/*! ./demos/show-on-blur/show-on-blur */ "4vHX");
var i26 = __webpack_require__(/*! ./demos/single-world/single-world */ "F+Ot");
var i27 = __webpack_require__(/*! ./demos/async-http-request/async-http-request */ "UanY");
var i28 = __webpack_require__(/*! ./demos/ordering/ordering */ "uiZ9");
var i29 = __webpack_require__(/*! ./demos/multiple-search/multiple-search */ "3mDI");
var i30 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i31 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoTypeaheadModule = /** @class */ (function () {
    function DemoTypeaheadModule() {
    }
    DemoTypeaheadModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoTypeaheadModule });
    DemoTypeaheadModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoTypeaheadModule_Factory(t) { return new (t || DemoTypeaheadModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                docs_1.DocsModule,
                typeahead_1.TypeaheadModule.forRoot(),
                router_1.RouterModule.forChild(demo_typeahead_routes_1.routes)
            ]] });
    return DemoTypeaheadModule;
}());
exports.DemoTypeaheadModule = DemoTypeaheadModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoTypeaheadModule, { declarations: [typeahead_section_component_1.TypeaheadSectionComponent, i1.DemoTypeaheadAdaptivePositionComponent, i2.DemoTypeaheadAnimatedComponent, i3.DemoTypeaheadAsyncComponent, i4.DemoTypeaheadBasicComponent, i5.DemoTypeaheadConfigComponent, i6.DemoTypeaheadContainerComponent, i7.DemoTypeaheadDelayComponent, i8.DemoTypeaheadDropupComponent, i9.DemoTypeaheadListTemplateComponent, i10.DemoTypeaheadFieldComponent, i3.DemoTypeaheadAsyncComponent, i11.DemoTypeaheadCancelRequestOnFocusLostComponent, i12.DemoTypeaheadReactiveFormComponent, i13.DemoTypeaheadFirstItemActiveComponent, i14.DemoTypeaheadFormComponent, i15.DemoTypeaheadGroupingComponent, i16.DemoTypeaheadItemTemplateComponent, i17.DemoTypeaheadLatinizeComponent, i18.DemoTypeaheadMinLengthComponent, i19.DemoTypeaheadNoResultComponent, i20.DemoTypeaheadOnBlurComponent, i21.DemoTypeaheadOnSelectComponent, i22.DemoTypeaheadPhraseDelimitersComponent, i12.DemoTypeaheadReactiveFormComponent, i23.DemoTypeaheadScrollableComponent, i24.DemotypeaheadSelectFirstItemComponent, i25.DemoTypeaheadShowOnBlurComponent, i26.DemoTypeaheadSingleWorldComponent, i27.DemoTypeaheadAsyncHttpRequestComponent, i28.DemoTypeaheadOrderingComponent, i29.DemoTypeaheadMultipleSearchComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        forms_1.ReactiveFormsModule,
        docs_1.DocsModule, i30.TypeaheadModule, i31.RouterModule], exports: [typeahead_section_component_1.TypeaheadSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    typeahead_section_component_1.TypeaheadSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    docs_1.DocsModule,
                    typeahead_1.TypeaheadModule.forRoot(),
                    router_1.RouterModule.forChild(demo_typeahead_routes_1.routes)
                ],
                exports: [typeahead_section_component_1.TypeaheadSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "UTeL":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/basic/basic.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoTypeaheadBasicComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "UanY":
/*!*******************************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/async-http-request/async-http-request.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadAsyncHttpRequestComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i3 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i4 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTypeaheadAsyncHttpRequestComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessage, "\n");
} }
var DemoTypeaheadAsyncHttpRequestComponent = /** @class */ (function () {
    function DemoTypeaheadAsyncHttpRequestComponent(http) {
        this.http = http;
    }
    DemoTypeaheadAsyncHttpRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.suggestions$ = new rxjs_1.Observable(function (observer) {
            observer.next(_this.search);
        }).pipe(operators_1.switchMap(function (query) {
            if (query) {
                // using github public api to get users by name
                return _this.http.get('https://api.github.com/search/users', {
                    params: { q: query }
                }).pipe(operators_1.map(function (data) { return data && data.items || []; }), operators_1.tap(function () { return rxjs_1.noop; }, function (err) {
                    // in case of http error
                    _this.errorMessage = err && err.message || 'Something goes wrong';
                }));
            }
            return rxjs_1.of([]);
        }));
    };
    DemoTypeaheadAsyncHttpRequestComponent.ɵfac = function DemoTypeaheadAsyncHttpRequestComponent_Factory(t) { return new (t || DemoTypeaheadAsyncHttpRequestComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
    DemoTypeaheadAsyncHttpRequestComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadAsyncHttpRequestComponent, selectors: [["demo-typeahead-async-http"]], decls: 5, vars: 7, consts: [[1, "card", "card-block", "card-header"], ["typeaheadOptionField", "login", "placeholder", "Enter GitHub username", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadAsync", "ngModelChange"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]], template: function DemoTypeaheadAsyncHttpRequestComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadAsyncHttpRequestComponent_Template_input_ngModelChange_3_listener($event) { return ctx.search = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoTypeaheadAsyncHttpRequestComponent_div_4_Template, 2, 1, "div", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 5, ctx.search), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.search)("typeahead", ctx.suggestions$)("typeaheadAsync", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.errorMessage);
        } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TypeaheadDirective, i4.NgIf], pipes: [i4.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadAsyncHttpRequestComponent;
}());
exports.DemoTypeaheadAsyncHttpRequestComponent = DemoTypeaheadAsyncHttpRequestComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadAsyncHttpRequestComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-async-http',
                templateUrl: './async-http-request.html'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();


/***/ }),

/***/ "UmaE":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/docs/usage.md ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\n// RECOMMENDED\nimport { TypeaheadModule } from 'bao-tran-angular/typeahead';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { TypeaheadModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [\n    BrowserAnimationsModule,\n    TypeaheadModule.forRoot(),\n    ...\n  ]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "V+7F":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/on-blur/on-blur.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n<pre class=\"card card-block card-header\">Option on blur: {{optionOnBlur | json}}</pre>\r\n\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       (typeaheadOnBlur)=\"typeaheadOnBlur($event)\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "VH/0":
/*!***************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/typeahead-section.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeaheadSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var typeahead_section_list_1 = __webpack_require__(/*! ./typeahead-section.list */ "StlQ");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var TypeaheadSectionComponent = /** @class */ (function () {
    function TypeaheadSectionComponent() {
        this.name = 'Typeahead';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/typeahead';
        this.componentContent = typeahead_section_list_1.demoComponentContent;
    }
    TypeaheadSectionComponent.ɵfac = function TypeaheadSectionComponent_Factory(t) { return new (t || TypeaheadSectionComponent)(); };
    TypeaheadSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TypeaheadSectionComponent, selectors: [["typeahead-section"]], decls: 2, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function TypeaheadSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelement(1, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return TypeaheadSectionComponent;
}());
exports.TypeaheadSectionComponent = TypeaheadSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TypeaheadSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'typeahead-section',
                templateUrl: './typeahead-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "VPiw":
/*!***********************************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/cancel-on-focus-lost/cancel-on-focus-lost.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadCancelRequestOnFocusLostComponent = exports.getTypeaheadConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var typeahead_1 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTypeaheadCancelRequestOnFocusLostComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Loading");
    i0.ɵɵelementEnd();
} }
function getTypeaheadConfig() {
    return Object.assign(new typeahead_1.TypeaheadConfig(), { cancelRequestOnFocusLost: true });
}
exports.getTypeaheadConfig = getTypeaheadConfig;
var DemoTypeaheadCancelRequestOnFocusLostComponent = /** @class */ (function () {
    function DemoTypeaheadCancelRequestOnFocusLostComponent() {
        var _this = this;
        this.statesComplex = [
            { id: 1, name: 'Alabama', region: 'South' },
            { id: 2, name: 'Alaska', region: 'West' },
            { id: 3, name: 'Arizona', region: 'West' },
            { id: 4, name: 'Arkansas', region: 'South' },
            { id: 5, name: 'California', region: 'West' },
            { id: 6, name: 'Colorado', region: 'West' },
            { id: 7, name: 'Connecticut', region: 'Northeast' },
            { id: 8, name: 'Delaware', region: 'South' },
            { id: 9, name: 'Florida', region: 'South' },
            { id: 10, name: 'Georgia', region: 'South' },
            { id: 11, name: 'Hawaii', region: 'West' },
            { id: 12, name: 'Idaho', region: 'West' },
            { id: 13, name: 'Illinois', region: 'Midwest' },
            { id: 14, name: 'Indiana', region: 'Midwest' },
            { id: 15, name: 'Iowa', region: 'Midwest' },
            { id: 16, name: 'Kansas', region: 'Midwest' },
            { id: 17, name: 'Kentucky', region: 'South' },
            { id: 18, name: 'Louisiana', region: 'South' },
            { id: 19, name: 'Maine', region: 'Northeast' },
            { id: 21, name: 'Maryland', region: 'South' },
            { id: 22, name: 'Massachusetts', region: 'Northeast' },
            { id: 23, name: 'Michigan', region: 'Midwest' },
            { id: 24, name: 'Minnesota', region: 'Midwest' },
            { id: 25, name: 'Mississippi', region: 'South' },
            { id: 26, name: 'Missouri', region: 'Midwest' },
            { id: 27, name: 'Montana', region: 'West' },
            { id: 28, name: 'Nebraska', region: 'Midwest' },
            { id: 29, name: 'Nevada', region: 'West' },
            { id: 30, name: 'New Hampshire', region: 'Northeast' },
            { id: 31, name: 'New Jersey', region: 'Northeast' },
            { id: 32, name: 'New Mexico', region: 'West' },
            { id: 33, name: 'New York', region: 'Northeast' },
            { id: 34, name: 'North Dakota', region: 'Midwest' },
            { id: 35, name: 'North Carolina', region: 'South' },
            { id: 36, name: 'Ohio', region: 'Midwest' },
            { id: 37, name: 'Oklahoma', region: 'South' },
            { id: 38, name: 'Oregon', region: 'West' },
            { id: 39, name: 'Pennsylvania', region: 'Northeast' },
            { id: 40, name: 'Rhode Island', region: 'Northeast' },
            { id: 41, name: 'South Carolina', region: 'South' },
            { id: 42, name: 'South Dakota', region: 'Midwest' },
            { id: 43, name: 'Tennessee', region: 'South' },
            { id: 44, name: 'Texas', region: 'South' },
            { id: 45, name: 'Utah', region: 'West' },
            { id: 46, name: 'Vermont', region: 'Northeast' },
            { id: 47, name: 'Virginia', region: 'South' },
            { id: 48, name: 'Washington', region: 'South' },
            { id: 49, name: 'West Virginia', region: 'South' },
            { id: 50, name: 'Wisconsin', region: 'Midwest' },
            { id: 51, name: 'Wyoming', region: 'West' }
        ];
        this.dataSource = rxjs_1.Observable.create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        })
            .pipe(operators_1.mergeMap(function (token) { return _this.getStatesAsObservable(token); }), operators_1.delay(1000));
    }
    DemoTypeaheadCancelRequestOnFocusLostComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'i');
        return rxjs_1.of(this.statesComplex.filter(function (state) {
            return query.test(state.name);
        }));
    };
    DemoTypeaheadCancelRequestOnFocusLostComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    DemoTypeaheadCancelRequestOnFocusLostComponent.prototype.typeaheadOnSelect = function (e) {
        console.log('Selected value: ', e.value);
    };
    DemoTypeaheadCancelRequestOnFocusLostComponent.ɵfac = function DemoTypeaheadCancelRequestOnFocusLostComponent_Factory(t) { return new (t || DemoTypeaheadCancelRequestOnFocusLostComponent)(); };
    DemoTypeaheadCancelRequestOnFocusLostComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadCancelRequestOnFocusLostComponent, selectors: [["demo-typeahead-cancel-on-focus-lost"]], features: [i0.ɵɵProvidersFeature([{ provide: typeahead_1.TypeaheadConfig, useFactory: getTypeaheadConfig }])], decls: 5, vars: 7, consts: [[1, "card", "card-block", "card-header"], ["typeaheadOptionField", "name", "placeholder", "Locations loaded with timeout", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadOptionsLimit", "ngModelChange", "typeaheadLoading", "typeaheadOnSelect"], [4, "ngIf"]], template: function DemoTypeaheadCancelRequestOnFocusLostComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadCancelRequestOnFocusLostComponent_Template_input_ngModelChange_3_listener($event) { return ctx.asyncSelected = $event; })("typeaheadLoading", function DemoTypeaheadCancelRequestOnFocusLostComponent_Template_input_typeaheadLoading_3_listener($event) { return ctx.changeTypeaheadLoading($event); })("typeaheadOnSelect", function DemoTypeaheadCancelRequestOnFocusLostComponent_Template_input_typeaheadOnSelect_3_listener($event) { return ctx.typeaheadOnSelect($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoTypeaheadCancelRequestOnFocusLostComponent_div_4_Template, 2, 0, "div", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 5, ctx.asyncSelected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.asyncSelected)("typeahead", ctx.dataSource)("typeaheadOptionsLimit", 7);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.typeaheadLoading);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective, i3.NgIf], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadCancelRequestOnFocusLostComponent;
}());
exports.DemoTypeaheadCancelRequestOnFocusLostComponent = DemoTypeaheadCancelRequestOnFocusLostComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadCancelRequestOnFocusLostComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-cancel-on-focus-lost',
                templateUrl: './cancel-on-focus-lost.html',
                providers: [{ provide: typeahead_1.TypeaheadConfig, useFactory: getTypeaheadConfig }]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WT7e":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/latinize/latinize.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadLatinizeComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadLatinizeComponent = /** @class */ (function () {
    function DemoTypeaheadLatinizeComponent() {
        this.frenchWords = [
            'popularisé',
            'français',
            'intéressé',
            'générateur',
            'répandue',
            'répétition',
            'súper'
        ];
    }
    DemoTypeaheadLatinizeComponent.ɵfac = function DemoTypeaheadLatinizeComponent_Factory(t) { return new (t || DemoTypeaheadLatinizeComponent)(); };
    DemoTypeaheadLatinizeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadLatinizeComponent, selectors: [["demo-typeahead-latinize"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadLatinize", "ngModelChange"]], template: function DemoTypeaheadLatinizeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadLatinizeComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.frenchWords)("typeaheadLatinize", true);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadLatinizeComponent;
}());
exports.DemoTypeaheadLatinizeComponent = DemoTypeaheadLatinizeComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadLatinizeComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-latinize',
                templateUrl: './latinize.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAbq":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/reactive-form/reactive-form.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadReactiveFormComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadReactiveFormComponent = /** @class */ (function () {
    function DemoTypeaheadReactiveFormComponent() {
        this.stateCtrl = new forms_1.FormControl();
        this.myForm = new forms_1.FormGroup({
            state: this.stateCtrl
        });
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadReactiveFormComponent.ɵfac = function DemoTypeaheadReactiveFormComponent_Factory(t) { return new (t || DemoTypeaheadReactiveFormComponent)(); };
    DemoTypeaheadReactiveFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadReactiveFormComponent, selectors: [["demo-typeahead-reactive-form"]], decls: 5, vars: 7, consts: [[1, "card", "card-block", "card-header"], [3, "formGroup"], ["formControlName", "state", "placeholder", "Typeahead inside a form", 1, "form-control", 3, "typeahead", "typeaheadOptionsLimit", "typeaheadMinLength"]], template: function DemoTypeaheadReactiveFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "form", 1);
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 5, ctx.myForm.value.state), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.myForm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("typeahead", ctx.states)("typeaheadOptionsLimit", 7)("typeaheadMinLength", 0);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadReactiveFormComponent;
}());
exports.DemoTypeaheadReactiveFormComponent = DemoTypeaheadReactiveFormComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadReactiveFormComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-reactive-form',
                templateUrl: './reactive-form.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZVTM":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/async-http-request/async-http-request.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{ search | json }}</pre>\r\n\r\n<input [(ngModel)]=\"search\"\r\n       typeaheadOptionField=\"login\"\r\n       [typeahead]=\"suggestions$\"\r\n       [typeaheadAsync]=\"true\"\r\n       class=\"form-control\"\r\n       placeholder=\"Enter GitHub username\">\r\n\r\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">\r\n  {{ errorMessage }}\r\n</div>\r\n\r\n");

/***/ }),

/***/ "aNgY":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/container/container.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadContainerComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadContainerComponent = /** @class */ (function () {
    function DemoTypeaheadContainerComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadContainerComponent.ɵfac = function DemoTypeaheadContainerComponent_Factory(t) { return new (t || DemoTypeaheadContainerComponent)(); };
    DemoTypeaheadContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadContainerComponent, selectors: [["demo-typeahead-container"]], decls: 4, vars: 5, consts: [[1, "card", "card-block", "card-header", "mb-3"], ["container", "body", 1, "form-control", 3, "ngModel", "typeahead", "ngModelChange"]], template: function DemoTypeaheadContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadContainerComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 3, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadContainerComponent;
}());
exports.DemoTypeaheadContainerComponent = DemoTypeaheadContainerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadContainerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-container',
                templateUrl: './container.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "aWA+":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/selected-first-item/selected-first-item.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadSelectFirstItem]=\"false\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "ayFk":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/field/field.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{customSelected | json}}</pre>\r\n<input [(ngModel)]=\"customSelected\"\r\n       [typeahead]=\"statesComplex\"\r\n       typeaheadOptionField=\"name\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "cD+m":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/phrase-delimiters/phrase-delimiters.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-phrase-delimiters',\r\n  templateUrl: './phrase-delimiters.html'\r\n})\r\nexport class DemoTypeaheadPhraseDelimitersComponent {\r\n  selected: string;\r\n  states = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "dTuF":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/list-template/list-template.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [optionsListTemplate]=\"customListTemplate\"\r\n       class=\"form-control\">\r\n\r\n<ng-template #customListTemplate let-matches=\"matches\" let-query=\"query\" let-typeaheadTemplateMethods>\r\n  <ul class=\"custom-list-group\" [class.dropdown-menu]=\"isBs3\">\r\n    <li class=\"custom-list-group-item\"\r\n        *ngFor=\"let match of matches\"\r\n        [class.active]=\"typeaheadTemplateMethods.isActive(match)\"\r\n        (click)=\"typeaheadTemplateMethods.selectMatch(match, $event)\"\r\n        (mouseenter)=\"typeaheadTemplateMethods.selectActive(match)\">\r\n      {{ match.item }}\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n");

/***/ }),

/***/ "fRcN":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/min-length/min-length.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-min-length',\r\n  templateUrl: './min-length.html'\r\n})\r\nexport class DemoTypeaheadMinLengthComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "gT4G":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/multiple-search/multiple-search.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-multiple-search',\r\n  templateUrl: './multiple-search.html'\r\n})\r\nexport class DemoTypeaheadMultipleSearchComponent {\r\n  selected: string;\r\n  states = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "gviR":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/min-length/min-length.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadMinLength]=\"0\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "h+t+":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/show-on-blur/show-on-blur.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-show-on-blur',\r\n  templateUrl: './show-on-blur.html'\r\n})\r\nexport class DemoTypeaheadShowOnBlurComponent {\r\n  typeaheadHideResultsOnBlur = false;\r\n  selected: string;\r\n  states = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "irdt":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/cancel-on-focus-lost/cancel-on-focus-lost.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{asyncSelected | json}}</pre>\r\n\r\n<input [(ngModel)]=\"asyncSelected\"\r\n       [typeahead]=\"dataSource\"\r\n       (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\r\n       (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\r\n       [typeaheadOptionsLimit]=\"7\"\r\n       typeaheadOptionField=\"name\"\r\n       placeholder=\"Locations loaded with timeout\"\r\n       class=\"form-control\">\r\n<div *ngIf=\"typeaheadLoading\">Loading</div>\r\n");

/***/ }),

/***/ "isib":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/list-template/list-template.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadListTemplateComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var utils_1 = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoTypeaheadListTemplateComponent_ng_template_4_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function DemoTypeaheadListTemplateComponent_ng_template_4_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r9); var match_r6 = ctx.$implicit; var typeaheadTemplateMethods_r4 = i0.ɵɵnextContext().$implicit; return typeaheadTemplateMethods_r4.selectMatch(match_r6, $event); })("mouseenter", function DemoTypeaheadListTemplateComponent_ng_template_4_li_1_Template_li_mouseenter_0_listener() { i0.ɵɵrestoreView(_r9); var match_r6 = ctx.$implicit; var typeaheadTemplateMethods_r4 = i0.ɵɵnextContext().$implicit; return typeaheadTemplateMethods_r4.selectActive(match_r6); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var match_r6 = ctx.$implicit;
    var typeaheadTemplateMethods_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("active", typeaheadTemplateMethods_r4.isActive(match_r6));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", match_r6.item, " ");
} }
function DemoTypeaheadListTemplateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵtemplate(1, DemoTypeaheadListTemplateComponent_ng_template_4_li_1_Template, 2, 3, "li", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var matches_r2 = ctx.matches;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("dropdown-menu", ctx_r1.isBs3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", matches_r2);
} }
var DemoTypeaheadListTemplateComponent = /** @class */ (function () {
    function DemoTypeaheadListTemplateComponent() {
        this.isBs3 = utils_1.isBs3();
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadListTemplateComponent.ɵfac = function DemoTypeaheadListTemplateComponent_Factory(t) { return new (t || DemoTypeaheadListTemplateComponent)(); };
    DemoTypeaheadListTemplateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadListTemplateComponent, selectors: [["demo-typeahead-templates"]], decls: 6, vars: 6, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "optionsListTemplate", "ngModelChange"], ["customListTemplate", ""], [1, "custom-list-group"], ["class", "custom-list-group-item", 3, "active", "click", "mouseenter", 4, "ngFor", "ngForOf"], [1, "custom-list-group-item", 3, "click", "mouseenter"]], template: function DemoTypeaheadListTemplateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadListTemplateComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoTypeaheadListTemplateComponent_ng_template_4_Template, 2, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(5);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("optionsListTemplate", _r0);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective, i3.NgForOf], pipes: [i3.JsonPipe], styles: [".custom-list-group[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      width: 300px;\n      padding-left: 0;\n      margin: 0;\n      list-style: none;\n    }\n\n    .custom-list-group-item[_ngcontent-%COMP%] {\n      position: relative;\n      display: block;\n      padding: .75rem 1.25rem;\n      background-color: #fff;\n    }\n\n    .custom-list-group-item.active[_ngcontent-%COMP%] {\n      z-index: 2;\n      color: #fff;\n      background-color: #FF4461;\n      border-color: #FF4461;\n    }"] });
    return DemoTypeaheadListTemplateComponent;
}());
exports.DemoTypeaheadListTemplateComponent = DemoTypeaheadListTemplateComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadListTemplateComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-templates',
                templateUrl: './list-template.html',
                styles: ["\n    .custom-list-group {\n      display: flex;\n      flex-direction: column;\n      width: 300px;\n      padding-left: 0;\n      margin: 0;\n      list-style: none;\n    }\n\n    .custom-list-group-item {\n      position: relative;\n      display: block;\n      padding: .75rem 1.25rem;\n      background-color: #fff;\n    }\n\n    .custom-list-group-item.active {\n      z-index: 2;\n      color: #fff;\n      background-color: #FF4461;\n      border-color: #FF4461;\n    }\n  "]
            }]
    }], null, null); })();


/***/ }),

/***/ "k/JK":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/field/field.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-field',\r\n  templateUrl: './field.html'\r\n})\r\nexport class DemoTypeaheadFieldComponent {\r\n  customSelected: string;\r\n  statesComplex: any[] = [\r\n    { id: 1, name: 'Alabama', region: 'South' },\r\n    { id: 2, name: 'Alaska', region: 'West' },\r\n    { id: 3, name: 'Arizona', region: 'West' },\r\n    { id: 4, name: 'Arkansas', region: 'South' },\r\n    { id: 5, name: 'California', region: 'West' },\r\n    { id: 6, name: 'Colorado', region: 'West' },\r\n    { id: 7, name: 'Connecticut', region: 'Northeast' },\r\n    { id: 8, name: 'Delaware', region: 'South' },\r\n    { id: 9, name: 'Florida', region: 'South' },\r\n    { id: 10, name: 'Georgia', region: 'South' },\r\n    { id: 11, name: 'Hawaii', region: 'West' },\r\n    { id: 12, name: 'Idaho', region: 'West' },\r\n    { id: 13, name: 'Illinois', region: 'Midwest' },\r\n    { id: 14, name: 'Indiana', region: 'Midwest' },\r\n    { id: 15, name: 'Iowa', region: 'Midwest' },\r\n    { id: 16, name: 'Kansas', region: 'Midwest' },\r\n    { id: 17, name: 'Kentucky', region: 'South' },\r\n    { id: 18, name: 'Louisiana', region: 'South' },\r\n    { id: 19, name: 'Maine', region: 'Northeast' },\r\n    { id: 21, name: 'Maryland', region: 'South' },\r\n    { id: 22, name: 'Massachusetts', region: 'Northeast' },\r\n    { id: 23, name: 'Michigan', region: 'Midwest' },\r\n    { id: 24, name: 'Minnesota', region: 'Midwest' },\r\n    { id: 25, name: 'Mississippi', region: 'South' },\r\n    { id: 26, name: 'Missouri', region: 'Midwest' },\r\n    { id: 27, name: 'Montana', region: 'West' },\r\n    { id: 28, name: 'Nebraska', region: 'Midwest' },\r\n    { id: 29, name: 'Nevada', region: 'West' },\r\n    { id: 30, name: 'New Hampshire', region: 'Northeast' },\r\n    { id: 31, name: 'New Jersey', region: 'Northeast' },\r\n    { id: 32, name: 'New Mexico', region: 'West' },\r\n    { id: 33, name: 'New York', region: 'Northeast' },\r\n    { id: 34, name: 'North Dakota', region: 'Midwest' },\r\n    { id: 35, name: 'North Carolina', region: 'South' },\r\n    { id: 36, name: 'Ohio', region: 'Midwest' },\r\n    { id: 37, name: 'Oklahoma', region: 'South' },\r\n    { id: 38, name: 'Oregon', region: 'West' },\r\n    { id: 39, name: 'Pennsylvania', region: 'Northeast' },\r\n    { id: 40, name: 'Rhode Island', region: 'Northeast' },\r\n    { id: 41, name: 'South Carolina', region: 'South' },\r\n    { id: 42, name: 'South Dakota', region: 'Midwest' },\r\n    { id: 43, name: 'Tennessee', region: 'South' },\r\n    { id: 44, name: 'Texas', region: 'South' },\r\n    { id: 45, name: 'Utah', region: 'West' },\r\n    { id: 46, name: 'Vermont', region: 'Northeast' },\r\n    { id: 47, name: 'Virginia', region: 'South' },\r\n    { id: 48, name: 'Washington', region: 'South' },\r\n    { id: 49, name: 'West Virginia', region: 'South' },\r\n    { id: 50, name: 'Wisconsin', region: 'Midwest' },\r\n    { id: 51, name: 'Wyoming', region: 'West' }\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "kq2S":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/on-select/on-select.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header mb-3\">Model: {{selectedValue | json}}</pre>\r\n<pre class=\"card card-block card-header mb-3\">Selected option: {{selectedOption | json}}</pre>\r\n<div>\r\n    <input [(ngModel)]=\"selectedValue\"\r\n        [typeahead]=\"states\"\r\n        typeaheadOptionField=\"name\"\r\n        (typeaheadOnSelect)=\"onSelect($event)\"\r\n        (typeaheadOnPreview)=\"onPreview($event)\"\r\n        class=\"form-control\">\r\n    <div style=\"float:right;width:160px;\"\r\n         class=\"card card-block card-header mb-3\">\r\n        Preview region: \r\n        <span *ngIf=\"previewOption != null\">{{previewOption?.region}}</span>\r\n        <span *ngIf=\"previewOption == null\">N/A</span>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "mRh0":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/delay/delay.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadDelayComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadDelayComponent = /** @class */ (function () {
    function DemoTypeaheadDelayComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadDelayComponent.ɵfac = function DemoTypeaheadDelayComponent_Factory(t) { return new (t || DemoTypeaheadDelayComponent)(); };
    DemoTypeaheadDelayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadDelayComponent, selectors: [["demo-typeahead-delay"]], decls: 4, vars: 5, consts: [[1, "card", "card-block", "card-header"], ["typeaheadWaitMs", "1000", 1, "form-control", 3, "ngModel", "typeahead", "ngModelChange"]], template: function DemoTypeaheadDelayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadDelayComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 3, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadDelayComponent;
}());
exports.DemoTypeaheadDelayComponent = DemoTypeaheadDelayComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadDelayComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-delay',
                templateUrl: './delay.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "mY4/":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/async/async.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadAsyncComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadAsyncComponent = /** @class */ (function () {
    function DemoTypeaheadAsyncComponent() {
        var _this = this;
        this.statesComplex = [
            { id: 1, name: 'Alabama', region: 'South' },
            { id: 2, name: 'Alaska', region: 'West' },
            { id: 3, name: 'Arizona', region: 'West' },
            { id: 4, name: 'Arkansas', region: 'South' },
            { id: 5, name: 'California', region: 'West' },
            { id: 6, name: 'Colorado', region: 'West' },
            { id: 7, name: 'Connecticut', region: 'Northeast' },
            { id: 8, name: 'Delaware', region: 'South' },
            { id: 9, name: 'Florida', region: 'South' },
            { id: 10, name: 'Georgia', region: 'South' },
            { id: 11, name: 'Hawaii', region: 'West' },
            { id: 12, name: 'Idaho', region: 'West' },
            { id: 13, name: 'Illinois', region: 'Midwest' },
            { id: 14, name: 'Indiana', region: 'Midwest' },
            { id: 15, name: 'Iowa', region: 'Midwest' },
            { id: 16, name: 'Kansas', region: 'Midwest' },
            { id: 17, name: 'Kentucky', region: 'South' },
            { id: 18, name: 'Louisiana', region: 'South' },
            { id: 19, name: 'Maine', region: 'Northeast' },
            { id: 21, name: 'Maryland', region: 'South' },
            { id: 22, name: 'Massachusetts', region: 'Northeast' },
            { id: 23, name: 'Michigan', region: 'Midwest' },
            { id: 24, name: 'Minnesota', region: 'Midwest' },
            { id: 25, name: 'Mississippi', region: 'South' },
            { id: 26, name: 'Missouri', region: 'Midwest' },
            { id: 27, name: 'Montana', region: 'West' },
            { id: 28, name: 'Nebraska', region: 'Midwest' },
            { id: 29, name: 'Nevada', region: 'West' },
            { id: 30, name: 'New Hampshire', region: 'Northeast' },
            { id: 31, name: 'New Jersey', region: 'Northeast' },
            { id: 32, name: 'New Mexico', region: 'West' },
            { id: 33, name: 'New York', region: 'Northeast' },
            { id: 34, name: 'North Dakota', region: 'Midwest' },
            { id: 35, name: 'North Carolina', region: 'South' },
            { id: 36, name: 'Ohio', region: 'Midwest' },
            { id: 37, name: 'Oklahoma', region: 'South' },
            { id: 38, name: 'Oregon', region: 'West' },
            { id: 39, name: 'Pennsylvania', region: 'Northeast' },
            { id: 40, name: 'Rhode Island', region: 'Northeast' },
            { id: 41, name: 'South Carolina', region: 'South' },
            { id: 42, name: 'South Dakota', region: 'Midwest' },
            { id: 43, name: 'Tennessee', region: 'South' },
            { id: 44, name: 'Texas', region: 'South' },
            { id: 45, name: 'Utah', region: 'West' },
            { id: 46, name: 'Vermont', region: 'Northeast' },
            { id: 47, name: 'Virginia', region: 'South' },
            { id: 48, name: 'Washington', region: 'South' },
            { id: 49, name: 'West Virginia', region: 'South' },
            { id: 50, name: 'Wisconsin', region: 'Midwest' },
            { id: 51, name: 'Wyoming', region: 'West' }
        ];
        this.dataSource = new rxjs_1.Observable(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        })
            .pipe(operators_1.mergeMap(function (token) { return _this.getStatesAsObservable(token); }));
    }
    DemoTypeaheadAsyncComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'i');
        return rxjs_1.of(this.statesComplex.filter(function (state) {
            return query.test(state.name);
        }));
    };
    DemoTypeaheadAsyncComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    DemoTypeaheadAsyncComponent.ɵfac = function DemoTypeaheadAsyncComponent_Factory(t) { return new (t || DemoTypeaheadAsyncComponent)(); };
    DemoTypeaheadAsyncComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadAsyncComponent, selectors: [["demo-typeahead-async"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header"], ["typeaheadOptionField", "name", "placeholder", "Locations loaded via observable", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadAsync", "ngModelChange", "typeaheadLoading"]], template: function DemoTypeaheadAsyncComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadAsyncComponent_Template_input_ngModelChange_3_listener($event) { return ctx.asyncSelected = $event; })("typeaheadLoading", function DemoTypeaheadAsyncComponent_Template_input_typeaheadLoading_3_listener($event) { return ctx.changeTypeaheadLoading($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.asyncSelected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.asyncSelected)("typeahead", ctx.dataSource)("typeaheadAsync", true);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadAsyncComponent;
}());
exports.DemoTypeaheadAsyncComponent = DemoTypeaheadAsyncComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadAsyncComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-async',
                templateUrl: './async.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mz7B":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/dropup/dropup.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-dropup',\r\n  templateUrl: './dropup.html'\r\n})\r\nexport class DemoTypeaheadDropupComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "nH25":
/*!*****************************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/phrase-delimiters/phrase-delimiters.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadPhraseDelimitersComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadPhraseDelimitersComponent = /** @class */ (function () {
    function DemoTypeaheadPhraseDelimitersComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadPhraseDelimitersComponent.ɵfac = function DemoTypeaheadPhraseDelimitersComponent_Factory(t) { return new (t || DemoTypeaheadPhraseDelimitersComponent)(); };
    DemoTypeaheadPhraseDelimitersComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadPhraseDelimitersComponent, selectors: [["demo-typeahead-phrase-delimiters"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header"], ["typeaheadPhraseDelimiters", "&,", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadSingleWords", "ngModelChange"]], template: function DemoTypeaheadPhraseDelimitersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadPhraseDelimitersComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadSingleWords", true);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadPhraseDelimitersComponent;
}());
exports.DemoTypeaheadPhraseDelimitersComponent = DemoTypeaheadPhraseDelimitersComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadPhraseDelimitersComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-phrase-delimiters',
                templateUrl: './phrase-delimiters.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "nXsi":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/multiple-search/multiple-search.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n<input [(ngModel)]=\"selected\"\r\n       [typeahead]=\"states\"\r\n       [typeaheadMultipleSearch]=\"true\"\r\n       typeaheadMultipleSearchDelimiters=\",|\"\r\n       class=\"form-control\">\r\n");

/***/ }),

/***/ "njhx":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/single-world/single-world.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-single-world',\r\n  templateUrl: './single-world.html'\r\n})\r\nexport class DemoTypeaheadSingleWorldComponent {\r\n  typeaheadSingleWords = true;\r\n  selected: string;\r\n  states = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "oOfT":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/grouping/grouping.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-grouping',\r\n  templateUrl: './grouping.html'\r\n})\r\nexport class DemoTypeaheadGroupingComponent {\r\n  groupSelected: string;\r\n  statesComplex: any[] = [\r\n    { id: 1, name: 'Alabama', region: 'South' },\r\n    { id: 2, name: 'Alaska', region: 'West' },\r\n    { id: 3, name: 'Arizona', region: 'West' },\r\n    { id: 4, name: 'Arkansas', region: 'South' },\r\n    { id: 5, name: 'California', region: 'West' },\r\n    { id: 6, name: 'Colorado', region: 'West' },\r\n    { id: 7, name: 'Connecticut', region: 'Northeast' },\r\n    { id: 8, name: 'Delaware', region: 'South' },\r\n    { id: 9, name: 'Florida', region: 'South' },\r\n    { id: 10, name: 'Georgia', region: 'South' },\r\n    { id: 11, name: 'Hawaii', region: 'West' },\r\n    { id: 12, name: 'Idaho', region: 'West' },\r\n    { id: 13, name: 'Illinois', region: 'Midwest' },\r\n    { id: 14, name: 'Indiana', region: 'Midwest' },\r\n    { id: 15, name: 'Iowa', region: 'Midwest' },\r\n    { id: 16, name: 'Kansas', region: 'Midwest' },\r\n    { id: 17, name: 'Kentucky', region: 'South' },\r\n    { id: 18, name: 'Louisiana', region: 'South' },\r\n    { id: 19, name: 'Maine', region: 'Northeast' },\r\n    { id: 21, name: 'Maryland', region: 'South' },\r\n    { id: 22, name: 'Massachusetts', region: 'Northeast' },\r\n    { id: 23, name: 'Michigan', region: 'Midwest' },\r\n    { id: 24, name: 'Minnesota', region: 'Midwest' },\r\n    { id: 25, name: 'Mississippi', region: 'South' },\r\n    { id: 26, name: 'Missouri', region: 'Midwest' },\r\n    { id: 27, name: 'Montana', region: 'West' },\r\n    { id: 28, name: 'Nebraska', region: 'Midwest' },\r\n    { id: 29, name: 'Nevada', region: 'West' },\r\n    { id: 30, name: 'New Hampshire', region: 'Northeast' },\r\n    { id: 31, name: 'New Jersey', region: 'Northeast' },\r\n    { id: 32, name: 'New Mexico', region: 'West' },\r\n    { id: 33, name: 'New York', region: 'Northeast' },\r\n    { id: 34, name: 'North Dakota', region: 'Midwest' },\r\n    { id: 35, name: 'North Carolina', region: 'South' },\r\n    { id: 36, name: 'Ohio', region: 'Midwest' },\r\n    { id: 37, name: 'Oklahoma', region: 'South' },\r\n    { id: 38, name: 'Oregon', region: 'West' },\r\n    { id: 39, name: 'Pennsylvania', region: 'Northeast' },\r\n    { id: 40, name: 'Rhode Island', region: 'Northeast' },\r\n    { id: 41, name: 'South Carolina', region: 'South' },\r\n    { id: 42, name: 'South Dakota', region: 'Midwest' },\r\n    { id: 43, name: 'Tennessee', region: 'South' },\r\n    { id: 44, name: 'Texas', region: 'South' },\r\n    { id: 45, name: 'Utah', region: 'West' },\r\n    { id: 46, name: 'Vermont', region: 'Northeast' },\r\n    { id: 47, name: 'Virginia', region: 'South' },\r\n    { id: 48, name: 'Washington', region: 'South' },\r\n    { id: 49, name: 'West Virginia', region: 'South' },\r\n    { id: 50, name: 'Wisconsin', region: 'Midwest' },\r\n    { id: 51, name: 'Wyoming', region: 'West' }\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "pfHP":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/ordering/ordering.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-3\">\r\n  <h6>Source - <strong>array of string</strong>. Order direction - <strong>descending</strong></h6>\r\n  <input [(ngModel)]=\"selected1\"\r\n         [typeahead]=\"states\"\r\n         [typeaheadOrderBy]=\"sortConfig1\"\r\n         class=\"form-control\">\r\n</div>\r\n  <div class=\"mb-3\">\r\n  <h6>Source - <strong>array of string</strong>. Order direction - <strong>ascending</strong></h6>\r\n  <input [(ngModel)]=\"selected2\"\r\n         [typeahead]=\"states\"\r\n         [typeaheadOrderBy]=\"sortConfig2\"\r\n         class=\"form-control\">\r\n</div>\r\n<div class=\"mb-3\">\r\n  <h6>\r\n    Source - <strong>array of objects</strong>. Order direction - <strong>ascending</strong>,\r\n    sort by <strong>city</strong>, group by <strong>state</strong>\r\n  </h6>\r\n  <input [(ngModel)]=\"selected3\"\r\n         [typeahead]=\"cities\"\r\n         typeaheadOptionField=\"city\"\r\n         typeaheadGroupField=\"state\"\r\n         [typeaheadItemTemplate]=\"customItemTemplate\"\r\n         [typeaheadOrderBy]=\"sortConfig3\"\r\n         class=\"form-control\">\r\n\r\n  <ng-template #customItemTemplate let-model=\"item\">\r\n    <span><strong>{{model.city}}</strong> - {{model.code}}</span>\r\n  </ng-template>\r\n</div>\r\n\r\n<div class=\"mb-3\">\r\n  <h6>Source - <strong>Observable of array of string</strong>. Order direction - <strong>descending</strong></h6>\r\n  <input [(ngModel)]=\"selected4\"\r\n         [typeahead]=\"states$\"\r\n         [typeaheadAsync]=\"true\"\r\n         [typeaheadOrderBy]=\"sortConfig1\"\r\n         class=\"form-control\">\r\n</div>\r\n");

/***/ }),

/***/ "plvV":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/form/form.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadFormComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadFormComponent = /** @class */ (function () {
    function DemoTypeaheadFormComponent() {
        this.model = {
            address: '312 Sundown Lane',
            state: null
        };
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadFormComponent.ɵfac = function DemoTypeaheadFormComponent_Factory(t) { return new (t || DemoTypeaheadFormComponent)(); };
    DemoTypeaheadFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadFormComponent, selectors: [["demo-typeahead-form"]], decls: 12, vars: 6, consts: [[1, "card", "card-block", "card-header"], [1, "form-group"], ["for", "address"], ["type", "text", "id", "address", "required", "", "name", "address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "state"], ["id", "state", "name", "state", 1, "form-control", 3, "ngModel", "typeahead", "ngModelChange"]], template: function DemoTypeaheadFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "form");
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelementStart(5, "label", 2);
            i0.ɵɵtext(6, "Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "input", 3);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.model.address = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 1);
            i0.ɵɵelementStart(9, "label", 4);
            i0.ɵɵtext(10, "State");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "input", 5);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.model.state = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.model), "");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.model.address);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.model.state)("typeahead", ctx.states);
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i1.DefaultValueAccessor, i1.RequiredValidator, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadFormComponent;
}());
exports.DemoTypeaheadFormComponent = DemoTypeaheadFormComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadFormComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-form',
                templateUrl: './form.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "qCqX":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/no-result/no-result.ts ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-no-result',\r\n  templateUrl: './no-result.html'\r\n})\r\nexport class DemoTypeaheadNoResultComponent {\r\n  selected: string;\r\n  noResult = false;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n\r\n  typeaheadNoResults(event: boolean): void {\r\n    this.noResult = event;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "qf3C":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/form/form.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-form',\r\n  templateUrl: './form.html'\r\n})\r\nexport class DemoTypeaheadFormComponent {\r\n  model = {\r\n    address: '312 Sundown Lane',\r\n    state: null\r\n  };\r\n  states = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "qqzA":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/on-blur/on-blur.ts ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-on-blur',\r\n  templateUrl: './on-blur.html'\r\n})\r\nexport class DemoTypeaheadOnBlurComponent {\r\n  selected: string;\r\n  optionOnBlur: any;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n\r\n  typeaheadOnBlur(event: any): void {\r\n    this.optionOnBlur = event.item;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "rIWn":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/reactive-form/reactive-form.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\nimport { FormControl, FormGroup } from '@angular/forms';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-reactive-form',\r\n  templateUrl: './reactive-form.html'\r\n})\r\nexport class DemoTypeaheadReactiveFormComponent {\r\n  stateCtrl = new FormControl();\r\n\r\n  myForm = new FormGroup({\r\n    state: this.stateCtrl\r\n  });\r\n\r\n  states = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "sf+i":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/async-http-request/async-http-request.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\nimport { HttpClient } from '@angular/common/http';\r\n\r\nimport { noop, Observable, Observer, of } from 'rxjs';\r\nimport { map, switchMap, tap } from 'rxjs/operators';\r\n\r\ninterface GitHubUserSearchResponse {\r\n  total_count: number;\r\n  incomplete_results: boolean;\r\n  items: GitHubUser[];\r\n}\r\n\r\ninterface GitHubUser {\r\n  login: string;\r\n  id:  number;\r\n  node_id: string;\r\n  avatar_url: string;\r\n  gravatar_id: string;\r\n  url: string;\r\n  html_url: string;\r\n  followers_url: string;\r\n  subscriptions_url: string;\r\n  organizations_url: string;\r\n  repos_url: string;\r\n  received_events_url: string;\r\n  type: string;\r\n  score: number;\r\n}\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-async-http',\r\n  templateUrl: './async-http-request.html'\r\n})\r\nexport class DemoTypeaheadAsyncHttpRequestComponent {\r\n  search: string;\r\n  suggestions$: Observable<GitHubUser[]>;\r\n  errorMessage: string;\r\n\r\n  constructor(private http: HttpClient) {}\r\n\r\n  ngOnInit(): void {\r\n    this.suggestions$ = new Observable((observer: Observer<string>) => {\r\n      observer.next(this.search);\r\n    }).pipe(\r\n      switchMap((query: string) => {\r\n        if (query) {\r\n          // using github public api to get users by name\r\n          return this.http.get<GitHubUserSearchResponse>(\r\n            'https://api.github.com/search/users', {\r\n            params: { q: query }\r\n          }).pipe(\r\n            map((data: GitHubUserSearchResponse) => data && data.items || []),\r\n            tap(() => noop, err => {\r\n              // in case of http error\r\n              this.errorMessage = err && err.message || 'Something goes wrong';\r\n            })\r\n          );\r\n        }\r\n\r\n        return of([]);\r\n      })\r\n    );\r\n  }\r\n}\r\n");

/***/ }),

/***/ "stFf":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/grouping/grouping.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadGroupingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadGroupingComponent = /** @class */ (function () {
    function DemoTypeaheadGroupingComponent() {
        this.statesComplex = [
            { id: 1, name: 'Alabama', region: 'South' },
            { id: 2, name: 'Alaska', region: 'West' },
            { id: 3, name: 'Arizona', region: 'West' },
            { id: 4, name: 'Arkansas', region: 'South' },
            { id: 5, name: 'California', region: 'West' },
            { id: 6, name: 'Colorado', region: 'West' },
            { id: 7, name: 'Connecticut', region: 'Northeast' },
            { id: 8, name: 'Delaware', region: 'South' },
            { id: 9, name: 'Florida', region: 'South' },
            { id: 10, name: 'Georgia', region: 'South' },
            { id: 11, name: 'Hawaii', region: 'West' },
            { id: 12, name: 'Idaho', region: 'West' },
            { id: 13, name: 'Illinois', region: 'Midwest' },
            { id: 14, name: 'Indiana', region: 'Midwest' },
            { id: 15, name: 'Iowa', region: 'Midwest' },
            { id: 16, name: 'Kansas', region: 'Midwest' },
            { id: 17, name: 'Kentucky', region: 'South' },
            { id: 18, name: 'Louisiana', region: 'South' },
            { id: 19, name: 'Maine', region: 'Northeast' },
            { id: 21, name: 'Maryland', region: 'South' },
            { id: 22, name: 'Massachusetts', region: 'Northeast' },
            { id: 23, name: 'Michigan', region: 'Midwest' },
            { id: 24, name: 'Minnesota', region: 'Midwest' },
            { id: 25, name: 'Mississippi', region: 'South' },
            { id: 26, name: 'Missouri', region: 'Midwest' },
            { id: 27, name: 'Montana', region: 'West' },
            { id: 28, name: 'Nebraska', region: 'Midwest' },
            { id: 29, name: 'Nevada', region: 'West' },
            { id: 30, name: 'New Hampshire', region: 'Northeast' },
            { id: 31, name: 'New Jersey', region: 'Northeast' },
            { id: 32, name: 'New Mexico', region: 'West' },
            { id: 33, name: 'New York', region: 'Northeast' },
            { id: 34, name: 'North Dakota', region: 'Midwest' },
            { id: 35, name: 'North Carolina', region: 'South' },
            { id: 36, name: 'Ohio', region: 'Midwest' },
            { id: 37, name: 'Oklahoma', region: 'South' },
            { id: 38, name: 'Oregon', region: 'West' },
            { id: 39, name: 'Pennsylvania', region: 'Northeast' },
            { id: 40, name: 'Rhode Island', region: 'Northeast' },
            { id: 41, name: 'South Carolina', region: 'South' },
            { id: 42, name: 'South Dakota', region: 'Midwest' },
            { id: 43, name: 'Tennessee', region: 'South' },
            { id: 44, name: 'Texas', region: 'South' },
            { id: 45, name: 'Utah', region: 'West' },
            { id: 46, name: 'Vermont', region: 'Northeast' },
            { id: 47, name: 'Virginia', region: 'South' },
            { id: 48, name: 'Washington', region: 'South' },
            { id: 49, name: 'West Virginia', region: 'South' },
            { id: 50, name: 'Wisconsin', region: 'Midwest' },
            { id: 51, name: 'Wyoming', region: 'West' }
        ];
    }
    DemoTypeaheadGroupingComponent.ɵfac = function DemoTypeaheadGroupingComponent_Factory(t) { return new (t || DemoTypeaheadGroupingComponent)(); };
    DemoTypeaheadGroupingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadGroupingComponent, selectors: [["demo-typeahead-grouping"]], decls: 4, vars: 5, consts: [[1, "card", "card-block", "card-header", "mb-3"], ["typeaheadOptionField", "name", "typeaheadGroupField", "region", 1, "form-control", 3, "ngModel", "typeahead", "ngModelChange"]], template: function DemoTypeaheadGroupingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadGroupingComponent_Template_input_ngModelChange_3_listener($event) { return ctx.groupSelected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 3, ctx.groupSelected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.groupSelected)("typeahead", ctx.statesComplex);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadGroupingComponent;
}());
exports.DemoTypeaheadGroupingComponent = DemoTypeaheadGroupingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadGroupingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-grouping',
                templateUrl: './grouping.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "uiZ9":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/ordering/ordering.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadOrderingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "kU1M");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
function DemoTypeaheadOrderingComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var model_r2 = ctx.item;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(model_r2.city);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" - ", model_r2.code, "");
} }
var DemoTypeaheadOrderingComponent = /** @class */ (function () {
    function DemoTypeaheadOrderingComponent() {
        this.sortConfig1 = {
            direction: 'desc'
        };
        this.sortConfig2 = {
            direction: 'asc'
        };
        this.sortConfig3 = {
            direction: 'asc',
            field: 'city'
        };
        this.states = [
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Alaska',
            'Alabama',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
        this.cities = [{
                city: 'Norton',
                state: 'Virginia',
                code: '61523'
            }, {
                city: 'Grundy',
                state: 'Virginia',
                code: '77054'
            }, {
                city: 'Coeburn',
                state: 'Virginia',
                code: '01665'
            }, {
                city: 'Phoenix',
                state: 'Arizona',
                code: '29128'
            }, {
                city: 'Tucson',
                state: 'Arizona',
                code: '32084'
            }, {
                city: 'Mesa',
                state: 'Arizona',
                code: '21465'
            }, {
                city: 'Independence',
                state: 'Missouri',
                code: '26887'
            }, {
                city: 'Kansas City',
                state: 'Missouri',
                code: '79286'
            }, {
                city: 'Springfield',
                state: 'Missouri',
                code: '92325'
            }, {
                city: 'St. Louis',
                state: 'Missouri',
                code: '64891'
            }];
    }
    DemoTypeaheadOrderingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.states$ = new rxjs_1.Observable(function (observer) {
            // Runs on every search
            observer.next(_this.selected4);
        })
            .pipe(operators_1.switchMap(function (token) {
            var query = new RegExp(token, 'i');
            return rxjs_1.of(_this.states.filter(function (state) { return query.test(state); }));
        }));
    };
    DemoTypeaheadOrderingComponent.ɵfac = function DemoTypeaheadOrderingComponent_Factory(t) { return new (t || DemoTypeaheadOrderingComponent)(); };
    DemoTypeaheadOrderingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadOrderingComponent, selectors: [["demo-typeahead-ordering"]], decls: 44, vars: 14, consts: [[1, "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadOrderBy", "ngModelChange"], ["typeaheadOptionField", "city", "typeaheadGroupField", "state", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadItemTemplate", "typeaheadOrderBy", "ngModelChange"], ["customItemTemplate", ""], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadAsync", "typeaheadOrderBy", "ngModelChange"]], template: function DemoTypeaheadOrderingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h6");
            i0.ɵɵtext(2, "Source - ");
            i0.ɵɵelementStart(3, "strong");
            i0.ɵɵtext(4, "array of string");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, ". Order direction - ");
            i0.ɵɵelementStart(6, "strong");
            i0.ɵɵtext(7, "descending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadOrderingComponent_Template_input_ngModelChange_8_listener($event) { return ctx.selected1 = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 0);
            i0.ɵɵelementStart(10, "h6");
            i0.ɵɵtext(11, "Source - ");
            i0.ɵɵelementStart(12, "strong");
            i0.ɵɵtext(13, "array of string");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, ". Order direction - ");
            i0.ɵɵelementStart(15, "strong");
            i0.ɵɵtext(16, "ascending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadOrderingComponent_Template_input_ngModelChange_17_listener($event) { return ctx.selected2 = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 0);
            i0.ɵɵelementStart(19, "h6");
            i0.ɵɵtext(20, " Source - ");
            i0.ɵɵelementStart(21, "strong");
            i0.ɵɵtext(22, "array of objects");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, ". Order direction - ");
            i0.ɵɵelementStart(24, "strong");
            i0.ɵɵtext(25, "ascending");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, ", sort by ");
            i0.ɵɵelementStart(27, "strong");
            i0.ɵɵtext(28, "city");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(29, ", group by ");
            i0.ɵɵelementStart(30, "strong");
            i0.ɵɵtext(31, "state");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadOrderingComponent_Template_input_ngModelChange_32_listener($event) { return ctx.selected3 = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(33, DemoTypeaheadOrderingComponent_ng_template_33_Template, 4, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 0);
            i0.ɵɵelementStart(36, "h6");
            i0.ɵɵtext(37, "Source - ");
            i0.ɵɵelementStart(38, "strong");
            i0.ɵɵtext(39, "Observable of array of string");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(40, ". Order direction - ");
            i0.ɵɵelementStart(41, "strong");
            i0.ɵɵtext(42, "descending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "input", 4);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadOrderingComponent_Template_input_ngModelChange_43_listener($event) { return ctx.selected4 = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(34);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngModel", ctx.selected1)("typeahead", ctx.states)("typeaheadOrderBy", ctx.sortConfig1);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngModel", ctx.selected2)("typeahead", ctx.states)("typeaheadOrderBy", ctx.sortConfig2);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngModel", ctx.selected3)("typeahead", ctx.cities)("typeaheadItemTemplate", _r0)("typeaheadOrderBy", ctx.sortConfig3);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngModel", ctx.selected4)("typeahead", ctx.states$)("typeaheadAsync", true)("typeaheadOrderBy", ctx.sortConfig1);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], encapsulation: 2 });
    return DemoTypeaheadOrderingComponent;
}());
exports.DemoTypeaheadOrderingComponent = DemoTypeaheadOrderingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadOrderingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-ordering',
                templateUrl: './ordering.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "vw14":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/scrollable/scrollable.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-scrollable',\r\n  templateUrl: './scrollable.html'\r\n})\r\nexport class DemoTypeaheadScrollableComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "w2n1":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/dropup/dropup.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTypeaheadDropupComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemoTypeaheadDropupComponent = /** @class */ (function () {
    function DemoTypeaheadDropupComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemoTypeaheadDropupComponent.ɵfac = function DemoTypeaheadDropupComponent_Factory(t) { return new (t || DemoTypeaheadDropupComponent)(); };
    DemoTypeaheadDropupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTypeaheadDropupComponent, selectors: [["demo-typeahead-dropup"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "dropup", "ngModelChange"]], template: function DemoTypeaheadDropupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemoTypeaheadDropupComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("dropup", true);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemoTypeaheadDropupComponent;
}());
exports.DemoTypeaheadDropupComponent = DemoTypeaheadDropupComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTypeaheadDropupComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-typeahead-dropup',
                templateUrl: './dropup.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "x08E":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+typeahead/demos/adaptive-position/adaptive-position.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-typeahead-adaptive-position',\r\n  templateUrl: './adaptive-position.html'\r\n})\r\nexport class DemoTypeaheadAdaptivePositionComponent {\r\n  selected: string;\r\n  states: string[] = [\r\n    'Alabama',\r\n    'Alaska',\r\n    'Arizona',\r\n    'Arkansas',\r\n    'California',\r\n    'Colorado',\r\n    'Connecticut',\r\n    'Delaware',\r\n    'Florida',\r\n    'Georgia',\r\n    'Hawaii',\r\n    'Idaho',\r\n    'Illinois',\r\n    'Indiana',\r\n    'Iowa',\r\n    'Kansas',\r\n    'Kentucky',\r\n    'Louisiana',\r\n    'Maine',\r\n    'Maryland',\r\n    'Massachusetts',\r\n    'Michigan',\r\n    'Minnesota',\r\n    'Mississippi',\r\n    'Missouri',\r\n    'Montana',\r\n    'Nebraska',\r\n    'Nevada',\r\n    'New Hampshire',\r\n    'New Jersey',\r\n    'New Mexico',\r\n    'New York',\r\n    'North Dakota',\r\n    'North Carolina',\r\n    'Ohio',\r\n    'Oklahoma',\r\n    'Oregon',\r\n    'Pennsylvania',\r\n    'Rhode Island',\r\n    'South Carolina',\r\n    'South Dakota',\r\n    'Tennessee',\r\n    'Texas',\r\n    'Utah',\r\n    'Vermont',\r\n    'Virginia',\r\n    'Washington',\r\n    'West Virginia',\r\n    'Wisconsin',\r\n    'Wyoming'\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "yqwq":
/*!*********************************************************************************************!*\
  !*** ./demo/src/app/components/+typeahead/demos/selected-first-item/selected-first-item.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemotypeaheadSelectFirstItemComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var i2 = __webpack_require__(/*! bao-tran-angular/typeahead */ "M8Vs");
var i3 = __webpack_require__(/*! @angular/common */ "ofXK");
var DemotypeaheadSelectFirstItemComponent = /** @class */ (function () {
    function DemotypeaheadSelectFirstItemComponent() {
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'North Carolina',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    DemotypeaheadSelectFirstItemComponent.ɵfac = function DemotypeaheadSelectFirstItemComponent_Factory(t) { return new (t || DemotypeaheadSelectFirstItemComponent)(); };
    DemotypeaheadSelectFirstItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemotypeaheadSelectFirstItemComponent, selectors: [["demo-selected-first-item"]], decls: 4, vars: 6, consts: [[1, "card", "card-block", "card-header", "mb-3"], [1, "form-control", 3, "ngModel", "typeahead", "typeaheadSelectFirstItem", "ngModelChange"]], template: function DemotypeaheadSelectFirstItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "pre", 0);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 1);
            i0.ɵɵlistener("ngModelChange", function DemotypeaheadSelectFirstItemComponent_Template_input_ngModelChange_3_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Model: ", i0.ɵɵpipeBind1(2, 4, ctx.selected), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.selected)("typeahead", ctx.states)("typeaheadSelectFirstItem", false);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.TypeaheadDirective], pipes: [i3.JsonPipe], encapsulation: 2 });
    return DemotypeaheadSelectFirstItemComponent;
}());
exports.DemotypeaheadSelectFirstItemComponent = DemotypeaheadSelectFirstItemComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemotypeaheadSelectFirstItemComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-selected-first-item',
                templateUrl: './selected-first-item.html'
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-typeahead-demo-typeahead-module.js.map