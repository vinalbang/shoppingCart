import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {LoginService} from '../login.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image="assets/images/shopping.jpg";

constructor(private router:Router, private login: LoginService, private app:AppComponent) {
  
 }

  ngOnInit() {
  }

loginUser(e)
{
  
  e.preventDefault();
  	console.log(e);
 var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;



if(username=='abcd' && password=='1234')
{
  this.login.setIsLoggedIn();
  this.router.navigate(['/cart']);
}

else
  {
      alert("Invalid username or password !!");
  }
}
}
