import { TFeedbackCategory } from '../../../../entities/feedbackCategory/TFeedbackCategory';
import FeedbackRepository from '../../repositories/implementation/FeedbackRepository';

export default async function CreateFeedbackCategory(name: string): Promise<TFeedbackCategory> {
  return FeedbackRepository.create(name);
}
