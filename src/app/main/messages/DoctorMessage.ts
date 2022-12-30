import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class DoctorMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Docteur a été ajouté avec succés',
        'edit': 'Docteur a été modifié avec succés',
        'delete': 'Docteur a été supprimé avec succés'
    }
    validationMessage = {
        'firstname': 'Nom est obligatoire',
        'lastname': 'Prénom est obligatoire',
        'email': 'Email est obligatoire',
        'password': 'Mot de passe est obligatoire',
        'designation': 'Désignation est obligatoire',
        'address': 'Adresse est obligatoire',
        'departement_id': 'Département est obligatoire',
        'phone': 'Téléphone est obligatoire',
        'mobile': 'Téléphone est obligatoire',
        'specialist': 'Spécialité est obligatoire',
        'date_of_birth': 'Date de naissance est obligatoire',
        'sex': 'Genre est obligatoire',
        'blood_group': 'Groupe de songuin st obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}