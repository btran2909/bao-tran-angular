exports.ids = ["components-carousel-demo-carousel-module"];
exports.modules = {

/***/ "+O2a":
/*!**********************************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/multilist-from-index/multilist-from-index.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselMultilistFromIndexComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoCarouselMultilistFromIndexComponent_slide_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
} }
var DemoCarouselMultilistFromIndexComponent = /** @class */ (function () {
    function DemoCarouselMultilistFromIndexComponent() {
        this.itemsPerSlide = 5;
        this.singleSlideOffset = true;
        this.slides = [
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' },
            { image: 'assets/images/nature/3.jpg' },
            { image: 'assets/images/nature/4.jpg' },
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/6.jpg' },
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/8.jpg' },
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' }
        ];
    }
    DemoCarouselMultilistFromIndexComponent.ɵfac = function DemoCarouselMultilistFromIndexComponent_Factory(t) { return new (t || DemoCarouselMultilistFromIndexComponent)(); };
    DemoCarouselMultilistFromIndexComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselMultilistFromIndexComponent, selectors: [["demo-carousel-multilist-from-index"]], decls: 4, vars: 5, consts: [[3, "itemsPerSlide", "singleSlideOffset", "startFromIndex", "interval"], [4, "ngFor", "ngForOf"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselMultilistFromIndexComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " You can set specific index to start from it\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "carousel", 0);
            i0.ɵɵtemplate(3, DemoCarouselMultilistFromIndexComponent_slide_3_Template, 5, 2, "slide", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("itemsPerSlide", ctx.itemsPerSlide)("singleSlideOffset", ctx.singleSlideOffset)("startFromIndex", 6)("interval", false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselMultilistFromIndexComponent;
}());
exports.DemoCarouselMultilistFromIndexComponent = DemoCarouselMultilistFromIndexComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselMultilistFromIndexComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-multilist-from-index',
                templateUrl: './multilist-from-index.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "/AR4":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/slide-changed-event/slide-changed-event.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-slide-changed-event',\r\n  templateUrl: './slide-changed-event.html'\r\n})\r\nexport class DemoCarouselSlideChangedEventComponent {\r\n  slideChangeMessage = '';\r\n\r\n  slides = [\r\n    {image: 'assets/images/nature/7.jpg'},\r\n    {image: 'assets/images/nature/5.jpg'},\r\n    {image: 'assets/images/nature/3.jpg'}\r\n  ];\r\n\r\n  log(event: number) {\r\n    this.slideChangeMessage = `Slide has been switched: ${event}`;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "09NJ":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/animated/animated.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouseAnimatedComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var DemoCarouseAnimatedComponent = /** @class */ (function () {
    function DemoCarouseAnimatedComponent() {
    }
    DemoCarouseAnimatedComponent.ɵfac = function DemoCarouseAnimatedComponent_Factory(t) { return new (t || DemoCarouseAnimatedComponent)(); };
    DemoCarouseAnimatedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouseAnimatedComponent, selectors: [["demo-carousel-animated"]], decls: 7, vars: 1, consts: [[3, "isAnimated"], ["src", "assets/images/nature/1.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/2.jpg", "alt", "second slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/3.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"]], template: function DemoCarouseAnimatedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵelementStart(1, "slide");
            i0.ɵɵelement(2, "img", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "slide");
            i0.ɵɵelement(4, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "slide");
            i0.ɵɵelement(6, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("isAnimated", true);
        } }, directives: [i1.CarouselComponent, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouseAnimatedComponent;
}());
exports.DemoCarouseAnimatedComponent = DemoCarouseAnimatedComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouseAnimatedComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-animated',
                templateUrl: './animated.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "3DN9":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/custom-content/custom-content.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel>\r\n  <slide>\r\n    <div class=\"text-center py-5 bg-dark text-white\">\r\n      <h2>First custom content</h2>\r\n      <div class=\"lead\">\r\n        <h3>First slide label</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n      </div>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <div class=\"text-center py-5 bg-dark text-white\">\r\n      <h2>Second custom content</h2>\r\n      <div class=\"lead\">\r\n        <h3>Second slide label</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n      </div>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <div class=\"text-center py-5 bg-dark text-white\">\r\n      <h2>Third custom content</h2>\r\n      <div class=\"lead\">\r\n        <h3>Third slide label</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum. </p>\r\n      </div>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "5J+L":
/*!****************************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/disable-indicator/disable-indicator.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselDisableIndicatorComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoCarouselDisableIndicatorComponent_slide_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(slide_r1.text);
} }
var DemoCarouselDisableIndicatorComponent = /** @class */ (function () {
    function DemoCarouselDisableIndicatorComponent() {
        this.slides = [
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/4.jpg' },
            { image: 'assets/images/nature/3.jpg' }
        ];
        this.showIndicator = true;
    }
    DemoCarouselDisableIndicatorComponent.prototype.switchIndicator = function () {
        this.showIndicator = !this.showIndicator;
    };
    DemoCarouselDisableIndicatorComponent.ɵfac = function DemoCarouselDisableIndicatorComponent_Factory(t) { return new (t || DemoCarouselDisableIndicatorComponent)(); };
    DemoCarouselDisableIndicatorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselDisableIndicatorComponent, selectors: [["demo-carousel-disable-indicator"]], decls: 6, vars: 2, consts: [[3, "showIndicators"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselDisableIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵtemplate(1, DemoCarouselDisableIndicatorComponent_slide_1_Template, 7, 3, "slide", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function DemoCarouselDisableIndicatorComponent_Template_button_click_4_listener() { return ctx.switchIndicator(); });
            i0.ɵɵtext(5, "Enable/Disable Indicator ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("showIndicators", ctx.showIndicator);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselDisableIndicatorComponent;
}());
exports.DemoCarouselDisableIndicatorComponent = DemoCarouselDisableIndicatorComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselDisableIndicatorComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-disable-indicator',
                templateUrl: './disable-indicator.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "5clo":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/animated/animated.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-animated',\r\n  templateUrl: './animated.html'\r\n})\r\nexport class DemoCarouseAnimatedComponent {}\r\n");

/***/ }),

/***/ "6kD+":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-multilist-indicators-by-chunk',\r\n  templateUrl: './multilist-indicators-by-chunk.html'\r\n})\r\nexport class DemoCarouselMultilistIndicatorsByChunkComponent {\r\n  itemsPerSlide = 3;\r\n\r\n  slides = [\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'},\r\n    {image: 'assets/images/nature/3.jpg'},\r\n    {image: 'assets/images/nature/4.jpg'},\r\n    {image: 'assets/images/nature/5.jpg'},\r\n    {image: 'assets/images/nature/6.jpg'},\r\n    {image: 'assets/images/nature/7.jpg'},\r\n    {image: 'assets/images/nature/8.jpg'},\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'}\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "9XLM":
/*!************************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/disable-looping/disable-looping.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselDisableLoopingComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
var i3 = __webpack_require__(/*! @angular/forms */ "3Pt+");
function DemoCarouselDisableLoopingComponent_slide_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(slide_r1.text);
} }
var DemoCarouselDisableLoopingComponent = /** @class */ (function () {
    function DemoCarouselDisableLoopingComponent() {
        this.slides = [
            { image: 'assets/images/nature/8.jpg' },
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/6.jpg' }
        ];
        this.noWrapSlides = false;
    }
    DemoCarouselDisableLoopingComponent.ɵfac = function DemoCarouselDisableLoopingComponent_Factory(t) { return new (t || DemoCarouselDisableLoopingComponent)(); };
    DemoCarouselDisableLoopingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselDisableLoopingComponent, selectors: [["demo-carousel-disable-looping"]], decls: 8, vars: 3, consts: [[3, "noWrap"], [4, "ngFor", "ngForOf"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselDisableLoopingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵtemplate(1, DemoCarouselDisableLoopingComponent_slide_1_Template, 7, 3, "slide", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "label");
            i0.ɵɵelementStart(6, "input", 3);
            i0.ɵɵlistener("ngModelChange", function DemoCarouselDisableLoopingComponent_Template_input_ngModelChange_6_listener($event) { return ctx.noWrapSlides = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(7, "Disable Slide Looping");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("noWrap", ctx.noWrapSlides);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.noWrapSlides);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselDisableLoopingComponent;
}());
exports.DemoCarouselDisableLoopingComponent = DemoCarouselDisableLoopingComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselDisableLoopingComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-disable-looping',
                templateUrl: './disable-looping.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "AsQJ":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/custom-content/custom-content.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselCustomContentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var DemoCarouselCustomContentComponent = /** @class */ (function () {
    function DemoCarouselCustomContentComponent() {
    }
    DemoCarouselCustomContentComponent.ɵfac = function DemoCarouselCustomContentComponent_Factory(t) { return new (t || DemoCarouselCustomContentComponent)(); };
    DemoCarouselCustomContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselCustomContentComponent, selectors: [["demo-carousel-custom-content"]], decls: 28, vars: 0, consts: [[1, "text-center", "py-5", "bg-dark", "text-white"], [1, "lead"]], template: function DemoCarouselCustomContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel");
            i0.ɵɵelementStart(1, "slide");
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "h2");
            i0.ɵɵtext(4, "First custom content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 1);
            i0.ɵɵelementStart(6, "h3");
            i0.ɵɵtext(7, "First slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "slide");
            i0.ɵɵelementStart(11, "div", 0);
            i0.ɵɵelementStart(12, "h2");
            i0.ɵɵtext(13, "Second custom content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 1);
            i0.ɵɵelementStart(15, "h3");
            i0.ɵɵtext(16, "Second slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵtext(18, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "slide");
            i0.ɵɵelementStart(20, "div", 0);
            i0.ɵɵelementStart(21, "h2");
            i0.ɵɵtext(22, "Third custom content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 1);
            i0.ɵɵelementStart(24, "h3");
            i0.ɵɵtext(25, "Third slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "p");
            i0.ɵɵtext(27, "Nulla vitae elit libero, a pharetra augue mollis interdum. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.CarouselComponent, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselCustomContentComponent;
}());
exports.DemoCarouselCustomContentComponent = DemoCarouselCustomContentComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselCustomContentComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-custom-content',
                templateUrl: './custom-content.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "BIO1":
/*!*************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/carousel-section.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var carousel_section_list_1 = __webpack_require__(/*! ./carousel-section.list */ "bnVg");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ../../docs/demo-section/demo-section.component */ "ybC4");
var i2 = __webpack_require__(/*! ../../docs/docs-section/docs-section.component */ "oxqd");
var CarouselSectionComponent = /** @class */ (function () {
    function CarouselSectionComponent() {
        this.name = 'Carousel';
        this.src = 'https://github.com/valor-software/bao-tran-angular/tree/development/src/carousel';
        this.componentContent = carousel_section_list_1.demoComponentContent;
    }
    CarouselSectionComponent.ɵfac = function CarouselSectionComponent_Factory(t) { return new (t || CarouselSectionComponent)(); };
    CarouselSectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CarouselSectionComponent, selectors: [["carousel-section"]], decls: 6, vars: 4, consts: [[3, "name", "src", "componentContent"], [3, "content"]], template: function CarouselSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "demo-section", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2, "A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel. ");
            i0.ɵɵelementStart(3, "em");
            i0.ɵɵtext(4, "Nested carousels are not supported.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "docs-section", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("name", ctx.name)("src", ctx.src)("componentContent", ctx.componentContent);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("content", ctx.componentContent);
        } }, directives: [i1.DemoSectionComponent, i2.DocsSectionComponent], encapsulation: 2 });
    return CarouselSectionComponent;
}());
exports.CarouselSectionComponent = CarouselSectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CarouselSectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'carousel-section',
                templateUrl: './carousel-section.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "BxDJ":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/pause-on-hover/pause-on-hover.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-pause-on-hover',\r\n  templateUrl: './pause-on-hover.html'\r\n})\r\nexport class DemoCarouselPauseOnHoverComponent {}\r\n");

