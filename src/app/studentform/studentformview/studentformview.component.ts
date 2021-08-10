import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentformfillComponent } from '../studentformfill/studentformfill.component';
import { FormControl, FormGroup } from '@angular/forms';
import { map, filter, take } from "rxjs/operators"
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-studentformview',
  templateUrl: './studentformview.component.html',
  styleUrls: ['./studentformview.component.css']
})
export class StudentformviewComponent implements OnInit, AfterViewInit {
  stulists: any;
  studata: any;
  displayedcolumns = ['id', 'stuname', 'studept', 'stushift', 'stuaddress', 'stucity', 'delete', 'edit'];
  res: any;
  data: any;
  iddata: any;
  message: any;
  stuname: any;
  @ViewChild(MatPaginator) paginator: any;
  constructor(private service: AppserviceService, private r: Router, public dialog: MatDialog,private ra:ActivatedRoute) { }
  ngOnInit() {
    this.service.stugetdata().subscribe(data => {
      this.stulists = data;
      this.studata = new MatTableDataSource(this.stulists);
    })
  }
  ngAfterViewInit() {
   this.studata.paginator = this.paginator;
  }
  delete(del: any) {
    alert("are you want to delete")
    this.service.deletedata(del).subscribe();
    this.ngOnInit();
  }
  onclick(id: any) {
    this.r.navigate(["/stuhome/formfill/" + id])
    this.service.stusingledata(id).subscribe(datas => {
      this.data = datas;
      this.service.stuform.patchValue({
        stuname: this.data.stuname,
        studept: this.data.studept,
        stushift: this.data.stushift,
        stuaddress: this.data.stuaddress,
        stucity: this.data.stucity
      })
    })
  }
  backtoform() {
    this.r.navigate(["/stuhome/formfill"]);
  }
  applyfilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.studata.filter = filterValue.trim().toLowerCase();
  }
  setcolor(city: any) {
    switch (city) {
      case "chennai":
        return "green";
      case "bangalore":
        return "blue";
      case "kanchipuram":
        return "brown";
      default:
        return "red";
    }
  }
  canDeactivate(){
    return new Promise((resolve,reject)=>{
      resolve(confirm("Do you want to navigate back?"));
    })
  }
}