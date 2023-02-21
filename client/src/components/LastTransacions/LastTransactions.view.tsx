import { Transaction } from '../../types/Transaction';

import formatAmount from '../../utils/formatAmount';
import { formatDate } from '../../utils/formatDate';

import Ballon from '../Ballon';

import { BaseLastTransaction } from './LastTransactions.styles';

export interface LastTransactionsViewProps
  extends Omit<Transaction, '__v' | '_id' | 'user' | 'modality' | 'type'> {
  icon: string;
}

export function LastTransactionsView({
  category,
  icon,
  description,
  amount,
  createdAt,
}: LastTransactionsViewProps) {
  return (
    <BaseLastTransaction category={category}>
      <div className="container">
        <Ballon>{icon}</Ballon>
        <div className="content">
          <strong>{category}</strong>
          <small>{description}</small>
          <small>{formatDate(createdAt)}</small>
        </div>
      </div>
      <strong className="amount">{formatAmount(amount)}</strong>
    </BaseLastTransaction>
  );
}
