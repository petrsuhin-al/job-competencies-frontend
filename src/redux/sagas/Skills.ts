import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { Action } from 'deox';
import { SkillsService } from '../../services/api/Skills';
import { SkillsRequest } from '../../models/SkillsRequest';
import { SkillsActions } from '../actions/Skills';

function * getSkillsList(action: Action<string, SkillsRequest>): SagaIterator {
  try {
    const createdNews = yield call(SkillsService.getSkills, action.payload);

    yield put(SkillsActions.getSkillsSuccess(createdNews));
  } catch (e) {
    yield put(SkillsActions.getSkillsFailure(e));
  }
}

function * news(): SagaIterator {
  yield takeLatest(SkillsActions.getSkills, getSkillsList);
}

export default news;
