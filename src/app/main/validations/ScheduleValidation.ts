
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

            doctor_id: new FormControl('', Validators.required),
            available_days: new FormControl(),
            start_time: new FormControl('', Validators.required),
            end_time: new FormControl('', Validators.required),
            per_patient_time: new FormControl('', Validators.required),
            serial_visibility_type: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
        })
    }
}
