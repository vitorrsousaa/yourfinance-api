import User from '../models/User';

class UsersRepository {
  findByEmail(email: string) {
    return User.findOne({ email });
  }

  create(name: string, email: string, password: string) {
    return User.create({ email, name, password });
  }
}

export default new UsersRepository();
