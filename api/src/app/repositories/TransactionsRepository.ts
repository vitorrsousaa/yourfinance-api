import Transaction from '../models/Transaction';

interface TransactionProps {
  description: string;
  category: 'Receita' | 'Despesa';
  type: 'Fixo' | 'Variável';
  modality: string;
  amount: number;
}

class TransactionsRepository {
  findAll() {
    return Transaction.find().populate('modality');
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
}

export default new TransactionsRepository();
