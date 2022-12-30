import { Component, OnInit } from '@angular/core';
import AccountMessage from 'src/app/main/messages/AccountMessage';
import AccountTestService from 'src/app/main/mocks/AccountTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  accounts$
  id = 0


  constructor(private accountTestService: AccountTestService, private messageService: AccountMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.accountTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.accountTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.accounts$ = this.accountTestService.getAll()

  }

}
