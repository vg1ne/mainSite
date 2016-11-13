"use strict";
var router_1 = require('@angular/router');
var ourRecentWorkComponent_1 = require("./components/ourRecentWork/ourRecentWorkComponent");
var homeComponent_1 = require("./components/home/homeComponent");
var ourServicesComponent_1 = require("./components/ourServices/ourServicesComponent");
var contactUs_1 = require("./components/contactUs/contactUs");
exports.routes = [
    { path: '', component: homeComponent_1.HomeComponent },
    { path: 'portfolio', component: ourRecentWorkComponent_1.OurRecentWorkComponent },
    { path: 'ourServices', component: ourServicesComponent_1.OurServicesComponent },
    { path: 'contactUs', component: contactUs_1.ContactUsComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
/**
 * Created by админ on 13-Nov-16.
 */
//# sourceMappingURL=routing.js.map