import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { MainService } from "./../services/main.service";
import { Router, NavigationEnd } from '@angular/router';
require("./../../styles/style.less")
require("./../../styles/mediaQueries.less")

@Component({
    selector: 'my-app',
    template:`<main-header></main-header><section class="top-header"><router-outlet></router-outlet></section><main-footer></main-footer>`
})

export class AppComponent {
    constructor(private translate: TranslateService,
                private mainService: MainService,
                private router: Router) {
        translate.addLangs(mainService.possibleLanguages);
        translate.setDefaultLang(mainService.currentChosenLanguage);
        translate.use(mainService.currentChosenLanguage);
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
}

