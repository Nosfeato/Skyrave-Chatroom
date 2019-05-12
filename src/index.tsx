/**
 * NPM / YARN import
 */

import '@babel/polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';
import store from 'src/store';
import { websocketConnect } from 'src/store/middlewares/socket';
import 'src/styles/index.scss';


const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);


const target = document.getElementById('root');


render(rootComponent, target);

store.dispatch(websocketConnect());
