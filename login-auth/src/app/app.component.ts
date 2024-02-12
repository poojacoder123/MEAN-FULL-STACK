import { Component,OnInit,computed,signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyFunctionService } from './service/my-function.service';
import { Router, RouterOutlet } from '@angular/router';
import { ConfirmPasswordValidators } from './Validators/ConfirmPassword';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-auth';
  firstName = signal("pooja");
  lastName = signal("agrawal");
  addSuperAdmin!:FormGroup
  LoginSuperAdmin!:FormGroup;

  fullname =computed(()=>
    this.firstName() + " " + this.lastName()
  )
  changeFisrstName(fname:any){
    console.log(fname)
   this.firstName.set(fname)
  }
  changelastName(lname:any){
 this.lastName.set(lname)
  }
  constructor(
    private _Service: MyFunctionService,
     private _fb: FormBuilder,
     private Router : Router){

  }
  ngOnInit(): void {
    this.addSuperAdmin = this._fb.group({
   name : ["", Validators.required],
   email : ["", Validators.compose([Validators.required, Validators.email])],
   password : ["", Validators.required],
   ConfirmPassword : ["",Validators.required ]
    },
    {
      validator : ConfirmPasswordValidators('password', 'ConfirmPassword')
    })
    this.LoginSuperAdmin = this._fb.group({
    
      email : ["", Validators.required],
      password : ["", Validators.required],
       })
   
   
  }

  submit(){
  console.log(this.addSuperAdmin.value);
  return
  this._Service.registerSuperAdmin(this.addSuperAdmin.value).subscribe({
    next: (res)=>{
      console.log("super admin registered ", res)
    }
  })
  }
  login(){
    this._Service.loginSuperAdmin(this.addSuperAdmin.value).subscribe({
      next: (res)=>{
        console.log("super admin login ", res);
        localStorage.setItem("token", res.token);
        this.LoginSuperAdmin.reset();
        this.Router.navigate(["/home"])
        
      }
    })
  }
}
