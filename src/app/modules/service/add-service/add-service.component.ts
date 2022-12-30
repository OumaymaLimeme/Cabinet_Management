import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ServiceMessage from 'src/app/main/messages/ServiceMessage';
import ServiceTestService from 'src/app/main/mocks/ServiceTestService';
import ServiceValidation from 'src/app/main/validations/ServiceValidation';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent extends URLLoader implements OnInit {

  serviceForm: FormGroup
  msg: ServiceMessage
  submitted = false


  get f() { return this.serviceForm.controls; }

  constructor(private router: Router, private validation: ServiceValidation,
    private message: ServiceMessage,
    private ServiceTestService: ServiceTestService) {
    super()
    this.serviceForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    super.loadScripts()
  }

  reset() {
    this.serviceForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.ServiceTestService.create(this.serviceForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
      this.router.navigate(['/service'])

    }



  }

}
