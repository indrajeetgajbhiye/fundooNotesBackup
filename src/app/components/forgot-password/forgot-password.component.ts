import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { HttpService } from 'src/app/service/http/http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    constructor(private router: Router,  private service : HttpService, public snackBar: MatSnackBar) { 
        if(localStorage.getItem("userToken")!=null){
            this.router.navigate([''])
        }
    }
    ngOnInit() {
    }
    isValid = false;
    email = new FormControl('', [Validators.required, Validators.email]); //Email validation

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    passwordReset(email) {
        console.log(email);
        var user = {
            "email": email
        }
        this.service.postRequest('user/reset',user ).subscribe((data:any)=>{
            if(data.success==true){
                this.snackBar.open("mail sent", "Okay");
            }
        })
    }
}