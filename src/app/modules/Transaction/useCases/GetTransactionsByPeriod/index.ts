import AppError from '../../../../error';
import { TTransaction } from '../../model';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function GetTransactionsByPeriod(period: string | number, userId: string): Promise<TTransaction[] | null> {
  const findTransactions = await TransactionRepository.findByPeriod(userId, String(period));
  if (!findTransactions) throw new AppError('You no have transactions!', 404);

  return findTransactions;
}
