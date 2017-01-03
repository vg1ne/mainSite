import { Component, Inject } from '@angular/core';
import { MainService } from "../../services/main.service";

@Component({
    template: require("./FAQView.html")
})
export class FAQView {
    constructor( @Inject(MainService) private mainService) { }

    ngOnInit() {
        this.faq = this.mainService.faq
    }

    private faq: any[]
}
