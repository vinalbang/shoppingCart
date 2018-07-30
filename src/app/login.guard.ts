import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private login:LoginService,private route: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.login.getIsLoggedIn()){
      console.log(this.login.getIsLoggedIn())
        this.route.navigate(['']);
        return true;
      }
      console.log(this.login.getIsLoggedIn())
        return false;
  
  }
}
