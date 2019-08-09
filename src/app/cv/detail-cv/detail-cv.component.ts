import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/personne';
import {CvService} from '../cv.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  personne: Personne;
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        const id = params['id'];
        this.cvService.findPersonneById(id).subscribe(
          (personne) => {
            this.personne = personne;
          },
          (error) => {
            console.log(error);
            // const link = [''];
            // this.router.navigate(link);
          }
        );
      }
    );
  }
  deletePersonne() {
    const result = this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
        alert('Problème de connexion');
      }
    );
  }

}
