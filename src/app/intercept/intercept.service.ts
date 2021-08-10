import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
  })
  export class InterceptService{
      constructor(private http:HttpClient){}
      private url="stud";
      getdata()
      {
         return this.http.get(this.url);
      }
  }
