import styled from 'styled-components';

interface ContainerProps {
  size?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;

  .loader {
    width: ${({ size }) => (size ? size : '2rem')};
    height: ${({ size }) => (size ? size : '2rem')};
    border: 6px solid var(--gray-200);
    border-top-color: var(--blue-900);
    border-radius: 100%;

    animation: is-rotating 1s infinite;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
