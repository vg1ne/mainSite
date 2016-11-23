import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { routing } from "./routing";
import { HeaderComponent } from './components/shared/headerComponent/headerComponent';
import { OurServicesComponent } from "./components/ourServices/ourServicesComponent";
import { ServiceComponent } from "./components/serviceComponent/serviceComponent";
import { FooterComponent } from "./components/shared/footerComponent/footerComponent";
import { SubFooterComponent } from "./components/shared/subFooterComponent/subFooterComponent";
import { PreloaderComponent } from "./components/shared/preloaderComponent/preloaderComponent";


import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeView } from "./views/home/homeView"
import { OurServicesView } from "./views/ourServices/ourServicesView"
import { OurServiceView } from "./views/ourService/ourServiceView"

import { OurServicesService } from "./services/ourServices.service";


@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent,
        HomeView, OurServicesView, OurServiceView,
        HeaderComponent, SubFooterComponent, FooterComponent, PreloaderComponent,
        OurServicesComponent, ServiceComponent],
    bootstrap: [AppComponent],
    providers: [OurServicesService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {

}