/***/ }),

/***/ "Ckqu":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/pause-on-focus/pause-on-focus.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [pauseOnFocus]=\"true\">\r\n  <slide>\r\n    <img src=\"assets/images/nature/4.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/5.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/6.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "Cr54":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist-from-index/multilist-from-index.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-multilist-from-index',\r\n  templateUrl: './multilist-from-index.html'\r\n})\r\nexport class DemoCarouselMultilistFromIndexComponent {\r\n  itemsPerSlide = 5;\r\n  singleSlideOffset = true;\r\n\r\n  slides = [\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'},\r\n    {image: 'assets/images/nature/3.jpg'},\r\n    {image: 'assets/images/nature/4.jpg'},\r\n    {image: 'assets/images/nature/5.jpg'},\r\n    {image: 'assets/images/nature/6.jpg'},\r\n    {image: 'assets/images/nature/7.jpg'},\r\n    {image: 'assets/images/nature/8.jpg'},\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'}\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "DUxm":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/dynamic/dynamic.ts ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-dynamic',\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoCarouselDynamicComponent {\r\n  slides: { image: string }[] = [];\r\n  activeSlideIndex = 0;\r\n\r\n  constructor() {\r\n    for (let i = 0; i < 4; i++) {\r\n      this.addSlide();\r\n    }\r\n  }\r\n\r\n  addSlide(): void {\r\n    this.slides.push({\r\n      image: `assets/images/nature/${this.slides.length % 8 + 1}.jpg`\r\n    });\r\n  }\r\n\r\n  removeSlide(index?: number): void {\r\n    const toRemove = index ? index : this.activeSlideIndex;\r\n    this.slides.splice(toRemove, 1);\r\n  }\r\n}\r\n");

/***/ }),

/***/ "DctB":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/pause-on-focus/pause-on-focus.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselPauseOnFocusComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var DemoCarouselPauseOnFocusComponent = /** @class */ (function () {
    function DemoCarouselPauseOnFocusComponent() {
    }
    DemoCarouselPauseOnFocusComponent.ɵfac = function DemoCarouselPauseOnFocusComponent_Factory(t) { return new (t || DemoCarouselPauseOnFocusComponent)(); };
    DemoCarouselPauseOnFocusComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselPauseOnFocusComponent, selectors: [["demo-carousel-pause-on-focus"]], decls: 22, vars: 1, consts: [[3, "pauseOnFocus"], ["src", "assets/images/nature/4.jpg", "alt", "First slide", 2, "display", "block", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], ["src", "assets/images/nature/5.jpg", "alt", "Second slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/6.jpg", "alt", "Third slide", 2, "display", "block", "width", "100%"]], template: function DemoCarouselPauseOnFocusComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵelementStart(1, "slide");
            i0.ɵɵelement(2, "img", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "h3");
            i0.ɵɵtext(5, "First slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "slide");
            i0.ɵɵelement(9, "img", 3);
            i0.ɵɵelementStart(10, "div", 2);
            i0.ɵɵelementStart(11, "h3");
            i0.ɵɵtext(12, "Second slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "slide");
            i0.ɵɵelement(16, "img", 4);
            i0.ɵɵelementStart(17, "div", 2);
            i0.ɵɵelementStart(18, "h3");
            i0.ɵɵtext(19, "Third slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("pauseOnFocus", true);
        } }, directives: [i1.CarouselComponent, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselPauseOnFocusComponent;
}());
exports.DemoCarouselPauseOnFocusComponent = DemoCarouselPauseOnFocusComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselPauseOnFocusComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-pause-on-focus',
                templateUrl: './pause-on-focus.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "FrrE":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE\r\n</p>\r\n<carousel [itemsPerSlide]=\"itemsPerSlide\"\r\n          [singleSlideOffset]=\"false\"\r\n          [interval]=\"false\"\r\n          [indicatorsByChunk]=\"true\">\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "IxBA":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/pause-on-hover/pause-on-hover.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [noPause]=\"false\">\r\n  <slide>\r\n    <img src=\"assets/images/nature/4.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/5.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/6.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "JcOr":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/docs/usage.md ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// RECOMMENDED\nimport { CarouselModule } from 'bao-tran-angular/carousel';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { CarouselModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [CarouselModule.forRoot(),...]\n})\nexport class AppModule(){}\n");

/***/ }),

