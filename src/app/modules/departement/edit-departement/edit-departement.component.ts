import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DepartementMessage from 'src/app/main/messages/DepartementMessage';
import DepartementTestService from 'src/app/main/mocks/DepartementTestService';
import Departement from 'src/app/main/models/Departement';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent extends URLLoader implements OnInit {
  model: Departement


  constructor(private departementTestService: DepartementTestService,
    private message: DepartementMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Departement(0, '', '', '')
  }

  ngOnInit(): void {

    this.departementTestService.ID.subscribe(idd => {

      this.model = this.departementTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.departementTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }


}
