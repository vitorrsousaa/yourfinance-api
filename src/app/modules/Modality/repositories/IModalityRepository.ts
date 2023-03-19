import { Types } from 'mongoose';
import { TModality } from '../model';

export interface IModalityRespository {
  create(name: string, category: Types.ObjectId): Promise<TModality>;
  findByName(name: string): Promise<TModality | null>;
  findById(id: string): Promise<TModality | null>;
  findAll(): Promise<TModality[] | null>;
  delete(id: string): Promise<void | null>;
}
