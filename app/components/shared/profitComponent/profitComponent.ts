import { Component, Input } from '@angular/core';
import {Profit} from '../profitComponent/profitModel'

@Component({
    selector: 'profit',
    templateUrl: 'app/components/shared/profitComponent/profitComponent.html'
})
export class ProfitComponent {
    @Input('pitem') item: Profit
}
