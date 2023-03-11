import styled from 'styled-components';

export const StyledLastTransactions = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  border: 0.125rem solid ${({ theme }) => theme.colors.black[200]};
  border-radius: 0.5rem;

  width: 100%;
  padding: 1rem;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {
      font-weight: 500;
    }
  }

  button {
    max-width: 20rem;
  }

  @media screen and (max-width: 770px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 450px) {
    padding: 0.5rem;
    h1 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 380px) {
    header {
      button {
        font-size: 0.75rem;
      }
      small {
        font-size: 0.65rem;
      }
    }
  }
`;
