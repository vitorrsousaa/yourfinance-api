import AppError from '../../../../error';
import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function Delete(id: string) {
  if (!id) {
    throw new AppError('o id da modalidade é obrigatorio!');
  }

  const findModality = await ModalityRepository.findById(id);
  if (!findModality) {
    throw new AppError('Está modalidade não existe', 404);
  }

  await ModalityRepository.delete(id);
  return 'Modality Delected!';
}
