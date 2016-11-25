import { Component, Input } from '@angular/core';
import { ServiceItem } from '../../models/serviceItemModel';


@Component({
    selector: 'service',
    templateUrl: 'app/components/serviceComponent/serviceComponent.html'
})
export class ServiceComponent {
    @Input('sitem') item: ServiceItem
}
