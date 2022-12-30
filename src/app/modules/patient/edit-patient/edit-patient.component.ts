import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import PatientMessage from 'src/app/main/messages/PatientMessage';
import PatientTestService from 'src/app/main/mocks/PatientTestService';
import Patient from 'src/app/main/models/Patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent extends URLLoader implements OnInit {

  model: Patient


  constructor(private patientTestService: PatientTestService,
    private message: PatientMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Patient(0, '', '', '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.patientTestService.ID.subscribe(idd => {

      this.model = this.patientTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.patientTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }


}
