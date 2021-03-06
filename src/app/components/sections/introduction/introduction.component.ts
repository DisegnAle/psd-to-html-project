import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  @Output() openingPanel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openSidePanel(): void {
    this.openingPanel.emit();
  }

}
