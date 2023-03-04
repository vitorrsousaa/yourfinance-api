import { TransactionCreateProps } from '../types/Transaction';
import HttpClient from './HttpClient';

class TransactionsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async list(page?: number) {
    if (page) {
      return this.httpClient.get(`/transactions/?page=${page}`);
    }

    return this.httpClient.get('/transactions');
  }

  async create(transaction: TransactionCreateProps) {
    return this.httpClient.post('/transactions', transaction);
  }

  async delete(transactionId: string) {
    return this.httpClient.delete(`/transactions/${transactionId}`);
  }

  async listByPeriod(period = 2) {
    return this.httpClient.get(`/transactions?period=${period}`);
  }
}

export default new TransactionsService();
