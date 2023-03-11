import styled from 'styled-components';

export const StylesTableContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0 0 0 1rem;
  height: 4rem;
  transition: all ease-in-out 0.2s;

  small {
    color: ${({ theme }) => theme.colors.black[600]};
    min-width: 150px;
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.black[200]};
  }

  small:nth-child(2) {
    width: 100%;
  }

  &:hover {
    opacity: 0.65;
  }

  .menu-button-transaction {
    background: transparent;
    border: none;
    width: ${({ theme }) => theme.sizes[24]};
    height: ${({ theme }) => theme.sizes[24]};
    /* transition: all ease-in-out 0.2s;

    &:hover {
      transform: scale(1.2);
    } */
  }

  .receitas {
    color: ${({ theme }) => theme.colors.green[500]};
    font-weight: 500;
  }

  .despesas {
    color: ${({ theme }) => theme.colors.red[400]};
    font-weight: 500;
  }

  @media screen and (max-width: 380px) {
    .menu-button-transaction {
      display: none;
    }
  }
`;
