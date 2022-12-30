import { Component, OnInit } from '@angular/core';
import Company from 'src/app/main/configs/company';

@Component({
  selector: 'app-hospital-config',
  templateUrl: './hospital-config.component.html',
  styleUrls: ['./hospital-config.component.css']
})
export class HospitalConfigComponent implements OnInit {

  entreprise_config = {
    "company_name": Company.APP_COMPANY_NAME, "company_email": Company.APP_COMPANY_EMAIL,
    "time_zone": Company.APP_TIME_ZONE, "date_format": Company.APP_DATE_FOMMAT
  }

  constructor() { }

  ngOnInit(): void {
  }

}
