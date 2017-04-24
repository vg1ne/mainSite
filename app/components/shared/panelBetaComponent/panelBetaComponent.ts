import { Component } from '@angular/core';

require("./panelBetaComponent.less")

@Component({
    selector: 'panel-beta',
    template: require("./panelBetaComponent.html")
})
export class PanelBetaComponent{
    private hidePanel(){
        sessionStorage.setItem('panelWasShown', 'true');
    }

    private get isVisible(){
        return sessionStorage.getItem('panelWasShown') !== 'true'
    }
}
