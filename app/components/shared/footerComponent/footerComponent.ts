import { Component } from '@angular/core';
import * as moment from "moment";

require("./footerComponent.less")
@Component({
    selector: 'main-footer',
    template: require("./footerComponent.html")
})
export class FooterComponent {
    today: string = moment().format('YYYY');
}
