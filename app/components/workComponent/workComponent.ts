import { Component, Input } from '@angular/core';
import {Work} from '../../models/workModel'
require("./workComponent.less")

@Component({
    selector: 'work',
    templateUrl: 'app/components/workComponent/workComponent.html'
})
export class WorkComponent {
    @Input('witem') item: Work
}
