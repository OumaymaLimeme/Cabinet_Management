
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class BuyValidation {
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

            departement_id: new FormControl(),
            patient_id: new FormControl(),
            doctor_id: new FormControl(),
            date: new FormControl('', Validators.required),
            problem: new FormControl('', Validators.required),
            status: new FormControl(),
        })
    }
}
