import { StyledLastTransactions } from './LastTransactions.styles';
import Table from './Table';

export interface LastTransactionsViewProps {}

export function LastTransactionsView({}: LastTransactionsViewProps) {
  return (
    <StyledLastTransactions>
      <header>
        <h1>Histórico de Transações</h1>
      </header>
      <Table />
    </StyledLastTransactions>
  );
}
