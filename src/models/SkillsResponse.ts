import { Expose } from 'class-transformer';

export class SkillsResponse {
  @Expose()
  public skills: Array<string>;

  @Expose({ name: 'total_items'})
  public totalItems: number;

  constructor(model: Partial<SkillsResponse> = {}) {
    Object.assign(this, model);
  }
}
