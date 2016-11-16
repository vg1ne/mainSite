import {Component, Injectable} from '@angular/core';
import { ServiceItem } from '../../models/serviceItemModel';
import { OurServicesService } from '../../services/ourServices.service';

@Component({
    selector: 'our-services',
    templateUrl: 'app/components/ourServices/ourServicesComponent.html'
})
export class OurServicesComponent {
    services: ServiceItem[]

    constructor(private ourServicesService: OurServicesService ) {

    }

    ngOnInit() {
        this.services = this.ourServicesService.get()
    }
}

