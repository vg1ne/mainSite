import { Component } from '@angular/core';

@Component({
    selector: 'panel-beta',
    templateUrl: "./panelBetaComponent.html",
    styleUrls: ["./panelBetaComponent.less"]
})
export class PanelBetaComponent{
    hidePanel(){
        sessionStorage.setItem('panelWasShown', 'true');
    }

    get isVisible(){
        return sessionStorage.getItem('panelWasShown') !== 'true'
    }
}
