import styled from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  error: boolean;
}

export const Container = styled.label<ContainerProps>`
  height: 2rem;

  display: flex;
  align-items: center;

  border-bottom: solid 2px;
  border-color: ${({ isFocus, error }) =>
    error
      ? 'var(--error-900)'
      : isFocus
      ? 'var(--blue-900)'
      : ' var(--black-800)'};

  svg {
    color: yellow;
  }

  input {
    border: none;
    background: transparent;
    font-size: 1rem;
    color: ${({ isFocus, error }) =>
      error
        ? 'var(--error-900)'
        : isFocus
        ? 'var(--blue-900)'
        : ' var(--black-800)'};
    width: 100%;
    height: 100%;

    &::placeholder {
      color: ${({ isFocus, error }) =>
        error
          ? 'var(--error-900)'
          : isFocus
          ? 'var(--blue-900)'
          : ' var(--black-800)'};
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  small {
    color: var(--error-900);
    font-size: 0.75rem;
  }
`;
