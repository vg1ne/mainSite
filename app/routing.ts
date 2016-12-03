import { Routes, RouterModule } from '@angular/router'
import { PortfolioView } from "./views/portfolio/PortfolioView"
import { HomeView } from "./views/home/homeView"
import { OurServicesView } from "./views/ourServices/ourServicesView"
import { ContactUsView } from "./views/contactUs/contactUsView"
import { OurServiceView } from "./views/ourService/ourServiceView"
import { OurWorkView } from "./views/ourWork/ourWorkView"
import {OurServiceView_1} from "./views/ourService/views/ourServiceView_1";
import {OurServiceView_2} from "./views/ourService/views/ourServiceView_2";
import {OurServiceView_3} from "./views/ourService/views/ourServiceView_3";
import {OurServiceView_4} from "./views/ourService/views/ourServiceView_4";
import {OurServiceView_5} from "./views/ourService/views/ourServiceView_5";
import {OurServiceView_6} from "./views/ourService/views/ourServiceView_6";

export const routes: Routes = [
    { path: '', component: HomeView },
    { path: 'portfolio', component: PortfolioView },
    { path: 'ourServices', component: OurServicesView },
    { path: 'contactUs', component: ContactUsView },
    { path: 'ourService/:id', component: OurServiceView,
        children: [
            { path: '', redirectTo: '1' },
            { path: '1', component: OurServiceView_1 },
            { path: '2', component: OurServiceView_2 },
            { path: '3', component: OurServiceView_3 },
            { path: '4', component: OurServiceView_4 },
            { path: '5', component: OurServiceView_5 },
            { path: '6', component: OurServiceView_6 }
        ] },
    { path: 'ourWork/:id', component: OurWorkView}
];
export const routing = RouterModule.forRoot(routes);

