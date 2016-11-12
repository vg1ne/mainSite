import {Component} from '@angular/core';
import {ServiceItem} from '../shared/serviceComponent/serviceItemModel'

@Component({
    selector: 'our-services',
    templateUrl: 'app/components/ourServices/ourServicesComponent.html'
})
export class OurServicesComponent {
    constructor(){
        services : [ServiceItem]
    }
    services = [
        {
            id: 1,
            title: 'UI/UX design',
            imgUrl: ''
        },
        {   id: 2,
            title: 'Web development',
            imgUrl: ''
        },
        {
            id: 3,
            title: 'Mobile development',
            imgUrl: ''
        },
        {
            id: 4,
            title: 'Content creation',
            imgUrl: ''
        },
        {
            id: 5,
            title: 'Workflow',
            imgUrl: ''
        }]

}

