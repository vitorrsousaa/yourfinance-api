import { useEffect } from 'react';
import { TableView, TableViewProps } from './Table.view';

interface TableProps extends Omit<TableViewProps, ''> {}

export function Table({ ...props }: TableProps) {
  useEffect(() => {
    fetch('http://localhost:3001/modality')
      .then((response) => response.json())
      .then(console.log);
  }, []);
  return <TableView {...props} />;
}
