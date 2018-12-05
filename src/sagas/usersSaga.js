import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST } from '../actions/usersAction';
import api from '../api';
import { fetchUsersSuccess } from '../actions/usersAction';

export default function* getUsersListWatcherSaga() {
    yield takeLatest(FETCH_USERS_REQUEST, getUsersListWorkerSaga);
  }

//get worker
function* getUsersListWorkerSaga() {
  try {
    const response = yield call(api);
    yield put(fetchUsersSuccess(response));
  } catch (error) {
    yield put({ type: "FETCH_USERS_FAILURE", payload: error });
  }
}


