import { AxiosResponse } from 'axios';

export class SkillsState {
  public skills: Array<string>;
  public totalItems: number;
  public errorResponse: AxiosResponse;
  public isLoading: boolean;
  public isSubmitting: boolean;

  constructor() {
    this.skills = [];
    this.totalItems = 0;
    this.errorResponse = null;
    this.isSubmitting = false;
    this.isLoading = false;
  }
}
