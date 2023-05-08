import { itemsPerPage } from '../../../../constants/pagination';
import { TTransaction } from '../../../../entities/transaction/TTransaction';
import AppError from '../../../../error';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function ListAllTransactions(
  page: number,
  id: string
): Promise<{
  itemsPerPage: number,
  page: number,
  transactions: TTransaction[] | null
}> {
  const transactions = await TransactionRepository.findTransactionByIdUserAndPage({id, page});
  if (transactions === null) throw new AppError('Voce não tem nenhuma transação!');

  return {
    itemsPerPage,
    page,
    transactions,
  };
}
