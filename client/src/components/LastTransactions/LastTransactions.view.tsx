import { StyledLastTransactions } from './LastTransactions.styles';

export interface LastTransactionsViewProps {}

export function LastTransactionsView({}: LastTransactionsViewProps) {
  return (
    <StyledLastTransactions>
      <small>Last Transactions</small>
    </StyledLastTransactions>
  );
}
