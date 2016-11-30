import { Component, Input } from '@angular/core';
require("./preloaderComponent.less")
@Component({
    selector: '[preloader]',
    template: require("./preloaderComponent.html")
})
export class PreloaderComponent {
    @Input() loading: boolean
}
