(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"++Cd":function(t,n,e){"use strict";e.r(n),n.default='<tabset>\r\n  <tab  heading="Tab1">Tab1</tab>\r\n  <tab  heading="Tab2">Tab2</tab>\r\n</tabset>\r\n'},"+q+B":function(t,n,e){"use strict";e.r(n),n.default="import { ChangeDetectionStrategy, Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'dynamic-content-rendering',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  templateUrl: './dynamic-content-rendering.html',\r\n  styleUrls: ['./dynamic-content-rendering.css']\r\n})\r\nexport class DynamicContentRenderingComponent {\r\n\r\n  messages: string[] = [];\r\n\r\n  message(s: string) {\r\n    this.messages.push(s);\r\n  }\r\n\r\n}\r\n"},"0aVI":function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-basic',\r\n  templateUrl: './basic.html'\r\n})\r\nexport class DemoTabsBasicComponent {}\r\n"},"56vY":function(t,n,e){"use strict";e.r(n),n.default='<div class="mb-3">\r\n  <pre class="card card-block card-header" *ngIf="value">Event select is fired. The heading of the selected tab is: {{value}}</pre>\r\n</div>\r\n<tabset>\r\n  <tab heading="First tab" class="mt-2" (selectTab)="onSelect($event)">\r\n    <h4>Title</h4>\r\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r\n      Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\r\n      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n  </tab>\r\n  <tab heading="Second tab" class="mt-2" (selectTab)="onSelect($event)">\r\n    <h4>Title 2</h4>\r\n    <p>It has survived not only five centuries, but also the leap into electronic typesetting,\r\n      remaining essentially unchanged. It was popularised in the 1960s with the release of\r\n      Letraset sheets containing Lorem Ipsum passages</p>\r\n  </tab>\r\n</tabset>\r\n'},"6Ost":function(t,n,e){"use strict";e.r(n),n.default='<div>\r\n  <tabset>\r\n    <tab heading="Basic title" id="tab1">Basic content</tab>\r\n    <tab heading="Basic Title 1">Basic content 1</tab>\r\n    <tab heading="Basic Title 2">Basic content 2</tab>\r\n  </tabset>\r\n</div>\r\n\r\n'},"79mg":function(t,n,e){"use strict";e.r(n),n.default="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'bao-tran-angular/tabs';\n\n@Component({\n  selector: 'demo-tabs-manual-selection',\n  templateUrl: './manual-selection.html'\n})\nexport class DemoTabsManualSelectionComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  selectTab(tabId: number) {\n    this.staticTabs.tabs[tabId].active = true;\n  }\n}\n"},"8MTU":function(t,n,e){"use strict";e.r(n),n.default='<tabset type="pills">\r\n  <tab heading="Pills 1">Pills content 1</tab>\r\n  <tab heading="Pills 2">Pills content 2</tab>\r\n</tabset>\r\n'},"94iu":function(t,n,e){"use strict";e.r(n),n.default='<div (click)="$event.preventDefault()">\r\n    <p>Change quantity of tabs by manipulating tabs array</p>\r\n    <button type="button" class="btn btn-primary btn-sm" (click)="addNewTab()">\r\n      Add new tab\r\n    </button>\r\n    <button type="button" class="btn btn-primary btn-sm" (click)="tabs = []"  *ngIf="tabs.length">\r\n      Remove all tabs\r\n    </button>\r\n  <hr/>\r\n  <tabset>\r\n    <tab heading="Static title">Static content</tab>\r\n    <tab *ngFor="let tabz of tabs"\r\n         [heading]="tabz.title"\r\n         [active]="tabz.active"\r\n         (selectTab)="tabz.active = true"\r\n         (deselect)="tabz.active = false"\r\n         [disabled]="tabz.disabled"\r\n         [removable]="tabz.removable"\r\n         (removed)="removeTabHandler(tabz)"\r\n         [customClass]="tabz.customClass">\r\n      {{tabz?.content}}\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n'},CXga:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-vertical-pills',\r\n  templateUrl: './vertical-pills.html'\r\n})\r\nexport class DemoTabsVerticalPillsComponent {}\r\n"},CcHA:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\nimport { TabDirective } from 'bao-tran-angular/tabs';\n\n@Component({\n  selector: 'demo-tabs-select-event',\n  templateUrl: './select-event.html'\n})\nexport class DemoTabsSelectEventComponent {\n  value: string;\n  onSelect(data: TabDirective): void {\n    this.value = data.heading;\n  }\n}\n"},"Do+o":function(t,n,e){"use strict";e.r(n),n.default='<p>The Component inside the Tab is rendered, when the tab is activated and destroyed when the tab is left.</p>\r\n<ul class="eventlist">\r\n  <li *ngFor="let message of messages">{{\xa0message }}</li>\r\n</ul>\r\n<tabset>\r\n  <tab heading="Tab A" #tabA="tab">\r\n    <sub-component\r\n      name="A"\r\n      *ngIf="tabA.active"\r\n      (onInit)="message(\'Sub-Component A activated\')"\r\n      (onDestroy)="message(\'Sub-Component A destroyed\')"\r\n    ></sub-component>\r\n  </tab>\r\n\r\n  <tab heading="Tab B" #tabB="tab">\r\n    <sub-component\r\n      name="B"\r\n      *ngIf="tabB.active"\r\n      (onInit)="message(\'Sub-Component B activated\')"\r\n      (onDestroy)="message(\'Sub-Component B destroyed\')"\r\n    ></sub-component>\r\n  </tab>\r\n\r\n  <tab heading="Tab C" #tabC="tab">\r\n    <sub-component\r\n      name="C"\r\n      *ngIf="tabC.active"\r\n      (onInit)="message(\'Sub-Component C activated\')"\r\n      (onDestroy)="message(\'Sub-Component C destroyed\')"\r\n    ></sub-component>\r\n  </tab>\r\n</tabset>\r\n'},JN29:function(t,n,e){"use strict";e.r(n),n.default="import { Component, ChangeDetectionStrategy } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-dynamic',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  templateUrl: './dynamic.html'\r\n})\r\nexport class DemoTabsDynamicComponent {\r\n  tabs: any[] = [\r\n    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },\r\n    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },\r\n    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }\r\n  ];\r\n\r\n  addNewTab(): void {\r\n    const newTabIndex = this.tabs.length + 1;\r\n    this.tabs.push({\r\n      title: `Dynamic Title ${newTabIndex}`,\r\n      content: `Dynamic content ${newTabIndex}`,\r\n      disabled: false,\r\n      removable: true\r\n    });\r\n  }\r\n\r\n  removeTabHandler(tab: any): void {\r\n    this.tabs.splice(this.tabs.indexOf(tab), 1);\r\n    console.log('Remove Tab handler');\r\n  }\r\n}\r\n"},Medm:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-pills',\r\n  templateUrl: './pills.html'\r\n})\r\nexport class DemoTabsPillsComponent {}\r\n"},OEuy:function(t,n,e){"use strict";e.r(n),n.default='<div>\r\n  <p>You can select tabs directly from component</p>\r\n  <p>\r\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(1)">Select second tab</button>\r\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(2)">Select third tab</button>\r\n  </p>\r\n  <hr/>\r\n  <tabset #staticTabs>\r\n    <tab heading="Static title">Static content</tab>\r\n    <tab heading="Static Title 1">Static content 1</tab>\r\n    <tab heading="Static Title 2">Static content 2</tab>\r\n    <tab heading="Static Title 3">Static content 3</tab>\r\n  </tabset>\r\n</div>\r\n\r\n'},OOAf:function(t,n,e){"use strict";e.r(n),n.default="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'bao-tran-angular/tabs';\n\n@Component({\n  selector: 'demo-tabs-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoTabsDisabledComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  disableEnable() {\n    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;\n  }\n}\n"},RKu0:function(t,n,e){"use strict";e.r(n),n.default='<tabset [justified]="true">\r\n  <tab heading="Justified">Justified content</tab>\r\n  <tab heading="SJ">Short Labeled Justified content</tab>\r\n  <tab heading="Long Justified">Long Labeled Justified content</tab>\r\n</tabset>\r\n'},RaAK:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-custom-template',\r\n  templateUrl: './custom-template.html'\r\n})\r\nexport class DemoTabsCustomComponent {}\r\n"},SCZi:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'bao-tran-angular/tabs';\n\n// such override allows to keep some initial values\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });\n}\n\n@Component({\n  selector: 'demo-tabs-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoTabsConfigComponent {}\n"},Uzid:function(t,n,e){"use strict";e.r(n),n.default='<div>\r\n  <tabset>\r\n    <tab heading="Static">\r\n      Tab 1\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading>\r\n        <span class="badge badge-secondary">Heading</span>\r\n      </ng-template>\r\n      I\'ve got an HTML heading. Pretty cool!\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading>\r\n        <i><b>Tab 3</b></i>\r\n      </ng-template>\r\n      Tab with html tags in heading\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n'},afuA:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-justified',\r\n  templateUrl: './justified.html'\r\n})\r\nexport class DemoTabsJustifiedComponent {}\r\n"},gAuF:function(t,n,e){"use strict";e.r(n),n.default='<tabset>\r\n  <tab heading="Config 1">Config content 1</tab>\r\n  <tab heading="Config 2">Config content 2</tab>\r\n</tabset>\r\n'},iTcO:function(t,n,e){"use strict";e.r(n),e.d(n,"DemoTabsModule",function(){return q});var a=e("ofXK"),o=e("3Pt+"),i=e("tyNb"),c=e("h0Vf"),s=e("k3/p"),r=e("fXoL"),b=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-basic"]],decls:8,vars:0,consts:[["heading","Basic title","id","tab1"],["heading","Basic Title 1"],["heading","Basic Title 2"]],template:function(t,n){1&t&&(r.Qb(0,"div"),r.Qb(1,"tabset"),r.Qb(2,"tab",0),r.zc(3,"Basic content"),r.Pb(),r.Qb(4,"tab",1),r.zc(5,"Basic content 1"),r.Pb(),r.Qb(6,"tab",2),r.zc(7,"Basic content 2"),r.Pb(),r.Pb(),r.Pb())},directives:[c.d,c.a],encapsulation:2}),t}(),l=["staticTabs"],u=function(){function t(){}return t.prototype.selectTab=function(t){this.staticTabs.tabs[t].active=!0},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-manual-selection"]],viewQuery:function(t,n){var e;1&t&&r.Dc(l,!0),2&t&&r.mc(e=r.Yb())&&(n.staticTabs=e.first)},decls:19,vars:0,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["staticTabs",""],["heading","Static title"],["heading","Static Title 1"],["heading","Static Title 2"],["heading","Static Title 3"]],template:function(t,n){1&t&&(r.Qb(0,"div"),r.Qb(1,"p"),r.zc(2,"You can select tabs directly from component"),r.Pb(),r.Qb(3,"p"),r.Qb(4,"button",0),r.Xb("click",function(){return n.selectTab(1)}),r.zc(5,"Select second tab"),r.Pb(),r.Qb(6,"button",0),r.Xb("click",function(){return n.selectTab(2)}),r.zc(7,"Select third tab"),r.Pb(),r.Pb(),r.Lb(8,"hr"),r.Qb(9,"tabset",null,1),r.Qb(11,"tab",2),r.zc(12,"Static content"),r.Pb(),r.Qb(13,"tab",3),r.zc(14,"Static content 1"),r.Pb(),r.Qb(15,"tab",4),r.zc(16,"Static content 2"),r.Pb(),r.Qb(17,"tab",5),r.zc(18,"Static content 3"),r.Pb(),r.Pb(),r.Pb())},directives:[c.d,c.a],encapsulation:2}),t}();function d(t,n){if(1&t){var e=r.Rb();r.Qb(0,"button",1),r.Xb("click",function(){return r.qc(e),r.Zb().tabs=[]}),r.zc(1," Remove all tabs "),r.Pb()}}function m(t,n){if(1&t){var e=r.Rb();r.Qb(0,"tab",5),r.Xb("selectTab",function(){return n.$implicit.active=!0})("deselect",function(){return n.$implicit.active=!1})("removed",function(){r.qc(e);var t=n.$implicit;return r.Zb().removeTabHandler(t)}),r.zc(1),r.Pb()}if(2&t){var a=n.$implicit;r.fc("heading",a.title)("active",a.active)("disabled",a.disabled)("removable",a.removable)("customClass",a.customClass),r.yb(1),r.Bc(" ",null==a?null:a.content," ")}}var p=function(){function t(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2"},{title:"Dynamic Title 3",content:"Dynamic content 3",removable:!0}]}return t.prototype.addNewTab=function(){var t=this.tabs.length+1;this.tabs.push({title:"Dynamic Title "+t,content:"Dynamic content "+t,disabled:!1,removable:!0})},t.prototype.removeTabHandler=function(t){this.tabs.splice(this.tabs.indexOf(t),1),console.log("Remove Tab handler")},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-dynamic"]],decls:11,vars:2,consts:[[3,"click"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["type","button","class","btn btn-primary btn-sm",3,"click",4,"ngIf"],["heading","Static title"],[3,"heading","active","disabled","removable","customClass","selectTab","deselect","removed",4,"ngFor","ngForOf"],[3,"heading","active","disabled","removable","customClass","selectTab","deselect","removed"]],template:function(t,n){1&t&&(r.Qb(0,"div",0),r.Xb("click",function(t){return t.preventDefault()}),r.Qb(1,"p"),r.zc(2,"Change quantity of tabs by manipulating tabs array"),r.Pb(),r.Qb(3,"button",1),r.Xb("click",function(){return n.addNewTab()}),r.zc(4," Add new tab "),r.Pb(),r.xc(5,d,2,0,"button",2),r.Lb(6,"hr"),r.Qb(7,"tabset"),r.Qb(8,"tab",3),r.zc(9,"Static content"),r.Pb(),r.xc(10,m,2,6,"tab",4),r.Pb(),r.Pb()),2&t&&(r.yb(5),r.fc("ngIf",n.tabs.length),r.yb(5),r.fc("ngForOf",n.tabs))},directives:[a.l,c.d,c.a,a.k],encapsulation:2,changeDetection:0}),t}(),f=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-pills"]],decls:5,vars:0,consts:[["type","pills"],["heading","Pills 1"],["heading","Pills 2"]],template:function(t,n){1&t&&(r.Qb(0,"tabset",0),r.Qb(1,"tab",1),r.zc(2,"Pills content 1"),r.Pb(),r.Qb(3,"tab",2),r.zc(4,"Pills content 2"),r.Pb(),r.Pb())},directives:[c.d,c.a],encapsulation:2}),t}(),g=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-vertical-pills"]],decls:5,vars:1,consts:[["type","pills",3,"vertical"],["heading","Vertical 1"],["heading","Vertical 2"]],template:function(t,n){1&t&&(r.Qb(0,"tabset",0),r.Qb(1,"tab",1),r.zc(2,"Vertical content 1"),r.Pb(),r.Qb(3,"tab",2),r.zc(4,"Vertical content 2"),r.Pb(),r.Pb()),2&t&&r.fc("vertical",!0)},directives:[c.d,c.a],encapsulation:2}),t}(),h=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-justified"]],decls:7,vars:1,consts:[[3,"justified"],["heading","Justified"],["heading","SJ"],["heading","Long Justified"]],template:function(t,n){1&t&&(r.Qb(0,"tabset",0),r.Qb(1,"tab",1),r.zc(2,"Justified content"),r.Pb(),r.Qb(3,"tab",2),r.zc(4,"Short Labeled Justified content"),r.Pb(),r.Qb(5,"tab",3),r.zc(6,"Long Labeled Justified content"),r.Pb(),r.Pb()),2&t&&r.fc("justified",!0)},directives:[c.d,c.a],encapsulation:2}),t}();function y(t,n){if(1&t&&(r.Qb(0,"tab",2),r.zc(1),r.Pb()),2&t){var e=n.$implicit;r.fc("heading",e.title)("customClass",e.customClass),r.yb(1),r.Bc(" ",null==e?null:e.content," ")}}var v=function(){function t(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1",customClass:"customClass"},{title:"Dynamic Title 2",content:"Dynamic content 2",customClass:"customClass"}]}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-custom-class"]],decls:4,vars:1,consts:[["heading","Static title","customClass","customClass"],[3,"heading","customClass",4,"ngFor","ngForOf"],[3,"heading","customClass"]],template:function(t,n){1&t&&(r.Qb(0,"tabset"),r.Qb(1,"tab",0),r.zc(2,"Static content"),r.Pb(),r.xc(3,y,2,3,"tab",1),r.Pb()),2&t&&(r.yb(3),r.fc("ngForOf",n.tabs))},directives:[c.d,c.a,a.k],encapsulation:2}),t}();function C(){return Object.assign(new c.e,{type:"pills",isKeysAllowed:!0})}var T=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-config"]],features:[r.xb([{provide:c.e,useFactory:C}])],decls:5,vars:0,consts:[["heading","Config 1"],["heading","Config 2"]],template:function(t,n){1&t&&(r.Qb(0,"tabset"),r.Qb(1,"tab",0),r.zc(2,"Config content 1"),r.Pb(),r.Qb(3,"tab",1),r.zc(4,"Config content 2"),r.Pb(),r.Pb())},directives:[c.d,c.a],encapsulation:2}),t}(),P=["staticTabs"],Q=function(){function t(){}return t.prototype.disableEnable=function(){this.staticTabs.tabs[2].disabled=!this.staticTabs.tabs[2].disabled},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-disabled"]],viewQuery:function(t,n){var e;1&t&&r.Dc(P,!0),2&t&&r.mc(e=r.Yb())&&(n.staticTabs=e.first)},decls:20,vars:0,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["staticTabs",""],["heading","Static title"],["heading","Static Title 1"],["heading","Static Title 2"],["heading","Static Title 3"]],template:function(t,n){1&t&&(r.Qb(0,"div"),r.Qb(1,"p"),r.zc(2,"Tabs can be enabled or disabled by changing "),r.Qb(3,"code"),r.zc(4,"disabled"),r.Pb(),r.zc(5," input property"),r.Pb(),r.Qb(6,"p"),r.Qb(7,"button",0),r.Xb("click",function(){return n.disableEnable()}),r.zc(8," Enable / Disable third tab "),r.Pb(),r.Pb(),r.Lb(9,"hr"),r.Qb(10,"tabset",null,1),r.Qb(12,"tab",2),r.zc(13,"Static content"),r.Pb(),r.Qb(14,"tab",3),r.zc(15,"Static content 1"),r.Pb(),r.Qb(16,"tab",4),r.zc(17,"Static content 2"),r.Pb(),r.Qb(18,"tab",5),r.zc(19,"Static content 3"),r.Pb(),r.Pb(),r.Pb())},directives:[c.d,c.a],encapsulation:2}),t}();function z(t,n){1&t&&(r.Qb(0,"span",2),r.zc(1,"Heading"),r.Pb())}function D(t,n){1&t&&(r.Qb(0,"i"),r.Qb(1,"b"),r.zc(2,"Tab 3"),r.Pb(),r.Pb())}var S=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-custom-template"]],decls:10,vars:0,consts:[["heading","Static"],["tabHeading",""],[1,"badge","badge-secondary"]],template:function(t,n){1&t&&(r.Qb(0,"div"),r.Qb(1,"tabset"),r.Qb(2,"tab",0),r.zc(3," Tab 1 "),r.Pb(),r.Qb(4,"tab"),r.xc(5,z,2,0,"ng-template",1),r.zc(6," I've got an HTML heading. Pretty cool! "),r.Pb(),r.Qb(7,"tab"),r.xc(8,D,3,0,"ng-template",1),r.zc(9," Tab with html tags in heading "),r.Pb(),r.Pb(),r.Pb())},directives:[c.d,c.a,c.b],encapsulation:2}),t}();function w(t,n){if(1&t&&(r.Qb(0,"pre",4),r.zc(1),r.Pb()),2&t){var e=r.Zb();r.yb(1),r.Bc("Event select is fired. The heading of the selected tab is: ",e.value,"")}}var I=function(){function t(){}return t.prototype.onSelect=function(t){this.value=t.heading},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-tabs-select-event"]],decls:13,vars:1,consts:[[1,"mb-3"],["class","card card-block card-header",4,"ngIf"],["heading","First tab",1,"mt-2",3,"selectTab"],["heading","Second tab",1,"mt-2",3,"selectTab"],[1,"card","card-block","card-header"]],template:function(t,n){1&t&&(r.Qb(0,"div",0),r.xc(1,w,2,1,"pre",1),r.Pb(),r.Qb(2,"tabset"),r.Qb(3,"tab",2),r.Xb("selectTab",function(t){return n.onSelect(t)}),r.Qb(4,"h4"),r.zc(5,"Title"),r.Pb(),r.Qb(6,"p"),r.zc(7,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),r.Pb(),r.Pb(),r.Qb(8,"tab",3),r.Xb("selectTab",function(t){return n.onSelect(t)}),r.Qb(9,"h4"),r.zc(10,"Title 2"),r.Pb(),r.Qb(11,"p"),r.zc(12,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.yb(1),r.fc("ngIf",n.value))},directives:[a.l,c.d,c.a],encapsulation:2}),t}(),A=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-accessibility"]],decls:76,vars:0,consts:[[1,"highlighter-rouge"],["href","https://www.w3.org/TR/wai-aria-practices/#tabpanel"],["title","Web Accessibility Initiative"],["title","Accessible Rich Internet Applications"],[1,"table","table-bordered"],[1,"col-xs-3"],[1,"col-xs-9"]],template:function(t,n){1&t&&(r.Qb(0,"p"),r.zc(1,"Note that tabs can be given "),r.Qb(2,"code",0),r.zc(3,'role="tablist"'),r.Pb(),r.zc(4,", "),r.Qb(5,"code",0),r.zc(6,'role="tab"'),r.Pb(),r.zc(7," and "),r.Qb(8,"code",0),r.zc(9,'role="tabpanel"'),r.Pb(),r.zc(10," attributes. These are appropriate for tabbed interfaces, as described in the "),r.Qb(11,"a",1),r.Qb(12,"abbr",2),r.zc(13,"WAI"),r.Pb(),r.Qb(14,"abbr",3),r.zc(15,"ARIA"),r.Pb(),r.zc(16," Authoring Practices"),r.Pb(),r.zc(17,"."),r.Pb(),r.Qb(18,"p"),r.zc(19,"If your control element is targeting a single collapsible element - you should add the "),r.Qb(20,"code"),r.zc(21,"aria-controls"),r.Pb(),r.zc(22," attribute to the control element, containing the "),r.Qb(23,"code"),r.zc(24,"id"),r.Pb(),r.zc(25," of the collapsible element."),r.Pb(),r.Qb(26,"p"),r.zc(27,"To confirm the tab content opening you should use "),r.Qb(28,"code"),r.zc(29,"aria-selected"),r.Pb(),r.zc(30," property. If "),r.Qb(31,"code"),r.zc(32,'aria-selected="true"'),r.Pb(),r.zc(33," it indicates the tab control is activated and its associated panel is displayed."),r.Pb(),r.Qb(34,"p"),r.zc(35,"If you use a visible text element on the page as a label for a focusable element - you should add "),r.Qb(36,"code"),r.zc(37,"aria-labelledby"),r.Pb(),r.zc(38,". It refers to the tab element that controls the panel."),r.Pb(),r.Qb(39,"h4"),r.zc(40,"Keyboard interaction"),r.Pb(),r.Qb(41,"table",4),r.Qb(42,"tbody"),r.Qb(43,"tr"),r.Qb(44,"td",5),r.Qb(45,"code"),r.zc(46," LEFT_ARROW "),r.Pb(),r.Pb(),r.Qb(47,"td",6),r.zc(48," Move focus to previous tab "),r.Pb(),r.Pb(),r.Qb(49,"tr"),r.Qb(50,"td",5),r.Qb(51,"code"),r.zc(52," RIGHT_ARROW "),r.Pb(),r.Pb(),r.Qb(53,"td",6),r.zc(54," Move focus to next tab "),r.Pb(),r.Pb(),r.Qb(55,"tr"),r.Qb(56,"td",5),r.Qb(57,"code"),r.zc(58," HOME "),r.Pb(),r.Pb(),r.Qb(59,"td",6),r.zc(60," Move focus to first tab "),r.Pb(),r.Pb(),r.Qb(61,"tr"),r.Qb(62,"td",5),r.Qb(63,"code"),r.zc(64," END "),r.Pb(),r.Pb(),r.Qb(65,"td",6),r.zc(66," Move focus to last tab "),r.Pb(),r.Pb(),r.Qb(67,"tr"),r.Qb(68,"td",5),r.Qb(69,"code"),r.zc(70,"SPACE"),r.Pb(),r.zc(71," or "),r.Qb(72,"code"),r.zc(73,"ENTER"),r.Pb(),r.Pb(),r.Qb(74,"td",6),r.zc(75," Switch to focused tab "),r.Pb(),r.Pb(),r.Pb(),r.Pb())},encapsulation:2}),t}(),k=function(){function t(){this.onInit=new r.n,this.onDestroy=new r.n}return t.prototype.ngOnInit=function(){var t=this;Promise.resolve().then(function(){return t.onInit.emit()})},t.prototype.ngOnDestroy=function(){this.onDestroy.emit()},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["sub-component"]],inputs:{name:"name"},outputs:{onInit:"onInit",onDestroy:"onDestroy"},decls:2,vars:1,template:function(t,n){1&t&&(r.Qb(0,"p"),r.zc(1),r.Pb()),2&t&&(r.yb(1),r.Bc(" Sub-Component ",n.name,"\n"))},styles:["p[_ngcontent-%COMP%]{margin:30px}"],changeDetection:0}),t}();function x(t,n){if(1&t&&(r.Qb(0,"li"),r.zc(1),r.Pb()),2&t){var e=n.$implicit;r.yb(1),r.Ac(e)}}function E(t,n){if(1&t){var e=r.Rb();r.Qb(0,"sub-component",11),r.Xb("onInit",function(){return r.qc(e),r.Zb().message("Sub-Component A activated")})("onDestroy",function(){return r.qc(e),r.Zb().message("Sub-Component A destroyed")}),r.Pb()}}function O(t,n){if(1&t){var e=r.Rb();r.Qb(0,"sub-component",12),r.Xb("onInit",function(){return r.qc(e),r.Zb().message("Sub-Component B activated")})("onDestroy",function(){return r.qc(e),r.Zb().message("Sub-Component B destroyed")}),r.Pb()}}function B(t,n){if(1&t){var e=r.Rb();r.Qb(0,"sub-component",13),r.Xb("onInit",function(){return r.qc(e),r.Zb().message("Sub-Component C activated")})("onDestroy",function(){return r.qc(e),r.Zb().message("Sub-Component C destroyed")}),r.Pb()}}var R=function(){function t(){this.messages=[]}return t.prototype.message=function(t){this.messages.push(t)},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["dynamic-content-rendering"]],decls:14,vars:4,consts:[[1,"eventlist"],[4,"ngFor","ngForOf"],["heading","Tab A"],["tabA","tab"],["name","A",3,"onInit","onDestroy",4,"ngIf"],["heading","Tab B"],["tabB","tab"],["name","B",3,"onInit","onDestroy",4,"ngIf"],["heading","Tab C"],["tabC","tab"],["name","C",3,"onInit","onDestroy",4,"ngIf"],["name","A",3,"onInit","onDestroy"],["name","B",3,"onInit","onDestroy"],["name","C",3,"onInit","onDestroy"]],template:function(t,n){if(1&t&&(r.Qb(0,"p"),r.zc(1,"The Component inside the Tab is rendered, when the tab is activated and destroyed when the tab is left."),r.Pb(),r.Qb(2,"ul",0),r.xc(3,x,2,1,"li",1),r.Pb(),r.Qb(4,"tabset"),r.Qb(5,"tab",2,3),r.xc(7,E,1,0,"sub-component",4),r.Pb(),r.Qb(8,"tab",5,6),r.xc(10,O,1,0,"sub-component",7),r.Pb(),r.Qb(11,"tab",8,9),r.xc(13,B,1,0,"sub-component",10),r.Pb(),r.Pb()),2&t){var e=r.nc(6),a=r.nc(9),o=r.nc(12);r.yb(3),r.fc("ngForOf",n.messages),r.yb(4),r.fc("ngIf",e.active),r.yb(3),r.fc("ngIf",a.active),r.yb(3),r.fc("ngIf",o.active)}},directives:[a.k,c.d,c.a,a.l,k],styles:[".eventlist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-family:monospace}"],changeDetection:0}),t}();function M(){return Object.assign(new c.e,{type:"tabs",isKeysAllowed:!1})}var L=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-disabled-key-navigations"]],features:[r.xb([{provide:c.e,useFactory:M}])],decls:5,vars:0,consts:[["heading","Tab1"],["heading","Tab2"]],template:function(t,n){1&t&&(r.Qb(0,"tabset"),r.Qb(1,"tab",0),r.zc(2,"Tab1"),r.Pb(),r.Qb(3,"tab",1),r.zc(4,"Tab2"),r.Pb(),r.Pb())},directives:[c.d,c.a],encapsulation:2}),t}(),F=e("ClAA"),J=e("y20O"),U=e("nk7K"),N=e("l3GJ"),X=[{name:"Usage",anchor:"usage",outlet:F.a,content:{doc:e("rNKZ")}},{name:"Examples",anchor:"examples",outlet:J.a,content:[{title:"Basic",anchor:"basic",component:e("0aVI"),html:e("6Ost"),outlet:b},{title:"Manual selection",anchor:"tabs-manual-select",component:e("79mg"),html:e("OEuy"),outlet:u},{title:"Disabled tabs",anchor:"disabled",component:e("OOAf"),html:e("v/Cv"),outlet:Q},{title:"Dynamic tabs",anchor:"tabs-dynamic",component:e("JN29"),html:e("94iu"),outlet:p},{title:"Pills",anchor:"tabs-Pills",component:e("Medm"),html:e("8MTU"),outlet:f},{title:"Vertical Pills",anchor:"tabs-vertical-pills",component:e("CXga"),html:e("tXcc"),outlet:g},{title:"Justified",anchor:"tabs-justified",component:e("afuA"),html:e("RKu0"),description:"<p><i>Bootstrap 4 doesn't have justified classes</i></p>",outlet:h},{title:"Custom class",anchor:"tabs-custom-class",component:e("sF0j"),html:e("krWe"),outlet:v},{title:"Select event",anchor:"select-event",component:e("CcHA"),html:e("56vY"),description:"<p>You can subscribe to tab's <code>select</code> event</p>",outlet:I},{title:"Configuring defaults",anchor:"tabs-config-defaults",component:e("SCZi"),html:e("gAuF"),outlet:T},{title:"Custom template",anchor:"tabs-custom-template",component:e("RaAK"),html:e("Uzid"),outlet:S},{title:"Dynamic content rendering",anchor:"dynamic-content-rendering",component:e("+q+B"),html:e("Do+o"),outlet:R},{title:"Accessibility",anchor:"accessibility",outlet:A},{title:"Disable key navigations",anchor:"disable-key-navigations",component:e("irbw"),html:e("++Cd"),outlet:L}]},{name:"API Reference",anchor:"api-reference",outlet:U.a,content:[{title:"TabsetComponent",anchor:"tabset-component",outlet:N.b},{title:"TabDirective",anchor:"tab-directive",outlet:N.b},{title:"TabHeadingDirective",anchor:"tab-heading-directive",outlet:N.b},{title:"TabsetConfig",anchor:"tabset-config",outlet:N.c}]}],H=e("ybC4"),V=e("oxqd"),j=[{path:"",component:function(){function t(){this.name="Tabs",this.src="https://github.com/valor-software/bao-tran-angular/tree/development/src/tabs",this.componentContent=X}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["tabs-section"]],decls:6,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(t,n){1&t&&(r.Qb(0,"demo-section",0),r.Qb(1,"p"),r.zc(2,"Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. "),r.Qb(3,"strong"),r.zc(4,"Nested tabs are not supported."),r.Pb(),r.Pb(),r.Lb(5,"docs-section",1),r.Pb()),2&t&&(r.fc("name",n.name)("src",n.src)("componentContent",n.componentContent),r.yb(5),r.fc("content",n.componentContent))},directives:[H.a,V.a],encapsulation:2,changeDetection:0}),t}()}],q=function(){function t(){}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[a.b,o.i,s.a,c.c.forRoot(),i.h.forChild(j)]]}),t}()},irbw:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'bao-tran-angular/tabs';\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'tabs', isKeysAllowed: false });\n}\n\n@Component({\n  selector: 'demo-disabled-key-navigations',\n  templateUrl: './disabled-key-navigations.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoDisabledKeyNavigationsComponent {\n}\n"},krWe:function(t,n,e){"use strict";e.r(n),n.default='<tabset>\r\n  <tab heading="Static title" customClass="customClass">Static content</tab>\r\n  <tab *ngFor="let tabz of tabs"\r\n       [heading]="tabz.title"\r\n       [customClass]="tabz.customClass">\r\n    {{tabz?.content}}\r\n  </tab>\r\n</tabset>\r\n'},rNKZ:function(t,n,e){"use strict";e.r(n),n.default="// RECOMMENDED\nimport { TabsModule } from 'bao-tran-angular/tabs';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { TabsModule } from 'bao-tran-angular';\n\n@NgModule({\n  imports: [TabsModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},sF0j:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'demo-tabs-custom-class',\r\n  templateUrl: './custom-class.html'\r\n})\r\nexport class DemoTabsCustomClassComponent {\r\n  tabs: any[] = [\r\n    {\r\n      title: 'Dynamic Title 1',\r\n      content: 'Dynamic content 1',\r\n      customClass: 'customClass'\r\n    },\r\n    {\r\n      title: 'Dynamic Title 2',\r\n      content: 'Dynamic content 2',\r\n      customClass: 'customClass'\r\n    }\r\n  ];\r\n}\r\n"},tXcc:function(t,n,e){"use strict";e.r(n),n.default='<tabset [vertical]="true" type="pills">\r\n  <tab heading="Vertical 1">Vertical content 1</tab>\r\n  <tab heading="Vertical 2">Vertical content 2</tab>\r\n</tabset>\r\n'},"v/Cv":function(t,n,e){"use strict";e.r(n),n.default='<div>\r\n  <p>Tabs can be enabled or disabled by changing <code>disabled</code> input property</p>\r\n  <p>\r\n    <button type="button" class="btn btn-primary btn-sm" (click)="disableEnable()">\r\n      Enable / Disable third tab\r\n    </button>\r\n  </p>\r\n  <hr/>\r\n  <tabset #staticTabs>\r\n    <tab heading="Static title">Static content</tab>\r\n    <tab heading="Static Title 1">Static content 1</tab>\r\n    <tab heading="Static Title 2">Static content 2</tab>\r\n    <tab heading="Static Title 3">Static content 3</tab>\r\n  </tabset>\r\n</div>\r\n'}}]);