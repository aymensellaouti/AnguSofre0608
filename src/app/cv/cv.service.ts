import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', 37, 7075595 ),
        new Personne(2, 'personne 2', 'aymen', 'Teacher', '404.png', 37, 7075595 ),
        new Personne(2, 'personne 2', 'aymen', 'Teacher', '        ', 37, 7075595 )
      ];
  }
  getPersonnes() {
    return this.personnes;
  }
  findPersonneById(id): Personne {
    return this.personnes.find(personne => personne.id == id);
  }
  deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index > -1) {
      this.personnes.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}
