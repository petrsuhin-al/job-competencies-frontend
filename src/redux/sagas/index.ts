import { all } from 'redux-saga/effects';
import skills from './Skills';

export default function * sagas () {
  yield all([
    skills()
  ]);
}
