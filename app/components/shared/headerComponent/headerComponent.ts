import { Component } from '@angular/core';
import {TranslateService} from "ng2-translate";
import { MainService } from "./../../../services/main.service"
import {OurServicesService} from "./../../../services/ourServices.service"
require("./headerComponent.less")

@Component({
    selector: 'main-header',
    template: require("./headerComponent.html")
})
export class HeaderComponent {
    constructor(private translate: TranslateService,
                private mainService: MainService,
                private ourServicesService: OurServicesService){
    }
    services = this.ourServicesService.get()
    private get currentLang(){
        return this.translate.currentLang
    }

    get isEnglish(){
        return this.currentLang==='en'
    }

    get isRussian(){
        return this.currentLang === 'ru'
    }

    get isUkrainian(){
        return this.currentLang === 'ua'
    }

    changeLang(lang: string) {
        this.mainService.currentChosenLanguage = lang;
        this.translate.use(lang);
    }
}
