import { Injectable } from "@angular/core";

export interface State {
  value: number;
}

export type Listener = () => void;

@Injectable()
export class StateService {

  private state: State = {
    value: 10
  };

  private listeners: Listener[] = [];

  getState() {
    return this.state;
  }

  register (listener: Listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    for (const listener of this.listeners) {
      listener();
    }
  }


}
