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
    (resolve) => (news: SkillsResponse) => resolve(news)
  );

  public static getSkillsFailure = createActionCreator(
    '[Main Page] Get Skills By Resume Failure',
    (resolve) => (response: AxiosError) => resolve(response)
  );
}
