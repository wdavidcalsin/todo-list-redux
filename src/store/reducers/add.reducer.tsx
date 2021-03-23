import { ADD, DELETE, UPDATE } from '../constants/index';

const initState: any = [];

export const addReducers = (state = initState, action: any) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      let value = state.filter((val: any) => val.id !== action.payload);
      return [...value];

    case UPDATE:
      return state;

    default:
      return state;
  }
};
