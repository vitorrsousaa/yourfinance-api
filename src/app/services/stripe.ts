import * as dotenv from 'dotenv';
import { Stripe } from 'stripe';
dotenv.config();

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY : '',
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Aion',
      version: '0.1.0',
    },
  }
);

export default stripe;
