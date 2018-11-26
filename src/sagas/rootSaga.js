import { all, fork , spawn } from 'redux-saga/effects';
import getUsersListWatcherSaga from '../sagas/usersSaga';

export function* rootSaga() {
    yield fork(root);
  }

function* root() {
  try {
   yield all([
        spawn (getUsersListWatcherSaga),
   ]);
  }
  catch(error) {

  }
}