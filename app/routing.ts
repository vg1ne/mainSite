import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './components/app.component'
import { HomeView } from "./views/home/homeView"
import { OurServicesView } from "./views/ourServices/ourServicesView"
import { OurServiceView } from "./views/ourService/ourServiceView"

export const routes: Routes = [
    { path: '', component: HomeView },
    { path: 'ourServices', component: OurServicesView },
    { path: 'ourService/:id', component: OurServiceView }
];
export const routing = RouterModule.forRoot(routes);
