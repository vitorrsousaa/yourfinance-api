import { FeedbackCreateRequestDTO } from '../../../../entities/feedback/dtos';
import { TFeedback } from '../../../../entities/feedback/TFeedback';
import FeedbackRepository from '../../repositories/implementation/FeedbackRepository';

export default async function CreateFeedback({
  title,
  description,
  userId,
}: FeedbackCreateRequestDTO): Promise<TFeedback> {
  const create = await FeedbackRepository.create({
    title,
    description,
    userId,
  });

  return create;
}
