exports.ids = ["components-progressbar-demo-progressbar-module"];
exports.modules = {

/***/ "12zm":
/*!*************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/demos/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var static_1 = __webpack_require__(/*! ./static/static */ "5rNI");
var dynamic_1 = __webpack_require__(/*! ./dynamic/dynamic */ "8Ie4");
var stacked_1 = __webpack_require__(/*! ./stacked/stacked */ "GlH4");
var config_1 = __webpack_require__(/*! ./config/config */ "ASWG");
exports.DEMO_COMPONENTS = [
    static_1.DemoProgressbarStaticComponent,
    dynamic_1.DemoProgressbarDynamicComponent,
    stacked_1.DemoProgressbarStackedComponent,
    config_1.DemoProgressbarConfigComponent
];


/***/ }),

/***/ "21TI":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/demo-progressbar.module.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoProgressbarModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var progressbar_1 = __webpack_require__(/*! bao-tran-angular/progressbar */ "alaN");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var progressbar_section_component_1 = __webpack_require__(/*! ./progressbar-section.component */ "JBZz");
var demos_1 = __webpack_require__(/*! ./demos */ "12zm");
var demo_progressbar_routes_1 = __webpack_require__(/*! ./demo-progressbar.routes */ "mQyG");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/static/static */ "5rNI");
var i2 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "8Ie4");
var i3 = __webpack_require__(/*! ./demos/stacked/stacked */ "GlH4");
var i4 = __webpack_require__(/*! ./demos/config/config */ "ASWG");
var i5 = __webpack_require__(/*! bao-tran-angular/progressbar */ "alaN");
var i6 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoProgressbarModule = /** @class */ (function () {
    function DemoProgressbarModule() {
    }
    DemoProgressbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoProgressbarModule });
    DemoProgressbarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoProgressbarModule_Factory(t) { return new (t || DemoProgressbarModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                progressbar_1.ProgressbarModule.forRoot(),
                router_1.RouterModule.forChild(demo_progressbar_routes_1.routes)
            ]] });
    return DemoProgressbarModule;
}());
exports.DemoProgressbarModule = DemoProgressbarModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoProgressbarModule, { declarations: [progressbar_section_component_1.ProgressbarSectionComponent, i1.DemoProgressbarStaticComponent, i2.DemoProgressbarDynamicComponent, i3.DemoProgressbarStackedComponent, i4.DemoProgressbarConfigComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i5.ProgressbarModule, i6.RouterModule], exports: [progressbar_section_component_1.ProgressbarSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoProgressbarModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    progressbar_section_component_1.ProgressbarSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    progressbar_1.ProgressbarModule.forRoot(),
                    router_1.RouterModule.forChild(demo_progressbar_routes_1.routes)
                ],
                exports: [progressbar_section_component_1.ProgressbarSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "5rNI":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/demos/static/static.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoProgressbarStaticComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/progressbar */ "alaN");
var DemoProgressbarStaticComponent = /** @class */ (function () {
    function DemoProgressbarStaticComponent() {
    }
    DemoProgressbarStaticComponent.ɵfac = function DemoProgressbarStaticComponent_Factory(t) { return new (t || DemoProgressbarStaticComponent)(); };
    DemoProgressbarStaticComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoProgressbarStaticComponent, selectors: [["demo-progressbar-static"]], decls: 13, vars: 6, consts: [[1, "row"], [1, "col-sm-4"], [1, "mb-2"], [3, "value"], ["type", "warning", 3, "value", "striped"], ["max", "200", "type", "danger", 3, "value", "striped", "animate"]], template: function DemoProgressbarStaticComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "progressbar", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelementStart(5, "div", 2);
            i0.ɵɵelementStart(6, "progressbar", 4);
            i0.ɵɵtext(7, "22%");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 1);
            i0.ɵɵelementStart(9, "div", 2);
            i0.ɵɵelementStart(10, "progressbar", 5);
            i0.ɵɵelementStart(11, "i");
            i0.ɵɵtext(12, "166 / 200");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", 55);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", 22)("striped", true);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", 166)("striped", true)("animate", true);
        } }, directives: [i1.ProgressbarComponent], encapsulation: 2 });
    return DemoProgressbarStaticComponent;
}());
exports.DemoProgressbarStaticComponent = DemoProgressbarStaticComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoProgressbarStaticComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-progressbar-static',
                templateUrl: './static.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "864i":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/dynamic/dynamic.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-2\">\r\n  <progressbar [max]=\"max\" [value]=\"dynamic\">\r\n    <span class=\"text-nowrap\">{{dynamic}} / {{max}}</span>\r\n  </progressbar>\r\n  <small><em>No animation</em></small>\r\n</div>\r\n<div class=\"mb-2\">\r\n  <progressbar [animate]=\"false\" [value]=\"dynamic\" type=\"success\"><b>{{dynamic}}%</b></progressbar>\r\n  <small><em>Object (changes type based on value)</em></small>\r\n</div>\r\n<div class=\"mb-3\">\r\n  <progressbar class=\"progress-striped active\" [value]=\"dynamic\" [type]=\"type\">{{type}}</progressbar>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"random()\">Randomize</button>\r\n");

