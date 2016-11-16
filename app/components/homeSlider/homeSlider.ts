import { Component } from "@angular/core";
import { Slide } from "../../models/slideModel";
import { SlidesService } from "../../services/slides.service";

@Component({
    selector: 'home-slider',
    templateUrl: 'app/components/homeSlider/homeSlider.html'
})

export class HomeSlider {
    slides: Slide[]
    constructor(private slidesService: SlidesService) { }

    ngOnInit() {
        this.slides = this.slidesService.getHomeSlides()
    }

    get isLoading(){
        return !this.slides.length
    }
}
