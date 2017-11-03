import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducers';
import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
