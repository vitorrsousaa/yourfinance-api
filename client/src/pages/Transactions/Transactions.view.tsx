import Header from '../../components/Header';
import LastTransactions from '../../components/LastTransactions';

import { Transaction } from '../../types/Transaction';
import { StyledTransacions } from './Transactions.styles';

interface TransactionsViewProps {
  transactions: Transaction[];
  handleCreateModalOpen: () => void;
  onDeleteTransaction: (id: string) => void;
}

export function TransactionsView(props: TransactionsViewProps) {
  const { transactions, handleCreateModalOpen, onDeleteTransaction } = props;
  return (
    <StyledTransacions>
      <Header
        page="Transações"
        subtitle="Visualize todas as transações anteriores."
      />

      <LastTransactions
        transactions={transactions}
        subtitle={true}
        onSelectedButton={handleCreateModalOpen}
        onDeleteTransaction={onDeleteTransaction}
      />
    </StyledTransacions>
  );
}
