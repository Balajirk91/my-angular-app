import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';
import { StudentloginService } from './studentlogin.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  logincre: any;
  errormsg: any;
  errmsg: any;

  constructor(private ser: AppserviceService,public loginser:StudentloginService) { }

  ngOnInit() {
    this.ser.getlog().subscribe(data => {
      this.logincre = data;
      console.log(this.logincre);
    })
  }
  logincred()
  {
    this.loginser.logincredentials();
    this.errmsg=this.loginser.errormsg;
  }
  /*login = this.formbuild.group({
    lusername: ['', Validators.required],
    lpassword: ['', Validators.required]
  })
  get Username() {
    return this.login.controls['lusername'];
  }
  get Password() {
    return this.login.controls['lpassword'];
  }
  loginf() {
    console.log(this.Username.value);
    console.log(this.logincre);
    if (this.Username.value === this.logincre["username"]) {
      if (this.Password.value === this.logincre["password"]) {
        this.route.navigateByUrl("/stuhome");
      }
    }
    else {
      this.errormsg = "Username or password is not correct";
    }
  }
  logincredentials() {
    let uname = this.Username.value;
    let pass = this.Password.value;
    this.ser.getlog().subscribe(
      (res: any) =>
       {
         let data = res.filter((data: any) => {
          if(data?.username === uname && data?.password === pass)
           {
            this.route.navigateByUrl('stuhome');
           }
          else
           {
            this.errormsg = "Username or password is not correct";
           }
        });
       });
    }
  }*/
}