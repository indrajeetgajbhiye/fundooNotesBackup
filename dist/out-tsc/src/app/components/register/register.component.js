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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service, snackBar) {
        this.router = router;
        this.service = service;
        this.snackBar = snackBar;
        this.hide = true;
        this.firstname = new FormControl('', [Validators.required]);
        this.lastname = new FormControl('', [Validators.required]);
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
        this.confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
        if (localStorage.getItem("userToken") != null) {
            this.router.navigate(['']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log(this.router);
    };
    RegisterComponent.prototype.getFirstnameErrorMessage = function () {
        return this.firstname.hasError('required') ? "You must enter First Name" : '';
    };
    RegisterComponent.prototype.getLastnameErrorMessage = function () {
        return this.lastname.hasError('required') ? "You must enter Last Name" : '';
    };
    RegisterComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ?
            'You must enter email' : this.email.hasError('email') ? 'Not a Valid Email' : '';
    };
    RegisterComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : '';
    };
    RegisterComponent.prototype.getConfirmPasswordErrorMessage = function () {
        console.log(this.confirmpassword);
        if (this.confirmpassword.hasError('required')) {
            return "You must enter the confirm password";
        }
        else if (this.confirmpassword.hasError('minlength')) {
            return 'password at least 8 letters ';
        }
        else if (this.confirmpassword != this.password) {
        }
    };
    RegisterComponent.prototype.login = function () {
        console.log('fff', this.firstname.value);
        this.router.navigate(['login']);
    };
    RegisterComponent.prototype.forgot = function () {
        this.router.navigate(['forgot']);
    };
    RegisterComponent.prototype.matchPassword = function (password, confirmpassword) {
        if (password != confirmpassword) {
            return "password not matched";
        }
        if (password == confirmpassword) {
            return "password matched";
        }
    };
    RegisterComponent.prototype.secureRegister = function () {
        var _this = this;
        if (this.confirmpassword.value == this.password.value && this.firstname != null && this.lastname != null && this.email != null && this.password != null) {
            var user = {
                "firstName": this.firstname.value,
                "lastName": this.lastname.value,
                "service": "advance",
                "email": this.email.value,
                "password": this.password.value
            };
            console.log(user);
            this.service.postRequest('user/userSignUp', user).subscribe(function (data) {
                console.log('data==========', data);
                if (data.data.success == true) {
                    console.log("inside");
                    _this.snackBar.open("User Registerd", "Okay");
                    _this.router.navigate(['login']);
                }
            });
        }
        else {
            this.router.navigate['register'];
        }
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [Router, HttpService, MatSnackBar])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map