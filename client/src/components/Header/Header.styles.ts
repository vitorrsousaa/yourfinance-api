import styled from 'styled-components';

export const BaseHeader = styled.header`
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
`;
