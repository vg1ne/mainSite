import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template:`<main-header></main-header><section class="container"><router-outlet></router-outlet></section><main-footer></main-footer>`
})

export class AppComponent {}