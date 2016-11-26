import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'my-app',
    template:`<main-header></main-header><section class="top-header"><router-outlet></router-outlet></section><main-footer></main-footer>`
})

export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
