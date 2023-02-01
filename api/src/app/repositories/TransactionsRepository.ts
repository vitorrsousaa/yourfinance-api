import Transaction from '../models/Transaction';

interface TransactionProps {
  description: string;
  category: 'Receita' | 'Despesa';
  type: 'Fixo' | 'Variável';
  modality: string;
  value: number;
}

class TransactionsRepository {
  findAll() {
    return Transaction.find();
  }

  create(
    description: string,
    category: string,
    modality: string,
    type: string,
    user: string,
    value: number
  ) {
    return Transaction.create({
      description,
      category,
      modality,
      type,
      user,
      value,
    });
  }
}

export default new TransactionsRepository();
