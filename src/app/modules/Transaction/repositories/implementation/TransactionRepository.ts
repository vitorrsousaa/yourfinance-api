import { Types } from 'mongoose';
import Transaction, { TTransaction } from '../../model';
import { ITransactionRepository } from '../ITransactionRepository';

interface TransactionProps {
  description: string;
  category: 'Receita' | 'Despesa';
  type: 'Fixo' | 'Variável';
  modality: string;
  amount: number;
}

class TransactionRepository implements ITransactionRepository {
  async findAllByIdUser(id: string): Promise<TTransaction[]> {
    return Transaction.find()
      .where('user')
      .equals(id)
      .populate('modality')
      .populate('category')
      .sort({ date: -1 });
  }

  async findById(id: string): Promise<TTransaction | null> {
    return Transaction.findById(id).populate('modality');
  }

  async findByPeriod(
    id: string,
    month: string
  ): Promise<TTransaction[] | null> {
    const endDate = new Date();

    const year = endDate.getFullYear();
    const lastMonths = endDate.getMonth() - parseInt(month);
    const day = endDate.getDay();

    const startDate = new Date(year, lastMonths, day);

    return Transaction.find({ date: { $gte: startDate, $lte: endDate } })
      .where('user')
      .equals(id);
  }

  async create(
    description: string,
    category: Types.ObjectId,
    modality: Types.ObjectId,
    type: string,
    user: string,
    amount: number,
    date: Date
  ): Promise<TTransaction> {
    return Transaction.create({
      description,
      category,
      modality,
      type,
      user,
      amount,
      date,
    });
  }

  async delete(id: string): Promise<void | null> {
    return Transaction.findByIdAndDelete(id);
  }
}

export default new TransactionRepository();
