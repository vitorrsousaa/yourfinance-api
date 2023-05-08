import { TTransaction } from '../../../../entities/transaction/TTransaction';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function GetTransactionsByPeriod(period: string | number, userId: string): Promise<TTransaction[] | null> {
  const findTransactions = await TransactionRepository.findByPeriod({id: userId, month: String(period)});

  return findTransactions;
}
