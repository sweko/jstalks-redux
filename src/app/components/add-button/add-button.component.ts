import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/services/state-service';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  value: number;

  constructor(private stateService: StateService) {
    this.value = this.stateService.getState().value;
  }

  ngOnInit() {
  }

  add() {
    this.stateService.getState().value += 1;
    this.value = this.stateService.getState().value;
  }

}
