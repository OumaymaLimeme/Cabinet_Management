import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class DepartementMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Département a été ajouté avec succés',
        'edit': 'Département a été modifié avec succés',
        'delete': 'Département a été supprimé avec succés'
    }
    validationMessage = {
        'name': ' Nom est obligatoire',
        'description': 'Description est obligatoire',
        'status': ' Statut est obligatoire',
        'purchase_status': ' Statut Achat est obligatoire',
    }

    constructor() {

    }
}