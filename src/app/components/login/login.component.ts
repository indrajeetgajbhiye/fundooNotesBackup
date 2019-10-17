import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpService } from '../../service/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public hide = true;
    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required, Validators.minLength(8)])

    constructor(private router: Router, 
        private service : HttpService,  public snackBar: MatSnackBar) {
         }
    ngOnInit() {
        console.log(this.router)
        console.log(this.service)
    }

    getEmailErrorMessage(): String {
        return this.email.hasError('required') ?
            'You must enter email' : this.email.hasError('email') ? 'Not a Valid Email' : ''
    }
    getPasswordErrorMessage(): String {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : ''
    }
    register() {
        this.router.navigate(['registration'])
    }
    forgot() {
        this.router.navigate(['forgot'])
    }
    secureLogin(email, password){
        if(email != null && password != null){
            var user = {
                "email" : email,
                "password" : password
            }
            this.service.postRequest('user/login', user).subscribe((data:any)=>{
                console.log(data);
                localStorage.setItem('userToken', data.id);
                localStorage.setItem('userId', data.userId)
                localStorage.setItem('email', data.email)
                localStorage.setItem('firstName', data.firstName)
                localStorage.setItem('lastName', data.lastName)
                localStorage.setItem('imageUrl', data.imageUrl)
                if(data.id){
                    this.router.navigate(['home'])
                }
                else{
                    this.snackBar.open('login unsuccessfull', "okay")
                    this.router.navigate(['login'])
                }
            })
        }
    }
}
