import { ADD, DELETE, UPDATE, UPDATECHECK } from '../store/constants/index';

export const addAction = (todo: any) => {
  return { type: ADD, payload: todo };
};

export const deleteAction = (id: any) => {
  return { type: DELETE, payload: id };
};

export const updateAction = (id: string, value: string, check: boolean) => {
  return { type: UPDATE, payload: id, body: value, check: check };
};

export const updateCheckAction = (id: string, check: boolean) => {
  return { type: UPDATECHECK, payload: id, check: check };
};
