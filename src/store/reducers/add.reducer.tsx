import { ADD, DELETE } from '../constants/index';

const initState: any = [];

export const addReducers = (state = initState, action: any) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      let value = state.filter((val: any) => val.id !== action.payload);
      return [value];

    default:
      return state;
  }
};
