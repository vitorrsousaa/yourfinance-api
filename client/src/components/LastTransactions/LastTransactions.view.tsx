import { Transaction } from '../../types/Transaction';
import Button from '../Button';
import { StyledLastTransactions } from './LastTransactions.styles';
import Table from './Table';

export interface LastTransactionsViewProps {
  transactions: Transaction[];
  subtitle?: boolean;
  onSelectedButton?: () => void;
  onSelectedDeleteTransaction?: (id: string) => void;
}

export function LastTransactionsView(props: LastTransactionsViewProps) {
  const {
    transactions,
    subtitle,
    onSelectedButton,
    onSelectedDeleteTransaction,
  } = props;
  return (
    <StyledLastTransactions>
      <header>
        <div>
          <h1>Histórico de Transações</h1>
          {subtitle && <small>Visualize todas as suas transações</small>}
        </div>
        {Boolean(onSelectedButton) && (
          <Button variant="primary" onClick={onSelectedButton}>
            Cadastrar nova transação
          </Button>
        )}
      </header>
      <Table
        transactions={transactions}
        showPopover={Boolean(onSelectedButton)}
        onSelectedDeleteTransaction={onSelectedDeleteTransaction}
      />
    </StyledLastTransactions>
  );
}
