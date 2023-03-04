import { Transaction } from '../../../types/Transaction';
import formatAmount from '../../../utils/formatAmount';
import { formatDate } from '../../../utils/formatDate';
import { StyledTable } from './Table.styles';

export interface TableViewProps {
  transactions: Transaction[];
}

export function TableView({ transactions }: TableViewProps) {
  return (
    <StyledTable>
      <div className="header-table">
        <strong>Modalidade</strong>
        <strong>Descrição</strong>
        <strong>Valor</strong>
        <strong>Data</strong>
        <strong>Tipo</strong>
      </div>
      {transactions.map((transaction) => {
        const {
          _id,
          modality,
          description,
          amount,
          createdAt,
          type,
          category,
        } = transaction;

        return (
          <div key={_id}>
            <small>{modality.name}</small>
            <small>{description}</small>
            <small className={category.toLocaleLowerCase()}>
              {`
                ${category === 'Despesas' ? '-' : ''} ${formatAmount(amount)}
              `}
            </small>
            <small>{formatDate(createdAt)}</small>
            <small>{type}</small>
          </div>
        );
      })}
    </StyledTable>
  );
}
