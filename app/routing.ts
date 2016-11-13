import {Routes, RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {OurRecentWorkComponent} from "./components/ourRecentWork/ourRecentWorkComponent"
import {HomeComponent} from "./components/home/homeComponent"
import {OurServicesComponent} from "./components/ourServices/ourServicesComponent"
import {ContactUsComponent} from "./components/contactUs/contactUs"
import {OurServiceComponent} from "./components/ourService/ourServiceComponent"

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'portfolio', component: OurRecentWorkComponent},
    {path: 'ourServices', component: OurServicesComponent},
    {path: 'contactUs', component: ContactUsComponent},
    {path: 'ourService/:id', component: OurServiceComponent}
];
export const routing = RouterModule.forRoot(routes);
/**
 * Created by админ on 13-Nov-16.
 */
