import styled from 'styled-components';

export const AreaChart = styled.div`
  background: ${({ theme }) => theme.colors.black[900]};
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;

  .header-area-chart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    strong {
      font-size: ${({ theme }) => theme.sizes[24]};
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white[100]};
    }
  }

  @media screen and (max-width: 450px) {
    .header-area-chart {
      strong {
        font-size: ${({ theme }) => theme.sizes[12]};
      }
    }
  }
`;
