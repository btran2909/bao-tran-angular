exports.ids = ["components-tooltip-demo-tooltip-module"];
exports.modules = {

/***/ "+NeY":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/tooltip-section.list.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var adaptive_position_1 = __webpack_require__(/*! ./demos/adaptive-position/adaptive-position */ "janv");
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "8KEe");
var class_1 = __webpack_require__(/*! ./demos/class/class */ "T61M");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "Fp1X");
var container_1 = __webpack_require__(/*! ./demos/container/container */ "Ydjz");
var custom_content_1 = __webpack_require__(/*! ./demos/custom-content/custom-content */ "0beS");
var delay_1 = __webpack_require__(/*! ./demos/delay/delay */ "4tqV");
var dismiss_1 = __webpack_require__(/*! ./demos/dismiss/dismiss */ "KXCT");
var dynamic_1 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "ftdI");
var dynamic_html_1 = __webpack_require__(/*! ./demos/dynamic-html/dynamic-html */ "ji2l");
var placement_1 = __webpack_require__(/*! ./demos/placement/placement */ "1K/V");
var styling_local_1 = __webpack_require__(/*! ./demos/styling-local/styling-local */ "yHxN");
var triggers_custom_1 = __webpack_require__(/*! ./demos/triggers-custom/triggers-custom */ "HlBl");
var triggers_manual_1 = __webpack_require__(/*! ./demos/triggers-manual/triggers-manual */ "JQVL");
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
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "s4Zf")
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
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.ts */ "J71g"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "Pfxt"),
                outlet: basic_1.DemoTooltipBasicComponent
            },
            {
                title: 'Placement',
                anchor: 'placement',
                component: __webpack_require__(/*! !raw-loader!./demos/placement/placement.ts */ "jG2G"),
                html: __webpack_require__(/*! !raw-loader!./demos/placement/placement.html */ "vvOX"),
                description: "<p>Four positioning options are available: <code>top</code>, <code>right</code>,\n          <code>bottom</code>, and <code>left</code>. Besides that, <code>auto</code> option may be\n          used to detect a position that fits the component on the screen.</p>",
                outlet: placement_1.DemoTooltipPlacementComponent
            },
            {
                title: 'Disable adaptive position',
                anchor: 'adaptive-position',
                description: "\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",
                component: __webpack_require__(/*! !raw-loader!./demos/adaptive-position/adaptive-position.ts */ "HV50"),
                html: __webpack_require__(/*! !raw-loader!./demos/adaptive-position/adaptive-position.html */ "UDI6"),
                outlet: adaptive_position_1.DemoTooltipAdaptivePositionComponent
            },
            {
                title: 'Dismiss on next click',
                anchor: 'dismiss',
                component: __webpack_require__(/*! !raw-loader!./demos/dismiss/dismiss.ts */ "axmm"),
                html: __webpack_require__(/*! !raw-loader!./demos/dismiss/dismiss.html */ "JVFR"),
                description: "<p>Use the <code>focus</code> trigger to dismiss tooltips on the next click\n          that the user makes.</p>",
                outlet: dismiss_1.DemoTooltipDismissComponent
            },
            {
                title: 'Dynamic Content',
                anchor: 'dynamic-content',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.ts */ "mJes"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.html */ "fYZe"),
                description: "<p>Pass a string as tooltip content</p>",
                outlet: dynamic_1.DemoTooltipDynamicComponent
            },
            {
                title: 'Custom content template',
                anchor: 'custom-content-template',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-content/custom-content.ts */ "TSBC"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-content/custom-content.html */ "oyw1"),
                description: "<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[tooltip]=\"myId\"</code> as tooltip content</p>",
                outlet: custom_content_1.DemoTooltipCustomContentComponent
            },
            {
                title: 'Dynamic Html',
                anchor: 'dynamic-html',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic-html/dynamic-html.ts */ "JMgA"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic-html/dynamic-html.html */ "CXLt"),
                description: "<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you\n          can display any dynamic html</p>",
                outlet: dynamic_html_1.DemoTooltipDynamicHtmlComponent
            },
            {
                title: 'Append to body',
                anchor: 'append-to-body',
                component: __webpack_require__(/*! !raw-loader!./demos/container/container.ts */ "YyOb"),
                html: __webpack_require__(/*! !raw-loader!./demos/container/container.html */ "6Pyj"),
                description: "<p>When you have some styles on a parent element that interfere with a tooltip,\n          you\u2019ll want to specify a <code>container=\"body\"</code> so that the tooltip\u2019s HTML will be\n          appended to body. This will help to avoid rendering problems in more complex components\n          (like our input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>",
                outlet: container_1.DemoTooltipContainerComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'config-defaults',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config.ts */ "tOI7"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "TPTc"),
                outlet: config_1.DemoTooltipConfigComponent
            },
            {
                title: 'Custom triggers',
                anchor: 'triggers-custom',
                component: __webpack_require__(/*! !raw-loader!./demos/triggers-custom/triggers-custom.ts */ "7joK"),
                html: __webpack_require__(/*! !raw-loader!./demos/triggers-custom/triggers-custom.html */ "a7kt"),
                outlet: triggers_custom_1.DemoTooltipTriggersCustomComponent
            },
            {
                title: 'Manual triggering',
                anchor: 'triggers-manual',
                component: __webpack_require__(/*! !raw-loader!./demos/triggers-manual/triggers-manual.ts */ "JLzS"),
                html: __webpack_require__(/*! !raw-loader!./demos/triggers-manual/triggers-manual.html */ "Segs"),
                description: "<p>You can manage tooltip using its <code>show()</code>, <code>hide()</code> and <code>toggle()</code> methods. \n          If you want to manage tooltip's state manually, use <code>triggers=\"\"</code></p>",
                outlet: triggers_manual_1.DemoTooltipTriggersManualComponent
            },
            {
                title: 'Component level styling',
                anchor: 'styling-local',
                component: __webpack_require__(/*! !raw-loader!./demos/styling-local/styling-local.ts */ "qHY7"),
                html: __webpack_require__(/*! !raw-loader!./demos/styling-local/styling-local.html */ "SQBb"),
                outlet: styling_local_1.DemoTooltipStylingLocalComponent
            },
            {
                title: 'Custom class',
                anchor: 'custom-class',
                component: __webpack_require__(/*! !raw-loader!./demos/class/class.ts */ "W7Pu"),
                html: __webpack_require__(/*! !raw-loader!./demos/class/class.html */ "+USN"),
                outlet: class_1.DemoTooltipClassComponent
            },
            {
                title: 'Tooltip with delay',
                anchor: 'tooltip-delay',
                component: __webpack_require__(/*! !raw-loader!./demos/delay/delay.ts */ "AN4n"),
                html: __webpack_require__(/*! !raw-loader!./demos/delay/delay.html */ "iJQM"),
                description: "<p>Hold on cursor above button for 0,5 second or more to see delayed tooltip</p>",
                outlet: delay_1.DemoTooltipDelayComponent
            }
        ]
    },
    {
        name: 'API Reference',
        anchor: 'api-reference',
        outlet: index_3.ApiSectionsComponent,
        content: [
            {
                title: 'TooltipDirective',
                anchor: 'tooltip-directive',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'TooltipConfig',
                anchor: 'tooltip-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "+USN":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/class/class.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" containerClass=\"customClass\">\r\n  Demo with custom class\r\n</button>\r\n\r\n");

/***/ }),

/***/ "0beS":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/custom-content/custom-content.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipCustomContentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
function DemoTooltipCustomContentComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1("Just another: ", ctx_r1.content, "");
} }
var DemoTooltipCustomContentComponent = /** @class */ (function () {
    function DemoTooltipCustomContentComponent() {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
    }
    DemoTooltipCustomContentComponent.ɵfac = function DemoTooltipCustomContentComponent_Factory(t) { return new (t || DemoTooltipCustomContentComponent)(); };
    DemoTooltipCustomContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipCustomContentComponent, selectors: [["demo-tooltip-custom-content"]], decls: 4, vars: 1, consts: [["tolTemplate", ""], ["type", "button", 1, "btn", "btn-warning", 3, "tooltip"]], template: function DemoTooltipCustomContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoTooltipCustomContentComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " TemplateRef binding\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("tooltip", _r0);
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipCustomContentComponent;
}());
exports.DemoTooltipCustomContentComponent = DemoTooltipCustomContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipCustomContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-custom-content',
                templateUrl: './custom-content.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "1K/V":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/placement/placement.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipPlacementComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipPlacementComponent = /** @class */ (function () {
    function DemoTooltipPlacementComponent() {
    }
    DemoTooltipPlacementComponent.ɵfac = function DemoTooltipPlacementComponent_Factory(t) { return new (t || DemoTooltipPlacementComponent)(); };
    DemoTooltipPlacementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipPlacementComponent, selectors: [["demo-tooltip-placement"]], decls: 10, vars: 0, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "top", 1, "btn", "btn-default", "btn-secondary", "mb-2"], ["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "right", 1, "btn", "btn-default", "btn-secondary", "mb-2"], ["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "auto", 1, "btn", "btn-default", "btn-secondary", "mb-2"], ["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "left", 1, "btn", "btn-default", "btn-secondary", "mb-2"], ["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "bottom", 1, "btn", "btn-default", "btn-secondary", "mb-2"]], template: function DemoTooltipPlacementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Tooltip on top\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " Tooltip on right\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, " Tooltip auto\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵtext(7, " Tooltip on left\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵtext(9, " Tooltip on bottom\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipPlacementComponent;
}());
exports.DemoTooltipPlacementComponent = DemoTooltipPlacementComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipPlacementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-placement',
                templateUrl: './placement.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "4tqV":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/delay/delay.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipDelayComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipDelayComponent = /** @class */ (function () {
    function DemoTooltipDelayComponent() {
    }
    DemoTooltipDelayComponent.ɵfac = function DemoTooltipDelayComponent_Factory(t) { return new (t || DemoTooltipDelayComponent)(); };
    DemoTooltipDelayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipDelayComponent, selectors: [["demo-tooltip-delay"]], decls: 2, vars: 1, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary", 3, "delay"]], template: function DemoTooltipDelayComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Tooltip with 0.5sec delay\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("delay", 500);
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipDelayComponent;
}());
exports.DemoTooltipDelayComponent = DemoTooltipDelayComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipDelayComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-delay',
                templateUrl: './delay.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "6Pyj":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/container/container.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"position: relative; overflow: hidden; padding-top: 10px;\">\r\n  <div class=\"col-xs-12 col-12\">\r\n    <button type=\"button\" class=\"btn btn-danger\"\r\n            tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n      Default tooltip\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-success\"\r\n            tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n            container=\"body\">\r\n      Tooltip appended to body\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "7joK":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/triggers-custom/triggers-custom.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-triggers-custom',\r\n  templateUrl: './triggers-custom.html'\r\n})\r\nexport class DemoTooltipTriggersCustomComponent {}\r\n");

