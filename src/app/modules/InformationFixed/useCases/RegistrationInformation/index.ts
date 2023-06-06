import { TInformationFixed } from '../../../../entities/informationFixed/TInformationFixed';
import { TTransaction } from '../../../../entities/transaction/TTransaction';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import PrismaTransactionRegistrationInformation from './PrismaTransactionRegistrationInformation';

export default async function RegistrationInformation(
  time: number,
  initialDate: Date,
  infosTransactionFixed: TTransaction,
  userId: string,
): Promise<TInformationFixed> {
  const { name, categoryId, modalityId, amount } = infosTransactionFixed;

  returnErrorMissingField({
    time,
    initialDate,
    ...infosTransactionFixed
  }, [
    'time',
    'initialDate',
    'name',
    'categoryId',
    'modalityId',
    'amount'
  ]);

  return PrismaTransactionRegistrationInformation(
    name,
    time,
    amount,
    categoryId,
    modalityId,
    userId,
    initialDate
  );
}
