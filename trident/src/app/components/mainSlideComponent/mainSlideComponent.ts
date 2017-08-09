import { Component, Input } from '@angular/core';

@Component({
    selector: 'main-slide',
    templateUrl: "./mainSlideComponent.html",
    styleUrls: ["./mainSlideComponent.less"]
})

export class MainSlideComponent {
    @Input('slide') item: any
}
