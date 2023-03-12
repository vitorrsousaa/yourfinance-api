import { User as UserRequest, UserResponse } from '../types/User';
import HttpClient from './HttpClient';

class AuthService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001/api');
  }

  login(user: UserRequest) {
    return this.httpClient.post<UserResponse>('/auth/authenticate', user);
  }

  register(user: UserRequest) {
    return this.httpClient.post<UserResponse>('/auth/register', user);
  }

  auth() {
    return this.httpClient.get('/auth');
  }
}

export default new AuthService();
