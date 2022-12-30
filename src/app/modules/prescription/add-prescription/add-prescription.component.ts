import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import PrescriptionMessage from 'src/app/main/messages/PrescriptionMessage';
import PrescriptionTestService from 'src/app/main/mocks/PrescriptionTestService';
import PrescriptionValidation from 'src/app/main/validations/PrescriptionValidation';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent extends URLLoader implements OnInit {

  prescriptionForm: FormGroup
  msg: PrescriptionMessage
  submitted = false


  get f() { return this.prescriptionForm.controls; }

  constructor(private validation: PrescriptionValidation, private message: PrescriptionMessage, private prescriptionTestService: PrescriptionTestService) {
    super()
    this.prescriptionForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.prescriptionForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.prescriptionTestService.create(this.prescriptionForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
