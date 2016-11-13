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
var OurRecentWorkComponent = (function () {
    function OurRecentWorkComponent() {
        this.recentWork = [
            {
                id: 1,
                title: 'Radio Alarm iOS App',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 2,
                title: 'Portland UI Kit Free Sample',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            { id: 3,
                title: 'Carwash iOS App',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 4,
                title: 'Nexus 5 Mockups',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 5,
                title: 'The Rapture Startup',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 6,
                title: 'Portland UI Kit',
                imgUrl: '../../../../styles/images/serviceStub.png'
            }];
    }
    OurRecentWorkComponent = __decorate([
        core_1.Component({
            selector: 'our-recent-work',
            templateUrl: 'app/components/ourRecentWork/ourRecentWorkComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OurRecentWorkComponent);
    return OurRecentWorkComponent;
}());
exports.OurRecentWorkComponent = OurRecentWorkComponent;
//# sourceMappingURL=ourRecentWorkComponent.js.map