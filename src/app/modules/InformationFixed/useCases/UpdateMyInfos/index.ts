import { TInformationFixed } from '../../../../entities/informationFixed/TInformationFixed';
import AppError from '../../../../error';
import InformationFixedRepository from '../../repositories/implementations/InformationFixedRepository';
import PrismaTransactionUpdateMyInfos from './PrismaTransactionUpdateMyInfos';

export default async function UpdatedMyInfos(
  userId: string,
  idInformation: string,
  whichInformation: 'TIME' | 'AMOUNT',
  newValueInformation: Date | number,
): Promise<TInformationFixed | null> {
  const findUserOnInformations = await InformationFixedRepository.findUserOnInformation(userId);
  if (!findUserOnInformations) throw new AppError('Parece que voce não tem essas informações cadastradas!');

  const findInformation = findUserOnInformations.find(({ id }) => id === idInformation);
  if (!findInformation) throw new AppError('Não foi possível achar está informação!', 404);

  const transaction = await PrismaTransactionUpdateMyInfos(
    newValueInformation,
    findInformation,
    whichInformation
  );

  return transaction;
}
