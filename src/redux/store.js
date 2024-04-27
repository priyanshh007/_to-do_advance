//install krwao package--npm install redux
import { createStore,combineReducers, applyMiddleware } from 'redux';
//install middleware--npm i reedux-thunk

import {thunk} from 'redux-thunk';

//install redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

import todosReducers from './path/to/todoReducers';


const reducer=combineReducers({
    todos:todosReducers
})


const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;