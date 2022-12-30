import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class PatientTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _patient = [{
        "id": 1,
        "firstname": "Orville",
        "lastname": "Gadbois",
        "email": "OrvilleGadbois@teleworm.us",
        "password": "string",
        "phone": "03.76.92.21.87",
        "mobile": "03.76.92.21.87",
        "blood_group": "string",
        "sex": "Homme",
        "date_of_birth": "string",
        "address": "39, Rue Joseph Vernet 84000 AVIGNON",
        "status": "string"
    }]

    static id = 0

    public getAll() {
        return this._patient;
    }

    public get(id) {
        return this._patient.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = PatientTestService.id
        this._patient.push(data);
        PatientTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._patient.findIndex(item => item.id === parseInt(data.id));
        this._patient[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._patient.splice(this._patient.indexOf(client), 1);
    };


}