exports.ids = ["vendors~components-typeahead-demo-typeahead-module"];
exports.modules = {

/***/ "M8Vs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bao-tran-angular/__ivy_ngcc__/typeahead/fesm2015/bao-tran-angular-typeahead.js ***!
  \*****************************************************************************************************/
/*! exports provided: TypeaheadConfig, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, TypeaheadOptions, TypeaheadOrder, escapeRegexp, getValueFromObject, latinMap, latinize, tokenize, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadConfig", function() { return TypeaheadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return TypeaheadContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return TypeaheadDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return TypeaheadMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return TypeaheadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return TypeaheadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOrder", function() { return TypeaheadOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegexp", function() { return escapeRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromObject", function() { return getValueFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinMap", function() { return latinMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinize", function() { return latinize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return typeaheadAnimation; });
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "QdLy");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bao-tran-angular/utils */ "SBKW");
/* harmony import */ var bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bao-tran-angular/positioning */ "tRfX");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bao-tran-angular/component-loader */ "GFUW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/* tslint:disable */

/** @type {?} */






var _c0 = ["ulElement"];
var _c1 = ["liElements"];

function TypeaheadContainerComponent_ng_template_0_Template(rf, ctx) {}

function TypeaheadContainerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 4);
  }

  if (rf & 2) {
    var match_r7 = ctx.match;
    var query_r8 = ctx.query;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", ctx_r2.highlight(match_r7, query_r8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}

function TypeaheadContainerComponent_ng_template_3_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var match_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](match_r11);
  }
}

function TypeaheadContainerComponent_ng_template_3_ng_template_2_li_1_ng_template_3_Template(rf, ctx) {}

var _c2 = function _c2(a0, a1, a2, a3) {
  return {
    item: a0,
    index: a1,
    match: a2,
    query: a3
  };
};

function TypeaheadContainerComponent_ng_template_3_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function TypeaheadContainerComponent_ng_template_3_ng_template_2_li_1_Template_li_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      var match_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r19.selectActive(match_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TypeaheadContainerComponent_ng_template_3_ng_template_2_li_1_Template_a_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      var match_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r22.selectMatch(match_r11, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TypeaheadContainerComponent_ng_template_3_ng_template_2_li_1_ng_template_3_Template, 0, 0, "ng-template", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var match_r11 = ctx_r24.$implicit;
    var i_r12 = ctx_r24.index;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r14.isActive(match_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r14.popupId + "-" + i_r12)("@typeaheadAnimation", ctx_r14.animationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.itemTemplate || _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](6, _c2, match_r11.item, i_r12, match_r11, ctx_r14.query));
  }
}

function TypeaheadContainerComponent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TypeaheadContainerComponent_ng_template_3_ng_template_2_li_0_Template, 3, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TypeaheadContainerComponent_ng_template_3_ng_template_2_li_1_Template, 4, 11, "li", 9);
  }

  if (rf & 2) {
    var match_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", match_r11.isHeader());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !match_r11.isHeader());
  }
}

function TypeaheadContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TypeaheadContainerComponent_ng_template_3_ng_template_2_Template, 2, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("overflow-y", ctx_r4.needScrollbar ? "scroll" : "auto")("height", ctx_r4.needScrollbar ? ctx_r4.guiHeight : "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.matches);
  }
}

function TypeaheadContainerComponent_ng_template_5_ng_template_0_h6_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var match_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](match_r26);
  }
}

function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_ng_template_2_Template(rf, ctx) {}

function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      var match_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r33.selectMatch(match_r26, $event);
    })("mouseenter", function TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template_button_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      var match_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r36.selectActive(match_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    var match_r26 = ctx_r38.$implicit;
    var i_r27 = ctx_r38.index;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r29.isActive(match_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r29.popupId + "-" + i_r27)("@typeaheadAnimation", ctx_r29.animationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r29.itemTemplate || _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](6, _c2, match_r26.item, i_r27, match_r26, ctx_r29.query));
  }
}

function TypeaheadContainerComponent_ng_template_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TypeaheadContainerComponent_ng_template_5_ng_template_0_h6_0_Template, 2, 1, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TypeaheadContainerComponent_ng_template_5_ng_template_0_ng_template_1_Template, 3, 11, "ng-template", 14);
  }

  if (rf & 2) {
    var match_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", match_r26.isHeader());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !match_r26.isHeader());
  }
}

function TypeaheadContainerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TypeaheadContainerComponent_ng_template_5_ng_template_0_Template, 2, 2, "ng-template", 7);
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.matches);
  }
}

var _c3 = function _c3(a0, a1, a2, a3) {
  return {
    matches: a0,
    itemTemplate: a1,
    query: a2,
    $implicit: a3
  };
};

