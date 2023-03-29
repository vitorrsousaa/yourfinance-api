import AppError from '../../../../error';
import { TInformationFixed } from '../../model';
import InformationFixedRepository from '../../repositories/implementations/InformationFixedRepository';

export default async function UpdatedMyInfos(
  userId: string,
  fixedIncome: number,
  fixedOutcome: number
): Promise<TInformationFixed> {
  const findUserOnInformations = await InformationFixedRepository.findUserOnInformation(userId);
  if (!findUserOnInformations) throw new AppError('Parece que voce não tem essas informações cadastradas!');

  const updateInfos = await InformationFixedRepository
    .updateInformations(findUserOnInformations.id, fixedIncome, fixedOutcome);
  if (!updateInfos) throw new AppError('Ocorreu algum erro ao mudar suas informações!');

  return updateInfos;
}
