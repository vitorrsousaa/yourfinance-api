import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth.json';

export default function generateToken(
  id: string,
  duration: number
) {
  return jwt.sign({ id: id.toString() }, authConfig.secret, {
    expiresIn: duration,
  });
}
