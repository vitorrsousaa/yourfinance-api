import { TModality } from '../../../../entities/modality/TModality';
import AppError from '../../../../error';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';

import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function Register(
  name: string,
  category: string,
  requestBody: Record<string, any>[]
): Promise<{ modality: TModality }> {
  returnErrorMissingField(requestBody, ['name', 'category']);

  const modalityExists = await ModalityRepository.findByName(name);
  if (modalityExists) {
    throw new AppError('Está modalidade já existe!');
  }

  const modality = await ModalityRepository.create(name, category);

  return {
    modality,
  };
}
