import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ScheduleMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Programme a été ajouté avec succés',
        'edit': 'Programme a été modifié avec succés',
        'delete': 'Programme a été supprimé avec succés'
    }
    validationMessage = {
        'doctor_id': 'Docteur est obligatoire',
        'available_days': 'Jours est obligatoire',
        'start_time': 'Date début est obligatoire',
        'end_time': 'Date fin est obligatoire',
        'per_patient_time': 'est obligatoire',
        'serial_visibility_type': '    est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}