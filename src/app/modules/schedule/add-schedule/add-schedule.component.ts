import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ScheduleMessage from 'src/app/main/messages/ScheduleMessage';
import ScheduleTestService from 'src/app/main/mocks/ScheduleTestService';
import ScheduleValidation from 'src/app/main/validations/ScheduleValidation';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent extends URLLoader implements OnInit {

  scheduleForm: FormGroup
  msg: ScheduleMessage
  submitted = false


  get f() { return this.scheduleForm.controls; }

  constructor(private validation: ScheduleValidation, private message: ScheduleMessage, private scheduleTestService: ScheduleTestService) {
    super()
    this.scheduleForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.scheduleForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.scheduleTestService.create(this.scheduleForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
