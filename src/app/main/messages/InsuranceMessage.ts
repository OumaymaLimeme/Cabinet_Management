import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class InsuranceMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Assurance a été ajouté avec succés',
        'edit': 'Assurance a été modifié avec succés',
        'delete': 'Assurance a été supprimé avec succés'
    }
    validationMessage = {
        'insurance_name': ' Nom assurance est obligatoire',
        'service_tax': 'Tax est obligatoire',
        'discount': 'Remise est obligatoire',
        'remark': ' Remarque est obligatoire',
        'insurance_no': ' Assurance No est obligatoire',
        'insurance_code': 'Assurance code est obligatoire',
        'disease_name': '    est obligatoire',
        'disease_charge': '    est obligatoire',
        'hospital_rate': '    est obligatoire',
        'insurance_rate': '    est obligatoire',
        'total': 'Total est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}