import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../api';

export default function* getUsersListWatcherSaga() {
    yield takeLatest("FETCH_USERS_REQUEST" , getUsersListWorkerSaga);
  }

//get worker
function* getUsersListWorkerSaga() {
  try {
    const response = yield call(api);
    yield put({ type: "FETCH_USERS_SUCCESS", payload: response });
  } catch (error) {
    yield put({ type: "FETCH_USERS_FAILURE", payload: error });
  }
}


