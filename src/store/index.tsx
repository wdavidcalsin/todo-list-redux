import { createStore } from 'redux';

const counter = (state = 0, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
};

export let store = createStore(counter);
