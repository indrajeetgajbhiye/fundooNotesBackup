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
import { HttpService } from 'src/app/service/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.isValid = false;
        this.email = new FormControl('', [Validators.required, Validators.email]); //Email validation
        if (localStorage.getItem("userToken") != null) {
            this.router.navigate(['']);
        }
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ForgotPasswordComponent.prototype.passwordReset = function (email) {
        var _this = this;
        console.log(email);
        var user = {
            "email": email
        };
        this.service.postRequest('user/reset', user).subscribe(function (data) {
            if (data.success == true) {
                _this.snackBar.open("mail sent", "Okay");
            }
        });
    };
    ForgotPasswordComponent = __decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
        }),
        __metadata("design:paramtypes", [Router, HttpService, MatSnackBar])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
export { ForgotPasswordComponent };
//# sourceMappingURL=forgot-password.component.js.map