/***/ "K6gG":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/captions/captions.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel>\r\n  <slide>\r\n    <img src=\"assets/images/nature/4.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/5.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/6.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "KCF+":
/*!******************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/config/config.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselConfigComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var carousel_1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var DemoCarouselConfigComponent = /** @class */ (function () {
    function DemoCarouselConfigComponent() {
    }
    DemoCarouselConfigComponent.ɵfac = function DemoCarouselConfigComponent_Factory(t) { return new (t || DemoCarouselConfigComponent)(); };
    DemoCarouselConfigComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselConfigComponent, selectors: [["demo-carousel-config"]], features: [i0.ɵɵProvidersFeature([
                { provide: carousel_1.CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
            ])], decls: 22, vars: 0, consts: [["src", "assets/images/nature/7.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], ["src", "assets/images/nature/8.jpg", "alt", "second slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/1.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"]], template: function DemoCarouselConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel");
            i0.ɵɵelementStart(1, "slide");
            i0.ɵɵelement(2, "img", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "h3");
            i0.ɵɵtext(5, "First slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "slide");
            i0.ɵɵelement(9, "img", 2);
            i0.ɵɵelementStart(10, "div", 1);
            i0.ɵɵelementStart(11, "h3");
            i0.ɵɵtext(12, "Second slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "slide");
            i0.ɵɵelement(16, "img", 3);
            i0.ɵɵelementStart(17, "div", 1);
            i0.ɵɵelementStart(18, "h3");
            i0.ɵɵtext(19, "Third slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.CarouselComponent, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselConfigComponent;
}());
exports.DemoCarouselConfigComponent = DemoCarouselConfigComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselConfigComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-config',
                templateUrl: './config.html',
                providers: [
                    { provide: carousel_1.CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "KJZQ":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/dynamic/dynamic.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [(activeSlide)]=\"activeSlideIndex\" >\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n      <p>{{slide.text}}</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n<br/>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-info\"\r\n          (click)=\"addSlide()\">Add Slide\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-info\"\r\n          (click)=\"removeSlide()\">Remove Current\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-info\"\r\n          (click)=\"removeSlide(2)\">Remove #3\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "MAro":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/basic/basic.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel>\r\n  <slide>\r\n    <img src=\"assets/images/nature/1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "NnAm":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/captions/captions.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-captions',\r\n  templateUrl: './captions.html'\r\n})\r\nexport class DemoCarouselCaptionsComponent {}\r\n");

/***/ }),

/***/ "NwHT":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist-from-index/multilist-from-index.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  You can set specific index to start from it\r\n</p>\r\n<carousel [itemsPerSlide]=\"itemsPerSlide\"\r\n          [singleSlideOffset]=\"singleSlideOffset\"\r\n          [startFromIndex]=\"6\"\r\n          [interval]=\"false\">\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "OFlS":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/pause-on-focus/pause-on-focus.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-pause-on-focus',\r\n  templateUrl: './pause-on-focus.html'\r\n})\r\nexport class DemoCarouselPauseOnFocusComponent {}\r\n");

/***/ }),

/***/ "PnM0":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist-single-offset/multilist-single-offset.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-multilist-single-offset',\r\n  templateUrl: './multilist-single-offset.html'\r\n})\r\nexport class DemoCarouselMultilistSingleOffsetComponent {\r\n  itemsPerSlide = 5;\r\n  singleSlideOffset = true;\r\n  noWrap = true;\r\n\r\n  slides = [\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'},\r\n    {image: 'assets/images/nature/3.jpg'},\r\n    {image: 'assets/images/nature/4.jpg'},\r\n    {image: 'assets/images/nature/5.jpg'},\r\n    {image: 'assets/images/nature/6.jpg'},\r\n    {image: 'assets/images/nature/7.jpg'},\r\n    {image: 'assets/images/nature/8.jpg'},\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'}\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "SmUw":
/*!********************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/accessibility/accessibility.ts ***!
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
    DemoAccessibilityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoAccessibilityComponent, selectors: [["demo-accessibility"]], decls: 30, vars: 0, consts: [[1, "table", "table-bordered"], [1, "col-xs-3"], [1, "col-xs-9"]], template: function DemoAccessibilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "The ");
            i0.ɵɵelementStart(2, "code");
            i0.ɵɵtext(3, "alt");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4, " attribute is meant to help users not miss any content, so make sure your text is helpful to anyone not seeing the image. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h4");
            i0.ɵɵtext(6, "Keyboard interaction");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "table", 0);
            i0.ɵɵelementStart(8, "tbody");
            i0.ɵɵelementStart(9, "tr");
            i0.ɵɵelementStart(10, "td", 1);
            i0.ɵɵelementStart(11, "code");
            i0.ɵɵtext(12, " LEFT_ARROW ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "td", 2);
            i0.ɵɵtext(14, " Move to a previous slide ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "tr");
            i0.ɵɵelementStart(16, "td", 1);
            i0.ɵɵelementStart(17, "code");
            i0.ɵɵtext(18, " RIGHT_ARROW ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "td", 2);
            i0.ɵɵtext(20, " Move to a next slide ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "tr");
            i0.ɵɵelementStart(22, "td", 1);
            i0.ɵɵelementStart(23, "code");
            i0.ɵɵtext(24, "SPACE");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " or ");
            i0.ɵɵelementStart(26, "code");
            i0.ɵɵtext(27, "ENTER");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "td", 2);
            i0.ɵɵtext(29, " Move to a next slide ");
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

/***/ "TPn3":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist/multilist.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-multilist',\r\n  templateUrl: './multilist.html'\r\n})\r\nexport class DemoCarouselMultilistComponent {\r\n  itemsPerSlide = 3;\r\n  singleSlideOffset = false;\r\n  noWrap = false;\r\n\r\n  slidesChangeMessage = '';\r\n\r\n  slides = [\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'},\r\n    {image: 'assets/images/nature/3.jpg'},\r\n    {image: 'assets/images/nature/4.jpg'},\r\n    {image: 'assets/images/nature/5.jpg'},\r\n    {image: 'assets/images/nature/6.jpg'},\r\n    {image: 'assets/images/nature/7.jpg'},\r\n    {image: 'assets/images/nature/8.jpg'},\r\n    {image: 'assets/images/nature/1.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'}\r\n  ];\r\n\r\n  onSlideRangeChange(indexes: number[]): void {\r\n    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;\r\n  }\r\n}\r\n");

/***/ }),

/***/ "UZxe":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/slide-changed-event/slide-changed-event.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel (activeSlideChange)=\"log($event)\" [interval]=\"false\">\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n      <p>{{slide.text}}</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n<br/>\r\n<pre class=\"card card-block card-header\">{{slideChangeMessage}}</pre>\r\n");

/***/ }),

/***/ "Uvn7":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/disable-indicator/disable-indicator.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [showIndicators]=\"showIndicator\">\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n      <p>{{slide.text}}</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n<br/>\r\n<div>\r\n  <button type=\"button\" class=\"btn btn-info\"\r\n          (click)=\"switchIndicator()\">Enable/Disable Indicator\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "VzNK":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/disable-indicator/disable-indicator.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-disable-indicator',\r\n  templateUrl: './disable-indicator.html'\r\n})\r\nexport class DemoCarouselDisableIndicatorComponent {\r\n  slides = [\r\n    {image: 'assets/images/nature/5.jpg'},\r\n    {image: 'assets/images/nature/4.jpg'},\r\n    {image: 'assets/images/nature/3.jpg'}\r\n  ];\r\n  showIndicator = true;\r\n\r\n  switchIndicator(): void {\r\n    this.showIndicator = !this.showIndicator;\r\n  }\r\n}\r\n\r\n");

