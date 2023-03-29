import AppError from '../../../../error';
import { TInformationFixed } from '../../model';
import InformationFixedRepository from '../../repositories/implementations/InformationFixedRepository';

export default async function RegistrationInformation(
  fixedIncome: number,
  fixedOutcome: number,
  userId: string
): Promise<TInformationFixed> {
  const findUserOnInformations = await InformationFixedRepository.findUserOnInformation(userId);
  if (findUserOnInformations) throw new AppError('Você já tem essas informações registradas!');

  const createInfos = await InformationFixedRepository.registerInformation(
    fixedIncome,
    fixedOutcome,
    userId
  );

  return createInfos;
}
