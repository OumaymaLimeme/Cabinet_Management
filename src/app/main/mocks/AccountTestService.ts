import { Injectable } from "@angular/core";
import Service from "../interfaces/Service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export default class AccountTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _account = [{
        "id": 1,
        "name": "anis",
        "type": "chirgie",
        "description": "anis",
        "status": "22/10/2020"
    }]





    active
    static id = 0

    public getAll() {
        return this._account;
    }

    public get(id) {
        return this._account.find(item => item.id === parseInt(id));
    };

    public create(data) {
        AccountTestService.id++
        data["id"] = AccountTestService.id
        this._account.push(data);
    };

    public update(data) {

        var foundIndex = this._account.findIndex(item => item.id === parseInt(data.id));
        this._account[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._account.splice(this._account.indexOf(client), 1);
    };


}