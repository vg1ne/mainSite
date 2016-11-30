import { Component, Input } from '@angular/core';
require("./mainSlideComponent.less")
@Component({
    selector: 'main-slide',
    templateUrl: 'app/components/slides/mainSlideComponent/mainSlideComponent.html'
})
export class MainSlideComponent {
    @Input('slide') item: any
}
