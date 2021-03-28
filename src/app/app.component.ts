import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AppComponent {
  title: string = 'psd-to-html';
  isShowingSidePanel: boolean = false;

  closeSidePanel(){
    this.isShowingSidePanel = false;
  }

  openSidePanel(){
    this.isShowingSidePanel = true;
  }
}
