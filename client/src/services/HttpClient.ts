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

  async delete(path: string) {
    const response = await api.delete(path);

    await delay();

    return response;
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

    if (response.statusText === 'OK') {
      return response.data;
    }

    throw new APIError(response);
  }
}

export default HttpClient;
