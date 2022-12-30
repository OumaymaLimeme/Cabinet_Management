import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import DoctorMessage from 'src/app/main/messages/DoctorMessage';
import DoctorTestService from 'src/app/main/mocks/DoctorTestService';
import Doctor from 'src/app/main/models/Doctor';

@Component({
  selector: 'app-edit-medecin',
  templateUrl: './edit-medecin.component.html',
  styleUrls: ['./edit-medecin.component.css']
})
export class EditMedecinComponent extends URLLoader implements OnInit {

  model: Doctor


  constructor(private doctorTestService: DoctorTestService,
    private message: DoctorMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Doctor(0, '', '', '', '', '', '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.doctorTestService.ID.subscribe(idd => {

      this.model = this.doctorTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.doctorTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }

}
