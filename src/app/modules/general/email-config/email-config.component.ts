import { Component, OnInit } from '@angular/core';
import Email from 'src/app/main/configs/email';

@Component({
  selector: 'app-email-config',
  templateUrl: './email-config.component.html',
  styleUrls: ['./email-config.component.css']
})
export class EmailConfigComponent implements OnInit {

  emailConfiguration = {
    "mail_driver": Email.MAIL_DRIVER, "email_host": Email.MAIL_HOST,
    "mail_port": Email.MAIL_PORT,
    "mail_username": Email.MAIL_USERNAME, "mail_password": Email.MAIL_PASSWORD,
    "mail_encryption": Email.MAIL_ENCRYPTION,
    "mail_from": Email.MAIL_FROM, "mail_from_name": Email.MAIl_FROM_NAME
  }

  constructor() { }

  ngOnInit(): void {
  }

}
