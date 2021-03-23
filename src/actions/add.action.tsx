import { ADD, DELETE, UPDATE } from '../store/constants/index';

export const addAction = (todo: any) => {
  return { type: ADD, payload: todo };
};

export const deleteAction = (id: any) => {
  return { type: DELETE, payload: id };
};

export const updateAction = (id: any) => {
  return { type: UPDATE, payload: id };
};
