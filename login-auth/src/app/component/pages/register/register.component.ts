import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidators } from 'src/app/Validators/ConfirmPassword';
import { MyFunctionService } from 'src/app/service/my-function.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addSuperAdmin!: FormGroup
constructor(private _fb : FormBuilder,
  private _Service: MyFunctionService){}
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
}
submit(){
  console.log(this.addSuperAdmin.value);
  this._Service.registerSuperAdmin(this.addSuperAdmin.value).subscribe({
    next: (res)=>{
      console.log("super admin registered ", res)
    }
  })
  }
}
