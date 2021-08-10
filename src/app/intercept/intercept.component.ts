import { Component, OnInit } from '@angular/core';
import { InterceptService } from './intercept.service';

@Component({
  selector: 'app-intercept',
  templateUrl: './intercept.component.html',
  styleUrls: ['./intercept.component.css']
})
export class InterceptComponent implements OnInit {
  dta: any;

  constructor(private ser:InterceptService) { }

  ngOnInit(){
    
  }
  get()
  {
    this.ser.getdata().subscribe(res=>{
      this.dta=res;
    })
  }
}
