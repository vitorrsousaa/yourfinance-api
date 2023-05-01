import { TFeedback } from '../../../entities/feedback/TFeedback';

export interface IFeedbackRepository {
  create(title: string, description: string, feedbackCategoryId: string, userId: string): Promise<TFeedback>;
}
