exports.ids = ["components-dropdown-demo-dropdown-module"];
exports.modules = {

/***/ "+8DZ":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/split/split.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown>\r\n  <button type=\"button\" class=\"btn btn-danger\">Action</button>\r\n  <button id=\"button-split\" type=\"button\" dropdownToggle class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\"\r\n          aria-controls=\"dropdown-split\">\r\n    <span class=\"caret\"></span>\r\n    <span class=\"sr-only\">Split button!</span>\r\n  </button>\r\n  <ul id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-split\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "+dKn":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/autoclose/autoclose.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12 col-sm-6 mb-3\">\r\n    <p>Default behavior: dropdown closes after outside click or pressing ESC</p>\r\n    <div class=\"btn-group\" dropdown>\r\n      <button id=\"button-autoclose1\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n              aria-controls=\"dropdown-autoclose1\">\r\n        Button dropdown <span class=\"caret\"></span>\r\n      </button>\r\n      <ul id=\"dropdown-autoclose1\" *dropdownMenu class=\"dropdown-menu\"\r\n          role=\"menu\" aria-labelledby=\"button-autoclose1\">\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 col-12 col-sm-6 mb-3\">\r\n    <p>This dropdown won't be closed after outside click or pressing ESC</p>\r\n    <div class=\"btn-group\" dropdown [autoClose]=\"false\">\r\n      <button id=\"button-autoclose2\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n              aria-controls=\"dropdown-autoclose2\">\r\n        Button dropdown <span class=\"caret\"></span>\r\n      </button>\r\n      <ul id=\"dropdown-autoclose2\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-autoclose2\">\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "+xHF":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/split/split.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownSplitComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownSplitComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵelementStart(1, "li", 7);
    i0.ɵɵelementStart(2, "a", 8);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 7);
    i0.ɵɵelementStart(5, "a", 8);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 7);
    i0.ɵɵelementStart(8, "a", 8);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 9);
    i0.ɵɵelementStart(11, "li", 7);
    i0.ɵɵelementStart(12, "a", 8);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownSplitComponent = /** @class */ (function () {
    function DemoDropdownSplitComponent() {
    }
    DemoDropdownSplitComponent.ɵfac = function DemoDropdownSplitComponent_Factory(t) { return new (t || DemoDropdownSplitComponent)(); };
    DemoDropdownSplitComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownSplitComponent, selectors: [["demo-dropdown-split"]], decls: 8, vars: 0, consts: [["dropdown", "", 1, "btn-group"], ["type", "button", 1, "btn", "btn-danger"], ["id", "button-split", "type", "button", "dropdownToggle", "", "aria-controls", "dropdown-split", 1, "btn", "btn-danger", "dropdown-toggle", "dropdown-toggle-split"], [1, "caret"], [1, "sr-only"], ["id", "dropdown-split", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-split", 4, "dropdownMenu"], ["id", "dropdown-split", "role", "menu", "aria-labelledby", "button-split", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownSplitComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, "Action");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵelement(4, "span", 3);
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6, "Split button!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, DemoDropdownSplitComponent_ul_7_Template, 14, 0, "ul", 5);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownSplitComponent;
}());
exports.DemoDropdownSplitComponent = DemoDropdownSplitComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownSplitComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-split',
                templateUrl: './split.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "/j0j":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/container/container.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownContainerComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownContainerComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 7);
    i0.ɵɵelementStart(11, "li", 5);
    i0.ɵɵelementStart(12, "a", 6);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownContainerComponent = /** @class */ (function () {
    function DemoDropdownContainerComponent() {
    }
    DemoDropdownContainerComponent.ɵfac = function DemoDropdownContainerComponent_Factory(t) { return new (t || DemoDropdownContainerComponent)(); };
    DemoDropdownContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownContainerComponent, selectors: [["demo-dropdown-container"]], decls: 5, vars: 0, consts: [["dropdown", "", "container", "body", 1, "btn-group"], ["id", "button-container", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-container", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-container", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-container", 4, "dropdownMenu"], ["id", "dropdown-container", "role", "menu", "aria-labelledby", "button-container", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Dropdown on Body ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownContainerComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownContainerComponent;
}());
exports.DemoDropdownContainerComponent = DemoDropdownContainerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownContainerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-container',
                templateUrl: './container.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "/rF/":
/*!************************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/triggers-manual/triggers-manual.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownTriggersManualComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownTriggersManualComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵelementStart(1, "li", 7);
    i0.ɵɵelementStart(2, "a", 8);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 7);
    i0.ɵɵelementStart(5, "a", 8);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 7);
    i0.ɵɵelementStart(8, "a", 8);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 9);
    i0.ɵɵelementEnd();
} }
var DemoDropdownTriggersManualComponent = /** @class */ (function () {
    function DemoDropdownTriggersManualComponent() {
    }
    DemoDropdownTriggersManualComponent.ɵfac = function DemoDropdownTriggersManualComponent_Factory(t) { return new (t || DemoDropdownTriggersManualComponent)(); };
    DemoDropdownTriggersManualComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownTriggersManualComponent, selectors: [["demo-dropdown-triggers-manual"]], decls: 12, vars: 1, consts: [["dropdown", "", 1, "btn-group", 3, "autoClose"], ["dropdown", "bs-dropdown"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-triggers-manual", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-triggers-manual", 4, "dropdownMenu"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "dropdown-triggers-manual", "role", "menu", "aria-labelledby", "button-triggers-manual", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownTriggersManualComponent_Template(rf, ctx) { if (rf & 1) {
            var _r2 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵtext(3, " Button dropdown ");
            i0.ɵɵelement(4, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, DemoDropdownTriggersManualComponent_ul_5_Template, 11, 0, "ul", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 5);
            i0.ɵɵlistener("click", function DemoDropdownTriggersManualComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(1); return _r0.toggle(true); });
            i0.ɵɵtext(7, "Toggle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 5);
            i0.ɵɵlistener("click", function DemoDropdownTriggersManualComponent_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(1); return _r0.show(); });
            i0.ɵɵtext(9, "Show");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function DemoDropdownTriggersManualComponent_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(1); return _r0.hide(); });
            i0.ɵɵtext(11, "Hide");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("autoClose", false);
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownTriggersManualComponent;
}());
exports.DemoDropdownTriggersManualComponent = DemoDropdownTriggersManualComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownTriggersManualComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-triggers-manual',
                templateUrl: './triggers-manual.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "2eps":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/nested-dropdowns/nested-dropdowns.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown [autoClose]=\"false\" container=\"body\">\r\n  <button id=\"button-nested\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-nested\">\r\n    This dropdown has nested submenu <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-nested\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-nested\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Action</a></li>\r\n\r\n    <li role=\"menuitem\" dropdown triggers=\"mouseover\" placement=\"right\" container=\"body\">\r\n      <a dropdownToggle class=\"dropdown-item dropdown-toggle\"\r\n         (click)=\"false\">Hover me for nested dropdown <span class=\"caret\"></span></a>\r\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Action1</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Action2</a></li>\r\n      </ul>\r\n    </li>\r\n\r\n    <li role=\"menuitem\" dropdown triggers=\"mouseover\" placement=\"right\" container=\"body\">\r\n      <a dropdownToggle class=\"dropdown-item dropdown-toggle\"\r\n         (click)=\"false\">Hover me for nested dropdown <span class=\"caret\"></span></a>\r\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Action1</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Action2</a></li>\r\n      </ul>\r\n    </li>\r\n\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Something else here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#/dropdowns#nested-dropdowns\">Separated link</a></li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "2rlp":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/visibility-events/visibility-events.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-visibility-events',\r\n  templateUrl: './visibility-events.html'\r\n})\r\nexport class DemoDropdownVisibilityEventsComponent {\r\n  messages: string[] = [];\r\n  message = 'onShown';\r\n\r\n  handler(value: string): void {\r\n    this.messages.push(`Event ${value} is fired`);\r\n    this.messages = this.messages.length > 2 ? this.messages.slice(0, 1) : this.messages;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "2v2J":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/animated/animated.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { BsDropdownConfig } from 'bao-tran-angular/dropdown';\n\n@Component({\n  selector: 'demo-dropdown-animation',\n  templateUrl: './animated.html',\n  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]\n})\nexport class DemoDropdownAnimatedComponent {}\n");

/***/ }),

/***/ "3tO5":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/anchor-trigger/anchor-trigger.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-anchor-trigger',\r\n  templateUrl: './anchor-trigger.html'\r\n})\r\nexport class DemoDropdownAnchorTriggerComponent {\r\n  items: string[] = [\r\n    'The first choice!',\r\n    'And another choice for you.',\r\n    'but wait! A third!'\r\n  ];\r\n\r\n  onHidden(): void {\r\n    console.log('Dropdown is hidden');\r\n  }\r\n  onShown(): void {\r\n    console.log('Dropdown is shown');\r\n  }\r\n  isOpenChange(): void {\r\n    console.log('Dropdown state is changed');\r\n  }\r\n}\r\n");

/***/ }),

