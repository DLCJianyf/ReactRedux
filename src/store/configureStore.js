import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from '../reducers/rootReducer';
import Async from '../middlewares/async';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default function configureStore(initialState) {

    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;

}