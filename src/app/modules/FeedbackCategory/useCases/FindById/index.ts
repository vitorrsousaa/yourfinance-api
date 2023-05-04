import { TFeedbackCategory } from '../../../../entities/feedbackCategory/TFeedbackCategory';
import AppError from '../../../../error';
import FeedbackRepository from '../../repositories/implementation/FeedbackRepository';

export default async function FindFeedbackCategoryById(id: string): Promise<TFeedbackCategory> {
  const find = await FeedbackRepository.findById(id);
  if (!find) throw new AppError('Não foi possível achar está categoria!', 404);

  return find;
}
