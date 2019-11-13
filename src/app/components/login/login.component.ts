import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpService } from '../../service/http/http.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public hide = true;
    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required, Validators.minLength(8)])
    public loading = false;
    constructor(private router: Router, 
        private service : HttpService,  
        public snackBar: SnackbarService) {
            if(localStorage.getItem('userToken')){
                this.router.navigate([''])
            }
         }
    ngOnInit() {
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
        this.router.navigate(['product'])
    }
    forgot() {
        this.router.navigate(['forgot'])
    }
    secureLogin(){
        this.loading = true;
        if(this.email.value != '' && this.password.value != ''){
            var user = {
                "email" : this.email.value,
                "password" : this.password.value
            }
            this.service.postRequest('user/login', user).subscribe((data:any)=>{
                this.loading = false;
                localStorage.setItem('userToken', data.id);
                localStorage.setItem('userId', data.userId)
                localStorage.setItem('email', data.email)
                localStorage.setItem('firstName', data.firstName)
                localStorage.setItem('lastName', data.lastName)
                localStorage.setItem('imageUrl', data.imageUrl)
                if(data.id){
                    this.router.navigate(['home'])
                    return true
                }
            },
            error=>{
                this.loading = false;
                this.snackBar.open('login unsuccessfull try again', "okay")
            })
        }else{
            this.snackBar.open("Please fill the fileds to log in")
        }
    }
}
