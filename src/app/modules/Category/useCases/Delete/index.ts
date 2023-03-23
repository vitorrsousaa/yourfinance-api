import AppError from '../../../../error';
import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function Delete(id: string) {
  if (!id) {
    throw new AppError('Category ID is required');
  }

  const findCategory = await CategoryRepository.findById(id);

  if (!findCategory) {
    throw new AppError('Category does not exists', 404);
  }

  await CategoryRepository.delete(id);
  return 'Category Delected';
}
