import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { routing } from "./routing";
import { HeaderComponent } from './components/shared/headerComponent/headerComponent';
import { ServiceComponent } from "./components/serviceComponent/serviceComponent";
import { ProfitComponent } from "./components/profitComponent/profitComponent";
import { WorkComponent } from "./components/workComponent/workComponent";
import { ContactUsComponent } from "./components/contactUs/contactUs";
import { FooterComponent } from "./components/shared/footerComponent/footerComponent";
import { SubFooterComponent } from "./components/shared/subFooterComponent/subFooterComponent";
import { MainSlideComponent } from "./components/mainSlideComponent/mainSlideComponent";
import { PreloaderComponent } from "./components/shared/preloaderComponent/preloaderComponent";

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeView } from "./views/home/homeView"
import { PortfolioView } from "./views/portfolio/PortfolioView"
import { OurServicesView } from "./views/ourServices/ourServicesView"
import { ContactUsView } from "./views/contactUs/contactUsView"
import { OurServiceView } from "./views/ourService/ourServiceView"
import { OurWorkView} from "./views/ourWork/ourWorkView"
import {AboutUsView} from "./views/aboutUs/aboutUs"

import { OurServiceView_1} from "./views/ourService/views/ourServiceView_1"
import { OurServiceView_2} from "./views/ourService/views/ourServiceView_2"
import { OurServiceView_3} from "./views/ourService/views/ourServiceView_3"
import { OurServiceView_4} from "./views/ourService/views/ourServiceView_4"
import { OurServiceView_5} from "./views/ourService/views/ourServiceView_5"
import { OurServiceView_6} from "./views/ourService/views/ourServiceView_6"

import { SlidesService } from "./services/slides.service";
import { OurRecentWorksService } from "./services/ourRecentWorks.service";
import { OurServicesService } from "./services/ourServices.service";
import { WhyWeService } from "./services/whyWe.service";
import { MainService } from "./services/main.service"

import {TranslateModule} from 'ng2-translate';
import { CarouselModule  } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [BrowserModule, CarouselModule, routing, TranslateModule.forRoot()],
    declarations: [AppComponent,

        HomeView, PortfolioView, OurServicesView, ContactUsView, OurServiceView, OurWorkView,AboutUsView,
        OurServiceView_1,OurServiceView_2,OurServiceView_3,OurServiceView_4,OurServiceView_5,OurServiceView_6,

        HeaderComponent, SubFooterComponent, FooterComponent,

        ServiceComponent, ProfitComponent, WorkComponent,
        ContactUsComponent,
        MainSlideComponent, PreloaderComponent],

    bootstrap: [AppComponent],
    providers: [SlidesService, OurRecentWorksService, OurServicesService, WhyWeService, {provide: LocationStrategy, useClass: HashLocationStrategy}, MainService]
})
export class AppModule {

}

