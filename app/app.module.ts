import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent }   from './components/shared/headerComponent/headerComponent';
import {OurServicesComponent} from "./components/ourServices/ourServicesComponent";
import {ServiceComponent} from "./components/shared/serviceComponent/serviceComponent"

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, OurServicesComponent, ServiceComponent ],
  bootstrap:    [ AppComponent, HeaderComponent, OurServicesComponent ]
})
export class AppModule { }
