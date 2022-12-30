import { Component, OnInit } from '@angular/core';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  categorys$
  id = 0


  constructor(private categoryTestService: CategoryTestService, private messageService: CategoryMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.categoryTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.categoryTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.categorys$ = this.categoryTestService.getAll()

  }

}
