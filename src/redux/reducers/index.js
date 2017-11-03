import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import { SAY_HELLO, CHANGE_GREETING } from '../actions';

const initialGreeting = 'Wiring not set up properly yet!';
const hello = handleAction(
  SAY_HELLO,
  (state, { payload }) => payload,
  initialGreeting
);
const clicks = handleAction(CHANGE_GREETING, count => count + 1, 0);

export default combineReducers({ hello, clicks });
