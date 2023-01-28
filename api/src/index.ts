import express from 'express';
import AuthController from './controllers/authController';
import connect from './database/connect';
import authValidate from './middlewares/auth';

connect();

const app = express();

const router = express.Router();

const port = 3001;

app.use(express.json());

app.use(router);

router.post('/auth/register', AuthController.register);
router.post('/auth/authenticate', AuthController.authenticate);

router.use(authValidate);

router.get('/projects', (req, res) => {
  res.send({ ok: true, id: req.user.id });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
