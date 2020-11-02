import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import ThinkMiddleware from 'redux-thunk'
import postsReducer from "./postsRedusers";
import postReducer from "./postRedusers";
import { reducer as formReducer } from 'redux-form'
import valueSearchReducer from "./valueSearchReducers";


let reducers = combineReducers({
    posts: postsReducer,
    post: postReducer,
    form: formReducer,
    valueSearch: valueSearchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThinkMiddleware)));

window.store = store;

export default store;