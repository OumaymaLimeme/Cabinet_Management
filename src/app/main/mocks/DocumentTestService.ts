import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class DocumentTestService implements Service {
    public ID = new BehaviorSubject<"">(null);
    _document = [{
        "id": 1,
        "doctor_id": "",
        "patient_id": ""
    }]
    static id = 0

    public getAll() {
        return this._document;
    }

    public get(id) {
        return this._document.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = DocumentTestService.id
        this._document.push(data);
        DocumentTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._document.findIndex(item => item.id === parseInt(data.id));
        this._document[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._document.splice(this._document.indexOf(client), 1);
    };


}