import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentformhome',
  templateUrl: './studentformhome.component.html',
  styleUrls: ['./studentformhome.component.css']
})
export class StudentformhomeComponent implements OnInit {

  constructor(private form:Router,private ra:ActivatedRoute) { }
  sidenavopen=false;
  ngOnInit(): void {
  }
  homepage()
  {
    this.form.navigate(['stuhome']);
  }
  stuform()
  {
    //this.form.navigateByUrl("/formfill");
    this.form.navigate(['formfill'],{relativeTo:this.ra});
  }
  studetails()
  {
    this.form.navigate(['formview'],{relativeTo:this.ra});
  }
  logout()
  {
    window.confirm("Do you want to logout?")
    this.form.navigateByUrl("/stulogin");
    localStorage.removeItem("uname");
    localStorage.removeItem("upass");
  }
}
