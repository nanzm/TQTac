import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
// import logger from 'redux-logger';
import rootReducer from './reducers';

export default function configStore() {
    return createStore(rootReducer, applyMiddleware(promiseMiddleware));
    // return createStore(rootReducer, applyMiddleware(promiseMiddleware));
}
