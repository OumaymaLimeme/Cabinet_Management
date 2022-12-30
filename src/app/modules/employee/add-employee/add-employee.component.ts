import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import EmployeeValidation from 'src/app/main/validations/EmployeeValidation';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent extends URLLoader implements OnInit {

  employeeForm: FormGroup
  msg: EmployeeMessage
  submitted = false


  get f() { return this.employeeForm.controls; }

  constructor(private validation: EmployeeValidation, private router: Router, private message: EmployeeMessage, private employeeTestService: EmployeeTestService) {
    super()
    this.employeeForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    super.loadScripts()
  }

  reset() {
    this.employeeForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.employeeTestService.create(this.employeeForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/accountant'])

    }



  }

}
