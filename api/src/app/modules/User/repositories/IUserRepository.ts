import { TUser } from '../model';

export interface IUserRepository {
  create(name: string, email: string, password: string): Promise<TUser>;
  findByEmail(email: string): Promise<TUser | null>;
  findById(id: string): Promise<TUser | null>;
}
