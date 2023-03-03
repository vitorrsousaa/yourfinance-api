import { Transaction } from '../../types/Transaction';
import { StyledLastTransactions } from './LastTransactions.styles';
import Table from './Table';

export interface LastTransactionsViewProps {
  transactions: Transaction[];
}

export function LastTransactionsView({
  transactions,
}: LastTransactionsViewProps) {
  return (
    <StyledLastTransactions>
      <header>
        <h1>Histórico de Transações</h1>
      </header>
      <Table transactions={transactions} />
    </StyledLastTransactions>
  );
}
