import AppError from '../../../../error';
import Crypt from '../../../../providers/Crypt';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
import { TUser } from '../../model';
import UserRepository from '../../repositories/implementations/UserRepository';

export default async function ChangePassword(
  passwords: {
    currentPassword: string,
    newPassword: string,
  },
  idUser: string,
): Promise<TUser | null> {
  returnErrorMissingField(passwords, [
    'currentPassword',
    'newPassword'
  ]);
  const {
    currentPassword,
    newPassword
  } = passwords;

  if (currentPassword === newPassword) throw new AppError('Password must be different!');

  const findUser = await UserRepository.findById(idUser);
  if (!findUser) throw new AppError('User not found!', 404);

  const matchPassword = await Crypt.matchPassword(currentPassword, findUser.password);

  if (!matchPassword) throw new AppError('The password not match with your current password!');

  const hashNewPassword = await Crypt.hash(newPassword);

  const updatedPassword = await UserRepository.updatePassword(idUser, hashNewPassword);

  updatedPassword?.password ? '' : '';

  return updatedPassword;
}
