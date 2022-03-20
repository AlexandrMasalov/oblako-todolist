import { all } from 'redux-saga/effects';
import projectSaga from './project';

export default function* rootSaga() {
  yield all([projectSaga()]);
}
