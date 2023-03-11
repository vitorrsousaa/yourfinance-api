import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BaseModal = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 88vh;
  padding: 2rem;
  gap: 0.75rem;
  width: 35rem;

  background: ${({ theme }) => theme.colors.white[100]};
  border-radius: 0.5rem;

  small {
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black[600]};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    button {
      background: transparent;
      border: none;
    }

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
