import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class AppointementMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Rendez-vous a été ajouté avec succés',
        'edit': 'Rendez-vous a été modifié avec succés',
        'delete': 'Rendez-vous a été supprimé avec succés'
    }
    validationMessage = {
        'department_id': 'Département est obligatoire',
        'patient_id': 'Patient est obligatoire',
        'doctor_id': 'Docteur est obligatoire',
        'date': 'Date est obligatoire',
        'problem': 'Problème est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}