import { TModality } from '../../../../entities/modality/TModality';
import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function FindAll(): Promise<TModality[] | null> {
  return ModalityRepository.findAll();
}