/***/ }),

/***/ "8KEe":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/basic/basic.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipBasicComponent = /** @class */ (function () {
    function DemoTooltipBasicComponent() {
    }
    DemoTooltipBasicComponent.ɵfac = function DemoTooltipBasicComponent_Factory(t) { return new (t || DemoTooltipBasicComponent)(); };
    DemoTooltipBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipBasicComponent, selectors: [["demo-tooltip-basic"]], decls: 2, vars: 0, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary"]], template: function DemoTooltipBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Simple demo\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipBasicComponent;
}());
exports.DemoTooltipBasicComponent = DemoTooltipBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "AN4n":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/delay/delay.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-delay',\r\n  templateUrl: './delay.html'\r\n})\r\nexport class DemoTooltipDelayComponent {}\r\n");

/***/ }),

/***/ "CXLt":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/dynamic-html/dynamic-html.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #popTemplate>Here we go: <div [innerHtml]=\"html\"></div></ng-template>\r\n<button type=\"button\" class=\"btn btn-success\"\r\n        [tooltip]=\"popTemplate\">\r\n  Show me tooltip with html\r\n</button>\r\n");

/***/ }),

/***/ "Fp1X":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/config/config.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipConfigComponent = exports.getAlertConfig = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var tooltip_1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
// such override allows to keep some initial values
function getAlertConfig() {
    return Object.assign(new tooltip_1.TooltipConfig(), {
        placement: 'right',
        container: 'body',
        delay: 500
    });
}
exports.getAlertConfig = getAlertConfig;
var DemoTooltipConfigComponent = /** @class */ (function () {
    function DemoTooltipConfigComponent() {
    }
    DemoTooltipConfigComponent.ɵfac = function DemoTooltipConfigComponent_Factory(t) { return new (t || DemoTooltipConfigComponent)(); };
    DemoTooltipConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipConfigComponent, selectors: [["demo-tooltip-config"]], features: [i0.ɵɵProvidersFeature([{ provide: tooltip_1.TooltipConfig, useFactory: getAlertConfig }])], decls: 2, vars: 0, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-primary"]], template: function DemoTooltipConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Preconfigured tooltip\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipConfigComponent;
}());
exports.DemoTooltipConfigComponent = DemoTooltipConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-config',
                templateUrl: './config.html',
                providers: [{ provide: tooltip_1.TooltipConfig, useFactory: getAlertConfig }]
            }]
    }], null, null); })();


