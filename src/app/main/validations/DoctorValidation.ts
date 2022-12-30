
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class DoctorValidation {
    formGroup: FormGroup;

    public get formGroupInstance(): FormGroup {
        return this.formGroup;
    }

    constructor() {
        this.formGroup = this.createFormGroup()
    }

    public checkValidation() {

        if (this.formGroup.invalid) {
            return false;
        }
        return true;
    }
    createFormGroup() {
        return new FormGroup({

            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            designation: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            departement_id: new FormControl(),
            phone: new FormControl('', Validators.required),
            mobile: new FormControl('', Validators.required),
            specialist: new FormControl('', Validators.required),
            date_of_birth: new FormControl('', Validators.required),
            sex: new FormControl('', Validators.required),
            blood_group: new FormControl(),
            status: new FormControl('', Validators.required),

        })
    }
}
