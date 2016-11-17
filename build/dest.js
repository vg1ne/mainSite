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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<main-header></main-header>' +
                '<section class="container"><router-outlet></router-outlet></section>' +
                '<main-footer></main-footer>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

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

"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);

"use strict";
var router_1 = require('@angular/router');
var PortfolioView_1 = require("./views/portfolio/PortfolioView");
var homeView_1 = require("./views/home/homeView");
var ourServicesView_1 = require("./views/ourServices/ourServicesView");
var contactUsView_1 = require("./views/contactUs/contactUsView");
var ourServiceView_1 = require("./views/ourService/ourServiceView");
var ourWorkView_1 = require("./views/ourWork/ourWorkView");
exports.routes = [
    { path: '', component: homeView_1.HomeView },
    { path: 'portfolio', component: PortfolioView_1.PortfolioView },
    { path: 'ourServices', component: ourServicesView_1.OurServicesView },
    { path: 'contactUs', component: contactUsView_1.ContactUsView },
    { path: 'ourService/:id', component: ourServiceView_1.OurServiceView },
    { path: 'ourWork/:id', component: ourWorkView_1.OurWorkView }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);

"use strict";
exports.ourRecentWorks = [{
        id: 1,
        title: 'Radio Alarm iOS App',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 2,
        title: 'Portland UI Kit Free Sample',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 3,
        title: 'Carwash iOS App',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 4,
        title: 'Nexus 5 Mockups',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 5,
        title: 'The Rapture Startup',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 6,
        title: 'Portland UI Kit',
        imgUrl: '../../../../styles/images/serviceStub.png'
    }];

"use strict";
exports.services = [
    {
        id: 1,
        title: 'Brand Identity',
        desc: 'Vel sapien elit in malesuada semper mi, id sollicitudin.',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 2,
        title: 'UI/UX design',
        desc: 'Vel sapien elit in malesuada semper mi, id sollicitudin.',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 3,
        title: 'Web development',
        desc: 'Vel sapien elit in malesuada semper mi, id sollicitudin.',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 4,
        title: 'Mobile development',
        desc: 'Vel sapien elit in malesuada semper mi, id sollicitudin.',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 5,
        title: 'Content creation',
        desc: 'Vel sapien elit in malesuada semper mi, id sollicitudin.',
        imgUrl: '../../../../styles/images/serviceStub.png'
    },
    {
        id: 6,
        title: 'Workflow',
        desc: 'Vel sapien elit in malesuada semper mi, id sollicitudin.',
        imgUrl: '../../../../styles/images/serviceStub.png'
    }];

"use strict";
exports.slides = {
    home: [{
            id: 1,
            active: true,
            imgUrl: '../../../styles/images/img_chania.jpg',
            title: 'Brand',
            heading: 'A Fresh view',
            text: 'at the common knowledge',
            desc: 'A brand is a candy paper wrap - the exterior of your business. It is the First thing your potential cusomer visualy sees.' +
                +'The significal of branding can`t be overemphasized: we won`t buy a car which we don`t line and we don`t care how many hourses there under the hood.'
        },
        {
            id: 2,
            active: false,
            imgUrl: '../../../styles/images/img_chania2.jpg',
            title: 'UI/UX design',
            heading: 'A Fresh view',
            text: 'at the common knowledge',
            desc: 'A brand is a candy paper wrap - the exterior of your business. It is the First thing your potential cusomer visualy sees.' +
                +'The significal of branding can`t be overemphasized: we won`t buy a car which we don`t line and we don`t care how many hourses there under the hood.'
        },
        {
            id: 3,
            active: false,
            imgUrl: '../../../styles/images/img_chania.jpg',
            title: 'Web development',
            heading: 'A Fresh view',
            text: 'at the common knowledge',
            desc: 'A brand is a candy paper wrap - the exterior of your business. It is the First thing your potential cusomer visualy sees.' +
                +'The significal of branding can`t be overemphasized: we won`t buy a car which we don`t line and we don`t care how many hourses there under the hood.'
        },
        {
            id: 4,
            active: false,
            imgUrl: '../../../styles/images/img_chania2.jpg',
            title: 'Mobile development',
            heading: 'A Fresh view',
            text: 'at the common knowledge',
            desc: 'A brand is a candy paper wrap - the exterior of your business. It is the First thing your potential cusomer visualy sees.' +
                +'The significal of branding can`t be overemphasized: we won`t buy a car which we don`t line and we don`t care how many hourses there under the hood.'
        },
        {
            id: 5,
            active: false,
            imgUrl: '../../../styles/images/img_chania.jpg',
            title: 'Content Creation',
            heading: 'A Fresh view',
            text: 'at the common knowledge',
            desc: 'A brand is a candy paper wrap - the exterior of your business. It is the First thing your potential cusomer visualy sees.' +
                +'The significal of branding can`t be overemphasized: we won`t buy a car which we don`t line and we don`t care how many hourses there under the hood.'
        },
        {
            id: 6,
            active: false,
            imgUrl: '../../../styles/images/img_flower.jpg',
            title: 'Workflow',
            heading: 'A Fresh view',
            text: 'at the common knowledge',
            desc: 'A brand is a candy paper wrap - the exterior of your business. It is the First thing your potential cusomer visualy sees.' +
                +'The significal of branding can`t be overemphasized: we won`t buy a car which we don`t line and we don`t care how many hourses there under the hood.'
        }
    ]
};

