import { ADD, DELETE, UPDATE } from '../constants/index';

interface IInitState {
  value: string;
  id: string;
}

const initState: Array<IInitState> = [];

export const addReducers = (state = initState, action: any) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      let value = state.filter((val: any) => val.id !== action.payload);
      return [...value];

    case UPDATE:
      const indexElement = state.findIndex((val) => val.id === action.payload);
      let newTodos = [...state];

      newTodos[indexElement] = { ...newTodos[indexElement], value: action.body };
      state = newTodos;
      console.log(state);

      return state;

    default:
      return state;
  }
};
