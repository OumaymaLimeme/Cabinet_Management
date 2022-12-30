import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class PaymentMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Paiement a été modifié avec succés',
        'edit': 'Paiement a été modifié avec succés',
        'delete': 'Paiement a été modifié avec succés'
    }
    validationMessage = {
        'date': ' Date est obligatoire',
        'account_id': 'Compte est obligatoire',
        'pay_to': 'Paiement est obligatoire',
        'description': 'Description est obligatoire',
        'amount': 'Montant est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}