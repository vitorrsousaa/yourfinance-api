import { AxiosRequestConfig } from 'axios';
import APIError from '../errors/APIError';
import { TransactionCreateProps } from '../types/Transaction';
import { User } from '../types/User';
import delay from '../utils/delay';
import { api } from './api';

type dataRequestProps = TransactionCreateProps | User;

interface optionsProps {
  method: 'get' | 'post' | 'delete';
  url: string;
}

class HttpClient {
  private baseURL;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(path: string) {
    return this.makeRequest({
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

  post(path: string, data: dataRequestProps) {
    return this.makeRequest({
      method: 'post',
      url: `${this.baseURL}${path}`,
      data,
    });
  }

  async makeRequest(options: AxiosRequestConfig) {
    await delay(1000);

    const response = await api({
      ...options,
      validateStatus: function (status) {
        return status >= 200 && status < 500;
      },
    });

    if (response.status >= 200 && response.status < 400) {
      return response.data;
    }

    throw new APIError(response);
  }
}

export default HttpClient;
