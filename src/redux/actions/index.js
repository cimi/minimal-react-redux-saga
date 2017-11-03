import { createAction } from 'redux-actions';

export const SAY_HELLO = 'SAY_HELLO';
export const sayHello = createAction(SAY_HELLO);

export const INITIALIZE = 'INITIALIZE';
export const initialize = createAction(INITIALIZE);

export const CHANGE_GREETING = 'CHANGE_GREETING';
export const changeGreeting = createAction(CHANGE_GREETING);
