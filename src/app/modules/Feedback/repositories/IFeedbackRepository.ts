import { FeedbackCreateRequestDTO } from '../../../entities/feedback/dtos';
import { TFeedback } from '../../../entities/feedback/TFeedback';

export interface IFeedbackRepository {
  create({title, description, feedbackCategoryId, userId}: FeedbackCreateRequestDTO): Promise<TFeedback>;
}
