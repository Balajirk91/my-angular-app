import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  stuform:FormGroup=new FormGroup({
    stuname:new FormControl('',Validators.required),
    studept:new FormControl('',Validators.required),
    stushift:new FormControl('',Validators.required),
    stuaddress:new FormControl('',Validators.required),
    stucity:new FormControl('',Validators.required)
  })
  register=this.reg.group({
    username:['',Validators.required],
    password:['',Validators.required],
    confirmpassword:['',Validators.required]
  })
  constructor(private http:HttpClient,private reg:FormBuilder) {
   }
  private url1="employeeprofile";
  private url2="employee";
   private stuurl="studentdetails";
   private stulog="login"
   empdata()
   {
     return this.http.get(this.url1);
   }
   empdetail()
   {
     return this.http.get(this.url2);
   }
   postlog(data:any)
   {
     return this.http.post(this.stulog,data);
   }
   getlog()
   {
     return this.http.get(this.stulog);
   }
   stusaveddata(data:any)
   {
     return this.http.post(this.stuurl,data)
   }
   stusingledata(d:any)
   {
     return this.http.get(this.stuurl+"/"+d);
   }
   stugetdata(){
     return this.http.get(this.stuurl)
   }
   stuupdate(id:any,data:any)
   {
     return this.http.put(this.stuurl+"/"+id,data);
   }
   deletedata(del:any)
   {
     return this.http.delete(this.stuurl+"/"+del)
   }
   getsingledata(id:any)
   {
     return this.http.get(this.stuurl+"/"+id);
   }
   emppostdata(ed:any)
   {
      return this.http.post(this.url1,ed)
   }
   empgetdata()
   {
     return this.http.get(this.url1);
   }
   empdeldata(edd:any)
   {
     return this.http.delete(this.url1+"/"+edd);
   }
   empsingledata(eid:any)
   {
     return this.http.get(this.url1+"/"+eid);
   }
   empupdate(id:any,data:any)
   {
     return this.http.put(this.url1+"/"+id,data);
   }
}
