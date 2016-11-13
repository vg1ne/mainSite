import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import {ROUTER_DIRECTIVES}   from '@angular/router';

import { AppComponent }   from './app.component';
import { HeaderComponent }   from './components/shared/headerComponent/headerComponent';
import {OurServicesComponent} from "./components/ourServices/ourServicesComponent";
import {ServiceComponent} from "./components/shared/serviceComponent/serviceComponent"
import {WhyWeComponent} from "./components/whyWe/whyWeComponent"
import {ProfitComponent} from "./components/shared/profitComponent/profitComponent"
import {OurRecentWorkComponent} from "./components/ourRecentWork/ourRecentWorkComponent"
import {WorkComponent} from "./components/shared/workComponent/workComponent"
import {HomeComponent} from "./components/home/homeComponent"
import {ContactUsComponent} from "./components/contactUs/contactUs"
import {FooterComponent} from "./components/shared/footerComponent/footerComponent"
import {routing} from "./routing"

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HeaderComponent, OurServicesComponent, ServiceComponent, WhyWeComponent, ProfitComponent, OurRecentWorkComponent, WorkComponent, HomeComponent, ContactUsComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

