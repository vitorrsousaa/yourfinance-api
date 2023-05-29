import { TTransaction } from '../../../../entities/transaction/TTransaction';
import AppError from '../../../../error';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function GetAllTransactionByUser(
  userId: string
): Promise<TTransaction[] | null> {
  const findUser = await UserRepository.findById(userId);
  if (!findUser) throw new AppError('Usuário não encontrado!', 404);

  const transactions = await TransactionRepository.findAllTransactionsByUser(
    findUser.id
  );
  if (!transactions) throw new AppError('Nenhuma transação foi feita ainda!');

  return transactions;
}
