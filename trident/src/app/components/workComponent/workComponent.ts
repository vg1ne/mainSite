import { Component, Input } from '@angular/core';
import {Work} from '../../models/workModel'

@Component({
    selector: 'work',
    templateUrl:'./workComponent.html',
    styleUrls: ["./workComponent.less"]
})
export class WorkComponent {
    @Input('witem') item: Work
}
