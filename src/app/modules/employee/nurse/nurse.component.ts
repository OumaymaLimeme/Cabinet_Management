import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  constructor() {
    super()
  }


  ngOnInit() {
    super.loadScripts();
  }

}
