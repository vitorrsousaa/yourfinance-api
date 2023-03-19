import Transaction from '../models/Transaction';

interface TransactionProps {
  description: string;
  category: 'Receita' | 'Despesa';
  type: 'Fixo' | 'Variável';
  modality: string;
  amount: number;
}

class TransactionsRepository {
  findAll(id: string) {
    return Transaction.find()
      .where('user')
      .equals(id)
      .populate('modality')
      .sort({ createdAt: -1 });
  }

  findById(id: string) {
    return Transaction.findById(id).populate('modality');
  }

  findByPeriod(id: string, month: string) {
    const endDate = new Date();

    const year = endDate.getFullYear();
    const lastMonths = endDate.getMonth() - parseInt(month);
    const day = endDate.getDay();

    const startDate = new Date(year, lastMonths, day);

    return Transaction.find({ createdAt: { $gte: startDate, $lte: endDate } })
      .where('user')
      .equals(id);
  }

  create(
    description: string,
    category: string,
    modality: string,
    type: string,
    user: string,
    amount: number,
    createdAt: string
  ) {
    return Transaction.create({
      description,
      category,
      modality,
      type,
      user,
      amount,
      createdAt,
    });
  }

  delete(transactionId: string) {
    return Transaction.findByIdAndDelete(transactionId);
  }
}

export default new TransactionsRepository();
