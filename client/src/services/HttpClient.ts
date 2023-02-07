import { TransactionCreateProps } from '../types/Transaction';
import { User } from '../types/User';
import delay from '../utils/delay';
import { api } from './api';

type dataRequestProps = TransactionCreateProps | User;

class HttpClient {
  async get(path: string) {
    const response = await api.get(path);

    await delay();

    return response.data;
  }

  async delete(path: string) {
    const response = await api.delete(path);

    await delay();

    return response;
  }

  async post(path: string, data: dataRequestProps) {
    const response = await api.post(path, data);

    await delay();

    return response.data;
  }
}

export default new HttpClient();
