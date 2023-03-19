import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function FindAll() {
  return ModalityRepository.findAll();
}
