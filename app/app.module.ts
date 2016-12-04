import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {routing} from "./routing";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {components} from "./helpers/components.helper"
import {views} from "./helpers/views.helper"

import {SlidesService} from "./services/slides.service";
import {OurRecentWorksService} from "./services/ourRecentWorks.service";
import {OurServicesService} from "./services/ourServices.service";
import {WhyWeService} from "./services/whyWe.service";
import {MainService} from "./services/main.service"

import {TranslateModule} from 'ng2-translate';
import {CarouselModule} from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [BrowserModule, CarouselModule, routing, TranslateModule.forRoot()],
    declarations: [AppComponent, views, components],
    bootstrap: [AppComponent],
    providers: [SlidesService, OurRecentWorksService, OurServicesService, WhyWeService, {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }, MainService]
})
export class AppModule {

}

