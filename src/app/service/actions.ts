import { State } from "./state-service";

export interface Action {
  name: string;
  action: (state: State) => State;
}

export const decrement = {
  name: "decrement",
  action: (state) => {
    return {
      ...state,
      value: state.value - 1
    };
  }
};

export const increment = {
  name: "increment",
  action: (state) => {
    return {
      ...state,
      value: state.value + 1
    };
  }
};

export const allActions = [decrement, increment];