var latinMap = {
  'Á': 'A',
  'Ă': 'A',
  'Ắ': 'A',
  'Ặ': 'A',
  'Ằ': 'A',
  'Ẳ': 'A',
  'Ẵ': 'A',
  'Ǎ': 'A',
  'Â': 'A',
  'Ấ': 'A',
  'Ậ': 'A',
  'Ầ': 'A',
  'Ẩ': 'A',
  'Ẫ': 'A',
  'Ä': 'A',
  'Ǟ': 'A',
  'Ȧ': 'A',
  'Ǡ': 'A',
  'Ạ': 'A',
  'Ȁ': 'A',
  'À': 'A',
  'Ả': 'A',
  'Ȃ': 'A',
  'Ā': 'A',
  'Ą': 'A',
  'Å': 'A',
  'Ǻ': 'A',
  'Ḁ': 'A',
  'Ⱥ': 'A',
  'Ã': 'A',
  'Ꜳ': 'AA',
  'Æ': 'AE',
  'Ǽ': 'AE',
  'Ǣ': 'AE',
  'Ꜵ': 'AO',
  'Ꜷ': 'AU',
  'Ꜹ': 'AV',
  'Ꜻ': 'AV',
  'Ꜽ': 'AY',
  'Ḃ': 'B',
  'Ḅ': 'B',
  'Ɓ': 'B',
  'Ḇ': 'B',
  'Ƀ': 'B',
  'Ƃ': 'B',
  'Ć': 'C',
  'Č': 'C',
  'Ç': 'C',
  'Ḉ': 'C',
  'Ĉ': 'C',
  'Ċ': 'C',
  'Ƈ': 'C',
  'Ȼ': 'C',
  'Ď': 'D',
  'Ḑ': 'D',
  'Ḓ': 'D',
  'Ḋ': 'D',
  'Ḍ': 'D',
  'Ɗ': 'D',
  'Ḏ': 'D',
  'ǲ': 'D',
  'ǅ': 'D',
  'Đ': 'D',
  'Ƌ': 'D',
  'Ǳ': 'DZ',
  'Ǆ': 'DZ',
  'É': 'E',
  'Ĕ': 'E',
  'Ě': 'E',
  'Ȩ': 'E',
  'Ḝ': 'E',
  'Ê': 'E',
  'Ế': 'E',
  'Ệ': 'E',
  'Ề': 'E',
  'Ể': 'E',
  'Ễ': 'E',
  'Ḙ': 'E',
  'Ë': 'E',
  'Ė': 'E',
  'Ẹ': 'E',
  'Ȅ': 'E',
  'È': 'E',
  'Ẻ': 'E',
  'Ȇ': 'E',
  'Ē': 'E',
  'Ḗ': 'E',
  'Ḕ': 'E',
  'Ę': 'E',
  'Ɇ': 'E',
  'Ẽ': 'E',
  'Ḛ': 'E',
  'Ꝫ': 'ET',
  'Ḟ': 'F',
  'Ƒ': 'F',
  'Ǵ': 'G',
  'Ğ': 'G',
  'Ǧ': 'G',
  'Ģ': 'G',
  'Ĝ': 'G',
  'Ġ': 'G',
  'Ɠ': 'G',
  'Ḡ': 'G',
  'Ǥ': 'G',
  'Ḫ': 'H',
  'Ȟ': 'H',
  'Ḩ': 'H',
  'Ĥ': 'H',
  'Ⱨ': 'H',
  'Ḧ': 'H',
  'Ḣ': 'H',
  'Ḥ': 'H',
  'Ħ': 'H',
  'Í': 'I',
  'Ĭ': 'I',
  'Ǐ': 'I',
  'Î': 'I',
  'Ï': 'I',
  'Ḯ': 'I',
  'İ': 'I',
  'Ị': 'I',
  'Ȉ': 'I',
  'Ì': 'I',
  'Ỉ': 'I',
  'Ȋ': 'I',
  'Ī': 'I',
  'Į': 'I',
  'Ɨ': 'I',
  'Ĩ': 'I',
  'Ḭ': 'I',
  'Ꝺ': 'D',
  'Ꝼ': 'F',
  'Ᵹ': 'G',
  'Ꞃ': 'R',
  'Ꞅ': 'S',
  'Ꞇ': 'T',
  'Ꝭ': 'IS',
  'Ĵ': 'J',
  'Ɉ': 'J',
  'Ḱ': 'K',
  'Ǩ': 'K',
  'Ķ': 'K',
  'Ⱪ': 'K',
  'Ꝃ': 'K',
  'Ḳ': 'K',
  'Ƙ': 'K',
  'Ḵ': 'K',
  'Ꝁ': 'K',
  'Ꝅ': 'K',
  'Ĺ': 'L',
  'Ƚ': 'L',
  'Ľ': 'L',
  'Ļ': 'L',
  'Ḽ': 'L',
  'Ḷ': 'L',
  'Ḹ': 'L',
  'Ⱡ': 'L',
  'Ꝉ': 'L',
  'Ḻ': 'L',
  'Ŀ': 'L',
  'Ɫ': 'L',
  'ǈ': 'L',
  'Ł': 'L',
  'Ǉ': 'LJ',
  'Ḿ': 'M',
  'Ṁ': 'M',
  'Ṃ': 'M',
  'Ɱ': 'M',
  'Ń': 'N',
  'Ň': 'N',
  'Ņ': 'N',
  'Ṋ': 'N',
  'Ṅ': 'N',
  'Ṇ': 'N',
  'Ǹ': 'N',
  'Ɲ': 'N',
  'Ṉ': 'N',
  'Ƞ': 'N',
  'ǋ': 'N',
  'Ñ': 'N',
  'Ǌ': 'NJ',
  'Ó': 'O',
  'Ŏ': 'O',
  'Ǒ': 'O',
  'Ô': 'O',
  'Ố': 'O',
  'Ộ': 'O',
  'Ồ': 'O',
  'Ổ': 'O',
  'Ỗ': 'O',
  'Ö': 'O',
  'Ȫ': 'O',
  'Ȯ': 'O',
  'Ȱ': 'O',
  'Ọ': 'O',
  'Ő': 'O',
  'Ȍ': 'O',
  'Ò': 'O',
  'Ỏ': 'O',
  'Ơ': 'O',
  'Ớ': 'O',
  'Ợ': 'O',
  'Ờ': 'O',
  'Ở': 'O',
  'Ỡ': 'O',
  'Ȏ': 'O',
  'Ꝋ': 'O',
  'Ꝍ': 'O',
  'Ō': 'O',
  'Ṓ': 'O',
  'Ṑ': 'O',
  'Ɵ': 'O',
  'Ǫ': 'O',
  'Ǭ': 'O',
  'Ø': 'O',
  'Ǿ': 'O',
  'Õ': 'O',
  'Ṍ': 'O',
  'Ṏ': 'O',
  'Ȭ': 'O',
  'Ƣ': 'OI',
  'Ꝏ': 'OO',
  'Ɛ': 'E',
  'Ɔ': 'O',
  'Ȣ': 'OU',
  'Ṕ': 'P',
  'Ṗ': 'P',
  'Ꝓ': 'P',
  'Ƥ': 'P',
  'Ꝕ': 'P',
  'Ᵽ': 'P',
  'Ꝑ': 'P',
  'Ꝙ': 'Q',
  'Ꝗ': 'Q',
  'Ŕ': 'R',
  'Ř': 'R',
  'Ŗ': 'R',
  'Ṙ': 'R',
  'Ṛ': 'R',
  'Ṝ': 'R',
  'Ȑ': 'R',
  'Ȓ': 'R',
  'Ṟ': 'R',
  'Ɍ': 'R',
  'Ɽ': 'R',
  'Ꜿ': 'C',
  'Ǝ': 'E',
  'Ś': 'S',
  'Ṥ': 'S',
  'Š': 'S',
  'Ṧ': 'S',
  'Ş': 'S',
  'Ŝ': 'S',
  'Ș': 'S',
  'Ṡ': 'S',
  'Ṣ': 'S',
  'Ṩ': 'S',
  'Ť': 'T',
  'Ţ': 'T',
  'Ṱ': 'T',
  'Ț': 'T',
  'Ⱦ': 'T',
  'Ṫ': 'T',
  'Ṭ': 'T',
  'Ƭ': 'T',
  'Ṯ': 'T',
  'Ʈ': 'T',
  'Ŧ': 'T',
  'Ɐ': 'A',
  'Ꞁ': 'L',
  'Ɯ': 'M',
  'Ʌ': 'V',
  'Ꜩ': 'TZ',
  'Ú': 'U',
  'Ŭ': 'U',
  'Ǔ': 'U',
  'Û': 'U',
  'Ṷ': 'U',
  'Ü': 'U',
  'Ǘ': 'U',
  'Ǚ': 'U',
  'Ǜ': 'U',
  'Ǖ': 'U',
  'Ṳ': 'U',
  'Ụ': 'U',
  'Ű': 'U',
  'Ȕ': 'U',
  'Ù': 'U',
  'Ủ': 'U',
  'Ư': 'U',
  'Ứ': 'U',
  'Ự': 'U',
  'Ừ': 'U',
  'Ử': 'U',
  'Ữ': 'U',
  'Ȗ': 'U',
  'Ū': 'U',
  'Ṻ': 'U',
  'Ų': 'U',
  'Ů': 'U',
  'Ũ': 'U',
  'Ṹ': 'U',
  'Ṵ': 'U',
  'Ꝟ': 'V',
  'Ṿ': 'V',
  'Ʋ': 'V',
  'Ṽ': 'V',
  'Ꝡ': 'VY',
  'Ẃ': 'W',
  'Ŵ': 'W',
  'Ẅ': 'W',
  'Ẇ': 'W',
  'Ẉ': 'W',
  'Ẁ': 'W',
  'Ⱳ': 'W',
  'Ẍ': 'X',
  'Ẋ': 'X',
  'Ý': 'Y',
  'Ŷ': 'Y',
  'Ÿ': 'Y',
  'Ẏ': 'Y',
  'Ỵ': 'Y',
  'Ỳ': 'Y',
  'Ƴ': 'Y',
  'Ỷ': 'Y',
  'Ỿ': 'Y',
  'Ȳ': 'Y',
  'Ɏ': 'Y',
  'Ỹ': 'Y',
  'Ź': 'Z',
  'Ž': 'Z',
  'Ẑ': 'Z',
  'Ⱬ': 'Z',
  'Ż': 'Z',
  'Ẓ': 'Z',
  'Ȥ': 'Z',
  'Ẕ': 'Z',
  'Ƶ': 'Z',
  'Ĳ': 'IJ',
  'Œ': 'OE',
  'ᴀ': 'A',
  'ᴁ': 'AE',
  'ʙ': 'B',
  'ᴃ': 'B',
  'ᴄ': 'C',
  'ᴅ': 'D',
  'ᴇ': 'E',
  'ꜰ': 'F',
  'ɢ': 'G',
  'ʛ': 'G',
  'ʜ': 'H',
  'ɪ': 'I',
  'ʁ': 'R',
  'ᴊ': 'J',
  'ᴋ': 'K',
  'ʟ': 'L',
  'ᴌ': 'L',
  'ᴍ': 'M',
  'ɴ': 'N',
  'ᴏ': 'O',
  'ɶ': 'OE',
  'ᴐ': 'O',
  'ᴕ': 'OU',
  'ᴘ': 'P',
  'ʀ': 'R',
  'ᴎ': 'N',
  'ᴙ': 'R',
  'ꜱ': 'S',
  'ᴛ': 'T',
  'ⱻ': 'E',
  'ᴚ': 'R',
  'ᴜ': 'U',
  'ᴠ': 'V',
  'ᴡ': 'W',
  'ʏ': 'Y',
  'ᴢ': 'Z',
  'á': 'a',
  'ă': 'a',
  'ắ': 'a',
  'ặ': 'a',
  'ằ': 'a',
  'ẳ': 'a',
  'ẵ': 'a',
  'ǎ': 'a',
  'â': 'a',
  'ấ': 'a',
  'ậ': 'a',
  'ầ': 'a',
  'ẩ': 'a',
  'ẫ': 'a',
  'ä': 'a',
  'ǟ': 'a',
  'ȧ': 'a',
  'ǡ': 'a',
  'ạ': 'a',
  'ȁ': 'a',
  'à': 'a',
  'ả': 'a',
  'ȃ': 'a',
  'ā': 'a',
  'ą': 'a',
  'ᶏ': 'a',
  'ẚ': 'a',
  'å': 'a',
  'ǻ': 'a',
  'ḁ': 'a',
  'ⱥ': 'a',
  'ã': 'a',
  'ꜳ': 'aa',
  'æ': 'ae',
  'ǽ': 'ae',
  'ǣ': 'ae',
  'ꜵ': 'ao',
  'ꜷ': 'au',
  'ꜹ': 'av',
  'ꜻ': 'av',
  'ꜽ': 'ay',
  'ḃ': 'b',
  'ḅ': 'b',
  'ɓ': 'b',
  'ḇ': 'b',
  'ᵬ': 'b',
  'ᶀ': 'b',
  'ƀ': 'b',
  'ƃ': 'b',
  'ɵ': 'o',
  'ć': 'c',
  'č': 'c',
  'ç': 'c',
  'ḉ': 'c',
  'ĉ': 'c',
  'ɕ': 'c',
  'ċ': 'c',
  'ƈ': 'c',
  'ȼ': 'c',
  'ď': 'd',
  'ḑ': 'd',
  'ḓ': 'd',
  'ȡ': 'd',
  'ḋ': 'd',
  'ḍ': 'd',
  'ɗ': 'd',
  'ᶑ': 'd',
  'ḏ': 'd',
  'ᵭ': 'd',
  'ᶁ': 'd',
  'đ': 'd',
  'ɖ': 'd',
  'ƌ': 'd',
  'ı': 'i',
  'ȷ': 'j',
  'ɟ': 'j',
  'ʄ': 'j',
  'ǳ': 'dz',
  'ǆ': 'dz',
  'é': 'e',
  'ĕ': 'e',
  'ě': 'e',
  'ȩ': 'e',
  'ḝ': 'e',
  'ê': 'e',
  'ế': 'e',
  'ệ': 'e',
  'ề': 'e',
  'ể': 'e',
  'ễ': 'e',
  'ḙ': 'e',
  'ë': 'e',
  'ė': 'e',
  'ẹ': 'e',
  'ȅ': 'e',
  'è': 'e',
  'ẻ': 'e',
  'ȇ': 'e',
  'ē': 'e',
  'ḗ': 'e',
  'ḕ': 'e',
  'ⱸ': 'e',
  'ę': 'e',
  'ᶒ': 'e',
  'ɇ': 'e',
  'ẽ': 'e',
  'ḛ': 'e',
  'ꝫ': 'et',
  'ḟ': 'f',
  'ƒ': 'f',
  'ᵮ': 'f',
  'ᶂ': 'f',
  'ǵ': 'g',
  'ğ': 'g',
  'ǧ': 'g',
  'ģ': 'g',
  'ĝ': 'g',
  'ġ': 'g',
  'ɠ': 'g',
  'ḡ': 'g',
  'ᶃ': 'g',
  'ǥ': 'g',
  'ḫ': 'h',
  'ȟ': 'h',
  'ḩ': 'h',
  'ĥ': 'h',
  'ⱨ': 'h',
  'ḧ': 'h',
  'ḣ': 'h',
  'ḥ': 'h',
  'ɦ': 'h',
  'ẖ': 'h',
  'ħ': 'h',
  'ƕ': 'hv',
  'í': 'i',
  'ĭ': 'i',
  'ǐ': 'i',
  'î': 'i',
  'ï': 'i',
  'ḯ': 'i',
  'ị': 'i',
  'ȉ': 'i',
  'ì': 'i',
  'ỉ': 'i',
  'ȋ': 'i',
  'ī': 'i',
  'į': 'i',
  'ᶖ': 'i',
  'ɨ': 'i',
  'ĩ': 'i',
  'ḭ': 'i',
  'ꝺ': 'd',
  'ꝼ': 'f',
  'ᵹ': 'g',
  'ꞃ': 'r',
  'ꞅ': 's',
  'ꞇ': 't',
  'ꝭ': 'is',
  'ǰ': 'j',
  'ĵ': 'j',
  'ʝ': 'j',
  'ɉ': 'j',
  'ḱ': 'k',
  'ǩ': 'k',
  'ķ': 'k',
  'ⱪ': 'k',
  'ꝃ': 'k',
  'ḳ': 'k',
  'ƙ': 'k',
  'ḵ': 'k',
  'ᶄ': 'k',
  'ꝁ': 'k',
  'ꝅ': 'k',
  'ĺ': 'l',
  'ƚ': 'l',
  'ɬ': 'l',
  'ľ': 'l',
  'ļ': 'l',
  'ḽ': 'l',
  'ȴ': 'l',
  'ḷ': 'l',
  'ḹ': 'l',
  'ⱡ': 'l',
  'ꝉ': 'l',
  'ḻ': 'l',
  'ŀ': 'l',
  'ɫ': 'l',
  'ᶅ': 'l',
  'ɭ': 'l',
  'ł': 'l',
  'ǉ': 'lj',
  'ſ': 's',
  'ẜ': 's',
  'ẛ': 's',
  'ẝ': 's',
  'ḿ': 'm',
  'ṁ': 'm',
  'ṃ': 'm',
  'ɱ': 'm',
  'ᵯ': 'm',
  'ᶆ': 'm',
  'ń': 'n',
  'ň': 'n',
  'ņ': 'n',
  'ṋ': 'n',
  'ȵ': 'n',
  'ṅ': 'n',
  'ṇ': 'n',
  'ǹ': 'n',
  'ɲ': 'n',
  'ṉ': 'n',
  'ƞ': 'n',
  'ᵰ': 'n',
  'ᶇ': 'n',
  'ɳ': 'n',
  'ñ': 'n',
  'ǌ': 'nj',
  'ó': 'o',
  'ŏ': 'o',
  'ǒ': 'o',
  'ô': 'o',
  'ố': 'o',
  'ộ': 'o',
  'ồ': 'o',
  'ổ': 'o',
  'ỗ': 'o',
  'ö': 'o',
  'ȫ': 'o',
  'ȯ': 'o',
  'ȱ': 'o',
  'ọ': 'o',
  'ő': 'o',
  'ȍ': 'o',
  'ò': 'o',
  'ỏ': 'o',
  'ơ': 'o',
  'ớ': 'o',
  'ợ': 'o',
  'ờ': 'o',
  'ở': 'o',
  'ỡ': 'o',
  'ȏ': 'o',
  'ꝋ': 'o',
  'ꝍ': 'o',
  'ⱺ': 'o',
  'ō': 'o',
  'ṓ': 'o',
  'ṑ': 'o',
  'ǫ': 'o',
  'ǭ': 'o',
  'ø': 'o',
  'ǿ': 'o',
  'õ': 'o',
  'ṍ': 'o',
  'ṏ': 'o',
  'ȭ': 'o',
  'ƣ': 'oi',
  'ꝏ': 'oo',
  'ɛ': 'e',
  'ᶓ': 'e',
  'ɔ': 'o',
  'ᶗ': 'o',
  'ȣ': 'ou',
  'ṕ': 'p',
  'ṗ': 'p',
  'ꝓ': 'p',
  'ƥ': 'p',
  'ᵱ': 'p',
  'ᶈ': 'p',
  'ꝕ': 'p',
  'ᵽ': 'p',
  'ꝑ': 'p',
  'ꝙ': 'q',
  'ʠ': 'q',
  'ɋ': 'q',
  'ꝗ': 'q',
  'ŕ': 'r',
  'ř': 'r',
  'ŗ': 'r',
  'ṙ': 'r',
  'ṛ': 'r',
  'ṝ': 'r',
  'ȑ': 'r',
  'ɾ': 'r',
  'ᵳ': 'r',
  'ȓ': 'r',
  'ṟ': 'r',
  'ɼ': 'r',
  'ᵲ': 'r',
  'ᶉ': 'r',
  'ɍ': 'r',
  'ɽ': 'r',
  'ↄ': 'c',
  'ꜿ': 'c',
  'ɘ': 'e',
  'ɿ': 'r',
  'ś': 's',
  'ṥ': 's',
  'š': 's',
  'ṧ': 's',
  'ş': 's',
  'ŝ': 's',
  'ș': 's',
  'ṡ': 's',
  'ṣ': 's',
  'ṩ': 's',
  'ʂ': 's',
  'ᵴ': 's',
  'ᶊ': 's',
  'ȿ': 's',
  'ɡ': 'g',
  'ᴑ': 'o',
  'ᴓ': 'o',
  'ᴝ': 'u',
  'ť': 't',
  'ţ': 't',
  'ṱ': 't',
  'ț': 't',
  'ȶ': 't',
  'ẗ': 't',
  'ⱦ': 't',
  'ṫ': 't',
  'ṭ': 't',
  'ƭ': 't',
  'ṯ': 't',
  'ᵵ': 't',
  'ƫ': 't',
  'ʈ': 't',
  'ŧ': 't',
  'ᵺ': 'th',
  'ɐ': 'a',
  'ᴂ': 'ae',
  'ǝ': 'e',
  'ᵷ': 'g',
  'ɥ': 'h',
  'ʮ': 'h',
  'ʯ': 'h',
  'ᴉ': 'i',
  'ʞ': 'k',
  'ꞁ': 'l',
  'ɯ': 'm',
  'ɰ': 'm',
  'ᴔ': 'oe',
  'ɹ': 'r',
  'ɻ': 'r',
  'ɺ': 'r',
  'ⱹ': 'r',
  'ʇ': 't',
  'ʌ': 'v',
  'ʍ': 'w',
  'ʎ': 'y',
  'ꜩ': 'tz',
  'ú': 'u',
  'ŭ': 'u',
  'ǔ': 'u',
  'û': 'u',
  'ṷ': 'u',
  'ü': 'u',
  'ǘ': 'u',
  'ǚ': 'u',
  'ǜ': 'u',
  'ǖ': 'u',
  'ṳ': 'u',
  'ụ': 'u',
  'ű': 'u',
  'ȕ': 'u',
  'ù': 'u',
  'ủ': 'u',
  'ư': 'u',
  'ứ': 'u',
  'ự': 'u',
  'ừ': 'u',
  'ử': 'u',
  'ữ': 'u',
  'ȗ': 'u',
  'ū': 'u',
  'ṻ': 'u',
  'ų': 'u',
  'ᶙ': 'u',
  'ů': 'u',
  'ũ': 'u',
  'ṹ': 'u',
  'ṵ': 'u',
  'ᵫ': 'ue',
  'ꝸ': 'um',
  'ⱴ': 'v',
  'ꝟ': 'v',
  'ṿ': 'v',
  'ʋ': 'v',
  'ᶌ': 'v',
  'ⱱ': 'v',
  'ṽ': 'v',
  'ꝡ': 'vy',
  'ẃ': 'w',
  'ŵ': 'w',
  'ẅ': 'w',
  'ẇ': 'w',
  'ẉ': 'w',
  'ẁ': 'w',
  'ⱳ': 'w',
  'ẘ': 'w',
  'ẍ': 'x',
  'ẋ': 'x',
  'ᶍ': 'x',
  'ý': 'y',
  'ŷ': 'y',
  'ÿ': 'y',
  'ẏ': 'y',
  'ỵ': 'y',
  'ỳ': 'y',
  'ƴ': 'y',
  'ỷ': 'y',
  'ỿ': 'y',
  'ȳ': 'y',
  'ẙ': 'y',
  'ɏ': 'y',
  'ỹ': 'y',
  'ź': 'z',
  'ž': 'z',
  'ẑ': 'z',
  'ʑ': 'z',
  'ⱬ': 'z',
  'ż': 'z',
  'ẓ': 'z',
  'ȥ': 'z',
  'ẕ': 'z',
  'ᵶ': 'z',
  'ᶎ': 'z',
  'ʐ': 'z',
  'ƶ': 'z',
  'ɀ': 'z',
  'ﬀ': 'ff',
  'ﬃ': 'ffi',
  'ﬄ': 'ffl',
  'ﬁ': 'fi',
  'ﬂ': 'fl',
  'ĳ': 'ij',
  'œ': 'oe',
  'ﬆ': 'st',
  'ₐ': 'a',
  'ₑ': 'e',
  'ᵢ': 'i',
  'ⱼ': 'j',
  'ₒ': 'o',
  'ᵣ': 'r',
  'ᵤ': 'u',
  'ᵥ': 'v',
  'ₓ': 'x'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var TypeaheadOptions =
/**
 * @param {?} options
 */
function TypeaheadOptions(options) {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TypeaheadOptions);

  Object.assign(this, options);
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TypeaheadMatch = /*#__PURE__*/function () {
  // tslint:disable-next-line:no-any

  /**
   * @param {?} item
   * @param {?=} value
   * @param {?=} header
   */
  function TypeaheadMatch(item) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item;
    var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TypeaheadMatch);

    this.item = item;
    this.value = value;
    this.header = header;
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TypeaheadMatch, [{
    key: "isHeader",
    value: function isHeader() {
      return this.header;
    }
    /**
     * @return {?}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }]);

  return TypeaheadMatch;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TypeaheadOrder = function TypeaheadOrder() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TypeaheadOrder);
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} str
 * @return {?}
 */


function latinize(str) {
  if (!str) {
    return '';
  }

  return str.replace(/[^A-Za-z0-9\[\] ]/g,
  /**
  * @param {?} a
  * @return {?}
  */
  function (a) {
    return latinMap[a] || a;
  });
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */


function escapeRegexp(queryToEscape) {
  // Regex: capture the whole query string and replace it with the string
  // that will be used to match the results, for example if the capture is
  // 'a' the result will be \a
  return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */

/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @param {?=} delimitersForMultipleSearch
 * @return {?}
 */


function tokenize(str) {
  var wordRegexDelimiters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  var phraseRegexDelimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var delimitersForMultipleSearch = arguments.length > 3 ? arguments[3] : undefined;

  /** @type {?} */
  var result = [];

  if (!delimitersForMultipleSearch) {
    result = tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters);
  } else {
    /** @type {?} */
    var multipleSearchRegexStr = "([".concat(delimitersForMultipleSearch, "]+)");
    /** @type {?} */

    var delimitedTokens = str.split(new RegExp(multipleSearchRegexStr, 'g'));
    /** @type {?} */

    var lastToken = delimitedTokens[delimitedTokens.length - 1];

    if (lastToken > '') {
      if (wordRegexDelimiters && phraseRegexDelimiters) {
        result = tokenizeWordsAndPhrases(lastToken, wordRegexDelimiters, phraseRegexDelimiters);
      } else {
        result.push(lastToken);
      }
    }
  }

  return result;
}
/**
 * @param {?} str
 * @param {?} wordRegexDelimiters
 * @param {?} phraseRegexDelimiters
 * @return {?}
 */


function tokenizeWordsAndPhrases(str, wordRegexDelimiters, phraseRegexDelimiters) {
  /** @type {?} */
  var result = [];
  /* tslint:enable */

  /** @type {?} */

  var regexStr = "(?:[".concat(phraseRegexDelimiters, "])([^").concat(phraseRegexDelimiters, "]+)") + "(?:[".concat(phraseRegexDelimiters, "])|([^").concat(wordRegexDelimiters, "]+)");
  /** @type {?} */

  var preTokenized = str.split(new RegExp(regexStr, 'g'));
  /** @type {?} */

  var preTokenizedLength = preTokenized.length;
  /** @type {?} */

  var token;
  /** @type {?} */

  var replacePhraseDelimiters = new RegExp("[".concat(phraseRegexDelimiters, "]+"), 'g');

  for (var i = 0; i < preTokenizedLength; i += 1) {
    token = preTokenized[i];

    if (token && token.length && token !== wordRegexDelimiters) {
      result.push(token.replace(replacePhraseDelimiters, ''));
    }
  }

  return result;
} // tslint:disable-next-line:no-any

/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */


function getValueFromObject(object, option) {
  if (!option || typeof object !== 'object') {
    return object.toString();
  }

  if (option.endsWith('()')) {
    /** @type {?} */
    var functionName = option.slice(0, option.length - 2);
    return object[functionName]().toString();
  }
  /** @type {?} */


  var properties = option.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
  /** @type {?} */

  var propertiesArray = properties.split('.');

  var _iterator = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(propertiesArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (property in object) {
        // tslint:disable-next-line
        object = object[property];
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (!object) {
    return '';
  }

  return object.toString();
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var TYPEAHEAD_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */

var typeaheadAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('typeaheadAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('animated-down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
  height: '*',
  overflow: 'hidden'
})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => animated-down', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
  height: 0,
  overflow: 'hidden'
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(TYPEAHEAD_ANIMATION_TIMING)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('animated-up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
  height: '*',
  overflow: 'hidden'
})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => animated-up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
  height: '*',
  overflow: 'hidden'
}), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(TYPEAHEAD_ANIMATION_TIMING)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => unanimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0s'))]);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */

var nextWindowId = 0;

var TypeaheadContainerComponent = /*#__PURE__*/function () {
  /**
   * @param {?} positionService
   * @param {?} renderer
   * @param {?} element
   * @param {?} changeDetectorRef
   */
  function TypeaheadContainerComponent(positionService, renderer, element, changeDetectorRef) {
    var _this = this;

    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TypeaheadContainerComponent);

    this.positionService = positionService;
    this.renderer = renderer;
    this.element = element;
    this.changeDetectorRef = changeDetectorRef; // tslint:disable-next-line: no-output-rename

    this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.isFocused = false;
    this.height = 0;
    this.popupId = "ngb-typeahead-".concat(nextWindowId++);
    this._matches = [];

    this.isScrolledIntoView =
    /**
    * @param {?} elem
    * @return {?}
    */
    function (elem) {
      /** @type {?} */
      var containerViewTop = this.ulElement.nativeElement.scrollTop;
      /** @type {?} */

      var containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
      /** @type {?} */

      var elemTop = elem.offsetTop;
      /** @type {?} */

      var elemBottom = elemTop + elem.offsetHeight;
      return elemBottom <= containerViewBottom && elemTop >= containerViewTop;
    };

    this.renderer.setAttribute(this.element.nativeElement, 'id', this.popupId);
    this.positionServiceSubscription = this.positionService.event$.subscribe(
    /**
    * @return {?}
    */
    function () {
      if (_this.isAnimated) {
        _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';

        _this.changeDetectorRef.detectChanges();

        return;
      }

      _this.animationState = 'unanimated';

      _this.changeDetectorRef.detectChanges();
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TypeaheadContainerComponent, [{
    key: "selectActiveMatch",

    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    value: function selectActiveMatch(isActiveItemChanged) {
      if (this._active && this.parent.typeaheadSelectFirstItem) {
        this.selectMatch(this._active);
      }

      if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
        this.selectMatch(this._active);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "activeChanged",
    value: function activeChanged() {
      /** @type {?} */
      var index = this.matches.indexOf(this._active);
      this.activeChangeEvent.emit("".concat(this.popupId, "-").concat(index));
    }
    /**
     * @return {?}
     */

  }, {
    key: "prevActiveMatch",
    value: function prevActiveMatch() {
      /** @type {?} */
      var index = this.matches.indexOf(this._active);
      this.setActive(this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1]);

      if (this._active.isHeader()) {
        this.prevActiveMatch();
      }

      if (this.typeaheadScrollable) {
        this.scrollPrevious(index);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "nextActiveMatch",
    value: function nextActiveMatch() {
      /** @type {?} */
      var index = this.matches.indexOf(this._active);
      this.setActive(this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1]);

      if (this._active.isHeader()) {
        this.nextActiveMatch();
      }

      if (this.typeaheadScrollable) {
        this.scrollNext(index);
      }
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "selectActive",
    value: function selectActive(value) {
      this.isFocused = true;
      this.setActive(value);
    }
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */

  }, {
    key: "highlight",
    value: function highlight(match, query) {
      /** @type {?} */
      var itemStr = match.value;
      /** @type {?} */

      var itemStrHelper = (this.parent && this.parent.typeaheadLatinize ? latinize(itemStr) : itemStr).toLowerCase();
      /** @type {?} */

      var startIdx;
      /** @type {?} */

      var tokenLen; // Replaces the capture string with the same string inside of a "strong" tag

      if (typeof query === 'object') {
        /** @type {?} */
        var queryLen = query.length;

        for (var i = 0; i < queryLen; i += 1) {
          // query[i] is already latinized and lower case
          startIdx = itemStrHelper.indexOf(query[i]);
          tokenLen = query[i].length;

          if (startIdx >= 0 && tokenLen > 0) {
            itemStr = "".concat(itemStr.substring(0, startIdx), "<strong>").concat(itemStr.substring(startIdx, startIdx + tokenLen), "</strong>") + "".concat(itemStr.substring(startIdx + tokenLen));
            itemStrHelper = "".concat(itemStrHelper.substring(0, startIdx), "        ").concat(' '.repeat(tokenLen), "         ") + "".concat(itemStrHelper.substring(startIdx + tokenLen));
          }
        }
      } else if (query) {
        // query is already latinized and lower case
        startIdx = itemStrHelper.indexOf(query);
        tokenLen = query.length;

        if (startIdx >= 0 && tokenLen > 0) {
          itemStr = "".concat(itemStr.substring(0, startIdx), "<strong>").concat(itemStr.substring(startIdx, startIdx + tokenLen), "</strong>") + "".concat(itemStr.substring(startIdx + tokenLen));
        }
      }

      return itemStr;
    }
    /**
     * @return {?}
     */

  }, {
    key: "focusLost",
    value: function focusLost() {
      this.isFocused = false;
      this.setActive(null);
    }
    /**
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "isActive",
    value: function isActive(value) {
      return this.active === value;
    }
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */

  }, {
    key: "selectMatch",
    value: function selectMatch(value) {
      var _this2 = this;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;

      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }

      this.parent.changeModel(value);
      setTimeout(
      /**
      * @return {?}
      */
      function () {
        return _this2.parent.typeaheadOnSelect.emit(value);
      }, 0);
      return false;
    }
    /**
     * @return {?}
     */

  }, {
    key: "setScrollableMode",
    value: function setScrollableMode() {
      if (!this.ulElement) {
        this.ulElement = this.element;
      }

      if (this.liElements.first) {
        /** @type {?} */
        var ulStyles = bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].getStyles(this.ulElement.nativeElement);
        /** @type {?} */

        var liStyles = bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].getStyles(this.liElements.first.nativeElement);
        /** @type {?} */

        var ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '').replace('px', ''));
        /** @type {?} */

        var ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0').replace('px', ''));
        /** @type {?} */

        var optionHeight = parseFloat((liStyles.height ? liStyles.height : '0').replace('px', ''));
        /** @type {?} */

        var height = this.typeaheadOptionsInScrollableView * optionHeight;
        this.guiHeight = "".concat(height + ulPaddingTop + ulPaddingBottom, "px");
      }

      this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "scrollPrevious",
    value: function scrollPrevious(index) {
      if (index === 0) {
        this.scrollToBottom();
        return;
      }

      if (this.liElements) {
        /** @type {?} */
        var liElement = this.liElements.toArray()[index - 1];

        if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
          this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
        }
      }
    }
    /**
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "scrollNext",
    value: function scrollNext(index) {
      if (index + 1 > this.matches.length - 1) {
        this.scrollToTop();
        return;
      }

      if (this.liElements) {
        /** @type {?} */
        var liElement = this.liElements.toArray()[index + 1];

        if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
          this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop - Number(this.ulElement.nativeElement.offsetHeight) + Number(liElement.nativeElement.offsetHeight);
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.positionServiceSubscription.unsubscribe();
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "setActive",
    value: function setActive(value) {
      this._active = value;
      /** @type {?} */

      var preview = value;

      if (this._active === null || this._active.isHeader()) {
        preview = null;
      }

      this.parent.typeaheadOnPreview.emit(preview);
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.ulElement.nativeElement.scrollTop = 0;
    }
  }, {
    key: "isBs4",
    get: function get() {
      return !Object(bao_tran_angular_utils__WEBPACK_IMPORTED_MODULE_4__["isBs3"])();
    }
    /**
     * @return {?}
     */

  }, {
    key: "typeaheadTemplateMethods",
    get: function get() {
      /* tslint:disable:no-this-assignment */

      /** @type {?} */
      var _that = this;

      return {
        selectMatch: this.selectMatch.bind(_that),
        selectActive: this.selectActive.bind(_that),
        isActive: this.isActive.bind(_that)
      };
    }
    /**
     * @return {?}
     */

  }, {
    key: "active",
    get: function get() {
      return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    ,
    set: function set(active) {
      this._active = active;
      this.activeChanged();
    }
    /**
     * @return {?}
     */

  }, {
    key: "matches",
    get: function get() {
      return this._matches;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ,
    set: function set(value) {
      var _this3 = this;

      this.positionService.setOptions({
        modifiers: {
          flip: {
            enabled: this.adaptivePosition
          }
        },
        allowedPositions: ['top', 'bottom']
      });
      this._matches = value;
      this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;

      if (this.typeaheadScrollable) {
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this3.setScrollableMode();
        });
      }

      if (this.typeaheadIsFirstItemActive && this._matches.length > 0) {
        this.setActive(this._matches[0]);

        if (this._active.isHeader()) {
          this.nextActiveMatch();
        }
      }

      if (this._active && !this.typeaheadIsFirstItemActive) {
        /** @type {?} */
        var concurrency = this._matches.find(
        /**
        * @param {?} match
        * @return {?}
        */
        function (match) {
          return match.value === _this3._active.value;
        });

        if (concurrency) {
          this.selectActive(concurrency);
          return;
        }

        this.active = null;
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "isTopPosition",
    get: function get() {
      return this.element.nativeElement.classList.contains('top');
    } // tslint:disable-next-line:no-any

    /**
     * @return {?}
     */

  }, {
    key: "optionsListTemplate",
    get: function get() {
      return this.parent ? this.parent.optionsListTemplate : undefined;
    }
    /**
     * @return {?}
     */

  }, {
    key: "isAnimated",
    get: function get() {
      return this.parent ? this.parent.isAnimated : false;
    }
    /**
     * @return {?}
     */

  }, {
    key: "adaptivePosition",
    get: function get() {
      return this.parent ? this.parent.adaptivePosition : false;
    }
    /**
     * @return {?}
     */

  }, {
    key: "typeaheadScrollable",
    get: function get() {
      return this.parent ? this.parent.typeaheadScrollable : false;
    }
    /**
     * @return {?}
     */

  }, {
    key: "typeaheadOptionsInScrollableView",
    get: function get() {
      return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
    }
    /**
     * @return {?}
     */

  }, {
    key: "typeaheadIsFirstItemActive",
    get: function get() {
      return this.parent ? this.parent.typeaheadIsFirstItemActive : true;
    } // tslint:disable-next-line:no-any

    /**
     * @return {?}
     */

  }, {
    key: "itemTemplate",
    get: function get() {
      return this.parent ? this.parent.typeaheadItemTemplate : undefined;
    }
  }]);

  return TypeaheadContainerComponent;
}();

TypeaheadContainerComponent.ɵfac = function TypeaheadContainerComponent_Factory(t) {
  return new (t || TypeaheadContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
};

TypeaheadContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TypeaheadContainerComponent,
  selectors: [["typeahead-container"]],
  viewQuery: function TypeaheadContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ulElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.liElements = _t);
    }
  },
  hostAttrs: [1, "dropdown", "open", "bottom", 2, "position", "absolute", "display", "block"],
  hostVars: 9,
  hostBindings: function TypeaheadContainerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseleave", function TypeaheadContainerComponent_mouseleave_HostBindingHandler() {
        return ctx.focusLost();
      })("blur", function TypeaheadContainerComponent_blur_HostBindingHandler() {
        return ctx.focusLost();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.isBs4 ? "listbox" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.isBs4 && ctx.needScrollbar ? ctx.guiHeight : "auto")("visibility", "inherit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("dropdown-menu", ctx.isBs4)("dropup", ctx.dropup);
    }
  },
  outputs: {
    activeChangeEvent: "activeChange"
  },
  decls: 7,
  vars: 7,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["bsItemTemplate", ""], ["bs3Template", ""], ["bs4Template", ""], [3, "innerHtml"], ["role", "listbox", 1, "dropdown-menu"], ["ulElement", ""], ["ngFor", "", 3, "ngForOf"], ["class", "dropdown-header", 4, "ngIf"], ["role", "option", 3, "id", "active", "mouseenter", 4, "ngIf"], [1, "dropdown-header"], ["liElements", ""], ["role", "option", 3, "id", "mouseenter"], ["href", "#", "tabindex", "-1", 3, "click"], [3, "ngIf"], ["role", "option", 1, "dropdown-item", 3, "id", "click", "mouseenter"]],
  template: function TypeaheadContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TypeaheadContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TypeaheadContainerComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TypeaheadContainerComponent_ng_template_3_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TypeaheadContainerComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

      var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.optionsListTemplate || (ctx.isBs4 ? _r5 : _r3))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction4"](2, _c3, ctx.matches, ctx.itemTemplate || _r1, ctx.query, ctx.typeaheadTemplateMethods));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
  styles: [".dropdown[_nghost-%COMP%] {\n      z-index: 1000;\n    }\n\n    .dropdown-menu[_nghost-%COMP%], .dropdown-menu[_ngcontent-%COMP%] {\n      overflow-y: auto;\n      height: 100px;\n    }"],
  data: {
    animation: [typeaheadAnimation]
  }
});
/** @nocollapse */

