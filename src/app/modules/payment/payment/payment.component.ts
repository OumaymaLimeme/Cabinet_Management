import { Component, OnInit } from '@angular/core';
import PaymentMessage from 'src/app/main/messages/PaymentMessage';
import PaymentTestService from 'src/app/main/mocks/PaymenttTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  payments$
  id = 0


  constructor(private paymentTestService: PaymentTestService, private messageService: PaymentMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.paymentTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.paymentTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.payments$ = this.paymentTestService.getAll()

  }

}
