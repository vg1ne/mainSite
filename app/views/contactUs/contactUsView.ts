import { Component } from '@angular/core';
import { OurServicesService } from "../../services/ourServices.service";
import { ServiceItem } from '../../models/serviceItemModel';

@Component({
    template: require("./contactUsView.html")
})
export class ContactUsView {
    constructor(private ourServices: OurServicesService) { }

    ngOnInit() {
        this.services = this.ourServices.get()
        this.currentService = this.services[0]
    }


    private services: ServiceItem[]
    private currentService: ServiceItem = null
}
