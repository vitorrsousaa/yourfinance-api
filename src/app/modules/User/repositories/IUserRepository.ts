import { UserCreateRequestDTO, UserUpdateRequestDTO } from '../../../entities/user/dtos';
import { TUser } from '../../../entities/user/TUser';

export interface IUserRepository {
  findByEmail(email: string): Promise<TUser | null>;
  create({name, email, password}: UserCreateRequestDTO): Promise<TUser>;
  findById(id: string): Promise<TUser | null>;
  updatePassword({id, password}: UserUpdateRequestDTO): Promise<TUser | null>;
}
