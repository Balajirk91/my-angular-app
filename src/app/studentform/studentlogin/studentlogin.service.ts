import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Injectable({
  providedIn: 'root'
})
export class StudentloginService {
  errormsg: any;
  data:any
  constructor(private formbuild:FormBuilder,private route:Router,private ser:AppserviceService) { }
  login = this.formbuild.group({
    lusername: ['', Validators.required],
    lpassword: ['', Validators.required]
  })
  get Username() {
    return this.login.controls['lusername'];
  }
  get Password() {
    return this.login.controls['lpassword'];
  }
  logincredentials() {
    let uname = this.Username.value;
    let pass = this.Password.value;

    this.ser.getlog().subscribe(
      (res: any) =>
       {
         let data=res.filter((data: any) => {
          if(data?.username === uname && data?.password === pass)
           {
            localStorage.setItem("uname",uname);
            localStorage.setItem("upass",pass);
            this.route.navigateByUrl('stuhome');
           }
          else
           {
            this.errormsg = "Username or password is not correct";
           }
        });
       });
    }
  }
