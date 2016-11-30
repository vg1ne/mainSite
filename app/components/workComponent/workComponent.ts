import { Component, Input } from '@angular/core';
import {Work} from '../../models/workModel'
require("./workComponent.less")

@Component({
    selector: 'work',
    template: require('./workComponent.html')
})
export class WorkComponent {
    @Input('witem') item: Work
}
