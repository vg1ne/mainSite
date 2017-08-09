import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OurServicesService } from '../../services/ourServices.service';
import { ServiceItem } from '../../models/serviceItemModel';

@Component({
  templateUrl: "./ourServiceView.html"
})

export class OurServiceView {
    id: number
    private sub: any

    constructor(private route: ActivatedRoute, private ourServicesService: OurServicesService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }
    get service(){
        return this.ourServicesService.getById(this.id)
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

