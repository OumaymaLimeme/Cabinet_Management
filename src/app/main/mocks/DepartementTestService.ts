import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class DepartementTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _departement = [
        { "id": 1, "name": "urgence", "description": "urgence", "status": "active" },
        { "id": 2, "name": "pathologie", "description": "pathologie", "status": "active" }]
    static id = 0

    public getAll() {
        return this._departement;
    }

    public get(id) {
        return this._departement.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = DepartementTestService.id
        this._departement.push(data);
        DepartementTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._departement.findIndex(item => item.id === parseInt(data.id));
        this._departement[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._departement.splice(this._departement.indexOf(client), 1);
    };


}