/***/ }),

/***/ "8Ie4":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/demos/dynamic/dynamic.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoProgressbarDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/progressbar */ "alaN");
var DemoProgressbarDynamicComponent = /** @class */ (function () {
    function DemoProgressbarDynamicComponent() {
        this.max = 200;
        this.random();
    }
    DemoProgressbarDynamicComponent.prototype.random = function () {
        var value = Math.floor(Math.random() * 100 + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.dynamic = value;
        this.type = type;
    };
    DemoProgressbarDynamicComponent.ɵfac = function DemoProgressbarDynamicComponent_Factory(t) { return new (t || DemoProgressbarDynamicComponent)(); };
    DemoProgressbarDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoProgressbarDynamicComponent, selectors: [["demo-progressbar-dynamic"]], decls: 19, vars: 10, consts: [[1, "mb-2"], [3, "max", "value"], [1, "text-nowrap"], ["type", "success", 3, "animate", "value"], [1, "mb-3"], [1, "progress-striped", "active", 3, "value", "type"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function DemoProgressbarDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "progressbar", 1);
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "small");
            i0.ɵɵelementStart(5, "em");
            i0.ɵɵtext(6, "No animation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 0);
            i0.ɵɵelementStart(8, "progressbar", 3);
            i0.ɵɵelementStart(9, "b");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "small");
            i0.ɵɵelementStart(12, "em");
            i0.ɵɵtext(13, "Object (changes type based on value)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 4);
            i0.ɵɵelementStart(15, "progressbar", 5);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 6);
            i0.ɵɵlistener("click", function DemoProgressbarDynamicComponent_Template_button_click_17_listener() { return ctx.random(); });
            i0.ɵɵtext(18, "Randomize");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("max", ctx.max)("value", ctx.dynamic);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.dynamic, " / ", ctx.max, "");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("animate", false)("value", ctx.dynamic);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.dynamic, "%");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.dynamic)("type", ctx.type);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.type);
        } }, directives: [i1.ProgressbarComponent], encapsulation: 2 });
    return DemoProgressbarDynamicComponent;
}());
exports.DemoProgressbarDynamicComponent = DemoProgressbarDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoProgressbarDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-progressbar-dynamic',
                templateUrl: './dynamic.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A7XG":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/config/config.ts ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { ProgressbarConfig } from 'bao-tran-angular/progressbar';\n\n// such override allows to keep some initial values\n\nexport function getProgressbarConfig(): ProgressbarConfig {\n  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150 });\n}\n\n@Component({\n  selector: 'demo-progressbar-config',\n  templateUrl: './config.html',\n  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]\n})\nexport class DemoProgressbarConfigComponent {}\n");

/***/ }),

