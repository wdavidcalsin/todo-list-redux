import { combineReducers } from 'redux';
import { addReducers } from './add.reducer';

export const rootReducer = combineReducers({ add: addReducers });
