import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  peronnes: Personne[];
  constructor() {
    this.peronnes = [];
  }
  getEmbauches(): Personne[] {
    return this.peronnes;
  }
  embaucher(personne: Personne) {
    const index = this.peronnes.indexOf(personne);
    if (index == -1) {
      this.peronnes.push(personne);
    } else {
      alert('Vous avez déjà sélectionné ce CV');
    }
  }
}
