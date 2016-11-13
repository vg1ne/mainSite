import { Component, Input } from '@angular/core';
import {Work} from '../workComponent/workModel'

@Component({
    selector: 'work',
    templateUrl: 'app/components/shared/workComponent/workComponent.html'
})
export class WorkComponent {
    @Input('witem') item: Work
}
