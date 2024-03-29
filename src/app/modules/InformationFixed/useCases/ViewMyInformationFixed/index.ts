import { TInformationFixed } from '../../../../entities/informationFixed/TInformationFixed';
import AppError from '../../../../error';
import InformationFixedRepository from '../../repositories/implementations/InformationFixedRepository';

export default async function ViewMyInformationFixed(userId: string): Promise<TInformationFixed[] | null> {
  const findUserOnInformation = await InformationFixedRepository.findUserOnInformation(userId);
  if (!findUserOnInformation) throw new AppError('Voce não tem essa informação cadastrada!', 404);

  return findUserOnInformation;
}
