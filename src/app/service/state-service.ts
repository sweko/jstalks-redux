import { Injectable } from "@angular/core";
import { allActions } from "./actions";

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

  doSometing(name: string) {
    const action = allActions.find(item => item.name === name);
    this.state = action.action({...this.state});
    this.notifyListeners();
  }


}
