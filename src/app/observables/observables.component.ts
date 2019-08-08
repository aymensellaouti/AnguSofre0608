import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  imageObservable: Observable<string>;
  path = 'cv.png';
  constructor() {
  }

  ngOnInit() {
    const observable = new Observable(
      (observer) => {
        let i = 5;
        setInterval(() => {
          if (!i) {
            observer.complete();
          }
          observer.next(i--);
        }, 1000);
      });
    this.imageObservable =  new Observable<string>(
      (observer) => {
        const images = ['404.png', 'as.jpg', 'cv.png'];
        let i = images.length - 1;
        setInterval(() => {
          if (i < 0) {
            i = images.length - 1;
          }
          observer.next(images[i--]);
        }, 1000);
      });
    observable.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Boom');
      }
    );
    const observer1 = observable.subscribe(
      (val) => {
        console.log(val * 2 );
      }
    );
    // const observer2 = this.imageObservable.subscribe(
    //   (image) => {this.path = image; }
    //   );
  }

}
