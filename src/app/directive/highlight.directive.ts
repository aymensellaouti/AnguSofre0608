import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.color') color = 'red';
  constructor() { }
  @HostListener('mouseenter') yellow() {
    this.color = 'yellow';
  }
  @HostListener('mouseleave') red() {
    this.color = 'red';
  }

}
