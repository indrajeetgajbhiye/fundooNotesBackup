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
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../service/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, service, activeRoute, snackBar) {
        this.router = router;
        this.service = service;
        this.activeRoute = activeRoute;
        this.snackBar = snackBar;
        this.hide = true;
        this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
        this.confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
        this.accessToken = this.activeRoute.snapshot.paramMap.get('token');
        if (localStorage.getItem("userToken") != null) {
            this.router.navigate(['']);
        }
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        console.log(this.router);
        console.log(this.service);
        localStorage.setItem('token', this.accessToken);
    };
    ResetPasswordComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : '';
    };
    ResetPasswordComponent.prototype.getConPasswordErrorMessage = function () {
        return this.confirmpassword.hasError('required') ?
            'You must enter password' : this.confirmpassword.hasError('minlength') ? 'Wrong password' : '';
    };
    ResetPasswordComponent.prototype.reset = function () {
        var _this = this;
        if (this.confirmpassword != null && this.password != null && this.confirmpassword.value == this.password.value) {
            var user = {
                "newPassword": this.password.value
            };
            console.log(user);
            this.service.postUrlEncoded('user/reset-password', user).subscribe(function (data) {
                console.log('resolve', data);
                _this.router.navigate(['login']);
            }, function (error) {
                console.log('error', error);
                _this.snackBar.open("Unknown error occurred", "try again");
                _this.router.navigate(['forgot']);
            });
        }
    };
    ResetPasswordComponent = __decorate([
        Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            HttpService, ActivatedRoute, MatSnackBar])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map