TypeaheadContainerComponent.ctorParameters = function () {
  return [{
    type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }];
};

TypeaheadContainerComponent.propDecorators = {
  activeChangeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
    args: ['activeChange']
  }],
  ulElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
    args: ['ulElement', {
      static: false
    }]
  }],
  liElements: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
    args: ['liElements']
  }],
  focusLost: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['mouseleave']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['blur']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TypeaheadContainerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'typeahead-container',
      template: "<!-- inject options list template -->\r\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\r\n             [ngTemplateOutletContext]=\"{\r\n               matches: matches,\r\n               itemTemplate: itemTemplate || bsItemTemplate,\r\n               query: query,\r\n               $implicit: typeaheadTemplateMethods\r\n             }\">\r\n</ng-template>\r\n\r\n<!-- default options item template -->\r\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\">\r\n  <span [innerHtml]=\"highlight(match, query)\"></span>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 3 options list template -->\r\n<ng-template #bs3Template>\r\n  <ul class=\"dropdown-menu\"\r\n      #ulElement\r\n      role=\"listbox\"\r\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\r\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\r\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\r\n      <li #liElements\r\n          *ngIf=\"!match.isHeader()\"\r\n          [id]=\"popupId + '-' + i\"\r\n          role=\"option\"\r\n          [@typeaheadAnimation]=\"animationState\"\r\n          [class.active]=\"isActive(match)\"\r\n          (mouseenter)=\"selectActive(match)\">\r\n\r\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\r\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                       [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\r\n          </ng-template>\r\n        </a>\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 4 options list template -->\r\n<ng-template #bs4Template>\r\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\r\n    <ng-template [ngIf]=\"!match.isHeader()\">\r\n      <button #liElements\r\n              [id]=\"popupId + '-' + i\"\r\n              role=\"option\"\r\n              [@typeaheadAnimation]=\"animationState\"\r\n              class=\"dropdown-item\"\r\n              (click)=\"selectMatch(match, $event)\"\r\n              (mouseenter)=\"selectActive(match)\"\r\n              [class.active]=\"isActive(match)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                     [ngTemplateOutletContext]=\"{item: match.item, index: i, match: match, query: query}\">\r\n        </ng-template>\r\n      </button>\r\n    </ng-template>\r\n  </ng-template>\r\n</ng-template>\r\n",
      host: {
        class: 'dropdown open bottom',
        '[class.dropdown-menu]': 'isBs4',
        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
        '[style.visibility]': "'inherit'",
        '[class.dropup]': 'dropup',
        style: 'position: absolute;display: block;',
        '[attr.role]': "isBs4 ? 'listbox' : null "
      },
      animations: [typeaheadAnimation],
      styles: ["\n    :host.dropdown {\n      z-index: 1000;\n    }\n\n    :host.dropdown-menu, .dropdown-menu {\n      overflow-y: auto;\n      height: 100px;\n    }\n  "]
    }]
  }], function () {
    return [{
      type: bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }];
  }, {
    activeChangeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
      args: ['activeChange']
    }],

    /**
     * @return {?}
     */
    focusLost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['mouseleave']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['blur']
    }],
    ulElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['ulElement', {
        static: false
      }]
    }],
    liElements: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
      args: ['liElements']
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Default values provider for typeahead
 */


