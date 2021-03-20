import { ADD, DELETE } from '../store/constants/index';

export const addAction = (todo: any) => {
  return { type: ADD, payload: todo };
};

export const deleteAction = (id: any) => {
  return { type: DELETE, payload: id };
};
