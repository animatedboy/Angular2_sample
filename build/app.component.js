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
var app_login_service_1 = require('./app.login.service');
var AppComponent = (function () {
    function AppComponent(_loginService) {
        this._loginService = _loginService;
        this.title = 'Angular Demo';
        this.loginModel = {
            userId: '',
            password: ''
        };
    }
    ;
    AppComponent.prototype.login = function (loginModel) {
        //console.log(loginModel);
        this._loginService.authenticate(loginModel).then(function (response) {
            console.log(response);
            if (response.status === 'success') {
                alert("Success");
            }
        });
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'build/templates/login.html'
        }), 
        __metadata('design:paramtypes', [app_login_service_1.loginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map