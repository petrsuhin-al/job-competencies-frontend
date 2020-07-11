import { Action, createReducer } from 'deox';
import { SkillsState } from '../state/Skills';
import { SkillsActions } from '../actions/Skills';
import { filter } from 'lodash';

const initialState = new SkillsState();

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(SkillsActions.refreshState, (state) => ({
    ...state,
    ...initialState
  })),
  handleAction(SkillsActions.getSkills, (state) => ({
    ...state,
    isSubmitting: true,
    errorResponse: null
  })),
  handleAction(SkillsActions.getSkillsSuccess, (state, action) => ({
    ...state,
    isSubmitting: false,
    skills: action.payload.skills,
    totalItems: action.payload.totalItems,
  })),
  handleAction(SkillsActions.getSkillsFailure, (state, action) => ({
    ...state,
    isSubmitting: false,
    errorResponse: action.payload.response
  })),
  handleAction(SkillsActions.removeSkill, (state) => ({
    ...state
  })),
  handleAction(SkillsActions.removeSkillSuccess, (state, action) => ({
    ...state,
    isSubmitting: false,
    skills: filter(state.skills, (item) => item !== action.payload)
  }))
]);

export function skillsReducer(state: SkillsState | undefined, action: Action<any>): SkillsState {
  return reducer(state, action);
}
