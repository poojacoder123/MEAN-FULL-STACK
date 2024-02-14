import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { RegisterComponent } from './component/pages/register/register.component';
import { SignatureComponent } from './component/pages/signature/signature.component';


const routes: Routes = [
 {
  path: "",
  redirectTo: "login",
  pathMatch: 'full'
 },
 {
  path: "login",
  component : LoginComponent
 },
 {
  path: "register",
  component: RegisterComponent
 },
 
  {
    path: "home",
    component :HomeComponent
  },
  {
    path:"s",
    component:SignatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
