import { beforeEach, describe, expect, it, jest } from '@jest/globals';

import { ACCESS_TOKEN_EXPIRATION, REFRESH_TOKEN_EXPIRATION } from '../../../../constants/auth';
import { TUser } from '../../../../entities/user/TUser';
import Crypt from '../../../../providers/Crypt';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import Register from './';

jest.mock('../../../User/repositories/implementations/UserRepository');
jest.mock('../../../../providers/Crypt');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Register', () => {
  it('should register a new user and generate access and refresh tokens', async () => {
    const mockEmail = 'test@example.com';
    const mockName = 'Test User';
    const mockPassword = 'password123';

    UserRepository.findByEmail = jest.fn<() => Promise<null>>().mockResolvedValue(null);

    Crypt.hash = jest.fn<() => Promise<string>>().mockResolvedValue('hashedPassword');

    const newUser: TUser = {
      id: 'user-id',
      name: mockName,
      email: mockEmail,
      password: 'hashedPassword',
    };
    UserRepository.create = jest.fn<() => Promise<TUser>>().mockResolvedValue(newUser);

    const mockAccessToken = 'access-token';
    const mockRefreshToken = 'refresh-token';
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    const generateTokenMock = jest.fn().mockImplementation((userId, expiration) => {
      return userId === 'user-id' && expiration === ACCESS_TOKEN_EXPIRATION
        ? mockAccessToken
        : mockRefreshToken;
    });
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const originalGenerateToken = require('../../../../utils/generateToken').default;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../../../../utils/generateToken').default = generateTokenMock;

    const result = await Register(mockEmail, mockName, mockPassword);

    expect(UserRepository.findByEmail).toHaveBeenCalledWith(mockEmail);
    expect(Crypt.hash).toHaveBeenCalledWith(mockPassword);
    expect(UserRepository.create).toHaveBeenCalledWith({
      name: mockName,
      email: mockEmail,
      password: 'hashedPassword',
    });
    expect(generateTokenMock).toHaveBeenCalledWith('user-id', ACCESS_TOKEN_EXPIRATION);
    expect(generateTokenMock).toHaveBeenCalledWith('user-id', REFRESH_TOKEN_EXPIRATION);
    expect(result).toEqual({
      user: {
        id: 'user-id',
        name: mockName,
        email: mockEmail,
        password: '',
      },
      token: {
        access: mockAccessToken,
        refresh: mockRefreshToken,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../../../../utils/generateToken').default = originalGenerateToken;
  });

  it('should throw an error if the email is already in use', async () => {
    const mockEmail = 'test@example.com';
    const mockName = 'Test User';
    const mockPassword = 'password123';

    UserRepository.findByEmail = jest.fn<() => Promise<TUser>>().mockResolvedValue({
      id: 'existing-user-id',
      name: 'Existing User',
      email: mockEmail,
      password: 'hashedPassword',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await expect(Register(mockEmail, mockName, mockPassword)).rejects.toThrowError(
      'Este email já está em uso!'
    );

    expect(UserRepository.findByEmail).toHaveBeenCalledWith(mockEmail);
    expect(Crypt.hash).not.toHaveBeenCalled();
    expect(UserRepository.create).not.toHaveBeenCalled();
  });
});
