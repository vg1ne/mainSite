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
var app_component_1 = require('./app.component');
var routing_1 = require("./routing");
var headerComponent_1 = require('./components/shared/headerComponent/headerComponent');
var ourServicesComponent_1 = require("./components/ourServices/ourServicesComponent");
var serviceComponent_1 = require("./components/serviceComponent/serviceComponent");
var whyWeComponent_1 = require("./components/whyWe/whyWeComponent");
var profitComponent_1 = require("./components/profitComponent/profitComponent");
var ourRecentWorkComponent_1 = require("./components/ourRecentWork/ourRecentWorkComponent");
var workComponent_1 = require("./components/workComponent/workComponent");
var contactUs_1 = require("./components/contactUs/contactUs");
var footerComponent_1 = require("./components/shared/footerComponent/footerComponent");
var subFooterComponent_1 = require("./components/shared/subFooterComponent/subFooterComponent");
var homeSlider_1 = require("./components/homeSlider/homeSlider");
var slideComponent_1 = require("./components/slideComponent/slideComponent");
var preloaderComponent_1 = require("./components/shared/preloaderComponent/preloaderComponent");
var common_1 = require('@angular/common');
var homeView_1 = require("./views/home/homeView");
var PortfolioView_1 = require("./views/portfolio/PortfolioView");
var ourServicesView_1 = require("./views/ourServices/ourServicesView");
var contactUsView_1 = require("./views/contactUs/contactUsView");
var ourServiceView_1 = require("./views/ourService/ourServiceView");
var ourWorkView_1 = require("./views/ourWork/ourWorkView");
var slides_service_1 = require("./services/slides.service");
var ourRecentWorks_service_1 = require("./services/ourRecentWorks.service");
var ourServices_service_1 = require("./services/ourServices.service");
var whyWe_service_1 = require("./services/whyWe.service");
var AppModule = (function () {
    function AppModule() {
        this.loading = true;
    }
    AppModule.prototype.ngAfterViewInit = function () {
        this.loading = false;
    };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, routing_1.routing],
            declarations: [app_component_1.AppComponent,
                homeView_1.HomeView, PortfolioView_1.PortfolioView, ourServicesView_1.OurServicesView, contactUsView_1.ContactUsView, ourServiceView_1.OurServiceView, ourWorkView_1.OurWorkView,
                headerComponent_1.HeaderComponent, subFooterComponent_1.SubFooterComponent, footerComponent_1.FooterComponent,
                ourServicesComponent_1.OurServicesComponent,
                serviceComponent_1.ServiceComponent, whyWeComponent_1.WhyWeComponent, profitComponent_1.ProfitComponent,
                ourRecentWorkComponent_1.OurRecentWorkComponent, workComponent_1.WorkComponent,
                contactUs_1.ContactUsComponent,
                slideComponent_1.SlideComponent, preloaderComponent_1.PreloaderComponent,
                homeSlider_1.HomeSlider],
            bootstrap: [app_component_1.AppComponent],
            providers: [slides_service_1.SlidesService, ourRecentWorks_service_1.OurRecentWorksService, ourServices_service_1.OurServicesService, whyWe_service_1.WhyWeService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map