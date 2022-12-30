import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class DocumentMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Document a été ajouté avec succés',
        'edit': 'Document a été modifié avec succés',
        'delete': 'Document a été supprimé avec succés'
    }
    validationMessage = {
        'doctor_id': 'Docteur est obligatoire',
        'patient_id': 'Patient est obligatoire',
    }

    constructor() {

    }
}