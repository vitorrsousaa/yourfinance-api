import { TInformationFixed } from '../../../../entities/informationFixed/TInformationFixed';
import { TTransaction } from '../../../../entities/transaction/TTransaction';
import PrismaTransactionRegistrationInformation from './PrismaTransactionRegistrationInformation';

export default async function RegistrationInformation(
  time: number,
  initialDate: Date,
  infosTransactionFixed: TTransaction,
  userId: string,
): Promise<TInformationFixed> {
  const { name, categoryId, modalityId, amount } = infosTransactionFixed;

  const transaction = await PrismaTransactionRegistrationInformation(
    name,
    time,
    amount,
    categoryId,
    modalityId,
    userId,
    initialDate
  );

  return transaction;
}
