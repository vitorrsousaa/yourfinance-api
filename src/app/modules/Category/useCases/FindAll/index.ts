import { TCategory } from '../../../../entities/category/TCategory';
import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function FindAll(): Promise<TCategory[] | null> {
  return CategoryRepository.findAll();
}
