import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducers'; // nos reducers combinés
import socket from './middlewares/socket'; // notre middleware custom

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancers = composeEnhancers(
  applyMiddleware(socket),
);


const store = createStore(reducer, enhancers);

export default store;
