import { IUserRepository } from '../IUserRepository';
import prisma from '../../../../prisma';
import { TUser } from '../../../../entities/user/TUser';
import { UserCreateRequestDTO, UserUpdateRequestDTO } from '../../../../entities/user/dtos';

class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<TUser | null> {
    return prisma.user.findFirst({
      where: {
        email
      }
    });
  }

  async create({name, email, password}: UserCreateRequestDTO): Promise<TUser> {
    return prisma.user.create({
      data: {
        name, email, password
      }
    });
  }
  async findById(id: string): Promise<TUser | null> {
    return prisma.user.findUnique({
      where: {
        id
      }
    });
  }

  async updatePassword({id, password}: UserUpdateRequestDTO): Promise<TUser | null> {
    return prisma.user.update({
      data: {
        password
      },
      where: {
        id
      }
    });
  }
}
export default new UserRepository();
