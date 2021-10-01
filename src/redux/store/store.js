import {createStore, combineReducers} from 'redux';
import {tableReducer} from '../reducers/reducers.js';

const rootReducer = combineReducers({
  		tableReducer
});
export const store = createStore(rootReducer);