import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  team = 'est';
  est = true;
  milan = false;
  barca = false;
  constructor() { }

  ngOnInit() {
  }
  changeClass(team) {
    if (team === 'est') {
      this.est = true;
      this.milan = false;
      this.barca = false;
    } else if (team === 'milan') {
      this.est = false;
      this.milan = true;
      this.barca = false;
    } else {
      this.est = false;
      this.milan = false;
      this.barca = true;
    }
  }

}
