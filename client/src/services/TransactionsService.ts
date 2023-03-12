import {
  Transaction,
  TransactionCreateProps,
  TransactionsData,
} from '../types/Transaction';
import HttpClient from './HttpClient';

class TransactionsService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  list(page?: number) {
    if (page) {
      return this.httpClient.get<TransactionsData>(
        `/transactions/?page=${page}`
      );
    }

    return this.httpClient.get<TransactionsData>('/transactions');
  }

  create(transaction: TransactionCreateProps) {
    return this.httpClient.post<Transaction>('/transactions', transaction);
  }

  delete(transactionId: string) {
    return this.httpClient.delete(`/transactions/${transactionId}`);
  }

  listByPeriod(period = 2) {
    return this.httpClient.get<TransactionsData>(
      `/transactions?period=${period}`
    );
  }
}

export default new TransactionsService();
