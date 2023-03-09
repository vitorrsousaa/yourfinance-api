import { Transaction } from '../../../types/Transaction';
import TableContent from '../TableContent';
import { StyledTable } from './Table.styles';

export interface TableViewProps {
  transactions: Transaction[];
  onClickRow: (id: string) => void;
}

export function TableView(props: TableViewProps) {
  const { transactions, onClickRow } = props;
  return (
    <StyledTable>
      <div className="header-table">
        <strong>Modalidade</strong>
        <strong>Descrição</strong>
        <strong>Valor</strong>
        <strong>Data</strong>
        <strong>Tipo</strong>
      </div>
      {transactions.map((transaction) => (
        <TableContent
          transaction={transaction}
          key={`${transaction._id}_${transaction.description}`}
        />
      ))}
    </StyledTable>
  );
}
