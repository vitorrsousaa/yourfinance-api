import { TFeedback } from '../../../../entities/feedback/TFeedback';
import { FeedbackCreateRequestDTO } from '../../../../entities/feedback/dtos';
import FindFeedbackCategoryById from '../../../FeedbackCategory/useCases/FindById';
import FeedbackRepository from '../../repositories/implementation/FeedbackRepository';

export default async function CreateFeedback({
  title,
  description,
  feedbackCategoryId,
  userId
}: FeedbackCreateRequestDTO): Promise<TFeedback> {
  const findCategory = await FindFeedbackCategoryById(feedbackCategoryId);

  const create = await FeedbackRepository.create({
    title,
    description,
    feedbackCategoryId: findCategory.id,
    userId
  });

  return create;
}
