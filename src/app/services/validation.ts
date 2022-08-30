import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class ValidationService {

    constructor() {
        console.log('Hello ErrorHandlerProvider Provider')
    }

    // Validation for password and confirm password
    static MatchPassword(AC: AbstractControl) {
       const newPassword = AC.get('password').value // to get value in input tag
       const confirmPassword = AC.get('confirmPassword').value // to get value in input tag
        if(newPassword != confirmPassword && newPassword !=null  && confirmPassword !=null) {
            AC.get('confirmPassword').setErrors( { MatchPassword: true } )
        } else {
            AC.get('confirmPassword').setErrors({ MatchPassword: false });
        }
    }
}