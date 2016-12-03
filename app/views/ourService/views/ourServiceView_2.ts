import {Component, Input} from '@angular/core';

@Component({
    selector: 'service-2',
    template: require("./ourServiceView_2.html")
})

export class OurServiceView_2 {
    @Input('service') service
}

