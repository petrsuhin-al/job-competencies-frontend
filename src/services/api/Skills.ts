import { classToPlain, plainToClass } from 'class-transformer';
import { isUndefined, omitBy } from 'lodash';
import ApiClient from './ApiClient';
import { SkillsRequest } from '../../models/SkillsRequest';
import { SkillsResponse } from '../../models/SkillsResponse';

const apiClient = new ApiClient();

export class SkillsService {
  public static getSkills(credentials: SkillsRequest): Promise<SkillsResponse> {
    const data = omitBy(classToPlain<SkillsRequest>(credentials), isUndefined);

    return apiClient
      .post({ endpoint: '/skills', data })
      .then((resp) => plainToClass(SkillsResponse, resp.data));
  }
}
