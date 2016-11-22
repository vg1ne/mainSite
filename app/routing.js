"use strict";
var router_1 = require('@angular/router');
var homeView_1 = require("./views/home/homeView");
var ourServicesView_1 = require("./views/ourServices/ourServicesView");
var ourServiceView_1 = require("./views/ourService/ourServiceView");
exports.routes = [
    { path: '', component: homeView_1.HomeView },
    { path: 'ourServices', component: ourServicesView_1.OurServicesView },
    { path: 'ourService/:id', component: ourServiceView_1.OurServiceView }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routing.js.map