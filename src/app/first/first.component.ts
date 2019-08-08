import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  color = 'lightblue';
  constructor(
    private actvatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actvatedRoute.params.subscribe(
      parametres => {
        this.color = parametres['couleur'];
      }
    );
  }

  showSonMessage(message) {
    alert(message);
  }

}
