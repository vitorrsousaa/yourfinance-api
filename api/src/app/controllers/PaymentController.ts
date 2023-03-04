import { Request, Response } from 'express';
import { stripe } from '../../services/stripe';
import UsersRepository from '../repositories/UsersRepository';

class PaymentController {
  async createCheckoutSession(req: Request, res: Response) {
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
  }

  async subscription(req: Request, res: Response) {
    const { id } = req.user;

    const user = await UsersRepository.findById(id);

    if (!id) {
      return res.status(500).send({ error: 'User not found' });
    }

    const customer = await stripe.customers.list({ email: user?.email });

    res.sendStatus(200);
  }
}

export default new PaymentController();