/***/ "ASWG":
/*!*********************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/demos/config/config.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoProgressbarConfigComponent = exports.getProgressbarConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var progressbar_1 = __webpack_require__(/*! bao-tran-angular/progressbar */ "alaN");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/progressbar */ "alaN");
// such override allows to keep some initial values
function getProgressbarConfig() {
    return Object.assign(new progressbar_1.ProgressbarConfig(), { animate: true, striped: true, max: 150 });
}
exports.getProgressbarConfig = getProgressbarConfig;
var DemoProgressbarConfigComponent = /** @class */ (function () {
    function DemoProgressbarConfigComponent() {
    }
    DemoProgressbarConfigComponent.ɵfac = function DemoProgressbarConfigComponent_Factory(t) { return new (t || DemoProgressbarConfigComponent)(); };
    DemoProgressbarConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoProgressbarConfigComponent, selectors: [["demo-progressbar-config"]], features: [i0.ɵɵProvidersFeature([{ provide: progressbar_1.ProgressbarConfig, useFactory: getProgressbarConfig }])], decls: 4, vars: 1, consts: [[1, "mb-2"], ["type", "danger", 1, "progress-striped", "active", 3, "value"]], template: function DemoProgressbarConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "progressbar", 1);
            i0.ɵɵelementStart(2, "i");
            i0.ɵɵtext(3, "136 / 150");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", 136);
        } }, directives: [i1.ProgressbarComponent], encapsulation: 2 });
    return DemoProgressbarConfigComponent;
}());
exports.DemoProgressbarConfigComponent = DemoProgressbarConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoProgressbarConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-progressbar-config',
                templateUrl: './config.html',
                providers: [{ provide: progressbar_1.ProgressbarConfig, useFactory: getProgressbarConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "C7zT":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/stacked/stacked.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"mb-3\">\r\n      <progressbar class=\"progress\" [value]=\"stacked\" [max]=\"100\"></progressbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"randomStacked()\">Randomize</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "GlH4":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/demos/stacked/stacked.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoProgressbarStackedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/progressbar */ "alaN");
var DemoProgressbarStackedComponent = /** @class */ (function () {
    function DemoProgressbarStackedComponent() {
        this.stacked = [];
        this.randomStacked();
    }
    DemoProgressbarStackedComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var n = Math.floor(Math.random() * 4 + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * 4);
            var value = Math.floor(Math.random() * 27 + 3);
            this.stacked.push({
                value: value,
                type: types[index],
                label: value + ' %'
            });
        }
    };
    DemoProgressbarStackedComponent.ɵfac = function DemoProgressbarStackedComponent_Factory(t) { return new (t || DemoProgressbarStackedComponent)(); };
    DemoProgressbarStackedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoProgressbarStackedComponent, selectors: [["demo-progressbar-stacked"]], decls: 7, vars: 2, consts: [[1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "progress", 3, "value", "max"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"]], template: function DemoProgressbarStackedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "progressbar", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelementStart(5, "button", 4);
            i0.ɵɵlistener("click", function DemoProgressbarStackedComponent_Template_button_click_5_listener() { return ctx.randomStacked(); });
            i0.ɵɵtext(6, "Randomize");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.stacked)("max", 100);
        } }, directives: [i1.ProgressbarComponent], encapsulation: 2 });
    return DemoProgressbarStackedComponent;
}());
exports.DemoProgressbarStackedComponent = DemoProgressbarStackedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoProgressbarStackedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-progressbar-stacked',
                templateUrl: './stacked.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JBZz":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/progressbar-section.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressbarSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var utils_1 = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
var progressbar_section_list_1 = __webpack_require__(/*! ./progressbar-section.list */ "VmJu");
var content_section_model_1 = __webpack_require__(/*! ../../docs/models/content-section.model */ "1H/a");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var ProgressbarSectionComponent = /** @class */ (function () {
    function ProgressbarSectionComponent(injector) {
        this.injector = injector;
        this.name = 'Progressbar';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/progressbar';
        this.componentContent = progressbar_section_list_1.demoComponentContent;
        this._injectors = new Map();
    }
    ProgressbarSectionComponent.prototype.sectionInjections = function (content) {
        if (this._injectors.has(content)) {
            return this._injectors.get(content);
        }
        var _injector = core_1.ReflectiveInjector.resolveAndCreate([
            {
                provide: content_section_model_1.ContentSection,
                useValue: content
            }
        ], this.injector);
        this._injectors.set(content, _injector);
        return _injector;
    };
    Object.defineProperty(ProgressbarSectionComponent.prototype, "isBs3", {
        get: function () {
            if (typeof PR !== 'undefined') {
                setTimeout(function () { return PR.prettyPrint(); }, 10);
            }
            return utils_1.isBs3();
        },
        enumerable: false,
        configurable: true
    });
    ProgressbarSectionComponent.ɵfac = function ProgressbarSectionComponent_Factory(t) { return new (t || ProgressbarSectionComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
    ProgressbarSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressbarSectionComponent, selectors: [["progressbar-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function ProgressbarSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return ProgressbarSectionComponent;
}());
exports.ProgressbarSectionComponent = ProgressbarSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressbarSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'progressbar-section',
                templateUrl: './progressbar-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();


/***/ }),

/***/ "NlKr":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/stacked/stacked.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-progressbar-stacked',\r\n  templateUrl: './stacked.html'\r\n})\r\nexport class DemoProgressbarStackedComponent {\r\n  type: string;\r\n  stacked: any[] = [];\r\n\r\n  constructor() {\r\n    this.randomStacked();\r\n  }\r\n\r\n  randomStacked(): void {\r\n    let types = ['success', 'info', 'warning', 'danger'];\r\n\r\n    this.stacked = [];\r\n    let n = Math.floor(Math.random() * 4 + 1);\r\n    for (let i = 0; i < n; i++) {\r\n      let index = Math.floor(Math.random() * 4);\r\n      let value = Math.floor(Math.random() * 27 + 3);\r\n      this.stacked.push({\r\n        value,\r\n        type: types[index],\r\n        label: value + ' %'\r\n      });\r\n    }\r\n  }\r\n}\r\n");

/***/ }),

