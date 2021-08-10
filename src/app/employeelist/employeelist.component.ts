import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  emplists:any;
  constructor(public elist:AppserviceService,private route:Router) { }

  ngOnInit(){
    this.elist.empdata().subscribe(data => {
      this.emplists= data;})
  
    }
    details()
    {
      this.route.navigate(["/edetails"]);
    }
  }