/***/ }),

/***/ "HV50":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/adaptive-position/adaptive-position.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-adaptive-position',\r\n  templateUrl: './adaptive-position.html'\r\n})\r\nexport class DemoTooltipAdaptivePositionComponent {}\r\n");

/***/ }),

/***/ "HlBl":
/*!***********************************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/triggers-custom/triggers-custom.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipTriggersCustomComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipTriggersCustomComponent = /** @class */ (function () {
    function DemoTooltipTriggersCustomComponent() {
    }
    DemoTooltipTriggersCustomComponent.ɵfac = function DemoTooltipTriggersCustomComponent_Factory(t) { return new (t || DemoTooltipTriggersCustomComponent)(); };
    DemoTooltipTriggersCustomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipTriggersCustomComponent, selectors: [["demo-tooltip-triggers-custom"]], decls: 11, vars: 0, consts: [[1, "row"], [1, "col-xs-6", "col-6"], ["type", "button", "tooltip", "I will hide on click", "triggers", "mouseenter:click", 1, "btn", "btn-info"], ["type", "button", "tooltip", "I will hide on click", "triggers", "click", 1, "btn", "btn-info"]], template: function DemoTooltipTriggersCustomComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "Desktop");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, " Hover over me! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Mobile");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 3);
            i0.ɵɵtext(10, " Click on me! ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipTriggersCustomComponent;
}());
exports.DemoTooltipTriggersCustomComponent = DemoTooltipTriggersCustomComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipTriggersCustomComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-triggers-custom',
                templateUrl: './triggers-custom.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "J71g":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/basic/basic.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoTooltipBasicComponent {}\r\n");

