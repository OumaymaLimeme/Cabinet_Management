import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent extends URLLoader implements OnInit {
  showsummary: boolean = false
  showgraphic: boolean = false

  constructor() {
    super()
  }


  ngOnInit() {
    super.loadScripts();
  }

}
