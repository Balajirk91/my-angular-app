import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from '../../../appservice.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  logindata: any;

  constructor(private ser:AppserviceService,private r:Router,private ra:ActivatedRoute) { }
  name="interpolation";
  able=true;
  ngOnInit(){
    this.ser.getlog().subscribe(data=>{
      this.logindata=data;
    })
  }
 data=[
    {id:1,name:"balaji"},
    {id:2,name:"arun"},
    {id:3,name:"creswell"}
  ]
  comp2(){
    this.r.navigate(['comp2'],{relativeTo:this.ra});
  }
}
