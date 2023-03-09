import { Transaction } from '../../../types/Transaction';
import formatAmount from '../../../utils/formatAmount';
import { formatDate } from '../../../utils/formatDate';
import { StylesTableContent } from './TableContent.styles';
import menu from '../../../assets/icons/menu.svg';
import Popover from '../Popover';
import { useState } from 'react';

export interface TableContentViewProps {
  transaction: Transaction;
}

export function TableContentView(props: TableContentViewProps) {
  const { transaction } = props;
  const { modality, description, category, amount, createdAt, type } =
    transaction;

  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  return (
    <>
      <StylesTableContent>
        <small>{modality.name}</small>
        <small>{description}</small>
        <small className={category.toLocaleLowerCase()}>
          {`${category === 'Despesas' ? '-' : ''} ${formatAmount(amount)}`}
        </small>
        <small>{formatDate(createdAt)}</small>
        <small>{type}</small>
        <button
          className="menu-button-transaction"
          onClick={() => setPopoverIsOpen(!popoverIsOpen)}
        >
          <img src={menu} alt="menu-item" />
          <Popover
            isOpen={popoverIsOpen}
            onClose={() => setPopoverIsOpen(false)}
          />
        </button>
      </StylesTableContent>
    </>
  );
}
