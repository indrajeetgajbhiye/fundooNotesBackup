var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../service/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.hide = true;
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.router);
        console.log(this.service);
    };
    LoginComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ?
            'You must enter email' : this.email.hasError('email') ? 'Not a Valid Email' : '';
    };
    LoginComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : '';
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['registration']);
    };
    LoginComponent.prototype.forgot = function () {
        this.router.navigate(['forgot']);
    };
    LoginComponent.prototype.secureLogin = function (email, password) {
        var _this = this;
        if (email != null && password != null) {
            var user = {
                "email": email,
                "password": password
            };
            this.service.postRequest('user/login', user).subscribe(function (data) {
                console.log(data);
                localStorage.setItem('userToken', data.id);
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('email', data.email);
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);
                localStorage.setItem('imageUrl', data.imageUrl);
                if (data.id) {
                    _this.router.navigate(['home']);
                    return true;
                }
                else {
                    _this.snackBar.open('login unsuccessfull', "okay");
                    _this.router.navigate(['login']);
                    return false;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            HttpService, MatSnackBar])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map