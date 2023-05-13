import { TTransaction } from '../../../../entities/transaction/TTransaction';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function CreateTransaction(
  infosTransaction: Omit<TTransaction, 'id' | 'createdAt' | 'updatedAt' | 'userId' | 'informationFixedId'>,
  userId: string,
): Promise<TTransaction> {
  returnErrorMissingField(infosTransaction, [
    'name',
    'categoryId',
    'modalityId',
    'amount',
    'date',
  ]);
  const { name, categoryId, modalityId, amount, date } =
    infosTransaction;

  return TransactionRepository.create({
    name,
    categoryId,
    modalityId,
    type: 'Variável',
    userId,
    amount,
    date: new Date(date)
  });
}
