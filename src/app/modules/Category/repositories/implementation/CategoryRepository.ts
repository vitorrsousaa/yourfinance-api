import { TCategory } from '../../../../entities/category/TCategory';
import prisma from '../../../../prisma';
import { ICategoryRepository } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  async create(name: string): Promise<TCategory> {
    return prisma.category.create({
      data: {
        name
      }
    });
  }

  async findById(id: string): Promise<TCategory | null> {
    return prisma.category.findUnique({
      where: {
        id
      }
    });
  }
  async findByName(name: string): Promise<TCategory | null> {
    return prisma.category.findFirst({
      where: {
        name
      }
    });
  }

  async findAll(): Promise<TCategory[] | null> {
    return prisma.category.findMany();
  }

  async delete(id: string): Promise<unknown> {
    return prisma.category.delete({
      where: {
        id
      }
    });
  }
}

export default new CategoryRepository();
