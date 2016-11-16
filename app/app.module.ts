import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from "./routing"
import { HeaderComponent } from './components/shared/headerComponent/headerComponent';
import { OurServicesComponent } from "./components/ourServices/ourServicesComponent";
import { ServiceComponent } from "./components/shared/serviceComponent/serviceComponent"
import { WhyWeComponent } from "./components/whyWe/whyWeComponent"
import { ProfitComponent } from "./components/shared/profitComponent/profitComponent"
import { OurRecentWorkComponent } from "./components/ourRecentWork/ourRecentWorkComponent"
import { WorkComponent } from "./components/shared/workComponent/workComponent"
import { ContactUsComponent } from "./components/contactUs/contactUs"
import { FooterComponent } from "./components/shared/footerComponent/footerComponent"
import { SubFooterComponent } from "./components/shared/subFooterComponent/subFooterComponent"
import { HomeSlider } from "./components/homeSlider/homeSlider"
import { SlideComponent } from "./components/shared/slideComponent/slideComponent"
import { PreloaderComponent } from "./components/shared/preloaderComponent/preloaderComponent"


import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeView } from "./views/home/homeView"
import { PortfolioView } from "./views/portfolio/PortfolioView"
import { OurServicesView } from "./views/ourServices/ourServicesView"
import { ContactUsView } from "./views/contactUs/contactUsView"
import { OurServiceView } from "./views/ourService/ourServiceView"

import { SlidesService } from "./services/slides.service";
import { OurRecentWorksService } from "./services/ourRecentWorks.service";
import { OurServicesService } from "./services/ourServices.service";

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent,

        HomeView, PortfolioView, OurServicesView, ContactUsView, OurServiceView,

        HeaderComponent, SubFooterComponent, FooterComponent,

        OurServicesComponent,
        ServiceComponent, WhyWeComponent, ProfitComponent,
        OurRecentWorkComponent, WorkComponent,
        ContactUsComponent,
        SlideComponent,PreloaderComponent,
        HomeSlider],

    bootstrap: [AppComponent],
    providers: [SlidesService, OurRecentWorksService, OurServicesService, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {
    loading: boolean = true
    ngAfterViewInit(){
        this.loading = false
    }
}

