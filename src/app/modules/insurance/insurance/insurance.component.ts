import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import InsuranceMessage from 'src/app/main/messages/InsuranceMessage';
import InsuranceTestService from 'src/app/main/mocks/InsuranceTestService';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  insurances$
  id = 0


  constructor(private insuranceTestService: InsuranceTestService,
    private messageService: InsuranceMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.insuranceTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.insuranceTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
      document.getElementById("closeModalButton").click();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.insurances$ = this.insuranceTestService.getAll()

  }
}
