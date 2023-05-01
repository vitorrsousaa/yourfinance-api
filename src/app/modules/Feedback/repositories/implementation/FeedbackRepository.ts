import { TFeedback } from '../../../../entities/feedback/TFeedback';
import prisma from '../../../../prisma';
import { IFeedbackRepository } from '../IFeedbackRepository';

class FeedbackRepository implements IFeedbackRepository {
  async create(title: string, description: string, feedbackCategoryId: string, userId: string): Promise<TFeedback> {
    return prisma.feedback.create({
      data: {
        title,
        description,
        feedbackCategoryId,
        userId
      }
    });
  }
}

export default new FeedbackRepository();
