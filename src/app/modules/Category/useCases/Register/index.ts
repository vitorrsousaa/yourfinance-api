import AppError from '../../../../error';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function Register(
  name: string,
  requestBody: Record<string, any>[]
) {
  returnErrorMissingField(requestBody, ['name']);

  const categoryExists = await CategoryRepository.findByName(name);

  if (categoryExists) {
    throw new AppError('Category already exists!');
  }

  const newCategory = await CategoryRepository.create(name);

  return {
    category: newCategory,
  };
}