var TypeaheadConfig = function TypeaheadConfig() {
  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TypeaheadConfig);

  /**
   * sets use adaptive position
   */
  this.adaptivePosition = false;
  /**
   * turn on/off animation
   */

  this.isAnimated = false;
  /**
   * used to hide results on blur
   */

  this.hideResultsOnBlur = true;
  /**
   * if true, typeahead will cancel async request on blur
   */

  this.cancelRequestOnFocusLost = false;
  /**
   * used to choose the first item in typeahead container
   */

  this.selectFirstItem = true;
  /**
   * used to active/inactive the first item in typeahead container
   */

  this.isFirstItemActive = true;
  /**
   * used to choose set minimal no of characters that needs to
   * be entered before typeahead kicks-in
   */

  this.minLength = 1;
};

TypeaheadConfig.ɵfac = function TypeaheadConfig_Factory(t) {
  return new (t || TypeaheadConfig)();
};
/** @nocollapse */


TypeaheadConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function TypeaheadConfig_Factory() {
    return new TypeaheadConfig();
  },
  token: TypeaheadConfig,
  providedIn: "root"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TypeaheadConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TypeaheadDirective = /*#__PURE__*/function () {
  /**
   * @param {?} cis
   * @param {?} config
   * @param {?} changeDetection
   * @param {?} element
   * @param {?} ngControl
   * @param {?} renderer
   * @param {?} viewContainerRef
   */
  function TypeaheadDirective(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TypeaheadDirective);

    this.changeDetection = changeDetection;
    this.element = element;
    this.ngControl = ngControl;
    this.renderer = renderer;
    /**
     * minimal no of characters that needs to be entered before
     * typeahead kicks-in. When set to 0, typeahead shows on focus with full
     * list of options (limited as normal by typeaheadOptionsLimit)
     */

    this.typeaheadMinLength = void 0;
    /**
     * turn on/off animation
     */

    this.isAnimated = false;
    /**
     * should be used only in case of typeahead attribute is Observable of array.
     * If true - loading of options will be async, otherwise - sync.
     * true make sense if options array is large.
     */

    this.typeaheadAsync = void 0;
    /**
     * match latin symbols.
     * If true the word súper would match super and vice versa.
     */

    this.typeaheadLatinize = true;
    /**
     * Can be use to search words by inserting a single white space between each characters
     *  for example 'C a l i f o r n i a' will match 'California'.
     */

    this.typeaheadSingleWords = true;
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to break words. Defaults to space.
     */

    this.typeaheadWordDelimiters = ' ';
    /**
     * Can be used to conduct a search of multiple items and have suggestion not for the
     * whole value of the input but for the value that comes after a delimiter provided via
     * typeaheadMultipleSearchDelimiters attribute. This option can only be used together with
     * typeaheadSingleWords option if typeaheadWordDelimiters and typeaheadPhraseDelimiters
     * are different from typeaheadMultipleSearchDelimiters to avoid conflict in determining
     * when to delimit multiple searches and when a single word.
     */

    this.typeaheadMultipleSearch = void 0;
    /**
     * should be used only in case typeaheadMultipleSearch attribute is true.
     * Sets the multiple search delimiter to know when to start a new search. Defaults to comma.
     * If space needs to be used, then explicitly set typeaheadWordDelimiters to something else than space
     * because space is used by default OR set typeaheadSingleWords attribute to false if you don't need
     * to use it together with multiple search.
     */

    this.typeaheadMultipleSearchDelimiters = ',';
    /**
     * should be used only in case typeaheadSingleWords attribute is true.
     * Sets the word delimiter to match exact phrase.
     * Defaults to simple and double quotes.
     */

    this.typeaheadPhraseDelimiters = '\'"';
    /**
     * specifies if typeahead is scrollable
     */

    this.typeaheadScrollable = false;
    /**
     * specifies number of options to show in scroll view
     */

    this.typeaheadOptionsInScrollableView = 5;
    /**
     * fired when an options list was opened and the user clicked Tab
     * If a value equal true, it will be chosen first or active item in the list
     * If value equal false, it will be chosen an active item in the list or nothing
     */

    this.typeaheadSelectFirstItem = true;
    /**
     * makes active first item in a list
     */

    this.typeaheadIsFirstItemActive = true;
    /**
     * fired when 'busy' state of this component was changed,
     * fired on async mode only, returns boolean
     */

    this.typeaheadLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * fired on every key event and returns true
     * in case of matches are not detected
     */

    this.typeaheadNoResults = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * fired when option was selected, return object with data of this option.
     */

    this.typeaheadOnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * fired when option was previewed, return object with data of this option.
     */

    this.typeaheadOnPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * fired when blur event occurs. returns the active item
     */

    this.typeaheadOnBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    /**
     * This attribute indicates that the dropdown should be opened upwards
     */

    this.dropup = false;
    this.isOpen = false;
    this.list = 'list';
    this.isActiveItemChanged = false;
    this.isFocused = false;
    this.cancelRequestOnFocusLost = false; // tslint:disable-next-line:no-any

    this.keyUpEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this._matches = [];
    this.placement = 'bottom left';
    this._subscriptions = [];
    this._typeahead = cis.createLoader(element, viewContainerRef, renderer).provide({
      provide: TypeaheadConfig,
      useValue: config
    });
    Object.assign(this, {
      typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
      cancelRequestOnFocusLost: config.cancelRequestOnFocusLost,
      typeaheadSelectFirstItem: config.selectFirstItem,
      typeaheadIsFirstItemActive: config.isFirstItemActive,
      typeaheadMinLength: config.minLength,
      adaptivePosition: config.adaptivePosition,
      isAnimated: config.isAnimated
    });
  }
  /**
   * @return {?}
   */


  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TypeaheadDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
      this.typeaheadMinLength = this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
      this.typeaheadWaitMs = this.typeaheadWaitMs || 0; // async should be false in case of array

      if (this.typeaheadAsync === undefined && !Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["isObservable"])(this.typeahead)) {
        this.typeaheadAsync = false;
      }

      if (Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["isObservable"])(this.typeahead)) {
        this.typeaheadAsync = true;
      }

      if (this.typeaheadAsync) {
        this.asyncActions();
      } else {
        this.syncActions();
      }

      this.checkDelimitersConflict();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any

  }, {
    key: "onInput",
    value: function onInput(e) {
      // For `<input>`s, use the `value` property. For others that don't have a
      // `value` (such as `<span contenteditable="true">`), use either
      // `textContent` or `innerText` (depending on which one is supported, i.e.
      // Firefox or IE).

      /** @type {?} */
      var value = e.target.value !== undefined ? e.target.value : e.target.textContent !== undefined ? e.target.textContent : e.target.innerText;

      if (value != null && value.trim().length >= this.typeaheadMinLength) {
        this.typeaheadLoading.emit(true);
        this.keyUpEventEmitter.emit(e.target.value);
      } else {
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(false);
        this.hide();
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onChange",
    value: function onChange(event) {
      if (this._container) {
        // esc

        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 27 || event.key === 'Escape') {
          this.hide();
          return;
        } // up

        /* tslint:disable-next-line: deprecation */


        if (event.keyCode === 38 || event.key === 'ArrowUp') {
          this.isActiveItemChanged = true;

          this._container.prevActiveMatch();

          return;
        } // down

        /* tslint:disable-next-line: deprecation */


        if (event.keyCode === 40 || event.key === 'ArrowDown') {
          this.isActiveItemChanged = true;

          this._container.nextActiveMatch();

          return;
        } // enter

        /* tslint:disable-next-line: deprecation */


        if (event.keyCode === 13 || event.key === 'Enter') {
          this._container.selectActiveMatch();

          return;
        }
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "onFocus",
    value: function onFocus() {
      var _this4 = this;

      this.isFocused = true; // add setTimeout to fix issue #5251
      // to get and emit updated value if it's changed on focus

      setTimeout(
      /**
      * @return {?}
      */
      function () {
        if (_this4.typeaheadMinLength === 0) {
          _this4.typeaheadLoading.emit(true);

          _this4.keyUpEventEmitter.emit(_this4.element.nativeElement.value || '');
        }
      }, 0);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onBlur",
    value: function onBlur() {
      this.isFocused = false;

      if (this._container && !this._container.isFocused) {
        this.typeaheadOnBlur.emit(this._container.active);
      }

      if (!this.container && this._matches.length === 0) {
        this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
      }
    }
    /**
     * @param {?} event
     * @return {?}
     */

  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      // no container - no problems
      if (!this._container) {
        return;
      }
      /* tslint:disable-next-line: deprecation */


      if (event.keyCode === 9 || event.key === 'Tab') {
        this.onBlur();
      }
      /* tslint:disable-next-line: deprecation */


      if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
        event.preventDefault();

        if (this.typeaheadSelectFirstItem) {
          this._container.selectActiveMatch();

          return;
        }

        if (!this.typeaheadSelectFirstItem) {
          this._container.selectActiveMatch(this.isActiveItemChanged);

          this.isActiveItemChanged = false;
          this.hide();
        }
      }
    }
    /**
     * @param {?} match
     * @return {?}
     */

  }, {
    key: "changeModel",
    value: function changeModel(match) {
      /** @type {?} */
      var valueStr;

      if (this.typeaheadMultipleSearch) {
        /** @type {?} */
        var tokens = this._allEnteredValue.split(new RegExp("([".concat(this.typeaheadMultipleSearchDelimiters, "]+)")));

        this._allEnteredValue = tokens.slice(0, tokens.length - 1).concat(match.value).join('');
        valueStr = this._allEnteredValue;
      } else {
        valueStr = match.value;
      }

      this.ngControl.viewToModelUpdate(valueStr);
      this.ngControl.control.setValue(valueStr);
      this.changeDetection.markForCheck();
      this.hide();
    }
    /**
     * @return {?}
     */

  }, {
    key: "show",

    /**
     * @return {?}
     */
    value: function show() {
      var _this5 = this;

      this._typeahead.attach(TypeaheadContainerComponent).to(this.container).position({
        attachment: "".concat(this.dropup ? 'top' : 'bottom', " left")
      }).show({
        typeaheadRef: this,
        placement: this.placement,
        animation: false,
        dropup: this.dropup
      });

      this._outsideClickListener = this.renderer.listen('document', 'click',
      /**
      * @param {?} e
      * @return {?}
      */
      function (e) {
        if (_this5.typeaheadMinLength === 0 && _this5.element.nativeElement.contains(e.target)) {
          return undefined;
        }

        if (!_this5.typeaheadHideResultsOnBlur || _this5.element.nativeElement.contains(e.target)) {
          return undefined;
        }

        _this5.onOutsideClick();
      });
      this._container = this._typeahead.instance;
      this._container.parent = this; // This improves the speed as it won't have to be done for each list item

      /** @type {?} */

      var normalizedQuery = (this.typeaheadLatinize ? latinize(this.ngControl.control.value) : this.ngControl.control.value).toString().toLowerCase();
      this._container.query = this.tokenizeQuery(normalizedQuery);
      this._container.matches = this._matches;
      this.element.nativeElement.focus();

      this._container.activeChangeEvent.subscribe(
      /**
      * @param {?} activeId
      * @return {?}
      */
      function (activeId) {
        _this5.activeDescendant = activeId;

        _this5.changeDetection.markForCheck();
      });

      this.isOpen = true;
    }
    /**
     * @return {?}
     */

  }, {
    key: "hide",
    value: function hide() {
      if (this._typeahead.isShown) {
        this._typeahead.hide();

        this._outsideClickListener();

        this._container = null;
        this.isOpen = false;
        this.changeDetection.markForCheck();
      }

      this.typeaheadOnPreview.emit(null);
    }
    /**
     * @return {?}
     */

  }, {
    key: "onOutsideClick",
    value: function onOutsideClick() {
      if (this._container && !this._container.isFocused) {
        this.hide();
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // clean up subscriptions
      var _iterator2 = Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(this._subscriptions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var sub = _step2.value;
          sub.unsubscribe();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this._typeahead.dispose();
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "asyncActions",
    value: function asyncActions() {
      var _this6 = this;

      this._subscriptions.push(this.keyUpEventEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        _this6._allEnteredValue = value;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(
      /**
      * @return {?}
      */
      function () {
        return _this6.typeahead;
      })).subscribe(
      /**
      * @param {?} matches
      * @return {?}
      */
      function (matches) {
        _this6.finalizeAsyncCall(matches);
      }));
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "syncActions",
    value: function syncActions() {
      var _this7 = this;

      this._subscriptions.push(this.keyUpEventEmitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mergeMap"])(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        _this7._allEnteredValue = value;
        /** @type {?} */

        var normalizedQuery = _this7.normalizeQuery(value);

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(_this7.typeahead).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(
        /**
        * @param {?} option
        * @return {?}
        */
        function (option) {
          return option && _this7.testMatch(_this7.normalizeOption(option), normalizedQuery);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["toArray"])());
      })).subscribe(
      /**
      * @param {?} matches
      * @return {?}
      */
      function (matches) {
        _this7.finalizeAsyncCall(matches);
      }));
    }
    /**
     * @protected
     * @param {?} option
     * @return {?}
     */

  }, {
    key: "normalizeOption",
    value: function normalizeOption(option) {
      /** @type {?} */
      var optionValue = getValueFromObject(option, this.typeaheadOptionField);
      /** @type {?} */

      var normalizedOption = this.typeaheadLatinize ? latinize(optionValue) : optionValue;
      return normalizedOption.toLowerCase();
    }
    /**
     * @protected
     * @param {?} currentQuery
     * @return {?}
     */

  }, {
    key: "tokenizeQuery",
    value: function tokenizeQuery(currentQuery) {
      /** @type {?} */
      var query = currentQuery;

      if (this.typeaheadMultipleSearch && this.typeaheadSingleWords) {
        if (!this.haveCommonCharacters("".concat(this.typeaheadPhraseDelimiters).concat(this.typeaheadWordDelimiters), this.typeaheadMultipleSearchDelimiters)) {
          // single words and multiple search delimiters are different, can be used together
          query = tokenize(
          /** @type {?} */
          query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters, this.typeaheadMultipleSearchDelimiters);
        }
      } else if (this.typeaheadSingleWords) {
        query = tokenize(
        /** @type {?} */
        query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters);
      } else {
        // multiple searches
        query = tokenize(
        /** @type {?} */
        query, null, null, this.typeaheadMultipleSearchDelimiters);
      }

      return query;
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */

  }, {
    key: "normalizeQuery",
    value: function normalizeQuery(value) {
      // If singleWords, break model here to not be doing extra work on each iteration

      /** @type {?} */
      var normalizedQuery = (this.typeaheadLatinize ? latinize(value) : value).toString().toLowerCase();
      normalizedQuery = this.tokenizeQuery(normalizedQuery);
      return normalizedQuery;
    }
    /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */

  }, {
    key: "testMatch",
    value: function testMatch(match, test) {
      /** @type {?} */
      var spaceLength;

      if (typeof test === 'object') {
        spaceLength = test.length;

        for (var i = 0; i < spaceLength; i += 1) {
          if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
            return false;
          }
        }

        return true;
      }

      return match.indexOf(test) >= 0;
    }
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */

  }, {
    key: "finalizeAsyncCall",
    value: function finalizeAsyncCall(matches) {
      this.prepareMatches(matches || []);
      this.typeaheadLoading.emit(false);
      this.typeaheadNoResults.emit(!this.hasMatches());

      if (!this.hasMatches()) {
        this.hide();
        return;
      }

      if (!this.isFocused && this.cancelRequestOnFocusLost) {
        return;
      }

      if (this._container) {
        // fix: remove usage of ngControl internals

        /** @type {?} */
        var _controlValue = (this.typeaheadLatinize ? latinize(this.ngControl.control.value) : this.ngControl.control.value) || ''; // This improves the speed as it won't have to be done for each list item

        /** @type {?} */


        var normalizedQuery = _controlValue.toString().toLowerCase();

        this._container.query = this.tokenizeQuery(normalizedQuery);
        this._container.matches = this._matches;
      } else {
        this.show();
      }
    }
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "prepareMatches",
    value: function prepareMatches(options) {
      var _this8 = this;

      /** @type {?} */
      var limited = options.slice(0, this.typeaheadOptionsLimit);
      /** @type {?} */

      var sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);

      if (this.typeaheadGroupField) {
        /** @type {?} */
        var matches = []; // extract all group names

        /** @type {?} */

        var groups = sorted.map(
        /**
        * @param {?} option
        * @return {?}
        */
        function (option) {
          return getValueFromObject(option, _this8.typeaheadGroupField);
        }).filter(
        /**
        * @param {?} v
        * @param {?} i
        * @param {?} a
        * @return {?}
        */
        function (v, i, a) {
          return a.indexOf(v) === i;
        });
        groups.forEach(
        /**
        * @param {?} group
        * @return {?}
        */
        function (group) {
          // add group header to array of matches
          matches.push(new TypeaheadMatch(group, group, true)); // add each item of group to array of matches

          matches = matches.concat(sorted.filter(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return getValueFromObject(option, _this8.typeaheadGroupField) === group;
          }).map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return new TypeaheadMatch(option, getValueFromObject(option, _this8.typeaheadOptionField));
          }));
        });
        this._matches = matches;
      } else {
        this._matches = sorted.map( // tslint:disable-next-line:no-any

        /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
          return new TypeaheadMatch(option, getValueFromObject(option, _this8.typeaheadOptionField));
        });
      }
    }
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */

  }, {
    key: "orderMatches",
    value: function orderMatches(options) {
      if (!options.length) {
        return options;
      }

      if (this.typeaheadOrderBy !== null && this.typeaheadOrderBy !== undefined && typeof this.typeaheadOrderBy === 'object' && Object.keys(this.typeaheadOrderBy).length === 0) {
        // tslint:disable-next-line:no-console
        console.error('Field and direction properties for typeaheadOrderBy have to be set according to documentation!');
        return options;
      }

      var _this$typeaheadOrderB = this.typeaheadOrderBy,
          field = _this$typeaheadOrderB.field,
          direction = _this$typeaheadOrderB.direction;

      if (!direction || !(direction === 'asc' || direction === 'desc')) {
        // tslint:disable-next-line:no-console
        console.error('typeaheadOrderBy direction has to equal "asc" or "desc". Please follow the documentation.');
        return options;
      }

      if (typeof options[0] === 'string') {
        return direction === 'asc' ? options.sort() : options.sort().reverse();
      }

      if (!field || typeof field !== 'string') {
        // tslint:disable-next-line:no-console
        console.error('typeaheadOrderBy field has to set according to the documentation.');
        return options;
      }

      return options.sort(
      /**
      * @param {?} a
      * @param {?} b
      * @return {?}
      */
      function (a, b) {
        /** @type {?} */
        var stringA = getValueFromObject(a, field);
        /** @type {?} */

        var stringB = getValueFromObject(b, field);

        if (stringA < stringB) {
          return direction === 'asc' ? -1 : 1;
        }

        if (stringA > stringB) {
          return direction === 'asc' ? 1 : -1;
        }

        return 0;
      });
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "hasMatches",
    value: function hasMatches() {
      return this._matches.length > 0;
    }
    /**
     * @protected
     * @return {?}
     */

  }, {
    key: "checkDelimitersConflict",
    value: function checkDelimitersConflict() {
      if (this.typeaheadMultipleSearch && this.typeaheadSingleWords && this.haveCommonCharacters("".concat(this.typeaheadPhraseDelimiters).concat(this.typeaheadWordDelimiters), this.typeaheadMultipleSearchDelimiters)) {
        throw new Error("Delimiters used in typeaheadMultipleSearchDelimiters must be different\n          from delimiters used in typeaheadWordDelimiters (current value: ".concat(this.typeaheadWordDelimiters, ") and\n          typeaheadPhraseDelimiters (current value: ").concat(this.typeaheadPhraseDelimiters, ").\n          Please refer to the documentation"));
      }
    }
    /**
     * @protected
     * @param {?} str1
     * @param {?} str2
     * @return {?}
     */

  }, {
    key: "haveCommonCharacters",
    value: function haveCommonCharacters(str1, str2) {
      for (var i = 0; i < str1.length; i++) {
        if (str1.charAt(i).indexOf(str2) > -1) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "matches",
    get: function get() {
      return this._matches;
    }
  }]);

  return TypeaheadDirective;
}();

