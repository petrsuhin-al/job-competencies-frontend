import { Expose } from 'class-transformer';

export class SkillsRequest {
  @Expose()
  public resume: string;

  constructor(model: Partial<SkillsRequest> = {}) {
    Object.assign(this, model);
  }
}
