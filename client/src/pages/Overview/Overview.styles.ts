import styled from 'styled-components';

export const OverviewStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

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
