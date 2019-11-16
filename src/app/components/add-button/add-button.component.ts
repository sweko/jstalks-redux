import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/service/state-service';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {


  constructor(private stateService: StateService) {
  }

  ngOnInit() {
  }

  add() {
    this.stateService.doSometing("increment");
  }
}
