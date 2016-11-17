import {Component} from '@angular/core';
import { Profit } from '../../models/profitModel';
import { WhyWeService } from '../../services/whyWe.service';

@Component({
    selector: 'why-we',
    templateUrl: 'app/components/whyWe/whyWeComponent.html'
})
export class WhyWeComponent {
    profits: Profit[]
    constructor(private whyWeService: WhyWeService) { }

    ngOnInit() {
        this.profits = this.whyWeService.get()
    }
}

