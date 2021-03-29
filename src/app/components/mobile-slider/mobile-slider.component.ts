import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-slider',
  templateUrl: './mobile-slider.component.html',
  styleUrls: ['./mobile-slider.component.scss']
})
export class MobileSliderComponent implements OnInit {

  @Output() onOpenPanel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  swiperConfig = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: false,
    keyboard: false,
    pagination: true,
    centeredSlides: true,
    loop: true,
    roundLengths: true
  }

  ngOnInit(): void {
  }

  openSidePanel(){
    this.onOpenPanel.emit();
  }
}