/***/ }),

/***/ "JLzS":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/triggers-manual/triggers-manual.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-triggers-manual',\r\n  templateUrl: './triggers-manual.html'\r\n})\r\nexport class DemoTooltipTriggersManualComponent {}\r\n");

/***/ }),

/***/ "JMgA":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/dynamic-html/dynamic-html.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-dynamic-html',\r\n  templateUrl: './dynamic-html.html'\r\n})\r\nexport class DemoTooltipDynamicHtmlComponent {\r\n  html = `<span class=\"btn-block btn-danger well-sm\">Never trust not sanitized HTML!!!</span>`;\r\n}\r\n");

/***/ }),

/***/ "JQVL":
/*!***********************************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/triggers-manual/triggers-manual.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipTriggersManualComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipTriggersManualComponent = /** @class */ (function () {
    function DemoTooltipTriggersManualComponent() {
    }
    DemoTooltipTriggersManualComponent.ɵfac = function DemoTooltipTriggersManualComponent_Factory(t) { return new (t || DemoTooltipTriggersManualComponent)(); };
    DemoTooltipTriggersManualComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipTriggersManualComponent, selectors: [["demo-tooltip-triggers-manual"]], decls: 10, vars: 0, consts: [["tooltip", "Hello there! I was triggered manually", "triggers", ""], ["pop", "bs-tooltip"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"]], template: function DemoTooltipTriggersManualComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "span", 0, 1);
            i0.ɵɵtext(3, " This text has attached tooltip ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function DemoTooltipTriggersManualComponent_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(2); return _r0.show(); });
            i0.ɵɵtext(5, " Show\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function DemoTooltipTriggersManualComponent_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(2); return _r0.hide(); });
            i0.ɵɵtext(7, " Hide\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function DemoTooltipTriggersManualComponent_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(2); return _r0.toggle(); });
            i0.ɵɵtext(9, " Toggle\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipTriggersManualComponent;
}());
exports.DemoTooltipTriggersManualComponent = DemoTooltipTriggersManualComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipTriggersManualComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-triggers-manual',
                templateUrl: './triggers-manual.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "JVFR":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/dismiss/dismiss.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-success\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        triggers=\"focus\">\r\n  Dismissible tooltip\r\n</button>\r\n\r\n");

/***/ }),

/***/ "KXCT":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/dismiss/dismiss.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipDismissComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipDismissComponent = /** @class */ (function () {
    function DemoTooltipDismissComponent() {
    }
    DemoTooltipDismissComponent.ɵfac = function DemoTooltipDismissComponent_Factory(t) { return new (t || DemoTooltipDismissComponent)(); };
    DemoTooltipDismissComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipDismissComponent, selectors: [["demo-tooltip-dismiss"]], decls: 2, vars: 0, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "triggers", "focus", 1, "btn", "btn-success"]], template: function DemoTooltipDismissComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Dismissible tooltip\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipDismissComponent;
}());
exports.DemoTooltipDismissComponent = DemoTooltipDismissComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipDismissComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-dismiss',
                templateUrl: './dismiss.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "L32f":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/tooltip-section.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var tooltip_section_list_1 = __webpack_require__(/*! ./tooltip-section.list */ "+NeY");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var TooltipSectionComponent = /** @class */ (function () {
    function TooltipSectionComponent() {
        this.name = 'Tooltip';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/tooltip';
        this.componentContent = tooltip_section_list_1.demoComponentContent;
    }
    TooltipSectionComponent.ɵfac = function TooltipSectionComponent_Factory(t) { return new (t || TooltipSectionComponent)(); };
    TooltipSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipSectionComponent, selectors: [["tooltip-section"]], decls: 4, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function TooltipSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "Inspired by the excellent Tipsy jQuery plugin written by Jason Frame. Tooltips are an updated version, which don\u2019t rely on images, use CSS3 for animations, and much more.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2, changeDetection: 0 });
    return TooltipSectionComponent;
}());
exports.TooltipSectionComponent = TooltipSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'tooltip-section',
                templateUrl: './tooltip-section.component.html',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();


/***/ }),

