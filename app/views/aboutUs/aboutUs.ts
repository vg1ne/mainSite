import { Component } from "@angular/core";
import { Profit} from "../../models/profitModel"
import {WhyWeService} from "../../services/whyWe.service"

@Component({
  template: require("./aboutUs.html")
})
export class AboutUsView {
    constructor(private whyWeService: WhyWeService) { }
    profits: Profit[]

    ngOnInit() {
        this.getSlidesInfo()
    }

    getSlidesInfo(){
        this.profits = this.whyWeService.get()
    }
    carousel: any = {
        interval : 5000,
        noWrapSlides: false,
        noTransition: false
    }
}
