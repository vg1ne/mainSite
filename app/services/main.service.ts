import {Injectable} from '@angular/core';
import {appData} from "../mocks/appMock";

@Injectable()
export class MainService {
    private _languages = ['en', 'ru']

    get currentChosenLanguage(){
        let data = localStorage.getItem('currentChosenLanguage');
        if(!data){
            return this._languages[0]
        }
        return data
    }
    set currentChosenLanguage(lang: string){
        if(this.possibleLanguages.indexOf(lang)>=0){
            localStorage.setItem('currentChosenLanguage', lang)
        }
    }

    get possibleLanguages(){
        return this._languages
    }

    get technologies(){
        return appData.technologies
    }

    get faq() {
        return appData.questions
    }
}