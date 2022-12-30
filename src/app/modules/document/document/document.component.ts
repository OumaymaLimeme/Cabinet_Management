import { Component, OnInit } from '@angular/core';
import DocumentMessage from 'src/app/main/messages/DocumentMessage';
import DocumentTestService from 'src/app/main/mocks/DocumentTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  documents$
  id = 0


  constructor(private router: Router, private documentTestService: DocumentTestService, private messageService: DocumentMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.documentTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.documentTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.documents$ = this.documentTestService.getAll()

  }

}