/***/ "4BE9":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/container/container.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-container',\r\n  templateUrl: './container.html'\r\n})\r\nexport class DemoDropdownContainerComponent {}\r\n");

/***/ }),

/***/ "4N5i":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/menu-dividers/menu-dividers.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownMenuDividersComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownMenuDividersComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 7);
    i0.ɵɵelementStart(11, "li", 5);
    i0.ɵɵelementStart(12, "a", 6);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownMenuDividersComponent = /** @class */ (function () {
    function DemoDropdownMenuDividersComponent() {
    }
    DemoDropdownMenuDividersComponent.ɵfac = function DemoDropdownMenuDividersComponent_Factory(t) { return new (t || DemoDropdownMenuDividersComponent)(); };
    DemoDropdownMenuDividersComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownMenuDividersComponent, selectors: [["demo-dropdown-menu-dividers"]], decls: 5, vars: 0, consts: [["dropdown", "", 1, "btn-group"], ["id", "button-menu-dividers", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-menu-dividers", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-menu-dividers", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-menu-dividers", 4, "dropdownMenu"], ["id", "dropdown-menu-dividers", "role", "menu", "aria-labelledby", "button-menu-dividers", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownMenuDividersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownMenuDividersComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownMenuDividersComponent;
}());
exports.DemoDropdownMenuDividersComponent = DemoDropdownMenuDividersComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownMenuDividersComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-menu-dividers',
                templateUrl: './menu-dividers.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "4U0E":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/trigger-by-isopen-property/trigger-by-isopen-property.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-trigger-by-isopen',\r\n  templateUrl: './trigger-by-isopen-property.html'\r\n})\r\nexport class DemoDropdownByIsOpenPropComponent {\r\n}\r\n");

/***/ }),

/***/ "4bTQ":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/anchor-trigger/anchor-trigger.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span dropdown (onShown)=\"onShown()\" (onHidden)=\"onHidden()\" (isOpenChange)=\"isOpenChange()\">\r\n  <a href id=\"basic-link\" dropdownToggle (click)=\"false\"\r\n     aria-controls=\"basic-link-dropdown\">Click me for a dropdown, yo!</a>\r\n  <ul id=\"basic-link-dropdown\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"basic-link\">\r\n    <li *ngFor=\"let choice of items\">\r\n      <a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\r\n    </li>\r\n  </ul>\r\n</span>\r\n");

/***/ }),

/***/ "5zSI":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/triggers-manual/triggers-manual.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"false\">\r\n  <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-triggers-manual\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-triggers-manual\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n  </ul>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"dropdown.toggle(true)\">Toggle</button>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"dropdown.show()\">Show</button>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"dropdown.hide()\">Hide</button>\r\n");

/***/ }),

/***/ "6CHY":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/inside-click/inside-click.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown [insideClick]=\"true\">\r\n  <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "6QgD":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/config/config.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown>\r\n  <button id=\"button-config\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-config\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-config\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-config\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "7D/D":
/*!**************************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/nested-dropdowns/nested-dropdowns.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoNestedDropdownsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoNestedDropdownsComponent_ul_4_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 11);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Action1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Action2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DemoNestedDropdownsComponent_ul_4_ul_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 11);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Action1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Action2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DemoNestedDropdownsComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 7);
    i0.ɵɵelementStart(5, "a", 8);
    i0.ɵɵlistener("click", function DemoNestedDropdownsComponent_ul_4_Template_a_click_5_listener() { return false; });
    i0.ɵɵtext(6, "Hover me for nested dropdown ");
    i0.ɵɵelement(7, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DemoNestedDropdownsComponent_ul_4_ul_8_Template, 10, 0, "ul", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "li", 7);
    i0.ɵɵelementStart(10, "a", 8);
    i0.ɵɵlistener("click", function DemoNestedDropdownsComponent_ul_4_Template_a_click_10_listener() { return false; });
    i0.ɵɵtext(11, "Hover me for nested dropdown ");
    i0.ɵɵelement(12, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, DemoNestedDropdownsComponent_ul_4_ul_13_Template, 10, 0, "ul", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "li", 5);
    i0.ɵɵelementStart(15, "a", 6);
    i0.ɵɵtext(16, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "li", 10);
    i0.ɵɵelementStart(18, "li", 5);
    i0.ɵɵelementStart(19, "a", 6);
    i0.ɵɵtext(20, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoNestedDropdownsComponent = /** @class */ (function () {
    function DemoNestedDropdownsComponent() {
    }
    DemoNestedDropdownsComponent.ɵfac = function DemoNestedDropdownsComponent_Factory(t) { return new (t || DemoNestedDropdownsComponent)(); };
    DemoNestedDropdownsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoNestedDropdownsComponent, selectors: [["demo-nested-dropdowns"]], decls: 5, vars: 1, consts: [["dropdown", "", "container", "body", 1, "btn-group", 3, "autoClose"], ["id", "button-nested", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-nested", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-nested", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-nested", 4, "dropdownMenu"], ["id", "dropdown-nested", "role", "menu", "aria-labelledby", "button-nested", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#/dropdowns#nested-dropdowns", 1, "dropdown-item"], ["role", "menuitem", "dropdown", "", "triggers", "mouseover", "placement", "right", "container", "body"], ["dropdownToggle", "", 1, "dropdown-item", "dropdown-toggle", 3, "click"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], [1, "divider", "dropdown-divider"], ["role", "menu", 1, "dropdown-menu"]], template: function DemoNestedDropdownsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " This dropdown has nested submenu ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoNestedDropdownsComponent_ul_4_Template, 21, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("autoClose", false);
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoNestedDropdownsComponent;
}());
exports.DemoNestedDropdownsComponent = DemoNestedDropdownsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoNestedDropdownsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-nested-dropdowns',
                templateUrl: './nested-dropdowns.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "8RZ4":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/disabled-menu/disabled-menu.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown [isDisabled]=\"disabled\">\r\n  <button id=\"button-disabled-menu\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-disabled-menu\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-disabled-menu\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-disabled-menu\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-warning\" (click)=\"disabled = !disabled\">\r\n  Enable/Disable\r\n</button>\r\n");

/***/ }),

/***/ "CDrp":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/container/container.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown container=\"body\">\r\n  <button id=\"button-container\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-container\">\r\n    Dropdown on Body <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-container\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-container\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "CHWx":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/docs/usage.md ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\n// RECOMMENDED\nimport { BsDropdownModule } from 'bao-tran-angular/dropdown';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { BsDropdownModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [\n    BrowserAnimationsModule,\n    BsDropdownModule.forRoot()\n  ]\n})\nexport class AppModule(){}\n\nAlso should be added web-animations-js polyfill for IE browser (Edge)\n");

/***/ }),

/***/ "CIAQ":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/dropup/dropup.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-dropup',\r\n  templateUrl: './dropup.html'\r\n})\r\nexport class DemoDropdownDropupComponent {\r\n  isDropup = true;\r\n}\r\n");

/***/ }),

