import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyFunctionService } from 'src/app/service/my-function.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  LoginSuperAdmin!: FormGroup
constructor(private _fb: FormBuilder, private _service: MyFunctionService,private Router: Router){}
ngOnInit(): void {
  this.LoginSuperAdmin = this._fb.group({
    
    email : ["", Validators.required],
    password : ["", Validators.required],
     })
}
login(){
  this._service.loginSuperAdmin(this.LoginSuperAdmin.value).subscribe({
    next: (res)=>{
      console.log("super admin login ", res);
      localStorage.setItem("token", res.token);
      this.LoginSuperAdmin.reset();
      this.Router.navigate(["/home"])
      
    }
  })
}
}
