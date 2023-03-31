import AppError from '../../../../error';
import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function Delete(id: string) {
  if (!id) {
    throw new AppError('O id da categoria é obrigatorio!');
  }

  const findCategory = await CategoryRepository.findById(id);

  if (!findCategory) {
    throw new AppError('Está categoria não existe!', 404);
  }

  await CategoryRepository.delete(id);
  return 'Category Delected';
}
