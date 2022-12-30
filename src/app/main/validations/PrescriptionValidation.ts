
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

            patient_id: new FormControl('', Validators.required),
            food_allergies: new FormControl(),
            tendency_bleed: new FormControl('', Validators.required),
            heart_disease: new FormControl('', Validators.required),
            high_blood_pressure: new FormControl('', Validators.required),
            diabetic: new FormControl('', Validators.required),
            surgery: new FormControl('', Validators.required),
            accident: new FormControl('', Validators.required),
            others: new FormControl('', Validators.required),
            family_medical_history: new FormControl('', Validators.required),
            current_medication: new FormControl('', Validators.required),
            female_pregnancy: new FormControl('', Validators.required),
            breast_feeding: new FormControl('', Validators.required),
            health_insurance: new FormControl('', Validators.required),
            low_income: new FormControl('', Validators.required),
            reference: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
        })
    }
}
