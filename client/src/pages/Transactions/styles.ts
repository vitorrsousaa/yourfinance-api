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
