import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ServiceMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Service a été ajouté avec succés',
        'edit': 'Service a été modifié avec succés',
        'delete': 'Service a été supprimé avec succés'
    }
    validationMessage = {
        'name': 'Nom  est obligatoire',
        'description': 'Description est obligatoire',
        'quantity': 'Quantité est obligatoire',
        'amount': 'Montant est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}