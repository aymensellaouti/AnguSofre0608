import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sofre-second'  ,
  template: `
      <div (click)="sendEvent()"> Bonjour je suis un inline template</div>
  `,
  styles: ['div { border: 1px blue solid; }']
})
export class SecondComponent implements OnInit {
  @Output() sendDataToFather = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendEvent() {
    this.sendDataToFather.emit(
      'Bonjour de la part de ton fils'
    );
  }

}
