import { Component, OnInit } from '@angular/core';
import { ConfirmProductComponent } from '../confirm-product/confirm-product.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public dialog: MatDialog,public router:Router,public cartService:CartService,) { }
  private records;
  private clicked = false;
  public cards=[];
  private service;

  ngOnInit() {
    this.getServices()

  }
  getServices() {
    this.records = this.cartService.getServiceOfUser()
    .subscribe(data => {
      for (var i = 0; i < data["data"].data.length; i++) {
        data["data"].data[i].select = false;
        this.cards.push(data["data"].data[i]);
      }
      var value = data["data"].data.name;
    })
  }
  openDialog(product): void {
    const dialogRef = this.dialog.open(ConfirmProductComponent, {
      width: "auto",
      height: "auto",
      data:product
    });
  }

  selectCards(product) {
    this.service=product.name
    product.select=true;
    for(var i=0;i<this.cards.length;i++){
      if(product.name==this.cards[i].name){
      continue}
      this.cards[i].select=false
    }
  }
  cartAdd(cart) {
    console.log("cart",cart)
    this.cartService.addtoCart(
      {
        "productId": cart.id
      }
      
    ).subscribe(
      (data) => {
        console.log(data)
        localStorage.setItem("cartId",data['data']['details'].id)
      }, error => {
        console.log(error)
      }
    )
}
  login(){
    this.router.navigate(['login'])
  }

}
