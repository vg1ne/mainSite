import { Routes, RouterModule } from '@angular/router'
import { PortfolioView } from "./views/portfolio/PortfolioView"
import { HomeView } from "./views/home/homeView"
import { OurServicesView } from "./views/ourServices/ourServicesView"
import { ContactUsView } from "./views/contactUs/contactUsView"
import { OurServiceView } from "./views/ourService/ourServiceView"
import { OurWorkView } from "./views/ourWork/ourWorkView"

export const routes: Routes = [
    { path: '', component: HomeView },
    { path: 'portfolio', component: PortfolioView },
    { path: 'ourServices', component: OurServicesView },
    { path: 'contactUs', component: ContactUsView },
    { path: 'ourService/:id', component: OurServiceView },
    { path: 'ourWork/:id', component: OurWorkView}
];
export const routing = RouterModule.forRoot(routes);

