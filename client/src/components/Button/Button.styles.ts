import styled from 'styled-components';
import { variants } from './Button.view';
import { ButtonThemeProps } from './theme/types';

interface BaseButtonProps {
  variant: variants;
  disabled?: boolean;
  customTheme: ButtonThemeProps;
}

export const BaseButton = styled.button<BaseButtonProps>`
  width: 100%;
  height: 3.375rem;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;

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
