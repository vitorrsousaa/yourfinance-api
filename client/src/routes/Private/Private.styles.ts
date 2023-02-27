import styled from 'styled-components';

export const PrivateStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background: red;

  .content-private {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;

    background: orange;
  }
`;
