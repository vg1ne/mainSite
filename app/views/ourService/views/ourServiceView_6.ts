import {Component, Input} from '@angular/core';

@Component({
    selector: 'service-6',
    template: require("./ourServiceView_6.html")
})

export class OurServiceView_6 {
    @Input('service') service
}