/***/ "F3Md":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/disabled-item/disabled-item.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown>\r\n  <button id=\"button-disabled-item\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-disabled-item\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-disabled-item\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-disabled-item\">\r\n    <li class=\"disabled\" role=\"menuitem\"><a class=\"dropdown-item disabled\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "F7gX":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/basic/basic.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown>\r\n  <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-basic\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-basic\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "GFIe":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/dropup/dropup.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownDropupComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownDropupComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 7);
    i0.ɵɵelementStart(11, "li", 5);
    i0.ɵɵelementStart(12, "a", 6);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownDropupComponent = /** @class */ (function () {
    function DemoDropdownDropupComponent() {
        this.isDropup = true;
    }
    DemoDropdownDropupComponent.ɵfac = function DemoDropdownDropupComponent_Factory(t) { return new (t || DemoDropdownDropupComponent)(); };
    DemoDropdownDropupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownDropupComponent, selectors: [["demo-dropdown-dropup"]], decls: 5, vars: 1, consts: [["dropdown", "", 1, "btn-group", 3, "dropup"], ["id", "button-dropup", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-dropup", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-dropup", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-dropup", 4, "dropdownMenu"], ["id", "dropdown-dropup", "role", "menu", "aria-labelledby", "button-dropup", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownDropupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Dropup ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownDropupComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dropup", ctx.isDropup);
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownDropupComponent;
}());
exports.DemoDropdownDropupComponent = DemoDropdownDropupComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownDropupComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-dropup',
                templateUrl: './dropup.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "HBpD":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/disabled-menu/disabled-menu.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownDisabledComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownDisabledComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵelementStart(1, "li", 6);
    i0.ɵɵelementStart(2, "a", 7);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 6);
    i0.ɵɵelementStart(5, "a", 7);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 6);
    i0.ɵɵelementStart(8, "a", 7);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 8);
    i0.ɵɵelementStart(11, "li", 6);
    i0.ɵɵelementStart(12, "a", 7);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownDisabledComponent = /** @class */ (function () {
    function DemoDropdownDisabledComponent() {
        this.disabled = false;
    }
    DemoDropdownDisabledComponent.ɵfac = function DemoDropdownDisabledComponent_Factory(t) { return new (t || DemoDropdownDisabledComponent)(); };
    DemoDropdownDisabledComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownDisabledComponent, selectors: [["demo-dropdown-disabled"]], decls: 7, vars: 1, consts: [["dropdown", "", 1, "btn-group", 3, "isDisabled"], ["id", "button-disabled-menu", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-disabled-menu", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-disabled-menu", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-disabled-menu", 4, "dropdownMenu"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["id", "dropdown-disabled-menu", "role", "menu", "aria-labelledby", "button-disabled-menu", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownDisabledComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownDisabledComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 4);
            i0.ɵɵlistener("click", function DemoDropdownDisabledComponent_Template_button_click_5_listener() { return ctx.disabled = !ctx.disabled; });
            i0.ɵɵtext(6, " Enable/Disable\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("isDisabled", ctx.disabled);
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownDisabledComponent;
}());
exports.DemoDropdownDisabledComponent = DemoDropdownDisabledComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownDisabledComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-disabled',
                templateUrl: './disabled-menu.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "HBw3":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/dropdown-section.list.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "frvt");
var anchor_trigger_1 = __webpack_require__(/*! ./demos/anchor-trigger/anchor-trigger */ "KzCT");
var split_1 = __webpack_require__(/*! ./demos/split/split */ "+xHF");
var triggers_manual_1 = __webpack_require__(/*! ./demos/triggers-manual/triggers-manual */ "/rF/");
var trigger_by_isopen_property_1 = __webpack_require__(/*! ./demos/trigger-by-isopen-property/trigger-by-isopen-property */ "JXjl");
var disabled_menu_1 = __webpack_require__(/*! ./demos/disabled-menu/disabled-menu */ "HBpD");
var disabled_item_1 = __webpack_require__(/*! ./demos/disabled-item/disabled-item */ "I+gU");
var menu_alignment_1 = __webpack_require__(/*! ./demos/alignment/menu-alignment */ "zm4s");
var nested_dropdowns_1 = __webpack_require__(/*! ./demos/nested-dropdowns/nested-dropdowns */ "7D/D");
var container_1 = __webpack_require__(/*! ./demos/container/container */ "/j0j");
var dropup_1 = __webpack_require__(/*! ./demos/dropup/dropup */ "GFIe");
var menu_dividers_1 = __webpack_require__(/*! ./demos/menu-dividers/menu-dividers */ "4N5i");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "m8s8");
var visibility_events_1 = __webpack_require__(/*! ./demos/visibility-events/visibility-events */ "nT2N");
var state_change_event_1 = __webpack_require__(/*! ./demos/state-change-event/state-change-event */ "Vj1w");
var autoclose_1 = __webpack_require__(/*! ./demos/autoclose/autoclose */ "UmBj");
var custom_html_1 = __webpack_require__(/*! ./demos/custom-html/custom-html */ "cnrA");
var accessibility_1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "tf7n");
var inside_click_1 = __webpack_require__(/*! ./demos/inside-click/inside-click */ "hPll");
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var animated_1 = __webpack_require__(/*! ./demos/animated/animated */ "td8B");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "CHWx")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: index_2.ExamplesComponent,
        description: "<p>Wrap the dropdown\u2019s toggle (your button or link) and the dropdown menu within\n      <code>dropdown</code>. Dropdowns can be triggered from <code> &lt;a&gt;</code> or <code> &lt;button&gt;</code>\n      elements to better fit your potential needs.</p>",
        content: [
            {
                title: 'Basic',
                anchor: 'basic',
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.ts */ "oG3M"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "F7gX"),
                description: "<p>Any <code>&lt;button&gt;</code> can became a dropdown toggle with few markup changes.\n          Here\u2019s how dropdown works with single button</p>",
                outlet: basic_1.DemoDropdownBasicComponent
            },
            {
                title: 'With animation',
                anchor: 'animated',
                component: __webpack_require__(/*! !raw-loader!./demos/animated/animated */ "2v2J"),
                html: __webpack_require__(/*! !raw-loader!./demos/animated/animated.html */ "XQt+"),
                description: "You can enable animation via <code>isAnimated</code> input or config option",
                outlet: animated_1.DemoDropdownAnimatedComponent
            },
            {
                title: 'Trigger by tag <a>',
                anchor: 'anchor-trigger',
                component: __webpack_require__(/*! !raw-loader!./demos/anchor-trigger/anchor-trigger.ts */ "3tO5"),
                html: __webpack_require__(/*! !raw-loader!./demos/anchor-trigger/anchor-trigger.html */ "4bTQ"),
                outlet: anchor_trigger_1.DemoDropdownAnchorTriggerComponent
            },
            {
                title: 'Split button dropdowns',
                anchor: 'split-button',
                component: __webpack_require__(/*! !raw-loader!./demos/split/split.ts */ "ysjF"),
                html: __webpack_require__(/*! !raw-loader!./demos/split/split.html */ "+8DZ"),
                description: "<p>Similarly, create split button dropdowns with virtually the same markup as single\n          button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing\n          around the dropdown caret.</p>",
                outlet: split_1.DemoDropdownSplitComponent
            },
            {
                title: 'Manual triggering',
                anchor: 'triggers-manual',
                component: __webpack_require__(/*! !raw-loader!./demos/triggers-manual/triggers-manual.ts */ "M3Dd"),
                html: __webpack_require__(/*! !raw-loader!./demos/triggers-manual/triggers-manual.html */ "5zSI"),
                description: "<p>Dropdown can be triggered by <code>show</code>, <code>hide</code> and\n          <code>toggle</code> methods from directive\n          <br>\n          Use method <code>toggle(true)</code> if you want to toggle the dropdown or <code>toggle(false)</code>\n          if you want to only close opened dropdown.\n          </p>",
                outlet: triggers_manual_1.DemoDropdownTriggersManualComponent
            },
            {
                title: 'Trigger by isOpen property',
                anchor: 'trigger-by-isopen-property',
                component: __webpack_require__(/*! !raw-loader!./demos/trigger-by-isopen-property/trigger-by-isopen-property.ts */ "4U0E"),
                html: __webpack_require__(/*! !raw-loader!./demos/trigger-by-isopen-property/trigger-by-isopen-property.html */ "v0kL"),
                description: "<p>Dropdown can be shown or hidden by changing <code>isOpen</code> input property</p>",
                outlet: trigger_by_isopen_property_1.DemoDropdownByIsOpenPropComponent
            },
            {
                title: 'Disabled menu',
                anchor: 'disabled-menu',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled-menu/disabled-menu.ts */ "HEuQ"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled-menu/disabled-menu.html */ "8RZ4"),
                description: "<p>Use <code>isDisabled</code> property to make dropdown disabled.</p>",
                outlet: disabled_menu_1.DemoDropdownDisabledComponent
            },
            {
                title: 'Mark item as disabled',
                anchor: 'disabled-item',
                component: __webpack_require__(/*! !raw-loader!./demos/disabled-item/disabled-item.ts */ "i1Ea"),
                html: __webpack_require__(/*! !raw-loader!./demos/disabled-item/disabled-item.html */ "F3Md"),
                description: "<p>Add a <code>disabled</code> class to <code>&lt;a&gt;</code> for bootstrap 4 to make it as disabled.</p>\n                      <p>Add a <code>disabled</code> class to <code>&lt;li&gt;</code>  for bootstrap 3 to make it as disabled.</p>",
                outlet: disabled_item_1.DemoDropdownDisabledItemComponent
            },
            {
                title: 'Menu alignment',
                anchor: 'menu-alignment',
                component: __webpack_require__(/*! !raw-loader!./demos/alignment/menu-alignment.ts */ "wD2T"),
                html: __webpack_require__(/*! !raw-loader!./demos/alignment/menu-alignment.html */ "zGdq"),
                description: "<p>By default, a dropdown menu is automatically positioned 100% from the top and along\n          the left side of its parent. Add class <code>.dropdown-menu-right</code> to a <code>dropdownMenu</code>\n          to right align the dropdown menu.</p>",
                outlet: menu_alignment_1.DemoDropdownAlignmentComponent
            },
            {
                title: 'Inside click',
                anchor: 'inside-click',
                component: __webpack_require__(/*! !raw-loader!./demos/inside-click/inside-click.ts */ "HVeC"),
                html: __webpack_require__(/*! !raw-loader!./demos/inside-click/inside-click.html */ "6CHY"),
                description: "<p>By default, a dropdown menu closes on document click, even if you clicked on an element inside the dropdown.\n        Use <code>[insideClick]=\"true\"</code> to allow click inside the dropdown</p>",
                outlet: inside_click_1.DemoDropdownInsideClickComponent
            },
            {
                title: 'Nested dropdowns (experimental)',
                anchor: 'nested-dropdowns',
                component: __webpack_require__(/*! !raw-loader!./demos/nested-dropdowns/nested-dropdowns.ts */ "iYiJ"),
                html: __webpack_require__(/*! !raw-loader!./demos/nested-dropdowns/nested-dropdowns.html */ "2eps"),
                outlet: nested_dropdowns_1.DemoNestedDropdownsComponent
            },
            {
                title: 'Append to body',
                anchor: 'container',
                component: __webpack_require__(/*! !raw-loader!./demos/container/container.ts */ "4BE9"),
                html: __webpack_require__(/*! !raw-loader!./demos/container/container.html */ "CDrp"),
                description: "<p>Append dropdown to body by adding <code>container=\"body\"</code> to the parent element.</p>",
                outlet: container_1.DemoDropdownContainerComponent
            },
            /* not availavle in bs-dropdown version
            {
              title: 'Single button with keyboard nav',
              anchor: 'dropdown-keyboard',
              component: require('!!raw-loader!./demos/keyboard/keyboard.ts'),
              html: require('!!raw-loader!./demos/keyboard/keyboard.html'),
              outlet: DemoDropdownKeyboardComponent
            },*/
            {
                title: 'Dropup variation',
                anchor: 'dropup',
                component: __webpack_require__(/*! !raw-loader!./demos/dropup/dropup.ts */ "CIAQ"),
                html: __webpack_require__(/*! !raw-loader!./demos/dropup/dropup.html */ "xBf+"),
                description: "<p>To make dropdown's menu appear above toggle element set <code>dropup</code> property as <code>true</code></p>",
                outlet: dropup_1.DemoDropdownDropupComponent
            },
            {
                title: 'Menu dividers',
                anchor: 'menu-dividers',
                component: __webpack_require__(/*! !raw-loader!./demos/menu-dividers/menu-dividers.ts */ "wg0r"),
                html: __webpack_require__(/*! !raw-loader!./demos/menu-dividers/menu-dividers.html */ "aOVP"),
                description: "<p>Separate groups of related menu items with a <code>.divider</code> for bootstrap 3 and <code>.dropdown-divider</code> for bootstrap 4.</p>",
                outlet: menu_dividers_1.DemoDropdownMenuDividersComponent
            },
            {
                title: 'Custom html',
                anchor: 'custom-html',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-html/custom-html.ts */ "UoNw"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-html/custom-html.html */ "qc1C"),
                description: "<p>Dropdown allows you to use any html markup inside of it</p>",
                outlet: custom_html_1.DemoDropdownCustomHtmlComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'config-defaults',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config.ts */ "ha4f"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "6QgD"),
                description: "<p>It is possible to override default dropdown config partially or completely.</p>",
                outlet: config_1.DemoDropdownConfigComponent
            },
            {
                title: 'Visibility Events',
                anchor: 'visibility-events',
                component: __webpack_require__(/*! !raw-loader!./demos/visibility-events/visibility-events.ts */ "2rlp"),
                html: __webpack_require__(/*! !raw-loader!./demos/visibility-events/visibility-events.html */ "xyyg"),
                description: "<p>You can subscribe to dropdown's visibility events</p>",
                outlet: visibility_events_1.DemoDropdownVisibilityEventsComponent
            },
            {
                title: 'State change event',
                anchor: 'state-change-event',
                component: __webpack_require__(/*! !raw-loader!./demos/state-change-event/state-change-event.ts */ "dR3i"),
                html: __webpack_require__(/*! !raw-loader!./demos/state-change-event/state-change-event.html */ "XBRt"),
                description: "<p>You can subscribe to dropdown's state change event (<code>isOpenChange</code>).</p>",
                outlet: state_change_event_1.DemoDropdownStateChangeEventComponent
            },
            {
                title: 'Auto close',
                anchor: 'autoclose',
                component: __webpack_require__(/*! !raw-loader!./demos/autoclose/autoclose.ts */ "vswf"),
                html: __webpack_require__(/*! !raw-loader!./demos/autoclose/autoclose.html */ "+dKn"),
                description: "<p>Use <code>autoClose</code> property to change dropdown's default behavior</p>",
                outlet: autoclose_1.DemoDropdownAutoCloseComponent
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
                title: 'BsDropdownDirective',
                anchor: 'dropdown-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'BsDropdownContainerComponent',
                anchor: 'dropdown-container',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'BsDropdownMenuDirective',
                anchor: 'dropdown-menu-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'BsDropdownToggleDirective',
                anchor: 'dropdown-toggle-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'BsDropdownState',
                anchor: 'BsDropdownState',
                outlet: api_docs_1.NgApiDocConfigComponent
            },
            {
                title: 'BsDropdownConfig',
                anchor: 'dropdown-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "HEuQ":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/disabled-menu/disabled-menu.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-disabled',\r\n  templateUrl: './disabled-menu.html'\r\n})\r\nexport class DemoDropdownDisabledComponent {\r\n  disabled: boolean = false;\r\n}\r\n");

