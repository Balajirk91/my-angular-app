import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  emplist: any;
  data: any;
  constructor(private ser:AppserviceService) { }
  empform=new FormGroup({
    ename:new FormControl('',Validators.required),
    edept:new FormControl(''),
    eshift:new FormControl(''),
    eaddress:new FormControl(''),
    ecity:new FormControl('')
  });
  ngOnInit(){
}
  saveform()
  {
    let saveddata=this.empform.value;
    this.ser.emppostdata(saveddata).subscribe();
    this.viewform();
  }
  viewform()
  {
    this.ser.empgetdata().subscribe(data=>{
      this.emplist=data
    })
  }
  clearform(){
    this.empform.reset();
  }
  deldata(id:any)
  {
    this.ser.empdeldata(id).subscribe(res=>{
      this.viewform();
    });
  }
  editdata(id:any)
  {
    this.ser.empsingledata(id).subscribe(datas=>{
      this.data=datas;
      this.empform.patchValue({
        ename:this.data.ename,
        edept:this.data.edept,
        eshift:this.data.eshift,
        eaddress:this.data.eaddress,
        ecity:this.data.ecity
      })
    })
  }
  updateform()
  {
    let id=this.data.id
    let savedata=this.empform.value;
    this.ser.empupdate(id,savedata).subscribe();
    this.viewform();
  }
}
