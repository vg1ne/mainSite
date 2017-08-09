import { Component } from '@angular/core';
import * as moment from "moment";

@Component({
    selector: 'main-footer',
    templateUrl:"./footerComponent.html",
  styleUrls: ["./footerComponent.less"]
})
export class FooterComponent {
    today: string = moment().format('YYYY');
}
