
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog'
import { AppComponent } from './app.component';
import { AppserviceService } from './appservice.service';
import { CompComponent } from './comp/comp/comp/comp.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { StudentformfillComponent } from './studentform/studentformfill/studentformfill.component';
import { StudentformhomeComponent } from './studentform/studentformhome/studentformhome.component';
import { StudentformviewComponent } from './studentform/studentformview/studentformview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeehomeComponent } from './employeeform/employeeHome/employeehome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MaterialModule } from './material/material/material.module';
import { NamehighlightDirective } from './namehighlight.directive';
import { SortnamePipe } from './sortname.pipe';
import { IntercInterceptor } from './interc.interceptor';
import { StudentregisterComponent } from './studentform/studentregister/studentregister.component';
import { StudentloginComponent } from './studentform/studentlogin/studentlogin.component';
import { Comp2Component } from './comp/comp/comp2/comp2.component';
import { InterceptComponent } from './intercept/intercept.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,
    HomeComponent,
    StudentformhomeComponent,
    StudentformfillComponent,
    StudentformviewComponent,
    EmployeeformComponent,
    EmployeehomeComponent,
    PagenotfoundComponent,
    NamehighlightDirective,
    SortnamePipe,
    StudentregisterComponent,
    StudentloginComponent,
    Comp2Component,
    InterceptComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule
  ],
  bootstrap: [AppComponent],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:IntercInterceptor,multi:true}]
})
export class AppModule { }
