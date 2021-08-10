import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  empdetails:any;
  constructor(public edetail:AppserviceService) { }

  ngOnInit(){
    this.edetail.empdata().subscribe(data => {
      this.empdetails= data})
  
    }
  }


