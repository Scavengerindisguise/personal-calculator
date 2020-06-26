import {createStore, applyMiddleware} from 'redux';
import { Reducer } from './reducer';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        applyMiddleware(logger)
    );

    return store;
}