/***/ }),

/***/ "HVeC":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/inside-click/inside-click.ts ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-inside-click',\r\n  templateUrl: './inside-click.html'\r\n})\r\nexport class DemoDropdownInsideClickComponent {}\r\n");

/***/ }),

/***/ "I+gU":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/disabled-item/disabled-item.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownDisabledItemComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownDisabledItemComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 7);
    i0.ɵɵelementStart(5, "a", 8);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 7);
    i0.ɵɵelementStart(8, "a", 8);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownDisabledItemComponent = /** @class */ (function () {
    function DemoDropdownDisabledItemComponent() {
    }
    DemoDropdownDisabledItemComponent.ɵfac = function DemoDropdownDisabledItemComponent_Factory(t) { return new (t || DemoDropdownDisabledItemComponent)(); };
    DemoDropdownDisabledItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownDisabledItemComponent, selectors: [["demo-dropdown-disabled-item"]], decls: 5, vars: 0, consts: [["dropdown", "", 1, "btn-group"], ["id", "button-disabled-item", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-disabled-item", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-disabled-item", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-disabled-item", 4, "dropdownMenu"], ["id", "dropdown-disabled-item", "role", "menu", "aria-labelledby", "button-disabled-item", 1, "dropdown-menu"], ["role", "menuitem", 1, "disabled"], ["href", "#", 1, "dropdown-item", "disabled"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"]], template: function DemoDropdownDisabledItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownDisabledItemComponent_ul_4_Template, 10, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownDisabledItemComponent;
}());
exports.DemoDropdownDisabledItemComponent = DemoDropdownDisabledItemComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownDisabledItemComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-disabled-item',
                templateUrl: './disabled-item.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "JXjl":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/trigger-by-isopen-property/trigger-by-isopen-property.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownByIsOpenPropComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownByIsOpenPropComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵelementStart(1, "li", 7);
    i0.ɵɵelementStart(2, "a", 8);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 7);
    i0.ɵɵelementStart(5, "a", 8);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 7);
    i0.ɵɵelementStart(8, "a", 8);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownByIsOpenPropComponent = /** @class */ (function () {
    function DemoDropdownByIsOpenPropComponent() {
    }
    DemoDropdownByIsOpenPropComponent.ɵfac = function DemoDropdownByIsOpenPropComponent_Factory(t) { return new (t || DemoDropdownByIsOpenPropComponent)(); };
    DemoDropdownByIsOpenPropComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownByIsOpenPropComponent, selectors: [["demo-dropdown-trigger-by-isopen"]], decls: 8, vars: 1, consts: [["dropdown", "", 1, "btn-group", 3, "autoClose"], ["dropdown", "bs-dropdown"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["role", "menu", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"]], template: function DemoDropdownByIsOpenPropComponent_Template(rf, ctx) { if (rf & 1) {
            var _r2 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵtext(3, " Button dropdown ");
            i0.ɵɵelement(4, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, DemoDropdownByIsOpenPropComponent_ul_5_Template, 10, 0, "ul", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 5);
            i0.ɵɵlistener("click", function DemoDropdownByIsOpenPropComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); var _r0 = i0.ɵɵreference(1); return _r0.isOpen = !_r0.isOpen; });
            i0.ɵɵtext(7, "Toggle");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("autoClose", false);
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownByIsOpenPropComponent;
}());
exports.DemoDropdownByIsOpenPropComponent = DemoDropdownByIsOpenPropComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownByIsOpenPropComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-trigger-by-isopen',
                templateUrl: './trigger-by-isopen-property.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "KzCT":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/anchor-trigger/anchor-trigger.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownAnchorTriggerComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoDropdownAnchorTriggerComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var choice_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(choice_r2);
} }
function DemoDropdownAnchorTriggerComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵtemplate(1, DemoDropdownAnchorTriggerComponent_ul_3_li_1_Template, 3, 1, "li", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items);
} }
var DemoDropdownAnchorTriggerComponent = /** @class */ (function () {
    function DemoDropdownAnchorTriggerComponent() {
        this.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
    }
    DemoDropdownAnchorTriggerComponent.prototype.onHidden = function () {
        console.log('Dropdown is hidden');
    };
    DemoDropdownAnchorTriggerComponent.prototype.onShown = function () {
        console.log('Dropdown is shown');
    };
    DemoDropdownAnchorTriggerComponent.prototype.isOpenChange = function () {
        console.log('Dropdown state is changed');
    };
    DemoDropdownAnchorTriggerComponent.ɵfac = function DemoDropdownAnchorTriggerComponent_Factory(t) { return new (t || DemoDropdownAnchorTriggerComponent)(); };
    DemoDropdownAnchorTriggerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownAnchorTriggerComponent, selectors: [["demo-dropdown-anchor-trigger"]], decls: 4, vars: 0, consts: [["dropdown", "", 3, "onShown", "onHidden", "isOpenChange"], ["href", "", "id", "basic-link", "dropdownToggle", "", "aria-controls", "basic-link-dropdown", 3, "click"], ["id", "basic-link-dropdown", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "basic-link", 4, "dropdownMenu"], ["id", "basic-link-dropdown", "role", "menu", "aria-labelledby", "basic-link", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item"]], template: function DemoDropdownAnchorTriggerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵlistener("onShown", function DemoDropdownAnchorTriggerComponent_Template_span_onShown_0_listener() { return ctx.onShown(); })("onHidden", function DemoDropdownAnchorTriggerComponent_Template_span_onHidden_0_listener() { return ctx.onHidden(); })("isOpenChange", function DemoDropdownAnchorTriggerComponent_Template_span_isOpenChange_0_listener() { return ctx.isOpenChange(); });
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function DemoDropdownAnchorTriggerComponent_Template_a_click_1_listener() { return false; });
            i0.ɵɵtext(2, "Click me for a dropdown, yo!");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, DemoDropdownAnchorTriggerComponent_ul_3_Template, 2, 1, "ul", 2);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective, i2.NgForOf], encapsulation: 2 });
    return DemoDropdownAnchorTriggerComponent;
}());
exports.DemoDropdownAnchorTriggerComponent = DemoDropdownAnchorTriggerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownAnchorTriggerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-anchor-trigger',
                templateUrl: './anchor-trigger.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "M3Dd":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/triggers-manual/triggers-manual.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-triggers-manual',\r\n  templateUrl: './triggers-manual.html'\r\n})\r\nexport class DemoDropdownTriggersManualComponent {\r\n}\r\n");

