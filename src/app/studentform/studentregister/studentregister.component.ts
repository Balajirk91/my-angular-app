import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent implements OnInit {
  errormsg: any;
  successmsg: any;
  mismatch:any;

  constructor(private formb:FormBuilder,public logser:AppserviceService,private route:Router) { }
  ngOnInit(): void {
  }
  get Username()
  {
    return this.logser.register.controls['username'];
  }
  get Password()
  {
    return this.logser.register.controls['password'];
  }
  get Confirmpassword()
  {
    return this.logser.register.controls['confirmpassword'];
  }
  postup()
  {
    if(this.Password.value===this.Confirmpassword.value)
    {
    let logincre=this.logser.register.value;
    this.logser.postlog(logincre).subscribe();
    this.successmsg="registered successfully";
    this.mismatch=false;
    }
    else{
      this.mismatch=true;
      this.errormsg="password and confirm password are not matched";
    }
  }
}
