import { TModality } from '../../../entities/modality/TModality';
import { ModalityCreateRequestDTO } from '../../../entities/modality/dtos/ModalityCreateRequest';

export interface IModalityRespository {
  create({name, categoryId}: ModalityCreateRequestDTO): Promise<TModality>;
  findByName(name: string): Promise<TModality | null>;
  findById(id: string): Promise<TModality | null>;
  findAll(): Promise<TModality[] | null>;
  delete(id: string): Promise<unknown>;
}
