import styled from 'styled-components';

import { ButtonThemeProps } from './theme/types';

export type variants = 'primary' | 'secondary' | 'empty' | 'delete';

export interface BaseButtonProps {
  variant: variants;
  disabled?: boolean;
  customTheme: ButtonThemeProps;
}

export const BaseButton = styled.button<BaseButtonProps>`
  width: 100%;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.5s;

  background: ${({ customTheme, variant }) =>
    customTheme[variant].initial.background};

  color: ${({ customTheme, variant }) => customTheme[variant].initial.color};

  border: ${({ customTheme, variant }) => customTheme[variant].initial.border};

  &:hover {
    background: ${({ customTheme, variant }) =>
      customTheme[variant].hover.background};

    color: ${({ customTheme, variant }) => customTheme[variant].hover.color};

    border: ${({ customTheme, variant }) => customTheme[variant].hover.border};
  }

  &:active {
    background: ${({ customTheme, variant }) =>
      customTheme[variant].active.background};

    color: ${({ customTheme, variant }) => customTheme[variant].active.color};

    border: ${({ customTheme, variant }) => customTheme[variant].active.border};
  }

  &:disabled {
    background: ${({ customTheme, variant }) =>
      customTheme[variant].disabled.background};

    color: ${({ customTheme, variant }) => customTheme[variant].disabled.color};

    border: ${({ customTheme, variant }) =>
      customTheme[variant].disabled.border};
  }
`;
