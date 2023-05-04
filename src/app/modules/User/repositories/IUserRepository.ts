import { TUser } from '../../../entities/user/TUser';

export interface IUserRepository {
  findByEmail(email: string): Promise<TUser | null>;
  create(name: string, email: string, password: string): Promise<TUser>;
  findById(id: string): Promise<TUser | null>;
  updatePassword(id: string, password: string): Promise<TUser | null>;
}