/***/ "VmJu":
/*!**************************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/progressbar-section.list.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var static_1 = __webpack_require__(/*! ./demos/static/static */ "5rNI");
var dynamic_1 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "8Ie4");
var stacked_1 = __webpack_require__(/*! ./demos/stacked/stacked */ "GlH4");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "ASWG");
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
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "lDXp")
        }
    },
    {
        name: 'Examples',
        anchor: 'examples',
        outlet: index_2.ExamplesComponent,
        content: [
            {
                title: 'Static',
                anchor: 'bs3-static',
                component: __webpack_require__(/*! !raw-loader!./demos/static/static */ "t7JV"),
                html: __webpack_require__(/*! !raw-loader!./demos/static/static.html */ "Zvmi"),
                outlet: static_1.DemoProgressbarStaticComponent
            },
            {
                title: 'Dynamic',
                anchor: 'bs3-dynamic',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic */ "nTxd"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.html */ "864i"),
                outlet: dynamic_1.DemoProgressbarDynamicComponent
            },
            {
                title: 'Stacked',
                anchor: 'bs3-stacked',
                component: __webpack_require__(/*! !raw-loader!./demos/stacked/stacked */ "NlKr"),
                html: __webpack_require__(/*! !raw-loader!./demos/stacked/stacked.html */ "C7zT"),
                outlet: stacked_1.DemoProgressbarStackedComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'bs3-config',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config */ "A7XG"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "drBN"),
                outlet: config_1.DemoProgressbarConfigComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'ProgressbarComponent',
                anchor: 'progressbar-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'ProgressbarConfig',
                anchor: 'progress-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "Zvmi":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/static/static.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"mb-2\">\r\n      <progressbar [value]=\"55\"></progressbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"mb-2\">\r\n      <progressbar [value]=\"22\" type=\"warning\" [striped]=\"true\">22%</progressbar>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"mb-2\">\r\n      <progressbar max=\"200\" [value]=\"166\" type=\"danger\" [striped]=\"true\" [animate]=\"true\"><i>166 / 200</i></progressbar>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "drBN":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/config/config.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-2\">\r\n  <progressbar class=\"progress-striped active\"  [value]=\"136\" type=\"danger\"><i>136 / 150</i></progressbar>\r\n</div>\r\n");

/***/ }),

/***/ "lDXp":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/docs/usage.md ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { ProgressbarModule } from 'bao-tran-angular/progressbar';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { ProgressbarModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [ProgressbarModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "mQyG":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+progressbar/demo-progressbar.routes.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var progressbar_section_component_1 = __webpack_require__(/*! ./progressbar-section.component */ "JBZz");
exports.routes = [{ path: '', component: progressbar_section_component_1.ProgressbarSectionComponent }];


/***/ }),

/***/ "nTxd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/dynamic/dynamic.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-progressbar-dynamic',\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoProgressbarDynamicComponent {\r\n  max: number = 200;\r\n  showWarning: boolean;\r\n  dynamic: number;\r\n  type: string;\r\n\r\n  constructor() {\r\n    this.random();\r\n  }\r\n\r\n  random(): void {\r\n    let value = Math.floor(Math.random() * 100 + 1);\r\n    let type: string;\r\n\r\n    if (value < 25) {\r\n      type = 'success';\r\n    } else if (value < 50) {\r\n      type = 'info';\r\n    } else if (value < 75) {\r\n      type = 'warning';\r\n    } else {\r\n      type = 'danger';\r\n    }\r\n\r\n    this.dynamic = value;\r\n    this.type = type;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "t7JV":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+progressbar/demos/static/static.ts ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-progressbar-static',\r\n  templateUrl: './static.html'\r\n})\r\nexport class DemoProgressbarStaticComponent {}\r\n");

/***/ })

};;
//# sourceMappingURL=components-progressbar-demo-progressbar-module.js.map