import { Transaction } from '../../../types/Transaction';
import { TableView } from './Table.view';

interface TableProps {
  transactions: Transaction[];
  onSelectedDeleteTransaction?: (id: string) => void;
  showPopover: boolean;
}

export function Table({ onSelectedDeleteTransaction, ...props }: TableProps) {
  function handleSelectedDeleteTransaction(id: string) {
    if (typeof onSelectedDeleteTransaction === 'function') {
      onSelectedDeleteTransaction(id);
    }
  }
  return (
    <TableView
      onSelectedDeleteTransaction={handleSelectedDeleteTransaction}
      {...props}
    />
  );
}