/***/ }),

/***/ "aVSn":
/*!****************************************************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk.ts ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselMultilistIndicatorsByChunkComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoCarouselMultilistIndicatorsByChunkComponent_slide_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
} }
var DemoCarouselMultilistIndicatorsByChunkComponent = /** @class */ (function () {
    function DemoCarouselMultilistIndicatorsByChunkComponent() {
        this.itemsPerSlide = 3;
        this.slides = [
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' },
            { image: 'assets/images/nature/3.jpg' },
            { image: 'assets/images/nature/4.jpg' },
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/6.jpg' },
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/8.jpg' },
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' }
        ];
    }
    DemoCarouselMultilistIndicatorsByChunkComponent.ɵfac = function DemoCarouselMultilistIndicatorsByChunkComponent_Factory(t) { return new (t || DemoCarouselMultilistIndicatorsByChunkComponent)(); };
    DemoCarouselMultilistIndicatorsByChunkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselMultilistIndicatorsByChunkComponent, selectors: [["demo-carousel-multilist-indicators-by-chunk"]], decls: 4, vars: 5, consts: [[3, "itemsPerSlide", "singleSlideOffset", "interval", "indicatorsByChunk"], [4, "ngFor", "ngForOf"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselMultilistIndicatorsByChunkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "carousel", 0);
            i0.ɵɵtemplate(3, DemoCarouselMultilistIndicatorsByChunkComponent_slide_3_Template, 5, 2, "slide", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("itemsPerSlide", ctx.itemsPerSlide)("singleSlideOffset", false)("interval", false)("indicatorsByChunk", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselMultilistIndicatorsByChunkComponent;
}());
exports.DemoCarouselMultilistIndicatorsByChunkComponent = DemoCarouselMultilistIndicatorsByChunkComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselMultilistIndicatorsByChunkComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-multilist-indicators-by-chunk',
                templateUrl: './multilist-indicators-by-chunk.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "bnVg":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+carousel/carousel-section.list.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.demoComponentContent = void 0;
var basic_1 = __webpack_require__(/*! ./demos/basic/basic */ "s92g");
var captions_1 = __webpack_require__(/*! ./demos/captions/captions */ "fnRQ");
var config_1 = __webpack_require__(/*! ./demos/config/config */ "KCF+");
var dynamic_1 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "rfzV");
var pause_on_hover_1 = __webpack_require__(/*! ./demos/pause-on-hover/pause-on-hover */ "kHN+");
var custom_content_1 = __webpack_require__(/*! ./demos/custom-content/custom-content */ "AsQJ");
var interval_1 = __webpack_require__(/*! ./demos/interval/interval */ "xCnE");
var disable_indicator_1 = __webpack_require__(/*! ./demos/disable-indicator/disable-indicator */ "5J+L");
var disable_looping_1 = __webpack_require__(/*! ./demos/disable-looping/disable-looping */ "9XLM");
var slide_changed_event_1 = __webpack_require__(/*! ./demos/slide-changed-event/slide-changed-event */ "dR7+");
var multilist_1 = __webpack_require__(/*! ./demos/multilist/multilist */ "xq7+");
var multilist_single_offset_1 = __webpack_require__(/*! ./demos/multilist-single-offset/multilist-single-offset */ "vmvI");
var multilist_from_index_1 = __webpack_require__(/*! ./demos/multilist-from-index/multilist-from-index */ "+O2a");
var multilist_indicators_by_chunk_1 = __webpack_require__(/*! ./demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk */ "aVSn");
var accessibility_1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "SmUw");
var index_1 = __webpack_require__(/*! ../../docs/demo-section-components/demo-top-section/index */ "ClAA");
var index_2 = __webpack_require__(/*! ../../docs/demo-section-components/demo-examples-section/index */ "y20O");
var index_3 = __webpack_require__(/*! ../../docs/demo-section-components/demo-api-section/index */ "nk7K");
var api_docs_1 = __webpack_require__(/*! ../../docs/api-docs */ "l3GJ");
var pause_on_focus_1 = __webpack_require__(/*! ./demos/pause-on-focus/pause-on-focus */ "DctB");
var animated_1 = __webpack_require__(/*! ./demos/animated/animated */ "09NJ");
exports.demoComponentContent = [
    {
        name: 'Usage',
        anchor: 'usage',
        outlet: index_1.DemoTopSectionComponent,
        content: {
            doc: __webpack_require__(/*! !raw-loader!./docs/usage.md */ "JcOr")
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
                component: __webpack_require__(/*! !raw-loader!./demos/basic/basic.ts */ "ddyy"),
                html: __webpack_require__(/*! !raw-loader!./demos/basic/basic.html */ "MAro"),
                outlet: basic_1.DemoCarouseBasicComponent
            },
            {
                title: 'Optional captions',
                anchor: 'captions',
                description: "<p>Add captions to your slides easily with the <code>.carousel-caption</code>\n          element within any <code>&lt;slide></code>. Place just about any optional HTML within there\n          and it will be automatically aligned and formatted.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/captions/captions.ts */ "NnAm"),
                html: __webpack_require__(/*! !raw-loader!./demos/captions/captions.html */ "K6gG"),
                outlet: captions_1.DemoCarouselCaptionsComponent
            },
            {
                title: 'Configuring defaults',
                anchor: 'config-defaults',
                component: __webpack_require__(/*! !raw-loader!./demos/config/config.ts */ "uLzy"),
                html: __webpack_require__(/*! !raw-loader!./demos/config/config.html */ "jFov"),
                outlet: config_1.DemoCarouselConfigComponent
            },
            {
                title: 'Dynamic Slides',
                anchor: 'dynamic-slides',
                component: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.ts */ "DUxm"),
                html: __webpack_require__(/*! !raw-loader!./demos/dynamic/dynamic.html */ "KJZQ"),
                outlet: dynamic_1.DemoCarouselDynamicComponent
            },
            {
                title: 'Pause on hover',
                anchor: 'pause-on-hover',
                description: "<p>If <code>noPause</code> is set to <code>false</code>\n          , carousel autoplay will be stopped when carousel receives hover.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/pause-on-hover/pause-on-hover.ts */ "BxDJ"),
                html: __webpack_require__(/*! !raw-loader!./demos/pause-on-hover/pause-on-hover.html */ "IxBA"),
                outlet: pause_on_hover_1.DemoCarouselPauseOnHoverComponent
            },
            {
                title: 'Pause on focus',
                anchor: 'pause-on-focus',
                description: "<p>If <code>pauseOnFocus</code> is set to <code>true</code>\n          , carousel autoplay will be stopped when carousel receives focus.</p>",
                component: __webpack_require__(/*! !raw-loader!./demos/pause-on-focus/pause-on-focus.ts */ "OFlS"),
                html: __webpack_require__(/*! !raw-loader!./demos/pause-on-focus/pause-on-focus.html */ "Ckqu"),
                outlet: pause_on_focus_1.DemoCarouselPauseOnFocusComponent
            },
            {
                title: 'Custom content',
                anchor: 'custom-content',
                component: __webpack_require__(/*! !raw-loader!./demos/custom-content/custom-content.ts */ "n9ji"),
                html: __webpack_require__(/*! !raw-loader!./demos/custom-content/custom-content.html */ "3DN9"),
                outlet: custom_content_1.DemoCarouselCustomContentComponent
            },
            {
                title: 'Disable slide looping',
                anchor: 'disable-looping',
                component: __webpack_require__(/*! !raw-loader!./demos/disable-looping/disable-looping.ts */ "zi5j"),
                html: __webpack_require__(/*! !raw-loader!./demos/disable-looping/disable-looping.html */ "psKZ"),
                outlet: disable_looping_1.DemoCarouselDisableLoopingComponent
            },
            {
                title: 'Disable indicator',
                anchor: 'disable-indicator',
                component: __webpack_require__(/*! !raw-loader!./demos/disable-indicator/disable-indicator.ts */ "VzNK"),
                html: __webpack_require__(/*! !raw-loader!./demos/disable-indicator/disable-indicator.html */ "Uvn7"),
                outlet: disable_indicator_1.DemoCarouselDisableIndicatorComponent
            },
            {
                title: 'Interval',
                anchor: 'slides-interval',
                component: __webpack_require__(/*! !raw-loader!./demos/interval/interval.ts */ "kZ4Q"),
                html: __webpack_require__(/*! !raw-loader!./demos/interval/interval.html */ "gm8P"),
                outlet: interval_1.DemoCarouselIntervalComponent
            },
            {
                title: 'Slide changed event',
                anchor: 'slide-changed-event',
                component: __webpack_require__(/*! !raw-loader!./demos/slide-changed-event/slide-changed-event.ts */ "/AR4"),
                html: __webpack_require__(/*! !raw-loader!./demos/slide-changed-event/slide-changed-event.html */ "UZxe"),
                outlet: slide_changed_event_1.DemoCarouselSlideChangedEventComponent
            },
            {
                title: 'Multilist',
                anchor: 'multilist',
                component: __webpack_require__(/*! !raw-loader!./demos/multilist/multilist.ts */ "TPn3"),
                html: __webpack_require__(/*! !raw-loader!./demos/multilist/multilist.html */ "rwGR"),
                outlet: multilist_1.DemoCarouselMultilistComponent
            },
            {
                title: 'Multilist Single Offset',
                anchor: 'multilist-single-offset',
                component: __webpack_require__(/*! !raw-loader!./demos/multilist-single-offset/multilist-single-offset.ts */ "PnM0"),
                html: __webpack_require__(/*! !raw-loader!./demos/multilist-single-offset/multilist-single-offset.html */ "p8Al"),
                outlet: multilist_single_offset_1.DemoCarouselMultilistSingleOffsetComponent
            },
            {
                title: 'Multilist Start From Index',
                anchor: 'multilist-from-index',
                component: __webpack_require__(/*! !raw-loader!./demos/multilist-from-index/multilist-from-index.ts */ "Cr54"),
                html: __webpack_require__(/*! !raw-loader!./demos/multilist-from-index/multilist-from-index.html */ "NwHT"),
                outlet: multilist_from_index_1.DemoCarouselMultilistFromIndexComponent
            },
            {
                title: 'Multilist Indicators By Chunk',
                anchor: 'multilist-indicators-by-chunk',
                component: __webpack_require__(/*! !raw-loader!./demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk.ts */ "6kD+"),
                html: __webpack_require__(/*! !raw-loader!./demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk.html */ "FrrE"),
                outlet: multilist_indicators_by_chunk_1.DemoCarouselMultilistIndicatorsByChunkComponent
            },
            {
                title: 'With animation',
                anchor: 'animated',
                component: __webpack_require__(/*! !raw-loader!./demos/animated/animated.ts */ "5clo"),
                html: __webpack_require__(/*! !raw-loader!./demos/animated/animated.html */ "y7j8"),
                outlet: animated_1.DemoCarouseAnimatedComponent
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
                title: 'CarouselComponent',
                anchor: 'carousel-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'SlideComponent',
                anchor: 'slide-component',
                outlet: api_docs_1.NgApiDocComponent
            },
            {
                title: 'CarouselConfig',
                anchor: 'carousel-config',
                outlet: api_docs_1.NgApiDocConfigComponent
            }
        ]
    }
];


