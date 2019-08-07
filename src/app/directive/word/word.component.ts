import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  color = 'blue';
  taille = '45px';
  police = 'helvetica';
  constructor() { }

  ngOnInit() {
  }

  modifierSize(taille) {
    this.taille = taille + 'px';
    console.log(this.taille);
  }
}
