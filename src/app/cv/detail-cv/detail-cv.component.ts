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
        this.personne = this.cvService.findPersonneById(id);
      }
    );
  }
  deletePersonne() {
    const result = this.cvService.deletePersonne(this.personne);
    if (result) {
      const link = ['cv'];
      this.router.navigate(link);
    } else {
      alert('Personne innexistante');
    }
  }

}
