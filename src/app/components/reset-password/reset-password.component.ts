import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute} from '@angular/router'
import { HttpService } from '../../service/http/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    public hide = true;
    public password = new FormControl('', [Validators.required, Validators.minLength(8)])
    public confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)])
    constructor(private router: Router,
    private service: HttpService, private activeRoute : ActivatedRoute, public snackBar: MatSnackBar) { 
        if(localStorage.getItem("userToken")!=null){
            this.router.navigate([''])
        }
    }
    accessToken = this.activeRoute.snapshot.paramMap.get('token')
    ngOnInit() {
        console.log(this.router)
        console.log(this.service)   
        localStorage.setItem('token', this.accessToken)
    }
    getPasswordErrorMessage(): String {
        return this.password.hasError('required') ?
            'You must enter password' : this.password.hasError('minlength') ? 'Wrong password' : ''
    }
    getConPasswordErrorMessage(): String {
        return this.confirmpassword.hasError('required') ?
            'You must enter password' : this.confirmpassword.hasError('minlength') ? 'Wrong password' : ''
    }
    reset() {
        if(this.confirmpassword!=null && this.password != null && this.confirmpassword.value==this.password.value){
            var user = {
                "newPassword": this.password.value
            }
            console.log(user);
            
            this.service.postUrlEncoded('user/reset-password', user).subscribe((data: any) => {
                console.log('resolve',data);
                this.router.navigate(['login'])
            }, (error:any)=>{
                console.log('error',error);
                this.snackBar.open("Unknown error occurred","try again");
                this.router.navigate(['forgot'])
            }
            )
        }
    }
}
