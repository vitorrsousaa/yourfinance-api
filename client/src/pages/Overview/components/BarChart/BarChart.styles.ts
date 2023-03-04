import styled from 'styled-components';

export const StylesBarChart = styled.section`
  background: ${({ theme }) => theme.colors.black[900]};
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;

  .header-bar-chart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white[100]};
    }
  }
`;
