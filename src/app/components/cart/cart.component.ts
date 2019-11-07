import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { SnackbarService } from '../../service/snackbar/snackbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  service: string = '';
  selected: any;
  noCart: any;
  cond: string = 'signin';
  address: string = '';
  public value = 25;
  cartid: any;
  public forCss;
  public firstCss = true;
  paymentStatus:boolean = false;
  constructor(public cartService: CartService, public snackbar: SnackbarService) { }

  ngOnInit() {
    this.getCart()
  }
  getCart(){
    this.cartService.getMyCart().subscribe(data=>{
      if(data['data'].length>0){
      this.paymentStatus = data['data'][0].isPaymentDone;
       this.selected= data['data'][0]['product'];
       this.cartid=data['data'][0].id
       console.log("data", data)
       console.log("cartid", this.cartid)
      }
      else{
        this.noCart=data['data']
      }
    }, error=>{
      console.log("eroor",error)
    })
  }
  
  placeOrder(){
    if(this.address==''){
      this.snackbar.open('address should not be empty',"close");
    }
    else{
      this.cartService.placeOrder( {"cartId":this.cartid,"address":this.address}).subscribe(data=>{
        this.cond='complete';
        this.value = 100
        this.forCss = false
        console.log("data")
      }) 
    }
  }
}
