import { Component, Input } from '@angular/core';
import { ServiceItem } from '../../models/serviceItemModel';
require("./serviceComponent.less")

@Component({
    selector: 'service',
    template: require("./serviceComponent.html")
})
export class ServiceComponent {
    @Input('sitem') item: ServiceItem
}
