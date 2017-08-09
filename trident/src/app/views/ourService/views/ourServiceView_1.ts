import {Component, Input} from '@angular/core';

@Component({
    selector: 'service-1',
  templateUrl: "./ourServiceView_1.html"
})

export class OurServiceView_1 {
    @Input('service') service
}

