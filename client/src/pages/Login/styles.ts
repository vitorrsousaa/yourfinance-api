import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100vh;

  .login-error {
    color: ${({ theme }) => theme.colors.error[900]};
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
    max-width: 360px;
    width: 100%;

    h1 {
      font-weight: 400;
      font-size: 1.5rem;
    }
  }

  a {
    strong {
      color: ${({ theme }) => theme.colors.green[500]};
    }
  }
`;
