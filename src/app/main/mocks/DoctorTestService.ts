import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class DoctorTestService implements Service {
    public ID = new BehaviorSubject<"">(null);
    _doctor = [{
        "id": 1,
        "firstname": "Satordi",
        "lastname": "Langlois",
        "email": "SatordiLanglois@rhyta.com",
        "password": "",
        "designation": "",
        "address": "",
        "departement_id": "Radiographie",
        "phone": "",
        "mobile": "04.11.17.64.94",
        "specialist": "",
        "date_of_birth": "",
        "sex": "",
        "blood_group": "",
        "status": ""
    }]



    static id = 0

    public getAll() {
        return this._doctor;
    }

    public get(id) {
        return this._doctor.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = DoctorTestService.id
        this._doctor.push(data);
        DoctorTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._doctor.findIndex(item => item.id === parseInt(data.id));
        this._doctor[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._doctor.splice(this._doctor.indexOf(client), 1);
    };


}