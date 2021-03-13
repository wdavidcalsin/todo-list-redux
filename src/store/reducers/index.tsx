import { combineReducers } from 'redux';
import { addReducers } from './add';

export const rootReducer = combineReducers({ add: addReducers });
