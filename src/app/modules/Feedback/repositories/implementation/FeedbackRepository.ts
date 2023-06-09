import { FeedbackCreateRequestDTO } from '../../../../entities/feedback/dtos';
import { TFeedback } from '../../../../entities/feedback/TFeedback';
import prisma from '../../../../prisma';
import { IFeedbackRepository } from '../IFeedbackRepository';

class FeedbackRepository implements IFeedbackRepository {
  async create({
    title,
    description,
    userId,
  }: FeedbackCreateRequestDTO): Promise<TFeedback> {
    return prisma.feedback.create({
      data: {
        title,
        description,
        userId,
      },
    });
  }

  async findAll(): Promise<TFeedback[]> {
    return prisma.feedback.findMany();
  }
}

export default new FeedbackRepository();
