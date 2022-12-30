import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class AccountMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Compte a été ajouté avec succés',
        'edit': 'Compte a été modifié avec succés',
        'delete': 'Compte a été supprimé avec succés'
    }
    validationMessage = {
        'name': 'Nom est obligatoire. ',
        'type': 'Type est obligatoire.',
        'description': 'Description est obligatoire. ',
        'status': 'Statut est obligatoire. ',

    }

    constructor() {

    }
}