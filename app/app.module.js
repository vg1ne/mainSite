"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// import {ROUTER_DIRECTIVES}   from '@angular/router';
var app_component_1 = require('./app.component');
var headerComponent_1 = require('./components/shared/headerComponent/headerComponent');
var ourServicesComponent_1 = require("./components/ourServices/ourServicesComponent");
var serviceComponent_1 = require("./components/shared/serviceComponent/serviceComponent");
var whyWeComponent_1 = require("./components/whyWe/whyWeComponent");
var profitComponent_1 = require("./components/shared/profitComponent/profitComponent");
var ourRecentWorkComponent_1 = require("./components/ourRecentWork/ourRecentWorkComponent");
var workComponent_1 = require("./components/shared/workComponent/workComponent");
var routing_1 = require("./routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, routing_1.routing],
            declarations: [app_component_1.AppComponent, headerComponent_1.HeaderComponent, ourServicesComponent_1.OurServicesComponent, serviceComponent_1.ServiceComponent, whyWeComponent_1.WhyWeComponent, profitComponent_1.ProfitComponent, ourRecentWorkComponent_1.OurRecentWorkComponent, workComponent_1.WorkComponent],
            bootstrap: [app_component_1.AppComponent, headerComponent_1.HeaderComponent, ourServicesComponent_1.OurServicesComponent, whyWeComponent_1.WhyWeComponent, ourRecentWorkComponent_1.OurRecentWorkComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map