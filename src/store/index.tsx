import { createStore } from 'redux';
import { counter } from './reducers/counter';

export let store = createStore(counter);
