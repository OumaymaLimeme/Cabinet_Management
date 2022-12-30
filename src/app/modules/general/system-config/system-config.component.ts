import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import Link from 'src/app/main/configs/link';

@Component({
  selector: 'app-system-config',
  templateUrl: './system-config.component.html',
  styleUrls: ['./system-config.component.css']
})
export class SystemConfigComponent implements OnInit {

  systemeConfiguration = {
    "currency": Constant.APP_CURRENCY, "user_register": Constant.USER_REGISTER,
    "footer": Constant.APP_FOOTER,
    "url": Link.BACKEND_URL, "technology": Link.BACKEND_TECHNOLOGY, "port": Link.BACKEND_PORT,
    "language": Constant.USER_LANGUAGE
  }

  constructor() { }

  ngOnInit(): void {
  }

}
