import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss']
})
export class SpecificationsComponent implements OnInit {

  @Output() openingPanel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openSidePanel(): void {
    this.openingPanel.emit();
  }

}
