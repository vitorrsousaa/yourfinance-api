import { Transaction } from '../../types/Transaction';
import formatAmount from '../../utils/formatAmount';
import formatDate from '../../utils/formatDate';
import Ballon from '../Ballon';
import { LastTransactionsContainer } from './styles';

interface LastTransactionsProps
  extends Omit<Transaction, '__v' | '_id' | 'user' | 'modality' | 'type'> {
  icon: string;
}

export default function LastTransactions({
  category,
  icon,
  description,
  amount,
  createdAt,
}: LastTransactionsProps) {
  return (
    <LastTransactionsContainer category={category}>
      <div className="container">
        <Ballon>{icon}</Ballon>
        <div className="content">
          <strong>{category}</strong>
          <small>{description}</small>
          <small>{formatDate(createdAt)}</small>
        </div>
      </div>
      <strong className="amount">{formatAmount(amount)}</strong>
    </LastTransactionsContainer>
  );
}