/***/ }),

/***/ "dR7+":
/*!********************************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/slide-changed-event/slide-changed-event.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselSlideChangedEventComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoCarouselSlideChangedEventComponent_slide_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(slide_r1.text);
} }
var DemoCarouselSlideChangedEventComponent = /** @class */ (function () {
    function DemoCarouselSlideChangedEventComponent() {
        this.slideChangeMessage = '';
        this.slides = [
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/3.jpg' }
        ];
    }
    DemoCarouselSlideChangedEventComponent.prototype.log = function (event) {
        this.slideChangeMessage = "Slide has been switched: " + event;
    };
    DemoCarouselSlideChangedEventComponent.ɵfac = function DemoCarouselSlideChangedEventComponent_Factory(t) { return new (t || DemoCarouselSlideChangedEventComponent)(); };
    DemoCarouselSlideChangedEventComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselSlideChangedEventComponent, selectors: [["demo-carousel-slide-changed-event"]], decls: 5, vars: 3, consts: [[3, "interval", "activeSlideChange"], [4, "ngFor", "ngForOf"], [1, "card", "card-block", "card-header"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselSlideChangedEventComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵlistener("activeSlideChange", function DemoCarouselSlideChangedEventComponent_Template_carousel_activeSlideChange_0_listener($event) { return ctx.log($event); });
            i0.ɵɵtemplate(1, DemoCarouselSlideChangedEventComponent_slide_1_Template, 7, 3, "slide", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelementStart(3, "pre", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("interval", false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.slideChangeMessage);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselSlideChangedEventComponent;
}());
exports.DemoCarouselSlideChangedEventComponent = DemoCarouselSlideChangedEventComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselSlideChangedEventComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-slide-changed-event',
                templateUrl: './slide-changed-event.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "ddyy":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/basic/basic.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoCarouseBasicComponent {}\r\n");

/***/ }),

/***/ "fnRQ":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/captions/captions.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselCaptionsComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var DemoCarouselCaptionsComponent = /** @class */ (function () {
    function DemoCarouselCaptionsComponent() {
    }
    DemoCarouselCaptionsComponent.ɵfac = function DemoCarouselCaptionsComponent_Factory(t) { return new (t || DemoCarouselCaptionsComponent)(); };
    DemoCarouselCaptionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselCaptionsComponent, selectors: [["demo-carousel-captions"]], decls: 22, vars: 0, consts: [["src", "assets/images/nature/4.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], ["src", "assets/images/nature/5.jpg", "alt", "second slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/6.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"]], template: function DemoCarouselCaptionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel");
            i0.ɵɵelementStart(1, "slide");
            i0.ɵɵelement(2, "img", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "h3");
            i0.ɵɵtext(5, "First slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "slide");
            i0.ɵɵelement(9, "img", 2);
            i0.ɵɵelementStart(10, "div", 1);
            i0.ɵɵelementStart(11, "h3");
            i0.ɵɵtext(12, "Second slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "slide");
            i0.ɵɵelement(16, "img", 3);
            i0.ɵɵelementStart(17, "div", 1);
            i0.ɵɵelementStart(18, "h3");
            i0.ɵɵtext(19, "Third slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.CarouselComponent, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselCaptionsComponent;
}());
exports.DemoCarouselCaptionsComponent = DemoCarouselCaptionsComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselCaptionsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-captions',
                templateUrl: './captions.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "fugQ":
/*!**********************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_COMPONENTS = void 0;
var dynamic_1 = __webpack_require__(/*! ./dynamic/dynamic */ "rfzV");
var basic_1 = __webpack_require__(/*! ./basic/basic */ "s92g");
var captions_1 = __webpack_require__(/*! ./captions/captions */ "fnRQ");
var config_1 = __webpack_require__(/*! ./config/config */ "KCF+");
var pause_on_hover_1 = __webpack_require__(/*! ./pause-on-hover/pause-on-hover */ "kHN+");
var custom_content_1 = __webpack_require__(/*! ./custom-content/custom-content */ "AsQJ");
var interval_1 = __webpack_require__(/*! ./interval/interval */ "xCnE");
var disable_indicator_1 = __webpack_require__(/*! ./disable-indicator/disable-indicator */ "5J+L");
var disable_looping_1 = __webpack_require__(/*! ./disable-looping/disable-looping */ "9XLM");
var slide_changed_event_1 = __webpack_require__(/*! ./slide-changed-event/slide-changed-event */ "dR7+");
var multilist_1 = __webpack_require__(/*! ./multilist/multilist */ "xq7+");
var multilist_single_offset_1 = __webpack_require__(/*! ./multilist-single-offset/multilist-single-offset */ "vmvI");
var multilist_from_index_1 = __webpack_require__(/*! ./multilist-from-index/multilist-from-index */ "+O2a");
var multilist_indicators_by_chunk_1 = __webpack_require__(/*! ./multilist-indicators-by-chunk/multilist-indicators-by-chunk */ "aVSn");
var accessibility_1 = __webpack_require__(/*! ./accessibility/accessibility */ "SmUw");
var pause_on_focus_1 = __webpack_require__(/*! ./pause-on-focus/pause-on-focus */ "DctB");
var animated_1 = __webpack_require__(/*! ./animated/animated */ "09NJ");
exports.DEMO_COMPONENTS = [
    accessibility_1.DemoAccessibilityComponent,
    basic_1.DemoCarouseBasicComponent,
    captions_1.DemoCarouselCaptionsComponent,
    config_1.DemoCarouselConfigComponent,
    config_1.DemoCarouselConfigComponent,
    custom_content_1.DemoCarouselCustomContentComponent,
    disable_indicator_1.DemoCarouselDisableIndicatorComponent,
    disable_looping_1.DemoCarouselDisableLoopingComponent,
    dynamic_1.DemoCarouselDynamicComponent,
    interval_1.DemoCarouselIntervalComponent,
    multilist_1.DemoCarouselMultilistComponent,
    multilist_from_index_1.DemoCarouselMultilistFromIndexComponent,
    multilist_indicators_by_chunk_1.DemoCarouselMultilistIndicatorsByChunkComponent,
    multilist_single_offset_1.DemoCarouselMultilistSingleOffsetComponent,
    pause_on_focus_1.DemoCarouselPauseOnFocusComponent,
    pause_on_hover_1.DemoCarouselPauseOnHoverComponent,
    slide_changed_event_1.DemoCarouselSlideChangedEventComponent,
    animated_1.DemoCarouseAnimatedComponent
];


/***/ }),

/***/ "gm8P":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/interval/interval.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [interval]=\"myInterval\" [(activeSlide)]=\"activeSlideIndex\" >\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n      <p>{{slide.text}}</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n<br/>\r\n<div>\r\n  <span>Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): </span>\r\n  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"myInterval\">\r\n</div>\r\n");

/***/ }),

