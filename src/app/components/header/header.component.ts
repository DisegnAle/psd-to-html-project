import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToElement(elementId: string): void {
    console.log(elementId);
    this.viewPortScroller.setOffset([0, 100]);
    this.viewPortScroller.scrollToAnchor(elementId)
  }

}
