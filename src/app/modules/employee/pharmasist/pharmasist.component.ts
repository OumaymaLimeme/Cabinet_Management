import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-pharmasist',
  templateUrl: './pharmasist.component.html',
  styleUrls: ['./pharmasist.component.css']
})
export class PharmasistComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  constructor() {
    super()
  }


  ngOnInit() {
    super.loadScripts();
  }

}
