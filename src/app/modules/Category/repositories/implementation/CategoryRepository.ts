import Category, { TCategory } from '../../model';
import { ICategoryRepository } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  async create(name: string): Promise<TCategory> {
    return Category.create({ name });
  }

  async findById(id: string): Promise<TCategory | null> {
    return Category.findById(id);
  }
  async findByName(name: string): Promise<TCategory | null> {
    return Category.findOne({ name });
  }

  async findAll(): Promise<TCategory[] | null> {
    return Category.find().sort({ name: 1 });
  }

  async delete(id: string): Promise<void | null> {
    return Category.findByIdAndDelete(id);
  }
}

export default new CategoryRepository();
