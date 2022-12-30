import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import AccountMessage from 'src/app/main/messages/AccountMessage';
import AccountTestService from 'src/app/main/mocks/AccountTestService';
import AccountValidation from 'src/app/main/validations/AccountValidation';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent extends URLLoader implements OnInit {

  accountForm: FormGroup
  msg: AccountMessage
  submitted = false


  get f() { return this.accountForm.controls; }

  constructor(private validation: AccountValidation, private message: AccountMessage, private accountTestService: AccountTestService) {
    super()
    this.accountForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.accountForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.accountTestService.create(this.accountForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