/***/ }),

/***/ "UHXS":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/dropdown-section.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var dropdown_section_list_1 = __webpack_require__(/*! ./dropdown-section.list */ "HBw3");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var DropdownSectionComponent = /** @class */ (function () {
    function DropdownSectionComponent() {
        this.name = 'Dropdowns';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/dropdown';
        this.componentContent = dropdown_section_list_1.demoComponentContent;
    }
    DropdownSectionComponent.ɵfac = function DropdownSectionComponent_Factory(t) { return new (t || DropdownSectionComponent)(); };
    DropdownSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DropdownSectionComponent, selectors: [["dropdown-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function DropdownSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They\u2019re made interactive with the included dropdown directives.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return DropdownSectionComponent;
}());
exports.DropdownSectionComponent = DropdownSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DropdownSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'dropdown-section',
                templateUrl: './dropdown-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "UmBj":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/autoclose/autoclose.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownAutoCloseComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownAutoCloseComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 9);
    i0.ɵɵelementStart(1, "li", 10);
    i0.ɵɵelementStart(2, "a", 11);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 10);
    i0.ɵɵelementStart(5, "a", 11);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 10);
    i0.ɵɵelementStart(8, "a", 11);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function DemoDropdownAutoCloseComponent_ul_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 12);
    i0.ɵɵelementStart(1, "li", 10);
    i0.ɵɵelementStart(2, "a", 11);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 10);
    i0.ɵɵelementStart(5, "a", 11);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 10);
    i0.ɵɵelementStart(8, "a", 11);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownAutoCloseComponent = /** @class */ (function () {
    function DemoDropdownAutoCloseComponent() {
    }
    DemoDropdownAutoCloseComponent.ɵfac = function DemoDropdownAutoCloseComponent_Factory(t) { return new (t || DemoDropdownAutoCloseComponent)(); };
    DemoDropdownAutoCloseComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownAutoCloseComponent, selectors: [["demo-dropdown-autoclose"]], decls: 17, vars: 1, consts: [[1, "row"], [1, "col-xs-12", "col-12", "col-sm-6", "mb-3"], ["dropdown", "", 1, "btn-group"], ["id", "button-autoclose1", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-autoclose1", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-autoclose1", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-autoclose1", 4, "dropdownMenu"], ["dropdown", "", 1, "btn-group", 3, "autoClose"], ["id", "button-autoclose2", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-autoclose2", 1, "btn", "btn-primary", "dropdown-toggle"], ["id", "dropdown-autoclose2", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-autoclose2", 4, "dropdownMenu"], ["id", "dropdown-autoclose1", "role", "menu", "aria-labelledby", "button-autoclose1", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], ["id", "dropdown-autoclose2", "role", "menu", "aria-labelledby", "button-autoclose2", 1, "dropdown-menu"]], template: function DemoDropdownAutoCloseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "Default behavior: dropdown closes after outside click or pressing ESC");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵtext(6, " Button dropdown ");
            i0.ɵɵelement(7, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, DemoDropdownAutoCloseComponent_ul_8_Template, 10, 0, "ul", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 1);
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "This dropdown won't be closed after outside click or pressing ESC");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 6);
            i0.ɵɵelementStart(13, "button", 7);
            i0.ɵɵtext(14, " Button dropdown ");
            i0.ɵɵelement(15, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, DemoDropdownAutoCloseComponent_ul_16_Template, 10, 0, "ul", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("autoClose", false);
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownAutoCloseComponent;
}());
exports.DemoDropdownAutoCloseComponent = DemoDropdownAutoCloseComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownAutoCloseComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-autoclose',
                templateUrl: './autoclose.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "UoNw":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/custom-html/custom-html.ts ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-custom-html',\r\n  templateUrl: './custom-html.html'\r\n})\r\nexport class DemoDropdownCustomHtmlComponent {}\r\n");

/***/ }),

/***/ "Vj1w":
/*!******************************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/state-change-event/state-change-event.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownStateChangeEventComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownStateChangeEventComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "pre", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("The dropdown is ", ctx_r0.text, "");
} }
function DemoDropdownStateChangeEventComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 9);
    i0.ɵɵelementStart(1, "li", 10);
    i0.ɵɵelementStart(2, "a", 11);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 10);
    i0.ɵɵelementStart(5, "a", 11);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 10);
    i0.ɵɵelementStart(8, "a", 11);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownStateChangeEventComponent = /** @class */ (function () {
    function DemoDropdownStateChangeEventComponent() {
    }
    DemoDropdownStateChangeEventComponent.prototype.onOpenChange = function (data) {
        this.text = data ? 'opened' : 'closed';
    };
    DemoDropdownStateChangeEventComponent.ɵfac = function DemoDropdownStateChangeEventComponent_Factory(t) { return new (t || DemoDropdownStateChangeEventComponent)(); };
    DemoDropdownStateChangeEventComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownStateChangeEventComponent, selectors: [["demo-dropdown-state-change-event"]], decls: 8, vars: 1, consts: [[1, "row"], ["class", "col-xs-12 col-12 mb-3", 4, "ngIf"], [1, "col-xs-12", "col-12", "mb-2"], ["dropdown", "", 1, "btn-group", 3, "isOpenChange"], ["id", "button-state-change", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-state-change", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-state-change", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-state-change", 4, "dropdownMenu"], [1, "col-xs-12", "col-12", "mb-3"], [1, "card", "card-block", "card-header"], ["id", "dropdown-state-change", "role", "menu", "aria-labelledby", "button-state-change", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"]], template: function DemoDropdownStateChangeEventComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DemoDropdownStateChangeEventComponent_div_1_Template, 3, 1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵlistener("isOpenChange", function DemoDropdownStateChangeEventComponent_Template_div_isOpenChange_3_listener($event) { return ctx.onOpenChange($event); });
            i0.ɵɵelementStart(4, "button", 4);
            i0.ɵɵtext(5, " Button dropdown ");
            i0.ɵɵelement(6, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, DemoDropdownStateChangeEventComponent_ul_7_Template, 10, 0, "ul", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.text);
        } }, directives: [i1.NgIf, i2.BsDropdownDirective, i2.BsDropdownToggleDirective, i2.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownStateChangeEventComponent;
}());
exports.DemoDropdownStateChangeEventComponent = DemoDropdownStateChangeEventComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownStateChangeEventComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-state-change-event',
                templateUrl: './state-change-event.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "X2lt":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demo-dropdown.routes.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var dropdown_section_component_1 = __webpack_require__(/*! ./dropdown-section.component */ "UHXS");
exports.routes = [{ path: '', component: dropdown_section_component_1.DropdownSectionComponent }];


/***/ }),

