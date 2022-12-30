import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class EmployeeMessage {

    confirmationMessages = {
        'title': 'confirmation',
        'add': 'Employée a été ajouté avec succés',
        'edit': 'Employée a été modifié avec succés',
        'delete': 'Employée a été supprimé avec succés'
    }
    validationMessage = {
        'user_role': 'Role utilisateur  est obligatoire',
        'firstname': 'Nom est obligatoire',
        'lastname': 'Prénom est obligatoire',
        'email': 'Email est obligatoire',
        'password': 'Mot de passe est obligatoire',
        'mobile': ' Téléphone est obligatoire',
        'sex': 'Genre  est obligatoire',
        'status': 'Statut est obligatoire',
    }

    constructor() {

    }
}