import styled from 'styled-components';

export const OverviewStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .header-overview {
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
`;
