import { Component } from '@angular/core';
import { OurServicesService } from "../../../services/ourServices.service"

@Component({
    selector: 'sub-footer',
    templateUrl:"./subFooterComponent.html",
  styleUrls: ["./subFooterComponent.less"]
})
export class SubFooterComponent {
    constructor(private ourServicesService: OurServicesService){}
    services = this.ourServicesService.get()
}
