import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OurRecentWorksService } from '../../services/ourRecentWorks.service';
import { Work } from '../../models/workModel';

@Component({
    template: require("./ourWorkView.html")
})
export class OurWorkView {
    id: number
    private sub: any
    work: Work

    constructor(private route: ActivatedRoute, private ourRecentWorksService: OurRecentWorksService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.work = this.ourRecentWorksService.getById(this.id)
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

