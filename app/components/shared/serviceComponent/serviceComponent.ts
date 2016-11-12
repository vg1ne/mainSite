import { Component, Input } from '@angular/core';
import {ServiceItem} from '../serviceComponent/serviceItemModel'

@Component({
    selector: 'service',
    templateUrl: 'app/components/shared/serviceComponent/serviceComponent.html'
})
export class ServiceComponent {
    @Input('sitem') item: ServiceItem
}
