import styled from 'styled-components';

export interface BaseLoaderProps {
  size?: string;
}

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(246, 245, 252, 0.85);
`;

export const BaseLoader = styled.div<BaseLoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;

  .loader {
    width: ${({ size }) => (size ? size : '5rem')};
    height: ${({ size }) => (size ? size : '5rem')};
    border: 1rem solid var(--gray-200);
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
