import { combineReducers, createStore } from 'redux';
import { tokenReducer } from './login-reducer';

const rootReducer = combineReducers({
    token: tokenReducer,

})

export const store = createStore(rootReducer);

