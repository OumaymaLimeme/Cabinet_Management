import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DocumentMessage from 'src/app/main/messages/DocumentMessage';
import DocumentTestService from 'src/app/main/mocks/DocumentTestService';
import DocumentValidation from 'src/app/main/validations/DocumentValidation';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent extends URLLoader implements OnInit {

  documentForm: FormGroup
  msg: DocumentMessage
  submitted = false


  get f() { return this.documentForm.controls; }

  constructor(private router: Router, private validation: DocumentValidation, private message: DocumentMessage, private documentTestService: DocumentTestService) {
    super()
    this.documentForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    super.loadScripts()
  }

  reset() {
    this.documentForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.documentTestService.create(this.documentForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/document'])
    }



  }

}
