import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';

import AppointementMessage from 'src/app/main/messages/AppointementMessage';
import AppointementTestService from 'src/app/main/mocks/AppointementTestService';
import AppointementValidation from 'src/app/main/validations/AppointementValidation';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent extends URLLoader implements OnInit {

  appointementForm: FormGroup
  msg: AppointementMessage
  submitted = false


  get f() { return this.appointementForm.controls; }

  constructor(private router: Router, private validation: AppointementValidation, private message: AppointementMessage, private appointementTestService: AppointementTestService) {
    super()
    this.appointementForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    super.loadScripts()
  }

  reset() {
    this.appointementForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.appointementTestService.create(this.appointementForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/rendezvous'])
    }



  }

}
