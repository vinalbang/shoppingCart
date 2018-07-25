import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean=false;

  constructor() {
    //this.isLoggedIn=false;
   }

   getIsLoggedIn():boolean{
     
     return this.isLoggedIn;
      
   }

   setIsLoggedIn():void{
      this.isLoggedIn=true;
   }

}