/***/ "jFov":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/config/config.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel>\r\n  <slide>\r\n    <img src=\"assets/images/nature/7.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/8.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/1.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "kHN+":
/*!**********************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/pause-on-hover/pause-on-hover.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselPauseOnHoverComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var DemoCarouselPauseOnHoverComponent = /** @class */ (function () {
    function DemoCarouselPauseOnHoverComponent() {
    }
    DemoCarouselPauseOnHoverComponent.ɵfac = function DemoCarouselPauseOnHoverComponent_Factory(t) { return new (t || DemoCarouselPauseOnHoverComponent)(); };
    DemoCarouselPauseOnHoverComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselPauseOnHoverComponent, selectors: [["demo-carousel-pause-on-hover"]], decls: 22, vars: 1, consts: [[3, "noPause"], ["src", "assets/images/nature/4.jpg", "alt", "First slide", 2, "display", "block", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], ["src", "assets/images/nature/5.jpg", "alt", "Second slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/6.jpg", "alt", "Third slide", 2, "display", "block", "width", "100%"]], template: function DemoCarouselPauseOnHoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵelementStart(1, "slide");
            i0.ɵɵelement(2, "img", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "h3");
            i0.ɵɵtext(5, "First slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "slide");
            i0.ɵɵelement(9, "img", 3);
            i0.ɵɵelementStart(10, "div", 2);
            i0.ɵɵelementStart(11, "h3");
            i0.ɵɵtext(12, "Second slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "slide");
            i0.ɵɵelement(16, "img", 4);
            i0.ɵɵelementStart(17, "div", 2);
            i0.ɵɵelementStart(18, "h3");
            i0.ɵɵtext(19, "Third slide label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p");
            i0.ɵɵtext(21, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("noPause", false);
        } }, directives: [i1.CarouselComponent, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselPauseOnHoverComponent;
}());
exports.DemoCarouselPauseOnHoverComponent = DemoCarouselPauseOnHoverComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselPauseOnHoverComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-pause-on-hover',
                templateUrl: './pause-on-hover.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "kZ4Q":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/interval/interval.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-interval',\r\n  templateUrl: './interval.html'\r\n})\r\nexport class DemoCarouselIntervalComponent {\r\n  myInterval = 1500;\r\n  activeSlideIndex = 0;\r\n\r\n  slides = [\r\n    {image: 'assets/images/nature/3.jpg'},\r\n    {image: 'assets/images/nature/2.jpg'},\r\n    {image: 'assets/images/nature/1.jpg'}\r\n  ];\r\n}\r\n");

/***/ }),

/***/ "koRY":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demo-carousel.routes.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var carousel_section_component_1 = __webpack_require__(/*! ./carousel-section.component */ "BIO1");
exports.routes = [{ path: '', component: carousel_section_component_1.CarouselSectionComponent }];


/***/ }),

/***/ "n9ji":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/custom-content/custom-content.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-custom-content',\r\n  templateUrl: './custom-content.html'\r\n})\r\nexport class DemoCarouselCustomContentComponent {}\r\n");

/***/ }),

/***/ "oku8":
/*!*******************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demo-carousel.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var carousel_1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var docs_1 = __webpack_require__(/*! ../../docs */ "k3/p");
var carousel_section_component_1 = __webpack_require__(/*! ./carousel-section.component */ "BIO1");
var demos_1 = __webpack_require__(/*! ./demos */ "fugQ");
var demo_carousel_routes_1 = __webpack_require__(/*! ./demo-carousel.routes */ "koRY");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! ./demos/accessibility/accessibility */ "SmUw");
var i2 = __webpack_require__(/*! ./demos/basic/basic */ "s92g");
var i3 = __webpack_require__(/*! ./demos/captions/captions */ "fnRQ");
var i4 = __webpack_require__(/*! ./demos/config/config */ "KCF+");
var i5 = __webpack_require__(/*! ./demos/custom-content/custom-content */ "AsQJ");
var i6 = __webpack_require__(/*! ./demos/disable-indicator/disable-indicator */ "5J+L");
var i7 = __webpack_require__(/*! ./demos/disable-looping/disable-looping */ "9XLM");
var i8 = __webpack_require__(/*! ./demos/dynamic/dynamic */ "rfzV");
var i9 = __webpack_require__(/*! ./demos/interval/interval */ "xCnE");
var i10 = __webpack_require__(/*! ./demos/multilist/multilist */ "xq7+");
var i11 = __webpack_require__(/*! ./demos/multilist-from-index/multilist-from-index */ "+O2a");
var i12 = __webpack_require__(/*! ./demos/multilist-indicators-by-chunk/multilist-indicators-by-chunk */ "aVSn");
var i13 = __webpack_require__(/*! ./demos/multilist-single-offset/multilist-single-offset */ "vmvI");
var i14 = __webpack_require__(/*! ./demos/pause-on-focus/pause-on-focus */ "DctB");
var i15 = __webpack_require__(/*! ./demos/pause-on-hover/pause-on-hover */ "kHN+");
var i16 = __webpack_require__(/*! ./demos/slide-changed-event/slide-changed-event */ "dR7+");
var i17 = __webpack_require__(/*! ./demos/animated/animated */ "09NJ");
var i18 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i19 = __webpack_require__(/*! @angular/router */ "tyNb");
var DemoCarouselModule = /** @class */ (function () {
    function DemoCarouselModule() {
    }
    DemoCarouselModule.ɵmod = i0.ɵɵdefineNgModule({ type: DemoCarouselModule });
    DemoCarouselModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DemoCarouselModule_Factory(t) { return new (t || DemoCarouselModule)(); }, imports: [[
                carousel_1.CarouselModule.forRoot(),
                common_1.CommonModule,
                forms_1.FormsModule,
                docs_1.DocsModule,
                router_1.RouterModule.forChild(demo_carousel_routes_1.routes)
            ]] });
    return DemoCarouselModule;
}());
exports.DemoCarouselModule = DemoCarouselModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoCarouselModule, { declarations: [carousel_section_component_1.CarouselSectionComponent, i1.DemoAccessibilityComponent, i2.DemoCarouseBasicComponent, i3.DemoCarouselCaptionsComponent, i4.DemoCarouselConfigComponent, i4.DemoCarouselConfigComponent, i5.DemoCarouselCustomContentComponent, i6.DemoCarouselDisableIndicatorComponent, i7.DemoCarouselDisableLoopingComponent, i8.DemoCarouselDynamicComponent, i9.DemoCarouselIntervalComponent, i10.DemoCarouselMultilistComponent, i11.DemoCarouselMultilistFromIndexComponent, i12.DemoCarouselMultilistIndicatorsByChunkComponent, i13.DemoCarouselMultilistSingleOffsetComponent, i14.DemoCarouselPauseOnFocusComponent, i15.DemoCarouselPauseOnHoverComponent, i16.DemoCarouselSlideChangedEventComponent, i17.DemoCarouseAnimatedComponent], imports: [i18.CarouselModule, common_1.CommonModule,
        forms_1.FormsModule,
        docs_1.DocsModule, i19.RouterModule], exports: [carousel_section_component_1.CarouselSectionComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: __spreadArrays([
                    carousel_section_component_1.CarouselSectionComponent
                ], demos_1.DEMO_COMPONENTS),
                imports: [
                    carousel_1.CarouselModule.forRoot(),
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    docs_1.DocsModule,
                    router_1.RouterModule.forChild(demo_carousel_routes_1.routes)
                ],
                exports: [carousel_section_component_1.CarouselSectionComponent],
                entryComponents: __spreadArrays(demos_1.DEMO_COMPONENTS)
            }]
    }], null, null); })();


