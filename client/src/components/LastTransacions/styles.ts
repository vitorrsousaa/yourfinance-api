import styled from 'styled-components';
import { Transaction } from '../../types/Transaction';

interface LastTransactionsContainer extends Pick<Transaction, 'category'> {}

export const LastTransactionsContainer = styled.div<LastTransactionsContainer>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    small {
      color: ${({ theme }) => theme.colors.black[500]};
      font-size: 0.75rem;
    }

    strong {
      color: ${({ theme }) => theme.colors.black[900]};
      font-size: 0.75rem;
    }
  }

  .amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 8px;
    background: ${({ category }) =>
      category === 'Despesas' ? 'rgba(255,38,6,0.3)' : 'rgba(57,91,252,0.3)'};

    border-radius: 8px;

    color: ${({ theme }) => theme.colors.black[800]};
  }

  & + & {
    margin-top: 2rem;
  }
`;
