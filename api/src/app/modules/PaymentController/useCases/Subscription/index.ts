import AppError from '../../../../error';
import stripe from '../../../../services/stripe';
import UserRepository from '../../../User/repositories/implementations/UserRepository';

export default async function Subscription(id: string) {
  const user = await UserRepository.findById(id);
  if (!user) {
    throw new AppError('User not found!', 404);
  }

  const customer = await stripe.customers.list({ email: user.email });

  return customer;
}
