import { TUser } from '../../../../entities/user/TUser';
import AppError from '../../../../error';
import Crypt from '../../../../providers/Crypt';
import returnErrorMissingField from '../../../../utils/returnErrorMissingField';
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

  if (currentPassword === newPassword) throw new AppError('A senhas devem ser diferentes!');

  const findUser = await UserRepository.findById(idUser);
  if (!findUser) throw new AppError('Ouve algum erro!', 404);

  const matchPassword = await Crypt.matchPassword(currentPassword, findUser.password);

  if (!matchPassword) throw new AppError('Parece que voce errou sua senha!');

  const hashNewPassword = await Crypt.hash(newPassword);

  const updatedPassword = await UserRepository.updatePassword({id: idUser, password: hashNewPassword});

  updatedPassword?.password ? '' : '';

  return updatedPassword;
}
