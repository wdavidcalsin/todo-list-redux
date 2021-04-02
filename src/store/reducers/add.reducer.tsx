import { ADD, DELETE, UPDATE, UPDATECHECK } from '../constants/index';

interface IInitState {
  id: string;
  value: string;
  check: boolean;
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

      newTodos[indexElement] = {
        ...newTodos[indexElement],
        value: action.body,
        check: action.check,
      };
      state = newTodos;
      console.log(state);

      return state;

    case UPDATECHECK:
      const index = state.findIndex((val) => val.id === action.payload);
      let newTodosCheck = [...state];

      newTodosCheck[index] = {
        ...newTodosCheck[index],
        check: action.check,
      };
      state = newTodosCheck;
      console.log(state);

      return state;

    default:
      return state;
  }
};
