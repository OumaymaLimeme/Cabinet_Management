import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import InsuranceMessage from 'src/app/main/messages/InsuranceMessage';
import InsuranceTestService from 'src/app/main/mocks/InsuranceTestService';
import Insurance from 'src/app/main/models/Insurance';

@Component({
  selector: 'app-edit-insurance',
  templateUrl: './edit-insurance.component.html',
  styleUrls: ['./edit-insurance.component.css']
})
export class EditInsuranceComponent extends URLLoader implements OnInit {

  model: Insurance


  constructor(private insuranceTestService: InsuranceTestService,
    private message: InsuranceMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Insurance(0, '', '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.insuranceTestService.ID.subscribe(idd => {

      this.model = this.insuranceTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.insuranceTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
    document.getElementById("closeModalButton").click();
  }

}
