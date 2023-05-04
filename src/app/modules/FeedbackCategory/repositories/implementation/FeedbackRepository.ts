import { TFeedbackCategory } from '../../../../entities/feedbackCategory/TFeedbackCategory';
import prisma from '../../../../prisma';
import { IFeedbackCategoryRepository } from '../IFeedbackCategoryRepository';

class FeedbackCategory implements IFeedbackCategoryRepository {
  async create(name: string): Promise<TFeedbackCategory> {
    return prisma.feedbackCategory.create({
      data: {
        name
      }
    });
  }

  async findById(id: string): Promise<TFeedbackCategory | null> {
    return prisma.feedbackCategory.findUnique({
      where: {
        id
      }
    });
  }

  async findMany(): Promise<TFeedbackCategory[] | null> {
    return prisma.feedbackCategory.findMany();
  }
}

export default new FeedbackCategory();
