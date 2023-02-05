import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3.5rem 2rem;
  gap: 2rem;
  flex: 1;

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .containerName {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h1 {
        font-weight: 400;
      }
    }

    small {
      font-weight: 700;
      color: var(--black-500);
    }

    button {
      max-width: 22.5rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;

    border: solid 1px var(--gray-200);
    border-radius: 12px;

    .sectionHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      h3 {
        color: var(--black-500);
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
`;

export const IconTable = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  /* White */

  background: var(--white-200);
  /* shadow light */

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
  border-radius: 100%;
`;

export const TableTransactions = styled.table`
  border: solid 1px var(--gray-200);
  border-collapse: collapse;
  font-size: 0.875rem;

  tr {
    text-align: left;
    border: solid 1px var(--gray-200);
  }

  td {
    height: 4rem;
    padding: 0.625rem 1rem;
  }

  thead {
    background-color: var(--white-300);

    th {
      padding: 0.625rem 1rem;
      color: var(--black-800);
      font-weight: 700;
      font-size: 0.875rem;
      height: 3rem;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--black-800);

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

interface PaginationItemProps {
  isSelected: boolean;
}

export const PaginationItem = styled.button<PaginationItemProps>`
  background: ${({ isSelected }) =>
    !isSelected ? 'var(--blue-900)' : 'transparent'};
  border-radius: 4px;
  border: solid 2px;
  border-color: ${({ isSelected }) =>
    !isSelected ? 'var(--blue-900)' : 'var(--gray-700)'};

  width: 1.5rem;
  height: 1.5rem;

  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ isSelected }) =>
    !isSelected ? 'var(--white-100)' : 'var(--gray-700)'};

  :hover {
    transition: background-color 0.7s all;
    background: var(--gray-200);
    border: solid 2px var(--gray-700);
    color: var(--gray-700);
  }
`;
