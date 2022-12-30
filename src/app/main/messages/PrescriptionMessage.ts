import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class PrescriptionMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Prescription a été ajouté avec succés',
        'edit': 'Prescription a été modifié avec succés',
        'delete': 'Prescription a été supprimé avec succés'
    }
    validationMessage = {
        'patient_id': 'Patient est obligatoire',
        'food_allergies': 'Allegie est obligatoire',
        'tendency_bleed': '    est obligatoire',
        'heart_disease': '    est obligatoire',
        'high_blood_pressure': '    est obligatoire',
        'diabetic': 'Diabétique est obligatoire',
        'surgery': '    est obligatoire',
        'accident': 'Accident est obligatoire',
        'others': 'Autres est obligatoire',
        'family_medical_history': 'Historique familiale est obligatoire',
        'current_medication': '    est obligatoire',
        'female_pregnancy': '    est obligatoire',
        'breast_feeding': '    est obligatoire',
        'health_insurance': 'Assurance est obligatoire',
        'low_income': 'Revenu est obligatoire',
        'reference': 'Référence est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}