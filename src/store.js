// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import indexReducer from './reducers/index';
import { rootSaga } from '../src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  indexReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
