import { Types } from 'mongoose';
import { TTransaction } from '../../../Transaction/model';
import CreateTransaction from '../../../Transaction/useCases/Create';
import { TInformationFixed } from '../../model';
import InformationFixedRepository from '../../repositories/implementations/InformationFixedRepository';

export default async function RegistrationInformation(
  time: number,
  infosTransactionFixed: TTransaction,
  userId: string,
): Promise<TInformationFixed> {
  const { description, category, type, modality, amount } = infosTransactionFixed;

  const date = new Date();
  const idsTransactions: Types.ObjectId[] = [];

  // transactions here
  const createInfos = await InformationFixedRepository.registerInformation(
    description,
    time,
    amount,
    (category as Types.ObjectId),
    userId
  );

  for (let i = 0; i < time; i++) {
    const calculateMonthsMoreTwelve = time - i;
    const verificationIfMonthIsMoreTwelve = date.getMonth() + 1 + i > 12
      ? calculateMonthsMoreTwelve
      : date.getMonth() + 1 + i;

    const verificationIfMonthIsMoreTwelveToAdd1YearOnYear = date.getMonth() + 1 + i > 12
      ? date.getFullYear() + 1
      : date.getFullYear();

    const infosTransaction = {
      description, category, type, modality, amount,
      date: new Date(
        `${verificationIfMonthIsMoreTwelveToAdd1YearOnYear}-${
          verificationIfMonthIsMoreTwelve < 10 ? '0' + verificationIfMonthIsMoreTwelve : verificationIfMonthIsMoreTwelve
        }-${date.getDate()}`
      )
    };

    const { _id } = await CreateTransaction(infosTransaction, userId, true, createInfos._id);
    idsTransactions.push(_id);
  }

  Promise.all([
    await InformationFixedRepository
      .addTransactionsOnInformation(createInfos?._id, idsTransactions),
    await InformationFixedRepository
      .addNewUpdateOnHistoric(createInfos?._id, 'TIME', time),
    await InformationFixedRepository
      .addNewUpdateOnHistoric(createInfos?._id, 'AMOUNT', amount),
  ]);

  return createInfos;
}
