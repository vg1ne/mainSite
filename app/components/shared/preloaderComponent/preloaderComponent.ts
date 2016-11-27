import { Component, Input } from '@angular/core';
require("./preloaderComponent.less")
@Component({
    selector: '[preloader]',
    templateUrl: 'app/components/shared/preloaderComponent/preloaderComponent.html'
})
export class PreloaderComponent {
    @Input() loading: boolean
}
