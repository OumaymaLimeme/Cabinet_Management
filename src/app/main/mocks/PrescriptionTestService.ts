import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class PrescriptionTestService implements Service {
    public ID = new BehaviorSubject<"">(null);


    _prescription = [{
        "id": 1,
        "patient_id": "",
        "food_allergies": "",
        "tendency_bleed": "",
        "heart_disease": "",
        "high_blood_pressure": "",
        "diabetic": "",
        "surgery": "",
        "accident": "",
        "others": "",
        "family_medical_history": "",
        "current_medication": "",
        "female_pregnancy": "",
        "breast_feeding": "",
        "health_insurance": "",
        "low_income": "",
        "reference": "",
        "status": ""
    }]
    static id = 0

    public getAll() {
        return this._prescription;
    }

    public get(id) {
        return this._prescription.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = PrescriptionTestService.id
        this._prescription.push(data);
        PrescriptionTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._prescription.findIndex(item => item.id === parseInt(data.id));
        this._prescription[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._prescription.splice(this._prescription.indexOf(client), 1);
    };

}