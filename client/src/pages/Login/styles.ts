import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    max-width: 360px;
    width: 100%;

    h1 {
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
`;
