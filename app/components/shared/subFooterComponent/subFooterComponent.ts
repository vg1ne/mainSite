import { Component } from '@angular/core';
import {OurServicesService} from "../../../services/ourServices.service";

require("./subFooterComponent.less")
@Component({
    selector: 'sub-footer',
    template: require("./subFooterComponent.html")
})
export class SubFooterComponent {
    constructor(private ourServicesService: OurServicesService){}

    services = this.ourServicesService.get()
}
