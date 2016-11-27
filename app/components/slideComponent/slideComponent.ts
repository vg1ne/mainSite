import { Component, Input } from '@angular/core';
require("./slideComponent.less")
@Component({
    selector: 'slide',
    templateUrl: 'app/components/slideComponent/slideComponent.html'
})
export class SlideComponent {
    @Input('slide') item: any
}
