import { Component, Input } from '@angular/core';
import {Work} from '../../models/workModel'
@Component({
    selector: 'work',
    templateUrl: 'app/components/workComponent/workComponent.html'
})
export class WorkComponent {
    @Input('witem') item: Work
}
