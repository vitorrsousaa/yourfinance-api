import styled from 'styled-components';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 0 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black[200]};
  }

  .header-table {
    height: 3rem;

    strong {
      font-weight: 700;
      font-size: 0.875rem;
    }
  }

  .header-table {
    strong:nth-child(2) {
      background: red;
      width: 100%;
    }
  }

  div {
    small:nth-child(2) {
      background: blue;
      width: 100%;
    }
  }
`;
