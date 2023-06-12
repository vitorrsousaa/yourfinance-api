import { TFeedback } from '../../../../entities/feedback/TFeedback';
import FeedbackRepository from '../../repositories/implementation/FeedbackRepository';

export default async function FindAll(): Promise<TFeedback[]> {
  const all = await FeedbackRepository.findAll();

  return all;
}
