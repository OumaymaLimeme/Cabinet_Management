import { Component, OnInit } from '@angular/core';
import PatientMessage from 'src/app/main/messages/PatientMessage';

import { URLLoader } from 'src/app/main/configs/URLLoader';
import PatientTestService from 'src/app/main/mocks/PatientTestService';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  patients$
  id = 0


  constructor(private patientTestService: PatientTestService, private messageService: PatientMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.patientTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.patientTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.patients$ = this.patientTestService.getAll()

  }

}
