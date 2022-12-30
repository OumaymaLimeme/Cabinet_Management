import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ScheduleTestService implements Service {
    public ID = new BehaviorSubject<string>(null);
    _schedule = []
    static id = 0

    public getAll() {
        return this._schedule;
    }

    public get(id) {
        return this._schedule.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = ScheduleTestService.id
        this._schedule.push(data);
        ScheduleTestService.id++
        console.log(data)
    };

    public update(data) {

        var foundIndex = this._schedule.findIndex(item => item.id === parseInt(data.id));
        this._schedule[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._schedule.splice(this._schedule.indexOf(client), 1);
    };


}