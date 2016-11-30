import { Component, Input } from '@angular/core';
require("./mainSlideComponent.less")

@Component({
    selector: 'main-slide',
    template: require("./mainSlideComponent.html")
})
export class MainSlideComponent {
    @Input('slide') item: any
}
