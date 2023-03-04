import { Transaction } from '../../types/Transaction';
import Button from '../Button';
import { StyledLastTransactions } from './LastTransactions.styles';
import Table from './Table';

export interface LastTransactionsViewProps {
  transactions: Transaction[];
  subtitle?: boolean;
  hasButton?: boolean;
  onSelectedButton?: () => void;
}

export function LastTransactionsView(props: LastTransactionsViewProps) {
  const { transactions, subtitle, hasButton, onSelectedButton } = props;
  return (
    <StyledLastTransactions>
      <header>
        <div>
          <h1>Histórico de Transações</h1>
          {subtitle && <small>Visualize todas as suas transações</small>}
        </div>
        {hasButton && (
          <Button variant="primary" onClick={onSelectedButton}>
            Cadastrar nova transação
          </Button>
        )}
      </header>
      <Table transactions={transactions} />
    </StyledLastTransactions>
  );
}