TypeaheadDirective.ɵfac = function TypeaheadDirective_Factory(t) {
  return new (t || TypeaheadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TypeaheadConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]));
};

TypeaheadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: TypeaheadDirective,
  selectors: [["", "typeahead", ""]],
  hostVars: 4,
  hostBindings: function TypeaheadDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function TypeaheadDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("keyup", function TypeaheadDirective_keyup_HostBindingHandler($event) {
        return ctx.onChange($event);
      })("click", function TypeaheadDirective_click_HostBindingHandler() {
        return ctx.onFocus();
      })("focus", function TypeaheadDirective_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function TypeaheadDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("keydown", function TypeaheadDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isOpen ? ctx._container.popupId : null)("aria-expanded", ctx.isOpen)("aria-autocomplete", ctx.list);
    }
  },
  inputs: {
    isAnimated: "isAnimated",
    typeaheadLatinize: "typeaheadLatinize",
    typeaheadSingleWords: "typeaheadSingleWords",
    typeaheadWordDelimiters: "typeaheadWordDelimiters",
    typeaheadMultipleSearchDelimiters: "typeaheadMultipleSearchDelimiters",
    typeaheadPhraseDelimiters: "typeaheadPhraseDelimiters",
    typeaheadScrollable: "typeaheadScrollable",
    typeaheadOptionsInScrollableView: "typeaheadOptionsInScrollableView",
    typeaheadSelectFirstItem: "typeaheadSelectFirstItem",
    typeaheadIsFirstItemActive: "typeaheadIsFirstItemActive",
    dropup: "dropup",
    typeaheadOptionsLimit: "typeaheadOptionsLimit",
    typeaheadMinLength: "typeaheadMinLength",
    typeaheadWaitMs: "typeaheadWaitMs",
    typeaheadAsync: "typeaheadAsync",
    typeahead: "typeahead",
    adaptivePosition: "adaptivePosition",
    typeaheadOptionField: "typeaheadOptionField",
    typeaheadGroupField: "typeaheadGroupField",
    typeaheadOrderBy: "typeaheadOrderBy",
    typeaheadMultipleSearch: "typeaheadMultipleSearch",
    typeaheadItemTemplate: "typeaheadItemTemplate",
    optionsListTemplate: "optionsListTemplate",
    typeaheadHideResultsOnBlur: "typeaheadHideResultsOnBlur",
    container: "container"
  },
  outputs: {
    typeaheadLoading: "typeaheadLoading",
    typeaheadNoResults: "typeaheadNoResults",
    typeaheadOnSelect: "typeaheadOnSelect",
    typeaheadOnPreview: "typeaheadOnPreview",
    typeaheadOnBlur: "typeaheadOnBlur"
  },
  exportAs: ["bs-typeahead"]
});
/** @nocollapse */

