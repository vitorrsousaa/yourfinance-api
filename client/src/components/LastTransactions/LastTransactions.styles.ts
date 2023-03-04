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

  @media screen and (max-width: 350px) {
    padding: 0.5rem;
    h1 {
      font-size: 1rem;
    }
  }
`;
