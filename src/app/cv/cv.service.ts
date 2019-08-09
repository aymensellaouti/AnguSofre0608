import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

const API_PERSONNE_LINK = 'http://localhost:3000/api/personnes';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.personnes = [
        new Personne(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', 37, 7075595 ),
        new Personne(2, 'personne 2', 'aymen', 'Teacher', '404.png', 37, 7075595 ),
        new Personne(2, 'personne 2', 'aymen', 'Teacher', '        ', 37, 7075595 )
      ];
  }
  getFakePersonnes() {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_PERSONNE_LINK);
  }
  findPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_PERSONNE_LINK + `/${id}`);
  }
  deletePersonne(id): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(API_PERSONNE_LINK + `/${id}`);
  }
}
