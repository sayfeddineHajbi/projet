import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }

  placeOrder(): void {
    // Get user inputs from the form
    const fullName = (<HTMLInputElement>document.getElementById("fullName")).value;
    const mobile = (<HTMLInputElement>document.getElementById("mobile")).value;
    const address = (<HTMLInputElement>document.getElementById("address")).value;

    // Validate user inputs
    if (!fullName || !mobile || !address) {
      alert("Please fill in all fields");
      return;
    }

    // Prepare the order data
    const orderData = {
      foodName: this.menuData[0].foodName,
      price: this.menuData[0].foodPrice,
      fullName: fullName,
      mobile: mobile,
      address: address
    };

    // Save the order data to the backend or perform other actions
    console.log("Order placed:", orderData);
    alert("Order placed successfully!");
  }

}
