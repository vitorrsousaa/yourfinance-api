import styled from 'styled-components';

export const UnderConstruction = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
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
