import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import PatientMessage from 'src/app/main/messages/PatientMessage';
import PatientTestService from 'src/app/main/mocks/PatientTestService';
import PatientValidation from 'src/app/main/validations/PatientValidation';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent extends URLLoader implements OnInit {

  patientForm: FormGroup
  msg: PatientMessage
  submitted = false


  get f() { return this.patientForm.controls; }

  constructor(private router: Router, private validation: PatientValidation, private message: PatientMessage, private patientTestService: PatientTestService) {
    super()
    this.patientForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    super.loadScripts()
  }

  reset() {
    this.patientForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.patientTestService.create(this.patientForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/patient'])
    }



  }

}
