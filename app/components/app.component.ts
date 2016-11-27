import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { MainService } from "./../services/main.service"
require("./../../styles/style.less")

@Component({
    selector: 'my-app',
    template:`<main-header></main-header><section class="top-header"><router-outlet></router-outlet></section><main-footer></main-footer>`
})

export class AppComponent {
    constructor(private translate: TranslateService, private mainService: MainService) {
        translate.addLangs(mainService.possibleLanguages);
        translate.setDefaultLang(mainService.currentChosenLanguage);
        translate.use(mainService.currentChosenLanguage);
    }
}

