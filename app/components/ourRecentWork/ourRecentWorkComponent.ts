import { Component } from '@angular/core';
import { Work } from '../../models/workModel';
import { OurRecentWorksService } from '../../services/ourRecentWorks.service';

@Component({
    selector: 'our-recent-work',
    templateUrl: 'app/components/ourRecentWork/ourRecentWorkComponent.html'
})
export class OurRecentWorkComponent {
    recentWork: Work[]

    constructor(private ourRecentWorksService: OurRecentWorksService) { }

    ngOnInit() {
        this.recentWork = this.ourRecentWorksService.getOurRecentWorks()
    }
}