"use strict";
exports.profit = [
    {
        id: 1,
        title: 'A fresh view',
        shortText: 'We turn new into newer, good into much better and almost perfect into flawless',
        imgUrl: '../../../../styles/images/1.png'
    },
    {
        id: 2,
        title: 'You may have questions',
        shortText: 'We never leave your questions unanswered. Our style is to respond to clients concerns.',
        imgUrl: '../../../../styles/images/2.png'
    },
    {
        id: 3,
        title: 'Life cycle',
        shortText: 'Any vertex regardless of its height is still a vertex. We do not ignore the small heights.',
        imgUrl: '../../../../styles/images/3.png'
    },
    {
        id: 4,
        title: 'Successful projects',
        shortText: 'We always keep in mind strategies which have led us to success  before.',
        imgUrl: '../../../../styles/images/4.png'
    },
    {
        id: 5,
        title: 'Using modern methods',
        shortText: 'Guarantee a zero percent of frustration and hundred percents of satisfaction.',
        imgUrl: '../../../../styles/images/5.png'
    },
    {
        id: 6,
        title: 'Customer satisfaction',
        shortText: 'Our approach is straightforward - don`t do it if you can`t do as the client wants.',
        imgUrl: '../../../../styles/images/6.png'
    }];

"use strict";
var Profit = (function () {
    function Profit() {
    }
    return Profit;
}());
exports.Profit = Profit;

"use strict";
var ServiceItem = (function () {
    function ServiceItem() {
    }
    return ServiceItem;
}());
exports.ServiceItem = ServiceItem;

"use strict";
var Slide = (function () {
    function Slide() {
    }
    return Slide;
}());
exports.Slide = Slide;

