import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 3.375rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;

  background: ${({ variant, disabled }) =>
    disabled
      ? variant === 'primary'
        ? 'var(--gray-200)'
        : 'var(--white-100)'
      : variant === 'primary'
      ? 'var(--blue-900)'
      : 'var(--white-100)'};

  color: ${({ variant, disabled }) =>
    disabled
      ? variant === 'primary'
        ? 'var(--white-100)'
        : 'var(--gray-200)'
      : variant === 'primary'
      ? 'var(--white-100)'
      : 'var(--blue-900)'};

  border: ${({ variant, disabled }) =>
    disabled
      ? variant === 'primary'
        ? 'none'
        : 'solid 2px var(--gray-200)'
      : variant === 'primary'
      ? 'none'
      : 'solid 2px var(--blue-900)'};
`;
