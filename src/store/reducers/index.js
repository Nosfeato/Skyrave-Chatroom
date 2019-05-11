
import { combineReducers } from 'redux';


import messages from './messages';
import settings from './settings';
import form from './form';

const reducers = combineReducers({
  messages,
  settings,
  form,
});

export default reducers;
