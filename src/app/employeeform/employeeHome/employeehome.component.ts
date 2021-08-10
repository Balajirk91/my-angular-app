import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  gotoform()
  {
    this.route.navigate(["/empform"]);
  }
}
