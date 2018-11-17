import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state-service';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
  }

  subtract() {
    this.stateService.doSomething("DecrementValue");
  }

}
