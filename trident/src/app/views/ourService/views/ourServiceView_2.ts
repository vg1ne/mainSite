import {Component, Input} from '@angular/core';

@Component({
    selector: 'service-2',
  templateUrl: "./ourServiceView_2.html"
})

export class OurServiceView_2 {
    @Input('service') service
}

