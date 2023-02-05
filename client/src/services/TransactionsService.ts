import { TransactionCreateProps } from '../types/Transaction';
import HttpClient from './HttpClient';

class TransactionsService {
  async list() {
    return HttpClient.get('/transactions');
  }

  async create(transaction: TransactionCreateProps) {
    return HttpClient.post('/transactions', transaction);
  }

  async delete(transactionId: string) {
    return HttpClient.delete(`/transactions/${transactionId}`);
  }
}

export default new TransactionsService();
