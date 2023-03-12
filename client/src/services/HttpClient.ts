import { AxiosRequestConfig, AxiosResponse } from 'axios';
import APIError from '../errors/APIError';
import { TransactionCreateProps } from '../types/Transaction';
import { User } from '../types/User';
import delay from '../utils/delay';
import { api } from './api';

type dataRequestProps = TransactionCreateProps | User;

class HttpClient {
  private baseURL;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get<T>(path: string) {
    return this.makeRequest<T>({
      method: 'get',
      url: `${this.baseURL}${path}`,
    });
  }

  delete(path: string) {
    return this.makeRequest({
      method: 'delete',
      url: `${this.baseURL}${path}`,
    });
  }

  post<T>(path: string, data: dataRequestProps) {
    return this.makeRequest<T>({
      method: 'post',
      url: `${this.baseURL}${path}`,
      data,
    });
  }

  async makeRequest<T>(options: AxiosRequestConfig): Promise<T> {
    await delay(1000);

    const response: AxiosResponse = await api({
      ...options,
      validateStatus: function (status) {
        return status >= 200 && status < 500;
      },
    });

    if (response.status >= 200 && response.status < 400) {
      return response.data as T;
    }

    throw new APIError(response);
  }
}

export default HttpClient;
