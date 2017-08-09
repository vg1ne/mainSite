import {Component, Input, Inject} from '@angular/core';
import {MainService} from "../../../services/main.service"

@Component({
    selector: 'service-3',
    templateUrl: "./ourServiceView_3.html"
})

export class OurServiceView_3 {
    constructor(@Inject(MainService) private mainService){}
    @Input('service') service

    technologies = this.mainService.technologies


}

