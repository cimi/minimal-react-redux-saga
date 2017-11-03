import { all, fork, put, select, takeLatest } from 'redux-saga/effects';

import { INITIALIZE, CHANGE_GREETING, sayHello } from '../actions';
import { getClickCount } from '../selectors';

const GREETINGS = [
  'Everything is set up correctly!',
  'And the application responds to events'
];

function* intializeSaga() {
  yield put(sayHello(GREETINGS[0]));
}

function* changeGreetingSaga() {
  const clickCount = yield select(getClickCount);
  const greeting = GREETINGS[clickCount % GREETINGS.length];
  yield put(sayHello(greeting));
}

function* watchForInititalize() {
  yield takeLatest(INITIALIZE, intializeSaga);
}

function* watchForGreetingChange() {
  yield takeLatest(CHANGE_GREETING, changeGreetingSaga);
}

export default function* rootSaga() {
  yield all([fork(watchForInititalize), fork(watchForGreetingChange)]);
}
