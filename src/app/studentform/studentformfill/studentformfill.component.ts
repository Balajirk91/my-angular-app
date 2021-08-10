import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';
import { StudentformviewComponent } from '../studentformview/studentformview.component';

@Component({
  selector: 'app-studentformfill',
  templateUrl: './studentformfill.component.html',
  styleUrls: ['./studentformfill.component.css']
})
export class StudentformfillComponent implements OnInit{
  iddata: any;
  constructor(public service:AppserviceService,private view:Router,private ra:ActivatedRoute) { }
  message:any
  ngOnInit(){
  }
  saveform()
  {
    if(this.service.stuform.valid)
    {
    let savedform=this.service.stuform.value;
    this.service.stusaveddata(savedform).subscribe(res=>{
      
     });
    }
    else
    {
      this.message="Please fill the data"
    }
    
  }
  clearform()
  {
    this.service.stuform.reset();
  }
  viewform()
  {
    this.view.navigate(["/stuhome/formview"]);
  }
  updateform()
  {
    let id=this.ra.snapshot.params.id;
    let savedform=this.service.stuform.value;
    this.service.stuupdate(id,savedform).subscribe();
    this.viewform();
  }
  get Studentname()
  {
    return this.service.stuform.controls['stuname']
  }
  get Studentdept()
  {
    return this.service.stuform.controls['studept']
  }
  get Studentshift()
  {
    return this.service.stuform.controls['stushift']
  }
  get Studentaddress()
  {
    return this.service.stuform.controls['stuaddress']
  }
  get Studentcity()
  {
    return this.service.stuform.controls['stucity']
  }
}
