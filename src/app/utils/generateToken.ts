import authConfig from '../../config/auth.json';
import jwt from 'jsonwebtoken';

export default function generateToken(
  id: string,
  duration: number
) {
  return jwt.sign({ id: id.toString() }, authConfig.secret, {
    expiresIn: duration,
  });
}
