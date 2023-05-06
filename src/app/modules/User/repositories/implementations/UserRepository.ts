import { TUser } from '../../../../entities/user/TUser';
import prisma from '../../../../prisma';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<TUser | null> {
    return prisma.user.findFirst({
      where: {
        email
      }
    });
  }

  async create(name: string, email: string, password: string): Promise<TUser> {
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

  async updatePassword(id: string, password: string): Promise<TUser | null> {
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
