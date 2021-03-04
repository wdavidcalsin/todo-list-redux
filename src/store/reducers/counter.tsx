import { INCREMENT, DECREMENT } from '../constants/index';

export const counter = (state = 0, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};
