import { Component, OnInit } from '@angular/core';
import DepartementMessage from 'src/app/main/messages/DepartementMessage';
import DepartementTestService from 'src/app/main/mocks/DepartementTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  departements$
  id = 0


  constructor(private departementTestService: DepartementTestService,
    private messageService: DepartementMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.departementTestService.ID.next(id.toString())
    console.log(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.departementTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.departements$ = this.departementTestService.getAll()

  }
}
