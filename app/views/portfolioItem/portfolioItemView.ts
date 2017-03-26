import { Component, OnInit } from '@angular/core';
import {OurRecentWorksService} from "../../services/ourRecentWorks.service";
import { ActivatedRoute } from '@angular/router';
import {Work} from "../../models/workModel";
@Component({
    template: require("./portfolioItemView.html")
})
export class PortfolioItemView implements OnInit{
    constructor(private ourWorksService: OurRecentWorksService,
                private route: ActivatedRoute,){

    }
    id: number
    private sub: any

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.work = this.ourWorksService.getById(this.id)
    }
    private work: Work
}
