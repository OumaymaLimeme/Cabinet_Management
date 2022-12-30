import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import DoctorTestService from 'src/app/main/mocks/DoctorTestService';
import DoctorValidation from 'src/app/main/validations/DoctorValidation';



@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent extends URLLoader implements OnInit {

  doctorForm: FormGroup
  msg: DoctorMessage
  submitted = false


  get f() { return this.doctorForm.controls; }

  constructor(private router: Router, private validation: DoctorValidation,
    private message: DoctorMessage,
    private doctorTestService: DoctorTestService) {
    super()
    this.doctorForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.doctorForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.doctorTestService.create(this.doctorForm.value)
      // super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/doctor'])

    }



  }
}
