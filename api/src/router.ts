import { Request, Response, Router } from 'express';
import AuthController from './app/controllers/authController';
import ModalityController from './app/controllers/ModalityController';
import TransactionController from './app/controllers/TransactionController';
import authValidate from './app/middlewares/auth';
import UsersRepository from './app/repositories/UsersRepository';
import { stripe } from './services/stripe';

export const router = Router();

router.post('/modality', ModalityController.store);
router.get('/modality', ModalityController.index);

router.post('/auth/register', AuthController.register);
router.post('/auth/authenticate', AuthController.authenticate);

router.use(authValidate);

router.post('/create-checkout-session', async (req: Request, res: Response) => {
  const prices = await stripe.prices.list();
  const priceId = prices.data[0].id;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: 'http://localhost:5173/?success=true',
    cancel_url: 'http://localhost:5173/?canceled=true',
  });

  const { amount_total, cancel_url, success_url, url } = session;

  res.send({ amount_total, cancel_url, success_url, url });
});

router.get('/subscription', async (req: Request, res: Response) => {
  const { id } = req.user;

  const user = await UsersRepository.findById(id);

  if (!id) {
    return res.status(500).send({ error: 'User not found' });
  }

  const customer = await stripe.customers.list({ email: user?.email });

  res.sendStatus(200);
});

router.get('/auth', (req, res) => res.send({ ok: true }));

router.get('/transactions', TransactionController.index);
router.post('/transactions', TransactionController.store);
router.delete('/transactions/:transactionId', TransactionController.delete);

router.get('/projects', (req, res) => {
  res.send({ ok: true, id: req.user.id });
});
