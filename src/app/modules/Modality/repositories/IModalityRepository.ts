import { TModality } from '../../../entities/modality/TModality';

export interface IModalityRespository {
  create(name: string, categoryId: string): Promise<TModality>;
  findByName(name: string): Promise<TModality | null>;
  findById(id: string): Promise<TModality | null>;
  findAll(): Promise<TModality[] | null>;
  delete(id: string): Promise<unknown>;
}
