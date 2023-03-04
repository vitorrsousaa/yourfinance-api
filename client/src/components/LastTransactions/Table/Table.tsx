import { TableView, TableViewProps } from './Table.view';

interface TableProps extends Omit<TableViewProps, ''> {}

export function Table({ ...props }: TableProps) {
  return <TableView {...props} />;
}
