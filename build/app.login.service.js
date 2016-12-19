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
var http_1 = require('@angular/http'); // service provider for HttpModule
require('rxjs/add/operator/toPromise'); //for returning promise from service request
var loginService = (function () {
    function loginService(_http) {
        this._http = _http;
    }
    loginService.prototype._handleError = function (error) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ;
    loginService.prototype.authenticate = function (loginModel) {
        console.log(loginModel);
        return this._http.post('usermanagementapi/auth/authenticate', loginModel)
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            return response.json();
        })
            .catch(this._handleError);
    };
    loginService = __decorate([
        //for returning promise from service request
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], loginService);
    return loginService;
}());
exports.loginService = loginService;
//# sourceMappingURL=app.login.service.js.map