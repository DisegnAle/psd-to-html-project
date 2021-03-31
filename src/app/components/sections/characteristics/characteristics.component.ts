import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Output() openingPanel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openSidePanel(): void {
    this.openingPanel.emit();
  }

}
