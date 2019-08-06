import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  color = 'yellow';
  show = false;
  content = 'something';
  constructor() { }

  ngOnInit() {
  }
  changeColor(inputColor, second) {
    this.color = inputColor.value;
    console.log(second);
  }

}
