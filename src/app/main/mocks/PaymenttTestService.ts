import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class PaymentTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _payment = []
    static id = 0

    public getAll() {
        return this._payment;
    }

    public get(id) {
        return this._payment.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = PaymentTestService.id
        this._payment.push(data);
        PaymentTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._payment.findIndex(item => item.id === parseInt(data.id));
        this._payment[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._payment.splice(this._payment.indexOf(client), 1);
    };


}