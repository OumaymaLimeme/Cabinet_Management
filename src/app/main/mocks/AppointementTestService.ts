import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class AppointementTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _appointement = [{
        "id": 1,
        "department_id": "stRadiographiering",
        "patient_id": "Grosvenor Routhier",
        "doctor_id": "Benoît Grandbois",
        "date": "22 / 10 / 2020",
        "problem": "string",
        "status": "active"
    }]

    static id = 0

    public getAll() {
        return this._appointement;
    }

    public get(id) {
        return this._appointement.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = AppointementTestService.id
        this._appointement.push(data);
        AppointementTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._appointement.findIndex(item => item.id === parseInt(data.id));
        this._appointement[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._appointement.splice(this._appointement.indexOf(client), 1);
    };


}