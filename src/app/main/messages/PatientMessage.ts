import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class PatientMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Patient a été ajouté avec succés',
        'edit': 'Patient a été modifié avec succés',
        'delete': 'Patient a été supprimé avec succés'
    }
    validationMessage = {
        'firstname': 'Nom est obligatoire',
        'lastname': 'Prénom est obligatoire',
        'email': 'Email est obligatoire',
        'password': 'Mot de passeest obligatoire',
        'phone': 'Téléphone est obligatoire',
        'mobile': 'est obligatoire',
        'blood_group': 'Groupe sanguin est obligatoire',
        'sex': 'genre est obligatoire',
        'date_of_birth': 'Date de naissance est obligatoire',
        'address': 'Adresse est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}