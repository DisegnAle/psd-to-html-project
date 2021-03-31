import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) {
    smoothscroll.polyfill();
  }

  ngOnInit(): void {
  }

  scrollToElement(elementId: string): void {
    console.log(elementId);
    //this.viewPortScroller.setOffset([0, 100]);
    //this.viewPortScroller.scrollToAnchor(elementId)
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
  }

}
