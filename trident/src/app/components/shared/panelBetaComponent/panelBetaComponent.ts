import { Component } from '@angular/core';

@Component({
    selector: 'panel-beta',
    templateUrl: "./panelBetaComponent.html",
    styleUrls: ["./panelBetaComponent.less"]
})
export class PanelBetaComponent{
    private hidePanel(){
        sessionStorage.setItem('panelWasShown', 'true');
    }

    private get isVisible(){
        return sessionStorage.getItem('panelWasShown') !== 'true'
    }
}
