import AppError from '../../../../error';
import TransactionRepository from '../../../Transaction/repositories/implementation/TransactionRepository';
import { TInformationFixed } from '../../model';
import InformationFixedRepository from '../../repositories/implementations/InformationFixedRepository';
import { differenceInCalendarMonths } from 'date-fns';

export default async function UpdatedMyInfos(
  userId: string,
  idInformation: string,
  whichInformation: 'TIME' | 'AMOUNT',
  newValueInformation: Date | number,
): Promise<TInformationFixed> {
  const findUserOnInformations = await InformationFixedRepository.findUserOnInformation(userId);
  if (!findUserOnInformations) throw new AppError('Parece que voce não tem essas informações cadastradas!');

  const findInformation = await InformationFixedRepository.findUniqueInformationById(idInformation);
  if (!findInformation) throw new AppError('Não foi possível achar está informação!', 404);

  // put transactions here, on each method
  if (whichInformation === 'TIME') {
    const differenceOfDates = differenceInCalendarMonths(
      new Date(newValueInformation), findInformation.createdAt
    );
    const [updateInformations, delteTransactions, addHistoric] = await Promise.all([
      await InformationFixedRepository
        .updateTimeInformation(idInformation, differenceOfDates),
      await TransactionRepository.deleteManyTransactionWithTimeGreaterThan(
        findInformation._id,
        new Date(newValueInformation)
      ),
      await InformationFixedRepository
        .addNewUpdateOnHistoric(findInformation._id, 'TIME', differenceOfDates),
    ]);
    if (!updateInformations) throw new AppError('Parece que ouve algum erro ao mudar a sua informação!');

    return updateInformations;
  }

  const [updateInfos, updateTransactions, addHistoric] = await Promise.all([
    await InformationFixedRepository
      .updateAmountInformation(findInformation.id, (newValueInformation as number)),
    await TransactionRepository.updateManyTransactionsWithTimeGreaterThan(
      findInformation._id,
      new Date(),
      (newValueInformation as number)
    ),
    await InformationFixedRepository
      .addNewUpdateOnHistoric(findInformation._id, 'AMOUNT', (newValueInformation as number)),
  ]);

  return updateInfos!;
}
