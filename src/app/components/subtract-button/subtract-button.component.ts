import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state-service';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  value: number;

  constructor(private stateService: StateService) {
    this.value = this.stateService.getState().value;
  }

  ngOnInit() {
  }

  subtract() {
    this.stateService.getState().value -= 1;
    this.value = this.stateService.getState().value;
  }

}
