import { Component, OnInit } from '@angular/core';
import ServiceMessage from 'src/app/main/messages/ServiceMessage';
import ServiceTestService from 'src/app/main/mocks/ServiceTestService';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false
  services$
  id = 0


  constructor(private serviceTestService: ServiceTestService, private messageService: ServiceMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.serviceTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.serviceTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.services$ = this.serviceTestService.getAll()

  }

}