/***/ "LOnx":
/*!*********************************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/styling-global/styling-global.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipStylingGlobalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipStylingGlobalComponent = /** @class */ (function () {
    function DemoTooltipStylingGlobalComponent() {
    }
    DemoTooltipStylingGlobalComponent.ɵfac = function DemoTooltipStylingGlobalComponent_Factory(t) { return new (t || DemoTooltipStylingGlobalComponent)(); };
    DemoTooltipStylingGlobalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipStylingGlobalComponent, selectors: [["demo-tooltip-styling-global"]], decls: 2, vars: 0, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-success"]], template: function DemoTooltipStylingGlobalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " I was globally styled\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], styles: ["\n  .tooltip {\n    background-color: #7B1FA2;\n    color: #fff;\n  }\n  .tooltip>.arrow:after {\n    border-top-color: #7B1FA2 !important;\n  }\n"], encapsulation: 2 });
    return DemoTooltipStylingGlobalComponent;
}());
exports.DemoTooltipStylingGlobalComponent = DemoTooltipStylingGlobalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipStylingGlobalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-styling-global',
                templateUrl: './styling-global.html',
                encapsulation: core_1.ViewEncapsulation.None
            }]
    }], null, null); })();


/***/ }),

/***/ "Pfxt":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/basic/basic.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n  Simple demo\r\n</button>\r\n\r\n");

/***/ }),

/***/ "SQBb":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/styling-local/styling-local.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-info\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n  I have component level styling\r\n</button>\r\n");

/***/ }),

/***/ "Segs":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/triggers-manual/triggers-manual.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  <span tooltip=\"Hello there! I was triggered manually\"\r\n        triggers=\"\" #pop=\"bs-tooltip\">\r\n  This text has attached tooltip\r\n  </span>\r\n</p>\r\n\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"pop.show()\">\r\n  Show\r\n</button>\r\n<button type=\"button\" class=\"btn btn-warning\" (click)=\"pop.hide()\">\r\n  Hide\r\n</button>\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"pop.toggle()\">\r\n  Toggle\r\n</button>\r\n\r\n");

/***/ }),

/***/ "T61M":
/*!***************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/class/class.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipClassComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipClassComponent = /** @class */ (function () {
    function DemoTooltipClassComponent() {
    }
    DemoTooltipClassComponent.ɵfac = function DemoTooltipClassComponent_Factory(t) { return new (t || DemoTooltipClassComponent)(); };
    DemoTooltipClassComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipClassComponent, selectors: [["demo-tooltip-class"]], decls: 2, vars: 0, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "containerClass", "customClass", 1, "btn", "btn-primary"]], template: function DemoTooltipClassComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Demo with custom class\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipClassComponent;
}());
exports.DemoTooltipClassComponent = DemoTooltipClassComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipClassComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-class',
                templateUrl: './class.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "TPTc":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/config/config.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n  Preconfigured tooltip\r\n</button>\r\n");

/***/ }),

/***/ "TSBC":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/custom-content/custom-content.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-custom-content',\r\n  templateUrl: './custom-content.html'\r\n})\r\nexport class DemoTooltipCustomContentComponent {\r\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\r\n}\r\n");

/***/ }),

/***/ "UDI6":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/adaptive-position/adaptive-position.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-default btn-secondary mb-2\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        [adaptivePosition]=\"false\"\r\n        placement=\"top\">\r\n  Tooltip on top\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary mb-2\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        [adaptivePosition]=\"false\"\r\n        placement=\"right\">\r\n  Tooltip on right\r\n</button>\r\n");

/***/ }),

/***/ "UeNK":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demo-tooltip.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var tooltip_1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var tooltip_section_component_1 = __webpack_require__(/*! ./tooltip-section.component */ "L32f");
var index_1 = __webpack_require__(/*! ./demos/index */ "g5qc");
var demo_tooltip_routes_1 = __webpack_require__(/*! ./demo-tooltip.routes */ "X166");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/adaptive-position/adaptive-position */ "janv");
var i2 = __webpack_require__(/*! ./demos/basic/basic */ "8KEe");
var i3 = __webpack_require__(/*! ./demos/class/class */ "T61M");
var i4 = __webpack_require__(/*! ./demos/config/config */ "Fp1X");
var i5 = __webpack_require__(/*! ./demos/container/container */ "Ydjz");
var i6 = __webpack_require__(/*! ./demos/custom-content/custom-content */ "0beS");
var i7 = __webpack_require__(/*! ./demos/delay/delay */ "4tqV");
var i8 = __webpack_require__(/*! ./demos/dismiss/dismiss */ "KXCT");
var i9 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "ftdI");
var i10 = __webpack_require__(/*! ./demos/dynamic-html/dynamic-html */ "ji2l");
var i11 = __webpack_require__(/*! ./demos/placement/placement */ "1K/V");
var i12 = __webpack_require__(/*! ./demos/styling-global/styling-global */ "LOnx");
var i13 = __webpack_require__(/*! ./demos/styling-local/styling-local */ "yHxN");
var i14 = __webpack_require__(/*! ./demos/triggers-custom/triggers-custom */ "HlBl");
var i15 = __webpack_require__(/*! ./demos/triggers-manual/triggers-manual */ "JQVL");
var i16 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var i17 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoTooltipModule = /** @class */ (function () {
    function DemoTooltipModule() {
    }
    DemoTooltipModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoTooltipModule });
    DemoTooltipModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoTooltipModule_Factory(t) { return new (t || DemoTooltipModule)(); }, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                tooltip_1.TooltipModule.forRoot(),
                router_1.RouterModule.forChild(demo_tooltip_routes_1.routes)
            ]] });
    return DemoTooltipModule;
}());
exports.DemoTooltipModule = DemoTooltipModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoTooltipModule, { declarations: [tooltip_section_component_1.TooltipSectionComponent, i1.DemoTooltipAdaptivePositionComponent, i2.DemoTooltipBasicComponent, i3.DemoTooltipClassComponent, i4.DemoTooltipConfigComponent, i5.DemoTooltipContainerComponent, i6.DemoTooltipCustomContentComponent, i7.DemoTooltipDelayComponent, i8.DemoTooltipDismissComponent, i9.DemoTooltipDynamicComponent, i10.DemoTooltipDynamicHtmlComponent, i11.DemoTooltipPlacementComponent, i12.DemoTooltipStylingGlobalComponent, i13.DemoTooltipStylingLocalComponent, i14.DemoTooltipTriggersCustomComponent, i15.DemoTooltipTriggersManualComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i16.TooltipModule, i17.RouterModule], exports: [tooltip_section_component_1.TooltipSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    tooltip_section_component_1.TooltipSectionComponent
                ], index_1.DEMO_COMPONENTS),
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    tooltip_1.TooltipModule.forRoot(),
                    router_1.RouterModule.forChild(demo_tooltip_routes_1.routes)
                ],
                exports: [tooltip_section_component_1.TooltipSectionComponent],
                entryComponents: __spreadArrays(index_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "W7Pu":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/class/class.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-class',\r\n  templateUrl: './class.html'\r\n})\r\nexport class DemoTooltipClassComponent {}\r\n");

/***/ }),

