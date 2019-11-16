import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/service/state-service';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  value: number;

  constructor(private stateService: StateService) {
    this.value = this.stateService.getState().value;

    this.stateService.register(() => {
      this.value = this.stateService.getState().value;
    });

  }

  ngOnInit() {
  }

}
