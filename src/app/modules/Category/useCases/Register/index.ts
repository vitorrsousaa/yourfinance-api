import AppError from '../../../../error';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import { TCategory } from '../../model';
import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function Register(
  name: string,
  requestBody: Record<string, any>[]
): Promise<{category: TCategory}> {
  returnErrorMissingField(requestBody, ['name']);

  const categoryExists = await CategoryRepository.findByName(name);

  if (categoryExists) {
    throw new AppError('Category already exists!');
  }

  const category = await CategoryRepository.create(name);

  return {
    category
  };
}
