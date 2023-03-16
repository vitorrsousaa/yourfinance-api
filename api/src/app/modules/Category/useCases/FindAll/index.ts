import CategoryRepository from '../../repositories/implementation/CategoryRepository';

export default async function FindAll() {
  return CategoryRepository.findAll();
}
