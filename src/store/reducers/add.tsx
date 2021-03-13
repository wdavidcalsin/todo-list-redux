import { ADD } from '../constants/index';

export const addReducers = (state = [''], action: any) => {
  switch (action.type) {
    case ADD:
      return [...state];

    default:
      return state;
  }
};
