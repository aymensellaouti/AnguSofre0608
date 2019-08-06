import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', 37, 7075595 ),
      new Personne(2, 'personne 2', 'aymen', 'Teacher', '404.png', 37, 7075595 ),
    ];
  }

}
