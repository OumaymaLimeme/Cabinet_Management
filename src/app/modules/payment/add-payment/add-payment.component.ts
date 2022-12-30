import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import PaymentMessage from 'src/app/main/messages/PaymentMessage';
import PaymentTestService from 'src/app/main/mocks/PaymenttTestService';
import PaymentValidation from 'src/app/main/validations/PaymentValidation';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent extends URLLoader implements OnInit {

  paymentForm: FormGroup
  msg: PaymentMessage
  submitted = false


  get f() { return this.paymentForm.controls; }

  constructor(private validation: PaymentValidation, private message: PaymentMessage,
    private paymentTestService: PaymentTestService) {
    super()
    this.paymentForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.paymentForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.paymentTestService.create(this.paymentForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
