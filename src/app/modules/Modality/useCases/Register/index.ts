import { Types } from 'mongoose';
import AppError from '../../../../error';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import { TModality } from '../../model';

import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function Register(
  name: string,
  category: Types.ObjectId,
  requestBody: Record<string, any>[]
): Promise<{ modality: TModality }> {
  returnErrorMissingField(requestBody, ['name', 'category']);

  const modalityExists = await ModalityRepository.findByName(name);
  if (modalityExists) {
    throw new AppError('Modality already exists!');
  }

  const modality = await ModalityRepository.create(name, category);

  return {
    modality,
  };
}
