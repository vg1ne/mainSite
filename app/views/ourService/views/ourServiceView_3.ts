import {Component, Input} from '@angular/core';

@Component({
    selector: 'service-3',
    template: require("./ourServiceView_3.html")
})

export class OurServiceView_3 {
    @Input('service') service
}

