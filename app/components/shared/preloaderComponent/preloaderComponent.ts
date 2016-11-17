import { Component, Input } from '@angular/core';
@Component({
    selector: '[preloader]',
    templateUrl: 'app/components/shared/preloaderComponent/preloaderComponent.html'
})
export class PreloaderComponent {
    @Input() loading: boolean
}