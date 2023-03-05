import { Transaction } from '../../../types/Transaction';
import { TableView } from './Table.view';

interface TableProps {
  transactions: Transaction[];
  onRowClick?: (id: string) => void;
}

export function Table({ onRowClick, ...props }: TableProps) {
  function handleRowClick(id: string) {
    if (typeof onRowClick === 'function') {
      onRowClick(id);
    }
  }
  return <TableView onClickRow={handleRowClick} {...props} />;
}
