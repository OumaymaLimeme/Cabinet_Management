import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class EmployeeTestService implements Service {
    public ID = new BehaviorSubject<"">(null);
    _employee = [{
        id: 1,
        user_role: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
        sex: "",
        status: ""
    }]
    static id = 0

    public getAll() {
        return this._employee;
    }

    public get(id) {
        return this._employee.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = EmployeeTestService.id
        this._employee.push(data);
        EmployeeTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._employee.findIndex(item => item.id === parseInt(data.id));
        this._employee[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._employee.splice(this._employee.indexOf(client), 1);
    };


}