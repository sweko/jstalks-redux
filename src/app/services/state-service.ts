import { Injectable } from "@angular/core";

export interface State {
  value: number;
}

@Injectable()
export class StateService {

  private state: State = {
    value: 10
  };

  getState() {
    return this.state;
  }

}
