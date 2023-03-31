import AppError from '../../../../error';
import TransactionRepository from '../../repositories/implementation/TransactionRepository';

export default async function Delete(transactionId: string) {
  if (!transactionId) {
    throw new AppError('O id da transação é obrigatorio!');
  }

  const findTransaction = await TransactionRepository.findById(transactionId);
  if (!findTransaction) {
    throw new AppError('Está transação não foi encontrada!', 404);
  }

  await TransactionRepository.delete(transactionId);

  return 'Transaction Delected!';
}
