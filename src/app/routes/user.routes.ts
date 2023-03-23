import { Router } from 'express';
import UserController from '../modules/User/controller';

const userRoutes = Router();

userRoutes.patch('/updatePassword', UserController.updatePassword);

export default userRoutes;
