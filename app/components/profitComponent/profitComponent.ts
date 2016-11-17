import { Component, Input } from '@angular/core';
import { Profit } from '../../models/profitModel';

@Component({
    selector: 'profit',
    templateUrl: 'app/components/profitComponent/profitComponent.html'
})
export class ProfitComponent {
    @Input('pitem') item: Profit
}
