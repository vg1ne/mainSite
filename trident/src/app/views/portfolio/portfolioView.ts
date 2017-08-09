import { Component, OnInit } from '@angular/core';
import {OurRecentWorksService} from "../../services/ourRecentWorks.service";
import {Work} from "../../components/workComponent/workModel";

@Component({
  templateUrl: "./portfolioView.html"
})
export class PortfolioView implements OnInit{
    constructor(private ourWorksService: OurRecentWorksService){

    }
    ngOnInit(){
        this.works = this.ourWorksService.get()
        let a = 1;
    }
    private works: Work[]
}
