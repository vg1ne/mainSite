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
//# sourceMappingURL=routing.js.map