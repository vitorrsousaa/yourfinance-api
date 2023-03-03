import styled from 'styled-components';

export const OverviewStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  .header-overview {
    width: 100%;
    h1 {
      font-weight: 500;
    }

    small {
      color: ${({ theme }) => theme.colors.black[600]};
      margin-top: 0.625rem;

      strong {
        font-weight: 500;
      }
    }
  }

  .container-cards-chart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 1.5rem;

    .container-cards {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  .container-transactions {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  @media (max-width: 740px) {
    .container-cards-chart {
      flex-direction: column;
    }
  }
`;