/***/ "X166":
/*!*****************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demo-tooltip.routes.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var tooltip_section_component_1 = __webpack_require__(/*! ./tooltip-section.component */ "L32f");
exports.routes = [{ path: '', component: tooltip_section_component_1.TooltipSectionComponent }];


/***/ }),

/***/ "Ydjz":
/*!***********************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/container/container.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipContainerComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipContainerComponent = /** @class */ (function () {
    function DemoTooltipContainerComponent() {
    }
    DemoTooltipContainerComponent.ɵfac = function DemoTooltipContainerComponent_Factory(t) { return new (t || DemoTooltipContainerComponent)(); };
    DemoTooltipContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipContainerComponent, selectors: [["demo-tooltip-container"]], decls: 6, vars: 0, consts: [[1, "row", 2, "position", "relative", "overflow", "hidden", "padding-top", "10px"], [1, "col-xs-12", "col-12"], ["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-danger"], ["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "container", "body", 1, "btn", "btn-success"]], template: function DemoTooltipContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵtext(3, " Default tooltip ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵtext(5, " Tooltip appended to body ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipContainerComponent;
}());
exports.DemoTooltipContainerComponent = DemoTooltipContainerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipContainerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-container',
                templateUrl: './container.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "YyOb":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/container/container.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-container',\r\n  templateUrl: './container.html'\r\n})\r\nexport class DemoTooltipContainerComponent {}\r\n");

/***/ }),

/***/ "a7kt":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/triggers-custom/triggers-custom.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\">\r\n  <div class=\"col-xs-6 col-6\">\r\n    <p>Desktop</p>\r\n    <button type=\"button\" class=\"btn btn-info\"\r\n            tooltip=\"I will hide on click\"\r\n            triggers=\"mouseenter:click\">\r\n      Hover over me!\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"col-xs-6 col-6\">\r\n    <p>Mobile</p>\r\n    <button type=\"button\" class=\"btn btn-info\"\r\n            tooltip=\"I will hide on click\"\r\n            triggers=\"click\">\r\n      Click on me!\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "axmm":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/dismiss/dismiss.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-dismiss',\r\n  templateUrl: './dismiss.html'\r\n})\r\nexport class DemoTooltipDismissComponent {}\r\n");

/***/ }),

/***/ "fYZe":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/dynamic/dynamic.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-info\" [tooltip]=\"content\">\r\n  Simple binding\r\n</button>\r\n");

/***/ }),

/***/ "ftdI":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/dynamic/dynamic.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipDynamicComponent = /** @class */ (function () {
    function DemoTooltipDynamicComponent() {
        this.content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
    }
    DemoTooltipDynamicComponent.ɵfac = function DemoTooltipDynamicComponent_Factory(t) { return new (t || DemoTooltipDynamicComponent)(); };
    DemoTooltipDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipDynamicComponent, selectors: [["demo-tooltip-dynamic"]], decls: 2, vars: 1, consts: [["type", "button", 1, "btn", "btn-info", 3, "tooltip"]], template: function DemoTooltipDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Simple binding\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("tooltip", ctx.content);
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipDynamicComponent;
}());
exports.DemoTooltipDynamicComponent = DemoTooltipDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-dynamic',
                templateUrl: './dynamic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "g5qc":
