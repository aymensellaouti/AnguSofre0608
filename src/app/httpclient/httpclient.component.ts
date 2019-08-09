import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_LINK = 'https://jsonplaceholder.typicode.com/todos';
@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(API_LINK).subscribe(
      (reponses) => {
        console.log(reponses);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
