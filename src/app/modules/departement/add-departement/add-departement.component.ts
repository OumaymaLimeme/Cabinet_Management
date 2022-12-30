import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DepartementMessage from 'src/app/main/messages/DepartementMessage';
import DepartementTestService from 'src/app/main/mocks/DepartementTestService';
import DepartementValidation from 'src/app/main/validations/DepartementValidation';
import { Router } from "@angular/router"

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent extends URLLoader implements OnInit {

  departementForm: FormGroup
  msg: DepartementMessage
  submitted = false


  get f() { return this.departementForm.controls; }

  constructor(private router: Router, private validation: DepartementValidation, private message: DepartementMessage, private departementTestService: DepartementTestService) {
    super()
    this.departementForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    super.loadScripts()
  }

  reset() {
    this.departementForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.departementTestService.create(this.departementForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/departement'])
    }



  }

}
