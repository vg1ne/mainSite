import { Component, Input } from '@angular/core';
import { Profit } from '../../models/profitModel';

@Component({
    selector: 'profit',
    templateUrl:"./profitComponent.html",
  styleUrls: ["./profitComponent.less"]
})
export class ProfitComponent {
    @Input('pitem') item: Profit
}
