import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-slider',
  templateUrl: './mobile-slider.component.html',
  styleUrls: ['./mobile-slider.component.scss']
})
export class MobileSliderComponent implements OnInit {

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

  slides = [
    {id:1, url: '../../../assets/images/slider-product1.png'},
    {id:2, url: '../../../assets/images/slider-product2.png'},
    {id:3, url: '../../../assets/images/slider-product3.png'}
  ]

  ngOnInit(): void {
  }
}



