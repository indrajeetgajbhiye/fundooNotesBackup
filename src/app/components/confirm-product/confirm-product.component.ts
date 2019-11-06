import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-product',
  templateUrl: './confirm-product.component.html',
  styleUrls: ['./confirm-product.component.scss']
})
export class ConfirmProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private router: Router) { }

  ngOnInit() {
    localStorage.setItem("product.name", this.data.name)
    localStorage.setItem("product.price", this.data.price)
    localStorage.setItem("product.decription", this.data.decription)
    // localStorage.setItem("product", this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  rejectCart() {
    this.dialogRef.close();
  }
  proceedCheckout() {
    this.onNoClick()
    this.router.navigate(['/registration'])
  }
}
