import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import InsuranceMessage from 'src/app/main/messages/InsuranceMessage';
import InsuranceTestService from 'src/app/main/mocks/InsuranceTestService';
import InsuranceValidation from 'src/app/main/validations/InsuranceValidation';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent extends URLLoader implements OnInit {

  insuranceForm: FormGroup
  msg: InsuranceMessage
  submitted = false


  get f() { return this.insuranceForm.controls; }

  constructor(private router: Router, private validation: InsuranceValidation, private message: InsuranceMessage, private insuranceTestService: InsuranceTestService) {
    super()
    this.insuranceForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    super.loadScripts()
  }

  reset() {
    this.insuranceForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.insuranceTestService.create(this.insuranceForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/insurance'])
    }



  }

}
