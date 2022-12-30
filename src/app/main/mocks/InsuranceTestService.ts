import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class InsuranceTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _insurance = [{
        "id": 1,
        "insurance_name": "assurance tout risque",
        "service_tax": "45%",
        "discount": "",
        "remark": "",
        "insurance_no": "",
        "insurance_code": "2535",
        "disease_name": "",
        "disease_charge": "",
        "hospital_rate": "",
        "insurance_rate": "",
        "total": "",
        "status": "",
    }]
    static id = 0

    public getAll() {
        return this._insurance;
    }

    public get(id) {
        return this._insurance.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = InsuranceTestService.id
        this._insurance.push(data);
        InsuranceTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._insurance.findIndex(item => item.id === parseInt(data.id));
        this._insurance[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._insurance.splice(this._insurance.indexOf(client), 1);
    };


}