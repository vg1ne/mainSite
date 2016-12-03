import {Component, Input} from '@angular/core';

@Component({
    selector: 'service-5',
    template: require("./ourServiceView_5.html")
})

export class OurServiceView_5 {
    @Input('service') service
}