/***/ "XBRt":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/state-change-event/state-change-event.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12 mb-3\" *ngIf=\"text\">\r\n      <pre class=\"card card-block card-header\">The dropdown is {{text}}</pre>\r\n  </div>\r\n  <div class=\"col-xs-12 col-12 mb-2\">\r\n    <div class=\"btn-group\"\r\n         dropdown\r\n         (isOpenChange)=\"onOpenChange($event)\">\r\n      <button id=\"button-state-change\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n              aria-controls=\"dropdown-state-change\">\r\n        Button dropdown <span class=\"caret\"></span>\r\n      </button>\r\n      <ul id=\"dropdown-state-change\" *dropdownMenu class=\"dropdown-menu\"\r\n          role=\"menu\" aria-labelledby=\"button-state-change\">\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "XQt+":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/animated/animated.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown>\r\n  <button id=\"button-animated\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-animated\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-animated\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-animated\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "aOVP":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/menu-dividers/menu-dividers.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown>\r\n  <button id=\"button-menu-dividers\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-menu-dividers\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-menu-dividers\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-menu-dividers\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "cnrA":
/*!****************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/custom-html/custom-html.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownCustomHtmlComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownCustomHtmlComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵelementStart(9, "span", 7);
    i0.ɵɵtext(10, "Some HTML here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownCustomHtmlComponent = /** @class */ (function () {
    function DemoDropdownCustomHtmlComponent() {
    }
    DemoDropdownCustomHtmlComponent.ɵfac = function DemoDropdownCustomHtmlComponent_Factory(t) { return new (t || DemoDropdownCustomHtmlComponent)(); };
    DemoDropdownCustomHtmlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownCustomHtmlComponent, selectors: [["demo-dropdown-custom-html"]], decls: 5, vars: 0, consts: [["dropdown", "", 1, "btn-group"], ["id", "button-custom-html", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-custom-html", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-custom-html", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-custom-html", 4, "dropdownMenu"], ["id", "dropdown-custom-html", "role", "menu", "aria-labelledby", "button-custom-html", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "badge", "badge-secondary"]], template: function DemoDropdownCustomHtmlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownCustomHtmlComponent_ul_4_Template, 11, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownCustomHtmlComponent;
}());
exports.DemoDropdownCustomHtmlComponent = DemoDropdownCustomHtmlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownCustomHtmlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-custom-html',
                templateUrl: './custom-html.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "dR3i":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/state-change-event/state-change-event.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-state-change-event',\r\n  templateUrl: './state-change-event.html'\r\n})\r\nexport class DemoDropdownStateChangeEventComponent {\r\n  text: string;\r\n  onOpenChange(data: boolean): void {\r\n    this.text = data ? 'opened' : 'closed';\r\n  }\r\n}\r\n");

/***/ }),

/***/ "frvt":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/basic/basic.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownBasicComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 7);
    i0.ɵɵelementStart(11, "li", 5);
    i0.ɵɵelementStart(12, "a", 6);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownBasicComponent = /** @class */ (function () {
    function DemoDropdownBasicComponent() {
    }
    DemoDropdownBasicComponent.ɵfac = function DemoDropdownBasicComponent_Factory(t) { return new (t || DemoDropdownBasicComponent)(); };
    DemoDropdownBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownBasicComponent, selectors: [["demo-dropdown-basic"]], decls: 5, vars: 0, consts: [["dropdown", "", 1, "btn-group"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownBasicComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownBasicComponent;
}());
exports.DemoDropdownBasicComponent = DemoDropdownBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "hPll":
/*!******************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/inside-click/inside-click.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownInsideClickComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownInsideClickComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 7);
    i0.ɵɵelementStart(11, "li", 5);
    i0.ɵɵelementStart(12, "a", 6);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownInsideClickComponent = /** @class */ (function () {
    function DemoDropdownInsideClickComponent() {
    }
    DemoDropdownInsideClickComponent.ɵfac = function DemoDropdownInsideClickComponent_Factory(t) { return new (t || DemoDropdownInsideClickComponent)(); };
    DemoDropdownInsideClickComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownInsideClickComponent, selectors: [["demo-dropdown-inside-click"]], decls: 5, vars: 1, consts: [["dropdown", "", 1, "btn-group", 3, "insideClick"], ["dropdownToggle", "", "type", "button", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["class", "dropdown-menu", "role", "menu", 4, "dropdownMenu"], ["role", "menu", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownInsideClickComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownInsideClickComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("insideClick", true);
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownInsideClickComponent;
}());
exports.DemoDropdownInsideClickComponent = DemoDropdownInsideClickComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownInsideClickComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-inside-click',
                templateUrl: './inside-click.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ha4f":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/config/config.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { BsDropdownConfig } from 'bao-tran-angular/dropdown';\n\n@Component({\n  selector: 'demo-dropdown-config',\n  templateUrl: './config.html',\n  providers: [{ provide: BsDropdownConfig, useValue: { autoClose: false } }]\n})\nexport class DemoDropdownConfigComponent {}\n");

/***/ }),

/***/ "i1Ea":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/disabled-item/disabled-item.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-disabled-item',\r\n  templateUrl: './disabled-item.html'\r\n})\r\nexport class DemoDropdownDisabledItemComponent {}\r\n");

/***/ }),

/***/ "iYiJ":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/nested-dropdowns/nested-dropdowns.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-nested-dropdowns',\r\n  templateUrl: './nested-dropdowns.html'\r\n})\r\nexport class DemoNestedDropdownsComponent {}\r\n");

/***/ }),

/***/ "m8s8":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/config/config.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownConfigComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var dropdown_1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownConfigComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownConfigComponent = /** @class */ (function () {
    function DemoDropdownConfigComponent() {
    }
    DemoDropdownConfigComponent.ɵfac = function DemoDropdownConfigComponent_Factory(t) { return new (t || DemoDropdownConfigComponent)(); };
    DemoDropdownConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownConfigComponent, selectors: [["demo-dropdown-config"]], features: [i0.ɵɵProvidersFeature([{ provide: dropdown_1.BsDropdownConfig, useValue: { autoClose: false } }])], decls: 5, vars: 0, consts: [["dropdown", "", 1, "btn-group"], ["id", "button-config", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-config", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-config", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-config", 4, "dropdownMenu"], ["id", "dropdown-config", "role", "menu", "aria-labelledby", "button-config", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"]], template: function DemoDropdownConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownConfigComponent_ul_4_Template, 10, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownConfigComponent;
}());
exports.DemoDropdownConfigComponent = DemoDropdownConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-config',
                templateUrl: './config.html',
                providers: [{ provide: dropdown_1.BsDropdownConfig, useValue: { autoClose: false } }]
            }]
    }], null, null); })();


/***/ }),

