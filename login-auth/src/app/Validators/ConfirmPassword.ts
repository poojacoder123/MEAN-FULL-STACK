import { FormGroup } from "@angular/forms"

export const ConfirmPasswordValidators = (controlName: any, controlNameToMatch: any)=>{
    return (formGroup : FormGroup)=>{
        let control=formGroup.controls[controlName];
        let controlTomatch=formGroup.controls[controlNameToMatch];
        if(controlTomatch.errors && !controlTomatch.errors['ConfirmPasswordValidators']
        ){
            return;
        }
        if(control.value !=controlTomatch){
            controlTomatch.setErrors({ConfirmPasswordValidators: true})
        }else{
            controlTomatch.setErrors(null);
        }

    
    }
}