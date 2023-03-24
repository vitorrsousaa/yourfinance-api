import User, { TUser } from '../../model';
import { IUserRepository } from '../IUserRepository';

class UsersRepository implements IUserRepository {
  async create(name: string, email: string, password: string): Promise<TUser> {
    return User.create({ email, name, password });
  }

  async findByEmail(email: string): Promise<TUser | null> {
    return User.findOne({ email }).select('+password');
  }

  async findById(id: string): Promise<TUser | null> {
    return User.findById(id).select('+password');
  }

  async updatePassword(idUser: string, newPassword: string): Promise<TUser | null> {
    return User.findByIdAndUpdate(
      { _id: idUser },
      { $set: {
        password: newPassword
      } },
      { new: true }
    ).select('-password');
  }
}

export default new UsersRepository();
