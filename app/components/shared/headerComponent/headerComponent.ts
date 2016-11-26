import { Component } from '@angular/core';
import {TranslateService} from "ng2-translate";
@Component({
    selector: 'main-header',
    templateUrl: 'app/components/shared/headerComponent/headerComponent.html'
})
export class HeaderComponent {
    constructor(private translate: TranslateService){
    }

    private get currentLang(){
        return this.translate.currentLang
    }

    get isEnglish(){
        return this.currentLang==='en'
    }

    get isRussian(){
        return this.currentLang === 'ru'
    }

    changeLang(lang: string) {
        this.translate.use(lang);
    }
}
