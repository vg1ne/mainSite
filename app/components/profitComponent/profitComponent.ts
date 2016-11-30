import { Component, Input } from '@angular/core';
import { Profit } from '../../models/profitModel';
require("./profitComponent.less")

@Component({
    selector: 'profit',
    template: require("./profitComponent.html")
})
export class ProfitComponent {
    @Input('pitem') item: Profit
}