TypeaheadDirective.ctorParameters = function () {
  return [{
    type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderFactory"]
  }, {
    type: TypeaheadConfig
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
  }];
};

TypeaheadDirective.propDecorators = {
  typeahead: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadMinLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  adaptivePosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  isAnimated: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadWaitMs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadOptionsLimit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadOptionField: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadGroupField: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadOrderBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadAsync: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadLatinize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadSingleWords: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadWordDelimiters: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadMultipleSearch: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadMultipleSearchDelimiters: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadPhraseDelimiters: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadItemTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  optionsListTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadScrollable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadOptionsInScrollableView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadHideResultsOnBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadSelectFirstItem: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadIsFirstItemActive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  typeaheadLoading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  typeaheadNoResults: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  typeaheadOnSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  typeaheadOnPreview: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  typeaheadOnBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  container: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  dropup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['input', ['$event']]
  }],
  onChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['keyup', ['$event']]
  }],
  onFocus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['click']
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['focus']
  }],
  onBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['blur']
  }],
  onKeydown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['keydown', ['$event']]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TypeaheadDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[typeahead]',
      exportAs: 'bs-typeahead',
      host: {
        '[attr.aria-activedescendant]': 'activeDescendant',
        '[attr.aria-owns]': 'isOpen ? this._container.popupId : null',
        '[attr.aria-expanded]': 'isOpen',
        '[attr.aria-autocomplete]': 'list'
      }
    }]
  }], function () {
    return [{
      type: bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderFactory"]
    }, {
      type: TypeaheadConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
    }];
  }, {
    isAnimated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadLatinize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadSingleWords: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadWordDelimiters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadMultipleSearchDelimiters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadPhraseDelimiters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadScrollable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadOptionsInScrollableView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadSelectFirstItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadIsFirstItemActive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    typeaheadNoResults: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    typeaheadOnSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    typeaheadOnPreview: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    typeaheadOnBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    dropup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadOptionsLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadMinLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadWaitMs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadAsync: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],

    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['input', ['$event']]
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['keyup', ['$event']]
    }],

    /**
     * @return {?}
     */
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['click']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['focus']
    }],

    /**
     * @return {?}
     */
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['blur']
    }],

    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['keydown', ['$event']]
    }],
    typeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    adaptivePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadOptionField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadGroupField: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadOrderBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadMultipleSearch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadItemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    optionsListTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    typeaheadHideResultsOnBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var TypeaheadModule = /*#__PURE__*/function () {
  function TypeaheadModule() {
    Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TypeaheadModule);
  }

  Object(C_Users_BaoQuocTran_Desktop_lib_b_ui_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TypeaheadModule, null, [{
    key: "forRoot",

    /**
     * @return {?}
     */
    value: function forRoot() {
      return {
        ngModule: TypeaheadModule,
        providers: [bao_tran_angular_component_loader__WEBPACK_IMPORTED_MODULE_9__["ComponentLoaderFactory"], bao_tran_angular_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]]
      };
    }
  }]);

  return TypeaheadModule;
}();

TypeaheadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TypeaheadModule
});
TypeaheadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function TypeaheadModule_Factory(t) {
    return new (t || TypeaheadModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TypeaheadModule, {
    declarations: function declarations() {
      return [TypeaheadContainerComponent, TypeaheadDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]];
    },
    exports: function exports() {
      return [TypeaheadContainerComponent, TypeaheadDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TypeaheadModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]],
      declarations: [TypeaheadContainerComponent, TypeaheadDirective],
      exports: [TypeaheadContainerComponent, TypeaheadDirective],
      entryComponents: [TypeaheadContainerComponent]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ })

};;
//# sourceMappingURL=vendors~components-typeahead-demo-typeahead-module.js.map