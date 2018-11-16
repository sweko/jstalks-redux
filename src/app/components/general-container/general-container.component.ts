import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'general-container',
  templateUrl: './general-container.component.html',
  styleUrls: ['./general-container.component.css']
})
export class GeneralContainerComponent implements OnInit {

  @Input() actualValue: number;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue(value: number) {
    this.actualValue = value;
    this.valueChanged.emit(value);
  }

}
