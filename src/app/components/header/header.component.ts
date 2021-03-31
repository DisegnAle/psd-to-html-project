import { Component, OnInit } from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
    smoothscroll.polyfill();
  }

  ngOnInit(): void {
  }

  scrollToElement(elementId: string): void {
    console.log(elementId);
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
  }

}
