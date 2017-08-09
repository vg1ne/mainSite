import { Component, Input } from '@angular/core';
import { ServiceItem } from '../../models/serviceItemModel';

@Component({
    selector: 'service',
    templateUrl: "./serviceComponent.html",
    styleUrls: ['./serviceComponent.less']
})
export class ServiceComponent {
    @Input('sitem') item: ServiceItem
}