/*!*********************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var adaptive_position_1 = __webpack_require__(/*! ./adaptive-position/adaptive-position */ "janv");
var basic_1 = __webpack_require__(/*! ./basic/basic */ "8KEe");
var class_1 = __webpack_require__(/*! ./class/class */ "T61M");
var config_1 = __webpack_require__(/*! ./config/config */ "Fp1X");
var container_1 = __webpack_require__(/*! ./container/container */ "Ydjz");
var custom_content_1 = __webpack_require__(/*! ./custom-content/custom-content */ "0beS");
var delay_1 = __webpack_require__(/*! ./delay/delay */ "4tqV");
var dismiss_1 = __webpack_require__(/*! ./dismiss/dismiss */ "KXCT");
var dynamic_1 = __webpack_require__(/*! ./dynamic/dynamic */ "ftdI");
var dynamic_html_1 = __webpack_require__(/*! ./dynamic-html/dynamic-html */ "ji2l");
var placement_1 = __webpack_require__(/*! ./placement/placement */ "1K/V");
var styling_global_1 = __webpack_require__(/*! ./styling-global/styling-global */ "LOnx");
var styling_local_1 = __webpack_require__(/*! ./styling-local/styling-local */ "yHxN");
var triggers_custom_1 = __webpack_require__(/*! ./triggers-custom/triggers-custom */ "HlBl");
var triggers_manual_1 = __webpack_require__(/*! ./triggers-manual/triggers-manual */ "JQVL");
exports.DEMO_COMPONENTS = [
    adaptive_position_1.DemoTooltipAdaptivePositionComponent,
    basic_1.DemoTooltipBasicComponent,
    class_1.DemoTooltipClassComponent,
    config_1.DemoTooltipConfigComponent,
    container_1.DemoTooltipContainerComponent,
    custom_content_1.DemoTooltipCustomContentComponent,
    delay_1.DemoTooltipDelayComponent,
    dismiss_1.DemoTooltipDismissComponent,
    dynamic_1.DemoTooltipDynamicComponent,
    dynamic_html_1.DemoTooltipDynamicHtmlComponent,
    placement_1.DemoTooltipPlacementComponent,
    styling_global_1.DemoTooltipStylingGlobalComponent,
    styling_local_1.DemoTooltipStylingLocalComponent,
    triggers_custom_1.DemoTooltipTriggersCustomComponent,
    triggers_manual_1.DemoTooltipTriggersManualComponent
];


/***/ }),

/***/ "iJQM":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/delay/delay.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-primary\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" [delay]=\"500\">\r\n  Tooltip with 0.5sec delay\r\n</button>\r\n\r\n");

/***/ }),

/***/ "jG2G":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/placement/placement.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-placement',\r\n  templateUrl: './placement.html'\r\n})\r\nexport class DemoTooltipPlacementComponent {}\r\n");

/***/ }),

/***/ "janv":
/*!***************************************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/adaptive-position/adaptive-position.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipAdaptivePositionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipAdaptivePositionComponent = /** @class */ (function () {
    function DemoTooltipAdaptivePositionComponent() {
    }
    DemoTooltipAdaptivePositionComponent.ɵfac = function DemoTooltipAdaptivePositionComponent_Factory(t) { return new (t || DemoTooltipAdaptivePositionComponent)(); };
    DemoTooltipAdaptivePositionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipAdaptivePositionComponent, selectors: [["demo-tooltip-adaptive-position"]], decls: 4, vars: 2, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "top", 1, "btn", "btn-default", "btn-secondary", "mb-2", 3, "adaptivePosition"], ["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "placement", "right", 1, "btn", "btn-default", "btn-secondary", "mb-2", 3, "adaptivePosition"]], template: function DemoTooltipAdaptivePositionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " Tooltip on top\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " Tooltip on right\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("adaptivePosition", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("adaptivePosition", false);
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipAdaptivePositionComponent;
}());
exports.DemoTooltipAdaptivePositionComponent = DemoTooltipAdaptivePositionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipAdaptivePositionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-adaptive-position',
                templateUrl: './adaptive-position.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ji2l":
/*!*****************************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/dynamic-html/dynamic-html.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipDynamicHtmlComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
function DemoTooltipDynamicHtmlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Here we go: ");
    i0.ɵɵelement(1, "div", 2);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r1.html, i0.ɵɵsanitizeHtml);
} }
var DemoTooltipDynamicHtmlComponent = /** @class */ (function () {
    function DemoTooltipDynamicHtmlComponent() {
        this.html = "<span class=\"btn-block btn-danger well-sm\">Never trust not sanitized HTML!!!</span>";
    }
    DemoTooltipDynamicHtmlComponent.ɵfac = function DemoTooltipDynamicHtmlComponent_Factory(t) { return new (t || DemoTooltipDynamicHtmlComponent)(); };
    DemoTooltipDynamicHtmlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipDynamicHtmlComponent, selectors: [["demo-tooltip-dynamic-html"]], decls: 4, vars: 1, consts: [["popTemplate", ""], ["type", "button", 1, "btn", "btn-success", 3, "tooltip"], [3, "innerHtml"]], template: function DemoTooltipDynamicHtmlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DemoTooltipDynamicHtmlComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵtext(3, " Show me tooltip with html\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("tooltip", _r0);
        } }, directives: [i1.TooltipDirective], encapsulation: 2 });
    return DemoTooltipDynamicHtmlComponent;
}());
exports.DemoTooltipDynamicHtmlComponent = DemoTooltipDynamicHtmlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipDynamicHtmlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-dynamic-html',
                templateUrl: './dynamic-html.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "mJes":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/dynamic/dynamic.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-dynamic',\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoTooltipDynamicComponent {\r\n  content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\r\n}\r\n");

