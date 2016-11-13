import {Routes, RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {OurRecentWorkComponent} from "./components/ourRecentWork/ourRecentWorkComponent"

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'portfolio', component: OurRecentWorkComponent }
];
export const routing = RouterModule.forRoot(routes);/**
 * Created by админ on 13-Nov-16.
 */
