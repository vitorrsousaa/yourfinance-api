import { TCategory } from '../../../../entities/category/TCategory';
import AppError from '../../../../error';
import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function Register(
  name: string,
): Promise<{category: TCategory}> {

  const categoryExists = await CategoryRepository.findByName(name);

  if (categoryExists) {
    throw new AppError('Está categoria já existe!');
  }

  const category = await CategoryRepository.create(name);

  return {
    category
  };
}
