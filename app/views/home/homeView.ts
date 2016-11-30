import { Component } from "@angular/core";
import { Slide } from "../../models/slideModel";
import { SlidesService } from "../../services/slides.service";

@Component({
  templateUrl: './app/views/home/homeView.html'
})
export class HomeView {
    constructor(private slidesService: SlidesService) { }
    homeSlides: Slide[]

    ngOnInit() {
        this.homeSlides = this.slidesService.getHomeSlides()
    }

    get homeSlidesLoading() {
        return this.homeSlides.length
    }

    carousel: any = {
        interval : 5000,
        noWrapSlides: false
    }
}
