import { createSelector } from 'reselect';
import { AppState } from '../ConfigureStore';
import { SkillsState } from '../state/Skills';

const selectFeature = (state: AppState): SkillsState => state.skillsReducer;

export class SkillsSelectors {
  public static isLoading = createSelector(
    selectFeature,
    (state: SkillsState) => state.isLoading
  );

  public static skills = createSelector(
    selectFeature,
    (state: SkillsState) => state.skills
  );

  public static totalItems = createSelector(
    selectFeature,
    (state: SkillsState) => state.totalItems
  );

  public static errorResponse = createSelector(
    selectFeature,
    (state: SkillsState) => state.errorResponse
  );

  public static isSubmitting = createSelector(
    selectFeature,
    (state: SkillsState) => state.isSubmitting
  );
}
