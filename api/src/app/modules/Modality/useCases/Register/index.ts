import { Types } from 'mongoose';
import AppError from '../../../../error';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';

import ModalityRepository from '../../repositories/implementation/ModalityRepository';

export default async function Register(
  name: string,
  category: Types.ObjectId,
  requestBody: Record<string, any>[]
) {
  returnErrorMissingField(requestBody, ['name', 'category']);

  const modalityExists = await ModalityRepository.findByName(name);
  if (modalityExists) {
    throw new AppError('Modality already exists!');
  }

  const newModality = await ModalityRepository.create(name, category);

  return {
    modality: newModality,
  };
}
