import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne[];
  @Output() selectPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', 37, 7075595 ),
      new Personne(2, 'personne 2', 'aymen', 'Teacher', '404.png', 37, 7075595 ),
      new Personne(2, 'personne 2', 'aymen', 'Teacher', '        ', 37, 7075595 )
    ];
  }

  sendSelectedPersonne(personne: Personne) {
    this.selectPersonne.emit(
      personne
    );
  }

}