/***/ "nT2N":
/*!****************************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/visibility-events/visibility-events.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownVisibilityEventsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! @angular/common */ "ofXK");
var i2 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownVisibilityEventsComponent_pre_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var message_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r2);
} }
function DemoDropdownVisibilityEventsComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 9);
    i0.ɵɵelementStart(1, "li", 10);
    i0.ɵɵelementStart(2, "a", 11);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 10);
    i0.ɵɵelementStart(5, "a", 11);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 10);
    i0.ɵɵelementStart(8, "a", 11);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownVisibilityEventsComponent = /** @class */ (function () {
    function DemoDropdownVisibilityEventsComponent() {
        this.messages = [];
        this.message = 'onShown';
    }
    DemoDropdownVisibilityEventsComponent.prototype.handler = function (value) {
        this.messages.push("Event " + value + " is fired");
        this.messages = this.messages.length > 2 ? this.messages.slice(0, 1) : this.messages;
    };
    DemoDropdownVisibilityEventsComponent.ɵfac = function DemoDropdownVisibilityEventsComponent_Factory(t) { return new (t || DemoDropdownVisibilityEventsComponent)(); };
    DemoDropdownVisibilityEventsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownVisibilityEventsComponent, selectors: [["demo-dropdown-visibility-events"]], decls: 9, vars: 1, consts: [[1, "row"], [1, "col-xs-12", "col-12"], ["class", "card card-block card-header mb-3", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-12", "mb-3"], ["dropdown", "", 1, "btn-group", 3, "onShown", "onHidden"], ["id", "button-visbility", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-visbility", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-visbility", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-visbility", 4, "dropdownMenu"], [1, "card", "card-block", "card-header", "mb-3"], ["id", "dropdown-visbility", "role", "menu", "aria-labelledby", "button-visbility", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"]], template: function DemoDropdownVisibilityEventsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, DemoDropdownVisibilityEventsComponent_pre_2_Template, 2, 1, "pre", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵlistener("onShown", function DemoDropdownVisibilityEventsComponent_Template_div_onShown_4_listener() { return ctx.handler("onShown"); })("onHidden", function DemoDropdownVisibilityEventsComponent_Template_div_onHidden_4_listener() { return ctx.handler("onHidden"); });
            i0.ɵɵelementStart(5, "button", 5);
            i0.ɵɵtext(6, " Button dropdown ");
            i0.ɵɵelement(7, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, DemoDropdownVisibilityEventsComponent_ul_8_Template, 10, 0, "ul", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.messages);
        } }, directives: [i1.NgForOf, i2.BsDropdownDirective, i2.BsDropdownToggleDirective, i2.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownVisibilityEventsComponent;
}());
exports.DemoDropdownVisibilityEventsComponent = DemoDropdownVisibilityEventsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownVisibilityEventsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-visibility-events',
                templateUrl: './visibility-events.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "o2KW":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/keyboard/keyboard.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownKeyboardComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownKeyboardComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 7);
    i0.ɵɵelementStart(11, "li", 5);
    i0.ɵɵelementStart(12, "a", 6);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownKeyboardComponent = /** @class */ (function () {
    function DemoDropdownKeyboardComponent() {
    }
    DemoDropdownKeyboardComponent.ɵfac = function DemoDropdownKeyboardComponent_Factory(t) { return new (t || DemoDropdownKeyboardComponent)(); };
    DemoDropdownKeyboardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownKeyboardComponent, selectors: [["demo-dropdown-keyboard"]], decls: 5, vars: 0, consts: [["dropdown", "", "keyboardNav", "true", 1, "btn-group"], ["id", "button-keyboard", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-keyboard", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-keyboard", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-keyboard", 4, "dropdownMenu"], ["id", "dropdown-keyboard", "role", "menu", "aria-labelledby", "button-keyboard", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownKeyboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Dropdown with keyboard navigation ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownKeyboardComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownKeyboardComponent;
}());
exports.DemoDropdownKeyboardComponent = DemoDropdownKeyboardComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownKeyboardComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-keyboard',
                templateUrl: './keyboard.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "oG3M":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/basic/basic.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoDropdownBasicComponent {}\r\n");

/***/ }),

/***/ "prVs":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demo-dropdown.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var dropdown_1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var dropdown_section_component_1 = __webpack_require__(/*! ./dropdown-section.component */ "UHXS");
var demos_1 = __webpack_require__(/*! ./demos */ "wove");
var demo_dropdown_routes_1 = __webpack_require__(/*! ./demo-dropdown.routes */ "X2lt");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "tf7n");
var i2 = __webpack_require__(/*! ./demos/alignment/menu-alignment */ "zm4s");
var i3 = __webpack_require__(/*! ./demos/anchor-trigger/anchor-trigger */ "KzCT");
var i4 = __webpack_require__(/*! ./demos/animated/animated */ "td8B");
var i5 = __webpack_require__(/*! ./demos/autoclose/autoclose */ "UmBj");
var i6 = __webpack_require__(/*! ./demos/basic/basic */ "frvt");
var i7 = __webpack_require__(/*! ./demos/trigger-by-isopen-property/trigger-by-isopen-property */ "JXjl");
var i8 = __webpack_require__(/*! ./demos/config/config */ "m8s8");
var i9 = __webpack_require__(/*! ./demos/container/container */ "/j0j");
var i10 = __webpack_require__(/*! ./demos/custom-html/custom-html */ "cnrA");
var i11 = __webpack_require__(/*! ./demos/disabled-menu/disabled-menu */ "HBpD");
var i12 = __webpack_require__(/*! ./demos/disabled-item/disabled-item */ "I+gU");
var i13 = __webpack_require__(/*! ./demos/dropup/dropup */ "GFIe");
var i14 = __webpack_require__(/*! ./demos/inside-click/inside-click */ "hPll");
var i15 = __webpack_require__(/*! ./demos/keyboard/keyboard */ "o2KW");
var i16 = __webpack_require__(/*! ./demos/menu-dividers/menu-dividers */ "4N5i");
var i17 = __webpack_require__(/*! ./demos/split/split */ "+xHF");
var i18 = __webpack_require__(/*! ./demos/state-change-event/state-change-event */ "Vj1w");
var i19 = __webpack_require__(/*! ./demos/triggers-manual/triggers-manual */ "/rF/");
var i20 = __webpack_require__(/*! ./demos/visibility-events/visibility-events */ "nT2N");
var i21 = __webpack_require__(/*! ./demos/nested-dropdowns/nested-dropdowns */ "7D/D");
var i22 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
var i23 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoDropdownModule = /** @class */ (function () {
    function DemoDropdownModule() {
    }
    DemoDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoDropdownModule });
    DemoDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoDropdownModule_Factory(t) { return new (t || DemoDropdownModule)(); }, imports: [[
                dropdown_1.BsDropdownModule.forRoot(),
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_dropdown_routes_1.routes)
            ]] });
    return DemoDropdownModule;
}());
exports.DemoDropdownModule = DemoDropdownModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoDropdownModule, { declarations: [dropdown_section_component_1.DropdownSectionComponent, i1.DemoAccessibilityComponent, i2.DemoDropdownAlignmentComponent, i3.DemoDropdownAnchorTriggerComponent, i4.DemoDropdownAnimatedComponent, i5.DemoDropdownAutoCloseComponent, i6.DemoDropdownBasicComponent, i7.DemoDropdownByIsOpenPropComponent, i8.DemoDropdownConfigComponent, i9.DemoDropdownContainerComponent, i10.DemoDropdownCustomHtmlComponent, i11.DemoDropdownDisabledComponent, i12.DemoDropdownDisabledItemComponent, i13.DemoDropdownDropupComponent, i14.DemoDropdownInsideClickComponent, i15.DemoDropdownKeyboardComponent, i16.DemoDropdownMenuDividersComponent, i17.DemoDropdownSplitComponent, i18.DemoDropdownStateChangeEventComponent, i19.DemoDropdownTriggersManualComponent, i20.DemoDropdownVisibilityEventsComponent, i21.DemoNestedDropdownsComponent], imports: [i22.BsDropdownModule, common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i23.RouterModule], exports: [dropdown_section_component_1.DropdownSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    dropdown_section_component_1.DropdownSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    dropdown_1.BsDropdownModule.forRoot(),
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_dropdown_routes_1.routes)
                ],
                exports: [dropdown_section_component_1.DropdownSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "qc1C":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/custom-html/custom-html.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown>\r\n  <button id=\"button-custom-html\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-custom-html\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-custom-html\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-custom-html\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\"><span class=\"badge badge-secondary\">Some HTML here</span></a></li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "td8B":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/animated/animated.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownAnimatedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var dropdown_1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownAnimatedComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownAnimatedComponent = /** @class */ (function () {
    function DemoDropdownAnimatedComponent() {
    }
    DemoDropdownAnimatedComponent.ɵfac = function DemoDropdownAnimatedComponent_Factory(t) { return new (t || DemoDropdownAnimatedComponent)(); };
    DemoDropdownAnimatedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownAnimatedComponent, selectors: [["demo-dropdown-animation"]], features: [i0.ɵɵProvidersFeature([{ provide: dropdown_1.BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }])], decls: 5, vars: 0, consts: [["dropdown", "", 1, "btn-group"], ["id", "button-animated", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-animated", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-animated", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"]], template: function DemoDropdownAnimatedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " Button dropdown ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownAnimatedComponent_ul_4_Template, 10, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownAnimatedComponent;
}());
exports.DemoDropdownAnimatedComponent = DemoDropdownAnimatedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownAnimatedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-animation',
                templateUrl: './animated.html',
                providers: [{ provide: dropdown_1.BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
            }]
    }], null, null); })();


/***/ }),

/***/ "tf7n":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/accessibility/accessibility.ts ***!
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
    DemoAccessibilityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccessibilityComponent, selectors: [["demo-accessibility"]], decls: 27, vars: 0, consts: [["href", "https://www.w3.org/TR/wai-aria/"], ["title", "Web Accessibility Initiative"], ["title", "Accessible Rich Internet Applications"], ["href", "https://www.w3.org/TR/wai-aria-1.1/#menu"], [1, "highlighter-rouge"]], template: function DemoAccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "The ");
            i0.ɵɵelementStart(2, "a", 0);
            i0.ɵɵelementStart(3, "abbr", 1);
            i0.ɵɵtext(4, "WAI");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "abbr", 2);
            i0.ɵɵtext(6, "ARIA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, " standard defines an actual ");
            i0.ɵɵelementStart(8, "a", 3);
            i0.ɵɵelementStart(9, "code", 4);
            i0.ɵɵtext(10, "role=\"menu\"");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " widget");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, ", but this is specific to application-like menus which trigger actions or functions. ");
            i0.ɵɵelementStart(13, "abbr", 2);
            i0.ɵɵtext(14, "ARIA");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(15, " menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p");
            i0.ɵɵtext(17, "Dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, bao-tran-angular does not expect (nor automatically add) any of the ");
            i0.ɵɵelementStart(18, "code", 4);
            i0.ɵɵtext(19, "role");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, " and ");
            i0.ɵɵelementStart(21, "code", 4);
            i0.ɵɵtext(22, "aria-");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, " attributes required for true ");
            i0.ɵɵelementStart(24, "abbr", 2);
            i0.ɵɵtext(25, "ARIA");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26, " menus. Authors will have to include these more specific attributes themselves.");
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

