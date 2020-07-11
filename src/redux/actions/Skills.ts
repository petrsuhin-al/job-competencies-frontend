import { AxiosError } from 'axios';
import { createActionCreator } from 'deox';
import { SkillsResponse } from '../../models/SkillsResponse';
import { SkillsRequest } from '../../models/SkillsRequest';

export class SkillsActions {
  public static refreshState = createActionCreator(
    '[Main Page] Refresh State'
  );

  public static getSkills = createActionCreator(
    '[Main Page] Get Skills By Resume',
    (resolve) => (data: SkillsRequest) => resolve(data)
  );

  public static getSkillsSuccess = createActionCreator(
    '[Main Page] Get Skills By Resume Success',
    (resolve) => (data: SkillsResponse) => resolve(data)
  );

  public static getSkillsFailure = createActionCreator(
    '[Main Page] Get Skills By Resume Failure',
    (resolve) => (response: AxiosError) => resolve(response)
  );

  public static removeSkill = createActionCreator(
    '[News Page] Remove Skill',
    (resolve) => (data: string) => resolve(data)
  );

  public static removeSkillSuccess = createActionCreator(
    '[News Page] Remove Skill Success',
    (resolve) => (data: string) => resolve(data)
  );
}
