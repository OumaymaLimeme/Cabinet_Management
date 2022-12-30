import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class CategoryMessage {

    confirmationMessages = { 'title': 'confirmation', 'add': 'achat a ete ajoute avec succes', 'edit': '', 'delete': '' }
    validationMessage = {

    }

    constructor() {

    }
}