/***/ }),

/***/ "oyw1":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/custom-content/custom-content.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #tolTemplate>Just another: {{content}}</ng-template>\r\n<button type=\"button\" class=\"btn btn-warning\" [tooltip]=\"tolTemplate\">\r\n  TemplateRef binding\r\n</button>\r\n");

/***/ }),

/***/ "qHY7":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/styling-local/styling-local.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tooltip-styling-local',\r\n  templateUrl: './styling-local.html',\r\n  /* tslint:disable no-unused-css*/\r\n  styles: [\r\n    `\r\n      :host >>> .tooltip-inner {\r\n        background-color: #009688;\r\n        color: #fff;\r\n      }\r\n      :host >>> .tooltip.top .tooltip-arrow:before,\r\n      :host >>> .tooltip.top .tooltip-arrow {\r\n        border-top-color: #009688;\r\n      }\r\n    `\r\n  ]\r\n})\r\nexport class DemoTooltipStylingLocalComponent {}\r\n");

/***/ }),

/***/ "s4Zf":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/docs/usage.md ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { TooltipModule } from 'bao-tran-angular/tooltip';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { TooltipModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [TooltipModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "tOI7":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/config/config.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { TooltipConfig } from 'bao-tran-angular/tooltip';\n\n// such override allows to keep some initial values\n\nexport function getAlertConfig(): TooltipConfig {\n  return Object.assign(new TooltipConfig(), {\n    placement: 'right',\n    container: 'body',\n    delay: 500\n  });\n}\n\n@Component({\n  selector: 'demo-tooltip-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]\n})\nexport class DemoTooltipConfigComponent {}\n");

/***/ }),

/***/ "vvOX":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+tooltip/demos/placement/placement.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-default btn-secondary mb-2\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        placement=\"top\">\r\n  Tooltip on top\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary mb-2\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        placement=\"right\">\r\n  Tooltip on right\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary mb-2\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        placement=\"auto\">\r\n  Tooltip auto\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary mb-2\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        placement=\"left\">\r\n  Tooltip on left\r\n</button>\r\n\r\n<button type=\"button\" class=\"btn btn-default btn-secondary mb-2\"\r\n        tooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n        placement=\"bottom\">\r\n  Tooltip on bottom\r\n</button>\r\n");

/***/ }),

/***/ "yHxN":
/*!*******************************************************************************!*\
  !*** ./demo/src/app/components/+tooltip/demos/styling-local/styling-local.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoTooltipStylingLocalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/tooltip */ "J916");
var DemoTooltipStylingLocalComponent = /** @class */ (function () {
    function DemoTooltipStylingLocalComponent() {
    }
    DemoTooltipStylingLocalComponent.ɵfac = function DemoTooltipStylingLocalComponent_Factory(t) { return new (t || DemoTooltipStylingLocalComponent)(); };
    DemoTooltipStylingLocalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoTooltipStylingLocalComponent, selectors: [["demo-tooltip-styling-local"]], decls: 2, vars: 0, consts: [["type", "button", "tooltip", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-info"]], template: function DemoTooltipStylingLocalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, " I have component level styling\n");
            i0.ɵɵelementEnd();
        } }, directives: [i1.TooltipDirective], styles: ["[_nghost-%COMP%]     .tooltip-inner {\n        background-color: #009688;\n        color: #fff;\n      }\n      [_nghost-%COMP%]     .tooltip.top .tooltip-arrow:before, [_nghost-%COMP%]     .tooltip.top .tooltip-arrow {\n        border-top-color: #009688;\n      }"] });
    return DemoTooltipStylingLocalComponent;
}());
exports.DemoTooltipStylingLocalComponent = DemoTooltipStylingLocalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoTooltipStylingLocalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-tooltip-styling-local',
                templateUrl: './styling-local.html',
                /* tslint:disable no-unused-css*/
                styles: [
                    "\n      :host >>> .tooltip-inner {\n        background-color: #009688;\n        color: #fff;\n      }\n      :host >>> .tooltip.top .tooltip-arrow:before,\n      :host >>> .tooltip.top .tooltip-arrow {\n        border-top-color: #009688;\n      }\n    "
                ]
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=components-tooltip-demo-tooltip-module.js.map