import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColorToHeader]'
})
export class ChangeColorToHeaderDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = this.el.nativeElement;
    if (window.pageYOffset > element.clientHeight && element.classList) {
      element.classList
        .remove('large')
      element.classList
        .add('header-scroll');
    } else {
      element.classList
        .remove('header-scroll')
      element.classList
        .add('large');
    }
  }
}
