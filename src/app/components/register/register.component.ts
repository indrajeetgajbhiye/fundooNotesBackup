import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { HttpService } from 'src/app/service/http/http.service';
import { SnackbarService } from 'src/app/service/snackbar/snackbar.service';
import { CartService } from 'src/app/service/cart/cart.service';
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
    public serv
    product: any;
    prodId: any;
    records = {};
    cards = []
    private cartId = localStorage.getItem('cartId')
    constructor(private router: Router,  private service : HttpService, public snackBar: SnackbarService, public cartService : CartService ) { 
        if(localStorage.getItem("userToken")){
            this.router.navigate([''])
        }
        if(!localStorage.getItem("cartId")){
            this.router.navigate(['product'])
        }
    }
    ngOnInit() {
        this.records = this.cartService.getServiceOfUser().subscribe(data => {
            for (var i = 0; i < data["data"].data.length; i++) {
              data["data"].data[i].select = false;
              this.cards.push(data["data"].data[i]);
            }
            var value = data["data"].data.name;
      })
        this.getCartInformation()
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
        if(this.confirmpassword.hasError('required')){
            return "You must enter the confirm password"
        }
        else if(this.confirmpassword.hasError('minlength')){
            return 'password at least 8 letters '
        }
        else if(this.confirmpassword != this.password){
            return "password don't match"
        }
    }
    login() {
        this.router.navigate(['login'])
    }
    forgot() {
        this.router.navigate(['forgot'])
    }
    matchPassword(password, confirmpassword){
        if(password!=confirmpassword){
            return "password not matched"
        }
        if(password==confirmpassword && confirmpassword!=''){
            return "password matched"
        }
        if(confirmpassword==''){
            return "Enter the confirm password"
        }
    }
    goToProduct(){
        this.router.navigate(['product'])
    }
    secureRegister(){
        
        if(this.confirmpassword.value == this.password.value && this.firstname.value!= '' && this.lastname.value != '' && this.email.value != '' && this.password.value != ''){
            var user = {
                "firstName" : this.firstname.value,
                "lastName" : this.lastname.value,
                "service" : this.product.name,
                "email" : this.email.value,
                "password" : this.password.value,
                "cartId": this.cartId
            }
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
            this.snackBar.open('Please fill all the fields')
        }
    }
    getCartInformation(){
        this.cartService.getCartDetails(this.cartId).subscribe(
          data => {
            this.prodId = data['data'].productId
            this.product =  data['data']['product'];
          },
          error => {
          }
      )
      }
      selectCards(card){
            this.cartAdd(card);
      }
      cartAdd(cart) {
        this.cartService.addtoCart(
          {
            "productId": cart.id
          }
          
        ).subscribe(
          (data) => {
            localStorage.clear();
            this.cartId = data['data']['details'].id
            localStorage.setItem("cartId",data['data']['details'].id)
            this.getCartInformation()
          }, error => {
          }
        )
    }

}
