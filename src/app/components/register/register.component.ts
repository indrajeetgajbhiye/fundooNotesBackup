import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpService } from 'src/app/service/http/http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public hide = true;
    public firstname = new FormControl('',[Validators.required])
    public lastname = new FormControl('',[Validators.required])
    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required, Validators.minLength(8)])
    public confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)])
    constructor(private router: Router,  private service : HttpService, public snackBar: MatSnackBar) { 
        if(localStorage.getItem("userToken")!=null){
            this.router.navigate([''])
        }
    }
    ngOnInit() {
        console.log(this.router)
    }
    getFirstnameErrorMessage(): String {
        return this.firstname.hasError('required') ? "You must enter First Name":''
    }
    getLastnameErrorMessage(): String {
        return this.lastname.hasError('required') ? "You must enter Last Name":''
    }
    getEmailErrorMessage(): String {
        return this.email.hasError('required') ?
            'You must enter email' : this.email.hasError('email') ? 'Not a Valid Email' : ''
    }
    getPasswordErrorMessage(): String {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : ''
    }
    getConfirmPasswordErrorMessage(): String {
        console.log(this.confirmpassword)
        if(this.confirmpassword.hasError('required')){
            return "You must enter the confirm password"
        }
        else if(this.confirmpassword.hasError('minlength')){
            return 'password at least 8 letters '
        }
        else if(this.confirmpassword != this.password){
            
        }
    }
    login() {
        console.log('fff',this.firstname.value)
        this.router.navigate(['login'])
    }
    forgot() {
        this.router.navigate(['forgot'])
    }
    matchPassword(password, confirmpassword){
        if(password!=confirmpassword){
            return "password not matched"
        }
        if(password==confirmpassword){
            return "password matched"
        }
    }
    secureRegister(){
        if(this.confirmpassword.value == this.password.value && this.firstname!=null && this.lastname != null && this.email != null && this.password != null){
            var user = {
                "firstName" : this.firstname.value,
                "lastName" : this.lastname.value,
                "service" : "advance", 
                "email" : this.email.value,
                "password" : this.password.value
            }
            console.log(user);
            this.service.postRequest('user/userSignUp', user).subscribe((data:any)=>{
                if(data.data.success==true){
                    this.snackBar.open("User Registerd");
                    this.router.navigate(['login'])
                }
            },error=>{
                this.snackBar.open("Registration Error", 'Retry')
            })
        }
        else{
            this.router.navigate['register']
        }
    }
}
