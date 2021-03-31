import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) { }
  isShowingMenu = false;

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isShowingMenu = !this.isShowingMenu;
  }

  scrollToElement(elementId: string): void {
    console.log(elementId);
    this.viewPortScroller.setOffset([0, 100]);
    this.viewPortScroller.scrollToAnchor(elementId);
  }

}
