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
var serviceItemModel_1 = require('../../models/serviceItemModel');
var ServiceComponent = (function () {
    function ServiceComponent() {
    }
    __decorate([
        core_1.Input('sitem'), 
        __metadata('design:type', serviceItemModel_1.ServiceItem)
    ], ServiceComponent.prototype, "item", void 0);
    ServiceComponent = __decorate([
        core_1.Component({
            selector: 'service',
            templateUrl: 'app/components/serviceComponent/serviceComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceComponent);
    return ServiceComponent;
}());
exports.ServiceComponent = ServiceComponent;
//# sourceMappingURL=serviceComponent.js.map