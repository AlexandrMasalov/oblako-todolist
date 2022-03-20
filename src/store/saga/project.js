import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../types';
import * as actions from '../actions';

function* addProjectSaga() {
  const { data } = yield call(
    axios.get,
    // 'http://localhost:3100/',
    'https://oblacko-api.herokuapp.com/',
  );

  yield put(actions.giveProject(data));
}

function* addNewCheck({ payload }) {
  const { id, projectId, checked } = payload;
  const { data } = yield call(
    axios.patch,
    // `http://localhost:3100/projects/${projectId}/todo/${id}`,
    `https://oblacko-api.herokuapp.com/projects/${projectId}/todo/${id}`,
    { checked },
  );
  // yield put(actions.giveProject(data));
}

function* addNewEvent({ payload }) {
  console.log(payload);
  const { todo, task } = payload;
  const { data } = yield call(
    axios.post,
    // 'http://localhost:3100/todos',
    'https://oblacko-api.herokuapp.com/todos',
    { todo, task },
  );
  yield put(actions.giveProject(data));
}

export default function* projectSaga() {
  yield takeEvery(types.ADD_PROJECT, addProjectSaga);
  yield takeEvery(types.NEW_CHECK, addNewCheck);
  yield takeEvery(types.NEW_EVENT, addNewEvent);
}
