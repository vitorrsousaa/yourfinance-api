import { TFeedbackCategory } from '../../../entities/feedbackCategory/TFeedbackCategory';

export interface IFeedbackCategoryRepository {
  create(name: string): Promise<TFeedbackCategory>;
  findById(id: string): Promise<TFeedbackCategory | null>;
  findMany(): Promise<TFeedbackCategory[] | null>;
}
