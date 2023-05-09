import { Component,OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { user } from 'src/app/app.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user:user=new user();
  save(f:NgForm) { 
    this.user=f.value;
    this.user.email=f.value['email'];
    this.user.password=f.value['password'];
    console.log(this.user);
    
  
}

}
