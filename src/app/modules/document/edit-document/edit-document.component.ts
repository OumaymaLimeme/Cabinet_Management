import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DocumentMessage from 'src/app/main/messages/DocumentMessage';
import DocumentTestService from 'src/app/main/mocks/DocumentTestService';
import Document from 'src/app/main/models/Document';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent extends URLLoader implements OnInit {

  model: Document


  constructor(private documentTestService: DocumentTestService,
    private message: DocumentMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Document(0, '', '')
  }

  ngOnInit(): void {

    this.documentTestService.ID.subscribe(idd => {

      this.model = this.documentTestService.get(idd)
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.documentTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }

}
