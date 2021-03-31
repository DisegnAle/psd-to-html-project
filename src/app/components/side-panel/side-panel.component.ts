import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  @Output() closingPanel: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closePanel(): void {
    this.closingPanel.emit();
  }

}
