import styled from 'styled-components';

export const StyledNoData = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  max-width: 18.75rem;

  @media (max-width: 450px) {
    width: 100%;

    img {
      width: 35vw;
    }
  }
`;
