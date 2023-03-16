import { TCategory } from '../model';

export interface ICategoryRepository {
  create(name: string): Promise<TCategory>;
  findAll(): Promise<TCategory[] | null>;
  findById(id: string): Promise<TCategory | null>;
  findByName(name: string): Promise<TCategory | null>;
  delete(id: string): Promise<void | null>;
}
