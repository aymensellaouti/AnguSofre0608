import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne[];
  @Output() selectPersonne = new EventEmitter();
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
  }

  sendSelectedPersonne(personne: Personne) {
    this.selectPersonne.emit(
      personne
    );
  }

}
