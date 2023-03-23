import { TCategory } from '../../model';
import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function FindAll(): Promise<TCategory[] | null> {
  return CategoryRepository.findAll();
}
