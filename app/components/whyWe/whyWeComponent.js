"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var WhyWeComponent = (function () {
    function WhyWeComponent() {
        this.profits = [
            {
                id: 1,
                title: 'A fresh view',
                shortText: 'We turn new into newer, good into much better and almost perfect into flawless',
                imgUrl: '../../../../styles/images/1.png'
            },
            {
                id: 2,
                title: 'You may have questions',
                shortText: 'We never leave your questions unanswered. Our style is to respond to clients concerns.',
                imgUrl: '../../../../styles/images/2.png'
            },
            { id: 3,
                title: 'Life cycle',
                shortText: 'Any vertex regardless of its height is still a vertex. We do not ignore the small heights.',
                imgUrl: '../../../../styles/images/3.png'
            },
            {
                id: 4,
                title: 'Successful projects',
                shortText: 'We always keep in mind strategies which have led us to success  before.',
                imgUrl: '../../../../styles/images/4.png'
            },
            {
                id: 5,
                title: 'Using modern methods',
                shortText: 'Guarantee a zero percent of frustration and hundred percents of satisfaction.',
                imgUrl: '../../../../styles/images/5.png'
            },
            {
                id: 6,
                title: 'Customer satisfaction',
                shortText: 'Our approach is straightforward - don`t do it if you can`t do as the client wants.',
                imgUrl: '../../../../styles/images/6.png'
            }];
    }
    WhyWeComponent = __decorate([
        core_1.Component({
            selector: 'why-we',
            templateUrl: 'app/components/whyWe/whyWeComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WhyWeComponent);
    return WhyWeComponent;
}());
exports.WhyWeComponent = WhyWeComponent;
//# sourceMappingURL=whyWeComponent.js.map