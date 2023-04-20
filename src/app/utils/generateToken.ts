import authConfig from '../../config/auth.json';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export default function generateToken(
  id: mongoose.Types.ObjectId,
  duration: number
) {
  return jwt.sign({ id: id.toString() }, authConfig.secret, {
    expiresIn: duration,
  });
}
