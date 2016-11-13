import {Component} from '@angular/core';
import {ServiceItem} from '../shared/serviceComponent/serviceItemModel'

@Component({
    selector: 'our-services',
    templateUrl: 'app/components/ourServices/ourServicesComponent.html'
})
export class OurServicesComponent {
    services = [
        {
            id: 1,
            title: 'Brand Identity',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 2,
            title: 'UI/UX design',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {   id: 3,
            title: 'Web development',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 4,
            title: 'Mobile development',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 5,
            title: 'Content creation',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 6,
            title: 'Workflow',
            imgUrl: '../../../../styles/images/serviceStub.png'
        }]

}