"use strict";
var Work = (function () {
    function Work() {
    }
    return Work;
}());
exports.Work = Work;

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
var ourRecentWorksMock_1 = require('../mocks/ourRecentWorksMock');
var OurRecentWorksService = (function () {
    function OurRecentWorksService() {
    }
    OurRecentWorksService.prototype.getOurRecentWorks = function () {
        return ourRecentWorksMock_1.ourRecentWorks;
    };
    OurRecentWorksService.prototype.getById = function (id) {
        return ourRecentWorksMock_1.ourRecentWorks[id - 1] ? ourRecentWorksMock_1.ourRecentWorks[id - 1] : null;
    };
    OurRecentWorksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OurRecentWorksService);
    return OurRecentWorksService;
}());
exports.OurRecentWorksService = OurRecentWorksService;

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
var servicesMock_1 = require('../mocks/servicesMock');
var OurServicesService = (function () {
    function OurServicesService() {
    }
    OurServicesService.prototype.get = function () {
        return servicesMock_1.services;
    };
    OurServicesService.prototype.getById = function (id) {
        return servicesMock_1.services[id - 1] ? servicesMock_1.services[id - 1] : null;
    };
    OurServicesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OurServicesService);
    return OurServicesService;
}());
exports.OurServicesService = OurServicesService;

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
var slidesMock_1 = require('../mocks/slidesMock');
var SlidesService = (function () {
    function SlidesService() {
    }
    SlidesService.prototype.getHomeSlides = function () {
        return slidesMock_1.slides.home;
    };
    SlidesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SlidesService);
    return SlidesService;
}());
exports.SlidesService = SlidesService;

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
var whyWeMock_1 = require('../mocks/whyWeMock');
var WhyWeService = (function () {
    function WhyWeService() {
    }
    WhyWeService.prototype.get = function () {
        return whyWeMock_1.profit;
    };
    WhyWeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WhyWeService);
    return WhyWeService;
}());
exports.WhyWeService = WhyWeService;

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
var ContactUsComponent = (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent = __decorate([
        core_1.Component({
            selector: 'contact-us',
            templateUrl: 'app/components/contactUs/contactUs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;

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
var core_1 = require("@angular/core");
var slides_service_1 = require("../../services/slides.service");
var HomeSlider = (function () {
    function HomeSlider(slidesService) {
        this.slidesService = slidesService;
    }
    HomeSlider.prototype.ngOnInit = function () {
        this.slides = this.slidesService.getHomeSlides();
    };
    Object.defineProperty(HomeSlider.prototype, "isLoading", {
        get: function () {
            return !this.slides.length;
        },
        enumerable: true,
        configurable: true
    });
    HomeSlider = __decorate([
        core_1.Component({
            selector: 'home-slider',
            templateUrl: 'app/components/homeSlider/homeSlider.html'
        }), 
        __metadata('design:paramtypes', [slides_service_1.SlidesService])
    ], HomeSlider);
    return HomeSlider;
}());
exports.HomeSlider = HomeSlider;

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
var ourRecentWorks_service_1 = require('../../services/ourRecentWorks.service');
var OurRecentWorkComponent = (function () {
    function OurRecentWorkComponent(ourRecentWorksService) {
        this.ourRecentWorksService = ourRecentWorksService;
    }
    OurRecentWorkComponent.prototype.ngOnInit = function () {
        this.recentWork = this.ourRecentWorksService.getOurRecentWorks();
    };
    OurRecentWorkComponent = __decorate([
        core_1.Component({
            selector: 'our-recent-work',
            templateUrl: 'app/components/ourRecentWork/ourRecentWorkComponent.html'
        }), 
        __metadata('design:paramtypes', [ourRecentWorks_service_1.OurRecentWorksService])
    ], OurRecentWorkComponent);
    return OurRecentWorkComponent;
}());
exports.OurRecentWorkComponent = OurRecentWorkComponent;

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
var ourServices_service_1 = require('../../services/ourServices.service');
var OurServicesComponent = (function () {
    function OurServicesComponent(ourServicesService) {
        this.ourServicesService = ourServicesService;
    }
    OurServicesComponent.prototype.ngOnInit = function () {
        this.services = this.ourServicesService.get();
    };
    OurServicesComponent = __decorate([
        core_1.Component({
            selector: 'our-services',
            templateUrl: 'app/components/ourServices/ourServicesComponent.html'
        }), 
        __metadata('design:paramtypes', [ourServices_service_1.OurServicesService])
    ], OurServicesComponent);
    return OurServicesComponent;
}());
exports.OurServicesComponent = OurServicesComponent;

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
var profitModel_1 = require('../../models/profitModel');
var ProfitComponent = (function () {
    function ProfitComponent() {
    }
    __decorate([
        core_1.Input('pitem'), 
        __metadata('design:type', profitModel_1.Profit)
    ], ProfitComponent.prototype, "item", void 0);
    ProfitComponent = __decorate([
        core_1.Component({
            selector: 'profit',
            templateUrl: 'app/components/profitComponent/profitComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProfitComponent);
    return ProfitComponent;
}());
exports.ProfitComponent = ProfitComponent;

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
var serviceItemModel_1 = require('../../models/serviceItemModel');
var ServiceComponent = (function () {
    function ServiceComponent() {
    }
    __decorate([
        core_1.Input('sitem'), 
        __metadata('design:type', serviceItemModel_1.ServiceItem)
    ], ServiceComponent.prototype, "item", void 0);
    ServiceComponent = __decorate([
        core_1.Component({
            selector: 'service',
            templateUrl: 'app/components/serviceComponent/serviceComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceComponent);
    return ServiceComponent;
}());
exports.ServiceComponent = ServiceComponent;

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
var SlideComponent = (function () {
    function SlideComponent() {
    }
    __decorate([
        core_1.Input('slide'), 
        __metadata('design:type', Object)
    ], SlideComponent.prototype, "item", void 0);
    SlideComponent = __decorate([
        core_1.Component({
            selector: 'slide',
            templateUrl: 'app/components/slideComponent/slideComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SlideComponent);
    return SlideComponent;
}());
exports.SlideComponent = SlideComponent;

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
var whyWe_service_1 = require('../../services/whyWe.service');
var WhyWeComponent = (function () {
    function WhyWeComponent(whyWeService) {
        this.whyWeService = whyWeService;
    }
    WhyWeComponent.prototype.ngOnInit = function () {
        this.profits = this.whyWeService.get();
    };
    WhyWeComponent = __decorate([
        core_1.Component({
            selector: 'why-we',
            templateUrl: 'app/components/whyWe/whyWeComponent.html'
        }), 
        __metadata('design:paramtypes', [whyWe_service_1.WhyWeService])
    ], WhyWeComponent);
    return WhyWeComponent;
}());
exports.WhyWeComponent = WhyWeComponent;

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
var workModel_1 = require('../../models/workModel');
var WorkComponent = (function () {
    function WorkComponent() {
    }
    __decorate([
        core_1.Input('witem'), 
        __metadata('design:type', workModel_1.Work)
    ], WorkComponent.prototype, "item", void 0);
    WorkComponent = __decorate([
        core_1.Component({
            selector: 'work',
            templateUrl: 'app/components/workComponent/workComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;

"use strict";
var Work = (function () {
    function Work() {
    }
    return Work;
}());
exports.Work = Work;

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
var ContactUsView = (function () {
    function ContactUsView() {
    }
    ContactUsView = __decorate([
        core_1.Component({
            templateUrl: 'app/views/contactUs/contactUsView.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactUsView);
    return ContactUsView;
}());
exports.ContactUsView = ContactUsView;

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
var HomeView = (function () {
    function HomeView() {
    }
    HomeView = __decorate([
        core_1.Component({
            templateUrl: 'app/views/home/homeView.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeView);
    return HomeView;
}());
exports.HomeView = HomeView;

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
var router_1 = require('@angular/router');
var ourServices_service_1 = require('../../services/ourServices.service');
var OurServiceView = (function () {
    function OurServiceView(route, ourServicesService) {
        this.route = route;
        this.ourServicesService = ourServicesService;
    }
    OurServiceView.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.service = this.ourServicesService.getById(this.id);
    };
    OurServiceView.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    OurServiceView = __decorate([
        core_1.Component({
            templateUrl: 'app/views/ourService/ourServiceView.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ourServices_service_1.OurServicesService])
    ], OurServiceView);
    return OurServiceView;
}());
exports.OurServiceView = OurServiceView;

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
var OurServicesView = (function () {
    function OurServicesView() {
    }
    OurServicesView = __decorate([
        core_1.Component({
            templateUrl: 'app/views/ourServices/ourServicesView.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OurServicesView);
    return OurServicesView;
}());
exports.OurServicesView = OurServicesView;

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
var router_1 = require('@angular/router');
var ourRecentWorks_service_1 = require('../../services/ourRecentWorks.service');
var OurWorkView = (function () {
    function OurWorkView(route, ourRecentWorksService) {
        this.route = route;
        this.ourRecentWorksService = ourRecentWorksService;
    }
    OurWorkView.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.work = this.ourRecentWorksService.getById(this.id);
    };
    OurWorkView.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    OurWorkView = __decorate([
        core_1.Component({
            templateUrl: 'app/views/ourWork/ourWorkView.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ourRecentWorks_service_1.OurRecentWorksService])
    ], OurWorkView);
    return OurWorkView;
}());
exports.OurWorkView = OurWorkView;

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
var PortfolioView = (function () {
    function PortfolioView() {
    }
    PortfolioView = __decorate([
        core_1.Component({
            templateUrl: 'app/views/portfolio/portfolioView.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioView);
    return PortfolioView;
}());
exports.PortfolioView = PortfolioView;

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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'main-footer',
            templateUrl: 'app/components/shared/footerComponent/footerComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;

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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'main-header',
            templateUrl: 'app/components/shared/headerComponent/headerComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

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
var PreloaderComponent = (function () {
    function PreloaderComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PreloaderComponent.prototype, "loading", void 0);
    PreloaderComponent = __decorate([
        core_1.Component({
            selector: '[preloader]',
            templateUrl: 'app/components/shared/preloaderComponent/preloaderComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PreloaderComponent);
    return PreloaderComponent;
}());
exports.PreloaderComponent = PreloaderComponent;

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
var SubFooterComponent = (function () {
    function SubFooterComponent() {
    }
    SubFooterComponent = __decorate([
        core_1.Component({
            selector: 'sub-footer',
            templateUrl: 'app/components/shared/SubFooterComponent/SubFooterComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SubFooterComponent);
    return SubFooterComponent;
}());
exports.SubFooterComponent = SubFooterComponent;
