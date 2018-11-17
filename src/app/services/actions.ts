import { State } from "./state-service";

// export enum Actions {
//   IncrementValue,
//   DecrementValue
// }

export interface Action {
  type: string;
  action: (state: State) => State;
}

const incrementValue = {
  type: "IncrementValue",
  action: (state) => ({
    ...state,
    value: state.value + 1
  })
};

const decrementValue = {
  type: "DecrementValue",
  action: (state) => ({
    ...state,
    value: state.value - 1
  })
};

export const actions = [incrementValue, decrementValue];
