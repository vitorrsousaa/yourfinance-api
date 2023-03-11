import { Transaction } from '../../../types/Transaction';
import TableContent from '../TableContent';
import { StyledTable } from './Table.styles';

export interface TableViewProps {
  transactions: Transaction[];
  onSelectedDeleteTransaction: (id: string) => void;
  showPopover: boolean;
}

export function TableView(props: TableViewProps) {
  const { transactions, onSelectedDeleteTransaction, showPopover } = props;
  return (
    <StyledTable>
      <div className={`header-table ${showPopover && 'show-popover'}`}>
        <strong>Modalidade</strong>
        <strong>Descrição</strong>
        <strong>Valor</strong>
        <strong>Data</strong>
        <strong>Tipo</strong>
        {showPopover && <div></div>}
      </div>
      {transactions.map((transaction) => (
        <TableContent
          transaction={transaction}
          key={`${transaction._id}_${transaction.description}`}
          onSelectedDelete={onSelectedDeleteTransaction}
          showPopover={showPopover}
        />
      ))}
    </StyledTable>
  );
}
