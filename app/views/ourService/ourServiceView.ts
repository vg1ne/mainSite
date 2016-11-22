import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OurServicesService } from '../../services/ourServices.service';
import { ServiceItem } from '../../models/serviceItemModel';

@Component({
    templateUrl: 'app/views/ourService/ourServiceView.html'
})

export class OurServiceView {
    id: number
    private sub: any
    service: ServiceItem 

    constructor(private route: ActivatedRoute, private ourServicesService: OurServicesService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.service = this.ourServicesService.getById(this.id)
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

