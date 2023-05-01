import { TFeedback } from '../../../../entities/feedback/TFeedback';
import FindFeedbackCategoryById from '../../../FeedbackCategory/useCases/FindById';
import FeedbackRepository from '../../repositories/implementation/FeedbackRepository';

export default async function CreateFeedback(
  title: string,
  description: string,
  feedbackCategoryId: string,
  userId: string
): Promise<TFeedback> {
  const findCategory = await FindFeedbackCategoryById(feedbackCategoryId);

  const create = await FeedbackRepository.create(
    title,
    description,
    findCategory.id,
    userId
  );

  return create;
}
