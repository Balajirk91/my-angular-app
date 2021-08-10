import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp/comp/comp.component';
import { Comp2Component } from './comp/comp/comp2/comp2.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeehomeComponent } from './employeeform/employeeHome/employeehome.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './studentform/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentformfillComponent } from './studentform/studentformfill/studentformfill.component';
import { StudentformhomeComponent } from './studentform/studentformhome/studentformhome.component';
import { StudentformviewComponent } from './studentform/studentformview/studentformview.component';
import { StudentloginComponent } from './studentform/studentlogin/studentlogin.component';
import { StudentregisterComponent } from './studentform/studentregister/studentregister.component';
import { TestcandeactivateGuard } from './testcandeactivate.guard';
import { InterceptComponent } from './intercept/intercept.component';

const sturoutes: Routes = [
  {path:'',redirectTo:"stulogin",pathMatch:"full"},
  {path:'stulogin',component:StudentloginComponent},
  {path:'stuhome',component:StudentformhomeComponent,canActivate:[AuthGuard],children:[
    {path:'formfill',component:StudentformfillComponent},
    {path:'formfill/:id',component:StudentformfillComponent},
    {path:'formview',component:StudentformviewComponent,canDeactivate:[TestcandeactivateGuard]},
  ]},
  {path:'stureg',component:StudentregisterComponent},
  {path:'comp',component:CompComponent},
  {path:'comp2',component:Comp2Component},
  {path:'inter',component:InterceptComponent},
  {path:"empform",component:EmployeeformComponent},
  {path:"emphome",component:EmployeehomeComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(sturoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
