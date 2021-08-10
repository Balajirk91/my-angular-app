import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppserviceService } from '../appservice.service';
import { StudentloginService } from './studentlogin/studentlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return true;
  }*/
  constructor(private loginser:StudentloginService,private ser:AppserviceService,private route:Router){

  }
  canActivate()
  {
    if(localStorage.getItem("uname")==null&&localStorage.getItem("upass")==null)
    {
      this.route.navigateByUrl("/stulogin");
      return false;
    }
    else
    {
      return true;
    }
  }
}  

