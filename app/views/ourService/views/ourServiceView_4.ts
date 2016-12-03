import {Component, Input} from '@angular/core';

@Component({
    selector: 'service-4',
    template: require("./ourServiceView_4.html")
})

export class OurServiceView_4 {
    @Input('service') service
}

