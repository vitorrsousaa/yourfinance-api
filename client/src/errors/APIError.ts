import { AxiosResponse } from 'axios';

export default class APIError extends Error {
  response;

  constructor(response: AxiosResponse) {
    super();

    this.message = `${response.status} - ${response.statusText}`;

    this.name = 'APIError';
    this.response = response;
  }
}
