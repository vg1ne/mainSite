import { Component, Input } from '@angular/core';

@Component({
    selector: '[preloader]',
    templateUrl:"./preloaderComponent.html",
    styleUrls: ["./preloaderComponent.less"]
})
export class PreloaderComponent {
    @Input() loading: boolean
}
