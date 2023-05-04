import { TFeedbackCategory } from '../../../../entities/feedbackCategory/TFeedbackCategory';
import FeedbackRepository from '../../repositories/implementation/FeedbackRepository';

export default async function FindManyFeedbackCategories(): Promise<TFeedbackCategory[] | null> {
  return FeedbackRepository.findMany();
}
