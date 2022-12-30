
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

            insurance_name: new FormControl(),
            service_tax: new FormControl(),
            discount: new FormControl(),
            remark: new FormControl(),
            insurance_no: new FormControl(),
            insurance_code: new FormControl(),
            disease_name: new FormControl(),
            disease_charge: new FormControl(),
            hospital_rate: new FormControl(),
            insurance_rate: new FormControl(),
            total: new FormControl(),
            status: new FormControl(),
        })
    }
}
