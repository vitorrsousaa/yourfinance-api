import { Types } from 'mongoose';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import { TTransaction } from '../../model';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function CreateTransaction(
  infosTransaction: Pick<TTransaction, 'description' | 'category' | 'type' | 'modality' | 'amount' | 'date'>,
  user: string,
  isInformationFixed?: boolean,
  idInformationFixed?: Types.ObjectId,
) {
  returnErrorMissingField(infosTransaction, [
    'description',
    'category',
    'type',
    'modality',
    'amount',
    'date',
  ]);

  const { description, category, type, modality, amount, date } =
    infosTransaction;

  if (isInformationFixed) {
    return TransactionRepository.create(
      description,
      (category as Types.ObjectId),
      (modality as Types.ObjectId),
      type,
      user,
      amount,
      new Date(date),
      idInformationFixed
    );
  }

  return TransactionRepository.create(
    description,
    (category as Types.ObjectId),
    (modality as Types.ObjectId),
    type,
    user,
    amount,
    new Date(date)
  );
}
