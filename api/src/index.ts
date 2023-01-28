import express from 'express';
import AuthController from './controllers/authController';
import connect from './database/connect';

connect();

const app = express();

const router = express.Router();

const port = 3001;

app.use(express.json());

app.use(router);

router.post('/auth/register', AuthController.register);
router.post('/auth/authenticate', AuthController.authenticate);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
