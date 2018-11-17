import { Injectable } from "@angular/core";
import { actions } from "./actions";

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
    return {
      ...this.state
    };
  }

  register(listener: Listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    for (const listener of this.listeners) {
      listener();
    }
  }

  doSomething(type: string) {
    const action = actions.find(item => item.type === type);
    this.state = action.action(this.state);
    this.notifyListeners();
  }




}
