import { Action, createReducer } from 'deox';
import { SkillsState } from '../state/Skills';
import { SkillsActions } from '../actions/Skills';

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
]);

export function skillsReducer(state: SkillsState | undefined, action: Action<any>): SkillsState {
  return reducer(state, action);
}
