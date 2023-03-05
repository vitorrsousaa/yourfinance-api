import styled, { css } from 'styled-components';
import { InputThemeProps } from './theme/types';

export interface InputStyledProps {
  isFocus: boolean;
  error?: string;
  customTheme: InputThemeProps;
}

export const InputStyled = styled.div<InputStyledProps>`
  display: flex;
  flex-direction: column;

  width: 100%;

  small {
    color: ${({ customTheme }) => customTheme.error.color};
    font-size: 0.75rem;
  }

  label {
    display: flex;
    align-items: center;

    border: solid 1px transparent;
    border-radius: 4px;
    padding: 0.65rem;
    background: ${({ theme }) => theme.colors.white[200]};

    transition: border-color 0.2s ease-in;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    input {
      border: none;
      background: transparent;
      font-size: 1rem;

      width: 100%;
      height: 100%;

      svg {
        color: ${({ customTheme }) => customTheme.initial.color};
      }

      &:disabled {
        color: ${({ customTheme }) => customTheme.disabled.color};
        svg {
          color: ${({ customTheme }) => customTheme.disabled.color};
        }
      }
    }

    ${({ isFocus, error, customTheme }) => {
      if (error) {
        return css`
          border-color: ${customTheme.error.color};

          svg {
            color: ${customTheme.error.color};
          }

          input {
            color: ${customTheme.error.color};

            &::placeholder {
              color: ${customTheme.error.color};
            }
          }
        `;
      }
      if (isFocus) {
        return css`
          border-color: ${customTheme.focus.color};

          svg {
            color: ${customTheme.focus.color};
          }

          input {
            color: ${customTheme.focus.color};

            &::placeholder {
              color: ${customTheme.focus.color};
            }
          }
        `;
      }

      return css`
        input {
          color: ${customTheme.initial.color};

          &::placeholder {
            color: ${customTheme.initial.color};
          }

          &[disabled] {
          }
        }
      `;
    }}
  }
`;