/***/ "v0kL":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/trigger-by-isopen-property/trigger-by-isopen-property.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown #dropdown=\"bs-dropdown\" [autoClose]=\"false\">\r\n  <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n    Button dropdown <span class=\"caret\"></span>\r\n  </button>\r\n  <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n  </ul>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"dropdown.isOpen = !dropdown.isOpen\">Toggle</button>\r\n");

/***/ }),

/***/ "vswf":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/autoclose/autoclose.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-autoclose',\r\n  templateUrl: './autoclose.html'\r\n})\r\nexport class DemoDropdownAutoCloseComponent {}\r\n");

/***/ }),

/***/ "wD2T":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/alignment/menu-alignment.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-alignment',\r\n  templateUrl: './menu-alignment.html'\r\n})\r\nexport class DemoDropdownAlignmentComponent {}\r\n");

/***/ }),

/***/ "wg0r":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/menu-dividers/menu-dividers.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-menu-dividers',\r\n  templateUrl: './menu-dividers.html'\r\n})\r\nexport class DemoDropdownMenuDividersComponent {}\r\n");

/***/ }),

/***/ "wove":
/*!**********************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var accessibility_1 = __webpack_require__(/*! ./accessibility/accessibility */ "tf7n");
var menu_alignment_1 = __webpack_require__(/*! ./alignment/menu-alignment */ "zm4s");
var anchor_trigger_1 = __webpack_require__(/*! ./anchor-trigger/anchor-trigger */ "KzCT");
var animated_1 = __webpack_require__(/*! ./animated/animated */ "td8B");
var autoclose_1 = __webpack_require__(/*! ./autoclose/autoclose */ "UmBj");
var basic_1 = __webpack_require__(/*! ./basic/basic */ "frvt");
var trigger_by_isopen_property_1 = __webpack_require__(/*! ./trigger-by-isopen-property/trigger-by-isopen-property */ "JXjl");
var config_1 = __webpack_require__(/*! ./config/config */ "m8s8");
var container_1 = __webpack_require__(/*! ./container/container */ "/j0j");
var custom_html_1 = __webpack_require__(/*! ./custom-html/custom-html */ "cnrA");
var disabled_menu_1 = __webpack_require__(/*! ./disabled-menu/disabled-menu */ "HBpD");
var disabled_item_1 = __webpack_require__(/*! ./disabled-item/disabled-item */ "I+gU");
var dropup_1 = __webpack_require__(/*! ./dropup/dropup */ "GFIe");
var inside_click_1 = __webpack_require__(/*! ./inside-click/inside-click */ "hPll");
var keyboard_1 = __webpack_require__(/*! ./keyboard/keyboard */ "o2KW");
var menu_dividers_1 = __webpack_require__(/*! ./menu-dividers/menu-dividers */ "4N5i");
var split_1 = __webpack_require__(/*! ./split/split */ "+xHF");
var state_change_event_1 = __webpack_require__(/*! ./state-change-event/state-change-event */ "Vj1w");
var triggers_manual_1 = __webpack_require__(/*! ./triggers-manual/triggers-manual */ "/rF/");
var visibility_events_1 = __webpack_require__(/*! ./visibility-events/visibility-events */ "nT2N");
var nested_dropdowns_1 = __webpack_require__(/*! ./nested-dropdowns/nested-dropdowns */ "7D/D");
exports.DEMO_COMPONENTS = [
    accessibility_1.DemoAccessibilityComponent,
    menu_alignment_1.DemoDropdownAlignmentComponent,
    anchor_trigger_1.DemoDropdownAnchorTriggerComponent,
    animated_1.DemoDropdownAnimatedComponent,
    autoclose_1.DemoDropdownAutoCloseComponent,
    basic_1.DemoDropdownBasicComponent,
    trigger_by_isopen_property_1.DemoDropdownByIsOpenPropComponent,
    config_1.DemoDropdownConfigComponent,
    container_1.DemoDropdownContainerComponent,
    custom_html_1.DemoDropdownCustomHtmlComponent,
    disabled_menu_1.DemoDropdownDisabledComponent,
    disabled_item_1.DemoDropdownDisabledItemComponent,
    dropup_1.DemoDropdownDropupComponent,
    inside_click_1.DemoDropdownInsideClickComponent,
    keyboard_1.DemoDropdownKeyboardComponent,
    menu_dividers_1.DemoDropdownMenuDividersComponent,
    split_1.DemoDropdownSplitComponent,
    state_change_event_1.DemoDropdownStateChangeEventComponent,
    triggers_manual_1.DemoDropdownTriggersManualComponent,
    visibility_events_1.DemoDropdownVisibilityEventsComponent,
    nested_dropdowns_1.DemoNestedDropdownsComponent
];


/***/ }),

/***/ "xBf+":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/dropup/dropup.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown [dropup]=\"isDropup\">\r\n  <button id=\"button-dropup\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-dropup\">\r\n    Dropup <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-dropup\" *dropdownMenu class=\"dropdown-menu\"\r\n      role=\"menu\" aria-labelledby=\"button-dropup\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n    </li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else\r\n      here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "xyyg":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/visibility-events/visibility-events.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <pre class=\"card card-block card-header mb-3\" *ngFor=\"let message of messages\">{{message}}</pre>\r\n  </div>\r\n  <div class=\"col-xs-12 col-12 mb-3\">\r\n    <div class=\"btn-group\"\r\n         dropdown\r\n         (onShown)=\"handler('onShown')\"\r\n         (onHidden)=\"handler('onHidden')\">\r\n      <button id=\"button-visbility\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n              aria-controls=\"dropdown-visbility\">\r\n        Button dropdown <span class=\"caret\"></span>\r\n      </button>\r\n      <ul id=\"dropdown-visbility\" *dropdownMenu class=\"dropdown-menu\"\r\n          role=\"menu\" aria-labelledby=\"button-visbility\">\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n        <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "ysjF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/split/split.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-dropdown-split',\r\n  templateUrl: './split.html'\r\n})\r\nexport class DemoDropdownSplitComponent {}\r\n");

/***/ }),

/***/ "zGdq":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+dropdown/demos/alignment/menu-alignment.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-group\" dropdown placement=\"bottom right\">\r\n  <button id=\"button-alignment\" dropdownToggle type=\"button\"\r\n          class=\"btn btn-primary dropdown-toggle\" aria-controls=\"dropdown-alignment\">\r\n    This dropdown's menu is right-aligned <span class=\"caret\"></span>\r\n  </button>\r\n  <ul id=\"dropdown-alignment\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\"\r\n      role=\"menu\" aria-labelledby=\"button-alignment\">\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\r\n    <li class=\"divider dropdown-divider\"></li>\r\n    <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a></li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "zm4s":
/*!*****************************************************************************!*\
  !*** ./demo/src/app/components/+dropdown/demos/alignment/menu-alignment.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDropdownAlignmentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/dropdown */ "6UXF");
function DemoDropdownAlignmentComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵelementStart(2, "a", 6);
    i0.ɵɵtext(3, "Action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 5);
    i0.ɵɵelementStart(5, "a", 6);
    i0.ɵɵtext(6, "Another action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "li", 5);
    i0.ɵɵelementStart(8, "a", 6);
    i0.ɵɵtext(9, "Something else here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "li", 7);
    i0.ɵɵelementStart(11, "li", 5);
    i0.ɵɵelementStart(12, "a", 6);
    i0.ɵɵtext(13, "Separated link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var DemoDropdownAlignmentComponent = /** @class */ (function () {
    function DemoDropdownAlignmentComponent() {
    }
    DemoDropdownAlignmentComponent.ɵfac = function DemoDropdownAlignmentComponent_Factory(t) { return new (t || DemoDropdownAlignmentComponent)(); };
    DemoDropdownAlignmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoDropdownAlignmentComponent, selectors: [["demo-dropdown-alignment"]], decls: 5, vars: 0, consts: [["dropdown", "", "placement", "bottom right", 1, "btn-group"], ["id", "button-alignment", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-alignment", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-alignment", "class", "dropdown-menu dropdown-menu-right", "role", "menu", "aria-labelledby", "button-alignment", 4, "dropdownMenu"], ["id", "dropdown-alignment", "role", "menu", "aria-labelledby", "button-alignment", 1, "dropdown-menu", "dropdown-menu-right"], ["role", "menuitem"], ["href", "#", 1, "dropdown-item"], [1, "divider", "dropdown-divider"]], template: function DemoDropdownAlignmentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "button", 1);
            i0.ɵɵtext(2, " This dropdown's menu is right-aligned ");
            i0.ɵɵelement(3, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, DemoDropdownAlignmentComponent_ul_4_Template, 14, 0, "ul", 3);
            i0.ɵɵelementEnd();
        } }, directives: [i1.BsDropdownDirective, i1.BsDropdownToggleDirective, i1.BsDropdownMenuDirective], encapsulation: 2 });
    return DemoDropdownAlignmentComponent;
}());
exports.DemoDropdownAlignmentComponent = DemoDropdownAlignmentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoDropdownAlignmentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-dropdown-alignment',
                templateUrl: './menu-alignment.html'
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-dropdown-demo-dropdown-module.js.map