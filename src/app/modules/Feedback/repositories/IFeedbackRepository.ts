import { TFeedback } from '../../../entities/feedback/TFeedback';
import { FeedbackCreateRequestDTO } from '../../../entities/feedback/dtos';

export interface IFeedbackRepository {
  create({title, description, feedbackCategoryId, userId}: FeedbackCreateRequestDTO): Promise<TFeedback>;
}
