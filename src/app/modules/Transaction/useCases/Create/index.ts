import { TTransaction } from '../../../../entities/transaction/TTransaction';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function CreateTransaction(
  infosTransaction: Omit<TTransaction, 'id' | 'createdAt' | 'updatedAt' | 'userId' | 'informationFixedId'>,
  user: string,
  isInformationFixed?: boolean,
  idInformationFixed?: string,
): Promise<TTransaction> {
  returnErrorMissingField(infosTransaction, [
    'name',
    'categoryId',
    'type',
    'modalityId',
    'amount',
    'date',
  ]);

  const { name, categoryId, type, modalityId, amount, date } =
    infosTransaction;

  if (isInformationFixed) {
    return TransactionRepository.create(
      name,
      categoryId,
      modalityId,
      type,
      user,
      amount,
      new Date(date),
      idInformationFixed
    );
  }

  return TransactionRepository.create(
    name,
    categoryId,
    modalityId,
    type,
    user,
    amount,
    new Date(date)
  );
}
