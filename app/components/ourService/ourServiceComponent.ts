import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/components/ourService/ourServiceComponent.html'
})
export class OurServiceComponent {
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
}