/***/ }),

/***/ "p8Al":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist-single-offset/multilist-single-offset.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  There is ability to shift slide not only by amount of all visible slides but also for one item\r\n</p>\r\n<carousel [itemsPerSlide]=\"itemsPerSlide\"\r\n          [singleSlideOffset]=\"singleSlideOffset\"\r\n          [interval]=\"false\"\r\n          [noWrap]=\"noWrap\">\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "psKZ":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/disable-looping/disable-looping.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [noWrap]=\"noWrapSlides\">\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n      <p>{{slide.text}}</p>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n<br/>\r\n<div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" [(ngModel)]=\"noWrapSlides\">Disable Slide Looping</label>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "rfzV":
/*!********************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/dynamic/dynamic.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselDynamicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoCarouselDynamicComponent_slide_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(slide_r1.text);
} }
var DemoCarouselDynamicComponent = /** @class */ (function () {
    function DemoCarouselDynamicComponent() {
        this.slides = [];
        this.activeSlideIndex = 0;
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    DemoCarouselDynamicComponent.prototype.addSlide = function () {
        this.slides.push({
            image: "assets/images/nature/" + (this.slides.length % 8 + 1) + ".jpg"
        });
    };
    DemoCarouselDynamicComponent.prototype.removeSlide = function (index) {
        var toRemove = index ? index : this.activeSlideIndex;
        this.slides.splice(toRemove, 1);
    };
    DemoCarouselDynamicComponent.ɵfac = function DemoCarouselDynamicComponent_Factory(t) { return new (t || DemoCarouselDynamicComponent)(); };
    DemoCarouselDynamicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselDynamicComponent, selectors: [["demo-carousel-dynamic"]], decls: 10, vars: 2, consts: [[3, "activeSlide", "activeSlideChange"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselDynamicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵlistener("activeSlideChange", function DemoCarouselDynamicComponent_Template_carousel_activeSlideChange_0_listener($event) { return ctx.activeSlideIndex = $event; });
            i0.ɵɵtemplate(1, DemoCarouselDynamicComponent_slide_1_Template, 7, 3, "slide", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function DemoCarouselDynamicComponent_Template_button_click_4_listener() { return ctx.addSlide(); });
            i0.ɵɵtext(5, "Add Slide ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵlistener("click", function DemoCarouselDynamicComponent_Template_button_click_6_listener() { return ctx.removeSlide(); });
            i0.ɵɵtext(7, "Remove Current ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 2);
            i0.ɵɵlistener("click", function DemoCarouselDynamicComponent_Template_button_click_8_listener() { return ctx.removeSlide(2); });
            i0.ɵɵtext(9, "Remove #3 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("activeSlide", ctx.activeSlideIndex);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselDynamicComponent;
}());
exports.DemoCarouselDynamicComponent = DemoCarouselDynamicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselDynamicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-dynamic',
                templateUrl: './dynamic.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rwGR":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/multilist/multilist.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [itemsPerSlide]=\"itemsPerSlide\"\r\n          [singleSlideOffset]=\"singleSlideOffset\"\r\n          [noWrap]=\"!noWrap\"\r\n          [interval]=\"false\"\r\n          [startFromIndex]=\"5\"\r\n          (slideRangeChange)=\"onSlideRangeChange($event)\">\r\n  <slide *ngFor=\"let slide of slides; let index=index\">\r\n    <img [src]=\"slide.image\" alt=\"image slide\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption\">\r\n      <h4>Slide {{index}}</h4>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n\r\n<div class=\"container\" [ngStyle]=\"{'marginTop': '20px'}\">\r\n  <div class=\"checkbox\">\r\n    <label>\r\n      <input type=\"checkbox\" [(ngModel)]=\"noWrap\">\r\n      Infinite\r\n    </label>\r\n  </div>\r\n</div>\r\n\r\n<pre class=\"card card-block card-header\">{{slidesChangeMessage}}</pre>\r\n");

/***/ }),

/***/ "s92g":
/*!****************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/basic/basic.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouseBasicComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var DemoCarouseBasicComponent = /** @class */ (function () {
    function DemoCarouseBasicComponent() {
    }
    DemoCarouseBasicComponent.ɵfac = function DemoCarouseBasicComponent_Factory(t) { return new (t || DemoCarouseBasicComponent)(); };
    DemoCarouseBasicComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouseBasicComponent, selectors: [["demo-carousel-basic"]], decls: 7, vars: 0, consts: [["src", "assets/images/nature/1.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/2.jpg", "alt", "second slide", 2, "display", "block", "width", "100%"], ["src", "assets/images/nature/3.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"]], template: function DemoCarouseBasicComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel");
            i0.ɵɵelementStart(1, "slide");
            i0.ɵɵelement(2, "img", 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "slide");
            i0.ɵɵelement(4, "img", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "slide");
            i0.ɵɵelement(6, "img", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.CarouselComponent, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouseBasicComponent;
}());
exports.DemoCarouseBasicComponent = DemoCarouseBasicComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouseBasicComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-basic',
                templateUrl: './basic.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "uLzy":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/config/config.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\nimport { CarouselConfig } from 'bao-tran-angular/carousel';\n\n@Component({\n  selector: 'demo-carousel-config',\n  templateUrl: './config.html',\n  providers: [\n    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }\n  ]\n})\nexport class DemoCarouselConfigComponent {}\n");

/***/ }),

/***/ "vmvI":
/*!****************************************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/multilist-single-offset/multilist-single-offset.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselMultilistSingleOffsetComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
function DemoCarouselMultilistSingleOffsetComponent_slide_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
} }
var DemoCarouselMultilistSingleOffsetComponent = /** @class */ (function () {
    function DemoCarouselMultilistSingleOffsetComponent() {
        this.itemsPerSlide = 5;
        this.singleSlideOffset = true;
        this.noWrap = true;
        this.slides = [
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' },
            { image: 'assets/images/nature/3.jpg' },
            { image: 'assets/images/nature/4.jpg' },
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/6.jpg' },
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/8.jpg' },
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' }
        ];
    }
    DemoCarouselMultilistSingleOffsetComponent.ɵfac = function DemoCarouselMultilistSingleOffsetComponent_Factory(t) { return new (t || DemoCarouselMultilistSingleOffsetComponent)(); };
    DemoCarouselMultilistSingleOffsetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselMultilistSingleOffsetComponent, selectors: [["demo-carousel-multilist-single-offset"]], decls: 4, vars: 5, consts: [[3, "itemsPerSlide", "singleSlideOffset", "interval", "noWrap"], [4, "ngFor", "ngForOf"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselMultilistSingleOffsetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " There is ability to shift slide not only by amount of all visible slides but also for one item\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "carousel", 0);
            i0.ɵɵtemplate(3, DemoCarouselMultilistSingleOffsetComponent_slide_3_Template, 5, 2, "slide", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("itemsPerSlide", ctx.itemsPerSlide)("singleSlideOffset", ctx.singleSlideOffset)("interval", false)("noWrap", ctx.noWrap);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselMultilistSingleOffsetComponent;
}());
exports.DemoCarouselMultilistSingleOffsetComponent = DemoCarouselMultilistSingleOffsetComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselMultilistSingleOffsetComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-multilist-single-offset',
                templateUrl: './multilist-single-offset.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "xCnE":
/*!**********************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/interval/interval.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselIntervalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
var i3 = __webpack_require__(/*! @angular/forms */ "3Pt+");
function DemoCarouselIntervalComponent_slide_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(slide_r1.text);
} }
var DemoCarouselIntervalComponent = /** @class */ (function () {
    function DemoCarouselIntervalComponent() {
        this.myInterval = 1500;
        this.activeSlideIndex = 0;
        this.slides = [
            { image: 'assets/images/nature/3.jpg' },
            { image: 'assets/images/nature/2.jpg' },
            { image: 'assets/images/nature/1.jpg' }
        ];
    }
    DemoCarouselIntervalComponent.ɵfac = function DemoCarouselIntervalComponent_Factory(t) { return new (t || DemoCarouselIntervalComponent)(); };
    DemoCarouselIntervalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselIntervalComponent, selectors: [["demo-carousel-interval"]], decls: 7, vars: 4, consts: [[3, "interval", "activeSlide", "activeSlideChange"], [4, "ngFor", "ngForOf"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselIntervalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵlistener("activeSlideChange", function DemoCarouselIntervalComponent_Template_carousel_activeSlideChange_0_listener($event) { return ctx.activeSlideIndex = $event; });
            i0.ɵɵtemplate(1, DemoCarouselIntervalComponent_slide_1_Template, 7, 3, "slide", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "br");
            i0.ɵɵelementStart(3, "div");
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Interval, in milliseconds (Enter a negative number or 0 to stop the interval.): ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DemoCarouselIntervalComponent_Template_input_ngModelChange_6_listener($event) { return ctx.myInterval = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("interval", ctx.myInterval)("activeSlide", ctx.activeSlideIndex);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.myInterval);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselIntervalComponent;
}());
exports.DemoCarouselIntervalComponent = DemoCarouselIntervalComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselIntervalComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-interval',
                templateUrl: './interval.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "xq7+":
/*!************************************************************************!*\
  !*** ./demo/src/app/components/+carousel/demos/multilist/multilist.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoCarouselMultilistComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var i0 = __webpack_require__(/*! @angular/core */ "fXoL");
var i1 = __webpack_require__(/*! bao-tran-angular/carousel */ "EV4G");
var i2 = __webpack_require__(/*! @angular/common */ "ofXK");
var i3 = __webpack_require__(/*! @angular/forms */ "3Pt+");
function DemoCarouselMultilistComponent_slide_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "slide");
    i0.ɵɵelement(1, "img", 6);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var slide_r1 = ctx.$implicit;
    var index_r2 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", slide_r1.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Slide ", index_r2, "");
} }
var _c0 = function () { return { "marginTop": "20px" }; };
var DemoCarouselMultilistComponent = /** @class */ (function () {
    function DemoCarouselMultilistComponent() {
        this.itemsPerSlide = 3;
        this.singleSlideOffset = false;
        this.noWrap = false;
        this.slidesChangeMessage = '';
        this.slides = [
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' },
            { image: 'assets/images/nature/3.jpg' },
            { image: 'assets/images/nature/4.jpg' },
            { image: 'assets/images/nature/5.jpg' },
            { image: 'assets/images/nature/6.jpg' },
            { image: 'assets/images/nature/7.jpg' },
            { image: 'assets/images/nature/8.jpg' },
            { image: 'assets/images/nature/1.jpg' },
            { image: 'assets/images/nature/2.jpg' }
        ];
    }
    DemoCarouselMultilistComponent.prototype.onSlideRangeChange = function (indexes) {
        this.slidesChangeMessage = "Slides have been switched: " + indexes;
    };
    DemoCarouselMultilistComponent.ɵfac = function DemoCarouselMultilistComponent_Factory(t) { return new (t || DemoCarouselMultilistComponent)(); };
    DemoCarouselMultilistComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DemoCarouselMultilistComponent, selectors: [["demo-carousel-multilist"]], decls: 9, vars: 10, consts: [[3, "itemsPerSlide", "singleSlideOffset", "noWrap", "interval", "startFromIndex", "slideRangeChange"], [4, "ngFor", "ngForOf"], [1, "container", 3, "ngStyle"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "card", "card-block", "card-header"], ["alt", "image slide", 2, "display", "block", "width", "100%", 3, "src"], [1, "carousel-caption"]], template: function DemoCarouselMultilistComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "carousel", 0);
            i0.ɵɵlistener("slideRangeChange", function DemoCarouselMultilistComponent_Template_carousel_slideRangeChange_0_listener($event) { return ctx.onSlideRangeChange($event); });
            i0.ɵɵtemplate(1, DemoCarouselMultilistComponent_slide_1_Template, 5, 2, "slide", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "label");
            i0.ɵɵelementStart(5, "input", 4);
            i0.ɵɵlistener("ngModelChange", function DemoCarouselMultilistComponent_Template_input_ngModelChange_5_listener($event) { return ctx.noWrap = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(6, " Infinite ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "pre", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("itemsPerSlide", ctx.itemsPerSlide)("singleSlideOffset", ctx.singleSlideOffset)("noWrap", !ctx.noWrap)("interval", false)("startFromIndex", 5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.slides);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(9, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.noWrap);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.slidesChangeMessage);
        } }, directives: [i1.CarouselComponent, i2.NgForOf, i2.NgStyle, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel, i1.SlideComponent], encapsulation: 2 });
    return DemoCarouselMultilistComponent;
}());
exports.DemoCarouselMultilistComponent = DemoCarouselMultilistComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DemoCarouselMultilistComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'demo-carousel-multilist',
                templateUrl: './multilist.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "y7j8":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/animated/animated.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carousel [isAnimated]=\"true\">\r\n  <slide>\r\n    <img src=\"assets/images/nature/1.jpg\" alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"assets/images/nature/3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\r\n  </slide>\r\n</carousel>\r\n");

/***/ }),

/***/ "zi5j":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/app/components/+carousel/demos/disable-looping/disable-looping.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-carousel-disable-looping',\r\n  templateUrl: './disable-looping.html'\r\n})\r\nexport class DemoCarouselDisableLoopingComponent {\r\n  slides = [\r\n    {image: 'assets/images/nature/8.jpg'},\r\n    {image: 'assets/images/nature/7.jpg'},\r\n    {image: 'assets/images/nature/6.jpg'}\r\n  ];\r\n  noWrapSlides = false;\r\n}\r\n\r\n");

/***/ })

};;
//# sourceMappingURL=components-carousel-demo-carousel-module.js.map