import Header from '../../components/Header';
import LastTransactions from '../../components/LastTransactions';

import { Transaction } from '../../types/Transaction';
import { StyledTransacions } from './Transactions.styles';

interface TransactionsViewProps {
  transactions: Transaction[];
  handleCreateModalOpen: () => void;
  onSelectedDeleteTransaction: (id: string) => void;
}

export function TransactionsView(props: TransactionsViewProps) {
  const { transactions, handleCreateModalOpen, onSelectedDeleteTransaction } =
    props;

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
        onSelectedDeleteTransaction={onSelectedDeleteTransaction}
      />
    </StyledTransacions>
  );
}
