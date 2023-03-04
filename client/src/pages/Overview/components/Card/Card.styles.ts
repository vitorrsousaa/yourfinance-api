import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  gap: 0.75rem;
  width: 13.75rem;

  border: 0.125rem solid ${({ theme }) => theme.colors.black[200]};
  border-radius: 0.5rem;

  .header-card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.black[600]};
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.25rem 0.375rem;
      gap: 0.25rem;
      font-weight: 500;
      font-size: 0.75rem;
      background: ${({ theme }) => theme.colors.white[200]};
      border-radius: 0.75rem;

      &.income {
        color: ${({ theme }) => theme.colors.green[500]};
      }

      &.outcome {
        color: ${({ theme }) => theme.colors.red[300]};
      }
    }
  }

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
  }

  small {
    font-size: 0.75rem;

    color: ${({ theme }) => theme.colors.black[600]};
  }
`;
