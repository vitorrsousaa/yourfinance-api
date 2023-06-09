import { FeedbackCreateRequestDTO } from '../../../entities/feedback/dtos';
import { TFeedback } from '../../../entities/feedback/TFeedback';

export interface IFeedbackRepository {
  create({
    title,
    description,
    userId,
  }: FeedbackCreateRequestDTO): Promise<TFeedback>;
  findAll(): Promise<TFeedback[]>;
}
